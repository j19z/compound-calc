import React, { useEffect } from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-4xl mx-auto space-y-12 py-8">
            <header className="text-center space-y-4">
                <div className="inline-flex items-center justify-center p-3 bg-emerald-100 rounded-2xl mb-2 text-emerald-600">
                    <Shield size={32} />
                </div>
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Privacy Policy</h1>
                <div className="flex items-center justify-center gap-2 text-slate-500 font-medium">
                    <Lock size={16} />
                    <span>Last updated: January 21, 2026</span>
                </div>
            </header>

            <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 prose prose-slate max-w-none">
                <p className="text-lg leading-relaxed text-slate-600">
                    At **Compound Calculator**, accessible from <a href="https://compound-calc-flame.vercel.app/" className="text-emerald-600 font-medium hover:underline">https://compound-calc-flame.vercel.app/</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Compound Calculator and how we use it.
                </p>

                <div className="mt-12 space-y-10">
                    <div className="space-y-4">
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-800">
                            <Eye className="text-emerald-500" />
                            Google AdSense & DoubleClick DART Cookie
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Google is a third-party vendor on our site. It uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL:
                            <br />
                            <a href="https://policies.google.com/technologies/ads" className="text-emerald-600 break-all hover:underline" target="_blank" rel="noopener noreferrer">
                                https://policies.google.com/technologies/ads
                            </a>
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-800">
                            <FileText className="text-emerald-500" />
                            Advertising Partners Privacy Policies
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Compound Calculator. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                        </p>
                        <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-emerald-500 text-slate-700 italic">
                            Note that Compound Calculator has no access to or control over these cookies that are used by third-party advertisers.
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Consent</h2>
                        <p className="text-slate-600 leading-relaxed">
                            By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
