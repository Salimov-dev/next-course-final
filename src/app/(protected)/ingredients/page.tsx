import IngredientsTable from "@/components/UI/tables/Ingredients";
import IngredientForm from "@/forms/ingredient.form";

const IngredientsPage = () => {
  return (
    <div style={{ height: "fit-content" }}>
      <IngredientForm />
      <IngredientsTable />
    </div>
  );
};

export default IngredientsPage;
