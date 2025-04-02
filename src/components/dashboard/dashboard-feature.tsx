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
    "9waH3N1x4XssFn8eWhWs1xbYdPeqwafKMmzmuBG3LYLCKMfPx7QnEzdoKkSsy5yvkYtucfeSXqJfBFctRQSWMKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GQQgYGJDUimsZXuz3URc3TESCKGpaHJMpbq8m98onRip9EGVJdjSihRhu3jaRp5WwgZePjavaHfHjyxviKg6Brg",
  "key1": "2F5E5jPPKFvH4Y9hRRFRg7J4kJ6u24Jpazwry8wb1rBkDKYiVNSTg373Kp7VYJd7Cig6Yo8s9ZzzoUXCTANnzTwh",
  "key2": "as7wKy4m43q4KxRDY2D3eRg6zW5ZSU8qyJYFUdujp6z6XXXZoLFoUYSWBdYg9JD48CargoSzow29Lb39tW4GtAz",
  "key3": "3M7Au4GxkNdDPy4kiwnMtRjo26k3XsrGqKjNqZfTHvvQGSvpnauNHAbv6VFW8196DRXepD4VZhmgg73SfXa1iWVh",
  "key4": "i9ToHkxmaYNY9rmn2sYZPeortJia1wqMtVRR11qr6rXyVPpSmYHywKhpZEduDvC5Jb2iTUAqvfNPvFtGH3NYWav",
  "key5": "33npAie17Sd9j32BTfCdZPKSazXqiUQSoUJFz8PapDEStfCXDdY97145XJPdoyJk7vUjA64vjPYipqGtyxjDzewo",
  "key6": "3MgXqj4C4DxSCT12XT1Wyg6FqVwnxHneNCjLhN8AvSJe3hnKfMnv2ZDNRs8maJ1HRak8hRMGYt9jLntvw78Me8Tx",
  "key7": "Fihi9JP3Yju7RrbZ6FiXxpedc2PRXHSjy3kmMZhYhkngGEcVpXsdeH72AG6rG6EqTNF9NTxPgvnzGHvf6A2uJMf",
  "key8": "2cTdseeUK7axCLMp8khmXmL9qyfXbno4GbatFin35U7gyyv9vKCAnDTpR2Sr37fAdx8eAuYAboEoeCPADRcS3dKp",
  "key9": "5tFG5YVPJPABfpbPoqeQRXVUzNorY19DdutKrTeZ3VJa6tc5cGxLyeXMjsmmsoytuf5BU4miADEyTQzketkvY324",
  "key10": "4Dm1qQJY5nrtoMzvo2uKbu3BiGsMRnXm6XcFDMW3zHsZSwh4MVeeQNKifQL7Vu7eG4VtvWMCDKpVBJF3yGQToC8p",
  "key11": "553y8aocYJ7k2ZrdJUxRXXKndEfxcp3jBNSw3Z7yNXzQCwhJgzzwRcfud1uMkEnuEX4L14vXCVaaSPXLtuzkQLFY",
  "key12": "3YFwUH11JaDwmyRmZYayRzfK6DnnUwxBSbzj8SasfC4wNDyRevr3cRM2ukDwsv8dEG3SQpUUeUD5y2jnPwmA5fBG",
  "key13": "4qjXNCPtskMwwwropZvaGoAGU1CGx1UNSwuY66cPQhFa3uBbLNhDGbvCnAbFBrEgha3TZv8Mv18Tg4k4Y7TzjfxW",
  "key14": "3i43Fv5hjbqwDFmorjyCcn7FbNfEP6MoeGo5Vy9FBXNs3gEgBqZ6Q6wXW9VWmn5agXg4ZHYx1X5PFJnN5RTeZccj",
  "key15": "5c6jsGGY8u3zG6GYZ9Rc7r6vvQ3gmNgwvT7pDcZCeFBLHsWjJ7ZKAdifB2oCrzxt7npZzza5Vtts3nrXxhiiNMw",
  "key16": "5zFWBbqs6PMRymg2etXZFyVrFjDzamac9B7LXF6naYNMgE7nUo12mYczxtaUnGAkRvzyCLaUm4XSzphcQRudWkGo",
  "key17": "2SuXyGRaZAFrBdgZj9keJ3qab2uNEsKzjbzeiyHrmg82qQFAVd2rk8LYN54VWb4HcYNfD3MpP51PgCWLEZFoSJYX",
  "key18": "2zqAenLqd4RPSSvU5pBkfwFVmTjuHxiFv8q2YLsXcMtAHvnRsEXVFPymphxFET5QFuZo6c4oYii3EKcPBoixiFJ7",
  "key19": "3dhppLzM8AHKTaj2AJDyK2dtNUyeLAzXFmoiks5k4Kdd6DhfxfdUP11vMnizWnd8PZKduV6k1by4j6dqQRjgRpZf",
  "key20": "5vyicsdcKihLMQAsMnskXsv657MQj6BPnG4JwKPGvBTcqrTDMmuxLQQG3Gi62xLGVy4SbKap5WRP9EMNGZKXqFQQ",
  "key21": "5om6Kk5j9yp2g4nsWFQaKLTkfGy4aMF1qfna4RxhFfmSu97Ga7M1XTKC6NkoqyWt84Nsaowg78WVFx2LPzsB7BVX",
  "key22": "628zBY4QyzMGcRcPEQA2FAaPpw8YHTBgU2fejtJ9E4nQyzFTaJJRoLfJb2Fdy7bftKY6JGhBorMtTrgjbD9eCFm",
  "key23": "27JWKbo6YXu7MQmDvKWvpx9HW8xjUxCYxaYpX8zxZC5E3pDx25RzFJvDoH77EgnrJdEKN9dU2r3UeA86mtEcB9Z4",
  "key24": "51kpPdeZZdJz2fJRmZTeyemoYsFmLVrS3kjsgGHuowqvWKt5YHqV2YwdtTQTD9ujXGHSPw3HGwfPPrFpZF8eBsng",
  "key25": "hNWoSTxJdTSWL1DHPUM5YPbMXvSEx3SYkw4HpC4HCf4YgHDA6r3Y58jEudHzc1QEvdqso5W6KwFnbHDBAPDywgY",
  "key26": "3H2qkTRADtnRA9AAtrAjJfHJXfTwjZdEibt3ZndGzrKGt9NQRsGCvQfcRnPV1RvgdeMpHg3ht9TGxeq4VX6NmbUX",
  "key27": "3DghMTgFU8zw82RYaSWVXPWbrzb4ErMmjzpbZSTa3qBr12T7TD73Rum3XnJEfNEGTEsRTGJM3R5MpKSC4owHGjar",
  "key28": "2VYwcDUgqxQcGF9u4Kb243DEhtHMja5WNRkA2Gy88Rt3rSNttg86WAgbCouXYCcTd4uu3rPUv2uFJBU1pEAXSy46",
  "key29": "4RxgQQQgg9fkWvVdM6bum2x3xMZiJxqhJFDTSc8tGna9WbvDKAjH3M5Qe4fTGNEsEuszXnyp9pwisum46whDaST7",
  "key30": "5LxbzwVqonYnL3yPs2vqMRbAZ2QBkyPWVSQd5HJYQunXNa4JHpFvm1m8SFkHiY9X5DSKXrFeYAzKGyHDZ71uSb3s",
  "key31": "5T12kp7JwNtwH4J97FBvd8b5GmfBFYN5kowcjsPb1kwHd5ppZJ29jXMnXzHN1r93ueMHnMeku1qe4NG3PvQRLeRK",
  "key32": "4csR6XA6gYbaruy7cJqVPHnYZzKP6qW58opEfymvP8L3G4YYcaMHXwjiEXmmLscLomugh8Mfcz3ZZDkuJgNpuk6o",
  "key33": "5r5oY63EWfa3q2kh4UDgbvwAcBKosGpQofDgBbS9MxAisG8YUxh5ZvGq271HPF5aYybe4Fxa4b6pyNnMk3q4fDMj",
  "key34": "4rKfSM1mTFk1tLZcLaoyTTztSabsCLEFNuwkbD8bagafVquFD2XWepVvETu8MMDG71Djtq34uZakczsjCbiusPhW"
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
