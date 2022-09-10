import PropTypes from 'prop-types';
import css from './PageTitle.module.css';

export function PageTitle({ textTitle }) {
  return <h1 className={css.title}>{textTitle}</h1>;
}

PageTitle.propTypes = {
  textTitle: PropTypes.string.isRequired,
};
