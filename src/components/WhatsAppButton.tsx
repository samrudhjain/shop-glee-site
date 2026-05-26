import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi! I'm interested in your mobile phones."
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-5 py-4 text-whatsapp-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden font-semibold sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
