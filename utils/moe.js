import ReactMoE, { MoEProperties } from 'react-native-moengage'

export const trackCustomEvent = (eventName, eventAttributes = {}) => {
  const properties = new MoEProperties()

  for (const key in eventAttributes) {
    if (eventAttributes.hasOwnProperty(key)) {
      properties.addAttribute(key, eventAttributes[key])
    }
  }

  ReactMoE.trackEvent(eventName, properties)
}

export const setMoeUser = user => {
  const { _id, id, username, gender, email, mobile, name } = user

  const userId = _id || id

  ReactMoE.setUserUniqueID(userId)

  !!username && ReactMoE.setUserName(username)
  !!name && ReactMoE.setUserFirstName(name)
  !!email && ReactMoE.setUserEmailID(email)
  !!mobile && ReactMoE.setUserContactNumber(mobile)
  !!gender && ReactMoE.setUserGender(gender)
  // add for location
}
