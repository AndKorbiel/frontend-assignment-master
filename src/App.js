import React from "react";
import {useEffect, useState} from "react";
import SingleArticle from "./components/SingleArticle";
import SortingButton from "./components/SortingButton";
import Filters from "./components/Filters";

const App = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('http://localhost:6010/articles/sports')
            .then(res => res.json())
            .then(data => setArticles(data.articles))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <Filters />
            <SortingButton />
            {articles && articles.length > 0
                ? articles.map(article => (
                    <SingleArticle data={article} key={article.id} />
                ))
                : <p>Sorry, error while displaying data. Please refresh the page</p>
            }
        </div>
    )
}

export default App;