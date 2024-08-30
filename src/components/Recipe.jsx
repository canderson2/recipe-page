import React from 'react';
import './Recipe.css';
import omelette from './image-omelette.jpeg'

function Recipe({ recipe }) {
  return (
    <section className="recipe-container">

      {/* image */ }
      <div className="image-container">
        <img className="recipe-image" src={omelette} />
      </div>
      
      <div className="recipe-content">

        {/* title and description */ }
        <div className="recipe-overview">
          <h1 className="text-preset-1 stone-900 u-push-bottom-24">{ recipe.title }</h1>
          <div className="text-preset-4 stone-600">
            {recipe.description}
          </div>
        </div>

        {/* prep overview */ }
        <div className="recipe-preparation">
          <h3 className="text-preset-3 u-push-bottom-16 rose-800">Preparation time</h3>
          <ul className="recipe-preparation-lines text-preset-4 stone-600">
            {Object.entries(recipe.preparation).map(([key, value]) => {
              return <li key={key} className="u-push-left-8"><b>{key}</b>: {value}</li>;
            })}
          </ul>
        </div>

        {/* ingredients */ }
        <div>
          <h3 className="text-preset-2 brown-800 u-push-bottom-24">Ingredients</h3>
          <ul className="ingredients-list text-preset-4 stone-600">
            {recipe.ingredients.map((ingredient) => {
              return <li key={ingredient}>{ingredient}</li>;
            })}
          </ul>
        </div>

        <hr />

        {/* instructions */ }
        <div>
          <h3 className="text-preset-2 brown-800">Instructions</h3>
          <ol className="instruction-list u-push-top-24 text-preset-4 stone-600">
            {Object.entries(recipe.instructions).map(([key, value], index) => {
              return <li key={key}><b>{key}</b>: {value}</li>;
            })}
          </ol>
        </div>

        <hr />

        {/* nutrition */ }
        <div className="recipe-nutrition">
          <h3 className="text-preset-2 brown-800">Nutrition</h3>
          <p className="text-preset-4 stone-600 u-push-top-24 u-push-bottom-24">{recipe.nutrition.note}</p>
          <table className="macro-table text-preset-4 stone-600">
            <tbody>
              {Object.entries(recipe.nutrition.values).map(([key, value]) => {
                return (
                  <tr key={key}>
                    <td className="macro-label">{key}</td>
                    <td className="macro-value text-preset-4__bold brown-800">{value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}

export default Recipe;
