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
    "5Jc1zwtV4LmUZnM2FaD7DM5cGvenBXfjgt4NeDWbhFwU78y4nBwvHdV6MAqfbJvDYrJff6yWfiH6TpaosYzgrs2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SggUkjsKjJdKupXRJPWUGkszjr13vjUYe2VxnYdrr4irDhbn6sK65Eg4U1Bei35PvVmPqFH3ZdsbUyaKh1W8kJW",
  "key1": "25EMLosGZNELBxvu5zQgaoWoGjghpq1eYJMXEdfDWz1kr3x3dhMTjxQaVf3CwZKFeXJbvJwPaU7EyXTV4qzEjYW6",
  "key2": "35V9afjMDjv7ptcC82NxcvDaCGm3JkkANeujGKFjswq9tfL832pbFmVAAydWKBeZNNnzQtxgqoS5RDW7JrrW2Da1",
  "key3": "3HqX6yvbrLvbQBaM9rh8rQ3D3Tg1H2dUVf1hJGRoJ72A4ZQ1uPfEpq1XUxw19og3h1Wi18xnyqon41kfw2jMPGVf",
  "key4": "46vGzZM72c5fX8VzSv2LqZxCdDcLmMXeEnPzcfBUb33wM76H5ScJ4WyWdcAV6Y5D4t9hC65M4A9r4GJYcUe3BrqA",
  "key5": "2urc8M75ZMbMo1aJE6PpkqsgwVd7pYFwMZEEqvQSZSmECxNNh11MtBwyYALSUCYPfmBc7MXx1zLXq6dfdnHJeDXq",
  "key6": "3bXQFwFBxCPXPsDNaHv3uwnFtxo1aTidXKgG5NQQ3oo3NPRQwF1fEztWUbHbKVNUuoE8SJxU2EZ5U7zW3qYM4j7e",
  "key7": "43nN5NZ1h7QQFPGvkQX2n5FYNEM6CzXHeNH83V1jfBdfeLDjNenQVAKoEHAbryX3NUBnynozKC5zyeXLnSuxiRcp",
  "key8": "2xg6ibsKCPzzs39QTQCwed7TKAFeT2uEAX122aa6XffeK3JPTL9P8zKnG6EfQyy3uDMV6HNDg4FepxkPJxVxK4ob",
  "key9": "3zxZ2kBojEsSoFgg6qHbadrPXiKLFSKmrxjUrgvAxKw8wPhpVa8YP3fuaCoQ5KJJgvSvYQJcQDZMZ7X5jpHKwsW3",
  "key10": "2irzrqykgBNgHD5iiyPdJ9tnAjPCgrndgqhE86pE64HzXka8FKmyyTvzzPdE6DP3YUAtBEPu1N5HFtGJYZ19dKwR",
  "key11": "37gKLCX6NaL15aRjMmXNnPhJweGY3XDN85hrULEwPTcoLFYvsdojD3wWpdxQ5eAJVycLyGs3ttnD4hpC3896cBVq",
  "key12": "5L8AUmcn3Upi9hPyhJy9ZQGqQFfgNS9d1QZ9aFkS1qhKEHDtPmM4WDm2mv1iFprqPLrBnRBagvntnpHhyesFXygC",
  "key13": "2aXqY3rFVzSmf44MYA56tDzKPGtrrzECp7eSTPdaUnVnyC7FbqQ2q45tnXe9KFVn6HHaTQHGaBGdBLZtAN8gLfz7",
  "key14": "AXCmHJ22mbs46dqdoEPzFgwRSvaTh5ZzLNvsR7uTg3AcwjJLjvs6nbmrHYJ4uqwsTAcA5FFXvXuymCNYBTn6bCs",
  "key15": "2UKWQm9WfQfxRX7NjbV3Ha2Z7xJXSpwBSC1LSe7NpwR1vQRVvGpXXJ7ry8Lww8SxjHAjCCJPfDjRXz5mDSrcaH4S",
  "key16": "2fxnfJikSoeWAFTDBGytZgdEGLwe6seQTUEaJsXEgG87Lvg83k3D5zkRtELEFiN5XNBJ48x7vJp5UJ6RDvxCFnEr",
  "key17": "39BBe5hezpkkEeU43Z17cXpaR7qxNd2oC8fpDxAp6SifeFqUkj186LFwmv5TtMqJjKnEYtW88g5nY1wvpDykcvHR",
  "key18": "378efp54PGb4WNQk6dFgNyMeuwxALpYmvBnc6f6f6PUfEJmFxAhfQBFCwP2kq1JAvf55L5XoyfXoexkNNxssvsvV",
  "key19": "6FBPN7j6emD5FsLC3q26W33ibqcgUvZmEUStDwZbETRmyYerWkFQNJ9qmYqkBM1kGGmJnF7TtraSMHxZvNoQjAm",
  "key20": "4mAUnTeQSreoRpfdxQsYLDYKHckqgBf4b1wLj5bhN46UH17FfQWEAFM9w5NyixwLF1zZZAiDmYi88e9h3aWrRgnQ",
  "key21": "3hYZANuntDPZDKCfhPT8Y2TKhGHJqYNGWqpnj29MRTyBHV4Uzes68D8RfWQhi1XLZQN9UdYiyLdcPBr6jB1vsc3J",
  "key22": "2z2scGWnMHBdK5RmHAaNbMieC1DKnmq7Qjs3qJ7xSQoZRhCRzisNSuWa4EVyFJYGSpJEvy9wLSdtz2zE28izHZX5",
  "key23": "4dPNuir5hhkQqtYq5AiyFZpVcJ49RGrVHY4Z2UiaGucR7Ez8Pe35ZSaHLxXwyH1Mq7msjRq4gBvL2VWnAjX5N263",
  "key24": "2hZs8MYjwrDwiZftHGuXmRepYntLeHWvtNjEu4nAHReEYBAs6h98WcASPvRazPQvtjaH43sDrTTvGxCfRLCS1c7",
  "key25": "2aEBWk7nP41j2qrcufAzbgEUjBp7G6Hb7mV3QcEZPQQMY1TjQMc2Bpcx4KPFEHZYHWiC8CcEkegLoFT3AjMvfYGt",
  "key26": "pCmbtPy4ab7x5XpykVhz4aRZnaEPmH8mouuiZNkgW5mAseBpGy2xjXoA97Vjsef1a7GYtHU3fuEBWbcSuZCJa3C",
  "key27": "2fJv9VXaCEsi8SozxqPSJwvTN563juhU6PbjTwcm3HJv7UvMSvtQxYQDGdKht9nu71dSjWxMyWogMVnM11bvppRF",
  "key28": "45FujxRbiKd5jhXwLvNBsGSehRTrZk1DGPFbWeGqbQi8T6NxhtTRaUfkv1WjWg2uiRQDDqj1tzMR9ZvucE6SQPuA",
  "key29": "2oubyRumVKkvvpu84kGTvrU2YFYiDp73FcuTXXWvEKr6kbwCSp6eZaBibUeA39UtPBGfv6cs45g4q6VogsdpwVV5",
  "key30": "33pjvdBSjy58NhU4yGhknDmQnHkTgF6N8iTar9apjB85DWNyfDjSPTZpSpYF1TEpSR7bUZcGZzAeasF689fXMeFY",
  "key31": "61YYwZkueHXxJwjNPdgxqmGqvjQ5Fpt2SX9Hfajgkog4gMiUfXAqwiQ99dsAE9MPa1oMXsQCgYSnnuPKPV7FuQtB",
  "key32": "2BwbUuNfGDNv78Wc5uftCFyrynMfJwFyXdhneJGvhMuwC2QVKzVUp166EvWhF2J3UAXmtQLVaRumQ3yDfn1v5Mot",
  "key33": "2xXVhS8oJys6rDc9qByFsMQdLECFXN4JoZCwjwkWhCDKavKj4rBZnQp15xGPyAJ55KUvU6WkxNG7BAdhE82FtN36",
  "key34": "4iKgtQKDygMC6VfZkbxzp6QvA7NxbhebJrCwP6KZPsEjKMT7iXLNL9r4MouVLeHxdZrE1oYbLZFXBXeb2KmZX9WC",
  "key35": "5RmBFthLQ35Xa7DFNtqQi2mnRc4jGUZ3pgssjZmx52WpddRujPYSq3SZjbZD4bPyMBGY9ST5hytyvjkdoEDupbQe"
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
