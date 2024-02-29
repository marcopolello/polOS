import { useCallback } from "react";
import StyledSidebarButton from "components/system/StartMenu/Sidebar/StyledSidebarButton";
import { spotlightEffect } from "utils/spotlightEffect";
import { useCanHover } from "hooks/useCanHover";

type SidebarButton = {
  action?: () => void;
  active?: boolean;
  heading?: boolean;
  icon: React.JSX.Element;
  name: string;
  tooltip?: string;
};

export type SidebarButtons = SidebarButton[];

const SidebarButtonComponent: FC<SidebarButton> = ({
  action,
  active,
  heading,
  icon,
  name,
  tooltip,
}) => {
  const canMouseOver = useCanHover();

  return (
    <StyledSidebarButton
      ref={useCallback(
        (buttonRef: HTMLLIElement) =>
          canMouseOver && spotlightEffect(buttonRef, true),
        [canMouseOver]
      )}
      $active={active}
      aria-label={name}
      onClick={action}
      title={tooltip}
    >
      <figure>
        {icon}
        <figcaption>{heading ? <strong>{name}</strong> : name}</figcaption>
      </figure>
    </StyledSidebarButton>
  );
};

export default SidebarButtonComponent;
