# 공학용 계산기 웹앱 (Roboco IO Calculator)

React 19 기반의 고성능 웹 공학용 계산기 애플리케이션입니다.

## 🚀 주요 기능

### 기본 계산 기능
- **사칙연산**: +, -, ×, ÷ (연산자 우선순위 자동 적용)
- **괄호**: 중첩 괄호 지원 (최대 10단계)
- **소수점**: 최대 15자리 정밀도
- **분수 및 백분율**: 가분수, 대분수, % 연산 지원

### 고급 수학 함수
- **삼각함수**: sin, cos, tan, asin, acos, atan
- **쌍곡선 함수**: sinh, cosh, tanh
- **지수 및 로그**: ln, log, eˣ, 10ˣ, xʸ
- **제곱근**: √x, ³√x, ⁿ√x
- **기타**: |x|, x!, nCr, nPr, GCD, LCM, RAND

### 통계 및 확률
- **기술통계**: 평균, 중앙값, 표준편차, 분산
- **확률분포**: 정규분포, 이항분포, 포아송분포
- **회귀분석**: 선형회귀, 상관계수

### 행렬 및 벡터
- **행렬 연산**: 덧셈, 곱셈, 역행렬, 행렬식
- **벡터 연산**: 내적, 외적, 크기, 단위벡터

### 단위 변환
- **길이**: mm, cm, m, km, inch, foot, yard, mile
- **무게**: mg, g, kg, oz, lb, ton
- **온도**: °C, °F, K
- **각도**: 도, 라디안, 그레이드

## 🛠 기술 스택

- **Frontend**: React 19 + TypeScript
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Math Library**: Decimal.js + Math.js
- **Build Tool**: Vite 6
- **Testing**: Vitest + React Testing Library
- **PWA**: Vite PWA Plugin

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 18.0.0 이상
- npm 9.0.0 이상

### 설치
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 미리보기
npm run preview
```

### 스크립트
```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview

# 테스트 실행
npm run test

# 테스트 UI
npm run test:ui

# 테스트 커버리지
npm run test:coverage

# 린팅
npm run lint

# 린팅 자동 수정
npm run lint:fix

# 코드 포맷팅
npm run format

# 타입 체크
npm run type-check
```

## 🎨 UI/UX 특징

### 반응형 디자인
- **데스크톱**: 1024px+ (전체 기능)
- **태블릿**: 768px-1023px (최적화된 레이아웃)
- **모바일**: 320px-767px (터치 최적화)

### 테마 지원
- **라이트 모드**: 깔끔한 흰색 배경
- **다크 모드**: 눈에 편한 어두운 배경
- **자동 테마**: 시스템 설정 따라가기

### 접근성
- **키보드 네비게이션**: 모든 기능 키보드로 조작 가능
- **스크린 리더**: ARIA 라벨 및 역할 정의
- **고대비**: 색상 대비 최적화
- **폰트 크기**: 사용자 설정 존중

## 📱 PWA 기능

- **오프라인 사용**: 서비스 워커를 통한 오프라인 지원
- **앱 설치**: 홈 화면에 앱으로 설치 가능
- **푸시 알림**: 업데이트 알림 (선택적)
- **백그라운드 동기화**: 데이터 동기화

## 🧪 테스트

```bash
# 단위 테스트
npm run test

# 테스트 커버리지
npm run test:coverage

# E2E 테스트 (추후 추가 예정)
npm run test:e2e
```

## 📁 프로젝트 구조

```
roboco-io-calculator/
├── docs/                          # 프로젝트 문서
│   ├── requirements_specification.md
│   ├── technical_specification.md
│   ├── ui_design_guidelines.md
│   └── ui_design_wireframe.md
├── src/                           # 소스 코드
│   ├── components/                # React 컴포넌트
│   ├── hooks/                     # 커스텀 훅
│   ├── stores/                    # Zustand 스토어
│   ├── utils/                     # 유틸리티 함수
│   ├── types/                     # TypeScript 타입
│   └── constants/                 # 상수 정의
├── public/                        # 정적 파일
├── tests/                         # 테스트 파일
├── package.json                   # 프로젝트 설정
├── vite.config.ts                 # Vite 설정
├── tailwind.config.js             # Tailwind CSS 설정
├── tsconfig.json                  # TypeScript 설정
└── README.md                      # 프로젝트 문서
```

## 🔧 개발 가이드

### 코드 스타일
- **ESLint**: 코드 품질 검사
- **Prettier**: 코드 포맷팅
- **TypeScript**: 타입 안전성
- **Conventional Commits**: 커밋 메시지 규칙

### 브랜치 전략
- `main`: 프로덕션 브랜치
- `develop`: 개발 브랜치
- `feature/*`: 기능 개발 브랜치
- `hotfix/*`: 긴급 수정 브랜치

## 📄 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 연락처

- **프로젝트**: [Roboco IO Calculator](https://github.com/nawhizz/mcp-test)
- **이메일**: contact@roboco.io
- **웹사이트**: https://roboco.io

## 🙏 감사의 말

이 프로젝트는 다음 오픈소스 프로젝트들의 도움을 받았습니다:
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Decimal.js](https://github.com/MikeMcl/decimal.js/)
- [Math.js](https://mathjs.org/)
- [Zustand](https://github.com/pmndrs/zustand)

---

**Roboco IO** - 혁신적인 웹 기술로 더 나은 사용자 경험을 제공합니다.