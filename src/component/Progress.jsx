import React, { useEffect, useState } from 'react';

const ReverseProgressBar = () => {
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        if (progress > 64) {
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev > 64) return prev - 1;
                    clearInterval(interval);
                    return prev;
                });
            }, 5000); // 5 seconds per step

            return () => clearInterval(interval);
        }
    }, [progress]);

    return (
        <div className="w-full max-w-md mx-auto mt-10">
            <div className="text-sm font-[500]  px-3 py-1 rounded-full w-max">
                NEW VERSION READY: Limited To {progress} Units
            </div>     
             <div className="bg-gray-300 h-6 rounded-full overflow-hidden animate-fade transition-all duration-500">
                <div
                    className="text-white text-center bg-purple-500 h-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                >INSTANT DOWNLOAD </div>
            </div>
        </div>
    );
};

export default ReverseProgressBar;
