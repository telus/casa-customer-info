import React from 'react'
import { storiesOf } from '@storybook/react'
import CasaCustomerInfo from '../customer-info'

storiesOf('Casa customer-info', module)
	.add('customer-info default', () => (
		<CasaCustomerInfo
			id='customer-info_default'
			variant='default'
			placeholder='Enter a value'
			onChange='() => { }'
			onBlur='() => { }'
			value='customer-info default'
			disabled='false'
			isRequired='false'
			height='96px'
		/>
	))
	.add('customer-info default with notification', () => (
		<CasaCustomerInfo
			id='customer-info_default_notification'
			variant='default'
			placeholder='Enter a value'
			onChange='() => { }'
			onBlur='() => { }'
			value='customer-info default with notification'
			disabled='false'
			isRequired='false'
			height='96px'
			feedback="This is the notification"
		/>
	))
	.add('customer-info default with max characters limit', () => (
		<CasaCustomerInfo
			id='customer-info_default_notification'
			variant='default'
			placeholder='Enter a value'
			onChange='() => { }'
			onBlur='() => { }'
			value='customer-info default with max characters limit'
			disabled='false'
			isRequired='false'
			height='96px'
			maxCharacterLimit={5}
		/>
	))
	.add('customer-info default disabled', () => (
		<CasaCustomerInfo
			id='customer-info_default_disabled'
			variant='default'
			placeholder='Enter a value'
			onChange='() => { }'
			onBlur='() => { }'
			value='customer-info disabled'
			disabled='true'
			isRequired='false'
			height='96px'
		/>
	))
	.add('customer-info error', () => (
		<CasaCustomerInfo
			id='customer-info_error'
			variant='error'
			placeholder='Enter a value'
			onChange='() => { }'
			onBlur='() => { }'
			value='customer-info error'
			disabled='false'
			isRequired='false'
			height='96px'
		/>
	))
	.add('customer-info success', () => (
		<CasaCustomerInfo
			id='customer-info_success'
			variant='success'
			placeholder='Enter a value'
			onChange='() => { }'
			onBlur='() => { }'
			value='customer-info success'
			disabled='false'
			isRequired='false'
			height='96px'
		/>
	))
