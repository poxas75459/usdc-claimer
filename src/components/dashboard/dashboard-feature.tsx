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
    "3hku3hue5X6kN3rvDK7DfCDRxVWc7z4YibJjmWFxm9NWXxBp6NpPFETUDyckLDnnBMd29erampbxw45fjxiQwhDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gYVtwWhuZcL4A1ALA6vA1yxjhhydVUBeBVz7Y95Gdf6kUzdnPyKyBMEyUmii8xRD4xsdJ3nKk2F2szijXjsMkFo",
  "key1": "3yE74tnTjrHUWV2hx6YDMpYG5Sos9KJaDiLkKN9xLBKWitRaGgbggj6UWzURxN1MNjneRxzNHzoV19LJYb3npm4j",
  "key2": "5kwYGpuuwznNRu2sGssFE9i8oGLcWju36bYfQomVpTUz5vEAhJZh5FyHyPrS47ZmSKeDRChFC6tPQbcuGXSXSuh1",
  "key3": "577p28vvoJDzp7iRx1NSk8ZQkzuRRERbmyiRukuP1uXPwiaV6375MiTtRLnbKdjWjmJbCBEpKFdUo6DwK5sfu1iN",
  "key4": "2FBsXtejC7SehXUezPt7qCWZ9ci97Q6ocFDSwb9sTWytKNqT736KXe18saangEiU4wQQKfd476ZxaFH1jM8U1vWJ",
  "key5": "3cQW66myX63MkGiwoizhvpjkPeB48iJpcbxysfUAhGBHAQVftMtrruDpLJt6vARiyk4A1nSYgZJDPVKgjeQ4EeeR",
  "key6": "pgoMDcLhVV7PDsdKLV2kDUWAZW7cecb1dcGhxSh6GGXymZ8PsouJEhH5HAbd2mGWhHs784quMC4r6xo9utuZJHp",
  "key7": "4JUhvQ21dcgg7vi17aUAGbPUpR1C7Enu4ENRZcLmyNhXTRG2xVvRo3M1s8GWaDtZPTa6Nt1VGSWBivm5tLj3qgGz",
  "key8": "3QQDx6bbiLA8Xau29rtE7P1vegde5SND9ioEKwV2KZA9z1G4fwdLPTH28iufwSohPosUcNeMeqmaTtgeXuQQL4Qb",
  "key9": "2nZNaB6KkcAw2u3jRnZfE6x5vG1ja8rDWKBhxntAhKKmWTtSN8d1yFSwFaPv8xwERcnDiFdD6gCkByEkP3c5a2xo",
  "key10": "2urqb47VQWCp5efPGZU64TUJca89JJxeQDzi36QyzS4ES5nxkuMkGgyB2GszppWCQ8z3MG75QW1QD8cotTVBRtuf",
  "key11": "61zmzRSivf2SHQVtnMSCWgaS4oQq6K34v5dik2dUMuPicem9dRuvp3URUkPU2gcos5fWqk41JMJW3DVvRb8KTvhV",
  "key12": "2ksjC3JmxYdxToZ46NLJjfv6UVV2anpLMrnAgiN6jUTgHx1VvotnoQuMWLCxR5fR8uw5P8jfRu16NsDxYpvvvHPC",
  "key13": "WgPz5BgGQB2pgbpRjKRnTERg4xeGxx8ffukX4ULix3eMLqPmLmVRuwFFijsTFHfRTu2JQZDadoEXg5sjmwFWHs9",
  "key14": "2L8SPgszGMYr8Psxbo9zgSdjyr3fQh9cT37jKXLAJ3Sk42vTiAAdZJ8m4cA71VgARjMBymMt7uRZDf8FUYMpzr2Y",
  "key15": "bXPMkHVstjssjJUutZmK2A2iFw7YACn9M1ytLpuBCHG7qJ8nkM9BERbHS1yykWBooDghz3XinDzud7UuJq3NMwD",
  "key16": "4GXyMd5rjsEiEtKVvh977fRs5SGXzcQoAv16D6KiTXFZMKSJeLXChL2P8XeAVTAMcZUbV48ka8361WKhiipKKD4w",
  "key17": "4x3r5L4Rhzuun8CrZLdsgPYZoeBxmnRqBFaVX4xYhnfFUdMnag6mPA4gG9VuFRwksuQeNgqwrP8pFDLw5mstVCep",
  "key18": "5xehc4fbRTzLEetgGz6mSMDn3JoD7uewpW7FE53bQBucutDisnEDfir5UGFYCeKiQV7p5FwSH5r9zQKWw5fXF97B",
  "key19": "4fbvmJTw2yjgyUwaJkdVhcnJb5oM4Q48vjeshQzq2a61rtM2skamN8pDCovoDyxWkYWXkjc6WXBeWJ1kcuTJP91r",
  "key20": "4ADFB2T3QVY5YNVWLHDUubu1aGHx8HQPypLmAA1nq6CJ24t69jKyTUFy24cWc3anB44gKeZmiFrLFd3e9v3p8MoQ",
  "key21": "2DixU2wJpK1uQaAaA2jFutRK5B1kWUa7k6hW8roY4w4tMytzJNixvECDQp4oApycNVSvkYuZt1eTD59iCA6Marsd",
  "key22": "punEG9K6THpv3HXbYjeNytU1RukdHy5noqF8u2dEVyAQyHSP991JpbZBpGEJ6D1tQvCc1mL5Eoovo3nHBpwGKHj",
  "key23": "5TNtdtNZdPTDaSb79UB678P3Khk7vz1nvHuczjRi6KWYrazNNzQZrsu5s9nEqnSZpbecFxxt7SMc5zQzbqdoRFLq",
  "key24": "4uD8xi6Pvar3xrd6gHSpFsjh8gRnoTYsWppYvwAAjpHUPkRwX5JS9F56Frx8Zfqo1bsjw5pMwaKMnG8EERVn4FVH",
  "key25": "2e9w5MGv2epJbzRH13VRTZTxV45d3q8oYHS7BG5E8bEbkCEF8cm7oGnNhyaUs7ZKers9RvHzKL2WSbjVEKaVQfus",
  "key26": "NXX8QjbwWezBCM6MXtPgNNCu9uKXQU71yT1hr9VNC6C2dB2Mh8ggKm635s5ntWpTpmnog9hM1rp4M83mQtjMJzh",
  "key27": "WtzP3jimuzVhJEpd8bmpiURny5uWk2nUKj3GTypmv32CvhiDijA6NpxeGDWKi5iucbYHdcBXWqjKHa9JDji1jXS",
  "key28": "2ziCcgVh2fRPcSYyFUhdJjEv2dTzjFZJ9hvExzp7nZDW5FmyNCgxPRWj5KwihRoRZfqMYFyagP4DLy3Bk5jAJAt1",
  "key29": "56a13bzsLpBXA2GkbC75iqm6fcWJFoVC6UKgCSFSrvjK3sGj4RToC5aTpsscpnpcs5stfc49kJR3rdM3zCCMCesq",
  "key30": "24bX7agmKkS396vVwVNKtpUbHNXjyZ9gybootLcuLArNUG1yjYUqU5X1spKn9MSUw4WXi2daZatyRpVRXVcZDcsc",
  "key31": "4MGNLCmeCWc5pqBQsYBgXG2tBGB3xiaDUhmAzn4JcQo3jZYaMC7bsVHwZ6bQSgBbKQAxvQ5gu9vbYvoWQRTjv9nq",
  "key32": "45osC2Ms6q9Lt2YCPs8xnxjR8mHTtqX1d1YDS3QxkJSJpcWtxhCZEK8GpuerTqhFG56cvGycwEDvfL6bD93F4SPh",
  "key33": "5QwrpUHUJSGAwTeHueHTnXqq1ANmJZWaNc1e3JD3zKfNZwZGg3jgbGfn5pd6fyCRiqm7S3wfgxD1f6oarn3Z55xi",
  "key34": "3w5hiAju9MUyZHq2GiymB5asARk1zAT3GsxqWUWSTPSvGwYUMUQaf2c3yFC8swF3JvgUd4uixvpN5M5mK4JqWpG8",
  "key35": "4CAzDja3wuJJGsBj2iPBoAi27Loi93BNNk1Qmw6rwcnAGaVho6QYrADU3WUxEnuD5svhyuTxFYdsicRcCrfpnPDt",
  "key36": "2kcqP1LFbJoi8hJTF6FqGyThofXGxfRWtata56mdJa2729jvkSrdahTv7nmFrxL2GhaEe7xBM6yjwjFgxEg9wpWB",
  "key37": "4ajaTPEYzogmKcTJBvGd5WMoANmTRcHdziJpVXFkMbqUz5hiPiLZsptR9pu8FN7tiscMBcGtctNLef9ugp5JTMke",
  "key38": "3NRiU6GoQfCqoawsgnm2cXWfzvrK4pbBuAYWFjvXPtd8BjRCFoC2zH9vFNyGosFB5x7JJ9yy13B7H3rfdPiNqSqd",
  "key39": "3HgNKg23iNf3J929fPTgqguezRacPxzAnmoh6gDyU38bub3NwMyAyeKhUMCdUBQv6KMK3dCxvT3WGHMbacDkQzbm",
  "key40": "3P17LYXzbtVmSpzu18bGudmyuSih7VBJ7NmyZkMC2RQCzkjaNtA3B3qN5KLHcjHYcr9oydQfnX7kiPgWiQgga6Nx",
  "key41": "5FXJ71bsmpEHKGRdSnbCoy628oY6H8riV1tdmwNqxe6pVzQBRdijrNTPDQQMr9A74rGFPqTVBHx7vL41uwYzJMZV",
  "key42": "2hBKgb8kjuV1rLMV93AmRAgNXfi5viWtZyzrXaGD9JxFXoNkSK536hKDe8rXLRm1LckR2bgdoCz2KvnyHsiEWoHW",
  "key43": "4EzNkyFLMGD1attFp1c9RkHHmFTG5Lf4RqwydJDeGTRbR4o48J77JntRvYzwnkpvNQD3DY45KYwTNA3jc6Bmhad9",
  "key44": "3P7Tuy97Y2D9WAKDeCVHLA72XFQSFTcoHV7yXdLT8AWAJGtLEYPPHnPxK3hJGic6RDpo16VQfqGzyxfyR1d9UKQU",
  "key45": "2PWh2dsZY8u2F8UQvPF8F3nL8pJfb6A6g2RuaYEzqho1Z8eDP7DLTzzSFeJXG7mtvzTcBjD1RmwcTr1Qchp1Ny3E"
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
