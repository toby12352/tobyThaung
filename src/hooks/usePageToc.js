import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Scroll-spy + mobile TOC helpers shared by case-study pages.
 * @param {{ id: string, label: string }[]} items
 */
export function usePageToc(items) {
  const [activeId, setActiveId] = useState(items[0]?.id || "");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const mobileTocRef = useRef(null);
  const dragRef = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });

  const updateMobileScrollHints = useCallback(() => {
    const el = mobileTocRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(maxScroll - el.scrollLeft > 2);
  }, []);

  const itemIds = items.map((item) => item.id).join(",");

  useEffect(() => {
    const idList = itemIds.split(",").filter(Boolean);
    if (!idList.length) return undefined;

    const sections = idList
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const lastId = idList[idList.length - 1];

    const updateActiveFromScroll = () => {
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const nearBottom = scrollBottom >= docHeight - 80;

      if (nearBottom) {
        setActiveId(lastId);
        return;
      }

      const offset = Math.max(96, window.innerHeight * 0.2);
      let currentId = sections[0].id;

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= offset) {
          currentId = section.id;
        } else {
          break;
        }
      }

      setActiveId(currentId);
    };

    updateActiveFromScroll();
    window.addEventListener("scroll", updateActiveFromScroll, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveFromScroll);

    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("resize", updateActiveFromScroll);
    };
  }, [itemIds]);

  useEffect(() => {
    const el = mobileTocRef.current;
    if (!el) return undefined;

    updateMobileScrollHints();
    el.addEventListener("scroll", updateMobileScrollHints, { passive: true });
    window.addEventListener("resize", updateMobileScrollHints);

    return () => {
      el.removeEventListener("scroll", updateMobileScrollHints);
      window.removeEventListener("resize", updateMobileScrollHints);
    };
  }, [updateMobileScrollHints]);

  const handleTocClick = (event, id) => {
    if (dragRef.current.moved) {
      event.preventDefault();
      return;
    }
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  const scrollMobileToc = (direction) => {
    const el = mobileTocRef.current;
    if (!el) return;
    const amount = Math.max(120, el.clientWidth * 0.55);
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  const onDragStart = (clientX) => {
    const el = mobileTocRef.current;
    if (!el) return;
    dragRef.current = {
      active: true,
      startX: clientX,
      scrollLeft: el.scrollLeft,
      moved: false,
    };
    el.classList.add("is-dragging");
  };

  const onDragMove = (clientX) => {
    const el = mobileTocRef.current;
    if (!el || !dragRef.current.active) return;
    const delta = clientX - dragRef.current.startX;
    if (Math.abs(delta) > 4) dragRef.current.moved = true;
    el.scrollLeft = dragRef.current.scrollLeft - delta;
  };

  const onDragEnd = () => {
    const el = mobileTocRef.current;
    if (!el) return;
    dragRef.current.active = false;
    el.classList.remove("is-dragging");
    window.setTimeout(() => {
      dragRef.current.moved = false;
    }, 0);
  };

  return {
    items,
    activeId,
    handleTocClick,
    mobileTocRef,
    canScrollLeft,
    canScrollRight,
    scrollMobileToc,
    updateMobileScrollHints,
    onDragStart,
    onDragMove,
    onDragEnd,
  };
}
