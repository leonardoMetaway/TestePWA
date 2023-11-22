export const formatarData = (data) => {
  // eu odeio essa função
  const dataFormatada = data.slice(0, 10)

  if (/^\d{2}\/\d{2}\/\d{4}$/.test(dataFormatada)) {
    const parts = dataFormatada.split('/')
    const day = parts[0]
    const month = parts[1]
    const year = parts[2]

    const outputDate = `${year}-${month}-${day}`
    return outputDate
  }
  else if (/^\d{4}-\d{2}-\d{2}$/.test(dataFormatada)) {
    const parts = dataFormatada.split('-')
    const year = parts[0]
    const month = parts[1]
    const day = parts[2]

    const outputDate = `${day}/${month}/${year}`
    return outputDate
  }

  else {
    return undefined
  }
}