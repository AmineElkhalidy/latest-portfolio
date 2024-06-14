"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+212) 611154307",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "a.amineelkhalidy@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Marrakech - Safi, Morocco",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="w-full xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-gray-50 rounded-md border">
              <h3 className="text-3xl text-sky-700">
                Let&apos;s work together
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                aut voluptatum minus quaerat deleniti corrupti dicta incidunt.
              </p>

              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" />
                <Input type="text" name="lastname" placeholder="Lastname" />
                <Input type="email" name="email" placeholder="Email address" />
                <Input type="phone" name="phone" placeholder="Phone Number" />
              </div>

              {/* Select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"></SelectValue>
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea className="h-[200px]" placeholder="Your message" />

              <Button
                size="lg"
                className="max-w-40 py-6 bg-sky-700 hover:bg-sky-900"
              >
                Send message
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((info, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-gray-50 text-sky-700 rounded-md flex items-center justify-center ">
                    <div className="text-[28px]">{info.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-muted-foreground">{info.title}</h3>
                    <p className="text-lg">{info.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
