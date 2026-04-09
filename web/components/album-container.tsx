import Image from "next/image";

interface AlbumContainerProps {
  title: string;
  artist: string;
  coverSrc: string;
}

export default function AlbumContainer({
  title,
  artist,
  coverSrc,
}: AlbumContainerProps) {
  return (
    <div className="flex items-center gap-3 border border-stone-700 p-3 sm:gap-4">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden border border-stone-700 sm:h-24 sm:w-24">
        <Image
          src={coverSrc}
          alt={`${title} cover art`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 80px, 96px"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h2 className="truncate font-bold">{title}</h2>
        <p className="text-stone-400">{artist}</p>
      </div>
    </div>
  );
}
