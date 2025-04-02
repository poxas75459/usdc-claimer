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
    "3NHr7KrHTQUB4cGi7HeR5Rjnm3MAUQqxhi4ZwinXLLingZPJokHUUHQcjqUHuXttTqUS3N46akNfvZpPyDCX5SRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XjVExfGk8VeXC3o9DspbWQ1d9cBpcJ29mkWFgfo4TRaLtWaYm9SccCXE5R6RrdhZghRLHNFDKN1YtR3YCiNBXUt",
  "key1": "2ePtWJuzNiF2borXSqfottt1xK9wsu1Zq6G5CUpdhmqxfSy8rTcewwDMY2WLBncAFDhjFMcQRLvvaxzYqKAvj45E",
  "key2": "37VLEBMV1r6nqVygdE6UccNf4a23siMn1YSYuMHRKJGQNEjUrXGUu7Kfv5YSN65iSvzbC4RjZMPoa2MauoX6w4WV",
  "key3": "3EoX61rViuCzrr4qSuvzUaRszEppyqZywPFxopoKUQxtQmK2pTGtxRBnUBw6VEn6zpgd5xuQaHjmThW8PkdyZHEM",
  "key4": "eTJqWiKemx96nX2pbLKLY2ZHHr9fYe84P918uKR9gFAT7E6RNNTY38SPk3Hcz2LGscjidJdFbFjhRQwC7bcjFbb",
  "key5": "3QHW8sUiXpbkDYD5QTL2t2QDqeobXv95gmms9VUvsDrnKgGrFjcB8cyZejc8ouWeEuA7tWBYJbqayj7gxD6pMvmG",
  "key6": "4ZcvkPKEsKfz2WvQjxiwMsYWfS9fZRpEbbWvFjPWoD16h6fvUeDkfAKPoDS1Te2MTpgx586J16q8PBFGKx9QJyV3",
  "key7": "4ELWTQ6xuBWgmdmjDpm8nXm6zQbmn9xGnuvuPuvVavUeHpRFW3HukPmgCLVnH9zy8hmVWXCmQbX7BWABy652FPqY",
  "key8": "5zG9pw5oK4Yuy6873RQqQAoNMpk7KmU4JY6qBB7ZeyXQZ18drzmLfzkNemELHp8ZnPzDzWrwaZBnGcMfrzB9V5Yf",
  "key9": "569xB9LxZPg1FbX7sJZgn4A35L1baVCGbKVVJve9bSmYiALEaLQkD1tHtfRdBKsnngm9pRDc9yKnhgRJnSjiYjYW",
  "key10": "T5k2GkAfQEC9TZ7hKQZ3s4KdUxV9EJQ21dmmehFBYyhazzrHUyex44R5XUvgA9XiqKaghQqaC9WizXD9HYnR3D9",
  "key11": "5z67QgFp17WHf4ZTiUSXMXHskB7LjBD4GhjKjCu68xEzESXFk1v1f6Wn4SmkHjiMUYj5LFbmZvioLuzP9v2EzzY2",
  "key12": "2BUSThwTAyywb62SckBRNWfzRUVsPjNdGqqvgabopZCUWBTNDsw4frm9xuVWHz56Djw9FtDVY5qXMP5s5FAepjhh",
  "key13": "3GHxLmheTKxwNqJGdYb4mzNEZtbDeHeCbZ2wQcG5CzbFniJSZm8JqzoRPjGRrQviVFGET7F3EKDAzofDbi26CyeD",
  "key14": "5rgqK7Zrwgz7yTF3npMpH37BkYHbNEu2HuLJfh3p6tdceLTMXhXGwrpRnUcaP5yGkeYAo2JUTj2sE7fxvyRtwXVk",
  "key15": "5HouQMaNqnrycYmfFv17qxBcC5ddQmbzZt53PZBjwu7yow7nJFJRN5B6pRYq2ZMh3ejZ9doXwM7TzUA6Ru5QMTSK",
  "key16": "2chb51rBmjC2PQ71h9DYmJtcdvC3i5g6uRz12FLgsf3WcaLwqmm4C25wCMPVmcDYd8VcAJ6bQm6pETHd93YXUkKg",
  "key17": "3ZoxiWWqvZvGtgq8VLgRdFhvXSh4rE25rYKk3FjgoNR7WjVfRqDXvZr5K2gpVEwi8eZrJ8kBVYNeuQAftt1Fw6FS",
  "key18": "4UcPKDh2Hjr8xgbe5eNzfEGRgknmWbCFqmhJJLeMn5RhufpKNAaHyB2eAN1BQMyQE6VTVqZKeXCdZdvHeWepDjQe",
  "key19": "58V4yCK6BF8QnmmowHXenV9B3AfmTfEDHZhabAuNn4CtNDZn75jLuA4d1zepsbnKPmPzjUaogr1gpboJsWo26KEa",
  "key20": "4UcFHVy2jZB87Q9AhnFqFLNjxfnxbY1C9dWe9QzYjXvjZumsRgPkaz1J4yykxbmHwVs7zuiT35cW4Xnu42pwejFn",
  "key21": "3878kSEVNHffG3y21exhmgPoj5tJS62wy4Wk2qbSPXUVUioiJ6NAJjqPWTYBukhr317YRkpsQFFuPRzupajFnPCc",
  "key22": "2aMjrzfnGwu3ohV7ufg76sitY5xLzCitJB3RFxk7EKpypw8DGU2pF3X86QAaZzE1XUSzLtUJrjoujRFC91rwycD2",
  "key23": "49uz4AEqyAY699hgvF8RWCwsmYPjnSjBunCVtyN8tEmwUqTpC5Zgxit5EGdxohRVKpguoxNhRMVhDwF3XZwHZHkV",
  "key24": "3s4hUf99dRbFSGHy5188H1sn4v6JyVB5xYiw4E8gtAxxGsnu19ofDxaYewtGDQALxpsyz4wwjR5HN7xingKmuWP3",
  "key25": "3AqVefQ8PLZgSDQknEMVvApRZ5Vuby3YU2i3rVKM5mvGsJDSavD4hWiiTosPCMgam3SBwbetmxkyqNephDfjn6Sv",
  "key26": "42U3YeF7uGJGRF8K69uHxhadNzRSHtrCktGa1E8wsBdKu744JW1YiQUSFQmxNRHkaCYoVmFEAsSkawQNzWcjzpUZ",
  "key27": "2qD6GUQCw6oMM2EchtVnNp5Dm9qRruUnVoeYckxss4MQaChTZ83CdS5byE7xQMKS9ojemDMUCiSkxyGGVAVTKLnQ",
  "key28": "56JtG2VhRkoEZSpjwRciC2EuJBsXKruzdQNqNzodKZu8bZt2tGzWnT44b2YKib3P52ypueUu4mzDVhA1EpYv22iB",
  "key29": "SnQb1pC1gAyK5JFGXFgF8ppevCa4mnYHpsmYKSeF6PBMQs2nBWJ5GDV1uECHGNuzCMjRcZeNW9Qd3DvS4WEd4MC",
  "key30": "kLpiQGXjQTCWid5AifkioZ2oZeWFVSAnWh3rpAXfkMz1bdzYwD9rkV9F2dyS8SRFRR2YbYcPxEGw8dbcizTQuVk",
  "key31": "49JgECyMFfR6Ajqe1oQXjHjj4oGKv6CMqkbko9UeojFpbQYx85NeneJQcZ1ASMh4AM42Vn48Mzn8E9Hs4e5saUDX",
  "key32": "3TDfqSryJXkiJ44HNUsia7zajWqf5chnsY6gniChr6f8BdVSMofB45K5gpXsJA8KQUuVSAwC9TWk16jVMLid7VHZ",
  "key33": "WaeQBHUy35zB5UTDmYdQQ7kCoYKLYR6JhDvrrDkNmWtpmqAD2uKP2CEsV93tikmst4EtGoP5CjFec3dAAL3dnU1",
  "key34": "4cKHYCwzohefA5TKAZjNMJFpp5nSHecjcLouht7zL7TrUEtSnf7tVVoc7Z3TDNybF4YoAn7QLojDjmmRpLpaWKHD"
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
