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
    "5p2FZzGy3J3U2rg9NZobJcyJDgSwC1vC4hfyU5DgCGFtVNDsSmyFRfaupBfyZbW2ucHJYzN6Ha1TjgZHt3jockx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zN4VjU9WWcP4ozCWeCDSCV9Ev4eqJub622YxMjxZuUMVSpSnnhmDBLmPUH8sQv5JuTEQEo8BxuB5jmCcXt7nLZj",
  "key1": "67TGaXdQmGcLDneMHD3VkZoSSNhXUXVve67ozY4GKFW4T6cLvvB21MiaM5xkD5ozooDMitt2JmX9kXyydE8eZtTo",
  "key2": "219L9c3dkoFcBSXBDoVXAqzUG7JQuhAykvAtRTJckh4ryt91sG89M4TD9utPE9WFR8rT8ENyTk9a2KyJzhQXtfDR",
  "key3": "4LjJEkvKVM6gxHUVGrJzR5KEnWzMXW6bczLG9jZfhYYFnKJZ9rSFkE7HdwW8GtwaHPGraeDUWRjfJo1tojkfZo9G",
  "key4": "634pNfR9cv2Bvf5sPinGtNdUxDqvhruAntbBG6Fnf1zdgfFpbuBocSs51iiD4ukefcahFr3MHxzJurkQt7Sjz9z2",
  "key5": "5rsDHNAWCEBM77GFsXSQczEoDGgMdLDr5ZXFKNVe97VPDZStiWTgNvyRmabXp18VdxrUXtF33ecCN7ZMQaYrDNbJ",
  "key6": "38nJjWvkmXJCYfwVucVGaLYfJnvUT8gZuBUBYUBfcYoiMCKzbShdo2NwRNLZkrEs2HDpzqf6wncK4dr65Mbac3rN",
  "key7": "2RneQtn2skAWvj2JeShqzBezG2jcskb9DvKZmkqyqgi9PBNMqyrTrmEeyYauetqiqNTL8C5h5buiPKwePGpJymgX",
  "key8": "4RNgNiV9W4QPVPMttp4xyu4dNi4zcAr7JEibmcQLp7RUwrnmuEjzhBcjByG4FDdQkKfAgnEMxsVKttqN1vyA59e8",
  "key9": "dDJvfdyZbLWFgutH7zAQUgD4yXjiqFXwBZBZM46FraYjMT795nUkRTKk5FG6UzKqMD52NAZPnXEVTRu9f1hVqMa",
  "key10": "4XWHsBZynNYQYhj2LLFkYnpeKG793euqzpzpmbn8Y6x3emiq9RE6DBdytH8VjZEAvnn4fZ9TK2sMtvDxGpYv7Ue7",
  "key11": "2MMrRSLZA9uN7j3WYUmb37w3SHPf4ADeBwxnSHG3Kz8d7QjG5EeyUQhPgUbZ8STd3bWUTNEMA19HEcutVvETsr1M",
  "key12": "XV2VqcGnEy8gsNQXvP5KmRUmEosLUEqH4FRBdN2n9KfGu5ftH6RmCyjTrm63VCv5dLKcxQXdNYnHSgwy7kPr4YX",
  "key13": "bncF6JajeYNSpAPm3opZjYgY21ojn4YjLsZej4G4u8Myn6Y4frnxe9dMuaFQnJtDj7pf75RbTHP3sLysEsi36DZ",
  "key14": "N9xSuBkANFfwd3qqgHGnxaHrTDFsrhcN59RpVRzL1FUcM6tWxzMfuF4nYDAnhzwfcXkvon8M4k6iNGKf8mexpuF",
  "key15": "2cepP7yxe2rACTAzFXYB9ZGAL5pcD4hCS6YpfTQk6c6VMFoWLqinPcMF3e6fzjKjJq3sTvGw5XFe7SwDyh42aCZL",
  "key16": "3q4xpfACVkaQuoFYCAkKy48FDg1qsdCTcrSS7PBQVJpXLYhas2FtnMot3qVKcfZ6CDk1gkJ5Zq7NrFgn7H1nQibs",
  "key17": "2kAnYiYRSCyL2skGABuLfbd834cJ3Wy7AuS6RiYwuNtWPvmwiE2JF9kAJGw9UBcLyZg3mCTr2uwqBtLtk5LGez9W",
  "key18": "5zRrNG7CiaSb75KpgmYCsupBDMqXb1WR6PoxUhaW1c5VLpJRA7814NAz4aHwpdLhpNKwmGYxLJKAW9cpEJwAE9uq",
  "key19": "4KGNfGVRAQ4TkJ7gSZzVfw739bL53f8N9gQM9MjkXVd5HpcWZXwcGz7an7sNrLWA9Gj2kAUdPSSxm5rs6KHqumJE",
  "key20": "44MnZqTdoaBP4azchD6jcYaetULsCyv2CFCXHEbfGP3HDTQhdWM8QDu6MighMsv6TA1K1U1G3JpPXiZ8Ern2jyK6",
  "key21": "2fSt5YZxeqBB8hyw54vCSdTfuwXixf66XPPV3MhvywQLJpbinodBqgzc3mcWbmjKVMga59fN5v5ZCCDqpkDEcXU7",
  "key22": "2ySQWS1MhJ22sXneu5NU9DRXQk43R8ZJTR8daBAwyHbMyyk3k65F7PXEgqHN78Ercpu9MacWvHS7qH39aqw9Kf9i",
  "key23": "3qWux2QeibrSP4CKJ6MUD4sAHR95cGmbu7JhGMAsNXcx4rLfmdkgx9FmmN8mtUPqSTDoZZTuLV8xoJpJNCxbGAt3",
  "key24": "28ZeeEB7P7xkMiWreGX8bE2wFpSUibtY9usDRGftbz1RQdBhBcewWnQZHSKm3hgvKrptBdxS8Tv9sgCTANfRnZ9S",
  "key25": "iDR3MokzNk3XfAhipnYgN8XnZKGuvzZCi7Thv8QwMd3CbzcJ61gMfHso3h4LvnsRfWq1RZTh9ntxTAqaPof4DEx",
  "key26": "4BNQAE7XAKX6Hfzi5ouRoAe7aq6U42PRvEq1gfmJJWzsqw7yvh3GL8AosKWtXYxPqxJ8nnvMiEZJbA8ub3YK9e9f",
  "key27": "2BfWbZsgj2CGYHcDutkKwvCGtEUUbQM3be4ZNw8pqmQpAixS1nWh9sYzw2mLMkyFh9RNaJDGLM46VGkNv8YvtKs8",
  "key28": "5ARYxWH37iWRmfca8JaWyTjbgbA1dbWjesRfyteC4BMUVTGftevKXTSccUnQHMveMMYQxNHx2KLNqJA57xMMJRH2",
  "key29": "4WaFkjbHiUKd1Fbrssv1pqAa2FvaYMfSv8imckeu5raaq4vrP2Ba6Z4kg3RLeUYp6gYRvW4fsoNb2yHxnQ2Ku6qp",
  "key30": "2NHBLBoonJQP5ns1iTmcutj9Wj62bQP3y9wmFudE1awWPQcoMUnTgrAByW3T3sXczswc1u9sYNGzZyy26cwowT6R",
  "key31": "4ZKvvoYsXT6hVKQbchoXWrnr3LEk56YsaCFkFpK4GaxiABM9CEdSq4dZ5uMmhW3PNxngoUmAHrTc8wwRaWkU9uxs",
  "key32": "2zcAhpCBiCR4Agc2DHZpHcX88Gimk8pbpnsxZQF53gGr3A1Es21Cb8q8Rcz4i5M32n6Jz5wt17vy5oiytmz1562B",
  "key33": "AaoHCN3nb1dAjN4rU29V3FyTKg7HoLz4od29rC3gyujMbLwAMrATuxohctYoLvmapy38p7qUSZD2k5C8Ed1Ubn1",
  "key34": "2aGYq2PxLHGgxMANmu5zm6Rb1DzDu8rAwiQ1Sj3imtBSvEVR1446inNLNUvLUnKN5Gz9mbeD5PccvpBpzuHvZ1Xt",
  "key35": "2GmSnfAEZZmV44vsYHWALh2fD4AdstiQU3bhmnRB2LgZk5GkJYK8XLUkqJACX7vpWFVFtHp9q4a3FTgnUbYqBrkT"
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
