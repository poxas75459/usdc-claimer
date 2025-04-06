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
    "218kFdYnqMWgeaa8C6mwDCA45CVHdZjRRB47TUvXzgUyyGi5C3Kx371DimM8XX2VuTktT4UcMHiqunAHEnQSC9fU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49hVVCMcnuQtUYzwuSNWRTzT4vQEgi97cXk1hfimucMRtig98Y6fWdtsWHWpogDKn2rCbpCwHmAz3P7rX7LZ2SXv",
  "key1": "kSLj1HEsRBS4UPfTzcypvD7NYNDvL2QBKBgGsdtDxGCmvKMJD4mYH1FPjwSdP3i1yLyavWFSiKd2ddHUCa795AR",
  "key2": "252ScbwDBmAqc4xE3zWx7Ki6HXxswYUmJYjvg8p9qPqn5ujPRhUnUWtWYm2UDLWZwxM4MNKYBFcT2kYNoUHcJafo",
  "key3": "58eyjof9TwriZaNmJ5RJ7p5RSLWXvipphzdMbS3eenm7bRSkaZEUw5St5UxszE6RLXgDNBtDLJ2fDEjWvFrNUWdp",
  "key4": "48rriNNTq1NF6ZtqfJz36evQsCipgh8mhNgeCmZyQMtWxdGDRbVxkTWbeU2NqKkW7wKBUBN41SbQ9edwPg5MbcbT",
  "key5": "42qqYMphiPMFTVxvjpNrBG1gBRecXmYtiMYFrYPwQeUXYo7c23HB4cWQzN25EEXcWXrcnV8iNCQGZEToDE8Z2ty5",
  "key6": "58A89wMcyf3BCx1HaJfkHhgM58ZgZUjpvY5a9zyATGn5zVzN3LN6XgrdAY4eVdPyGrEfGKDQiZ4uCpJCd3guKea2",
  "key7": "4Y5ajZQ4r3qLmkCkor6kNRVoZMym1fq6oHCKGv9ac4PRGbn6NyWEjFZBTf364mVaU9rdLBpm4ckZoYMzM4uLZ6tc",
  "key8": "2VQoQL833iNZ1kUmns4iZAqvFcfcLK3qW161Y6fESAHvc7qMDwfz1PtV2eZYWRCdR6Ka8Tgu8EvRmaLoCFPibP5d",
  "key9": "3YMsKkv9kLaZdXETBJigJtkaMiBHhrxC1QNiuXQURRpWdFqBf62LHLQm9KqUNqb4iXzdHBfwfQx11ohi7ni3U8xE",
  "key10": "4vCeKAt5AeQ3a9JAymhxP3fvt59B5EVhRNBreKdbfzqCH36fdsMMdUJRhCrzsvKhngnR6xhNrMNkimdrNRwjkJyR",
  "key11": "65eQMzbU48PJKXN1q8Gt3qBaifCBZX7DTFMRqHPXwF4EGvp356JJA2vtnThhSGXZZxc2E5HEAPNb4WyjoMs8wY74",
  "key12": "46oy92FezMFf62VzA2PUYyKMyUeRKVMaCgXSHApxwrtmgmzmSHFMjUPuDHebYnP6DYxVaqgwVLb6WnRu3eRmk8Q1",
  "key13": "2qF5vgNLNYoPeg2LYTkp4RfSq8gs5LwFFhAGwB6vnBNWMHrRvgYXd6GTv7wD4nCiDYCAXgZXvqSe7jrvayuHzSkS",
  "key14": "4eLuARdgxr3uPGBi7zAY1CULQpYhKmeSY3XwnWZJHvt2A8rDvgv2F6E7uhqAWdyrgF5KdJUdNQUvN6k3B2jqZynM",
  "key15": "3u9mn5BXU6a82Lx13CR3iHDHzE4iWKMHYqrGMuZg2n4GAzfD9iYBBVd1bhEtbXbAk63jzSiJdhzFwhbLsW11uGx8",
  "key16": "59hn5VygcPgvpKgVyoxp6RsdJvgYpuqgGRhD3St1Zx2erCYAK93Ca3rVw1EKuanmgu8d96u2gP5rT7qDmDzzACWo",
  "key17": "5N6T6Du2HJBoigiy4NfioSfwQ5WqFz3h2Cn4otBGmboVPmYXUtdASoesPAX3Vkg3oJZkriFB7RBzFxU5QUWxFyJH",
  "key18": "CNso6fWXYUih1oX7CUt24ZohSgwJf7YLEFZzpUQmTJqowyjP3JE2Eh2xtrxCU18tHqY4KsJVYmg6Z2hjrLLxt1u",
  "key19": "2BXyrL2KiLE5WvMhrU4S34yU6iwQNXtKHwPa9vzutmY8SQG5r4P7JuEDCK9zFBd2VTYV4yykQGtHENVNYCyuSiuH",
  "key20": "3XgoUijRrQRZNnDqXSw7gPm9hZU9xudeu36gqn733LM8RiVNik9yrELCRifQTxkbUTtZpQiLzCVPnZ5HDfYcAYYY",
  "key21": "2BVuu2hVw9jhP5jF4KqAeZmXer96c1Qq4MFRTaUmdcdDueUZTPGEPDNgzjNTyhaXG1cRBuGwSJ4qe7KhYtqEV1x1",
  "key22": "35ayEnzcVgizmFr32jeHM9ZVaFrmbPy45s5uHvYaTSzQXvtqg29ecZXZoZstUkZ9y7WL5J8cvw66aYBzWj32KzSG",
  "key23": "2QpiB47z53rLXhhD9RtYk2yDWwtQJDnfhbJHKgVMgX3mT2Ng5BKSqjivw9a4KjVZmt19kKVi8b6MiJjYgxmTQeNj",
  "key24": "5HN5LhFETPU1jK7FtukBWWxj4f1akuBSjqXfiHJE3fJ23nww1425W6dXV938c8SfraMHCSq66NqwB3AyGo1yTk35",
  "key25": "3PZ1n74sBWCFNguiFqvRNFy6kerpFdh4CyGVLFpDdtmC7pwEywvp7ZDQGKUajqjLMNssXbM89EHhRUPyPGKWMGkq"
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
