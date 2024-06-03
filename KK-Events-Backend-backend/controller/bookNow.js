import bookNow from "../model/bookingModel.js";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

const sender = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const createBooknowApplication = async (req, res) => {
    const {
        name,
        email,
        phone,
        event,
        location,

    } = req.body;

    const booknowForm = new bookNow({
        name,
        email,
        phone,
        event,
        location,
    });

    try {
        await booknowForm.save();

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: `Internship Application for ${event} role `,
            html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Intern form Submission</title>
          </head>
          <body>
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2>Internship Application for ${event}</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Location:</strong> ${location}</p>
            </div>
          </body>
          </html>
        `,
        };

        sender.sendMail(mailOptions, function (error, info) {
            if (error) {
                // console.error("Error sending email:", error);
                res.status(500).send("Error sending email");
            } else {
                // console.log("Email sent successfully: " + info.response);
                res.status(200).send("Email sent successfully");
            }
        });
    } catch (error) {
        // console.error("Error saving resume to database:", error);
        res.status(500).send("Error saving resume to database");
    }
};

export default createBooknowApplication;
