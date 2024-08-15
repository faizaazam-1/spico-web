import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  organization: z
    .string()
    .min(2, { message: "Organization must be at least 3 characters." }),
  project: z
    .string()
    .min(10, { message: "Please provide more details about your project." }),
});

const ContactPage = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      project: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="bg-white ml-28 pb-28">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <h1 className="text-6xl  mb-8 font-notos text-blue-900">
              Contact us
            </h1>
            <p className="text-xl mb-8 font-dm text-blue-900">
              Whether you are a large enterprise looking to augment your teams
              with experts resources or an SME looking to scale your business or
              a startup looking to build something. We are your digital growth
              partner.
            </p>
            <div className="flex items-center space-x-32">
              <div>
                <p className="mb-2 text-blue-900">
                  <span className="text-red-700">
                    <strong>Tel:</strong>{" "}
                  </span>
                  +1 408 365 4638
                </p>
                <p className="text-blue-900">
                  <span className="text-red-700">
                    <strong>Support:</strong>
                  </span>{" "}
                  +1 (408) 512 1812
                </p>
              </div>
              <img
                src="assets/Untitled design (4).png"
                alt="Customer Service"
                className="h-36 w-36"
              />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 max-w-md"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="border-b border-gray-300">
                          <Input
                            placeholder="Name"
                            {...field}
                            className="w-full p-3 border-0 focus:ring-0 text-md placeholder-gray-500"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm mt-1" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="border-b border-gray-300">
                          <Input
                            placeholder="Email"
                            type="email"
                            {...field}
                            className="w-full p-3 border-0 focus:ring-0 text-md placeholder-gray-500"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm mt-1" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="border-b border-gray-300">
                          <Input
                            placeholder="Phone"
                            type="tel"
                            {...field}
                            className="w-full p-3 border-0 focus:ring-0 text-md placeholder-gray-500"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm mt-1" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="border-b border-gray-300">
                          <Input
                            placeholder="Organization"
                            {...field}
                            className="w-full p-3 border-0 focus:ring-0 text-md placeholder-gray-500"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm mt-1" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="project"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="border-b border-gray-300">
                          <Input
                            placeholder="Tell us about your project"
                            {...field}
                            className="w-full p-3 border-0 focus:ring-0 text-md placeholder-gray-500 pb-5"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm mt-1" />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end pt-4">
                  <Button
                    type="submit"
                    className="bg-red-700 text-white rounded-full py-3 px-8 text-lg hover:bg-red-600 transition-colors font-dm duration-300"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
