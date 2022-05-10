---
title: "How to memoized a component in ReactJS to avoid rerendering component"
summary: "memo, useMemo and useCallback used to memoized data"
date: 2022-01-06
weight: 1
categories: ["tutorial", "reactjs", "web developmnet", "frontend engineer"]
author: "Nasrul Fuad"
draft: true

cover:
  image: ./images/concurrent-request-in-nodejs/concurrent-request-in-nodeJs-with-child-process.jpg
---

### Intro ⚡

Sebagian dari kita mungkin pernah dengar kata memo, useMemo dan useCallback di ReactJS, tapi kita ga tau fungsi dan perbedaan antara memo, useMemo dan useCallback, pada artikel ini kita akan belajar tentang perbedaan antara memo, useMemo
dan useCallback serta cara penggunaannya. ⚡⚡

<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" id="SvgjsSvg1001" width="600" height="600" version="1.1" class="svg-paper" viewBox="0 0 600 600"><title id="SvgjsTitle3868">x=x|y=x|dTest=0.0|sd=0.89|sm=0.05|ts=0.2 | generated with FlowLines</title><g id="SvgjsG3869"><polyline id="SvgjsPolyline3870" points="306.75,214.33 0,521.08" fill="none" stroke="#ffffff" stroke-width="1"/><polyline id="SvgjsPolyline3871" points="309.89,135.68 3.14,442.42" fill="none" stroke="#1e1d20" stroke-width="1"/><polyline id="SvgjsPolyline3872" points="293.38,303.22 589.9,6.7" fill="none" stroke="#1e1d20" stroke-width="1"/><polyline id="SvgjsPolyline3873" points="283.16,313.44 7.09,589.51" fill="none" stroke="#ffffff" stroke-width="1"/><polyline id="SvgjsPolyline3874" points="302.8,67.24 6.28,363.76" fill="none" stroke="#1e1d20" stroke-width="1"/><polyline id="SvgjsPolyline3875" points="316.97,204.11 511.24,9.84" fill="none" stroke="#ffffff" stroke-width="1"/><polyline id="SvgjsPolyline3876" points="290.24,381.88 596.99,75.13" fill="none" stroke="#ffffff" stroke-width="1"/><polyline id="SvgjsPolyline3877" points="280.02,392.1 75.52,596.6" fill="none" stroke="#ffffff" stroke-width="1"/><polyline id="SvgjsPolyline3878" points="285.49,9.03 9.42,285.1" fill="none" stroke="#ffffff" stroke-width="1"/><polyline id="SvgjsPolyline3879" points="320.11,125.45 442.81,2.75" fill="none" stroke="#ffffff" stroke-width="1"/><polyline id="SvgjsPolyline3880" points="297.33,450.31 593.85,153.79" fill="none" stroke="#1e1d20" stroke-width="1"/><polyline id="SvgjsPolyline3881" points="287.1,460.53 154.18,593.46" fill="none" stroke="#ffffff" stroke-width="1"/><polyline id="SvgjsPolyline3882" points="217.06,1.95 2.34,216.67" fill="none" stroke="#1e1d20" stroke-width="1"/><polyline id="SvgjsPolyline3883" points="313.03,57.02 364.15,5.89" fill="none" stroke="#ffffff" stroke-width="1"/><polyline id="SvgjsPolyline3884" points="294.19,528.97 590.71,232.45" fill="none" stroke="#1e1d20" stroke-width="1"/><polyline id="SvgjsPolyline3885" points="283.96,539.19 232.84,590.32" fill="none" stroke="#1e1d20" stroke-width="1"/><polyline id="SvgjsPolyline3886" points="138.4,5.09 5.48,138.01" fill="none" stroke="#ffffff" stroke-width="1"/><polyline id="SvgjsPolyline3887" points="301.27,597.4 597.79,300.88" fill="none" stroke="#ffffff" stroke-width="1"/><polyline id="SvgjsPolyline3888" points="59.74,8.23 8.62,59.35" fill="none" stroke="#1e1d20" stroke-width="1"/><polyline id="SvgjsPolyline3889" points="379.93,594.26 594.65,379.54" fill="none" stroke="#ffffff" stroke-width="1"/><polyline id="SvgjsPolyline3890" points="458.59,591.12 591.51,458.2" fill="none" stroke="#1e1d20" stroke-width="1"/><polyline id="SvgjsPolyline3891" points="527.03,598.21 598.6,526.64" fill="none" stroke="#ffffff" stroke-width="1"/></g></svg>

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
