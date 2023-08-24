#! /usr/bin/env node
const { program } = require('commander')
const chalk = require('chalk')
const inquirer = require('inquirer')
const ora = require('ora')
const figlet = require("figlet");
const fs = require('fs-extra')
const gitClone = require('git-clone')

const path = require('path')


const projectList = {
    'vue': 'git@github.com:kfc-vme50/vue-template.git',
    'react': 'git@github.com:kfc-vme50/react-template.git',
    'react&ts': 'git@github.com:kfc-vme50/react-template-ts.git',
    'vue&ts': 'git@github.com:kfc-vme50/vue-template-ts.git'
}
// 首行提示
program.name('my-cli').usage('<command> [option]')

// 版本号 
program.version(`${require('../package.json').version}`)

// 给help信息添加底部添加提示
program.on('--help', function () { 
    console.log(
        figlet.textSync("help!", {
          font: "Ghost",
          horizontalLayout: "default",
          verticalLayout: "default",
          width: 80,
          whitespaceBreak: true,
        })
      );
})

// 命令
// 创建项目的命令
program
    .command('create <app-name>')
    .description('创建一个新的项目')
    .action(async function (name) { 
        // 在这里写创建项目的逻辑
        // 创建一个名字为name的文件夹，把模板项目的代码放到这个文件夹下
            /* process模块用来与当前进程互动，可以通过全局变量process访问，不必使用require命令加载。它是一个EventEmitter对象的实例。
                这里的process.cwd()
                表示返回运行当前脚本的工作目录的路径*/
        
        
        // 1.先判断当前执行目录是否存在name同名文件夹
        const targetPath = path.join(process.cwd(), name)
        if (fs.existsSync(targetPath)) {
            const awsaner = await inquirer.prompt({
                type: "confirm",
                message: "已存在同名文件，是否覆盖之前的文件夹",
                default: false,
                name: 'overwrite'
            })

            if (awsaner.overwrite) {
                // 覆盖，删除之前的同名文件夹
                fs.remove(targetPath)
                // console.log('删除成功')
            } else { 
                // 返回，重新命名
                return;
            }
        }

        // 2.根据用户的选择，新建项目，拉取不同的模板
        const res = await inquirer.prompt([{
                type: 'list',
                message: '请选择你所需要的框架',
                name: 'type',
                choices: [
                    { vlue: 'vue', name: 'vue' },
                    { vlue:'react',name: 'react' }
                ]
            },
            {
                type: 'list',
                message: '是否需要ts',
                name: 'ts',
                choices: [
                    { value: true, name: '是' },
                    { value: false, name: '否' }
                ]
            }
        ])

        
        // 拼接路径
        const key = res.type + (res.ts ? '&ts' : '')
        const spinner = ora('下载中···').start();
        gitClone(projectList[key], name, { checkout: 'main' }, function (err) {
            if (err) {
                spinner.fail('下载失败')
             } else {
                spinner.succeed('下载成功')
                fs.remove(path.join(targetPath,'.git'))
                console.log('Done,now run')
                console.log(chalk.green(`\n  cd ${name}`))
                console.log(chalk.green(`  npm install`))
                console.log(chalk.green(`  npm run dev\n`))
            }
        })


        
        
})


program.parse(process.argv);