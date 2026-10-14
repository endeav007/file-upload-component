import Dropzone from "./DropZone";
import ManualUpload from "./ManualUpload";
import FileList from "./FileList";
import { useState } from "react";

function FileUploader() {

	const [fileItem, setFileItem] = useState<File[]>([]);

	const addFile = (file: File) => {
		setFileItem( [file, ...fileItem] );
	}

	const handleDelete = (indexToDelete: number) => {
    setFileItem(prevFiles =>
        prevFiles.filter((_, index) => index !== indexToDelete)
    );
};


	return (
		<div>
			<Dropzone onFileAdded={addFile} />
			<ManualUpload onFileAdded={addFile} />
			<FileList fileItem={fileItem} onDelete={handleDelete} />
		</div>
	);
	
}

export default FileUploader