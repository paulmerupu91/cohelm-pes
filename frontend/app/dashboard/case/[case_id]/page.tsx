'use client';

import { useEffect, useState, useRef, useMemo } from "react";
import MainSkeleton from "@/components/MainSkeleton";
import Summary from "@/components/case-page/Summary";
import Determination from "@/components/case-page/Determination";
import Steps from "@/components/case-page/Steps";
import { sectionClasses } from './../../../../components/utils'

import { toast } from "react-hot-toast";

export default function CaseResult() {

    const [caseData, setCaseData] = useState(null);
    const [version, setVersion] = useState(1);
    const toastSummary = useRef(false);

    const secondsToSwitchAPIResponses = 10;

    useEffect(() => {

        // Simulating data fetching from API with varying versions/info from pdf files
        let dataFetchInterval: any = null, versionInterval = null;
        if( version <= 3 ){

            if( version === 1 ){
                if( !toastSummary.current ){
                    toast( 'Loading Summary...' );
                    toastSummary.current = true;
                }
            } else if( version === 2 ){
                toast.success( 'Summary Loaded' );
                toast( 'Loading Steps...' );
            }
            
            dataFetchInterval = setInterval(async () => {
                let caseDataFetched = await getCaseData({ version: version });
                setCaseData(() => caseDataFetched);
                if( version === 3 ){
                    toast.success( 'Full Report Loaded.' )
                    clearInterval(dataFetchInterval);
                }
                console.log('caseDataFetched, version: ' + version, caseDataFetched);
            }, 1000); // Call getCaseData every second

    
            versionInterval = setInterval(() => {
                setVersion(prevVersion => {
                    return prevVersion + 1;
                })
            }, secondsToSwitchAPIResponses * 1000);
        }

        return () => {
            if( dataFetchInterval && versionInterval ){
                clearInterval(dataFetchInterval);
                clearInterval(versionInterval);
            }
        };
    }, [version]); // Dependency on version to ensure useEffect is called when version changes

	return (
		<div className="bg-slate-100 w-full min-h-full p-5 h-full">
            {
                caseData
                ?
                <>
                    <div className="container mx-auto flex flex-col justify-between max-w-[970px]">
                        <h1 className=" text-3xl inline-flex">
                            { caseData?.procedure_name ? caseData.procedure_name : 'Loading...' }
                        </h1>

                        

                        {/* Determination */}
                        <Determination caseData={caseData} />

                    </div>

                    {/* Steps */}
                    
                        <Steps caseData={caseData} />



                    {/* Summary */}
                    <div className={`container mx-auto bg-white px-4 py-5 my-5 ${sectionClasses}`}>
                        <Summary caseData={caseData} />
                    </div>
                </>
                :
                <MainSkeleton />
            }
        </div>
	)
}

async function getCaseData( {version = 1} = {} ){
    try{
        const caseRes = await fetch( `http://127.0.0.1:8000/cases/simulator_case?version=${version}` );
        const caseJsonData = await caseRes.json();
        return caseJsonData;
    } catch( err ){
        console.log(err);
    }
}
