import { useState } from 'react';
import CatContainer from '../components/CatContainer';
import CustomPage from '../components/CustomPage';

function ChiPage(props) {

  return (
    <CustomPage>
      <div className="page-header">
        My Cat
      </div>
      <CatContainer />
    </CustomPage>
  );
}

export default ChiPage;