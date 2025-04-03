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
    "4Y6DBtm89uKmmTZgQ2tnqbMfBQVAJSD7vy5Vd7BcvJuyoLYko6EqD567hfjZ8oDZab8JbeDo7MKLCFRtLpXtxgeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KbnsVcFcj7xKYxMkhsNRxbcv9hw6wDXm4XBNDTDcy1ogxPJ5He6JLWUCxtCdZY1o4eCYTcZjMki7XBnGhty5Zir",
  "key1": "foKc3RkY3dSdRZt6VsqyPhKQuUgpYeUUrGcj1jKyLcyfWasNP7mXPa4sLp7yydowD59pdEU7YopHs2NEKTm4gyu",
  "key2": "2NyJytziTdF2Qx2PVvEuEyBCc2xEzDQCR1GsS7oX6UiWEWa3fXhQcSsaf8kNAmbxzn8MAcf5PExjtMTJMKAQxkau",
  "key3": "5rK6QwtGaLgUf4S81XZPxs43bWDyV37vQTpJ1yr3oT8EPbwCu37UNPABto3hb4aZjsw8F8vVhYSrrb2P71PsNWSc",
  "key4": "3DVzj758RyBaqkeWrjXz73reVrNcN5ruHg6q8D75fbZ8Utu31XMS8JNVRCMfdbjeiPum4rgJ9PLL7Vj4DhARyVrT",
  "key5": "bsb6n6yZVvvXdXaJLFtUdTzocP7HVbdkpGz21PnScfBBcbyGXcQznaad1thXPvRb6hjPB3NTfayxyDVoQM5toUZ",
  "key6": "5SifsdFRwCmQ2DZq2JF69VMxAWtCnPZi6NPgbPMwE3Fg2MbPjhnJzRSYqAERrLhaAa7j83uMFm5jwFgr9dqzWL7J",
  "key7": "2jAdR465LuvmMchYbvLUuBwV5UGQmJa6PiVwvZBjw3ZoRcsBMMYPjDZnLdAeXN6piW1NbXBZv1bGyrno9zU4xGfT",
  "key8": "55gpZx1tEqu19avEERBuFn4jkxs3iqfnx2MxLtcu7abirHdYdqaaVgP4LEQVru748iVzTioDXRamBe332Vr3pGXX",
  "key9": "2LsJGJGcX9ToQs7xjJcguZ4W8BPH6PPnjeENwYs12SQk1RWDNviUB3WQ7z5bkHmjQw1CLgw9cBKJ9LHkekRv3LVf",
  "key10": "n5grUdjmdonGMGrKRtFBdXSQ8HnfnCkSmfefS5oykrE2BMn11Qsaq2NFRMwSbUutRPYbAGryxQfFvNnGwj28Wqy",
  "key11": "33rBFEtKezxtRJ9R4FDQZEwDPYf9MTtN4XQYhs5oHjuzmzYSRUjHGuV8mmueDRK1bajn5oc3RBaT2HKiYmcmWKcj",
  "key12": "5aE5CFqbR331s8qb1d89wJZ5dau38Lqt7hgkbpK2vvJdQQ4BQ9DMjccKRSrBx4Kp4rDCeqPEDTPHc6mrki8odDnf",
  "key13": "xj2RzjaBWJxB6BweHy2LnJYVctCETt7hXhW3QYprEQncJ5sGT9dRrJ7xXq4VYVZRTjsvdsUoUAij5Ffp9SBiNJX",
  "key14": "2C5QnZbKmzkGo63znHmnXRtFBw5N3MWaUnrsEefqS8kM91NtL5fAkv9awurBms71bwrbA6aC9qZcWcP6XkuDfaiV",
  "key15": "3f879QcqKEsQzUaaJFqWUq6aHghv9H4JcxGPHXAgBWBA48zEz3FCtFzNCXoAQZxRnKpQjUpkhQaPecvtrFVX34MA",
  "key16": "mb4a8RrnZvZTBspSTDjrA35DKK2FjtDdjsc6m6NjwhghdWfxPkZTaktUrW44PEXywA5gzjoVKpQL56WmbVm6Bf9",
  "key17": "3HUjXzKya42xMzXs7ARU34cV8DusP3yfozGXJrs3xAKyaeNfuX6ZhFG5SiJR8hE8yfYUipnQEC5yR4UvDo35a53V",
  "key18": "28D65zbRxFRdspzN3WQHFfpTUPPiGsHzRj9MW8KnbxYjbCPPxXPq82auuvXYgunxZJkKpu6aNq4ZbG1MmpiT1b3q",
  "key19": "2zrF9gi5tyfUNSLCTxQXUaYW65njLiqtGxazLagnzsZeP6AbazS2jkLwuikuSYirNSHGFLJkKLACYuAS9WG8bxsg",
  "key20": "RRFCTPZjTUx7eJP9rDosUwnr8TFrbKT5SrjEmXmAmXHCZsCkfwgQXzbvkvHtzFLjqx3oVNBPA9gXUQBzaqUKYUd",
  "key21": "61Pcr7GAwSWdpKtKRoKyS9Ds9KPm8EBkxRWrM5YsgU6HMBXPiDwLodbg6nhjf2mFzPY4L7GUqXmnSgfF6XjVQ5vd",
  "key22": "qiPstDqC7dFBn9cfj2ALePzH1fSQjbdFYGAwjG2Hqpr9MdppYVahQBf2QgJ4jWfnmqt8mrRW3xeMgweBaDfqFKy",
  "key23": "28JK9TyfYtsd4nznAF3NVabxFjDJE692Hes3X1q1FDo99pe4h2E54eSJMbh8fuGcW39874YgqagQJUhUaZySLVMG",
  "key24": "5yXgiKDSCQyBSzeRyzxMBD4aYv1ZZbyHBNMurscCVhb5giG2CSsYyWnHzdgLxrvdZC3LnyrnSbznUqAZ128WtSr2",
  "key25": "38NaTYirhJMkUgYKMumr6W3vwhVitrss4i8iukhTXRgCLcDqbhYwpQz1FAF4DHmJ7n9ciG7jJ1LZdmBHsgE8NuvH",
  "key26": "5DAQxxUZfyjkboJV8kbXtffnoydJFG5BbAUwvTLG8y2R1Uit3hs1y1BaXhjZG1LookWEYuJpbGMdPgeTV1urN87G",
  "key27": "2bHcGVKnN2mY8P8Kcgn2iZiCoCrDRtcejZktUZhRBBg6BK8HruwXuo366TNDgpphsoi4VJTgd6XGaURCiJXwpNgf",
  "key28": "2AbozbR9X9hNM6avtS9q8jDR2W38zjFKJc9xYTEEmDf1QLctVP9mqTARfCiRtwCk1Y5Kc3xki3YvFLhWx1aLKxL8",
  "key29": "3GHyTp1URf6thjrNdUyF3ZeW2fPHqRAxowyfU2L7RMaQLErBzGniwmZccNzZzQQe1kKNbJC8mULvQXHbkCUXxkcx",
  "key30": "2E22FbNx1f3DAFaR7BpSebsi351z59QUTHe1hQCcQ3HorJgpYsmmgJeoX5QvBpbNBSXCjUYBCBngc2zRWd4vNG88",
  "key31": "5KmMCA7unft4LAVJUvDBedHnxHqfMvmv7WjS9ti9Cy8u5SmJYcSHV5VcYYcg5XLJRn19dazHuNNrrWEQNZbnxqF5",
  "key32": "47jr2yVbtqJqPDwdcxUfgMWVfnhPipRN8D9TfwNn4xnF3dsspGAhpPvh9kSXm7Sw7GvW1dvx1viUtsgFiE3FcSos",
  "key33": "4U7z3EP4DKKhznAwefjs4rM8WsuAWKVXm4H8WV53wjKyLkTXtuxWs2TqBkbzErK9iETP9XZzJ3ZpxjGH1LfQM1S1",
  "key34": "qmzy1Ej8JvoZSUm56B2xPQ4qsmrFH6WMu94HxGc6buHL5SteMyDHaBABFS9APoUhdhqCxf6WvRouSG9UwRfJiMD",
  "key35": "5Y16Z7AxZxivAd1q1DkotaGLmAyaZLJoPmhHBi8j3KqrCdVt39MLDZfyBUZEneWhneeCSBWxyYr6a26tZpFYyAa4",
  "key36": "4efMkJi3P24XpMi5MACH4jibexNB6LpdNVT8krfgzaFxrqXKrqHeJ1Gork9d1iT3ubejgQWcRjfT2gJcHttvVcjN",
  "key37": "5atYW4SBQWAkgtToTrQC2HK6nJW21LJ5jSPXvh5LUSDsMNY7Hb9qnyERtvSz38P8HhVFf5S1mHAfNBZZe7kYDM3u",
  "key38": "2YKYKpN43VSJNufp27tNoPKDrFphrJSrkYRq6wUJVVzkxXLfZDYRTpe3eipdENqQkizs6r6Lq5sMwYdNuabv3yYV",
  "key39": "31XuCSyV53vJaxCLgEGomvf7XB7TvAzbkjKZnWK1WCNL4SoT9Bbn6HDmuH2GaFempZiVrk3mtGZGzC4e3ett6XYS",
  "key40": "5zEucuXA5s9rm74qaqBpCNtSNCDo9p7yqXC8YFVq1ftpqt5YqbjQatdU3ykBj54LkaBeCHAGwjxA92QGy8rXLuSp",
  "key41": "NaZTQVntiDHM43LEcMJpqL3QY6Ej8fwceUjuzgpi2L9CMcH7WdrwKTENZ4oN61REkmrTW8UsD4hRQFCJo3iyGbY",
  "key42": "5rL2R8HxFLVCa4S8ShZd3tyYYzx9QPKDzzGkxonsHSyFM5NkZ1xc7qNAPboQpMQJzGPHwvUBb4rCrV2NB4GyohcZ"
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
