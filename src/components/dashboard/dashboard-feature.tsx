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
    "3GuSoZkAp8fwZMnoUpJ5NKgfYSf2tfjKXPzbyTAoXqZ3jmktAJ9PuWSuemYK42uc9kCA7oYTzTytHqgD3Jw6qrc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FiJTCyHw4d8Rb82WVdVZGYJ2udnqzJPzBcYWnWh9cyWzgwvpBEqVEAj47E8dydogbXUX3n71WP89A2qkfpCfgpr",
  "key1": "5VTmke6t8D8A9tJejr9rNR1gpeT2ezy2uFpkTsU4oVru3D7xTTECexVyeR9X7oHxyAcXkpJGtN1y6CHLAdFtMqnh",
  "key2": "4DBoicSKF7YGgbH8f2N1hDTGf4cz7kwR8VHUhZuqVtCKB34fB4fhWNHmFDJWNJrnFGBczzuW8SxXgTi7RNDLZwUz",
  "key3": "3MytaQ1DwSRW5w8Ho4gsHdW2yCugcxZkF62vTa2nLxC9LQutDaur5hQ8wb7cLXjYD4Pe5MNxLgUoAyyaYcvPjA2Y",
  "key4": "5EbxoUMJKr5vUrwA9S9g2JQGT8vLGohhBGSpcuc79eRrNLZwTZ8w5dnyaFbf2w1dYidPzLLiMyvZjCUZdc5KVyCK",
  "key5": "2tWfWn3CT4yCektjVtaL2E1s4mXQbuMnTfqEfriUyKt38qot1SanyMeK95HxxRdBw3LwHd4zSeXygW88tGsH4ePN",
  "key6": "5XRVMu3zRjpAGX3EsEGB7UqQKDvF2etPn5B7ysUcurWfMhNTQWt9bP2LGZBRrFfpAMwekh8ErP4CrCr7uBqsfEZi",
  "key7": "3nJhhjdrZZ8HZphsQ4Akub2EFEcEeoE64wn85vfNyu9q9kzYur6LEYxpo6fa4ZRdajeZpjc5Wmx4iuGxVrAAn8v",
  "key8": "128cWqqRkSyby8qa4gfJpNu4kH52MrabHKAPoAnx2jW25wSo7hL8ESYu8W7hwGSM9W9fnhALdoauev13k4Ujrx5P",
  "key9": "3X4bTFnceniRQJhH3uKARJNTgoB8dHdzbDCEK14rndA9Mz59zdjBNp5TiKTtSKX3HL86uRk3koqkTB4u2MHxtiGW",
  "key10": "vnAqhdf7kKKZhcVe8tEGykG4AbedxMLseBRqgXCRNnjeg2PKRdnCaumMar8qhNVpPPkSd8UTc294ZDxyzmoSs48",
  "key11": "625grdrbrCPdEt9ZqKCtpV7WSpUqXtX2YGVi7t49BfUZGj591DNa2qHC7YvFwtodyBUJY7nk3pzL2UEprjhGJRiC",
  "key12": "5VHNhnHEoxNkF7UtizeRTvGkUxRsi3im1JiTC6QJ54brJ2ha1nrkVbVsSJeNvdg81PyLrDAQzEjCJwrbtFAhBHnj",
  "key13": "2psYcUg1fYHJ8jRuoiyozv9pwoKnaf4UdDauDHE3krwEHG9RLhhoxyjoNSFEYAZYs49uF8hvZZ9dETDEawa4vU5r",
  "key14": "2DjK8JcNUAxoiAzerBXCePY8rFj6iYkfzmuY3CW5yaLk7knzBQ2HtyuA5idZfZdgAbpDzWt5mNd2d7DA5Ngiz4Bi",
  "key15": "5DS9hsFDNRatM6pt8FPJwU5qvW75zsrmakbMMRh6xAFLHgyRmZksN5Uo3NEEpMGgoa3GADFA7Gr4hL73Hb3rFT2u",
  "key16": "238573Gj1qWE48NfCEwHQVwXJnPbmx6HxpQsdtcqCHtj7CfQi7JiELfX3QkxXCNPEeKeooLKU19DbBBuqHBZgkke",
  "key17": "5De9LfRqvF3NSkc1zHm26FbSdeCosyzb7NMHxtrKt4Lqu25x1BbZLQvyUNXDEibN1G9nTMFA4wQEo8AJQiqN3b96",
  "key18": "2NDAHLx7cmmiv9pugrt3Gx59BH41ZfEb6gLBk7Ao4iLXL76nzeyphBZQ24iwzYe4rRxoBAoVMkgrN3Cj9AkjqUae",
  "key19": "5ZMY33hC64UayNvrVuaxBXrJZwAWwZz1jWrYUeZ15eK6pFLD7jWcxNmnnZgnaSRaACJtvMizrr1i5mZaHEfYBm5G",
  "key20": "2wPCRzQ8oSGPRNJne3QfBomDCfTYdb4k4F49oSMB1E4XtHkH4ayG9fbqm9gAeQcKVnGkxonTYtwejraAT5QTj7yj",
  "key21": "3remA6QzD72oA4Myrs6wQBye3KPP251q5TdZhBhAjiyTNPCvRWTTHg2qbdZjqKJoCiLjmX79cRi16ekNpLr9h5jn",
  "key22": "2NUd7JMtemK1q2sEvteMFnePSv9b7N8GHfinSmcFVMXJynRC1pacEUsZxm15cppZrSfRLMnWTqfu7oSENg8fJW3L",
  "key23": "5qeYMzkhpj1zHvNsm2NaCbURdmFCNofzno247BF9aFZ3ohRC2d1sLxLF9SusmJzHNbc7B3BeM7YgYi488ymzZvAM",
  "key24": "5R27v1YAQPTyVp82guRSUU8q6WGN8B4QsWHsivyP8W3LZcZAaJjjvrmUWmxmS5fywU1dJosmMr1tN3emjJPh6Ew5",
  "key25": "2TCniVVFcD1GiXkqj4uHTSDwqZmA4HXLfPjDb8j832joEqTd4yM9GEexa4JbSuW5ExMzBdJhUvAVhHFDhesc5C5F",
  "key26": "34uqKxuN2MmTUUg12qzxPuNEEpVs8oxYyrMfL2ZBGmvkdmvRC1UNkefedPwSxNVVsYupriMMUPrMRaKZeqX3zs2L",
  "key27": "3saBNCYz8WHhKHwaAcoWpn5ibfj3nmwNScyHbo5RmK7SadGcE54QLSRzYQoK8Mdx4ZR6NbkUTyTE9sCN9wPYK9Ag",
  "key28": "fyuC4z8dGqxGLVT8EGMtACyLL5mDY6VXoAVPCRwsLufJmrBVkn4S5LyHUXehs39t1j56MEiURYQUj1kfK1R5AtG",
  "key29": "3L1hjLN6yE5z9sLg5QKj3VNkvUjVDr3SgsFw1ZZxxdEte6rhM8bnFx4NNAikioNRNRdWibqNR4H3oBpBbiYZzmyo",
  "key30": "3Qm7jy88XFvaPCU9mtmfHWgVd2GYgq3WJ8Ko727oezdnrQGXzPhq9out7F9FYJ2CvmGuSYpqBV5W3ciuSmeaNpwU",
  "key31": "j3XmSBeVLM7n8d77fbZpbasC6GzxXn1E9SHC8wdkKTgFXat1cZfjAuiRwNRgZJfXbN6pDDh8hfFLdB6bh3RTWN7",
  "key32": "3pw9Fqw1c5qArSwrnyp67dCkHSL1XqwjuuP8yCHDz923Qifk15Nj9JEKNRZxFok2ZZNaKeYV9oH3boS723rhwsXc",
  "key33": "5XYmMMU1dZkN1iQqYFr5T693E5ZVvj7STojC14pVHJo6T789XRTr7i7vCpCjQZem1T6aGzjvoEADUU4mkRRia2W6",
  "key34": "8UBTnxbNAtXP8PhYseGLtWuAZoXKBzfigLD8Yxz8wRfM92GcgJEpfgZBGwjcthCe7yySHNw8R2EBEdNJUnmGepb",
  "key35": "4o8LTYXbfqXDPREkdv6NLSdHDwv31sujxud6GSR6FV2ZoLv8vo142D7qTk9WJCWBDfJEd51RKexCXdz5PrYb4tcj",
  "key36": "2kh5iuSE8GxQeKYgYG4xmhegR1FESN2GiLRzMbAF26cEMqHaR6RHCt8ohnWrx9mMq8SPmcxDrTh6qqFNccZiccmK",
  "key37": "46LK2vP5eW1gL8ntBScjWtBDseCnQM5xRxBzDCJpEv1DM8kZmHAnZxab4aWKrGbeYZ4wqYq7j63nFvG2ZPrMNxee",
  "key38": "WQzSn9raywRJUR2hjFExcB2QzScubB4e6CsyCMdnKFooU35kP7Wxmwm4YRjkxf2SacJGarPWgMEJB1j44ax1s1E",
  "key39": "2SR97RdXVejDpkdo7z7Yepj1vCs5D2RnrgjsK9VgAcnNNPqosaxoutkUriiuAbzhpmYWSzGCRTgctvDGLLSe4Mwh",
  "key40": "Bs23pabtv5xHusBBK6LVnAfJBqM5UQRD1eAQxK6pj25Rh6pPZiYf7iy6Zdo1AoH9n9nhFGxgZgCooQBKDbPLUFn"
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
