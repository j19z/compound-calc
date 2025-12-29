import React from 'react';
import AdSlot from './AdSlot';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
            {/* Top Leaderboard */}
            <header className="w-full bg-white border-b border-slate-200 p-4 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
                    <h1 className="text-2xl font-bold text-emerald-600 self-start lg:self-center">CompoundCalc.io</h1>
                    <AdSlot type="leaderboard" />
                </div>
            </header>

            <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-6 p-4 lg:p-8">
                {/* Left Skyscraper */}
                <aside className="shrink-0">
                    <AdSlot type="skyscraper" text="Vertical Ad" />
                </aside>

                {/* Main Content */}
                <main className="flex-1 w-full max-w-4xl mx-auto">
                    {children}

                    {/* Mobile Bottom Ad */}
                    <div className="mt-8 lg:hidden">
                        <AdSlot type="mobile" text="Mobile Ad" />
                    </div>
                </main>

                {/* Right Skyscraper */}
                <aside className="shrink-0">
                    <AdSlot type="skyscraper" text="Vertical Ad" />
                </aside>
            </div>

            {/* Footer Leaderboard */}
            <footer className="w-full bg-white border-t border-slate-200 p-8 mt-auto">
                <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
                    <AdSlot type="leaderboard" />
                    <div className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} CompoundCalc. All rights reserved. Professional Financial Tools.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
