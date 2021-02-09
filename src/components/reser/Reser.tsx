import React from 'react';
import './Reser.styles.scss';

interface Props {
    elem: any,
    onPop: (id: any) => void
};

const Reser: React.FC<Props> = ({ elem, onPop }) => {
    return (
        <div className="card" onClick={() => onPop(elem.imdbID)}>
            <img src={elem.Poster} className="imger"/>
            <div className="sub-text">
                <span className="title">{elem.Title}</span>
                <span className="year">({elem.Year})</span>
            </div>
        </div>
    );
};

export default Reser;
