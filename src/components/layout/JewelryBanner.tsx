import Image from 'next/image';

const JewelryBanner = () => (
  <section
    className="relative w-full h-[100vh] flex items-center justify-center bg-black/60 overflow-hidden"
    style={{ minHeight: '600px' }}
  >
    <Image
      src="/your-jewelry-bg.jpg" // public papkaga mos rasm nomini qo'ying
      alt="Jewelry background"
      fill
      className="object-cover object-center z-0 opacity-60"
      priority
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
      <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-6 drop-shadow-lg">
        Elegentlikni yorqin taqinchoqlar bilan
      </h1>
      <p className="text-2xl md:text-3xl text-white text-center drop-shadow-lg">
        Biz bilan mukammal zargarlik buyumlarini toping.
      </p>
    </div>
  </section>
);

export default JewelryBanner;