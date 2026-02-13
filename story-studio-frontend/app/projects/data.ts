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
    chapterDescription: "새벽 4시, 병동의 정적 속에서 주인공이 결정을 내리는 장면.",
    assets: [
      { kind: "CHAR", title: "주인공 캐릭터" },
      { kind: "CHAR", title: "조력자 캐릭터" },
      { kind: "LOC", title: "병동 복도" },
      { kind: "PROP", title: "침대 소품 세트" },
    ],
    scenes: [
      { title: "SCENE 1", description: "로우 앵글, 감정 클로즈업, 차가운 톤." },
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
    summary: "초기 검증용 파일럿 시나리오",
    chapter: "CH.P",
    chapterDescription: "주요 캐릭터와 공간 스타일을 빠르게 검증하는 파일럿.",
    assets: [
      { kind: "CHAR", title: "파일럿 주인공" },
      { kind: "LOC", title: "파일럿 세트" },
    ],
    scenes: [
      { title: "SCENE A", description: "와이드 쇼트, 공간 톤 체크." },
      { title: "SCENE B", description: "미디엄 쇼트, 감정선 확인." },
    ],
    memo: {
      genre: "드라마",
      ratio: "16:9",
      style: "리얼리즘",
      mood: "담백함",
    },
    nextTasks: ["에셋 보강", "대사 리라이팅"],
  },
];
