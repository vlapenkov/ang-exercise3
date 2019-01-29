/*
"total_count": 5,
  "incomplete_results": false,
  "items": [
    {
      "login": "Lapenkov",
      "id": 5585092,
      "node_id": "MDQ6VXNlcjU1ODUwOTI=",
      "avatar_url": "https://avatars1.githubusercontent.com/u/5585092?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Lapenkov",
      "html_url": "https://github.com/Lapenkov",
      "followers_url": "https://api.github.com/users/Lapenkov/followers",
      "following_url": "https://api.github.com/users/Lapenkov/following{/other_user}",
      "gists_url": "https://api.github.com/users/Lapenkov/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Lapenkov/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Lapenkov/subscriptions",
      "organizations_url": "https://api.github.com/users/Lapenkov/orgs",
      "repos_url": "https://api.github.com/users/Lapenkov/repos",
      "events_url": "https://api.github.com/users/Lapenkov/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Lapenkov/received_events",
      "type": "User",
      "site_admin": false,
      "score": 57.55315
    },
    */
export interface IResponse {
    total_count: number,
    incomplete_results: boolean,
    items: IUserItem[]
};

export interface IUserItem {
    "login": string,
    "id": number,
    "node_id": string,
    "avatar_url": string,
    "gravatar_id": string,
    "url": string,
    "html_url": string,
    "followers_url": string,
    "following_url": string,
    "gists_url": string,
    "starred_url": string,
    "subscriptions_url": string,
    "organizations_url": string,
    "repos_url": string,
    "events_url": string,
    "received_events_url": string,
    "type": string,
    "site_admin": boolean
    //"score": number
    
}
