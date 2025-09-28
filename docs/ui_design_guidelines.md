# 공학용 계산기 UI 디자인 가이드라인

## 1. 디자인 원칙

### 1.1 사용성 중심 설계
- **직관적 인터페이스**: 사용자가 쉽게 이해하고 사용할 수 있는 인터페이스
- **일관성**: 모든 화면에서 동일한 디자인 패턴 적용
- **접근성**: 모든 사용자가 접근 가능한 디자인
- **반응성**: 다양한 디바이스에서 최적화된 경험

### 1.2 공학용 계산기 특성 반영
- **정확성**: 계산 결과의 명확한 표시
- **효율성**: 빠른 계산과 입력
- **전문성**: 공학도들이 신뢰할 수 있는 인터페이스
- **확장성**: 다양한 수학 함수 지원

## 2. 색상 시스템

### 2.1 기본 색상 팔레트
```css
/* Primary Colors */
--primary-50: #e3f2fd;
--primary-100: #bbdefb;
--primary-200: #90caf9;
--primary-300: #64b5f6;
--primary-400: #42a5f5;
--primary-500: #2196f3;
--primary-600: #1e88e5;
--primary-700: #1976d2;
--primary-800: #1565c0;
--primary-900: #0d47a1;

/* Secondary Colors */
--secondary-50: #fce4ec;
--secondary-100: #f8bbd9;
--secondary-200: #f48fb1;
--secondary-300: #f06292;
--secondary-400: #ec407a;
--secondary-500: #e91e63;
--secondary-600: #d81b60;
--secondary-700: #c2185b;
--secondary-800: #ad1457;
--secondary-900: #880e4f;
```

### 2.2 기능별 색상 분류
```css
/* 숫자 키 */
--key-number: #f5f5f5;
--key-number-hover: #eeeeee;
--key-number-pressed: #e0e0e0;

/* 연산자 키 */
--key-operator: #ff9800;
--key-operator-hover: #f57c00;
--key-operator-pressed: #ef6c00;

/* 함수 키 */
--key-function: #9c27b0;
--key-function-hover: #7b1fa2;
--key-function-pressed: #6a1b9a;

/* 특수 키 */
--key-special: #607d8b;
--key-special-hover: #455a64;
--key-special-pressed: #37474f;

/* 등호 키 */
--key-equals: #4caf50;
--key-equals-hover: #388e3c;
--key-equals-pressed: #2e7d32;
```

### 2.3 다크 모드 색상
```css
/* 다크 모드 기본 색상 */
--dark-bg-primary: #1a1a1a;
--dark-bg-secondary: #2d2d2d;
--dark-bg-tertiary: #404040;
--dark-text-primary: #ffffff;
--dark-text-secondary: #b3b3b3;
--dark-border: #444444;

/* 다크 모드 키 색상 */
--dark-key-number: #404040;
--dark-key-number-hover: #4a4a4a;
--dark-key-operator: #ff9800;
--dark-key-function: #7b1fa2;
--dark-key-special: #455a64;
--dark-key-equals: #4caf50;
```

## 3. 타이포그래피

### 3.1 폰트 패밀리
```css
/* 디스플레이 폰트 */
--font-display: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;

/* UI 폰트 */
--font-ui: 'Inter', 'system-ui', -apple-system, sans-serif;

/* 수학 기호 폰트 */
--font-math: 'STIX Two Math', 'Times New Roman', serif;
```

### 3.2 폰트 크기 스케일
```css
/* 폰트 크기 */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */

/* 디스플레이 폰트 크기 */
--display-sm: 1.5rem;  /* 24px - 입력 수식 */
--display-md: 2rem;    /* 32px - 계산 결과 */
--display-lg: 2.5rem;  /* 40px - 큰 결과 */
```

### 3.3 폰트 가중치
```css
/* 폰트 가중치 */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

## 4. 레이아웃 시스템

### 4.1 그리드 시스템
```css
/* 키패드 그리드 */
.keypad {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}

