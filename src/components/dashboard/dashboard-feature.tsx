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
    "4kx5erf6S5TP74utri614SXKKMRjkbpjAoPo9U9nejKe1AMQXMVLv1hUbho5ZuAFrhqSCYCng9c9f3KpHo8dCmpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CPxHKGV3D2LzzMxFyifTK3M1NxVyT9dSgJPL8Ur9d46Uehgrm92ShZCaCJk2T3eZSWvH3XroPfsWDWXg5YP8ynn",
  "key1": "3D1enJECbaqXowVeApipi5F7u31JHZ8PhXZcpVMzyvTvzThJUzCPGEvD1Acbh8MTSoQQP9LdjrXGpu2XtkbMPTQF",
  "key2": "3qVazhLBsKVTCXbAUShyvvNJn6rwxWMNWNyhVTSoJ9FCVKqFjXJwoHGDRkPqVj8mD3hsVyyBhSnvv6EzeQ7zJSE1",
  "key3": "32aLijNoHoSrB7igeJ93YqpQrVq5ReoKM1TLaB1pUnvQWvv3u1aGcy88YVK75juxeWRJxCWQK18K4QjXP97HTVKu",
  "key4": "23CSmSxsNTjJfJexRmjyy2Dr6CQjRafdiUQx3F7Kcj41RGDBftKgTw2gBhH75KkLKpdqDoRFxfbg6n6akq8qTfm2",
  "key5": "gY1NhrLJpvDzpuAMYAFnd3wYxHLeMMXphfevGGffBSGTsj2o2WBKhvzRYePV11PxZxWpKfNaA1aktGpEyXBmmWg",
  "key6": "2ysJj4wAshY4kXNG3Mkvkh1sPYc5Jz4BWbHuxEd4mQ213oucLazjgKFvavHZZUsZv9LWM3b1S6QoxaYKnyW74BR1",
  "key7": "3yVGkzqemLZuX4tZiSU6ufgEkkx21JbVdorUs6otcgvYPNwHM4sq4GNtkpzDLXqog2TXHPNG1vgLoVdURih96JXh",
  "key8": "5L3X56TNXeFrD629hyUjmGZcVrRMPzx4gWpb2jxZJLPMSsAGapipe5fmQVw2PucqcSaQJSQk7QqyhdarSQ9hWk6G",
  "key9": "4s6FFTqgFMWY3ebDLKRBRaxMKhVLEt9NK7SHpgzR68gjECJxwmbEp7sK6PaEPbXrygprXHok9rV59Dxb7RYWVTSP",
  "key10": "5CHZSHYaM8y6Drdxz1h2KiETGNh3UkU83x3eUe8V4ExfHWLBBDwQqzN8gq9152oCbjqddcgkH8ToSeQms5ZzGpUp",
  "key11": "5ZKGQgeHKMjWZnodu6AwnGBNMAL1rLGGBBHEyPxg3gAZH15cNGXCeCKanhJgBVR7TFzvTdzwpqLe2PFW6HHDuWjh",
  "key12": "26sJERS8bQBDC7ERXdhNtKdf647jbfGjC6EhWSaEyWhHin1rUgfRepgvExJpyuVXpoetdmkr9fH6xdThC4dM7jLg",
  "key13": "mjFxcB613E2KUVZKJWkKnGAR1iS4vbyE43T9CLkQHWtV2RCHbQ7iMgb4vEsPau4mFYtfs2EKcv41o9b8TK8WKAT",
  "key14": "3auujNiF1btMKShpCgUhzzZJyWLjo5zF1HJ3v3W8gpkCQV1EnrsfXtZkCBnh7GVaS7fVHait4FHZmkg4vEyoms6H",
  "key15": "3ZXtz8VFM1s8tTYneJtnwVc7wDYEpQxMZyeNPef53juo9VPoGvtgn9f3YnPBApMeSoZsPKcK3tFx6qPgZQSXfUvm",
  "key16": "2tAuJWEG5JSTkPu7Jfx6zePwKkoQtsDrCYk8JG5t7fYEtW8uht6oVu9hC26igNRPQFsemaUPhVM5owvLaQiLpm3M",
  "key17": "zeiWdprSV1HAmLGN6Qq1NxM5YquWCFouAK226TBjurD9LVUJze95c1P3KNVkmmxjAxxBz96nrbCHTgLyPFrD98M",
  "key18": "4CMBDgk4z5eRPLsvow4cycQ1DqfHaZe6BXAQH8AWSeGbKG4hxiZVRULyE452u2PfrPsCD3Ke2GxZohuwjj7zeVB1",
  "key19": "3kxezzkkW25tMiheX9MF6friffLt5g2Wyus97zxBCp2kqeWBeDWktps6J5aBKXDnsBhiR9X3mHEbTySkBtvT5Br4",
  "key20": "4BZSfm8uiXiXgMXc9FAf56bUyzqpVdJXcRwR7hEr8JWW7N35iEP7vjWHrExeRfSnLfyPghcNAhVAeY4HTXkxZ5fL",
  "key21": "438yTzgZX5mKwAYQXoXK997vPsrfSbru8y97mE6Umr9hMPgcLc1ELiQSW9XfZnNx9hGS2R42T9Q7kEcd6DV6zuLU",
  "key22": "e3z8tkfR8ddzDTmLdvP1rzD7qQ1K15H3u2FE83Wz3TUfvxEerMYqyQPJGWkxiRoFhW4YDZuG2ybvudjM9uBQrgw",
  "key23": "3LRhQFysm9L5xHwB8oSggcrK7YFZ8rsbJ1v4Fna2rV98qgZEEUAGPfDMuiLWjpkrRhHakFmAscpja5t7vCdAVRED",
  "key24": "2zXxSRxCRWMG7CM7wXE3uMeGcWrWhhfR74x1k7BtRPsDzXaWMZfqBBherY76Hfr1d15tAJy5C8vE4Nvb8U9sBRQ4",
  "key25": "23pFC4VDSY2F2B5wSaREPPhXsx7s2aEg23ZMcWPssryAw7Q4FsTcSrHNtN8W7UGo2nkKE1DZuYu4V6UVShNpWhqn",
  "key26": "47j6XcV2CVmVLzwQ1PW6PKHh15V6nA4YwzQGZaaF7PKjtznhzpDTu7jBXtmJ4ah7rxUTuZ8E6JaUwY7jTr2AumFq",
  "key27": "4wxc8ktGRV4G9dRMyjsb4Aty3nDBGdUQXKLQKRETmyFWMsvZvcCTbhFqedB6YdEtyVojr2NzbrV5hVxgyBDuwNe6",
  "key28": "4mjN1Ci8dyFhZV5C3bor1WGdwTn8jvH2yx4pXejPNzAgx9JFFdHhoEb8pbMrgs4UHj4mrutT7VdgXSpReVUc6ARr",
  "key29": "39vp7jWEeD4MHwhnZG6Y1SnH6vobeLgt4WeL7eD5rMaFHwKfMEPBnfT5WVZTjEws8PWgVDTYUQqRwnrWLNDf66Mg",
  "key30": "5Q43nurjTwX7YzaWEx6pwA8Dsa1WPCbm6QYrBzgHqQDdwmNU7g2uP44ZYeP95wNjeAMeCVujExyNx9CVhbwk45QZ",
  "key31": "2r28e41tFqmVrakF1Hu7eY8gn1PJ4bSFEQReWxjAqmAiCU7rTvFfFtEthLUCxjvkhoypsVCserUUJYejMcm8GJ8u",
  "key32": "5gVgJqxUsnmdwSMfrdTmgFEbAY5s8SDC6vs4CGbic2Z49rMtvJi1NpCPg2qh6m4qwDvdhDjmh2Xm7hZqZjfM3Zr8",
  "key33": "4Jmps4ZdwqPzrzni6Zsn8EUMrKHtFuQakDwGJcg5z5cmCYks5ydTDj66TJ7uJdwoaWGz2Mu6JA9acxSjqDLkgaCS",
  "key34": "4NnU7UDqiqksyaZMim8JY5TMvpvDoQ7qxxwCxcJMbp3Qrj9xbMM4Y38auYJ9WiBMY2fRmsaAbZhmraNLUXHCNHQR",
  "key35": "3vnVwB8ozJNmaYKkPnXrMbbBnN2nMMyUkb7YoKm7qCiAAkdY7upuMHGXFWp2gQR1LXewsV6G6vJwUW7GPxoUJD8S",
  "key36": "m3wTCfkHizZHUVAi55NZLfHge7HDc3TEv6UKHJFm2V1uAWxs7AUUYSVSvyQYa96GomrSpctZJ9Gkh7UaZ6bkJfy",
  "key37": "2st9L5fuErUibjfMKZNYUgf6pMdqvW7CDjKWjmLnfJZfsVTd8TPDy7gs1aPiFSyGoYm1hpLDPph8HbAfUw1E5hd3"
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
