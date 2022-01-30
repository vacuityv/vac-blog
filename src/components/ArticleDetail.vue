<template>
  <div class="main-content">
    <el-row>
      <el-col :span="24">
        <div class="title">centos 安装 ghost 博客</div>
      </el-col>
      <el-col :span="24">
        <author-item authorName="pengwei" authorTime="2222"></author-item>
      </el-col>
      <el-col :span="24">
        <div class="article-cover">
          <img src="https://vacuity.me/content/images/size/w2000/2021/03/463438.jpg">
        </div>
      </el-col>
      <el-col :span="24">
        <v-md-preview :text="text"></v-md-preview>
      </el-col>
    </el-row>




  </div>
</template>

import AuthorItem from "./AuthorItem";

<script>
import AuthorItem from "@/components/AuthorItem";
export default {
  name: "ArticleDetail",
  components: {AuthorItem},

  data() {
    return {
      text: '最近一段时间也是忙于项目，加上自己的懒惰，所以本该六月完成的拖到了现在。\n' +
          '\n' +
          '最近在对一个项目进行重构，原项目是公司有五年历史的老项目了，各种逻辑盘根错节，这里不是要吐槽原项目不好，事实上经过五年没有重构任何项目都会变得臃肿和难以理解，不然shitmontain都是怎么来的。\n' +
          '\n' +
          '勿感动自己\n' +
          '\n' +
          '大学时候，周末没打游戏而是早上就去了图书馆，学习了一天，到图书馆闭馆铃声响起才收拾东西回去。在寂静的芙蓉湖边拍了一张照片，感觉到真不容易，但是一天并没有学到很多东西。\n' +
          '![](&&&SFLOCALFILEPATH&&&IMG_0156.JPG)\n' +
          '\n' +
          '我们有时候太沉迷于自己所付出的时间与精力，但是这些付出本身并没有什么意义，除了用来感动自己。\n' +
          '是因为实际的功劳都很难量化，所以大家都喜欢用苦劳来代替，毕竟时间是可以简单的测量与统计的。这就导致我们在忙了一件事情到很晚的时候，就会容易感动自己，拍张照发个朋友圈，不管是工作的事情还是个人的事情，都会让人感觉自己付出了很多，但是很少有人在乎成果：做成了什么，以及，是否非要这样做才能做成。\n' +
          '其实有时候需要思考下，到11点的原因是什么，是问题真的棘手，是效率问题，是逻辑混乱导致做了很多无用功，还是因为白天划水了，这个才是关键。\n' +
          '我们接受到的教育很多时候会试图告诉我们过程比结果重要，但是其实大家都知道大部分时候结果比过程重要多了。只有在我们的结果不尽如人意或者根本没有结果的时候才需要用过程来表达自己的所谓“成果”，其实这并没有什么意义，特别是工作上。\n' +
          '工作算是最能体现这当面的了。有的人花半小时做完一件事，毫无感觉去做下一件，同样的事情有的人从早上做到晚上11点，然后感到非常不容易，然后发一条朋友圈收获一堆点赞。只是随便举个例子，外面的人永远也不知道那件事的难易程度，是确实需要这么久还是因为太菜，好像也没有人关心，大家都默认是事情难做。不过这样也挺好的，最起码显得大家都很努力。但是对自身来说，还是需要稍微注意，可以欺骗别人，但是不要感动自己。睡前可以自己回想一下事情为什么做了这么久，别人做更久还是更快。当然如果一个人连这个都衡量不出来，那我觉得，就这样吧\n' +
          '写这点字也是断断续续持续了几周时间，先就这样吧',
    };
  },
}
</script>

<style scoped>

.title{
  font-weight: bold;
  font-size: 3rem;
}

.article-cover img {
  width: 100%;
}

</style>