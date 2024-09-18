import { cn } from "./ui/utils.ts";
import { Simple } from "./icons";

const socials = [
  {
    href: "https://github.com/ddevin96",
    name: "GitHub",
    icon: Simple.IconGitHub,
  },
  {
    href: "https://x.com/danieledv2",
    name: "X",
    icon: Simple.IconX,
  },
  {
    href: "https://www.linkedin.com/in/ddevin96/",
    name: "LinkedIn",
    icon: Simple.IconLinkedin,
  },
  {
    href: "https://scholar.google.com/citations?user=FhRTz_UAAAAJ&hl=it",
    name: "Google Scholar",
    icon: Simple.IconScholar,
  },
];

export default () => {
  return (
    <div className="flex items-center justify-center p-4 md:p-5 xl:p-6 w-full h-full">
      <ul className="flex items-center justify-center gap-3">
        {socials.map((social) => {
          return (
            <li key={social.name}>
              <a
                href={social.href}
                className={cn(
                  "group",
                  "flex items-center justify-center w-16 h-16 md:w-20 md:h-20 xl:w-16 xl:h-16",
                  "bg-neutral-2 hover:bg-neutral-3",
                  "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                  "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
                )}
                target="_blank"
                aria-label="Open"
              >
                <social.icon className="transition size-1/3 text-neutral-10 group-hover:text-neutral-11 group-hover:scale-110 group-focus-visible:text-neutral-11 group-focus-visible:scale-110" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
