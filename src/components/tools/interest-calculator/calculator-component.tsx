import * as React from 'react';
import {
    Button,
    Form,
    Tab,
    Tabs,
    InputGroup,
    FormControl,
    Card,
    ListGroup,
    ListGroupItem,
    Container,
    Row,
    Col
} from 'react-bootstrap';
import {createStore} from 'redux';
import Investment from '../../models/investment';
import ThemeSwitcher from '../theme-switcher';
import * as styles from './calculator.scss';
import {InvestmentCategory, InvestmentType} from '../../models/investment_models';
import MoneyInput from '../../Inputs/MoneyInput/money_input.component';
import InterestBarChart from '../../charts/BarChart/interest-barchart-component';

interface CalculatorProps {
    text: string;
}
interface CalculatorState {
    investment: Investment[];
    selected: string;
    categories: InvestmentCategory[];
    types: InvestmentType[];
    key: string;
}

export default class CalculatorPage extends React.Component<CalculatorProps, CalculatorState> {
    defaultCategory: InvestmentCategory = {
        min: 50000,
        max: 300000,
        name: 'Micro'
    };

    defaultType: InvestmentType = {
        basePeriod: 30,
        period: 30,
        isCustomisable: false,
        name: 'Flow'
    };

    state = {
        investment: [new Investment(this.defaultType, this.defaultCategory)],
        categories: [this.defaultCategory],
        types: [this.defaultType],
        selected: '',
        key: 'home'
    };

    investmentChanged = (e) => {
        this.setState({selected: e.target.value});
    };

    AddCategories = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            console.log('invalid');
        }
        console.log(form);
        event.preventDefault();
    };

    render() {
        return (
            <div className="container">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={this.state.key}
                    onSelect={(key) => this.setState({key})}
                >
                    <Tab className={styles.calculator__card} eventKey="home" title="Home">
                        <div>
                            <Form onSubmit={this.AddCategories}>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                required
                                                placeholder="Name"
                                                aria-label="Name "
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <MoneyInput className="mb-3"></MoneyInput>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <MoneyInput className="mb-3"></MoneyInput>
                                    </Form.Group>
                                </Form.Row>
                                <Button block variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                        <div>
                            <h1>Available Categories</h1>
                            <ListGroup as="ul">
                                {this.state.categories.map((cat, i) => (
                                    <ListGroup.Item key={i} as="li">
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <h3>{`${++i} - ${cat.name.toUpperCase()}`}</h3>
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                                <MoneyInput
                                                    className="mb-3"
                                                    readonly={true}
                                                    value={cat.min}
                                                    currencySymbol={'₦(Min)'}
                                                ></MoneyInput>
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                                <MoneyInput
                                                    className="mb-3"
                                                    readonly={true}
                                                    value={cat.max}
                                                    currencySymbol={'₦(Max)'}
                                                ></MoneyInput>
                                            </Form.Group>
                                        </Form.Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </Tab>
                    <Tab className={styles.calculator__card} eventKey="profile" title="Profile">
                        <div>
                            <InterestBarChart></InterestBarChart>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}
