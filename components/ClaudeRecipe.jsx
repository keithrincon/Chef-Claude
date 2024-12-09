import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

function ClaudeRecipe(props) {
  return (
    <section className='suggested-recipe-container' aria-live='polite'>
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
ClaudeRecipe.propTypes = {
  recipe: PropTypes.string.isRequired, // Ensures recipe is a required string
};

export default ClaudeRecipe;
