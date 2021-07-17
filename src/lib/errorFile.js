import { get } from './api'

// export function get(path) {
//     return new Promise()
// }

export async function doNothing() {
    await get('/')
    return Math.random()
}