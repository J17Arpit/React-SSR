import React from 'react';
import { array, string } from 'prop-types';

import Tile from '../Tile/Tile';

const Filter = ({ type, title, subCategories, ...props }) => {
    return (
        <div className="filter-section">
            <h3>{title}</h3>
            {subCategories.map(({ id, value }) => <Tile key={id} value={value} id={id} type={type} {...props} />)}
        </div>
    )
};

Filter.propTypes = {
    title: string,
    subCategories: array,
    type: string,
};


export default Filter;