import ReduxProvider from './ReduxProvider/ReduxProvider.component';

const Providers = ({ children, pageProps }) => (
  <ReduxProvider pageProps={pageProps}>
    {children}
  </ReduxProvider>
);

export default Providers;