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
    "2CaEdk6Rc8qk2rU3pF23zhzrqzeK22S4k5QAH7sdVNdtsZwhagURUKzY27cdivqwXnKLtZsALjZLkjGVh3XuBq2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AKeac4M6mKbfuiPF79XEz16MzyqbWS4p86KP2o3X7XEr1tK6LQGyQS7NCDZjEybhD1CE9t47uf9QK9WTMwVWJtm",
  "key1": "4pjpeYak6CCdV6CmCBFGR2gyGo9GfKhkZJmkxjyr8MLUKzJ82CQEQwVu9njQ4g56ni4UVpKspKgd3Qks5LP5nFk2",
  "key2": "3LMojCYegC4AtDvSfj3ywYn5aJbYADYCyfB5Acz4WbRyq8f5GJj1NaFpnAEL6UC1PEaVe18KYaGzTmMWoBWC1NC3",
  "key3": "7Bx1Mcn17Pw5Z1Y8PU6oTGsfmg2Y8utkmDMVo3e7CbKufUdySxxa5jYSRvfZJgbkq1MWycyz27xPgWqMkew32M7",
  "key4": "5CiiHMJLUm9wezPYAFHsL9bhVETNx6KsbLc5ohYoB7ezGJV2JZEbgRpkRHCBK6n6sQ7R6bwgLPkfde8ZMBVxNyUd",
  "key5": "5hxAt883hVGuxaPT9jhboSj7BEaRwoJaknFJU9pvc7jWvKKS2FHfvd7HDuWqrvYxbWp8FWroR18kkZZF3UaQ1qLL",
  "key6": "VMHJVtEaQxLyP5emyooEXxZkJzmiVU5C8Zackx3PuBwTBzzVasK67awakySF9V7f8xNYk5xPRFscBQR1YCuYZ6j",
  "key7": "2xgH1EZ91rswQSr5EnDGNgxEENq76XhXZv8rGCCbpF3BAx9MHF6CTMfhTGUkUconK2feiFk1MEY2jLYjPe8idDoX",
  "key8": "5Fxo5pQuCqh67sK3wxU7Cd9LXJeydyrndMqdREA7uiqBxrh1Sj2QGHTZs8P8duw9L4YdgzJRyGh5xsWVtmMjyRDY",
  "key9": "2MtQX4PjvBGjfqe9rcYVCWnrVd2w4hkb8zU5qKmYyEk2o9E8EF8p2nt6X4DH7kdhtmC2pW9jF3d9iCXb6cbT15Km",
  "key10": "4DcZAaG3QmAydZRpVixSkUUa7AHwTDyY8Q6gERChWci2oK1BVFzuUUeZocE5bDVwXEicnXVLJMg2U4GsLU5FXQL5",
  "key11": "3UHvkiu6nizSZRGcgxDLVcrHJ9hd4apXNAkAdFqQK3rG3DHJzBNmS9nUnkETtPSTsdszRcnM4cNkRHKrzc8GKgXC",
  "key12": "1BEyVfaiMTULNw2QBnyNkWpZDtamkfTqdB4RgQsab7n6JFgMQiPwjWi8juNHbvp5Dzaby9w68f8mp3x1FjigHeH",
  "key13": "2gWtkiGr8ep3BV6SqXLxKgxW6rswasGvaEU93sxESfhTuG9ra1px4LYc82PfLY3PKqC2WJasyPia2UX28rRvcYYJ",
  "key14": "4JVYCDgy6VUFWbQz8sG8mRFZMGjyDCoy5o13HPw9R2WuaGaY9SUd8rXaveBsdk3kRGY1ikWhaZYemYxZ2ZTrPrcn",
  "key15": "35UdVzC1KVkUfKKkBbHo623brJdxxqUNQuw7fvc3veUWqhz9FfK5aL939ecwNg2F2e4KEjD1MAq7mLn97DWh3Ah3",
  "key16": "5Rvw2LUKJsHsA2YmjAt1VpWiGLZHU1u9VUMHN8YhPGahFG3b6TGgxigabgwS6FwsVtckNEa723dJa6pcYuV6ZMWp",
  "key17": "2Sb6ckKgkKvjC8CHr8N5C5ue24NoUJoFnAjhxkur42wckUvVUuLV5qzDinfKGSF1uzFARLRLnaU3Ea5V763fWuAG",
  "key18": "48CxEvLeqpmi6SDXkgi7TEetTN4RpqA2T4XUPoK8ABpp1DfJnYg2egkEiHuCnkHofCzg1rCNhcaHYjLd443twd5M",
  "key19": "2j3NqVRo7m8KrvRg6JVNKKorRDmPWeRoLx2sMxN86yYHcjJbSqPXLRVaCJ22PmZGu6XWxqQJoxKi7hxbCdGCSrqj",
  "key20": "3J1AQQNApBBQ3XbiGzfVdXaa5A6aN6q5K5f2yQNL6c1qQb3pDiAU5xsiqFhmhEHZiCP1STPaXQS78aQ7xTM86e2P",
  "key21": "5cu5oeYKA4rJEhZToWkxcGGx6yoSqQJ2KEXpbScauBf4nG9ci3EGawHsQQhX9nbW4xveAHeGbJfJggfPWFsSC5FK",
  "key22": "FvY5BsS1q8nyGPqFi6ddAmMXGXSyYYJJZ6PKNWkLas31aWyo2cg65vzwsqUrrd9sZR8txHFRiaSWa9wQunZ85t3",
  "key23": "3cN7nDwarEV28JsZcsNJ3Smenyy5ngJPYHfRjzesJxATQdNvwzXVJuCnfvBgX8R7KLnBLKmmRz5WsBWQbsNu3AY8",
  "key24": "ADSuwsnYLkhAtoVUifCjBQwUNoKtKtRAEGD3muJpRTq51moEYHN4zVEDGJyhQYaFJBsQ6ALhRyB312cqc2FXv6G",
  "key25": "28q2mHeGWRx1CkJvFqTQ72o19AL462hvkrLrTPyJCRonU8p4DMvgKFqdH1jfC9eqt92PaeyVf4r3J2FW6vw6jRAS",
  "key26": "cgvuQXK7giP2Vcvu19g6WgeEo8UywX1sjKovsSFvNUU5VZQypXxUcJGP2nmdScUfsgdfBa7j84GpmfvbzFoRUGd",
  "key27": "4w7FA3XmW8sgHUpgWnh1yk3XTy43ZuUUbLmD9aFSEKzn6GTF6iQB6Zj7kYxpWaERGAtBXyi6K4vb5VEP9FYhqLJM",
  "key28": "4s15jPJsk4cqQgTfKYF9rouHRrqwW8okDBNXmN8aC9wjUEvHevndtXejoztXRJXcHmxdQjjpY3DUqor1u3UwfkvX",
  "key29": "3zJLsUUM9vgLPh2nfyuLHgE6QbXrGwx4XmQqZXQwhfSy555EAwzgmpP2ix8xTquG6GBdBeupEE2EPFRJiKT3geVt",
  "key30": "626V2ceCN7eSTZXkwMAvqKSYnxybrZx7Cdi13P2NxjZhYe5TAv7AW2qA28vthZcNkbzGpPrLEoMm1NhXKae7WiiB"
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
