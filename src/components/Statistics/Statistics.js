import PropTypes from 'prop-types';
import s from './Statistics.module.css'

/* =============список статистики============= */

const Statistics = ({ items }) => {
    return (
        <ul className={s.list}>
            {items.map(item => {
                let { id, label, percentage } = item;
                return (
                    <li key={id} className={s.listItem} style={{ backgroundColor: `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}` }}>
                        <span className={s.listItemTitle}>{label}</span>
                        <span className={s.listItemValue}>{percentage}%</span>
                    </li> 
                );
            }
            )}
        </ul>
    );
};

Statistics.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
};

export default Statistics;

