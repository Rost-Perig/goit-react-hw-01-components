import PropTypes from 'prop-types';
import s from './Friends.module.css';
import FriendsListItem from '../FriendListItem/FriendListItem'

/* =============список друзей============= */

const Friends = ({ items }) => {
    return (
        <ul className={s.list}>
            {items.map(item => {
                let { id } = item;
                return (
                    <li key={id} className={s.listItem}>
                        <FriendsListItem item={item} />
                    </li>
                )
            })}
        </ul>
    )       
}

Friends.propTypes = {
    id: PropTypes.number,
};

export default Friends;