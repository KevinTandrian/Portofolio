import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const mdxComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-8 mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-8 mb-3 text-2xl font-semibold tracking-tight text-foreground border-b border-border/40 pb-2",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-6 mb-2 text-xl font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 text-muted-foreground [&:not(:first-child)]:mt-4", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-4 ml-6 list-disc space-y-2 text-muted-foreground", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-4 ml-6 list-decimal space-y-2 text-muted-foreground", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("leading-relaxed", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "mt-6 border-l-4 border-primary pl-4 italic text-muted-foreground bg-muted/30 py-2 rounded-r-md",
        className
      )}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-8 border-border" {...props} />,
  a: ({ className, href = "", ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link
          href={href}
          className={cn("font-medium text-primary underline underline-offset-4 hover:opacity-80 transition-opacity", className)}
          {...props}
        />
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("font-medium text-primary underline underline-offset-4 hover:opacity-80 transition-opacity", className)}
        {...props}
      />
    );
  },
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        "my-4 overflow-x-auto rounded-lg border border-border bg-muted/60 p-4 font-mono text-sm leading-relaxed text-foreground",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "rounded bg-muted px-1.5 py-0.5 font-mono text-sm font-medium text-foreground",
        className
      )}
      {...props}
    />
  ),
  Callout: ({
    title,
    children,
    type = "info",
  }: {
    title?: string;
    children: React.ReactNode;
    type?: "info" | "warning" | "success";
  }) => {
    const borderColors = {
      info: "border-blue-500/50 bg-blue-500/10 text-blue-900 dark:text-blue-200",
      warning: "border-amber-500/50 bg-amber-500/10 text-amber-900 dark:text-amber-200",
      success: "border-emerald-500/50 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
    };

    return (
      <div className={cn("my-6 rounded-lg border p-4", borderColors[type])}>
        {title && <h4 className="font-semibold mb-1 text-sm tracking-wide">{title}</h4>}
        <div className="text-sm opacity-90">{children}</div>
      </div>
    );
  },
};
