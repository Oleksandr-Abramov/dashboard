import Layout from './Layout/Layout';
import Main from './Main/Main';
import Sidebar from './Sidebar/Sidebar';

export const App = () => {
  return (
    <Layout>
      <Sidebar />
      <Main />
    </Layout>
  );
};
