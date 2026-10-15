
export const shortenFile = (file: File, maxLength: number) => {
    const fileName = file.name;
    if(fileName.length <= maxLength) {
        return fileName;
    }
    var extensionIndex = fileName.lastIndexOf('.');
    var fileFirstHalf = fileName.substring(0, maxLength);
    
    var shortenedFileName = fileFirstHalf + "..." + fileName.substring(extensionIndex);

    return shortenedFileName;

}