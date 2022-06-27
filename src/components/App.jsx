import Profile from './Profile';
import StatisticList from './StatisticList'
import user from '../user.json';
import data from '../data.json';

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
      {/* {data.map(item => (
        <Statistics
          
          stats={data} />
      ))} */}

      <StatisticList items={data} />
    </div>
  );
};
