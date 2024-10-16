import { Request, Response, NextFunction } from "express";
import { ZodError } from "@jasper-samples-bookverse/common";

export function handleError(
  error: Error | ZodError,
  request: Request,
  response: Response,
  next: NextFunction
): void {
  console.error(error.stack);

  if (error instanceof ZodError) {
    response.status(400).json({
      error: "Validation failed. Please check the errors below.",
      issues: error.errors,
    });
  } else {
    response.status(500).json({
      error:
        error.message ||
        "An unknown error occurred. Please check the server logs.",
    });
  }
}
