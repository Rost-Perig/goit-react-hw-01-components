import PropTypes from 'prop-types';
import defaultImage from './default.jpg';
import s from './Profile.module.css';

/* =============карточка профиля============= */

const Profile = ({ users }) => {
    let { avatar, name, tag, location, stats: {followers, views, likes} } = users;
    return (
        <div className={s.card}>
            <div className={s.imgFrame}>
                <img className={s.img}
                    src={avatar ? avatar : defaultImage}
                    alt={name}
                />
            </div>    
                <p className={s.name}>{name}</p>
                <p className={s.text}>@{tag}</p>
                <p className={s.text}>{location}</p>
            <ul className={s.list}>
                <li className ={s.listItem}>
                    <span className={s.listItemTitle}>Followers</span>
                    <span className={s.listItemValue}>{followers}</span>
                </li>
                <li className ={s.listItem}>
                    <span className={s.listItemTitle}>Views</span>
                    <span className={s.listItemValue}>{views}</span>
                </li>
                <li className ={s.listItem}>
                    <span className={s.listItemTitle}>Likes</span>
                    <span className={s.listItemValue}>{likes}</span>
                </li>
            </ul>
        </div>
    )
};

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;