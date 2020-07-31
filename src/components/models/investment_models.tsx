export interface InvestmentType {
    name: string;
    period: number;
    basePeriod: number;
    isCustomisable?: boolean;
}

export interface InvestmentCategory {
    min: number;
    max: number;
    name: string;
}
