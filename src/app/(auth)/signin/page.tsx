"use client";
import React from "react";
import { LinkButton, SubmitButton, TextField } from "@/shared";

const Page = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your submit logic here
  };

  return (
    <div className="w-full h-full">
      <h4 className="text-gray-800 font-bold text-center">Sign In</h4>
      <form className="my-[5px] mx-[10px] w-full" onSubmit={handleSubmit}>
        <TextField
          type="email"
          label="Email"
          value={email}
          placeholder="Email"
          onChange={(value) => setEmail(value)}
        ></TextField>
        <TextField
          type="password"
          label="Password"
          value={password}
          placeholder="Password"
          onChange={(value) => setPassword(value)}
        ></TextField>
        <SubmitButton value="Sign In" />
      </form>
      <div>
        <LinkButton href="/forgetpassword" className=" text-white size-[15px]">
          Forget your password
        </LinkButton>
      </div>
    </div>
  );
};

export default Page;
