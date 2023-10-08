export const getAllMemes = async () => {
  const response = await fetch("https://api.imgflip.com/get_memes");
  const json = await response.json();
  return json;
};
