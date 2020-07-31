import * as React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';

interface MoneyInputProps {
    placeholder?: string; // Change the required prop to an optional prop.
    label?: string;
    currencySymbol?: string;
    className: string;
    value?: number;
    min?: number;
    max?: number;
    readonly?: boolean;
    required?: boolean;
    name?: string;
    onChange?: (amout: number | undefined) => void;
}

interface MoneyInputState {
    amount?: number;
    focused: boolean;
}

export default class MoneyInput extends React.Component<MoneyInputProps, MoneyInputState> {
    constructor(props: MoneyInputProps) {
        // ️⚡️ does not compile in strict mode
        super(props);

        this.state = {
            amount: this.props.value ?? 0,
            focused: false
        };
    }

    toggleInputFocus = (toggleState) => {
        this.setState({
            focused: toggleState
        });
    };

    onBlur = () => {
        this.toggleInputFocus(false);
        if (this.props.value !== this.state.amount) {
            if (this.props.onChange) {
                this.props?.onChange(Number(this.state.amount));
            }
        }
    };

    onFocus = () => {
        this.toggleInputFocus(true);
    };

    handleFormChange = (event) => {
        this.setState({
            amount: event.target.value
        });
    };
    render() {
        return (
            <InputGroup className={this.props.className}>
                <InputGroup.Prepend>
                    <InputGroup.Text>{this.props.currencySymbol}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    required
                    placeholder={this.props.placeholder}
                    aria-label={this.props.label}
                    type="number"
                    step="0.01"
                    name={this.props.name}
                    min={this.props.min}
                    value={!this.state.focused ? this.state.amount : (this.state.amount)}
                    readOnly={this.props.readonly}
                    onChange={this.handleFormChange}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                />
                <InputGroup.Append>
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        );
    }

    static defaultProps = {
        placeholder: 'Enter Amount',
        label: 'Amount (to the nearest Naira)',
        currencySymbol: '₦',
        readonly: false,
        min: 0,
        required: true,
        max: 9999999999999999
        // This value is adopted when name prop is omitted.
    };
}
