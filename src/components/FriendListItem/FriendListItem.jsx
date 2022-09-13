import { FriendsList } from 'components/FriendList/FriendList.styled';
import PropTypes from 'prop-types';
import { FriendsListItem, FriendListStatus, FriendsListName } from './FriendsListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendsListItem>
            <FriendListStatus status={isOnline}></FriendListStatus>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <FriendsListName>{name}</FriendsListName>
        </FriendsListItem>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
