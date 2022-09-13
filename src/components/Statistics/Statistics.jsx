import PropTypes from 'prop-types';
import { StatisticsBox, StatisticsTitle, StatisticsList, StatisticsLabel, StatisticsPercentage } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsBox>
            <StatisticsTitle>Upload stats</StatisticsTitle>

            <StatisticsList>
                {stats.map(item => (
                    <li className="item" key={item.id}>
                        <StatisticsLabel>{item.label}</StatisticsLabel>
                        <StatisticsPercentage>{item.percentage}</StatisticsPercentage>
                    </li>
                ))}
            </StatisticsList>
        </StatisticsBox>
    );
};
Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};