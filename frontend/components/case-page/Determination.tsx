import React from 'react'

function Determination( {caseData} ) {
    return (
        <div id="determination" className="mt-2 inline-flex items-baseline">

            <h2 className=" text-lg font-light">Determination:&nbsp;</h2>

            <span className=" text-lg font-medium mb-2">
                {
                    caseData?.is_met === false
                        ?
                        <span className=" text-red-600">
                            Probable Denial
                        </span>
                        :
                        <span>
                            Probably Acceptance
                        </span>
                }
            </span>
        </div>
    )
}

export default Determination
