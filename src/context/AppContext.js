import React, {createContext, useEffect, useState} from 'react';
export const AppContext = createContext(undefined);

const AppContextProvider = ({ children }) => {
    const [counterItems, setCounterItems] = useState([]);

    useEffect(() => {
        const counterItemsData = JSON.parse(localStorage.getItem('counterItems'))

        if (counterItemsData) {
            setCounterItems(counterItemsData)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterItems', JSON.stringify(counterItems))
    }, [counterItems])

    const addToCounter = (newItem) => {
        const maximum = counterItems.reduce((prev, curr) =>
            prev.id > curr.id ? prev : curr, { id: 1 }
        );
        setCounterItems(prevItems => [...prevItems, { ...newItem, id: maximum.id + 1, counter: 0, name: 'Counter' }]);
    }

    const removeFromCounter = (counter) => {
        setCounterItems(prevItems => prevItems.filter(item => item.id !== counter.id));
    }

    const incrementCounter = (counterItem) => {
        updateCounterById(counterItem, true);
    }

    const decrementCounter = (counterItem) => {
        updateCounterById(counterItem, false);
    }

    const updateCounterName = (counterItem, name) => {
        let items = [...counterItems];
        const itemIndex = counterItems.findIndex((item) => item.id === counterItem.id);
        items[itemIndex].name = name;
        setCounterItems(items);
    }

    const updateCounterById = (counterItem, isIncrement) => {
        let items = [...counterItems];
        const itemIndex = counterItems.findIndex((item) => item.id === counterItem.id);
        isIncrement ? items[itemIndex].counter++ : items[itemIndex].counter--;
        setCounterItems(items);
    }

    return (
        <AppContext.Provider
            value={{
                counterItems,
                addToCounter,
                removeFromCounter,
                incrementCounter,
                decrementCounter,
                updateCounterName,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
