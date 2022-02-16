import React from "react";
import {useEffect, useState} from "react";
import SingleArticle from "./components/SingleArticle";
import SortingButton from "./components/SortingButton";
import Filters from "./components/Filters";

const App = () => {
    const [articles, setArticles] = useState([]);
    const [filterOptions, updateFilterOptions] = useState([
        {label: 'fashion', category: 'fashion', checked: true},
        {label: 'sports', category: 'sport', checked: true}
    ])

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
            .catch(error => console.log(error))
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

    useEffect(() => {
        getArticlesData();
    }, [])

    return (
        <div>
            <Filters options={filterOptions} action={handleChangeFilter} />
            <SortingButton />
            {articles && articles.length > 0
                ? articles.map(article => checkIsArticleCategorySelected(article))
                : <p>Sorry, error while displaying data. Please refresh the page</p>
            }
        </div>
    )
}

export default App;