import React from 'react';
import { object } from 'prop-types';

import './Card.css';

const Card = ({ data: { mission_name, flight_number, mission_id, launch_year, launch_success, links: { mission_patch_small } } }) => {
    return (
        <>
            <div className="card-container">
                <img alt={mission_name} src={mission_patch_small} />
                <p className="mission-label">{mission_name}#{flight_number}</p>
                <div className="mission-info">
                    <p className="label">Mission Ids:</p>
                    <p>{mission_id}</p>
                </div>
                <div className="mission-info">
                    <p className="label">Launch Year:</p>
                    <p>{launch_year}</p>
                </div>
                <div className="mission-info">
                    <p className="label">Successful Launch:</p>
                    <p>{launch_success}</p>
                </div>
            </div>
        </>
    )
};

Card.propTypes = {
    data: object,
};

export default Card;