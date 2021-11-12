import { init, send } from "emailjs-com";
init("user_K02kAov16XrxnmiDzhyt9");

//* EmailJS.com Tutorial:https://www.youtube.com/watch?v=x7Ewtay0Q78
//* DOC: Form hook from https://react-hook-form.com/get-started

export function sendEmail(data, btn, state) {
  const templateParams = {
    to_name: "Mack",
    from_name: data.name == "" && undefined && null ? "anonymous" : data.name,
    from_email: data.email_address,
    title: data.title,
    message: data.message,
  };
  return new Promise((resolve, reject) => {
    send("service_bve9ipf", "template_fkhfrbc", templateParams)
      .then((result) => {
        console.log(result.text);
        resolve();
        console.log(btn);
        btn.innerText = "Success";
        state(true);
      })
      .catch((err) => console.log(err));
    reject();
  });
}
