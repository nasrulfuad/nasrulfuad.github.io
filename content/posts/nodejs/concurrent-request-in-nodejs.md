---
title: "Concurrent Request in NodeJs With Child Process"
summary: "We will learn how to make a heavy process to be executed by another process (child process)"
date: 2022-01-06
weight: 1
categories: ["tutorial", "nodejs", "web developmnet", "backend engineer"]
author: "Nasrul Fuad"
cover:
  image: ./images/concurrent-request-in-nodejs/concurrent-request-in-nodeJs-with-child-process.jpg
---

### Intro ⚡

When we create an application in NodeJS, our application runs sequentially, for example there is user A making a request to endpoint `/slow` and the endpoint is running a very heavy process, so when there is user B hits to the same
application but different endpoint e.g `/` while the process that belongs to A is still running, then user B will wait for user A's process to finish, so in this article we'll learn how to make our NodeJS application
run concurrently. ⚡⚡

<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720" preserveAspectRatio="xMaxYMax slice"><g transform="scale(0.7072691552062869)"><rect x="0" y="0" width="1018" height="1018" fill="none"/><g transform="translate(33.93,33.93) scale(13.573500000000001) rotate(0)"><rect width="20" height="2" fill="#FFFFFF"/><rect y="4" width="20" height="2" fill="#FFFFFF"/><rect y="8" width="20" height="2" fill="#FFFFFF"/><rect y="12" width="20" height="2" fill="#FFFFFF"/><rect y="16" width="20" height="2" fill="#FFFFFF"/></g><g transform="translate(373.27,33.93) scale(13.573500000000001) rotate(0)"><path d="M5 0H10L5 5L0 10V5L5 0Z" fill="#FFFFFF"/><path d="M20 15V20H15L20 15Z" fill="#FFFFFF"/><path d="M20 5V10L15 15L10 20H5L20 5Z" fill="#FFFFFF"/><path d="M15 0H20L5 15.0002L0 20.0002V15.0002L15 0Z" fill="#FFFFFF"/></g><g transform="translate(712.6,33.93) scale(13.573500000000001) rotate(0)"><path d="M10 5L5 0L0 5L5 10L0 15L5 20L10 15L15 20L20 15L15 10L20 5L15 0L10 5Z" fill="#1e1e1e"/></g><g transform="translate(33.93,373.27) scale(13.573500000000001) rotate(0)"><rect width="20" height="2" fill="#1e1e1e"/><rect y="4" width="20" height="2" fill="#1e1e1e"/><rect y="8" width="20" height="2" fill="#1e1e1e"/><rect y="12" width="20" height="2" fill="#1e1e1e"/><rect y="16" width="20" height="2" fill="#1e1e1e"/></g><g transform="translate(373.27,373.27) scale(13.573500000000001) rotate(0)"><path d="M10 5L5 0L0 5L5 10L0 15L5 20L10 15L15 20L20 15L15 10L20 5L15 0L10 5Z" fill="#FFFFFF"/></g><g transform="translate(712.6,373.27) scale(13.573500000000001) rotate(0)"><rect width="20" height="2" fill="#FFFFFF"/><rect y="4" width="20" height="2" fill="#FFFFFF"/><rect y="8" width="20" height="2" fill="#FFFFFF"/><rect y="12" width="20" height="2" fill="#FFFFFF"/><rect y="16" width="20" height="2" fill="#FFFFFF"/></g><g transform="translate(33.93,712.6) scale(13.573500000000001) rotate(0)"><path d="M5 0H10L5 5L0 10V5L5 0Z" fill="#FFFFFF"/><path d="M20 15V20H15L20 15Z" fill="#FFFFFF"/><path d="M20 5V10L15 15L10 20H5L20 5Z" fill="#FFFFFF"/><path d="M15 0H20L5 15.0002L0 20.0002V15.0002L15 0Z" fill="#FFFFFF"/></g><g transform="translate(373.27,712.6) scale(13.573500000000001) rotate(0)"><path d="M10 5L5 0L0 5L5 10L0 15L5 20L10 15L15 20L20 15L15 10L20 5L15 0L10 5Z" fill="#1e1e1e"/></g><g transform="translate(712.6,712.6) scale(13.573500000000001) rotate(0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" fill="#1e1e1e"/></g></g></svg>

---

Before we talk about how to make our nodejs application run concurrently, I think it's good to know the difference between concurrent and parallelism.

---

### What is Concurrency / Concurrent?

> "Concurrent or Concurrency means we can do several jobs one by one at a time."

For example, we eat -> drink -> open cellphone -> eat -> drink -> chat. This is an example of a concurrency process, at one time we did
one job but **WE CAN CHANGE JOBS**.

### What is Parallelism?

> "Parallelism means doing jobs at the same time."

