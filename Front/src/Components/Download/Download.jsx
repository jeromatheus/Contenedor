import './Download.css'
const Download = () => {
    const handleDownload = () => {
        const pdfUrl = '/tp.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'tp.pdf';
        link.click();
    };

    return (
        <div className='w-100 d-flex justify-content-center mt-2'>
            <button className="mt-2 button-55" onClick={handleDownload}>
                Descarga el informe del TFI en formato PDF desde aquí
            </button>
        </div>
    );
};

export default Download;
