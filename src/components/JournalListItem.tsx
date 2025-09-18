import markerImg from "@/assets/marker.png";

import { type Journal } from "@/types";

type JournalListItemProps = {
  journal: Journal;
};

export default function JournalListItem({ journal }: JournalListItemProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 py-4">
      <div className="w-full md:w-40">
        <img className="object-cover w-full h-48 rounded-lg" {...journal.img} />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-2">
            <img src={markerImg} className="h-4" />
            <span className="text-xs uppercase tracking-widest">
              {journal.country}
            </span>
          </div>

          <a
            href={journal.googleMapsLink}
            target="_blank"
            className="text-gray-400 text-xs underline"
          >
            View on Google Maps
          </a>
        </div>

        <h3 className="mb-4 text-2xl font-bold">{journal.title}</h3>
        <div className="mb-2 text-sm font-semibold">{journal.dates}</div>
        <p className="text-gray-500 text-sm">{journal.text}</p>
      </div>
    </div>
  );
}
