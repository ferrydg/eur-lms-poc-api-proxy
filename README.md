# An API-proxy of the Erasmus University for the LMS PoC with Brightspace

This a proof-of-concept API-proxy based on the [OAuth 2.0 Client Example](https://github.com/Brightspace/oauth2.0-client-example) by D2L Company.

## How to run this sample

This sample is not production-ready as-is, and is meant to only run locally.

### Pre-requisites

This sample uses [Node.js](https://nodejs.org), and it must be installed before proceeding.

Use `https://localhost:3001/callback` when providing the redirect URI during application registration.

### Environment variables

These environment variables must be set:

* CLIENT_ID
  * The OAuth 2.0 client ID (available from the Brightspace OAuth 2.0 registration page)
* CLIENT_SECRET
  * The OAuth 2.0 client secret (available from the Brightspace OAuth 2.0 registration page)
* HOST_URL
  * The URL of the Brightspace instance (e.g. `https://myschool.brightspace.com`)

A file named `.devenv.json` with the following structure can be used to automatically set environment variables:

```js
{
    "CLIENT_ID": "<client_id>",
    "CLIENT_SECRET": "<client_secret>",
    "HOST_URL": "<host_url>"
}
```

### Running the sample

Run the following:
```
npm install
npm run dev
```

Then navigate to `https://localhost:3001/`.
And then navigate to `https://localhost:3001/upsert-courseoffering`.
