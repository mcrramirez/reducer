import React,{useReducer} from 'react';
//import Counter from '../components/Counter';
 
export const CounterContext = React.createContext();

const initialState = {
    counters: [{count: 0, clicks: 0}],
    clicks: 0
  };
  const defaultCounter = {count: 0, clicks: 0};
  const reducer = (state, action) => {
    switch(action.type){
      case "INC":
        return {
          ...state,
          counters: state.counters.map((cnt, index) => index === action.index ? {...cnt, count:cnt.count + 1, clicks: cnt.clicks + 1}:cnt),
          clicks: state.clicks + 1
        }
      case "DEC":
        return {
          ...state,
          counters: state.counters.map((cnt, index) => index === action.index ? {...cnt, count:cnt.count - 1, clicks: cnt.clicks - 1}:cnt),
          clicks: state.clicks - 1
        }
      case "NEW":
        return {
          ...state,
          counters: state.counters.concat({...defaultCounter})        
        }
      default:
        return {
          ...state
        };
    }
  }
const CounterProvider = ({...props}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    function randomNum(){
      return Math.floor(Math.random() * 255);
    }
    function changeColor(){
      return `rgb(${randomNum()},${randomNum()},${randomNum()}`;
    }
    return (
        <CounterContext.Provider value={{
            state:state, 
            dispatch:dispatch,
            changeColor: changeColor,
            }}>
            {props.children}
        </CounterContext.Provider>
    )
} 
 
export default CounterProvider;