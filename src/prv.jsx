import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
//import React, { memo } from "react";
//import axios from "axios";

/*
export function App() {
    const hello = "Hello!!"

    return(
        <div>
            <h1>{hello}</h1>
        </div>
    )
}
*/
/*
export function App() {

    return(
        <div>
            <AppH />
        </div>
    )
}
    function AppH() {
        const hello = "Hello!!!"

        return(
            <h2>{hello}</h2>
        )
    }
*/
/*
export function App() {
    const hello = "Hello function component";

    return(
        <AppFC value={hello} />
    )
}
    function AppFC(saluto) {

        return(
            <h1>{saluto.value}</h1>
        )
    }
*/
/*
    export function App() {
        const hello = "Hello function component";
    
        return(
            <AppFC value={hello} />
        )
    }
        function AppFC({value}) {
    
            return(
                <h1>{value}</h1>
            )
        }
*/
/*
export const App = () => {
    const hello = "Hello function component 2";

    return(
        <AppFC value={hello} />
    )
}
    const AppFC = ({value}) => {

        return(
            <h1>{value}</h1>
        )
    }
*/
/*
export const App = () => {
    const [hello, setHello] = useState("Hello useState")

    return(
        <>
        <h1>{hello}</h1>
        <input 
            type="text"
            value={hello}
            onChange = {e => setHello(e.target.value)}
        />
        </>
    )
}
*/
/*
export const App = () => {
    return(
        <AppUS />
    )
};

    const AppUS = () => {
        const [hello, setHello] = useState("ciao");
        const handleChange = e => setHello(e.target.value);
        
        return(
            <>
                <h1>{hello}</h1>
                <input 
                    type="text"
                    value={hello}
                    onChange={handleChange}
                />
            </>
        )
    };
*/
/*
export const App = () => {
    const [hello, setHello] = useState("ciao ciao!");
    const handleChange = e => setHello(e.target.value);

    return(
        <>
            <AppHC textOut={hello} />
            <Input value={hello} onChangeInput={handleChange} />CIAO CIAO
        </>
    )
};

    const AppHC = ({textOut}) => <h1>{textOut}</h1>;

    const Input = ({value, onChangeInput, children}) => (
        <label>
            {children}
            <input 
                type="text"
                value={value}
                onChange={onChangeInput}
            />
        </label>
    );
*/
/*
export const App = () => {
    const sayHello = () => console.log('Hello');

    return(
        <Button handleClick={sayHello} />
    )
};
    const Button = ({handleClick}) => {
        const sayDefault = () => console.log('Default');

        const onClick = handleClick || sayDefault;

        return(
            <button type="button" onClick={onClick}>
                Button
            </button>
        )
    };
*/
/*
export const App = () => {
    const sayHello = () => console.log('Hello');

    return(
        <Button halndleClick={sayHello} />
    )
};

    const Button = ({ handleClick = () => console.log('Default') }) => (
        <button type="button" onClick={handleClick}>
            Button
        </button>
    );
*/
/*
export const App = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () =>
    setTimeout(
        () => setCount(currentCount => currentCount + 1),
        1000
    );

    const handleDecrement = () =>
    setTimeout(
        () =>setCount(currentCount => currentCount - 1),
        1000
    );

    return(
        <>
            <h1>{count}</h1>
            <input 
                type="button"
                onClick={handleIncrement}
                value="+"
            />

            <input 
                type="button"
                onClick={handleDecrement}
                value="-"
            />
        </>
    )
}
*/
/*
export const App = () => {
        console.log('Does it render?');

    const [count, setCount] = useState(0);
        console.log(`My count is ${count}!`);

    const handleIncrement = () => 
        setCount(currentCount => currentCount + 1);

    const handleDecrement = () =>
        setCount(currentCount => currentCount - 1);

        useEffect(() => setCount(currentCount => currentCount + 3), []);

    return(
        <>
            <h1>{count}</h1>
            <input 
                type="button"
                onClick={handleIncrement}
                value="+"
            />
            <input 
                type="button"
                onClick={handleDecrement}
                value="-"
            />
        </>
    )
}
*/
/*
export const App = () => {
    const initialCount = +localStorage.getItem('storageCount') || 0;
    const [count, setCount] = useState(initialCount);

    const handleIncrement = () =>
        setCount(currentCount => currentCount + 1);

    const handleDecrement = () =>
        setCount(currentCount => currentCount - 1);

    useEffect(() => localStorage.setItem('storageCount', count), [
        count,
    ]);

    return(
        <>
            <h1>{count}</h1>
            <input 
                type="button"
                value="+"
                onClick={handleIncrement}
            />
            <input 
                type="button"
                value="-"
                onClick={handleDecrement}
            />
        </>
    )
}
*/
/*
export const App = () => {
    const [greeting, setGreeting] = useState('Hello');
    const [count, setCount] = useState(0);

    const handleIncrement = () =>
        setCount(currentCount => currentCount + 1);

    const handleDecrement = () =>
        setCount(currentCount => currentCount - 1);

    const handleChange = e => setGreeting(e.target.value);

    return(
        <>
            <h1>{greeting}</h1>
            <input 
                type="text"
                onChange={handleChange}
                value={greeting}
            />{greeting}
            <Count count={count} />
            <button type="button" onClick={handleIncrement}>+</button>
            <button type="button" onClick={handleDecrement}>-</button>
        </>
    )
};

    const Count = memo(({count}) => {
        console.log('Does it (re)render?');

        return(
            <h1>{count}</h1>
        )
    })
*/
/*
export const App = () => {
    const [count, setCount] = useState(0);

    const handleDoubleP = () => setCount(setCount => setCount + 2);
    const handleDoubleM = () => setCount(setCount => setCount - 3);

    return(
        <>
            <h1>{count}</h1>
            <input type="button" value="+" onClick={handleDoubleP} />
            <input type="button" value="-" onClick={handleDoubleM} />
        </>
    )
};
*/
/*
const useStateWithLocalStorage = localStorageKey => {
    const [value, setValue] = useState(
        localStorage.getItem(localStorageKey) || '',
    );

    useEffect(() => {
        localStorage.setItem(localStorageKey, value);
    }, [value]);

    return [value, setValue];
};

export const App = () => {
    const [value, setValue] = useStateWithLocalStorage(
        'myValueInLocalStorage',
    );

    const onChange = e => setValue(e.target.value);

    return(
        <>
            <h1>Hello</h1>
            <input 
                value={value} type="text" onChange={onChange}
            />
            <p>{value}</p>
        </>
    )
}
*/
/*
const IN_LS = [
    {
        id: '0',
        title: 'Ciao 0',
        url: 'https://www.robinwieruch.de/react-rxjs-state-management-tutorial/',
    },
    {
        id: '1',
        title: 'Ciao 1',
        url: 'https://www.robinwieruch.de/react-graphql-apollo-tutorial',
    },
];

export const App = () => {
    const [list, setList] = useState(IN_LS);

    function onRemoveItem(id) {
        const newList = list.filter(item => item.id !== id);
        setList(newList);
    }

    return(
        <ul>
            {list.map(item => (
                <li key={item.id}>
                    <a href={item.url}>{item.title}</a>
                    <button type="button" onClick={() => onRemoveItem(item.id)}>Remove</button>
                </li>
            ))}
        </ul>
    );
}
*/
/*
export const App = () => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
        document.title = `You clicked ${count} times`;
      });
    
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
*/

export const App = (text, maxLength) => {
    const [hidden, setHidden] = useState(true);

    if(text.length <= maxLength) {
        return(
            <span>{text}</span>
        );
    };

    return(
        <>
            <span>
                {hidden ? `${text.substr(0, maxLength).trim()}...` : text}
                {hidden ? (
                    <a onClick={() => setHidden(false)}><button>read more</button></a>
                ): (
                    <a onClick={() => setHidden(true)}><button>read less</button></a>
                )}
            </span>
        </>
    );
}

ReactDOM.render(
    <App
        text={`Focused, hard work is the real key
      to success. Keep your eyes on the goal, 
      and just keep taking the next step 
      towards completing it.`}
    maxLength={35}
  />,
  document.querySelector('#root')
);

// https://codesandbox.io/s/3xy0vll4y6