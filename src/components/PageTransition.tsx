"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { PropsWithChildren, ReactNode, useContext, useRef } from "react";

// workaround for framer-motion in nextjs app router
const FrozenRouter = (props: PropsWithChildren<{}>) => {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
};

export default function PageTransition({ children }: { children: ReactNode }) {
  const path = usePathname();
  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 2000;

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={path}
        initial={{
          x: windowWidth - 50,
          opacity: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        exit={{
          x: -windowWidth,
          opacity: 0,
        }}
        transition={{
          duration: 0.75,
        }}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}
