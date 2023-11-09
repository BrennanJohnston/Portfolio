import { useState } from 'react';
import CatContainer from '../components/CatContainer';

function ChiPage(props) {

  return (
    <div className="custom-page">
      <div className="page-header">
        My Cat
      </div>
      <CatContainer />
    </div>
  );
}

export default ChiPage;