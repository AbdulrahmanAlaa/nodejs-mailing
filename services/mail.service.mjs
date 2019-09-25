import nodemailer from 'nodemailer';

// Enable gmail api in google console
// https://myaccount.google.com/u/1/apppasswords

/**
 * Bootstrap Application
 */
const main = async (req, res, emailObj) => {
  const transportOptions = {
    service: 'gmail',
    // Approach 1 => using google console dashboard brojects
    // - create project and add
    // - Library Gmail Api
    // - Add redirect url as https://developers.google.com/oauthplayground
    // - open the url https://developers.google.com/oauthplayground
    // - from the top-right Gear select the Use your own OAuth credentials
    // - add the secret with client ids and press
    // - add the url https://mail.google.com in the left first step then press authorize api
    // - accept the permission and click on step 2 Exchange authorization code for tokens
    // - now you can get the access token
    // Using Google console project add gmail app library in google console
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL_AUTH_USER,
      clientId: process.env.EMAIL_CLIENT_ID,
      clientSecret: process.env.EMAIL_CLIENT_SECRET,
      refreshToken: process.env.EMAIL_REFRESH_TOKEN
    }

    // Approach 2 => using normal account gmail user and password
    // host: process.env.EMAIL_HOST,
    // auth: {
    //   user: process.env.EMAIL_AUTH_USER,
    //   // If the email user uses the 2FA please enable apps passwords
    //   //ref: https://support.google.com/mail/answer/185833
    //   pass: process.env.EMAIL_AUTH_PASS
    // }
  };

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport(transportOptions);

  const mailOptions = {
    from: process.env.EMAIL_OPTIONS_FROM, // sender address
    to: emailObj.to, // list of receivers
    subject: emailObj.subject, // Subject line
    // TODO: prevent unwanted scripts injection or create
    //       template with options binded
    html: emailObj.body // plain text body
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) res.send(err);
    else res.send(info);
  });
};

export default main;
