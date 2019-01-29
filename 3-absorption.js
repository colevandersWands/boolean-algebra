console.log('%c\nAbsorption', 'font-weight:bold')

console.log(`
"absorbtion" allows you to remove extra operators and variable occurances
when the expression is in the proper form

this is useful when simplifying & refactoring boolean expressions
`)

{ console.log('%c\n  absorbtions', 'font-style:italic');

  const a = (a,b) =>       a || (a && b)    ;
  const a_cases = gen_cases_from_exp(a);
  console.log(`a: ${a}`);
  // truth_table(a, a_cases)

  const b = (a,b) =>            a           ;
  console.log(`b: ${b}`);
  run_tests(b, a_cases);


  const c = (a,b) =>       a && (a || b)    ;
  console.log(`c: ${c}`);
  run_tests(c, a_cases);

};