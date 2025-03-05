import { useTranslation } from 'react-i18next';

function App() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <h1>{t('greeting')}</h1>
            <p>{t('welcome')}</p>
            <button onClick={() => changeLanguage('en')}>{t('english')}</button>
            <button onClick={() => changeLanguage('vi')}>{t('vietnamese')}</button>
        </div>
    );
}

export default App;
