const {
    ButtonGroup, Button, Icon, Grid, IconButton, CircularProgress
} = MaterialUI;

const {
    BrowserRouter, Switch, Route, Link, useLocation
} = ReactRouterDOM;

const App = ({ names, languages }) => {
    const [language, setLanguage] = React.useState('he');

    const lang = languages[language];

    const location = useLocation();
    React.useEffect(() => {
        console.log(location.pathname + location.search)
        window.ga.getAll()[0].set('page', location.pathname + location.search);
        window.ga.getAll()[0].send('pageview')
    }, [location]);

    let name = new URLSearchParams(location.search).get("sheet");
    if (!name || !name.length) name = 'showcharts';

    if (name === 'widget') {
        return <SmallWidget lang={lang} />
    }
    return (
        <>
            <Header language={language} setLanguage={setLanguage} lang={lang} />
            <MainView name={name} names={names} lang={lang} />
            <Footer />
        </>
    );
}
