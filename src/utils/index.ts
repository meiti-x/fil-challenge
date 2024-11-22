export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export const toPersianNum = (input: string | number): string => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
  const inputString = input.toString()

  return inputString.replace(/\d/g, (digit) => persianDigits[+digit])
}
