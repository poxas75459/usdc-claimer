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
    "5KKWXtthY7vw4XVZwhtMZ7kAUs91p8oUd5XYhFwe65hpMMYXwPp3Wjh2JBjYTXsUdGeEzPvYLiY6h4Jza4LGx1hC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66h5TFoXfHzcPp1Ps64hjjMAZj6ZWUnS1Lvc7CJk6akecAW9Tcdcat71AWppmHcBop1Ya89zjYr4bnpFq7SF9uFH",
  "key1": "3wqSV4Si3BvykVydd47uEY3v2L99QfGy1aTkD9pt8zDeAtEr5HRCgovRez1zeceTwamHHz3dnG4mV4VJEPH9X68s",
  "key2": "55fokmknBeRLNKCw2RPdkb2HHu56oDM1UBK53vLpjyCnZ42DEPzqLX4F4aone4qmkmKRLMr3G59Mc6Hxo5HPSoMi",
  "key3": "4MVKUyBaMwA3Aq3NpeHzqtwuJJtRWvtcsTWMbMiQP3bA2GiTqTk4R3j7dHfGNwnMFUU1hVKqCFDSrvAGaBRS3eQ",
  "key4": "3xCzRgManJwWfqBpyeR5zqAMEqQGpQ6piqJXAdJYYh6eJ4FbVwcG143XmoXLGTkwrb5dxNYToNQ6uYaBGV8KdVi9",
  "key5": "5s7WUHbeMVUsbaSajDS7zD8RQ5n36fBGkc6Upv4ak8eJcT2qio8jjWnSiqgij8h1hno7WomWCXos61pF5nwj9Lrx",
  "key6": "NBrER5sy82UQmWh5wk6bRVAv1xj6XWSCuPgxMz93wXuMqxZ54vWwvcFN7CHEBDW29stnFFJ5AbdN3yvkMsth6Zz",
  "key7": "396fzE7TMbLx5dq5e1RBjy3Y4ahiFg5WMeZZB2LJ68v8ip9xcQLC4kkicPAYq8XULQS4MzgAFNnj95pqHkvE3mQN",
  "key8": "2rFhhDWo4uPCBxbHBdUoQ6HGZ3haeLmKurpyTmcVqrssBu7wk9pZAUBuTfVFr6wBbkCmV8aDDeiYv5RvkDBQRgL4",
  "key9": "XgY3G79QcPazQsWx5SEm47Ycs6xxBGT2PQeNQgizf7wCEJSNwvzv1TAeoMJhujszornC4C5bfeHNcujtTEUWqzd",
  "key10": "4FVfuq5Z6qWiceWjkMtmKfcg77ANFDdd7CDkZRgKUNWX5QCiCLzFdPf2jQQenBymqUc6LYGhqtWWYjc2qH9CR96N",
  "key11": "5L4CcE12wkuWJECULUCtCi2VCiEisK7th8DtWYrvHDJDrP3FWayPzu4SFhgAxJSCB2PSjztKz8hkwUv1eBvPf6je",
  "key12": "n2LVNLPbZoba1ekosBSUpqjogC5bm3TX55LtSPSLtgBvKpEicoiy9htZYVTYPm3EC9hArmbajRJohymdf1MPjYR",
  "key13": "2M4vZ5S3vJRN8zwBRY7ek8Dx4FKtrTspjEFA8jGqbQ2uRX7ZDDQRWYmYWHpXhohv4f1yQFG4Znn3PT9T2UMUTV5Q",
  "key14": "22ZJAcbmS4HefFtFVafe3XyKECtzxtb2Kw4MRy8M9pB8SpcDWqggf6mrkwqfAeCabFNnXMxewAwDyUcxRqKNSBpu",
  "key15": "BAHHmrKTVsm6Yv2pmUPP2tgiBsjtZ6oimagEF8UmfPao84j3ierkrBSLJ8raCgHmALqrZkZ5JVGoeR9LJLdfsEB",
  "key16": "seoQSRHdk2uh2UYjYiqdbPDQW1rxQKn6XSBk6MyiLKgAEV4344dn5hjPzy6MADbJHmnh8GkirwKFNK4nEDwUADx",
  "key17": "5js4r4jN1jXwdJCbcVUQk7EmGSV7etsBTbLosZdcXAuAh3rLuEaC9fUMnSoeHY2qZoSKB995cr42CaQaD4ccSQ4",
  "key18": "2kc3r65tZ9MA61rXzkNeGoqVWmWwACDZmjH2AH3joPeMQ48BgzutgXHuxX3K5xneLyTUJkammSj6FQz4J8yGM9fD",
  "key19": "44atExJAep2sGeLdVqg34W5cMcoj9FNmSk7LEAB4X8np6Zm1C9vDagjt14RzRsRp4v59agSLTVELMJqDVnWEbjGg",
  "key20": "4rEZ7G2Km3hnZzRZ7G7A9LZiNU6eMGna8L1Qg6AFV1g9yTszQ6jsG63ULaJFpGVDweFLXAQjbcDhALHzhd5girQJ",
  "key21": "5mEi4J99UEYqiN5C97YR3Qv4ZRUh9e7cquAZSCgogte5VZZG1nuPHJtr1ezHPogdxKoTLwk3epe2stqJMXv4hpvR",
  "key22": "3YtFKntioKmtxm3C8x6AfRL6euWr365TgonN8fHdnzgiJcT7DkjzLhQKfu6n9wVTLGaAGq6io6s4QewwxNAsV671",
  "key23": "63BYyQR5i7RNuUb1QuXWde22qSrkc2d5R5t2v8Tr9H1e1ZTESLHdLvsPV2db4wWzTGYJHTeax8yGh5uVx3WZcfy5",
  "key24": "5AHh1Hp4ESwqMWg3wW5g9CTSGXaWZVgmSKeY6NixBongUb4WbLYvy28aLhEPWdfPiWVoUdy6qoeafrrM5RXnJHBk",
  "key25": "NzZScqjarvQDPdtHRj7ZgxmTo2mvD8hrgFPQr8NjHo7WjSPe55aM836RnvbyFcEcfYTjyeqv9YdEWHaSg9YW5zJ",
  "key26": "554ToVrGU53w9fRWdxCTcTJGfkxowEZX1tABrfqeAFT1dB9KT4Xwfh65gXJWhVkkBcUsXsRUdhBmGmV4FkkrAEs6",
  "key27": "4crKkH38vAvFefSAHke2dg2nJy7hMZoLWrZVELZ8FeL9N9pfFkBNaKdo1nTkboTpL7LAJiRf3SePWTpk5wVKFy8J",
  "key28": "9khHZ5BEgfScFzUQ4TJd4qzwiJJHEhsQBiTMqk2CYJbEknJrN4sTo5NQoUjt4sA7L5iQ7VsvRf8Es77Yi9fSHnS",
  "key29": "3JqHEdmtFcKv25whmfhfmEdoNhKtrBgT8QffmyQW8U26s6yEb1XBLJz9L64dUK1pr6REuWf9ApGDCYNAaAyA4RgD",
  "key30": "3onyQjCvbSZu1cYMb91XrQ393YYPLD39dDR8NZXtbPeuKPDLvECSTPb9LgXpkd9hv4wuq3B5LktzaEYE36y6VoR4"
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
