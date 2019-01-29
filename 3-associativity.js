console.log('%c\nAssociativity', 'font-weight:bold')

console.log(`
"associative" means that if all operators are the same, 
it does not matter where the parenthesis go
`)

{ console.log('%c\n  || is associative ', 'font-style:italic');

  const a = (a,b,c) =>       (a || b) || c    ;
  const a_cases = gen_cases_from_exp(a);
  console.log(`a: ${a}`);
  // truth_table(a, a_cases)

  const b = (a,b,c) =>       a || (b || c)    ;
  console.log(`b: ${b}`);
  run_tests(b, a_cases);

};

{ console.log('%c\n  && is associative ', 'font-style:italic');

  const a = (a,b,c) =>       (a && b) && c    ;
  const a_cases = gen_cases_from_exp(a);
  console.log(`a: ${a}`);
  // truth_table(a, a_cases)

  const b = (a,b,c) =>       a && (b && c)    ;
  console.log(`b: ${b}`);
  run_tests(b, a_cases);

};