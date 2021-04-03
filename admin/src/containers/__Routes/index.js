import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DashboardPage from 'containers/DashboardPage/Loadable';
import CoinWallets from 'containers/CoinWallets/Loadable';
import DepositCoins from 'containers/DepositCoins/Loadable';
import MyReferralTree from 'containers/MyReferralTree/Loadable';
import SecurityPage from 'containers/SecurityPage/Loadable';
import DepositHistory from 'containers/DepositHistory/Loadable';
import WithdrawalHistoryPage from 'containers/WithdrawalHistoryPage/Loadable';
import TransactionHistory from 'containers/TransactionHistory/Loadable';
import HistoryReport from 'containers/HistoryReport/Loadable';
// import SettingsPage from 'containers/SettingsPage/Loadable';
import SubAccount from 'containers/SubAccount/Loadable';
import SubAccountsActivityLog from 'containers/SubAccountsActivityLog/Loadable';
import MerchantActivityLog from 'containers/MerchantActivityLog/Loadable';
import MyProfile from 'containers/MyProfile/Loadable';
// import AddressBook from 'containers/AddressBook/Loadable';
import ApiKeysPage from 'containers/ApiKeysPage/Loadable';
import ApiKeysSettingsPage from 'containers/ApiKeysSettingsPage/Loadable';
// import Affiliate from 'containers/Affiliate/Loadable';
import AllBalances from 'containers/AllBalances/Loadable';
import CoinSettings from 'containers/CoinSettings/Loadable';
import LeaveFeedback from 'containers/LeaveFeedback/Loadable';
// import MyFeedback from 'containers/MyFeedback/Loadable';
import WithdrawalPage from 'containers/WithdrawalPage/Loadable';
import LockInVaultPage from 'containers/LockInVaultPage/Loadable';
import PaymentCoinPage from 'containers/PaymentCoinPage/Loadable';
import MakePaymentPage from 'containers/MakePaymentPage/Loadable';
import ConfirmPayment from 'containers/ConfirmPayment/Loadable';
import AccountSettings from 'containers/AccountSettings/Loadable';
import ApiKeysLog from 'containers/ApiKeysLog/Loadable';
import TimeOut from 'containers/TimeOut/Loadable';
import SimpleButtons from 'containers/SimpleButtons/Loadable';
import CryptoTools from 'containers/CryptoTools/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import EmailVerification from 'containers/EmailVerification/Loadable';
import ForgotPassword from 'containers/ForgotPassword/Loadable';
import ResetPassword from 'containers/ResetPassword/Loadable';
import SignUpPage from 'containers/SignUpPage/Loadable';
import FeedBackPage from 'containers/FeedBackPage/Loadable';
import InstantPaymentNotificationsPage from 'containers/InstantPaymentNotificationsPage/Loadable';
import HelpCollpayFees from 'containers/HelpCollpayFees/Loadable';
import SupportedListCryptocoins from 'containers/SupportedListCryptocoins/Loadable';
import FAQPage from 'containers/FAQPage/Loadable';
import MaintenancePage from 'containers/MaintenancePage/Loadable';
import HelpPrivacyPolicy from 'containers/HelpPrivacyPolicy/Loadable';
import TermsOfService from 'containers/TermsOfService/Loadable';
import EroorPage from 'containers/EroorPage/Loadable';
import SdkPage from 'containers/SdkPage/Loadable';
import PrivateRoute from '../_PrivateRoute';
import PublicRoute from '../_PublicRoute';

import dashboard from '../../images/icon/dashboardicon2.png';
import user from '../../images/icon/headericon/user.svg';
import apiKeys from '../../images/icon/api-keys.png';
import affiliate from '../../images/icon/affiliate.png';
import Mywallet from '../../images/icon/headericon/My wallet.svg';
import CS from '../../images/icon/headericon/Coin settings.svg';
import TH from '../../images/icon/headericon/Transaction history.svg';
import BLN from '../../images/icon/headericon/balance.svg';
import CT from '../../images/icon/headericon/Crypto tools.svg';
import ST from '../../images/icon/headericon/setting.svg';
import SC from '../../images/icon/headericon/security.svg';
import DP from '../../images/icon/headericon/Deposit.svg';
import WD from '../../images/icon/headericon/Withdraw.svg';
import LV from '../../images/icon/headericon/Lock vault.svg';
import BTN from '../../images/icon/headericon/button.svg';
import IPN from '../../images/icon/headericon/Instant Payment Notifications.svg';
import HCF from '../../images/icon/headericon/Help Collpay Fees.svg';
import FAQ from '../../images/icon/headericon/Frequently Asked Questions.svg';
import HPP from '../../images/icon/headericon/Help Privacy Policy.svg';
import TMS from '../../images/icon/headericon/Terms Of Service.svg';
import SPL from '../../images/icon/headericon/support list.svg';

