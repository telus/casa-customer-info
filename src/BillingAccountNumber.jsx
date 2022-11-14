import React from 'react'
import PropTypes from 'prop-types'
import CasaColours from '@telus/casa-core-colours'
import { CasaBox } from '@telus/casa-box'
import CasaText from '@telus/casa-text'
import { getCasaAppLocale } from './helper.js'
import AccountStatusIndicator from './AccountStatusIndicator'

const BillingAccountNumber = ({
	id,
	ban,
	accountStatus,
	accountStatusIndicatorSize,
	prefixText,
	accountStatusIndicatorPosition,
	showPrefix,
	textVariant,
	textSize,
	showAccountStatusIndicator
}) => {
	const locale = getCasaAppLocale()
	const { colorGreyShark } = CasaColours
	const renderBAN = () => {
		const text = `${showPrefix ? prefixText || `${locale.ban.ban} ` : ''}${ban}`
		return (
			<CasaText
				id={id}
				color={colorGreyShark}
				size={textSize}
				variant={textVariant === 'paragraph' ? 'regular' : 'medium'}
			>
				{text}
			</CasaText>
		)
	}

	const renderAccountStatus = () => {
		const padding = {
			pr: accountStatusIndicatorPosition === 'right' ? '0px' : '4px',
			pl: accountStatusIndicatorPosition === 'left' ? '0px' : '4px'
		}
		return (
			<CasaBox
				display="flex"
				flexDirection="row"
				width="auto"
				height="100%"
				justifyContent="center"
				alignItems="center"
				{...padding}
			>
				<AccountStatusIndicator
					id={`account-status-indicator-${accountStatusIndicatorPosition}-${accountStatus}-${id}`}
					variant={accountStatus}
					size={accountStatusIndicatorSize}
				/>
			</CasaBox>
		)
	}

	return (
		<CasaBox display="inline-flex" flexDirection="row"
			alignItems="center"
		>
			{accountStatusIndicatorPosition === 'left' && showAccountStatusIndicator && renderAccountStatus()}
			{renderBAN(ban)}
			{accountStatusIndicatorPosition === 'right' && showAccountStatusIndicator && renderAccountStatus()}
		</CasaBox>
	)
}

BillingAccountNumber.defaultProps = {
	id: '',
	accountStatus: 'open',
	accountStatusIndicatorSize: 'sm',
	prefixText: '',
	accountStatusIndicatorPosition: 'left',
	showPrefix: true,
	textVariant: 'label',
	textSize: 'base',
	showAccountStatusIndicator: true
}

BillingAccountNumber.propTypes = {
	/** The id of the component */
	id: PropTypes.string,
	/** The billing account number value */
	ban: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	/** The account status indicator value */
	accountStatus: PropTypes.oneOf(['open', 'closed']),
	/** The size of the account status indicator */
	accountStatusIndicatorSize: PropTypes.oneOf(['sm']),
	/** Configure the text before the billing account number */
	prefixText: PropTypes.string,
	/** The position of the account status indicator */
	accountStatusIndicatorPosition: PropTypes.oneOf(['left', 'right']),
	/** Toggles the visibility of the prefix value */
	showPrefix: PropTypes.bool,
	/** Toggles the visibility of the account status indicator */
	showAccountStatusIndicator: PropTypes.bool,
	/** Configures the typography of the text value */
	textVariant: PropTypes.oneOf(['label', 'paragraph']),
	/**
   * small: 12 px size and 16px line height
   *
   * base: 14 px size and 20px line height
   *
   * medium: 16 px size and 24px line height
   *
   * large: 20 px size and 24px line height
  */
	textSize: PropTypes.oneOf(['small', 'base', 'medium', 'large'])
}

export default BillingAccountNumber
