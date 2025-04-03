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
    "4rv6qabG9PABrD5atjReHDs747Xq7aFMcPMPr4YLHThnKw2dWUR4YW1R2SMr3vthHNzFhejVFgVHCeGqz4W68K3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s7HTE3hAbSRjFyhnZDbzsGs7z3Xt3gGyML72fvTkyGB3nujUH7QpfZiafSxL3uRM4gf9Vg7QL2Cr1jngQW5VZXf",
  "key1": "qwGBUUUqFNAnRDZXePJ7NhoTji7VpQTXvcSRjDAttDzHH2HZvtpuUiCJgQHRcJvEDVXn5Jdc6xdXkqUVgGE9XXw",
  "key2": "3xive1qYnr3XC7X8YagkV3mvYmzcMg7XNiqx4HRmsn9qz5UBqoEpSL2Eu628HDenxBDowq4PdUBmPWsMmWWX8hCF",
  "key3": "5S8Qtqo8LSJ1feKDAHLf3kDZd3UZHcPWcXwHpvVhiPSkkHAKCMCT5JNEXDeqdvUVzL5NbpdjbcVyaM7Fy9VbkYSo",
  "key4": "2oXSxkj8YH57bVaNBX6ArGnogFEkm29GDSenK4qRXfXtYH6UfUpuDKkbKkPRtSCZvzWuALt615PRNzf1uMmwkQUK",
  "key5": "92m1Z6Cvvw2iYAzE41p7u3vT4QP5CvCNLzdWH9A75QCevhkCEQDaoKLNAbDXXFRn45rtQHeuxPnNjCNrDrtWggw",
  "key6": "5TMwtZLNG8Eha4PMsvP3USDvgw6ZC8vntBYVGcAfvdVviCe6kski29tBhLuhKMojZGDsXTZcA4VzoTnYe3zvGdc8",
  "key7": "2Ft2rxtEUhASRE5DseywCWKDCkjMJC8mbfJGqkQNQhpp8c8B3uXrZ5Gqo7psZmGpogrxgDKM5ZdwK2jRUhNoJpVv",
  "key8": "Cs3wQD4rj3xDRSxEFtqJxr7uf7mXCXUTz8cQh9U9uv8m4bgynb9gM8EMUP14hJz3cz1fxZjzQahLzxMhtcaZmQr",
  "key9": "5dFma7WX72qSYkAxbi8kEfxYLCCS4FmFu5uwxMVAavbcUZ17sZh3U53NPJngA5y8LQYK1pnnK3qwnPfiqZKSmpzF",
  "key10": "2qFiUaF3AdQoTY5uVyou8b7GwHJghMTAnMUnd9KT3UPjRRjzJqPAoE56djKNSA3yEtywzQFrF4mHHYvzNSjq4VhM",
  "key11": "4Ei5xXi75ze36qCTjQZVvpMFos2PTkw4EsFqvBoVLXfDz2NdqnrgcBN3YqpAnRT1jeDU5ZyiNHNKS5yqxkDUYeRA",
  "key12": "43KQ2PPVeCGfXSKhrkN6AjATk3DLFyQvYGiKVxjsdDC6Hd65e1Q9ZTHejYU1oamuXemUvQ8CyeaVTt2UDYpV5bjm",
  "key13": "38R5CKpqL32vfLvby75UwAEmwZWqJdGE3s6uUUF2spjC2upgYRkZUFUEgdh6RKqcGAAVB8z11ApAkxESv5QnD9Jb",
  "key14": "5H4yPQuQCVua1dJZQe7azaMWpqpk2ipbLKNtHQV6kbZdi2rzP4WAvi4tG6GRWBUdFWTFFGfb7i95M5ABCzq6gKiA",
  "key15": "5JvNkJ7rMKRAjAt3XuJ6UctSrfjnNNBQjFpkJa2Bum1LibTSAQe2dHB5gKhVWCMjmAAXPmwe4RQSKMq6aKVUbewE",
  "key16": "wXTVi5355TJ1YRU8DXhJ3qaewhPgbGWMSdrzKCBQSiGbFBqayCm7JUHUp8aWa2xzve4kajnHbEUJg5Qb7u4B8w8",
  "key17": "3bGnNCH1dptyRdGDXu4EnsNyawwje9qaTKyuxqJqMR4Ed35PgyQUfRBjzotnK7wszgg8yQW4E6ZULzKwBS4vtTWe",
  "key18": "49r3NEV28eiqupCbHLs3AiWBnCZC2X4ADZCsnQq5QZYBLPCPnaZ9qsbiqeB9vk2E1WXh6JqKMS3iFUmBuR4SjpiV",
  "key19": "2w42q8BDBPQhmWcN8g9JQmJU5Riu5z8MYqTSBxid8yx4ZN2w8sr5RSCRdPScqJ11kCzmpu8UkUqvYgmbZkvVfUc4",
  "key20": "3cKvH7b1KFeC89ZA8Vncr8tTUoMifBW9yPbPbGiMaJ7VCUXnE3nTNT76V2gHwRtb3mtBuibf2xwWZprevdGd6wR4",
  "key21": "3ih5rGM4s9VksfFPXRAFLwz5bN1JrmdxQLoife6UVsRuS4VRFZzrCsZdNDAbPsvXeHCfN2BrVuQFrxmS41XY4vQH",
  "key22": "3wDknX9m6UudxLNPKGJfNj6jYcK4HjLfZ1Jg1XWnFRqZdEdmskutLmtvT4EHTgmzFgPWR686xAQZCwCF3KTb6bcZ",
  "key23": "2Z7ijHd8DQvFp5VEmmXYxsDvT9jbuafaEvPkLmQbF9HrKxqU9qL4mF9qYfhZaV6BZMZiU9RGJdqo743qTWjASKTq",
  "key24": "Nm9vY44V7cYABjUAo2uZwC671zXkGupYYRnaNAeyopLFKjLmhxLUZoYb6vJNbKCJE4TVwiu7g5zcXL9sNNgu2yL",
  "key25": "zG8VeQkdTPyY6LsZzWjq5t6gvxXaJn4sYcbTJGJ6Sxg6R3ymnDfLudejFRcDNVYUiRN7sUxNga4qbhWUc2Bogwe",
  "key26": "4eh94dCqe8DP5CsqkUsVzwdM4ZFazbwBALmmN1WmbStj1yfaKDSnbNtebeApbTq21exCKMSQvJBUb7UFyHqPs6ds",
  "key27": "2NSKkA7t5pLxb3TRerxLLokED4rrZeWUniuENE7ppopbun8eQHyg5utHxHJaCWxRGcYbtYkvhgc3K1XY2nMZEZWL",
  "key28": "5XzJCresppVFqUhvEfYuNDEmTrTrMDyBLKB7YUpaEdYr8gN16mLndXMrmQmEXHhMoNBfEtYMntRNx54jJv1QpJ7T",
  "key29": "5jBwW2uuYBbHq5T1APQJRfBA5ufpJXgPRMg7tBLu7o3eT5DKAgiRdCBomK2ZSkVbniRSJV8xvarKCqgsgDxx1Dcp",
  "key30": "2m6A3hHBZfrgW7DSveGgdCGZ2En4TJLBkBMwT8wFM5CAAoyNWU4BFDnENFa2KQk2d3TcG8T5JQ1kJzpth5k8vKTu",
  "key31": "5JkRSruRLEpyhvPD76dgmpXmXwzHo8foctMN6tb8WUheQDxphebELX53og3ehErkyZnKKF95Vb2NYQ9sQoAsq1ZG",
  "key32": "4UdXMdrbbF2GcmrELwhCvP5Zd7wpUWD8ayzFESTkvY7zNe4qaHvE8A3FstKPkVyaqC52EjmyjuTMs1ZhFd9RM5c1",
  "key33": "2RLVEn7XRz6pJRFU9v4vy55iUqUEQ8MtmhVV13HK2zNJ5J2CcmoXYWtp7GPCVTdwkSDYjRuJSfohb5j1zxdjhpDY",
  "key34": "476AymDkdkPU1psDi3D4gk3yVFN5bYGMPi7CfLynFNxwXMWmjMkqs4RG4Zm7gWHNsQLaBaDjxnJeoRKJSb8ChrFC",
  "key35": "2qEjegVLNgyMATDZw8ShzfuxhAajX5t4pigkvzCNrPFzHhKKtBkrnpoQXBKkmj7HdY8qHHw3yfXQqSnDwjbS2hoV",
  "key36": "2Eum2tAJf8ARB5da6hTZWWYJLNsD7ua4vi5HuoTcdmX6qnd4sDAwEKcwWaSiR1z1EUESoKzK33i6zPwjNAqDFwt7",
  "key37": "44a9BSzJAjsBeKHdcnqrtR6NHroV21JQ78QHUx4VwcJE6cLNqrtAPEEZAP7LQPzQ47hCQmCe3Fp7KAz94ctpKnfF",
  "key38": "3FR39xYiNZHxsiLqp3N8WaBuh5MVqi6fE2BTiDJSAY98D4mtGnS5d2jGicgXoqW5XnBPsmyWwBUiKtJQnLU7Fso3"
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
