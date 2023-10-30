export type GetFormEntriesResponse = { [k: string]: any }


export function getFormEntries (data: FormData): GetFormEntriesResponse {
    let response: GetFormEntriesResponse = {}

    for (const [ key, value ] of data.entries()) {
      if (!response[ key ]) response[key] = value // if not in response => add to response
      else {
        if (Array.isArray(response[key])) response[key].push(value) // if in response as an array => push to array
        else response[key] = [ response[key], value ] // if in response but not as an array yet => convert to array
      }
    }

    return response
}
