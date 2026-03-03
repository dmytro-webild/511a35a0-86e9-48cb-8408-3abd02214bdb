"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import FeatureCardTwentyThree from "@/components/sections/feature/FeatureCardTwentyThree";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";

export default function ServicesPage() {
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

      <div id="services-features" data-section="services-features">
        <FeatureCardTwentyThree
          features={[
            {
              id: "1",
              title: "Vertragsrecht - Sicherheit durch Expertise",
              tags: ["Gewerblich", "Privat", "Vollumfassend"],
              imageSrc: "http://img.b2bpic.net/free-photo/sales-contract-forms-documents-legal-concept_53876-134015.jpg?_wi=2",
              imageAlt: "Vertragsrecht und Vertragsgestaltung",
            },
            {
              id: "2",
              title: "Betreuungsrecht - Fürsorge und Sicherheit",
              tags: ["Kompetenz", "Empathie", "Rechtssicherheit"],
              imageSrc: "http://img.b2bpic.net/free-photo/middle-aged-couple-meeting-with-notary_74855-2978.jpg?_wi=2",
              imageAlt: "Betreuungsrecht und Vollmachten",
            },
            {
              id: "3",
              title: "Mediation - Konflikte konstruktiv lösen",
              tags: ["Neutral", "Effizient", "Win-Win"],
              imageSrc: "http://img.b2bpic.net/free-photo/stressed-woman_1098-14869.jpg?_wi=2",
              imageAlt: "Mediation und Konfliktlösung",
            },
          ]}
          animationType="slide-up"
          title="Unsere Rechtsgebiete"
          description="Spezialisierte Beratung in den Bereichen, die für Sie entscheidend sind. Jedes Rechtsgebiet mit voller Expertise und strategischer Weitsicht."
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="services-expertise" data-section="services-expertise">
        <MetricCardTwo
          metrics={[
            { id: "1", value: "3", description: "Hauptrechtsgebiete" },
            { id: "2", value: "20+", description: "Jahre Fachkompetenz" },
            { id: "3", value: "500+", description: "Erfolgreiche Fälle" },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          title="Expertise in Zahlen"
          description="Tiefgreifende Spezialisierung und bewährte Ergebnisse"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="services-cta" data-section="services-cta">
        <ContactCenter
          tag="Nächste Schritte"
          title="Vereinbaren Sie ein Beratungsgespräch"
          description="Möchten Sie mehr über unsere Rechtsgebiete erfahren oder haben Sie bereits eine konkrete Frage? Kontaktieren Sie uns für eine persönliche, unverbindliche Beratung."
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          inputPlaceholder="Ihre E-Mail-Adresse"
          buttonText="Termin anfragen"
          termsText="Mit dem Absenden erklären Sie sich einverstanden, dass wir Sie kontaktieren dürfen. Ihre Daten werden vertraulich behandelt."
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