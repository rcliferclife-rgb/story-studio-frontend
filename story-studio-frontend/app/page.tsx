export default function Home() {
  return (
    <main
      style={{
        maxWidth: 960,
        margin: "80px auto",
        padding: "0 20px",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: 40, marginBottom: 12 }}>스토리 스튜디오 프론트엔드 v2</h1>
      <p style={{ fontSize: 18, color: "#555", marginBottom: 28 }}>
        첫 화면 수정이 정상 반영되었습니다.
      </p>

      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: 20,
          background: "#fafafa",
        }}
      >
        <h2 style={{ fontSize: 22, marginBottom: 10 }}>다음 단계</h2>
        <ol style={{ lineHeight: 1.9, paddingLeft: 20 }}>
          <li>이 문구를 원하는 소개 문구로 변경</li>
          <li>메뉴/버튼 추가</li>
          <li>API 연결 및 기능 확장</li>
        </ol>
      </div>
    </main>
  );
}
