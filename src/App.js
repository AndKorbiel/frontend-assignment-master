import React from "react";
import {useEffect, useState} from "react";
import SingleArticle from "./components/SingleArticle";
import SortingButton from "./components/SortingButton";
import Filters from "./components/Filters";
import moment from "moment";
import './styles/app.scss';

// material-ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {Alert} from "@mui/material";

const App = () => {
    const [articles, setArticles] = useState([]);
    const [filterOptions, updateFilterOptions] = useState([
        {label: 'fashion', category: 'fashion', checked: true},
        {label: 'sports', category: 'sport', checked: true}
    ])
    const [sortingOrderFromLatest, setSortingOrderFromLatest] = useState(true);
    const [dataLoadingError, setDataLoadingError] = useState(false);

    const formatArticlesData = data => {
        let formatted = [];
        data.forEach(el => {
            formatted = [...formatted, ...el.articles]
        });
        setArticles(formatted);
    }

    const getArticlesData = () => {
        Promise.all([
            fetch('http://localhost:6010/articles/sports'),
            fetch('http://localhost:6010/articles/fashion')
        ])
            .then(res => Promise.all(res.map(r => r.json())))
            .then(data => formatArticlesData(data))
            .catch(error => setDataLoadingError(error))
    }

    const isArticleCategorySelected = prop => {
        const currentOptionsState = filterOptions.map(el => el);
        const objectIndex = currentOptionsState.findIndex(el => el.category === prop.category);
        return currentOptionsState[objectIndex].checked;
    }

    const checkIsArticleCategorySelected = (article) => {
        const isSelected = isArticleCategorySelected(article);
        if (isSelected) {
            return <SingleArticle data={article} key={article.id} />
        }
    }

    const handleChangeFilter = (option) => {
        const currentOptionsState = filterOptions.map(el => el);
        const selectedOption = currentOptionsState.filter(el => el.category === option.category);
        selectedOption[0].checked = !selectedOption[0].checked;
        updateFilterOptions(currentOptionsState);
    }

    const setSorting = () => {
        const articlesList = articles.map(el => el);
        articlesList.sort((a,b) => {
            return moment(a.date, "DD. MMM. YYYY", "nb") - moment(b.date, "DD. MMM. YYYY", "nb")
        })

        if (sortingOrderFromLatest) {
            articlesList.reverse()
        }

        setSortingOrderFromLatest(!sortingOrderFromLatest);
        setArticles(articlesList);
    }

    useEffect(() => {
        getArticlesData();
    }, [])

    return (
        <Container maxWidth="lg" className="App">
            <Grid container spacing={2}>
                <Grid item sm={12} md={2} className="sidebar">
                    <Filters options={filterOptions} action={handleChangeFilter} />
                </Grid>
                <Grid item sm={12} md={10}>
                    <Grid item xs={12} sx={{ justifyContent: 'end', display: 'flex', mb: '1em'}}  className="sorting-button-box">
                        <SortingButton action={setSorting} />
                    </Grid>
                    {articles && articles.length > 0
                        ? articles.map(article => checkIsArticleCategorySelected(article))
                        : ''
                    }
                    {dataLoadingError && <Alert severity="error">Sorry, an error occurred while displaying the data. Please refresh the page.</Alert>}
                </Grid>
            </Grid>
        </Container>
    )
}

export default App;