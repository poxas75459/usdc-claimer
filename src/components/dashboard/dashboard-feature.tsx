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
    "4ac5hzGnrDm9j5UKEDC6jXrkGnuThB289Ee87U5xf8RWvBYRCJmbJYYv8STNBSKDWG5KHW7QEAoFqZgae8yb3kyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xS92p4B3vGPYaEQ6irLJew6v3kFFdHNvehajYNkTMLLKVHx8XWvQyZ6mFFnikkBjGWr8MuYtW31YSUqu5gziwvE",
  "key1": "4uo1nNw1ZNJ2iyipn8xQv6G8rTEUroAe3a6P9aMQERS8NZ82mrpKgpUzfm4Gb9gNFVkSu8FFQDn3bBqJcisjAPtn",
  "key2": "3QZxh6UPF3QDGxVU9Z1WU4Tz1qHxCnhkYxquvZ1G2fiZcfuTYCZSyZ3xmSrbHDiZxZ6wcdbp3TpAPiyEV962E3k6",
  "key3": "3KrU4sVpSi4dHuaxUJ4UCp4qAni6Kcpa73Qn6pTwm7Srgb1f3B8s1LYYJgPAKudxuQXv9VcCyJp27zUFazeQ6ev",
  "key4": "51fuzDEafxRbw2bjsv3za18n7Ux841eLstRsZVzHpg4Z3vaiBzHqVEno46X943xvoYHrA3ae68RfM9soM7Z9UxLk",
  "key5": "2x1PqVFYJU5cPSvRaUf3hA2bGyYmhsz3BnmcFSjVXhFHMNxExyBUxDy3U5VttsgrAnEhu1ctgqa5zv3sXDJPMZ4m",
  "key6": "5t1KthBRhZCJ945dHHXjZpsM7mfcMkz9yMbaPJp8TbkJaef14sa3VRE9FkScBthAWn9fSYSdkzVaJe2SQSYdTE7Z",
  "key7": "42R8Efz3mTaRB6mtG7LyqwuLiTj1hPNiGNAALMUuJZVBjmgTEigrCsNXgeuTwPdf5ZNBddLC5Dn8jfNvge75tgdH",
  "key8": "YoyNh2H7HipH2wpo5b2mDZFWh59UPn65mCFHfMjDKbHGPkPiHFTqcoRAD4KddHZvQfQaLcn9iBLMNGzBiJnm8N1",
  "key9": "hcdmYoJvtYx66DntyNDbQtatuMbNL88ayQvAhtJjnYKrzPxxdcVM9sQgF2B5us6DcVGduJ5PFK6K6SKoZ1Wdwoz",
  "key10": "ZiZZh8fdtmQZ5q3fg6x4NXrqmDYdVq7wkc2qwqGHT9Y6xMKUwmzD2tHttAUrDYx5dDfqXELhy7t5wcb5MgmTPCT",
  "key11": "4pyXdK8UcMdbusDTzRGidqrVVkcqiYwAMr1yQpTxybJx4vwNsQczNpxefadYtxcRGqZDMYu8a7WNKCPhZFkR6NF5",
  "key12": "4G4xctVAvCbsLFeGHwfFZULvuJAQ9fCHNd8K52axckAKAaCsSr9R9HsiYtKdX6X3GyHy6rvzEyrGF6ZTdiVnckxs",
  "key13": "4p6XsThnDp81bFuWpfuycHWACzsq2rgTwhh9YwtyJYUCP4CUqaKoiboGtbqACuH3JariTKTrWmjgUc28NeSfqtqf",
  "key14": "fZm77BDxz5opcJXFc5UQH7TzEBxnDD1kVLViKYZ9gt4cPnnVoCzr1UNrn49R2gdFcXTWfzc3yV22wb89dBaAbxR",
  "key15": "9bvDp37oFyrjPwm5mt87aGLAATrjFRXxnu1eRJvD8tNUWfPWdBtvSrzfzzYnVT9jZHch3jeupMYvpxhpw6P2Ujo",
  "key16": "3K5Rp1RnTjtLesPydB5igybWnpX5iZ4sXWMm6eXgfmzz2jRfVyxukjqYaxK2ckekKf3d3fNjCWSjfXiT4CtjfBHB",
  "key17": "35BZh9t3MXtzFqLTmZAbJ4U3myC2ZixDzNRULfabGbTExx6hggeSveCJ4ViEjVPWi6S51yU9fTCNuxhc7tUKSFQJ",
  "key18": "4uVfKXnmyjEWrpYMTidDFzfvtjgqfjNFd21nfiy82eQfTJuuWbwS5Baj33yx2kPKmiVdW4BKMFUygiGAHcaiXqYC",
  "key19": "3jCP7vnDw8F22E84Ho5pB57td6yPMjeub6g9pFn3Yv27NKq2cfQ4Ki6b9n9MyEQ9ULH9M4Z4iBTvqCTaKAxsWCLt",
  "key20": "32zXFnGr4H6DiwUFgkTDn6iJPrFYQAr5GRZdPsRs5p2oa4bFgYbWWV7CfZnnHJayfYJUBbk8xn1usrAV9JC7j7Lr",
  "key21": "2dTMRdKMH4itVThcNQzVWcAAa5RkKhVEua3mR73eiqihZHLNaemdPRgpTqk2zUWfQHj6VYydEzvPLBHwLqxTtjR4",
  "key22": "3DnXgmxX6XRG9o3nCjFoppqBrkR5FdYLRWyWd9i1WieCjg9PkcHLNfJ1akUfmwvf6XkGVRSf9qmB6x3AuadtrSqN",
  "key23": "3TfZeDHRuy55pWmV99G2xVm9Lpp2xeBcf3LD7s3KTj1cFJKyQSqZfA4qNLwgqVBx6TR6AoUwJWGRrFHzmmmFTd35",
  "key24": "4aJLbqSsk8UdGiCWTzoPTtfpGmWR2Kx1zH3u6kxH2yJGByNbBsLYJBz5bXfX6mRcQnhLrW2H5GJkJvZs3yPzTsWr"
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
