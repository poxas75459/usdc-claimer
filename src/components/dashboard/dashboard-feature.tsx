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
    "5CPLaBg8JPkaSUUkqAPv8m5dt3fbuXgaHcBcBeXtWdT5SPHMBAqDELa5zRbfmcDnMx1aK1Px565LiihxJAGt8LQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "468vpDUV7zeJCdBoqnL2u8YGETsdZUQySNXoQhF6BxhfLjUvVjMPytt9HNmDU5bFxgmBJ6jL3Cs2eTGu14pham2Q",
  "key1": "2mXHrfbcos6fkhdKU7g2hCZu7eJrXufZoCV3KHQVaTZiAtHDNQaFttBXmQ5sRVJU6yaKN6wXwBkApvZRY2WK5qFZ",
  "key2": "2cEQVo75oRYn6CKXftd9bMy9JC3yDraWD27hG7XwciwCFm3ccbm7K19XHhzoAuRfE7jXdyPfakbwCMvqsLG3UvSE",
  "key3": "2YcWQAiXArMeSRZyjyPTVHBvwxMtawxHMvBVmhaCq1qSdHCDQPm2W1oUHyxqNm3HVvgPjSPC3Z2n3x1XUswFSqVu",
  "key4": "5BHYXpzqvJ8ybez86CyopjyuNUXVkeG7tazwcdMk2vSPK7TQwC2SjEgP2YuB5Qdob5TkFktgUHTR4MLyf81aYQPT",
  "key5": "srjvBkFm1Bh9M3QJUduaR7vtZZPJpBGfa2YYQs2h582fw9BUts3gkdzQfqu5CEAWc46mBE89nZFQnumLVzG6zjh",
  "key6": "5xG9sSBE2P74N6mXS76rYRjHBD9sE4r5Ztyq2DCBPSafeb3gBANKPuC1bSqMhC7e3RR6gDP2K7djZgGLCCZNZjML",
  "key7": "ZBag6hchMUV4nhTqebeY1UJr5x3amFkBXTHv5Gr6R1pMzegDpsWyqzRpMcmQymcfv3pJj2f5vyZBa9V7KMBT2x6",
  "key8": "5FWrxfk5c8Vbu8EUFU6QbMnr5nJ1qMapVzekbQt5XobyqJoXPMiTWfycoRFWHsA6fvVAHtsw5KfC1ANnX6PGBTgQ",
  "key9": "pVt3r9QAZPX2maMG3Ycg5CYD8xMY4XXdBHNUoKd9YearbSLng6PN7r2qHzQnQbgoYaPD3bVqmfrvv4kJoVH6SHg",
  "key10": "3Tk4qsWFRPeqJFEGsqF2F2dSZ14kpEyf2X5DoZ89sC5zGBcrf53p7kwCeLZJPBoXhurEsTjGAj2EHtd3ZJw5u8RY",
  "key11": "25AVPXsmCXn8FcwXMwQ5h4xjH3tuRvdijEXBo5Ei4pmYwDbfDmKkzbdMEgRPCrrQnakAGeM9Ui9AdeTza8rz1Paj",
  "key12": "ffGiscbCniwK2GCAjFhQyERRHJZ3vyyfSz8dfQpiNPgKiHT7JPZiLGAjpYPseiFzvEzQ61mAbDZcKV87R5mLWSP",
  "key13": "8JL7pBgRQTED2K6E55TN7Yf475KuM192t5B8b3Kp22AwqB3dsxbHrQ55sFNPnJC2qds4P4ssmniHiq6HQt3Ef2S",
  "key14": "4mkC3WK8G7m9xar8koUJaEByEYLDE88xSWaUhTwfiWUCkvjDk1kq9HnN6z8jnASKh1WAzFiror5GrPM2HdpVDJdV",
  "key15": "5no5okApzFyBQcuNz8XRBiyfg9WLRYknwyQXxW7CscBi6z2KqXbbRKd92MLoo3vt7pzWEUqemLoCFn5aqrvMy9JT",
  "key16": "5fGL1gkQvJQix9H2k4udXWTg1f4vyrUZ8N2N9NxtGCYTyCRNrPPae7iUBEvTZRLwrUs8EBprhtS6YoC1UQuN4BZG",
  "key17": "3JvVbbu5Rjo8bKRZz2853ftwrJugpHgwfrXMsGhNE8ntoashqD8P8fyufnrZweR8jqrLb9ioch1ghu7jHg5xWTLw",
  "key18": "W7GygP7udXX3XhckZjVPtHjnYG5iMkvhKtgpAsqSwTd2c2wigpY5GCAeZwxgKBgagFcJGBtpkyrtsdW62ZqG2MF",
  "key19": "5FswYT77tU71CJNjk4v7Hn5TuB1VB3YTkyianiQpKw3CP25WpFQnfCXscxzSxs9XNjXJGXxB1ycN3n1UVPtC4nx7",
  "key20": "5vVnzwzpzks42XYmuc7M2PKWMSSxAvnRWo1cWTedYAWQ7P9CKMtrUyUHnv48swYPjF84ZrW3tViFEj7YYAoqiHmy",
  "key21": "3JozbPQqg1BcL9d9rFrHVns4XbBGAeRG8zDCLCqYaj9JenDQ4rAVygdPRAgiYPRSyoHojUoqu56NvFBr9e7TwcG7",
  "key22": "4r4YSpdq1c2tJ1QrS9Bhv3TEVDJHSssi1yzU1Pgu34Umcn94zio5pXPfDr5uFKpdH9eW22v1YayYNMCtmu19zakC",
  "key23": "38PyLHEhyKLzu1YxjVWHkJawXQmqhVe4QvuUgTAwJmX3kHnEdpisH8R6UiJbWYtEybvxmHgjyh5XDTuEw2mA6YWj",
  "key24": "63BYb7yHxuokKAQpSgtvaht6XqaDWtBK5WneMijVj5BjLWW5ZkRjxmoCDopujBsNY7rr68wcbnbmHsC2viU8wcE9",
  "key25": "4TDXd2DbUuLW23aoHjvBe7rSnc44kk3Xc1Wx6y3ifv59ykDdybfkHKTVsMxpWEupNe24nTqr63rJxgXZTxx4M2a",
  "key26": "48iejjnfFsmDnWZM2GWDyeU88PGKwdfvgbUdY1XdiN5pT2HKxGSY62UT5Z8AgLmVaxLePReHQXVpZRkHScvczZFw",
  "key27": "3vUZXirxFF9z5g5dpqLzJsEzwQ4fTn6prB5h2V4GqdZnthAHxt4NG3uHfFtGnVMZZCDw91EAQm8zxoephqp2hpc",
  "key28": "4YZLMXUZVbi9uUvxaMT52iJu6RrbwyNoXcYwXJXtAj45EBbYsmTFiPWQScqnMnPaWoRohTF5HP7UJoCn69cW3Lq6",
  "key29": "L17fSdXvo7j43YPs6q5a4sGCdvsPCoGehSbj8ZWZPHj3HKnkGScdWUGSzxS47dieayALeW9SytpcFvYJdCpzacx",
  "key30": "2k7tpNjceb5DWgAqKUg6v3oVEnKjM3eFJCKCmPchrUz2d2xdQ8nV21bLFrTn5YLVx2Lg5o9TD8v5JcwiwQjQNp5p",
  "key31": "3YYBNonindyYsxqtZo9eekaqVKwjn1q9ZaN14essFNadc3o7GrStamM4pNKKqUZpryd3Zarj63RC3uuodFujstWc",
  "key32": "5SoeBAd8vUrLTpSsBhLJYnnvPd1zBw9Sv22mbQdt49kdxF9Gh1kzce14sfjb3eQSETTXMqQ3uL94A59bPjxX2T6p",
  "key33": "5Fb6xSXZP1p9jhEyUHE8bh5PSQwK8jnEsH6zYYe8EvaWZ1TA4qKxw7RyZwx9GpYpMTSJc3ZwmBhDNfNex6KMpGTq",
  "key34": "35AsfhTY3rwj9aCUS2oKbjwiTfVF5cy6R1ntwKDiC3inf8usxued4X6xPYzHvYaz6QSYoRUUGgXk14inhCJSUa6r",
  "key35": "5mConATMsqHptdCHNeaoa3q582pa5sG3GbbyvDwfwwZ59uhHQzorCehfFpLQ72Sn4EA2sALMu16x4yFRwmmEDdjc",
  "key36": "4HZSEUeb2KGyHzvKM6iA4T5ukW9yiCJq4R9cK9BSFXDGo5W93fuDXwaZ63dWA3WhNXB8KQGmN9zVVToANjt8EUBW",
  "key37": "3Z4sPdD9Fw5RyVEWQHR7bDGUNoMxS9PhQTeG7NmfEAjQuf9t2Aw7h8twuE5Hq3xdM5zHeR3tUcvTfHk6N7faUqPu",
  "key38": "2NXHfUGajax2WQbz5KE3QSfze5v7mN6QNouRey8PTBNV2V4fZtAq1yC56wy5CmHh1JCFswkCTKN5couUgQF3cWgJ",
  "key39": "2Lo6DJE7Qi1P2cgpvHoMDNZvGHssKjbrZH648dgXAiY5676xXquM9SjKBWrwcejAtd2iHJw88ymMiuDaEhQLZuJc"
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
