import { FC, useState } from 'react';
import { SwatchInterface } from '../models/SwatchInterface';
import Swatch from './Swatch';

const Dashboard:FC = (props) => {
    const [swatches, setSwatches] = useState<SwatchInterface[]>([]);

    const addSwatch = () => {
        setSwatches([
            {
                hex: '#3D087B'
            },
            ...swatches,
        ]);
    }

    return (
        <>
            <div className="swatches">
                {
                    swatches.map((item: SwatchInterface, i) => <Swatch key={i} hex={ item.hex } />)
                }
            </div>
            <button type="button" onClick={addSwatch}>Add Swatch!</button>
        </>
    );
};

export default Dashboard;