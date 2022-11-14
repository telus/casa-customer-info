import React from 'react'
import PropTypes from 'prop-types'
import {
	Home, Mobility
} from '@tds/core-decorative-icon'
import CasaColours from '@telus/casa-core-colours'
import { CasaBox } from '@telus/casa-box'
import { getCasaAppLocale } from './helper.js'
import { getCapitalizedName } from '@telus/casa-utils'
import CasaText from '@telus/casa-text'
import BillingAccountNumber from './BillingAccountNumber'
import Telus from './svgs/Telus'
import Koodo from './svgs/Koodo'

const CasaCustomerInfo = ({
	id,
	lob,
	brand,
	billingAccountName,
	isCustomerId,
	customerId,
	bans
}) => {
	const locale = getCasaAppLocale()
	const {
		colorGreyShark,
		colorGreyShuttle,
		colorTelusPurple
	} = CasaColours

	const isMobility = lob === 'mobility'

	return (
		<CasaBox>
			<CasaBox
				maxWidth="100%"
				height="auto"
				id={`${brand}-brand-logo-${id}`}
			>
				{brand === 'koodo' ? <Koodo scale={1} hasDefaultCursor /> : <Telus scale={1} hasDefaultCursor />}
			</CasaBox>
			<CasaBox mb="8px" mt="16px"
				maxWidth="180px"
			>
				<CasaText
					id={`billing-account-name-${id}`}
					color={colorGreyShark}
					size="base"
					variant="regular"
				>
					{getCapitalizedName(billingAccountName)}
				</CasaText>
			</CasaBox>

			<CasaBox display="flex" flexDirection="column">
				<CasaBox
					display="inline-flex"
					flexDirection="row"
					mb="4px"
				>
					<CasaBox
						id={`lob-icon-${lob}-${id}`}
						display="block"
					>
						{isMobility ? (<Mobility size={14} variant="default" />) : (<Home size={14} variant="default" />)}
					</CasaBox>
					<CasaText
						ml="4px"
						id={`lob-${lob}-${id}`}
						color={colorTelusPurple}
						size="base"
						variant="medium"
					>
						{isMobility ? locale.app.mobilityShort : locale.app.ffh}
					</CasaText>
				</CasaBox>
				<CasaBox>
					{isCustomerId && (
						<CasaText
							id={`cid-${id}`}
							color={colorGreyShuttle}
							size="base"
							variant="medium"
							mb="4px"
						>
							{`${locale.ban.cid} ${customerId}`}
						</CasaText>
					)}
					{
						bans.map(({ status, value }) => (
							<CasaBox key={`ban-${value}-${id}`}>
								<BillingAccountNumber
									accountStatus={status}
									ban={value}
									id={`ban-${value}-${id}`}
								/>
							</CasaBox>
						))
					}
				</CasaBox>
			</CasaBox>
		</CasaBox>
	)
}

CasaCustomerInfo.defaultProps = {
	id: 'casa-customer-info',
	brand: 'telus',
	isCustomerId: false
}

CasaCustomerInfo.propTypes = {
	/** Id of the casa customer info wrapper for testing point of view */
	id: PropTypes.string,
	/** brand logo */
	brand: PropTypes.oneOf(['telus', 'koodo']),
	/** type of line of business */
	lob: PropTypes.oneOf(['ffh', 'mobility']),
	/** full name of billing account  */
	billingAccountName: PropTypes.string.isRequired,
	/** Do you want to show customer id */
	isCustomerId: PropTypes.bool.isRequired,
	/** customer id value */
	customerId: PropTypes.string,
	/** Array of object that containing status, value are required */
	bans: PropTypes.array.isRequired
}

export default CasaCustomerInfo
