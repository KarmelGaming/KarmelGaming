import "./Title.css";

const Title = ({
  children,
  parentName,
  isSubtitle = false,
  isMainTitle = false,
}) => {
  return isMainTitle ? (
    <h1 className={`main__title ${parentName}__title`}>{children}</h1>
  ) : !isSubtitle ? (
    <h2 className={`title ${parentName}__title`}>{children}</h2>
  ) : (
    <h3 className={`subtitle ${parentName}__subtitle`}>{children}</h3>
  );
};

export default Title;
