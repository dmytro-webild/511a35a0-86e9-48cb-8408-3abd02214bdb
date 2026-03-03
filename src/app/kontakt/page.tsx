"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FaqBase from "@/components/sections/faq/FaqBase";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";

export default function ContactPage() {
  const navItems = [
    { name: "Startseite", id: "home" },
    { name: "Kanzlei", id: "kanzlei" },
    { name: "Rechtsgebiete", id: "rechtsgebiete" },
    { name: "FAQ", id: "faq" },
    { name: "Kontakt", id: "kontakt" },
  ];

  const footerColumns = [
    {
      title: "Navigation",
      items: [
        { label: "Startseite", href: "/" },
        { label: "Kanzlei", href: "/kanzlei" },
        { label: "Rechtsgebiete", href: "/rechtsgebiete" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Kontakt",
      items: [
        { label: "Termin vereinbaren", href: "/kontakt" },
        { label: "Telefon: +49 89 12345678", href: "tel:+498912345678" },
        { label: "Mail: kontakt@strobl-rechtsanwalt.de", href: "mailto:kontakt@strobl-rechtsanwalt.de" },
        { label: "Oberanger 42, 80331 München", href: "#" },
      ],
    },
    {
      title: "Rechtliches",
      items: [
        { label: "Impressum", href: "/impressum" },
        { label: "Datenschutz", href: "#datenschutz" },
        { label: "AGB", href: "#agb" },
        { label: "DAV Profil", href: "https://anwaltauskunft.de/anwaltssuche/gerhard-strobl-gjoey" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="compact"
      sizing="largeSmall"
      background="none"
      cardStyle="solid"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={navItems}
          button={{ text: "Termin vereinbaren", href: "/kontakt" }}
          brandName="Strobl"
        />
      </div>

      <div id="contact-form" data-section="contact-form">
        <ContactCenter
          tag="Kontakt"
          title="Vereinbaren Sie Ihren Termin"
          description="Kontaktieren Sie uns noch heute für ein kostenloses Erstgespräch. Wir sind bereit, Ihre rechtlichen Fragen zu klären und Sie mit voller Kompetenz zu beraten. Egal ob telefonisch, per E-Mail oder persönlich in unserer Kanzlei – wir kümmern uns um Sie."
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          inputPlaceholder="Ihre E-Mail-Adresse"
          buttonText="Termin anfragen"
          termsText="Mit dem Absenden erklären Sie sich einverstanden, dass wir Sie kontaktieren dürfen. Ihre Daten werden vertraulich behandelt."
        />
      </div>

      <div id="contact-faq" data-section="contact-faq">
        <FaqBase
          faqs={[
            {
              id: "1",
              title: "Wie kann ich die Kanzlei erreichen?",
              content: "Sie erreichen uns telefonisch unter +49 89 12345678, per E-Mail unter kontakt@strobl-rechtsanwalt.de oder besuchen Sie uns persönlich in unserem Büro in der Oberanger 42, 80331 München. Unsere Sprechzeiten sind Montag bis Freitag von 09:00 bis 17:00 Uhr.",
            },
            {
              id: "2",
              title: "Bieten Sie auch Telefon- oder Videobesprechungen an?",
              content: "Ja, gerne. Viele Mandanten nutzen Telefonberatungen für erste Gespräche oder regelmäßige Abstimmungen. Auch Videobesprechungen sind möglich. Besprechen Sie mit uns, welche Form für Ihre Situation am sinnvollsten ist.",
            },
            {
              id: "3",
              title: "Wie schnell kann ich einen Termin bekommen?",
              content: "Das hängt von der Dringlichkeit Ihres Anliegens ab. Für akute Angelegenheiten bemühen wir uns, kurzfristig einen Termin zu arrangieren. Standardberatungen können je nach Auslastung innerhalb von 1-2 Wochen stattfinden. Sprechen Sie uns an!",
            },
          ]}
          title="Kontakt – Häufige Fragen"
          description="Alles Wissenswerte zum Kontakt mit der Kanzlei Strobl"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          animationType="smooth"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={footerColumns}
          copyrightText="© 2025 Kanzlei Strobl | Rechtsanwalt Gerhard Strobl | Oberanger 42, 80331 München"
        />
      </div>
    </ThemeProvider>
  );
}