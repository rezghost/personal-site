import { SquareArrowOutUpRight } from "lucide-react";

interface ProjectIconProps {
  title: string;
  desc: string;
  url: string;
}

const MAX_DESC_LENGTH = 50;

export default function ProjectIcon({ title, desc, url }: ProjectIconProps) {
  const description =
    desc.length > MAX_DESC_LENGTH
      ? desc.substring(0, MAX_DESC_LENGTH) + "..."
      : desc;

  return (
    <a href={url} className="block h-full">
      <div className="flex h-full min-h-28 w-full flex-col gap-2 border border-stone-700 p-3">
        <h1 className="w-full text-[12px] font-bold">{title}</h1>
        <p className="w-full text-[12px]">{description}</p>
        <div className="mt-auto flex w-full justify-end pt-2 text-xs">
          <SquareArrowOutUpRight className="inline" size={12} />
        </div>
      </div>
    </a>
  );
}
