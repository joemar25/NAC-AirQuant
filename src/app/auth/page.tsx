import React from "react";
import { AuthForm } from "../../components/forms/AuthForm";
import readUserSession from "@/actions";
import { redirect } from "next/navigation";
import { Icons } from "@/components/icons";

export default async function page() {
  const { data } = await readUserSession();
  if (data.session) {
    return redirect("/");
  }
  return (
    <>
      <>
        <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">

            <div className="absolute inset-0 bg-gradient-to-t from-[#4EACA2] to-[#344378]" />
            <div className="relative z-20 flex items-center text-lg font-medium">
              <Icons.airquant_text className="h-20 w-20" />
              AirQuant
            </div>

            <figure className="relative z-20 mt-auto text-center p-8 bg-[#A4BBC0]">
              <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <blockquote>
                <p className="text-lg italic font-medium text-gray-900 dark:text-white">
                  "Get real-time weather updates on the go with our portable station, making it easy to stay informed and adjust to changing conditions wherever you are."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                <Icons.airquant_text className="h-20 w-20" />
                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                  <cite className="pe-3 font-medium text-gray-600 dark:text-white"> Team Entropy </cite>
                  <cite className="ps-3 text-sm text-gray-900 dark:text-gray-900"> Bicol University </cite>
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Welcome back!
                </h1>
                <p className="text-sm text-muted-foreground">
                  Please enter your credentials to log in.
                </p>
                <p className="text-sm text-muted-foreground">
                  New here? You can also register.
                </p>
                <AuthForm />
              </div>
            </div>
          </div>

        </div>
      </>
    </>
  );
}
