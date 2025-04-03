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
    "612bGADkoDw9jHA8XzQtgkDw6XQGQ5KHwvJcrJbBEvRjx3oPy8tNViNaZgnqJfhH8mkaHXJ8gPX3vRznpaEwN9MC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ba2PdJdbN72PxRW7wktn5P8WsmygHgTXwg4DxYEv8GLdZ6dAXxrWJ893U8h9hQL91SURbWpxAgs4F6LZfGd6xfv",
  "key1": "4LJSwdi3ppqZzkGMYdJRqgEhfRLx8xcQGBLo2XEgU887y8cMRPpsA1LoKQetJVFuRGGhjNdZL9Qp2JtRUr3SYexC",
  "key2": "2RiesCCNorgM5ph67kkPHRYirM51JuQ9bMWy8jdnjwmzAn8N1j21Edn9Cvu9MYxpSNmHaTBWihTrrfBKW9zQV768",
  "key3": "27LbzdhXDqD4N4Zchm2Vwjtot4mw3x9hrhUK2AxHcm2LPzdkncNNfpVdH1JSZm4x3D44m4cLLTtozRjJMjQSc5rA",
  "key4": "vmHsw5RHnCWJG2GsZT3LzcPX1eYscBM82ZiK5o2BJGBvXDmXD2meafQtYAixRpDcnTgbeR6u4VyTWQ631SkXNMj",
  "key5": "2FuCFTwTycUnNcjQNTk6Rks84RU87hsu4qy3v5HxBHzXb7PzV2BsiFbHj5puPPWdWYWGRQJhuBWbSd1d3gffZnDa",
  "key6": "4H8JK8Uo9v8miVr6ddHjMV5hkvVWwpHUZyQB49DSCc3BEVEcWFR6rRBXhHEcNg6MuD3vtRz52onYjHqQUwJ2mgNK",
  "key7": "tPhp1seMGEXNKwR6SfWtHQ8TmwB4Q3CcgZzzKUTUqaSyADeisiWcLxChHcLJRHvnrsUpAhqJTuWPvBj2gyh2BuS",
  "key8": "267u4gfRFE3VzFboE4aHdaa7ZHaBRMamzWAK9r8u1TuR1t6nYqXqzmdfvPfSE7VU6go6BzVZhB2Dn6uTBTf795oR",
  "key9": "3V8cp5ais2Ph7JmjqM2CRZJ9remcMnnbB1ueKA8ENNmCWjCct4rKZDJrMqEc1s5miK4zZ5RPKYXNtYJRhBZyzpbq",
  "key10": "2ECey2A7wNwujbwgVthrEYUeCodem6hrkWUhUX4NwPtGnAqug2DMh1j3fsXsthSLWvENcymd1zxSe59KcBeUgnUm",
  "key11": "4kbux71kigsFtWpgDNdZ3tgYB5r7tTPBhZw2hJWNnzPZ3TGMWPM8JGEBejc6FzDoeuyLBcsSPpsZTnrL7xtpx23i",
  "key12": "3VRC6uVTkK9NNNh1mT2yn6QeeffVbYZrAfbegFmYt161xok2BPFNgyFCA9jmrowcKV2G5U7XEYfMcD1rSq8qeJi7",
  "key13": "2n6Nf6UKcphWhEKqghKXMvSF5QF5bgZko3sKTRXJrq8sEBrL8Gv2grHc9DZpDpFwj2oNwPLQSpAo1RphC6pBZQFq",
  "key14": "5x4XpDqzeBgApqQE9QXLdE9jLjf4oFPQcnSXqwiGR6wDPHFz3iB4NWWoJeu1e1KKMitd3E1uUgWGJasRCzKq4D8k",
  "key15": "3brJANzxn43KtWWDe5kLTET7DWsgs7S4PPHhyEkrisJe6NVxUbjuqEsT6tEzFFveWYU5xrMuiKpFyihf9FZkiXo4",
  "key16": "2Tg4uWZQaSbAjTEALsoFpbqwNnRrqgvdAPrTNsjayU9UjUwckHxmUMJMFH7Qk23Y2Ls8q8XFV5DT9592uQQF5ce8",
  "key17": "4rLGA9imQFDirJxrQu1eLcv4HcgsDGAiA7WNeQjS721AcrJR6R8VSaPekaxhu4hUkYWUydrNadHHRxkmLzfcjzdo",
  "key18": "2gNgF4zQSMvqc9zmPyu312MXqN4hczJafZmcVWdJZb8MLM4BEWdu3fVFhsfTixUVkgHjxUm2bSqkCXhbsFKxaqdm",
  "key19": "5zfhXSHCFWSgRkbNNgnpyGEe14MTg1Ao1e3KvsGGfoKwDEeW2aNJV3wMAsWfGN7VtcPbMNnsWPHtpQxMDqHNUUYp",
  "key20": "2KDefZ1QpKTiBGg3jwi4Xe278cJmV38XeqJSfc9hmxzE9SmxrRvwWDsd25GuSMjb12gyXiAbGBBRQYaGjG2nQbTM",
  "key21": "4FfRHMXLroPciRqkdYswhYobyL4kohqcwV4YHd6ayDDGgmR1fx5XoNeMGNoagvWjMxvHYDyzyUvHmZba6vrFmv7s",
  "key22": "2fNwY3eA65okjYqoifvhNYpLcxxv9jsnhxuP9XGNcCiqBJvFykbw7EsCPkAGvpqHrV73kzE7brBvN9tUFed8CzcH",
  "key23": "4yoXNvUikddBEKSKCHaxdZjxBEJbZ31TZ8GQ3HY9CZpt2FvtpGZdvBGgk8XwZpvKvbgD383hTME56tGhbmDFegTY",
  "key24": "54cLYQfK3po7b7uNG546DLmqC2SYK9fTfV3ueo97ZQfpDekPqgfd7t3JrmXEGyb7Vmw17ypirXkuNvu249SBkUT1",
  "key25": "5fpXkiLkVdvawiu3hff78HL3sPrwkamr9hFGojQwgLCxTWpAB3BRzSQ3zZuhCUKLFYMq7sZKDHHbvPQ56SjTp3Yn",
  "key26": "2aFMy7DihDDbW1JWdDvy3mnDwmxFXwUGRraD4HG7FM9Erovg9Ui1VfHZC7B4pQB1dV5PQnabNdFC8H8GELwfuTjF",
  "key27": "679YuLkv4Hxn1aNLw9iCMNqrdsKGzb8SuJKMpz9Ursr6BD3atJGdhdnQNRAifjpTpNKvQ9s17a6U7BptboqD6hPv",
  "key28": "3d8JzTWQk6jbhwdJM3Zc1bPAygfsLNTJ8MsFGhRTbGcZCZFMyfunfKcPmGLxsFSQCV1fS8MZkF5Ct1dMrsR61Qrt",
  "key29": "5Mf4dzNvPJCBHCVqoyuqYKkrF79DdajGPtCXDqcNzLJgDkigiACPUWypSx7Wx139s6QzQJWvPs8MdWLaxfToyAX9",
  "key30": "4pY3DthhvUCCwC6hkrP2wG2gT5HAkJ2dETNwrMN226fLGkXp1ot3AyUfwH4mRfVhz5472eXyL4c6XqnHFDu1xY4V",
  "key31": "67QrJKM9WrnMAKjijoHSEsR9vqE425WY2WwxhAV7tgs8hxrBekvRKqtkrWH3koA8HC9nhqioYy5g2hsEXTCRARNt",
  "key32": "321e3KhdZL6DyQ4pVSSwZqPZTDnYeq33dRX1Xc5ovtgzoeyhRMcrZjoEdNkWyT9Jr49Gk8zLerz3KNPL2ZXojJJb",
  "key33": "3v4KNm7b3ZD4GdakuyYpke2qh8uAHvUw9NtGuY7iyorBBbsRd5r2ZLY3JB7eMRKGBdNveyg1rciA7qAJgfJJkU9Z",
  "key34": "42Usm6yW1caEgL6Ys7i7bHvDsiiw9wy6PBe1FZo67QW4i3CzpUkyTW7cH34npPRoGSHCuLWFAEXUqFbQeZRPxyBj",
  "key35": "63zLJ6nmx1T3S9G8xSsgDWypzJ1HUwaXcWnN3oMVqxnxALvgNLvPurbyhTvpD24GHG6WywoWS4YE599bodZ8ScP6",
  "key36": "2R8LeSyheZegSM5jLiiSwTXnoPMyE9YX65GLCTPwptz5Z485YukrQtq9XvwFDHw5KGtZD9ouygo7HKuP5o22gTDU",
  "key37": "3ZZjBhaTFDNH58JVDmJAjwxbs8WD8PQhh9FnuduWQ55kzMKvhSRWmymqdrL9qrjjgoAqSRHYAEtSeJdAJNt9fvpH",
  "key38": "642qaXfK8qnS2dwtr8R37iduwHB4T6excSHNLU6dt25ZYfsqP4Ujx962F91rEksFaw749dgKAskxPHBpunKrrAfb",
  "key39": "37YJUAcNe9opFuqxeWEk1Uojq9sPpCcoV4MYVNSrJcp8Yhy933rrn8UyrarQaMgSvxtxfaFqKTPpskC16jLNVRSW",
  "key40": "3odgGENCBsEg8B6uhUhSCVAhxZrCbNjKouDAkGwBHrWc1fNpw8gXvrVozyAuSxLUngqed4DGGbEjU3FhqNz8asYV"
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
