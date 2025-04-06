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
    "3uXySADsx4wpjSE4JS38TcwBLCcKDS5FN98xsSatxsKrufeqk8FmderT7mQLCbqaifdUe7asB4vuQ6AjmqR9o6HT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UFbRPbwmqBEti8KJXTKSVto8mtzbg2x2BVcapHAnXmbtnm4DNi34NX2d61LB73xTy9tYLXYL67bg632nQS6vxt9",
  "key1": "31LCVG8YqbqQH9PmvRaf3xxNd3vQWcwurQygB284pjZwWdUxD5dmHmpJB4vsgUUgsmx6B3J4gthYzsiXiwZm7SYd",
  "key2": "63rcrxP36ad7dcDDdEAwyHQdQbYcvcMjHSjAsXsfi2VtN665poto41LrRUzJ6pwfZt9CCGXAWXQYfttbqx7cmukt",
  "key3": "FB3LkJHHTYQ9LiZiSrQB9cZT5J6uweLuoziF6jF34kmibPC1DpQ5MvoqHaMnQ32ki8ycPMsCi4Ers3CEks2KUta",
  "key4": "4mryFHvBHiPQJkfvXj7vtJVMPW67aUWTgXuGW8m2nNcetpGgU9tCbFy9sEMe44pvLdsewT3FzoxgQwa6dvR9a4jA",
  "key5": "5XmVpo96wpoAdBwcD4vsFz15NWZaHKe1TTkWpgzprm33HqKSMygFfuLxSxYd7tvghnepDMp7MQZ9hWMciCPWG25d",
  "key6": "2d1G7dJ7tNKzZKL2NK7CL74Lqkw9CbNxykjHQicU6vXniXP6WaseTADm7s8Pyq2tvN1VLU66JXK5oV8WFsJLYxxB",
  "key7": "4E4YTC1xSSLmgTAackLqfLGRQPq7Zei7dn79tN2SRmTJSJcH9vjaAejF2MsC521aTuXdXdhBpe1LPhZfr2n61ZS2",
  "key8": "67CfcmuamHy62QYr7KQHRiiWsNb2p7TdTKvX7Hk33AnB9czCqQpdK477kgtxtCuZ2dp32kUdowUeM6KL9kbDHpAG",
  "key9": "udBQRMxcWhnfQjqbwKV3npWpDnTPta54U9LVXFT22a2Kfqfw6hY9WSPnvgg4syAzGD4cXPWKRn1VaAohWEzVTdo",
  "key10": "49ewT9S3NxvyChTuNN2o8rhXdVm1cnGoidko2GYBFtsW45nXeaEXZsom9DspguA59Md2fjPhvr3u4JK1G63dAsvf",
  "key11": "64frMLJp9yqdSALEdsqnSCygWuFYHV2TJxJiCVwDvhgLHsEJNrJAwShmjV8nuFjEj6p924xcUdmcravXABbVQCPr",
  "key12": "4AB3JnKK1EWWLmVmct8V3FKX6EyX8YuSckpYQmPJQBaYdoK6FdGsAiaPhmmSrWHviEUcc4BVTNE6VrdRQH2kfYRM",
  "key13": "4dDk7v3q7bx53mQiiAzkG4XLmgoHp8bTEXxTutttGh7wb54qCS8t12Up2CUhrgPRv27QMBuqj9RQ1ArAMdmjSpAh",
  "key14": "5UznGu9VjTJmBWDuWJ4hguG4v8VWwUpR2ETExKUH1vqgCrPYKrkDi6dXDdgGRu2c1EUtowLhk1N65XRURWjavh3n",
  "key15": "5asHaTDfSfSttNCPtcsuQmN489EdD8imsaczGu7MjSf1cvcL1HWzK3x4DD2tJzF9ZMKJTp5y1QK4En7ZLfy1Jxhi",
  "key16": "5GQ8A1umxd7eCGyFQvXqtXZFKw3JnEuSCT9jKvY1h7naWfLdFTtyH4UqG79RmKLHRaENtZ7zLYbXrh2KS6HxBMX2",
  "key17": "3X3UYXxyW8Rih2RkB2oTYtNKurgR9sTfukoGfDnA4HEqes3UjTJLQfxpQUDQMJpYrRbbUgoK8XA56AEKbc1NBU1S",
  "key18": "4u2jBi5Ab4tnmepc5xuwdfjEKov9QoxGokzoXk9zfZAJXECxTRwVxopUWYReG2AGhceQTGgkftf8bjvHdfcFQbBV",
  "key19": "43kG7UV1pBgyaR3hD83hKDjxVer6Vb8QPn72n6xZxHmg4z1SYhYWwBRJxnsTavoXFvEHpQj6MYygNN2hvetw6qep",
  "key20": "NPB1VFgBvWDqrrk17Cysu3ufgiLyqP41j4591Quy7RbGB6jmtzG4ijPhqwkCZTogET4KqQjFmLXrg39SLekKrun",
  "key21": "5KH4hjwKVvNqv74NYLp7DKk7miX8bSD3Z6DjUfyXLMDSh4uaKEJcoRyb6WSs1WoqwzFS8c3FU1pghXtskJQHzj61",
  "key22": "zW5zNz7tr9FQGRAYhfP3QogBz16GU7aHvea7fpoLKWiV9YPN1kGV5iUcf6CWgN8wDd7sjs2hyqUnhFMEyQDA2cb",
  "key23": "5tgJXeqUqamWTom357QtDwLexRs9RT2GgogBqLoruNVSPtsyoVgQ47afZy3k5svkBdjtMRVnWYK2A4c34NmgGYDT",
  "key24": "4FmcvxtjAEKt7RKQ3RkLNSjMK7fR7Ei8s2LLWNXHfpfnjcmp7zeergCK1tWehc89DUihvXBPqJchXizr9pKFmZ8g",
  "key25": "q9ENaBoVhEHrZEDr1wFc1a388YyuaAA52W899QgzRkWjzqxQeayiR2ZL34MFkcbmH7FUj9Rw1zRFvopsRPU3AfL",
  "key26": "37m2nYVxZd9XGkgPUCAANB7QXXtEguP4nJBsVzVrER2sPkYj1Xkzebsh5hgXAVkTjb9zLKvZGNtLdFvYc69jXEU8",
  "key27": "4RwBSjZ7viWPGc6nizUe379KWdGReTPVgumSg47fGvKoJrbiNr2rDu1BPyjUKks7RC7BKYbqE1vTi1832tTQ9E5W",
  "key28": "38RkES8Zk1gLoNghR69NViDFdM2AAb7Uuz7WRU4mQUgHhAtAaoxQdFWXn2vuqfqFwDgNCNpZxXH4KjvN2LT6RxAJ",
  "key29": "2qz4i4YoNDdA6jvx2KekWcyQzMBQkQBJrXydc36fV7Cjqb8Q4NMrd6nsKYKC9keMabKyBa8nUGsR1gJnybdMhhVR"
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
