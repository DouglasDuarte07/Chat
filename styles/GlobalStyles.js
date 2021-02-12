import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Lato', sans-serif;
		color: white;
		outline: none;
		text-decoration: none;
		user-select: none;
	}
	html, body, #root{
		max-width: 100vw;

		height: 100%;
		width: 100%;
		background: var(--gray900);
	}
	button{
		&:hover{
			cursor: pointer;
		}
	}
	:root{
		--primary200: #5bc6d0;
		--gray900: #121212;
		--gray800: #1d1d1d;
		--gray700: #2c2c2c;
		--gray600: #323232;
		--gray500: #373737;
	}
`