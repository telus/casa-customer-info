import moment from 'moment'
import appLocale from './locales'

export const getCasaAppLocale = (manualOverride) => {
	try {
		const locale = manualOverride || moment.locale()
		return locale === 'fr' ? appLocale.fr : appLocale.en
	} catch (e) {
		return appLocale.en
	}
}
