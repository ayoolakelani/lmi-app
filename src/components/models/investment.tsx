import Customer from './investment';
import {InvestmentType, InvestmentCategory} from './investment_models';

export default class Investment {
    constructor(
        private type: InvestmentType,
        private category: InvestmentCategory,
        private rate: number = 15,
        private name: string = '',
        private isVariableInterest = false,
        private interestRates: number[] = [],
        private investmentSchedule = 1
    ) {}

    get Name(): string {
        return this.name ? this.name : `${this.category.name} ${this.type.name}`;
    }

    calulateInterest(amount: number): number {
        const period = Math.round(this.type.period / this.type.basePeriod);
        const getDefaultRates = [...Array(period)].map((x) => this.rate);
        this.interestRates = !this.isVariableInterest
            ? getDefaultRates
            : [
                  ...this.interestRates,
                  ...[...Array(period - this.interestRates.length)].map((x) => this.rate)
              ];

        return this.interestRates.reduce(
            (accumulator, currentValue) =>
                accumulator +
                amount *
                    Math.pow(
                        1 + (period * currentValue ?? this.rate) * (period / 100),
                        period * this.investmentSchedule
                    ),
            0
        );
    }
}
