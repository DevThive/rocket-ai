"use client"; // 클라이언트 컴포넌트로 설정

import { useState, useEffect, useRef } from 'react'; // useEffect와 useRef 추가
import { useTranslation } from 'react-i18next';
import axios from 'axios'; // axios 임포트

export default function Home() {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null); // 메시지 끝 위치를 참조하기 위한 ref

  const handleSendMessage = async () => {
    if (!input) return;

    const userMessage = { message: input };
    
    try {
      const response = await axios.post('/api/message', userMessage, {
        headers: { 'Content-Type': 'application/json' },
      });
      const data = response.data;

      setMessages([...messages, { text: input, fromUser: true }, { text: data.response, fromUser: false }]);
      setInput('');
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  // 메시지가 추가될 때마다 스크롤 하단으로 이동
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-base-200">
      <header className="bg-primary text-primary-content p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">{t('chat_title')}</h1>
        <div>
          <button onClick={() => i18n.changeLanguage('ko')} className="btn btn-outline-prime btn-sm">한국어</button>
          <button onClick={() => i18n.changeLanguage('en')} className="btn btn-outline-prime btn-sm ml-2">English</button>
        </div>
      </header>
      <main className="flex-1 p-4 overflow-auto">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`p-2 rounded-lg max-w-xs ${msg.fromUser ? 'bg-blue-200 self-end ml-auto' : 'bg-gray-300 self-start mr-auto'}`}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} /> {/* 스크롤을 위한 빈 div */}
        </div>
      </main>
      <footer className="p-4 bg-base-100">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress} // 엔터 키 입력 처리
            placeholder={t('type_message')}
            className="input input-bordered w-full"
          />
          <button onClick={handleSendMessage} className="btn btn-primary ml-2">{t('chat_btn')}</button>
        </div>
      </footer>
    </div>
  );
}
