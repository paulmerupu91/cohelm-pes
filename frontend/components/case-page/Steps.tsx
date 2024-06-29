import React from 'react'
import { sectionClasses } from '../utils'
import StepSkeleton from './StepSkeleton';
import { motion, AnimatePresence } from "framer-motion";

const motionDivProps = {
    initial:{ opacity: 0, y: -20 },
    animate:{ opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
}

function Steps({ caseData }) {
    return (
        <div>     
            <AnimatePresence>
                
                {caseData && caseData.steps && caseData.steps.length ?

                        <>
                        {caseData.steps.map((step, index) => (
                            <motion.div
                                key={`step-${index}`}
                                {...motionDivProps}
                            >
                                <Step key={`key-step-${index}`} step={step} index={index}/>
                            </motion.div>
                        ))}
                        </>
                    :
                    <motion.div
                        key="step-skeleton"
                        {...motionDivProps}
                    >
                        <StepSkeleton />
                        <StepSkeleton index={2}/>
                    </motion.div>
                }
            </AnimatePresence>
        
        </div>
    )
}

export default Steps

export function Step({ step, index }) {
    return (
        <div className={`container mx-auto bg-white px-4 py-5 my-5 ${sectionClasses}`}>
            <span className='inline-flex bg-lime-200 rounded px-1 py-0.5 text-sm'>Step {index + 1}</span>
            <div className='step -mx-4 px-4 py-2' id={`${step.key}`}>
                <h3 className='text-xl md:text-3xl text-blue-500 mb-8 md:font-light'>{step.question}</h3>
                <Options options={step.options} />
                <IsMet is_met={step.is_met} />
                <Evidence evidence={step.evidence} />
                
                <Reasoning reasoning={step?.reasoning || ''} />

            </div>
        </div>
    )
}

export function Evidence({ evidence }) {
    return (
        <>
            <StepSubHeading heading='Evidence' />
            <div>
                {evidence && evidence.length > 0 ?
                    <>
                        {evidence?.map?.((e, index) => (
                            <div key={`key-evidence-${index}`} className="flex items-top gap-2 md:gap-6">

                                <svg xmlns="http://www.w3.org/2000/svg" style={{ minWidth: "20px" }} width="20" height="20" fill="currentColor" className="bi bi-filetype-pdf top-1 relative" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z" />
                                </svg>
                                <div key={`key-evidence-${index}`} className='evidence '>
                                    <span className=''>{e.content}</span>
                                    <div>
                                        <div className='flex flex-wrap items-top mt-2 mb-3 text-sm gap-x-2'>


                                            <span className=' font-bold text-slate-600'>Document:&nbsp;</span><a href="#" className="link underline underline-offset-2 hover:text-blue-500">{e.pdf_name}</a>
                                            <p className='text-sm pl-2 inline-block border-s border-slate-300'>Page: {e.page_number}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                    : 'No evidence provided'}
            </div>
        </>
    )
}

export function IsMet({ is_met }) {
    return (
        <>
            <h4 className='text-lg my-4'>
                <span className=' font-bold'>Acceptable:</span> {is_met ? <span className='text-green-600'>Yes</span> :  <span className='text-red-600'>No</span>}
            </h4>
        </>
    )
}

export function Reasoning({ reasoning }) {
    return (
        <>
            <StepSubHeading heading='Reasoning' />
            <div className="">
                <div className="">
                    <p className='md:px-11 leading-relaxed'>
                        {reasoning}
                    </p>
                </div>
            </div>
        </>
    )
}


export function Options({ options }) {

    const [showNotChosen, setShowNotChosen] = React.useState(false);
    const refNotChosen = React.useRef(null);

    const optionsNotChosenByAI = options.filter(option => !option.selected);
    const optionsChosenByAI = options.filter(option => option.selected);

    const toggleShowNotChosen = () => {
        if (!(refNotChosen && refNotChosen.current)) return;
        setShowNotChosen(!showNotChosen);
        if (showNotChosen) {
            refNotChosen.current.style.display = 'none';
        } else {
            refNotChosen.current.style.display = 'flex';
        }
    }

    return (
        <>
            <div className="options">
                <div className="flex flex-col gap-1">
                    {optionsChosenByAI.map((option, index) => (
                        <Option key={`key-option-${index}`} option={option} />
                    ))}
                </div>
                <div className='mt-2 -mx-2 my-6' >
                    <button className="btn mx-2 mt-2 px-2 py-1 text-sm border inline-flex items-center rounded-lg bg-white hover:bg-slate-200 hover:border-slate-300" onClick={toggleShowNotChosen}>
                        Options Not Selected
                        {<span className='inline-flex items-center transition-all' style={{transform: showNotChosen ? "rotate(180deg)" : "rotate(0deg)"}}><IconArrowDown /></span>}
                    </button>
                    <div className="hidden flex-col gap-1 -mt-2 pt-4 pb-3 px-2 rounded-lg bg-slate-100 border-b border-slate-300" ref={refNotChosen}>
                        {optionsNotChosenByAI?.length &&
                            optionsNotChosenByAI.map((option, index) => (
                                <Option key={`key-option-${index}`} option={option} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export function Option({ option }) {

    return (
        <div className=' flex items-center gap-3 md:gap-5'>
            {
                option?.selected ?
                    <span className=' text-green-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                        </svg>
                    </span>
                    :
                    <span className=' text-red-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                        </svg>
                    </span>
            }
            <span className=''>{option.text}</span>
        </div>
    )
}

export function StepSubHeading({ heading = '' } = {}) {
    return (
        <h3 className='text-lg font-bold mt-8  border-t border-slate-300 py-6'>
            {heading}
        </h3>
    )
}

export function IconArrowDown() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
    )
}