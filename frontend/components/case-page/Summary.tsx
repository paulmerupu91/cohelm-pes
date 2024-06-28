import React from 'react'
import Determination from './Determination'
import SummarySkeleton from './SummarySkeleton'

function Summary({ caseData }) {
    return (
        <div className='py-4'>
            <h2 className=" text-3xl text-blue-500 mb-4 font-light">Summary</h2>
            <div className="-mx-4 p-4 md:px-12">
                <Determination caseData={caseData} />
                
                {caseData?.summary ? <p className=" my-4">{caseData.summary}</p> : <SummarySkeleton />}

            </div>
        </div>
    )
}

export default Summary
