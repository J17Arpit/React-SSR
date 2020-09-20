import React from 'react';
import { bool, func, object, number, string, oneOfType } from 'prop-types';

import './Tile.css';

const Tile = ({ value, id, type, clickHandler, selectedFilters }) => {
    const handleOnClick = () => clickHandler(type, value);
    let className = 'tile';
    if (selectedFilters[type] && selectedFilters[type] === value) {
        className += ' active';
    }
    return (
        <button className={className} test-id={`test-${id}`} id={id} onClick={handleOnClick}>
            {type === 'launch_success' || type === 'land_success' ? value.toString() : value}
        </button>
    )
};

Tile.propTypes = {
    value: oneOfType([number, bool]),
    id: number,
    type: string,
    clickHandler: func,
    selectedFilters: object,
};

export default Tile;