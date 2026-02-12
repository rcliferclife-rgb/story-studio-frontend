import Link from "next/link";
import type { CSSProperties } from "react";

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
        <h2 style={styles.cardTitle}>다음 단계</h2>
        <ul style={styles.list}>
          <li>이 문구를 서비스 소개 문구로 변경</li>
          <li>로그인/회원가입 페이지 연결</li>
          <li>API 연동 및 기능 확장</li>
        </ul>
      </section>

      <footer style={styles.footer}>배포 환경: Vercel / 브랜치: main</footer>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    maxWidth: 960,
    margin: "0 auto",
    padding: "56px 20px 80px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
    color: "#111827",
  },

  hero: {
    marginBottom: 28,
  },

  title: {
    fontSize: "clamp(32px, 5vw, 56px)",
    lineHeight: 1.12,
    letterSpacing: "-0.02em",
    margin: 0,
    fontWeight: 800,
  },

  subtitle: {
    marginTop: 16,
    marginBottom: 0,
    fontSize: "clamp(18px, 2.5vw, 30px)",
    lineHeight: 1.35,
    color: "#374151",
    fontWeight: 500,
  },

  buttonRow: {
    marginTop: 28,
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
  },

  btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 44,
    padding: "10px 18px",
    borderRadius: 12,
    textDecoration: "none",
    fontSize: 18,
    fontWeight: 700,
    transition: "all .15s ease",
  },

  btnPrimary: {
    backgroundColor: "#111827",
    color: "#ffffff",
    border: "1px solid #111827",
  },

  btnGhost: {
    backgroundColor: "#ffffff",
    color: "#111827",
    border: "1px solid #d1d5db",
  },

  card: {
    marginTop: 12,
    border: "1px solid #e5e7eb",
    borderRadius: 14,
    padding: "22px 20px",
    background: "#fafafa",
  },

  cardTitle: {
    margin: "0 0 10px 0",
    fontSize: 28,
    lineHeight: 1.2,
    fontWeight: 800,
  },

  list: {
    margin: 0,
    paddingLeft: 22,
    fontSize: 24,
    lineHeight: 1.55,
    color: "#111827",
    fontWeight: 500,
  },

  footer: {
    marginTop: 22,
    fontSize: 16,
    color: "#4b5563",
  },
};
