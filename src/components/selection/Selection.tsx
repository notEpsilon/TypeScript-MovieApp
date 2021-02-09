import React from 'react';
import './Selection.styles.scss';

interface Props {
    sel: any,
    onClosePop: () => void
};

const Selection: React.FC<Props> = ({ sel, onClosePop }) => {
    return (
        <div className="sel-wrapper">
            <img src={sel.Poster} />
            <div className="container">
                <h1 className="elem">{sel.Title}</h1>
                <span className="elem">{sel.imdbRating}</span>
                <p className="elem">{sel.Plot}</p>
                <button onClick={onClosePop}>Close</button>
            </div>
        </div>
    );
};

export default Selection;
