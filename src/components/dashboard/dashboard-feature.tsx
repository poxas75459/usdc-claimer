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
    "uu3AD8rTK72vFonxLz4puMS8JEBC88Bc87Pedi2Ap6SKYfpsyTg6CtmzYqQpy23o7QDSvj9qCpeFZ4cZr86E6AG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37qTabr5hqY6SULZvNKdb7VYFavx8wHGH2r9tzotpywoTKXQAKtrBqAFQSXvpxVAzYF9amQB2zgfwpQZ5vLJGX84",
  "key1": "4N1iPgKbEqGVo7EXCw8BDZDnoNVfWQLf2sDp21boUknX13mv2eZWdzdYQWved2V2TiZifDARUnJSd1U1vbWnwpQT",
  "key2": "5438BhSFSFzGqHjbozQpjQULJet3eB4urVo4Ef1UBo53DafxWw7J3Y8HrZxYMgPzXxUk3qhsF5VK1XQiK6eVeh34",
  "key3": "43tZrUhTRuGUyNbsHQGMXcovL9nLW9c4XCSsS1Bjrff8NkKbPa71zdV4R8SvRPtvMi25Jw1mRdoHud2i4QvqVfGS",
  "key4": "Y6n5Tg7PsWrPX3iq6vMh3ZWmJ7FRLUnSWf4UU49ibKPAYWw3hvPi7j6j9ZD8kcNqv1ymgUfFw2eKvQsD6qPSsep",
  "key5": "49PVtFx5jZ2Qv9jWMiH4V8XCdhzyE9rjvZyuLRJG8cmJgBLm8LvoxRZXffbvhXPsNTURwdvdfebmmqKnZPU7s2U6",
  "key6": "ByG3r2giX1LwRJyMDYTxtk8N5h4832VvxzfEewm4pkT9kLzg64ZCqQPVJ3MiQqW2q3QxhKJ3xS773w6U5mP8m5Y",
  "key7": "5rgXX2Z1AKBRTyRm1MvjFw3vLkVDfyeLLkjATstkEhY1nkCJnFG9dVFcif1KEipihB9kQWDQzab5vxCfbmnoMU2n",
  "key8": "3LrehH5Wc8tNYb1h5JBeDhN76sGoNKcfRr3MSJaHvmZjqcMK6TdyivBaGEMYwM6NxJ3TC83xxNEaHiKT9u5kbAMQ",
  "key9": "3cHfssgTssKwceGTANEkVuaKVsNUxhU2oAnLoVZmm5zGXreLf8JXUgWVVrHgLFrYXduuZwCwmgfNNpYYGqRc39GX",
  "key10": "57AED7VbrWLMpCvKD9fq8H7WydPAyfNhbWgpgqeaHVZXmTb7L7rpqvdv77JFua4aoB4TB8DYt48A8cNxTR4rgoAK",
  "key11": "4W8crxArZfaov5KZ8eaBWaKktrzE3Wq9uQznuCGjKhUGAcQyHsLYuXEXBDUtigaXN7LA3wZLjxk3vczQwTB2PeTT",
  "key12": "um3hCcQJXjbcFew3Ue5CHoBnJvaxb6pJxhz9WJexYNov9yk1NS2PU26gu3vvgJUrJPEiKwp4EaKnEHDq67CQgVE",
  "key13": "3Xt8QftgHVEGUJapNb2U5estebX6coCGnrVrehBVUwNYNGdiM6PNbc6nTS8B58C4t2tWsFHecJNBxddhv4vzKPQF",
  "key14": "21ouHmDP3dNG2YRAagrMaZfDQoqCd4VojZT8stwedcUWC1WQDiKrTEAqi4PkDq9k557mCvsFwnUPjsMuR86XwHim",
  "key15": "5JAauA4csyLq3PK8ephFhXyYNaySA6aFg559BHyJCp4fP2AwhumMUeH6g6oT3Dt9ECK9UdTx2Xv3mgqaz5uEcaKe",
  "key16": "2DMgeyTRhVKVojiQCkd5SXWEwNHZtR5JuLkAybpzbsHPUPb7eHuzTQ7boCaoVUUZjASUkz5PRy4XHHUgQjtoqZzH",
  "key17": "G7LsonZcPdZG8v7KL6fGisa5QvMgDYDnNdg5nR92Xbr3y5cbnKhjQsNxL5ZL5r8QvBCYxQVCP4X7o8TXTf9jMDR",
  "key18": "KXV4c5j9JzZezpabncMqTKPxtriDdJPEMSTYvbqDMscLcax6hrr5jQ4jQfSk9rqmpzCqKPxjiZ7hSx7QBqjomuA",
  "key19": "3JTyfqD9iC68k9Cc1tZ8VUoPkBLBi7d4fx897b1w125teWD6J7UhMntV31Vfy117puaF96FKj713EU1NEE438Eyq",
  "key20": "3rv3FdU31EdPkvC6yYDSPK7f22wDgWRvrjyJcR5zVsuT2cQarpjdR6E5mruSZVknMWE6gSsU3D4zUT7hpEbKWSSs",
  "key21": "LsD4JazzcCvt4C2G5ddJGD1uRhVy2wD52FvTDCbb7dtR6jgYGnCvDXoesKJqzDQsLuD8i8G723gqTg2wWg8xVwq",
  "key22": "2NTjMSneE5nti54wncwtvJ52MkfStqyJfzxWsrg6a9A3GLNPzzWnZcEBABcjfGKq72atata7avKweEx1hmj988Lp",
  "key23": "Gj1thJJALVLWzS2mbTeYGtBfR1go6RjkpBgYiDvDuQqtnMNUQ1JqXEL9xwSCKQbQP9eFv3NTvLKG69HPLwFJrHN",
  "key24": "2GpJGfEnbENaP9cfwzeH61yrvQNyqJ2nePXi2YJKjjiN4iJNSUjEwgnv4eGBcTtRk85TgBXEwZm8DTgPECscE6q8",
  "key25": "5VqhBGu1irY6ngosT7Vjumo7ki4TXtScKS7JFdbmXhWuyxaTu9Mn9Xk9G6fue6cLkszacczSvrTNf5CxX1uoht8",
  "key26": "4kh3x9RAbQyFMXaMPWkfRPToqU5NodLmaeGNkeFqEatxWhudNeg3ctYUVAsGN5sRb49grb97RtYtok9v7xezhBnq",
  "key27": "4myRTEBGfNbTcHmN4f9yoFsB2g7ybpoEpQpuT6MSLGsSSyQ2sDPccR8o7R7Pugx5AZNDkCzuqUg1U6pTVbDRxo5W"
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
