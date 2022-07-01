import propTypes from 'prop-types';
import css from './FriendsListItem.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  const status = isOnline ? 'green' : 'red';
  return (
    <li className={css.item}>
      <span className={css.status} style={{ backgroundColor: status }}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  items: propTypes.shape({
    isOnline: propTypes.bool.isRequired,
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  }),
};

export default FriendListItem;
