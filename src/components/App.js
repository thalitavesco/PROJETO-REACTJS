import React from 'react';

import Post from './Post';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello World </h1>
                <Post title = "Aprendendo ReactJS "/>
                <Post title = "REACTJS LALA"/>
                <Post title = "WEB"/>
            </div>
        );
    }
}
