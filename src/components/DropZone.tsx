import { useRef, useState } from 'react'
import './css/DropZone.css'


//currently, only will allow one file to be dropped at a time. if multiple files are dropped, only the first will be used. 

type Prop = {
    onFileAdded: (file: File) => void;
}

function DropZone({onFileAdded}: Prop) {
    const dragCounter = useRef(0);
    const [isDragging, setIsDragging] = useState(false)

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        dragCounter.current += 1;
        setIsDragging(true);
    }

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        dragCounter.current -= 1;

        if (dragCounter.current <= 0) {
            dragCounter.current = 0;
            setIsDragging(false);
        }
    }
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        dragCounter.current = 0;
        setIsDragging(false);
        const files = Array.from(e.dataTransfer.files);
        console.log(files);
        onFileAdded(files[0]);
    }

    return (
        <div className= {isDragging ? "dropzone-container dragging" : "dropzone-container"}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        > 
            <div>
                <p>Drag and drop your files here</p>
            </div>
        </div>
        
        
    )
}

export default DropZone