console.log('%c\nDistributivity', 'font-weight:bold')

console.log(`
"distributive" means you can move a variable & operator inside parenthesis

this is useful when simplifying & refactoring boolean expressions
`)

{ console.log('%c\n || distributes over && ', 'font-style:italic');

  const a = (a,b,c) =>       a || (b && c)    ;
  const a_cases = gen_cases_from_exp(a);
  console.log(`a: ${a}`);
  // truth_table(a, a_cases)

  const b = (a,b,c) =>    (a || b) && (a || c)    ;
  console.log(`b: ${b}`);
  run_tests(b, a_cases);

};

{ console.log('%c\n && distributes over || ', 'font-style:italic');

  const a = (a,b,c) =>         a && (b || c)    ;
  const a_cases = gen_cases_from_exp(a);
  console.log(`a: ${a}`);
  // truth_table(a, a_cases)

  const b = (a,b,c) =>      (a && b) || (a && c)    ;
  console.log(`b: ${b}`);
  run_tests(b, a_cases);

};


