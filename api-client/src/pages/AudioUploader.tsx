import { useState } from "react";
import api from "../service/api";

const AudioUploader = () => {
    
    const [file, setFile] = useState(null);
    const [transcription , setTranscription] = useState("");
    
    const handleFileChange = (e: any) => {
        e.setFile(e.target.files[0])
    }

    const handleUpload =  async () => {
        const formData = new FormData();
        if (file) {
            formData.append('file', file);
        } else {
            console.error("No file selected");
        }

        try {
            const response = await api.post('transcribe', formData , {
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            })
            setTranscription(response.data);
        } catch (error) {
            console.log("Error transcribing audio", error);
        }
    }
    return (
        <>
            <div className="container">
                <h2>
                    Audio Transcriber
                </h2>
                <div className="file-input">
                    <input type="file" accept="audio/*" onChange={handleFileChange} />
                </div>
                <button className="upload-button" 
                    onClick={handleUpload}>
                        Upload and Transcribe
                </button>
                <div className="transcription-result">
                    <h2>Transcription Result</h2>
                    <p>{transcription}</p>
                </div>     
            </div>
        </>
    )
}

export default AudioUploader;