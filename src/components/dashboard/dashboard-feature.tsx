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
    "2e4AprrVhC685Lf5PHkAvEHDCGSmGDwBZvkWRgLqXYTRccz66yVFhB7jF9jXkjS62zBc7Hcaj2KgrKz9Sxw91oot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WHNzSBp2yiK2c7LPxMhr4hZYRX9dk7ZmWddmW4YJYN99aaUBbAn15XNTb1ZiQFPqPMYwsyrRoV7rcNNZk3wQnGr",
  "key1": "5cyDD8BWj5MBXoA672eoxYks7akS9ud9S451znkYaLiJL5hm2w6gt4zGNVRhZe5kBwD3tnmRhsnhrdyhwv76YffH",
  "key2": "5BcJY3TR3mcsMPR4FAm98nKrriB5MCRKd2CMdEekRy9CvGySxUfgkL4jYX9j9X2mhgNnvF5LS9X4Vf3w7U1ivQFs",
  "key3": "4MiQMJd9neKTQuzWwHXNFivtzuaesxcKjiLh6U78CkRExVfu1MPXrVXz1jvscXBgFZhoRWvVHYpjHCmJDan4qYYr",
  "key4": "2YeYPXZoWrUmjvXvfPQxijH7gF11x4cNuCzQHaMec4LdUoaN6QApCWQqcABUpan3HoBiepaJJiroR5LXsQFfcXUL",
  "key5": "2fJNtk8WZc3gnQzEPerbd1wryhWxSP4oHGnD3t9nNLW9Nva9V5qUx8cCprZYYnJ6ZdEj6yvRMfbumV3sHvVu1cpz",
  "key6": "4oydpWWupf286qXfnfWiLYbYxcNFpuEo7Eyaa5FXsVqX7VqkQTFznvNByGhk1YSp8suzyyeWQKJW5yAUg9Ak8WrV",
  "key7": "3H9NsqdKYLV4qDeetiqs72NKV2KEhzYeE1FSVEHgzPqRkC48ENTDPD6GZDFwsoMXoc6F1mtV2SpQ5xHPwbJ3ard1",
  "key8": "2n51ureN9UaVggPUP67pFBbUQgJDQn9KbKZ2spgo7DCiaZupzXoKgHbV5ptMrnaK2LrPQjTYBwUYTKiYBV6j6ppW",
  "key9": "5PDFatD7ZLaAskAhUEX34XYozs7dvU2RHNLEamyJnPGzPqgdZymkiAWdDTLKs8diyAYqpmXkVoK2mn9qxG4W1pga",
  "key10": "5cZP5Zo3A2hExUew9mc1cq3cBJLj5aX4MMUdi4dN8vXEAdnMhfLN8KhCUyvhfSP7ArQxg3WV6rHjZhBFTHw7tqB8",
  "key11": "2PxpMDaJCSWBQHPfeXAKJmn3FuD2ypVe52mqzzYQL1uhiKZAmQDN5fWPxxX6xG4eAvtKdDtd4Tq5aS8cDhzhYwSF",
  "key12": "mxivemGdXXVdSD6yn5zr7mqFQsvebPNd8Y3dsfPYmC9vWp4dfXSUo7dKgRsmrnudMiASvkmwMs6ZmUPWGthQzjm",
  "key13": "3Z84amafwqLQNCac2gh1KU3TzMT5LD4XaUwM23ZvR3F9bJ5wEsZVp9oxhnDSQaQnQ3KkPZGpTRcCEwbmhkAwvbEj",
  "key14": "4xCM2aYWteWoge2FRQCh8oKi763JLm59gtGdDNUMNbn8FjySiyRErdF1DVfEnpwQBdTJ93Awgqh5b5gEXtiEtdgG",
  "key15": "DEoe7XMrZmeqS3WGWmup6TvrWi5hmHVKk7q8VHf61ZP4AauKy8TXiff4e1Jmn1jAtxcpuKwgyCdyq9Ywo4TsUTq",
  "key16": "2kEAYsgHJJ5Uno6yCH4fiGcv3xmeo2J7n35KuM5jbVw6zhH6PeUx1dTzNk7dPzvje35G5cFkUHNL3g5QpSDg1hSu",
  "key17": "ygr2DXNSEUiR5aqjjmrvUtgp9yE6j8AjV5yvy3yTaQHjNqx2hRrjoS1GhMFswe3Rw51iA3fpfZ3VyEYCik47Zfw",
  "key18": "SVfegDyLmcc9dbqQyT6crdySUBCSXD4j3qEN7LhywyGPegDVPnVo8KttjgVNMNyK1M3UMYfoDBVJWgRpdB5uWue",
  "key19": "3a2ewS5iFfnLYKrnZh8BM6cjgVwXwVLwNCdaUxmLgo973xqzC8qWD8nB3uHcpAa91q8J8u6oio2gucXZQJMpyzLP",
  "key20": "3j4AdekZLRvCnwosy3EJdNxpkBhRHv4qZbzEmdA9oLZXmkAzFBsBsZrZzEfffjFNYhmzCbSQoxn8FtnvudP4BRrz",
  "key21": "2UvuGm9QH1NTZvUM38tmzYvpRnXT4fyB9Sp8Q5KArHoKnVGzQgikQCvd8Dz3NLzYEatfp8fKwz9Jx5Y3P1vRmLVE",
  "key22": "4acGo4eSNqX68K14ZHf4SdrAbby6wqf4KPssxQxNVS3yjpRp5TpQdyrwxmA8sFCcHwNP93LC8GLgENoK1VTnQvdX",
  "key23": "3MS39naru8hEvvxbZnNCikBb5wjG6Nk9MZkKzWZ6Lg9y2qqgmwirT1SXz6k7KyTRJiHksoEVBR5W2XPLqjq8YyvR",
  "key24": "4Bs2M7qDPFMeTu1Nd5sdqRUMjFsj4rWxgXmEX6XAm1avZ4RZK6QfepiDpspxjQxR3nxtQA8Lbek831mKRvSQtsLD",
  "key25": "4gGVihnn4dPvdbUevrCSv5i6yMwPujgSnHzsMHQEeXzSwgCNNMGWdAsaTBQXWtPjYKBMBkmrEuEmMGAFrTnUPQUL",
  "key26": "3GBzf2efNXmScS9Vz9MS6VFpcDB7sCoGdRqbk46fSbsQayQEL3jeruiH6SgtuBg62QtcjYM1dhBJVRxnWoYVV8pP",
  "key27": "1eCtAonprRhqcvLDAVZrdj2P1Asxs4adQmpWrqQSdJuTYvoufiGqoiwYffVHL4jdC3zm3smEasm2vjMFbNicnXS",
  "key28": "4xrr6sMFysdaESPY1yxtWnXMgS8GoZ1AKrPznqFiqcrvDo919URATYsdDXr35B5seYgEmuSHRKUB4uXph8iJRDDo",
  "key29": "4bt12p99avVSWANwuCLV6g561WVVuQo1dapXm6n6FbYMZvJV3mNTFFpzEw5Rxpxv5Wom7H7h8pZVrvtRwtvtYvoE",
  "key30": "hwNUCckoRw6uaXUCX7xtDFr8ksLMb7hrN26sVBW9YZTuJnwupkeusSyissQ31jLT83sWgANrWSwsAoj5Q16je6N",
  "key31": "5ZSRz6VSZ17g6Kzjher4mBSXXDwBkjJWKmH3tKj3CTrJVUrHWDQX7pHseFEGGDrHjDQvhoMv9gaVdrFiccjCA3XF",
  "key32": "EGbVbusj3r3EfBVXtwxcFkY31mSngUoqpBHqfALDrrFCyiefq6nSMhQ9CpMNbSWzHtSMKLTv4q3ThLh3gJGTjov",
  "key33": "Z219KozGFXf6punUuYSHcZjpVkVzMhs3e4SD17je87opLdkXiPF21NdivkV71ZSYUcg961PTvX1QhzUTJMBx4oB",
  "key34": "qhBZFdg9H7ucJd86u3C6SBiGFsMBPpiyhEQFozEo7BETNxbBjnQC6ZGUgefFdVznThh71ZR1BDYTypeWLKrfaLQ",
  "key35": "31ySReXAtgPjYJDqw7R1dm6GQ3qSAXQXAM2PPAeEWY13zpuxQNHuinvPDvJPknX6zX8vV18tY2Szbkrs7xsi5pgD",
  "key36": "iptofYwB8hpfFjt5PecSPhfL8n1i2eQxj9rACutiry7crM8J5vwtNbfXKWPdjDPhV6V1hnBpud41BWQpuzUEJm4",
  "key37": "NJYDqUroZMEoR4Mx5hYEh2yrC5HwvDsUHiUNc5sTJpvhJCYQvPmfbxvorbkQn3oY1khR5u4rwQ4wJF3FGp7eMtP"
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
