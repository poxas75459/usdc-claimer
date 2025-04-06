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
    "2Aec3ihDpXP4SFAVnqHitTuqKcJTMvSGhpEKCUnWjGWjncSTCFR47b34zuvR1p42WDgHcqNr72Dhu5isSVYe6HgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rztQPkdDwY7jX7nwpHuGkQS1UCvqbzF6PHkmxQJq64ez66gKsSeGBJV3rg7PHRucLKezdEULuDEPC9LSDf3H55D",
  "key1": "36QfAANZUqPpuji4Raa2iUgWXYUmMuYYsq2vaNPjXPFPCbQuo3Axnn6G72SPzzME6KV3hvsfW1ucZmMemqLy8WW5",
  "key2": "AzqVJWFPrtGg2APGRJ1j11SdvojmYQ8G3AzEhr92UfGFb5db9jmAksoXXG5RiHLXV11UekixEXhSMTS46eBLSdD",
  "key3": "4Rkr9BnvNR1VggiUvTSfg43Z8qEcmx6fvtkGvJ1kQNyzrQoBMQt5uSYmxevJSb5jhrYnj7N9ZzJxvoQAH4nD9MEk",
  "key4": "3zQEgCVzqAYkBbFHyiZSZYQFzQWtxKenQ9MgKSMYSeQTJdTTSZWkw1dzgVmAMeE4Qvd9St3AfqsZJVPpvXg2eGwJ",
  "key5": "3FqVWH6kxFWv7kTCQz4DEFbu4Y7JE9QuJLLrsmJDeLkxibDJ696v5N6p5q8uQUmFEY3YZxq9MoobggutXwkQsPXs",
  "key6": "4eYEheLWQYBJVKAhTjZR5FL4B249V3GUEeithxcXLnxd7oX1F8TgniVLsJDYZ4ySurDmpUFSofxfjjrQZsdtzM2A",
  "key7": "4ZWxC1AfAFAX4NxnYUY6m3EPLRpr7cjFLZNBwe3HWpzYf26C9Bo9vncSW9mrLoXjuGKY979XTJwqVDaLbjRo5WCj",
  "key8": "23wdUpsbECLq9P72UipFCz1oeF7v9fBAb8bspXqzxhLvM8Ep6jn4f1CQBjXDyBMTQoEWkA53ERZdqwpXQymF9tXf",
  "key9": "3J3Q8TU8itKrFc4S4bfe5CcxUehsqehFpdtexovds2wX2sYzkaviscBKwR6WXoAb93FgJjnroYZrpQuaHP8ZqwsP",
  "key10": "4AtSradmJgnephmQLuoJSjHUAbSuqjxUNNuCVvEtaggVmq2DZfeqdygK8n8cRJfUguCCkJtD4CXZKRx6ENxGyvd",
  "key11": "cr7TAuB59vvQKCQksgN9Tm7MeWn55NoG8e8aiSEhCjQDLWzZPpvnrDpg6WFsF3hwrj42uqM8QCZFfuVnvhZwU11",
  "key12": "2n1xwTamon5SFsBVNSoSd6z5pqdpzwjqdScdSMCSkGpJX8zyHLVqdjRPwsCZ9NvGpNc5D17YmxnW6YQFiW7GG9St",
  "key13": "4yfdeMRngdYv9Xgdbh9zAQRkSmuaC51M72Kutc2VJMQiEsJVkREdTTzNjxp6adM8pfpgSKc4iTemnQvm1rKUBQ1x",
  "key14": "2dK3kKq6HqDqp9PoLnS81GcwSzd7mkwG9SRQgdwofmMbyvM7dPp82cMgGnXHoffWyDKpXLk1Cj4v8m6XikUfmX3w",
  "key15": "4Sp7E15ZQhKuxkrpdQSukkyhzqaXJfZN89X6zuJ1AkfMoTznJa82sn2rYx6S9zCa9jSWLn6ak8RGt23uMNZ9XSL1",
  "key16": "4L3vTtx9d6fmXpuMNaU3ThACB6jvNa4eApAP3V4esPaeCbzFFR99j6qUtorRuaSuR2Q7E28uwFUaFDg14MdkMhgL",
  "key17": "kK5ENaFAAug4djWrFK4Ud57hmgCYHLhNDpj3THWStc4rgp7JBE47fwjgoudxvhhcYJyffhm5u3Wn3p2vxB62pxY",
  "key18": "4A7N79TqYLqFYG5ijAx27Jzvk4js2ggupG5DeZquD45FTeTMZVSEobocJSW44hDkCWsHt55KfwrorTuuYHs2W8fN",
  "key19": "5ZnHxYwX653HYWp4qMKZdC3d78Xq3xByV4szBQuhnnHtgmWuzaMa8Svy7W5t7ADiRE6P4J6J68RX7tKoGmhPDQGD",
  "key20": "5go9HtTZ6zMDzyR6zLYMCa7D7E9Djd6FV8sjo6Dyfv1qYjsij5zZ1BxJQzx8PQbfJBbnsEgFnxBoWJxbE4mV1Vmu",
  "key21": "SUyNPySqKQFkkPQ4sS2vSTspvFZQw4C6VmBHPVDogXv91sYHRYNXTys5dKgJwrC37nWhcDYsVtgGUHWBnLvzf3f",
  "key22": "52EFuNbdU39tJrP2pZBeWAotfq64eMhGU6Eq87dF86nTQoLgEW6ebvYimRRZ8mzLcukBjaY4VX8ogAvVZqA8R8ze",
  "key23": "45i2St17nThR8fdg89DwYixt6aND4v8o5JQSxCpuFb12NWnf4GneECjVbNSLdxThr4USwYxzhqpGj487AAsp9DjH",
  "key24": "3wwJMrNDBNTcptsLTadBnrdZbCsgtMf6W2qmVpeHjhe2GS1TAK7EwTFVyRaeX62QqfwZ4g5FSyFW8a5fxoMwAfeM",
  "key25": "5q5tn5SugCQ1PY7bJpFBTt3JYyhsCEGNV2RjE66odxsugj3ebidPQGCVAK4GA8yL4rQ2sADUnbkbRTUfkexq9xpu",
  "key26": "34KjQFuw8X1MxL6uS3Se6f9VxifEQMg4kbsD828gmhyNzBt5nzan8mwjPUVFhpBJ9UjMmJjvpbxGamUetCBmragJ",
  "key27": "5DU1LzgbMV31wHftzrChivruLruZ9WtVj29x8TFGAh6a7ZB268qGJjpLEy4CN7Gd3gKyCV9mYp38s8oa8kq7HUCE",
  "key28": "2BXw46XQNnq8VaWmY9fH9ZceXoHsckRh2GGR9mNGvYw5UCdKRmdURGHuePTfDE1xW1aQ3vRzVAqHHLfjbbryk5YE",
  "key29": "6152rosCay4Y63WDa8ch5PuS6ihXGN6G1U4wQRpkQibjvCvMvELm7hhD1V9J9A2daVZUpPysbWvpJ12UKcARwyCW",
  "key30": "3N7nNEVdfoRYqUeQNWLaUudGhBj8bLZFj5wbRdPASHGke88aLtztyX7wMXvy2yviwrub6sviXJVeMagS8YUnYB6g",
  "key31": "4dCMVRXCH7LCN97PEdwdZNsKtanRpFGz6u65qqzoMzPuPNpYbDwXs77kTFTZqYcQ7GQrYPrkRWNc6jcoJGqEhHX5",
  "key32": "3uosGmP4ZPyvh83yxUrVhBhhUWLwYjnfEqousdZPSBD4x8736ZBqLGKNfbDvk4A28FZaaNiADf9kYCAaj29nDM7t"
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
