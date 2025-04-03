/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "v6a6fLewZjVBNKhTFLURF8WhA2P99enRVeh1YjX4Gf1PnLebCVxqfTaEmhKPAw3E5d7oVx8hzgJaT2pzm7QEtxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ku1CRkEjkNPD3ibUbuambpmkrCXUbApMZ3iKxAjjAzp2APo1o86jcYobsizBHaw3EVNX1Umfh8WLvSm2LEy8NAN",
  "key1": "2Rv36enraeemVv8QX8stWRPZNrujMvCq8CNPtvspBxbq1GwQaN4i9G5QxYPzcNmaiJZaBzK1ZcBi7KKGgarXVdtS",
  "key2": "3pyCgMrNhev3ikDpcrjRzCfm7rSHbeozvXrvHrwn82LmU5dPy1ZoqkxAGNkX3CTzPmhRvDYdF9jrRtEvovaAKax5",
  "key3": "5REUu2iiBkZY5mTYAfbtKz64ZTEzN1ZtYr2ysC7Yr1jj3Hk8pTWVpvAD4f5qWs9KwxWiQNmUadt9M1CNWs9RsZyn",
  "key4": "5R5dAHN9bgZg5Ks83Rg1kCj6dYTUDtXGdiy3S6ohZGZGY7K91ZW6zreCBxTRd3auCMTjFsABmEQuT63yrMfgrKof",
  "key5": "4w8GJJumKHQz9c9K6rXeaCxmKCV8jJiNdsYGyzHK8EZipZi4N9Ub3bqz3pTfeBLN5bo47Nbx8tE2qceJj66tsoJe",
  "key6": "3hRopKfDfFw9T64Ua12rB86mPxi1K4vUphFiCNjwHoi9nYrPkr5eBGemGwrerMdkn8sZ65xmFVQc26ntqfNWjyiL",
  "key7": "53zofxP91KXrW3CoFmzhzF9Jndtc8AyuMUGCGaZmZ3gWaSwqKESBgNFHpoy8X1xfuSMW4Q7fkTqf8C2YcqMyefh6",
  "key8": "5DmVP27fRFLVN3v9hrfGKrmxELUevXh7TotGGSGfVJqnhfE6ZdssUZEySoiXuhQLcHVmBdgaPkGd9ZpEwSowX2bR",
  "key9": "gaeRCWbQTYhJUMtqKXaYiHYCNMizS2ZBHJqdZxUDRkNKwUAxC93C5Q2LiZwycawJ9cU2hUMmy4K4LYZZ2mKGn4h",
  "key10": "3x4oPhQqS8WjcdwbDdLGFbCBFJZmpbfwiWk6BFocNzMJLUAkQ5tgcQLMq8bPytMX9wnjwHr4MzNt4pWMfFHx9jpa",
  "key11": "2WYwaVQC48RgUzyDqapR7Z1ChhJ1XTEtYLXCJfJDAjwMcwowkAYd5owbJ3Bv35QC1tLhzynQQdWywfzRWX7M7a4D",
  "key12": "xCvozzpZhmaSfFGXoBnBjvpQrirySkaXHsu9fBAeGFFw4rJY4jtN5ipBhjh78C1QhLU7J3M4jRTmTzJ2fCKF5EL",
  "key13": "2AZyAJnRSaC332AkWNuwfrmJRUc8BXqyh3rypLZeZ2dnHGbn1DZ6erqrsssfQreL5BCt7JT1k7tZNChnWnfqX2Q3",
  "key14": "4ANFkrgooxXf6S2NmgSGP97YvGFWmy6wuS2xC7u4VTdaLvr18E1CdFVZWtdRzZzvRTiqM59egL7ERQ5d8AvxQD2N",
  "key15": "4BkUpNtNbjTXmqtHE5rchYY9QE9rR4CRz8pDe7cE9NkuBLxuXZkZgZBcv7TCVXgreq6VKYtSr5BH4u9TppoxBdk4",
  "key16": "3oeQMne3JaGF5NN2gmuqW2Xex3Qv8ZaijHZhc69hLqg2pidkz7BacsPqE8CfWWFincmHCG2P7kLViEuuxgtZagt",
  "key17": "2hVpWhde528ExyvwwPXn9PDQuWhVRXew7p2iDrSgv5PZYsexvVV98ohDVTRJN8vwcJBGDgjCs2Qtj284pnVdGw37",
  "key18": "5NDfRK2kenwbThMsGTyb3JEcU1yx5pmFxv4p9v1N9a7aymTWPife3oLg8epckF3zUogvfuDYPHZnLaEE8m3fVfgN",
  "key19": "27VzjFJTWWBJN1cTdzGkXDjR78Dg38p7KTb6a9U7cnP2Yu6gdKndmd8oB3EVax4B3bN1iwJy9EzxzqGpqLgJ28UY",
  "key20": "2ZvjYCJjf3KkrF9BzHW8EQsa1DRcsjU3XN4kqAuxn7aQSguVogLXDpnoCUY3A9FbqtmLvNCPfeK6Xa35ztg9WtNm",
  "key21": "42VfZA7B1CRcCraUu44HLNLkMBq4yok1uGcR4wXggG1JLQDbaQRB7GfBLTTYUgrL5wZaGqEGT9wHiNv61L46RGSY",
  "key22": "GVuYxVxq6qRTkkK6cDr8NDeUtVARp4UH3XBS5G5bsaHU2Z18j3GrsAMvCcBDcd3V9oxR3bVV2m8LA2iv27f2hck",
  "key23": "UDfv4sHXjBWNjaD2XGaP3zDKfveSHL2kEu5x2c2rjBLp1wM2ow2fTNkd97VpKzpTQGwgUuAdrqQ5fd7ackaABhq",
  "key24": "jvoGAx8WXKs8eBWXyE4Ra63Pek6wfGLEkXxwaVd8Cn2u2ATARLV59hYEMt3e455piqRKzzvhc1ZHLtgR5VCibZA",
  "key25": "3r4UErc6r3GmHMLqvuJnnyQVkfrMUgWecXgc3zy9QbJE9zKxkkyvpBKrbNMKrdG1DcFP6ZT2otQ7eBZkoXhHrDAb",
  "key26": "3fBPozuwEEyn5E8QbksaRMTQtYJbEcuGqFWd9JR4pPjsZbXogwyUi6mA26jQcNDScnMyZdGnnMQbJb6efHj8YW6F",
  "key27": "5zQp72qyrv4a6Ss3YoMUqpM6RKxbrvNENU91GGF2r1gWfBVh971puZCNpum3578YNs8rZ2UhzhuFjkQ72tARuCvz",
  "key28": "9XVb7gZYLUvb7rdpK3LvrtQtjBB9urHwEZDeqa4e273kFBfqmuu7voohm2BpjKFqtCFrmwnLKDcCkmQyD5VweFU",
  "key29": "5ePsXtg9jYZu4ef7LLeKd2HSQBLi2ta6o1wQH92cNn3gFASWoqf8V3qrrRBcbiELCB7pfxRZdtzJ5YH4nQJ2WpjF",
  "key30": "2bx44XeDZMraYtS5MHUpnuTDY9kPMcNLdisPyF8nThnJJB1Q3JyJtz7xCRwgvotjyANysXjMhbVF1HaXdWYZDAJL",
  "key31": "qhWZFf39agHS2KMBtwJWCfnXCGjDhyBzRVLciDZb5qVbx2XRq44xBseFE9ErXAZkjRnZBqLfjWiCazd4sAMYsMd",
  "key32": "3rmjMypyv85LuiRdvESozfq6F81nya3zD6B7s6k1FbifZnP5U4JS1hKc8QgB9m4ZVhNoJdvRbzdqApbfRDMCdeV8",
  "key33": "2XYu6tQofNJQx4U9yP66ZfTY2VX1BvsEn18523prQggveFbXS15yVGnNTf4LJzsZHQEqYCHJJiNPytDTUPZFLQif",
  "key34": "3gyaJqV9RuZdcsKof5qKgmDdDapJx529gXVK689SNUBczHUqKnciMuPaFLtjSnTiDqsnsLc84UuCXqk67QUAsZ4C",
  "key35": "5CaNZTQyMALB5judEzr59dKL8mdFKEVq1xqp6us1cXKndwJk1VzPdB8ZZW1VGSjs7vfy18BG7iCRJMewqrEsXt8Z",
  "key36": "2ypSzNv5oTtbwEu8FKvxt7H7mRNdKS9MtQKQRwbsNPp8AsBYeJL1DAGeCCC3tTPKtFCQUguqiFEAvwwyKVZ7RftY",
  "key37": "Y7shn8ckhoMqJDghmrFLnZsschkEziuaPDR6tz58PhpwzBbuXuYeH1HptkhyvGQ1RJ7xRXxh4b6CTyGVTVJpqc9",
  "key38": "5PibFpmEbagDi52Hz32DYvJdDjxZ64JAwVYQy31Z7QiE8yoSD76kXrzVbAjDaiiDGGBofWpNxDuNnUYMFhbcevf",
  "key39": "4WQyXAwjMXTRnm1SDbsdXDR4xzAiZPro51Uynjr5pzxpjd1cpaDfdi3yaSew2m5c12V59LCbefU1fQLyPLRDcCTt",
  "key40": "NZXtNqM8F4ds1ujwYPLvMRdm695XundowzfEVuM9qdAzwKAtEr7QpsTCCJEu8XB6BYmMpz2BfqfXFho51vrxVTZ",
  "key41": "2pK1RTrvFuLc2FGtP9Bh6KZPkjSfW6LnHDioD6EvF8w8JfLdbxQDwN957qK87me7LbxQVnVSTR3bxLoDAvPYkGpz",
  "key42": "HcTFcnmyKxRKsrj2D7taUufajXry1JZ97x4uTdGdgZNPUvihB1QM5i2fUxLuvJWJcajA7sm4xm21z4BET2d85uF",
  "key43": "4PzD1K73WLfUY5MwJ696PPTkjSG13EPD8kFiPmPdjxeZhmpoJg9vDrQXXtVc15Mc84NXTjH3M48Mrb5LcpezqFrv"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
