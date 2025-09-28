# 공학용 계산기 UI 디자인 와이어프레임

## 1. 메인 레이아웃 와이어프레임

### 1.1 데스크톱 버전 (1024px+)
```svg
<svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
  <!-- 계산기 외곽 -->
  <rect x="20" y="20" width="360" height="560" rx="20" ry="20" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="2"/>
  
  <!-- 헤더 영역 -->
  <rect x="40" y="40" width="320" height="60" rx="10" ry="10" fill="#1976d2" stroke="#1565c0" stroke-width="1"/>
  <text x="200" y="80" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white">공학용 계산기</text>
  
  <!-- 디스플레이 영역 -->
  <rect x="40" y="120" width="320" height="80" rx="8" ry="8" fill="#1a1a1a" stroke="#333" stroke-width="1"/>
  <text x="50" y="150" font-family="monospace" font-size="14" fill="#00ff00">2 + 3 × 4 =</text>
  <text x="50" y="180" font-family="monospace" font-size="20" font-weight="bold" fill="#ffffff">14</text>
  
  <!-- 키패드 영역 -->
  <rect x="40" y="220" width="320" height="340" rx="8" ry="8" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/>
  
  <!-- 첫 번째 행: 함수 키 -->
  <rect x="50" y="240" width="60" height="50" rx="4" ry="4" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1"/>
  <text x="80" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">sin</text>
  
  <rect x="120" y="240" width="60" height="50" rx="4" ry="4" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1"/>
  <text x="150" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">cos</text>
  
  <rect x="190" y="240" width="60" height="50" rx="4" ry="4" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1"/>
  <text x="220" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">tan</text>
  
  <rect x="260" y="240" width="60" height="50" rx="4" ry="4" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1"/>
  <text x="290" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">log</text>
  
  <rect x="330" y="240" width="60" height="50" rx="4" ry="4" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1"/>
  <text x="360" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">ln</text>
  
  <!-- 두 번째 행: 함수 키 -->
  <rect x="50" y="300" width="60" height="50" rx="4" ry="4" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1"/>
  <text x="80" y="330" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">√</text>
  
  <rect x="120" y="300" width="60" height="50" rx="4" ry="4" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1"/>
  <text x="150" y="330" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">x²</text>
  
  <rect x="190" y="300" width="60" height="50" rx="4" ry="4" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1"/>
  <text x="220" y="330" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">xʸ</text>
  
  <rect x="260" y="300" width="60" height="50" rx="4" ry="4" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1"/>
  <text x="290" y="330" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">π</text>
  
  <rect x="330" y="300" width="60" height="50" rx="4" ry="4" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1"/>
  <text x="360" y="330" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">e</text>
  
  <!-- 세 번째 행: 숫자 키 -->
  <rect x="50" y="360" width="60" height="50" rx="4" ry="4" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="80" y="390" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#333">7</text>
  
  <rect x="120" y="360" width="60" height="50" rx="4" ry="4" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="150" y="390" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#333">8</text>
  
  <rect x="190" y="360" width="60" height="50" rx="4" ry="4" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="220" y="390" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#333">9</text>
  
  <rect x="260" y="360" width="60" height="50" rx="4" ry="4" fill="#ff9800" stroke="#f57c00" stroke-width="1"/>
  <text x="290" y="390" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white">÷</text>
  
  <rect x="330" y="360" width="60" height="50" rx="4" ry="4" fill="#607d8b" stroke="#455a64" stroke-width="1"/>
  <text x="360" y="390" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">C</text>
  
  <!-- 네 번째 행: 숫자 키 -->
  <rect x="50" y="420" width="60" height="50" rx="4" ry="4" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="80" y="450" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#333">4</text>
  
  <rect x="120" y="420" width="60" height="50" rx="4" ry="4" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="150" y="450" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#333">5</text>
  
  <rect x="190" y="420" width="60" height="50" rx="4" ry="4" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="220" y="450" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#333">6</text>
  
  <rect x="260" y="420" width="60" height="50" rx="4" ry="4" fill="#ff9800" stroke="#f57c00" stroke-width="1"/>
  <text x="290" y="450" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white">×</text>
  
  <rect x="330" y="420" width="60" height="50" rx="4" ry="4" fill="#607d8b" stroke="#455a64" stroke-width="1"/>
  <text x="360" y="450" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">⌫</text>
  
  <!-- 다섯 번째 행: 숫자 키 -->
  <rect x="50" y="480" width="60" height="50" rx="4" ry="4" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="80" y="510" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#333">1</text>
  
  <rect x="120" y="480" width="60" height="50" rx="4" ry="4" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="150" y="510" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#333">2</text>
  
  <rect x="190" y="480" width="60" height="50" rx="4" ry="4" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="220" y="510" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#333">3</text>
  
  <rect x="260" y="480" width="60" height="50" rx="4" ry="4" fill="#ff9800" stroke="#f57c00" stroke-width="1"/>
  <text x="290" y="510" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white">-</text>
  
  <rect x="330" y="480" width="60" height="110" rx="4" ry="4" fill="#4caf50" stroke="#388e3c" stroke-width="1"/>
  <text x="360" y="540" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white">=</text>
  
  <!-- 여섯 번째 행: 숫자 키 -->
  <rect x="50" y="540" width="120" height="50" rx="4" ry="4" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="110" y="570" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#333">0</text>
  
  <rect x="190" y="540" width="60" height="50" rx="4" ry="4" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="220" y="570" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#333">.</text>
  
  <rect x="260" y="540" width="60" height="50" rx="4" ry="4" fill="#ff9800" stroke="#f57c00" stroke-width="1"/>
  <text x="290" y="570" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white">+</text>
</svg>
```

