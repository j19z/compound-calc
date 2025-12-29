import React from 'react';

const AdSlot = ({ type, text = 'AdSense Slot' }) => {
    const dimensions = {
        leaderboard: 'w-full h-[90px] max-w-[728px]',
        skyscraper: 'w-[160px] h-[600px] hidden lg:flex',
        mobile: 'w-full h-[100px] lg:hidden'
    };

    return (
        <div className={`mx-auto bg-slate-100 flex items-center justify-center border-2 border-dashed border-slate-300 rounded-lg text-slate-400 font-medium ${dimensions[type] || 'w-full h-auto'}`}>
            <span className="text-sm uppercase tracking-wider">{text} ({type})</span>
        </div>
    );
};

export default AdSlot;
