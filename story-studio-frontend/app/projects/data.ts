export type AssetKind = "CHAR" | "LOC" | "PROP";

export type Asset = {
  kind: AssetKind;
  title: string;
};

export type Scene = {
  title: string;
  description: string;
};

export type Project = {
  id: string;
  name: string;
  summary: string;
  chapter: string;
  chapterDescription: string;
  assets: Asset[];
  scenes: Scene[];
  memo: {
    genre: string;
    ratio: string;
    style: string;
    mood: string;
  };
  nextTasks: string[];
};

export const projects: Project[] = [
  {
    id: "demo",
    name: "프로젝트 데모",
    summary: "챕터/씬/에셋을 한 화면에서 관리하는 상세 예시",
    chapter: "CH.01",
    chapterDescription: "새벽 4시, 병동의 정적 속에서 주인공이 결정을 내리는 장면",
    assets: [
      { kind: "CHAR", title: "주인공 캐릭터" },
      { kind: "CHAR", title: "조력자 캐릭터" },
      { kind: "LOC", title: "병동 복도" },
      { kind: "PROP", title: "침대 소품 세트" },
    ],
    scenes: [
      { title: "SCENE 1", description: "로우 앵글, 감정 클로즈업, 차세도 톤." },
      { title: "SCENE 2", description: "대사 강조 컷, 인물 시선 처리, 소품 포커스." },
    ],
    memo: {
      genre: "드라마",
      ratio: "16:9",
      style: "시네마틱 리얼",
      mood: "차분함 + 긴장감",
    },
    nextTasks: ["챕터 2 추가", "로그인 사용자별 프로젝트 권한 연동", "이미지 생성 API 연결"],
  },
  {
    id: "pilot",
    name: "파일럿 프로젝트",
    summary: "운영 전 검증용 샘플 프로젝트",
    chapter: "CH.PILOT",
    chapterDescription: "기능 검증을 위한 파일럿 챕터",
    assets: [
      { kind: "CHAR", title: "테스트 주연" },
      { kind: "LOC", title: "테스트 로케이션" },
      { kind: "PROP", title: "테스트 소품" },
    ],
    scenes: [
      { title: "SCENE A", description: "구도 테스트, 라이팅 테스트." },
      { title: "SCENE B", description: "컷 전환 속도, 자막 배치 점검." },
    ],
    memo: {
      genre: "테스트",
      ratio: "16:9",
      style: "뉴트럴",
      mood: "검증",
    },
    nextTasks: ["성능 측정", "오류 로깅 정리", "UI 간격 미세 조정"],
  },
];
