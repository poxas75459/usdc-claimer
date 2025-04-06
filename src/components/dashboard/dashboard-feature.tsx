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
    "4fR62bfzsQDLwJXJPgUMCYonn8q6dcLZinqBtk34xq6Wbi69vWugVHr8sMSEXMTsJkgou4b52GaysZ87ZDCpxWtD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xWxhVdaRRUvacWw4T543EFn1PGxQUcuiLeC5uBBbajkYPpYyrr8GUCHk14BGtWDEn5koiBcFnR7w4gFybJCJUDD",
  "key1": "5EMm6ybnn7wW7krYoV7FRMsAXf5ExkLVAMEP6Df59XRmGM9tiaYx4aCrwydCHsUmHWEqxP4iReyuJsAPbD2K5t1r",
  "key2": "U2j92HHgpQ7jqPBoxeF7SoCSAXX6QRsEz1Gczo9G3m1siD45PvEWhoHUW3uLpYgT1KwybKc4jk6PFkr8mznACis",
  "key3": "46zGoDmWutmyiZ4y2ES3Kj4CJzgfgefRAMysB54sfFukfhDJQKpw5DiZcoftbEHGPaDCytSJeuwrQJcvSvPCZRFw",
  "key4": "2A3Y9XAaUMDXf8QkRLgU2ybfEGjG1KpF64n8fghGPvjY6hd3eaJri7BMjTha6qjpk1ZErqB1BkYNf8KAa8JwomfL",
  "key5": "YcSsYLh8nDJ24xtYRXypKmBzLKvRqj1srQHq5kP41hkfqkHGgZmX95VpZeQWgpzL8EuREDG914TdotNCnGM7vKE",
  "key6": "3kuahJ2B24oZSG1tTVUDnjZF5hXDig3LL5nwtkY3S1BzmxE7SPvNMKsdDv69GCG9U69hKmusRn9ioDGaJ7meaGs5",
  "key7": "uoRwX1fHz8ddpgnqPdFpHF5fGAGudqHbz4woPvyiWvmqdi59jDdTxkYfYGnnbF66ii52AHV8d3HR9aEa26mjpF3",
  "key8": "5ip4FTnkoMYnphNn2T8j9WH3yZW8Ro98BDEpPWGn2T1zxJyqGzGoU9LRtdahHBBoAT7rgCNkQoMjt6Lc5REemq9k",
  "key9": "DxV7JBWBW6QMn45UpGvmA4rvB5aG1TLf1figy9HiPKWa2qLGmas8zTLKMJL3BhqpnNoqnEh7AFbKeaeVfEEQvPy",
  "key10": "4DJuPXhbig7Mnt9eJZu9UHYD4z8jBBcMv2Sqh6c2z14rAMMPmr161HXQCFdruDBft9MpLCvfDsENGdywbLeRNCsB",
  "key11": "2rZhjgEPn5hpyQRvaiYCSHmcCKqGD7UU5jR4hW4hz7cCMMEmeqJuhUSVJr6yo9rCRoFu7ZFLuDDk87tzchevozGf",
  "key12": "3PefdG4DNo5s1rFQz1x8q6wsrtPny4iAqeaDbMPRHa486if1XpFpFvbPPJU6dqDSJKGX2LeCfQuiHFzDDJPrpL6e",
  "key13": "Yr9y6jeZD6YAjRFZu9LhsvFfEG46niPaL2ACriWpSPSn1eZqvZ555hPQVjbm84bwYVnLmPKGbjGoGhyQumA1yKo",
  "key14": "3C2KwSpCfTm8gQt5mAXcsMxj4gfVZLwVgRXQh4pMFvcLCZbQ7aHzzF8obQSfo5Ur3t3sLrRnV4iMTNbCcdhpcC5b",
  "key15": "5mh95FZAt4MMQ9oyUEnCkPqhCMzLuh2uRBUoRGThrTUzZbgszZrT5tWrbbxKztq4j2U42vwtXMbepZWhav38dQzy",
  "key16": "611d2oa3219SPBEnsdn3wYLJpAVB8o77KmbtmwPRQYePZAPCPSgtpxANoGSVBFM1owy5CEjpJR2ZyHY9LQtKSE4K",
  "key17": "Y6uzyEehHYYYGBzzh28PM5NL1zZbkACUQC9qJg4CSmc1VBZ49Fq28qaX4bDWoNFgziAok3SBUY1mpj8XEkLXtQZ",
  "key18": "A8SsqQYmJAh54k76Rgz9WFXP1vCtzPPKtWtLWVpyDe6JApLerDJVKZjMb2U6q3TBTukKMhkZhthnFUvJjWEkNbX",
  "key19": "4i9PggjfkF69ms1vUvcg4u5i7MNbwUGSqkJzYvrQSasimS8QPtW3pwJsnL1Hz5spL5sDDZL9h8r3zYfZNy42t1P9",
  "key20": "4dQ4cKzum4hE4G4QH77iq4TtsPjJwS9VgSf3AezTtmPnPqMRyevu9vZTD3MynPKyRx8JtdJFRPhSJeteewygb6cF",
  "key21": "3B9UpCPkspaT2VXCCoe7xRJ75tySwQq1u2e7444SwZWbZbCKASvXjRJVr1WAcGL89BBCuQJNAJKr3kPjZkZARWYJ",
  "key22": "54ivYEcX8LJF4GhEEestWLRQFuR2dJvj8fgTY3J198gDSqhEeuQnziQdjfxj4P9CykSzQT2pq6K4o8nCbimn8puf",
  "key23": "BTcmWfx6MbSNc5Ggwr9vWAMS6LbG6RPsKte5WG2S2sk6NztcNvRAiiSYMo2rwU7HtgYBx1ti8t2ZHosHRaqpoaz",
  "key24": "uJzKGc5HRhL1CNmuntswkePxYs5C9Wfz6f8HDqJbpH6WC3yfLY55jhjchFvfxx2pYkig8ivowM45nnkrPmcFujG",
  "key25": "2Vk5CRjtzmEf6LCj4heiRmTVZf1SrWQPQWoyn9wpyWJXswATpF1pHesx5qdUFbHKc3J37XJQSkWXrFvq5oVU6dXz",
  "key26": "3ngqiBXZUMSmEULMDyYeJry7FoEiiDd3zgfTnbxs79Uf7kmQEUYwyqfd7hDeXx2NpF9Pq1W4mcFqnkNRPNfzzTrQ",
  "key27": "2KmkvERHrJSdxivaiEfFrLswUz7dAqtF7DziU4aZzK9vTgS7pmHMwFst7HGJm2keGYrvzPTrM44EQKFoR41746qK",
  "key28": "5LXeNGmWvacKBN9u9Likcfm2Uzvy9WyXr7Qys3yuRriKiTvLQ9knrfXykLxroahM8SnDj8EiZyCNGnUcCr2RBNQA",
  "key29": "5saLNRgxR39hJ6K8qbYaVXXYdHgV2mJBD5cusdm3rQ7LRV2y4P9M28zTYsWFYWm7Pt2oSB3vh5Bj9y3MSVXq5UPF",
  "key30": "f39DWMQA1mbaHBHSa8vjFocyJwU5EJtrzzhsudo3HqT5GJVMwaC4qV4Z8cynKFxW944fxoHQdF5htmdS2kTau9h",
  "key31": "4LKk1XntykiG1JFabW3tAcBdtHtUgtbanAkzfYrBoeayNLbsijSDLumbmpxpDjm98pKSV5Vdvssb2i8qmvBP5xYr",
  "key32": "3icL1dgpsBcWho7n7Vkwoq7ZQT8Edhmpf5DnMR8Nf3vYAP8Wu5mXmZCQF6AYYDrkpJDZJTEKwTRf6xWaUcsqtx6r",
  "key33": "JhX6B6riCFxavrEjbFkTeC8XfbRYKxC8JJdgLXzzaKiScxQM9VtdxBgsLPzXGPj9ndfkoTS7cHJdZsVsfPPjCuu",
  "key34": "a7ySYVUnRaBUm3ih8FiHqSxmkDJ7wqs1Uh5CKReuAzhwtvvrRrdhRWyynq5p4qk5SmKwYpGtPWdS2vFCaXprADm",
  "key35": "4Dj8VeYKoedk5vxkV966WGvbwr5kUiDSQDavjefpeH4g2PKrh62qmhaH9a1BzdhMYaLqma1Zx7FUpj4JvcJEqk1u",
  "key36": "4rHoocDEaehw2yoC4NZZheh9wqgLmyNeht3w99tmkBaBPoCNTyVZFDQ8LRy1rw9GuUJGzazjUgaftFj9qQx4Cxsb",
  "key37": "4v1UrAaDAMheuw3yQFPygeosshq2DDnfuRqKxN7Mz4okQcCgziMTdKqB228GECXtMmuUYUpFHDhPM8sG4wRG5DTX",
  "key38": "21Mujqrra5q48cWNPYPkNjAMR1jhUm2DdMWTYbNoArgLPbu5zp5nQxrQeiKxNJBq35jSm4NezQDWwHcu2dA11rXi",
  "key39": "2DBvcZnVKB6Ww479D7n59Uqb4KKTAi2PP2NSrZv44EhtYmnvAowfrQic7mVieof6hdCc7WGFcFMDMyuqaREkH2wu",
  "key40": "WhS1aRBC6SEJxCW9aqz2RvcghMAKcZzhpCVfx13hBq72q8Hb8povk5GqZrzsiZee21k6G5RQbaJWTaaMxUWpWXE",
  "key41": "3zSWAJhrfPG1bFsW1prJF36A5s5MMTH74zBVdMZnVVwVSrPR5hCENcaGCv8hhi5erHpAB2M6EV7q3xX2umZPmVZz",
  "key42": "5xDjeatRMXj44N1C6qzqgQaLfx47ReXKt9U2PzGQ6y7h8vqb5bvbdmuosp3XvZYQww4wUGb4ogxFd5XMfFViG4Q1"
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
