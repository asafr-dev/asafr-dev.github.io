import * as React from "react";
import { clsx } from "clsx";

export function Container(props: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-5xl px-4">{props.children}</div>;
}

export function Card(props: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx("rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200", props.className)}>
      {props.title ? (
        <div className="border-b border-zinc-100 px-5 py-4">
          <h2 className="text-sm font-semibold">{props.title}</h2>
        </div>
      ) : null}
      <div className="p-5">{props.children}</div>
    </div>
  );
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" }
>(function Button({ className, variant = "primary", ...props }, ref) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-zinc-400 disabled:opacity-50";
  const style =
    variant === "ghost"
      ? "bg-transparent text-zinc-900 hover:bg-zinc-100"
      : "bg-zinc-900 text-white hover:bg-zinc-800";
  return <button ref={ref} className={clsx(base, style, className)} {...props} />;
});

export function Badge(props: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-zinc-50 px-2 py-0.5 text-xs text-zinc-700 ring-1 ring-zinc-200">
      {props.children}
    </span>
  );
}
