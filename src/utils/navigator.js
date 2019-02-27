export default class Navigator {
  static openRouter({ query = {}, name = "", type = "" } = {}) {
    let params = "";
    let formatQuery = query => {
      if (query) {
        for (let item in query) {
          let val = query[item];
          if (val) {
            params += `${item}=${val}&`;
          }
        }
      }
      params = params ? "?" + params : params;

      return params;
    };
    if (query) {
      params = formatQuery(query);
    }

    let url = `${location.origin}/${name}${params}`; // 拼接url

    if (type === "replace") {
      location.replace(url); // replace 跳转
    } else {
      location.href = url; // href 跳转
    }
  }
}
