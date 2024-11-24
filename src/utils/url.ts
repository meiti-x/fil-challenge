export const getQueryParams = (): { [key: string]: string | string[] } => {
  const urlParams = new URLSearchParams(window.location.search)
  const params: { [key: string]: string | string[] } = {}

  urlParams.forEach((value, key) => {
    params[key] = value.includes(',') ? value.split(',') : value
  })

  return params
}

export const updateUrlParams = (filters: { [key: string]: string[] }) => {
  const newUrl = new URL(window.location.href)
  const urlParams = new URLSearchParams()

  Object.keys(filters).forEach((key) => {
    const value = filters[key]

    if (Array.isArray(value)) {
      const valueString = value.map((v) => v).join(',')
      urlParams.set(key, valueString)
    }
  })

  newUrl.search = urlParams.toString()
  window.history.pushState({}, '', newUrl.toString())
}
