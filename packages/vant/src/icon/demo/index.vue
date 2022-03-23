<script setup lang="ts">
import PpsIcon from '..';
import VanTabs from '../../tabs';
import VanTab from '../../tab';
import VanRow from '../../row';
import VanCol from '../../col';
import icons from '@pps/icons';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site/use-translate';
import { Notify } from '../../notify';

// from https://30secondsofcode.org
function copyToClipboard(str: string) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);

  const selection = document.getSelection();

  if (!selection) {
    return;
  }

  const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;

  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  if (selected) {
    selection.removeAllRanges();
    selection.addRange(selected);
  }
}

const t = useTranslate({
  'zh-CN': {
    title: '图标列表',
    badge: '徽标提示',
    basic: '基础图标',
    copied: '复制成功',
    outline: '线框风格',
    filled: '实底风格',
    other: '业务图标',
    demo: '用法示例',
    color: '图标颜色',
    size: '图标大小',
  },
  'en-US': {
    title: 'Icon List',
    badge: 'Show Badge',
    basic: 'Basic',
    copied: 'Copied',
    outline: 'Outline',
    filled: 'Filled',
    demo: 'Demo',
    color: 'Icon Color',
    size: 'Icon Size',
  },
});

const tab = ref(0);
const demoIcon = 'file-down';
const demoImage = 'https://b.yzcdn.cn/vant/icon-demo-1126.png';
const cdnSvg = 'https://cdn.ipampas.com/common/images/svgs/';

const copy = (icon: string, option: Record<string, unknown> = {}) => {
  let tag = `<pps-icon name="${icon}"`;
  if ('dot' in option) {
    tag = `${tag} ${option.dot ? 'dot' : ''}`;
  }
  if ('badge' in option) {
    tag = `${tag} badge="${option.badge}"`;
  }
  if ('color' in option) {
    tag = `${tag} color="${option.color}"`;
  }
  if ('size' in option) {
    tag = `${tag} size="${option.size}"`;
  }
  tag = `${tag} />`;
  copyToClipboard(tag);

  Notify({
    type: 'success',
    duration: 1500,
    className: 'demo-icon-notify',
    message: `${t('copied')}：${tag}`,
  });
};
</script>

<template>
  <van-tabs v-model:active="tab" sticky>
    <van-tab class="demo-icon-tab-panel" :title="t('demo')">
      <demo-block :title="t('basicUsage')">
        <van-row>
          <van-col span="6" @click="copy(demoIcon)">
            <pps-icon :name="demoIcon" />
          </van-col>
          <van-col span="6" @click="copy(demoImage)">
            <pps-icon :name="demoImage" />
          </van-col>
        </van-row>
      </demo-block>

      <demo-block :title="t('badge')">
        <van-row>
          <van-col span="6" @click="copy(demoIcon, { dot: true })">
            <pps-icon :name="demoIcon" dot />
          </van-col>
          <van-col span="6" @click="copy(demoIcon, { badge: '9' })">
            <pps-icon :name="demoIcon" badge="9" />
          </van-col>
          <van-col span="6" @click="copy(demoIcon, { badge: '99+' })">
            <pps-icon :name="demoIcon" badge="99+" />
          </van-col>
        </van-row>
      </demo-block>

      <demo-block :title="t('color')">
        <van-row>
          <van-col span="6" @click="copy(demoIcon, { color: '#1989fa' })">
            <pps-icon name="img" color="#1989fa" />
          </van-col>
          <van-col span="6" @click="copy(demoIcon, { color: '#ee0a24' })">
            <pps-icon name="pdf" color="#ee0a24" />
          </van-col>
        </van-row>
      </demo-block>

      <demo-block :title="t('size')">
        <van-row>
          <van-col span="6" @click="copy(demoIcon, { size: '40' })">
            <pps-icon :name="demoIcon" size="40" />
          </van-col>
          <van-col span="6" @click="copy(demoIcon, { size: '3rem' })">
            <pps-icon :name="demoIcon" size="3rem" />
          </van-col>
        </van-row>
      </demo-block>
    </van-tab>

    <van-tab class="demo-icon-tab-panel" :title="t('basic')">
      <van-row>
        <van-col
          v-for="icon in icons.basic"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <pps-icon :name="icon" />
          <span>{{ icon }}</span>
        </van-col>
      </van-row>
    </van-tab>

    <van-tab class="demo-icon-tab-panel" :title="t('outline')">
      <van-row>
        <van-col
          v-for="icon in icons.outline"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <pps-icon :name="icon" />
          <span>{{ icon }}</span>
        </van-col>
      </van-row>
    </van-tab>

    <van-tab class="demo-icon-tab-panel" :title="t('filled')">
      <van-row>
        <van-col
          v-for="icon in icons.filled"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <pps-icon :name="icon" />
          <span>{{ icon }}</span>
        </van-col>
      </van-row>
    </van-tab>
    <van-tab class="demo-icon-tab-panel" :title="t('other')">
      <div style="font-size: 12px; padding: 24px 16px 0 16px; color: #586a95">
        完整图标前往阿里图标库【业务图标】类目下观看
      </div>
      <p style="font-size: 16px; padding: 24px 16px">彩色图标:</p>
      <van-row>
        <van-col
          v-for="icon in icons.color"
          :key="icon"
          span="8"
          @click="copy(`${cdnSvg}${icon}.png`)"
        >
          <pps-icon :name="`${cdnSvg}${icon}.png`" />
          <span>{{ icon }}</span>
        </van-col>
      </van-row>
    </van-tab>
  </van-tabs>
</template>

<style lang="less">
.demo-icon {
  font-size: 0;

  &-notify {
    font-size: 13px;
  }

  &-tab-panel {
    width: auto;
    margin: 20px;
    background-color: var(--van-background-color-light);
    border-radius: 12px;
  }

  .van-col {
    display: inline-block;
    float: none;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;

    span {
      display: block;
      height: 36px;
      margin: -4px 0 4px;
      padding: 0 5px;
      color: var(--van-text-color);
      font-size: 12px;
      line-height: 18px;
    }

    &:active {
      background-color: var(--van-active-color);
    }
  }

  .pps-icon {
    margin: 16px 0 16px;
    color: var(--van-text-color);
    font-size: 32px;
  }
}
</style>
