import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-[#e5d3c6] bg-white py-10 mt-16 text-[#7c5a47]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-2xl font-extrabold tracking-tight" style={{ color: '#BA7D62' }}>Elegentlife</span>
          <span className="text-xs">© {new Date().getFullYear()} Barcha huquqlar himoyalangan.</span>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm items-center">
          <a href="#" className="hover:text-[#BA7D62] transition-colors">Biz haqimizda</a>
          <a href="#" className="hover:text-[#BA7D62] transition-colors">Tez-tez so'raladigan savollar</a>
          <a href="#" className="hover:text-[#BA7D62] transition-colors">Aloqa</a>
          <a href="#" className="hover:text-[#BA7D62] transition-colors">Maxfiylik siyosati</a>
        </div>
        <div className="flex gap-4 items-center">
          <a href="#" aria-label="Telegram" className="hover:text-[#BA7D62]">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M9.036 15.956l-.398 4.01c.57 0 .818-.244 1.116-.537l2.675-2.56 5.547 4.05c1.016.56 1.74.266 1.99-.94l3.61-16.84c.33-1.55-.563-2.16-1.56-1.8L1.36 9.17c-1.52.6-1.5 1.46-.26 1.85l4.13 1.29 9.57-6.04c.45-.28.87-.13.53.18"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-[#BA7D62]">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.77.128 4.77.31 4.01.54c-.77.23-1.42.54-2.07 1.19-.65.65-.96 1.3-1.19 2.07-.23.76-.412 1.76-.47 3.04C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.28.24 2.28.47 3.04.23.77.54 1.42 1.19 2.07.65.65 1.3.96 2.07 1.19.76.23 1.76.412 3.04.47C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.28-.24 3.04-.47.77-.23 1.42-.54 2.07-1.19.65-.65.96-1.3 1.19-2.07.23-.76.412-1.76.47-3.04.058-1.28.07-1.684.07-4.948 0-3.264-.012-3.668-.07-4.948-.058-1.28-.24-2.28-.47-3.04-.23-.77-.54-1.42-1.19-2.07-.65-.65-1.3-.96-2.07-1.19-.76-.23-1.76-.412-3.04-.47C15.668.012 15.264 0 12 0z"/><circle cx="12" cy="12" r="3.2"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
