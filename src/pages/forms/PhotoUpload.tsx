import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const MAX_FILES = 3;
const MAX_SIZE_MB = 15;

const PhotoUpload: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const newFiles = acceptedFiles.slice(0, MAX_FILES - files.length);
        setFiles(prev => [...prev, ...newFiles]);
    }, [files]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/png': [],
            'image/jpeg': [],
            'image/gif': [],
            'image/bmp': [],
            'image/tiff': []
        },
        maxSize: MAX_SIZE_MB * 1024 * 1024,
        multiple: true,
        maxFiles: MAX_FILES
    });

    return (
        <div className="min-h-screen bg-[#9e2727] flex flex-col items-center justify-center px-4 text-white">
            <div className="flex  justify-center">
                <img src="/logotest3.png" alt="Logo" className="w-72 h-24 " />
            </div>
            <h1 className="text-4xl  mb-2 font-[Bembo-MT-Pro-Bold]">Upload Your Photo</h1>
            <p className="mb-4 font-[Bembo-MT-Pro-Light]">Your photo must be a close up, half view or full view</p>
            <p className="mb-6 font-[Bembo-MT-Pro-Light]">Upload up to 3 photos (max size 15MB)</p>

            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-md p-12 w-full max-w-md bg-[#0072A0] font-[Bembo-MT-Pro-Bold] text-center cursor-pointer transition ${isDragActive ? 'border-white bg-[#006494]' : 'border-white/50'
                    }`}
            >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center space-y-2">
                    <div className="bg-white text-[#0083B0] rounded-full p-2 w-10 h-10 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0-8l-4 4m4-4l4 4M4 12l4-4m0 0l4-4m-4 4l4-4" />
                        </svg>
                    </div>
                    <p>Click to upload or drag and drop</p>
                    <p className="text-sm text-white/80">PNG, JPG, GIF, BMP, TIFF (max size 15MB)</p>
                </div>
            </div>

            <ul className="mt-4 space-y-1 max-w-md w-full text-sm text-white/90">
                {files.map((file, idx) => (
                    <li key={idx}>{file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)</li>
                ))}
            </ul>

            <button
                disabled={files.length === 0}
                className="mt-8 px-6 py-2 rounded bg-white text-[#0083B0] font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Upload
            </button>
        </div>
    );
};

export default PhotoUpload;
