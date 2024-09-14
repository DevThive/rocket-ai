import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          chat_title: 'Chat',
          type_message: 'Type your message...',
          chat_btn: 'Send'
        },
      },
      ko: {
        translation: {
          chat_title: '채팅',
          type_message: '메시지를 입력하세요...',
          chat_btn: '전송'
        },
      },
    },
    lng: 'ko', // 기본 언어 설정
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
