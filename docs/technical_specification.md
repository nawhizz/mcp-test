# 공학용 계산기 웹앱 기술 설계 명세서

## 1. 시스템 아키텍처

### 1.1 전체 아키텍처
```
┌─────────────────────────────────────────────────────────────┐
│                    사용자 인터페이스 계층                      │
├─────────────────────────────────────────────────────────────┤
│  React Components  │  UI State Management  │  Event Handlers │
├─────────────────────────────────────────────────────────────┤
│                    비즈니스 로직 계층                        │
├─────────────────────────────────────────────────────────────┤
│  Calculator Engine │  Math Functions  │  History Manager   │
├─────────────────────────────────────────────────────────────┤
│                    데이터 계층                              │
├─────────────────────────────────────────────────────────────┤
│  Local Storage  │  IndexedDB  │  Memory Cache              │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 기술 스택
- **Frontend Framework**: React 19+ with TypeScript
- **State Management**: Zustand + React 19 use() Hook
- **Styling**: Tailwind CSS + Headless UI
- **Math Library**: Decimal.js + Math.js
- **Build Tool**: Vite 6+ (React 19 지원)
- **Testing**: Vitest + React Testing Library + React 19 Testing
- **Linting**: ESLint + Prettier
- **Server Components**: React 19 Server Components (선택적)

## 2. 컴포넌트 설계

### 2.1 메인 컴포넌트 구조
```
CalculatorApp
├── Header
│   ├── ModeSelector
│   ├── ThemeToggle
│   └── SettingsButton
├── Display
│   ├── ExpressionDisplay
│   └── ResultDisplay
├── Keypad
│   ├── NumberKeys
│   ├── OperationKeys
│   ├── FunctionKeys
│   └── SpecialKeys
├── HistoryPanel
│   ├── HistoryList
│   └── HistoryItem
└── SettingsModal
    ├── ThemeSettings
    ├── PrecisionSettings
    └── UnitSettings
```

### 2.2 핵심 컴포넌트 상세

#### 2.2.1 CalculatorApp (메인 컨테이너)
```typescript
interface CalculatorAppProps {
  initialMode?: CalculatorMode;
  theme?: Theme;
}

interface CalculatorState {
  mode: CalculatorMode;
  theme: Theme;
  expression: string;
  result: string;
  history: CalculationHistory[];
  precision: number;
  angleUnit: AngleUnit;
}
```

#### 2.2.2 Display (디스플레이)
```typescript
interface DisplayProps {
  expression: string;
  result: string;
  error?: string;
  isCalculating: boolean;
}

// 2라인 디스플레이 구현
// - 상단: 입력된 수식
// - 하단: 계산 결과 또는 오류 메시지
```

#### 2.2.3 Keypad (키패드)
```typescript
interface KeypadProps {
  mode: CalculatorMode;
  onKeyPress: (key: KeyPress) => void;
  disabled?: boolean;
}

interface KeyPress {
  type: 'number' | 'operator' | 'function' | 'special';
  value: string;
  shift?: boolean;
  alpha?: boolean;
}
```

## 3. 상태 관리 설계

### 3.1 Zustand Store 구조 (React 19 최적화)
```typescript
interface CalculatorStore {
  // 계산 상태
  expression: string;
  result: string;
  isCalculating: boolean;
  error: string | null;
  
  // 설정 상태
  mode: CalculatorMode;
  theme: Theme;
  precision: number;
  angleUnit: AngleUnit;
  
  // 히스토리 상태
  history: CalculationHistory[];
  historyIndex: number;
  
  // 액션
  setExpression: (expr: string) => void;
  setResult: (result: string) => void;
  calculate: () => void;
  clear: () => void;
  addToHistory: (item: CalculationHistory) => void;
  setMode: (mode: CalculatorMode) => void;
  setTheme: (theme: Theme) => void;
}

