

type Prop = {
    fileItem: File[];
}
function FileList({fileItem}: Prop) {

    //console.log(fileItem);
    

    return (
        <div>
            <h3> {fileItem[0]?.name} </h3>
        </div>
    )


}

export default FileList;