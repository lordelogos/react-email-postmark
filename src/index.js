import { render } from "@react-email/render";
import { Email } from "./email";
import { ServerClient } from "postmark";

const emailHtml = render(Email({ url: "https://example.com" }));

const client = new ServerClient("");

const options = {
  From: "you@example.com",
  To: "user@gmail.com",
  Subject: "hello world",
  HtmlBody: emailHtml,
};

client.sendEmail(options);
