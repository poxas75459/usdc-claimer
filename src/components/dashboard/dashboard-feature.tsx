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
    "2q2BM9yC2zzPBttvaMmGCwb5GQjgsar9K37U6CijLV8mrKUw2jPwr3GLw53NQghND5YBYCZDr4MVFwxVCyqrgwLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cX63hxLRu6DH1abeAuxE3oqTk63PZNJSeDJfL6mdmHEt6sR53ghUAosGBsVTD8P7J767jD7ZCRYx4FkKLLyYpdw",
  "key1": "3fx5JhLd6qTJnpZvA6PtbE6TNbetPZ7VrxpLyJZ3veqMY7XZ3Fk9dwBvEyRYqCv6zHSyEw9boKWzExcejXk67EEe",
  "key2": "4g39qnkL4YZuiqJUw4Ua35hTLrBzPGuEXs8Cq47CoP1c6gqxbDddw6gRuLRRBcq4zcfq2cTJLNqtWRWrz9bKQfFp",
  "key3": "5SitXiCAJBHZGZFFveZefjVvdymdyx2ThoZhCATbwpMrtkNgXK4YcUu87TrF6PHZqsu8tgqtGv66wCsXEp5uNDYf",
  "key4": "4unWgnwUnr4y9S9TNJpbVXHoTmvuNBNqsmtaHFdWYH5fo1Nk5dWfWHiV9VcaenxnNrgQNn7DU18CcaQsCteSbTLo",
  "key5": "3vHKvtGWtEexZgThTWVKdzNNpY7zPiod1xTbgrc8ZBU59JqZaDT2PbGUiD6pLUXncjAF8eD3sefa1RVfDMpj4L7y",
  "key6": "59jQiWLxzzGfKKrcuTfNMUfPcRAFpXfUVjfuAnw1G2jL8jNsV3dVrVNMY5PwKkuMvA2DDBpQ4qepSnc8yMCF44MD",
  "key7": "4Mcp2XmVMfm39NJoC3KQ4jEMBbw9v7v7s8LMr2PP829abexnHTPVwsw8jWFCkG2t9MC7rcW2JTLxbgpCQFnrrAH5",
  "key8": "65YBbC336QY6n1bzhU5Wj8PHbnVbNzNKWFv19CP6fZV5avJzmZMs7Z3NTDVPxmVwg4hotFd2cjVKqLRyuXvAEaGr",
  "key9": "36FcBxD9QGuebGV4KLBCGx5D2YNfquvi1THmMWdw3TLEzsU1tVWqhucKPPQFvVsK9jQfew1i4ngUCsffR5caGs6D",
  "key10": "3Xr12ZjP2c6sqytcZh8qMuru4Sdy2q2dEEvUqyoPsgHSFSV8BiGn51ruxoqiQbTUyU529mJTV2EMypvL8eKJKK8g",
  "key11": "3Cbv3AisQdVksMDeaPtst2gbquatJ6GFVBDYK7MMUFW7TFkmV3s9ey5UJdbHiqm8qhm17AqrA8YCjGWFkomTMUPB",
  "key12": "4AqPmudggDQg5B6Ayc3TF49LYARbXV7or99H4PvY7TDaP9XQcQnoCbEjVh5Wg4zsH88zLx9NtPgaQGucxKETxrAh",
  "key13": "2zjTB3zWncHtpBd2hcL6ZgLAsEFqRou5sjiwsH1oGy9SVn4xaMNhvn4P1WKAvzqBQ1UJr9y5K63scqbo8UnCehM5",
  "key14": "4uhQsTn3cpa1PjNamJYpEqZoX1C9nSPibZ1b7Shzj6GHXmppzsqz5vsGw9MhfjWfEoVPJ2JrU1Coe54JjU8fqdFv",
  "key15": "2W1A2svF6sqsqaw2gXTaLFxmDvv9LDkV92rueopv4tskmxU59tCArA1XFxvmr2WvxooUXrsVCPeAdKh78UaUF8aw",
  "key16": "44DwWhqHwMsGnsKwC2CrGERLM8giXwbLRrdCxVru5mpXbGT9PzJoD8unJewpqj2diMfesXu6sestM8EPVSyL9Pcc",
  "key17": "4Jvz14FbBReHrYp7pbL26FLqy7QdytoNLAVSb3WfK2LmGmySKvqxKViprHE5rMwvEW7nJV7eAn8J8VHvCCYjU6eR",
  "key18": "pVMn8rbEHTBLbHctHNyYkaiQn4mv8JooKb1m7KdUtxuVMJiHwh8bXUcWypXHrc4LthBAqnN2DR5vSXbPjKJDHnE",
  "key19": "545zsZ3rtRb921nn1LGWf3oSkr4reB2HkqQPRC5qw6Adq2nn39ypkDsbaBvdmMceBH1aWmszSEjAzGxAocgSgbrz",
  "key20": "tERFb2cuWY9PVabbv8NtQwGakAMEoP3GN1TFFR5XXsBbnuudHEcdZV2Wx7uUi8WXMEfANm2VZtGgyJk8cpA5m7W",
  "key21": "3yDv2YHCKxKccDB4TVJypg728McbUzwMVNuTEcS4kHWrcv4v5QELNjSFb97kyZXztLrhhhTXsaXxUvhYTQSXbZ2V",
  "key22": "3VayLhbmhe4UzzfGTPMvw4HYj97dehwytUEqd195h5gNfNZwiHp4Yo4PZqdEuhHZbdWURsXSYCe4AcrErPwqeU62",
  "key23": "tFvMPTwDYGuxiVztMy8XFBiAJuf5ooPANAPgsrnNhWVAt1JeGtbRbXLLE22nCDqvvZtiuA7GHLbQw2ATJ9CNnP5",
  "key24": "24K1HqvYVGiyEBYby3Tz5Yx12boem49pxtET5kjS1278nMPJvWavDnJqmuyadefskSBNLGKUqYwP7q28aQCpYVhM",
  "key25": "TbpwiRqVW1VCZLmf1DDcjU9BGwykVaUHDoRvPuRwqWNXFjWs3EnhixzkgGGVrTAcku1xicCmdutP6CrFdgoppoW"
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
