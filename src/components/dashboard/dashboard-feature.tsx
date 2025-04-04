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
    "25cNfdarzxXSKtjXvZZ5ovkWMzShyZGfrcMwxew8y5tYRiX2vVAsC5yEYphLZVwaJKPKQHEAkPZCNYyhh4WRD7Gn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xLCwBhQZRytGsS91sRMiHKXoH1D9Yxh3pAtfN68CWHEfq5g9hpWRpQhzJFdP2eoErEzfF7QxEV97gBQgib9dTdG",
  "key1": "5nYpouBcho6iiN6n1RpwsLtZ5pGWumNe3iuhX8p6PbUi4Nph1TY3FwyzSH2sPMDjZWpTgB92TuSywovQy7kBGkw4",
  "key2": "3QTkXgW8ozSQPYY5W1YLrA7ipwmSNfBRGvD6FSP3nV9ssKrzdmJJTAuArn9NcAwDqcZBaYHe6AU92GH8FzU2Fxzw",
  "key3": "4HeRwDcRaonXTTBeJ5xGjS3KLhNmHD78GHuVoYk1CLZhryjX5FMQ2T2wA3Afn1Uy4Hg9Mrf6bjrENwnbUkmrDRM9",
  "key4": "4NjPcSoqhUoEsS8PULep2C7wxizGm4iaVtDtb2XQf29fnokUtfxpy2k89VtgHyxEcTnatCGA1snWy8NkppZrk7x5",
  "key5": "5U6FkYrHq9sEJErUyj32ZQkffUaEmAAkiwsz1bnayyXeEXrPrBJ9Swiw4BceaB1aUL1gnu4hGtd9Ej2UZFvB2deZ",
  "key6": "4E1cbtUr9ryEF14HsnsvJZzu3PszKeZRcNCwMVNAypPFCr4peZ1NJiu9U3jvFiDmCzPHDvaUPbj8gTMgKsm2dy3i",
  "key7": "5qHTDfQVpEsLQd6Sb6WCT5hssnw9pPxPxJ41GmheDnsySPzLsgq7vLQ1ZA5M6wRTQFoqgRgn4F3t13SSTEZ93zY8",
  "key8": "4bBKQZjH6DDVYtC2tjwUjLF3zZRjeNWRSGiyo8WsSbjaEKigPWxkaWAYmPTYaUNLfnDyQHHqaoUphnd1yzbL6Sep",
  "key9": "4m3g5yX445JupxajAzjAoFMMZb4DWwd1mck3DY3JWXGGv2QuXDAnLUm7CEUxppkvrz86Bm8Ji4ZyjpfptBrZRiZ2",
  "key10": "4SK8Hdvw94Zf6vQaERpNzUeM25Tda1UgXg2hoAwM2Z27c27fiSqFNtrF1Em9qeYDLCM8gGeQNTD2KpH9Z9KUTQGh",
  "key11": "4kExD9h3tmhgTkhhHSsN12ihEL1dnE7gnCcvihUcK1vSPUJBk1UxW7nvCARuyRpTHGknvwCbTPDknXZ6NTUVgZWm",
  "key12": "2zk44QZLV133ukyhTCDoe8AcgM5WuVKRHwDHtdeChdQ77gtg1VmZH145PXdqyAZr8xQnQKFqZREWQbhcZiGJ2beT",
  "key13": "5Bo4fKo1fwY1mrVnmFs1YnC5DdWeh1U1f7ZsQmApH5BnJdKHD8DQ4o1a1tithpvviYYWFmquF5AEhv77xfZTHtvw",
  "key14": "5wbRZmBG3w2NA5EgSGs1614kUMteCosDowTWUXqDsvRNTyf5hFkFiCu6J26bp2QLmgeS5tf6XfkJoENCL8LMxtiY",
  "key15": "4jfnJhdJKvyEykKHc1fK9UwkUgXfGs3xfgj7t6Dsjpg6bZyLG1qMMz1mxevJfbr7tV3k8uPGYTS35YrhvmLPMsV8",
  "key16": "4WqTrUA26oYCwskrb9Lq113MrSusfjopgM3eqdHyCfVkLfKxdRVCSxQdpeyaMd2HaKxjUmiRsiBSY55Et4GyoWSi",
  "key17": "5jJvpSiLfiFhMiFrJbxeA9Sn4mFncisz8rJ1UMwmpUSSVisxbRi4FftkeBhhi5pTfjQtR4jnH27KsLKG1hxWTzUZ",
  "key18": "4am4Mu8wzKg4WoRqzswSunPFt8BushpQyyvxReKB5x9Z2g5k36hpdyvZpeiy7VHnXpkZruG74GMz6j1BGP2PEYMQ",
  "key19": "5CqsHF7LSesdGoEMLzixCRsMwMiE6jWMGzS5ete6opAYePcbXZck4tAYyGfSM8iUGUWQCTeHhzUMPbNe36AQuXwR",
  "key20": "5Sgcc2DfDNpS4QvpaZtU6GCYB4RZVvEkgnHWDm8nM3KsDBTb9UPpbe6FoioTUP7CSGnzWc77v23wJ9epuyh32K7F",
  "key21": "5tJBdQyB9FA9iZfbHNacvXHeekPZHmxiFbiMZm7eKdWwCkzrvay3Um1NNLFneNgLAbGkXo5mmh6bxEet6xtSPig5",
  "key22": "3uycAgUViEZGLoAradTgoJZrhaqhjyiXnA8HkTr75PhrYxA94mGrz3CvWJho5j9hXMRZz4Axr74CF6sZyAVEGA3i",
  "key23": "r4KxNEsdLV4TGkFMziPjvNh3fFQ8zntovujtTqE9h4GPnEGR1D2aTQ16dafwUvMgX13xYbBPvYDxgRyx86YJaxk",
  "key24": "3xzgpnw5iA2JxCd8yonzbs7vp1atnrQoZ8K6evz8iP9DvJgFJtQY5imJs6bwsem9GPbcnnxPDSPq6GvETdoESooH",
  "key25": "2JBs2erC8MitGneR93fdRTeyu2WycUHUsKgvZxan7Jg7VZT43gAxyNBtPHHEEo3igMp27G3pR8tiyvMovFgx669T",
  "key26": "4PvryRySu2wo2w7QJDH37rSsCcudTfhM9tS4Eh7i115XPpFdeBoFLR4pakmfjQYWPSJovDPtA9NPFJS9q9ivfAam",
  "key27": "4VkrCsWfCxSnjc9MrNatVqFLDpc1zAScJJNF9JByBtZKrwhEZN1FLfYZvphLgakXfpPHEDkcgB7Z3UgFzkMfaHN7",
  "key28": "41zyQvwk44v4azRpoHGuFTct8buHv7KKisM7ighe9mJ33RANLB6jkBysw96tff7vY7Hk7SdbigXRTgcKRm6h16r2",
  "key29": "55wdTbx5e3d2NrKfu2m7C1X3WbEtGkQfSgnqcH4RHtvkaBGES6D7N6G3a45TcuREaiCmSrYjSkVzy6KKoYHQsQCT",
  "key30": "251cnFzwtuNzLxS5PyLCgZH5Tk5FFKTA4jyqXRk712YZEw8KqDi8QVSWTVCRp1qgUu7BvLRmAJYoARX8sH2Ybcj4",
  "key31": "3SZbZDKMun1td3gotqRFLwZxGNS5GzzpeGL31faCRvp13E1t96CsNzqnVaRvG9es7gpjjtGGbnmedcw4k75PNQAY",
  "key32": "i9qwGvdj6c3RkAJ4VBe1HBV7tjdkkZQYiQsWScu27RAtYiYik3t9idrXoz4XHeeuCpt9u2rrnJC5LKdstquYe3u",
  "key33": "5MHnNYXvXCymSBRyNnzqwtzNCFysSEW4VJxyNK21pkCvPMkHGQpcLS5n2ZdDDipzRu8Spu236NbCeBv3UAM1L6AS",
  "key34": "2L2qdgMezc9dBMmmt2VCwFCgb1awACQj4aXetXxWnLJ5AZ7S8ZukDA8bH9SP2CUAUHNeRsMAC4Co4UXXmqK9xnrL",
  "key35": "2nmdMPX2GLyM88NH6W3uNCByvLiPSKHH92FgqmN9tru2qPNwaFprMBpyD4sQNkfp9YFqHhBp3wkkBJBTPkGzeGP2",
  "key36": "37d2pSXvsSjmPkHJ9frRyZwyje5XCXBL6Cnwd7f9wDi4MifaRydMjhxhR9ezfvCyZTvAhm1zbvneJA6DH6cWtmaB",
  "key37": "3SryQyaNDdLuhV6mSZXJVmRU6eDmxyEXsBEaqZKVLqriMS4cZcVp4QtcoVzyy3CemLzDwycfND3Yafnf2ZKF1F3t",
  "key38": "4cBFxMdLfnsAv8HYNYghdEAUegg4MJzmef1XahzRBADXpLkHi4ee2UXu6AupjYaqTCNZ653hsBjY3yhKc9ZotYa1",
  "key39": "3esBvTMBUfpRbmnJSi5hnmbi4BAKJo6mSNnZmv82pzTdCqEdejVqqHzu5Znn4Y9NewWJ5jrsU8Lnb2jTumnghNL5",
  "key40": "ebSdDfYYoqk47T6HvjjoQEckfxrcGFzBVMSLW9dAwWcXWVGcw9mcmHcJjVgcwBxs4GwVQ7V5UPg93XzXAjYUzJa",
  "key41": "5HxgfyXrxh8npyxQQeCcHHetVNNeug4M4CewD2e2SYoCXtFYV31xUofpTvFr19cTnP3pEKHAeaianxXs1oMDgsTe"
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
