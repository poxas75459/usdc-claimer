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
    "2DrPATypbdoZKtF42dwEK2CQ7mPEoBhddpFCsQKaAnuWg5oDav2vYejkTrUn9CyDnhEGYB7gWkquRiPWhRbeZ3Nk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59DmxLwaQzdFjAuYjrDzgMWtahsULgYf17WmSJYyHKasJ4ALU7WB7zRiDWAhmqE8nV8kGYSGZvT5dBEChUBEyNoX",
  "key1": "2c5oVz4JAKfCedqZsPeKb8bgCvw5CTgSsEg2WLqhSVtcL2BmjBakn5KLvKhcgfa9TMUw7Ma581u3e5ZKT1eSHvNc",
  "key2": "2QqQyng5DfAPdwk7w2jZeKGW829PDaHjDMmJ1sd2QH3T4XZvsUN34CdNjC1PWa2qndLGobNpFwzWoXEWN5vC1PLx",
  "key3": "2WmKb5U8dr9BFeafTNBFZHcR4SxqsceyiBr11HUkFyYRFJZQAKqpu1TKm1BZSSSmMpHxoR1B9tkAzcyyhvGzkatK",
  "key4": "2QZWYtuVVHfD3YYSR8phxfEfTn2Unimcbv784QPweduCfdMxL81aJjoJFmLEEHwUe74hh32mMua5CnmLCdnQDr91",
  "key5": "3nsMd2K6CkwW26xz5tJ1nZPB18jSLawfXUqRZtPuiBEo2rpk6rsfxREtukvByMnaA2nwaYzDZKWQ1r4ykRvGHGmT",
  "key6": "3QZAMdhvfYK4YqvsArWd4NzEJzNbP1UobxpZTZvF2NepKUjMfhpUNQ5eRFZJaArJABiik3ZSDUG9C54txU3CAc4N",
  "key7": "5vi71iHQsap5pxHtzHkDf9u2PrEXyDPwvzbJxbFUimWVLSaWvoszMPqv1afjLbxBrHzViEvvhKffwwvkzujBgBTH",
  "key8": "41GiQ4MS3tfB58FQS6frBYCBqmqNHW4aq14WQErFTkyJa7qVWbV4BqLVeN9Hwu93BA6pie9CcLWqQ57Q5wE9Z81H",
  "key9": "2Uwo2MH57X4Lg4rwudJz5qJ6XCqEUouVpaY7DknSxQU7S8qHLRV2q3sXp8JNF6xrxirXQuVC6C94USjvefFq8DY7",
  "key10": "4WkfUymJRYBdBDxgHCu7ZFFdytqmunosVawembbmGv967mrgZ18DmZNWpAFxdqms356AMVJYqBe4PwoJBbnmzg7G",
  "key11": "2ze1vz6ZjhQTco3sYebKPwbnbWfVzuFawmv9fF8BXhk3T4SkzKtZWiUMpPsv1NyrJfaKgwBuQrv14qm3fHc5h1wq",
  "key12": "2aSK4bJk96kwN7JT8jdDx8f8wnZKDZZqfVHhpjfvK18R7xZiL6wTvc7QxwCaj9YZiDW4bzyyxAHE5njzAaJA2Pbg",
  "key13": "266jhzj5tdShhWxVCrWbr6yQ3pYteW3jo3sAvgzFJ7xjuWTJMor8zAXTCzhRoSysq5xcQUd5FVAPGU5KGPiR5ZKT",
  "key14": "2ExUYVrqstbzMNMTAvoPqoyw5tiQKWxKBzSh84M7a63oZNxMLRXEnUh9FjfA9JuqsRnfQG1SDacwmyWZRBCy5zTx",
  "key15": "DZqmYDUytb78e97ESjKFxUjC6rmshwYaHoNguSTawyDxvhoruNUrNjGWRqSC32Ccemhh4Xqo5MGt8sPGvkGX9sL",
  "key16": "MXVb7knxBBn5SspTGD4LpTjAxNdYr6WJGnn1zJjXuqNpYecFKqEEBPLqxr4XH4wz7RXvGfmqVLKrGVABDonMYD1",
  "key17": "JJ6ES2TgUsfkU1KsDjejAbYNi1Tw8CBJPKJweCjVb3vv4BJ1CW4qEWXyC7ivoHDaTvcXibS4zoJ5QsofKuYtUQF",
  "key18": "5iS3d2AiDWMCQbzQJQtWVsQ4tHwiZyNFKULoQPwB9KfWpMwu8k43TQiTkTLiMj1K3d65iSmecXnjZrqRPVRQWbEk",
  "key19": "46DawySDeUH2UAWeLWUTRuYFmSPyW3PBki2woQGf4MJVSdHanv2qSqQSasW4kwqLcjjF98BHJ4EBimu1TTSU37A5",
  "key20": "qybUHWC9QKFsbwASTqC9Bw9L9iwCUd3BwPsebzJoWX4k5P1SBLHCyxrUvHf8n6PCH1KUhvv78QpaG6knxR1YeBS",
  "key21": "5hNWWLCjo8rXxPtxw2i7hoXE356LFaegmJ4wur58NVEx6a7c4ESxEthm9Fhik49yeRTRiFgYS3ngfb1tKakCw8PP",
  "key22": "5UWzg3ZyfKpLXrxmmUeywCviq1kMpDB1L195eDiJX8mX86pqrxFE8djj9U1tVKAtqa76gp3SFgej7Uj9eWpjciwu",
  "key23": "2KSr5gehmvY3Jus9pAZHNcWwjg1vUhbHsehpmGU6ACAjK7qxkRdQPGegmWiGdUVwMGhjW8LuijSQQAQApM4dxPt5",
  "key24": "4ZQ8W6ZxE36fLHQdp6KciDqDHa3LTFw8vfvP19aYt4yGkLySabaCa6q3nKAZtmNJcnJ9AGFURUq9km5jL6iLjNxg",
  "key25": "3wwMo9wdBBZcRR7NZP4Dr15rZQbZbTec2i2gK2PKfWxuaWHXfz8aKHv8Ggh1Xk3RFuFeyn9DuyGW23GoD89hhtCQ",
  "key26": "5S3AXqvF7iemjBx1FD94C176bquboPyaqoDda4A4ACdHD98BHAx98Eco1h1berbeDNbmahooiHorvttaZ5DhsUdL",
  "key27": "52HGnvDEEjbdgRaZZX5NwcGtxE8o1y9mxYu8m94yxbb1QHVaDMxRQSzAJ1PFbmUYeEziVLKP2DgQ3UQGJBGSUC74",
  "key28": "3UufK1mqyWFBHxpJ1MxARCZWjc2Uf8EFMGZjfWBoF4Sqrs3Wzg7Yf3RPnbhZMtW42hsj2qKW29wptLm42BUyXfca",
  "key29": "4UkaoKSy7ma9w71UETXTAehSGNrAYdXuYdCNHCRmGSgyAzHAfFKkWX9LcvR4oaeVaHT7VxxKEsVK9W6YEXvT2GVQ",
  "key30": "5mn7memM9cXZTtTnJqSbpTgB8EfUYxBuhcMGMDDRk3wiyctdps85aDRoZh4xKm1UCcinrw9hEXWEF6k7AFBmZVjT",
  "key31": "5hLKR5FqfmsbyPAKfx9hrihAmd3jp5g4b377ky15WUyF9xJ8tQt6sftxrzfHeSoLZs8M7k9UWxmEYP2Zpuo1qo1g",
  "key32": "5AHJ8xg3AW6P6PqCKveyGWq8JxJARP5RHhwzMajD3uFGw6iLhiEpNFiihdxeH1rVRwM671mHoLxSZEvQb9momSHJ",
  "key33": "QcLfGDEuQEwX3ftHvGdjRbcVcJFLyVUJLcgQEh5oDV1xAYgNiN6rNKropQRCpZd6NPiNx9JGbcS79YE7inojuHs"
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
