
const url = 'http://127.0.0.1:8000/single-event/'


export const getSingleEvent = async (id) => {
    let response = await fetch(url + (id))
    let event = await response.json()
    return event
}