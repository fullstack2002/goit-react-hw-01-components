import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendsList } from './FriendList.styled';
export const FriendList = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map(({ id, name, avatar, isOnline }) => (
                <FriendListItem key={id} name={name} avatar={avatar} isOnline={isOnline} />
            ))}
        </FriendsList>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired,
};