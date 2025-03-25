class LinkedList {
  constructor() {
    this.next = null;
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    if (this.next === null) {
      this.next = new Node(value);
      this.head = this.next;
      this.tail = this.next;
    } else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }
    this.size++;
  }

  prepend(value) {
    if (this.next === null) {
      this.next = new Node(value);
      this.tail = this.next;
    } else {
      this.next = new Node(value, this.next);
    }
    this.head = this.next;
    this.size++;
  }

  at(index) {
    if (index >= this.size) return;
    let result = this.next;
    for (let i = 0; i < index; i++) {
      result = result.next;
    }
    return result;
  }

  pop() {
    if (this.size <= 1) {
      this.next = null;
      this.head = null;
      this.size = 0;
      return;
    }
    let newTail = this.next;
    for (let i = 0; i < this.size - 1; i++) {
      newTail = newTail.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.size--;
  }

  contains(search) {
    let pointer = this.next;
    for (let i = 0; i < this.size; i++) {
      if (pointer.value === search) return true;
      if (JSON.stringify(pointer.value) === JSON.stringify(search)) return true;
      pointer = pointer.next;
    }
    return false;
  }

  find(search) {
    let pointer = this.next;
    for (let i = 0; i < this.size; i++) {
      if (pointer.value === search) return i;
      if (JSON.stringify(pointer.value) === JSON.stringify(search)) return i;
      pointer = pointer.next;
    }
    return null;
  }

  toString() {
    let pointer = this.next;
    let listString = "";
    for (let i = 0; i < this.size; i++) {
      if (pointer.value === null) {
        listString += `(null)`;
      } else if () {

      } else {
        listString += `(${pointer.value}) => `;
      }
      pointer = pointer.next;
    }
    console.log(listString);
  }
}

class Node {
  constructor(content, next = null) {
    this.value = content;
    this.next = next;
  }
}

const myList = new LinkedList();
myList.append("haiiii helloooo !!!");
myList.prepend("hello yes");
myList.append({ column: 87, color: "pink" });
