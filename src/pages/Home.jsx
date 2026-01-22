import React from 'react';
import Calculator from '../components/Calculator';

const Home = () => {
    return (
        <div className="space-y-6">
            <header className="space-y-2">
                <h2 className="text-3xl font-bold text-slate-900">Compound Interest Calculator</h2>
                <p className="text-slate-600 max-w-2xl text-lg">
                    Plan your financial future with our professional-grade investment calculator.
                    Visualize the power of compounding over time with interactive charts.
                </p>
            </header>

            <Calculator />

            <section className="mt-12 prose prose-slate max-w-none">
                <h3 className="text-xl font-semibold text-slate-800">How to use this calculator</h3>
                <p className="text-slate-600">
                    Enter your initial investment and expected monthly contributions. Adjust the
                    interest rate and time horizon to see how your savings can grow. Our calculator
                    uses standard compound interest formulas with support for various compounding
                    frequencies ensuring high accuracy for your financial planning.
                </p>
            </section>
        </div>
    );
};

export default Home;