### 1.2 모바일 버전 (320px-767px)
```svg
<svg width="320" height="480" viewBox="0 0 320 480" xmlns="http://www.w3.org/2000/svg">
  <!-- 계산기 외곽 -->
  <rect x="10" y="10" width="300" height="460" rx="15" ry="15" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="2"/>
  
  <!-- 헤더 영역 -->
  <rect x="20" y="20" width="280" height="50" rx="8" ry="8" fill="#1976d2" stroke="#1565c0" stroke-width="1"/>
  <text x="160" y="50" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white">공학용 계산기</text>
  
  <!-- 디스플레이 영역 -->
  <rect x="20" y="80" width="280" height="60" rx="6" ry="6" fill="#1a1a1a" stroke="#333" stroke-width="1"/>
  <text x="30" y="105" font-family="monospace" font-size="12" fill="#00ff00">2 + 3 × 4 =</text>
  <text x="30" y="125" font-family="monospace" font-size="16" font-weight="bold" fill="#ffffff">14</text>
  
  <!-- 키패드 영역 -->
  <rect x="20" y="150" width="280" height="310" rx="6" ry="6" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/>
  
  <!-- 첫 번째 행: 함수 키 (작은 크기) -->
  <rect x="30" y="160" width="45" height="35" rx="3" ry="3" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1"/>
  <text x="52" y="180" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white">sin</text>
  
  <rect x="85" y="160" width="45" height="35" rx="3" ry="3" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1"/>
  <text x="107" y="180" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white">cos</text>
  
  <rect x="140" y="160" width="45" height="35" rx="3" ry="3" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1"/>
  <text x="162" y="180" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white">tan</text>
  
  <rect x="195" y="160" width="45" height="35" rx="3" ry="3" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1"/>
  <text x="217" y="180" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white">log</text>
  
  <rect x="250" y="160" width="45" height="35" rx="3" ry="3" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1"/>
  <text x="272" y="180" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white">ln</text>
  
  <!-- 두 번째 행: 함수 키 -->
  <rect x="30" y="205" width="45" height="35" rx="3" ry="3" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1"/>
  <text x="52" y="225" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white">√</text>
  
  <rect x="85" y="205" width="45" height="35" rx="3" ry="3" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1"/>
  <text x="107" y="225" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white">x²</text>
  
  <rect x="140" y="205" width="45" height="35" rx="3" ry="3" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1"/>
  <text x="162" y="225" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white">xʸ</text>
  
  <rect x="195" y="205" width="45" height="35" rx="3" ry="3" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1"/>
  <text x="217" y="225" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white">π</text>
  
  <rect x="250" y="205" width="45" height="35" rx="3" ry="3" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1"/>
  <text x="272" y="225" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white">e</text>
  
  <!-- 세 번째 행: 숫자 키 -->
  <rect x="30" y="250" width="45" height="35" rx="3" ry="3" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="52" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">7</text>
  
  <rect x="85" y="250" width="45" height="35" rx="3" ry="3" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="107" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">8</text>
  
  <rect x="140" y="250" width="45" height="35" rx="3" ry="3" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="162" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">9</text>
  
  <rect x="195" y="250" width="45" height="35" rx="3" ry="3" fill="#ff9800" stroke="#f57c00" stroke-width="1"/>
  <text x="217" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white">÷</text>
  
  <rect x="250" y="250" width="45" height="35" rx="3" ry="3" fill="#607d8b" stroke="#455a64" stroke-width="1"/>
  <text x="272" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white">C</text>
  
  <!-- 네 번째 행: 숫자 키 -->
  <rect x="30" y="295" width="45" height="35" rx="3" ry="3" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="52" y="315" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">4</text>
  
  <rect x="85" y="295" width="45" height="35" rx="3" ry="3" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="107" y="315" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">5</text>
  
  <rect x="140" y="295" width="45" height="35" rx="3" ry="3" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="162" y="315" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">6</text>
  
  <rect x="195" y="295" width="45" height="35" rx="3" ry="3" fill="#ff9800" stroke="#f57c00" stroke-width="1"/>
  <text x="217" y="315" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white">×</text>
  
  <rect x="250" y="295" width="45" height="35" rx="3" ry="3" fill="#607d8b" stroke="#455a64" stroke-width="1"/>
  <text x="272" y="315" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white">⌫</text>
  
  <!-- 다섯 번째 행: 숫자 키 -->
  <rect x="30" y="340" width="45" height="35" rx="3" ry="3" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="52" y="360" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">1</text>
  
  <rect x="85" y="340" width="45" height="35" rx="3" ry="3" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="107" y="360" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">2</text>
  
  <rect x="140" y="340" width="45" height="35" rx="3" ry="3" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="162" y="360" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">3</text>
  
  <rect x="195" y="340" width="45" height="35" rx="3" ry="3" fill="#ff9800" stroke="#f57c00" stroke-width="1"/>
  <text x="217" y="360" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white">-</text>
  
  <rect x="250" y="340" width="45" height="80" rx="3" ry="3" fill="#4caf50" stroke="#388e3c" stroke-width="1"/>
  <text x="272" y="385" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white">=</text>
  
  <!-- 여섯 번째 행: 숫자 키 -->
  <rect x="30" y="385" width="90" height="35" rx="3" ry="3" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="75" y="405" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">0</text>
  
  <rect x="140" y="385" width="45" height="35" rx="3" ry="3" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="162" y="405" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">.</text>
  
  <rect x="195" y="385" width="45" height="35" rx="3" ry="3" fill="#ff9800" stroke="#f57c00" stroke-width="1"/>
  <text x="217" y="405" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white">+</text>
</svg>
```

