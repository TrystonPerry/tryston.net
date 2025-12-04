import Hero from "@/components/Hero";
import Program from "@/components/Program";
import ContactForm from "@/components/ContactForm";
import ContactFormCodeSnippet from "@/components/ContactFormCodeSnippet";

export default function Home() {
  return (
    <div className="relative bg-gray-200 w-screen pb-[400px]">
      <div className="bg-gradient-to-b from-white to-gray-200 h-[60vh] w-full absolute top-0 left-0"></div>
      <div className="flex flex-col lg:flex-row relative">
        <Hero />
        <div className="relative w-full max-w-[500px] mx-auto lg:mt-[200px] lg:ml-[-50px]">
          <div className="absolute -top-[2rem] -left-[2rem] h-[calc(100%_+_2rem)] w-full md:-top-[4rem] md:-left-[4rem] z-[2]">
            <ContactFormCodeSnippet />
          </div>
          <div
            className="relative z-[3]"
            style={{
              transform: "translate(2rem, 2rem)",
              width: "calc(100% - 2rem)",
            }}
          >
            <Program title="ContactForm.tsx — tryston.net">
              <ContactForm />
            </Program>
          </div>
        </div>
      </div>
    </div>
  );
}
