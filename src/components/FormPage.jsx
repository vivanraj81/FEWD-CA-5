import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./FormPage.css";
const FormPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm();

  const [field, setField] = useState();
  const [submit, setSubmit] = useState(false);

  const onSubmit = (data) => {
    setField(data);
    setSubmit(true);
  };

  useEffect(() => {
    isValid ? console.log(field) : null;
  }, [isValid, field]);

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        {submit && isValid ? (
          <div className="reg-success">
            <h2>Registration Successful</h2>
          </div>
        ) : null}

        <input
          type="text"
          placeholder="Name"
          {...register("Name", {
            required: "Name is Required",
            minLength: {
              value: 3,
              message: "Name must be more than 3 characters ",
            },
            maxLength: {
              value: 30,
              message: "Name must be less than 30 characters ",
            },
          })}
        />

        <span className="err-msg">{errors.Name?.message}</span>

        <input
          type="text"
          placeholder="email"
          {...register("email", {
            required: "Email is Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,14}$/i,
              message: "Invalid email",
            },
          })}
        />

        <span className="err-msg">{errors.email?.message}</span>

        <input
          type="password"
          placeholder="password"
          {...register("password", {
            required: "Password is Required",
            minLength: {
              value: 10,
              message: "Password should contain more than 10 letters",
            },
            pattern: {
              value: /^(?=.*[!-\/:-@\[-`{-~]).{0,}$/i,
              message: "include atleast 1 special character",
            },
          })}
        />

        <span className="err-msg">{errors.password?.message}</span>

        <input
          placeholder="confirm your password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (val) =>
              val === watch("password") || "Passwords must match",
          })}
          type="password"
        />
        <span className="err-msg">{errors.confirmPassword?.message}</span>

        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default FormPage;