export class CounterService {
  inactiveToActiveCounter = 0;
  activeToInactiveCounter = 0;

  incrementInActiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to Active: ' + this.inactiveToActiveCounter);
  }
  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Active to Inactive: ' + this.activeToInactiveCounter);
  }
}
