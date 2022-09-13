import PropTypes from 'prop-types';
import { Tr } from './TransactionData.styled';

export const TransactionData = ({ type, amount, currency }) => {
    return (
        <Tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </Tr>
    );
};

TransactionData.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};