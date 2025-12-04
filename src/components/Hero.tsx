import GithubIcon from "@/icons/GithubIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";
import XIcon from "@/icons/XIcon";
import ResumeIcon from "@/icons/ResumeIcon";

export default function Hero() {
  const icons: {
    icon: React.ComponentType;
    label: string;
    href?: string;
  }[] = [
    {
      icon: ResumeIcon,
      label: "Resume",
      href: "/resume.pdf",
    },
    {
      icon: GithubIcon,
      label: "Github",
      href: "https://github.com/trystonperry",
    },
    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      href: "https://linkedin.com/in/trystonperry/",
    },
    {
      icon: XIcon,
      label: "X",
      href: "https://x.com/trystonperry",
    },
  ];

  return (
    <div className="py-16 md:py-32 p-4 max-w-2xl mx-auto">
      <div className="relative">
        <div className="mb-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-2 ml-[-2px] md:mb-4 md:ml-[-4px]">
            Hi, I'm Tryston
          </h1>
          <p className="md:text-2xl leading-tight font-light text-gray-700">
            I'm a software engineer who builds production-ready apps,
            high-converting websites, and sticky user-experiences.
          </p>
        </div>
        <button className="px-6 py-3 text-xs md:text-base bg-[#009dee] border border-[#0089d4] text-white font-medium rounded-lg hover:bg-[#008ada] transition-colors">
          Contact me
        </button>
        <div className="absolute h-[1px] bg-gray-400 w-[200%] -left-1/4 top-0 opacity-20 z-[1]"></div>
        <div className="absolute h-[1px] bg-gray-400 w-[200%] -left-1/4 opacity-20 z-[1]"></div>
        <div className="absolute w-[1px] bg-gray-400 h-[400%] -top-1/2 opacity-20 z-[1]"></div>
        <div className="absolute w-[1px] bg-gray-400 h-[400%] -top-1/2 right-0 opacity-20 z-[1]"></div>
      </div>

      <div className="relative mt-8">
        <div className="grid grid-cols-4 bg-gray-400/20 gap-[1px]">
          {icons.map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-full gap-2 bg-gray-200 aspect-square p-4 transition-all duration-500 hover:bg-gray-300 group"
            >
              <div className="w-10 md:w-14 text-center opacity-20 transition-opacity group-hover:opacity-50">
                <icon.icon />
              </div>
              <span className="text-xss md:text-sm font-medium text-gray-400 transition-colors group-hover:text-gray-600">
                {icon.label}
              </span>
            </a>
          ))}
        </div>
        <div className="absolute h-[1px] bg-gray-400 w-[200%] -left-1/4 top-0 opacity-20 z-[1]"></div>
        <div className="absolute h-[1px] bg-gray-400 w-[200%] -left-1/4 opacity-20 z-[1]"></div>
      </div>
    </div>
  );
}
