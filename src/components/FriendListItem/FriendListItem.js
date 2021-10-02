import PropTypes from 'prop-types';
import s from './FriendListItem.module.css'

/* =============карточка друга============= */

const FriendsListItem = ({ item }) => {
    let { avatar, name, isOnline } = item;
    return (
        <>
            <span className={s.status} style={ isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}></span>
            <div className={s.imgFrame}>
                <img
                    className={s.img}
                    src={avatar}
                    alt={name} /> 
            </div>
            <p className={s.listText}>{name}</p>
        </>
    );
};

FriendsListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};

export default FriendsListItem;