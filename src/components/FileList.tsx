type Prop = {
    fileItem: File[];
    onDelete: (index: number) => void;
}
function FileList({fileItem, onDelete}: Prop) {

    return (
        <div>
            <h3> {fileItem[0]?.name} </h3>
            <ul>
                {
                    fileItem.map((file, index) => (
                        <li key={index}>{file.name}
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