"use client";

import GuidelinesUpload from "@/components/guidelines-upload";
import MedicalRecordUpload from "@/components/medical-record-upload";
import Upload from "@/components/Upload";
import { useRouter } from "next/navigation";
import { useDashboard } from "@/context/dashboard-context";

export const revalidate = 0;

export default function DashboardRoot() {
	const router = useRouter();
	const CASE_ID = "case_891a_6fbl_87d1_4326";
    const { medicalRecord, setMedicalRecord } = useDashboard();
    const { guidelinesFile, setGuidelinesFile } = useDashboard();

	const handleContinue = () => {
		router.push(`/dashboard/case/${CASE_ID}`)
	}

	return (
		<div className="w-full flex flex-col justify-center items-center h-screen">
			<div className="w-full gap-3 columns-2 items-center">
				{/* <MedicalRecordUpload /> */}
				{/* <GuidelinesUpload /> */}

                    <Upload
                        id='medical-record-upload'
                        ctaMessage="Simulate Medical Record Upload"
                        successMessage="Medical Record Uploaded"
                        uploadActionFn={() => setMedicalRecord({url: "/assets/medical-record.pdf"})}
                        filePath={medicalRecord?.url || null}
                    />

                    <Upload
                        id='guidelines-upload'
                        ctaMessage="Simulate Guidelines Upload"
                        successMessage="Guidelines File Uploaded"
                        uploadActionFn={() => setGuidelinesFile({url: "/assets/guidelines.pdf"})}
                        filePath={guidelinesFile?.url || null}
                    />

			</div>
			<div className="w-full py-4 flex flex-row justify-center">
				<button
					className="bg-green-600 font-medium text-white py-2 px-4 rounded"
					onClick={handleContinue}
				>
					Continue
				</button>
			</div>
		</div>
	)
}
