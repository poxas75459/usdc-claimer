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
    "5FTzj5okmL4hyhUyW7D3sXDV5ZkZstbaXNAM6wpcJSbP1HwP2ks7Tq9q4TQSq2AtmgTd1rH8cARxcv3u3KJAAYXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AEdZzdt3Jv2PpEjnmhgsWDQhci2ffzpHQADdBhMnHjbQTU8DNL9W15gKDWqFU7rBUXL8RRojXCXCx9joAEQbCjp",
  "key1": "Esum9BWh7UBXE49FaoNc8H7L6QVEdMkdofutj6NYwe9NsgMjX1czQDdJvrdYXKQZoac21pYY4ap4a6g5dQH82Wv",
  "key2": "v2CNB6c8gtkWzPhcvGDU3JJZHHyRHG5RmbwibvEWe6oK5fND9516jtkAenPQgPB3sXY6yrzWKkztwZWSfrvE3YV",
  "key3": "eYQhiEC9yWXaA2nzkvSLLkxAzpvjAwUgQtChyES1Ew4RFk2Qd4BoNU9qLRfhUM9TAW8grgPYYKtYuSLK2AbFcN8",
  "key4": "5C4fB6ZDgZxdprQYuWBRqmbWtWQbzAMk2QwwEVMjmncJ16jBiqgkgG5cZhDZbwy9zqMfzxLHP2BEJvzfUKEYVb1U",
  "key5": "vfV6b6zqQS8FCte6cuyNnuFNa1HSWqDxa7HWEzxeHaxRDioNhcizrPFMkvUVVYdis3RsYjjEPxXRhhVh6DQ6FZZ",
  "key6": "5brCKuj7rhywtwSqEAJz98VQJFG6Aq7R5FEb7vKwid4QcTTDjPV2xPV3v3AwfJKKU24KmxgzdWbJE3N8vCCAWBXX",
  "key7": "5yjmcaatzJm649ztE6e6iTfhSGRQxpHdNDDbCHgaT2Pnm3wTC1mYetgjZd85qt4kgsS4cEfgsFZdRJkHQVcMHo3a",
  "key8": "4KwakLHTXJTzKE6wcDYhHTNHouf2XRMvBTJM9LshTcX4SJbk8CDHrGbb3YiQBe7S87V24XtUK7vgQSw3bDc4w2RK",
  "key9": "2dnXyLekxAmRZrDt7rTkBb2iNfMCKjuveCV61hNN6FWgQF4tzRATGPgKi7L6iS2eR7PeQsSxjNRfZfvKXcW4zcJL",
  "key10": "3Zx9KV7wq45iE5dxtia6xngheW2Buos9CqWjmXNze1bcEE89HG3uYF6JEs4ZcnPGvzQfK2Prz2TvFotDXu2Trqx",
  "key11": "5zCdWWmPH7oZxum2NKguYTL9pnQA4LyfVmi24MKrkGixNif1DkLDiVhCeexFwMoDTcCLwKYngMur5HHSpUuW8jxs",
  "key12": "5YjJbrWBBz637CUjxyW1Hzjh6AeAPtkmrK26jDsm7MmeKuXKNsLKYe3HmMuzFsogn2CjCcEKzUTVADv9VmDUcRAi",
  "key13": "2kpPZsWhi5oTbu6QZ11nQBWdY2LzPNm6bM1h9wKP2dRX2F2BwpKzP7w7Fjuo9eYx4K7Yu2pWUKKC2HmJZr9M4xBu",
  "key14": "2UaM1YdteoHb2hb2dyhDyyiSq3bVjyXPe1EMzpB9JzC1owNUUCccFohNwn8cw8D8VstpfmdoJ2PfCSqgQ9xMHAJV",
  "key15": "5pweA6nvZEbMsuLX1hAxwzxYi1PzHYAwPAmSMAWS1BfD34JGadPtYRUe2joFfRjbtpHyrKZytQrmsr71nePN8pph",
  "key16": "3eZwKoTn7bfgCs2z1AszThK6hxNHs7ES6XPqhMbhYhiWKr93umQfPpDFgnN7AFAMBaWkkSZh7NDKr3jmPpt43wjY",
  "key17": "2PdgD9YfAfQh4rkoYffHaRrfRX3HoPxmmaMVfysSVGV5tg9bvBL69k2RrJgutLctyWwx93zvDfMGQEBXcspjY6bt",
  "key18": "W8ZPZzmkM59G83VVBbTyrhZJ75dRqWUGZFG8MXx1XghTa8Ko34LR24NtsEGtcsFBHWYkVr1pLysF6nbVn6ZjtCz",
  "key19": "4YrS9uxs48MnPuAGdYmdYQcggxjejXCaSufn1KWexBzA1mpyG6mKNZQAGi7qN5w5GPufZv1AtKN7ahmfcWbJWqJg",
  "key20": "4FZJ5oH3vVN9ZgvjoppxqVKPs8wDHHNDmq6xsDsfbEBb1UGXSbzQxTEeWyPBu8eXhRVPov9184mwFb8aSZ9Cvv3E",
  "key21": "4LdKsKEr5ERapnVm2D6f2xt8WtVQTv5bSDTDti8UTBioTarLkRwtWbi4K7cYrk6qkTbxCXZ8n6HkiY9w8v5B4BTi",
  "key22": "4Ebirm5UxsnWyRgxixMN6eriX6k2bMr1bcJN99Tmro4mMswEttmZodJGZ17fjnewPnuN8QT2ouh9uFE5xfnMDzLs",
  "key23": "5gGYAynQo5h8TrA7ToXVQ2wnyswH9F9yfcPFqUdt5nYNt2DDX3E21Zwt8rmW83NQ7EuGUJLgeX64ajFDtp9YRw83",
  "key24": "45y1fhErcvDZ7PPoRArv1HmArHEoAiPgp6YdBfTxyUWvXFirQsMSg9HRqakqeWbvVPpmZzHz2YT4RMAWmvcMDHEt",
  "key25": "5Ckwnu7Hb3RXBcahkJo7AnXejwrX9zzmYEPtVaCcG9LaFMB9dK45oCY8t2PybYo8QWqduvSySRAMPr7YoXontKXX",
  "key26": "3cu6qbkGcyFgiZRvUdtWu64XjRGAbAVQS2hYy74DKGEAeirKfrg4QVZ5KuCnzwXkAJcDpZb8S5LfSq4FQTpAmdTo",
  "key27": "3GLLfUzVxmFYB4eLTns6hvZwnQQSyuhTd8kuvjCq9UL8o4c9ogzCZdjvhGTJLmBJRsJTTdnmyqqeqxn9JkZL8iMX",
  "key28": "4hCnaNYxR9jC1mTQx8WBcGFmaDYSTMNkyyNvKgRCZiBZqfXa5ZaW7nn781s3QpZLiwbiufBUTNFBAjUQjQ1Mh9rn",
  "key29": "2Vts4Uz4aDsbyke4CxAyq78RAkbZr9Jo6FFstDmDrbPVxnPbgjYGBhR9dFz5gmGydcmUAbLhWX3ziqz29ecQJLTR",
  "key30": "4qdHZp6mbJy9gJDXzfP6aeWXoBaaPQ9cbktnh6YFmEHtaHV7u7uuo7umFjaygD3BMmHpBxAMSjLqg89NQR9pmc9B",
  "key31": "2fVw3rxpcW2w1WQ5E1tydd5iRQyQWTcQE3kujotz7sd3VPDRfcD3mTSdqhDmn6hsArdXoLcDv6nYB8Z7E7XDeYKy",
  "key32": "4CRc3VLbv6cHgayWsnGEZ3Qx35ERxEw5pFbRjZzEiZByJNEe5hPsU9iHZdXoJyK3TzVUkmXqcgGEsb42NeHtSxHp",
  "key33": "3Ek3KyXbVTcfaPUYVEKwFZWTLasurAkhhVv59wjur9yqgRbGDKEpqGqdiM32ewRTzyNKjErkpYUr1RZ7Nf36eE9G",
  "key34": "4WcbqSzgdffb1buEuvNgsFaNTEyZiw9sKAGWs9bnjSorTXk9BJSKtz9Ty94Wx3R2nkyVY2kcgSPW19q6BFAgZ2WG",
  "key35": "33NhcfmPgTqbs2LW3faqpS9mbfkZUrWMi29nEGetZe5Dr68tJL7Jbv9cMs4XvJgc65GFYPRrFPJgt13ueYfKjDtX",
  "key36": "3wV3JKMbArdAoQsmTyHWJMeNVMDqyPTJ72BWjg2qQWNQKB64qK8HDfbDu1Zm5wgTG7bsK8n8tLRxFLbrbzsjUvGE",
  "key37": "4U9F1Lq47Vr877CJ7VDH7xQZt1NcRmPhPAvAafc3hAQ3FsKVEv2BE3c9ogEvH3GBcvrE5tYJr69QkYtArpaUGbbm",
  "key38": "4dD3XbC6qLBc8qLBSgnjRNjDH79rLFfJbauWNExqKABDntVdQerDbDTQZmkEAeMTN1nWMEnfPp6UEKb1WNivJpCa",
  "key39": "tnxawj2drLBYHiqXsGERey9SvDi7M7ZLoporQ4j6T9gwejK9pUrRj4AJjPwwouHQ9M4Y1uhMveSnVAycPuQphvK",
  "key40": "z1PGH3m3SkobYWNfm1YYgf5cyRpzBAc9ZKc6EDEDamfnVVRTZm9PDj51aFkFei4a57tVJma7DdjdoTbfXz1d9tC",
  "key41": "4byZXH3vHuCHw2UQqEYArcsx7B1FEYRM7o2GKjxRVpAai8MLttyA4p5rvSGkW54XaSW2KsrSbz5c3ZSc2D9o7mJT",
  "key42": "3nUDwkhEzmiL7GdULeXmNZEuHFMMaDGRH8yJbuSJu8dEVaBq6cXXis2c6xBAVFY3UKzBZW8JGtvRy87BqZXiqW9d",
  "key43": "2rsDuyki1D1KL5wyieHYFA76d4i3MYwFmMHnmkcLoh47AUWEqoX4BM7J9KvPAh2Ntz5c3fUgQcSQimXjxr8P9efV",
  "key44": "4aQgLpj3QRKuqtpp1oFBChLydCpEvmyAyYmgpPcqpyCKXi9Cyvq7Q6bz9eMwy5hsxss8SjNSz6mrskQB3yHaVpg5",
  "key45": "eqvLmF1mwTsBUtUxzYGvePuFA7CudvgK74Upenzsm81YQwCheHNA9L14wxAgyaHQ7PEr4bchHxuvyu7dgmuAVVB",
  "key46": "6476d3hZdSSjKpca2h5ZD4M83XG1SqBStAwZKCoRi5mgywDVFyssD8bi5dBBsjFqCsWSzQiDdmZcquNvH71uNfN2",
  "key47": "5MRmsKJ3j48BYfsg2iP1BQPpWkqLihnnRKdfRNGPkNF232LPiRVwMq23oVG414UttHrqDMkUWosm5KapKGCjp3tC",
  "key48": "3nrM3yS9ZDz6L9tsquCxa9RMKZHNNCvtKVFP5BPWSRGpMXapqWqZG7H5ZYzWcpSFXXadW8W2og9wavT5ECdf1kcc",
  "key49": "4StUTD7DgshEYR2S9EfJwN4RWF1tdsVBB92xr36J8FpL6pT4awAnrbC1sDPQum4X2idPyyWV7PL9GKJYD6LicFJn"
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
