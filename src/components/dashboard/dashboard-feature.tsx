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
    "5udCHFJWdZ6TqW6NGidpxbppHTejRx2n5r4WZQmvrU9Lg9cgARuMSaxgmeXYHAinKoH2fp6FT4h9VjzDr7X6BUTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65aMjgcUkcX6DsadpaAxcE4U4S947kzQQVPPYVVR6BzhYb5wh7Wjh3Co76EjHP7zniRjT4QPXCmQ8UN2bhSe37jZ",
  "key1": "2yGi4rhQuRXKdVYeSmAe4SDCKyH2rzeNv9kH61Tymid2YWx8inoZQFzZv6ayrJfpuQ86d484xRZZnC93wqy49eKQ",
  "key2": "gtXKgNF21vyeZRHoAZ4vcGm3Z2rkz7bfZkHMnZzMtEok7djos546DmE8J9xv99PJjCkv72sNRvL7Qc5ifhhx5HC",
  "key3": "5wBavfBzJSZqL2tSdrN5JrZQSMB1EvGPktsAotyfUws2PyJiPbWAftFJU4X1c6ftrJcjrBiP1j5YgSVJoaMWfUWn",
  "key4": "2JyBimjWr5X8Dx1dvXQESJssLucXCEAPb9XeJULqdRFe2H2FynbNKJab2JSSCUJ76rCwzkQBiLWSQMphwiGV8CZH",
  "key5": "2R6LptxGpbu6BHdwtFxu7i4ekgtckjN6kTVLvYWtAgWxSj76hQ3UH4q16ZzwJxYTsSJpACyFYS2Sem6g3fqup6BW",
  "key6": "345AibAud73UXR2LMHcM5ys5ZyDLmqX4BiqzWxaUyvU5CnZzcQssnp4PyPCgTjky99rZhKoGPWq5TXvvDPSF2Y1S",
  "key7": "3suTG1rebgSVCZxuY6MH8HGQdJKYVbByWiv74Zik9Cvwk1PMMQRHYCtkT64Jp9ngvtLYrC4uu8kMs1SyXLNBfYP7",
  "key8": "2A6KwprYCcTH3HmS4qK3hL8acmPy9t5B8RfU4NksHHm2NszyN6ooQqJAE97U6LJfUCpCZM1egSWpLwVCjKR84NEV",
  "key9": "2jpfRC4YCCgC9NtN8xSZHMpQQmBZZrV8K9hZPVxKDU1Cd5xTa5awLgtQpCL6FoWL1zoszovC12i6P8GZH1UoWUaP",
  "key10": "5DQ8PGnCeLabEjidByVzJmqjRAuD25d2As4CQrVPauPgE465qYzcFjf2jRWn2qdcBaHn36Juo4D5vYQMV8eRmUPu",
  "key11": "gx4vJzzSKMJDXW5w8ckhVCZfbd7HY5ygVM4iZLFQCW8hqzeuKCdtrYGWkDBDDN36zcj8Xa5RJwLdJkgCQLDkCiR",
  "key12": "rbckidkQ438DBtkPAus4XntjbCJH2NHixZ34JvmYxSpDwe9tpuiaSeFms9KDR2srn95aK7iy4mzgupFLWx6UVaV",
  "key13": "2UcVdVuuuYJ4vCNPfpA6WmfbHnwNtnbj1BrZY3S6pS3yaeRmmUN11QkJxp7w86eaQGJAesZ3zYb68FAnRLi7rW2g",
  "key14": "5YsbRQ1wFU6UGEdjgT9ob44vvw8M36ohGje7ZZk9R6i2bcdruZRNEv6HiZb7bHJcHF1fLh8zxRyKLgkoUHSmY3m9",
  "key15": "2KdFQrY7H2ANmjHt8GhuCe9rpLeGw6CA2cg7bHEhPWkZ676tq1oYAj4DMzn3ge4bX9s2wPrG7tFtxbghbhxqM5s6",
  "key16": "2D2syGctpvKygVDyJFX7Rc3PnCbDMR8gXLiouuZ5TGjYX5B5vZ7mEqrTLrz96NuxuCzVA4XSsh4Uc49J3Ey12Ejv",
  "key17": "2zGxQAe9aybonYoKZa8pzg9TPGnDdEEBEhttJRGPBQ253MwyqHpK55AJn65hz6BLFjXhjW7w7xvbHy7L5uCRcisR",
  "key18": "5rM1eHM9ESWvEDM2pegeknqcrzGdCKawWWHVdVVfLPfD3Vvgevq5cJ6uGJHyZqUcSCZjoXEmZPYajPyeGPYWSNwo",
  "key19": "3uDPeuKzBX7r3cX5pNiFaDQZSTKSzCssWDGXJ8aVbmSGEDZoMwoxJouZXb1ZhwSPufj5B9dv9ks12DhdMxMbKEQF",
  "key20": "5mPBurk44hb1sP3uGb116ubpJQ5fpv5hvDHCBukyfkg9zeExuA6RWfLUfP7KD3RhSJX58hhzo3LqRx5x66EyoTyJ",
  "key21": "4WoCP8fykpyd9U8yAdDzTyxgQFK2r75ap1u3RjZGi7PSufDs1XQPW8Rep38kQRWrE2PCbMw6CyqeR4cg9FNWTj9C",
  "key22": "5jkivvh36Es3CoUaynkJqnZNMjvpPcJoWJw7bTfCmV4ejmCUb4B2f7UuYky9jp9o3Y5njfcgmcFC2qM4JKxEHmTN",
  "key23": "24AF94PBkVT66YWLx4CpBYQBjbL67Wocy4e58hn9mt4hz6YhJmDHmfdGiVU515ETaaR5GpkxXcfwXnA4avTCZrT7",
  "key24": "ZeWTH8fQbcMEyGTFj9NhrhvBirE2uqWYG2zBRYTHGBSzN1Uct95nkUuhbZ4fDp5N98rHvLHqNf9Hzu7fQHY5xbj",
  "key25": "3M9Rka3hs1wYkJ4ZsQvXNwethtKYs4hvkreEWVKqPG4uajXif1qpVbRH5PfyqCgwe8Q3z8x594Gg68eahKyDPwVr",
  "key26": "2qf6FzZasgc8sEqcTYgrxJysFeZ6bizBKK6y8JWiDGaMVXhoGK2GyUMEtat6EuB5VMHArt24Rt4RwJBPaVrmubwn",
  "key27": "247taPvcZBxVTDcoUuhCZoS5Kn8vKD8n2f5Sy65AC1pwFyoeAhqQ5i1Rz98vEhqhFnbB58yZp4fKZsBu6Z7Q6wyK",
  "key28": "5rhH6sd39BFJ74Af3mvSkzL6FtJe3NNQB3Ke3piJqdnFAkDc95X7SYQZo2D7eRNk5CFjYTyagU6wSx1Sr3n2VJFa",
  "key29": "4pWHHwJwqYBCQnLV2KR3PJdQ63tNM8TuDhCmo88K2HLY2QjbySJoiRKpwpeowYEfG43WJEdXzuTSMtZFp1vpuMf3",
  "key30": "5cTcWe3AWTLuLWCX6h3eBqVZXNc4pVJmtqAH8RvUA8vAqV9iVgj1kD8kJnBaupVneLTdAeYUfGfhuuUSLugwef9w",
  "key31": "hoHJVChvZCMiERX5AfrQX1JxpSYjk3Kx3yC3jFcWCg6NMrpdibo4rwqv9EkJFUhi5C6x8gSsgEEgumZywSkdJJk",
  "key32": "aXyxndqTgdpgmx5kMyvRVnpbfa7PZvvvS7XwYU3WDADQvk9NkQsjtLYnmevafjKTzS3NEpvMP8u2VmYfJ28BDnX",
  "key33": "jxPriqK9BxmyKAppwJQgkeGCGqYGmqWb2qZKJRx2CwkJ2qUXEU7TiBVcw25hD4EqyTDxjYMUVb2VMcAUJvs2M3u",
  "key34": "3AV61Sa8cSTNDPu75oSXhVTsGZVcxWSxnM2D7rnwD3kKEFUK6edoZvR8j2jkkfW2g71yzMpv4Kd26mmtLVenhe7n",
  "key35": "Vz6mgS876ndVTQ4Wafx8hfRoRcTN74AnYsnbcsVa6VfP6eWeFDD39cf6K4wLMxTE9hVsgn7nuYjiYqJHtLpHQM1",
  "key36": "3v8WriV6f2gQosPA2jd6tN5QDB8eZbdcQFtkSLHVtVYwsPxYcwzjKgFJ2geQYZidgxqCSCWdbkuvtEe2Wz6Y1fqu",
  "key37": "2bCFzWQLv8UXq1JMpZbMxchkjeFu85W9HPtbEvzabPkXpwvoaERTPgCRXZh8wXpRURq78WFhwau4Yma4wQsR5BEL",
  "key38": "GAVS4m4c5B2dvFghAFmYHdWgMdQWorK4TfuV5BiV5tv4xT9JmLLcdV8FkpXMkiKZRMC3NVeW91NYpJueoFCg2CP",
  "key39": "5DSZYXqKaCqxVLKiPnX4FEMaTF2iWbtuQjSSFPxqqK8rwRMR6aWaReAUAgL88ngRTpkc4kkXDWxDFVmsAiZPwHxD",
  "key40": "2ES1xWdz63aoz4ipPEGSLCCmNiNWg7kPzAaAB8kcnybvEXGRqTJivt1Vk3Nq1sQPwULDXkwNZRiptZPz8SdnE9cM",
  "key41": "eZDVgRQPykMtKGyZvww4swvwBuTKLaHWCHnip4TqBo5vREhR9hhCriQcm8JBkwEbJ8XPpFroCA4ieLemv3hfMss",
  "key42": "5jNga7FQewXNgtZEpmYkNnuRagwm2ga3BotpbeKXqA6Eb7ZLDwrKC9pkm8qgCM87QkwV8qj6ZguQJV4g269nhtd9",
  "key43": "3oFBtA9WxtFBpvGsfAqjvX8RVQTqqJZ1gCqbBWVN2HVopNPBmWKpNSUcLQmoCqxuWEsi3ZPdsCoD3p6Pi12Wy1gh",
  "key44": "fchRM3L8oAgWEMiVfGb2Q1JqsrLiP19zyyM8GzVUUF526feRQyiQBrv9rFJ4oWiHXD31fecEVKpP4Ji4oBkWtnz",
  "key45": "2A3otzHAqvLugHc662VfFxvrnrBCdNT8rf8fYUh3h6gVJR9MZ9qBtcx4TzvLiL3MZ2y3vmCAHm3hbHZWMnvdsH1M",
  "key46": "2JFnhy8x8A5RCNN1823ipGRYWGSuJTfDnXomBSceUNsacXNH72G23F4YDPSW8g6doXnX1Si2pwmoyMaRF1ka6rNc",
  "key47": "3bpooqTRyCJByDKQLFG3X72HeLHzTFm8tSKHvHXGTyLz21FV7VupKkcSFYnPzH8fNkmbzb3soqR4YW4E1xHwzUgC",
  "key48": "56tqJDuJnRiJ6NPwmgvEJ1THthJE9QcP4FjUR2SS5RDfNmcYZ9MjZJ4qGRckGB6DQ5FMUZravVidDW9effuoMJ88"
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
