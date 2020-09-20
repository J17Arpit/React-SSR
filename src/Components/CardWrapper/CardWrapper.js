import React from 'react';
import { array } from 'prop-types';

import Card from '../Card/Card';
import './CardWrapper.css';

const CardWrapper = ({ list }) => {
    return (
        <div className="card-wrapper">
            {list.map((item, index) => <Card key={index} data={item} />)}
        </div>
    )
};

CardWrapper.propTypes = {
    list: array,
};

export default CardWrapper;