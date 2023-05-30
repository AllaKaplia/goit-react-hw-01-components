import PropTypes from 'prop-types'; 
import css from './Statistics.module.css';

export const Statistics = ({ title, data }) => {
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0')}`;
    }

    return (
      <div className={css.box}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
            {data.map(({ id, label, percentage }) => (
                <li key={id} className={css.item} style={{ backgroundColor: getRandomHexColor() }} >
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
              </li>
            ))}
        </ul>
      </div>
    );
};

Statistics.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
      })
    ).isRequired
};