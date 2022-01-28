import React from 'react';

import Overview from './components/Overview';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="app">
                <h1> it works</h1>
                <Overview />
            </div>
        );
    }
}

export default App;