For example, we eat while watching a movie, we cook while on the phone, we walking while looking at cell phone and etc. **WE DO SOME JOBS AT THE SAME TIME**.

Actually, we don't need to worry about the difference between concurrency and parallel, because when we create a concurrent application, it is usually already with parallel process,
we can change jobs and we can also do several jobs at once.

![Concurrency and Paralelism Diagram](/images/concurrent-request-in-nodejs/concurrent-paralel.png#center)

---

### Jump into the code ⚡️

For practice, we use ExpressJS as http server, you can clone from [my repository](https://github.com/nasrulfuad/concurrent-request-in-nodeJs-with-child-process), then install dependencies
using `npm install` or `yarn`. The project structure is like below.

```bash
.
├── node_modules/
├── package.json
├── index.js
├── my-heavy-process.js
├── README.md
└── .gitignore
```

---

Next we will create 2 endpoints, `/` and `/slow`

```javascript
// index.js
const app = require("express")();
const { fork } = require("child_process");

const PORT = 8888;

app.get("/", function (request, response) {
  response.send("This page should be fast");
  response.end();
});

app.get("/slow", function (request, response) {
  const fiveBillion = 5_000_000_000;
  let count = 0;

  for (let i = 0; i < fiveBillion; i++) {
    count += i;
  }

  response.send(`The final count is : ${count}`);
  response.end();
});

app.listen(PORT, function () {
  console.info(`Server is running on port ${PORT}`);
});
```

---

Run our application with `node index.js` then open `http://localhost:8888/` it will be loaded very fast, because there is no heavy process that need a lot of memory, but if we open `/slow` endpoint
it will be slow because there is a heavy process.

And then what's the problem ?? 🤔

Hmmmm the problem is when we open `/slow` endpoint and the process is not finished yet but we make another request on `/` endpoint it will wait for process at endpoint `/slow` finish. It means our application running in
sequential process or FIFO (First In First Out).

---

![sample-1](/images/concurrent-request-in-nodejs/sample-1.gif#center)

---

## Fix the problem

Now we update our `/slow` endpoint to run on concurrent requests,

Firstly, we fork the `my-heavy-process.js` file when user trying to call our `/slow` endpoint, so our heavy process will be processed in file that we forked.

```javascript
const childProcess = fork("./my-heavy-process.js");
```

**Note** : Import `fork` from `child_process` module, see second line in `index.js` file.

---

Next we send a data string "start" to the file we forked.

```javascript
childProcess.send("start", function (error) {
  if (error) {
    console.error("Child process error");
    console.error(error.message);
  }
});
```

---

Next we create a listener to capture incoming data from our child process (`my-heavy-process.js`) and then we will send it to the client.

```javascript
childProcess.on("message", function (data) {
  response.send(`The final count is : ${data}`);
  response.end();
});
```

---

So, our `/slow` endpoint will looks like this.

```javascript
// index.js
app.get("/slow", function (request, response) {
  const childProcess = fork("./my-heavy-process.js"); // <-- fork child process

  childProcess.send("start", function (error) {
    if (error) {
      console.error("Child process error");
      console.error(error.message);
    }
  });

  childProcess.on("message", function (data) {
    response.send(`The final count is : ${data}`);
    response.end();
  });
});
```

---

Now, we will focus in our child process or `my-heavy-process.js` file, we create a listener to capture the incoming data from `/slow` endpoint.

```javascript
// my-heavy-process.js
process.on("message", function (data) {
  // data will process here
});
```

---

If you remember that `/slow` endpoint send string "start" to the child process, so we will first check whether the data is the same as string "start" or not. If yes, run the heavy process or skip it and send the result to our
`/slow` endpoint then we kill the child process.

```javascript
// my-heavy-process.js
let count = 0;

if (data === "start") {
  const tenBillion = 5_000_000_000;

  for (let i = 0; i < tenBillion; i++) {
    count += i;
  }
}
```

---

So, the full code will be like this.

```javascript
// my-heavy-process.js
process.on("message", function (data) {
  let count = 0;

  if (data === "start") {
    const tenBillion = 5_000_000_000;

    for (let i = 0; i < tenBillion; i++) {
      count += i;
    }
  }

  process.send(count);

  process.exit(); // <-- kill child process
});
```

---

Now if we restart our application, your `/` endpoint will not wait for the process on `/slow` endpoint anymore.

![sample-1](/images/concurrent-request-in-nodejs/sample-2.gif#center)

---

## Conclusion

For easy to understand that our parent (`index.js`) send a heavy process to be executed by another (child process). Actually, to solve our problem (sequential process) there are several ways, we can use
**Clustering**, **Child Process** or **Worker Thread**, if you want to know more about the difference between them, read [here](https://qr.ae/pGmkrg).

Thank you for reading 🙂
