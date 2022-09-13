import styled from '@emotion/styled'
export const FriendsListItem = styled.li`
  box-sizing: border-box;
	width: 300px;
	margin: 10px auto;
	padding: 5px;
	border-radius: 2px;
	box-shadow: 2px 2px 5px grey;
	border: 1px solid #777678;
	list-style: none;
	display: flex;
	flex-direction: row;
	align-items: center;
  background-color: #e5c9e0;

  & img {
    margin: 0 5px;
  }
`;
export const FriendListStatus = styled.span`
  width: 20px;
	height: 20px;
	border-radius: 50%;
	margin: 0 10px;
  background-color: ${({ status }) => {
    return status ? '#86df75' : '#df7575';
  }};
`;
export const FriendsListName = styled.p`
  margin: 0 5px;
	font-size: 24px;
	line-height: 30px;
	font-weight: 500;
`;