/**
 * 
 * @param api string parameter where to send the request ( url )
 * @param credentials credentials body - { username, email, pass }
 * @returns response from the server
 */

const registerUser = async (api: string, credentials: userInfo) => {
  const result = await fetch(api, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(credentials)
  });

  return await result.json();
}

export default registerUser;