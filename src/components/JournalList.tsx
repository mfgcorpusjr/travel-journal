import JournalListItem from "@/components/JournalListItem";

import data from "@/data";

export default function JournalList() {
  return (
    <div className="max-w-2xl mx-auto mt-8 px-4 divide-y-1 divide-gray-100">
      {data.map((journal) => (
        <JournalListItem key={journal.id} journal={journal} />
      ))}
    </div>
  );
}