## 2. 컴포넌트별 와이어프레임

### 2.1 디스플레이 컴포넌트
```svg
<svg width="320" height="80" viewBox="0 0 320 80" xmlns="http://www.w3.org/2000/svg">
  <!-- 디스플레이 배경 -->
  <rect x="0" y="0" width="320" height="80" rx="8" ry="8" fill="#1a1a1a" stroke="#333" stroke-width="2"/>
  
  <!-- 상단: 입력 수식 -->
  <rect x="10" y="10" width="300" height="25" fill="transparent"/>
  <text x="15" y="30" font-family="monospace" font-size="14" fill="#00ff00">2 + 3 × 4 =</text>
  
  <!-- 하단: 계산 결과 -->
  <rect x="10" y="40" width="300" height="30" fill="transparent"/>
  <text x="15" y="65" font-family="monospace" font-size="20" font-weight="bold" fill="#ffffff">14</text>
  
  <!-- 오류 표시 (예시) -->
  <!-- <text x="15" y="65" font-family="monospace" font-size="16" fill="#ff4444">Error: Division by zero</text> -->
</svg>
```

### 2.2 키패드 컴포넌트
```svg
<svg width="320" height="200" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
  <!-- 키패드 배경 -->
  <rect x="0" y="0" width="320" height="200" rx="8" ry="8" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/>
  
  <!-- 숫자 키 (0-9) -->
  <rect x="20" y="20" width="50" height="40" rx="4" ry="4" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="45" y="45" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">7</text>
  
  <rect x="80" y="20" width="50" height="40" rx="4" ry="4" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="105" y="45" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">8</text>
  
  <rect x="140" y="20" width="50" height="40" rx="4" ry="4" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="165" y="45" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">9</text>
  
  <!-- 연산자 키 -->
  <rect x="200" y="20" width="50" height="40" rx="4" ry="4" fill="#ff9800" stroke="#f57c00" stroke-width="1"/>
  <text x="225" y="45" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white">÷</text>
  
  <!-- 함수 키 -->
  <rect x="260" y="20" width="50" height="40" rx="4" ry="4" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1"/>
  <text x="285" y="45" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">sin</text>
  
  <!-- 특수 키 -->
  <rect x="20" y="70" width="50" height="40" rx="4" ry="4" fill="#607d8b" stroke="#455a64" stroke-width="1"/>
  <text x="45" y="95" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">C</text>
  
  <!-- 등호 키 (큰 크기) -->
  <rect x="200" y="70" width="110" height="40" rx="4" ry="4" fill="#4caf50" stroke="#388e3c" stroke-width="1"/>
  <text x="255" y="95" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white">=</text>
</svg>
```

