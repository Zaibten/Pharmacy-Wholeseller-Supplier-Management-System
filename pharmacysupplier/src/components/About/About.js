import React from "react";

const About = () => {
const styles = {
  page: {
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#fff",
    color: "#222",
    padding: "0",
    margin: "0",
  },
  section: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "80px 20px",
  },
  header: {
    fontSize: "42px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "20px",
    color: "#111",
  },
  subHeader: {
    textAlign: "center",
    fontSize: "18px",
    color: "#666",
    marginBottom: "60px",
    maxWidth: "600px",
    marginInline: "auto",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  columnText: {
    flex: "1 1 500px",
    fontSize: "16px",
    color: "#444",
    lineHeight: "1.7",
  },
  columnImage: {
    flex: "1 1 400px",
  },
  image: {
    width: "100%",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    objectFit: "cover",
  },
  highlight: {
    backgroundColor: "#f3f3f3",
    padding: "40px 30px",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: "500",
    textAlign: "center",
    color: "#000",
    margin: "60px 0",
  },
  stats: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "space-between",
    marginTop: "40px",
  },
  statCard: {
    flex: "1 1 250px",
    backgroundColor: "#fafafa",
    padding: "30px 20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.04)",
  },
  statNumber: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#e29521", // 🔶 changed from #e91e63
  },
  statLabel: {
    fontSize: "14px",
    color: "#666",
    marginTop: "8px",
  },
  testimonials: {
    marginTop: "80px",
  },
  testimonialCard: {
    backgroundColor: "#fdfdfd",
    borderLeft: "5px solid #e29521", // 🔶 changed from #e91e63
    padding: "30px",
    marginBottom: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.04)",
  },
  testimonialText: {
    fontStyle: "italic",
    color: "#444",
  },
  testimonialAuthor: {
    marginTop: "12px",
    fontWeight: "bold",
    color: "#000",
  },
  footer: {
    marginTop: "80px",
    padding: "30px 20px",
    textAlign: "center",
    fontSize: "14px",
    color: "#aaa",
    borderTop: "1px solid #eee",
  },
};


  return (
 <div style={styles.page}>
  <div style={styles.section}>
    <h1
      style={{
        fontSize: "40px",
        fontWeight: "700",
        textAlign: "center",
        marginBottom: "30px",
        background:
          "linear-gradient(90deg, #f5f7fa 0%,rgb(159, 167, 179) 100%)",
        color: "#333",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      ABOUT Pharma Sync
    </h1>

    <p style={styles.subHeader}>
      Bridging patients, pharmacies, and wholeseller — trusted medicines,
      delivered fast and reliably.
    </p>

    {/* Main Content */}
    <div style={styles.row}>
      <div style={styles.columnText}>
        <p>
          <strong>Pharma Sync</strong> is the simplest way to manage and access
          medicines around you. Whether you need life-saving drugs, daily
          essentials, or healthcare products — we’re here to ensure safe and
          timely delivery.
        </p>
        <p>
          We partner with trusted pharmacies, wholesalers, and wholeseller to
          provide authentic medicines, real-time stock updates, and seamless
          ordering. Our mission is to make healthcare accessible and reliable
          for everyone.
        </p>
      </div>
      <div style={styles.columnImage}>
        <img
          src="https://img.pikbest.com/wp/202413/medical-health-care-three-dimensional-gene-chain-products-web-banner_9105592.jpg!w700wp"
          alt="Medicines and healthcare"
          style={styles.image}
        />
      </div>
    </div>

    {/* Highlight Section */}
    <div style={styles.highlight}>
      “We deliver not just medicines, but trust, care, and health at your
      doorstep.”
    </div>

    {/* Statistics */}
    <div style={styles.stats}>
      <div style={styles.statCard}>
        <div style={styles.statNumber}>25K+</div>
        <div style={styles.statLabel}>Medicines Delivered</div>
      </div>
      <div style={styles.statCard}>
        <div style={styles.statNumber}>3.2K+</div>
        <div style={styles.statLabel}>Pharmacies Partnered</div>
      </div>
      <div style={styles.statCard}>
        <div style={styles.statNumber}>99.2%</div>
        <div style={styles.statLabel}>Customer Trust</div>
      </div>
    </div>

    {/* Testimonials */}
    <div style={styles.testimonials}>
      <h2
        style={{ ...styles.header, fontSize: "28px", marginBottom: "40px" }}
      >
        What Our Customers Say
      </h2>

      <div style={styles.testimonialCard}>
        <p style={styles.testimonialText}>
          "Fast delivery, genuine medicines, and excellent support. Pharma Sync
          makes getting my prescriptions so easy!"
        </p>
        <div style={styles.testimonialAuthor}>– Sarah J.</div>
      </div>

      <div style={styles.testimonialCard}>
        <p style={styles.testimonialText}>
          "Pharma Sync completely changed how I purchase medicines. It’s smooth
          and reliable every time."
        </p>
        <div style={styles.testimonialAuthor}>– Mike T.</div>
      </div>

      <div style={styles.testimonialCard}>
        <p style={styles.testimonialText}>
          "Safe, affordable, and quick delivery! Highly recommend to anyone
          needing medicines on time."
        </p>
        <div style={styles.testimonialAuthor}>– Nimra.</div>
      </div>
    </div>
  </div>
</div>

  );
};

export default About;
