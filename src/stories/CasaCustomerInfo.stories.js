import React from 'react'
import { storiesOf } from '@storybook/react'
import CasaCustomerInfo from '../CustomerInfo'

// lob: mobility | ffh
// brand: telus | koodo

storiesOf('CasaCustomerInfo', module)
	.add('Mobility with single Telus BAN', () => (
		<CasaCustomerInfo
			id='customer-info-mobility-single-ban'
			lob='mobility'
			brand='telus'
			billingAccountName='Test Billing Account Name'
			isCustomerId={false}
			customerId='Joe Doe'
			bans={[
					{
						status: 'open',
						value: '12345678'
					}
				]}
		/>
	))
	.add('Mobility with multiple Telus BANs', () => (
		<CasaCustomerInfo
			id='customer-info-mobility-single-ban'
			lob='mobility'
			brand='telus'
			billingAccountName='Test Billing Account Name'
			isCustomerId={false}
			customerId='Joe Doe'
			bans={[
					{
						status: 'open',
						value: '12345678'
					},
					{
						status: 'closed',
						value: '12345670'
					},
					{
						status: 'closed',
						value: '12345679'
					}
				]}
		/>
	))
	.add('Mobility with CID + multiple Telus BANs', () => (
		<CasaCustomerInfo
			id='customer-info-mobility-single-ban'
			lob='mobility'
			brand='telus'
			billingAccountName='Test Billing Account Name'
			isCustomerId={true}
			customerId='Joe Doe'
			bans={[
					{
						status: 'open',
						value: '12345678'
					},
					{
						status: 'closed',
						value: '12345670'
					},
					{
						status: 'closed',
						value: '12345679'
					}
				]}
		/>
	))
	.add('Home solutions with single Telus BAN', () => (
		<CasaCustomerInfo
			id='customer-info-ffh-single-ban'
			lob='ffh'
			brand='telus'
			billingAccountName='Test Billing Account Name'
			isCustomerId={false}
			customerId='Barba Smith'
			bans={[
					{
						status: 'open',
						value: '65285134'
					}
				]}
		/>
	))
	.add('Home solutions with multiple Telus BANs', () => (
		<CasaCustomerInfo
			id='customer-info-ffh-single-ban'
			lob='ffh'
			brand='telus'
			billingAccountName='Test Billing Account Name'
			isCustomerId={false}
			customerId='Barba Smith'
			bans={[
					{
						status: 'open',
						value: '65285134'
					},
					{
						status: 'closed',
						value: '65285135'
					},
					{
						status: 'closed',
						value: '65285136'
					}
				]}
		/>
	))
	.add('Home solutions with CID + multiple Telus BANs', () => (
		<CasaCustomerInfo
			id='customer-info-ffh-single-ban'
			lob='ffh'
			brand='telus'
			billingAccountName='Test Billing Account Name'
			isCustomerId={true}
			customerId='Barba Smith'
			bans={[
					{
						status: 'open',
						value: '65285134'
					},
					{
						status: 'closed',
						value: '65285135'
					},
					{
						status: 'closed',
						value: '65285136'
					}
				]}
		/>
	))
	.add('Home solutions with single Koodo BAN', () => (
		<CasaCustomerInfo
			id='customer-info-ffh-single-ban'
			lob='ffh'
			brand='koodo'
			billingAccountName='Test Billing Account Name'
			isCustomerId={false}
			customerId='Barba Smith'
			bans={[
					{
						status: 'open',
						value: '65416462'
					}
				]}
		/>
	))
	.add('Mobility with single Koodo BAN', () => (
		<CasaCustomerInfo
			id='customer-info-mobility-single-ban'
			lob='mobility'
			brand='koodo'
			billingAccountName='Test Billing Account Name'
			isCustomerId={false}
			customerId='Joe Doe'
			bans={[
					{
						status: 'open',
						value: '12345678'
					}
				]}
		/>
	))
	.add('Mobility with multiple Koodo BANs', () => (
		<CasaCustomerInfo
			id='customer-info-mobility-single-ban'
			lob='mobility'
			brand='koodo'
			billingAccountName='Test Billing Account Name'
			isCustomerId={false}
			customerId='Joe Doe'
			bans={[
					{
						status: 'open',
						value: '12345678'
					},
					{
						status: 'closed',
						value: '12345670'
					},
					{
						status: 'closed',
						value: '12345679'
					}
				]}
		/>
	))
	.add('Mobility with CID + multiple Koodo BANs', () => (
		<CasaCustomerInfo
			id='customer-info-mobility-single-ban'
			lob='mobility'
			brand='koodo'
			billingAccountName='Test Billing Account Name'
			isCustomerId={true}
			customerId='Joe Doe'
			bans={[
					{
						status: 'open',
						value: '12345678'
					},
					{
						status: 'closed',
						value: '12345670'
					},
					{
						status: 'closed',
						value: '12345679'
					}
				]}
		/>
	))
	.add('Home solutions with multiple Koodo BANs', () => (
		<CasaCustomerInfo
			id='customer-info-ffh-single-ban'
			lob='ffh'
			brand='koodo'
			billingAccountName='Test Billing Account Name'
			isCustomerId={false}
			customerId='Barba Smith'
			bans={[
					{
						status: 'open',
						value: '65285134'
					},
					{
						status: 'closed',
						value: '65285135'
					},
					{
						status: 'closed',
						value: '65285136'
					}
				]}
		/>
	))
	.add('Home solutions with CID + multiple Koodo BANs', () => (
		<CasaCustomerInfo
			id='customer-info-ffh-single-ban'
			lob='ffh'
			brand='koodo'
			billingAccountName='Test Billing Account Name'
			isCustomerId={true}
			customerId='Barba Smith'
			bans={[
					{
						status: 'open',
						value: '65285134'
					},
					{
						status: 'closed',
						value: '65285135'
					},
					{
						status: 'closed',
						value: '65285136'
					}
				]}
		/>
	))
