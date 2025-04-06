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
    "4qtZAz4bnwngGSZpHYV4uCae77chAoeJhRFqxzGzn54CaKSBHjPgUrmctVcAG4zqpqaL9KPgiQHoXckAyr8CLSmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WLXribcyRYUquKnHTDxjWswnqN4XouAXdyKvW57NhtXFf6snjgX8cEd4e663vuJWMewHSWeBkCUL5XzL1kJ5FJA",
  "key1": "5vPJM8vNqkqWQGF82RaDEjk9ToyqzcDDeyTt2uyi62NPENpRfq2WbXpzo9XicHVyPsAjTWL3SL15KdhJyLPkZY7o",
  "key2": "qLV5jc7e7BPygErcVWhQ45yNx4Gk8jSBgkaSSTt6GN2qqnw8mPvvNGaqsWkueBRjonZECBTGapiAmpUZKyuJerq",
  "key3": "RPnVKAgsB9gVJNAHzcrxnU47B88Z4K6vNo8uatfUJSP2j6ojf9yWNufLKa2czN2PBW9SsLy9F1wdzxTrPpeENoi",
  "key4": "4tp8RBVNkWj6tn2MQ9Bc8Ykz2yyk54b5xbCXtJRR6jm9raJpyMVCwnMvLqr9VHH5gAMpniJnBNBLqiSUgP9ytkWd",
  "key5": "xKgt2a1W9E5FyiXJDwaGmHBkMhisDgovKK8oav3cAbkjp88dZrCqcjnzYcqkwn2oTvub1FUvjVPQCGKWwuL2LVx",
  "key6": "4tq1teSsvnN3ed7hsjU5Yh79B5fPDU8gMHkf1tCuuDjXdDR8PLbpqSoSZWCWPc8PDqtiNcpMJwzJ9zpg5XhHNJ7A",
  "key7": "2W91Qu9a8RqFxgPSCaeideJeXfV6tDpx2SXcUaun1FPwmJxjw7aS4DoUiwA4TWx9ssQon7wnrQGPXieFNCvuYaDV",
  "key8": "3J8T4YnxrEnjEbC6ksSae26FpwD4YgJBZnBHFRK4ePBoE7FjLmrh5sX1bywsVp1VWyDUX277PX8qs9z6f1LD3qqc",
  "key9": "2RBaizUDnFe2CNVXx5cEhaECxT7uQj63U1N1QcZsDawd9bXjaAuaomZriBcWXQwbrryudpeHHy7Uq8dPxkxM7s3s",
  "key10": "2384hjZn6XnezXJEs3nVPfcPcFw9VFTzfcGpU6GQDoV8QsSF7wj5z8kxPnGrnmZ5p6gt58pegatth8L612AJDdnx",
  "key11": "wvjgF38nniq74ohs2PTzFqpgywFiuam3A4QTKgZrZWmgsDRCLjjeVQsftuErncJ3ZGDerr7X5RNokaLB2bK7pVs",
  "key12": "2n2bLgxn1zs9XRFVB5Pnh8fSEHvUKZfkvz137NFZcVT7qBpzWysVwGyX9pxTYpivshRdrB1VXcozzFcJZSegFuK",
  "key13": "66DuZDAwP6fkgBVYeKATF8nacWKLMHFqmdqKtz6XwAaT4h53Mm9tRx2yPA6hsfn3dAyNBW6od6e5NFH4ptmGdTma",
  "key14": "33jToYw4GuLowc14WsXqTr9UCcSXR7q8vAoMtq7qsmq75dRcXscoHfPKDuQpsXhhnsLmji1FpqCKCoJoZoMjpK4r",
  "key15": "2tpRfybSwHhniGchiZEw6LEC8WpDNqw133Ayy9Ddc2Jh1VnNxqareRqUWuo8NTFdXRBVAvkT8zkbNFoRDmUgPb6a",
  "key16": "AE9ek6fER4gRUekGTWiN5cuyTX4Lx9vTLDcxb7KBsmhT9y797oNXuZXRndfLpuc44FdBWT3F2akExa7ruzc3ZGS",
  "key17": "3BQv8S6BAWdLYiXpkFzhiKF31xpbMi7NNvdGwUxr6nvnGMHBgZvfdzTg2jEMYishP4TsGwxKmfQAnrnRDoKPLgVW",
  "key18": "3bKziAShgZd4fnacVSKsSgr7SGXi8obEGaJdVBGXqiqCgyQDM1Y2oYyeJo8dQF53JQuqXKYSWYqwWNePJ8B36uCb",
  "key19": "4CRrCxLU6neycFAxx1ZdviVB5WuAWCYTsUqqJFJESqU8ZMFk4YzQtmb76LWZrU5yYHr3x94dVLnY5Yn4s6oPxYwS",
  "key20": "4wVEsbpgNf6PCRdzwyqtfbJekEWgqCorVnPFxrKJH56J3PZ1tht7kU7mnPKqPkW3pDcQ6fkbu93m8hBKbY1XXWH8",
  "key21": "4sYLKXkzCxrnCZ3RJq9S3C735YEDZEV17ojMY8Rgn9AFwAcEVYTijvNtz8eFN7kw2gdB3um3FrudSNk3NDdikmbi",
  "key22": "GPLDsbYhuYNtGtCZ3qYKjvnPD9L42XN5k5G4fyspF4LChbfniYnN38qzrMZyXdiAVkypemVYFP2tMMCFwT7jeXw",
  "key23": "2XpHwHPsgQWg28197popngs4bmfMBGjdYR97KH8KqSSQS34iiJdyaQhFxV1Hu8c2Dop9sMw4L4Hw4oAEyqr2A8xT",
  "key24": "63CPQPRfy4jAyLUFp6WVrrizZNFRXzE7PSj4MwZJKNqKYZdkb2jQfpmv1fGVJTrNwi9khGRMhJ3cKux6vZ1WaXm8",
  "key25": "hSF36cAt3UGge5M1sLS9qDFvXACPwFsD3G8KXFAdCMCg61SnCHUjpuuXBsfiWnuY9gPZrWhuwsVh6xq5RAou8mA",
  "key26": "2XnwLbKL2Mh5Yv21EQeFZpBihAHSNrK3ZHEBZ8SWKopX3V1RRARSLJ9r9hPowVUJPv25quztY67gG2fxqwXnpf8G",
  "key27": "4bcKjxrWh63om7rYP9nn2MAtsHoe41XSfaobWHJ46xJWw3UiGr2fCw6kDL8KbpRqhuDwv3TnhiFwaXac1D5YFRC3",
  "key28": "5sqUKKBYoFWPK4SdhLR2vZdhxG9qiuXdNC79Uy3UfGMeuz5uLEPcimj6JctQ3B9o74kgqiTyyoAggvLiKX27uLUe",
  "key29": "3oi58rotsMZBfK4LRZs8uqAVLsYCANCBYV2wm3Azbp9xbegsENhJrEwgyRT17UNUm8aj7kJUKMovFdwyvErf9Mnn",
  "key30": "ZMy4nAJfFL3x9eVfa5Xwi1iWcKF6dPG7nsMKtSih4jdUHQRHWFektFpNNYNzWmQ7GWXbC9skTkxzB7J4HWZNxa9",
  "key31": "365tUTwekH18WG7boA8x2w4q2Fc8cP6WUdSL1Uv97XaNcmqW7CdTp4F5ThV29GnoEVyHh3ZcAx6StWSdpx6fwK4S",
  "key32": "21JHNtAW428UYQChBZGRxoYUfjNHf4UnhYMVWRBBnQ7N4zLr56y5j2TiJcddihsw52KcM5YoGDN8dvyV62dDyLjH",
  "key33": "2tj94KQ1d9YmEpVyrMoizM6i3RazurwE4nAmYkCCZiaVUsYEEmeTAKY1cjmuovQa4ie87Qvq3Q4Hmo1yJS2kW7HY",
  "key34": "4on6YdkjN6YBagdcUQfx8WUnCyD8DTZw1PZvnaChHGW86ZUBTSnhu5RyWpP1TxC6vkn1NG58tqkW2BZcCsMC6oKp",
  "key35": "25TYWBtd7URgcUGCTVzCzNnDHTsvkwTgcDmYgderzQdvAT4XiN1nfykShMFBYsvcYfs5g4sGn81JntyobQ9kEvcT",
  "key36": "66ZyztLtxbaxzQtPhoYaPHGA3oucuKiZvRWbAghTDkdcLiDbGDZ4g6TZ1P4HcuUu6Req41yn1xUn6mB4hywzmieS",
  "key37": "59UYBNQLSWwZt8Fjc7ypxVcrjdzfGBAhxZ77cyrzYYuLfJdA1W8S9geoyw6tbaxTpkPh1qzb4i3BDzZgQFKs4ocU",
  "key38": "hE5E6sBWT7VhaXQ3uvFrY2YoVs2Gxz34Gd6fX66PfBiY86LUFyqvz6QqFjhzJc5Q1ZgQpdyjbf5Gtbfcx5cE5Xk",
  "key39": "58biMLBtv7iNFwQMgUi2c2Q3eka8cyY3cBhQShi1MEfP2CwVN16VFKW2uyhg9XYedvp49dVLBcJW6HuCvTHGW97R",
  "key40": "2h7jfSfH48GLTYqLHCrFKqLbNtAmiewgfH55HhZF1bVHRQd83KnwtYfXL6c4dZ2a32fcSHR7BJQ2yrYYpjJRvRM2",
  "key41": "jtWqW14MCiftGmYGGNhYaXpyzvamorD4TkZymtfq51C1yKverj7c3H4MvACfKqu8BLSdjPFFdadTziiiCjZQZkY",
  "key42": "2y7iSE4cBccZs35zfw1AxcR5fKFYLiATuQuuxWMYCBXu4i1p94d1ubmhnnxkfNZjacvQHaoy8eaCBneRXWY1ew3o",
  "key43": "2kX5jW5daBhs4ohjer9mpTpqyc71VUhL4yuC5xSAe9rGh9Nnq3fsu1mPgSiNfHHHRGk1VNban4oBB7BUMF9vYfZh",
  "key44": "61adii36QKgbreVszryvQMpsjn3MvvinLAuT3QtyBQYusfNyPDYaLSCYrunQoshkDUNeaaWLPEEeqPuqywPS53Mw"
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
