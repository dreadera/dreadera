export const IS_DEVELOPMENT =
  process.env.NODE_ENV === "development" ||
  process.env.IS_DEVELOPMENT === "true";

export const IS_MAINTENANCE = process.env.IS_MAINTENANCE === "true";
