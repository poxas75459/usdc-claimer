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
    "5g5fjFNpiFkX6a3tNBxDsF5WLrbFp2Mxq9Ut5hvPHdRNLmVxwh1WLE8E56tT8XSZzdqJmtKMDFs6FmnpF3couh9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bPWRFcLAmAEU3PyuCzJAeaCcy7AtAXYqZFTJVJFB4nNX3svR1oYiMTfNQdt8BpNm2t2ZQPrGieX7qAnU7QnQU2",
  "key1": "4f2mjp53TXC5raMqiWQc41m7nUpCjtpHrcQ4729UJhF27WxmCkM55doG3oTtJnpKkR57zWJU6h7mHMASJvxXMvgA",
  "key2": "61Aq1jZwRAdNDWrrZGg4DR4XoB4WJi5y6Nx4CD3v2Az9YtVtRCnTripJDFLfGRAj5NMJwCDn9G2yCDQtsc6ybeDe",
  "key3": "22VFm54kY6T152ztaQg3DswXrfgNyvJXuzcbhJxBYFe4SyXvsuyobJPA9iony3rD7E16uHCqhxkJX6wD66hq23dB",
  "key4": "22msi2xo2E5cdnWYoh36HZVP7p9g3TudoTuVaWvmZELXV7nifZd2DSr4RWSSwixzE68EfyFJehVsPKnHXwnksrTF",
  "key5": "5QzDtKDzf6J7F8TJRMQhPegNhXuoF82WwA7ms8Lyhf2Wxr3NWq1FSWnqU4Ymy6ecUjbiMtyt7sGiNXTsqCdQHorw",
  "key6": "3Lbv949cytpMydjqLKz7NHSQrFBcG12y39uzkqfz7CFEWZmGCQ4W8Z3svEAfj4iBCvjjQrvbdJWtwbp9myQoGGMA",
  "key7": "5zuf7Uz5ZoyyTF3cU7uwYDXsWGZoTof9Mp99xDpo9xPyEofHdbKrLBQKQA8XYLhPHxvgiUr4zBadPmXwfKccbjmT",
  "key8": "43F32MryikYHCpNw7hyRxsQuJBC5jSHGpEHfDm3dfCsHv9x22F6nRxobRbe6bLnnyYtTscifbN7HHkcCSRmgFFkF",
  "key9": "3yaaKAZeLaDiEZn1tAG4v4YC3eLzSFPHTiAjUNkTPBoiEBtbqY3nUymNquAkuH754ggTepqFXupL4Jdihet7mehB",
  "key10": "sxs6VuVSRVUHc8iC9dSn1MAcNimUh4wh2wg5FAtpRNUz4jbrYaxw4oX8TebMzgKiryRaWi1WcgQy72LHYdv36Vu",
  "key11": "h8qpzcD2Yat5wQBHg21bWJzLSvKTXQmrey9L6eezCzxJGtmsU9wBRQKwXpyUi8awET46EY2h523rWzTFPtqC3SX",
  "key12": "4Bah7rEaEByCDK9Q59VFdU9AAShEdQrSnvQh8qYDqYm1N1JJUmxHcTCbLjW6z2L8RWyYMFpNomhdH9VAW6W5L3eY",
  "key13": "5WCFgd7EXuqebamniVgHJFEzxz11RXE1MerXeeAMkoJau1e1RQWXAJFqFqThqZBqRc58x9zMNz2C4sUNJRR8q6Xg",
  "key14": "5BEcUAFg8yXojDjGuogaqCmqaNDk6FNZdKo4foyLxqcdSVMUH69RCjj2nGkf5hgrrm2opMTafSvufDa4LRtEYr13",
  "key15": "5FStB6PTMn3xrbhpiWUmsuGx6oVuvUBFLj3ejd6cdeCNYAU6Q3x824mCXo1gmgELj1QYXAj84at7JaoPSYaMYqwd",
  "key16": "628TyVTkY7KShfAUXYHEY9ucvcnGeTZ3LkTSAKbNqb5JeeJdevpnpiKegBzXWf8o59phYfF3zqUT7EjZejPYnjXx",
  "key17": "465HxwEhS19y2tE768vkfuegq4q9HyEfhgGHiJd2XhvFRK9aYgXwpH6zoY2jBPMe6Q9G9hQHqeLDQQR15HgrSw3E",
  "key18": "rGgBL4NU72ovxFdsWAhLc38dqS3YQ5nYA66VaWZ6KPH8Z1yqJRDc3zDLN3145h27gjPQ1va63hgNKZcZ9Cs1Us9",
  "key19": "3GPD6879QSSYQVqh3uQEyA8JaQ7gc2MnYziiqK3Fv5drtr99MDpaUCYHjR3DE3HDigdb1yJNByK9imQw1AmTQA1H",
  "key20": "39TccBGzRvXoAd5NiTi1FyRjxnzWgYc4DebaZD7K1hcNru66eXaicTfVEsqV8RFVs2uanK3TqEzraZSBGtDaoguv",
  "key21": "2UsTdWLDLaQDuVhAz2YeDnJ7G7NLG5PvQJ4A392qi4N2dzHjjsQ7MWbhgGS2NSUW2QwZy1viwB8LTwD9RrLz1q1S",
  "key22": "3PPgjtTsnHkAc6WaVwnAUwot55hcBAr4rpf6PTBbdJK1JjDTKMqGCov7girMUVTB1VfUqbGxZ1CNR8wyogesSu4Z",
  "key23": "2vDSm4rbqNkXfehwEANpiGqxvsBGtUj2nchJBomMojRWLCwwpWB3JcUxaeQ2Hr7qRLRhX9SBrtHZ92ADFebNERCE",
  "key24": "53PSH7wfvuZBJegAduGJbfrF8kySHdH71Ab71pzVQNPC1hFw1J99U2chiLpdgGs65K3HbFPd885t8Tw8WusVk9RR",
  "key25": "4UKPyak1mUiym7wcRoTamrjAW3NaC7pLmGE1bAqyYbSa2wbMcQ4cUhzUEKSdBrPV811sRhBMqT9VTS8QD9zoBhXs",
  "key26": "1kcX75jcCWXbapBi4whFsofnW15oqyLNxxtK2hLcdR8yx2pHzLaaxK3o6ZoDohJTJhEY5X5XR45ho59VzZeSUu7",
  "key27": "eDLtrEMHvCJNnnGArGNwYSEU87KCihsnZbDdMe9LtezPJtGUkjNHzrr56vHQrmz7q3J8YjFEBJvuwXmynrdXEDw",
  "key28": "hNhFGoA89VXhVAcnjds4BWSn6kgLYMtTjbsPEWNup1PDiX7u3VELyBHkRxn8ZmYQrmsMeBM6JaWiApUZ3UZ9WMo",
  "key29": "62dc3Tb3J7np4VAVQTb2TEB8CkaLS9UdhPNE5b9CgRB8BNTzynPzEcfBmnqJNLn4ye87b6eduw7eLDyB18mNT9kP",
  "key30": "AksajzVpEHtbbQoYQHK586V35c72v93dGJydKY1f3BvWFQhBdnqszki4AoP16yHr8Y8aAD6jtdVv11RAZFDHgPX",
  "key31": "uABtSN5hQrFhW9jhP1wuSjyLAate6oVLyJmTDCxYWU5GYfpt6GS7Js8b6FNHqpwa7eSw91x9M3fw83Mj61QfcLa",
  "key32": "3dUBYZK6rfFirnrLh6EfpCHVygiwfyA3PXSSJjRK6XpxUANZuQwfGqpUzegkFVzrzXZZSYMxxkqujtDKi7LzBDzR",
  "key33": "xuA349ZtdqYZViBCZyu7sm8cGtvHUqg9A81y4MRRvLgWhSQEWEvyU3EmnJq2J4zEZdYUWGNazwzqg9tckBPMe32",
  "key34": "5paLBzyAc39j9RtB7oh31n3JqDStaQ5dKHSrHbyPNBn3s98mZXyHMWicknev4z2ghjMRC1G4JbwmJpS3q1WKnBA1",
  "key35": "5xoMVwWarGWLQGQYDEjqgAhC2S3EownAMvrFFVkUHcEwXyPDvnfHXqZ7fvcgX19mkC9mdLQgAjysRJhMQ9dto7oa",
  "key36": "5GYJ3Skb1oQZtjZ9d64TSQCxzeJbaeWJhS7bEstJBNZVUv3qzC4Jfvcxz54i3rZ4vmtQztXqjJAxxJ8hwoFRYbDn",
  "key37": "3QeBMEzAmek2zGJyWMutUeASzuhhov72uY97chLmHdEf3S9q64GuHLoQVsuLgZjoz2PBYcbTR8UsRJYuHqpRLJWM",
  "key38": "4ZG2BCFiuv91MiCMkt3gxpbEHHTwWjPSzXgrgpwj2Vq3XzPkmSkN8B1eNYRRxp2AS33W84iaJBRvngFrhH38eWw4",
  "key39": "2WnMsW8wcrzWXQzCE4AhXvYsXXjVxRXn3uogNKs2UgSwavBzE3PfptsG6QtFAvb4fCECfYH3fNJXJG3nCoZ2VeZe",
  "key40": "56c4SxrTVLByeWx4dzLKvxDLjpFjEuHABb4EG71D1cWmzWNi45Ktob9x7yAtCikK4DBJfHfFmeHvQVnq3WZUKzYX",
  "key41": "62ox9YWbwypEhMHw1AkAbAnrqnnQ546s5vo8u65BZMkFzMYCnS2NSLoZjxB5YsdRE4y7nwXp9fAaWeJh5VqKqrn1",
  "key42": "5Td1bG3XXDC98iadBT1UeUVsMNSRUrsQLNkqcQZciBveygCpbNrdADEBTum3WBcXEE2t79SNgitvU7qekffcQfwS",
  "key43": "hHNfLo7Fe9xjtufP7ZybMV1pUBdhjTBWGmsiDwHPCvdLq6bKjQoHBSNjqqUcHYzQF8KCGa6f11pRRApEuth9Ni2",
  "key44": "5hHybaHZ1UD92vB8F7TuktHTDjvbZG4b619UXVNvNTK9koXMiQFsyfDPqAmb7UA2rJcFBnW7smcBpVE4jvwjdfs",
  "key45": "43QcPUnchymuuDr1vmkd43qEca5tQfKjCSANGydFqwkW8UGVzenC8jmognBfbwLMKrjkekupKUDHftu2TkFKa3r4",
  "key46": "5o73GtAf5tCS5Pia63dafjHn6hBY1vEDDE9uRN33o22bDVyTx3KsUVtcuqV835w1X7z6raQ7fsDLNVNp9SvdgCAn"
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
