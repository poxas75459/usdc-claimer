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
    "52c7ep1LazcKTjTpxrMdB1xZJyJdBW51JGS38M9pYpnZXGVWvVUR5e29VrwEU1NaXJhiJ6fdYDeSSqLzh4r2pH5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23XpjeVEV3Jwi5AV95jPD36TVidJVkWo8kCBsNgq3nVGz8WU4pBt7dV34Q3wjoFKyDFgXk6kWKkUFmuHjYfkuRaT",
  "key1": "2HCgQU6XpAUbA5h5w9gZZs8wE9RdBEbWAqY2cmpaE9UmaSqL7sG6Q46gTcYxBpzSUEada9E4shEyK5SyxZY8WWmB",
  "key2": "3rx7Tu2Eox5ijZuD95ebLjyoBNisAqAMk9Cx8wcLg47WDtihJaRqdGS4ND1TK21v3tcugR6cuXrsrX8kY3scTBpm",
  "key3": "21KhTBT7Xtq62pyFCNwmDoV7Et8bEa7xZ3CsCjkk3iidw42WV5vXYJmEqAPcqGK9ESo5R7K6NNQ2YN27fvdjNmUJ",
  "key4": "5J9TKseKJ7hJDHoV1dN7WpPxACRc8DAyqvBzUghUYD234sanMMLDqJ8yzS7YsAZymSV8XFk5iCyFReMYkBa8yv7X",
  "key5": "3NtFNqKGbyLR1LfVg1obHRsaLRJUe9rKEs91SVduaYm8e66e3n5H4y2Cd9kB39yg2zBwRDit4ACmRtdeTctdQRQE",
  "key6": "2Ev34Y7a1EHZZGfAYy3XhPvo8tNsm4uLBp5vxE6aYqirLDo6mnH1GZWqWiCsehZKBZTXwDg89oMSBKYwk7JbQw2",
  "key7": "2gUTAkX62ZKKiDvTa86hj1deJcZoqfkDUqUn4ovtZEyEqVb3FKnjPspedYjc23eNGigiRKFRfVkGVDVFiS4o7X4G",
  "key8": "29Ja52ZD6Amt4ncfaswLo1oQg5XUQqumw25fptwSoa7d53Mdy75tYC8rRZfcqPiQJk9bbs6d5hh8L6TfCLoP8fV8",
  "key9": "3jxWoGXQVgftAGmRgMjtEvbW3oJtoQJtvqKXJBvPsWTbPUoEdGJv6zMfMjWQFfWiAzTauLtd13LikKoUhfVgxVfk",
  "key10": "um65kvhh2P6CCJ7D4K4B5nKRQY1G2G1G2o53WHFcVA1t2bgFpajkjiFqSZYUdBVU721H8XA4iWKgVphpoyk5iss",
  "key11": "5AVVRFomRt7g5sJYTZuzNWH3v55BKjzuofSzx7ha9eMk1d3uqomjPje4uAJw4rJahoimeU4NGmyc68V5xaSeXcYp",
  "key12": "3cGc9cy9h1DBDFtXx1w5NNqB83PjsMXQpT8VdBCKWfM4sQ2Va4AUfsE3G8bWjNSU5WZ9WEoRU2DhPW2KZwnK4ymc",
  "key13": "5ft56VEsYTiEdsikmf567yZYGD1f5wvU1QHqrUHsGC7Qm8PzguLDnFjAfmzdbSWu3iLCbzRRMPVFBm9RVDdL2GEt",
  "key14": "UEVhuUABwK2gStECVaMS3YPAnx8ScSGngBtSXuy58WZZe3gBBvs96UAsBGkpJw4MZxKXrjZxHoqgA1QE4yQe6am",
  "key15": "2xFGEKF3xFKC7Kajj8dgUdAHV8i1ar5esfwfuEWDXZ4qUFjbWE1BXbc4d1skwmr3LkPhPeKgYVV8zpByx3pKPRqR",
  "key16": "3FxThtG9wFDg4v2UBrYEDmqKGG9UcgyewsFMJu6AFBhiiVa9JNJn9cJ4HZgkKSwmdUZbpJcfvYBgaKWxDyEc9EFg",
  "key17": "2Fwnz9JzhKcnLZ38GPSn4aek2GdKfZQnizU5dKoVbebxHpSxP96De3MgePFgUAk3jgU2q3SbR6g8mHVU1bzJEE3e",
  "key18": "2w24wKJbToHxc6JvtS41jGMditeqQHKDJVodGfXbQow2hFPRZS66puSQC5MWpvtYLtbVr1YfosUM2A198JLUVKn4",
  "key19": "3S7xRAZMRB1EihbUs26oj3LRzf9zaBy5NEDfUtGgC7YdTH9KpcfBq4yncV4rgdHpHvwDH3JFnGG64hqMvLpPXcSo",
  "key20": "389vPwZt8TwPxqe69BEFCVbMuQaN1Npu364ihoAeiUqMZ3Vz2nzLJT5KJNbUVSdFuEDUwqnRaniR63jGYw2JtRUc",
  "key21": "4wmJamTJekmD7h6V6yPQRC3HsWfJztsf9EZaW7PcpsPgkrBPnbYspaT1Hinz59HCf8tEGZK8RhPxdxqjwbvivXML",
  "key22": "2ouXFzBkh11JWUAQNshs8qhLpAVeHDdgfWcajMZaxTGdKnjTfrSEVG1YioZuW625xzn5K272YC6YpAivjRz4sn4E",
  "key23": "3GvQfUNoNTf2MpP3qttoWYT8PbUEaiFS4aewQF2F3GpHHMqZkQ2yBZ9YcaTiPu38wi5Maajb2MSF1KfcR2j4dSan",
  "key24": "5Hij4ioXDUqy4XUTA5BPxYUkYV6FAr8mCGBe3zjcvFViru9QGQ9Sxw1uw7hYxNjpNdhJvFP1d69YGpEiAkGHGyQx",
  "key25": "3DbGCKppQuHk4ggb6869iHBow1KrMpWGZCw5eRpKgzyUbUGcT4ZeYX6PQFfTDQNe1x36PzbnNZDRdzHo2sAHrbcS",
  "key26": "112zU6rnHM2Eam5sGyT4WuqiYv1kXXjGeXMyo6Y2gSa6pYZb4k8bVYEKoRzQDwHvT49Vo3jxurgGF9Ldz55Qw27",
  "key27": "5URupz33P83aQooJz2qixVE4rH4RpL48KyYwTUWSMowJtrsUE77HzFP5v4cPCFR88LiGBdAmymiUiP8jpV8pussv",
  "key28": "32EEnq3AeTt3cNyk4qDBTBcebZVmqx2xveJGYVhYgiF9wXHrRRwfZFqqdM4QUghe1ExjcyCphejX3d4TQzx3ty1L",
  "key29": "f72Uuj9rvZKvwfRxqVmXvMDDj8oCgQZKkCo4LEd3VBRqzxDDebz7FCfTZLYY4XPGavShjLz4FVxpDpiCMjoMwKc",
  "key30": "3ZJGyNLXdqaAUu1oNGnB3qm7hkaoMZjFJw1eFy8eyEP5Ui6UqkY5PY7HwepG6anundZngbskzYLwkjc9XYxxqi9v",
  "key31": "7xWhMEGUFV354BmHcCjNNPvEezrySDnPXsQuSxejzt3TPTk2ycqh9SkYNiDWfx6AvbzEGA2BTGE26wsBiq9RtxF",
  "key32": "3Gv2BMrMZnaBHtXP3N1rFQy4aQKwPk5QqyTCVzQ8rDrwGSh78W3TSCoFb5WN2JmfxwP3V1H8ULnY3bPnfBNnGR8",
  "key33": "9dUxTQ9FpRWMnT4W4wzR5soVvKSg3myHhA36cA3rNRpd29wnbXUkVShgD1Any41onpRLbDqpTcJnXXHUxfJ5tN6",
  "key34": "CZLBBoo1Hp5x8rz9wCUmMTDBdbqxXYtuK9JqC2oqyhAaKsRcPhwrNBvrLU6RtcS3t4MKMaE4ZD12RBYudc1umre",
  "key35": "3BVwGkQf4Wq5fctsMwjWYVF4McncFiUx28BfpetZzZDjeXGqokfNu1j3xomjKc2E6TJtvCG3LQb4L3Q24rY37rap",
  "key36": "62g4hFri8C29HVVtfw8HjGKiEXby4ayLZaazz3iCAzHmABkrwhWabpqd2pR7qNwjMMQDYPe4anCkxUk5A2sMenMt",
  "key37": "yAB9kHGkSWbRm5FBBaPxmA98bE4PW9PbqYxm61tXcAmfVHNMaSioFr1jSQPsapsZsfv3YUxU3HCNbCgVNnsd977",
  "key38": "53UJsiJs2BJCwkT7NqHudrAnf63yTubC3JAi2NnKfGQBe1BC4HQjQBzv2TCvodTbrTNyJDAovGYhF3TymfyWMChs"
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
