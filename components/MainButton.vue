<template>
  <div class="m-auto flex justify-center gap-5">
    <TButton type="primary" label="primary button"></TButton>
    <TButton type="secondary" label="secondary button"></TButton>
    <TButton type="tertiary" label="tertiary button"></TButton>
    <TButton type="danger" label="destructive button"></TButton>
    <TButton
      type="danger"
      label="destructive button"
      icon="AnnotationIcon "
    ></TButton>
    <AnnotationIcon size="1.5x" />
  </div>
</template>

<script>
import { AnnotationIcon } from '@vue-hero-icons/outline'
</script>
