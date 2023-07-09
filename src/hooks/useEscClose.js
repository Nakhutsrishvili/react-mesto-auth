import React from "react";

const useEscClose = (isOpen, closeAllPopups) => {
  // Закрытие попапов по Escape
  React.useEffect(() => {
    function handleEscClose(event) {
      if (event.key === "Escape") {
        closeAllPopups();
      }
    }
    if (isOpen) document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [isOpen]);
};

export default useEscClose;
