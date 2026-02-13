import Link from "next/link";
import type { CSSProperties } from "react";
import { projects } from "./data";

export default function ProjectsPage() {
  return (
    <main style={styles.page}>
      <h1 style={styles.title}>프로젝트 목록</h1>
      <p style={styles.sub}>프로젝트 상세 페이지로 이동할 수 있습니다.</p>

      <div style={styles.grid}>
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} style={styles.card}>
            {project.name} 열기
          </Link>
        ))}
      </div>

      <div style={{ marginTop: 24 }}>
        <Link href="/" style={styles.homeLink}>
          ← 홈으로
        </Link>
      </div>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    maxWidth: 960,
    margin: "60px auto",
    padding: "0 20px",
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: 48,
    margin: "0 0 14px",
    letterSpacing: "-0.02em",
  },
  sub: {
    fontSize: 30,
    color: "#334155",
    margin: "0 0 24px",
  },
  grid: {
    display: "grid",
    gap: 12,
  },
  card: {
    display: "block",
    border: "1px solid #cbd5e1",
    borderRadius: 12,
    padding: "18px 20px",
    fontSize: 46,
    fontWeight: 700,
    textDecoration: "none",
    color: "#0f172a",
    background: "#f8fafc",
  },
  homeLink: {
    color: "#0f172a",
    textDecoration: "underline",
    fontSize: 34,
  },
};
