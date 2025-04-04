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
    "5cHt4x5L26iZgGGst4qZTPse5JML1ZP1vJX6GyjnYdAjb8gEjhS82jXRaHgk2ncuoExfqvC3i1LvD4iUaUdX7uUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zub6suQ3qc2CaB4hDJXNEo4wThBbC9Qo2k5pyx9GxbxCBjrkg6uK1hY8euXcS3Xz5wkEX15CYcV1eZSeTDNfCjr",
  "key1": "5XtRsf4xCVt35Hv2wiqsk5Taxf6krbzFuFZhdPgbpyicGTqCwRCSXSRoZ6ZdXNsY6SaPXJNSwF2eWiQeEtZrvCe9",
  "key2": "5LJ66r76HhSz9R6oCq4nWAw6MmHbidj32RuRV46m5oYc6WUkDBBmKp3Pbs6GTk5GTQUq9fSj12mGXnFb9f6sN2ai",
  "key3": "4qzRUM6j2VUbMTkLu7iosS97uRmhngn1M5MmPqhRFMkC5BoXkkiqvS2vHwa1vfSasK5XphTeXa8dk1119HEcx9Qk",
  "key4": "3nEeR7fpqTvmUivcxKBGUSnihGwcYTGNkrQmqQ9SRBjG4S4FYZZWJuExEe4F3pvizK5BGKjnLsdjP35Cg4C185xn",
  "key5": "4wFNQzrGab6XTfNVyhMBgEBygGm3cwWueZV3JkBMFGFtaiPKP6jTvpyfBaBBBG5GjJci8bMkpbiDqDsK9Wtue1nG",
  "key6": "2NCfU5djrUt1fmheuN9rF16U1zNXisDJMREkAUVoLNSdeuLkAzbke56T2aRoLQZ56J3VZbyubtKuQMP7xVhy1LgX",
  "key7": "2V25FoXU1vEKSYTUcoQbZSJmrKV2d7LAsNHmY9BExqjBLbAPiAQwNGNqveSnnEMyKHtoAc8VSzrS3Am4HNbum9bG",
  "key8": "j1LcSkvRTfn1eAJz9Qz45FrLvME8RiLhPkw6XMjoXDeoM7LgXBhLpagHpNS138N75czZmtbedgxuhfyZn2SkQde",
  "key9": "5kEt5JAFC4AawinmKtPJyDKECjak55QtV6L2fnvKiom6WaA5egZPgAHAagkLY9UdSAxMWNb6XpsZhMhNsCQAZCby",
  "key10": "3ctCk6W9BdmvdVXkET4obW2ziiMSrZq5ECdDBPwTMB9nmLDapHTVvVQNsdypfYofu7MrjmEGR5Jmva7uhmoWB8Rr",
  "key11": "4r8Sc1xCHnzronGrMGVx6DdkCnGvstvYs8PTVRkiRen3YKv6xestcQm37vDh4z4w6bFCQ2kqWv5pR8bJn2Ch1is9",
  "key12": "2Kh4VskcS92ZtBvK9GFwruoSTtmWfPsTYbmfgNRnJ9iaug45ocGxkji65oRBk8enTLNbs8fjFJq8YaaDM6UQGngL",
  "key13": "58JTurD6fEsnMkE8ZaH4CkwA46migw7VQaB3iaK6ZCjcNMzML6aiyB75aPRHQyijkcnQzQzbcnn7nUz1UR3QEDcg",
  "key14": "3UQLyVTXsh9LNx4jKdtFdbpMdrpoy9q65AjUXu82RZ4Q6Jsi9JugoWQkhbCcRkMHUTcabsmyB4WRJov7DB5yuU8T",
  "key15": "4NXtA2fn7K91FTFzuLtbv4skT6aW2YwaaRnSwnuajRjpJL4DTi7ukToE1ZStJeQtBETUygBM8ipU337TEftQdDYz",
  "key16": "4aXY5BR7f7SRtaJ1UEtjifXXUCUE7WvHw1HeBPRuLUQWGQQVsz3esd5nt3M8BuaexofPXLYX641Tj1C5yWJ5bWiq",
  "key17": "3AyVdtiHreJPb3jAaaeZ3kdSGwfvGrfehhD2P4Bn3jX8STvz8Dw3ecq7z77yKQa6gwFm64Zohx5kzRbju2TPWy2x",
  "key18": "5sz6ZYW3VJEnR9xjeqmdtAH855zFmiQv77P54oNyxih9zmNWYHW8Bz3ZG9Zm1uchzdsjyXWDCacUTFDzfsA4oiC6",
  "key19": "pQWcnbcqk3CTCKKJCYDg8V1CYgCv6U5yw2H8UBKSWf2SiHcUimX72UARxVUZs6iCt2GkzvdiiPoCX8YRWizb21D",
  "key20": "5x2sADcQWg7mUcLE9CNjXrzWKX6tXTmY58U7YUqhpEEnHw19mNt4eoXwnUT5x9Wv65ZSJkJJ6UbMgQmV4ucDtxQv",
  "key21": "hFrJ9Vqbm4zFkecDQcqPoGVGjRcJr5ZjSahmvyGVDB7vkBEFh1GUP2qYzVUzQwbhnzrvrWzVbvfigsuqtAew6GK",
  "key22": "4b7egAVjwx5ZcYj8TKeowu9CWeyGHBgkGEMhYHFfDnnMCpHEACAz1axYMH3F2sdVJBrrvZNTsjA2ToeA8oPJEp96",
  "key23": "257329Vk4oMy7sZgrzNimWotZqL8Ezr5TxZvdrMTEPqhqyiAaZu6pXq71YCmkpUvrDy7nGXs7Gonq5wtp1P1RFcc",
  "key24": "p8aphtgDQ8Ku9DuxW2K1ntLPYCMnkyYCF7kq4QxJ6HAtWy46sspdny2EK44NmQxgqkxb1cqZFXTeApHnEyW558T",
  "key25": "4BXEjSuXwpSNXc8a2B4ULJVhztiwW6fy7C1oLwhnp1SBf2FJtop51FyHW9EvnVipKSFbRo9LEqP5R1kYB2tMCJKf",
  "key26": "4tAYoe9c6AYQU3hTKRMTWkQxJwKjA2ooA5MaL9MvQsEHrvXEwvnQX1Fk1dWiyESvxUdUU2mH4zCrRZDbzdEtS57h",
  "key27": "zamxzWHhcjLfhQAd9zGNTrXHr13CaG89Gp14Fbh9ERQNFwZYLjqu1GDBCZcAnBevmJZ3DaCAJNLtFWGcRHbPgEB",
  "key28": "2BfEtjxvQfj8MPPgvhSyYxAWMLdRcpsnBYZFSyNusyM7f1bDKgcgee7Ua26jcDsr1AV3YBAhxd7J35LxuHBiGD6Y",
  "key29": "2aevwfymsWTURY1noFkosdMnZ5mP2zy7Uqk3xrFyMqCzopWUBSGDYZH3QMcZdc44Ugbvhb7oMctWybcZDdVXUPfE",
  "key30": "54qsUDUhdzfMdLWc62coECKR8suEuW2Pbi6NcdCudjiZ4rE1JGBtp5YSix1zYeSbmERgxjbR5C7n3MFLh4z1mxiF",
  "key31": "4TgbpuLiZoSBsPaMyAYMFTi7QcoHJNPLHBiMbPCrnb83iF4vomhPkqrjscnMFw9eW9yTotiKhnUUKqWRu5fBRWd2",
  "key32": "3CTThm5YPuYu3QYw5JTnHN7r5Wfg9fxUmHLSu3LAQ81fhsCkmWuBotTGZAEriUZwK8K9JhCqL4XRYFWKoS2614xa",
  "key33": "3in48hQzqAqFBbhz8Qsose5KbxpiwkGvGzhwPEiRaoKmi6KvqoqfUytrhVXPBYouYuSXQhmMsktJk26ZJBxXtQhr",
  "key34": "3yYiTKPXw8AqBYQzRxi54noBzEhDRWYEAA7eB1M19yX75xBnwCu1AwEXFKQroMQPSsrLZvqVYQq6gSWnJZ2UiVvo",
  "key35": "2fMTi7c5VVdq9GSREAhkxbwrQFq7yzqypb3LB7hKwWjaEPUgzYxV1pbS9zEQ3jhnwcHFVz8rUYtjgZQ1TKWGUr7N",
  "key36": "2Mtj4tK2zxpUkfPyVcv22HJZhDXCTuwuG1QzvhR4fGPmEm9aHoeP5Ueqj8Ny9rums7JpWQthmXuVZZ29hE9Dgm1F"
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
