"use client";

import Upload from "@/components/Upload";
import { useRouter } from "next/navigation";
import { useDashboard } from "@/context/dashboard-context";
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "react-hot-toast";

export const revalidate = 0;

export default function DashboardRoot() {
	const router = useRouter();
	const CASE_ID = "case_891a_6fbl_87d1_4326";
    const { medicalRecord, setMedicalRecord } = useDashboard();
    const { guidelinesFile, setGuidelinesFile } = useDashboard();

    const filesUploaded = medicalRecord && guidelinesFile;

	const handleContinue = () => {
		router.push(`/dashboard/case/${CASE_ID}`)
	}

	return (
		<div className="container m-auto flex flex-col justify-center items-center h-screen">
			<div className="w-full gap-3 md:columns-2 items-center">
				{/* <MedicalRecordUpload /> */}
				{/* <GuidelinesUpload /> */}

                    <Upload
                        id='medical-record-upload'
                        ctaMessage="Simulate Medical Record Upload"
                        successMessage="Medical Record Uploaded"
                        uploadActionFn={() => {
                            setMedicalRecord({url: "/assets/medical-record.pdf"});
                            toast.success('File Uploaded');
                        }}
                        filePath={medicalRecord?.url || null}
                        undoFn={() => setMedicalRecord(null)}
                    />

                    <Upload
                        id='guidelines-upload'
                        ctaMessage="Simulate Guidelines Upload"
                        successMessage="Guidelines File Uploaded"
                        uploadActionFn={() => {
                            setGuidelinesFile({url: "/assets/guidelines.pdf"});
                            toast.success('File Uploaded');
                        }}
                        filePath={guidelinesFile?.url || null}
                        undoFn={() => setGuidelinesFile(null)}
                    />

			</div>

            <div className=" min-h-[80px]">

                {filesUploaded && <AnimatePresence>
                    <motion.div
                        key={'continue-button'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        
                    >
                        <div className={`w-full py-4 flex ${filesUploaded ? ' visible' : ' invisible'} flex-row justify-center`}>
                            <button
                                className="bg-green-600 hover:bg-green-500 transition-all font-medium text-white py-2 px-4 rounded"
                                onClick={handleContinue}
                            >
                                Continue
                            </button>
                        </div>

                    </motion.div>
                </AnimatePresence>
                }
            </div>

		</div>
	)
}
