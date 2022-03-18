import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootReducer } from '../store/reducers/indext';


export const useAppSelector: TypedUseSelectorHook<RootReducer> = useSelector;
