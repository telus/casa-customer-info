import moment from 'moment'
import appLocale from './locales'

export const getCasaAppLocale = (manualOverride) => {
	const locale = manualOverride || moment.locale()
	return locale === 'fr' ? appLocale.fr : appLocale.en
}
