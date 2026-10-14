import Dropzone from "./DropZone";
import ManualUpload from "./ManualUpload";
import FileList from "./FileList";
import { useState } from "react";

function FileUploader() {

	const [fileItem, setFileItem] = useState<File[]>([]);

	const addFile = (file: File) => {
		setFileItem( [file, ...fileItem] );
	}


	return (
		<div>
			<Dropzone onFileAdded={addFile} />
			<ManualUpload onFileAdded={addFile} />

			<FileList fileItem={fileItem} />
		</div>
	);
	
}

export default FileUploader