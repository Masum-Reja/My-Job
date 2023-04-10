import React, { Component } from "react";

class CategorySection extends Component {
  state = {
    categoryData: [],
  };

  componentDidMount() {
    fetch("category_data.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ categoryData: data.categorySection });
      });
  }

  render() {
    const { categoryData } = this.state;

    return (
      <div>
        {categoryData.map((category, index) => (
          <div key={index}>
            <img src={category.logo} alt={category.name} />
            <h2>{category.name}</h2>
            <p>Jobs available: {category.jobsAvailable}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CategorySection;
