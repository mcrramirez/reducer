import React, { useContext, useState, useEffect } from 'react';
import {CounterContext} from '../contexts/CounterContext';

const CounterHeader = ({...props}) =>{
    const cctx = useContext(CounterContext);    
    const [colors, setColors] = useState(cctx.changeColor());
    useEffect(()=> {
        setColors(cctx.changeColor());
    },[cctx.state.counters[0]])
    return (
        <div style={{color: colors, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
        <div># of counters: {cctx.state.counters.length}</div> 
        <div># of clicks: {cctx.state.clicks}</div>         
        <div>total sum: {cctx.state.counters.map(x => x.count).reduce((a,b) => a+b)}</div>
     </div>
    );
};

export default CounterHeader;