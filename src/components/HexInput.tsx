import { ChangeEventHandler, FC, FormEventHandler } from 'react';

interface HexInputInterface {
    onChange: ChangeEventHandler;
    onSubmit: FormEventHandler;
    hexCode: string;
}

const HexInput: FC<HexInputInterface> = (props) => {
    return (
        <form onSubmit={ props.onSubmit }>
            <input
                type="text"
                value={ props.hexCode }
                onChange={ props.onChange } />
        </form>
    )
};

export default HexInput;