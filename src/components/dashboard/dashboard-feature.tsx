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
    "iK6tmHiBTkPBa1JudVJ9fc7xpUwVYwqfY2xEN3eSoTY6miWP9QqHiUKpdyJfgYviZQpfY1AUmmXxwK3ydp2jkaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hUtHgHc7tbB2pPtigYwtT1tbHnzr8nWNaTwYVnQS4KJo7BEGQiuPNfmJkVba99wmvhXwcH3s4TDMPAVL44gkVSx",
  "key1": "3pMWjHZdGAGQyAfRFcxdZsXzHsoJMtxyCQZqb3Q2muXEKkUDmG2gYe1bgWeFeu6yG8aGKo4Gk471CrsmXi52ZjKd",
  "key2": "2EcqWpr5Wh36fSCM1nniP9EZ3rrxLXYFA6CP7bYcWMzGjAUwHiCr34TreLbvpYbSPUmDn8Wg7j2dXSawoGbdnXjd",
  "key3": "WTpC4REWoSuKKpsZNwPWdXGMZrG1EABriD9jvT9DxGwxf8E3rafyxYJJcN4ofcHSmjjkghkxeuFfDgV8wBZjvS1",
  "key4": "5vrdDFeDAxEF2T99iteRyvbecQ9v8QV7aWw1EEPukCL2qJY9LXosajZvzJe4Y6zmDLEeLNGENr8wzLhK5nk7w9kD",
  "key5": "59C8XzLjvitXxNbujQCLXtGHRPxFXFtegHuZmjJuGjifV4efnkzbvdainX4c7V44FZmiDktUbgxH6mqk117zo4Ew",
  "key6": "2ja4RQfRXsZSVdDcgYXiVSyqdj8jaMpWxhyJtVKqyni5g3KBnY1GKDcVmbnoCfcNzwyJKJFUgzekHgN7Atp9Gohq",
  "key7": "4a7XFwj33PzcK395uJd4CpW5BKAMf6hB2m4wLAxsVtCAodJg3vn7ktiq4saPiUCVUXuYbqH31JpaNsoZ12xDauHX",
  "key8": "3WbxAne2yDkeftx26eWdgMhYKWAJh5dzuN9chw6ZS2KBXgUYDocmjSZVYTmvetPNSvMdZNYjzYiXiLutYVqJ5THV",
  "key9": "4RoxGt7JxnDAgvgyHk6FY3Tsyd5WTsCtbHZnam8SoZLJrCsApX8hFi2Ziwma7soeLhd23exsWkTeXddAsPzcS9R1",
  "key10": "oEBCR18QEkCXFUr3MYtfCKXyr6fXeeS5xf5ZayB8cBPfqA19TFLcKoKxECsyhwHm49h1gfkPWCSZ75VibNUtbsc",
  "key11": "iLCdKbuLXjZcWxicFsG2PpSqyukNSq3oGXJ9MoPV3QJSg6z32bSLcpJC7yGP2NPnBso8SvdTNZMXCVUzhfpMVba",
  "key12": "2b7S19gTSUcftQoRZ7kcgcTnmWVzEEmgWGY24LWKoJq3bZqdQ55hhUwftgFWw4iE61DBXxhzGwDa7uYgtQWVMgmB",
  "key13": "rHYmEXuChjcEQDkiYE9tFRv3JzPVWstEQXNP9UwPMAYNZAbTnopW3dvUiZ8B6UkeqsGPS9F1CLTDqrb4ttqfivP",
  "key14": "4AD4M3GsH2vQku3uBgnANp8bAL2KQzbmssCdtToqcquxmPhyTjEqPh4N3Q6YfgrPR871eqtZKJc5rKeHVTKuivZe",
  "key15": "2kqhQSyoXoKZrcJs3Ryf5WTF3d4MprcQZav6dgTjjGzM1ZZxEeJAipV2CWK16M1DXDTUYdjZdncb1SguTu5493gm",
  "key16": "3HFKBWTTrv61MnfCwWTbN9EYTu5YPRSsLecpfTmgDDJ3PruAXKZxRF6j6RrdMmdUBkW18cC6UAU1sa9rSSBiFYSq",
  "key17": "PcRLtbjzGj4aMzA1yZmvpMa5G2D75Jv54CvT7DQQbPFGJusd3kZHLwaE388jWPSZxBftVSgS9NgpdJraLgSUeo5",
  "key18": "2YMs65ep1bdXpcDyR6xWeZMFDZxnZc1uA1ZBYA6pWgbXPYJyE5rpVWSnbnnTekSkZ7QZaSokCGXyTE6eGcDA8zk5",
  "key19": "5uqnEcZVXiTFdF2zbUF5LtHPeAjpHNez7z3M7ZYho8dcmWDB16qZdNXxqaa5QigYP5Uaz36aFhBB7ry61D11EvPb",
  "key20": "44oQvRqf5GG7kV6eoQZiZSUL5LHb4jDVcCLCqtGVNUFvcMHfRfSuLTGEJ7TRH5WRmaeoRSJcvgiBgFyHUopHpHZ9",
  "key21": "2vBn4LA5jtBx5HoSCtAGBeR5rn5TTxCmi1L7qE7VfATeiLxSkqEPfF8cFGCAPD4Uuv6goMiJ1YfS6ofZXvMyd2tR",
  "key22": "ioUHbRPxNCK2B1sJMemDHvfL1wwd5G8FQSqnDw2Jww3UBpUDktYnu21MHTewtHUszUJcVpyMXqHr7Y38gp936ub",
  "key23": "DWQzTTn8tYR4Z4VtqSkzAgoFy77ezebE1NkzUt1BqBFLb5ALfiUrhsBecPbktJqqaXUxe9sBP8NvdouACJfCrxZ",
  "key24": "2iKresFe7mn4Qq37zGNbcFB6NXpRWVEY1yoFDUCxADrMS1qEoyuaScqpwpPeQ5t7mxSZoBEnSHV1hDjmtfFvwdJp",
  "key25": "5nqoyACPeDcKg8Cm5czdd7t6YQntbspm5AnkzgoN6n9e65bEx24oeVbg8mk6gCezkBqnprHNBtCeJZGXaSHq2ns5",
  "key26": "4znzfB9Ym4XqNcfDq4QzdtsdBVzArLFxJTcbE62J6EUURPxMmdm1ytfnAFJ2QzhRyvgdmmos9MbBzmStd7ZX5KPp",
  "key27": "2b5kCjsypwwR8JGe2SMckL55DzgAbFx3KwAedzCPssBkWkYfLQ77DJMpaHQwsHGEAUDQGFfv7QxQqyk6rnq6Cgrn",
  "key28": "3r5wS7CmY2JsSmsnCxVX1FGCudL5HfjNd4Qj5kTf6vCZpiZM1CGE4ATEBmLYgsqityFQDgUCsYCcvvjHBXyhAXmx",
  "key29": "anj6vrknWDrP8e3QLs1Kcdeicf2C57nxyTtWRHuHJRS7vMbP4CHEBuxH1nbVziP7yrSxx17WsQSVmzgUppTkWqj",
  "key30": "2mNmoRVEom2dRz3s47pfQt6ErDK2XGjCL6K1tV5DEFzJYLX5kXYGT6P5bvkzKwWL9qHoVGfGYUSxkw4HTjhzoBz",
  "key31": "2GF5z9bTxFUNc6RGFp2mZeA8hNnNPo6jYE7QW5gXwVAJkXk5xhpkL4tfhm3T1dsb6m9UdAGzi65uvmvjbkSe35mf",
  "key32": "2RQQsed2pQXZEnzQByMwWBqVPTqUdEU99atk66YkveTTTKh8juUToWmccAuuugdCccRR6Kw7YZMKyJ3TZMKh6Bmb",
  "key33": "3DvvxMvCZEz5aNrsYshf3JnUB91NBqyn5PP2meSnsaVSGifSn1sY4L7D4nj3YtE5QsPmpNdF6sXTiRi4DZBE3NCk",
  "key34": "vP5JZFNh8fdzXGF3vwyQscXgQ6Pgjt3awb8nZ3wn6qDiapeuG7xM5r8kdTFtR5j44BdWUAeKujo2kRHo4kkUr9Q",
  "key35": "fk6o5yJa4y8131nUbXDZ6J8ZeUjzoS5xrD5BcfoQ6vPcrJaVHMfL4Ng7s4iXciKRu5CN4JuhUqAhx5WoTy1qoZy",
  "key36": "5KQhCKFrW9UQb4ysTz3YuHA2Z26qQ1xw688EuGjMbiugtqeqQtszuGTwUDuaXcF4Z6fAKegj33h4BoMswfwAB6kn",
  "key37": "3wviDAjhpTF4yqQeanVZUQotsrwJMGZvA3hEiVgsmWtZAV9YBUyJZbcdL8cD1aPqvKphEmd6sV7R3r1MM7CvXpk8",
  "key38": "2FF6fva3PXNEVUKKygCacYwA7vapZNQDkPqPYXguh79wdUxyNWNqsGyR1Fkw7Wn59Hg1RjeSUbQbZ5bSUzvYzcwG",
  "key39": "5HNd4ACAv9Si6wkzAngAfNm3Lm38YW7uwL3Rmaea64B2GpTNaeQMENsnDNBrm1NJSs6Z2RFj3K3boNp8gH9AFcxU",
  "key40": "2VNReujfAtNpvyXxfBy9jcuH2RoNnx6MscfZ8xufvLiQ2DrPExuGRLzioh7tFm7PcHXG2mCGgVVcrGkQFL7MH5Yi",
  "key41": "5dGvzrZf7LhjR718vrKRbP67oEx4SXx9C3DefjNNrmbe4V4CmNV6e9KECmRthJcZPaCgBcfUgAgW7GrGFPvr5CfG",
  "key42": "3E8jKmFeDLPrrcYDTobUJxno4cbiSvSidRNERec8m6mMEMfdSXggRjWtcGqy52T2DS5Pu1yyE2RqVc1eP9pxH5oi",
  "key43": "zp4QQ8X6fKXfoNQigWZdTmCjkn6BC7aJMhcYN7BGGMR4fapS4WVEBpHm7AtWxriPnuhdTCmBxbDSpwkXotUsTmV",
  "key44": "mLJ3VStuX4BgxTaV6bx5vV2edEGawiHxHT2ADEWbJSRQ6vLjeGMCgWMS5RAK87ST43mRZ6XYW1xtbcaDPCqhvM7",
  "key45": "ekMfKqns4J3jn9VaLXKBTYUbumbWVKLm23JFQpHcXmDqqdeNnRZAch4yts2qerNstjm4SSmrRQ7Tb5ktWKwSpfh"
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
