import React from "react";

export default function Resume() {
  return (
    <section
      id="resume"
      style={{
        padding: "60px 20px",
        maxWidth: "900px",
        margin: "auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "var(--bg-secondary, #f9f9f9)",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
          borderRadius: "15px",
          overflow: "hidden",
          border: "1px solid var(--highlight)",
          maxHeight: "700px",
          marginBottom: "25px",
        }}
      >
        <embed
          src="/Uditha_Resume.pdf"
          type="application/pdf"
          width="100%"
          height="700px"
          style={{ display: "block" }}
        />
      </div>

      <div style={{ textAlign: "center" }}>
        <a
          href="/Uditha_Resume.pdf"
          download
          style={{
            backgroundColor: "var(--accent1)",
            color: "white",
            padding: "12px 28px",
            borderRadius: "30px",
            fontWeight: "600",
            textDecoration: "none",
            fontSize: "1.1rem",
            boxShadow: "0 4px 15px rgba(232, 162, 185, 0.6)",
            transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            userSelect: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--accent2)";
            e.currentTarget.style.boxShadow =
              "0 6px 20px rgba(232, 162, 185, 0.85)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--accent1)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(232, 162, 185, 0.6)";
          }}
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}