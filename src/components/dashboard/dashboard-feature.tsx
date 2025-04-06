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
    "2vqU33XDQjbmZNHZobKumeywJWzV2Lp5WDtJxbYtYvgmX7WNAwv1hZMq6fvEsQT59vfTQyo3kKY6TQn4Fayav8Lf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RhL8oopAZd3768maa5KoutsurV29FXQ42kcLV9WtbwfdRwW8Dd7jDZ43dYhZ4EmTUu43tXBzY4LLBjhA8S3uH8d",
  "key1": "5q3wbtoXR9KStWqNinjpapYDWgRSgb3VXurps4QHJTHXSYMmZHB1icZ7ARCCAF5cPBfBepVK1pZa24bUNrXhaxU6",
  "key2": "5gUDzDabmGUsPbUbWqrVztSnLwtb18Rvynj8yLWCLarQQc3HQhka8P5yWs1J8hQq7xFUo6rHABqp2wEg1xB6aDNY",
  "key3": "3pn3jqQUjEqQA7PFBAZTF543r1y2mdokZmTq4mHfa9Z5DDt6uWRf92AUHjTyNciLK57r92vLNEUFyuvDb5XR97cX",
  "key4": "7rq9YX1GB9L2guaSr8TziY84SQPc9cHduDWi4LgbcEuFdLyec83WDpEoqJXV31UWNoH6fodPz2CCSBsZi9ZbbVK",
  "key5": "3BwvSepoRgKkcHbRWBo34NJZjA7zAtLBb5PYpuYVq69Q2CY2nUuMrhtpUKFpXS8XUsVjQVa1daJ32HdMpBaFe7xb",
  "key6": "kf5fgVbmmpKyoJ2YvA6YAJ916DSmvdDGVe7C448s8NnpR4rV5pNJMJgCKMReHx1EfPcuayLjouR3ne9NqMtFufL",
  "key7": "4CLXz6R2qoAEvVJpeAFyip6YSAKRDA6EUac59sCUJnfhCfMsseMe2bM5xDv2t4RkjYyhr8NQDcxTmp8eXx9UPiA1",
  "key8": "3ka8BiwSFNxYAdcmRGLYXgya4DfNoR15W4WBLoJEbbaPk6q9gd2AuQaJfa89gWGmbZ55M9rKuRfhLDC9BsnngZ5e",
  "key9": "2TLRN4yXYVVGShwiGv6jQFKcn2UhaoKEgR9Uz4v6oic271XrWnfjXqvqUTYPptfRSi1k6NxBnjqFQPXKi1xAEX9v",
  "key10": "YeC3Vp8EGUJH1vrJbCuYGqfnuNySs1ZdfG1b4edXcq64ftJEKZhCBhdJjqnBrPjW1akrN82MQKbsZ6usJ47Jtm4",
  "key11": "3mEaQ78DnDGdoKxQS4KY3xayzmpiGCZSrcYAV5sBSDse2xibzo4wBw4CLUgYq6HwzsQDwGyH82mKhMkzqoxdg7Z8",
  "key12": "waEsGNMWoHqdvNnbtX9FLkfQ3nTuS8z8fYMBgYwHZGEvGg2yGLSH4Px4cGNuZRzJxPVWWhG2SeJuU8EoexKLxJN",
  "key13": "4NbEVi1YxELDgwPpumBYe6vP1aUExTL9Kwitzi7uqWsRbqP1UD4SBjfCg5uZ9cafhZPXuwB4cHLusNJcR5EKRD1W",
  "key14": "3kHCWX9ws6GoAiDMg7ivDRs92nBrbg9KiWprHE7kL5CKNukk1Xcdb79VpEBZ1vsu8oqym7shEfqqw2NQGRNYJqzA",
  "key15": "2Hi3f7VdajT6TJQjLXt6nQFAH7xD5fPicwiCoeovXCaEWtR5aK1Nc44Ngp7SrkEFUfRrqQfQ8peLGkK5DfbM19ch",
  "key16": "3LP2eo2YeEeZxYpnwRUe88PhoHUkjQvYMhhpu5gUxAgZK7Jx4VyS1wD6npKdZAH1JB3bjg1emft3wzdMVeB3NEmy",
  "key17": "2YkgfuuFWVFMaAzHC49KAF79m3n3vLpd4RS7JNdepwvHS47V1ku4AvSnpQNkHs53duoyaiUhAZ112Z8Gjr8tiDka",
  "key18": "2g9c3H31FrPJDaU4B75Pp731FtTuAzaRRAXpZJgidKUew9XshTmhr19z3a2nFLbpWs1JGvCnqqWtWx8TuNPmBt3t",
  "key19": "bCNRwGBFW2jYBVTcLBe2WJqe6sjjX5Jky5RNNJY3oCjm9KkMKrSNRS3U6Gtmhg3CXHsJxULYhCXNDiT5YfYnJa6",
  "key20": "5AnE5nvENF9Jhkn1Uxo7Wugf9197UCwfQeU9e6sTB7Fc1PME9mFPyqhL6mTeppd1HU5asXEGF2Wrq6ytmjuFMNJF",
  "key21": "6T3bLSzF7yu7LCLfjMBsasK7wQuLfFEXXWgthK3YtgcapYEyF1JtRY8k1uyidyxaL8abdYjuKFwH1EfN3QcBbqi",
  "key22": "5UcjWVgMhQaxttJSVDSbMPYsPgNGZxbvYDRb6f3Wk1GB2zywV5pTqaaDYAMMEo4c91N34metudstUVeuT2EueDiZ",
  "key23": "32JH7R36Ryv4YBv2ikTJTwkWkq8AVE2Ki24oFoF1evhivmxY43cJgUe9f8mFMvATb32UCHEWnbYytERjqjQ3m5Nv",
  "key24": "5a2o96edudei9i6mCdPDjfaXvUsEZYmhVycgeT4cbKqHrkFHcW4Ep4S8e9U32it2jeovCK8P2nmR6MSB6YVmeEa2",
  "key25": "5BnUwVPZaDhzE6wWKtsNLJ1qKzQnNn3tMsExQMHfVjyjmZDukBvmU7x9UPCDLLLsRo8FsDKJ3FVhSxMw73GXzsYN",
  "key26": "2XxJC9HrsLbBkC69zqWYaewVnYSAY4YXY7429yYtESwphZDWvF77xWZARLaRhdwF4K7AQnuBt6rwtoJpH6PK82zn",
  "key27": "2GtMTJ3EJ4KNG8s9fneoihSiBZyxHwLVM7eCSCRqw44Uii9hbSye4q7nQqnAixvtKmNK1spqCDy7ex3xY3Dg7WZU",
  "key28": "4YPRXNr4i4FnfJamYvEp3Y2tyZTeqA2BrCHnGxdUpAa3t5ntUtdj3vvvuHtS6ufKQR7bBeHgiSdr1jt6s7syuvde",
  "key29": "4zyPNUSRFNkFqdTpGaxpZLQ8ZiUHbcTjEuoJSZmuYKLVEHj6dxcs6krpyBjBxWLCmqHR1YWZuR6YKHjBXdSXqdxd",
  "key30": "7PaeKrATVUaK1Jv33MQJERrtJz14H9aoSdttMEveboR5jx4Zfk2KQQaujuKk1TeXH2aQEipu7nxe8bUKVoykDr3",
  "key31": "3P5rhjnpMWnJFVtT53T57Q9naGSGz6ZTp6hojAF3Tq64aCokv8r6uNBZ3hWLYg3CnYUUnvopCxn2BgHa5mBX8xrt"
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
