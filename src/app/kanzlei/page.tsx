"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import MediaAbout from "@/components/sections/about/MediaAbout";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";

export default function AboutPage() {
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

      <div id="about-detail" data-section="about-detail">
        <MediaAbout
          title="Die Kanzlei Strobl - Ihr vertrauensvoller Rechtspartner"
          description="Seit mehr als zwei Jahrzehnten bietet Rechtsanwalt Gerhard Strobl umfassende, diskrete und ergebnisorientierte Rechtsberatung. Die Kanzlei Strobl steht für persönliche Betreuung, tiefgreifende Expertise und das absolute Vertrauen unserer Mandanten. Wir verstehen, dass rechtliche Angelegenheiten oft sensibel und komplex sind – daher behandeln wir jedes Mandat mit höchster Sorgfalt und Professionalität."
          tag="Über die Kanzlei"
          buttons={[{ text: "Kostenloses Erstgespräch vereinbaren", href: "/kontakt" }]}
          imageSrc="http://img.b2bpic.net/free-photo/positive-business-team-discussing-report-sitting-meeting-table-with-monitor-holding-looking-documents-business-meeting-teamwork-concept_74855-11909.jpg"
          imageAlt="Das Team der Kanzlei Strobl bei der Beratung"
          useInvertedBackground={false}
        />
      </div>

      <div id="kanzlei-metrics" data-section="kanzlei-metrics">
        <MetricCardTwo
          metrics={[
            { id: "1", value: "20+", description: "Jahre erfolgreiche Praxis" },
            { id: "2", value: "500+", description: "Erfolgreich abgeschlossene Mandate" },
            { id: "3", value: "4.8★", description: "Bewertung durch Mandanten" },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          title="Unsere Erfolgsbilanz"
          description="Vertrauensvolle Zusammenarbeit, nachhaltige Ergebnisse"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="team-testimonials" data-section="team-testimonials">
        <TestimonialCardTen
          testimonials={[
            {
              id: "1",
              title: "Vertrauensvolle Partner in schwierigen Zeiten",
              quote: "Die Zusammenarbeit mit der Kanzlei Strobl hat mein Vertrauen in die Rechtspflege wiederhergestellt. Herr Strobl hat sich Zeit für mich genommen und wirklich verstanden, was für mich wichtig ist.",
              name: "Dr. Michael Lehmann",
              role: "Geschäftsführer",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-competitive-employee_1098-2870.jpg",
              imageAlt: "Dr. Michael Lehmann",
            },
            {
              id: "2",
              title: "Exzellente Fachkompetenz und menschliche Nähe",
              quote: "In einer sehr schwierigen Situation war Herr Strobl nicht nur mein Rechtsanwalt, sondern auch ein verständnisvoller Gesprächspartner. Seine Kompetenz und sein Einfühlungsvermögen sind beeindruckend.",
              name: "Elisabeth Weber",
              role: "Privatperson",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-competitive-employee_1098-2870.jpg",
              imageAlt: "Elisabeth Weber",
            },
            {
              id: "3",
              title: "Professionalität auf höchstem Niveau",
              quote: "Ich habe mit vielen Anwälten zu tun. Herr Strobl hebt sich durch seine Gründlichkeit, Transparenz und unverwechselbare Professionalität ab. Er ist ein echter Experte in seinem Fachgebiet.",
              name: "Thomas Beckmann",
              role: "Unternehmer",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-competitive-employee_1098-2870.jpg",
              imageAlt: "Thomas Beckmann",
            },
          ]}
          title="Das sagen unsere Mandanten über uns"
          description="Echte Erfahrungen von Menschen, die uns vertrauen"
          textboxLayout="default"
          useInvertedBackground={false}
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