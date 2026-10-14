import Dropzone from "./DropZone";
import ManualUpload from "./ManualUpload";

function FileUploader() {
	return (
		<div>
			<Dropzone />
			<ManualUpload />
		</div>
	);
	
}

export default FileUploader