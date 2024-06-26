"use client";

import classNames from "classnames";
import { FaCheck } from "react-icons/fa";
import { useState, useEffect, use } from "react";
import Spinner from "./Spinner";
import { motion, AnimatePresence } from "framer-motion"
import Undo from "./icons/Undo";

type UploadProps = {
    successMessage: string;
    ctaMessage: string;
    uploadActionFn: () => void;
    filePath: string | null;
    id: string;
    undoFn: () => void;
}

export default function Upload( {ctaMessage, successMessage, uploadActionFn, filePath = null, id, undoFn = () => {}} : UploadProps) {

    useEffect(() => {
        inProgress &&
        setInProgress(false);
    }, [filePath]);

    const handleClick = () => {
        if (inProgress) return;
        setTimeout( uploadActionFn, 3000 );
        setInProgress(true);
    }

    const [inProgress, setInProgress] = useState(false);

    const Cta = () => <span>{successMessage}</span>

    const fileName = filePath?.split('/')?.pop?.() || '';

    const UploadCta = () => <span className=" inline-flex gap-x-3 items-center">{inProgress && <Spinner />}<Cta /></span>

    return (
        <div className=" grow h-64 border-2 border-gray-200 border-dashed rounded flex flex-row items-center justify-center relative">

            <button
                className={classNames(
                    " inline-flex items-center min-h-[50px] text-white font-medium py-2 px-4 rounded",
                    filePath === null ? "bg-blue-600 hover:bg-blue-500 transition-all" : "border-transparent text-green-600 cursor-default"
                )}
                onClick={handleClick}
            >

                { filePath === null ?
                    <UploadCta />
                    :
                    <Success successMessage={successMessage} id={id} />
                }

            </button>

            {
                filePath &&
                <div className=" text-slate-400 absolute bottom-0 right-0 m-4 text-xs inline-flex items-center">
                    <div>File Uploaded: <span className=" font-bold ">{fileName}</span></div>
                    <div className="p-2 hover:text-red-600 border-slate-200 hover:border-red-300 cursor-pointer"
                        onClick={undoFn}
                    >
                        <Undo />
                    </div>
                </div>
            }
        </div>
    )
}

const Success = ( {successMessage, id}: {successMessage: string, id: string} ) => (
    <AnimatePresence>
        <motion.div
            key={id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <span className="text-green-600 flex flex-row gap-x-3 items-center">
                <FaCheck />
                <span>{successMessage}</span>
            </span>
        </motion.div>
    </AnimatePresence>
)