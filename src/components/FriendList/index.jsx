import propTypes from 'prop-types'
import FriendListItem from 'components/FriendListItem';

const FriendList = ({ items }) => (
  <div className="friend-list-item">
    <ul className="friend-list">
      {items.map(item => (
        <FriendListItem key={item.id} item={item} />
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
