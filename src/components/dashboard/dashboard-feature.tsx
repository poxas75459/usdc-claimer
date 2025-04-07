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
    "VPM2m9TxnJVCWN7upfybWek3fFgqYqZpwqMRc27QucpTHaHgpgqSnHpJaEu1MyfXB1GdTpXqEWLVjsTAkNfb2UY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A7LzdpVxv3aLYjmSVWXcvPcUjHaU1xTYXdXvx7oYi4JsMbXdugSQMQLVefVUKxajRA8jtzFGjvregWTWfG15Tnc",
  "key1": "1oXmZkkNSt6T8P31fDn5J7cJ45UzswLsWAtyyQiS1ofWKU3ZggqXyfpiU1mpvqwxjThba1VXHvVkwqAQVuTub3",
  "key2": "4ixH1ymomjjwbSMpCCa3YsxfRD3w7PcSKxV1gAofiq3wUqQmtDoiyFPeFbV9fe5UeDGyVoe3fGi5RsvHwiFgr5JM",
  "key3": "2rGACasbryrM1EYt7xu7ujxdjMYySJsHV4R2KrXcrWgPGgQQ5NdEGThVkwpTbgpsTBE6LyfLhWEHj78CNKXrDzVE",
  "key4": "5E6kqfi7uyr7ozypfNLC44deHeADPYa2wdBqJhixYCQdVfAstu3XwgALavhhDRfLW51MLuebgs6dypym7N5dDgi7",
  "key5": "Bz9Qs31rYgNPCug45GPH8VSwM7xfGdw8qHS3iMgXmmfYUuWfatNQrSRSbZ7nQb7LLgdoEGd1yjwNZN7nmnnYQJZ",
  "key6": "4qmu15fU6KysczK33wAsA8KqHjbFS5z3TMg7DLimyjvpXFKLaEuPUyhkb48aXLNoQJNoyxeHpUiGMW2bP562FVxg",
  "key7": "rmkWjZsEDg9LvDwb8xRk8GgHABRvf75yqADbj17QLjjPehbHzPJafvL63FAQxJVo3FXrtuuFJYpAsTb8hARMNbR",
  "key8": "3jaqLEqGW4RfsPmjeubUgFKG4wkiFN6XchWD1HwFbrxSNKY9gXnsyPd1PiAKvHQbV1gZtrFzSc5C5X1JSHgZiiA5",
  "key9": "KxCfxFL5r5LSu6jUetjJtwDWM7JG6aNoomoDWniPQhMzAj2WjqfpzEc84EUcqZEc6w7ofubyk1AkXxPnQui2Cx7",
  "key10": "569S3oyiMRm5rAuXAaoVy99ehA9ontzCNsVFNAPH2eLa7uWMup5udFUkTdVFX4k5zYatD8GvKsL54KNsPWZSEYQh",
  "key11": "4stVNWW3b1DgsjMLjTk4Vp5r5LZEiNW2jL4ZFaZyX1ZaVFZZA8DzMrPtrFnKhQvhmudmmfSAjBiYQ6FFQXJ1zYGt",
  "key12": "5oiFUSXw2zKykyDv48dWrn5L3jMMqnxjdN3uRRXCamuEkKBTsMHaPEnwUdnwZ8XtNEZffNvwo2KeiVU29yJmTrFT",
  "key13": "3CNAorvCz7cJkXmAQqSoN6whkaCLHgwCAjaLX9EupyCR4eu7BTBfXyQpzwbxA4Y9gr1tYS6Y7HJhF1RD2kB1tG2U",
  "key14": "27yWeozj4awLdeuSG75LmzaQBrSPFKYvGAv9wYLxuPRWGRLpbm8WaYshCjZprs85NieAXy33AbYDZTPneFnuk62w",
  "key15": "44K9MZX2yHZ3jedEYGY6CpGnwzhfLPwA1FLePQMzhxZ3y9trzTqPz9nR8uonqjqPKszdeeTN2YtP1Vsrnf6ixCL3",
  "key16": "FBtgExMrYpTGQ6CYG9gzoxW7cKeVEtKwxJ1tkZhsNVbbFheMtcK2GCWXyCodD4qe7btfcBcnd5ZgLAVAagcdB8B",
  "key17": "5sFfZxYZnBh3uqXjGi8XsyQGqrnic2xaTjCk2ufuArEe6jj2zT7L75iHHgAWrWczD5DsAxgssUnsLcoZ4xjq2Y72",
  "key18": "4x3c8qwGGdFDmTvXcnw8EaCgyhQYf96VRtGBmN8v9VQkw99bbV9n4AgW2uf9cPRnDE89AWBQMwT8Fp8w8J8dbgBk",
  "key19": "2HDsXsANFfXiyh4vdoM4z1nTF7XovmZrADnW7rRPfjE1D13db7ssMjj4BUsjqomdWVNSCNY8Qycn8f2NUxNPW5J2",
  "key20": "5FBnUAfqbReSSddjP5Uy3ypugcbBdFjvZCF2JNJCkcWt18vj7Mp6A8DqRKHUrV87PhbEPGHqYVH6BeqABSUbyCpT",
  "key21": "2jfnWnrQr9Z36MG8VuLDfRL48ceMEXNQiLKJYK9pBhmyacQmJX5mLj1kNpuCiJWFkDaFqGPm4idCbwreiSBt2vQ8",
  "key22": "3mLsCvXY63BzGZ2bVundZcVdHrf6upwSqQ9WBnSMQhdNXfbUNafm7iQPzQDsfUsBnpJndWtUi21y8ADKW3rjwXrx",
  "key23": "5mQSjF8hn9RKGTcqnAThygU4JsFHerppLfoRXWnqfAQ4e8jn3CB5RMDNCW6byqmoHuNp3Atcg6sKLS2PpMGQGfHM",
  "key24": "RZcf26jv5sYRQuELcD143iBHzAWtH17LZEwtZFNaauffVD7A1ARdkDu5FpHF2E8sqBJaFK4vEZo85cQrc5ydoLH",
  "key25": "5aDBrmT4YZM3jVaWe3xLZe8UHkESjLrthZDPBjaCyK2bWg1kzm2aH7K63f8BndkWNVcPrnj9yqmUBZmfBgvD5deQ",
  "key26": "2c4oadhcRjtq1pjgDkNJaTmqHpFCcD6237UU1WXcUwkJj4Kfgmj6KjuBg9xJa4Q1dv1kzftis6LDnur2wqCf2C9t",
  "key27": "3xZPUFokzG2QAp9BnGqQxTvceRNKfk7JM33K9iXasxFJza31ChuaTvQiFW134AxYoZ9uWy9eLgav4foQN66qffZ5",
  "key28": "3zhE5cGpk4ZMc7mYFLXBDQ7Rk1qyW2sa2oHHN9U6hSsRMACsvXWijBzZcas4nqkW5f1isZ4KFCXUE88oLTPAgwme",
  "key29": "46HJ5hHH4ZyH9wyoHguyT8FfAZxGHpxJh6MXFBd9h16sgsidvenXEAtkuRB8qEHK2ddfGUakNeNJZi252TuWc4Lu",
  "key30": "2DmiRkNkbDpjsVnyFzyVeWAZMxxSQrqZMHEd65j1FQnGCnzrL2nQ8LoAPjfubMjNRn64FppAxTKyrEd28jdWYdrV",
  "key31": "2ZYenJd8fB9CXydy6CPwJAeAmuYB1GpMxycHzJ87eXLSen4oYRFB6ovvefufBatSkLsE7p1R5TEU1zoEJWp2Mv71",
  "key32": "scQTdFiRs1NszdNhR54w8fUwEQt2YSXgRGzYaKxcraAaSaPmwKwUnSS1wDnvRHg2fabbNSjmSd98Kt5iv2UCoAc",
  "key33": "2QBqA8iV8pEqqv1TSNB8booynsuLWf7RyBwGsR4ENS9RjDfj8ZhHqZ4a82PzKVDLLD8wgEPnUMWPpV3tp59AkUbQ",
  "key34": "4o1LkrAfmGNks5WGcMpfA47ZbfV9Bx6wpAxXTPV4o6XfCj4eVxeCR2isUVby9t1wMGSnu6u76W7YRGK1gnWURQQT",
  "key35": "2Sj3j1FhgKPbJGDDGXKs6nHNFFBAWxFE2rieWGnDgSa9G1vCWMs4Se2XXYeF5kvSTF7BdrQCDjcipt9o5SnAecYW",
  "key36": "yiVQQKdccpkFk9H4FSrSvP3xowZKqGx4DJiFqwBpwuuyTLsrf1sDS1Tshp3EJ7LGKhN21P2rHwWxNxQhd6LJpjc",
  "key37": "5mU3ztsYLqLHazUXxmjnH2Rbh6A6Pwhge8o7sf6JDHEgYoJQM4uQiAxds6xqnok2Z8w2wk9Wz71uYoYuVxpx9xae",
  "key38": "2UvUSHdrfUvMaJAXGgkLAKq8PZV8ZceVkTut7TN3CyURpWUECb8PCjTGeMqUiWamCi1JgmtcgKueX2E7VLd76jGC",
  "key39": "55DWtN7mdMo4U8Be6k4To7nrrSm29nLVvkzuHN5HQmVUqQLrC5VGrGpVZTmDsZfwZqFeHXwBfutptaJAKJM9EE1T",
  "key40": "346mT5CoAYVjCBme4kkEfMDkHai3TifvqvUsDkKjiysT3QFXonqpZ3T1KvLLRp5Lpcb249mNSmPwZ1dKZX1vwsdT",
  "key41": "5rpTNX9kRakbB3NDCKyKDEGUwonHnbX6LpT4erkuNheZyxy2njFp8Urq7uUb4FTW2TJbnc9khpna4s1XfsqJfDdC",
  "key42": "47Lc4igns22nnc9ZNDGtyA2CXGRCbHXrg8L4T3wc7W9jpSBfe68XSQoGF9Wcz3hbYT1vYtz9PMLs3de8asLAs1MP",
  "key43": "4yPSqSnoKsKD1mciUn5Ya9Bod6TupfvvF6TWkWmnoE5dMRK5Z6x2EsQ4nfcoekXPGRqeP9LcpaL5pBmRdEyU5pkR",
  "key44": "4tVdfdYSAngdNCgJLxUx6keF3QtdB7UHBS62yj9sUukjN1QnAjnF577CWUAnMdj2ycRHmStepDxjotirdb88iEwP",
  "key45": "3VWFbVT8kysvZgjMmFD6HWGWwmrkEJ5yYdvt5xDHnaHjRPn8R57JeppMBjh5ZxEN4A9df7yL9nWCzsHLHxzCVNnR"
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
