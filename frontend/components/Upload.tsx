"use client";

import classNames from "classnames";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import Spinner from "./Spinner";
import { motion, AnimatePresence } from "framer-motion"

type UploadProps = {
    successMessage: string;
    ctaMessage: string;
    uploadActionFn: () => void;
    filePath: string | null;
    id: string;
}

export default function Upload( {ctaMessage, successMessage, uploadActionFn, filePath = null, id} : UploadProps) {

    const handleClick = () => {
        if (inProgress) return;
        setTimeout( uploadActionFn, 3000 );
        setInProgress(true);
    }

    const [inProgress, setInProgress] = useState(false);

    const Cta = () => <span>{successMessage}</span>

    

    const UploadCta = () => <span className=" inline-flex gap-x-3 items-center">{inProgress && <Spinner />}<Cta /></span>

    return (
        <div className=" grow h-64 border-2 border-gray-200 border-dashed rounded flex flex-row items-center justify-center">

            <button
                className={classNames(
                    " inline-flex items-center min-h-[50px] text-white font-medium py-2 px-4 rounded border-2",
                    filePath === null ? "bg-blue-500 border-blue-500 hover:bg-blue-600" : "border-transparent text-green-600 cursor-default"
                )}
                onClick={handleClick}
            >

                { filePath === null ?
                    <UploadCta />
                    :
                    <Success successMessage={successMessage} id={id} />
                }

            </button>

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