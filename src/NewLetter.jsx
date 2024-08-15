import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <div className="relative w-full ">
      <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <Card className="overflow-hidden rounded-3xl bg-gradient-to-l from-sky-600 to-blue-900">
          <CardContent className="px-6 py-10 sm:px-12 sm:py-16 lg:flex lg:items-center lg:px-20 lg:py-20">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-notos tracking-tight text-white">
                Sign up for our newsletter
              </h2>
              <p className="mt-4 max-w-3xl text-lg font-dm text-cyan-100">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                Lorem cupidatat commodo. Elit sunt amet fugiat.
              </p>
            </div>
            <div className="mt-12 sm:w-full sm:max-w-md lg:ml-8 lg:mt-0 lg:flex-1">
              <form className="sm:flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border-white px-5 py-3 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-700 placeholder:text-lg placeholder:text-white"
                />
                <Button
                  type="submit"
                  className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-5 py-3 text-base font-notos text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-cyan-700 sm:ml-3 sm:mt-0 sm:w-auto sm:flex-shrink-0"
                >
                  Notify me
                </Button>
              </form>
              <p className="mt-3 font-dm text-sm text-cyan-100">
                We care about the protection of your data. Read our{" "}
                <a href="#" className="font-medium text-white underline">
                  Privacy Policy.
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Newsletter;
