import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";
const CALL_NUMBER = "919876543210";

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi! I'm interested in your mobile phones."
  )}`;
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <a
        href={`tel:+${CALL_NUMBER}`}
        aria-label="Call now"
        className="flex items-center gap-2 rounded-full px-5 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105 active:scale-95"
        style={{ background: "var(--gradient-brand)" }}
      >
        <Phone className="h-6 w-6" />
        <span className="hidden sm:inline">Call Now</span>
      </a>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2 rounded-full bg-whatsapp px-5 py-4 text-whatsapp-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105 active:scale-95"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden font-semibold sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
