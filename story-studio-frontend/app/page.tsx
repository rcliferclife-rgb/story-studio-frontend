export default function Home() {
  return (
    <main
      style={{
        maxWidth: 980,
        margin: "0 auto",
        padding: "40px 20px 80px",
        fontFamily: "sans-serif",
        lineHeight: 1.6,
      }}
    >
      {/* 헤더 */}
      <section style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 40, margin: 0, marginBottom: 10 }}>
          스토리 스튜디오 프론트엔드 v2
        </h1>
        <p style={{ fontSize: 18, color: "#555", margin: 0 }}>
          첫 화면 수정이 정상 반영되었습니다.
        </p>
      </section>

      {/* 버튼 영역 */}
      <section style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
        <a
          href="#start"
          style={{
            display: "inline-block",
            padding: "10px 16px",
            borderRadius: 10,
            textDecoration: "none",
            background: "#111",
            color: "#fff",
            fontWeight: 700,
          }}
        >
          시작하기
        </a>

        <a
          href="#login"
          style={{
            display: "inline-block",
            padding: "10px 16px",
            borderRadius: 10,
            textDecoration: "none",
            border: "1px solid #d0d7de",
            color: "#111",
            fontWeight: 700,
            background: "#fff",
          }}
        >
          로그인
        </a>

        <a
          href="#contact"
          style={{
            display: "inline-block",
            padding: "10px 16px",
            borderRadius: 10,
            textDecoration: "none",
            border: "1px solid #d0d7de",
            color: "#111",
            fontWeight: 700,
            background: "#fff",
          }}
        >
          문의하기
        </a>
      </section>

      {/* 안내 박스 */}
      <section
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: 20,
          background: "#fafafa",
          marginBottom: 20,
        }}
      >
        <h2 style={{ fontSize: 22, marginTop: 0, marginBottom: 10 }}>다음 단계</h2>
        <ol style={{ margin: 0, paddingLeft: 20 }}>
          <li>UI 문구를 서비스 소개 문구로 변경</li>
          <li>로그인/회원가입 페이지 연결</li>
          <li>API 연동 및 기능 확장</li>
        </ol>
      </section>

      {/* 하단 정보 */}
      <section style={{ color: "#666", fontSize: 14 }}>
        배포 환경: Vercel / 브랜치: main
      </section>
    </main>
  );
}
