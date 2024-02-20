"use client";

import AddEditNoteDialog from "@/components/AddEditNoteDialog";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  UserButton,
  auth,
  useAuth,
  useUser,
} from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import AIChatButton from "@/components/AIChatButton";

export default function NavBar() {
  const { userId } = useAuth();
  const { theme } = useTheme();

  const [showAddEditNoteDialog, setShowAddEditNoteDialog] = useState(false);

  return (
    <>
      <div className="absolute left-0 top-0 z-50 w-screen bg-transparent py-4">
        <div className="m-auto flex max-w-7xl flex-wrap items-center justify-end gap-3">
          <div className="flex items-center gap-2">
            {userId && (
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  baseTheme: theme === "dark" ? dark : undefined,
                  elements: {
                    avatarBox: { width: "2.5rem", height: "2.5rem" },
                  },
                }}
              />
            )}
            <ThemeToggleButton />
            {userId && <Button>Knowledge</Button>}
            <AIChatButton />
          </div>
        </div>
      </div>

      <AddEditNoteDialog
        open={showAddEditNoteDialog}
        setOpen={setShowAddEditNoteDialog}
      />
    </>
  );
}
