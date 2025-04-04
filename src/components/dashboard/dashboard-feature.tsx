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
    "5pdkxiybmv2sy4Zj2dGY878AMYaEPmQvdjtEzHkrQxyZxe1tZmbWCksimKEbvoELEzr3ep98R8g9XZxqBtmPSNY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YEHd4jajvX5whR9vYRKiEFzayG18qAeLeUeYyMZSQm2VkgL3HF3uz3tUfakT4kw4PSqHSawCawAjX6WVQQc9KzU",
  "key1": "4HuUc9z2SFeC2Bmj4iCWqdqKnK3axWfSdasHrjKLtnAxQTpmNwbY9hXnUVy4pC4638uSdbhazpKD6kHat7QH6GBS",
  "key2": "4LgdBBXE2GQqhyiwnbL3pjdHKd6sRz8uWmRhFzMNgnyXau9MZ2JvwHF3Z4pydm3mzLPhBVpKxJQA23hA2bMw2Rt4",
  "key3": "2Q1ZhmHv8WMZuhYaewSioGv13MGKRCWDsKKs3dMU8ZcoBXPf4TG2sYaJW8ZD5avmvuadb2VtCNLomTCJXQmoNkKh",
  "key4": "EGb9u7U8xfbXfsxsu6ggnHwgCsPgjmbgeEKm8UXXXDmJbvpojRbCSZV28fSu64VokCuNra4dh6knqXpu7B5gYpL",
  "key5": "3d2gkRTAhQ74rW4vbjhboajuzBBZbc7r3BHihhUgArHfsUv4pk1xS1ohd41ygWrTYDznpnejr9MHdLaoBxwAohBY",
  "key6": "4j8h1AzoKjnWa5WkuQEVy9rDxyNRbjvD81Pp1upqdkk31tudKrokRubTNYhEYqMwsyvSCkYnDnMu6hYz1xT3ACum",
  "key7": "5f6UdZfhLhVUoVugyoMgJVxVC8RzRAYCq92TsxpEXES3Gg98DsfCBX4yuYnjoQJPvARkQ7pZCE1nRpnPvnsTMJ78",
  "key8": "5PdNMVwn885JyQ4ZQzWDcKPPZgGkVG7JtHgxiwXfpzpJMEMGUUPyTgnWfMQSimz69wjY5x29eQsXGzzAo4UWimCb",
  "key9": "2eejhnMxooehMVqMC7Vw36H9CGGYabQYPg1szSnoCXvBa51t75yASzueeUqSt9awxWk96U8EovTAnHJCa2Nk1Zxb",
  "key10": "2DhF6VZEMNiDohVBspndKXbfcjCimMDgRtBDkwVsxYo5ZyEVaRDkUZsRtrYZ4RpFZ5bVqzWVSEFrNPD9XHwc7yaK",
  "key11": "5XG2bMNk7ydo8RYncpHe3wLyY6C4NjS4UAGkfTb42w5mb2JpG92cMtCCjGJ2QWjNEz1RV1PDAySa75gkZwJrNG4W",
  "key12": "387bQyxwBqvFqPQv4nJPQqde4yJd9vp7AMH7PmtHfv4HRhqxVe4bqiE9cJ4SH7WNaDzEefAojWvy2NSkQui534Sc",
  "key13": "4kgs6RYztfDZKUaa9kCQ4v6euqSKny5Cvw4ntXc7Z4bQ1q1PRksiUVWCV1sTbREU9VkAXkEqASFmrA5e1dXFkWFG",
  "key14": "3CvbKZawwB7qBbPAbJ3p8Utowyy68x3UX2CQwBL6eSC7guFXC8gYyCZmW2XqvdJf518S9uexzqHSA7iqeUpnQgiy",
  "key15": "2btfBduXoLFRGqbKZ3p5rUBsXyeCQNGPDx8zNLrgMHY5NsV2AhQjDxRhZmZ1nJ9WDqyuZAQTa5ee4i67yevVHfLq",
  "key16": "4r4E7Jp4uMvTos7L5Y3jZFaL9h2Lxx6iEe1dFWkqJQTz63sgUuT2tHNBntV5D93xXveatjBpWXmqBrHQRU5YnD1p",
  "key17": "26x6dYpjiUjdeFoWTQs2gqjwDTUHhKTqvZswN4nuEAiQHEGiu5rd4ppf9EN2CskMc2rnYaSs2SK9PtJ5GixGG1DM",
  "key18": "3qUxzZcczdZrEztRbFTFHBkkCycKtPzweJSVmbymNqkTrsyYbX9Y2ikAYfS27Hr8RgcrdGpagA22A34VKFmvvJQ1",
  "key19": "4bdQcdQ8q1njCrmaxdYuY5WdAeZ9dfF2a4q7jDtfzSgQrxwd3zWpK2NukJzn9SAexXLxun2gQcj24935yM19eycA",
  "key20": "3dybdwfhDE5cMatnoHwrYv4scrMvkLHeZXT5cmZRJsgHQBmjEi6Gs41mv1PRTTLfF7yrqh1JyCRjBNeK48PU5t6b",
  "key21": "42HTDdzak71DYukHqMmEjeYfLeneHfDRCrxamihFs4te2V1w7EF8PUS851zhE7BVKDC9wfHgcq3SUjkEuoDHmZXT",
  "key22": "3nTUho9ECwWtpvK5U5nMEfosiAoRx6zXLWyEm8FoJVFrd3d7MWhgrS9VvvJd16KCDmshb7zPQJJoKxoZQzRP9r3R",
  "key23": "5sLTnHgVR3WisRYnqV1LzbgAxjifeoN8P5tGLjuWN8cxFC8RH8pCxDqcvJjDXBT9x3Btu4TGywvjF4C8LorqrtxU",
  "key24": "2csTKJqYjZ9KrHDG4u5aHmkoZnsSLDxoh2T86gVPHyughN6upwCscjhTLAsoRx9MtRkEgtBgnhUjnguyxR4e5m1p",
  "key25": "2fzBT1GEktkWvfop1MxLKzux131G61c3B3WB6mJFwmoTY8EPpnMYqNFEuMDGyM8AUVeYtZhGaHyJEVWdAb8bduN5",
  "key26": "5UVJf1SEqoMK4kKi8yrDEuyxE4ghGo7SsZncaznSxEsiS1xzzve6k2Dt4TJcGN5BX5xe3AykTWK9bz5KzkDcujZ5",
  "key27": "4qFMRQbperomwJcVRLX3732YFjNssd55YHKSnE6UQvVtyxcUeMuHVGX7HG3no46UfTm6Uua5n8k3WgBm9euB5o4J",
  "key28": "525QDT7N3gxo9c7cGqBESmqu7yM9pu4NnZHhmNrHALkVKRfaGGcpQsuRt18XrGfhrvzD5J7WLxniZ4LQbKPUHYgD",
  "key29": "47UfUoo1GiBbPH8EGXzfLMqCwK7SMR4WMJGhzH7s6zbWki3b18HYDm6TEn9vVNcrC7zWNGxV9LwqSkHD5yDpx6cu",
  "key30": "5cNPbrQZZfnGC6jZKMrrJxFjpUMNY53JqeJUxVvKRbpWVFtdsnC2VxD7cjpYxG9CaTGogXMz53iuCUwBegnC1ekM",
  "key31": "4rybTvDH7VMsrwGzqhX5iEptMCqJv3TBk2QVxBSmpEAzkEDaR4ajZTg5jnsSW8pkrobLT1y7BwSWHSQFeQtRySHo",
  "key32": "2ivUcJ8vvv7LxdPjkA2ppKVrf443b7xbfRpkJfA5P5Q5ARQ9HsiioCqd8cZWAVzWpNrdMunPx9LVW2yDjTi8QHk7",
  "key33": "3ttatAqCeDJ8JtFZcaZYGy7PKrXcBV8SzNmmFNWXwMWr4RX9LCf95PuQpH2nb53mL522RSA4TeVoq7W3YM97h2E3",
  "key34": "5EXpJ3EeNaMZRET8daA9ywwFBdLV6ehz8kmis3h564Jfffhwi9kfm3s6SWzm6Qskgf43pdp5FebZbhocV6BKryRb",
  "key35": "2Mg6HAWsvUr89hqtHBxDfSDfTeycoACBWmQjXTYuJyzrUePWqgxUptYi5pcbefqJUr22BjvNS9AnVYySDB4pSKyz",
  "key36": "4EAVBzatj4qraNgLHzm6ZmbsLBPb9TNuiTpeeySFFqRCkdur5ivaFhhnMm4iub9b93NFCL9iWCRtFVd3WBBqDoGT",
  "key37": "2efmBxefLYSkYikRPmqE3AD3zfJrhQQhdk1o53tZ7zwJEVA56n3UfA1RBNKB1fYV1ymQJJ1WNA8CMKeHtotb5HU4",
  "key38": "2CeAXFDugDwdPUPsosXPaWJ4nNXsTE6WpeTngieJ2fLKbQgyq8ELmLaLjjGGePPGdigicwA6V4RZ97VMNwPW9K42",
  "key39": "47egNq2jTAqebreHE6d2ALU1QT2FiXZJPTUBiqVqzT1k8gs2ZLyPNmWAXp32Ju5cUUJvM3trGAdQepPjfHJceC5E",
  "key40": "3w1NzvYgyhbjNGVKeHSs547vtEG9xtwhW5LKHTYSM8jW1cLDfmjnVYMFnx7jnkmbs3i4AvkBUEBUQE9eLf9fiqhm",
  "key41": "3twYayLyLYWQwVQY5AG8vtY5pJ6KsKfedhG7vU2JhNBjePdur7xbsguZeLsApvcvXvMe7jpD9bXkWBk4XbVAPJSN",
  "key42": "5jcALQwCJ59bhQ4mwbgX9RuVpAe4dKMJg6YSSVBYtMJBCJCQFCx7d6pwX3PL85HaaVPFg2orkNHgpNzygipxFQcS",
  "key43": "maJzYRNPAjxyEG7MUFTyPKf5p6qtB6GLMbP6uK3fg6ckSju8PzGVpukMfoTVFMAnBRNsMwKHY4RxKrKR3MpGitr",
  "key44": "4DV7bZM13VaSJ5t3YZ3rGSnb985RoRewT7Km382NDKAhS4cizmwEx5qgYu3KL7iZMipnKCp2aNmcrcB1ETHUBBnc",
  "key45": "3LrWvwdNGUX6swYNoyWKGwNg4hkRyweFTG3pMnvcXVjB5Lk7quHhbDmsasSwXPFkDYNF5oTrxRgZJSX4udUU5fZC",
  "key46": "3nDMyQAwQCkag2btLwAXoYDw8owkLMWSdpH9HHuoXD5GRgvc8oqc4Y4bYpzSZ3i4uP6bsJyMgruYQkwW3JLWFhxm",
  "key47": "2BsBNGMS6UuyyWgfRY5LwSjVdP6aSacXW831rmNgKXNUTLymv4khnh3LzEve7PXSGM3av8WXcb68GhoTBnAuKQbZ",
  "key48": "z5SUWDfozoQaVKZHKDqPjAVHZ1AzCSnJiUSXnkQG3ujrCBsWRiVYNP6jybrZc1ChDa9a5RRCbF7fm2upRggL6td"
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
