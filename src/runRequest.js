export default async function runRequest(body) {
    const response = await fetch("/_search", {
        // const response = await fetch("http://search-dtv54-z4r7cde367uncwqin25jd23g2q.us-east-1.es.amazonaws.com/_search", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
    });
    return response.json();
}
