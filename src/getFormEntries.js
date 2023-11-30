/** @typedef { { [k: string]: any } } GetFormEntriesResponse */


/**
 * Recieves Form Data and responds with an Object.
 * Converts `<input name="foo" value="bar" />` into `{ foo: 'bar' }`.
 * Converts `<input name="image" />` into `{ image: File }`.
 * Converts `<input name="images" multiple />` into `{ images: File[] }`.
 * @param { FormData } data 
 * @returns { GetFormEntriesResponse }
 */
export function getFormEntries(data) {
  /** @type { GetFormEntriesResponse } */
  let response = {}

  for (const [key, value] of data.entries()) {
    if (!response[key]) response[key] = value // if not in response => add to response
    else {
      if (Array.isArray(response[key])) response[key].push(value) // if in key is an array => push to key
      else response[key] = [response[key], value] // if in key is not as an array yet => convert to array
    }
  }

  return response
}
