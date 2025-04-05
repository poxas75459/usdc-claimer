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
    "2ZREpnNA7BF9QMHhfQ5Eb6jkbS892QHRHCiq3LfDUz3LSTC7tdQFTT6jMSBTcZkzzyaQXi1Y9YVXqLNfUZXUmC3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aczYwm1y4CmxULqjNRy6vBhSaTShC1Tg1K5zUarMoMHS16841K9B5jye2Qa5s7WMgN5vULc3syCXM5DNmjZsKQw",
  "key1": "5CkC9QH5nnF119Vc7mg1zt8HLZEUCT9Fjs5tveqDfuGUEhjuQmmVdEfe2HGntEw99zD1KhBdnuoX3Huh19HE1ZJ",
  "key2": "2EiNV6Kmb7BVSx2Q4FKqprKBmVwPnMjnBGTuTPbU6jzDBNjvWhpCY1ZBEMRq5KV3vdGVqjjhvjamR6EtSVCre2x8",
  "key3": "3NJWFL4RwuXJzwA1XG9RCMyRAHa2Yhd2S1yiH4fJzTmFsCbyvgx9h7ppJgf825LgzLMGecs9jn25rqgxMJBYfV1z",
  "key4": "ocATMqhmyvwTE5L6j35dgJ4jJBCJMHTzvT7upWcmbn7FqQY4StiSuZBxyPh3f98S4fbtLu2BhYHPXiJizVd5KiU",
  "key5": "2rgT65yk41Yz3G3fyaAc9o1ip2RXfG468iqnQJYciF6qcm9WXA46E2eP86nncV6AW1e5vzWDLRrN1nXLJABDpook",
  "key6": "4QXwYSxtTgYRLH4sbKJKkHnhJ7eoxg9uVX1XS8evZ6EXGFvqXUkntmA1QNFCxeowJnjrev9t27ZEyjdgoJPMufks",
  "key7": "2gh8bcxUiWVXkczhcXxdUQsbUW1ydQVdhcUqg4Ui83d5TLGZYQ6UW16siesUBzFZzVRw7X689Nb6JziwYsCgPDBS",
  "key8": "4JH4cQQAhJBCGE2EU7viTif5Ns5dN87FW4mnfHnh3gWxCvRNtwheV9dnS7eKLrQa5hWa8Yqc3q8GSpkNMf9XHZom",
  "key9": "3BGqY1KyTUZvR8hSZTxhLz7VZELxwat5Y89z3MvcWUpFx2UDrqF4CZR1P62WfGEXmCJdQPAU5CnyhXF4QA6Ypzzv",
  "key10": "5QNsEmz6b1YZJ2uREfXrC1JzvvtAFtUgryYYtigiQaGdbfwNTwUDAsZ8XWrRjcQ2z73NbwG5scQ8XMkmiRduPSuQ",
  "key11": "eVNSnWpenhZsQsmZF4KJPzoKpShQC6KG6vTJ8Qnbfzqt1mJNmTtm2fdQ3ytT4xS5dAqV9HV8ircFVSuEhLS6GY4",
  "key12": "4T7ERpzY1PzCY9AJrmXPBqB43sn3QjAtsimbGZo5qAixSG9nXbJ5mAfzPH3EViQDkW8PnGJNDsGxAWD5PqgG5cKe",
  "key13": "3tStnk6GHY2LYc5K8jjNd8CV3taMRyRfixyT1WoDYWpWZ1qvk3W4u3f4YtGp7GBPYUXhASX9DV6tkf7v9bQcXvLS",
  "key14": "2VWdNtzpbLdh8iFDYrK9Mi1DGtaFmC6VYpJhNKdDUbeqKRdXxcGQSJQ5sDSBaFhBpR9VqijmK9DJChiwTVBaPaw3",
  "key15": "fFoCZer2vvuuNsAwGR9XxrAS3z3DRs8yd2UY5KhK2e9fLAPs7S2tgoYfbesiEowd3WrjxwWEJNr8qFufiiQ5EDo",
  "key16": "3B55FvqDiZ1nY4vxSobuHpyXQwqQKdJGTgKFehrUSVjDz9yiSuHe4cMKCEKoraw1hQ4c3rewtA1eBzEuCQtE7Syf",
  "key17": "4whQDyk4zFuXn5grLRSa63rKwzbVCScycBQ9QaN5XzKSFn4YV2oyrR2XQA8tDr3rm2L4MMjZgQGrDgPPjG4D9FCV",
  "key18": "4ac77uSj7S6n6Ph6amTp8ko7JDabA6HSfqxWX9LQYbvToBcfWcQJvQXouezgNAh4cVigWhRGfxQiJiajDt6eX4nq",
  "key19": "5rskuWFVvPtDLt4kfzmjohCk1TBrFMZmfSpwM2rNeZzAJ15bZB7cDuvBVNUzPHuQ4KfUAxt4e4TqDyhePKsyF6K4",
  "key20": "5qJ1tPX5UTApEAc5g4kRaMiMLPvQECkB6yaAAoiobhX7HJap9NnBwxmX8AKHargV3uP7qc4ooUPUrbrGkzSyyfKm",
  "key21": "5emaXuKm8LgBtJZ6Z8SUqy7BrBYrKa4Dx4gU4V5767CPGdEKy4bTFoUK7vtW1erEaWLcTYwQgHExkJLNhtgxDJUC",
  "key22": "2CJQS9ogfXz7sESEHAH6xL4c1iZmPNUXhtSbrixz3XVViayGRVAmdZbpybFdWv8FUMzw153nR6M3jSAJe6TXLJXe",
  "key23": "4832SvEdT17pWK5n5JCYhChRQkeWKpLBAUzcSMtBseP64kWDg9UnLpeUjX75vpkxoGYWUEKPWnf51oKwZnRmWSJH",
  "key24": "261TQPSmzanw3xg7BYvTQ8johG49JUg5nw5sLZk3SsnUGr9M2WDwyvZxgxCq4jCoawTXhY4L1kom8bcYqxevPWpV",
  "key25": "2Xy7hHXPpCPghZ6t9qb4d7aHpnupZTpSichNog3rAVrJi4YstwvLtpzajgECdLUx7qXVT9qV1KZ3i2ka1yn1p94i",
  "key26": "2UvTLzJhU3hc7RP6zDBb2oGRajRtGbJ5aK5X3spkHr22srBx49cdFEdeiMdyB2YbKKoHw9PpVR9HcXSQqWFCEkmi",
  "key27": "4jDYuV6xLsJNFAHhsT2Y6a3nfWCkZpXdVvgM8JphNsMA9iveSN7SPEyCoHixZB6A8xaVHd2EJ3cdZMDEdQ1QYfK6",
  "key28": "pdJTTNmowmB3kBv5Ye5ai9aCa8UyxVWX4ynXV2fJcw4wGCy2KaEoBW9egVc7o5X74VwDBk2EKN5cPScQ5aFBMsD",
  "key29": "2Hcr94xCPtni7hDCqQ1u92gaZFjbPGQQn63sXLhaMEkHKEj1sHES4dXYkPnq5CC7FQXd8iLjscSAbz3LppJd5H3T",
  "key30": "2bm9mm1XwxViRxRruRCcJpV9e5i1R9SvmdA989pT69TFJDqCeJFbQpWtTr1vy3SSY6atsJHRuhzVrYw9Ahk7UqCH",
  "key31": "4aZHR6EehyVcoT4Mos2q54kTLRkbMZyUSwrsxYp6KYxH9RT1X6SDmhxnNeNwaMo4Ztc2UgpkAJ9sLJ1Kz5rM3pfw",
  "key32": "56fTr4P7ZgvdhK9ADnBeqnPmmcji68gnbiErmKsKBHddncZmFHNzsvt6g6GGEkuaJGAjAVDLBt3F1EwAzKf5e4Bu",
  "key33": "3GVRUAPVTFRaouhHwMcEfDd2ygTFuoTVoQqC5NtBQGRjfbvB6NKJgB4k7u3jB6nCiTdzi7GTdPYgZewAaT5eHJkW",
  "key34": "5kgRmjK1a9UzXARaWkP8g79ePwjErrK4momJrnLbLhd2axPyJf7duo92tjbpG5EUxYKXFxJBoeHKiMtAfedbdPdB",
  "key35": "57uYbk7nwQzLExwfqrzZhu2QUoVerGfnxCow43tbgtMHhsoWwkvrwL2wADeEUc8rTRDVqca9nxEDLKv7ZGJhjkzo",
  "key36": "5X4fmwjfSVW2h71ZeqPWQcVGFmzSgHEz3QwTzhq7YKZ6a5vjbvVRhP45LQoM58G2sgZRyk4KZJMSUES7WKPv7TVC",
  "key37": "2GCy4yjfAE19NNtG9JAy2EWuY9S3QZZBBYrSEH1XrnQYL9upuQL218sxvwuWG6iXQWw9KFyiwtW1L6MMCzLvXChd",
  "key38": "4iT3Zpuq488bZ7JtJ1DtfMzXFsNgKDGQLZYv6q1N3GhUr1cTh8qU3ACgmiuGniknWhwjWvYvptAJ3iwBCAhBjwen",
  "key39": "x3QDnMBMA7HtSnG3yLPQFeTVBsjPRYJ3cYMw1DqNqzLMHPn7jij4wgPhtSYABoL26BePT7Vo8Uyf2csJ7FRREJ4",
  "key40": "2xDgL2gPtu6NdJiEdufz2mZyqRYKpzxARZy1MbNUUzpygRTYdv48rBv3RHKxhQuizYfcYJZJSCVt7toX7YPTSkfv",
  "key41": "LtmzePFLAAnVD5Lm2y81NnSuNa4SWjkysE3xNFnTi3WLi8sT9NxkNBggWXkrJEmRmPd1NCTcXpS3rtYhWzqyNyS",
  "key42": "2N4z5EUGciSMPkSfP8jrvr2SuUuAdCy4n7KPP1frrPxeV95vdpWoqJdBigkT1qmb3zJcyiaWHrFeGDSrKQBvXh19",
  "key43": "2be2unS1eDtH8MUVS2fWJ8HdH6WfnUdF9o7PCaumpiWRMgLykL4pT6fp95w2MDmjPmrd2vbYFGdNfEXbmaBeRTDf",
  "key44": "3chsuLy6ggh6uZiKsFfYsXALZBmmfQd26tknKssdKBUd11vEEuN4feoYoue9RmECqUfKbcnbWD3KsQcwMAvP5rft",
  "key45": "2QvxrNoDttncMA8hS7VqsubWAx63jm3ZexnaA5dptmQXg1Q6KnD5dPVHXgHzu1p8SQ9rZqRYaCu57tUnBMyEdtUS",
  "key46": "51hoXC3NCgcDuWMCBcuzZYMN2h9TfmEeqNqUh6Veg3Hxny7Yk7WzrvbTjQcmADEKBt56dzM7GuCHUDc56MjsUy13",
  "key47": "4xdUCvyYPLThVxvrbWGe1HCsok3PqHAUu5tWdgTyiLLzR7sJPyjuVnwfkCPQHCmU2cPdUPfU3sRitXEq21czYFhh",
  "key48": "56z1EPTWJYTeM4h17VHUwVeR1uuNbVqsniDiCmPH3uwKd2Ee8b1Z3iP2TQdjAEsYQ5BkXf8ufjmYkT776SsB83qC"
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
