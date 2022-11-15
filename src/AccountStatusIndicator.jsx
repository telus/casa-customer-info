import React from 'react'
import PropTypes from 'prop-types'
import OpenStatus from '@telus/casa-icon'
import ClosedStatus from '@telus/casa-icon'

// import AccountStatusOpen from './svgs/AccountStatusOpen'
// import AccountStatusClosed from './svgs/AccountStatusClosed'

const AccountStatusIndicator = ({ id, size, variant }) => (
	variant.toLowerCase() === 'open'
		? <OpenStatus id={id} size={size} />
		: <ClosedStatus id={id} size={size} />
)

AccountStatusIndicator.defaultProps = {
	id: '',
	size: 'sm'
}

AccountStatusIndicator.propTypes = {
	/** The id of the indicator */
	id: PropTypes.string,
	/** The variant to use */
	variant: PropTypes.oneOf(['open', 'closed']).isRequired,
	/** The size of the indicator */
	size: PropTypes.oneOf(['sm'])
}

export default AccountStatusIndicator
