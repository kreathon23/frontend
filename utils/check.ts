export const validate_product_id = (product_id: any) => {
  const is_valid_type = ((typeof product_id) == 'string')
  if (!is_valid_type) {
    return false;
  }
  const is_valid_number = !isNaN(Number(product_id));
  if (!is_valid_number) {
    return false;
  }
  const is_valid_length = (product_id.length == 13);
  if (!is_valid_length) {
    return false;
  }
  return true;
};