// React 19 use() Hook을 활용한 비동기 상태 관리
interface AsyncCalculatorStore extends CalculatorStore {
  // 비동기 계산 (복잡한 수학 연산)
  calculateAsync: (expression: string) => Promise<string>;
  // Promise 기반 히스토리 로딩
  loadHistory: () => Promise<CalculationHistory[]>;
  // 서버 컴포넌트와의 통신
  syncWithServer: () => Promise<void>;
}
```

### 3.2 계산 엔진 설계
```typescript
class CalculatorEngine {
  private mathParser: MathParser;
  private precision: number;
  private angleUnit: AngleUnit;
  
  constructor(precision: number = 15, angleUnit: AngleUnit = 'rad') {
    this.mathParser = new MathParser();
    this.precision = precision;
    this.angleUnit = angleUnit;
  }
  
  // 기본 연산
  add(a: Decimal, b: Decimal): Decimal;
  subtract(a: Decimal, b: Decimal): Decimal;
  multiply(a: Decimal, b: Decimal): Decimal;
  divide(a: Decimal, b: Decimal): Decimal;
  
  // 고급 함수
  sin(x: Decimal): Decimal;
  cos(x: Decimal): Decimal;
  tan(x: Decimal): Decimal;
  log(x: Decimal): Decimal;
  ln(x: Decimal): Decimal;
  sqrt(x: Decimal): Decimal;
  power(base: Decimal, exponent: Decimal): Decimal;
  
  // 복소수 연산
  addComplex(a: Complex, b: Complex): Complex;
  multiplyComplex(a: Complex, b: Complex): Complex;
  
  // 행렬 연산
  addMatrix(a: Matrix, b: Matrix): Matrix;
  multiplyMatrix(a: Matrix, b: Matrix): Matrix;
  inverseMatrix(matrix: Matrix): Matrix;
  determinant(matrix: Matrix): Decimal;
}
```

## 4. 수학 함수 구현

### 4.1 기본 연산 함수
```typescript
// Decimal.js를 사용한 정밀한 계산
import { Decimal } from 'decimal.js';

export class BasicOperations {
  static add(a: string | number, b: string | number): string {
    return new Decimal(a).add(new Decimal(b)).toString();
  }
  
  static subtract(a: string | number, b: string | number): string {
    return new Decimal(a).sub(new Decimal(b)).toString();
  }
  
  static multiply(a: string | number, b: string | number): string {
    return new Decimal(a).mul(new Decimal(b)).toString();
  }
  
  static divide(a: string | number, b: string | number): string {
    if (new Decimal(b).isZero()) {
      throw new Error('Division by zero');
    }
    return new Decimal(a).div(new Decimal(b)).toString();
  }
}
```

### 4.2 삼각함수 구현
```typescript
export class TrigonometricFunctions {
  private static angleUnit: AngleUnit = 'rad';
  
  static setAngleUnit(unit: AngleUnit): void {
    this.angleUnit = unit;
  }
  
  static sin(x: string | number): string {
    const value = new Decimal(x);
    const radians = this.toRadians(value);
    return Math.sin(radians.toNumber()).toString();
  }
  
  static cos(x: string | number): string {
    const value = new Decimal(x);
    const radians = this.toRadians(value);
    return Math.cos(radians.toNumber()).toString();
  }
  
  static tan(x: string | number): string {
    const value = new Decimal(x);
    const radians = this.toRadians(value);
    return Math.tan(radians.toNumber()).toString();
  }
  
  private static toRadians(value: Decimal): Decimal {
    switch (this.angleUnit) {
      case 'deg':
        return value.mul(Math.PI).div(180);
      case 'grad':
        return value.mul(Math.PI).div(200);
      default:
        return value;
    }
  }
}
```

### 4.3 복소수 연산 구현
```typescript
export class Complex {
  public real: Decimal;
  public imaginary: Decimal;
  
  constructor(real: string | number, imaginary: string | number = 0) {
    this.real = new Decimal(real);
    this.imaginary = new Decimal(imaginary);
  }
  
  add(other: Complex): Complex {
    return new Complex(
      this.real.add(other.real),
      this.imaginary.add(other.imaginary)
    );
  }
  
  multiply(other: Complex): Complex {
    const real = this.real.mul(other.real).sub(this.imaginary.mul(other.imaginary));
    const imaginary = this.real.mul(other.imaginary).add(this.imaginary.mul(other.real));
    return new Complex(real, imaginary);
  }
  
