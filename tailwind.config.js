/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 공학용 계산기 테마 색상
      colors: {
        primary: {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3',
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
        },
        secondary: {
          50: '#fce4ec',
          100: '#f8bbd9',
          200: '#f48fb1',
          300: '#f06292',
          400: '#ec407a',
          500: '#e91e63',
          600: '#d81b60',
          700: '#c2185b',
          800: '#ad1457',
          900: '#880e4f',
        },
        // 계산기 디스플레이 색상
        display: {
          light: '#f5f5f5',
          dark: '#1a1a1a',
          text: '#212121',
          'text-secondary': '#757575',
        },
        // 키패드 색상
        key: {
          number: '#f5f5f5',
          'number-hover': '#eeeeee',
          operator: '#ff9800',
          'operator-hover': '#f57c00',
          function: '#9c27b0',
          'function-hover': '#7b1fa2',
          special: '#607d8b',
          'special-hover': '#455a64',
        }
      },
      // 계산기 키패드 그리드
      gridTemplateColumns: {
        'keypad': 'repeat(4, 1fr)',
        'keypad-wide': 'repeat(5, 1fr)',
      },
      // 계산기 디스플레이 폰트
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      // 계산기 키 크기
      spacing: {
        'key': '3.5rem',
        'key-sm': '2.5rem',
        'key-lg': '4rem',
      },
      // 계산기 애니메이션
      animation: {
        'key-press': 'keyPress 0.1s ease-in-out',
        'calculation': 'calculation 0.3s ease-in-out',
        'error-shake': 'errorShake 0.5s ease-in-out',
      },
      keyframes: {
        keyPress: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        calculation: {
          '0%': { opacity: '0.5' },
          '50%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
        errorShake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
      },
      // 계산기 그림자
      boxShadow: {
        'key': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'key-pressed': '0 1px 2px rgba(0, 0, 0, 0.2)',
        'display': 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
        'calculator': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
      // 계산기 테두리 반경
      borderRadius: {
        'key': '0.5rem',
        'display': '0.75rem',
        'calculator': '1rem',
      },
    },
  },
  plugins: [
    // 커스텀 플러그인들
    function({ addUtilities, addComponents, theme }) {
      // 계산기 키 스타일 유틸리티
      addUtilities({
        '.key-base': {
          '@apply flex items-center justify-center text-lg font-medium transition-all duration-100 select-none': {},
        },
        '.key-number': {
          '@apply key-base bg-key-number hover:bg-key-number-hover text-gray-800': {},
        },
        '.key-operator': {
          '@apply key-base bg-key-operator hover:bg-key-operator-hover text-white': {},
        },
        '.key-function': {
          '@apply key-base bg-key-function hover:bg-key-function-hover text-white': {},
        },
        '.key-special': {
          '@apply key-base bg-key-special hover:bg-key-special-hover text-white': {},
        },
        '.key-pressed': {
          '@apply transform scale-95 shadow-key-pressed': {},
        },
      });

      // 계산기 컴포넌트 스타일
      addComponents({
        '.calculator': {
          '@apply bg-white dark:bg-gray-900 rounded-calculator shadow-calculator p-4 max-w-md mx-auto': {},
        },
        '.display': {
          '@apply bg-display-light dark:bg-display-dark rounded-display shadow-display p-4 mb-4 min-h-[4rem]': {},
        },
        '.keypad': {
          '@apply grid grid-cols-keypad gap-2': {},
        },
        '.history-panel': {
          '@apply bg-gray-50 dark:bg-gray-800 rounded-lg p-4 max-h-64 overflow-y-auto': {},
        },
      });
    },
  ],
  // 다크 모드 설정
  darkMode: 'class',
}