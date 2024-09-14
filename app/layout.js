"use client"; // 클라이언트 컴포넌트로 설정

import './globals.css';
import { useEffect } from 'react';
import i18n from './i18n';

export default function RootLayout({ children }) {
  useEffect(() => {
    i18n.changeLanguage('ko'); // 초기 언어 설정
  }, []);

  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
