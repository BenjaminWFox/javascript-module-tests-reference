import * as numProvider from './number-provider'

describe('the default methods', () => {
  it('should call the correct math method when its property method is called', () => {
    const doubleSpy = jest.spyOn(numProvider, 'doubleNumber')

    const result = numProvider.default.double(1)

    expect(result).toBe(2)
    expect(doubleSpy).toHaveBeenCalledTimes(1)
  })
})
