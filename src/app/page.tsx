"use client";

import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import { ThemeProvider } from "@/providers/ThemeProvider";

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/34326374/pexels-photo-34326374.png?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of a hand holding a coffee cup beside a laptop on a desk, indoors." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Top view of a diverse team collaborating in an office setting with laptops and tablets, promoting cooperation." },
  { "id": "feature-analytics-image", "url": "https://images.pexels.com/photos/6779716/pexels-photo-6779716.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Two professionals collaborating on financial documents in a modern office setting." },
  { "id": "team-sophie-image", "url": "https://images.pexels.com/photos/34326362/pexels-photo-34326362.png?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A cheerful woman organizing envelopes in a modern mailroom setting." }
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <NavbarLayoutFloatingInline
            navItems={[{ name: "Home", id: "home" }, { name: "About", id: "about" }, { name: "Services", id: "services" }, { name: "Contact", id: "contact" }]}
            brandName="Webild"
          />
        </div>
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Webild"
            description="Building innovative digital solutions for your business."
            imageSrc={assetMap.find(asset => asset.id === "hero-image")?.url || "/public/images/placeholder.webp"}
            imageAlt={assetMap.find(asset => asset.id === "hero-image")?.alt}
            buttons={[{ text: "Learn More", href: "about" }, { text: "Contact Us", href: "contact" }]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={["We're committed to delivering the best IT solutions.", "Our mission is to empower businesses with cutting-edge technology."]}
            buttons={[{ text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="features" data-section="features" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardThree
            features={[
              {
                id: "01",
                title: "Advanced Analytics",
                description: "Track performance with detailed insights.",
                imageSrc: assetMap.find(asset => asset.id === "feature-analytics-image")?.url || "/public/images/placeholder.webp",
                imageAlt: assetMap.find(asset => asset.id === "feature-analytics-image")?.alt
              },
              {
                id: "02",
                title: "Secure Solutions",
                description: "Protect your data with industry-leading security measures.",
                imageSrc: assetMap.find(asset => asset.id === "feature-analytics-image")?.url || "/public/images/placeholder.webp",
                imageAlt: assetMap.find(asset => asset.id === "feature-analytics-image")?.alt
              }
            ]}
            title="Our Features"
            description="Discover what makes us different."
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardThree
            members={[
              {
                id: "1",
                name: "Sophie P.",
                role: "Digital Nomad",
                imageSrc: assetMap.find(asset => asset.id === "team-sophie-image")?.url || "/public/images/placeholder.webp",
                imageAlt: assetMap.find(asset => asset.id === "team-sophie-image")?.alt
              },
              {
                id: "2",
                name: "David G.",
                role: "Tech Guru",
                imageSrc: assetMap.find(asset => asset.id === "team-sophie-image")?.url || "/public/images/placeholder.webp",
                imageAlt: assetMap.find(asset => asset.id === "team-sophie-image")?.alt
              }
            ]}
            title="Meet Our Team"
            description="Get to know the people behind our success."
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Newsletter"
            title="Stay Updated"
            description="Subscribe to our newsletter for updates."
            inputPlaceholder="Your email address"
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Features", href: "features" }] },
              { items: [{ label: "About", href: "about" }] }
            ]}
            logoText="Webild"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
