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
    "2b4tWDoMzEBbwnbyXP6HbCobzJubh88eW9EGxFRzvwaPtZ8MUM2jjMtyUkEejU7E8L5PJnvxwwM692EgSSq9WcTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b93xKiNPEUXbVxZpbuyRnpmVvDes3R7BUFXx55aj7EcrKd9Vh7kEgVjntC6mP3z5cyyLXaBf12rvmCSfC1oqG52",
  "key1": "4qdi9d2wayDW3gmp5ZuGrSbfXfxC4Htm6bZbtcMGBeyxXRw8FbX9jpeVpeuwRjoewreQ9KksLjWDnisBxsFWYjDY",
  "key2": "51qSMqkzFDhnZbst3Rt4Wp8CNmh9ufJf3833Q7dRaLgpVJQf1jtoHp7zaisAEWML3d3fjjvs3kMEbded9iXL2TH1",
  "key3": "5W2E4Mpq7uwTbTRFF1fFBk1i3Bodt1VY2PVxLU6mwfjL3KspTRadJbm9SXY5oQ3VwNaWTQ8RbSz7zXRmR5cFGmsz",
  "key4": "3VKW7v83teox7VeZU6msiAXW6ysHiW371e3kz7gGcRzFLdFjARrag7vZWyTVsAdikCQvKkqdWnMxCsmYdH8HfDfz",
  "key5": "m5jXp1yMYg5KXgK9QvL8Vg39WpZDR4XpSmA6T4pLG9egpMFDhvxCBJDKDkJF8fjWFZjzTMz7qsaRSHXGG4hWouo",
  "key6": "4HXCELiNLkpYDKTvSHx1fJ5LVaxG1jcG2Lx6XpS3NUmm7ZcjBYuE4J1M6JEsd17cVj3p5TEcUfw4Yco9BCCJDX1g",
  "key7": "3wFJmUPYM1RtGG63twtmx1xKwgKZU6BazK2M5vMxfa22aWh4tCWBZASCQf9tNi9AEiCx83ycQ3DxBLnguUubbXKo",
  "key8": "2DUstWZxN1GCmabVNq74ik22zcPJLKFVQSPAUHrvELx6nomg1ZCTrQt2B2vvXGb72gDMpKJaJZP1F3fXv6SGbUvT",
  "key9": "2afxUQmmPdopZS3YwfVN6c3JPyUpSjgSQRBcnSBqieC8zTLCCzCcBWUetyf4f9mr9tg1FmzTiBCq1N6ZRxpgVpZ2",
  "key10": "zj1rUsapHqHEibpwLCqkJt5hGJxwLkLtgHsJ8pxevT36tr5jxGMVS8XERxdbfk6h4ZrPcA9gS6YiNkQnSuHM6fJ",
  "key11": "3RNtSCqY3gTa3J4uRbpihFgTqc9gE5FUDzT4UTtcfdiwQKY7hFz49PnDgBvX3HAfom1yBkws3NAvjvABwn9T3N7V",
  "key12": "5u9NKCB4V21RC4nekSHLRaMnmQd9bSGyUtp4vTLLCJdmUy33D1WaxM11f4h6gaihHF4UQboe2Jbn3Aqb5Js4pDXc",
  "key13": "TWkcCVf8yazz4QgNemL6wN5izBVRCbz72JrnYY9CNvNrs4gHo5VvBjWUZs2VUGoaLKYAjbchSbCJ2ZhSrMNb7ZH",
  "key14": "3VDNvuLq8RuLWz96wLVre3XMCXj1hLS9GfTpgqnrV1vBtQp7k6Zsymq2eBnwRwpxUvaqby8jqE8jiYFPj4CcQxpR",
  "key15": "VMbGsmaLSsb1kLu9d9E7xNWNAfAgwDTVHgj3c7dRBZu4siwJHvSANK72A8xnR5MojsmcqZqhfg91wGB9kFE29ze",
  "key16": "5Vtgy5pmXHw2TuFU5thQT4f7ynWpS6B8rVKX6GAAqfnuMDz6WSVV4wSLZguPKSuie398zyJanLkFeq48WPtYtW3e",
  "key17": "5YmH6aSe3z9MBz4rQE464MDnRByTXJYAqEZGk6EFvN9cEDRFwGpnB2Kuo3YfYVnpU4HHzci9pAS6mv2aRFjsy6K6",
  "key18": "a2224fkT3YewZdoX5pTX59LrfXHHWwGKVnPYFxmTpovuAcZJrUDhMxwxH3g62YS4RtYbGr3bkwsfEbsAXD1pvEy",
  "key19": "5jWxvXaMJvPqDqoUS2BcMRXpN4XyYTRFTmsVM9SHNx2TLiGUEYPXCKtpZfeiG8vZnHsvZeAPD6ZMzc3sXCzvhwA",
  "key20": "3nc9DJhtM9hFMhdH7yQqZeeDbd6HfEJkd2vvbZrdW2AQSYibhN4sBkxDxFoMjPyTg9Xpsy4yxPizkcMQRJqGFppD",
  "key21": "2gPhW6A1RNXhTcEV4PbPFiHUjJ353gtjKk9MiaAqijhaz4x5Kojede1NLxyJgtJY4g7AbeqfG1RyE4Gx1uzm44gA",
  "key22": "5Ftyt9381hajunkfoK6JVWWMfLZK9PZPjfwEkRxEJ6GtLEeoRigSU2Ry8N7j9gMZFxA8kY7waYwfXanrusTs1CeF",
  "key23": "yCYEWCFaCRQuAuDFycZWPY4fJMEWoTirnKPRs8SsikEKmS8ELsB1eDPj52D1sZNkjEHRf13cvZLvTdkjcV1R6TK",
  "key24": "2PoUXX88sp7hWvFDHoDAn56VVHyjpVCxuFQN7c1yJRYBhBsddRbuQbHj3xd3uMEf5aYvVSm26SsMDZK6LMJqsWDy",
  "key25": "2Vvc1ML56vo4aW2xTZJ3e6ewBU5WVqYGtbgMGwScyTpehdUAjt5p1fJfWUT7RngpN8q8FTowXJnYdjejZBULXEHf",
  "key26": "5G6v7rHRRJr2U9x78Vy7vNLfqBB4rgaHtAqMJjM7nnKRY5kST8opDD8dCCaGC8L1hfijPmBbwG6E9okSvs9A9TtE",
  "key27": "2vE5x2xRJGAincck5TK6FkFTjaT9qqcAE8R1SeHJB5e9HUqFvGc6qoP3HKVav41db7zQjdwq87ACbEXu4a9qgCQj",
  "key28": "5jf4AS67ipkMFfvo9pBtSa22sUbsL2v1DLY3pJSAVFZJJjV97TNXX6HZTSJXTQCuRtCJVPErb99NAHRmNqYfWRxY",
  "key29": "4Jo4KYbyAB57CQ4EiXmgPYqaioJDAsFbLADN14fVVEyuYiZJ3nXSKAKaSeYDPQqGfaWxuC9poEapgpTye3fWiADP",
  "key30": "3LSUCu2p1cV4Te3jHwAkxwg9YLtgzxDtszcNumjMsW7yywmfQrb4FdqFTuj9xKT4Q4gsCz9WBdDbbQjE3z9VJReQ",
  "key31": "4K34he7fisRwfPN9A4jwRz7Q5NgdGohPziAAKP654u1h9qHgg1M3h1CUga8V9sm3FQM2kyqHc7pQo1iRe4dFRZca",
  "key32": "3j1gyjqXXvM3cjJfaKZzQPKgeagWZB7PM1o5p4yVSmEBJVx2X2h2t5pas3S19pJUYNdAzxfA46N45SL6Q2PZmVrT",
  "key33": "2MGybquteYVQAbSNCHq98gYphk9ERjcPvzYSFr7pmADvYtkyUFbMXgeeDKFqfryQkrRAqcNJ9cyVs4cRt1yBqFoJ"
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
