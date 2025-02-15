# Firebase Realtime Database Data Persistence Issue

This repository demonstrates a bug and its solution related to data persistence in the Firebase Realtime Database.  The issue involves data being lost after the application closes and reopens, despite successful writes to the database.  The solution implements offline persistence capabilities to ensure data persists locally until synchronization with the database is possible.  See the `bug.js` file for the problematic code and `bugSolution.js` for the corrected version.

## Bug Description

Data written to the Firebase Realtime Database is lost after the application closes and restarts. The `onValue` listener does not trigger when the app reopens, indicating a failure to retrieve the previously stored data.

## Solution

The solution involves enabling offline persistence in the Firebase Realtime Database. This allows the application to maintain a local cache of data, even when offline, ensuring that data persists across sessions.