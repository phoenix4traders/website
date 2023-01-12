

export const sendResponse = (message, subject, callback, resetForm) => {
  
  const discordUrl = process.env.DISCORD_URL;

  const discord = {
    content: `You got a new Message form PhoeniX Website`,
    embeds: [
      {
        title: subject,
        description: `${message}`,
      },
    ],
  };

  fetch( discordUrl,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(discord),
    }
  ).then((res) => {
    console.log(res);
    callback(res, resetForm);
  });
};
