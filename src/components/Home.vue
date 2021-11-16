<template>
      <!-- <ExpVizus /> -->

        <div class="flex flex-wrap" v-if="data_fetched">
          <div
            class="w-full lg:w-1/2 p-3"
            v-for="menu in fields.data.navigation_menu"
            :key="menu.id"
          >
            <div
              class="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-8"
            >
              <h2 class="text-2xl font-bold text-gray-800">
                {{ menu.emoji }} {{ menu.title }}
              </h2>
              <p class="text-gray-600">
                {{ menu.description }}
                <a :href="menu.href">{{ menu.href }}</a>
                <ul v-if="menu.methods">
                  <li v-for="(method, key) in menu.methods" :key="key">{{ method.title }}: <a :href="method.href">{{ method.href }}</a></li>

                </ul>
              </p>
            </div>
          </div>
        </div>
</template>