export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Amod Kumar Digital Marketing",
    "url": "https://amodkumar.com",
    "logo": "https://amodkumar.com/logo.png",
    "description": "Expert digital marketing services by Amod Kumar including SEO, Google Ads, Social Media Marketing, Content Creation, and Analytics.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Marketing Street",
      "addressLocality": "Digital City",
      "addressRegion": "DC",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "Customer Service",
      "email": "hello@amodkumar.com",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.facebook.com/amodkumar",
      "https://www.twitter.com/amodkumar",
      "https://www.linkedin.com/in/amodkumar",
      "https://www.instagram.com/amodkumar"
    ]
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "Amod Kumar Digital Marketing"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Optimization",
            "description": "Search Engine Optimization services to improve organic rankings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Ads & PPC",
            "description": "Pay-per-click advertising management and optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "description": "Social media strategy, content creation, and management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Creation",
            "description": "High-quality content writing and creation services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Analytics & Reporting",
            "description": "Data analytics and performance reporting services"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  );
}
