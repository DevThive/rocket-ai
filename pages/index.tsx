import { useTranslation } from 'next-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">{t('chat_site')}</h1>
      <div className="mb-4">
        <button className="btn" onClick={() => changeLanguage('ko')}>한국어</button>
        <button className="btn" onClick={() => changeLanguage('en')}>English</button>
      </div>
      <p className="text-lg">{t('welcome')}</p>
    </div>
  );
};

export default Home;
