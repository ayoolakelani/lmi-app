import React, {Component} from 'react';
import {SplitButton, Button, ButtonGroup, Dropdown} from 'react-bootstrap';

class ThemeSwitcher extends Component {
    state = {theme: null};

    chooseTheme = (theme, evt) => {
        evt.preventDefault();
        if (theme.toLowerCase() === 'reset') {
            theme = null;
        }
        this.setState({theme});
    };

    render() {
        const {theme} = this.state;
        const themeClass = theme ?? 'default';

        const parentContainerStyles = {
            position: 'absolute',
            height: '100%',
            width: '100%',
            display: 'table'
        } as React.CSSProperties;

        const subContainerStyles = {
            position: 'relative',
            height: '100%',
            width: '100%',
            display: 'table-cell',
            verticalAlign: 'middle'
        } as React.CSSProperties;

        return (
            <div style={parentContainerStyles}>
                <div style={subContainerStyles}>
                    <span
                        className={`h1 center-block text-center text-${
                            theme ? themeClass : 'muted'
                        }`}
                        style={{marginBottom: 25}}
                    >
                        {theme || 'Default'}
                    </span>

                    <div className="center-block text-center">
                        <SplitButton
                            id="split-bitton"
                            bsSize="large"
                            variant={themeClass}
                            title={`${theme || 'Default'} Theme`}
                        >
                            <Dropdown.Item eventKey="Primary" onSelect={this.chooseTheme}>
                                Primary Theme
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Danger" onSelect={this.chooseTheme}>
                                Danger Theme
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Success" onSelect={this.chooseTheme}>
                                Success Theme
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="Reset" onSelect={this.chooseTheme}>
                                Default Theme
                            </Dropdown.Item>
                        </SplitButton>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThemeSwitcher;
