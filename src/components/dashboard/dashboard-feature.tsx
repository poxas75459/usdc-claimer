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
    "5Znt1ETADz1rAQQ9DpBmo31pnfMSD1jPvpQcDWa747rhYrFpenn8TnK7VBoATV4qPbqUH6yxKp7ogJKLa34wH1Uo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iPEYuJiNkfFHUEY8WbVgTA8eeAyUWGBRB9yhLZr8U494EtFahm2AqJ7UqBhFozPuF8RSSJqqGsMFSGV6gthojKN",
  "key1": "21TXwNcNVLiuL5RAaMTPYfLUjEVyJ8TtcU7mGoaGjSuDDsTo6VjusCRX1mGFhNHj1yWfVUutMkMN6tuNVqrYQMya",
  "key2": "57L7huGGqAxevrLfVG6yr9YX4tCLZy7BSSPj6ZLWdBHA8oMrEUWeG9Ldr11DEwMBKAb3GhsvK4iPGjmwWNeQUE69",
  "key3": "5uAYc1fin71gXpCTuBnahvYzvywzVbyq2J2DGGex3CSrYa9HfoQH6yJsHB34xm9mU5XVX9ktrx7JviBVE6ZMH7wt",
  "key4": "2L7LiAJiUMKkEcDqCHwaYKMFjeGS4yAtV8VKL1SjdPm4rettMZKc1YtJ1fUHUVwFqAMHmK8iT8wPCLKJDSt8Ld4H",
  "key5": "5PJNSNmUhs3zinUUbHYEHVPt77GPiUXzVSTPYsYBoXcU8iAccjguAMY7RLKhdEt192KaUcd7v9MNYKofhJr4xEfU",
  "key6": "3T4Tx2VkAsfp3KZYm2r3KAdsWHJL2hQGU4Z7nTLuTMfmY2HbvsnFmn36GnTmi4RCSWKSMaLbG36M5zszwqzZvM2g",
  "key7": "2C6Q6ViU3VydAqLYpn3nm6Xtg5uStEw1Yo2ca2o2KU2aMAn48h51x2xRnceQNcYESm1ZcnRqZm9ekqSQACcMEmDV",
  "key8": "5rhKfXvDqTsNubiH2MWnJoRJ9it9ALvcMaxjALEJtaRJWrJh7LiyrisWnLVcr5WGgpyHeQNSyT3LBuZWMxBbBF2R",
  "key9": "38cYXkwfPKjQPYdDyPXNDYhEVG1M84k8uTTEaM4UDCHzcPKaEAptDMhpBrZnA1Q9PJLH7uvXk32kvRBpYhddB5f7",
  "key10": "5tXjUod9dgSKRbJqXw94BnftowBB633AscmqG75yKKqT6Mp78QfRTu1egqQgFPKdZzKYfkot8odco6xSXbFbE2aN",
  "key11": "46RURjq5Yq9EzbnVwvijazMd45ZvX81nHexpWGBcFMruiMj82MhYmV8dUPFVxBN4pVuzuEZzgztC13w1TMxk3DqK",
  "key12": "2cgSR31xv2gfZ3tDTg3mjtECAE83hSHYtovsJoc4Em4hU7ud6bHHYTXFRSHWLNSJyBt8F1sadHEt25pgQsDWCZrv",
  "key13": "4NYjbCDPCEdFNyjkasY6k84u76K34T2Nenc9zeaU9Dmfngf4JRwykDcdch7d9w7bzPfcpSLx6JHcA1TX6kzfsQbT",
  "key14": "FqRrpQ6NVZ2j7LDFq5yr6xjNG3rfkgpvPh6Zv4Xh77Zs3pVu6CdQBzoGuVUEdstULLNL9RdQVR1tv1jSiWJrKVD",
  "key15": "5GtgWZfoQFBcAGRV8CPHhRtffFnjsPH4YwU3NmgUwFCqyLuPDJX44Zsr3gwZhjumCpoqFbYjpvBKyJYCur3yCvUy",
  "key16": "5C6e6YeZcs3naMXoKyWjSTJH49e5tb6pKDvkr6j69YVNKfWPyH1jHHzTcSWKc58ceeFxxMCpHFWj8SWDPSY12SdL",
  "key17": "4wM2JNwsMQ1Dg12d4JFi3KfSywiLn9uEqveDZhp2yDBWzyTubrSbaxxe5h2TvgrkHeScmTFwbNU7ZverkzY4cxo2",
  "key18": "25wzLa4FQTa2Kp8d4ufftd3u1gQWRFsFPVN9KqZBZBscLv9UWRxnBuuK78kffYUTJBfGHMUd2gAiPJKzYVNrvNqB",
  "key19": "5Uuo5kn9d8Ywngwwt7Kgj6J6yMLTuJBtuPbmsxhPnhNCuhVgAjDFRGpxGb2SwxL6ZALZBUF6h2xvthpz56EiMNa8",
  "key20": "2WQTi9Wy4SyefkpoBKYzGFE36HLoRsVSXrKAiDgwQp6WFUWWnMjosNtXQjUZMwwhhhhxanAqNXgW3Ym1g7QrhmLk",
  "key21": "5oQQ6oajroZbbnZzZ4YMXaeN29sanpLzSCEsWPoYhv9ScQvy44RWh1fZcGnL2iCE15FvSUo6JTuvgPdKtz7AAAps",
  "key22": "2nebw3fhGTioEz9hkaqkZ4gBXdvgoQw5z2nfvtd3yi5At1TjrcJ6f5yJVd56i4qEZcsucS3TXwxwuesnASvckwqr",
  "key23": "25j8V6Aq2Pd6mgWSLUEBWtAkxqZoVN3DmcvgYSNaAfdh4TNKpED9rSBz2hADiwYDCiAqBuwdc3q8TusEgfd6CgeF",
  "key24": "5iSoDWpsRdumqiY9fuY3XUdtNQ7VqG9q1A6XovBd2en2ZmHBUTSgC2NmiQgTnB4epbVmJQTTEPEwaRvsUD2xMsbk",
  "key25": "65pwzNuHwJQtwMVWjXTtGjLk4Cg6dtWtyVFJnA7Tsg74X474RwV5ChxiH37XiaHwM6YPL2Vr9c89UZYkGjobtbGP",
  "key26": "2C5KvrNj6Yx1tUXz1wmty18yRvxWyXArx1wYBptbBZFBASxQQwHuDSYuBtD17QHm2Fz87z87Rr4HCs4pJiFNpEYo",
  "key27": "64LysNCVp5JWsCh31QzvrfmSFGPufjmqp7CpV1BVZggUmGaEi7ngDDjoK8yeCJ2M7s93MjpgnrfhogBuXinfEN3x",
  "key28": "3Rj8L4xbfyDwmfSZvAcnrQGsiyA8v5JkHgb31a7mDanoJCDDoP9snvmrgSrVEtGueFo5N4SdBHW6z1BMdz8Z6nB5",
  "key29": "5n8HbtL1aXtP8qfeireyg48irJtNGX6TAdPd4rMoZMtp3dHe4pAyXiq564CscVvHmKk7LCxGiV1anrTUXpiJ292m",
  "key30": "4PHQ34HaeHJszVGCYZWvJJ18rwnpqbvj7pe8pi3t8pNPTw69788yPhoYm4a1mpXzvqg2RsYju8m8DNu9kjeA6L8k",
  "key31": "5EL4VN3RhQComvEkrigeQr6r2cUHiauMFg842p34h7LQnZyrULKNcvffxkGUa8zVptzYP2QCyWjoFUFPRQ9MGjmw",
  "key32": "QTc64wgrFnYYeJDsPWUr29LnKc14UG7LWo5JyhCR6ZPGWC8kFeamu4wCEAMDEKzcDAGmg7v57doRWHDDRy4kVRo",
  "key33": "23CTWACWtzpmxLjrqDpPpXZushi77dqhz1z4zYqfV4RZJUUxXHzJ3AmSk64weyKeBfsNbuH4jDcbbyxbTbR3rvAe",
  "key34": "4QBmDuaWP3YuUCSt1LMtSJuce6BhH71UcLXuV6Nq4VB2UBse7gHTcbvLnmcFHdfToLqoeV7QP7nhr6V9Fv1ePTvq",
  "key35": "3zNiU1GQVD9b1cPJsgTrtjq1zRCwbQQZLrmnsBCQuaXZCFzKtwfhZ8hfcQt66Ssoep5hGmYFK6FiJQ2H7m8cUrXT",
  "key36": "4nFTUyBa7qwmDkobLEjagFiPd49amFggzJkGsX4S1vYc7bBCYVcMyTFunMZt81TPWH2csYs9yNtHmPghV4KFM5Li",
  "key37": "3tRQQEkBKsLKyjSTfHiB2be3pVsf6fBVk1jFBGFZww9VCSRLavfokMyh9vTbS56Gd2rNyJvkoejYEUqzu6Dia3oa",
  "key38": "5rWTzhPmciXmUncaepuQGuGNZURJdKTskdQnh6jN3wX2b1vTaSXNdpWQCWJD7Lgigsb5EMiXMFGb9iXEyZ9PtkLX",
  "key39": "4GrVpre9gPYik418kmbi1YqZ582v52MKWPKqxLSrmbVFQ9jftJiwxZtryGJcJgtEs5xQSYoEhA1NeRfg7LYrRRNM",
  "key40": "5tMKDgo9At2yM5ywJ2oDsQfi16Dw2rgF6rRL4bRecWzkpyZnwWyshWGyhAQXZrqPEWEw1oxz1R38fTSe25cEvcmo",
  "key41": "4KZbveZdCmKAPFjUZBR55nSGeahUNFNdfCBuVseM4d9dRMQ9yg7sRhtAsFRAtNVcpshGCsVnr9zGjyjp38XSZRNm",
  "key42": "4nxe9tfVQtiRXt758RoZzDshkeeY7HBpGg3ATrfj3V9zvPd2jbo8YqPLeDW9HZLbmGEtPWyfFw84ydGJR6zJuyYK",
  "key43": "4RUrzu3v8rs4hokTkFB546DY5oKPTPk4a6gnUwnDQoPqfJZPWfwLEo2bquMwPvucwG71xqq7nGZSecuzahEQgtW1",
  "key44": "3DCvMNUyYero8RgCdH9LQRoDDmqX7U28K4i7B5v9rqazRXQQYiVSRs1ANY63sHtZyEEaREnfxeQiYnrvwvtcgdpf"
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
