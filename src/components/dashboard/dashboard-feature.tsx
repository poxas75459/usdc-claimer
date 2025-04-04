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
    "6ptkzB4UDgVFq9oda61jaqW1dDTXR1L3zcgo1GPZMzc6wqYo6NBNFzF3UiuHQPnmxmLX2kU9pBphm1uGzJS73Sr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sPutd8WsHNM3sLGsvuu8Do7oWHTvBkiMXXs3vrY5k8ihNxg2syZci47XWe9c9VXHhsdAEXLQCjEsg7KVbStba1i",
  "key1": "51rBRfdHtbBs6Dqu58mUCXVA5MLqB1QWjp4B5JGV3o1ymCcYQnCYVT25au2RMt894WQJdcid4uA6YsCZjChfKVFu",
  "key2": "62nNQKqFF2bkTV8bjNf1quepSMQfEo6bPK1Y3wEnwpD4vQD2yMNuLcbTWtCixivk5joRbKbdvdnfAiU1D1sxJLp2",
  "key3": "4FVDEm2UPz3A86UeC18oPARLLXNsKVNJxdbTzSbmvCh2YXj5m84AvEa1TeCQ8Dp5oXQf5kgq7q2NA1AryLRorPio",
  "key4": "29ZuTdG3xioWM3KXKpVYBnU5dqpNHcHGF7NzRecDnimxLpNDWcDQvaScp3HG3PhTiyMzjJKVyWqsnwuRTPk756Gk",
  "key5": "3CrzAMhauPakcfthWe7LsDP7AaTsJK7nMtaDSsKqsSm5MNR2owhY8ZuohL8yDFtNvMHrctAzed5LBZSomzrcWY5a",
  "key6": "4gm7x4Ei9BRUyanEKw5XTnGDBAmPNxU9WF5xZK89ZymfyTp6tWmR8McsKjgzzrrwZf9kgACJs21ywmarhBDFRR4",
  "key7": "5TCtqhGFos5LEcHo6wj4aUwR8vAvc8rU4jvJSRMwdpTzH8UH6ZaPwpQk7QbF5nPHTCMdibQubhYMqqsRyU27xvHT",
  "key8": "2xFfq7yZJXiicqH3pjnZRZK935EWakNkNAqo1uigG4juBiyqxipNh5dVUVLAX5xe5Bb1HeMfhd9TqU8r9b7bkQsd",
  "key9": "3eKdgA55Vjaoj4dbxMugt5YwJ7v1LtXvNYQJwuqHGHdrtyvcNbGwn5x7BathcM632WmzXZYs1duTxdrYRLuHz12c",
  "key10": "2DFCPWgRjhByqUaK7bU8EEfowwoYtwFZn5hHv9Byh33fcRbVL1yK5hbXT9Boc63Ssw47FJoh7E3vncSY6QGgBaPW",
  "key11": "t5HkWcASEyACuEugixTHW85W2PKUBUsp93K3dFJY4FLATcD559E3AaXxB9eQTNu4A2wdqURz3vhUcBtF8bYEwXk",
  "key12": "21bsBDhXPS2szcMurWPjWcCVRv6TyNNvSV2VHTQhVXZzeZ4BkpbZEkKzjFEmb4kRcFEZQ3sB7Wb4VTznD6rAYu1B",
  "key13": "47ehHtJwTsNYMwcRAACRZnrLNBACRaSAK2V7RhftehXmmq8SZuyDJBJaaqpGwLjuu9C7fcwXMPaVmwno7m6jxVyo",
  "key14": "2TCCarkyvRkxaSkabTQLKJ9w5na6H6e3JGKvVURzqMTEU1A4EXHGKFnLEXXhH31xUDPRtyzHpPJdjNHmtrATdY3F",
  "key15": "XAJU8XiEfQdyXaFveduWx1hivHqLehXfKAraWMvqm6mXA6WMqaMDrdq4ztsaGpNEQwqqjMsLRM17een5c9tg4UK",
  "key16": "3xUS8BgNzC6YkKMc61BkoXQWybb2wa1FALj1t6CBxpu84Jv6KAiEhMWkg281shTA4DMjHMX76ZD9LTAV37d9AEeS",
  "key17": "4RSbnMr3GVRpdnMcsmwJPbpaaTjDYjQVdxLGKC2LJrotmbwGgM8Dbs88LWTJerV6wdrnTeYihFQK3BwWVB1ufUXK",
  "key18": "2UCLyXN6SZ3g2J85LtsheZ86QQoBFaSiXx6ztdtoCAgECCN6kPh6rBrXzgMG3EgYKkHVNYap8E83fwd7imhRTLMv",
  "key19": "2J2QMZo2F2Q4aeaLoT9teQ7rGUTdRfjkGGdK7QjnxaeSE6RrpmY2ccrNMEZPvyxrH6dc23e4TKxjUCvMcj649Fmy",
  "key20": "2uZEUhkEWZATxmZrhM5nR76V3PWZbdr5nBrVj1KTCLe42iCRmX54aZDaizPG7wUVhTxzoQ9We78FoQZ9Q7Cjwc6Z",
  "key21": "4N8ZfayWnRufXp4dydc967TrYRPjL3wd2tfTJzen5nGAV4LVSDutAP719ruXb1f6Xhk9RciW9X7qQTzfjmuLRTz3",
  "key22": "3thwpGczGPtUYtv76yWq7nfNAHuKYhd4So5685uraLxhTWShhK5WgnqEwi7GnX4DPU51iJD8NUmPcUfMFTeYAYfu",
  "key23": "2UwMwnFDXAW4jHbqaNFQXNvy5izJHQeLouBKweVkbkrEyJjjboZzw8FD3GpPuy964DBKsxvgi3Pc37ipnf8ibk6b",
  "key24": "2i2L7wPgTmuupTKw8bovj2V9onc6qJ1qbRHFLzBuUA8QVbotqVxAZKftTmjPuobTq3unvzoT2Bq5DAh73BWKrFV7",
  "key25": "3L8WWiGDgJAVNCCBKWLKueYnPQUK6DtghAGPHQgqazcZ9udXwaWA5VSRkqDTuYy44pSRx9dAwEFxPoAKV4Uw7jxb",
  "key26": "67PkzTEaq92kt2hC4BANF6XvxP3e4dTg6oGd5qNGGDiQGmTC4xTqBLUMW6uwXSQuQvBPGpvZ42o7bMb2FEqEopiK"
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
