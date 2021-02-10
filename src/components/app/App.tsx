import React, { useState } from 'react';
import Search from '../search/Search';
import ResponseViewer from '../response-viewer/ResponseViewer';
import Selection from '../selection/Selection';
import axios from 'axios';
import './App.styles.scss';

interface StateType {
  typed: string,
  response: Array<any>,
  selected: {} | null,
};

const App: React.FC = () => {
  const [state, setState] = useState<StateType>({
    typed: "",
    response: [],
    selected: null,
  });

  const apiUrl = "http://omdbapi.com/?apikey=3e1d48d8";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setState((prevState: StateType): StateType => {
      return {
        ...prevState, typed: value
      };
    });
  };

  const onPop = (id: any) => {
    axios(apiUrl + "&i=" + id)
      .then(({ data }) => setState((prevState: StateType): StateType => {
        return {
          ...prevState,
          selected: data
        };
      }))
      .catch(err => alert(`Something Went Wrong\n${err}`));
  };

  const onClosePop = () => {
    setState((prevState: StateType): StateType => {return {...prevState, selected: null};});
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      axios(apiUrl + "&s=" + state.typed)
        .then(({ data }) => setState((prevState: StateType): StateType => {
          return {
            ...prevState,
            response: data.Search
          };
        }))
        .catch((err: any) => alert(`Something Went Wrong\n${err}`));
    }
  };

  return (
    <div className="app">
      {
        state.selected != null ?
          (<Selection sel={state.selected} onClosePop={onClosePop} />) :
          (
            <>
              <h1 className="title">Welcome To Movie DB</h1>
              <Search value={state.typed} handleChange={handleChange} handleEnter={handleEnter} />
              <ResponseViewer res={state.response} onPop={onPop} />
            </>
          )
      }
    </div>
  );
};

export default App;
