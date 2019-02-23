import React from 'react';
import PropTypes from 'prop-types';
import './ApplicationHeader.less';

const ApplicationHeader = ({ title }) => (
  <div className="application-header">
    <section className="main__header">
      <h1 className="main__header-title">{title}</h1>
    </section>
  </div>
);

ApplicationHeader.propTypes = {
  title: PropTypes.string,
};

ApplicationHeader.defaultProps = {
  title: '',
};

export default ApplicationHeader;
