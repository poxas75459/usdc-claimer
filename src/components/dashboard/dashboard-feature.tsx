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
    "2VGzh4vNjJodjWCB49FSsviUwsrUSDanijBJ2bQnC8wxFYY6GFW9jWc7FRH1w7gAG1TqhtRgG8z7QeuYosqULj9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MzRmY8kXfiavvfQYB4yjo2Cuop1rycmQhciuun9Y6f1ZgXesSCgdbkTLLdVzAaj87bLhFDmvjTYLPKj59YomUzp",
  "key1": "3tu6biAtda12rWwfzLgXpFjUFeavF4xAGQ3uZhJ7tt6kVNc8AXhfkQgEWG9rGHMWUHabF6GHFrUnVDy5AE3whxoE",
  "key2": "541MvpjVpKaAi8xXQdGziRyFrZyh2CGLEvrrJokrYyJuTfL2iNiyLQffnnHpn4Lr7YW9SjKMXgTk9TbQbdRumoyJ",
  "key3": "5DL9h9ozNLxT5X99pKnwnyXkGRBkbW4gWJCVjMnov8HMXy8Kj1no3PtateFE5bLDwjQVzwiJmPmBRoY3vvBNDL87",
  "key4": "umFceVCmP9F6ioYoW9nH6utBq7Ns27kvnfsABQqbf4WFQiCCzmHchiwD6xxRrDd7SdPZbVCMh7pePMoJU7yfbTC",
  "key5": "2MGUoJtjueNMwGpqJifkAdmtRk176juDmkjR6cSSvWWhxFgS1SGwL6cz1x4CEdQbvYUCgXQbyXNWDYJsaRbzSJTY",
  "key6": "89H54ycmzEFsxKS7NeV3zykYLMrMxEQTJHd9xztXWMUgkVDQyEZRTQFRYadYaeAr8uM6hDx3zinqxnFd4tQGPic",
  "key7": "4iWekra36rpvsEtrnEmq1zF1r63DQafYfwRxd7V2BLRbX98BZ6JuruCqvc2iaDyrWEzvTyTkg1UTL1KWAcG32uTJ",
  "key8": "oQ47LFTyxTyUVJyT9JMcSiCod8BmrrKtEw3oo1SWjvL8c5e9pcv9NjfWV9andDykKrVYWem8uZgYdiuRtU41xan",
  "key9": "x23H3m1vrQn9wqFGmM2sL6XobeFNR8d4pKWYS9k83b73zQ3py4rmtNKvGbwQhRFM4gz3zfor2eB7CJaWzjpn1Bf",
  "key10": "4WSeW2xhxdXW1pLqaqEX7vqKjMtkYvck38R1ce4XPPFLwJDKDD4MwsKwMd44hXURyupxWEGAt8c2rcZEJTaPcQCB",
  "key11": "2NmNC1QQ6BkCLZA3WPor6fbvn9VcB7VMRaKRo3Uu67P8hNryRmxDYj4THxwYNGr9UWf8LNYX7izkMnzJ9viFgonh",
  "key12": "EE1EGE3452a3UobthWxT9RVqqsnQyqsyokYca99KiU2wtLnU4bCWYQ4wxpmowdSv16KT8owUsTfmu9WiT6TBGAY",
  "key13": "4nNs3fbeegouxGcR7dMqkD4qYvhPJBT9z4wyT5fzbUtCc46D51qFJp8ErjKqMK1bTUch3xrQ2GAHUpNaf1Lif6Lx",
  "key14": "25t61Ugh9cuJnopbJyrnfdsHFNNkvjj2gJZCbj8RMkPEGLQKj9eFb2TQT57Wh7XZemqbiWSxx7bos24i9vSHVDRm",
  "key15": "4j7SMNmvqeA76myfU6APUWNrWegznkF28adNKJJyCSGDFybgWg2gVikuupW28wXCGi8Q3MH5FkG2Eork73m4rDRm",
  "key16": "2fwdUW9Px2n3ZQiKrNCtt5sWb4RNPhHCVgwbVsf7wHvy5nXfjrQQiPBenA1hSR5Moq3fnLQjXtnsMytLdaQemUuk",
  "key17": "4mW3gQNKcBntMshRrtXcwWKaaW9KRhiyfkWVMgw4cL1rYvjyC7virWGECArY5nuDB8RFzwh3HRAvAwAcxVmcP9a1",
  "key18": "27tzJfSdkzdxPwoK7PLULMNi3JTuKpyGWnwxKFxgqTdcY8rchQ2sSWeHBBvG3D6VhgeQK7n5SJdJGqX5kidQJEZq",
  "key19": "4DUWMcgfvqNMuoBWTCe54azuWck6KGkrxxXUdc8yoGTxMj8LwZkiC5cLS7p8wCqFNg1LsswM3d84pfixbAUBnX3t",
  "key20": "4tJ1AWBJEUaWxVdzU7UD2RYkgsr1Y7KZrjFkMrcewiPTWiRJ8XtKKL2JJaVui1iaz8FwYW9T7QEv6a6KNchDB7XS",
  "key21": "2cdV4Y7t4Woeev53uGTvtRDbb4EmrcaCb5B7s5162SEQsqTojAcZEBXWifzKWschNV6uqop5y9by3skE2FWumzQ9",
  "key22": "2xVHUHBiJQ6g2oC97hcV5EhdAEvh8Kyojnk64AgFDi4CmLZkYmzyDqxPKVZX6B6gPYga97b6iNSgWnveLVWbKwqc",
  "key23": "hy6sLrWC3Uuv6EF3iXxC5Gw7YEDzss4JnUbyGHmJ4LrRjVwHfFJ5oCtHjQWLjsRutWPrfaAvPREAmc47o6q2EZ7",
  "key24": "3zLfkzH2usueXoHpHvR1XmqXcs8ejazugtKeHpga6i2ajuchZ1HSzU9DJNt4Nx4quTuAYcZuUmS5e958osndpaRs",
  "key25": "5LFfJUJFM3Ftq8ru562Nw5FjtPKV242jhkvndZiTHkE81QSttTQop51qPYJtQ2EZKuWo2zf5hKW8EGaF5wNxCYEW",
  "key26": "3uUC2vWyjR7cDUnsnG7meBqqSLnxKYNP7rW4qWQj6r1wXy7GFF1vhpBmXcAEqM5CSa6y7VxkXxwDPe3vepCHuDoj",
  "key27": "4pRPFtVH9AgMgmMDMNNRGe7zmdtYhyktzvYwy2puRgZmMSnpuWR3y8yQxSesYWjWFoUaoF7ViHWTCU9aVGQTaGSg",
  "key28": "5dVkaxCwYe3CtbKytieJzTck8mYYgdGM6XeHzLtxub82fKKfDMYGL3LnjogiBhZEeKiVa4eABFQdNQFm5EQaugAG",
  "key29": "288bhimBUMLEkeNcVXEJwipYUXxHmVz9pwE2VsA2jXSivP3mJe4cG2NZ7awkfDPZP3ncaf34CH42ZSSur4hiRfpq",
  "key30": "2MkCowRT92pxUqAeCJyWFJXdVUQWnaZGqKjUnHPqoza2fQWWmTMpHU88w7aTPRxcKQnAs2SNagnmmMF7Pcw3ofnv",
  "key31": "2u1YfQZYwQquW5YKLnHpJ1anRYk1q7Dh6nLL6DdREcmJqdfyvciiuVmVcSB9c72NgyDMnimJr75hkkwaNQtP4NcM",
  "key32": "3mbEZaL3MhhaSMTimUMx9Bta2WfuWENx4HVKbuHQT9qVXCEaXqY2Sxoec445UmHWsuTvpSKWR8BkspUyRrCsNqZj",
  "key33": "3B21EXfdo9eT8AvGVB7Kr2duH1vUSoiBB2M9n5Xp5NLd1dQrrF5Q5y58fjWazf4jN2BcJhU6n33gKjwTFtAdrEse",
  "key34": "52DmTDKVuMZwpDBwFWjCZLp9TP7W9TmgTxtL49jsjd8rFzUzWF6BqhpZD9G6A6e9EzoLb5w1WdSNuKXxG8u6cRrb",
  "key35": "gdqDrz5muXSUHHqyPn6mHqHG3oL4Kv2oEBAk9P9vuoQRKN153wovByuV2xReqCRBwrKqLpte4bTTKGPEyt3dVrr",
  "key36": "2iYQ48W1NRxd73F5c3BxMRm56ma1sSz1qPybrWjG2iqPJRnnBpoH1sRV6MMhFP6Ngc8Ro6TTnPo5oM36BBVvvcj1",
  "key37": "3eniYU3vBMbyCDHAAz1XTjWGQQQtY72MWwdL3yGBEX3bCuSiaxLUuYHd3gCKn9eUrUiMEdc5u85J7UDdg9DQD4ZH",
  "key38": "4SSefuxJCjMooFK8KUsFZ8dsqwWrPwB2jte1fb1ghKtzhHywz8cULYgVVC87mEG5VHoRUcMqf5mVi7iuGZnJQ79c",
  "key39": "2cTq61GnK6K3aMAC2g94sTHeXBeAWxAZujc2GxvRRerruP1KjLUqYT3Fh7Zj83D5sovGw1PSuDvgDtixJKHofh4",
  "key40": "2CERTah9aUzVRhBpHTpbYd65B3gntsPNRJUHsVyvkwtCen8tDzgSAGkjoQ2NkoG5rS9vXssRTBtCZCSGvvLenyQP",
  "key41": "5tSKm7EC5rM8QZHub4J5HiekC3WvKztxgPwengm5g7cx5ABhphzcMCCyhN8VeYrxAKTDx2U7VdR9KB56JZpqJorc",
  "key42": "3PpZtaEbAYeEqcCM2aeB2TsQMFNGQyQGbtgg6TSuKSLs8yYazcnaX1dD1mUjFqMC6CRHu6CnqE98NJV1dH6HnEtr",
  "key43": "2MNxUdU7SVy9XFnNaWWMDXTpUcNWPUKU346MBxK297411hddnZkxk19zBii1QC4F2rVd6shDbYc3sm2CdAnnS8XW",
  "key44": "3viBK3XVTpMcxyowXF13SwS1w27KQE8k8pC1dSbKDZxEX9wZ9EgMpcwmbNLD8eHnQnuXvnbR8Qf2sWdYcvneZFhi",
  "key45": "2DAEBqpbMqt63qJjwT5pNxaCrZpFR9uBiG6CbaaEvmFkifbGtvqbLuBZ5BVgx6MV7pKo96KgtF3XcgWxdpyGyh2e",
  "key46": "3pz8ZqJKZSCGVd9smPAtAHh9mzu19XESVpeJvimsHxviy6vfqhBDER5bSrxCkBzhc2ipihm9TNZpPSUZiJntg9LQ",
  "key47": "45EPcMu7vHkAwPjpG3jMNyJs3pfLDyLcz5Do86PATfG6RVHntnaYqxpdAmxmGBP9hEJf36y6dnb79HVjZKjcKKcz"
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
