// // Require the Node Slack SDK package (github.com/slackapi/node-slack-sdk)
// const { WebClient, LogLevel } = require("@slack/web-api");

// // WebClient instantiates a client that can call API methods
// // When using Bolt, you can use either `app.client` or the `client` passed to listeners.
// const client = new WebClient('xoxb-2285765140-4323463773554-MjoUs4fqX8AyzBwAca4Rw5Ss', {
//   // LogLevel can be imported and used to make debugging simpler
//   logLevel: LogLevel.ERROR
// });
// // Store conversation history
// let conversationHistory;
// // ID of channel you watch to fetch the history for
// let channelId = "C24601";

// try {
//   // Call the conversations.history method using WebClient
//   const result = await client.conversations.history({
//     channel: channelId
//   });

//   conversationHistory = result.messages;

//   // Print results
//   console.log(conversationHistory.length + " messages found in " + channelId);
// }
// catch (error) {
//   console.error(error);
// }

const sampleMessageCallback = async ({ message, say }) => {
  try {
    //const greeting = message.matches[0];
    //await say(`${greeting}, how are you?`);
    await fetch("https://aametelskii.tpondemand.com/svc/hooks/in/96955542-0120-4382-af8d-287a1816188e", {
      method: "POST",
      body: JSON.stringify({
        message: message
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { sampleMessageCallback };
