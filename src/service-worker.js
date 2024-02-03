importScripts("./ngsw-worker.js");

self.addEventListener("sync", (syncEvent) => {
  if (syncEvent.tag === "get-data") {
    syncEvent.waitUntil(getUserList());
  }
});

function getUserList() {
  fetch("https://jsonplaceholder.org/users")
    .then(() => Promise.resolve())
    .catch(() => Promise.reject());
}
