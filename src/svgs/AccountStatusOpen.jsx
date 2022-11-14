import React from 'react'
import PropTypes from 'prop-types'
import CasaColours from '@telus/casa-core-colours'
import CasaIcon from '@telus/casa-icon'

const AccountStatusOpen = ({
	coreStyle,
	size
}) => {
	let width = '8'
	if (size === 'sm') {
		width = '8'
	}
	let height = '8'
	if (size === 'sm') {
		height = '8'
	}
	return (
		<CasaIcon style={{
			...coreStyle,
			cursor: 'default' 
		}}
		>
			<svg width={width} height={height}
				viewBox={`0 0 ${width} ${height}`} version="1.1"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx={width / 2} cy={height / 2}
					r={width / 2} fill={CasaColours.colorTelusGreen}
				/>
			</svg>
		</CasaIcon>
	)
}

AccountStatusOpen.defaultProps = {
	coreStyle: {},
	size: 'sm'
}

AccountStatusOpen.propTypes = {
	coreStyle: PropTypes.object,
	size: PropTypes.oneOf(['sm'])
}

export default AccountStatusOpen
