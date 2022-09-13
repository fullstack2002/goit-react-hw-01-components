import styled from '@emotion/styled'
export const ProfileBox = styled.div`
  // width: 320px;
  // padding-bottom: 40px;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  border-radius: 2px;
	box-shadow: 2px 2px 5px grey;
	border: 1px solid #777678;
	width: 300px;
	margin: 20px auto;
	overflow: hidden;
  background-color: #e5c9e0;
`;
export const ProfileInfo = styled.div`
  width: 100%;
	text-align: center;
	padding-top: 20px;

  & img {
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 5px;
    width: 130px;
	  border-radius: 30%;
	  border: 1px solid #777678;
    background-color: #efe1f7;
  }
`;
export const ProfileName = styled.p`
  margin-bottom: 5px;
  font-size: 24px;
	line-height: 30px;
	font-weight: 700;
`;
export const ProfileTag = styled.p`
  margin-bottom: 5px;
  font-size: 16px;
	line-height: 20px;
	color: #3a3a3a;
`;
export const ProfileLocation = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
	line-height: 20px;
	font-weight: 500;
	color: #3a3a3a;
`;
export const Stats = styled.ul`
  background-color: #aea2ac;
	margin: 0;
	padding: 0;
	display: flex;
	align-content: center;

  & li {
  list-style: none;
	flex-basis: calc(100% / 3);
	padding: 20px 10px;
	text-align: center;
	border: 1px solid #777678;
  }
`;
export const Label = styled.span`
  display: block;
	font-size: 16px;
	line-height: 20px;
	color: #000000;
	margin-bottom: 10px;
`;
export const Quantity = styled.span`
  display: block;
	font-size: 16px;
	line-height: 20px;
	font-weight: 700;
`;