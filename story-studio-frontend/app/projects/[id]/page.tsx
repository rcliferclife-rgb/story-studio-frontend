import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../data";

type PageProps = {
  params: { id: string };
};

// 정적 배포(output: "export")일 때 필수
export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) notFound();

  return (
    <main style={{ maxWidth: 960, margin: "40px auto", padding: "0 20px", fontFamily: "sans-serif" }}>
      <div style={{ marginBottom: 16 }}>
        <Link href="/projects" style={{ textDecoration: "underline", color: "#0f172a" }}>
          ← 프로젝트 목록
        </Link>
      </div>

      <h1 style={{ fontSize: 40, margin: "0 0 12px" }}>{project.name}</h1>
      <p style={{ fontSize: 20, color: "#334155", marginBottom: 20 }}>{project.summary}</p>

      <section style={{ border: "1px solid #dbe2ea", borderRadius: 12, padding: 16, background: "#f8fafc" }}>
        <h2 style={{ marginTop: 0 }}>{project.chapter}</h2>
        <p>{project.chapterDescription}</p>
      </section>
    </main>
  );
}
