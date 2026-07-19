import type { ContestInfo } from "./types";
import { getStorageLocal } from "./extension";

const KEY = "currentContest";

export async function saveContest(contest: ContestInfo) {
  const storage = getStorageLocal();
  if (!storage) {
    throw new Error("extension storage is unavailable");
  }

  await storage.set({
    [KEY]: contest,
  });
}

export async function loadContest(): Promise<ContestInfo | null> {
  const storage = getStorageLocal();
  if (!storage) {
    throw new Error("extension storage is unavailable");
  }

  const result = await storage.get(KEY);

  return (result as Record<string, unknown>)[KEY] as ContestInfo ?? null;
}
