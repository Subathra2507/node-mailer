const nodemailer = require('nodemailer');
const readline = require('readline');

const nm = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


nm.question('Recipient email: ', (to) => {
  nm.question('Subject: ', (subject) => {
    nm.question('Message: ', (message) => {

      //Enter from email address
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'subi2507bala@gmail.com',
          pass: 'yvjl wfrh bdqq asts'
        }
      });

      
      const mailOptions = {
        from: 'your-email@gmail.com',
        to,
        subject,
        text: message
      };

      // email status
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('❌ Failed to send email:', error.message);
        } else {
          console.log('✅ Email sent successfully:', info.response);
        }
        nm.close();
      });

    });
  });
});
