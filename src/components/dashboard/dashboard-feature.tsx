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
    "58s7TbY1rBz42CzA1L6YEHPGRRURgV9SN8rzvm9bTdja5af5eNtB7R4VxAUzm9hVkM9WD7Px5oKafwLi6dXPsjng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lidhv24xRVFzU8NXrMYoFASeQTg77g1j7MVEW2cTTEdQbxWA7egERBw44eTA93fY8vAf43uDyoQzfi7CYiSM7N4",
  "key1": "2mXTJxf5xQMgpDf2sRFiRxzVW3uXsQ4WkWEMhgczBDmheBCyyh2bXxiWH9Zr4bZ7wqoafshdVonjhruq3DUfEE2d",
  "key2": "4EQVxeGVxkhwwtKwmUHsWMGkfckV6j8ZMYPv7hyHUgYsXhjrAY3qPTGQ7J4B6tkCcGwHi7vXRPKyJNM7JrQvhts4",
  "key3": "3JJUhNA2HRGJpWhJcstZj9SG7BZLuUncQ4wBKshhVVRZnH2MbngWvMAmLi5KpNAQe9ZYsH4FNDSNVgnvHqLNyVuU",
  "key4": "yiVDwMriCP2X6jrGkPnu7oT4m5ZRU3HDCFKbtgEK8mi8Zm1K2XRHZhhgkZ2HtvXAsG6cXCxgTNaQsENK6dVnL5E",
  "key5": "2RjBXFWCaKoZvnXe7kQLJd4avXrURppEyNye2FqCYxytqxnCpmk7ZzrKRb12WD7YEntinzKk3JmN37bzftkcrc8R",
  "key6": "28nHgyjRyZHKDJHAC5XZ62XjpDvbh5QJ83EETrDQJsmxaeSVWBdZXnTXsWQke6KQV8mztyxQuDef3SJdVMefrP6d",
  "key7": "36sr3VVMiGejV1V943PRCSJGUuXCL3mRDo9mFz8sUZD2ibNRNwKiu8UEm332dYJa8s2KybJqmmVY6ouNi6XVghqi",
  "key8": "4sUrvPb9gYiv6RxoN5KLAeSNpBsks1qULfJHC9Q9xQKDf5oFStVMxQAbhMUZJ78KdWpdAyTEKvMkWeifHs7yGhpz",
  "key9": "4yXiahsu3qbbUijm5sBfbMUfntviPHf9ucAzoBEb5rR6Z6jb5sFyTU9fSv59jgRYa39dggBDdrFYQq9CPtZbEyr4",
  "key10": "5pjzi6jSQKp6QoMFjJ7u4PaiYQVE7Fn2mzJU8QDWcKfxJYyrhy7Xg2N9T13hMmPBoKPTzxB1XNnb2BAHj5pn6cy8",
  "key11": "78a1LwC8viv6LMQJV7sQuoEm4iH8foYgKXbgZaLxACsnGVrjj5z9CVDwjLK2cFuFwFzvMgmj4op1UzAVAnoRKLP",
  "key12": "3uwu57gXoRcSqm3RxgmKQjhHTRawykiZqLv42Qvm9NrHKjHs37WLYwW2WWtw2WBxvEDH52dNvarU8C3HQdkizg7r",
  "key13": "3XeVz6VpdMHsgCtgCYYzJD92XrSDpRdzZg2NRWPRMSmhRwX8AjALUAYtBYrnAbgnSJ3BimWiH1iy6r5TgJv5CyGg",
  "key14": "311oPMHx84vu3itEDjGUQZNReJZh2uR2ivk3AXsmMiDfoLMFy8uHonxTAn5WBrutY2PXD4JnfTpM5cMg9rdA47zT",
  "key15": "4WAL85qyzLTJ3nZDHMAZPhDWvjjEz2FFJ7v3EiKexAy4mWmb4ypXLF1Wj1dxTqATyRNnggRHdxnzEvGsqY6JBLUp",
  "key16": "2hwE8m7ntHPZ4Hm6ztdN8ijHDHL6ahjqRWbsSTX9GYNDvTby1gAcXneGFCDCAjSXetPmJ2tGd3DJShHsxQfYvvQC",
  "key17": "3a79qVJFTMLY36Xm1uFZyUM2DmgUq64rTYwL5eRRMwsRiLbfasj5JPKdJHNnDVdwSKeKVgmyPvCZuxbrt3gfy983",
  "key18": "4q2a82AWwqfhZDK4VopMnZDRJFLDC46ZEEFmXjSacMkQuBfFF6ir7Zw9JtiEubBGNQo5898jh9KhR4Q4ATqgFxSz",
  "key19": "BjLXQPhUTBpuN514KcXFRjFg3mAQuMQufTo5GrF1iQ8uEFEBuGf7M7UU1xH14DEocQs6wrJTpAMqYUfWXNNnAtk",
  "key20": "ikWj2gc1g9E5dPKdgVDn3fj5keeWMHdhnV4jRXc8ByZKVyJ1vCkkjMQfSLRGsC2PiRoqUSC4oUYmxdVnc53u4BB",
  "key21": "3LTWixcWexhTResVGy2yQJyEnQRBYHyFi1E6adsczd6WMKs87Zea173WBaHazD3pN9NQDaLuLV9zvRrEfNPVG65s",
  "key22": "3Jm9dsCuV577jWueJpFWHk3AYgpCTagU5QGTiBvpPCPx1JRqTQvzYSsXc1r81DxfWjDn7WXehHjRJ7TVqe79qQRf",
  "key23": "4qVNYLT38J5eu4ssqKP6XqE7bNgg1givHpN5dNDwE7bNrTXJxGS5SFLoNCTKZE2WXFtGkw6k6cJfnciJbnvCvNJT",
  "key24": "4bT2HNH32heTZ7vyXjgiv85qBMrRhV8yhozdbF2rMaDtjGpc5BHjVAaMmU73kj9EdVxFbG3wfhNCTm9ydbX6nqR8",
  "key25": "2JB2B36JUsiUeipHiL7BZ8jXi6F85dpg6Y94kJBDEcrqfUxu3SjRdhBvQUQLo8uUp94jzMxN9SVF34zJHWmU1pY9",
  "key26": "T9A7LHkt5VVQn2PtWJvmViyWeVvGpvpBLtAD2THsnt1VNuUv3q15wDhJm6SfvFgSfE6wH7L5RofbGjtiWG3sPCF",
  "key27": "24Z9E9xf2EM5dVHRozwBtLFnFD4paHQZRj5mbQWjCTy9jfq8YUZSjQe6g3w2ozZPfrEJJBc9GVFA9sfbGpZh4qt2"
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
