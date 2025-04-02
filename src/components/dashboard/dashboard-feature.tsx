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
    "2Xwkro5us36YttHHRWYbM9bx6sJm4x2Jb6Vh2sKShhHiawMh5xuAAaUMKuWHkyPw8Hns8bkvMWwnGdT8sXzc4bvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uBWfTM9cn3u3SFUWYfA9bJTU3DFN4JHKGa1JzFSf6DYsbzNo9bGSFas16wFh3PQAzwCroTGFWEep1QFaXWwXE5v",
  "key1": "YfGW9TLBjLqsCpVZYd8D4F8q2UM7wQhLb1pwqBUZSLqYUcxRowJQPDsYUpeJ1m1TRY16goUgXPazmVuUd1TuLPG",
  "key2": "5sheRCGq5HwZxwqMi3ocURpnzyXGJSS5xWaBwTW8t6P4B5zMMFbecukFAq51Uzmmiga7ASTmV6is6UcsuNXBn4Sv",
  "key3": "4KF28tCzd8VPEnHCX2n4kbUVZBkDVpdCPRq7eohpgyoGoamdGnfQwCRzwGsDQPTyqWnzRYRpL8ZJodY4F4mXQzyR",
  "key4": "5zx6zHDE6JvWJrW2dMLVigqofrKPyM4rPgQjYTTFWYyKiPEQrRidSGvvjjtcZS14HCqXMjnw6iXtvZ1HQWB8zt7U",
  "key5": "dzAWvMRosAB5KgozcUY3fkun9xcEHm1kq8pmVRtr7m3WnY8NqbK8UH3NMam5nKC8o5LDmUzuE8FXEWRroSTT9He",
  "key6": "TRWEQbbAU8wAfEvPFJTLi9QdwpShRjNPC6FUXdmdLhXD4X6KXJjzSpE6nuXtQmRZYdQMA8gzNURFSjsVnm4fJWL",
  "key7": "4pdYmmEDjfYj5rDwvgGfo5jKL8XcmNnDifUofZmkK16TufAZnC3jhfLHfNuLW25PU6ekE3K8Q3gYYsvAtxrX6ued",
  "key8": "2k4iBdsagiZsDS1ZjdfZgvmmowAqYsNVKT9E64oxvRX8eYU54k1XQ3o9igot7f3nt2w1UYC6SVhAtuuTAr1j5gj1",
  "key9": "4wZ7dg3m3WLBuyeYCULgoodNvtPA8FZMK1J76GCdPkjdaKc8tx7de7KGzCKwe6SJwkf3g4XdopNsPh7N4KVGLkyh",
  "key10": "4DNGSoG6hwSbrpytYKy8GUvY6AXSBzfWjWyzqGVPbNQbzHCezm3yf9atZ2ywVS7fKg3M1M87jkjY51FnbFithPYm",
  "key11": "5XjmWXdYtC24DGSN1iqQwEZXoD9BCAjzMGAzE4m7xQybdBsHBDTT8UG5793eMHwMoqYymqPBzoC7Jg2oHpCYmNAf",
  "key12": "2xFaMvF9ZFy75gzuwc5u6EF2qbs1BLMA7D4iBUdKLamCYfEyPY3DMoxU8JWGFjgWNNCCHADcCZEK2D1DtBM4JYhC",
  "key13": "4SNw2j8FbmSEYMCjz567gydD6icWTYwdsYkHWBtyCSN8NeHdAqwSX2vy9WbdCwLZbMz4oaHinD8aUGkv4zJZCHq1",
  "key14": "ZuvfLDFjhueKgUyQHYKwLzvNQZWeEyP5AELhvHudJNAVZmM12XQYMkhvboW2mhcQ67mGwFKbKJui5EhUkxQy3Yf",
  "key15": "4TDGBtke8P5zgeHmZtgSPEQ1KMucfStVMHA9UvXDBAzvBWMkBoWtTa2PWYWczgEbTpW82KdjdWsHwQzYCRtk9JrT",
  "key16": "2iJpvSSFWFrz9Mu9Ymh7UiUcU4k8pUVZEyn4aierF5xSuf7cVhsfEGkdRG7P6F8QPnPzrZQoQ5ytFFdtwxb7skE8",
  "key17": "g2sFB4W8GkW7Gq6NwUHUreC7MVuwGMYHe81jWmgBkmpFQL3jiU8WzWWPHYg639pf6jEx2jgd8N6Qocbbp7ryUab",
  "key18": "4a6pbXGxvt5nvF6Mb7aKiuBVyUWaoaj28UtrD7uwU7SeJh13skpnnxckfKU8de5WCe9ZijQMPJnhcJPwbLkN847G",
  "key19": "5ndPdQaq3Wcw7RnXVPWcsJHVJBkijVwBxSZTxHibo3JWmj3CbPtbJED43GDTyNv9EPfiUqSRLsMAjxbKnV7EVhNp",
  "key20": "RRASrwdcN9qbjsx5NVgEneaQNNdNuTAmj1mxRmoc6MHhfeuVhSJ57ybGu5qosmbGKGFh1YJWM7EPonuamT5Ca4C",
  "key21": "4zikRG4aVqNGxy7PG6ZpmnYkf7QY6bjfCgFsast2QzNLfuk4jDUhUWWJhagCXjiuVB4EQyPvaijjJ6rCLagorEm2",
  "key22": "2XBqmzmBm82YeLNeunJnFJW93F4Z3ys21iCrXR39WD8XvfDUYLkUnTboYE6bkQycyKpRJ4CnQ6qgx1N4nzFdy7hv",
  "key23": "5nTyzaWCZBaXpq7vmE8xCmER3roitRs1JQ17CWer1jPJXG2CpPPzKFC48h7BTmMtDU1K9ASsCGe8mB1L1RUX1cDg",
  "key24": "zEFXY33c3MtsfHaHbngh2jSFSg7fQuzXuSUooT1q7we8WN73NDqgWv24LFdAtushQfqS8JMuqHS1uWLEi5avgsD",
  "key25": "Hpo9ewtnJsjBi44AeLsd3Wh7gUHWjKX1YgXPi7ETXADi1pUTa84nHGiLPweBWVYTZeoRZ2ysAhDAzyW3YXw46QW",
  "key26": "5yDG64BpdrgU4ms5ExZbStWVAAzhnL7HTFv46vSCb6sD8dds7wui8bzeb9aPcAxAcTSkWwZGu5yfpX6nBXmzWvwK",
  "key27": "2aKPxcQMZjecE6qdqcTVJG7DkwmPtZrKqTWd88dajb2bYdqo74jNgkcKKM9MLwaTxbGhHeCK4QTF9njjuzHPX3c7",
  "key28": "44ski9fjubr6pLj9mGDeMvwzXUiiET9cwpbHGdVcsiGnq3Le2CXqjqZhHVvh3La8S6TzG3VhG22ZEdG2AYeBrjns",
  "key29": "3Db4su28LL7DGnmukwzmtNSAXJCJkas1ibrWWDakSPf39WNhoBgp9vaSEWbRyMoWkJ3oep6YReieX1ZoJrfvT5Fn",
  "key30": "3G2v9wKfZQybbZ2ckaDkwcjn4KziAFjMZ3WcbFrAMBrWYmhkhBgVNLHdATUGcjd3GeG4EcKrNLFzcCtYy4ZQK7Ns",
  "key31": "44cbMhRwkQR5eJr8pF238hQo61rjZZFyv16echMByvCybCYGvDhuMaA4C2juw4gFp5hvSF1CRvKcDV8sJQjbmKkR",
  "key32": "apfQtTQeYWCLoSCQnB1ReWatU15Y7WvdybGYt6DuJhWMmeLvjTcRCxbDNvWe4AsCqFyT2tp9FiPYDdc4C4z2EEE",
  "key33": "47kxdKPy9MqdDrDmTbhSWeMFiBxYM4a9fSbwmmBZ4ePePwAqXP28ifPUTYmkT4SMuAot5rCS9yZysbhrgopdCp6a",
  "key34": "521f14oToGJ2MzQmWXd2Ho4skuiN3afDy2hHExGhJnMFAc99PyxPS4GxVFVrKaNcH2kMfRBnNFpF9mWot3ZG1SDG",
  "key35": "59gaSbtYJGwS14EaBbNsNEjC2gyoryFixTsHcvYxax6nZpei1V8Bg4yTvKtmPNiSYbRs12X3VYU4qrsbNLokq7zv",
  "key36": "4AaC5SFpbx4LVqbd1Ccq45QWcF9r3MFX3WqKJo5fevBWsju8PFbBNB8johJ9dyAqzptSYTTr7NFVKZ6YWFqfrxT6",
  "key37": "45ALHR8uSJcMmjxg99hvSBWma4TRLhRwnpnV9zh4wmh6RfZoAQwRn5R83Fb9nif32soMStqc8jF9Jkhxe7jq1AkY",
  "key38": "41EaMeCz8k7F9wEJRXiivLqnry9fRFwp39dbygrbECKcepzpppN5SShaMHbKd3t2Vs9fgbcBmNbbLPn9Ri9r8FnV",
  "key39": "4iDde7GAnXUN6gC8zNBLjYR5DkmSL2z7iD93iNfSTaxv57oqTTPzmjsiwpA5WMJ26Q1HNDWc3nQ5rUwUZBrdM3jN",
  "key40": "3rpNAsJdnuon87VV59V8esaWBeedwousharKF2ZxhdEyqhykt5mKbmkKLSmpjrECBWVZ53DZMQKPF2ywHMgupihT"
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
