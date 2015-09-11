![Brainly Style Guide](https://i.imgur.com/8MMAa2J.png)

This project is a reference style guide for all frontend components used in Brainly and styled with "Mint" theme.

We have created this styleguide with this purposes in mind:

* Should serve as an **overview of all basic components** for the new brand
* Should be a reference implementation of our vision of **BEM methodology**
* Should be **a single source of truth** for all basic styles for "mint" theme
* Should be an example of good CSS practices we try to promote across the company

The target audience is everyone who will be dealing with frontend components.
If you are reading this document - the chances are high that it is you.

Bear in mind: 

  * If you want to *create a component with mint theme* you MUST refer to this style guide
  * If you are to *create a totally new component* you MUST add it in the style guide
  * If you want to *reuse any component* you SHOULD refer to this style guide for best practices and examples


Table of contents:

* [Methodology](#methodology)
* [Guidelines](#guidelines)
* [How To](#howto)
* [Contribution](#contribution)

## Methodology

We use BEM methodology to create and style our components. 

**Note**: we are using only BEM **naming convention**, but no additional tools or filesystem structure rules.

You can find more details about "official" BEM [here](https://en.bem.info/method/definitions/#what-is-bem).
[This article](https://css-tricks.com/bem-101/) can help you to get grasp on BEM as well.


We have chosen BEM because it gives us these benefits:


* Streamlined thought process for splitting stuff in components
	* Unified vocabulary
	* Simple rules
* Encapsulated, self-sufficient and context-independent building blocks
	* Components can be reused 
	* Components can be changed independently
	* Loose coupling between parent and child components
* No problems with specificity
	* Overriding styles is straightforward
	* No need for `!important`
* No global overrides
  * No possibility to introduce hard-to-find regressions
  * Bright future, ponies and unicorns are guaranteed 
* Styles are independent from markup
  * Freedom to chose view layer libraries
  * No need to redo the styling routine


#### Terminology 
* **Block** is an independent entity, or component of an application.  
  A block can be either simple or compound (containing other blocks).
* **Element** is a part of a block that performs a certain function.  
  Elements only make sense in the context of the block that they belong to.
* **Modifier** is used when we want to add a particular attribute/property/variant that will change our block or element.
* **Container** is a compound block, which can contain other blocks.  
  The basic container defines "holes" (placeholders) where other blocks can be put.  
  Containers only make sense only when they have actual blocks included.	
* **Hole** is a thin wrapper for a block used for changing position, offset, paddings and alignment of the contained components.  
Holes only make sense in the context of the certain container.
* **User content** is a dynamically added content, which lack BEM classes and contains mainly text formatting tags like `b`, `i`, `br`, `p`, `ul`, `ol`, etc.

## Guidelines

If you are a component author you should follow this [guidelines](guidelines.md) on top of BEM.

## HowTo

#### Have a look at style guide

If you are trying to do it from scratch:

1. Clone repo
2. Run `./scripts/bootstrap.sh` in the root of the project
3. Run `./scripts/server.sh`
4. Open corresponding files in the `docs` directory in your browser (e.g. `http://dockerhost:8181/dev/docs/basics.html`):
  * `docs/basics.html` for basic components
  * `docs/components.html` for complex components
  * `docs/containers.html` for containers

### Create a new component
1. Create a new folder in `/src/components`
2. Add sass file
  * use the following template
  ```
    // your components variables

    $include-html: false !default;

    @if ($include-html-classes) {
        // your code
    }

  ```
3. Add html fle with example of usage
4. Include in documentation (see readme in `/src/docs` folder)

**Note**: All changes for the styleguide will be rebuilt automatically on every merge/rebase/checkout.


#### See holes in containers

You can hover with mouse over the container in style guide to see the holes (white dashed border around the component):

![Highlighted holes](http://i.gyazo.com/0cc138b81eb12cc518352c2d9c787f0b.png)


#### Rebuild fonts

If you haven't run `bootstrap.sh`, you should do it right now :)

Run `./scripts/build-fonts.sh`.

This command will transform all `svg` files from `icons` directory in a woff font.

#### Create/Recreate s3 distribution

To be able to work with AWS you need to have AWS-related keys defined in your environment:

 * `AWS_ACCESS_KEY` should be available as environment variable
 * `AWS_SECRET_ACCESS_KEY` should be available as environment variable

Those keys will be passed to docker container on every interaction with s3 or cloudfront.

Run `./scripts/create-s3-distribution.sh` to create the initial setup for s3 distribution.

**Note:** This should be done once when you setup the deployment pipeline of the project.
*This step has already been applied for this repo.*

#### Bump release version

This project has semver versioning.

To simplify version bumping you can use [mversion](https://www.npmjs.com/package/mversion).
`mversion patch -m` will patch package.json and create a corresponding commit + tag

**Note:** if there is no changes to resulting `style-guide.css`, then use `mversion pr -m`.
  It will create a `prerelease` version instead of patch.

To bump the version correctly you should merge PRs like that:

1. Get the freshest master  
  ```
  git checkout master

  git pull
  ```
1. `rebase` your PR on master  
  ```
  git rebase master my-branch
  ```
1. `merge` your PR  
  ```
  git merge my-branch
  ```
1. bump version in master as a separate commit (with tag)  
  ```
  mversion patch -m
  ```
1. `push` changes to upstream  
  ```
  git push
  
  git push --tags
  ```


## Contribution

To contribute, please read [Contributing file](CONTRIBUTING.md)

## TODO
1. Add note about supported browser
