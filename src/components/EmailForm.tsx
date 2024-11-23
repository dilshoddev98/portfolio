import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import SendButton from "@/components/SendButton";
import toast from "react-hot-toast";
import { ContactFormData } from "@/lib/types";

export default function Contact() {
  const { register, reset, handleSubmit } = useForm<ContactFormData>();
  const [isPending, setIsPending] = useState(false);
  const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;

  const { submit } = useWeb3Forms({
    access_key: accessKey as string,
    settings: {
      subject: "New Contact Message from your Portfolio website",
    },

    onSuccess: () => {
      setIsPending(false);
      toast.success("Message sent successfully");
      reset();
    },
    onError: () => {
      setIsPending(false); 
      toast.error("Failed to send message. Please try again later");
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsPending(true);
    try {
      const result = await submit(data);
      console.log(result);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsPending(false); 
    }
  };

  return (
    <form
      id="myForm"
      className="mt-10 flex flex-col dark:text-black/80"
      onSubmit={handleSubmit(onSubmit)} 
    >
      <input
        type="email"
        className="h-14 rounded-lg border-black/10 px-4 outline-none dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
        placeholder="Your email"
        required
        maxLength={100}
        {...register("email", { required: true })} 
      />
      <textarea
        className="h-52 my-3 rounded-lg border-black/10 p-4 outline-none dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
        placeholder="Your message"
        required
        maxLength={1000}
        {...register("message", { required: true })} 
      ></textarea>
      <SendButton isPending={isPending} />
    </form>
  );
}
