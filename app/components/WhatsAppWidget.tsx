"use client";

import { useState } from "react";

interface WhatsAppWidgetProps {
  phone: string; // e.g. "919627660757" (country code + number, no +)
  defaultMessage?: string;
}

export default function WhatsAppWidget({
  phone,
  defaultMessage = "Hi Ansh! I came across your portfolio and I'd love to connect. 👋",
}: WhatsAppWidgetProps) {
  const [open, setOpen] = useState(false);

  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      {/* Chat bubble */}
      {open && (
        <div className="animate-wa-pop w-[300px] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 bg-[#075e54]">
            <div className="relative flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white text-lg font-bold">
                A
              </div>
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-400 border-2 border-[#075e54]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-[15px] leading-tight">Ansh Deshwal</p>
              <p className="text-white/70 text-[12px]">Typically replies instantly</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white transition-colors ml-auto flex-shrink-0"
              aria-label="Close chat"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Message body */}
          <div className="bg-[#ece5dd] px-4 py-4">
            <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm max-w-[90%]">
              <p className="text-[#111b21] text-[14px] leading-relaxed">
                👋 Hi there! I&apos;m <strong>Ansh</strong>. Feel free to reach out — I&apos;d love to hear about your project or opportunity!
              </p>
              <p className="text-[10px] text-[#667781] text-right mt-1.5">
                {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#ece5dd] px-4 pb-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-[#25d366] hover:bg-[#20bd5b] text-white font-bold text-[15px] transition-colors shadow-md"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Open in WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat on WhatsApp"
        className="group relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25d366] shadow-xl shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/40"
      >
        {/* Ping ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-60 animate-ping-slow" />
        )}
        <WhatsAppIcon className="h-8 w-8 text-white relative z-10 transition-transform duration-300 group-hover:scale-110" />
      </button>
    </div>
  );
}

function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
