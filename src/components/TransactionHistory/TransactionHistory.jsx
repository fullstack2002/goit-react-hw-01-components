import PropTypes from 'prop-types';
import { TransactionData } from 'components/TransactionData/TransactionData';
import { TransactionsHistory, Thead, Tbody } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionsHistory>
            <Thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </Thead>

            <Tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <TransactionData key={id} type={type} amount={amount} currency={currency} />
                ))}
            </Tbody>
        </TransactionsHistory>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};