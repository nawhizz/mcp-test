import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // React 19의 새로운 기능 지원
      jsxImportSource: 'react',
      // React 19의 새로운 컴파일러 사용
      compiler: 'react-jsx',
      // 개발 시 Fast Refresh 활성화
      fastRefresh: true,
      // React 19의 새로운 기능들
      babel: {
        plugins: [
          // React 19의 새로운 JSX 변환
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
        ]
      }
    }),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1년
              },
              cacheKeyWillBeUsed: async ({ request }) => {
                return `${request.url}?v=1`;
              }
            }
          }
        ]
      },
      manifest: {
        name: '공학용 계산기',
        short_name: 'Calculator',
        description: '웹 기반 공학용 계산기 - React 19',
        theme_color: '#1976d2',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
        categories: ['education', 'productivity', 'utilities'],
        lang: 'ko',
        dir: 'ltr'
      },
      devOptions: {
        enabled: true,
        type: 'module'
      }
    })
  ],
  build: {
    outDir: 'dist',
    sourcemap: true,
    // React 19 최적화
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          // React 19 핵심 라이브러리
          'react-vendor': ['react', 'react-dom'],
          // 수학 계산 라이브러리
          'math-vendor': ['decimal.js', 'mathjs'],
          // 상태 관리
          'state-vendor': ['zustand'],
          // UI 라이브러리
          'ui-vendor': ['clsx', 'tailwind-merge']
        }
      }
    },
    // 청크 크기 경고 제한
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 3000,
    open: true,
    // React 19의 새로운 개발 서버 기능
    hmr: {
      overlay: true
    },
    // CORS 설정
    cors: true,
    // 프록시 설정 (필요시)
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  // React 19의 새로운 기능 지원
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    __VERSION__: JSON.stringify(process.env.npm_package_version)
  },
  // CSS 설정
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ]
    }
  },
  // 최적화 설정
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'decimal.js',
      'mathjs',
      'zustand'
    ],
    exclude: ['@vite/client', '@vite/env']
  },
  // 테스트 설정
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true
  }
});