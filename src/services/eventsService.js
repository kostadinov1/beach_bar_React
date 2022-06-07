
export const getAllEvents = async () => {

    let response = await fetch('http://127.0.0.1:8000/event-create')

    let events = await response.json();

    let result = Object.values(events)

    return result
}