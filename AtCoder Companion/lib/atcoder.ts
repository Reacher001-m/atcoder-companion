import type { ContestInfo } from "./types";

export function getContestInfo(): ContestInfo {
  const name = document
    .querySelector("h1")
    ?.textContent?.trim() ?? "Unknown Contest";

  const times = document.querySelectorAll("time");

  const startText =
    times.length >= 1
      ? times[0].textContent?.trim() ?? ""
      : "";

  const endText =
    times.length >= 2
      ? times[1].textContent?.trim() ?? ""
      : "";

  function parseAtCoderTime(text: string): Date {
    // 2026-07-31(金) 19:00
    const normalized = text.replace(/\(.+?\)/, "");
    return new Date(normalized);
  }

  const startTime = parseAtCoderTime(startText);
  const endTime = parseAtCoderTime(endText);

  console.log("times:", times);
  console.log("start raw:", startTime);
  console.log("end raw:", endTime);
  console.log(document.querySelectorAll("time"));

  return {
    name,
    startTime,
    endTime,
    url: location.href,
  };
}

export function getRegisterButton(): HTMLButtonElement | null {
  const buttons = Array.from(document.querySelectorAll("button"));

  return (
    buttons.find((button) =>
      button.textContent?.trim().toLowerCase().includes("register"),
    ) ?? null
  );
}

export function isRegistered(): boolean {
  return getRegisterButton() === null;
}