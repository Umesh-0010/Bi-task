import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const allLinks = [
  {
    id: 1,
    title: "National Tribal Research Portal",
    url: "https://tribal.nic.in/",
  },
  {
    id: 2,
    title: "Ministry of Tribal Affairs – Govt. of India",
    url: "https://tribal.gov.in/",
  },
  {
    id: 3,
    title: "State Portal of Sikkim",
    url: "https://www.sikkim.gov.in/",
  },
  {
    id: 4,
    title: "Social Welfare Department- Govt. of Sikkim",
    url: "https://socialwelfare.sikkim.gov.in/",
  },
  {
    id: 5,
    title: "National Commission for Scheduled Tribes",
    url: "https://ncst.nic.in/",
  },
  {
    id: 6,
    title: "Tribal Cooperative Marketing Federation",
    url: "https://trifed.in/",
  },
  {
    id: 7,
    title: "Ministry of Law and Justice",
    url: "https://lawmin.gov.in/",
  },
  {
    id: 8,
    title: "India.gov.in – National Portal",
    url: "https://india.gov.in/",
  },
  {
    id: 9,
    title: "Digital India Initiative",
    url: "https://digitalindia.gov.in/",
  },
  {
    id: 10,
    title: "MyGov India",
    url: "https://mygov.in/",
  },
  {
    id: 11,
    title: "Sikkim Govt. Official Portal",
    url: "https://sikkim.gov.in/",
  },
];

const ITEMS_PER_PAGE = 4;
const totalPages = Math.ceil(allLinks.length / ITEMS_PER_PAGE);

export default function RelatedLinks() {
  const [page, setPage] = useState(0);

  const currentItems = allLinks.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  return (
    <div className="bg-[#2b7db8] rounded-2xl p-6 w-full border-1 border-sky-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase">
          Related Links
        </p>

        <span className="text-white text-xs border border-white/40 rounded-full px-3 py-1">
          {allLinks.length} Links
        </span>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 min-h-[120px] ">
        {currentItems.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-3 bg-[#3a8ec9] hover:bg-[#4499d4] transition-colors rounded-xl p-4 group  border-1 border-sky-100"
          >
            {/* Icon */}
            <div className="min-w-[34px] h-[34px] rounded-lg bg-[#2b7db8] flex items-center justify-center mt-0.5  border-1 border-sky-100">
              <ExternalLink size={15} className="text-yellow-400 " />
            </div>

            {/* Text */}
            <div>
              <p className="text-white text-sm font-semibold leading-snug group-hover:underline">
                {link.title}
              </p>

              <p className="text-blue-200 text-xs mt-1 break-all">{link.url}</p>
            </div>
          </a>
        ))}
      </div>
 

 

      {/* Pagination */}
      <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent mt-6" />
      <div className="flex items-center justify-center gap-3 mt-4  ">
        {/* Prev */}
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition"
        >
          <ChevronLeft size={14} />
        </button>

        {/* Dots */}
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`rounded-full transition-all ${
              i === page ? "bg-yellow-400 w-6 h-3" : "bg-white/40 w-3 h-3"
            }`}
          />
        ))}

        {/* Next */}
        <button
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page === totalPages - 1}
          className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition"
        >
          <ChevronRight size={14} />
        </button>

        <span className="text-white/70 text-xs ml-1">
          {page + 1} of {totalPages}
        </span>
      </div>
      <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent  mt-4" />

    </div>
  );
}
