import {
  ExperienceItem,
  ExperienceContainer,
} from "@/components/experience-container";
import ProjectIcon from "@/components/project-container";

const experiences: ExperienceItem[] = [
  {
    dates: "2022 - Present",
    company: "dunnhumby",
    role: "Platform Engineer",
    summary: "",
  },
  {
    dates: "May 2021 - Nov 2021",
    company: "Benco Dental",
    role: "Application Developer Intern",
    summary: "",
  },
  {
    dates: "Jun 2020 - Aug 2020",
    company: "Dream Catchers Foundation",
    role: "Backend Web Developer Intern",
    summary: "",
  },
  {
    dates: "Sept 2018 - Mar 2019",
    company: "Johnson & Johnson",
    role: "Cyber Security Analyst Co-op",
    summary: "",
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col px-4 py-4 text-[12px] sm:px-6">
      <div className="mx-auto w-full">
        <section className="pb-6">
          <div className="space-y-2">
            <p>
              <span className="font-bold">Alex Zaykowski</span> is a platform
              engineer at{" "}
              <a href="https://www.dunnhumby.com/" className="text-blue-500">
                @dunnhumby
              </a>
              , where he focuses on maintaining and advancing the company&apos;s
              data platform. His work centers on building reliable, high-impact
              systems and continuously expanding his technical breadth. He
              currently spends much of his time working with Kubernetes, C# REST
              APIs, IAC, and a range of internal and client-facing services.
            </p>
            <p>
              Outside of work, Alex enjoys cooking, fly fishing, gardening, and
              spending time with his fiancee and their dog. This site serves as
              a more permanent home to catalog his experience and projects which
              are listed below.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 underline decoration-stone-400">
              <a href="https://github.com/rezghost">GitHub</a>
              <a href="https://www.linkedin.com/in/alex-zaykowski-04388a163/">
                LinkedIn
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                CV
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-stone-700 py-6">
          <ExperienceContainer experiences={experiences} />
        </section>

        <section className="border-t border-stone-700 py-6">
          <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectIcon
              title={"Content Droid"}
              desc={"Automated TikTok subtitles and narration"}
              url={"https://github.com/rezghost/ContentDroid"}
            />
            <ProjectIcon
              title={"Workout Tracker"}
              desc={"React Native yaml-based workout tracker"}
              url={"https://github.com/rezghost/workout-tracker"}
            />
            <ProjectIcon
              title={"Personal Site"}
              desc={"The website you are currently on"}
              url={"https://github.com/rezghost/personal-site"}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