.keypad-wide {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
}

/* 반응형 그리드 */
@media (max-width: 768px) {
  .keypad {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.25rem;
  }
}
```

### 4.2 간격 시스템
```css
/* 간격 스케일 */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
```

### 4.3 컨테이너 크기
```css
/* 컨테이너 최대 너비 */
--container-sm: 320px;   /* 모바일 */
--container-md: 480px;   /* 태블릿 */
--container-lg: 640px;   /* 데스크톱 */
--container-xl: 800px;   /* 큰 화면 */

/* 계산기 크기 */
--calculator-width: 400px;
--calculator-height: 600px;
--calculator-mobile-width: 320px;
--calculator-mobile-height: 480px;
```

## 5. 컴포넌트 디자인

### 5.1 디스플레이 컴포넌트
```css
.display {
  background: var(--display-bg);
  border: 2px solid var(--display-border);
  border-radius: 0.75rem;
  padding: 1rem;
  min-height: 4rem;
  font-family: var(--font-display);
  position: relative;
  overflow: hidden;
}

.display-expression {
  font-size: var(--display-sm);
  color: var(--display-expression-color);
  margin-bottom: 0.5rem;
  min-height: 1.5rem;
}

.display-result {
  font-size: var(--display-md);
  color: var(--display-result-color);
  font-weight: var(--font-bold);
  min-height: 2rem;
}

.display-error {
  color: var(--error-color);
  animation: error-shake 0.5s ease-in-out;
}
```

### 5.2 키패드 컴포넌트
```css
.keypad {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  padding: 1rem;
  background: var(--keypad-bg);
  border-radius: 0.5rem;
}

.key {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 3.5rem;
  border: none;
  border-radius: 0.5rem;
  font-family: var(--font-ui);
  font-size: var(--text-lg);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  user-select: none;
  position: relative;
  overflow: hidden;
}

.key:active {
  transform: scale(0.95);
}

.key:focus {
  outline: 2px solid var(--focus-color);
  outline-offset: 2px;
}
```

### 5.3 키 타입별 스타일
```css
/* 숫자 키 */
.key-number {
  background: var(--key-number);
  color: var(--key-number-text);
  border: 1px solid var(--key-number-border);
}

.key-number:hover {
  background: var(--key-number-hover);
}

.key-number:active {
  background: var(--key-number-pressed);
}

/* 연산자 키 */
.key-operator {
  background: var(--key-operator);
  color: var(--key-operator-text);
  border: 1px solid var(--key-operator-border);
}

.key-operator:hover {
  background: var(--key-operator-hover);
}

/* 함수 키 */
.key-function {
  background: var(--key-function);
  color: var(--key-function-text);
  border: 1px solid var(--key-function-border);
  font-size: var(--text-sm);
}

.key-function:hover {
  background: var(--key-function-hover);
}

/* 특수 키 */
.key-special {
  background: var(--key-special);
  color: var(--key-special-text);
  border: 1px solid var(--key-special-border);
  font-size: var(--text-sm);
}

.key-special:hover {
  background: var(--key-special-hover);
}

/* 등호 키 */
.key-equals {
  background: var(--key-equals);
  color: var(--key-equals-text);
  border: 1px solid var(--key-equals-border);
  grid-row: span 2;
}

.key-equals:hover {
  background: var(--key-equals-hover);
}
```

## 6. 애니메이션 및 상호작용

### 6.1 키 프레스 애니메이션
```css
@keyframes key-press {
  0% { transform: scale(1); }
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
}

.key-pressed {
  animation: key-press 0.1s ease-in-out;
}
```

### 6.2 계산 로딩 애니메이션
```css
@keyframes calculation-loading {
  0% { opacity: 0.5; }
  50% { opacity: 0.8; }
  100% { opacity: 1; }
}

.calculating {
  animation: calculation-loading 0.3s ease-in-out;
}

@keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-spinner {
  animation: spinner 1s linear infinite;
}
```

### 6.3 오류 표시 애니메이션
```css
@keyframes error-shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

