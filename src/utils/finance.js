/**
 * Calculates compound interest with regular contributions.
 * 
 * @param {number} principal - Initial investment
 * @param {number} monthlyContribution - Monthly deposit
 * @param {number} years - Time horizon in years
 * @param {number} annualRate - Annual interest rate (percentage, e.g., 5 for 5%)
 * @param {string} compoundFrequency - 'daily', 'monthly', 'quarterly', 'annually'
 * @returns {Object} Results including total balance, interest, and contributions
 */
export const calculateCompoundInterest = (
    principal,
    monthlyContribution,
    years,
    annualRate,
    compoundFrequency = 'monthly'
) => {
    const r = annualRate / 100;
    const t = years;
    const PMT = monthlyContribution;

    // Compounding periods per year
    const nMap = {
        daily: 365,
        monthly: 12,
        quarterly: 4,
        annually: 1
    };
    const n = nMap[compoundFrequency] || 12;

    // For the chart, we need yearly data
    const data = [];
    let totalContributions = principal;

    // We'll calculate month by month to handle monthly contributions accurately 
    // even if compounding is different.
    // However, the standard formula is easier. 
    // Let's use a month-by-month simulation for the most accurate results and chart data.

    let currentBalance = principal;
    const totalMonths = t * 12;
    const monthlyRate = r / 12; // This is a simplification. 
    // If compounding is daily, we should use daily rate.

    // Better approach: calculate per compounding period or just use the formula for each year.
    // Let's use the standard formula for balance at any time 't' (in years).

    for (let year = 0; year <= t; year++) {
        const nt = n * year;
        const ratePerPeriod = r / n;

        // Future value of principal
        const fvPrincipal = principal * Math.pow(1 + ratePerPeriod, nt);

        // Future value of monthly contributions
        // This is trickier if compounding frequency != 12.
        // If n = 12, it's easy.
        // If n != 12, we can use the effective rate.

        let fvContributions = 0;
        if (year > 0) {
            if (n === 12) {
                fvContributions = PMT * ((Math.pow(1 + ratePerPeriod, nt) - 1) / ratePerPeriod);
            } else {
                // Effective monthly rate based on compounding frequency
                const effectiveMonthlyRate = Math.pow(1 + ratePerPeriod, n / 12) - 1;
                fvContributions = PMT * ((Math.pow(1 + effectiveMonthlyRate, year * 12) - 1) / effectiveMonthlyRate);
            }
        }

        const totalBalance = fvPrincipal + fvContributions;
        const yearContributions = principal + (PMT * 12 * year);
        const totalInterest = totalBalance - yearContributions;

        data.push({
            year,
            totalSavings: Math.round(totalBalance * 100) / 100,
            totalContributions: Math.round(yearContributions * 100) / 100,
            totalInterest: Math.round(totalInterest * 100) / 100,
        });
    }

    const finalResult = data[data.length - 1];

    return {
        chartData: data,
        totalBalance: finalResult.totalSavings,
        totalContributions: finalResult.totalContributions,
        totalInterest: finalResult.totalInterest,
    };
};
