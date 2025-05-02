'use client'
import React, { useState } from 'react';

const faqData = [
  {
    question: "Xalqaro savdoni taklif qilasizlarmi?",
    answer: "Ha, biz xalqaro savdoni ham taklif qilamiz. Siz istalgan mamlakatdan buyurtma berishingiz mumkin va biz yetkazib beramiz.",
  },
  {
    question: "Elegentlifeda sotish narxi qancha?",
    answer: "Elegentlife platformasida mahsulot narxlari mahsulot turiga va yetkazib berish hududiga qarab farq qiladi. Har bir mahsulot sahifasida narxlar ko'rsatilgan.",
  },
  {
    question: "Elegentlifeda qanday savdo qilsam bo'ldi?",
    answer: "Platformamizda ro'yxatdan o'tib, mahsulotlaringizni joylashtirishingiz va xaridorlar bilan to'g'ridan-to'g'ri savdo qilishingiz mumkin.",
  },
  {
    question: "Shartnoma sanasini qayerda ko'rish mumkin?",
    answer: "Shartnoma sanasini shaxsiy kabinetingizdagi Mening shartnomalarim bo'limidan topishingiz mumkin.",
  },
  {
    question: "Elegentlifeni komissioner sifatida kiritish mumkinmi?",
    answer: "Ha, siz Elegentlife platformasida komissioner sifatida ham faoliyat yuritishingiz mumkin. Buning uchun maxsus ariza topshirishingiz kerak.",
  },
  {
    question: "Ro'yxatdan o'tish uchun qanday hujjatlar kerak?",
    answer: "Ro'yxatdan o'tish uchun shaxsni tasdiqlovchi hujjat va aloqa ma'lumotlari talab qilinadi.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold mb-10 text-[#BA7D62]">Tez-tez so&apos;raladigan savollar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
        <div>
          {faqData.slice(0, 3).map((item, idx) => (
            <div key={idx} className="border-b border-[#e5d3c6] py-6 flex flex-col">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => handleToggle(idx)}>
                <span className="text-lg font-medium text-gray-800">{item.question}</span>
                <span className="text-2xl text-[#BA7D62] select-none">
                  {openIndex === idx ? '×' : '+'}
                </span>
              </div>
              {openIndex === idx && item.answer && (
                <div className="mt-3 text-[#7c5a47] text-base font-normal">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          {faqData.slice(3).map((item, idx) => (
            <div key={idx + 3} className="border-b border-[#e5d3c6] py-6 flex flex-col">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => handleToggle(idx + 3)}>
                <span className="text-lg font-medium text-gray-800">{item.question}</span>
                <span className="text-2xl text-[#BA7D62] select-none">
                  {openIndex === idx + 3 ? '×' : '+'}
                </span>
              </div>
              {openIndex === idx + 3 && item.answer && (
                <div className="mt-3 text-[#7c5a47] text-base font-normal">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