  magnitude(): Decimal {
    return this.real.pow(2).add(this.imaginary.pow(2)).sqrt();
  }
  
  toString(): string {
    if (this.imaginary.isZero()) {
      return this.real.toString();
    }
    const sign = this.imaginary.isPositive() ? '+' : '';
    return `${this.real}${sign}${this.imaginary}i`;
  }
}
```

## 5. 데이터 저장 설계

### 5.1 로컬 스토리지 구조
```typescript
interface StorageData {
  settings: {
    theme: Theme;
    precision: number;
    angleUnit: AngleUnit;
    mode: CalculatorMode;
  };
  history: CalculationHistory[];
  variables: Record<string, string>;
  functions: Record<string, string>;
}

export class StorageManager {
  private static STORAGE_KEY = 'calculator_data';
  
  static save(data: Partial<StorageData>): void {
    const existing = this.load();
    const updated = { ...existing, ...data };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updated));
  }
  
  static load(): StorageData {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (!data) {
      return this.getDefaultData();
    }
    return JSON.parse(data);
  }
  
  private static getDefaultData(): StorageData {
    return {
      settings: {
        theme: 'light',
        precision: 15,
        angleUnit: 'rad',
        mode: 'comp'
      },
      history: [],
      variables: {},
      functions: {}
    };
  }
}
```

### 5.2 히스토리 관리
```typescript
interface CalculationHistory {
  id: string;
  expression: string;
  result: string;
  timestamp: number;
  mode: CalculatorMode;
}

export class HistoryManager {
  private static MAX_HISTORY = 100;
  
  static add(expression: string, result: string, mode: CalculatorMode): void {
    const history: CalculationHistory = {
      id: crypto.randomUUID(),
      expression,
      result,
      timestamp: Date.now(),
      mode
    };
    
    const histories = this.getAll();
    histories.unshift(history);
    
    if (histories.length > this.MAX_HISTORY) {
      histories.splice(this.MAX_HISTORY);
    }
    
    StorageManager.save({ history: histories });
  }
  
  static getAll(): CalculationHistory[] {
    const data = StorageManager.load();
    return data.history || [];
  }
  
  static clear(): void {
    StorageManager.save({ history: [] });
  }
}
```

## 6. 테마 시스템 설계

### 6.1 테마 정의
```typescript
interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    error: string;
    success: string;
    warning: string;
  };
  fonts: {
    display: string;
    body: string;
    mono: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

const themes: Record<string, Theme> = {
  light: {
    name: 'Light',
    colors: {
      primary: '#1976d2',
      secondary: '#dc004e',
      background: '#ffffff',
      surface: '#f5f5f5',
      text: '#212121',
      textSecondary: '#757575',
      border: '#e0e0e0',
      error: '#d32f2f',
      success: '#388e3c',
      warning: '#f57c00'
    },
    // ... 폰트 및 스페이싱 정의
  },
  dark: {
    name: 'Dark',
    colors: {
      primary: '#90caf9',
      secondary: '#f48fb1',
      background: '#121212',
      surface: '#1e1e1e',
      text: '#ffffff',
      textSecondary: '#b3b3b3',
      border: '#333333',
      error: '#f44336',
      success: '#4caf50',
      warning: '#ff9800'
    },
    // ... 폰트 및 스페이싱 정의
  }
};
```

### 6.2 테마 적용 시스템
```typescript
export class ThemeManager {
  private static currentTheme: Theme = themes.light;
  
  static setTheme(themeName: string): void {
    const theme = themes[themeName];
    if (!theme) {
      throw new Error(`Theme '${themeName}' not found`);
    }
    
    this.currentTheme = theme;
    this.applyTheme(theme);
    StorageManager.save({ settings: { theme: themeName } });
  }
  
  private static applyTheme(theme: Theme): void {
    const root = document.documentElement;
    
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    
    Object.entries(theme.fonts).forEach(([key, value]) => {
      root.style.setProperty(`--font-${key}`, value);
    });
    
    Object.entries(theme.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value);
    });
  }
}
```

## 7. 접근성 구현

### 7.1 키보드 네비게이션
```typescript
export class KeyboardNavigation {
  private static keyMap: Record<string, string> = {
    'Enter': '=',
    'Escape': 'AC',
    'Backspace': 'DEL',
    'Delete': 'DEL',
    ' ': ' ',
    '+': '+',
    '-': '-',
    '*': '×',
    '/': '÷',
    '.': '.',
    '0': '0',
    '1': '1',
    // ... 숫자 및 연산자 매핑
  };
  
