export const parceDate = (date?: Date) => {
  return new Date(date ? date : Date.now()).toISOString().slice(0, 10);
};
