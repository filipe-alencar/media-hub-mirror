import { MessageCircle, Instagram, Mail, Globe } from "lucide-react";
import { SocialButton } from "@/components/SocialButton";
const Index = () => {
  return <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      {/* Main Content */}
      <div className="flex flex-col items-center text-center">
        {/* Name */}
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">Carol Ribeiro</h1>

        {/* Title */}
        <p className="mb-2 text-lg tracking-[0.3em] text-muted-foreground sm:text-xl md:text-2xl">
          PRODUÇÃO AUDIOVISUAL
        </p>

        {/* Subtitle */}
        <p className="mb-12 text-base text-muted-foreground sm:text-lg md:text-xl">
          Coord./1ª Assist. de Produção - Assist. de Direção
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6 sm:gap-8">
          <SocialButton href="https://wa.me/5500000000000" icon={<MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />} label="WhatsApp" />
          <SocialButton href="https://instagram.com" icon={<Instagram className="h-7 w-7 sm:h-8 sm:w-8" />} label="Instagram" />
          <SocialButton href="mailto:contato@mariasilva.com" icon={<Mail className="h-7 w-7 sm:h-8 sm:w-8" />} label="Email" />
          <SocialButton href="https://mariasilva.com" icon={<Globe className="h-7 w-7 sm:h-8 sm:w-8" />} label="Website" />
        </div>
      </div>
    </div>;
};
export default Index;