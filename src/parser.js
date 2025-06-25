export default (data, format) => {
  if (format === 'json') return JSON.parse(data);
  throw new Error(`Unsupported format: ${format}`);
};