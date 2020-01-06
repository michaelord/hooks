import {useEffect, useState} from 'react';

export const useLocalStorage = (initialValue: any, name: string): Array<any> => {
	const store = window.localStorage;

	const actualInitialValue = store.getItem(name) !== undefined ? store.getItem(name) : initialValue;

	const [value, setValue] = useState(actualInitialValue);

	useEffect(() => {
		store.setItem(name, value);
	}, [value]);

	return [value, setValue];
};
