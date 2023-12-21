"use client";

import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Chat = () => {
  const { status } = useSession();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <ref href="https://chat.whatsapp.com/JrPx717KW3a1LzpMskJTgU">chat</ref>
    </div>
  );
};

export default Chat;
