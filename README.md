## Getting Started

These instructions will get a copy of the project running on your local machine.

### Prerequisites

* Node.js

```
$ brew install node
```

* An API key from https://developer.musicgraph.com/signup?


Clone the repo and install dependencies:

```
$ npm i
```
The 'dev' script is setup to pull an API_KEY from your bash environment. Define an API_KEY:

```
$ export MGRPH_KEY=yourAPIkey
```

Finally, run the app on a local server. Application will automatically launch in your default browser:

```
$ npm run dev 
```