import Download from '../Download/Download'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import './Clipboard.css'

const Clipboard = () => {
    return (
        <div className="clipboard my-5">
            <div className="clipboard-header">
                <div className="clip" />
            </div>
            <div className="clipboard-content">
                <PersonalInfo />
            </div>
            <Download />
        </div>
    )
}

export default Clipboard