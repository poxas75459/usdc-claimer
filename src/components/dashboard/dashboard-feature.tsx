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
    "21g2tA9FWKPMrQNoyfPKKFyFJzdckZCo9T2A7Qgt4ZKdCkvZDgdtWYFHvdo4hoaEmzLU7fhsuEYKPSeWVCuRynag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bLzXDtYMjwrtJcxqLxVzRHqzv4CWf1J9M2KofFbLir6v4tTbCpPqWKjKvwX1j8Wp2axkJCmk7imiQGujMSad6ut",
  "key1": "2ApgUT4ETQH28ciYNHq2mDbVPZB1F7PF3vbG6Z2ddR7occ12bZxCzocNvZFH69cG9S8TiEHgZ9kwnqWawjVVoNJF",
  "key2": "2d3EawbLB3sjjAcLtzGUGvUbWsx24zPH6btqvhjNTHdKWmi26G7HkT8VukqM2fPs4diAwLcoEVHRy2UaB2Zfeu9Z",
  "key3": "4ytEsEbLurjjmnrexKwfeqCadKtEpG1LiR7JuSAtJqd7c3TuVVqCoGjPfSun55THwNcxUDTPZGaAAehGtvyuRyyP",
  "key4": "2kvhiQduEfqfe32uruTTbiKHnncYNsaZR6kD63NUPAtsGbyGH4BDRnsJVkUCAkcexdT9HsD35bhdJCntr8WffDeo",
  "key5": "5oUacCPGpSBBtiYfSZ4EMa7CCSbZwQr2LRiaou6Agg4qD5eTUsrzDeceTifsMFfmNrN2LeLgWjkeEuLty7xmAv17",
  "key6": "2HHQF2BxpuGkQtocpzhukXjbkYh9uTbu6BaDyMoaAsRAYsAYyz8zyV5bjToyHp2Pw3TMX4RgKnFdgQ8dZb47ePya",
  "key7": "5koVxNhL9RTPcVoP6A9m1CcN54xb8bzjrmHSuMGQGNPMHzZmkqczNRt8zV274BRe4ZaiqrE4KzajFHkQeLtdHfuc",
  "key8": "3TgtxR8mkhnii1V5UV6i7hVJTAEGBanzEuKmiJqRwwRkAUE6z5QrCi3pZB2VAuFUER3hKHeVPro6KyevMoT3SWVD",
  "key9": "5R9PvbKAxWUBbxHth8NUntiDz1NB8b7tz2Mkw7zpz53atQ7h572MMPuAEZqCA4KyFktQco7zc7uAfsN7n5eS7jmD",
  "key10": "5dxNbwJ7CZnZHaqwRFm4A67eGyeRxCeDEXaN5a5PQAG81eBUnAtkQggVnznqGjN5vuH9v9ajQSePWR7hf9xM9gcD",
  "key11": "5aBR9haATv4s26jWbankoRTnU1BuqvF4E12iRsQGY9GciPgiCrsuA6pxctFGSumgSYdyELswurNdCPSDCn43vvKb",
  "key12": "4azvLgDs3LJ8erDKEPSCLJrAQZNzLa7N8bB1w1iW1UKpVTjRbDNW5XEXR9Q8W5LcNMyeBnUALmenjEenxEY6HkVz",
  "key13": "2csHia9MGQFdNMwBSMx28hSjQrebdRhPqhhMSi9nUQSA5k2YzYNXzjqDULMfEKbMg44KrAtMQM7EHSR8LjaEjtvU",
  "key14": "2roswTHFD3vDRc7AuHvpjotfsxda44dz1bcKTwNU5pKixHVwtjdL5syKXkZvmdxgbGdj7zmNZfe4RuKuAvobqCKB",
  "key15": "5QcYZk72nbRg3UPdgmnjjqq9YuK5kxBYJdpv4htZ3HgM23UbhHc1hDxJuTUG8HmGywNN9Z3rrLDVcQVnrFJyCNbZ",
  "key16": "53qoxdSiUWqU1jfNjh9P795cvVZqvyYRkTHGSy4JBAFf5xuLwWghxMd5Qfeyr9ToBTzS4DdcUgvZ9nFbf8P5CwHE",
  "key17": "4Spad4ry5JEZvR2Rw9KsLf2rsMNkP2Bjp5wmB19LYXv41gWZfhQyAqSpRrh1GZAUmHCANw2UvVamJj8jzzpfLfXu",
  "key18": "3XxxAireavdvWunpmcdnM2fY1tKTsqmAjtX4WXrFTCCfjBdQQWZDths4NeyFi4iwPUbPr5Jm4hGjBRV9BcRPrizu",
  "key19": "4PbuVLR6LHfkbZxJVDu3JVNjMxdvH6rMbd829QCbdVEVd53Gv4qgw8iUzxTXVU2XvXkPobUa15TFjdjTAQCkYNGB",
  "key20": "USsmUo1NkRwLjyJqtyFjwYvs5KUHciNPVee8mjGQUN1nsUXffu3ogTt1hEatM9yK9A9j9Q9BjkrUA9g7q9VQs9g",
  "key21": "4L7BpvUH7Yh649wvSqnR1wkQqckKF3PnbSqjNHPQYHnapQptVYk6679zydSQ6gwU1PNcwtDRuJarPFCu9zPqw7oz",
  "key22": "jWV3LqTAuJchQR5B6pjmBs2erDv8SJgZyVfxPgJ8ZQf7U7ktmG3DHFvPJ5MtwboMhXGMhC9Xgem5SXtajeRG8xg",
  "key23": "5AJuXJwVcQgcD72GXpiXz9eB77ddfTw3JL6ZrBD1KZBhVi26hi3wibSQeUp5Y2GgJTh114Vbt2AwyzdEthNVqspD",
  "key24": "3BAzj97zgvoyMxy3TCMgijGoXsgYeFTNin78fRQEkezPKeENXprGuM6TddTjkGP1ahbFAYytf4BJy58BXtdW3aGX",
  "key25": "xGUAAAeD3CmMiRNhwHWx8awvYKnqP9ytfanYZetKvrefpTWdYK9g9HMvtqmYRTrDCuRDfxBEWWRp6QwNzLBDAbm",
  "key26": "5E9PVuwLrNDzUoDZzkK9tiZN83cqqGqj1MzK5g3wN8SSPkPz2TLgoz8Udw8xsuYfhNTQThHe6KAN53wfuTyCy3B",
  "key27": "3aNxUwEiKa7tkE61QHYY4g11Wk5EG15CQtuFUmXM6DwSyqmHN565NsJiuGLd4ph2bWRU3zq1WHsGF54GDHnC2qz8",
  "key28": "23SVg1bq3ZCJBZLi4fWCm5LSccResjcJEzy1vHrQVLShmiRtB3HnJGP6r1gAeajt7JbqDjMtQjreZhzqRWCsqjue",
  "key29": "5TgwpZjJDXspDnr4BQVxcjEgs17Jvj1o5fPCDoTpa3GnuGQ187m5XwSGSEyo4Bj9jdUouLiePWDxrwJ8ybXufh5r",
  "key30": "3AWvY2tYuNQ5oht877ZxUvQYbhRZDKMfrKhJ5wPhrDvPbNWFgKXjR5nV6vDbofi4gnTNd6YX5Sdxbv3dJ8AJ9W5",
  "key31": "5usTPMpRFy46MGLGuLWZ7iUeQ3Uds1BywrFjqXL2ebBw9wdmF9xjNuaMUgWPtrbcV1JQJXuRw985jK7qNgg278TZ",
  "key32": "3PR7GKZGe8pemPXy68WxtyYtLnMvS1NcQ3bk8vhtTHwJibvvT6gYuMK6QmCWo3TarrNaqs2zM3YyyZQ9zXpPjVsx",
  "key33": "DHd4NirfYAm6zw2AYw251kn56meDCcTymS9YKaWVUmSPrc4Rz22XgGedbhjsZr6PRCB9Qqe4Pt6cDUmPpwr6HuZ",
  "key34": "5JNFxowkZt55JLUU2GguvFq2Ja4DkbGthAcz5drDFjvQG4RxqmLFgsT2FcSL6RMVt3NKBPA5mJy2CvYBrA28bFKD",
  "key35": "E8jbRdazMYX29g5K4KFBtq3tDUV4jv74AH2Ccyh4FCYtShcUfbikdXRhX9Ldip1QcSUvSspUb4yQbe51W774nv2",
  "key36": "5SRq7yZfJqAeE9TeXpiPMdWKouU3a7Yhd1LrWB3ZtZ1KJUi2DPeuZeMz3jc9KXC8ZbRbgWaQfeHWBnnwq9tcQCTf",
  "key37": "5pnnLkYUwEruBNNdpszc82spg6tpBxHPh4cWcKv16vc95CmBRHSXmQPC3v7v344ZwK77t7p7i4DsGgnGEKXFSazi",
  "key38": "26uX6a483MAVSKGuHebfMGSEiAqggp1wCxW9HVeni1kakPBwMQw9QoCyE4PvkCeiPb7QFbMpzeKToPNSVMN2MXPe",
  "key39": "37DiLu1D8bpMdacPY7UzExkivcPrdDxqrtHDrtXEhWnPBnvDjhJyMvHU2QJUAPPpnZCYqXeqV4m6XTDgXkY3p4Hc",
  "key40": "qq81pRe8cPag5Sck6gpT8WUy9uNGM6tTEKJZZzdVEXb5p12KN9gowkXtVTCMc5XbbrM6B2yKJdPZE3qGRB8ePsU",
  "key41": "4QFMLUhGxE3NiD4byPETNUq3ViK2LjViJrLZrGzRMUEmwrW1RqhegQ8SECbHTqeVHU1RxnUNvfJZqpucy4zzTam3",
  "key42": "4RooRZwRiYuhzJX6ZYX81h2twksBrCzTqRKhUkV2BjY6GCzktnUq5N24h2WMofwXZA27Y45pB1vWS3YKii3Mgz8C",
  "key43": "65fU98V1bJ6eozUxEyL5DxrDhsJN2Wc8vdMhWv8C4wALhtL4f3X8TnMEKbDcUBTrMj4ttZHpUrMryFBmGmr5dsb",
  "key44": "2u5D5nuznHcFJyzUyCBCGxcobNAgpWYPWujC6NTuwJR1Bs1pSXtmftd3dfvBWusdgWt1mxYLnFotJuHJGusmAPfn",
  "key45": "5ezg4yHPrb5p1uFZzViDaGhzu6xt6wMNj1izZcDuAptWNbFMeMr2nfsJNbh9ecmuhFwSPHZwYbBNBDmQK4W9Jo1s",
  "key46": "5XuuneezdzXgxJB7o1M6vD82pfsyFZxw1FyXjAB2r6GGv4DXUM1jJosk1v7pYoFDaf3A4gRY8utRG1h1ViL2swKs"
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
