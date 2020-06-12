export class NoTableConfigError extends Error {
  constructor() {
    super('No table configuration was provided please ensure the value [tableConfig] is assigned');
  }
}
