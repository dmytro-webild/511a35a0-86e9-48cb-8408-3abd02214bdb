"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";

export default function FaqPage() {
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

      <div id="faq-section" data-section="faq-section">
        <FaqBase
          faqs={[
            {
              id: "1",
              title: "Wie läuft ein erstes Gespräch ab?",
              content: "Das Erstgespräch ist unverbindlich und dient ausschließlich der gegenseitigen Kenntnisnahme. Sie schildern Ihre rechtliche Angelegenheit, und Herr Strobl beurteilt, wie er Sie optimal unterstützen kann. Gesprächsdauer: ca. 30 Minuten. Gerne erfolgt dieses Gespräch telefonisch oder in der Kanzlei.",
            },
            {
              id: "2",
              title: "Welche Gebühren entstehen?",
              content: "Die Gebührenordnung richten sich nach dem Rechtsanwaltsvergütungsgesetz (RVG). Wir bieten klare Gebührenkalkulationen und transparente Kostenaufstellungen. Für viele Angelegenheiten ist eine Pauschalgebühr möglich. Eine detaillierte Gebührenvereinbarung erfolgt vor Mandatsannahme.",
            },
            {
              id: "3",
              title: "Bin ich an die Kanzlei langfristig gebunden?",
              content: "Nein. Sie können die Vertretung jederzeit beenden. Es gibt keine versteckten Bindungen. Die Zusammenarbeit sollte auf gegenseitigem Vertrauen basieren. Ihre Akten werden Ihnen selbstverständlich zur Verfügung gestellt.",
            },
            {
              id: "4",
              title: "Wie wird die Vertraulichkeit gewährleistet?",
              content: "Absolute Verschwiegenheit ist das Fundament unserer Arbeit. Rechtsanwälte unterliegen dem Berufsgeheimnis nach § 203 StGB. Alle Ihre Informationen werden vertraulich behandelt und nicht an Dritte weitergegeben – es sei denn, Sie erteilen ausdrücklich Ihre Zustimmung.",
            },
            {
              id: "5",
              title: "Kann ich einen Termin kurzfristig vereinbaren?",
              content: "Ja, in vielen Fällen ja. Bei dringenden Angelegenheiten bemüht sich Herr Strobl, zeitnah einen Termin anzubieten. Kontaktieren Sie die Kanzlei telefonisch oder per E-Mail. Für akute Rechtsfragen helfen wir schnell und zuverlässig weiter.",
            },
            {
              id: "6",
              title: "Welche Rechtsgebiete betreut die Kanzlei?",
              content: "Der Schwerpunkt liegt auf Vertragsrecht (kaufmännisch und privat), Betreuungsrecht sowie Mediation. Darüber hinaus bieten wir umfassende Beratung in verwandten Bereichen wie Familienrecht, Erbrecht und allgemeinem Zivilrecht. Gerne erörtern wir Ihr Anliegen im persönlichen Gespräch.",
            },
          ]}
          title="Häufig gestellte Fragen"
          description="Klare Antworten auf Ihre wichtigsten Fragen zur Rechtsberatung und Zusammenarbeit mit der Kanzlei Strobl"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          animationType="smooth"
        />
      </div>

      <div id="faq-cta" data-section="faq-cta">
        <ContactCenter
          tag="Weitere Fragen?"
          title="Wir sind für Sie da"
          description="Falls Ihre Frage nicht beantwortet wurde, kontaktieren Sie uns direkt. Wir beantworten gerne alle Ihre rechtlichen Fragen persönlich und kompetent."
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          inputPlaceholder="Ihre E-Mail-Adresse"
          buttonText="Jetzt anfragen"
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