import Dropzone from "./DropZone";
import ManualUpload from "./ManualUpload";
import FileList from "./FileList";
import "./css/FileUploader.css"
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
			<h1> File Uploader</h1>
			<div className="file-uploader-container">
				<div className="uploading-methods"> 
					<Dropzone onFileAdded={addFile} />
					<ManualUpload onFileAdded={addFile} />
				</div>
				
				<FileList fileItem={fileItem} onDelete={handleDelete} />
			</div>
			
			
			
		</div>
	);
	
}

export default FileUploader