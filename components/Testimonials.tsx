import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Marquee from "react-fast-marquee";
import { testimonials } from "@/constants";

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="my-10 text-center">
        <h2 className="text-4xl font-bold font-secondary">Testimonials</h2>
        <p className="text-muted-foreground mt-2">
          What my clients say about my work
        </p>
      </div>

      <div className="overflow-y-hidden">
        <Marquee className="h-full">
          {testimonials.map((item) => (
            <Card
              key={item.description}
              className="bg-gray-100 border-none mx-4 lg:mx-6 max-w-sm h-[200px] overflow-y-auto custom-scrollbar"
            >
              <CardHeader>
                <CardContent className="pt-4 px-0 italic">
                  "{item.description}"
                </CardContent>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <h3 className="text-lg">{item.name}</h3>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
