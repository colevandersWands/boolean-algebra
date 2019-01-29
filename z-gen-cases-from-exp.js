function gen_cases_from_exp(f) {

  const num_args = f.length;

  // generate an array of all binary strings of size num_args
  const all_binary_strings = [];
  const max_binary = parseInt("1".repeat(num_args),2);
  for(let n = 0; n <= max_binary; n++){
    const bin_str = n.toString(2);
    const padded_str = bin_str.padStart(num_args,'0');
    all_binary_strings.push(padded_str);
  }

  // map each binary string to an array of booleans
  const to_boolean = (x) => Boolean(Number(x));
  const to_arr_o_bools = (str) => { return str.split('').map(to_boolean) };
  const arr_o_cases = all_binary_strings.map(to_arr_o_bools);

  // reverse for top->bottom alignment with nested if/elses
  arr_o_cases.reverse();
  
  // build a test_cases object around each array of booleans
  const cases = [];
  for (let args of arr_o_cases) {
    const _case = {};
    _case.name = String(args);
    _case.args = args;
    _case.expected = f(...args);
    cases.push(_case);
  };

  return cases

}