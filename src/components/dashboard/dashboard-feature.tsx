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
    "4yrYxa8hWewKsbxcPwx4kZ3DNTHc3ZqmN9a3HkpgDQ6pucefevfW1hiFgNAcNYpoWLZB41W7GsgbNMn1NrLSPwi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GXTHNPD9GLZ5jZMsPxafeR9NHfpDKor22ffLckTaGkJANM8L1MGsTNqf2LvhSCMDQksn6k9SAoczpy8CGAA6R4G",
  "key1": "2damXQ2jF5jcJY7uaDde7E7TiTzFLwuSgHee5zWsqUnEyWVewEHstW8tLV4jE2zf95hUYPC38fcEDmei2yqXQPJC",
  "key2": "hnmChS3XtNyycgkAnsCznaPvA3iqTk1VpvwixsRfrFu3aunAt9PUGFxhv91eHtJyisnnZHVMepedmUf3NqPXACc",
  "key3": "3ey1hWAN8EjTm9cF3rwi2at9JKNJ1bb6uBNFz7qfQQjZVoxmZh4BnqkYs4eJRtXfbNSXuw2KXEWgZt2JPMCsL4VV",
  "key4": "yog2y2RibwX8dc6gGwccFvhCdQ5v8ui4GJXexrqr28gwHU7xdbZCyPWrkht2sd5HmVXjNUT43zFe1tJRfchRoEu",
  "key5": "5i5MG3cgd9wwxTSa2fbgkJNdQu4wA6Rjs9nMwapNuewhqLyM8SVMHER4rLX3Sff4CHENkHwHN31r2vQiJSqSpkQ9",
  "key6": "3xDgo5K4UfsbjxWNYUBmWVgHrJ6svpqvNjJsYBGpah2Z379SSXARLXLtdgW8KDDbiwMTJmixSFEMStTZffQ7157m",
  "key7": "MfnWVsFkNFHfvdwQ2P9PtyMQwA9AZNndt9CxbAazzhVqi27sBfXqpCCdFosoLs8Q168bAfVAMR6LW13qqcKGQe9",
  "key8": "2ZXs1EUmdVE6KXG3L2TMyqZhA6dY9wXDZTDpJ8hKBbYaxvcuyTeZaHdSGR6ypzKkEdjRXModYBHGmzoHk7tUyMAy",
  "key9": "S21fv9SXBcwiZbgjBeqSR1D54ffNhpBKgA2QCQawXmk5bVGzFvpMixFeWkEC5uV7kbG9q96viStP2jNEJ2MbsfQ",
  "key10": "2PyDEMzEyMhz8HHvTBx2oPCUd9burH9Ey2SRyP8RTrBDGtQaAVgKpjZnS6z9StRtTn9iBmTS3Qw2SDrsz2rfyxUA",
  "key11": "3QhvtAhHdYtcerPncXho3xTpcPM3m2Wqq73tB9vJdMLfnnsghBpCP6o99gPWjT6k4U91yhw8EWgtzLzmJWqLpPxi",
  "key12": "4ThBwj7uPkkfDF4yohVmQx87C1UjBJVp8ui2peo7xnGnxV4Amg52HjXtESoUGQrZ3L6uUL8oLnsAbTVMiBnn31Wz",
  "key13": "3iEm7CpQzsmRF5rAcJ4bfKFAm4t2bg2UxG4QbmtW2uAcq8VKZqbL53tRZTuYFbBQw241LyPwDSHYWZeWjn3s8tqY",
  "key14": "3EKXyHbJLzjyQJ5R6Ftzf2EgDqwWfnj6qw3gkRLvcHu1ctr9KWhfMJAUSRGJMfVjtrDWQikJSpYXZzvz3gM4ZGeJ",
  "key15": "zMmPU1yUATiQRvVi3Z1zxsEPHYsc3F5AY14e1gKpGGTAjuEknKHUkkgB26iFnr78ZGcxzRxYG5gR1mxeRZBDsQ4",
  "key16": "5vh54jmyNzfkBoJkpZ8qWsvJhrq6meghWNnkmpMc9uR3T39v3Ghr48k44W7vzD4pWRdbVRi8SXdkHXoBBLyTSxHk",
  "key17": "h1TgAqn7oarZrnizdiQXaTk8uCJ9sPPGDtnUnhRfF8jaqqqwGv8XazGGhiWkaJNz58ZxcxSqfq1LZdzMZ4wDis8",
  "key18": "3tw72nYCHZZMMmxcPzrsNbTUWCVhWZsJ8iCpv6cBvw3D9s3HtTzFjheJiTTwfL2HESqoG5jovbYWwXkMDX8pdGyy",
  "key19": "4FTMLtd6TMay3ShHSxj76Ga6SBRctMmwP7AiQnYMzXWqysupBGM2PAkJZBJZfM1e1YVm7n8axefQyxW8BCdhgcvW",
  "key20": "5h1kuDf68oi6LsQkq5EzFbST9XeEmrjFvV3WRhanTp9yFJ9BMw9eQKBa2Z5Pe9WmtJUDHPLHNMcKB3fVofx7ggcr",
  "key21": "hUN6hZjAHT1wmBJ4aLg16zPcUBcZ9LzGYRavjYGGt3AbY7m6mq3TLAXtrKeQm9ezPQU6t6eVhK7vSk7hDPweMY6",
  "key22": "4c6yqvoKaN4k8SmgmyYeggMzgywmqffKXDLcwS7FboYER9QVNLiY1u7SPbKgj4dvsrBBABp19Z3NsSt2W2B5V4hd",
  "key23": "4qkNqsfw127FV2fhuoY2Q3MjmiEgRM4F9ysVG8vceU3nhJSn8yyicCGiiymtB3FgSGmkM5bm2yDzwiW7gm7abZK",
  "key24": "3n3NM3xEwaSMchBYqZfZxWPH9f35BTY4fqjCH5b268JHsKFysdcZcpAWXWaczAotFd5iGyEH9TYqnTYyTCUwG7Lm",
  "key25": "nrgzvNhEQ8yPZWrvvwdixU5QwQWt2dSKb8bJZqtXY9fd6x4Kb7KjBhkAbkbumGMt74YFHyv5EFNSdSHy8mhzGrR",
  "key26": "2NeLRwXvC8fcBM5N1LtdCU6yVpJFcPjZ8BqFbitBpnmB43yDLVCsYKJWo6bLcc8pboeF5d9kZhRbnFwjhcSHtQR9",
  "key27": "3iPLFcu7aUjrafU99vmRfpcCDFFviEkhtuS1ng4UGJfr4CpNKHW5AW5xoD1yJ8mRPS6rLUJ6jTEheu9MvHProSMj",
  "key28": "2d3h8CGGrxD5CDybJ5HJ5g1iYDY9vhcnbH1ZEZgdbPD9N1Ju341SBrtXfDVCKR3potdSYgqP2cgFzWfGZGuV1f4h",
  "key29": "5NmMqiE4SeSYkC2dEaAq1NKHpvJzzSy12nLiEWgdXMkz2J2boisRRbw7LqLjy8ZjrxjdcU5LdBhCdDeWxHYGqrs6",
  "key30": "4tfYh5ji9Abxg7y1XyGgpdZoNXdt5JFS8xk77FUfM99d8zHHsUmA1F1xhoNhWAYb6X4ApenfGYR9nQZqMW6Ww3qw",
  "key31": "377ewUwEdXGGQjw767dSkUKSBf1ewoNMiamQtG5SCFFEAYoNkMdPiLf9H5F3vn4XMNkwvUWfix63xV9Mf8HfLkyp",
  "key32": "3K8voKSn4BuiDDU6gEN4sXrrExCt8FozoKCAs6HPvfjNd2U8LfezqEqQSgNazfiFn6HXjrYmafwQy61Vf1d3p3VT",
  "key33": "4H7AcSsDZGNfMkpKHfn2RLzC2GqFEe7J1rD8U81Z91BZYeqkxceHLynfcUBdu3Tv2NETesLsHwu2svCJXmJgefjE",
  "key34": "3nZRv25cFEqHi5TtfEVcFChxFZviqGz3BXbC8pyCqhfRGcSTsax16G4my68J8im91t58pf7hcGHM626sbBQS4GVh",
  "key35": "h3f6A1jruhTpGVV4mLT2ZDPk9BQMF8Y4KyySY8kQe9DXau988cxtn9BbUJj4SP9XMjXA7a8MTkcf97Xqm7Gnn2A",
  "key36": "4F46oy8bi5UMDWRyMU2i6VT481GyYN45p4kW4B6uYsaqKpQPbg4q4DyxqxMtc4E4HWv2Jjb2Wphs6YqTRbAY3YRE",
  "key37": "3acm95yUb46dqM8QS4hagh3hBNMQSc9WAfziwkBsaiT3J25RHGCckyPe79wAYNQx4pNgfafhmyA58Ubnba6smuNP",
  "key38": "44tokj5CxHBjWuHV4LLSUQUjyadr4KQTwmgHsmjiPZJHRiQTTRUvq3mZAhHAbA2X6kPCDfefCW3Ejx7njfoLKBnL",
  "key39": "4s4EavP2EBPtcydUiEhAwSAnMHmaJze8QRL8MjCJFQA66S4mvWRCniLhaoY4rHBLhMzEEB5wwwpsmGYrjQE23nhN",
  "key40": "JYGvVd46v5Y3wDA9q3nsbRR4nCMjooZzkbA4FFXBgiWAnaRrA3PQwWBYrohsRVt86vJcu1HXJpBYvaymivWaH74",
  "key41": "EuvdD5YHJgRWwnzDrNw19CJ6rKv8DZMbJeLsmTrJYuw7vPAKLuTMPZrgPTdRXowSLYo7mygfq2ESh7VSktSEd4C",
  "key42": "29LNDKwGtcbv1fUrY9WFwRhGLHCRBon1t7dVAvAThBtXxccsVNxSza7pkppTPS4wzt9ED7G68X7bxVQmKNEhk4MD",
  "key43": "3vJDdgb1YDhqAPKPWgYeZBM4WJpQYWbNfecaTNFwsCjCRn4FNn9FFrPVhGcGbdNEM6ZzviRW3R5vLA6bAcyQ22mp",
  "key44": "4oTpY9T1dM2be1UPPBYQ9v5HoweBkLPjoaUrxtrYyjcVxU1YpBYxFbKweH4i4FMoeWXwas59u9RVsAxhjH1wpLq",
  "key45": "4gQAp1cus2UGjX164wV6RKZVNWGdDTVN3BZATPWcSr25t2LCbp9WocJYbeSXAWA24VNn4cT1iq3hFvWdykEbbjG4",
  "key46": "5iTWLDqUCJc9AFwpDsxhcL6xijBsD8ddtRvwHR1LGYyHcvJyLqEyh9UaJk68i8c4Sn4uhsRZ7fbxZpNPyy8UHuSf",
  "key47": "4jTDRvqF3Mas4gxsnsvZQMNNc8vevFembqVzcEnHjTCV7KRrmHc6XK713RHfmQxkf7bNjhuTNN6GxWMrMMWAN2Gi",
  "key48": "4m4tXFJHurfbfoGNSww3hysxa5ompUQdHMmLeUeHsCaYJwWw4Z4eDgMENujHSB9rK58XxpjrCWpntwrpd1YMoJx3"
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