.error-shake {
  animation: error-shake 0.5s ease-in-out;
}
```

### 6.4 페이드 인/아웃 애니메이션
```css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-out {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-10px); }
}

.fade-in {
  animation: fade-in 0.3s ease-out;
}

.fade-out {
  animation: fade-out 0.3s ease-in;
}
```

## 7. 반응형 디자인

### 7.1 브레이크포인트
```css
/* 모바일 */
@media (max-width: 767px) {
  .calculator {
    width: var(--calculator-mobile-width);
    height: var(--calculator-mobile-height);
  }
  
  .key {
    min-height: 2.5rem;
    font-size: var(--text-base);
  }
  
  .display {
    min-height: 3rem;
    padding: 0.75rem;
  }
}

/* 태블릿 */
@media (min-width: 768px) and (max-width: 1023px) {
  .calculator {
    width: 480px;
    height: 640px;
  }
  
  .key {
    min-height: 3rem;
  }
}

/* 데스크톱 */
@media (min-width: 1024px) {
  .calculator {
    width: var(--calculator-width);
    height: var(--calculator-height);
  }
  
  .key {
    min-height: 3.5rem;
  }
}
```

### 7.2 터치 디바이스 최적화
```css
/* 터치 디바이스 */
@media (hover: none) and (pointer: coarse) {
  .key {
    min-height: 3rem;
    min-width: 3rem;
  }
  
  .key:active {
    background: var(--key-active-color);
  }
}
```

## 8. 접근성 가이드라인

### 8.1 키보드 네비게이션
```css
/* 포커스 표시 */
.key:focus {
  outline: 2px solid var(--focus-color);
  outline-offset: 2px;
}

.key:focus-visible {
  outline: 2px solid var(--focus-color);
  outline-offset: 2px;
}

/* 포커스 트랩 */
.keypad:focus-within {
  outline: 2px solid var(--focus-color);
  outline-offset: 2px;
}
```

### 8.2 고대비 모드
```css
@media (prefers-contrast: high) {
  .key {
    border: 2px solid currentColor;
  }
  
  .display {
    border: 2px solid currentColor;
  }
}
```

### 8.3 모션 감소
```css
@media (prefers-reduced-motion: reduce) {
  .key {
    transition: none;
  }
  
  .key-pressed {
    animation: none;
  }
  
  .error-shake {
    animation: none;
  }
}
```

## 9. 테마 시스템

### 9.1 라이트 테마
```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --text-primary: #212121;
  --text-secondary: #757575;
  --border-color: #e0e0e0;
  --shadow-color: rgba(0, 0, 0, 0.1);
}
```

### 9.2 다크 테마
```css
[data-theme="dark"] {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --text-primary: #ffffff;
  --text-secondary: #b3b3b3;
  --border-color: #444444;
  --shadow-color: rgba(0, 0, 0, 0.3);
}
```

### 9.3 고대비 테마
```css
[data-theme="high-contrast"] {
  --bg-primary: #ffffff;
  --bg-secondary: #f0f0f0;
  --text-primary: #000000;
  --text-secondary: #333333;
  --border-color: #000000;
  --shadow-color: rgba(0, 0, 0, 0.5);
}
```

## 10. 성능 최적화

### 10.1 CSS 최적화
```css
/* 하드웨어 가속 */
.key {
  transform: translateZ(0);
  will-change: transform;
}

/* GPU 가속 애니메이션 */
@keyframes key-press {
  0% { transform: scale(1) translateZ(0); }
  50% { transform: scale(0.95) translateZ(0); }
  100% { transform: scale(1) translateZ(0); }
}
```

### 10.2 레이지 로딩
```css
/* 레이지 로딩을 위한 스켈레톤 */
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

이 디자인 가이드라인은 공학용 계산기의 UI/UX를 일관성 있고 사용자 친화적으로 만들기 위한 포괄적인 가이드입니다.