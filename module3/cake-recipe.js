// Kata URL:
// https://www.codewars.com/kata/pete-the-baker/

function cakes (recipe, available) {
  // How many cakes could we make with each ingredient?
  const capacities =
    // For every ingredient...
    Object.keys(recipe).map((ing) => {
      if (!available[ing]) {
        return 0;
      }
      // Divide the available amount by what the recipe needs (rounded down)
      return Math.floor(available[ing] / recipe[ing]);
    });

  // Return the smallest amount of cakes we could make
  return Math.min(...capacities);
}
