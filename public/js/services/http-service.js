class HttpService {
  async ajax(method, url, data, headers) {
    const fetchHeaders = new Headers({
      "content-type": "application/json",
      ...(headers || {}),
    });

    const response = await fetch(url, {
      method,
      headers: fetchHeaders,
      body: data ? JSON.stringify(data) : undefined,
    });

    const text = await response.text();

    try {
      return text ? JSON.parse(text) : null;
    } catch (err) {
      console.error("Invalid JSON response:", text);
      throw err;
    }
  }
}

export const httpService = new HttpService();
