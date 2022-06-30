import PropTypes from 'prop-types';
import Statistics from './Statistics';

function StatisticList({ title, items }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {items.map(item => (
          <li className="item" key={item.id}>
            <Statistics label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

StatisticList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default StatisticList;
