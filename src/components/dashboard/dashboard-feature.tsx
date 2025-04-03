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
    "4wFw6yTcMbHpDVyNZHPYTPZvNEDjkba24mj9XFd54LTLq29cNsShM2YtYPstTSXiPqFUq5XLYiekaQg1cJQaapYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uH95K6wfyLNCPZ1nHytmQH5bLW5U9FdqDs1GvB4dpn1nbQMTnSRgMikG9umb9H4LeR5uGWobSmTiiv9knhQYdJF",
  "key1": "5tiG9aqFahB4ympVBwebJsCgD8xzirrgWuggt5HrpgDYHqgNQa8wyW9QwmKbgb29tirpVN889UUrcvxXwKZe13MK",
  "key2": "4SqvDqCVWKuzBVWqL11pbv4Lu3gMzfoZZdQyaFBLAqDTmZ42M9557utZZLHQQbqLnauT7Nx9r5xUbbKqhKuFHfFP",
  "key3": "2BheqbufrgJKH13WsLJmyLiB9YCsRhnNY65YCMNoooqXqH3FxEdNgv9WDSsNZNQ7vzUJcyqsKxBbPHN6k1MCvt2G",
  "key4": "e7WaoQTn6iNvzGm4u8oo9poGN3NkYbHPxJCeKzhtxRBQpEod3ZVaFtN7DLH9dMijtuHu4s8FMEjPvznMpb2VBrB",
  "key5": "5JH32foXd9QP38P93oG3xiyDGWP8Cy5wtmtBbkWMyfr5efoTXx9U8FGmde3BZhnmNuBpGdsZiSui6yJqyffS7aZZ",
  "key6": "A97suTPeaWCmTAybWmrQMRyw9H6LHsuJyFzwDMcF8ABXdVn8rmEncWb6w5aLjw37h5tZi6VwVfGM7u1kjebxXte",
  "key7": "4kHArXQprdXmhD4TRpJwH36bhyQcq6ZVZBFnVfMkZECffGmGSvPCvct6HZxYyGGf7bAfLxDnq2ZPjymRA6PyCJrv",
  "key8": "autfFcrBnJyvr2DHZp5kCRrHpBnt6LiQjg3HBE9ZdDa13RFq37p2rLMtbKYvs2EuixFSrU4wfizdGMfe7wCrhXw",
  "key9": "2TFm2EihXpqx5BnqeLBZNMjBoHJ1aUxJeUKmHfERRNCr7SEeMTQqxbaRMgx7QCFtzkBw2jHQpzq7JgcNeB63d79J",
  "key10": "2Q9awK8mqyNXcnyh19Lwwz3cih5eCARhW5HYjeBczf9sVCQuR8kZzMEL9hzegXkHeg7VXNAnVhzRFgkjXXtGw4k5",
  "key11": "5nHZFX8Mp8iZF2pfSDfphuh1hW3TdBG9VT7mLC4ve6QhCeECrgYX614HfcLEpUSAZgRcKtApSPJNzo5ukUpunBaa",
  "key12": "2Qb1CtyC3R5yrfof7uV8DZL9mLkY2visqDpi2XmjJkLvmThSPtp5F66LfMXEXYRBKrFye4nZ4GsLK2Zq5E7CtzrA",
  "key13": "5goYJQPn1FdjLiaAKrYtYrhSVgpMyfhzuzYyssxfYwVZb7PEz9V7cZEhfUs9sTTb2m9c8D7asFCTRYc6CXSkkDLk",
  "key14": "2zKwwkDJgZowi5rqjpP7Haefmwx183mrSuDpamzNxH8ZvVnAYnPbVYQi8fmX2nNWNoeMABqsaJ1YtkQt47ajtBvu",
  "key15": "5bPhSjaQ7pasHjMajmzKwKPis1KLMySMvy5RFPonLt2jSQrRERi7Yp31NtwT2gSWNrfbEA3AmqGXtgmroMHWWo2f",
  "key16": "4SGTaYZM7VcJdeq3mopzQ7jXxhfEeNZ7q48LMwj1ekd9zbijkJU8tRub3dmQmcWCV3ZmsBXr99k97AbG3dND92KS",
  "key17": "z7jKgvvhgdzv4A81pKS9HmTie6c5XZjw29Ytfbf655tBeU5qzG2EBNQL6xMsMqpdVqzbPsdUZUeJGkmKMeEWHNw",
  "key18": "3mmXm86VtvGdEav13Thb4Mi7qRQsEFGEgHfaSAinVkjxtWCKvPR6KSNteGiUFGoyw3HsaX7hS38g8f9sTWSv5Toy",
  "key19": "2KxEzWJ3FPQmRi8dfa15mbGaAqnSkLs1mFmXdJfU38j4BPvhoj8CYjqnKLStL2ytxvHpnJczXDr3xEAaKCVcDKWS",
  "key20": "4sQHjnTTzPcsfLtHehwfpeTmDzxdgn2kjh4QnV8Ubt115ECVFnRi3b5FHrPM8xyntPHifAeU6yUwUKpErB9u1yrG",
  "key21": "2MHBXyWm52bmSz1UxBgm1TsQw7ZPuf3M4YTShR2G7jTREMXbcu6NX7xkk56375P5PFRqCVZEUGnVQJZ4UfdDWhzr",
  "key22": "2PY8ubjgNCMvyQ69PTpMKzJbKCW6EFttwyeqdf8ky9eedUykriRt59VNtnNB6r63m4QEcGRPGtLtUwYQ6YU1TfMb",
  "key23": "4ANiyC45XvS9s1agT85jx7PED39DuehHFf8Dx3gbY32BhARbVjbdkVZJcyNryX9KnWDxvHiL7WQtvkRz3qHAq6Km",
  "key24": "61ERRNcqMuGNzUgch8tHGQXoFuef24ngjTV8sju2hFb6F4FAvzwmcs1As7k2m44zE53MpXDXCiq2knqpY1nmCw6",
  "key25": "4uvBrn9aoKniXBq5idicmLb87uuSAB3tyincV6gdcQ8Dr2Yb9wvNhS7cH67STzy1uv3pf7RwS1etyDjcMi5L7iuL",
  "key26": "4KASYoD3MneK1F7NnAGNvw58oiQ8tVP1qBmKqHZben68tRrdSLQLJRyjN61hq5RpfVnv9phEUFZp5KM7vmG5eGg",
  "key27": "33XdpcSSg28yn2awcPGJwu9H5quPe6qrPu9fgKnC9U6hfq9ujUAju1t7csecXzN3RRAYWgoaiNiWToUp5PQPN2ac",
  "key28": "5hg1rL84XRMsAE7Hzq5KubeF4yVYBEGj5zLCBQykk2EXSNkmHgqLQNUGwzqTUc7w3EuQ9VfKepBb6CLGEoELdxYY",
  "key29": "5scfUUgRnyfX2BQ45fUeCHuNoGikoM6UoXPmi5rbEXm2H2NZ45kQGdg23FT8YoJSjw8Dhvv89pq8jLZUHczWY4J2"
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
