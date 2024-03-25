import "./Title.css";

const Title = ({
  content,
  parentName,
  isSubtitle = false,
  isMainTitle = false,
}) => {
  return isMainTitle ? (
    <h1 className={`title ${parentName}__title`}>{content}</h1>
  ) : !isSubtitle ? (
    <h2 className={`title ${parentName}__title`}>{content}</h2>
  ) : (
    <h3 className={`subtitle ${parentName}__subtitle`}>{content}</h3>
  );
};

export default Title;
