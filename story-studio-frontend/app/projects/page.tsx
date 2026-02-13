import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main
      style={{
        maxWidth: 960,
        margin: "60px auto",
        padding: "0 20px",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: 36, marginBottom: 12 }}>프로젝트 목록</h1>
      <p style={{ fontSize: 18, color: "#555", marginBottom: 24 }}>
        프로젝트 상세 페이지로 이동할 수 있습니다.
      </p>

      <div style={{ display: "grid", gap: 12 }}>
        <Link href="/projects/demo" style={cardStyle}>
          데모 프로젝트 열기
        </Link>
        <Link href="/projects/pilot" style={cardStyle}>
          파일럿 프로젝트 열기
        </Link>
      </div>

      <div style={{ marginTop: 24 }}>
        <Link href="/" style={{ color: "#0f172a", textDecoration: "underline" }}>
          ← 홈으로
        </Link>
      </div>
    </main>
  );
}

const cardStyle: React.CSSProperties = {
  border: "1px solid #dbe2ea",
  borderRadius: 10,
  padding: "14px 16px",
  textDecoration: "none",
  color: "#0f172a",
  background: "#f8fafc",
  fontSize: 18,
};
