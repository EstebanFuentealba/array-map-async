/** @template T - Array item type */

interface Array<T> {
    /**
  * Performs the specified action for each element in an array.
  * @param arr Array of items to iterate over
  * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
  * @param x    An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
  */
    mapAsync<U>(
      callbackfn: (value: T, index?: number, array?: ReadonlyArray<T>) => U
    ): Promise<Array<U>>;
  }
  
  
Array.prototype.mapAsync = function mapAsync<T>(callbackfn: Function) {
  return this.reduce((previousValue, currentValue, currentIndex) => {
    return previousValue.then((results: Array<T>) => {
      return new Promise<Array<T>>(async (resolve) => {
        results.push(
          await callbackfn.call(this, currentValue, currentIndex, this)
        );
        resolve(results);
      });
    });
  }, Promise.resolve([]));
};
