import Link from "next/link";
import { notFound } from "next/navigation";
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
    <main
      style={{
        maxWidth: 1100,
        margin: "40px auto",
        padding: "0 20px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ marginBottom: 16 }}>
        <Link href="/projects" style={{ color: "#0f172a", textDecoration: "none" }}>
          ← 프로젝트 목록
        </Link>
      </div>

      <h1 style={{ fontSize: 48, margin: "0 0 12px", letterSpacing: "-0.02em" }}>
        프로젝트 상세:
      </h1>
      <p style={{ fontSize: 34, color: "#334155", marginBottom: 24 }}>
        {project.summary}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: 16,
        }}
      >
        {/* 좌측: ASSET */}
        <aside
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: 16,
            padding: 16,
            background: "#f8fafc",
          }}
        >
          <h3 style={{ fontSize: 32, margin: "0 0 14px" }}>ASSET ASSIGNMENT</h3>

          <div style={{ display: "grid", gap: 10 }}>
            {project.assets.map((a, idx) => (
              <div
                key={`${a.kind}-${a.title}-${idx}`}
                style={{
                  border: "1px solid #cbd5e1",
                  borderRadius: 12,
                  padding: 12,
                  background: "#ffffff",
                }}
              >
                <div style={{ fontSize: 18, color: "#64748b", marginBottom: 4 }}>{a.kind}</div>
                <strong style={{ fontSize: 30 }}>{a.title}</strong>
              </div>
            ))}
          </div>

          <button
            style={{
              marginTop: 14,
              width: "100%",
              border: "none",
              borderRadius: 12,
              padding: "14px 16px",
              fontSize: 26,
              fontWeight: 700,
              cursor: "pointer",
              background: "#0f172a",
              color: "white",
            }}
          >
            스토리보드 렌더링(즉시 생성)
          </button>
        </aside>

        {/* 우측: 챕터/씬/메모 */}
        <section style={{ display: "grid", gap: 16 }}>
          <div
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: 16,
              padding: 16,
              background: "white",
            }}
          >
            <h2 style={{ fontSize: 34, margin: "0 0 8px" }}>{project.chapter}</h2>
            <p style={{ fontSize: 30, margin: "0 0 14px", color: "#334155" }}>
              {project.chapterDescription}
            </p>

            <div style={{ display: "grid", gap: 10 }}>
              {project.scenes.map((scene, idx) => (
                <div
                  key={`${scene.title}-${idx}`}
                  style={{
                    border: "1px solid #dbe2ea",
                    borderRadius: 10,
                    padding: 10,
                    background: "#f8fafc",
                  }}
                >
                  <strong style={{ fontSize: 35 }}>{scene.title}</strong>
                  <p style={{ margin: "6px 0 0", fontSize: 30 }}>{scene.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: 16,
              padding: 16,
              background: "white",
            }}
          >
            <h3 style={{ fontSize: 32, margin: "0 0 10px" }}>프롬프트 / 연출 메모</h3>
            <ul style={{ margin: 0, paddingLeft: 24, fontSize: 30, lineHeight: 1.6 }}>
              <li>장르: {project.memo.genre}</li>
              <li>비율: {project.memo.ratio}</li>
              <li>스타일: {project.memo.style}</li>
              <li>무드: {project.memo.mood}</li>
            </ul>
          </div>

          <div
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: 16,
              padding: 16,
              background: "white",
            }}
          >
            <h3 style={{ fontSize: 32, margin: "0 0 10px" }}>다음 작업</h3>
            <ol style={{ margin: 0, paddingLeft: 24, fontSize: 30, lineHeight: 1.6 }}>
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
