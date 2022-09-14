import PropTypes from 'prop-types';
import { StatisticsBox, StatisticsTitle, StatisticsList, StatisticsLabel, StatisticsPercentage } from './Statistics.styled';
export const Statistics = ({ stats }) => {
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
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string,
            percentage: PropTypes.number,
        })
    ).isRequired,
};