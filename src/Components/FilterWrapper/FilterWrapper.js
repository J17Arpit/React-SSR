import React from 'react';

import Filter from '../Filter/Filter';
import './FilterWrapper.css';

const filterCategories = [
    {
        title: 'Launch Year',
        type: 'launch_year',
        subCategories: [
            {
                id: 1,
                value: 2006
            },
            {
                id: 2,
                value: 2007
            },
            {
                id: 3,
                value: 2008
            },
            {
                id: 4,
                value: 2009
            },
            {
                id: 5,
                value: 2010
            },
            {
                id: 6,
                value: 2011
            },
            {
                id: 7,
                value: 2012
            },
            {
                id: 8,
                value: 2013
            },
            {
                id: 9,
                value: 2014
            },
            {
                id: 10,
                value: 2015
            },
            {
                id: 11,
                value: 2016
            },
            {
                id: 12,
                value: 2017
            },
            {
                id: 13,
                value: 2018
            },
            {
                id: 14,
                value: 2019
            },
            {
                id: 15,
                value: 2020
            }
        ]
    },
    {
        title: 'Successful Launch',
        type: 'launch_success',
        subCategories: [
            {
                id: 16,
                value: true
            },
            {
                id: 17,
                value: false
            }
        ]
    },
    {
        title: 'Successful Landing',
        type: 'land_success',
        subCategories: [
            {
                id: 18,
                value: true
            },
            {
                id: 19,
                value: false
            }
        ]
    },
]
const FilterWrapper = (props) => {
    return (
        <div className="filter-wrapper">
            <div className="filter-wrapper-container">
                <h2>Filters</h2>
                {filterCategories.map(({ type, title, subCategories }) => <Filter key={title} type={type} title={title} subCategories={subCategories} {...props} />)}
            </div>
        </div>
    )
};

export default FilterWrapper;