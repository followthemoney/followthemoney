const AUTH_URL =
  "https://access.followthemoney.site/auth/realms/meveo/protocol/openid-connect/token";

export const login = async (callback) => {
  const loginDetails = {
    client_id: "meveo-web",
    username: "invited",
    password: "public",
    grant_type: "password",
    client_secret: "afe07e5a-68cb-4fb0-8b75-5b6053b07dc3",
  };
  const response = await fetch(AUTH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(loginDetails),
  });
  console.log("response :", response);
  const result = await response.json();
  console.log("result :", result);
  callback(result);
};
