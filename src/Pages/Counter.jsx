import React from "react";
import { Content } from "../Component/Content";
import { Footer } from "../Component/Footer";
import { Header } from "../Component/Header";
import { Todo } from "../Component/Todo";

export const Counter = () => {
  return (
    <div>
      <Header />
      <Content />
      <Todo />
      <Footer />
    </div>
  );
};
