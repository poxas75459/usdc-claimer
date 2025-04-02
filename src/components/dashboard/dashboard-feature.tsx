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
    "4VkTUexWHvyJtgfEGfyestw2KrFuv9esfXCo49PsqSTqFZ75w3pphGD5sUMJD29hACHGpXReNcvX3HsnsyP6GrHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B89xYGQF8ZC7UHi72onqx23XicZYkuFxFnAeEDHJwJ5gowov4kjxJfcNEgrV9m1nPosLD8d2qCQSu9YYKEk9KnS",
  "key1": "5wrQp2qbf9NGN9wbUNDZg991TKnWnjj8zRBxdDCwBF6ns8QJLLAsM4cCi6zrheuuBwzVZf2QupDsf3f1VkDM1b9R",
  "key2": "2YMQnN7LgrBXH3g2v28S7CNi47TQ2h1CqPyfs9TqfSWdhkyLHKXxjWngT3vnA87qUcZMYEQQ4GYF6qJm7fdEATXm",
  "key3": "6Lvx24mkJuEEWcSjKXhvciXZcawjXhkYTQGz9USNBiQPEhLT528adH6M4vwbhVWgKo6ks5SJUgFZpaW2AKf9aRQ",
  "key4": "2GGSRAuRCUqQgWA1n63n6GTuHZtFpWTPSJtLToWPMe9fZMntXebKfnqzNqqRadW87HodysZk8YjCTDu1DYcGTHNe",
  "key5": "3YW9xtavNVZV3hT4TfnJv2U7VjN2KmTWovRLYRYGei5DNT9JYRLPkmLbgWvktQ4JdYi475BUb6ej1rJEYbL7ftcR",
  "key6": "t4Hiv8o5EYuoerKyJzz47vZj4KKUMYgbVF6ceUPUxVXqqB6LnPbsQG3nJTEseaCA3vbKB9irBuGKbr34nBmrzCZ",
  "key7": "45PUDsSSeFYDCqQmor2FJmpPkdYc3Xrv8ddHTMfBcVWk3ARqvrrTBHRph382Pc5yDuLWeFJD2cEik3HrnN7ttJd9",
  "key8": "4upENb6MkMuEmoTrPtLfYkGS6SB2P1u6NQNw11yy1fZ1zFytjHpUtCvktHUi8uGXFTZnwPsmejxunwd2fxV4uTNf",
  "key9": "3ZnoUWY8tQgTWY4Xn24VfDFNpzHsKo7oER2YDGVE7feQ1Xmsc7Ws7Q4PEqLe4jG214zZ2PFpFFcJg5hSe46W372",
  "key10": "5CuKQ9PqhuLcVZLbMMtkhvWDNWEAoujQhQu3gheSS9CqnvuXrPG4xqWubxfgRdLD7iwZUw62AAsok22ksxzB4S3y",
  "key11": "4uQ4jtGp2HsBf59mJ7gKCuGpMM2PUpuavejuauMHB7pjKFrpuMzAaRTsTFZM8xUYX2auFKsga86rYMYVekroGEnP",
  "key12": "EybYNYTNwmr38Wo2GYc14zdx3TjrpGKvZPdzAJWvtPVk9rRxT9c2aiNzFBcWcRq8PEh7thB797jyEVbiQAFZ19U",
  "key13": "5Nmhcjx8Lwmz8f9UFbkoPyxjGjUt7BM4bCCi8vJoW5xEnFFEm3rHtH7YnVUVSMU7pau7DMRK4HJb1qB7itF2XcKk",
  "key14": "zooJcMCFFPVyHjHWJtMZNBKg24HemLkDys18JraYpAtdE4HCX8Wkkkbpngi8cbpc7zkY8SvK1PMC3gdqVFCANyU",
  "key15": "4cA3jTgzBYjA4wvTnc4p8SXyPQNaPphm6ZnT7SSZhW4qqawcDPzd8Lif4JwpAo2P5qG4bTazHgkmfYMFWBhevHt9",
  "key16": "7a65nk6B1tDHs86XBWpL1i5xGgVbja4nGxrePMthWpVzfMqQu2R3ntvWiJYPChefkx7UdCYBgvBw4gFAUvgGHUD",
  "key17": "57uzP4Rk8UvAh2YnYhnGoi8VWXrQ4fsV2UhJ235gKNSGvnYYU3XvcahYLT6g6pdYHXZt1cMhqXkxyPT7iR9uGbcq",
  "key18": "3DT1rS9yATVtBTmaPjEzqc3bytwoDW8Uk7RXe6xfzgABEoaFDaciRJbav1cub8aVRtDP3EdXWKahVrp8gkBUz6Gb",
  "key19": "bumvs3hAkwXEPuZbrtiRn3UaZTHw6WdQEUV9SRgh2x6nsLYWD3m5cdWHaD2KE93etWewWrhnkQz95uGSQsW5NTN",
  "key20": "5k8FX9EaC8obG6QXbsowKp9PxAvN5YhUCwzAJUVSgNEQoePqjokfGb2jCG1E9F27Zw84vWdJe2s1HHkvCsRoFUx8",
  "key21": "gw3wtBBfeNjACsaFhdw3QSermpy2GuKpFRwYHVrasbCmCaycD4qYBYg1yvFgCRchvyyGwNYmfoKXhJV33widmXr",
  "key22": "aTcMoJ7S4VE6aKas1Ree9oZNm5oP2Lzk8pWGZ84rSYHdtCj28F3GHRbPWT9KZYamUZdpS8ap9i7fSXJdkTdSjtc",
  "key23": "2gK6bDk1r4FNudAVfQjjS78addRvnSsd28YSgB2xWDiw4DDTUJshdib1xAjHQmJ3AE1wAaxBjsEiSbrERBaQfU4o",
  "key24": "9JWry3w2nrRSb8HgV8tKP74WtMvELWashwWNkBPN6VZJAAN2foe1WY1xoqzpCLU75TRrRrhB1HudeWPzcXWBtyg",
  "key25": "2Vhbqjposbg8gwFB8cXexwXiVqmWPdFcMnxiYgN22m6EdPGSC4oqoYsW5xY9z7kPnxLQX2F2FQxJZFJVoTuQVqbf",
  "key26": "5LqVA4XMNiG3vbxAaTLgVYzxzp3cuAXyuP3UrpmEHQyucqn1fXh6HcK2KQwTZj4tmNzYsarnKnYpWq2GDVZinQM6",
  "key27": "472rUZVfTEsGtEeadjt8XYqgnYTYTKW4qMNXHYntnQMyMxfCYjd4YSgrcTisBmfJcG5e7psyUXCYepyt2RSgQTWW",
  "key28": "5on4jLsyPoNjZWxUspBZu4whfb9T1CMbYx2EyuuwSXXcDEhaUw4XErDRWXushxAEf4sX1sqAjTguAvtb3zT24LFX",
  "key29": "2xq7npiLmCQHc9voJ22czDvR542R5cyDSEk4y16vMc3SJF68MA1LVwWGpTGKyVA6AuC6hWBZbNeeEgtyK3491zFn",
  "key30": "26sB5fW9DDmCsX9Lt5Tv8iu4oMCKwkMoATmfRahP929GmjL275U9XDTPdL7U158MdzecZwU6GvWXQtQoQbEjWozF",
  "key31": "2jRwubUqs6aRz78CFni9x2oUuE3HR8D2XgRjes5reB6jCe76wANK1NTYigwY34pTq84W7Eck6RzgAE7Hyn7TAdo6",
  "key32": "5ZydvR9E4eqm4qgcknGRUuM9Yagd3dSBMECsePg3qbwBefaNKjm6mN8614vcYpYv6JkLokYhjLJFCiRG9zFDnuk7",
  "key33": "4E4kbXPq7MFbYKqnLdP2u7UvJzr1gH9iGEL9CBA7VJeBcg9prJV96t1YyJRe8ACy2iameXzezfAB3HVLJeX32UrE",
  "key34": "2DdJE8jybwi5zq6TFVdj5zcJ7LapYcBC6eajAnaDgoCDnFkXDXmVdkefaaCjpy5xK86fJsibeFZ7RMiqxrv2jhWi"
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
