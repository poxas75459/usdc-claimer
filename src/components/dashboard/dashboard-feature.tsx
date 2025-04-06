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
    "2dKLwtc5J6MNUzj3SdLKYEMXsrahXdG5PGmaDZHQbzbgASeXgoFquZ9iAG7kAVqE4U3wEqU1fgQerVyj28CUxLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HrCsD9Y2716mESJeaTf3vPgUGSc2AUm2S39JrmfN5RrZ1M6EoXPuTpHwbZHTEpkeb5N4ayBLCnUJzTd3FzSpyuJ",
  "key1": "2yuv5XiCzSRuQ7DjVKcDv3BwWqc5BhBUj1PSt17K13zM2CPXMkbBC5kYezkCDxYRXiTDd8ozDKgnP5PzhmiZRAK2",
  "key2": "m8YEa8YCHDHrr867svCYdxmwxb4ot5y68vb94NeoHgtcwfwPqDURvDqKvrU5Ld7T7o6dqCzvWjbY81bvenQ6N6X",
  "key3": "5LCjXVr2hX6EzVuAG7S5yxmeuPkJ6CvCRARzK6Ech9upki9V8mz4Zfk2fCxeyNMyZDnqX5eU3xWVNKqTu3nodum1",
  "key4": "5ARLyujoRYCFcnNmX5k785QELmYqNFVy9TSFbCTmN4bnL24wK8Gm2bbZRgxaWQAn8uVVS1kqYXgxA465VKVhEpbm",
  "key5": "2SSTQ5AKDTLP2iKpyKJkjjjmseuYx4NcHfiBBj5HFzth1ova7VWrAQS1GWeviGWKGrKhABfEGe8djSAdU5b6cCcT",
  "key6": "HGFXqc8fTEeT3HHfk6YR3Mb6NyyuHProruVPVJMTnGi6mfYrD5K42zfr36AQ4bDynX1jENMvdwNH4FT7ynG2tSJ",
  "key7": "5qijB6xQsmuk4HhicC7hQuTAfBWtpWgP2mmLu1vwFC4Uke1jph8g2drc76rAGpa5xwQYsrjwBY5FmuFNYChY63Bs",
  "key8": "57jfdJKs6hg1rzYPQU5YHfTcmKPKFemoV6vCVCNEXo4eG7ZxtCH7X1DMkcjgUJ2rQvxRQqaMCVXoavfyLipeuMGd",
  "key9": "7dEvXnHi3Y2V6VqGrxV1JsxChbeooK1hTJUP1mCm3otwDF16hTdRUoFvdWM41faMX48SYxtigygkJMqH7ugtgbM",
  "key10": "5MkTgGE5nr1FW2UU2n8W7r4giGqTxW9o61wpaJTsKPEhrwQatvHswf68mgtrTgYExCVPvvY5KzDr3pxk2AK2u6V1",
  "key11": "3Ak2XgXs8zEQC83W1W3LFmY8PLXpi9YYbbXsKXjWeZz9MJEPc4AwBLmumXkRz9WuknmcDXZztYiCshoEvA8GUC6V",
  "key12": "3m55E1QQebGikmUWNYjHNq1238FwFNqdDmgEBkYSXSuXYcfqZ3TDZjY3NPr4ozduFq6XNtkymFVi5sHBnfiM4vXe",
  "key13": "2F4892PCtJeYt2tpjw7RhEjuvkvT6sYdqR5yYmcF4fvTyWHJrGMZnPWspwunSW3NoBPBinVhWZ21MLgRVEefB48T",
  "key14": "58rESauMrpjVsPE21qwGwS72M7wbUZ2MdRDd3dvRnwrbANbqu8iaWGoGHwBDQ7AZLLhASi6tWr9iXjXgAewzbz9P",
  "key15": "5dzvhwm7ChjrZ3cAMjZjJMGPbLeFHhN46f85tKdEAdsLSUbFxy3TDUTWxEuEjjDUsagMScWKA5tBqTRTnadiBgH1",
  "key16": "33kMjNwckEP3jVmWFPg8toN78emyJacJ3xfxeGd4uDhEVCgRE9gfkPGbVdXYJ63J6g2B7614voF6AYPXRQ8nhk7N",
  "key17": "4y5Fx6DfjzHKJzcEPzTQgEgi3DzZ8UtUATsUZRDFeErTafMu6MV31SNfnczeBfSY9VJ1iyX2J2qnNAqZr1bZSMU2",
  "key18": "56Rz26VQ2ENNqDwQS4dsf4cY1exQNswmbL7aoEg3VXCQYsNqMrR3HmFZFZyj9WWb2jQg1mPaubJLtSB7KQPqTFpe",
  "key19": "B4hRv98MpmxoEoPzuTBtUp6Y1WBD3DBsZcLcpTEN1Ua4JEDQncj1pJ3k489aFujto824YpBe87kgML6w7SCzGq5",
  "key20": "6axbNnb9xZkG9MK5eHRKE73abYLyNBgQ43MC4ZiWVveeT1ik9MP7EW7qs6fcFnrUN3Db4Pqo4NpdRevcsdPVHsG",
  "key21": "5NxYqYV3YeAdy6unChqncQ93YJUjVReEDGwimPy9CKQz6aG3sxRyiBqVDdgcX8f4K9TXiydPUmz3jaAhUpyg3ALm",
  "key22": "5i9EHQyfTm1VBwZ9bqDFfRiNXJ7EsV9wMwHkmhGP9AZBTM1AUe2ptytr1J7qUZrw4BawvLkTRzzDEUhxH74o1w82",
  "key23": "eRYjvG6DsXjserij9khHWsAYWqkyHZzNHhgfS4MTAWtxHsUH7QuJTpjZEm2nY46ErTywmi7xPJwgr1p2YoaUqBa",
  "key24": "2yaDYa9b2o5HBgBVnUVhjWD8MjuGfkh3Eki5H5B9bg3RwayBv4mVg2GQXNWTFBbcBxRPQtKMts7QQ46axYJ3tkjN",
  "key25": "vSPtgpXvS3XUL19z6r7t2fTQ4t6Yeo4fYwi59JPsY2dmY4kvycUG4L4ER6bz3dvVSw1SLmfgUEaBZVZs83VtGZp",
  "key26": "sKa7rs9A2t85k7bZ9Dnehj1RduuzJGYwHXQfdgG33jGkAeZqtxyrTbs5W929YC4iUhzFWgtBvKAeLTXSH4Q51En",
  "key27": "39BpUCbYgsy3GHM7n9Xv5J3xekHYxmhguKiVMpGc6yeJRtzsJ9fghUEoyTdaJ44WzT12zAofYCSQC4KaHheAgmyA",
  "key28": "3SRJsNPxZpp3nLiNyJPfy4ASq4UJVxnokXUHVF3QegGYFy6emtuaoiKetQSfCbdwxZQJbKRiGa9nxhqxwHR4jt6H",
  "key29": "2gyqvMuqaN9qxK3mXdCuK54dsE59Fzv7F1WnMr1Lo8GvxmcV66B3VDMhD3ytvUw5ntMZDM9hHFwNv2zaDkEZPwai",
  "key30": "5ybdVTSuR4bPnjpe4QwrK5K1XpYxTBHZovmohwSGvvAKe9ZMCMC1JppC6Byr1R156UKaDkpwYysqnF7rn87aaceC",
  "key31": "2B49zvYNM99T8XXfXLAkwFDs25Fe371K4iX4aqwPtGYxsCCbycWrQdJviHUWvegiDctyitWeWNecy84tHu1dByrj"
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
