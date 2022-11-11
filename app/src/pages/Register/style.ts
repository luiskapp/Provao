import styled, { css } from "styled-components";
import gamer from "assets/imgs/fundo.jpg";

export const Register = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg2};
		background-image: url(${gamer});
		background-size: cover;
		background-position: center;
		width: 100vw;
		height: 100vh;
	`}
`;

export const RegisterContent = styled.main`
	${({ theme }) => css`
		width: 100%;
		height: 100%;
		${theme.mixins.overlay()};
		display: flex;
		justify-content: center;
		align-items: center; ;
	`}
`;