### 2.3 히스토리 패널
```svg
<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <!-- 히스토리 패널 배경 -->
  <rect x="0" y="0" width="300" height="200" rx="8" ry="8" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/>
  
  <!-- 헤더 -->
  <rect x="0" y="0" width="300" height="30" rx="8" ry="8" fill="#e9ecef"/>
  <text x="15" y="20" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#495057">계산 히스토리</text>
  
  <!-- 히스토리 아이템들 -->
  <rect x="10" y="40" width="280" height="25" fill="white" stroke="#dee2e6" stroke-width="1"/>
  <text x="15" y="57" font-family="monospace" font-size="12" fill="#495057">2 + 3 × 4 = 14</text>
  
  <rect x="10" y="70" width="280" height="25" fill="white" stroke="#dee2e6" stroke-width="1"/>
  <text x="15" y="87" font-family="monospace" font-size="12" fill="#495057">sin(π/2) = 1</text>
  
  <rect x="10" y="100" width="280" height="25" fill="white" stroke="#dee2e6" stroke-width="1"/>
  <text x="15" y="117" font-family="monospace" font-size="12" fill="#495057">√(16) = 4</text>
  
  <rect x="10" y="130" width="280" height="25" fill="white" stroke="#dee2e6" stroke-width="1"/>
  <text x="15" y="147" font-family="monospace" font-size="12" fill="#495057">log(100) = 2</text>
  
  <!-- 스크롤바 -->
  <rect x="285" y="40" width="10" height="115" fill="#e9ecef" stroke="#dee2e6" stroke-width="1"/>
  <rect x="287" y="50" width="6" height="20" fill="#6c757d"/>
</svg>
```

## 3. 다크 모드 와이어프레임

