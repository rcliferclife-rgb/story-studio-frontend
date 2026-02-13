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
      { title: "SCENE 1", description: "로우 앵글, 감정 클로즈업, 차세도 톤." },
      { title: "SCENE 2", description: "대사 강조 컷, 인물 시선 처리, 소품 포커스." },
    ],
    memo: {
      genre: "드라마",
      ratio: "16:9",
      style: "시네마틱 리얼",
      mood: "차분함 + 긴장감",
    },
    nextTasks: [
      "챕터 2 추가",
      "로그인 사용자별 프로젝트 권한 연동",
      "이미지 생성 API 연결",
    ],
  },
  {
    id: "pilot",
    name: "파일럿 에피소드",
    summary: "오프닝 시퀀스 실험용 프로젝트",
    chapter: "CH.02",
    chapterDescription: "비 오는 골목에서 첫 대면이 이루어지는 장면.",
    assets: [
      { kind: "CHAR", title: "탐정 캐릭터" },
      { kind: "CHAR", title: "의뢰인 캐릭터" },
      { kind: "LOC", title: "야간 골목" },
      { kind: "PROP", title: "우산/네온 간판" },
    ],
    scenes: [
      { title: "SCENE 1", description: "롱샷으로 분위기 제시, 빗소리 강조." },
      { title: "SCENE 2", description: "핸드헬드 컷 전환, 표정 디테일 포착." },
    ],
    memo: {
      genre: "누아르",
      ratio: "16:9",
      style: "리얼 + 필름그레인",
      mood: "서늘함 + 미스터리",
    },
    nextTasks: [
      "오프닝 BGM 후보 적용",
      "씬 3~4 콘티 확장",
      "샷리스트 CSV 내보내기",
    ],
  },
];
