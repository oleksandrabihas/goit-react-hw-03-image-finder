import { BtnLoadMore } from "./Button.styled";

export const Button = ({ onClick }) => {
  return (
    <BtnLoadMore className="smooth-scroll-button" type="button" onClick={onClick}>
      Load more
    </BtnLoadMore>
  );
};