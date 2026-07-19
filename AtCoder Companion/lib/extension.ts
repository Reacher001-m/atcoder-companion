type ChromeStorageArea = {
  get: (keys: string) => Promise<Record<string, unknown>> | Record<string, unknown>;
  set: (items: Record<string, unknown>) => Promise<void> | void;
};

type ChromeLike = {
  runtime?: {
    sendMessage: (message: unknown) => Promise<unknown> | void;
    onMessage?: {
      addListener: (listener: (message: unknown) => void) => void;
    };
  };
  storage?: {
    local?: ChromeStorageArea;
  };
};

function getChrome(): ChromeLike {
  return (globalThis as typeof globalThis & { chrome?: ChromeLike }).chrome ?? {};
}

export function getRuntime() {
  const chrome = getChrome();

  return chrome.runtime;
}

export function getStorageLocal() {
  const chrome = getChrome();

  return chrome.storage?.local;
}
