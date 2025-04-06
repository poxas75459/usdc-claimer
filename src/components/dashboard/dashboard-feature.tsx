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
    "67a3sbDYSfE6aCBtkTmycvyfpB8NQdNkc7dvDpvRkkTcWJvDLYJAADf5PK7taX6vZHAWfnXWSbiwt7wuBdmZAuuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QpaFGW6W9yKYSgVZbdkPjRf48Bqm5w8Yh5PFgE3s9UYvtVKM5jkBQxZ11mBUuhN3tNKZTGdMCGWei35bR7bwfxo",
  "key1": "ffqZV3Z5RMJaViK6QSArUaGTHGw6JahaY4QL3VgZNfRs6hJcukefcqxTkRTm1vTW97q9kq5kFfQZnWp7unFZvFg",
  "key2": "t4NBsA99ETHZ1tc8BRvKj47RSVGLXwbmrz3LR5vmmv2aQa8ZNVrrNYPvYuwsEQ9L5UVmxefrgVUfX2S9pHpbiZr",
  "key3": "3JtoaTKV7WjCN5XH9KhafQCgQha4ECgh27XNPKtTAU8fWRQQReJVBWWvxMGCg63b4GDnRzSt5iQm9DFtEVyqjDCZ",
  "key4": "4r6EMj5Xs2BNpTygPZkBi9chtUN5gzeNsr5JjtwJdFnRnAU6b3aR4Ce34stjD1a5GttctCBQbxmC77p16o7z7pkM",
  "key5": "58tTRpVjCXZwDYFemX67Aexeq7HMM3ELvmGFrA7aEvxKbcXjt1J59fE7mmQfBtmYxPKENx69kE8zHBkcCin38tHh",
  "key6": "5BXAfDw39pNnvYC29myaqFzgYZgSiT4AkeYAGSdd3LReZVSqGJxMmYh5htukvKzDsmCsuCWCaRaZULc1fBgn62oX",
  "key7": "2WheS8yAiXmzBX268GMqwmx47Z6GTA5PW5SHY4n5gFgQV8y7pZtH4VZmeWpb29XYrjjqwqctbBV6n7rc3zWN9B7y",
  "key8": "4cobHW32RuivRiMkXFw8QqXiUxDmsD1wmfwjsXNAbDxFMQ1kcbyAWdFLjesLS6J5sy144c2uqqyc4TUiAtpXoJxr",
  "key9": "51EAKpVUDtv36LfiAhvLzKz4AMmyZNe47TyPMxpeVY6n2rxBuVQktXU5yJJc7Fntg5GEHPc65ZEkemEZgRWg4GYx",
  "key10": "5EGPaK4RHeUm8Kg9D2vSbYcNfecGXdkLwsX3MFZ7PPAfVFfv3tDP2aoLh7QKV9PZ6sNB6Ar6uqg85XNC1RcqL9Mc",
  "key11": "2R8AJXkTC9JXL24RfcQ3qo9nSGHUd9dUs3K5UMEgcmo5epNnNDXbuUMUzCUSuoWBxwbnC1Zr4mqNp7jQkpTHwXVT",
  "key12": "2gUzHWYrZCWLJd3BbJaQTQoe9oyxMceJwwCJPE8QtjkCcZWvuCaV9E9GYNKuzfcxXfQDBEc3rHFVjq8PzqpFfCyA",
  "key13": "39wZzvo3irrT6AHBZtHpsBWXbpobasiJ4QKqKqdSqKqZnx8hW9yUdw1VYmmDUZBiVw7SJsaL3xomJ5mZMcYb671L",
  "key14": "3ZdbzkPLpxzsGVdJ5JbJQASmHmMPwXzvmuJZNCz3ErrbBQDbL4vE4GWptuHYKKvzw6wZbtWLDPc2b8QTfh3xdh3d",
  "key15": "67LwDFByZUMDsJxrHpcNEir9BeG1VQv2Wv2Dv64q6bmqZpHu2cygf3JexpdQ5AZ9yBTY2gzqcvJPhhhDRYP5Mr7e",
  "key16": "2yCFtXyovvXCnYE3aNyYr2qSujGzz7g14w9tRs79epoYita9BAnKNTxLnrPePjj5opqpREUuUzUqzxRuwqdoq6de",
  "key17": "5PzmecGTB8WERug4rZkd2Sna1KQkv5Zm4H37ApTZbHyzjEJjLxEJinWXuBYyYfike3hs1k6rvRSVHgC7LtmbL7x5",
  "key18": "3aSV4bXmv7EPg3wNMRQ4y42zdPAPgP7uyRFYZKFy4nt5mS4UcvQhCiGVBuFbw7RqY3Qhci3UXn3PaoYVvrMFYkc6",
  "key19": "5xSaWohVrKABprWsvbPQXq6AsuFwqx8mKtjQbBzRY8a1vSnzgCq48SJs4FTiN931GiBSy3QtX3zJ3txbXppZQqSm",
  "key20": "2UzoWuF9RGY4kEzSC8fNuFRFivLUTvJQZXTo5JkoE5LLMQcWcoXdx4n5zmsyfwo5o6xoKpKgJnz23RYcBwm2vkNg",
  "key21": "bmqEeEjD2ix8maL5GKGpL3NsDfcmwGdKsiZekvDHYAJhPSKg2JKi1Admjo7zfsNLGCMPGptiPPSMYik3qM8gkkF",
  "key22": "5mF4ngNtPaxZRe46kve8wkzXMo5MxQR3HJ6P171FCnCS8jiLNEUs33DydizRosJLArSpYL8XqGbBsUGjJRDpwvcw",
  "key23": "3pveS8AXtgSwUoEvPmvkoNmcw4zTZDVqPGatf16HiJqi3kcPWv1sSDNQKjcwwJ6PwnRGkYdnPAXHgAfSpzY4CDgY",
  "key24": "5EvSLY81PeDP4nDpNHrxW2x1zVDHXoL5bsmtdYKDmiMBJpfqvpUBNC2mmk7PNobcf737VhvNz5XASCFgLLrXUXkc",
  "key25": "2SPFmNi561FWnNXmA6WwFyveV46wJiuTDftdqLeBp5KFRRwixjsDwgW6B1fWDpiG42k6rTWJ2Ly9pw2j5Zav1itG",
  "key26": "mkwmVvVv2grYwrWdr7EUnNrUsZHi11rMhYWfAJLzM7fNE2gG8JFPahW4hbKkBxgEaTXtQjpgCdXiPwSJBe6VYJv",
  "key27": "4aqWfzBENza9vuBUXFLY44tYy2v3KvdRGz8dL49xXT6z6Jdf2XU7FSNaTSg1xyE7TC5ZL9fNfyywRf19ToRUjv6B",
  "key28": "vj3WhMDW8Awdq8L47KLrRWm3bf4oo7RyTiiF9cn2nEpKRSMk6m28u4CmXrDtERb1D1KTK7xfHsXmi3dCvTMsQqU",
  "key29": "1UceiS2DkGM21xCb8RUUMQyHK9nNYHp2r4pBvwi7FPWiTXc9stRuy4VpnZ9Tip3jnM8vLP4Wfg1M4VGcm16CjyS",
  "key30": "667gnnv9AgxPLmu9VvTRvaRoGagDFK3Hq8y4qGJqSS9nL3eygAahSYr7BYYPvzXJWYfVFrkQ3haiCVrqGD6rdJVS",
  "key31": "5wH5rf9Wc4VHEqX9uHkPJSBmZwAkn5eY8PjXTpXdxzeDPtDuAK4Jt2aDHtyN4oxDZvyCAP5ntm3a7CCUH3DAZCJ9",
  "key32": "JtWrSppPK3o4dcdv7mQXMpnaWT9fzuaHZ8TmZDFs8yg5VUGP3SCQ1HqucaxAj5PnUzmTeLVrKk4NW5eEXbjk2KN",
  "key33": "45eSFoJcWxTssRV57BRXSo85nGzwbQA8pCKXeQNjqVKU3UAePhHdV6PZg7CFwwnyoMrTg6rKgENfqUH2FidhYeeA",
  "key34": "52AJafmK3f21aNazmCUV5kp1YobWjQi2DrQDDSKUZJ9Bpkrv4ccwEHHNg8CrUi3gq7q6PYRHhqaZRvg5dJmrhAwb",
  "key35": "mtsm4a8WtNxgwtMJfXFF6HhWMyU2vJEpzWY3iDboJMv5FTkfJ8SmVMYNiLWpEZHS5yUb35YNRbaHzCCvHREXtRa",
  "key36": "3m5qkj2h4UxkPuchoB7b82FyECdqBrBjNgRonmKR2Sxo3XpKjKuP4JHTRTDnJfHnCVhxmXPMd9HqcWegAj7kB71i",
  "key37": "3ziF2hgGEwEtqtfZazPwceyGYfBbWZBe89pvnqM7rVUBLspdLT2T4GjG2v9qQezgCn5LNKKeXccmhxsAYiiVmTEr",
  "key38": "3R3djRJCAPnK5UkHNZLwyywwdWgL2m36n8yd69LGMjF7RihWLBQJJANPAGPfp8qWsyXTBdv3vt7E5idJATN4KcFL",
  "key39": "5sD5KKiY5jFfcYxGtiGEk1XpmMhCuJKRGVWay6mgeXd4TjbyWmycLALaG631cmzGCizNaQHw3umeFbnZK8DoFT5M",
  "key40": "4R7gdN2rmriWVzj36mF9Z1eLGmuxA4TgnKhJmBN11R5wMPqNrGajYVcQDhoTq9nAWdibNVyqrhNyy8V6DKuCJtTP",
  "key41": "2VMam4GWBSfW82Q6BZmNQabMAZCVTPNnyxW7UN7vyY4u8NvD9szSd9wXeb5VknqL2DHcqDoCQZS8icnAjcLj2iJv",
  "key42": "239SJWUo5j1KyAoqQSVAYXhjFrEo9GTa8MVxaUPTpwHEzVDmpGn899HLeYU2nLeRTS1VYRx35G6unkFuVovNmRVv",
  "key43": "3d4WWQt5xtSJNsRXCgdPkBuKVLWWDhbjzi5qL2N57ixNcgpth8MM1J1T81PSc3e9MYpoCtiF5GzG8Coixsnr1GE5",
  "key44": "kXogMwrvrsH4CTWYcWEVuCV94EW2h2HHRbUPJbXaY61PgCsTbpPiP36ub925d7SraTZ74RBzVZ9gDog7747dHxt",
  "key45": "w5bkwF8HmnSVoNhqHXRBNav8f7QoSnNvCjN8GGExbUFH6LavphH6sWGzDiiFyr3KmC3x7ZcqtzPNh8PnDiHduXr",
  "key46": "47ZE1hXa5ZBGJ9DAZzrHTGPaJntXL3tWqDQpPosoxKaDdQ1pDjTpP1bmfYPYmNGBZLkPzMSxFWwvAhHxhZZC3JmD"
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
