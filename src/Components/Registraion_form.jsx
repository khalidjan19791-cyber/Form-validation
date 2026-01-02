import { Field, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import * as yup from "yup";
import UseAnimations from "react-useanimations";
import visibility2 from "react-useanimations/lib/visibility2";
import { useState } from "react";

const validationSchema = yup.object({
  firstname: yup.string().trim().required("First Name is required"),
  lastname: yup.string().trim().required("Last Name is required"),
  email: yup
    .string()
    .trim()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .trim()
    .matches(/^[0-9]+$/, "Phone  contain only digits")
    .min(11, "Phone number must be at least 11 digits")
    .max(15, "Phone number must be at most 15 digits")
    .required("Phone number is required"),
  password: yup
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export default function Registraion_form() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmpassword, setconfirmPassowrd] = useState(false);
  return (
    <section>
      <div className="border rounded-lg p-4 shadow-md hover:shadow-xl   hover:-translate-y-1 transition-all duration-300 ">
        <h1 className="font-bold text-3xl">Student Registraion Form</h1>
        <Formik
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
          initialValues={{
            firstname: " ",
            lastname: " ",
            dob: "",
            gender: "",
            email: "",
            phone: "",
            address: "",
            qualificaiton: "",
            password: "",
            confirmPassword: "",
          }}
        >
          <Form className="w-[45vw] h-[60vh] relative mt-5 text-[#505050]   flex gap-9 flex-row flex-wrap   ">
            <div className="relative flex flex-col  ">
              <label className="absolute px-3 -top-3 left-3 bg-amber-100">
                First Name
              </label>
              <Field
                autoComplete="off"
                name="firstname"
                className={
                  "w-[21vw] font-semibold h-11 p-1 rounded-[3px] border"
                }
                type="text"
              />
              <ErrorMessage
                name="firstname"
                component="div"
                className="absolute top-11 text-red-500 text-sm pointer-events-none"
              />
            </div>
            <div className=" relative flex flex-col">
              <label className="absolute px-3  -top-3 left-3 bg-amber-100">
                Last Name
              </label>
              <Field
                autoComplete="off"
                name="lastname"
                className={
                  "w-[21vw] font-semibold h-11 p-1 rounded-[3px] border"
                }
                type="text"
              />
              <ErrorMessage
                name="lastname"
                component="div"
                className="absolute top-11 text-red-500 text-sm pointer-events-none"
              />
            </div>
            <div className="relative flex flex-col">
              <label className="absolute px-3  -top-3 left-3 bg-amber-100">
                DOB
              </label>
              <Field
                autoComplete="offf"
                name="dob"
                className={
                  "w-[21vw] font-semibold h-11 p-1 rounded-[3px] border"
                }
                type="date"
              />
            </div>
            <div className="flex   w-[21vw] items-center">
              <div className="flex flex-col gap-2 ">
                <label className="px-3   text-xl   bg-amber-100">Gender</label>
                <div className="flex items-center  space-x-2">
                  <Field
                    autoComplete="off"
                    name="gender"
                    value="male"
                    type="radio"
                    className="w-4 h-4 text-amber-500 bg-white border-2 border-amber-300 rounded-full    transition-all duration-200"
                  />
                  <label className="pl-1 text-gray-800 font-medium cursor-pointer select-none">
                    Male
                  </label>
                  <Field
                    autoComplete="offf"
                    name="gender"
                    value="female"
                    type="radio"
                    className="w-4 h-4 text-amber-500 bg-white border-2 border-amber-300 rounded-full    transition-all duration-200"
                  />
                  <label className="pl-1 text-gray-800 font-medium cursor-pointer select-none">
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col">
              <label className="absolute px-3 -top-3 left-3 bg-amber-100">
                Email
              </label>
              <Field
                autoComplete="offf"
                name="email"
                className={
                  "w-[21vw] font-semibold h-11 p-1 rounded-[3px] border"
                }
                type="text"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="absolute top-11 text-red-500 text-sm pointer-events-none"
              />
            </div>
            <div className="relative flex flex-col">
              <label className="absolute px-3  -top-3 left-3 bg-amber-100">
                Phone Number
              </label>
              <Field
                autoComplete="offf"
                name="phone"
                className={
                  "w-[21vw] font-semibold h-11 p-1 rounded-[3px] border"
                }
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="absolute top-11 text-red-500 text-sm pointer-events-none"
              />
            </div>
            <div className="relative flex flex-col">
              <label className=" absolute px-3  -top-3 left-3 bg-amber-100">
                Address
              </label>
              <Field
                autoComplete="offf"
                name="address"
                className={
                  "w-[21vw] font-semibold h-11 p-1 rounded-[3px] border"
                }
                type="text"
              />
            </div>
            <div className=" relative flex flex-col">
              <label className=" absolute px-3  -top-3 left-3 bg-amber-100">
                Qualification
              </label>
              <Field
                autoComplete="offf"
                name="qualification"
                as="select"
                className={
                  "w-[21vw] font-semibold h-11 p-1 rounded-[3px] border"
                }
                type="text"
              >
                <option className="bg-amber-200 font-bold ">BS-Pharmacy</option>
                <option className="bg-amber-200 font-bold">
                  BS-Computer Science
                </option>
                <option className="bg-amber-200 font-bold">
                  BS-Software Engineering
                </option>
                <option className="bg-amber-200 font-bold">
                  BS-Information Technology
                </option>
                <option className="bg-amber-200 font-bold">BS-Biology</option>
                <option className="bg-amber-200 font-bold">BS-Chemistry</option>
                <option className="bg-amber-200 font-bold">BS-Physics</option>
                <option className="bg-amber-200 font-bold">
                  BS-Mathematics
                </option>
                <option className="bg-amber-200 font-bold">
                  BS-Microbiology
                </option>
                <option className="bg-amber-200 font-bold">
                  BS-Biotechnology
                </option>
              </Field>
            </div>
            <div className="relative flex flex-col">
              <label className=" absolute px-3  -top-3 left-3 bg-amber-100">
                Password
              </label>
              <Field
                autoComplete="offf"
                name="password"
                className={
                  "w-[21vw] font-semibold h-11 p-1 rounded-[3px] border"
                }
                type={showPassword ? "text" : "password"}
              />
              <UseAnimations
                className="absolute left-40 "
                animation={visibility2}
                size={36}
                reverse={showPassword} // toggle eye animation
                onClick={() => setShowPassword(!showPassword)}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="absolute top-11 text-red-500 text-sm pointer-events-none"
              />
            </div>
            <div className="relative flex flex-col">
              <label className=" absolute px-3  -top-3 left-3 bg-amber-100">
                Confirm-Password
              </label>
              <Field
                autoComplete="offf"
                name="confirmPassword"
                className={
                  "w-[21vw] font-semibold h-11 p-1 rounded-[3px] border"
                }
                type="text"
              />
              <UseAnimations
                className="absolute left-40 "
                animation={visibility2}
                size={36}
                reverse={confirmpassword} // toggle eye animation
                onClick={() => setconfirmPassowrd(!confirmpassword)}
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="absolute top-11 text-red-500 text-sm pointer-events-none"
              />
            </div>
            <button
              type="submit"
              className="bg-amber-500 text-2xl font-bold px-6 py-2.5 rounded-lg shadow-md hover:bg-amber-600 hover:shadow-lg active:scale-95 transition-all duration-300 
  "
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
