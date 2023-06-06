import { RecipeList } from './RecipeList/RecipeList';
import initialRecipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Component } from 'react';
import { RecipeForm } from './RecipeForm/RecipeForm';

export class App extends Component {
  state = {
    recipes: initialRecipes,
    selectedImg: null,
  };



componentDidMount(){
  console.log('componentDidMount');
  const saveRecipes = localStorage.getItem('resipes');
  console.log(saveRecipes);

  if(saveRecipes !== null) {
    this.setState({recipes: JSON.parse(saveRecipes)});

  } else {
    this.setState({ recipes: initialRecipes })
    
  };
};

componentDidUpdate(prevProps, prevState) {
  console.log('componentDidUpdate');
  if (prevState.recipes !== this.state.recipes) {
    localStorage.setItem('resipes', JSON.stringify(this.state.recipes))
  };
};

addRecipe = newRecipe => {
  this.setState(prevStave => ({
    recipes: [...prevStave.recipes, newRecipe]
  }))
}

deleteRecipe = recipeId => {
 this.setState(prevState => ({
  recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId)
 }))
};





  render(){
    console.log('render');
    return (
      <Layout>
        <RecipeForm onSave={this.addRecipe}/>
       <RecipeList items={this.state.recipes} 
       onDelete={this.deleteRecipe}/>      
       <GlobalStyle/>
      </Layout>
    );
  }
};
