import * as React from 'react';

interface DashboardProps {
    text: string;
}
interface DashboardState {
    text: string;
}

export default class DashboardPage extends React.Component<DashboardProps, DashboardState> {
    render() {
        return (
            <div>
                <div className="container center">
                    <h1 className="title">Welcome To React!!! This is DashBoard Component</h1>
                </div>
            </div>
        );
    }
}
