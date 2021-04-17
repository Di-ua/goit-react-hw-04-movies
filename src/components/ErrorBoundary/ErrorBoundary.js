import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, info) {
    // Если метод был вызван значит есть ошибка!
    // Устанавливаем состояние
    this.state({ hasError: true });
  }

  render() {
    // Если есть ошибка...
    if (this.state.hasError) {
       // Рендерим fallback UI
       return (
        <>
          <h1>Something went wrong, please try again later :(</h1>
        </>
      );
    }

    // Если все ок, рендерим детей
    return this.props.children;
  }
}

export default ErrorBoundary;