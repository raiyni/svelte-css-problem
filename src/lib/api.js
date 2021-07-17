async function send({ method, path, data, token, headers, returnRaw }) {
    return new Promise()
  }

export function get(path) {
    return send({ method: "GET", path });
  }