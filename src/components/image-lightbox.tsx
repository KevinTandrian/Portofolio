"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Maximize2 } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  triggerClassName?: string;
  imageClassName?: string;
  children?: React.ReactNode;
}

export function ImageLightbox({
  src,
  alt,
  title,
  subtitle,
  triggerClassName = "",
  imageClassName = "",
  children,
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsOpen(true);
          }
        }}
        className={`group relative cursor-zoom-in transition-all duration-200 focus:outline-hidden ${triggerClassName}`}
        title="Klik untuk melihat dalam ukuran penuh"
      >
        {children ? (
          children
        ) : (
          <div className="relative h-full w-full overflow-hidden rounded-inherit">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className={imageClassName} />
            {/* Hover zoom overlay badge */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-2xs transition-opacity duration-200 group-hover:opacity-100">
              <div className="flex items-center gap-1.5 rounded-full bg-background/95 px-3 py-1.5 text-xs font-semibold text-foreground shadow-xl">
                <Maximize2 className="h-3.5 w-3.5 text-amber-500" />
                <span>Lihat Ukuran Penuh</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[95vw] w-[95vw] lg:max-w-6xl p-4 sm:p-6 bg-card/98 backdrop-blur-xl border border-border/80 shadow-2xl rounded-2xl sm:rounded-3xl">
          <DialogHeader className="mb-3 flex flex-row items-start justify-between">
            <div>
              <DialogTitle className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                <span>{title}</span>
              </DialogTitle>
              {subtitle && (
                <DialogDescription className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                  {subtitle}
                </DialogDescription>
              )}
            </div>
          </DialogHeader>

          {/* Full-size high resolution image view container */}
          <div className="relative flex min-h-[50vh] max-h-[82vh] w-full items-center justify-center overflow-auto rounded-xl border border-border/60 bg-black/5 dark:bg-black/50 p-2 sm:p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="max-h-[78vh] w-auto max-w-full object-contain rounded-lg shadow-2xl transition-all"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
