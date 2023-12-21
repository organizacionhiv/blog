"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import ReactQuill from "react-quill";

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
