"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";

export default function ImpressumPage() {
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

      <div id="impressum" data-section="impressum" className="py-20">
        <div className="mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-medium mb-8">Impressum</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="mb-4">
              <strong>Kanzlei Strobl</strong><br />
              Rechtsanwalt Gerhard Strobl<br />
              Oberanger 42<br />
              80331 München<br />
              Deutschland
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4">Kontaktinformationen</h2>
            <p className="mb-2">
              <strong>Telefon:</strong> <a href="tel:+498912345678" className="text-primary-cta hover:underline">+49 89 12345678</a>
            </p>
            <p className="mb-2">
              <strong>E-Mail:</strong> <a href="mailto:kontakt@strobl-rechtsanwalt.de" className="text-primary-cta hover:underline">kontakt@strobl-rechtsanwalt.de</a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4">Berufsbezeichnung und Berufsordnung</h2>
            <p className="mb-4">
              <strong>Berufsbezeichnung:</strong> Rechtsanwalt (verliehen in der Bundesrepublik Deutschland)
            </p>
            <p className="mb-4">
              <strong>Kammer:</strong> Rechtsanwaltskammer München<br />
              <strong>Registrierung:</strong> Berufsregister der Bayerischen Rechtsanwaltskammer
            </p>
            <p className="mb-4">
              <strong>Berufsordnung:</strong> Die für die Tätigkeit geltenden beruflichen Regeln entnehmen Sie bitte der Berufsordnung für Rechtsanwälte (BRAO) und der Satzung der Rechtsanwaltskammer München.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Rechtsanwalt Gerhard Strobl<br />
              Oberanger 42<br />
              80331 München
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4">Haftungsausschluss</h2>
            <p className="mb-4">
              Die Inhalte dieser Website werden mit großer Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
            </p>
            <p className="mb-4">
              Die Inhalte dieser Website stellen keine Rechtsberatung dar und ersetzen diese nicht. Eine Rechtsberatung kann nur in persönlichen Gesprächen erfolgen, in denen alle Umstände des Einzelfalls berücksichtigt werden.
            </p>
            <p>
              Die Kanzlei Strobl haftet nicht für Schäden, die durch die Nutzung dieser Website entstehen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4">Datenschutz</h2>
            <p className="mb-4">
              Die Verarbeitung personenbezogener Daten erfolgt gemäß der Datenschutzerklärung und der Datenschutz-Grundverordnung (DSGVO).
            </p>
            <p>
              Betroffenenrechte: Sie haben das Recht, Auskunft über Ihre bei uns gespeicherten persönlichen Daten zu erhalten, diese zu berichtigen oder zu löschen. Bitte kontaktieren Sie uns unter den oben angegebenen Kontaktdaten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">Externe Links</h2>
            <p>
              Diese Website enthält Links zu externen Websites. Die Kanzlei Strobl hat keinen Einfluss auf den Inhalt dieser Seiten und übernimmt keine Haftung für diese. Für den Inhalt der verlinkten Seiten ist jeweils der Betreiber verantwortlich.
            </p>
          </section>
        </div>
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