import { useRef, useState, useEffect } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

interface SearchbarProps {
  height?: number;
  maxWidth?: number;
  placeholder?: string;
}

const Searchbar = ({
  height = 40,
  placeholder,
  maxWidth = 480,
}: SearchbarProps) => {
  const [focused, setFocused] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const activeElement = document?.activeElement?.tagName.toLowerCase();

      if (event.key === "/" && activeElement !== "input") {
        event.preventDefault();
        ref?.current?.focus();
      } else if (event.key === "Escape" && focused) {
        event.preventDefault();
        ref?.current?.blur();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [focused]);

  return (
    <div
      className="search-bar border-[1px] border-neutral-200 dark:border-neutral-750"
      style={{
        // height: `${height}px`,
        maxWidth: `${maxWidth}px`,
      }}
    >
      <div className="search-bar__icon text-neutral-600">
        <MagnifyingGlass size={14} weight="bold" />
      </div>
      <input
        ref={ref}
        type="text"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder || "Search for give-aways, airdrops,..."}
      />

      <div className="search-bar__shortcut">
        {!focused ? <span>/</span> : <span>ESC</span>}
      </div>
    </div>
  );
};

export default Searchbar;
