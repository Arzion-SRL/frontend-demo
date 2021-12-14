import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { throttle } from 'lodash';
import { loadState, saveState } from '@utils/storageHelper/storageHelper.util';
import reducers from '@reducers/index';

let store;

function initStore(preloadState = loadState()) {
  return createStore(
    reducers,
    preloadState,
    composeWithDevTools(applyMiddleware()),
  )
};

export const initializeStore = (preloadState) => {
  let _store = store ?? initStore(preloadState);
  if (preloadState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadState,
    });
    store = undefined;
  }
  if (typeof window === 'undefined') return _store;
if (!store) store = _store;
return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));
  return store;
};
