import React from 'react'
import PropTypes from 'prop-types'
import CasaColours from '@telus/casa-core-colours'
import CasaIcon from './CasaIcon'

const AccountStatusClosed = ({
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
				viewBox="0 0 8 8" fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M7.34869 4C7.34869 5.88096 5.81739 7.40909 3.92434 7.40909C2.03129 7.40909 0.5 5.88096 0.5 4C0.5 2.11905 2.03129 0.590912 3.92434 0.590912C5.81739 0.590912 7.34869 2.11905 7.34869 4Z"
					stroke={CasaColours.colorGreyShark}
				/>
			</svg>
		</CasaIcon>
	)
}

AccountStatusClosed.defaultProps = {
	coreStyle: {},
	size: 'sm'
}

AccountStatusClosed.propTypes = {
	coreStyle: PropTypes.object,
	size: PropTypes.oneOf(['sm'])
}

export default AccountStatusClosed
