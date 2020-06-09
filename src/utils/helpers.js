const safelyParseJSON = (str) => {
   // try...catch : marks a block of statements to try and specifies a response should an exception be thrown
   try {
      JSON.parse(str);
   } catch (err) {
      // if error, return the string as is
      return str;
   }
   return JSON.parse(str); // could be un defined
};

const isObject = (value) => {
   // boolean
   return (
      typeof value === "object" &&
      value !== null &&
      Array.isArray(value) === false
   );
};

const convertDataType = (str) => {
   if (str === "null") return null;
   if (str === "undefined") return undefined;
   if (str === "true") return true;
   if (str === "false") return false;
   // below note allows str == Number(str)
   // eslint-disable-next-line
   if (str == Number(str)) return Number(str);
   const parsedJSON = safelyParseJSON(str);
   if (Array.isArray(parsedJSON)) return parsedJSON;
   if (isObject(parsedJSON)) return parsedJSON;
   return str;
};

export { isObject, convertDataType, safelyParseJSON };
