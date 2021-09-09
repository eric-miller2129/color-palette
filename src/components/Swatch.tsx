import { FC } from 'react';
import { SwatchInterface } from '../models/SwatchInterface';

const Swatch: FC<SwatchInterface> = (props) => {
    return (
        <div className="swatch">
            <span className="swatch--preview" style={{ backgroundColor: props.hex }}></span>
            <div className="swatch--actions">
                <div className="swatch--hex">
                    <input
                        type="text"
                        name="hexCode"
                        defaultValue={ props.hex } />
                </div>
                <button className="trash">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlSpace="preserve">
                        <path d="M437.885 81.874h-71.646v-58.91C366.239 10.282 355.957 0 343.275 0h-174.55c-12.682 0-22.964 10.282-22.964 22.964v58.91H74.115c-12.682 0-22.964 10.282-22.964 22.964 0 12.682 10.282 22.964 22.964 22.964h2.794v361.233c0 12.682 10.282 22.964 22.964 22.964h312.253c12.682 0 22.964-10.282 22.964-22.964V127.803h2.794c12.682 0 22.964-10.282 22.964-22.964s-10.281-22.965-22.963-22.965zM320.309 45.929v35.945H191.69V45.929h128.619zm68.853 420.142H122.838V127.803h266.324v338.268z"/>
                        <path d="M184.044 413.979c12.682 0 22.964-10.282 22.964-22.964V224.373c0-12.682-10.282-22.964-22.964-22.964-12.682 0-22.964 10.282-22.964 22.964v166.642c0 12.682 10.282 22.964 22.964 22.964zM255.999 413.979c12.683 0 22.964-10.282 22.964-22.964V224.373c0-12.682-10.282-22.964-22.964-22.964-12.682 0-22.964 10.282-22.964 22.964v166.642c0 12.682 10.282 22.964 22.964 22.964zM327.954 413.979c12.682 0 22.964-10.282 22.964-22.964V224.373c0-12.682-10.282-22.964-22.964-22.964s-22.964 10.282-22.964 22.964v166.642c0 12.682 10.282 22.964 22.964 22.964z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Swatch;