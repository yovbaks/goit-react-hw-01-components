import Profile from './Profile/Profile';
import StatisticList from './Statistics/StatisticList'
import user from '../components/Profile/user.json';
import data from '../components/Statistics/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      

      <StatisticList title="Upload stats" items={data} />
    </div>
  );
};
