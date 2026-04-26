import { Bell, ChevronDown, Sparkles, Coins } from "lucide-react";

export function TopBar() {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-border/60 px-6">
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm font-medium transition-base hover:bg-accent">
          <Sparkles className="h-4 w-4 text-primary" />
          All Tech 1.0 Lite
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button className="rounded-lg p-2 text-muted-foreground transition-base hover:bg-accent hover:text-foreground">
          <Bell className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-1.5 rounded-lg border border-border bg-card/60 px-2.5 py-1 text-xs">
          <Coins className="h-3.5 w-3.5 text-primary" />
          <span className="font-medium">300</span>
        </div>
        <div className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60 text-xs font-semibold text-primary-foreground">
          A
        </div>
      </div>
    </header>
  );
}
