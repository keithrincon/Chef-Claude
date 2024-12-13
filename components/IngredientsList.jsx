import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const IngredientsList = forwardRef((props, ref) => {
  const ingredientsListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className='ingredients-list' aria-live='polite'>
        {ingredientsListItems}
      </ul>
      {props.ingredients.length > 3 && (
        <div className='get-recipe-container'>
          <div ref={ref}>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
});

// Adding a display name for better debugging and to satisfy ESLint
IngredientsList.displayName = 'IngredientsList';

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of strings, required
  getRecipe: PropTypes.func.isRequired, // Function, required
};

export default IngredientsList;
