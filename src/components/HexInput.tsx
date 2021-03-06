import { ChangeEventHandler, FC, FormEventHandler } from 'react';

interface HexInputInterface {
    onChange: ChangeEventHandler;
    onSubmit: FormEventHandler;
    hexCode: string;
}

const HexInput: FC<HexInputInterface> = (props) => {
    return (
        <form onSubmit={ props.onSubmit }>
            <div className="hex-input">
                <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 190" xmlSpace="preserve">
                        <path d="M31.686 187.333H70.61l2.293-40.266h38.262l-2.293 40.266h38.924l2.293-40.266H190v-38.86h-37.697l1.504-26.413H190v-38.86h-33.98l2.293-40.266h-38.925l-2.293 40.266h-38.26l2.293-40.266H42.205l-2.293 40.266H0v38.86h37.698l-1.504 26.413H0v38.86h33.98l-2.294 40.266zM76.622 81.794h38.261l-1.505 26.413H75.117l1.505-26.413z"/>
                    </svg>
                </span>
                <div>
                    <label htmlFor="hex">Hex:</label>
                    <input
                        type="text"
                        id="hex"
                        name="hex"
                        maxLength={6}
                        value={ props.hexCode }
                        onChange={ props.onChange }
                        aria-label="Hex Code" />
                </div>
                {
                    (props.hexCode !== '') ?
                        <span className="hex-input--preview"><span style={{ backgroundColor: '#' + props.hexCode }}></span></span> : null
                }
            </div>
        </form>
    )
};

export default HexInput;