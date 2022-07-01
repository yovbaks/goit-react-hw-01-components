import propTypes from 'prop-types'
import FriendListItem from 'components/FriendListItem';
import css from './FriendList.module.css'

const FriendList = ({ items }) => (
  <div className={css.FriendListItem}>
    <ul className={css.FriendList}>
      {items.map(item => (
        <FriendListItem key={item.id} isOnline={item.isOnline} avatar={item.avatar} name={item.name} />
      ))}
    </ul>
  </div>
);


FriendList.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ),
}

export default FriendList;