  static handleKeyPress(event: KeyboardEvent): void {
    const key = event.key;
    const mappedKey = this.keyMap[key];
    
    if (mappedKey) {
      event.preventDefault();
      // 키패드 이벤트 발생
      this.dispatchKeyPress(mappedKey);
    }
  }
  
  private static dispatchKeyPress(key: string): void {
    const keypad = document.querySelector('[data-testid="keypad"]');
    const keyElement = keypad?.querySelector(`[data-key="${key}"]`);
    
    if (keyElement) {
      (keyElement as HTMLElement).click();
    }
  }
}
```

### 7.2 ARIA 라벨링
```typescript
export const ARIA_LABELS = {
  keypad: '계산기 키패드',
  display: '계산 결과 표시',
  expression: '입력된 수식',
  result: '계산 결과',
  history: '계산 히스토리',
  settings: '설정 메뉴',
  clear: '모두 지우기',
  delete: '한 글자 삭제',
  equals: '계산 실행'
} as const;
```

## 8. 성능 최적화

### 8.1 메모이제이션 (React 19 최적화)
```typescript
import { useMemo, useCallback, use, useTransition } from 'react';

// React 19의 새로운 use() Hook 활용
export const useCalculator = () => {
  const [isPending, startTransition] = useTransition();
  
  const calculate = useCallback((expression: string) => {
    return useMemo(() => {
      try {
        return CalculatorEngine.evaluate(expression);
      } catch (error) {
        return { error: error.message };
      }
    }, [expression]);
  }, []);
  
  // React 19의 use() Hook을 활용한 비동기 계산
  const calculateAsync = useCallback(async (expression: string) => {
    const promise = CalculatorEngine.evaluateAsync(expression);
    return use(promise);
  }, []);
  
  // 복잡한 계산을 위한 startTransition 사용
  const calculateComplex = useCallback((expression: string) => {
    startTransition(() => {
      calculate(expression);
    });
  }, [calculate]);
  
  return { 
    calculate, 
    calculateAsync, 
    calculateComplex,
    isPending 
  };
};
```

### 8.2 가상화 (히스토리 리스트)
```typescript
import { FixedSizeList as List } from 'react-window';

export const VirtualizedHistoryList: React.FC<{ items: CalculationHistory[] }> = ({ items }) => {
  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div style={style}>
      <HistoryItem item={items[index]} />
    </div>
  );
  
  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={60}
    >
      {Row}
    </List>
  );
};
```

## 9. 테스트 전략

### 9.1 단위 테스트
```typescript
// CalculatorEngine.test.ts
describe('CalculatorEngine', () => {
  test('기본 연산 테스트', () => {
    expect(CalculatorEngine.add('1', '2')).toBe('3');
    expect(CalculatorEngine.multiply('3', '4')).toBe('12');
  });
  
  test('삼각함수 테스트', () => {
    expect(CalculatorEngine.sin('0')).toBe('0');
    expect(CalculatorEngine.cos('0')).toBe('1');
  });
  
  test('오류 처리 테스트', () => {
    expect(() => CalculatorEngine.divide('1', '0')).toThrow('Division by zero');
  });
});
```

### 9.2 통합 테스트
```typescript
// CalculatorApp.test.tsx
describe('CalculatorApp', () => {
  test('전체 계산 플로우', async () => {
    render(<CalculatorApp />);
    
    // 2 + 3 = 5 계산 테스트
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    
    expect(screen.getByDisplayValue('5')).toBeInTheDocument();
  });
});
```

## 10. 배포 및 빌드

### 10.1 Vite 설정 (React 19 지원)
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // React 19의 새로운 기능 지원
      jsxImportSource: '@react-jsx',
      // Server Components 지원 (선택적)
      serverComponents: true,
      // React 19의 새로운 컴파일러 사용
      compiler: 'react-jsx'
    })
  ],
  build: {
    outDir: 'dist',
    sourcemap: true,
    // React 19 최적화
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          math: ['decimal.js', 'mathjs'],
          // React 19의 새로운 기능들
          concurrent: ['react-dom/client']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    // React 19의 새로운 개발 서버 기능
    hmr: {
      overlay: true
    }
  },
  // React 19의 새로운 기능 지원
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development')
  }
});
```

