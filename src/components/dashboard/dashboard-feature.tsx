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
    "3ACzufxPs8HqCEpjU2mkqpepmezZJX5fVHxUTc4aArQqqEQfffwxGh7sFp8yfZYqpwZ6g4gbacFeDjAaEvSQnu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54TXTbZ9VbtEPbt4tdFZmvjP5Fk44rKgo6NL73MeUFU1AjuhPFLwNDd9GYa9XjF9B3u2tkstBKLgFFUeS9xYC5xo",
  "key1": "4ivMdbZ64fD7MPYnnKnRbja5Z5xtA5nE7tLwERX2a3Age2jJyuy5dxUh4cdMvP2UcjZ33tXp4YD7k1g4rnCuQb59",
  "key2": "5h8EomvWQPsuHqgBKVVAXRGxAFuudRXKYJmHbf4NDbvL1xgiRHW17oCQiT3kXzx7fvZ7LMtfgq94ScnULc2QJWyZ",
  "key3": "3qe6HP9HwCcAVoNrZWzrwyop6qNqaPxDqP6o4bbfukGJrzR5jccuxJ2UfiknXa85nstHYbFkVoPr24Ghr9ZDPMVN",
  "key4": "xzDjzZD1JGZSExSenvnNd8e84Sw7PqhJor3tvsErE4s3JTxTQResqKAxX3Yj8wkWXAgKhSpFMwU3ZnroMiPyFZ7",
  "key5": "g8nAmD9wJXhMCDbMqRkMsLWUbLxdQDsVSUPZrsP81hi5FDsrARDXTEgASXsg1aJjWXVishmaSu9bVNbcByFXD1C",
  "key6": "mBeqpmZ9p1fKRY2B22wqyefBDz7BZikozG3aT1rK42ouibToF2QACRizyWT98KVMCmYzEyjumNYcZQ2avrrYSGr",
  "key7": "2gZDtZA2992K4E7ySYiS92vj8p446bECGXBLhkyNx7xgWkrwfpujvBosYQRHiuE8vSK8mgqQbsZeKYU8kxSavzGw",
  "key8": "4u7CeKYspZr6Uw8wbMKCt1w5MGdcTUC8j3NiiQU6YpJXf2J2y4CLr8Ydx2pyjhD8PUPHm74cjUu6YHaodpnY5Kiu",
  "key9": "2GyVVAaKp7UY6t4dZpV3T5LvFPCjq9LhcHLFkeGueS7NM4diT2ePif99VmAtWLkFPtc7d4MqQJ6ears3w677TuH3",
  "key10": "5ErK89tBaULzJwXHNoxbit2ygi4M77ULJq5apWaKuCpqvq1aFeRNHyWWvzQGBzRuLrN9Hrus26yM8vtW2GTNRnis",
  "key11": "Fa8izzmMxoFznwANfSsrKsDN9yzN4szUHMzQkGDigAgZjZXfkppdACmFXddCpbeLEBcKhvAh62xYVvHp7zf8kzZ",
  "key12": "22WQSUEqhpBnEm8Bs2eKsYhvESCd5UfbiqeFzNFKwo1P7ck554HoWoUshVnkMEhFd5PjAs8nX8quGsZ4zUJSuDFg",
  "key13": "46DhGgHGcrZ86HM74ExUkL76BVbqQu6x9e18EBhXthpsdzW3VfZ5DBfqZeTcHupZNZKqxsgm59fh6NuC2tT8GnaN",
  "key14": "2D6iCoBKKNdaZcko7pCRPuTcxWpLddh95N3rkYBbpp9rsWssadc8Tg4D3mSNsXcqYTMCMykzxgxSq4xTNSutZBwo",
  "key15": "3yd13inZHSx6whEB6xyPzfiN68AfCo3m9VuAikdeEXHtqN9iVRvTV7NSMLDAdTspQcHwLk9EvsLhD6jxDo9Y4xSJ",
  "key16": "3MSkgxf8a8modxHFtWoezmszABYYPTCvB7qiwKePXgpKqEj7dE8mSZesBDaGi23EJHUxnkGgzTdNmFz4dDyqgAJG",
  "key17": "4Tvx8zxL4xWNcAWy3yn8hsKmQDCNMEzirBuDf33VWAYM42B6sUkiaRcz7GHry7jtJ3Hwofe4tgzEgbpjB4dnBZC6",
  "key18": "3vabcMd7dkU6EcUqkXDhQVYvSzUmxfAhNAezPMjjgqANGXppvSc81Fg3xhdeQvXiaMN8K6CGjLRE7cfADnfK6w3F",
  "key19": "38LL2yTYcBXHPczGsS3siQwp1qVtam6joo8GZjkKWYjyoQn4MMmrDgB6YVT739VgZfh1YCYx2ef1SMr96MHL1Hr6",
  "key20": "kmygpFKRxE8zePKvyHQYCeXTyXq2iwn9tkpN9YXaUbNwRvKNL2QyQm78JDjRFJVEsSMH3t9LmWWzG6tYadLmecp",
  "key21": "yBHwHg8BgvxUHKcMGr4GbPrL8Z9gwKiZggb3hWFjUKTjXuj5fxCFRGCdkHQZ6cEL4MUvbbUtWHBPPuRo3BE8EH4",
  "key22": "4uH5JCJJbmwVBAmYtaUB2RzDcCgy6Peb5376xVPJN6yGgeSA9jDS9pxc5cccjncs3Tthjf4dov4ffTEjcDhbGeXo",
  "key23": "65kTGw6crZDtDH2f94iyG5pJsBk4U2HdCf1ZnTbtHUH3BHuamXFMYSKaPwZATLpcL4Nmjod22bs8Dr1cp5h7dGNM",
  "key24": "5YZSyPWaExM541shhHSJ8fMugE7VWkHbU8cj9SENPywEV7aKHS5htB6U68Ei4X3ysudAAHrJcowCLuNZrysdERyK",
  "key25": "4oK9pgQmfhih3Y7MtDavUcB631rtbXQrXnGRUbRpHok6HtE4PQa5KTVtk8if8iTyUWmwYuUf2HEPGDUyxU49oM9y"
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
