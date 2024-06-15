"use client";

import { useDashboard } from "@/context/dashboard-context";
import classNames from "classnames";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import Spinner from "./Spinner";

type MedicalRecordUploadProps = {
    successMessage: string;
    ctaMessage: string;
    uploadActionFn: () => void;
    filePath: string | null;
}

export default function MedicalRecordUpload( {ctaMessage, successMessage, uploadActionFn, filePath = null} : MedicalRecordUploadProps) {

    const handleClick = () => {
        if (inProgress) return;
        setTimeout( uploadActionFn, 3000 );
        setInProgress(true);
    }

    const [inProgress, setInProgress] = useState(false);

    const Cta = () => <span>{successMessage}</span>

    const Success = () => <span className="text-green-600 flex flex-row gap-1 items-center">
        <FaCheck />
        <span>{successMessage}</span>
    </span>
    const UploadCta = () => <span>{inProgress && <Spinner />}<Cta /></span>

    return (
        <div className=" grow h-64 border-2 border-gray-200 border-dashed rounded flex flex-row items-center justify-center">

            <button
                className={classNames(
                    "text-white font-medium py-2 px-4 rounded border border-2",
                    filePath === null ? "bg-blue-500 border-blue-500" : "border-transparent text-green-600"
                )}
                onClick={handleClick}
            >

                {filePath === null && (<UploadCta />)}
                {filePath !== null && (
                    <Success />
                )}

            </button>

        </div>
    )
}