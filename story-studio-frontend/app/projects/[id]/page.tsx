import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../data";

type PageProps = {
  params: {
    id: string;
  };
};

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        border: "1px solid #dbe2ea",
        borderRadius: 14,
        padding: 16,
        background: "#ffffff",
      }}
    >
      <h2 style={{ margin: "0 0 12px", fontSize: 35 }}>{title}</h2>
      {children}
    </section>
  );
}

function AssetCard({ kind, title }: { kind: string; title: string }) {
  return (
    <div
      style={{
        border: "1px solid #dbe2ea",
        borderRadius: 12,
        padding: 12,
        background: "#f8fafc",
      }}
    >
      <div style={{ fontSize: 12, color: "#64748b", marginBottom: 6 }}>{kind}</div>
      <strong style={{ fontSize: 20 }}>{title}</strong>
    </div>
  );
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <main
      style={{
        maxWidth: 1180,
        margin: "28px auto",
        padding: "0 20px 40px",
        fontFamily: "sans-serif",
        color: "#0f172a",
      }}
    >
      <Link href="/projects" style={{ textDecoration: "none", color: "#334155" }}>
        ← 프로젝트 목록
      </Link>

      <h1 style={{ fontSize: 52, margin: "14px 0 8px" }}>
        프로젝트 상세: {project.name}
      </h1>
      <p style={{ fontSize: 34, color: "#334155", margin: "0 0 18px" }}>{project.summary}</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: 16,
          alignItems: "start",
        }}
      >
        {/* 왼쪽: 에셋 영역 */}
        <aside
          style={{
            border: "1px solid #dbe2ea",
            borderRadius: 14,
            padding: 14,
            background: "#ffffff",
          }}
        >
          <h3 style={{ fontSize: 34, margin: "0 0 10px" }}>ASSET ASSIGNMENT</h3>

          <div style={{ display: "grid", gap: 10 }}>
            {project.assets.map((asset, idx) => (
              <AssetCard key={`${asset.title}-${idx}`} kind={asset.kind} title={asset.title} />
            ))}
          </div>

          <button
            style={{
              marginTop: 12,
              width: "100%",
              border: 0,
              borderRadius: 12,
              padding: "12px 14px",
              background: "#0f172a",
              color: "#fff",
              fontSize: 20,
              cursor: "pointer",
            }}
            onClick={() => alert("스토리보드 렌더링 요청(데모)")}
          >
            스토리보드 렌더링(즉시 생성)
          </button>
        </aside>

        {/* 오른쪽: 챕터/씬/메모/다음작업 */}
        <div style={{ display: "grid", gap: 12 }}>
          <SectionCard title={project.chapter}>
            <p style={{ margin: "0 0 10px", fontSize: 38 }}>{project.chapterDescription}</p>
            <div style={{ display: "grid", gap: 8 }}>
              {project.scenes.map((scene, i) => (
                <div
                  key={`${scene.title}-${i}`}
                  style={{
                    border: "1px solid #dbe2ea",
                    borderRadius: 10,
                    padding: 10,
                    background: "#f8fafc",
                  }}
                >
                  <strong style={{ fontSize: 35 }}>{scene.title}</strong>
                  <p style={{ margin: "6px 0 0", fontSize: 35, color: "#334155" }}>
                    {scene.description}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="프롬프트 / 연출 메모">
            <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.8, fontSize: 34 }}>
              <li>장르: {project.memo.genre}</li>
              <li>비율: {project.memo.ratio}</li>
              <li>스타일: {project.memo.style}</li>
              <li>무드: {project.memo.mood}</li>
            </ul>
          </SectionCard>

          <SectionCard title="다음 작업">
            <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 1.8, fontSize: 35 }}>
              {project.nextTasks.map((task, idx) => (
                <li key={`${task}-${idx}`}>{task}</li>
              ))}
            </ol>
          </SectionCard>
        </div>
      </div>
    </main>
  );
}
