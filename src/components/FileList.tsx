/*
* FileList.tsx
* Displays files uploaded by the user. Each file can be deleted. File at index zero will be the most recent file uploaded.
* 
*/
import "./css/FileList.css"
import { shortenFile } from "../utils/shortenFile";


type Prop = {
    fileItem: File[];
    onDelete: (index: number) => void;
}
function FileList({fileItem, onDelete}: Prop) {

    return (
        <div className="file-list-container">
            <ul>
                {
                    fileItem.map((file, index) => (
                        <li key={index}>{shortenFile(file, 10)}
                            <button onClick={() => onDelete(index)}>
                                Delete
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )


}

export default FileList;