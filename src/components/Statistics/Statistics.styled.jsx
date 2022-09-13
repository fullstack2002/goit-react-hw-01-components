import styled from '@emotion/styled'
export const StatisticsBox = styled.section`
  border-radius: 2px;
	box-shadow: 2px 2px 5px grey;
	border: 1px solid #777678;
	width: 300px;
	margin: 20px auto;
  background-color: #e5c9e0;
`;
export const StatisticsTitle = styled.h2`
  text-align: center;
	color: #000000;
	font-size: 20px;
	line-height: 28px;
	font-weight: 700;
	margin-top: 20px;
	margin-bottom: 20px;
`;
export const StatisticsList = styled.ul`
  margin: 0;
	padding: 0;
	width: 100%;
	display: flex;
	background-color: #aea2ac;

  & li {
    list-style: none;
    padding: 20px 10px;
    flex-basis: calc(100% / 4);
    text-align: center;
    border: 1px solid #777678;
  }
`;
export const StatisticsLabel = styled.span`
  display: block;
	font-size: 14px;
	line-height: 18px;
	color: #000000;
	margin-bottom: 10px;
`;
export const StatisticsPercentage = styled.span`
  display: block;
	font-size: 20px;
	line-height: 24px;
	font-weight: 500;
`;