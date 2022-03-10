
    <script>
  let submitStatus;
  const submitForm = async (data) => {
    submitStatus = "submitting";
    const formData = new FormData(data.currentTarget);
    const res = await fetch("contact.json", {
      method: "POST",
      body: formData,
    });
    const { message } = await res.json();
    submitStatus = message;
  };
</script>
<svelte:head>
  <title>Contact</title>
</svelte:head>

<section>
{#if submitStatus == "submitting"}
  <p>Submitting...</p>
{:else if submitStatus == "failed"}
  <p>Form submission failed</p>
{:else if submitStatus == "success"}
  <p>Form submission successful</p>
{:else}
  <form on:submit|preventDefault={submitForm}>
    <div>
      <label for="">
        Name
        <input type="text" name="name" />
      </label>
    </div>
    <div>
      <label for="">
        Email
        <input type="email" name="email" />
      </label>
    </div>
        <div>
      <label for="">
        Email
        <input type="text" name="subject" />
      </label>
    </div>
        <div>
      <label for="">
        Email
        <input type="text" name="message" />
      </label>
    </div>
    <div>
      <input type="submit" />
    </div>
  </form>
{/if}

</section>

<style>
    section
    {
        min-height:100vh;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    form{
        width:50%;
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        background-color:grey;
    }
</style>