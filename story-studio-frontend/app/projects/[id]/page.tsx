import Link from "next/link";

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
        border: "1px solid #e5e7eb",
        borderRadius: 14,
        padding: 16,
        background: "#ffffff",
      }}
    >
      <h2 style={{ fontSize: 18, margin: "0 0 12px" }}>{title}</h2>
      {children}
    </section>
  );
}

function AssetCard({
  title,
  kind,
}: {
  title: string;
  kind: "CHAR" | "LOC" | "PROP";
}) {
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
      <div style={{ fontWeight: 700 }}>{title}</div>
    </div>
  );
}

export default function ProjectDetailPage({ params }: PageProps) {
  const projectId = params.id;

  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "40px auto",
        padding: "0 20px 40px",
        fontFamily: "sans-serif",
        color: "#0f172a",
      }}
    >
      {/* Top */}
      <header style={{ marginBottom: 20 }}>
        <Link
          href="/projects"
          style={{
            display: "inline-block",
            fontSize: 14,
            color: "#334155",
            textDecoration: "none",
            marginBottom: 10,
          }}
        >
          ← 프로젝트 목록
        </Link>
        <h1 style={{ fontSize: 30, margin: "0 0 8px" }}>프로젝트 상세: {projectId}</h1>
        <p style={{ margin: 0, color: "#475569" }}>
          챕터, 씬, 에셋을 한 화면에서 관리하는 상세 페이지 예시입니다.
        </p>
      </header>

      {/* Body */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: 16,
          alignItems: "start",
        }}
      >
        {/* Left Sidebar */}
        <aside
          style={{
            position: "sticky",
            top: 16,
            border: "1px solid #e5e7eb",
            borderRadius: 14,
            padding: 14,
            background: "#fff",
          }}
        >
          <h3 style={{ fontSize: 16, margin: "0 0 10px" }}>ASSET ASSIGNMENT</h3>
          <div style={{ display: "grid", gap: 8 }}>
            <AssetCard title="주인공 캐릭터" kind="CHAR" />
            <AssetCard title="조력자 캐릭터" kind="CHAR" />
            <AssetCard title="병동 복도" kind="LOC" />
            <AssetCard title="침대 소품 세트" kind="PROP" />
          </div>

          <button
            style={{
              marginTop: 12,
              width: "100%",
              border: "none",
              borderRadius: 10,
              padding: "10px 12px",
              background: "#111827",
              color: "white",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            스토리보드 렌더링(즉시 생성)
          </button>
        </aside>

        {/* Right Content */}
        <div style={{ display: "grid", gap: 12 }}>
          <SectionCard title="CH.01">
            <p style={{ marginTop: 0, color: "#334155" }}>
              새벽 4시, 병동의 정적 속에서 주인공이 결정을 내리는 장면.
            </p>
            <div style={{ display: "grid", gap: 8 }}>
              <div
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: 10,
                  padding: 10,
                  background: "#f8fafc",
                }}
              >
                <strong>SCENE 1</strong>
                <p style={{ margin: "6px 0 0", color: "#334155" }}>
                  로우 앵글, 감정 클로즈업, 저채도 톤.
                </p>
              </div>
              <div
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: 10,
                  padding: 10,
                  background: "#f8fafc",
                }}
              >
                <strong>SCENE 2</strong>
                <p style={{ margin: "6px 0 0", color: "#334155" }}>
                  대사 강조 컷, 인물 시선 처리, 소품 포커스.
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="프롬프트 / 연출 메모">
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
              <li>장르: 드라마</li>
              <li>비율: 16:9</li>
              <li>스타일: 시네마틱 리얼</li>
              <li>무드: 차분함 + 긴장감</li>
            </ul>
          </SectionCard>

          <SectionCard title="다음 작업">
            <ol style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
              <li>챕터 2 추가</li>
              <li>로그인 사용자별 프로젝트 권한 연동</li>
              <li>이미지 생성 API 연결</li>
            </ol>
          </SectionCard>
        </div>
      </div>
    </main>
  );
}
