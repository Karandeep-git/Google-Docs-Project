// Define Liveblocks types for your application.
// https://liveblocks.io/docs/api-reference/liveblocks-react#Typing-your-data
declare global {
  interface Liveblocks {
    // Each user's Presence, for useMyPresence, useOthers, etc.
    Presence: Record<string, never>;

    // The Storage tree for the room, for useMutation, useStorage, etc.
    Storage: {
      leftMargin: number;
      rightMargin: number;
    };

    // Custom user info set when authenticating with a secret key.
    UserMeta: {
      id: string;
      info: {
        name: string;
        avatar: string;
        color: string;
      };
    };

    // Custom events, for useBroadcastEvent and useEventListener.
    RoomEvent: never;

    // Custom metadata set on threads, for useThreads, useCreateThread, etc.
    ThreadMetadata: Record<string, never>;

    // Custom room info set with resolveRoomsInfo, for useRoomInfo.
    RoomInfo: {
      id: string;
      name: string;
    };
  }
}

export {};
