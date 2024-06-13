import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import State from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello, I&apos;m <br />{" "}
              <span className="text-sky-700">Amine Elkhalidy</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-muted-foreground">
              I excel at crafting elegant digital experiences.
            </p>

            {/* Button & Social media accounts */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 rounded-full border-sky-700 transition-all hover:text-sky-700"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border border-sky-700 rounded-full flex justify-center items-center text-sky-700 text-base hover:bg-sky-700 hover:text-white hover:transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <State />
    </section>
  );
}
