import React from 'react'
import {
	render, screen, cleanup
} from '@testing-library/react'
import CasaCustomerInfo from '../CustomerInfo'

describe('casa customer info component', () => {
	const bans = [
		{
			status: 'open',
			value: '12345678'
		},
		{
			status: 'closed',
			value: '12345679'
		}
	]

	afterEach(() => {
		cleanup()
	})

	it('should display the telus brand logo', () => {
		render(
			<CasaCustomerInfo
				lob='ffh'
				billingAccountName="Test"
				id="id"
				brand='telus'
				bans={bans}
			/>
		)
		expect(screen.getByTestId('telus-brand-logo-id')).toBeInTheDocument()
	})

	it('should display the koodo brand logo', () => {
		render(
			<CasaCustomerInfo
				lob='ffh'
				billingAccountName="Test"
				id="id"
				brand='koodo'
				bans={bans}
			/>
		)
		expect(screen.getByTestId('koodo-brand-logo-id')).toBeInTheDocument()
	})

	it('should display billing account name', () => {
		render(
			<CasaCustomerInfo
				lob='ffh'
				billingAccountName="Test"
				id="id"
				bans={bans}
			/>
		)
		expect(screen.getByTestId('billing-account-name-id')).toHaveTextContent('Test')
	})

	it('should display mobility lob', () => {
		render(
			<CasaCustomerInfo
				lob='mobility'
				billingAccountName="test"
				id="id"
				bans={bans}
			/>
		)
		expect(screen.getByTestId('lob-icon-mobility-id')).toBeInTheDocument()
		expect(screen.getByTestId('lob-mobility-id')).toHaveTextContent('Mobility')
	})

	it('should display customer id', () => {
		const cid = '1234'
		render(
			<CasaCustomerInfo
				isCustomerId
				customerId={cid}
				lob='ffh'
				billingAccountName="test"
				id="id"
				bans={bans}
			/>
		)
		expect(screen.getByTestId('cid-id')).toHaveTextContent(`CID ${cid}`)
	})

	it('should display open ban', () => {
		render(
			<CasaCustomerInfo
				lob='mobility'
				billingAccountName='test'
				id='id'
				brand='telus'
				isCustomerId={false}
				customerId='Joe Doe'
				bans={bans}
			/>
		)
		expect(screen.getByTestId('ban-12345678-id')).toHaveTextContent('BAN 12345678')
	})

	it('should display close ban', () => {
		render(
			<CasaCustomerInfo
				lob='mobility'
				billingAccountName='test'
				id='id'
				brand='telus'
				isCustomerId={false}
				customerId='Joe Doe'
				bans={bans}
			/>
		)
		expect(screen.getByTestId('ban-12345679-id')).toHaveTextContent('BAN 12345679')
	})
})
