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
    "4vfXKpD5mMddBbGa1hrFe2SaDu6wY6YPi9aT5m2SLSCNwUA9thYLo7CnjiwgH5vomCKc5TBuR4Nhr91PvPnm9Jzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65iU8vfi3qHSw1rTH8qXkZrbLT8ko7fGNAcN7HsJsTynooKKzyvujB7WDYR588SoHgvJ7si3jR4ndMkNuVxeycmd",
  "key1": "YgBem5bdQUhLW6TSvEXqyFoVx32bHgbQ73rA55dfEoC9qnCTKzG4WRBvs9LYxarUrA5zue8Pfa1DbwXWdFHVQpE",
  "key2": "2KepRPfqPFGwDnpyL7XV1y79SfaW1PcLo8xZeMs2xBUVSYmdL94KQAaKoaPoVE4bjS3aPU38wCmneC92fvvMpmM6",
  "key3": "5QmLUQXh3Y1gafCuGYcDG6CjR247Y1moX2HVQC8u4pfTocNVaY7vh9CwgLAwhTf112tGquBTGR9qvo58BaZYSKQn",
  "key4": "2mAvLYYyxbJZeZk6QdCaSTw652DhYHV6geh4h9kjcb2K4tJFepAEgMBym6buiaUvveb8Mp1y3vgnF5RfEJJ6GW7X",
  "key5": "44xGzRQdtEL9rXWK3BuSAR4XwzkCSnuSEjdPxEpuMZqhcie7EDuAYRiDCR1c2A2MYKLeJbU3Yq2Vb33T7f8mtvuV",
  "key6": "2j53DrVeySymugdpyAUhAWBCSe8fQbNVF8TnUK89zURUgJUwA27P1TW6A6eD2zCTHmaftFPrtpa5uKjmx8QEPuhk",
  "key7": "53175zPAcnSYZm6KZtPSzMZF3hgHMqjBzEkztxbQiebJqTcHwKMwL63JLrfXVgpcNjjZ18Ci6eKYqnZmKdnwxhTr",
  "key8": "4PAjs7wQXQ1LJp6GtN1XMQzd28JFBVH7aVQfmA9EhUhjQdCLUnKAAWfoTpE7K3bVJXM5dR1o6oid73rLJsNeZqpp",
  "key9": "3GNsYDwoQtYyrzxopc4TSCvkjQPWAjVeasQmcuVWhWvXkJVRrcv7RPUpv37q4X4YAXBJGzCZJeS8jBWhtpj7HqjK",
  "key10": "vedyPHDBaFZA3NL73CJ8zu4ST9E7ATepP37APb63nToemeXeGAmQrrWJaMcE8vhCJhd6qmDjXYtLdBQ8ETPDVyY",
  "key11": "4ESGdYnY2oNVxs7yJwgbdRQAV5US4pCxQaA2XjXC2wfcuRDqxB8HTCT28JvEn4iCD5yd3Ux2FEY3yoSVwAjUENdB",
  "key12": "63YFTLn15gSoqCFwtdv7m14cQedEoQVtaEv837JAuSVad1GFe5sTf1nKwgFqCoKYXwACjvmDQeLBLzFS4yaVGmoX",
  "key13": "48kJT29vhDpTwaGni9DsxbrWuWVi4SMxiccxKZETsLJ9fRmFE5dZr6b4U9qor3n9VB4WiBTkodm7ArdY2NhZApcb",
  "key14": "5qXHSSjgcreamECrqkgKvkKjMkwfhohfzNMcKftMPhLX2qoBfPwvWXBqQouTA9AqchfHXt4YZzB8SeU7tdKWiZP7",
  "key15": "4xurhVBjMVYSJ1sGaefACwV6fgnjpnASXC9Tft7TbKiHGSkxB2QKUHEeEgFW7tEPaeVCcJfQsKfCQEe9PzFVJPUd",
  "key16": "Ffqnw8wsTJEMbiT2ZxeFkfQByk5ufu2RPCyjz8UYhbkMRAjmjr9vAwiemgnRay9FzRgy3s5azsDgVmUH1kZ6Saz",
  "key17": "4qZS2MhPS9nWkKqY7kuEEMyfTYznae9dLUCapJXvNE5TREnJq7xK2M19ePFm1MRwMCGQgeMUD1LCy1UWfhdLt13h",
  "key18": "5MqNPyYPrddbJTeTHXb7iL3TgyufCVfP4AffgvDecCRrKEPTJaZEgDaBEC9P1Pnbansw2RcppM6PZtMVaBe6wiot",
  "key19": "5XMfQ6BsL6VFuSAMkd6ZHEvFm1Niqzp3EhEmfzbRjAaz5RVmms3NpeZLLvKs571fzxWbJYqmcnUARxEUMLg59okA",
  "key20": "3hAkoF9bwSfSk53ZJXt14Uz6aUTPkdQrBbB8c5V1tAsSibfAw3K448wvgWAz4EMosaPLAZyfnr5SdWcboce48UpC",
  "key21": "Hqo4FFLMS6LH9wMNi8FPBv5DkGWWWyC3oYCQL5Qe7MKgda83KF13jJTYucV4bodtM51qZs8RvNX1we5xxm1bejS",
  "key22": "4Hf7SARAyYzQgd88KgzXEDbBoU2iezK4tjWZK2MvWhA4tfNPisbt6cx3vuNBMQ4iQMkJe6FnjdLjZMiVgZHit6Dy",
  "key23": "285RYLs2MNi3ctLDje8pZ5rDRLsepfqGiKc7gGVByXfQbBTccboyjJJcRJ2SRNn69FEPf3qf6pNa9gTiFafaJQzV",
  "key24": "4iw4Z9z9xpgmXfGzbjA5i2cedBKwMbPwiDDrnoz88go7W8SqY5knbcE52Rry9XmW95vXNoZReEHUxwSQUXxXh3uc",
  "key25": "36U2KMHSXSWX9BmoUgFmhg4XKLSVsnRakkHPj8LVkFE82Z5Z1bkWE7RPusrdGMhsUz5doCFjUE326BmVqZabBKT4",
  "key26": "5cj6hzJysQKuikiZeAxdvpgEwVBQei76aNAsAx2fFNUiXzRpQFwEHCyYJbt3dD6PNNR7ysNxbbk2CCteghTowSBm",
  "key27": "37BAzieXMaEviJatgNfpTR8L7Tqd3hKTSFZatFgnSqqYxSg4jagwH9xHhSeWa2M6F7KXFexBgSHbDeN9wvz7gmAg",
  "key28": "5QuDdkUvmTahsGWJh6Bw9cEaHeKpkpcpuCvXjWqfaBz9t81YracUsge22Zh5oHmwXTyvdaniYCxrk4x8BMixe2vY",
  "key29": "2yetRW66vYZC7mi6q8jNL6ZxGzwijDBownPkAhjkogaVRQGQPc2hCmAKSGCWcm8vTWdZusFewcKhWNT6W5aYeb7b",
  "key30": "5P3KiUEwtVd5ZYMUvU5MkbRLBgq6ALAkTR2EqUqzRUssaE3W5fLG34HUzAN8rJj82YAjpu3x5MKGvpYTU3HJpk49",
  "key31": "kGgE2kAt5MQWpQRY9g8GWbAoXGtbJtKyGRA9YwBUKdz54oAcJvZHAxSE3HQSfzhTPMugZj1jC72k4TRVzKUpJF4",
  "key32": "iKcXmP3Q2ZC3oUjDrpMo71NLiGMP7KuVWwmr5DnoDy9474usiS6GiLSwTYJvcf1SZchRFF1bjc8mWzbctBWt3LS",
  "key33": "2ooSp25zhX9JakJgSTkG2J3pTRoELoqmHk9xfm46LKXz5pe7bKsJs3HSr865o1iobcs2rkE1DXx3XynDi1EM9p31",
  "key34": "42nESKj5xhzNhBMwuWs4GvCo5fwBY5ncR6Cw52pmZN9WdRJeX6W1XD2CWYFi5zDkUrK6Rn5rhnUjgAhPL9ugsZ6U",
  "key35": "5eXFJFfkZErYhHjdvTXA3ARwdWfDVV5qaeXv7X5HRomFYFxTommZnUTvus445W2cCFQmmDoWzWkjsLoCYR2bnTrA",
  "key36": "2aCGFBYsWancvXX5uM8GA9LnihtqtDDTKhXGjmwyVDDhrTW5wvTACTtGGDcyHGahwYNp2mPbwgvEWgm7Xd5aXytr",
  "key37": "4oeD1bE1k8o3G3iYrcttD8Gnjr4xDDxTDm3KGtg1jBWTJwwzjkZNDRoWnSVqJyj7NE1CAZKmW7ryDHh6Srf1hHZM",
  "key38": "5tjkBSm16XTn3jP3zvno8DF3mjm1mv3Cg7eQ5CnwdkEk2CK1wB57hgKEcDcNXnSbaK6uLSta9vZTouxyBXPakFiU",
  "key39": "41P97EFC6PFMKmBcW6wWjtVJXScXG49YK4yT3TQR9kBFqC8Y8cgxu7ZVFAKbhSBX9uycu9TtnS1TceBig7FyY5BV",
  "key40": "5bZtvTfjWCiAjD3pKyyXspcQ7rv8E8nSHCLQgRNToADDJVSa2dctsrUGRoV5ArKFcC7WXqCrCF16yDNBzi2Kbn4w",
  "key41": "4NkFzzefsyDbN9RJLQuRXT2XdPwuq9j22cuRw6ihQshPSzFv67UiN7Yyd8fWQ6KVSiyQSfJXChaA3GzzEu12ZHWR",
  "key42": "62ETkT2jGREMzn4Ub43ZQNtJHGPGD6DQFzSZUjaVPHeTthTcXYcZck1MHV3sNtz1HnAtrEzmkZQs61AmfLaUarNE",
  "key43": "3qYxHbfTrX6aHf6Qo28rdQcMNNjqpup5QiR45ewyFbEh1w6dJrAzJ7osLdvrAnPFvKMPjnqFQngZhQzfT8FdnP8e",
  "key44": "5Js1YW3RoHRDfoTYX1YXCJ6DbfMSuhCHXyS65Xb7cdE9kQrorVUoMUP7WtQh9HJJdYUaUkKSKTcm5Ma2ikuZ3Xv5",
  "key45": "4aQ33txsM9J7Vb24dbHKia1xaegRcMeJn2ZPxnrSvef5jdbhbZobwV3XbksLLhJqfyZe7gFxzehiFYaEML4HFDds",
  "key46": "3gfqX574kWBrQQFrBqPjrTXhPcys6VdxpGc24CQawv7QnuCmpE4KzG7zQHoLUsSUpzJUucE5yjWECokPUfHHUKJP",
  "key47": "3xFjYw2dxGTtgg7hkwmvxX5Vuiavw3TWgbhejYGNku8t4RgUMSaMkSVcThndi21RpDwpb9TPPxe8vujDiqDGqSek",
  "key48": "5xMj7kB5YWhub9G3YXgPngnyrvbeNvd6zLgTVzT2BpYLhzbLbaobzZsvRuzJWNvE4K4MjCxMNh3BTTnHuXA7cRAT"
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
