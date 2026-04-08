export interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  summary: string;
}

export const ExperienceContainer = ({
  experiences,
}: {
  experiences: ExperienceItem[];
}) => {
  return (
    <div className="space-y-4">
      {experiences.map((item) => (
        <div
          key={`${item.company}-${item.dates}`}
          className="grid grid-cols-1 gap-2 sm:grid-cols-[170px_minmax(0,1fr)] sm:gap-4"
        >
          <div className="text-stone-400">{item.dates}</div>
          <div className="space-y-1">
            <div className="font-bold">{item.company}</div>
            <div>{item.role}</div>
            <p>{item.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
