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
    "35ZeH8HGrudAT7WS8XWBaRV7wmXAkR1934YNhz2A5cSn9fHpw8ibpRtxTY79ace9BQi4RVjNNb3F7aUtTE4fxu6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54aaiMeYjxkVQUDQFbfTHiJ3jJQz9VE9kt9vJPHVTn9saLY9tQU4Jr4rMZV3L9Ppion24BDMpSjaQKdRmg7uYcjP",
  "key1": "2za8FmskNy7c78D14YPhm8UgqKGqfNKy6eU8a3eLBSKq4oZMvF2oXYapZFDumKBdFXJCQxJg5fV138W4RJUL16c",
  "key2": "2rtwSRHSk59tj8a8tyMokFCZ4RJXSbKo8ED8oeBBRqQdsTb9q3Nc1kaeXSiHq4RzSVvUWryTvmL915cuWew8nm8n",
  "key3": "F8XDsgLf3T66T4gwZKF65YbgMLtnKGJ252NDHgaBr1JdcDz9W526F3JhVB1o1ebxaLocFYv534VrA5YM62uNgz6",
  "key4": "4wRcrNfkhhJgRn14wyfmTbDd6hewb542TBKwCau14Fz7hHgpCeH6KRovfZkq61RgF7rWxWekDryHRNWqjcFW1Rvf",
  "key5": "52kNVfEz7pMZP9EmxhcFQVLyM9aN8Kyjz17tAxXFdw8wP4zTYvbXXMs342XvQh7bv2nX88JnKKiWVRGhcQrVV3qQ",
  "key6": "5hRGSK68Xgp6zbcrW9DTZsANBAXC2F6hKqrKzyWpsUT3Pnb9ABENNsF84b1ZHp2reqeUVqPCHc7SEhhkJNEwufrU",
  "key7": "3PJUG13JcBrisbWgZ7d4Fvxdio461JqKLns6riENvMf1ymuxeqzv8ECt9SAoXBwpcPFGRypaz4JTxcWQvV9Tzvfd",
  "key8": "4mKmKVf8Rn8wGVa8tmWvPXAS3Jd7bcw41hAyF4HzM8M8nf2EJcAppgUArSkpXWoetuSfDCFLFr7PWFryB11bVDRz",
  "key9": "3FpFsiMFBVntvAjuBjvbu2cKYmQdcnV3hJ4E4rrgjkrACd4stt7aEuGjwQjePYTdXgQXowjEE5mhBQLFyyYkdGZo",
  "key10": "52krRQCFcnQRK1ruy1B4tbv6LwK8zbsaFzSDzqqnh9juokdyT8LCuhafBNmHLRWKDfw9KTGCmxk7sUWF4zaBfWHM",
  "key11": "jhrm9wHeqK1vbkHduUgtk825DvuM2BQFwhc68ZG7K6ZaoNNrKodcGJEj5bAGjoCCyaVUf9qgoJ9QULTmJ6Cx4a5",
  "key12": "khQynRzm6FoQmgs9hoPgzUS82Q1MBnXMEWt3HcjSTh4KfycRLTXHNSNtvGaaDmTWB4VWQJQPSBQZbtB2xHHNDrM",
  "key13": "46CynZcVwaXGL5nvSxvSVfLdXf3nFHZHLb4nDMhv5j62ostcQdUxByJoENGaATHHMQEAF5jRkyDwJtDf22sSnoEu",
  "key14": "3Ut3bfBub8rZa2zgQNuFFF89r6EtsWNn9NkQNgKgsi3atD2fP7CWf1vCocZFLUNKBnmnq6xjnxWyXE4FmwSCNyEq",
  "key15": "2qzv6M7mVg7GRrq3s1uLbdDQx8KkSujQ1KGQC4rHAYcD4wwYmRHRb8fsm6eHQHSUSqJ6kDkKkVhnkiBvq1SzaJqD",
  "key16": "2j4yo3sWRD8s4Nm526CcwHd6RzKMretDJ3SsTEmmGxY4S82EF1UGQ7Hp2N6HgZd56VNX3xdzV43TSSVPQrpnyK1c",
  "key17": "291mnGJmp6cTJqTNrrM8VHbZtJe13JGmiFzwjUia5boxHwZYNejzqXXwLCH2XT1owRfFSW6e3NHjcf65fdpSgSaq",
  "key18": "4Jbg1SfQe6HPPkNpiBi6xm4V33rLfmM2Mp1KcRiZG26ZVVqNfkeSXj21Py8qJLvvuzxLPoXq6bsKwsrgJb7Cu7q6",
  "key19": "4BHzxMhNL73Vkn1dTkorCvfUfAQ5oHwi7YCbGPxXrpg9K3hDv5R7dBJurAVeq4Y27VeFhGy293QGR7qKya5zGSbY",
  "key20": "5qLYrgHNA1wwdTEtQjDHfqDpLxaJC1Sb2cLfsteYxguJ2W1bEViRCxcBqGjhth7rthkNmJrKM6b8AS9ytXE97xH1",
  "key21": "3bUerHE4LLmnAsMHpwUd53XgotZ4vJGZ9soitQCZnjPFpbxSBXpjFekDLjvKSYNYwtBYoXitJpaqC5jF8gNpnwZs",
  "key22": "5rsGgHyuoZRY2BsNy4BzpLdNeAum5p5JXv957wjmc9KxeTErpXPWqLc1TaepE4UvA1LQKTiTvbjEQeSeoZUBcGZo",
  "key23": "Unc7dcUcb8J2sDtYasBoz2CyQXqt79K4QYx7n5go3SfFVWZZkijnFFvKdWJa2EK9iLzrRH4sxs5w71PRQBt7Cwg",
  "key24": "5MapCZDpiDsvYrVPe5AcFrFzm9Q9Sxo8piaMvyKjMTLJENSskzF6p8mQEhoHfrisdGQsjyMERVTEKvxp1PJihwwo",
  "key25": "656UnSnEmY3JwUayGc2dDXs2qFdn6b2pho4FBdnM5UosVwsSMpWTxDNHDBGuhWTtnwPtczycjnwgehYodX7DWNrp",
  "key26": "2Xm6QWvcuTi5wojJBz6m4rkvFtiHykaJdoiRcxZ9FoT8UUNEoKyrtACjvKET53ZgcpqUd9GzyZkxjhoVvGD8NS3o",
  "key27": "3cm7svbScMvAPFnVwhuxmgYbKNJW8ThrPX47G8yZxLn8oDDsV1vYbCZJ5F1sa2zDWA6EK82PkboehSMJmD2dJeN8",
  "key28": "4fuSN8tqkyTZCRi7e11e4kyCGy7oeGexu8XXim5jJ5EkfF1KBh3QPdrA7f262ZYKVVpbA7aXdn2uhoFaU6diFvXa",
  "key29": "5YgT7JozTyi6hXY1XpSehtQeUw8c1FPBLwoQTGpo4sk79AdonjY16XwKDYsczykLcmu1VJhWWg4xn3uYDnaZBmBs",
  "key30": "2eLUhpYkh9pzNZKi1wpYXYp1uhu19TCHuq3NrA8VsscVaGCvgPZrpZPbyWdt5TPN1dtkYZSbYQjD26s1KiQrVZxi",
  "key31": "mGXTqdTahct36yFu9cqdx7H58g4rADGThAG9vif8qffKSPczVxQf6pzjacEv4xMxZf84qibb7DQZLVN5QNDfsVf",
  "key32": "3AK7BQfba2u52sbH47e7RUHf4wb7dUkHgv5LPoQsfVZbbFrx8ARGnoZ22c31YBbwT8ntcgv7DL3HZfw7Xdzoyvoe",
  "key33": "4AHwg5TTiWYR6jUvJ7Ad71cdh4uEgQvMbpzF34pqeBdshJY5gZhHsrzqLF7iuMPDzYwFg9Lxzi6zy5NvxWCAB54R",
  "key34": "P5bgyqNQgcNArEBxDBn59ZbqCr1ZPcM3hYVELDWH7yb9MKcHT8n3SjT3WimokmVBYfoQeVDELfjEVKT3uzFBY6R",
  "key35": "KsCDAR2bd5FFtBtyGbwf6t1iVCzQxR4Dtdw8uckZKjGnTuM4wgjew1YPwY5AG357yH4EgTsq3amnv4TF9Cbe17n",
  "key36": "4nVm66y7PZASW7FMjwAcUwmtTMzqLL21tkT1zirQrH7b5kYY57WoxznR26uw1SmAjvjtHKG5HyWMLK652yNsfs2p",
  "key37": "XnjKTbcke8svxvJ49q2f1AyWJQRkooW4TAgenichwvvBHPmtgeeb4U9CguQ6qsNqqyb6zmXG5RThPcph1RpATZM",
  "key38": "4byA6mzKTybgMcc6bwuzgKGF55jHW7roGL5wNdpRHWPEtPFgGTmDaSmc3J2yVwHYwskWCEjRngqVdsAHZRTuboz4",
  "key39": "2F9XHU1xgHLUcTKjWGB7EGcPNfVBTbNsTbPA6egKt8N6uSetkSZbiJ82USfRTE2C751CFpiPwtjhikn1q2xr8vz",
  "key40": "4qzroXDf7sP7EUe6TUv258GM4ELMDwpRoWNFu1iAsr5KdaaoMYWp2cxD8QzgWby3KadYMhCb4bWGaRZsi1wWbhhe",
  "key41": "5UKsquPTsXWbHGiLbDAUtgy7kNBEiB7dggZ7GK6EHo5xECSkyVRVqNsmAy9jYUynUrHBibhGnEU6nKKUhrhQ6pyz",
  "key42": "5ejjyf1BEsTyLU8FRFAnAc1h4useDM68NtAxLfTeP48sV4aKasjmcosHoA1VvSWT4u5g7Z2cPVGaVFpHQxNwFRm1",
  "key43": "47hGuZFgBhrdp41FwaTEXP6VvyBwEdouCfHqzmCVKPNhBuoZehGzKbHNKey8YA6DwzncuJHJnnS9aidsjdJXAYL6",
  "key44": "3CAzcoXuoUjMCaFDd2QkBZD93ijoUtuQbsDMxRoxy6gmZiZ7GxdETyaSYWiR1r6gkLqovQ2cUVnDQUySGyvyNMDv"
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
