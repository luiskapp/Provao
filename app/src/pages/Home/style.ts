import styled, { css } from "styled-components";

export const Home = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg1};
		min-width: 100vw;
		min-height: 100vh;
		color: ${theme.colors.textColor};
		display: flex;
		justify-content: space-between;
	`}
`;

export const HomeContent = styled.main`
	${() => css`
		width: calc(100% - 450px);
		padding: 20px;
		overflow: auto;
		height: 100vh;
		box-sizing: border-box;
		margin: 0 auto;
	`}
`;

export const HomeHeaderDetails = styled.div`
	${() => css`
		display: flex;
		justify-content: space-between;
	`}
`;