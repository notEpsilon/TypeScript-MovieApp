import React from 'react';
import './Search.styles.scss';

interface Props {
    value: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
};

const Search: React.FC<Props> = ({ value, handleChange, handleEnter }) => {
    return (
        <input className="srch" type="search" value={value} onChange={handleChange} onKeyPress={handleEnter} placeholder="Search For a Movie..." />
    );
};

export default Search;
