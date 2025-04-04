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
    "4ZGZFP7qugdwhFA89LL98A5eHrFrL36Q8MMoXQh8gqMcFpCveLqw8ZsuaKF7UExY3oYVR5doSir4gMm1ajZ2Gtjr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24YwvVUgT8KH29p99rx2aRCLPtwBkVqp2iJYF9rrepV91eL4dW1BjACcfYFHKLbJNrcRHt1ZPcqBi1TE2bESdA5L",
  "key1": "4UsCfEhEmzqnhf3t97FW2MQD36jERRSsxf328kZfy8LRyp2gxYbswdvzKQgASdDpAgzFd9nGpRQN8G6KQtyreu9Q",
  "key2": "4HVLKQgBF5pHf7ZYUKaK3XFutJzK2KF817uQe8N1wxDrGis6WZ3QKFdbLbnB7GP7vgjGaFw8pFPie8TEkCERD3Ht",
  "key3": "2TZVdNVqNANnPoMJWTFJZ9w9dwuzaa92PytDyi6R8ujKjy9oXfhTdzByScr3oahwFhRAto5nJGX4sA2dTb76KRwU",
  "key4": "5Z975sbcX1LiXaDVytUZaBymXMG9LzTrfsuU8oF7DkA4dws8hyMwuWZQLi21mi1e99C3njrhuih5eem8jARpNhYZ",
  "key5": "od25tJBFuyWppMpF2BqgU2VRAwFkd4Zyr9XjzMWSVY6XesC4GJA6VsGHfRDfkc9XoHYsaQtkvnYZP45cXS5qqEH",
  "key6": "5kJ1mRCudNBDh79jvqvrWfnKqyvwYVTmgBjeYop1V8VkmkRiFKjSqpyq8R42ogXivythHFqXCTz2Edr9eQ8r6yQK",
  "key7": "5eSmPJuv5jT4ws2RSHyF85FuYfpeQksmw8KWe3w8ZRwn7ihEH59Ny6hUNG2oew77WiZcDKjCShb4LaRUrSGRpgtL",
  "key8": "yTC8QNKvYaJ6pwXPPfmrV99D7zYktRXrnb5E9aoS3g8NXDEheUaN7YNZ3zNwiWgFeRHQC4N2B5MbDnuKg2PXJ9U",
  "key9": "42U4qoP6HchMeESsupzwgsBfF3YHuusqKSeBBF96PuDGXbxV1NErB2A7xF3Sx9SvNDKSEzR6nEn554j9sUobuH5h",
  "key10": "5ENPHMHXizZfE6HGQVgXC8dQCWVxbpr2h6NLCjZpiymHfuvxv7D4PNUeEUtNTzWtEmLCgxuHDPUQjc9xrZ3VKvM7",
  "key11": "47PkBkGFmMSCykV21pgjrkTSTa9XacTb3Mv1v1MD18pjYqzeMpbNoduy2gGruzytmCMAyjk6KZ15jHL62YNvHQMj",
  "key12": "4Ye1aHb5eiKVEj8hwyZ84VJx9Gr9N4bxyMRgeNnaRghZiYNVeDgRJonZqz7K9ko1ps1n6WaGnxGJwC7hwrRDTX5s",
  "key13": "4BxNpV27RREzB1Pq7vk8Qy5nsLUXc5XofKdKhM1F6BvEifr5Xfe1NPf2c6oTo4X73Un2Dmz5eFZgvAUwYTU8rh33",
  "key14": "2Mt3Yj4k9mMbDZBLPAL6EG3c8rxRoJxvJ5Up8qmmAeUJu81CfSyX6yKZS4uQ4QsLoUSuGUYzsY43UeemKPPXyPqz",
  "key15": "3TM3dfN3S6DsTtGMu52DM5dFeMeoUjQ2v28kGCcEWWsYz93mhczCpG5vy2r3whcA2cz4Azv3t6rdiaG4m8h6vwmb",
  "key16": "2wtfXjKKLd4T6Kz3mWdY75ohUz545Hrmn7GkuBHgPfz2x4YqhsLYySU5WmynxYgURFaAhf68PvvMKFQkBJkR5rrX",
  "key17": "4FBXjMspJFDfCPQp7EAmoLyaoz9okjHPw9fJigMUhpFJP5H5kRdNnpvm2oibmezXyh4Qo66c1kjCkzfL9jPx1HYQ",
  "key18": "2nZs8ZByu4baqmxoAMDknvT7obZB7fXfE2rvmx5uXCxsaXVQ9QD34Zsu6EWrj8LYq8vTdARStG7n26bvdt2XCKGp",
  "key19": "5ipMtYdZFUQYBsgKo8Kakm9bg6FYHBLGT6gLJmTwodmRpefpxQrRHcTMA93FCToSKUmMNnc58Ph2o7tL3gAY53HY",
  "key20": "2nkxXtWZX7T2X5UPvpVdJ1EyLupJCggCncJgxtNxbpthhRFXGf8UPPPLvhE8FZTQsskBDszMnYowxX2fuMzV22dX",
  "key21": "1Dm3V8H4v3mu4niFe5uuirYiRbGRyo7bXkZ4j8MZejbxXpr4TBmXPBWqJwprXqdyJHn8sx143GLgtNnmswadubK",
  "key22": "5rx6spYHaTHoSoyLDHfTvvMcmqHeZLPzqDu8oZ23XGH8SPnHnUvonrkFjdsBMAgdPdD35EQALARUbKQ3Ef6xhxvS",
  "key23": "4iAKxkgTiipVc799hVvi7NDztJr1w9Ec6MzeDnJ29mJ9hcMwMNAqnR5puSCBHJbXkymK8jpF8Vuveiw2XEWCfPu",
  "key24": "5XKAFE7CPUMB8UT9FudqRXU1VYuBWyW2JH25pDevrAatUV96TQq99X24KqkMGJmx7ZtakiCyFs33xpcRfUdQjMrg",
  "key25": "3YNkJpELEHpBST3TJ3MRhRNhPxDtaQvjdGA1ScS3dAHwyKQqyxxa59QkEnocnwmZGj3uQp1uUGCnwZwSEzGGFDyk",
  "key26": "4nFLTaJ9gnrCoSd2PRdHXQSDskvBBHVPyZSPBzqS4YAPsM6ZvuLgAq8x9i43mDvnPCcjMZEAc5j3vLGyP1XJiS7F",
  "key27": "an6wh55wU9F4ednXH31A6Def3y48U91SHbykuCpR8LgGemmu6EhFMmWkvJQmzjUrCgg6ETVmyZyALzc6xiwVzwj",
  "key28": "g1NLYRzJAfssZjhgaqhwDThyER4XdQK5WLNFVViDc3dbday3Dg7cgCz2muUivfPbYWo6LgpdiVjhECwFUw9LXKE",
  "key29": "25PnxGpNj5C1sAviA14xkSmH54TF4VZA1GEA2n63QCSX7dBiGN5bDdbNNxqfv9Lmij1NxzDqA5AT2QqqLBcUDRZ6",
  "key30": "2jv1v31cqvTSUHvFJaAoeov2FVrPdEt3AUnRTFxmj6Kc2CJsxsora7nQfZTLjrNSckns8CQT6s98xXs9mtEd4PaR",
  "key31": "NqcJJ4EELXnp3VUBEv8dhsJ2jWdDwKdGMp8ec6NZkGjPmFA6m6SMbLacsSAEVUf7DAo5REPdKssYVDGz12dtUVg",
  "key32": "4z9y1HcFh6XRmFhSyVgXn4nBUTMGqtexHYTwLm7p94wgebhmpJejFay2y7YQZLMXVF7a5a6rghRM3KnCexD96FSY",
  "key33": "4mXaeQCPZ4y5nrMaj668nYNLNKoE73rTa6qY7guR6ekbzc83P4Bdgjo8jtz3A3YpQEDqyCg2Hdqw3mUBQapP16xA",
  "key34": "2Kez4416sZng5osK7q6svNYt8jVRFy7nXeF6S96qkeTv6cqvbvkEvGD5jy4zwJ19bzmsCFN8B1mJaeLMpH7XRBys",
  "key35": "5hkkYiZNq9yGt2p3f6AmSfedLYSQHdAMtLPYsHZDH6G5Uf4GH2cYR76xR7aYpoJHHMv7pTRQQmTjPp4hmJkFdxoi",
  "key36": "4bTPEsZ9TNnKGddJk4gWEQchxL1M3muPnBnUDbYf1Vj7ePEq1HDJitg2YcLXoRXp1BDtgkHir6zt4V2RLn7yNnD8",
  "key37": "5ko7ushmawjeaNJzzK8o6xHSzbBxS3f5JUVBrztfHo3jnZDBvL6wfyXhBKz2fFg1cBmy7QWsgknx5Y2mmZXtNKwc",
  "key38": "5WXSdikAU3AW1B6LUTadNhPztokRVY5TKGNGZUJN7AjyMbjcSqpnJgFy14ojF88XsLbwj7F5AqXt3mzPUNH2yF8N",
  "key39": "5cGeQgeGyrkyAHcCeZdYJuNbw4CcLmYrogg8fAipyAsRT3HeVfV4eCnm1J6o5eLeEYy3ge4zYSnJqmVg4xwrMvjm"
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
