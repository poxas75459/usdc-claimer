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
    "2dGQYxSYN4rG4nqy4bxBdPfwMAJm8djENHXv9YaxuptjyNLwS8t1vE8D1hg8itBhkDAevWafvWNtLPaLuDRKAPsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oh4Pyoo9xUFxwHsdRQ1nhjtwKnu6RuA2h42C1vVr5otym1C3A3HNF6qXasL9CZqyeZ6g5ehSyepSNFf8tnzsg17",
  "key1": "2ag1EQW4NRVpnXyHEtZeYcjdWtEE5o3uHaJXJ8zSkoZQi4Coh1JGiWtiZkv6Yr2YLaPWwB6DFHnwuvUqGqLTY14N",
  "key2": "4J3HkgZ9nwk9ki2bkkd7DFmhSYCerC4TTVodSgrpp293XPCWmtq6WBMBrJBye1szDrm9qXVe18cxkqjeaYjXzK83",
  "key3": "4NMgdvJ59Uakw5E5nKCnQroXRUubJz9PvNaKMux6JyXcEAR43Ke8mf3CGXKok4xUnGKV3ijy686muyA6DJktxMbC",
  "key4": "5xAdPCUoR6VKWCuy3PQtQebHNGnF7YLHjLsxzbeCtF83HxhNhdYJRsNEhUA2fWbnUT4mXKK4XX7NzhNC7sQczyjQ",
  "key5": "54DZKp3HM1Dr7fHXFf4Hs7iJJAsNsaZ1TSVj8tz8DJqanq5rKdq8GVfacuAArYnUXoLVCSXtywWH2Xg6R96k5Wtv",
  "key6": "2BZoXww7W5op9BzZLD5Jmyq4MkXwWjAy3ejBg4i8NQ4JG4we5uZBxqMQ3eQE6GhhRHeW3ogfi3Eas92Xjt1NVL6M",
  "key7": "2ddUmRzb5aEHDeatAXQA3gyt9BWgV6u8bDWgmCMooPMbAnTMjED9TMASjP2jJD7z1vWQVJk8FXWq25SRHy1wMGAr",
  "key8": "5v8Mj8UbUFfm1qvJZottgLRpipejYG5GgTsbEHSWrKFsgt346hsQujVxYLYw8PF9gsztBvVrBWU1S4eTvpUAgUkP",
  "key9": "4mBDjkXqnaCAEGcCSGxAjFSq8vQiV6zUWS7Zy59wtU2oSwHso2ftQ4is1VXSy8eH6yik5zFFZ4dSkQ4qDTK1B6fW",
  "key10": "5vAaFtwxLZLEL1MYKujZWHYR51Djb3bUmnT77xuPxTwZWyNu4rAtWMVT61PLcqCah81rx976AmMJeX8JacpfvGwJ",
  "key11": "65yAynLPLGsiBMopB3Z1vKygASB2anEGupL3gBkn8Es7ERBjswA1sBzW5tjLjmwSc9MycsZKpWNyF8e5GFDPNCSb",
  "key12": "3c9jTz1Dw7zv7ebh5oMi2awU9izYhp7zWdA9uvy1gyq16XsvRpveRxPdfxt2ZRcW6jCXuBvBqMAUdQ6tgrMKZ5aK",
  "key13": "gnQHjd1SHHaF3EnmaCqXntuxtdiv9sm3BWqSCC2eP3sPSi7AH1qvzmjVTmYGnGHkRr8dvdax5d7hQ38Um8enm8d",
  "key14": "5XX8WtRMnoJdgREABmUWVBWARp9f5UJTk7kKL1e8dHmiuzLBjB5krBSU2yB8ecrotA5Z3924RRNvEwVi51RhnFV3",
  "key15": "2gRzkvJVKdgVZU5QdyWJ99tP59j3nbB1K1gF6WrZaamjdNaAmNpixF8REzdZcbVTuJi8585WbtnU4PeY3HhtQEUy",
  "key16": "LuE7bGPK8SEcMRJyqr3NFturzkaro8HRBajyRBVsy1Y7FtJMyZLwhHWQtEKW5jcmtacvA6q9V8wXbCfkFZYQ249",
  "key17": "3xxcuh8rNgiZNwcnCdh31jdfqBYDhLNEb3wb1A6PsW7mA9NSm2GM9c1WJY2Rkzta6sCgGQAuDH2KhEnYhmmTQd5o",
  "key18": "67SrBGc1Ke515i5x2QYwsqpULPdNYZL4QvUnanD95JHNVyfwZxTKsPLWGwRYZ649ptN5ycYPLhCUBvWhP5aQ5JS9",
  "key19": "27iMSaAk1oNkWMHC1J8ooetHfxxPGZjg1mZPi3o3sUYFyfuXntnQUngx2xDCQLqaiGb3yKi6n4YMMzbQ2V8iqgCq",
  "key20": "1YGFakvBgP2fpxmiqhUcJ2JNHw8ai74v2PuqJ4sHxrHX92vbUddQKXjQT5wxhyptAh7dFzzzCXQ9JMbYk18Zmst",
  "key21": "2eWDgKpALZ2gYxquiZFQ5TEgxFyqKvvoHvd8xcZmjheSCNUcDYfawLEVyTwmHARdWmutz4xw3f6TQSzWZJnMySWS",
  "key22": "4Ga2YYkSdAAM8duNPpPAwfXvUuKZcSVXo1PQimsMGfzRmkehGGLReYw8Aw2mhNmQ8NR49NXAMYMckxViv6F8oB4X",
  "key23": "4kFSBfEafunjjGjHnHbEiFtgTieCwc7ZGBwJpg6HEhcNjoa6M42cHdoxmC46shftnZoAhUB4Zgc2aSpvE6RGU9Gc",
  "key24": "53XcWZ7msp1zu9MpQUKzo8tDuYTPtdv1vzRUMLMcnjiExLi87nmNLKkjMuB1A8sJasZ8EGPFVgNAMh2kzJ8e537r",
  "key25": "4S994G4LLCMipCy2d12MjQMabsTMk7ZZNKupApWzid2ySYxCYfPdZJaXnXn3KX5E2dmxxJD7sUnm3k3kr2a3WDZB",
  "key26": "3VngpJyucWh2UTh64TC43v3LxrBZypSv1imLqZRTngLGpBGHCGcHcyNNU97Y2z2zRi4EiFW9P5ttwhCs5B2WSgd6",
  "key27": "65bmYHjY6adAkq5Mox4kPZHKTDxkdnHHEJuV86W9JQwtgEuMEJFf4ALUbHwdLMKj51PmL24H9u1cA1B9SxSva5My",
  "key28": "4bUWCwiLBnLxsePME5iDrzzLeSCxAm7j1uXdG6z1B85z2ca3TqwoJh7An2pQi4ZQoWFmb45hGfz2hJdmNzcMXR7A",
  "key29": "HnySR2LYDEXGJcJVQehThfgeQy8mGjwk1XAdrKeq16gzGJT8nboip91LxkbWUwLiLuN8QNYNu1cfqa5SFAB8u1K",
  "key30": "3qJ7n71DeW5XhpMEY466M3BJDCXmxTXYm8LCxYzFxLLHcrHyEEL6dtpDadqY4oiCoh1aAqisTncnMfeh5D5pbEMx",
  "key31": "2Pi42CbC6po9LhnxsAQVWbKnFXZZjFEvUSUJ6hJMJuHiFqCPge3uUU9v2yT86BfUB7Qttm6aXxe1uQXtvsCqmAd2"
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