### 10.2 PWA 설정
```typescript
// vite.config.ts PWA 플러그인 추가
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: '공학용 계산기',
        short_name: 'Calculator',
        description: '웹 기반 공학용 계산기',
        theme_color: '#1976d2',
        background_color: '#ffffff',
        display: 'standalone'
      }
    })
  ]
});
```

## 11. React 19 신기능 활용

### 11.1 use() Hook을 활용한 비동기 상태 관리
```typescript
// 복잡한 수학 계산을 위한 비동기 처리
export const useAsyncCalculation = () => {
  const [calculationPromise, setCalculationPromise] = useState<Promise<string> | null>(null);
  
  const calculateAsync = useCallback((expression: string) => {
    const promise = CalculatorEngine.evaluateAsync(expression);
    setCalculationPromise(promise);
    return promise;
  }, []);
  
  // React 19의 use() Hook으로 Promise 처리
  const result = calculationPromise ? use(calculationPromise) : null;
  
  return { calculateAsync, result };
};
```

### 11.2 Server Components 활용 (선택적)
```typescript
// 서버에서 미리 계산된 상수나 설정을 제공
export async function CalculatorConstants() {
  // 서버에서 수학 상수들을 미리 계산
  const constants = await getMathConstants();
  
  return (
    <div className="constants-panel">
      {Object.entries(constants).map(([name, value]) => (
        <button key={name} onClick={() => useConstant(name)}>
          {name}: {value}
        </button>
      ))}
    </div>
  );
}
```

### 11.3 React 19의 새로운 컴파일러 최적화
```typescript
// React 19의 자동 메모이제이션 활용
export const OptimizedKeypad = ({ onKeyPress }: { onKeyPress: (key: string) => void }) => {
  // React 19 컴파일러가 자동으로 메모이제이션
  return (
    <div className="keypad">
      {KEYS.map(key => (
        <button 
          key={key.value}
          onClick={() => onKeyPress(key.value)}
          className={key.className}
        >
          {key.label}
        </button>
      ))}
    </div>
  );
};
```

### 11.4 Concurrent Features 활용
```typescript
// 복잡한 계산을 위한 Suspense와 Error Boundary
export const CalculatorWithSuspense = () => {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Suspense fallback={<CalculationLoader />}>
        <Calculator />
      </Suspense>
    </ErrorBoundary>
  );
};

// 복잡한 행렬 계산을 위한 startTransition
export const useMatrixCalculation = () => {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<Matrix | null>(null);
  
  const calculateMatrix = useCallback((matrixA: Matrix, matrixB: Matrix) => {
    startTransition(() => {
      const result = MatrixOperations.multiply(matrixA, matrixB);
      setResult(result);
    });
  }, []);
  
  return { calculateMatrix, result, isPending };
};
```

### 11.5 React 19의 새로운 이벤트 시스템
```typescript
// React 19의 향상된 이벤트 처리
export const useKeyboardNavigation = () => {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // React 19의 새로운 이벤트 시스템 활용
    if (event.key === 'Enter') {
      event.preventDefault();
      // 계산 실행
    }
  }, []);
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
};
```

이 기술 설계 명세서는 React 19의 최신 기능을 활용하여 시중의 공학용 계산기와 동일한 수준의 기능을 웹에서 구현하기 위한 상세한 기술적 가이드라인을 제공합니다.