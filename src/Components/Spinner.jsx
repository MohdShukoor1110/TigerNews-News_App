import { Loader  } from 'lucide-react';
import "./style/Spinner.css";

const Spinner = (props) => {
    return (
        <div className={`text-center`}>
            <Loader  className={`spin-loader my-3 text-${props.mode==='light'?'dark':'light'}`} />
        </div>
    )
}

export default Spinner;