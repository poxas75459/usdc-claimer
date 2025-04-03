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
    "26hcJB1uWgUUJAwBZjrWimnHHQVQNbi2kgw1WAbEWknrG83cg6D9aED7RTiiTiJrUgjKijtCQEwyXMmxWhhqdVHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22HTtjRchjDtWJyXuyFTd29hBBYVHDFzi6yBSdmmEhBG7Uzi1q3AsvmTB5srKt6wnX5Yfoajs8DJ2bqkG7KLsUM3",
  "key1": "4rQqo5AUK3wXKem8bAWSVxZWjrVFMcnt72EgWUGkTmvwo1HMF8MVK352y97jo54ZvUBvJfst6tGibZppWpBCvGjQ",
  "key2": "5E5BLytoKguwNGM5gVsUw6soQDk17h1G5mBHBqofgA9JUsMD6CyRHfTxhHjcFVtHpE6GrsF4DfcQPkUTJKgyiUDg",
  "key3": "25iMKv6ijiNjbGc7m3mqwFUrAvnVp1oxutU7EpdSFXAfiCYTCyuUoD6cdVgDGRECVEPzdy2NXCf3hKYQtZRPqJW9",
  "key4": "4hKzbHsxfhiT5DJPtP9WJZUR9H65NzMyRJiW9dmaY1YeuBUrFo78H1da5UXkn1e7N9u5Deqe7Lqm6VBjug4TwFKp",
  "key5": "4WydTmXetU1MSeQjaM27tYCxy49HPGxjDZUaXq1hK8JN1jBUF23nzwHp77Hs5F69peCR2BiCZNvLUb53V7ANN3m8",
  "key6": "UzTT8scCGYqEsCcqn7QcfM534ECycvKDK6xswMeK7w93rr8BScjUtaXE3zmrcxLRDeX3NZGFicRdpL7n6pWEnaL",
  "key7": "46zDRJ7DQTSDQAXLdX4oBuwkAmKDUM6xdumLyvH798NZ2N3hfDbA4NUusAUY3wu5bmPEVpAoAzJKmdypdRur4cow",
  "key8": "5e6khLgtywUBeBNRpZZSp9ri4pcu3icZuU7gWUvs28QzaEQcEj54YUNCrfVbxFM4Nk9DCGQBYvt3UyFAfkvTQsLx",
  "key9": "YsaVmF4xSJqXxW9SEMue5p2ZUV3VbKK9BWakeJw17sKLaAcXKLzEmidNoCdhpKUBF5RxZV7TiBuAxQgJmm7MHtR",
  "key10": "4BK91X2fBZAZQgaNXUyZ5j94ykJLqhrZp5edWtjFCmWrijystHJu3iXxJQGuYadTqg5bTkf4yKRqz9BDR5kx19Dz",
  "key11": "3gkkoLnUS7XBnepYunme2HVw6dK6syUKmVmDM2GmU1w4HpNzqZfenfpH6jbHm2grLWyMFzLj1zjqiqj7yRc9tCa8",
  "key12": "2oZBo5GjrEVecBHf4V7NHZuQoigZLdLiDdUXVqEjQNG375PH3Rovr56LhBH7Peh8bnNH9s1XCSQC8BDPmiBiSQnM",
  "key13": "4GHn9qp5vpMe1vVEwcyHJJbJSvGWtD2H4GQk1mMAD3iKmfgnnr8yrEAUftua9z3UaBmVL9xDHaerrv7UbjVJiguU",
  "key14": "4uSxju84Czd8Cv5nPtoL8A2d4XkYQp3HB3yG91tUmFbwQ3GPgSZAnbsY86A8qxdVtMUgPLYQmjH2hNLi35YFxuGn",
  "key15": "s77Dbc5CUV2TswRCpmUXgpLQ2rAwWfGW73AVZq1AtYmrBPaVbrmmBwPdnPj6ijfMFNcjA9SoMznXpvXaQjKspXo",
  "key16": "5GT1RhjGTX6mNjSaqytbM7SRM9XeLGvRvJFMdniJGeqKD5yzUymV6xVNujJ11KiCYckmujeU5LQSvHaf7i42y6jL",
  "key17": "2ZM7Gd5ufBzto9QnFGpVpP8sLF1Rce1ZXTF2QBzAxZYT876A3ho7QTyWsACm8Yu8TXsSBtdVZYS6d8Cx5g6PgpKQ",
  "key18": "TUrbXkvq3tZLevN6Q3uQU7cgU3jLFyoDdVNT3GpLHVUadmpevxNHWvVgKcFzgUrqCfzAonbQ3pLQm4hZJm8P8wz",
  "key19": "2uZYpSaSH3mAt6QLgUvgjEuGwTqBR8yiXWNc6WbooWf66jMdD4EcEtnBhiNk52ZHTkWhiwzZjB2ZsuGjzLLvtzm4",
  "key20": "4unoPWaY5PGUvScHXAKrbP2nuwt9aywdnnR7t6PuzswnC1b2ggtKdu9Rc9pwH3Sq2iGLVv7AEdhTKAGutF35FAta",
  "key21": "4dYAaJ5kAErXeszQnLLHxNSoCVqzm9JV77z3jt6zvicyMm5tM9zLUqTZrzUCFo2Nv1pJKVAu6oHk9QJ9kzeLVQbM",
  "key22": "4FPSSSSAvppz1XfqvZutHCjKC9QQf1jvmbBJpwXPsWYBRqWYE4AJDpYUooSQ53YtTtxLqTxfTk9fcGSDf2ZyEg6q",
  "key23": "3jAcfekjgmmenQbJkf51odrdxKMVi7LHTwrdgREkPiQdW41XSAP1D5rZSmgoYiT5EeNntSc5wAAz2Xhm831vq3C6",
  "key24": "3QqrfXCgaLn3ig9dLXqrsLyBvpQpmWXqq6PpTK9DQS3HxmY7jMqXGEzVuYeNGsbAcfdySLgCT2DwGeSwtCR4XYFK",
  "key25": "5AQvYAhiYYeXndSKdqtJuXrEtJ9qiHvcwT2f5jNg52zJnrJFTRkGRBccTU9Y3UiwmPtYUj3unc9FNtB7ERQuNPbj",
  "key26": "4avPhdqo2LeHkY54CbNKBn6bUfUgWo7gh5dvMLhBndWz6SWqYetz8enjE9faMNdQsczqiK6pjLeWf5B4b8pZVP4Q",
  "key27": "5vex8gV8aZDdnBfiwsuDxNJbYxZ4PeJCQzJAfgyhfcK6EMSbz2aQe6pfkntdsZ6gKaj6M75KXzfCT2e3NzYqt4Tp",
  "key28": "icXtAmxJVEZfGYy6xXFRBa9crr6K6H4KTmzXLPAV1DbUP1Q7Z1CWYxBUhLHoQQfME7gWt4nbfFuNiZLPQomnoKD",
  "key29": "3Tog1pGSXjZGqDzdyWFDnhpjNbM8RvxCKxfgheK9ZpbKxCDi4EZeZKYK5JoExNdUJnycUBdW2rEexgcv8SBXi4Kq",
  "key30": "2AWnRjn6NQVFGDSTYPLqiCaEYbbJtDQBU7yMJasT7GKdC52NGpwYKH9WjD9cBcybcPhXEWmVgKfXbG65s68fR2AP",
  "key31": "4uQXiZuRqRK15q3gbryk3CHvppgyNbAAbcddsWrp4ihE846YbZj72Cc2KxHsEYCwUNVBwN9T2157LwGHd1mrgac7",
  "key32": "3fAYvem6YusvtgvcpdhKB939aRAEgiBjiw7gmWCWwQ5AzPkNXD9XMBTQdQ4zpVXdDBKqJeDz5Q5AP4vWS8AAUoZc",
  "key33": "4Wvr6Gts8BgK6H1bH1WNPmj2pfZS5xT5rxjZ2wMiVGb3uamUiF895j54VqoQwzRDi5n4ihpZTWHMmjrwBQM3oFgb",
  "key34": "oTvGmxVHv2fmXvnBMk3wJiR1KjN9eGnV2zS5qN6KvJyhpYBRNsjapSQx1R4CdBYDL7ZL8qVXhAr4qLCaS28fu2b",
  "key35": "287oSmw928cQJJTF2ro4XmbVmLvHQAwSHtH6ngff8K7LY9ftqXtLdyQwkLVHXhUHWGLDXeyknf33P4BTHZrEE6ns",
  "key36": "5sQwueAWXugiSVdr369XAoAvMheKaNiWZ4RdTxsuqDViPx3UF1Wo7Pp44SDkDJ2GguPAuEukqvQZCiK2eDMKsNiF",
  "key37": "27Y5brPwBS5LdEqWUeGe1iPC2Apgjq8UxD9rEqU8t3iCDU8qSh11EmNwUASqBAHuKbpm8FPMKC97UF5n3nFQnmop",
  "key38": "25cS1JkE5y8qM4xL1SX1mamW72HQ176zD86xqyfBFWEpqCQyWeg8bMjFKw5N4VDmU7paJZ2xVtRJN9az9HKbq9Kz",
  "key39": "3foPnTbUt3x9RUcxhSe282FbHizK6A2M3KQPCE46kQ1actjaWiuqyfbU78zTmP86jrtJGhupJ3LUrWBCDvCr5nAq",
  "key40": "2H1NtCXFs63TQX4KC1DCXNkZfhywbeEFWMJX53v73NaSUBcQ7wMzD2EgFMJZ24914oLVAZEPUU1sTzvSqPBt3QUB",
  "key41": "5TLcHLMoXeQxAFz4KbasZ7irHuokjUY2MKksUiu2Yrfs2Vpd5KtKA7ZiSyrNk9Bbvvz4CDUCa7sHFgU5SF9P53ZM",
  "key42": "33JSjojYykySpPbAhXiZncjSyTafJurMzxRPYtbra1KboHHkyCNtt3wGzqTuN7MvZ6zEGno4W7Ff8sD7QmKA3qwU",
  "key43": "3gRKU6RAjFZ1cFcnAX3busJCGnVVWZFtZzUnAAU5KhGQvjDaGxANgj7QcfsqmZEyxDMD5fRfiwXkZuaxiuRkAaDs"
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
