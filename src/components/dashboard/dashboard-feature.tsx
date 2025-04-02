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
    "5Jqq9Yz5ZyytsVydEMvjVo3x1VU94hgLXs9gGcaP7z6nMo3SMvD2Q99n1GwK82xMSYYfn2v3CxhxL2YqBdneWAD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f6pTpdnCmbLGEBLcoxuHtGUELH1eeu31H4ByrWiVGQzkNwANcYR3uHSbPTTSVigsFCAvah1nibt4KzG4UviidMB",
  "key1": "41FEBPVCHzzmb8aJevHCaZVxMXTJvX31i8kTKsLqBQiryzpA6ymKhdBi2HYjyZe17Ca6zdd6nDmX7np7XKuMXvfR",
  "key2": "5TZkQJ3eBW35oxEseDc2ijTsiymPyTCjc2bYiiJxULanVkeZGwd6rucwUkmiue5CaJyEithhagA27AwF5TxEGzF6",
  "key3": "437nwvFnBSBmCBEYFgBtE5Gy3zBg3sgUAi5cvfKjcxzDqCUgmFbSXRfhSPThhuJBMY1XcXbZb4uPvLsHjyKbpNAC",
  "key4": "44rvDkPFpkBDtACxAubCbMtCESR9gnuQY7SLPyYP3LT2n78yNiTwJVXcL5NqaMC1aFLvsHBQsASdScCD3qrzYBSc",
  "key5": "5V5qr93TK8q9yHq56iRHepPNBJKAfRsFaqcT7T65LWbRhHboaXi9GEYJL8VK5CzjerWdaR6VQS6kGnn8kYudfMVY",
  "key6": "59QvNHphFmUdnuTTLm6vLioYGejYLk9tKumtK4zLsuoc6xPkn1DF4GNwK6i5HcLLjXbVBBf28jqJciyXEdkbW4Jh",
  "key7": "sqckvwAJVq9V2ukKwtSvZ8qsyAgWvuAsyptoHwfCfZdPH55q2n9ibXXLT67MZgTdHu5kGdsgqPqxNU3uniCLW19",
  "key8": "2zxfaewsENCrozXzN2QzUo8ZAwBohyTMrPBVmqAq26biibCGCfkgLdypNNCLpucikjGmMAseACLrdVoYXycLkZa8",
  "key9": "4UigNzVn2FBZaeDSoC358gpifUTp2oWTSiyVt5bmgtYeAHvhZysbaJdqpdZcyUV2HZfmf8BmRbpMtcXTSdW6yQDu",
  "key10": "5dAiUpzdcrEU3Uvv4nrMkSJDqnxhdJ4EeqV7r7RdLQkUDeUmLdamhDpd4s7VRSZHQNG7wCaw8ay9Jv96YD3eTM85",
  "key11": "2AGDx7yng9QB6dMvEqgoExUTzhC1JGUM7kgM3urcegSYqMkZJVFexXchZKdJZy7ZfKzKCGbrPcf2WoJsXUU2Aokg",
  "key12": "3SmRCyMdWp6Zceoikv6hDdApPbrALMZVYgR3xTZtBjtTkEcAhL3eTqBRcVnhvkMpT6MhozRas8SgymeZTLB1HLzR",
  "key13": "2QeBynDz7nALqzkEYCBLk8GzHwriAgpng4JdbHPj2VuHjYtpzvGvDGnMn3pFDkotq5G3gYhh7vcK5DJodb8KsUWi",
  "key14": "3MmdYTMB5JSgi3Nz6DZMNUbXHhuBMrpAKRdEZwjvD2wgbvS198cajVAQmW3szSDRK7EVxFpTU9LeuLWVRBa4Ayz5",
  "key15": "2CRBaYqmNBgy1Tpb6gfiaHZvbY4JiWerXwhemF5suxuEktM9uUBYRXCJNxHbFxBupyYXMn85d5NUp4RPVrgcJ2p1",
  "key16": "38CSWZnK9ADWzFNYDhxHbtTShGEZ6JmrcaRVdFaKMLjHXF62vrV4mmEHRzC3AxQCQmP4zcrYT1S4m4iACMutK9kL",
  "key17": "6JZvvqVChePKzVB63qPrSNrvgmYypcKqyoSSSAqFnjqd6ZqtAS7shgPQd3P9M3BjzWuZLkGcYSgPGYQuGe7GUob",
  "key18": "5HuiFJWjv6ixkhf8Nb3wNLDN5W6o3bX5MKsVebydVZ4ENU4sHhEr49jMn2v3WuLxPZ5Zo2C1dGhY38zvAGNJHyvX",
  "key19": "2X2C1Jhm4UKEmrxMbTRwVVbpP8dpCYLZKz2n1k7R642iF97qJM4DEPFPtovnuTKVLMxZ2CTNT4oLzpVeqydoaRZt",
  "key20": "5cLHTEC7QCWQ8v7HUqpLzz7MjSDxdqvDhHzPgr3PAoZFqF8LPFPtWK7cbtzxW2DiUJB6cuwhCq1j3uYnyBox8MYG",
  "key21": "3RhxPMEjKkBSb5wfY6NkXTwBfjev9dGZ8bcmZ4k1qQsreAWy94dJwAu8YF9Wangxm7Exyis65ko1UE6HnnwAFRgN",
  "key22": "3oJReV71Psq2o4M3U5LcBXnF4ZQHQTCuQQrnokCUhjXGkfoZgW8WcZ4NXm7DWepUcgrTRgwKAzboM2SzQHYoa6Pp",
  "key23": "2LeWX3VZAvqX6ijGyWVVRuexCaeeerEHDZw2w7jr65xmH5EXkLxNNzWyVkcX3Bz2kXPU42qd8ig2v49KNabJXmTf",
  "key24": "3dse6U4rR2qtGDFTdmernmVG86ZupNKU1rATBjXaikvNrCX3tvBputGd4EgHhKnazbYx4gM1GrP1qVuyfEGxPNos",
  "key25": "53Gs9YZCiXv7u4ttYUhHH1mveyuht2vwv3K8QHdeJEYbVV5DHtHDVW7boLZqmX8KHPAFvVbcj77jen2sDBv7GjTM",
  "key26": "3WENPZGtLEvJGeNTbmsQUvQsvdq2FuPcir6mQfmoSbvEbdDPa4LXnR6KCjoJ9qdzNRoayAbChXVkx8awCE1MV9G2",
  "key27": "2o7zHQSsLbFHnGCJC5FHGYSYWWNMDLVdx9ZbyZH3KvUUXyi8hAt4LJ1wCNvw8CtEZZoVUYuBGcCLJuLjRqpjePfd",
  "key28": "SV6ofFvv1q9G3w36L84kBGXX4pgvU6ZZ1qR7U4FxzfnbjE4RTZ1rqS6KFAmL2VS5ZNLLbz57ep5PqZe8NcTFiRV",
  "key29": "2Lnqsc1YkbsjUTEtnXwvw3s3oe1PLK4f7DGMFwQKYSBjj8RzPaEiRwsMQLkVULoT96twDW4jevAyEbsWEzG6WzLn",
  "key30": "21xLxxhx28x59UPgXn3ngWxz8AQLASWXtCnVZJEmNFn9XmBLPJ94MSLifcD1tXrg4m2rsnTUrAnqFiF9sEXzai5Y",
  "key31": "4gz4DS5MZHUPGv7F7bJqHeBqLCAAHcytZ3jExLXEhWy2o44oKC9h93FY19mVnnemVL6BnpsgdtwgNApFksox3TBS",
  "key32": "DMSKftxJfLPzMbiczQP9D7MFApF44UnfJaeKcoidWcd91atgaj9Ef94eiqPAULRqAXNUZsn3qPB8TUzZzLrQjDq",
  "key33": "2BoNMNxTbUPvbWxxdvcJXnMnusFqD1dGnL65hiozKA2jVyvFWigt6B3uSzMGgENVkd2BPeujWLYgiQRaHM8wxp1y",
  "key34": "5ygSE8Kfba5pEzFdN97X39PJ7wbX1LzC3GWZRfXJSRcvXtNK59t9jMi9RrU2rXmZsiGAuD82RJAMZdmC59atyLnv",
  "key35": "5DtmN9ugPnkh2Pqfbme713AjrUwaCT5z7312Jr5GGm268t7C81iBh71udFJjdQdFQA9nXp4oH4TwAexVp8fBpXDS",
  "key36": "58qKzHXWAF7MqL5AcRM2LY398R8wyAjsrFjPj7UfGTcgtcSboy1f2bt4HQLASBb6AtwfkEsZactxQEdjFkMRgZUb",
  "key37": "4hzQ3s2joWFL3iQNTNe1iVHYePYNkNATCkB6xEYPBhittDdQdBQhFKn1FgNZxEvZcAHrytXEwfDWqG2HEvKHhvu3",
  "key38": "WbWZNfs9Da648mUwGKQgRiZeNdJa9VCuDZ9LNo8pspnR3tsC22YdWypbiNL9jzaV4jxMqBnyhUGbmZXiz4zpz77",
  "key39": "fwthZu4sHZbhfNtXXQWTFLAY2HBA3tPT1SdnenyKN2gvNr9x8CQc8Y78GdJyyf1T8aqR7bL6ERtNktKzjnsjPR7",
  "key40": "2YpcHzzAtGr7JAg7zzMtx6gdQQQNdrH4qcLit5T3SzELUTDAwK6ayufXV28wf8tf7ncUfahZuKBxfYdqdRbzQw6X",
  "key41": "4HGdD6cqT37j5vp1uLZfkN1oneFmdNJpifMgMngGPK1NQdhy1j5wAA4UTksxgycFsK348vm71NAd7XiYHQBmdEFT",
  "key42": "4WPXJ5CApU2soEEM2tiFEeg5eYkhY3qVDVpotFb9K7CZtip7XGmWBwBLFs9pp43no3QGZKrTLThANsU1jx49AM3K",
  "key43": "Dvy4MESinujd4euzDovd57SYVhvmBqHzNwXVnKuAxGxJGMJ29KyS8CrbByeDPjG5LbggviYTPQu8CTd8CUPGaf9",
  "key44": "5JojvqgCa5DEuucS9m52Z1MsdYdTEfHztbDGmPJZSHPdPL4zpxZYLVnVAo72KCxyib8QfGv3L7kwKyT8hC71RGf8",
  "key45": "4domuxGFrceMrWxKCN7r8hwPAHvhaJ6VyoWgbAeaJftURr9Qk4S1Vis6JKgcFeHGUrsi97einFXEds9ZnXjQs5YR",
  "key46": "5y2EnXXXdJx1sA3tdq55H6yMQ7R8jt1vkeqHvahsR6UjYJZ3qfiuDEsLBaeUw7JYJHdT3m9tq7h3kr83ixkj5evC"
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
