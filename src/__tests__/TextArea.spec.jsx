import * as React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Casacustomer-info from '../customer-info'

configure({ adapter: new Adapter() })

describe('Casacustomer-info component', () => {
	it('should display customer-info', () => {
		const wrapper = mount(
			<Casacustomer-info
				id="customer-info"
			/>
		)
		wrapper.find('#customer-info-customer-info').at(0).simulate('change')
		wrapper.find('#customer-info-customer-info').at(0).simulate('blur')
		expect(wrapper.find('#customer-info-customer-info').at(0).children.length).toBe(1)
	})

	it('should display customer-info with notification', () => {
		const wrapper = mount(
			<Casacustomer-info
				id="customer-info"
				feedback="this is notification"
			/>
		)
		expect(wrapper.find('#notification-text').at(0).text()).toBe('this is notification')
	})

	it('should display customer-info with max characters limit', () => {
		const wrapper = mount(
			<Casacustomer-info
				id="customer-info"
				maxCharacterLimit={5}
			/>
		)
		expect(wrapper.find('#customer-info-paragraph').at(0).text()).toBe('0/5')
	})

	it('should display disabled customer-info', () => {
		const wrapper = mount(
			<Casacustomer-info
				id="customer-info"
				disabled
			/>
		)
		expect(wrapper.find('#customer-info-customer-info').at(0).children.length).toBe(1)
	})

	it('should display error customer-info', () => {
		const wrapper = mount(
			<Casacustomer-info
				id="customer-info"
				variant="error"
			/>
		)
		expect(wrapper.find('#customer-info-customer-info').at(0).children.length).toBe(1)
	})

	it('should display success customer-info', () => {
		const wrapper = mount(
			<Casacustomer-info
				id="customer-info"
				variant="success"
			/>
		)
		expect(wrapper.find('#customer-info-customer-info').at(0).children.length).toBe(1)
	})

	it('should trigger onChange function', () => {
		const setCommentText = jest.fn()
		const updateCommentText = jest.fn()
		const commentText = ''
		const mockEvent = {
			target: {
				value: 'new comment'
			}
		}
		const wrapper = mount(
			<Casacustomer-info
				id="customer-info"
				maxLength="1000"
				placeHolder="Placeholder customer-info"
				styles={{
					border: '1px solid #444',
					borderRadius: '5px'
				}}
				onChange={setCommentText}
				onBlur={updateCommentText}
				value={commentText}
			/>
		)
		wrapper.find('customer-info').simulate('change', mockEvent)
		expect(setCommentText).toHaveBeenCalledWith(expect.objectContaining(mockEvent))
	})
})
