In a Firebase project, I'm encountering an issue where data isn't persisting correctly across sessions.  Specifically, I'm using the Firebase Realtime Database, and after closing and reopening the app, my data is lost. I've confirmed that the data is correctly written to the database using the console, but it fails to load on subsequent app launches. My code uses `onValue()` to listen for changes, but it's not triggering when the app restarts.

```javascript
//Relevant Code Snippet
firebase.database().ref('/myData').on('value', (snapshot) => {
  const data = snapshot.val();
  // ... process data ...
});
```