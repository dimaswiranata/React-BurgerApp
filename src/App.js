import React from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBulider from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBulider/>
      </Layout>
    </div>
  );
}

export default App;
