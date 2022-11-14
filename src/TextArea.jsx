import React from 'react'
import PropTypes from 'prop-types'
import CasaNotification from '@telus/casa-notification'
import CasaColours from '@telus/casa-core-colours'
import FormLabel from '@telus/casa-form-label'

import {
	customer-infoContainer,
	Paragraph,
	customer-info,
	CounterContainer
} from './styles'

const {
	colorGreyRaven,
	colorCardinal
} = CasaColours
const COMMENT_MAX_LIMIT = 500

const Casacustomer-info = ({
	id,
	variant,
	hintPosition,
	hintText,
	tooltip,
	feedback,
	isRequired,
	placeHolder,
	onChange,
	onBlur,
	value,
	disabled,
	label,
	labelSize,
	maxCharacterLimit,
	height
}) => (
	<customer-infoContainer>
		<CounterContainer>
			<FormLabel
				id={`${id}-label`}
				isRequired={isRequired}
				hint={hintText}
				hintPosition={hintPosition}
				label={label}
				tooltip={tooltip}
				size={labelSize}
			/>
			{!disabled &&
				(
					<Paragraph
						id={`${id}-paragraph`}
						color={value?.length <= maxCharacterLimit ? colorGreyRaven : colorCardinal}
					>
						{`${value?.length}/${maxCharacterLimit}`}
					</Paragraph>
				)}
		</CounterContainer>
		<customer-info
			id={`${id}-customer-info`}
			variant={variant}
			placeholder={placeHolder}
			onChange={onChange}
			onBlur={onBlur}
			value={value}
			disabled={disabled}
			isRequired={isRequired}
			height={height}
		/>
		{feedback !== '' &&
			(
				<CasaNotification id={`${id}-notification`}
					dismissible={false}
				>
					{feedback}
				</CasaNotification>
			)}
	</customer-infoContainer>
)

Casacustomer-info.defaultProps = {
	variant: 'default',
	label: 'Comments',
	labelSize: 'sm',
	placeHolder: 'Enter a value',
	disabled: false,
	hintPosition: 'inline',
	hintText: '',
	tooltip: '',
	isRequired: false,
	value: '',
	feedback: '',
	maxCharacterLimit: COMMENT_MAX_LIMIT,
	height: '96px',
	onChange: () => { },
	onBlur: () => { }
}

Casacustomer-info.propTypes = {
	/** The actual value of the customer-info */
	value: PropTypes.string,
	/** Label text value */
	label: PropTypes.node,
	/** Label text size. Default is `sm`. */
	labelSize: PropTypes.oneOf(['sm', 'md']),
	/** The appearance of the customer-info and notification component */
	variant: PropTypes.oneOf(['default', 'error', 'success']),
	/** Determine whether the customer-info is disabled or not */
	disabled: PropTypes.bool,
	/** Hint message. Zero-length titles string are never displayed. */
	hintText: PropTypes.string,
	/** Configure the placement of the hint's position. Default is `inline`. */
	hintPosition: PropTypes.oneOf(['inline', 'below']),
	/** Tooltip message. Zero-length message string are never displayed. */
	tooltip: PropTypes.node,
	/** If `true`, the label will indicate that the input is required. */
	isRequired: PropTypes.bool,
	/** The feedback message that will be shown below the the customer-info  */
	feedback: PropTypes.string,
	/** use maxCharacterLimit to specify the maximum number of characters of the customer-info */
	maxCharacterLimit: PropTypes.number,
	/** Height of the customer-info */
	height: PropTypes.string,
	/** Id of the Input wrapper for testing point of view */
	id: PropTypes.string.isRequired,
	/** customer-info's placeholder */
	placeHolder: PropTypes.string,
	/** triggered on every key-stroke and may used to modify the redux state */
	onChange: PropTypes.func,
	/** handler used to change the redux state */
	onBlur: PropTypes.func
}

export default Casacustomer-info