const Routes = () => (
  <Switch>
    <PrivateRoute
      exact
      icon={dashboard}
      title="dashboard"
      path="/"
      component={DashboardPage}
    />
    <PrivateRoute
      exact
      icon={Mywallet}
      title="My Wallets"
      path="/my-wallets"
      slug="my-wallets"
      component={CoinWallets}
    />
    <PrivateRoute
      exact
      icon={DP}
      title="Deposit"
      path="/my-wallets/deposit/:id"
      slug="deposit-page"
      component={DepositCoins}
    />
    <PrivateRoute
      exact
      icon={WD}
      title="withdrawal"
      path="/my-wallets/withdrawal/:wallet_id/:coin_id"
      slug="withdrawal-page"
      component={WithdrawalPage}
      noHeaderMenu
    />
    <PrivateRoute
      exact
      icon={LV}
      title="Lock In Vault"
      path="/lock-in-vault/:wallet_id"
      slug="lock-in-vault"
      component={LockInVaultPage}
      noHeaderMenu
    />

    <PrivateRoute
      exact
      icon={dashboard}
      title="My Referral Tree"
      path="/account/my-referral"
      component={MyReferralTree}
    />
    <PrivateRoute
      exact
      icon={SC}
      title="Security"
      path="/account/security"
      component={SecurityPage}
    />
    <PrivateRoute
      exact
      icon={DP}
      title="Deposit History"
      path="/my-wallets/deposit-history/:wallet_id"
      slug="deposit-history-page"
      component={DepositHistory}
    />
    <PrivateRoute
      exact
      icon={WD}
      title="Withdrawal History"
      path="/my-wallets/withdrawal-history/:wallet_id"
      slug="withdrawal-history-page"
      component={WithdrawalHistoryPage}
    />
    <PrivateRoute
      exact
      icon={TH}
      title="Payment History"
      path="/transaction-history"
      slug="payment-history"
      component={TransactionHistory}
    />
    <PrivateRoute
      exact
      icon={TH}
      title="All Transactions"
      path="/history-report"
      slug="all-transactions"
      component={HistoryReport}
    />
    {/* <PrivateRoute */}
    {/* exact */}
    {/* icon={ST} */}
    {/* title="Settings" */}
    {/* path="/account/settings" */}
    {/* component={SettingsPage} */}
    {/* /> */}
    <PrivateRoute
      exact
      icon={user}
      title="Sub Accounts"
      path="/account/sub-accounts"
      component={SubAccount}
    />
    <PrivateRoute
      exact
      icon={user}
      title="Sub Accounts Log"
      path="/account/sub-accounts-log"
      component={SubAccountsActivityLog}
    />
    <PrivateRoute
      exact
      icon={user}
      title="Sub Accounts Log"
      path="/account/sub-accounts-log/:id"
      component={SubAccountsActivityLog}
    />
    <PrivateRoute
      exact
      icon={user}
      title="My Activity Log"
      path="/account/merchant-activity-log"
      component={MerchantActivityLog}
    />
    <PrivateRoute
      exact
      icon={user}
      title="My Profile"
      path="/account"
      component={MyProfile}
    />
    {/* <PrivateRoute */}
    {/* exact */}
    {/* icon={user} */}
    {/* title="My Account" */}
    {/* path="/address-book" */}
    {/* component={AddressBook} */}
    {/* /> */}
    <PrivateRoute
      exact
      icon={apiKeys}
      title="Api Keys"
      path="/api-keys"
      slug="api-keys"
      component={ApiKeysPage}
      noHeaderMenu
    />
    <PrivateRoute
      exact
      icon={apiKeys}
      title="Api Keys"
      path="/api-keys/api-keys-setting/:id"
      slug="api-keys-settings-page"
      component={ApiKeysSettingsPage}
      noHeaderMenu
    />
    {/* <PrivateRoute */}
    {/* exact */}
    {/* icon={affiliate} */}
    {/* title="Affiliate Tools" */}
    {/* path="/affiliate" */}
    {/* component={Affiliate} */}
    {/* noHeaderMenu */}
    {/* /> */}
    <PrivateRoute
      exact
      icon={BLN}
      title="Balances"
      path="/all-balances"
      component={AllBalances}
      noHeaderMenu
    />
    <PrivateRoute
      exact
      icon={CS}
      title="Coin Settings"
      path="/coin-settings"
      slug="coin-settings"
      component={CoinSettings}
    />
    {/* <PrivateRoute */}
    {/* exact */}
    {/* icon={user} */}
    {/* title="My Feedback" */}
    {/* path="/my-feedback" */}
    {/* component={MyFeedback} */}
    {/* noHeaderMenu */}
    {/* /> */}
    <PrivateRoute
      exact
      icon={user}
      title="Leave Feedback"
      path="/leave-feedback"
      component={LeaveFeedback}
      noHeaderMenu
    />
    <PrivateRoute
      exact
      icon={user}
      title="Account Settings"
      path="/account-settings"
      component={AccountSettings}
    />
    <PrivateRoute
      exact
      icon={apiKeys}
      title="Api Keys Log"
      path="/api-keys-log"
      component={ApiKeysLog}
    />
    <PrivateRoute
      exact
      icon={apiKeys}
      title="Sdk Page"
      path="/sdk"
      component={SdkPage}
    />
    <PrivateRoute
      exact
      icon={BTN}
      title="Simple Buttons"
      path="/crypto-tools/simple-buttons"
      component={SimpleButtons}
      noHeaderMenu
    />
    <PrivateRoute
      exact
      icon={BTN}
      title="Simple Buttons"
      path="/crypto-tools/simple-buttons/:tab_id"
      component={SimpleButtons}
      noHeaderMenu
    />
    <PrivateRoute
      exact
      icon={CT}
      title="Crypto Tools"
      path="/crypto-tools"
      component={CryptoTools}
      noHeaderMenu
    />
    <PrivateRoute
      exact
      icon={IPN}
      title="Instant Payment Notifications"
      path="/instant-payment-notification"
      component={InstantPaymentNotificationsPage}
      noHeaderMenu
    />
    <PrivateRoute
      exact
      icon={HCF}
      title="Help Collpay Fees"
      path="/help-Collpay-fees"
      component={HelpCollpayFees}
      noHeaderMenu
    />
    <PrivateRoute
      exact
      icon={FAQ}
      title="Frequently Asked Questions"
      path="/faq"
      component={FAQPage}
      noHeaderMenu
    />
    <PrivateRoute
      exact
      icon={HPP}
      title="Help Privacy Policy"
      path="/help-privacy-policy"
      component={HelpPrivacyPolicy}
      noHeaderMenu
    />
    <PrivateRoute
      exact
      icon={TMS}
      title="Terms Of Service"
      path="/terms-of-service"
      component={TermsOfService}
      noHeaderMenu
    />
    <PrivateRoute
      exact
      icon={SPL}
      title="Supported List Cryptocoins"
      path="/supported-list-cryptocoins"
      component={SupportedListCryptocoins}
      noHeaderMenu
    />
    <PublicRoute path="/maintenance" component={MaintenancePage} />
    <PublicRoute path="/login" component={LoginPage} />
    <PublicRoute path="/register" component={SignUpPage} />
    <PublicRoute path="/verify-email" component={EmailVerification} />
    <PublicRoute path="/forgot-password" component={ForgotPassword} />
    <PublicRoute path="/reset-password" component={ResetPassword} />
    <PublicRoute path="/payment-coin" component={PaymentCoinPage} />
    <PublicRoute path="/timeout" component={TimeOut} />
    <PublicRoute path="/make-payment" component={MakePaymentPage} />
    <PublicRoute path="/confirm-payment" component={ConfirmPayment} />
    <PublicRoute path="/feedback" component={FeedBackPage} />
    <Route component={EroorPage} />
  </Switch>
);
export default Routes;
