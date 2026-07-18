import type { ContestInfo } from "./types";

export function getContestInfo(): ContestInfo {
  const name = document
    .querySelector("h1")
    ?.textContent?.trim() ?? "Unknown Contest";

  const times = document.querySelectorAll("time");

  const startTime =
    times.length >= 1
      ? times[0].getAttribute("datetime") ?? ""
      : "";

  const endTime =
    times.length >= 2
      ? times[1].getAttribute("datetime") ?? ""
      : "";

  return {
    name,
    startTime,
    endTime,
    url: location.href,
  };
}