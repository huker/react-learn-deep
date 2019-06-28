import React from 'react';
import Son from "./Son";

export const { Provider, Consumer } = React.createContext("默认值");

function App() {
    const value = "哈哈哈";
    return (
        <Provider value={value}>
            <div className="content1">
                父组件 传递的值:{value}
                <Son/>
            </div>
        </Provider>
    );
}

export default App;
