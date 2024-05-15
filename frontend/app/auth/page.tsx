"use client";
import axios from "axios";
axios.defaults.withCredentials = true;
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import QrCode from "../components/QrCode";
import SecretCodeForm from "../components/SecretCodeForm";

export default function TwoFactAuth() {
  return (
    <>
      <Navbar isLoggedIn={true} />
      <div className="h-[100dvh] flex justify-center items-center flex-col mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="shadow-md rounded flex items-center flex-col px-6 py-12">
          <div className="flex items-center flex-col">
            <p className="font-bold text-2xl">2 Factor Authentication (2FA)</p>
            <div className="bg-gray-800 w-10 h-1 rounded-full mt-1"></div>
          </div>
          <div>
            <p className="text-lg font-semibold mt-6">Instructions</p>
            <hr />
            <ol className="list-roman">
              <li className="mt-3">
                Scan the QR code if on your authenticator app(Google
                Authenticator, Authy, etc).
              </li>
              <li className="mt-3">
                Enter the code generated by your authenticator app.
              </li>
              <li className="my-3">
                If you had already done Step I before, simply open your
                authenticator app and type in the code.
              </li>
            </ol>
          </div>
          <div className="flex justify-around items-center flex-col md:min-w-[100vh] md:flex-row">
            <QrCode />
            <SecretCodeForm />
          </div>
        </div>
      </div>
    </>
  );
}
