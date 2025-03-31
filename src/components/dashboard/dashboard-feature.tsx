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
    "3GCy9BxWaASLn1HdN8C1h3U5957F8eVGRWFiPnFQbuSrdNwN7RRPNRZ9nkZwYzALfAqpKa6NLqBhuSk5C1DhHVTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cr4H4b4DjpEie7PMUvd4JE66bj5E5AZSHFERWNFaiEZUZq7BBwRskihU7CuzuxK1Q5gpQJzd4Mhqi81stp9LkAr",
  "key1": "Hj5tQioUyj4Cv6i7J2NKXbPvjZ9tMXTKWaPQ9jB1avYdtpuMjiGgELSceUyrwy7jxtRF4H7YKWH6hN4cJNCM8Sy",
  "key2": "5sUNbiS7A5qR96SFYSdqoybpfUK77k2FMmP1WNNmZAnUT6YsWfhjoGUqBRifJomThBjjoqLhjMK7hXfCzykgwxra",
  "key3": "4aCpG7RM6swF4iiVQijwEUZmqqjDjX7ddFFezbywAXLLeRryCXC1zMWAwaNogiiPyA2ywfNq9QFehcaEgxjjqHPb",
  "key4": "3Jtpo877YF8uhjrhCAHn5r1x7o6Q3rkKcrhQto1NbCTCAMAqXP6zgEk8iAp5a66RaXPwsi4vqu4awxdhohA2t5tC",
  "key5": "4dCurESfNDJgrw2WbXgtdYUhp9z5AuGLde9y8uXqBYVV6igp9ZgsQ6NLWgHnQpCUMc2WYcv933LLHSAmE1oBCGwG",
  "key6": "3Dtmz6P9SdEDrFPXmVz78YGjS1FDKLN5fGZJTiG7chTW8FEXxFrydUrCWUmbHSxTyVA4DgHz8vLi6KwCPnsCRvMF",
  "key7": "4s83m8hphcR8e8SnF5JoNi6UruapHC22bsPJf9Uw1FctFMXHM3RUzzy4QAgtczAVNHEHNAfzTKSZfDjqnNhbct7G",
  "key8": "4AVp4Ry9hQmkvdUrakiQQTz9t8EYmcTiCkZmTiXa5b7SJwkKTVBs5iETZ1Akg27PZLstVGsr3aFjc5XhZiLLQDkP",
  "key9": "2q8tqk5xJyesBbBRtvFBMSemJEQx5QmuJTSSawYxSKGsxd31pUDvhjTUey2n8ooU435d8H5hnFRvGbWZcfvnWkt5",
  "key10": "3CiyNwoqzdutxcHRHcBn4ofTGAM3NeiDHXkGQbHTpiF9omHUmxaEHbtfKK7Nea1EgN3spAPX1M3qu6KzktTHSttv",
  "key11": "3NrULFtm1EdqYgepAzAH2DLogfDUF1AELay1p4g41GzqNMwBS6KzKB7dGPgPcGxpyoHxZoqNiGSD7VY6KGnYTYdr",
  "key12": "2Xfq6FvqWMPpHxwieTEqvMeAu13nLaYQMzUmCDxrHns73nkgbrdGpnxFPs1LmTPJZPvGsXSa5Tfsb4xP9xhQYc96",
  "key13": "223RutRGVbfziFQzAPhW8m3uXtm5pnebr7dX36FSJSMJrHreiX7dMVH5E3oSEmTUJeCjGnUVb3f18AHuGKXif5C9",
  "key14": "WyzuF3CCBuooP6XKbNsJSEmakUfUycDCHnp69zLYSz8wjYo6AP3UuWba1R8ADymXbMc9E9PnWJQ2n6Pnv7oqrcG",
  "key15": "BZyXJawhYkEq9wcT4XZVmUzKym7Kr9AWyMWoiSXYYdv6QGEWbpXFBTyRaQvaDoURoyKrXQvHkZFgu7rTfykCuJ5",
  "key16": "NDooaDcrVx31HsEuZKr28xDBjhwvTvFF8ELfxi3SH7prM8pXtdLCUcC3p8m6iJYeu1rwUSRt9xqumCBrWpUCknp",
  "key17": "35qmBfs77ScvXkjfqxuvetP3VJCjpYE3wubcwz2ckrQ1JvwRip9b3zQVZZYwCTSL5C4vD9js3i5d4P8dV3dkVeAW",
  "key18": "2VcdFHy72XV85Nj8sZnAZjNi1472gE51pZtqjbALLB4Kh4EaYcxkzH11aUgxMqSj6G4d9bJ4exyxFmo2yPrg7spd",
  "key19": "42e28VdJfYjbbrcaW5w96NuBxFybNYK58FKHYgqBZ74yyMo97G6PaB7Vm4Z63i9USuLdUMutehXVH9szEKiarH3r",
  "key20": "3BGS613T34k7J4m8Pe7KdJVcoGwuxoySGXrP2Tv3wFk6KyiGy3PPM3ACbE4uzDKkgCVAusHzdwJYwez24RPUSWEb",
  "key21": "588Hg4UJSsCBDcHY1J3pVbYnbrGRcCFhVMSpexh4DDzcLiY9H5stzjvfCcDHTstXhtwM5M2r2n9rr92ke4cvhdS",
  "key22": "2yspMUpyW2zrCroQTodaSbPFPQUiTCbEPY9tABN3GL7LhMK2q6vX9sQsTf6Yv8JsBeUXQS8iCVZYU7hBBxg47Hr1",
  "key23": "2eQMsDAiNt1huk4at7WmRAfPYcPJpZypJQgmdqmUdUZoEZypVL4kzLm6REg7cmqv5tWoPnKxMrD2Z9NvqPWoyyZS",
  "key24": "5y3GBaobBtR1Afe6EnSUYxsB8DjhWwNG46xxLAHh5KWZnZBEwLcGkkZj4kdysua2nKvffKH2biYQHgFH6D9LW56U",
  "key25": "4Bqpn4MJzPLeLX3XiqutGozq1fwiaEbnegp2fQtcY94SAwdvsuS5higHUXyQKPqcFVdNBwPX2RutwwoPsiB1dmuw",
  "key26": "5VknYA71jiJJYtQDWfPp1gggMffrdCAjEvRiWj8ejHuF34F2BHJiDdGaYeURQR2T6pQEGXPj3fua67JDL53wG5Sw",
  "key27": "2EZfVBFcZUfkPNYTk1vNBbWK9d61YFC4bwEdW2pcn9K1L5sS84EUtHgn1Z7mgTHe5oAPgUHd9TYRkZizY67987TC",
  "key28": "4GJNSEdJBM7mg4BTebGBMYR1WAeFKQQuXeJpfB4G2QY5iUxtzekMGpNUwKyLsAp3ReWwBDS4ufpXWwxRJ5PH3MV7",
  "key29": "2noeuzav8FtAAPLWoPvANLr7c3r3Bd9VzmpszSneCKvLeGTVvSGZrq1dv2JeVwUdzhMGi63HycbF7SJYapBEqDVa",
  "key30": "23qguExwrF9N1iaSPaWogMhRABfPX22fyZtUhG3ztZeETY2H5bhv6yN7nc8DmJc6Ldo47fcxozGWZSAKZTVjF1xU",
  "key31": "2ccq1zVpwpaHi5fruud6v99EHbVXTVWhQ5LRovZBryVHkbFMqRcqpHyDUqRD6LdS7csRFhH1uQTXorBtGhqkPD6r",
  "key32": "35GTtsk4Cj9JZKxpurW6gnGc6q23VvhrH3pfuWLx5MsTCnQbns7MvBG5oUajc9b8gqGsATRhDerDvFCuJzXR7AeH",
  "key33": "x2jkoF9b2ggnLR7ZGipkPzoAPTaKLg9uY1e61fDtgEmVqMia9Y9KAcfUQk5gmEif27VPQZ13TkwkvTSwGyMFrsX"
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
