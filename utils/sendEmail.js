const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (to, code, message = '') => {
  const msg = {
    to,
    from: process.env.EMAIL_FROM, // Use the email address or domain you verified above
    subject: 'Sending Email from DEMO BDJOBS Project',
    text: `${message} ${code}`,
    html: `<h1>${message} <strong>${code}</strong></h1>`,
  };
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};
