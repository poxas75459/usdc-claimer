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
    "4SrsahP3UqXoZLcZqT5xDiBHZ4ZSnKpsiBRMfDu5ZMKLKMFEVQS8yZg8qpB4pG7Qj9LCL2Qurggbi8pNicop3V6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YQQUUgqTc4zJpVVY4S3BJH2GHpkyKdxPTRRJU9AoUERJJ6bVZzGi7FBTGss1EMs1MVGDDzLGkpCzypx6xbE6i8n",
  "key1": "3UdH9grrQEL74RrX8vfA9qjJ4SwmTi5TyWLXV7tUMepaEVRv73UWfiZLZPaqt9peW7oyUT5njPeVCBWzRfkPToLo",
  "key2": "piC8teB5gpRUvh4fEiG7vsALmntmCLfNqnyPp1rYyFCMa9mtwu4ALtbqibxL89V24CGVzpFPUGESzwjG13f3XsL",
  "key3": "5NZvWo4S6PpKcZ9p5apYBqY8BrFpyKJjA4dJ8kcCA4rTkmYc7MLZgHtizhHqP38ZY25px7rHSimKWL9mHBFQda51",
  "key4": "4aceLbJ1AuSeLcDGppwmbJUbQJDmVHYYAq9qGmngqei9TNmLzebLpxdsS9NgEsFXGNGYATQU54Ecizd9BQmLvVP5",
  "key5": "5Xh1FfRjJ1ptCT2CntMafUCjHyQcnZ85XyQ19KA1dBXRZuWErZJus7xE4dsd9smiKyWtCJLa46c8a3d9r6v3AMdB",
  "key6": "2Z8SBJYFMzwJuqTrpYGHpPu5oj9JLLXNQbbVTgi3qtoEFUgFJQVULfNopL9tFyNojonrVBNuzWok2YbFWR3Fiypr",
  "key7": "3BzYQG8rQ7ozXn1tR7PpVbpz3v2wmvSGXqixD9ZFQDcq2aDxqXMyRvrtgnK1XHQtncVcYVR16WVvx1xxfZR31bHh",
  "key8": "4tuqdKKz1taohWaUgCQP7VexDcCrBemtDwEnS7Czw92LWMhCK9jKD2KEZ7gfaJUbFJ6ELRjFwjzTjSdXuCdaxeGH",
  "key9": "qiE6rN8dXRNMvWJq32xx133NTHcde64x41B41qrNXWNQ7Kkk9QAqxvm6TbofviEDBCNpeZejGAtZCdAPH8mrbZu",
  "key10": "2eTWwkQMfg6jgeL9tkUjQievob46miWoHAJYJSGNEJdYGeGLfM48wjaoTFtCUmjaf6uQYfYeTDp3uToosMqwyUz2",
  "key11": "Xx21JVwB4juJhdsoh7dXKJW6yZjDDcMtEwkXkZ2uJP1iJHSjHd8W8znufDo9N52kv9iQS981jWzQ1g612s14fMv",
  "key12": "39ecUiLSt5aqmKb54x8iUSUuConSJJhYgfrNbN6cW7SZZVGpH2marknzEdd1SbZaqgsPb2pdfGDV1fBvDS6GT9BT",
  "key13": "4V65btS99dNVnTrF1A8YEYzRqrfrZa5cZggztyR6Y4xcWP4G1pXiVMLFPz785pVdvbSyV9vvVe8VD5zGwDLfQnpn",
  "key14": "5nesvcxtj9rkQB57KVpghGsNKDuH9Lu1gQPtztE4hc2ZYKjZ9cbPu5Df1eWWwHizsVpGVBHhrt7S2iyPJkp8rFHk",
  "key15": "5ZmJsdFKQLuRhPWkU8vv85U6EuxKhEnntYNH96EMbaUKNnUmJVZ69UbiURJJJs2ASCLNtfwxPXcTzFiJR3W9xFqV",
  "key16": "63hrrcx13qJkq9pswrpCDY2qZyqhXL71Jo4GXYkTJ5AC3995DmSzFexNPeyXB7LzR55fLrLtJRQquDS1xWTUS3dQ",
  "key17": "2uPFe8jVK6NBtfMym7veoEYZ92nujYZMXMKMUkpXmmvgCjPx3t6WyZmrTxxWSRUukPufLSvQDUYQX9tX61vShuUj",
  "key18": "24rSixnW8K5Yi5w38VGLgNgv2ewZ3CGiZgUwbvWGFczrPFPgTdqq1T243g5y5J5inpWUDoZU9ajutJavGGNndMJy",
  "key19": "5YnNXVcC3ktwug6MWptcsbSLorxps8uFSq2vhfpTTWh2b7YWhscD6uyYGLVFtcugWzYbiFg7YGTNDRHxTEU2sqi3",
  "key20": "4v1B4SEVkJPcgAFECcmgUWomy3adKvxj6gvB7pYhzfiwsV46338FwczPopcHmKJrRtFuMyUyaUNJotCYAnhGeMVp",
  "key21": "5eoGzs6bUuW9YYm11cYGSWSH43uxA81AXT7RzPemnDfbR4V7DpDp5XGRnLYRzwWe9HnFUE9MgotuaEDy2kyTuC71",
  "key22": "4vXboaEa5MZzEsbcrJr7m4SKk8dMhkWq3hKMQ31Ya8HbvZeW4Re8TFTXve6g6kk7fw35NYCgafTwcWQybHufSwu6",
  "key23": "5N6hKqpdh44Re9Aete5HGQXWqwbf9KaHJZkF6wWTGmkWdq2Q7PBxbGtRSbtzdhT1byxnMBSXAYybHTAutp9MzAZc",
  "key24": "5mZTjdM4EuYJBAETrZ2KcoCg7Xg6WxbvLXdpCjGFdCRW3sVxuTzAgvu5hpH4zBonc9ah2PJym6TmD1Aav83KwDtG",
  "key25": "272c3FQ1sM2chURvZiqYAzcqoPCgfDsqhQDa19DAF8UyUfA5N3Y84mgVYVNi1oBx15jDkNcGkvm3itUh7sVnjxVL",
  "key26": "43SpAbqEYE3PExwLhCrBty7rqLEhvRooiuBNAXioSufSnGxVvREpMnxBcRYNEVSoquXyDzTRpT7NRc3GkQjgQw6i",
  "key27": "24rA1wYp678SgjhDV8oewzJu8xwCeAqhqLDfuJQ3bNbwPLCcPAnNsbxd9gdQ9cytt64VMZH8M75mMVMQo4Euzisi",
  "key28": "3baP1VzzjUrQBTKJfEzqGgkTXhgEPNuFteAkToRoCzjnKBsd6LL9P9L9kQyKNZJkJpLUcPmDCw1xd9iP9qKpDCZ7",
  "key29": "2Kxw3PCVGkHAMbrQPt1YJcDRpbRXoHfXJ85qHah3NHTV6LounFg5bVgRqEFDeFA7Not5UTfkfwqTz5nzmwe2duzu"
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
