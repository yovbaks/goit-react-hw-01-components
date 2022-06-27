import PropTypes from 'prop-types';
import Statistics from './Statistics';

function StatisticList({ title, items }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {items.map(item => (
          <li class="item" key={item.id}>
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
