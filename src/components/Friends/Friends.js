import PropTypes from 'prop-types';
import s from './Friends.module.css'

/* =============список друзей============= */

const Friends = ({ items }) => {
    return (
        <ul className={s.list}>
            {items.map(item => {
                let { id, avatar, name, isOnline } = item; 
                return (
                    <li key={id} className={s.listItem}>
                        <span className={s.status} style={ isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}></span>
                        <div className={s.imgFrame}>
                            <img
                                className={s.img}
                                src={avatar}
                                alt={name} /> 
                        </div>
                        <p className={s.listText}>{name}</p>
                    </li>
                );
            })}
        </ul> 
    );
};

Friends.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};

export default Friends;