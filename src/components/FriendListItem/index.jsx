import propTypes from 'prop-types'

const FriendListItem = ({ item }) => (
  <li className="item">
        <span className="status">{item.isOnline}</span>
    <img className="avatar" src={item.avatar} alt="User avatar" width="48" />
        <p className="name">{item.name}</p>
  </li>
);

FriendListItem.propTypes = {
  items: propTypes.shape({
    status: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  }),
}

export default FriendListItem;