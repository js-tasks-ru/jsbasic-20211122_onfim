let calculator = {
  read : function read(a, b){
    this.a = a;
    this.b = b;
    return this;
  },
  sum : function sum(a, b){
    return this.a + this.b;
  },
  mul : function mul(a, b){
    return this.a * this.b;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
