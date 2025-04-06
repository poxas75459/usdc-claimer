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
    "dfuXhCaUaFAXZ8QV2GBrMJQNyuFkuEQEDDum9TjhapGer7ADv3dfKHvY9vJgZNzbqwkHB8rmdtmDY767sKUAUMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yV92DJGZhrCvmHjyVjbr4DgM5fEoLSj4qrGrCg8ACnXaW5S8JaJJ1vhjwPYM4VVxUasrgxNksUK58DWwrJHbFPL",
  "key1": "492DJPdyJR77nHAkXsTEJdkc1GWTbHrZb7LfELMQvLHexwY4yMUfPS8ayz9PUZ7kTU2QJmnLaLAxeAaNAPrSf7Ly",
  "key2": "4ptQZmHhpnq35yNoLxCJzEaZzjDHghe22fU3bH5U8hAqVRxhh4nD7QN6b7ViPs3jzQtidxJWyf6wVH5UmhQTzQ7o",
  "key3": "3h4XM64zZR5M5u5Aaxjo8SwqxQp2oLikEnpjmejTrpy8T6GJUg9RrwbqMGSiJ3cn644c9gN42PPRdFGQyZQfEG5E",
  "key4": "KSQmccVRMj1uDHU5DsH79Tm2ZvK4h9aMfJejTpfXnTydkWgvPazizgM9pnCKomxF6LM4kGQzgttomyfqKx63VBD",
  "key5": "4erqiimRcjBNANPBX7VnyScshmqEMosUw9AtdqLz2ZvyQ3XR1SHy8ffkKkWfWGMyZcF5jCm9qr7XFmXpWpumtoVF",
  "key6": "2SLwBoc8frxEQzZoJii1dMCnByviZNdKUMMJs7NKj4URkzCD6v82SccLKwWrTCgS6rpn9C41PfiYtUPsketQPaXV",
  "key7": "5KHfGqtwKNjQiWrPQ4B5rLdFvRdJBw6YGMbqkEdcfv3wvCTzf5Lk5CrPtUexotaTst9f4MW2tPiyK2pi5iSfoYA7",
  "key8": "3YMijHcH9CamELdvwSr7kyzRhHNNpd5ufbdDV1Ry5RPkM4Y22WQYTcCnt4FddHVS4pDKzfv8sCYiVmZnRK1YtShD",
  "key9": "3Evyhhc3Y7F577ZhN17tY1zExBTwfqc5cXtGDTVqWwQpohnnu25b9ZoW6GoNMqV8gDZzF85StXMx56cSqcq3tDwQ",
  "key10": "3XNFduCrCtVBSEHRTc96Ynz8DwirDbGUaFvZJFoWsTLc6F1hDC3Bw1SJJvWDC4ism23kEiyzvfxVMkPvHdojxzha",
  "key11": "5KVmPt6BYSed9k8PXV3w1YAZcSRGdDyU1Wqyc3zBWwNMwP5835e2AtYhhKQP8CWLGwrspQXcYcukRaWh4P3gMUz1",
  "key12": "5kuqfqBt8X6JApNX8Mvdyd6EkwNAmkJwAccgTTVo5YaQhkNFrquHwRSxYGdKmuYbzZ1u3xQjvyt6fqxHUecMs1Ht",
  "key13": "wH3qHDfR3n9kKMRjA8QFV494q6XKLUvsAx4GoM3fvgVAEZGRXpDQ9vGNQTthCvXDXz6PGchRrRwkTSwGqrNVrPQ",
  "key14": "46GibvFVSam7sgncw1o8W2MSvFtBHCj1xpnmLtBgAKSo3o6FJLvBvjW24q1UBRhT5S1zdax7tnn7uAfeSrNwF67h",
  "key15": "yCcfNL23ruDBEXzCpjbuCmzijsQqiyLVfkchE6L2Ljdv9eZNPLsB4SRuHHhzyfjD4QgiSVesrkTM6Th7ND6RQ8t",
  "key16": "5QhmMNb3kyHN5yeqoPmj9Lc1TgLhLiSwsp4SLuPX82xPJ6w9ppyjG2HqxcJ6M6vU7APNCtqankUUKe1y3FGR6NDc",
  "key17": "3CkYgjnhQrRcwpRm3VZzTrWWYizooxfb37qbR6okakB6N9SVDkCxnsQzYUL8XsBWvxv4oVtnyTPxXtDpWw2Qcbn6",
  "key18": "CRXhKLF4eDpJMBwRAR7ZFEPsWjTYQsmqAvKGf6aL8d3aEhgeujkvoTHL9GwcLVvoccohafvRoGjySinzv5LvkQp",
  "key19": "2j4Zyh9bnxz4Fg5bcs7XkgmjauSRNEMSaUzarWZzHg1i2YHKtcbAdou9Wj2j5SXcDex3khRwZMXyHQvH1Jg6RvjX",
  "key20": "37LNeCXehuHvzT7PGxocQjQMkZm8ZDsWbxeM2SvWoNeyVX75XwaSKMJz3kQCQBg1Pzo2QVWP1ciMkAKMCcUTfWP1",
  "key21": "5yZLXR6MkCpuFfoMDibExtCjSfW4tDMFJqGSdKgC5gKsZqibKdvSqjwMYH9Y6QAAWfsk9GLkC6BdZRbgWGBcDfbN",
  "key22": "5zH6GH6xXfW3wkkcyoFUYf34xk2LLK7QX9PrXToawvQLHSDxWdFKgHw2sbvGJHJiiXctNbWgrWgqBBmQNSjBnVBq",
  "key23": "4SAde9ppCv3Yvv9boWspnZwVAy5zfLKsiCEfV2bh6fRTYStBCJfRAwR9bsbJ9fdLhVTb5Po4yqpnj6Pq15rJ8R3q",
  "key24": "JY1H1pij4873wQGJ1PvXV6MWBvTu9jr1J5Jhea1bm2MNbXEDUmmzLoMQiEhDi83mLBixPTSq2ZAhYPkbJ7xVQJ8",
  "key25": "eLhxdBPzvHUEEgcVtPKAwLg7QaJm5U4yTe3dYQQBvYQEjNxEhSDrcjryRTpKsuBSFgnmkhPuw7NWEwNSCaubeDz",
  "key26": "4YT1cqM6nfW4PAU8BpL1vqTs3jshUeFJopGggz3gKgwNvanQ2DCf5MhPoGVe7BGBjVpqozQs5igksUTiWK9swPSJ",
  "key27": "5ET6Aasqqn4ayCx1RnX6RUqQTvxhABE5Su6vz9tLVB8pqz5AcTKrcdRR3dNSSsk5f7XtyGJGHbBV7QJzNGcKoApc"
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
