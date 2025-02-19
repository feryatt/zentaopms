<?php
$lang->job->common        = 'Job';
$lang->job->browse        = 'Browse Pipeline';
$lang->job->create        = 'Create Pipeline';
$lang->job->edit          = 'Edit Pipeline';
$lang->job->exec          = 'Execute Pipeline';
$lang->job->runPipeline   = 'Run pipeline';
$lang->job->view          = 'Pipeline Details';
$lang->job->delete        = 'Delete Pipeline';
$lang->job->confirmDelete = 'Voullez-vous supprimer ce job ?';
$lang->job->dirChange     = 'Directory Changed';
$lang->job->buildTag      = 'Build Tag';
$lang->job->execSuccess   = 'Build success';

$lang->job->browseAction = 'Pipeline List';

$lang->job->id              = 'ID';
$lang->job->name            = 'Nom';
$lang->job->repo            = 'Repo';
$lang->job->product         = $lang->productCommon;
$lang->job->svnDir          = 'SVN Tag Watch Path';
$lang->job->jenkins         = 'Jenkins';
$lang->job->jkHost          = 'Serveur Jenkins';
$lang->job->jkJob           = 'T鈉he Jenkins';
$lang->job->buildSpec       = 'Build Target'; // 'pipeline@server'
$lang->job->engine          = 'Engine';
$lang->job->server          = 'Serveur';
$lang->job->pipeline        = 'Pipeline';
$lang->job->buildType       = 'Type Build';
$lang->job->frame           = 'Cadre';
$lang->job->triggerType     = 'D閏lencheur';
$lang->job->atDay           = 'Jours Person.';
$lang->job->atTime          = 'heure';
$lang->job->lastStatus      = 'Dern Statut';
$lang->job->lastExec        = 'Dern Exec';
$lang->job->comment         = 'Corres Mots cl閟';
$lang->job->customParam     = 'Paramètres de construction personnalisés';
$lang->job->paramName       = 'Nom';
$lang->job->paramValue      = 'PH';
$lang->job->custom          = 'Custom';
$lang->job->createdBy       = 'Created By';
$lang->job->createdDate     = 'Created Date';
$lang->job->editedBy        = 'Edited By';
$lang->job->editedDate      = 'Edited Date';
$lang->job->lastTag         = 'Last Tag';
$lang->job->deleted         = 'Deleted';
$lang->job->repoServer      = 'Repo Server';
$lang->job->sonarqubeServer = 'SonarQube Server';
$lang->job->projectKey      = 'SonarQube Project';

$lang->job->lblBasic = 'Infos de Base';

$lang->job->example        = 'ex.';
$lang->job->commitEx       = "Utilis pour faire correspondre les mots cl閟 utilis閟 pour cr閑r une compilation. Plusieurs mots cl閟 sont s閜ar閟 par ','";
$lang->job->cronSample     = 'ex: 0 0 2 * * 2-6/1 signifie 2:00 a.m. chaque jour de la semaine.';
$lang->job->sendExec       = "Envoi de la demande d'ex閏ution r閡ssie.";
$lang->job->inputName      = 'Veuillez saisir le nom du paramètre.';
$lang->job->invalidName    = 'Les noms des paramètres doivent être alphabétiques, numériques ou soulignés.';
$lang->job->repoExists     = 'This repository has a build task associated with it『%s』';
$lang->job->projectExists  = 'This SonarQube Project has a build task associated with it『%s』';
$lang->job->mustUseJenkins = 'SonarQube frame is only used if the build engine is JenKins.';
$lang->job->jobIsDeleted   = 'This repository is associated with a build task, please view the data from the recycle bin';

$lang->job->buildTypeList['build']          = 'Seulement Build';
$lang->job->buildTypeList['buildAndDeploy'] = 'Build et D閜loiement';
$lang->job->buildTypeList['buildAndTest']   = 'Build et Test';

$lang->job->triggerTypeList['tag']      = 'Tag';
$lang->job->triggerTypeList['commit']   = 'Code Commit';
$lang->job->triggerTypeList['schedule'] = 'Plannif';

$lang->job->frameList['']          = '';
$lang->job->frameList['junit']     = 'JUnit';
$lang->job->frameList['testng']    = 'TestNG';
$lang->job->frameList['phpunit']   = 'PHPUnit';
$lang->job->frameList['pytest']    = 'Pytest';
$lang->job->frameList['jtest']     = 'JTest';
$lang->job->frameList['cppunit']   = 'CppUnit';
$lang->job->frameList['gtest']     = 'GTest';
$lang->job->frameList['qtest']     = 'QTest';
$lang->job->frameList['sonarqube'] = 'SonarQube';

$lang->job->paramValueList['']                 = '';
$lang->job->paramValueList['$zentao_version']  = 'Current version';
$lang->job->paramValueList['$zentao_account']  = 'Current user';
$lang->job->paramValueList['$zentao_product']  = "Current {$lang->productCommon} ID";
$lang->job->paramValueList['$zentao_repopath'] = 'Current version library path';

$lang->job->engineList = array();
$lang->job->engineList['']        = '';
$lang->job->engineList['gitlab']  = 'GitLab';
$lang->job->engineList['jenkins'] = 'Jenkins';

$lang->job->engineTips = new stdclass;
$lang->job->engineTips->success = 'Build engine will use the built pipeline in GitLab.';
$lang->job->engineTips->error   = 'No pipeline is currently available in the GitLab project, please go to GitLab configuration first.  ';

$lang->job->pipelineTips                      = "Run for branch name or tag";
$lang->job->pipelineVariables                 = "Variables";
$lang->job->pipelineVariablesKeyPlaceHolder   = "Input variable key";
$lang->job->pipelineVariablesValuePlaceHolder = "Input variable value";
$lang->job->pipelineVariablesTips             = "Specify variable values to be used in this run. The values specified in CI/CD settings will be used by default.";
$lang->job->setReferenceTips                  = "Before performing a build, please set up the branch information of the code base.";

$lang->job->featureBar['browse']['job']     = 'List';
$lang->job->featureBar['browse']['compile'] = 'History';
