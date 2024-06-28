import React from 'react'

function SummarySkeleton() {
    return (
        <div className="animate-pulse rounded-lg">

            <div className="flex-1 space-y-3 py-5">
                
                <div className=" h-5 bg-slate-200 rounded"></div>
                <div className=" h-5 bg-slate-200 rounded"></div>
                <div className=" h-5 bg-slate-200 rounded"></div>
                <div className=" h-5 bg-slate-200 rounded"></div>
                <div className=" h-5 bg-slate-200 rounded"></div>
                <div className=" h-5 bg-slate-200 rounded"></div>
                
            </div>
        </div>
    )
}

export default SummarySkeleton
