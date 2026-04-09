import Link from "next/link";

import AlbumContainer from "@/components/album-container";

const albums = [
  {
    title: "Riviera",
    artist: "The Hellp",
    coverSrc: "/music/riviera.png",
  },
  {
    title: "Mezzanine",
    artist: "Massive Attack",
    coverSrc: "/music/mezzanine.png",
  },
  {
    title: "Songs For The Blind",
    artist: "S W A N S",
    coverSrc: "/music/sftb.png",
  },
  {
    title: "Third Eye Blind",
    artist: "Third Eye Blind",
    coverSrc: "/music/third-eye-blind.png",
  },
];

export default function MusicPage() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col px-4 py-4 text-[12px] sm:px-6">
      <div className="mx-auto w-full">
        <section className="pb-6">
          <div className="space-y-2">
            <p>
              Below are a few of my favorite albums in no particular order, I
              think I just enjoy working on this website for fun. If you have
              similar taste, I&apos;d love to chat about it or get
              recommendations for what to listen to next.
            </p>
          </div>
        </section>

        <section>
          <h1 className="pb-4 font-bold">Albums</h1>
          <div className="flex flex-col gap-3">
            {albums.map((album) => (
              <AlbumContainer
                key={`${album.artist}-${album.title}`}
                title={album.title}
                artist={album.artist}
                coverSrc={album.coverSrc}
              />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 underline decoration-stone-400">
            <Link href="/">Back</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
