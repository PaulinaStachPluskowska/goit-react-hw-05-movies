import css from "./Page404.module.css";

export const Page404 = () => {
  return (
    <div className={css.Container}>
      <p className={css.Info}>
        Ups... something get wrong, this page doesn't exist
      </p>
    </div>
  );
};