import "../style/Features.css";

function Features() {
  const features = [
    {
      icon: "⭐",
      title: "Top Brands",
      text: "100% Original Products",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      text: "On All Orders",
    },
    {
      icon: "🛡️",
      title: "Secure Payment",
      text: "100% Secure",
    },
    {
      icon: "↩️",
      title: "Easy Returns",
      text: "7-Day Returns",
    },
    {
      icon: "🎧",
      title: "24/7 Support",
      text: "Dedicated Support",
    },
  ];

  return (
    <section className="features">
      {features.map((item, index) => (
        <div className="feature-card" key={index}>
          <span className="icon">{item.icon}</span>

          <div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Features;