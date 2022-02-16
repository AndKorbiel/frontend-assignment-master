import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <div>
            <h1>
                Hello World
            </h1>
        </div>
    )
}

const reactApp = document.createElement("div");
document.body.appendChild(reactApp);
ReactDOM.render(<App />, reactApp);