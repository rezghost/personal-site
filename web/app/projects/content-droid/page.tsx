import Link from "next/link";

export default function ContentDroidPage() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col px-4 py-4 text-[12px] sm:px-6">
      <div className="mx-auto w-full">
        <section className="pb-6">
          <div className="space-y-2">
            <p>
              <span className="font-bold">Content Droid</span> was a distributed
              video-generation application built to turn short prompts into
              fully rendered social video clips with automated narration and
              subtitles. The project was ultimately taken offline because the
              cloud infrastructure required to run it reliably was too costly to
              justify as a side project.
            </p>
            <p>
              The system was designed as an asynchronous pipeline rather than a
              single monolith. A Next.js frontend handled prompt submission and
              status updates, a Spring Boot API (migrating to .NET) accepted
              requests and persisted job state, RabbitMQ handled queueing, and a
              Python processor generated the final output before uploading it to
              cloud storage, leveraging TikTok exposed endpoints for the
              text-to-speech voiceovers and FFmpeg for video processing.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 underline decoration-stone-400">
              <a
                href="https://github.com/rezghost/ContentDroid"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <Link href="/">Back</Link>
            </div>
          </div>
        </section>

        <section className="border-t border-stone-700 py-6">
          <h1 className="pb-4 text-lg font-bold">Architecture</h1>
          <div className="space-y-2">
            <p>
              Content Droid was composed of four main runtime components: a
              `web` application for user interaction, an `api` service for
              request handling and status tracking, a RabbitMQ queue for job
              orchestration, and a `processor` worker responsible for the
              expensive generation pipeline.
            </p>
            <p>
              PostgreSQL stored job lifecycle state, while Google Cloud services
              handled deployment and asset storage. This separation made the
              system easier to reason about and gave each component a clear
              responsibility, especially around long-running media jobs.
            </p>
          </div>
        </section>

        <section className="border-t border-stone-700 py-6">
          <h1 className="pb-4 text-lg font-bold">Why It Came Down</h1>
          <div className="space-y-2">
            <p>
              The most expensive part of the system was the processor layer,
              which handled the actual generation work and depended on cloud
              compute, storage, queueing, and database infrastructure. Keeping
              those services available for a personal project created an ongoing
              cost that outweighed the value of keeping the application live.
            </p>
            <p>
              Even so, the project was valuable as a practical system design
              exercise. It explored asynchronous job processing, multi-service
              communication, cloud deployment concerns, and the tradeoffs that
              come with building media pipelines on rented infrastructure. The
              code is still available on GitHub and I will probably bring it
              back online soon with a more efficent architecture since this was
              mainly a learning exercise.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
