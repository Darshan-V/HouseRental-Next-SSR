"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/app/utils/auth";
import TextInput from "./TextInput";
import FormSubmitButton from "./FormSubmitButton";

import { BiLogIn } from "react-icons/bi";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(email, password);
    const isAuthenticated = await login(email, password);
    if (isAuthenticated) {
      router.push("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-white w-full p-5 sm:p-10 gap-8 rounded-md"
    >
      <TextInput
        name="Email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <TextInput
        name="Password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type={"password"}
      />
      <FormSubmitButton
        icon={<BiLogIn size="20" />}
        title={"Login"}
        onClick={() => console.log("Login")}
      />
    </form>
  );
};

export default LoginForm;
