import PropTypes from 'prop-types';

/**
 * Renders a view title with the provided title text.
 *
 * @param {Object} props - The props object containing the title.
 * @param {string} props.title - The text to be displayed as the title.
 * @return {JSX.Element} - The rendered view title component.
 */
export function ViewTitle({ title }) {
    return <h1 style={{ fontWeight: "bolder", fontStyle: "italic", color: "rgb(0,36,89)" }}>{title}</h1>
}

ViewTitle.propTypes = {
    title: PropTypes.string.isRequired
};
