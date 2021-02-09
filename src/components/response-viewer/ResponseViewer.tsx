import React from 'react';
import Reser from '../reser/Reser';
import './ResponseViewer.styles.scss';

interface Props {
    res: Array<any>,
    onPop: (id: any) => void
};

const ResponseViewer: React.FC<Props> = ({ res, onPop }) => {
    return (
        <div className="wrapper">
            <div className="in-wrapper">
                {
                    res.map(elem => <Reser key={elem.imdbID} elem={elem} onPop={onPop} />)
                }
            </div>
        </div>
    );
};

export default ResponseViewer;
