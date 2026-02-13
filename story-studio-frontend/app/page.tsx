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

          {/* 4) 프로젝트 목록 버튼 추가 */}
          <Link href="/projects" style={{ ...styles.btn, ...styles.btnSecondary }}>
            프로젝트 목록
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

      <p style={styles.footer}>배포 환경: Vercel / 브랜치: main</p>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    maxWidth: 960,
    margin: "80px auto",
    padding: "0 20px",
    fontFamily: "sans-serif",
    color: "#0f172a",
  },
  hero: {
    marginBottom: 28,
  },
  title: {
    fontSize: 56,
    lineHeight: 1.1,
    margin: 0,
    marginBottom: 16,
    fontWeight: 800,
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontSize: 24,
    color: "#334155",
    margin: 0,
    marginBottom: 26,
    lineHeight: 1.5,
  },
  buttonRow: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginBottom: 22,
  },
  btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 22px",
    borderRadius: 12,
    textDecoration: "none",
    fontSize: 30,
    fontWeight: 700,
    border: "1px solid #cbd5e1",
    transition: "all .2s ease",
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
  btnSecondary: {
    background: "#eef2ff",
    color: "#1e293b",
    borderColor: "#c7d2fe",
  },
  card: {
    border: "1px solid #e2e8f0",
    borderRadius: 14,
    padding: 24,
    background: "#f8fafc",
  },
  cardTitle: {
    fontSize: 46,
    marginTop: 0,
    marginBottom: 12,
  },
  list: {
    margin: 0,
    paddingLeft: 28,
    lineHeight: 1.9,
    fontSize: 40,
  },
  footer: {
    marginTop: 24,
    color: "#475569",
    fontSize: 30,
  },
};
