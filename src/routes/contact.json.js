export const post = async (request) => {
  //get this using prefill link
  const formID = "1FAIpQLSdMMvK0wDsz_kCbtxi3_44tseD-SACbVO9WBXR8aBdeQ"
  
    const name = request.body.get("name");
    const email = request.body.get("email");
    const subject = request.body.get("subject");
    const message = request.body.get("message");

  const res =
    await fetch(`https://docs.google.com/forms/d/e/${formID}/formResponse?usp=pp_url&entry.1514311646=${name}&entry.247600294=${email}&entry.2065759336=${subject}&entry.27120800=${message}&submit=Submit
  `);

  if (res.status === 200) {
    return {
      status: 200,
      body: {
        message: "success",
      },
    };
  } else {
    return {
      status: 404,
      body: {
        message: "failed",
      },
    };
  }
};