import "./OfferSection.css";

const OfferSection = () => {
  const services = [
    {
      title: "Personalized Fitness Plans",
      description: "Get AI-driven fitness plans tailored to your goals and body type.",
      icon: "🏋️",
    },
    {
      title: "AI Nutrition Guidance",
      description: "Smart meal planning based on your dietary needs and health status.",
      icon: "🥗",
    },
    {
      title: "Wellness Marketplace",
      description: "Shop premium wellness products and supplements with expert recommendations.",
      icon: "🛍️",
    },
    {
      title: "Live Coaching & Virtual Classes",
      description: "Join expert-led fitness classes and one-on-one coaching sessions.",
      icon: "🎥",
    },
    {
      title: "Health Tracking & Analytics",
      description: "Monitor your progress with real-time insights and AI analysis.",
      icon: "📊",
    },
  ];

  return (
    <section className="offer-section">
      <h2 className="section-title">What We Offer</h2>
      <div className="cards-container">
        {services.map((service, index) => (
          <div className="offer-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
