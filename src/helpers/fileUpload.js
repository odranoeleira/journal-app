export const fileUpload = async (file) => {
  const cloudUrl = "https://api.cloudinary.com/v1_1/odranoeleira/image/upload";

  const formData = new FormData();
  formData.append("upload_preset", "journal-app");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (resp.ok) {
      const cloudResp = await resp.json();

      return cloudResp.secure_url;
    } else {
      throw new Error(await resp.json());
    }
  } catch (error) {
    console.log(error);
  }
};
