console.log('%cthe set', 'font-weight:bold');

console.log(`
in boolean algebra there are only two values:
* true
* false

these two values correspond to the primitive type 'boolean'
`)

{
  const is_boolean = (a) =>      typeof a === 'boolean'     ;
  const bool_cases = [
      {name: 'true', args: [true], expected: true},
      {name: 'false', args: [false], expected: true}
    ];
  console.log(is_boolean);
  console.log(bool_cases);
  run_tests(is_boolean, bool_cases);
}