import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';


// const elem = (
//     <div>
//         <h2>Hello world</h2>
//         <input type="text" placeholder="type here"/>
//         <button/>
//     </div>
// )
const Header =() => {
    // const scr = '<script>alert("Error!")</script>';
    // return <h2>{scr}</h2>
    return <h2>Hello world</h2>
}

const Field = () => {
    const holder = "Enter here"
    const styleField = {
        width: '300px'
    }

    return <input 
            style={styleField}
            type="text" 
            placeholder={holder}
            autoComplete=""
            className="first"
            htmlFor="" />
}

const Btn = () => {
    const text = "Log in"
    // const res = () => {
    //     return 'Log in, please'
    // }
    // const p = <p>Log in</p>

    const logged = true;
    return <button>{logged ? "Enter" : text}</button>
}

const App = () => {
    return (
       <div>
            <Header/>
            <Field/>
            <Btn/>
       </div>

    )
}
ReactDOM.render(<App/>, document.getElementById('root'));

