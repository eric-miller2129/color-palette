import { AnimatePresence } from 'framer-motion';
import { ChangeEvent, FC, useState } from 'react';
import { SwatchInterface } from '../models/SwatchInterface';
import HexInput from './HexInput';
import Swatch from './Swatch';

const Dashboard:FC = (props) => {
    const [swatches, setSwatches] = useState<SwatchInterface[]>([]);
    const [hexCode, setHex] = useState<string>('');

    const addSwatch = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        setSwatches([
            {
                hex: '#' + hexCode,
            },
            ...swatches,
        ]);
        setHex('');
    }

    const handleHexUpdate = (e: ChangeEvent<HTMLInputElement>) => {
        const currentHex = e.currentTarget.value;

        setHex(currentHex);
    }

    return (
        <>
            <HexInput
                onSubmit={ addSwatch }
                hexCode={ hexCode }
                onChange={ handleHexUpdate } />
            <div className="swatches">
                <AnimatePresence>
                    {
                        swatches.map((item: SwatchInterface, i) => <Swatch key={i} hex={ item.hex } />)
                    }
                </AnimatePresence>
            </div>
        </>
    );
};

export default Dashboard;