import * as React from 'react';

import AppRouter from '../routers/app-router';

interface AppProps {
    name: string;
}
interface AppState {
    words: string[];
}

export default class App extends React.Component<AppProps, AppState> {
    state = {
        words: ['foo', 'bar'],
        clickCounts: {}
    };

    constructor(props: AppProps) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState) {
        alert(`i was clicked ${this.state.words}`);
    }

    OnformSubmit = (e): void => {
        //e.preventDefault();
        console.log(e);
        this.setState(() => {
            return {
                words: ['ayoola']
            };
        });
    };

    render() {
        return <AppRouter></AppRouter>;
    }
}
