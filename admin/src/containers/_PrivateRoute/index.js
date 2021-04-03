import React, { useState, Fragment, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import TopHeader from '../../components/TopHeader';
import SidebarMenu from '../../components/SidebarMenu';

import bgLayer from '../../images/layer.png';
import FooterArea from '../../components/FooterArea';
import { makeSelectRedirectUrl, makeSelectUser } from '../App/selectors';
import { setRedirectUrlAction } from '../App/actions';

const MainBody = styled.div`
  position: relative;
  z-index: 9;
  background: #f6f6f6;
  flex: 1;
  margin-top: 90px;
  margin-left: 240px;
  border-radius: 0 13px 0 13px;
  margin-right: 20px;
  overflow: hidden;
`;

const BgLayer = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 0;
  transform: scale(2);
`;
const PrivateRoute = props => {
  let showDashboard = true;
  const Component = props.component;
  props = { ...props, component: null };

  const [colupsMenu, setColupsMenu] = useState(false);
  const [state, setState] = useState({
    collapsable_menu: false,
  });

  const colupsMenuHandler = () => {
    setColupsMenu(!colupsMenu);
  };

  const permissions = JSON.parse(localStorage.getItem('permission_menus'));
  let redirect = null;
  if (!props.user) {
    const regex = /\?redirectUrl=([^&]*)/;
    const str = window.location.href;
    let url = null;

    if (regex.exec(str)) {
      url = regex.exec(str)[1];
    }
    props.setRedirectUrl(url);
    redirect = {
      pathname: `/login`,
      state: { from: props.location },
    };
    showDashboard = false;
  } else if (
    props.user.email_verification_status !== undefined &&
    props.user.email_verification_status === 0 &&
    props.user.status !== 1
  ) {
    if (props.location.pathname !== '/verify-email') {
      redirect = {
        pathname: `/verify-email`,
        state: { from: props.location },
      };
    }
    showDashboard = false;
  } else if (permissions && props.user.role_id === 3 && props.slug && !permissions[props.slug]) {
    redirect = {
      pathname: `/`,
    };
  }

  useEffect(() => {
    if (props.user) {
      const script = document.createElement('script');
      window.ZohoHCAsap =
        window.ZohoHCAsap ||
        function(a, b) {
          ZohoHCAsap[a] = b;
        };
      script.type = 'text/javascript';
      script.defer = true;
      script.src =
        'https://desk.zoho.eu/portal/api/web/inapp/48961000000331001?orgId=20070646564';
      document.getElementsByTagName('head')[0].appendChild(script);
    }
  }, []);

  if (showDashboard === false) {
    return (
      <Fragment>
        <Route
          {...props}
          render={props =>
            !redirect ? <Component {...props} /> : <Redirect to={redirect} />
          }
        />
      </Fragment>
    );
  }

  if (props.redirectUrl === null) {
    return (
      <div
        id="dashboard"
        className={`${
          colupsMenu ? 'mainContainer mainContainerColups' : 'mainContainer'
        } ${
          state.collapsable_menu
            ? 'mainContainer mainContainerColups'
            : 'mainContainer'
        }`}
      >
        <SidebarMenu
          user={props.user}
          colupsMenuHandler={colupsMenuHandler}
          colupsMenu={colupsMenu}
        />
        <TopHeader
          color={props.noHeaderMenu}
          title={props.title}
          icon={props.icon}
          colupsMenuHandler={colupsMenuHandler}
          colupsMenu={colupsMenu}
        />
        <MainBody>
          <Route
            {...props}
            render={props =>
              !redirect ? <Component {...props} /> : <Redirect to={redirect} />
            }
          />
        </MainBody>
        <BgLayer src={bgLayer} alt="bgLayer" />
        <FooterArea />
      </div>
    );
  }
  const redirectTo = props.redirectUrl;
  props.setRedirectUrl(null);
  return window.location.replace(redirectTo);
};

function mapDispatchToProps(dispatch) {
  return {
    setRedirectUrl: data => dispatch(setRedirectUrlAction(data)),
  };
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  redirectUrl: makeSelectRedirectUrl(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(PrivateRoute);
