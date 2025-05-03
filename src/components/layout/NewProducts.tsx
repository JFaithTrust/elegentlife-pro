import Link from "next/link";

export default function NewProducts() {
  return (
    <section className="container mx-auto max-w-6xl py-12 px-0 rounded-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 my-16">
        {/* Chap tomon: matn */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Yangi kelgan atirlar</h1>
          <p className="text-xl mb-10">
            Oddiy kun bo‘lsin yoki bayram, biz doim elegent bo‘lish tarafdorimiz!
          </p>
          {/* <button className="border border-[#ba7d62] text-[#ba7d62] px-10 py-4 rounded-md text-lg font-medium hover:bg-[#ba7d62] hover:text-white transition">
            Xarid qilish
          </button> */}
          <Link 
  href="/category/atirlarelegentlife"
  className="px-10 py-4 rounded-md text-center bg-white border border-[#ba7d62] text-[#1a1a1a] py-2 rounded-md text-sm font-medium hover:bg-[#c6947d] hover:text-white transition-all block"
>
  Xarid qilish
</Link>
        </div>
        {/* O‘ng tomon: video */}
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-xl w-full">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/2Usx_SF8yDI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[315px]"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}