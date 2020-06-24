import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";
import NavigationMenu from "./NavigationMenu";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const maskTransitions = useTransition(showMenu, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(showMenu, null, {
    from: { transform: "translateX(-100%)", opacity: 0 },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  //   menu=absolute top-0 left-0 bg-white w-4/5 h-full p-3
  // mask menu=fixed top-0 left-0 w-full h-full bg-black-t-50

  return (
    <div>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>

      {maskTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="fixed top-0 left-0 w-full h-full bg-black-t-50 z-50"
              onClick={() => setShowMenu(!showMenu)}
            ></animated.div>
          )
      )}

      {menuTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="absolute top-0 left-0 bg-white w-4/5 h-full p-3 z-50"
            >
              <NavigationMenu closeMenu={() => setShowMenu(!showMenu)} />
            </animated.div>
          )
      )}
    </div>
  );
};

export default Navigation;
