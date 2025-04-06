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
    "24DvbAxsCVLLxdYNiL1dEChApwfk9ByxsbiyGrzcqGP9ZBVyox8xtSCeKhXDrSC2pUvnkUf8X2WK4XRLRGPNkX32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fg13Fy77KZcW5NXeCRS9GYdyyWmdw1NoaMo2NcqpvVCcHmr7fi8yLCMvNRbPz48jCgVznJDgwB1PPRqnW28GSSa",
  "key1": "397WDYSLdnq88KiLALaHKa7kcr5ThszD1ougLYpKGoD2d94ehMhCKpG4iEkdPNzdiyPPJW89bdivRr2wx1t4hPv4",
  "key2": "5xFFzTfKuSKQikEJYCzcicK7ks3AUFpN1if5uLXG5tKBrL12LV1hWxQEB97tgRWs9Sv6yLEWhnDWVPSudJgkHA7i",
  "key3": "4sXrWDTncVgB59GmtYBp1C9Kg3jhUd8bXRAWYWFztYf5w2NBd2jBQiQntJ3RbJcrgBJzUJ3RSTFRBFpPxbbmH9kw",
  "key4": "26CjCa2uVnpxkw7eV7fssixNzvqukCvL2K6sKtdfiyEzPYFhGZWtkiViSAqEoq5CJhrJYALAJUyQSTjwCtW4fDGZ",
  "key5": "32xnzCCRgPNfKFk29UzL8QXnL4MGwiwqm5DMZuhUTDyhYC2vXMXEjv3sViVs8qDuk7G82KghaRwnWowgdLFfeoza",
  "key6": "3xdG9dDouiHEyBAu17ymBEWGckn4kPzzDA55CjeXmX2XNBbCySnRYmSQMtBsk1XYnHtVaH8ZL7yaHUmFuxQDJjdt",
  "key7": "GMnYqDpvBpB4yovvdzx2v1F8SSYq6gpRcp7kW4YyLmXJYs4ZRtW1fzdMXtCG8cb46nkz9wvNQocX6KR8GbC7Juv",
  "key8": "57qwxufAXLgi1qwjrRZ9gjCfquFyr9XaUsDji61hY1ohQnD3XHfpUbzyjrX2DTdhkZJAT8Ch9A3dxB1UfJqQ5gEj",
  "key9": "4dx3d5E9z6m4PfgNs9b3QkDu6pi6HeHqCJFx1wPQpef4fdh6iYm1HJACtUq3uKpp6fPT26h1MAyxdTTYCBkGPj1j",
  "key10": "WFXn5gth65WH2yAokR84HWdwg4XpsqB8GgBusAnhhH33CXb4A6QK8acnEUfXtdcRVvNvxenyRSptjXgkxyrMqHF",
  "key11": "3XHWYPqR5z3JoWVk42xVnS81KKqpKbtUG9NNAi6Anzu5wQEuhfB6fY9FHGwW5gGtWtkbKSTcbXC1RtC5n45tzzmx",
  "key12": "3pEtcUcm7qiRhciTioB3gknJd5YHFqN5WiBzvjhvjvQGTjozbXLhtnMArUtfypGVsAErgx7hDGrh3TSBGTeWH4ap",
  "key13": "4SJbG9qzBQ5HKJrwCN915rFFLVEm6GBHVuBrep8UWNUWLwSAeh1LyT8sQTxt1RSZWSGY5vuUimuxaCf6WyAuri5w",
  "key14": "26pga3T3xVJqFforZAaPGWYfqm9eHDf89E63wjd4h5S24Pmtvspz9896mD1Zo2sJaKNJ3H5isidTMQ3hWow4GYX6",
  "key15": "5CJRmfKDFHEmiJcqMD2zGWK1k5mpK3vhDaD76ATscHXPMj7F2BXQDwxT8uXbzr5CwUgSJTKWptWX6kQWMDerUia1",
  "key16": "3djJgUPBHLECDmh3fA59mujEaQExDyaTcALnHqv6gah82H5GSjTyXp1o3w8qXCyWhLtdbfij5Wp73tJEoNqXRBB4",
  "key17": "4tVmaTQKGXWT5E1NEoePp3yYQUu7XhmVxoBZMsENE55Jmi4vxESHcybz2AUaCeAqmgTTXXYFC8wPoj4j1WWRbeHt",
  "key18": "5a3DowKcQRTQQdh1o4aqk1BLqqWMyAoYdupyURjqLmsusiDVBF6mePtLPnQbKJtZf7XsZn3XwhzU4DmXnDZMGQaS",
  "key19": "4cSwV8uq2ScardYyoqu8Z8eHv9hvZw1qwoEmiA9DnC2C9eJFrheBcub9JZs2CH1tiPqZaccXZJ5kZKQ4Tv5asT66",
  "key20": "yypb9ZTgF7kzUfYd1LvAqfsn6FUZL9Vz1mxRBr1WDVYDn1VHQ5t7e8zwa5m81s5P571vaKa369a6gxvHWzBd9ax",
  "key21": "MMas9PFyaRG236CHU9txfe9j4rHQNMpuJ6TNcuqzJmUASTThAKSURYq6Kkz6Y8FKSqMvt1XnC2N1YXgS9ej2BTE",
  "key22": "4CuafNUT7iHq5pNKksScrxjjUkibAazZywLrBbp98gN9YLoYwYjqu6rzG9pyujjm1S9oKHBLRSSxvQ9UdqD3Z8tj",
  "key23": "4hHHJjWjjbp7s8uY6QxvjbhDQG7SyCJgg7Y2dcbmA8ptF6nzChjcKyPLbkE2P2oNg4zEDJureYdjFrZhjSTE2xRB",
  "key24": "2T2RsQzUsuUKAeUvGBkLHTkPky4P8SSDMX8ACoXwCpJVFEYcfSGYriARdNknqRGorc19SUcMC1y6t7uAvLN77zjr",
  "key25": "3KVnJ6Rm7Vh7TPYn5K5KQ3VWEaTzEwd3xhTXcZ6gRNbsKGeAMYPszufLnde9YrvSvnBsVwtTHweocycnHn9tQS9B",
  "key26": "3fpcMiP39n2a48pAqAZCJ9eLwP5nsBqkv3M1eH927Rkn3YGUe2ScweTpvSn38teGyY8mq95UJqKpQF1kKph6yQw4",
  "key27": "2q2keVKRTf6X57JAidBeVv5qG5Y3sgehK1ZmWUuba4WKh5sYafeYsrmsJCUw3m914XvAmj6q41vJkzcAbPqMwa1S",
  "key28": "NnTZfyaFgBWZJhd5Xjht26CeUgXAYDxHTJPEM4q1izh6oYUpJYtJ1ypStvvM9C6U5actKPFXL1NggyCnKcmcQAz",
  "key29": "2STWeV7uYnndy8zG5Z3XBDJ6gioj3sn9fdsaXXsninYq8MxuMLKbBbpUvbQV92iwALWnKR1PMYAmYkGfQKgWUpBR",
  "key30": "4Ho7RJhmpPXjfbVQCVfVuAquqT3GYj6rpFfjXVDWJpESY1Xh4otLbtqMTVhH3thn6jQcXnEJsQDbH74qv9GtZMqx",
  "key31": "g8mUaJxiDg76s9QPR5P77X2hPjqsGbDcGd4WJhBdmyPgr2kjyvuL9BHYQd4ULKRVfRqCBmAze7Pbqt63hXNDH7N",
  "key32": "338DtQwDzF4G2CP2irL2U2KWVgvrmcd1247oNKvj5MFTmw9QY8BdLJhZoT4SyrCq4CfApSqvqXpkbpngbEDbyom1",
  "key33": "9whYAcR7DWMRY6CdZw7wyW5QnHThjBGnKyQgekVEF9mQ9NgCVA7LJ2AJ1kFyJEJyG9Gz8Ay6doFVXTErTZidSH7",
  "key34": "2ovztKpoGNRDnTN7gjWGR2z3bo7B34R51SvqWqwPXNqJKKVQ5nh3kdmudEuP1sjcgfBwRX4JXMMU564YqvEVViPn",
  "key35": "2NprLhhQM2scPdvV5EYM65zojG7oLj7dbNdkQXeQp8Xxca2wW4PTGsJkubvsyHZw5iT5kfBnrESoUzyFmopMssLt",
  "key36": "rbg3MLE4DGgPPrhwWQfo52jomwEb2eLSnYRFyij6ry1yZ1RtucYwV1tVerd5SPa4xyZGq4iEMniFSPKBnL5tk9a",
  "key37": "5muzBDjX9F6Me6yVikeRFumBmHFZ9tdd6o3zudGttpmxT7uUCoezLvqfinoaUvS87RsiQbtgkS2dL6UDYK68SULC",
  "key38": "df4qtDRywHSRbtJmewn3cmUJX3UAHXPnZUdKGm4u6doXTbDxiePBEESG9gc94AMNYsageAzXG1HAWHH3KJTLain",
  "key39": "hQmijvctfchJan4DorX3ZVdQkDKhEkoAUDDg4BsEhTBzei6hQQgXFNQX6nREDFUCMMQBFj8BCqTshCfYJ3dZVr3",
  "key40": "5J6kAVvkpVgoAKC6CTBPVR2eWe551YZTPQGt9qwQjcTotzQoBdAK4HSeN4m6MBoZ6g3ccqXWx8trKHruRGiAw66x",
  "key41": "3LLUUY5WC2A5v9RCsnWoUu7AgEMhhPrt4F7b8aAWGjzETeCr7FDairRP2xtF5Jb5DxMx6vDnFFHbrnoJBU2UTafL",
  "key42": "4GEuDyjWVCR4w748caHP1XA8xt7wR6HMD9KUDm8Jgt6qQ9U8LsfNEirwYouC1ATyWuKfCmLxiaVy46zxrrkpoGkP"
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
