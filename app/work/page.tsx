async function getRecipes() {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=recipe`
    );
  
    return res.json()
  }
  
  
  export default async function Recipes() {
  const recipes = await getRecipes();
  
    return (
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    );
  }