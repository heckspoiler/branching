'use client';
// React Imports
import React, { useEffect, useRef, useState } from 'react';

// CSS
import styles from './InputField.module.css';

// GSAP
import gsap from 'gsap';
import { Draggable } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import InputFieldForm from './InputFieldContent/InputFieldForm';

gsap.registerPlugin(Draggable, useGSAP);

export default function InputField() {
  const draggableRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useGSAP(() => {
    Draggable.create(draggableRef.current, {
      type: 'x,y',
      edgeResistance: 1,
      bounds: window,
      inertia: true,
      autoScroll: 1,
      dragClickables: false,
      onClick: () => setIsDragging(false),
      onDragEnd: () => setIsDragging(false),
    });
  });

  useEffect(() => {
    console.log(isClosed);
  }, [isClosed]);

  return (
    <div ref={draggableRef} className={styles.Main}>
      <div className={styles.FoldArrowContainer}>
        <div
          className={styles.FoldArrow}
          onClick={() => setIsClosed(!isClosed)}
          data-clickable="true"
          style={{
            cursor: 'pointer',
            transform: isClosed ? 'rotate(0deg)' : 'rotate(180deg)',
          }}
        ></div>
      </div>
      <div
        className={`${styles.Container} ${
          isClosed ? styles.FormContainerClosed : ''
        }`}
      >
        <div
          className={`${styles.FormContainer} ${
            isClosed ? styles.FormContainerClosed : ''
          }`}
        >
          <InputFieldForm />
        </div>
      </div>
    </div>
  );
}
