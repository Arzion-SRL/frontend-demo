import { Provider } from 'react-redux';
import { useStore } from '@store/store';

const ReduxProvider = ({ children, pageProps }) => {
  const store = useStore(pageProps?.initialReduxState);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ReduxProvider;
