import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        background: "#f7f7f5",
        color: "#111",
        fontFamily: "Arial, Helvetica, sans-serif",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "650px" }}>
        <div
          style={{
            fontSize: "clamp(90px, 18vw, 180px)",
            lineHeight: 0.8,
            fontWeight: 900,
            letterSpacing: "-10px",
            color: "#ff5c35",
          }}
        >
          404
        </div>

        <h1
          style={{
            marginTop: "50px",
            fontSize: "clamp(35px, 6vw, 65px)",
            letterSpacing: "-3px",
          }}
        >
          Page not found.
        </h1>

        <p
          style={{
            color: "#666",
            fontSize: "18px",
            lineHeight: 1.7,
            marginTop: "20px",
          }}
        >
          The page you are looking for does not exist or may have been moved.
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "35px",
          }}
        >
          <Link
            href="/"
            style={{
              padding: "15px 25px",
              borderRadius: "999px",
              background: "#111",
              color: "white",
              textDecoration: "none",
              fontWeight: 800,
            }}
          >
            Back Home
          </Link>

          <Link
            href="/#projects"
            style={{
              padding: "15px 25px",
              borderRadius: "999px",
              border: "1px solid #ddd",
              background: "white",
              color: "#111",
              textDecoration: "none",
              fontWeight: 800,
            }}
          >
            View Projects
          </Link>
        </div>
      </div>
    </main>
  );
}