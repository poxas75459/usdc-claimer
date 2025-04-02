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
    "cauA822CDEvqcxHgYk7CpRD1v5cj1z1J7JkiWkDx5yTd4BMWLFBfcdW4Yof8nN4p1wKh5yJWdFTCWYG81VAG2Mh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KSFg1iNfNZ9hoCfm158fVvZnTDLegmjz1GDvm66phFqtQdHC7RCJMQyDXiD4vmgwTuYakJU9VUQ5r2KdH7ky4xN",
  "key1": "5vTH7QboeV81WjzhkjE76BzberbC2WJpC1BCpawuufUUe1LvFUWbG2vspAtFQJFnLqRrZdzxpAh2T7H9UeioDVip",
  "key2": "48wrTE2RtbxEQ5m84AHaP47UWmcyeXokKEmPkSxF3tXNbZk3kBy6F5VGj2mkoY33amf3R1v6mkPAVBH8ZDWh2NBS",
  "key3": "4tMK1NLj1LWXoPErcPxE9oPZKUKRKuf6k52kfUQPzUqZuTKPGC3Hymriv82iWe2BjZVmxxE54Vbvt6bG91SyaM3",
  "key4": "28hpmctigHcCxACYoyzUjKFB6jZGjT7WAoZGCXmX6LSbSfe6XX5EKZJb8rrxQEnFhjSugFZzvWL8XrBCuHgNVrJB",
  "key5": "4vU29dBU1HjJcrRCd7xTseQwmANujLjLzn5U4hapDmdxaAFhXT8CGsArzaiYFaTYKUXN8vuMTiX1yEwP68s71EBP",
  "key6": "4RRja8bHSNuux2qwLTmFH5WrFkSvYwV9JeUXgfX91Ki1dH1u8qyLmxKpyJKeMVtYxLhDGXd75zKTQadqyui1qeMQ",
  "key7": "2dCiCfduzsMHFHMAPfj64NskyhvMgruE69EJZhrrDeVNMBrsfNS9bsBhB5Sk1YKGm5PNo3yfEnLenjGK7xJ8XuEX",
  "key8": "3tyfpxjKvd3anT9WyqaLL2Hqdzq7NcbFxxrXsHYGQ9krpSKfzKYiWSKTyACdpnQ63Ni6aeBkWUST1wrotdLtDyGB",
  "key9": "3iHJydMYnRFeyeN5b1HJiXuhnEE5nBynHXjxqh9AVW5m8WDwW11NQvH9PJeXJE94GTF1WetuHRQ73wRXXV59W1Hf",
  "key10": "5UCLMwCWuNsSbcGZYv9oLMWStBQ3bNpcLDmLLupQBxtvXJegxKMAmdoVQDGqTHb3Y4HxiphuGSU1w6JWUeXG2WN3",
  "key11": "5WeCMyfj3j697SJJiFvFgKNTXbe9PqehbrTp7vb9gmwahUrRTPyQEULjH5FNekLxbhC7nLY3KbXq9j2FyEJMRH43",
  "key12": "4ChQ3a5V6taS5XvNuQGTcZTHehCafrDQWiZtzrrWiuDSszsXv9AXb7GRTiX2XGUhTkgP9URpzzHJkwrbB7Aqg5tH",
  "key13": "3zbbWutqEwSDoLwWi8xszCw6i2CmhDpWHKqnj7t8B7kZnytF1U1CpZjThSpGvbtT6yLaigfbKtGeXb21wjz1wPrr",
  "key14": "3XbbcMRduQ1DgVcB8A7TQPHpMkydgdBb4PraLAYsQLJiCcP6p85bsTZGrmMmHeAZNLu2aC2pHM6dwzq48aQmQXd1",
  "key15": "5x6JHp6NxX1Xuvn6qJDpmfrAYff87pX21nvvjgkHDWt4DCqBaL4A9mdJdCnqLR4z19FpRnXJRBkoGSHpevisJNFx",
  "key16": "243mzWnp9guAzEFQed1GE7j2MNnJaSvZ2uXqFq2QcenT3wBMDW4THJbQPe5s9Gsc29q4D2XNJRhkrGiaZsGusbUw",
  "key17": "2tpG1AwvwJCowuA2AdDBVzpeqiRpVyR78W83FRqy9mK5tyzrZLFx931fYew4t3iMZVm8SBPRcZLKuxa3L7GK5WU6",
  "key18": "5WmLtwzgy4ctnoCAG9ndLHGZSnBX5TN9xwvqa4ZfHQumLLhSrHjFfjvAXxebuiH3zFMZfn2746Vk5SFKq8FzV1WF",
  "key19": "odXDaNWwqKpgS3hQR2UzpkMDqeS4TuAxE9p1rjsmqQvhnL7AwJ1ByZDWJigyD8Vvk6R2wVuYZEKRyFbscgB9AeW",
  "key20": "2uQ4m2EgS7Z1VsvpZAmjzzYFnkY6FnwqxKCcETrHqdmC5ChubJ8SF3oXJTyva1b234LJY9FGM8hf8uS9pn1v6SJw",
  "key21": "3QTdPHWTa5iwBsSDqkTCgmupXdBvvvwcts2wkek3uC7gCKjrbt3uzqp6vQhFqrYcEp4mNiMHUijs8hY7aHDkn7vC",
  "key22": "2MjiaTK6WR8EyzBpD3NmdrW3nMK3ZN9qAFDZxTotdB1zZLEffhsC1qsLgGWUEzxaDo7RGvnM6SobzvgwUhXqTJuw",
  "key23": "2oEiKzk8juEUxqdiWLRQCA1nFFwB3zKDyTYdhpefYkEhFnyJcSJtaf6VSSPkgjsVbZYZBeHwmvVsfHPbZctXLZ8i",
  "key24": "5zUbqRXZcVdQzAgsfNWcesMnvkPWJFgrgCnbHETykWjKdPZdezCkrfZsTmky2VaDx3KHmugNGTXq4zXDYLCrVRwV",
  "key25": "5qxCMJw3fuhZdLwKqzC81c8sHbfEE9HC9SudLFnEUTzoSasa3h3vyWc1HYDAWxS1hnys5RBhZBQqSg9iH1PZk75v",
  "key26": "4MzyCSWA5dQ1CB76ztB3BtcStZE9jEgcauHTjJgi11U9sypZFYmbsKJ8imwc4Dc4jNvnCULDXbHJ7W3ogJt38Ld",
  "key27": "4CZm4pBA6uCX9aAXTEF1gZAiw7VbVRzgcoA2MYNcV2w4biDByowSTm2YQ3dR9s9Y5Kdnm82DGGfrCXN34BJkJVA",
  "key28": "ZTqus4cxJwGKeZh3PVwmwUQHtn1pfxRjuJ9satYtV5Q8S4SQrmjCx38ZatKmAYcqL6FzL1ydvGiwNG9GRBR9UWa",
  "key29": "3YTfH8UyZm5594tuFQBkVPY9jynRJZJeWnxpM4u71SjrcZKy394efrbRZRdstJXGtXfYoCHcMw4smGQQ71aFsM5n",
  "key30": "33Eg9Aiz8gLSLpzedSekyA8PdDBdPEidaW6YDKo4PCiqA3U8FE36eTNbEZFA5DyfZyXvE95XDwSQgvsF2AiU1ZmU",
  "key31": "319ZWXY7ADiKUxvqfPYtYDQB1hP8dsmWGHiFY2i2vD37zvowqEvbNP6fAxjXx3KYmHcShTG9waZsaRbi3AVfF8Nf",
  "key32": "qqCXWFHYqpMb1xdYcKDQXHUX2NxxepftfuETq83qWQQ1NfGwDagzf1S5o4D2rTPu41uisqpWyiVHT5H3jByWtAr",
  "key33": "62V1mNqv5VJoNyZnf9gajpfzf5cJRua68syCVousbPn7DacLNpKs4dkatQwZavLA4qs3kzNFXywTQYBLah2gCQZB",
  "key34": "25PAvuN3fpHoKSoDqaY1iSz9avUFPzHBewsMYTGTXpcVHYdb8btx2VpriPtyTXjqBt4wHvrbPfv12wK8fCGBernF",
  "key35": "625Hw6rvcMBNsDaKZR9fPJBLdCNa3zumAztmbEnpmS8aEvCqDNhxtdboHSzRG8a7ZD1wtU2ks3WBQKTTVnr5uGiv",
  "key36": "2xmAPBoqzRb2B1naANZ6g1N9TWyapxaZEH1Hs7FCEEAnJumuhNCiigYDfEH7vcEQF2hZT5iM9rW31qe7j75g5B1F",
  "key37": "27dAVw2nSQRb8dZfY7aDDZog4U6SnKKoeiTrhN3WKNvPcpcnVFb2zh2ryWHvFibHsm3Kri3zgX5EVVnhFDzTsjaf",
  "key38": "2BcdojZAz2qi3LP5hwakR9QiWKQfWi7P4dn8benNxhXdUdT1GicmpcpPDhcC1aWVv1UHMQDpJmap9AxArUP9E7Tk",
  "key39": "NdXueYFgeQ5quuCkgbrYi3WKF5pWwSVyrUi5fVomJpDrNWBEmtRUb9jV2hC4QKiVMTLNuoFBwUH8VNcCXL3xmrh",
  "key40": "3vw51ZYAjA7naCriPfQQTAEc9ZkPKraM1BX3r58EWVe1wcVhKsXLdLqCrmqQFuWtffMf8Ye17CtJKix8mPJ5CXgs",
  "key41": "9KRFSBECJfa6yR4d9nvM9ZYbrjRJ6e8g2MMqAU5ccyiLihHFXbtFVLB2C6hgehjLAZDYQ5GKUei7VMfhrhWYiCN",
  "key42": "52C2BoDnPLo3makR1raRd3gx1x7Y286na7TsWYAU2Wrap2T4FDVBCFgvbQXoMQcncGjDqqZ9mYbVkTByJQ2e6XL3",
  "key43": "4r4x1p54wRMQoybx3Y8pSJfFCjbpFpmfSaNZ1n4RWA3mCJ6RyfoqDMFakzX9Kf1SZZ4rQ6xdeQbmqJCqCw6Kj3rY"
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
