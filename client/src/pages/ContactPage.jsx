import { useState } from 'react';
import CustomPage from '../components/CustomPage';

function ContactPage(props) {

  return (
    <CustomPage>
      <div className="contact-page-header">
        Contact Me
      </div>
      <div className="contact-page-entry">
        Email: brennankj@live.com
      </div>
      <div className="contact-page-entry">
        Text/Phone: (479)218-3892
      </div>
    </CustomPage>
  );
}

export default ContactPage;