import Link from "next/link";
import type { CSSProperties } from "react";

const sampleProjects = [
  { id: "demo", name: "데모 프로젝트", summary: "챕터/씬/에셋 기본 구성 예시" },
  { id: "pilot", name: "파일럿 프로젝트", summary: "운영 전 검증용 샘플 프로젝트" },
];

export default function Home() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.title}>스토리 스튜디오 프론트엔드 V2</h1>
        <p style={styles.subtitle}>첫 화면 수정이 정상 반영되었습니다.</p>

        <div style={styles.buttonRow}>
          <Link href="/start" style={{ ...styles.btn, ...styles.btnPrimary }}>
            시작하기
          </Link>
          <Link href="/login" style={{ ...styles.btn, ...styles.btnGhost }}>
            로그인
          </Link>
          <Link href="/contact" style={{ ...styles.btn, ...styles.btnGhost }}>
            문의하기
          </Link>
        </div>
      </section>

      <section style={styles.card}>
        <h2 style={styles.cardTitle}>프로젝트 바로가기</h2>
        <ul style={styles.projectList}>
          {sampleProjects.map((p) => (
            <li key={p.id} style={styles.projectItem}>
              <Link href={`/projects/${p.id}`} style={styles.projectLink}>
                <strong style={styles.projectName}>{p.name}</strong>
                <span style={styles.projectSummary}>{p.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section style={styles.card}>
        <h2 style={styles.cardTitle}>다음 단계</h2>
        <ol style={styles.list}>
          <li>서비스 소개 문구를 실제 운영 문구로 변경</li>
          <li>로그인/회원가입 권한 연동</li>
          <li>이미지 생성 API 및 데이터 저장 연결</li>
        </ol>
      </section>

      <p style={styles.footer}>배포 환경: Vercel / 브랜치: main</p>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    maxWidth: 980,
    margin: "56px auto",
    padding: "0 20px 40px",
    fontFamily:
      'Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans KR", sans-serif',
    color: "#0f172a",
  },
  hero: {
    marginBottom: 20,
  },
  title: {
    fontSize: 56,
    lineHeight: 1.1,
    fontWeight: 800,
    margin: "0 0 10px",
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontSize: 18,
    color: "#334155",
    margin: "0 0 18px",
  },
  buttonRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginBottom: 14,
  },
  btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
    height: 44,
    padding: "0 18px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 700,
    border: "1px solid #cbd5e1",
  },
  btnPrimary: {
    background: "#0f172a",
    color: "#ffffff",
    borderColor: "#0f172a",
  },
  btnGhost: {
    background: "#ffffff",
    color: "#0f172a",
  },
  card: {
    border: "1px solid #e2e8f0",
    borderRadius: 14,
    padding: 20,
    background: "#ffffff",
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 34,
    lineHeight: 1.2,
    margin: "0 0 10px",
    fontWeight: 800,
    letterSpacing: "-0.01em",
  },
  projectList: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "grid",
    gap: 10,
  },
  projectItem: {
    border: "1px solid #e2e8f0",
    borderRadius: 12,
    background: "#f8fafc",
  },
  projectLink: {
    display: "block",
    textDecoration: "none",
    color: "#0f172a",
    padding: "14px 16px",
  },
  projectName: {
    display: "block",
    fontSize: 18,
    marginBottom: 4,
  },
  projectSummary: {
    display: "block",
    color: "#475569",
    fontSize: 14,
  },
  list: {
    margin: 0,
    paddingLeft: 22,
    lineHeight: 1.9,
    fontSize: 16,
  },
  footer: {
    marginTop: 8,
    color: "#475569",
    fontSize: 15,
  },
};
