import { OptionType } from '@components/core/Select'

export const getQueryParams = (): OptionType => {
  const urlParams = new URLSearchParams(window.location.search)
  const params: OptionType = {}

  urlParams.forEach((value, key) => {
    params[key] = value.includes(',') ? value.split(',') : value
  })

  return params
}

export const updateUrlParams = (filters: {
  sorts: OptionType[]
  categories: OptionType[]
}) => {
  const newUrl = new URL(window.location.href)
  const urlParams = new URLSearchParams()

  Object.keys(filters).forEach((key) => {
    const value = filters[key]

    if (Array.isArray(value)) {
      const valueString = value.join(',')
      urlParams.set(key, valueString)
    }
  })

  newUrl.search = urlParams.toString()
  window.history.pushState({}, '', newUrl.toString())
}