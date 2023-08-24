#! /usr/bin/env node
const { program } = require('commander')
const chalk = require('chalk')
const inquirer = require('inquirer')
const ora = require('ora')
const figlet = require("figlet");










/* 
figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

figlet.text(
    "Boo!",
    {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    }
  );
 */


/*       
//             spinner
// 两秒后改变文字样式

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = '网络慢，下载中';
}, 2000);

setTimeout(() => {
	spinner.succeed('下载成功')
}, 2000);

setTimeout(() => {
	spinner.fail('下载失败')
}, 2000); */



/* 

    //               inquirer


inquirer
  .prompt([
      {
          type: 'input',
          name: 'food',
          message: '你吃什么？',
          default:'蔬菜'
      },
      {
        type: 'confirm',
        name: 'hot',
        message: '吃不吃辣？',
        default: false
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
      console.log(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  }); */


/* 
    //               chalk
console.log(chalk.red('输出红色字体'))
console.log(chalk.blue.bold.bgCyanBright('输出蓝色加粗字体并添加背景色'))
 */

/*                 commander                   */
// console.log(process.argv);
/* 
打印process.argv输出如下：【本地的node目录，当前配置的bin的路径】
[
  'D:\\Tool\\Nodejs\\node.exe',
  'D:\\Tool\\Nodejs\\node_modules\\my-cli\\bin\\index.js'
]

*/
// // <>必填  []选填
// program.name('my-cli').usage('<command> [option]')

// program
//   .option('-d, --debug', 'output extra debugging')
//   .option('-s, --small', 'small pizza size')
//   .option('-p, --pizza-type <type>', 'flavour of pizza');


// program
//   .command('clone <source> [destination]')
//   .description('clone a repository into a newly created directory')
//   .action((source, destination) => {
//     console.log('clone command called');
//   });


// program.parse(process.argv);

// const options = program.opts();
// if (options.debug) console.log(options);
// if (options.small) console.log('- small pizza size');
// if (options.pizzaType) console.log(`- ${options.pizzaType}`);