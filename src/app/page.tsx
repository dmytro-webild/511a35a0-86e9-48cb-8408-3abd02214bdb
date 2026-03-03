"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroLogoBillboard from "@/components/sections/hero/HeroLogoBillboard";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FeatureCardTwentyThree from "@/components/sections/feature/FeatureCardTwentyThree";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Kanzlei Strobl"
          description="Ihr Recht in sicheren Händen. Kompetente rechtliche Beratung in Vertragsrecht, Betreuungsrecht und Mediation. Gegründet auf Vertrauen, Diskretion und juristische Exzellenz."
          buttons={[
            { text: "Kostenloses Erstgespräch", href: "/kontakt" },
            { text: "Rechtsgebiete entdecken", href: "/rechtsgebiete" },
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          imageSrc="http://img.b2bpic.net/free-photo/serious-businessman-sitting-office-reading-business-reports-there-are-people-background_637285-218.jpg"
          imageAlt="Moderne Kanzlei mit professionellem Arbeitsbereich"
          mediaAnimation="opacity"
          frameStyle="card"
          ariaLabel="Hero-Bereich: Kanzlei Strobl"
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Juristische Exzellenz seit Jahrzehnten"
          description="Rechtsanwalt Gerhard Strobl bringt langjährige Erfahrung und tiefgreifende Expertise in jedem Mandat mit. Die Kanzlei steht für persönliche Beratung, strategische Kompetenz und absolute Mandantenorientierung. Jeder Fall erhält die volle Aufmerksamkeit und Sorgfalt, die er verdient."
          tag="Über die Kanzlei"
          buttons={[{ text: "Zur Kanzlei", href: "/kanzlei" }]}
          imageSrc="http://img.b2bpic.net/free-photo/positive-business-team-discussing-report-sitting-meeting-table-with-monitor-holding-looking-documents-business-meeting-teamwork-concept_74855-11909.jpg"
          imageAlt="Elegante Kanzleiräume mit klassischem Design"
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyThree
          features={[
            {
              id: "1",
              title: "Vertragsrecht",
              tags: ["Expertise", "Gewerblich & Privat"],
              imageSrc: "http://img.b2bpic.net/free-photo/sales-contract-forms-documents-legal-concept_53876-134015.jpg",
              imageAlt: "Vertragsrecht-Expertise",
            },
            {
              id: "2",
              title: "Betreuungsrecht",
              tags: ["Kompetenz", "Fürsorglichkeit"],
              imageSrc: "http://img.b2bpic.net/free-photo/middle-aged-couple-meeting-with-notary_74855-2978.jpg",
              imageAlt: "Betreuungsrecht-Beratung",
            },
            {
              id: "3",
              title: "Mediation",
              tags: ["Lösungsorientiert", "Konfliktlösung"],
              imageSrc: "http://img.b2bpic.net/free-photo/stressed-woman_1098-14869.jpg",
              imageAlt: "Mediation und Konfliktbeilegung",
            },
          ]}
          animationType="slide-up"
          title="Schwerpunkte der Rechtsberatung"
          description="Spezialisiert auf die Rechtsgebiete, die Ihnen wirklich wichtig sind. Umfassende Beratung mit strategischer Weitsicht."
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          metrics={[
            { id: "1", value: "4.8★", description: "Google Bewertung" },
            { id: "2", value: "500+", description: "Erfolgreiche Mandate" },
            { id: "3", value: "20+", description: "Jahre Erfahrung" },
            { id: "4", value: "100%", description: "Mandantenzufriedenheit" },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          title="Unsere Leistungsmetriken"
          description="Vertrauen durch Zahlen und Erfolgsgeschichten"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          testimonials={[
            {
              id: "1",
              title: "Außergewöhnliche juristische Kompetenz",
              quote: "Herr Strobl hat meine komplexe Vertragsangelegenheit mit bemerkenswerter Klarheit und strategischer Brillanz gelöst. Seine Beratung war absolut verlässlich und hat mir erhebliche Sicherheit gegeben.",
              name: "Dr. Michael Lehmann",
              role: "Geschäftsführer",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-competitive-employee_1098-2870.jpg",
              imageAlt: "Dr. Michael Lehmann",
            },
            {
              id: "2",
              title: "Diskrete und vertrauensvolle Beratung",
              quote: "In meiner schwierigen Betreuungsangelegenheit habe ich einen Partner gefunden, der echte Empathie mit juristischer Exzellenz vereint. Herr Strobl war stets erreichbar und präsent.",
              name: "Elisabeth Weber",
              role: "Privatperson",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-competitive-employee_1098-2870.jpg",
              imageAlt: "Elisabeth Weber",
            },
            {
              id: "3",
              title: "Mediation auf höchstem Niveau",
              quote: "Die Mediation durch Rechtsanwalt Strobl hat uns geholfen, einen festgefahrenen Konflikt lösen zu können. Sein Geschick, alle Parteien zu verstehen und faire Lösungen zu finden, ist bemerkenswert.",
              name: "Thomas Beckmann",
              role: "Unternehmer",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-competitive-employee_1098-2870.jpg",
              imageAlt: "Thomas Beckmann",
            },
            {
              id: "4",
              title: "Maximale Professionalität",
              quote: "Herr Strobl verkörpert das, was man von einem erstklassigen Anwalt erwartet: absolute Diskretion, tiefgreifende Fachkompetenz und echte Menschlichkeit. Ich kann ihn vollumfänglich empfehlen.",
              name: "Margarethe Hoffmann",
              role: "Vermögensverwalter",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-competitive-employee_1098-2870.jpg",
              imageAlt: "Margarethe Hoffmann",
            },
          ]}
          title="Was unsere Mandanten sagen"
          description="Bewährte Kompetenz durch echte Mandantenerfahrungen"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Kontakt"
          title="Vereinbaren Sie Ihren Termin"
          description="Kontaktieren Sie uns noch heute für ein kostenloses Erstgespräch. Wir sind bereit, Ihre rechtlichen Fragen zu klären und Sie mit voller Kompetenz zu beraten."
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