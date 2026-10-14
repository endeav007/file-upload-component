import { useRef, useState } from 'react'

function ManualUpload() {

    const [file, setFile] = useState<File>();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUploadClick = () => {
        if (!file) {
            return;
        }
        console.log(`Uploading file: ${file.name}`);
        
    }

    return (
        <div>
            <input type="file" onChange={handleFileChange}/>
            <button onClick={handleUploadClick}>Upload</button>
        </div>

    );

}

export default ManualUpload;