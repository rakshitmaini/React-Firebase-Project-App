const functions = require('firebase-functions');
const admin = require('firebase-admin');
admininitializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloworld = functions.https.onRequest((request, response) => {
 response.send("Hello Rakshit!");
});

const createNotification = (notification) => {
    return admin.firestore().collection('notification')
    .add(notification)
    .onCreate(doc => console.log('notification added', doc));
}

exports.projectCreated =functions.firestore
    .document('project/{projectId}')
    .onCreate(doc => {
        const project = doc.data();
        const notification = {
            content: 'Added a new project',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FindValue.serverTimestamp()
        }

        return createNotification(notification);
    })