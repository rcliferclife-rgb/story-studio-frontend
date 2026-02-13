import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../data";

type PageProps = {
  params: { id: string };
};

// 정적 배포(output: 'export') 대응
export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export const dynamicParams = false;

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

      <h1 style={{ fontSize: 56, margin: "0 0 12px" }}>프로젝트 상세:</h1>
      <p style={{ fontSize: 38, color: "#334155", marginBottom: 24 }}>{project.summary}</p>

      <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 16 }}>
        <aside style={boxStyle}>
          <h3 style={{ fontSize: 36, margin: "0 0 12px" }}>ASSET ASSIGNMENT</h3>
          <div style={{ display: "grid", gap: 10 }}>
            {project.assets.map((a, i) => (
              <div key={`${a.title}-${i}`} style={assetStyle}>
                <div style={{ fontSize: 20, color: "#64748b", marginBottom: 4 }}>{a.kind}</div>
                <strong style={{ fontSize: 34 }}>{a.title}</strong>
              </div>
            ))}
          </div>

          <button style={primaryBtn}>스토리보드 렌더링(즉시 생성)</button>
        </aside>

        <section style={{ display: "grid", gap: 14 }}>
          <div style={boxStyle}>
            <h3 style={{ fontSize: 40, margin: "0 0 8px" }}>{project.chapter}</h3>
            <p style={{ fontSize: 34, margin: "0 0 14px" }}>{project.chapterDescription}</p>

            {project.scenes.map((s, i) => (
              <div key={`${s.title}-${i}`} style={sceneStyle}>
                <strong style={{ fontSize: 34 }}>{s.title}</strong>
                <p style={{ fontSize: 30, margin: "6px 0 0" }}>{s.description}</p>
              </div>
            ))}
          </div>

          <div style={boxStyle}>
            <h3 style={{ fontSize: 40, margin: "0 0 10px" }}>프롬프트 / 연출 메모</h3>
            <ul style={{ margin: 0, paddingLeft: 24, fontSize: 34, lineHeight: 1.6 }}>
              <li>장르: {project.memo.genre}</li>
              <li>비율: {project.memo.ratio}</li>
              <li>스타일: {project.memo.style}</li>
              <li>무드: {project.memo.mood}</li>
            </ul>
          </div>

          <div style={boxStyle}>
            <h3 style={{ fontSize: 40, margin: "0 0 10px" }}>다음 작업</h3>
            <ol style={{ margin: 0, paddingLeft: 24, fontSize: 34, lineHeight: 1.6 }}>
              {project.nextTasks.map((t, i) => (
                <li key={`${t}-${i}`}>{t}</li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}

const boxStyle: React.CSSProperties = {
  border: "1px solid #dbe2ea",
  borderRadius: 16,
  padding: 16,
  background: "#f8fafc",
};

const assetStyle: React.CSSProperties = {
  border: "1px solid #dbe2ea",
  borderRadius: 12,
  padding: 12,
  background: "#f1f5f9",
};

const sceneStyle: React.CSSProperties = {
  border: "1px solid #dbe2ea",
  borderRadius: 12,
  padding: 12,
  background: "#f1f5f9",
  marginBottom: 10,
};

const primaryBtn: React.CSSProperties = {
  marginTop: 12,
  width: "100%",
  border: "none",
  borderRadius: 12,
  padding: "14px 16px",
  background: "#0f172a",
  color: "#fff",
  fontSize: 28,
  fontWeight: 700,
  cursor: "pointer",
};
