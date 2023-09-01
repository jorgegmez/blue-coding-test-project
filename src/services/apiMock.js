const API_URL = "http://api.giphy.com/v1/gifs/search";
const API_KEY = "pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa";

export async function getData(query = "all", offset = 1, limit = 5) {
  console.log("query", query);
  console.log(
    "url",
    `${API_URL}?api_key=${API_KEY}&q=${query}&offset=${offset}&limit=${limit}`
  );
  const res = await fetch(
    `${API_URL}?api_key=${API_KEY}&q=${query}&offset=${offset}&limit=${limit}`
  );

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting data");

  const { data } = await res.json();
  console.log("data", data);
  return data;
}

export async function sendData(payload) {
  try {
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Something went wrong, please try again!");
  }
}

export async function updateData(id, payload) {
  try {
    const res = await fetch(`${API_URL}/<something>/${id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
  } catch (err) {
    throw Error("Failed updating data");
  }
}
