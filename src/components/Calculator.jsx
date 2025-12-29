import React, { useState, useEffect } from 'react';
import { calculateCompoundInterest } from '../utils/finance';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    AreaChart,
    Area
} from 'recharts';
import { DollarSign, Percent, Calendar, TrendingUp } from 'lucide-react';

const Calculator = () => {
    const [inputs, setInputs] = useState({
        principal: 10000,
        monthlyContribution: 500,
        years: 20,
        annualRate: 7,
        compoundFrequency: 'monthly'
    });

    const [results, setResults] = useState(null);

    useEffect(() => {
        const res = calculateCompoundInterest(
            inputs.principal,
            inputs.monthlyContribution,
            inputs.years,
            inputs.annualRate,
            inputs.compoundFrequency
        );
        setResults(res);
    }, [inputs]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prev => ({
            ...prev,
            [name]: name === 'compoundFrequency' ? value : parseFloat(value) || 0
        }));
    };

    const formatCurrency = (val) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

    return (
        <div className="space-y-8">
            {/* Input Grid */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <TrendingUp className="text-emerald-500" />
                    Calculator Inputs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <DollarSign size={16} /> Initial Investment
                        </label>
                        <input
                            type="number"
                            name="principal"
                            value={inputs.principal}
                            onChange={handleChange}
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <DollarSign size={16} /> Monthly Contribution
                        </label>
                        <input
                            type="number"
                            name="monthlyContribution"
                            value={inputs.monthlyContribution}
                            onChange={handleChange}
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <Calendar size={16} /> Length of Time (Years)
                        </label>
                        <input
                            type="number"
                            name="years"
                            value={inputs.years}
                            onChange={handleChange}
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <Percent size={16} /> Estimated Interest Rate
                        </label>
                        <input
                            type="number"
                            step="0.1"
                            name="annualRate"
                            value={inputs.annualRate}
                            onChange={handleChange}
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium text-slate-700">Compound Frequency</label>
                        <select
                            name="compoundFrequency"
                            value={inputs.compoundFrequency}
                            onChange={handleChange}
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                        >
                            <option value="daily">Daily</option>
                            <option value="monthly">Monthly</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="annually">Annually</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Results Summary */}
            {results && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-emerald-600 p-6 rounded-2xl text-white shadow-lg shadow-emerald-100">
                        <p className="text-emerald-100 text-sm font-medium">Total Balance</p>
                        <h3 className="text-3xl font-bold">{formatCurrency(results.totalBalance)}</h3>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <p className="text-slate-500 text-sm font-medium">Total Interest</p>
                        <h3 className="text-3xl font-bold text-slate-900">{formatCurrency(results.totalInterest)}</h3>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <p className="text-slate-500 text-sm font-medium">Total Contributions</p>
                        <h3 className="text-3xl font-bold text-slate-900">{formatCurrency(results.totalContributions)}</h3>
                    </div>
                </div>
            )}

            {/* Chart Section */}
            {results && (
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <h2 className="text-xl font-semibold mb-6">Growth Over Time</h2>
                    <div className="h-[400px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={results.chartData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis
                                    dataKey="year"
                                    label={{ value: 'Years', position: 'insideBottomRight', offset: -10 }}
                                    stroke="#64748b"
                                    fontSize={12}
                                />
                                <YAxis
                                    tickFormatter={(val) => `$${val / 1000}k`}
                                    stroke="#64748b"
                                    fontSize={12}
                                />
                                <Tooltip
                                    formatter={(value) => formatCurrency(value)}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                />
                                <Legend verticalAlign="top" height={36} />
                                <Line
                                    name="Total Savings"
                                    type="monotone"
                                    dataKey="totalSavings"
                                    stroke="#10b981"
                                    strokeWidth={3}
                                    dot={false}
                                    activeDot={{ r: 6, strokeWidth: 0 }}
                                />
                                <Line
                                    name="Total Contributions"
                                    type="monotone"
                                    dataKey="totalContributions"
                                    stroke="#94a3b8"
                                    strokeWidth={2}
                                    strokeDasharray="5 5"
                                    dot={false}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calculator;
