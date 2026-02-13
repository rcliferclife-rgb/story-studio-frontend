import Link from "next/link";
import { projects } from "./data";

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
      <h1 style={{ fontSize: 48, marginBottom: 12 }}>프로젝트 목록</h1>
      <p style={{ fontSize: 28, color: "#555", marginBottom: 24 }}>
        프로젝트 상세 페이지로 이동할 수 있습니다.
      </p>

      <div style={{ display: "grid", gap: 12 }}>
        {projects.map((p) => (
          <Link key={p.id} href={`/projects/${p.id}`} style={cardStyle}>
            {p.name} 열기
          </Link>
        ))}
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
  display: "block",
  padding: "16px 18px",
  border: "1px solid #cbd5e1",
  borderRadius: 12,
  textDecoration: "none",
  color: "#0f172a",
  background: "#f8fafc",
  fontSize: 36,
  fontWeight: 700,
};
