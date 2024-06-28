import React from 'react'

function StepSkeleton() {
    return (
        <div className="animate-pulse shadow px-8 container rounded-lg mx-auto max-w-[970px] flex space-x-4 my-5">

            <div className="flex-1 space-y-6 py-5">
                <div className="inline-flex text-sm bg-slate-200 rounded text-gray-400 px-1 py-0.5">Step 1</div>
                <div className="h-16 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-16 bg-slate-200 rounded col-span-2"></div>
                        {/* <div className="h-16 bg-slate-200 rounded col-span-1"></div> */}
                    </div>

                </div>
                
                <div className="h-16 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-16 bg-slate-200 rounded col-span-1"></div>
                        {/* <div className="h-16 bg-slate-200 rounded col-span-1"></div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default StepSkeleton
