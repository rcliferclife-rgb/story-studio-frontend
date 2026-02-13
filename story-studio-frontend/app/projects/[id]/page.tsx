import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { projects } from "../data";

type PageProps = {
  params: { id: string };
};

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main style={styles.page}>
      <div style={{ marginBottom: 16 }}>
        <Link href="/projects" style={styles.backLink}>
          ← 프로젝트 목록
        </Link>
      </div>

      <h1 style={styles.title}>프로젝트 상세:</h1>
      <p style={styles.summary}>{project.summary}</p>

      <div style={styles.layout}>
        <aside style={styles.leftPanel}>
          <h3 style={styles.sectionTitle}>ASSET ASSIGNMENT</h3>
          <div style={{ display: "grid", gap: 10 }}>
            {project.assets.map((asset, idx) => (
              <div key={`${asset.kind}-${asset.title}-${idx}`} style={styles.assetCard}>
                <div style={styles.assetKind}>{asset.kind}</div>
                <strong style={styles.assetTitle}>{asset.title}</strong>
              </div>
            ))}
          </div>

          <button style={styles.renderButton}>스토리보드 렌더링(즉시 생성)</button>
        </aside>

        <section style={styles.rightPanel}>
          <div style={styles.block}>
            <h2 style={styles.chapter}>{project.chapter}</h2>
            <p style={styles.chapterDesc}>{project.chapterDescription}</p>

            <div style={{ display: "grid", gap: 10 }}>
              {project.scenes.map((scene, idx) => (
                <div key={`${scene.title}-${idx}`} style={styles.sceneCard}>
                  <strong style={styles.sceneTitle}>{scene.title}</strong>
                  <p style={styles.sceneDesc}>{scene.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.block}>
            <h3 style={styles.sectionTitle}>프롬프트 / 연출 메모</h3>
            <ul style={styles.list}>
              <li>장르: {project.memo.genre}</li>
              <li>비율: {project.memo.ratio}</li>
              <li>스타일: {project.memo.style}</li>
              <li>무드: {project.memo.mood}</li>
            </ul>
          </div>

          <div style={styles.block}>
            <h3 style={styles.sectionTitle}>다음 작업</h3>
            <ol style={styles.list}>
              {project.nextTasks.map((task, idx) => (
                <li key={`${task}-${idx}`}>{task}</li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    maxWidth: 1100,
    margin: "40px auto",
    padding: "0 20px",
    fontFamily: "sans-serif",
  },
  backLink: {
    color: "#0f172a",
    textDecoration: "none",
    fontSize: 22,
  },
  title: {
    fontSize: 56,
    margin: "0 0 12px",
    letterSpacing: "-0.02em",
  },
  summary: {
    fontSize: 36,
    color: "#334155",
    margin: "0 0 24px",
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "280px 1fr",
    gap: 16,
  },
  leftPanel: {
    border: "1px solid #cbd5e1",
    borderRadius: 14,
    padding: 14,
    background: "#f8fafc",
    height: "fit-content",
  },
  rightPanel: {
    display: "grid",
    gap: 14,
  },
  block: {
    border: "1px solid #cbd5e1",
    borderRadius: 14,
    padding: 14,
    background: "#f8fafc",
  },
  sectionTitle: {
    fontSize: 38,
    margin: "0 0 10px",
  },
  chapter: {
    fontSize: 42,
    margin: "0 0 8px",
  },
  chapterDesc: {
    fontSize: 32,
    margin: "0 0 12px",
    color: "#334155",
  },
  assetCard: {
    border: "1px solid #cbd5e1",
    borderRadius: 10,
    padding: 10,
    background: "white",
  },
  assetKind: {
    fontSize: 20,
    color: "#64748b",
    marginBottom: 4,
  },
  assetTitle: {
    fontSize: 34,
    color: "#0f172a",
  },
  renderButton: {
    marginTop: 12,
    width: "100%",
    border: "none",
    borderRadius: 10,
    padding: "12px 10px",
    background: "#0f172a",
    color: "white",
    fontSize: 26,
    fontWeight: 700,
    cursor: "pointer",
  },
  sceneCard: {
    border: "1px solid #cbd5e1",
    borderRadius: 10,
    padding: 10,
    background: "white",
  },
  sceneTitle: {
    display: "block",
    fontSize: 34,
    marginBottom: 6,
  },
  sceneDesc: {
    margin: 0,
    fontSize: 30,
    color: "#334155",
  },
  list: {
    margin: 0,
    paddingLeft: 24,
    fontSize: 30,
    lineHeight: 1.5,
  },
};
