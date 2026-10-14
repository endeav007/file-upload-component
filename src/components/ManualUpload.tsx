import { useState } from 'react'
import FileList from './FileList'


type Prop = {
    onFileAdded: (file: File) => void;
}
function ManualUpload({onFileAdded}: Prop) {

    const [file, setFile] = useState<File>();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            setFile(files[0]);
            
        }
    };

    const handleUploadClick = () => {
        if (!file) {
            return;
        }
        //console.log(`Uploading file: ${file.name}`);
        onFileAdded(file);
        
    }

    return (
        <div>
            <input type="file" onChange={handleFileChange}/>
            <button onClick={handleUploadClick}>Upload</button>
        </div>

    );

}

export default ManualUpload;