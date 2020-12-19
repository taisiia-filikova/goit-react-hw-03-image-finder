import PropTypes from 'prop-types';
import s from './ErrorView.module.css';

import errorImg from '../../img/nothing-found.png';

function ErrorView({ texterror }) {
  return (
    <div role="alert" className={s.wrapper}>
      <img src={errorImg} width="400" alt="no-results" />
      <p text={texterror} className={s.text}>
        {texterror}
      </p>
    </div>
  );
}

ErrorView.propTypes = {
  texterror: PropTypes.string.isRequired,
};

export default ErrorView;
