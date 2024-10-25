export interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
  dargOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dargLeaveHandler(event: DragEvent): void;
}
