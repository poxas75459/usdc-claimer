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
    "4DELU1eaPD3AtSirQAwZeUHXwVTzpQ1S3aSu7ZPBSPWtf9iMAFZjYzhnrFX4iN2MyBUq3U2KKgCBahQbRn21815f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U7qjvkhHmYKdnwp8XfAkDQo5LU2Fb2igY43D24xybEXw2N653ULnYY8sNv53om17FAz6GK7rGALvYERPp4f2hYG",
  "key1": "4pePHancVzBA1xhJy3Seck4t8AhaLdGQyTCkw9CS3eadRkYbGy8dHb1undBUWoRrzVhgQD3Cbsuy36MMmK7i5p9Y",
  "key2": "4MirFW5BkWYi8CPEsYg92abGuu7ZobU9D9AdWKVXYHgzmUdzHiG1bpTCAE3oiLU6S8wtVYLHXxxMPhqaTtzxu361",
  "key3": "2ff2eLsaCkhF6KmTgBgtbcC65T83jVFZSR5gUcyznkFm8bzEwyitD4u4CTYi2pRfd1PJ3X7RBD6ka78pYgP3N5Zx",
  "key4": "4mJ6aPJiYdTchmXvKgE6NkrYj59GsGWFrqyPxAssJqaZpVgJpvT1F7xTK3WzVWukXb6623cq2MZRJSLXetMKNSFA",
  "key5": "vFs3Wj8p8hL6dbNF5qUbHrpT3nQQJNi9qbyUZfqbVZpCKB9npqeHq29yig7LLbxrxXrfuHqE9hhisWz6fGRJLfG",
  "key6": "54EEejy4J8sVoUepfQjdAr1V8U7tFavnr4uZ8MjaoEY3ikTXJJYTqSnJFQSoykXAc2KThrV27QP1HACdEwiBxWJC",
  "key7": "5h4YCaAGQ7qQbSvUzvKeKvKMJoZ1Rn3FQvD6bArE9Tavw5QmzogkFAqnJqzFBGWrsr4PzYLfFURnoGoaq89Rvbpy",
  "key8": "5baf6f8ZvGM9oxrTuVsCSe77vJQH9iLbK9CJuadJpm4vam2xvncp68tQWjrHNdDXUg5m6XbBcEeY4HYvW6Dh9A5z",
  "key9": "4pUinqETsbHp3SUyDZCKqyJBKgxSNmdiyn64z97fJiziCMcmeo4CD5T5wtiZU1mSf57Y4SfwJiSGHta9bLWnDczh",
  "key10": "Y8qAQT9LSqXWzRXr8798mEh37ehHJgDwhE9TqSS4T9cqN8LFZzZGxdEteRh5s1wN1NAYyCfGQF9as12juQGUyL5",
  "key11": "62c14byaDc1Mpv8UJCzgUxwuxzHPLPyt7HJineZunaNMofDkRc9wVgBSw9To9Bkg3ndpSjyXhvA6frAWRUXNpuLx",
  "key12": "4V1vdB4h5wwmMFYSHAgg5n9MKLZKQQ1CbR7Nzup5eKYhe6T7mtb8WWD3wYzA5zKUw79fzKHSrNvqssgs4uFtMDVw",
  "key13": "31SJJQxGqFXU8nf96CfTQHcn4GVd8ZxPURpvw6vHh7e5TaNP7CzwuAgchEUg21pueF9KL8LrdZrBKon9frcgYxNV",
  "key14": "4Ki4pwmJ3fKExRkQyst497PQCyE9dchvJmYsxzR8sYZA8oLdUBt5wEDXrjXvt6Hu9HCb4rWL5iUGxAdPD6MJs8aD",
  "key15": "5ZbEqTZuq6f41se8QikNTTYe5J4sG6bt4CzdogBrTbBNVoPodWTzDsQTAPmME63HxLY74wt1QW6ibiH7PQpdRZga",
  "key16": "4apDyeXUirpszWcaZYuunTq8B8oV7VAY6D2Amd1SstHEJZwj5J6mPimGzjsuUVoMKmQF4pzSsKfxkD3zsLtbW7y3",
  "key17": "38YZy5azAPTckEYvkkmx2WFZoyadVm2Q2aqQU1vAT37KXbubu4i54zWGUDavVUt5TGj6qhFbDKthfGNsm6pahbQ8",
  "key18": "3spHfnpakieXaUFs6r8At4rfTkh6WMkWqAtnz2oB6q8HYJtdK7kniBsUCP9B1rxbT8BeJbHDk3FaLeShpfNZ2Bae",
  "key19": "45iLoPJsrjzn9oY7eLkU4jv43c56EtJmG1CbpdGKg1UAsRXZHnEsZTb24pbYhKn6q54muyLADpvUFLEjzcuRgHcK",
  "key20": "48GfQBsR3RZtQ9bXmJZo8et4i6cbaDGfXEeCcPPQyqNQapin3D7Fh9gN9xA496Q3RZfezeHvfGzTS71YpLdMErHC",
  "key21": "41W3gv4VkrW6Qi8wdPZqSpTNMio3mk4v6m6Vde7GSapFU25TcwUymCv7NhCpjykCfzGGTx43YpefBCbLsWSdBBMR",
  "key22": "3VLgpX4nQex57tYdjCT9bfY9hMikJf3hyPGKVm9m9rBYen6GAY1D2mQtujUwZpjYoxsu41LgorQoD2Tiu78tW6MQ",
  "key23": "2Ja7cUxASnQAyr2ScgdHDJm9S5hgvCqVfuXymeMEQeqJiod9WW71tmCKm8fEh5ZuP6b9CQrYVCwNW3FZwFUU1xV",
  "key24": "5U7Mnm6J8VQNN8ni2MqrCH4SK2SBNX63sXdov838hnmouARRjmNvTWaRuQZoTmRJZKDDRPBhVKtytiPAh2dDbQ5R",
  "key25": "5ZXdjW6TonwNtJ4ChWe3zdmiPdXRny38vMgWEzgMQZoCCCAQDaXqFiL6KzHdTdLtxF3TCxNghR7TnahUA1HfYJBW",
  "key26": "4bg5MksmrSzjY2UTqxxPgtgcUVGyGMxSfo9qQis45UwYA6KyNVguS3Qewb9YLPzViKm946YT8GfBacARHPaQMDCw",
  "key27": "4q2bbAVPJXbRpznEHgKSuup2fYG4LXd2WrYZLg6VrhPr5Zw4xUc4bo1rZtBsqogW4GHnSo7vEo1SrmguzovaUpHr",
  "key28": "5vrcntpAoTkz1uuwxYeWuvBzdhoog8qz65HF6h4rnu6JGwKd1pBjNAoGUdeiv5iWR7S7YqrAF8JkaKXwDjF7MjYo",
  "key29": "2YAQDUUkPfGrb41gByDkSaWqMWT4fWQMEmaevA1wkvKKKUeAbYZVsqydCoEq91ugWjuGsaouNkNoUH5LGYDydWDq",
  "key30": "2Zf8mL2HSj41RmySYXMLbRkSARMQystJyY88d33wLrwBhGzr9tpowvWtP2GdkqZe6LWYd7nijVstZ7B4VKnqr4PC",
  "key31": "2ywMpuLoC4X243LojWj4ak5dqddneGfaYCkTjNqEP2k2gooMdNwobhJZCzELPgUAZ5hkxyMP2Szr7xp3ntFK8AdQ",
  "key32": "2rDmbj3o5UMZx7922Dpi9bCRAiym4XdjNu8BsPTNWnxwhSEPL6GDFwZDS4inkp3XxWEd2vFzFWYyLzqeZRLNT5EK",
  "key33": "25VeyPcMPVr62KfgwstkPNUZm4R2d7aL9go66PDTEEF3xX5Kg4hWNCXqTAMN4mLJi9cAKiCCH5MwtpuDQrtQt281",
  "key34": "ER4khUgUe7U7KpARxuRURamDqj5PE9ynYMQCVBtDXwXVUv8MqqXtdj1fCHnVs3tTdXRwh24pzT3iwJ92xaKqFrN",
  "key35": "47AE4djo3hBNPKKjKSCLSL4cpbbkC9Z1pLh1iA4QM4j55KYykur5wsrrn831uhE3Akyx7foDR816yQ7jLvhv8z9U",
  "key36": "3h2j5RxSmCJUsNZ6rNKoXmdFeuu7Ltj8Q9sHhRG2JaW3ef8tHXk2Fgvq3H6yUCgsubuCNgTSwpK96xziBYx5RPV5",
  "key37": "4r71zyt6oLFbr8bNazHWBN61aqXYgtTwhFPG7cpv82zLeiyyXc8VeYQyjNCbzQi6crKwPomQedDytpvVkUam7Vg9",
  "key38": "bLmqoJEqYrA6DaJJvWBkR9MPFo7sCcRaS37T8o65V8k7mj5aSR3FYnFN41FHurVQEGuFB7VZRVr3JmG9rE73YYS",
  "key39": "2WeErM5pNJgHqMVLMhGWJZMowBrvveSR3Vqnyq215aJ65oWqMXZ8wufH9npW8h8PZHCyoejJzZpZ85eUv5T6hrpB",
  "key40": "433So9DGaGMvyrT8BAPytLdNWCySpFh48pX8ecYBAK2Ceq9vUSadGok1aGJa8MNiA51igH16dZBt6n2i1XNKTEhP",
  "key41": "2TxnMhWxwisEfgWrX97inSeLvv1gdBeYAKtN3VBAd2rotDZ6RsBDvHniVZJJtTBNzJQYjctyHiVThVBHkV465XiK",
  "key42": "4YRQYVz58reo1f6MqV5naq38w1tBs15LgEiu49ZtVZhpXEBdnJV1Cc4NZA6z49AprD9Yb25xfWiKYgcomXPhXBHJ",
  "key43": "4ZNK89sgLvkfWzPZ4ZJKzvVyDnHZVXzdGkgs2aeoNYrCYNuwXRf5btUeKZjpiGV775yAqzeXdF28Ab7cTuUdoMx6",
  "key44": "5BBqbH8seATnhobDtBZYBLYgocfW82gpSj5nJNcTeWadKKPPVSX4D253uSTE7Ukpbuju7puae2u9bL9CejbfcmQW",
  "key45": "54Jz9Kq5jzSWmhuDMjfCSJZ9i9LXYWsfPXvHXRBJSCrDPSx7vvs9a8znwSR5fKWD2LVCQijSFQA6xcKkXxRg5dPV",
  "key46": "21DKeAVR7ZW6uXdp6WbDJtNsHRW5MK4kLyvBtzp7wWuYD5NuCzEemg4mFG3qHnLFoTTmMqnPkh9v2R5TdiHfhqbA",
  "key47": "5HUWr9Cue6pHS8SyaqdiN8ZxuzsGVNvfjpEsM5YmQh8roQyhdNuryKaiV6Jy6HerhcJ9gA8PbAdqpEsoZ1o8Nb89",
  "key48": "2Lu9bpm8uguQ5djNsLmCeRf3g2pX2JNPnWWgrLWxfKRtPBE1gTs1GPGPzioyqPXrmAJVzQZosCEDWQVjKHjp3aBY"
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
