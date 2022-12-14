import styled from 'styled-components'
import CasaColours from '@telus/casa-core-colours'
import casaFontsProps from '@telus/casa-typography'

const {
	colorGreyRaven,
	colorCardinal,
	colorAccessibleGreen
} = CasaColours

export const CustomerInfo = styled.textarea`
resize: none;
width: 100%;
height: ${({ height }) => (height)};
padding: 8px;
margin: 4px 0;
border-radius: 4px;
box-sizing: border-box;
border: ${({ variant, disabled }) => {
		if (disabled) return 'none'
		if (variant === 'default') return `1px solid ${colorGreyRaven}`
		if (variant === 'error') return `2px solid ${colorCardinal}`
		if (variant === 'success') return `2px solid ${colorAccessibleGreen}`
		return null
	}};
font-size: ${casaFontsProps.regularTextSize};
font-weight:${casaFontsProps.regularFontWeight};
line-height: 20px;
&:focus {
  outline: none;
  border: 1px solid #B2B2B2;
  box-sizing: border-box;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}
`
