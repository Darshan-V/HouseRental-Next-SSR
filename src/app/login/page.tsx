// src/app/login/page.tsx
import React from "react";
import LoginForm from "@/app/components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex flex-col w-full h-screen rounded-md justify-center items-center  ">
      <div className="flex flex-col border-2 border-sky-400 rounded-md p-8">
        <h1 className="text-green-500 font-bold text-2xl italic uppercase m-auto  ">
          Login
        </h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
