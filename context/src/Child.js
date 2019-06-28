import React from 'react';
import { Consumer } from "./App";

function Child() {
    return (
        <Consumer>
            {
                (value) =>
                    <div className="content3">
                        子中子 接收到的值：{value}
                    </div>
            }
        </Consumer>
    );
}

export default Child;
