import nodeMailer from "nodemailer";
export const emaill = async ({ email, subject, otp }) => {
  const transport = nodeMailer.createTransport({
    host: process.env.HOST,
    service: process.env.SERVICE,
    port: process.env.SM_PORT,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const option = {
    from: process.env.EMAIL,
    to: email,
    subject,
    text: otp,
  };
  await transport.sendMail(option);
};
