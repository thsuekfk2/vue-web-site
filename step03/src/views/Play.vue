<template>
  <div>
      강의화면<br>
      {{this.$route.query.v_id}}<br>
      <youtube :video-id=this.$route.query.v_id id="youtube" ref="youtube"  @ready="onPlayerReady"></youtube>

  </div>
</template>

<script>

export default {


}


</script>
