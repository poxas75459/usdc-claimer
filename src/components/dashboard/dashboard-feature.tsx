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
    "4k7Eq4iJP1oZLXhrLBoi8hdvtVGPFscprz75zVzaT7wuPFB6KLnRZ8foHM8m9spitH1qEtur4R7ug5UjDBb4mMzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DHnxHkpLnZf9hcN3TSsq1gXpg2sDuYc6d3xyBHfvwrFaX7ZpSwUe2fq9bwYf5iZLJbHeDZfKh6RVZVhk6XayG6F",
  "key1": "28swMaZPSC5bxKQBzEv37TTqwiYog8Qf3aLjWkbgVEUokP8UxxJSkeJPXTYKj7RWxWkh6nVTjivKzk9AoWf8cpQh",
  "key2": "3urbu1Yxg8X9bRGAratgRTPzWwUjBj3wxg6nCLon1W8U4QaspeQXJCCqdsFboxavRViGFn7q5GLmpvDTJqkLP4En",
  "key3": "545VEgX9Czmc4EqZTQJy6PdonnfnEdgaU1J3qxipM8MH7pBA8qpDaNjkpSwgNkHStGFNLohXutbDFHC4EyGtQeuC",
  "key4": "2BxHNnZuu7rLRxUknudrTVvxaSfw4YCH6TNiZPmSRsuf2F6kG5mUFBjJjE9i6MW67dsLM86x7QvhAkVB2Kgt3dWM",
  "key5": "3kJwbGb936gLngNho3HREszq1spQvQr6viD3emzSGQu3E2yt1ao1kxY8gwwMqDGyX63iRkhnMcpQy6mQTcGBSsz2",
  "key6": "3QnHb3vrtv6e1f6C5t9PWF75sniP8f8CZeV816bEAqi1jdvUbBtgPC3rzi7feXveLJC3P56FsxVEM2TtQp7CtSPA",
  "key7": "2vTQRZDyZieVJiDHRrJaCPtjyjNLujbdKqLgU35HcrQ2teK8cDvHyopnunzRzbb2sCfqKSdcwrwP9pzCbdEtfpJ4",
  "key8": "3KeSXZY9kwG1uZjR2K5Uu9X1t82RVDSyAwtpuALjtsY6yFvHkeyDYst8f8Wn1CBEK8T9MDM17Bio1mnKDnMuHYyn",
  "key9": "4Wdv29PqxPGkXpEWTKLTTZrfPDmBG8fYw6HcSsMdNhssEXtujQvGwtk1oyfqA4ptQgo1pQbtrciEGYB6p1fGZRAq",
  "key10": "w9vBb4xBDvP63WkUWgAkyEW1sYtmcWKwHhjBzXW6KWZ2iLNSyrKKcHowsRTJNZLjpUjzAD1TGpdUKCgtbCkgYmm",
  "key11": "2p1Q7mPfFveKqQq5Lz8GQ1kyUrse1jf6JT25YhwJB4q219LbjNAnKLBAt5y5LsSfkZzpRRAgUedrh2scECyeew8D",
  "key12": "42pMVJwKzHrTpDM3frLYzNHxyMcpQ5QQ3MmdpGrQZqJ7XXZCFzPp9igvmjFEtSAzr5HV9acbGwyAERuD41fQwXgG",
  "key13": "5rtvTX8bn7aWxEtKoDTUP1HzHfZ9DDtNveNBK3TMUMbTutSisDkV97cxxoqf1KMQ6YWZXpLsMBscxcoFPAuhc9Ut",
  "key14": "39HbADQF7tnHcfkL11GvLKQpHXyiqHnTo4h7GJxbucaEATeutnPWJvk7MSpF95t6dE1BqB96p5K5bmQtaNJtrf4X",
  "key15": "5tKHs6BmEDoCyDJZrq2x9gRkkRgdmvddtNEZcAXxKSJ1TM7na2BVjrurH4JphFniQ1G55DF93dcZmjXvuHCNd9VH",
  "key16": "2Z9334ehvC9jcu9HjQcFjK3aRxyeKzmxFQKrhkwaBkbdcDNjvDx8d9qP4A93v3akARaY5SEci3wYucsVYmAqamFF",
  "key17": "2oD9pw2t6bc9dPLGYz719a74QuidgCCb8XG8o8G6qkmgQJspx96iKaw1hVZ9Y4BgaN1z6awurvJtHT48b2Z6L8eM",
  "key18": "2gxDDZBTcVa4Yr4tVCtpAbwaMxkNf8m3ENeWxDbhrHvjZaSYtFxm11BQY6WhPexrwhYBDvYcdXP6Xjo5A6STD4Dy",
  "key19": "3wLEsj1m8fA8ZP5m3LKm4XK3yno4obALFheXK3Gma4GPVjBbFmgdxcvfR1S6H5QTGKd7NKNM5wqURCK2RqhM12XQ",
  "key20": "3pXcxQ6tFAL41EzkckcudAyMBwdJPDUZF8bH1JuEmgaEE9A7hRs4DBukckCrJAiPFGCBeT3bCoP7oaVvHxVUokFx",
  "key21": "3rSbb9BJkSaWseQSmVx34hag7YPRiY6GEhxrMaiFy5MXnkK7aHUfcyHyZsqcSHDkjs3QrCTub6SknWXSHmWy62zV",
  "key22": "3giPYR19rLdZT1iBEDjWNXRkSbgCoteuJFHErKntPPLJc2oCgEqgctAXgM6NEymfmLAPkMEqoPVBXiTENKvWdwps",
  "key23": "42V5mrWjGbWv5vWHNggcok3pjfKucPfvksgSFNUJh5ET1jeS8mwXmNnJYCc4ZDW46YgwQTFgN9KDXrZNNRBvA42m",
  "key24": "2Axp2W4gBwo18FfgjiriEbxTN19VQxHjTZDAGK8PLDkUzbfenmfD6rxTfZ7ncx5gDx61b68TTMokkoAGXCxKijT8",
  "key25": "3MkMbH2DeRRMinz3jjRgt4yDwM8msu3JaZTKVxLXqXGN7ZNT9864Axov6mT5KDhGAk3H1b94iSZzRxWHuQCpBfqd"
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
