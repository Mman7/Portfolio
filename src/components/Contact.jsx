import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { sendEmail } from "./JS/sendEmail";
import { useForm } from "react-hook-form";
import LinkedInIcon from "../assets/Icons/linkedin-icon-2.svg";

export default function Contact() {
  const [Form, setForm] = useState({});
  const [isSend, setisSend] = useState(false);
  const buttonRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendHandle = async (data) => {
    await sendEmail(data, buttonRef.current, setisSend);
  };

  return (
    <div className="contact">
      <div className="contact-text-wrapper">
        <h1 className="title">Contact me</h1>
        <a className="linkedin-btn" href="">
          <img src={LinkedInIcon} alt="linkedin icon" />
        </a>
      </div>

      <form className="form">
        <TextField
          type="email"
          required
          className="form-email"
          label="Your Email"
          variant="outlined"
          {...register("from_email", { required: true })}
        />
        <TextField
          require="true"
          className="form-name"
          label="Your Name"
          variant="outlined"
          {...register("from_name", { required: false })}
        />
        <TextField
          required
          require="true"
          className="form-name"
          label="Title"
          variant="outlined"
          {...register("title", { required: true })}
        />
        <TextField
          required
          className="form-textarea"
          id="outlined-multiline-static"
          label="Send me a message"
          multiline
          color="secondary"
          rows={8}
          {...register("message", { required: true })}
        />
        <Button
          onClick={handleSubmit(sendHandle)}
          ref={buttonRef}
          variant="contained"
          color={isSend ? "success" : "primary"}
        >
          Send
        </Button>
      </form>
    </div>
  );
}
