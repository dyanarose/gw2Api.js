export const defaultLang = null;
export const withCredentials = false;
export function createUrl(location){
  return url + prefix.v2 + location;
}
var url = 'https://api.guildwars2.com';
var prefix = {v2: '/v2/'};