### 3.1 다크 모드 메인 레이아웃
```svg
<svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
  <!-- 계산기 외곽 (다크) -->
  <rect x="20" y="20" width="360" height="560" rx="20" ry="20" fill="#1a1a1a" stroke="#333" stroke-width="2"/>
  
  <!-- 헤더 영역 (다크) -->
  <rect x="40" y="40" width="320" height="60" rx="10" ry="10" fill="#1976d2" stroke="#1565c0" stroke-width="1"/>
  <text x="200" y="80" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white">공학용 계산기</text>
  
  <!-- 디스플레이 영역 (다크) -->
  <rect x="40" y="120" width="320" height="80" rx="8" ry="8" fill="#000000" stroke="#444" stroke-width="1"/>
  <text x="50" y="150" font-family="monospace" font-size="14" fill="#00ff00">2 + 3 × 4 =</text>
  <text x="50" y="180" font-family="monospace" font-size="20" font-weight="bold" fill="#ffffff">14</text>
  
  <!-- 키패드 영역 (다크) -->
  <rect x="40" y="220" width="320" height="340" rx="8" ry="8" fill="#2d2d2d" stroke="#444" stroke-width="1"/>
  
  <!-- 숫자 키 (다크) -->
  <rect x="50" y="240" width="60" height="50" rx="4" ry="4" fill="#404040" stroke="#555" stroke-width="1"/>
  <text x="80" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#ffffff">7</text>
  
  <!-- 연산자 키 (다크) -->
  <rect x="260" y="240" width="60" height="50" rx="4" ry="4" fill="#ff9800" stroke="#f57c00" stroke-width="1"/>
  <text x="290" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white">÷</text>
  
  <!-- 함수 키 (다크) -->
  <rect x="50" y="300" width="60" height="50" rx="4" ry="4" fill="#7b1fa2" stroke="#6a1b9a" stroke-width="1"/>
  <text x="80" y="330" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">sin</text>
</svg>
```

## 4. 상호작용 상태 와이어프레임

### 4.1 키 프레스 상태
```svg
<svg width="80" height="60" viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
  <!-- 일반 상태 -->
  <rect x="0" y="0" width="60" height="40" rx="4" ry="4" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
  <text x="30" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">7</text>
  
  <!-- 프레스 상태 (오른쪽) -->
  <rect x="70" y="5" width="60" height="40" rx="4" ry="4" fill="#e0e0e0" stroke="#bdbdbd" stroke-width="1"/>
  <text x="100" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">7</text>
  
  <!-- 프레스 표시 -->
  <text x="100" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#666">Pressed</text>
</svg>
```

### 4.2 로딩 상태
```svg
<svg width="320" height="80" viewBox="0 0 320 80" xmlns="http://www.w3.org/2000/svg">
  <!-- 디스플레이 배경 -->
  <rect x="0" y="0" width="320" height="80" rx="8" ry="8" fill="#1a1a1a" stroke="#333" stroke-width="2"/>
  
  <!-- 로딩 애니메이션 -->
  <circle cx="160" cy="40" r="15" fill="none" stroke="#00ff00" stroke-width="2" stroke-dasharray="70" stroke-dashoffset="70">
    <animate attributeName="stroke-dashoffset" values="70;0;70" dur="1s" repeatCount="indefinite"/>
  </circle>
  
  <!-- 로딩 텍스트 -->
  <text x="160" y="65" text-anchor="middle" font-family="monospace" font-size="12" fill="#00ff00">계산 중...</text>
</svg>
```

## 5. 접근성 고려사항

### 5.1 키보드 포커스 표시
```svg
<svg width="80" height="60" viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
  <!-- 포커스된 키 -->
  <rect x="0" y="0" width="60" height="40" rx="4" ry="4" fill="#f5f5f5" stroke="#1976d2" stroke-width="3"/>
  <text x="30" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">7</text>
  
  <!-- 포커스 표시 -->
  <text x="30" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#1976d2">Focused</text>
</svg>
```

### 5.2 고대비 모드
```svg
<svg width="80" height="60" viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
  <!-- 고대비 키 -->
  <rect x="0" y="0" width="60" height="40" rx="4" ry="4" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="30" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#000000">7</text>
  
  <!-- 고대비 표시 -->
  <text x="30" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#000000">High Contrast</text>
</svg>
```

이 와이어프레임들은 공학용 계산기의 UI 디자인을 시각적으로 보여주며, 개발 시 참고할 수 있는 구체적인 가이드라인을 제공합니다.