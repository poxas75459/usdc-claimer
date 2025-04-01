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
    "3ufTW4dcAVhXVKHTsHtn3P8QzG5Uy1CfoUL4EhEE4kWKcXMvT2g17rMUNSC6LGdQsG1Bdbod9XtfAqyGobrpqwXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JPLCC4YWsXjjhDj3V7KEV6FoPSmPAHuPa6R1ayZuyDQ3oJ4aMrSCNjJAZvS362NmKpMJ9gXpLntn91aguc75ap4",
  "key1": "5aTWskd8hV9pnEHDBn73j1VvKhNsNnC5QeH4gWq6teYAeUAQ941H75KojMVtRd8DEFjJRLRmDXUrLJ8y88Ls3NtV",
  "key2": "4JrrnQBK5BQGST1Yh2rE6Qtdgr6rHeg8BafYe5fyAD1dZ9QiJ2mKrJ7CLbNLUkHtyBfpw6eBvmmQvXwbFf3H4M1P",
  "key3": "2Pj4LLBpeEseAhdNQYVrSUYxsKK5w8qBMV2iuUDVbxXj3bXiWd6Mei33WUJoDbCwVsiXFah52GWgybLnKEMKwPp8",
  "key4": "4AUY9GncX6LcVc5fqfjJpj72bxkp89pRKSBf7cZKzaYvFwXyN8MMqaqnhj2nNNi8SGEuVRsxbZxwDbCSfhp426JR",
  "key5": "2TBhudgqs2kiQP8n9hjCz7TFjwfoPWULZH5oKsh5aT3m44B2qfT8mUQtMUumcFntbDDqHiYTKXvkRDTNWZXFbWX9",
  "key6": "5mTB6ySprrSgUpU5faW52KAry3e1UBvvtsgxhwFU4uCpYQybAQgHQ8GfxuZEEakPyAkcYUmww2DHLLirCXiMEE3J",
  "key7": "Ua15jPou79nQge25bGE7k1B9cT6HNBXtJdFrNCXt6JR8pj2rGaDdaV3tQChA3JF4ixMde29hSbEuTaVG4BVTqX1",
  "key8": "3VdumWaKXbHZtAbs2ybfGKBC6qdL282Vgj18sLft3f9off64EtzcZPxWC8FjTL4s6x3GBMd3x2zkW7mFB6UrY6JZ",
  "key9": "2hD9PVfudEmbFBMocNVrYxmkhoHmdwdWoZWoPiqtaj7kgpFEFm49by459x6poccthniMGQJ6dunqDF9JXQaHEhww",
  "key10": "4vn16EQRznYVLJtTXcK2KBFT8akpq5jSijoVMYHu8BpD17EdGnYNBivRWoXT2goHjVog3i1xLXKRo4d7CSHjGSnz",
  "key11": "4iMQmCh6T137rky6sDkXjBq5t7NRnUyWTtQ5mbaKLvLmAoowxtq7cvgnKWBdpbn8FCL9Ci4PRhtU2Mk2Zw37FEnP",
  "key12": "62kuUw9v4TZngfF2QwDYcpU7kTsBoVbSdiw3HBFX45b6qotQn6bEJQkGpGBhXSEZxF8QMxuVbQBrJpfr3GJArKku",
  "key13": "2ip9XB8E7WojNSzjaQFXbg11wpvuVwRkCh5VsypYaC9577e9sfUnkVrQvQbdriDxevNjpfWE8aQDhJ9u8oQxEKg7",
  "key14": "51u8WKeDBSxs5VsZFKhntbTtvHW1gZWxuxHWeEgvuWsktNU3DccssrJZTeadUJpNVs4SPf9aDgrSr1PceQgnhGL3",
  "key15": "ZAcMQpNcPrrCiTsg9Jpd5uxQmtuAoKJ77Aev6sWUvRyqXoMfCZpojvxuHzzLBk28GuEUp4WEyyTjZd77U3a7aTa",
  "key16": "3iVt8ZRzYEMCjLzoU7kiuNSx636SWrmkZbAw6NH4zReTvwSGfjbprJL7WkN6LAoNtuU1qvi5CAfkWLJwoEcsCwB3",
  "key17": "5efPn9vdbFLKmhsTPoXFfkQbGPSgbKhUEa8yBVhiF7tQL3ci3V18PSuTbi1oAX9aU9JHxn5yJEFfaN7YRaT3eabA",
  "key18": "4RSneVjDs5dxvFdGC9DEGF1QeNqv5QMAfRy82TxWfbHLQHuB7mBTtiW1YjoHR79VGNBA11Nf7X8GBpsCevpP4vnC",
  "key19": "3ijDjy2xsH62o8v5icP7tX8qXiJTXA3tSzDgu84UwFPDCoKczyRowThfhSVcd6W47KHMVTh7yZPWf9KQoNZWe5GY",
  "key20": "27tu7bsZ9N7mCViryTSQNHBt7Zg5trU6dYJAJCjqCvRUbqkKENUiM1KXVBhRG5cS54n3emaAkkefo8ZnVPwR9vdh",
  "key21": "2YViTz9udzRgMxoFiGKnJTeDJ2xuXasvruszUVYCbMapQfSstCVbnoiQ4CEaTmq34TisE2NFKfpMDhdEdSJ8jnKH",
  "key22": "4fKWVv6PeXd9zWuLAu9cfew4jWwhEbQSeCTNZZ5uZrJjjZAD4VVHbLkSfJxYzexr73GySrpb2LRSWxkFBaDoqYyE",
  "key23": "GezD3sfa6FFS3vTCZyk3MB4FaVkWGPQaJo5s4FixQSc5qFM5sP8vqb9EB6uXXyUcmKhi3Z4zFjdJtDaQsBWc2rc",
  "key24": "fG36ooXu9qd9ipmAiB5vfSLjbTzjyC3UwpFb2DwMbUY6sB4MWfA2LfkvxYbowxLqP23ix7HVTK4w6ifGqg4p1nW",
  "key25": "61c6LsjccgmG8P6rZ87vzLPS4o88ojE7TzaTJw1EdsSy2R2YBne4rPojX4EPbZRxW5VfEpUYLcKQraMb3Sv427hM",
  "key26": "4Wyero4vnXhqRs5X6P2yHahsrsQQejeyWWJdY5MAFzTiM8eXPwMvqxUbDP4jBt9wHrbKcyShYJiqeZVq9HtktguS",
  "key27": "52sk1chhgyKVvbZMKGtSnGGqNQPqojmFxbUbAQnUv5v4nxWQAWjK5ix8kRsNyKYXZiJYpDRVfiV3HZWihTKxYuiE",
  "key28": "5zWmtitQboJwq9X1cos2DtVB68M9hQdVHsBtH3uMPDwWsHGLudXUtkLjg5fCnyLoSwcZ1i881bkKp3MKyKdqKSB2",
  "key29": "4RhBACr5ePKqQfYhhSEX29csD1pekKV3ik461RYjtYNh23qY7mhFXJiEgXK48QVpBxJ1j2PHuhYvBx6wyDYZ1hnH",
  "key30": "243UQkqNJoZodUbqgQiAxw8pKqRoTDDP2vDTTHdh5NsYeE8oqsUtF5UpN9NNK1v63EEuCGXj1mtcKTAd5go9enot",
  "key31": "3mwYuoRiCyi2W4VxAi4GdVLRyf3C7NJdF4TnsJv8qND1VKZ6YfWvUXX1RUL9XZ5Mg4Ra1nnvFHuyyCd12ewyjrAE"
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
