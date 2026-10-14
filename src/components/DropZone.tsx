import { useRef, useState } from 'react'
import './css/DropZone.css'

function DropZone() {
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