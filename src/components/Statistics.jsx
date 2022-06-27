import PropTypes from 'prop-types';

export default function Statistics({ title, label,percentage }) {
  return (
    // <section class="statistics">
    //   <h2 class="title">Upload stats</h2>

    //   <ul class="stat-list">
    <div>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </div>

    //   </ul>
    // </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(Object),
};
