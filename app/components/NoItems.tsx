import { File } from "lucide-react";

export function NoItems() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] rounded-md border border-dashed p-8 text-center animate-in fade-in-50 mt-10">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <File className="h-8 w-8 text-primary" />
      </div>
      <h2 className="mt-6 text-xl font-semibold">
        Sorry 🥺 No listings for this category found...
      </h2>
      <p className="mt-2 text-sm text-center leading-6 text-muted-foreground">
        Please check another category or make your own listing
      </p>
    </div>
  );
}
