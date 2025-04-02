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
    "3s3wqrgdyj28SqS4iMURWiFPP8uyXhjJvryUmVZbKyR5zSUgSR5AEetHrG1pynKLg5KZvR9q6WtBhnkGWR8imZDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UvyXXsawUzUmdDgBqvLMf5zBkb5hii2VkVrSc9pZuM4txXXfiZuw5AeX5oksCL7oJ4H7ZXzXMVwAB5o1bnL89Mc",
  "key1": "4y2T4QNjrVM1HGJvxeN5rvq9XAsDa1nrbugaEn8idA1SKrhjqjt4pvPspXyUmZL8M4Lhzt9Qxu8ETnoBFGKodMSf",
  "key2": "4qP4Ei6UrEssT7tg4n2hJubp8KKjQ7KRiF5nE5GtgFGpQV7wGsmdk1tvi2hUCjqPDpUduqedkBMb46d7uGbuMyEg",
  "key3": "5nZvruHKVbgeaE3kFQ3sudiYJP9A1fGNqrGuFYYdx8kMm7iV7kwd7WfmvS7YxxNcXcE1u9prV4XP5rPzNhBu77YB",
  "key4": "2RQHh7ysxw3jb2TcamiBeHq8t5rFQRJQqmSfqWKcQZBAm7CeSZqTG7ZWTZEYuQP89TiHLuRr5CfKtoBYrs2UwPVo",
  "key5": "2zkV6R2Vt2tKMUDHmGeprzPaLYjn8FxHoES75gszQGuknSwG3pQEyaguJ8FjmSbexPoxebW9JdKwKNP3rLMoW7HK",
  "key6": "4N2MMXsEfRV95DN4WtSSUgo5Wd6C8DmBi7WTkad3CfubFPvrtem71pUdzgRcxvioxRBTny9TTdqom74WxxGiZU3o",
  "key7": "2dDwdSvTpcUMUTU9133ijTZkNErdtfW91JesHD7yXDdyrJJfsqE1BUG2EaFnNNndfDhmLsXGXbeqFNsBjJsrkCNu",
  "key8": "3YcGbiimSmXbB9uutwz1PGLxd9wZGNt81i17Ton7VD3FLmuQsKmBy4ogncVobqBHuqYV1qCfhk7fEBJoDLGA27qY",
  "key9": "4t4QqJCGrmVgi89coWunLVYoA3ToJqn5dDgzcSuYZQcMuss4DmtgrWEX5Vgov2t9GYL5aRMkuUyaWxgHTodB2v5w",
  "key10": "4gWyU1QfPYWfD6dRvigtQBMKfB1sDNWkEnqFhcqK8zi4wRr8eodSAxKDWYKnWS74KLFwwugyhp7Wtx6htesW2Vcr",
  "key11": "5oExKjdAy6TH76WtqQAVz7KRnF42zZN2PHhMAHmGieAyZdbUmzDwgfR2zFb7dLCR2v8DkYQw6QP1f5LFjVc5TpAu",
  "key12": "2KvxYpuJHGSKdLwWdWLAWkstxr8khMrfdgKbFt1hrKm3jgkCtLx3fb2xmskGWKmup493AufNkKHaLPLduBJpxWVv",
  "key13": "3kLLH1KD2Sfx7rK51Xp1RWzbiHgb9wKh2zqfVJvpupy4ZFKd4HykYokE5xbrox9eEkcr58xhGNgVmiznunDX6LVo",
  "key14": "5Bg1ivwfmjL6P28MJMcpxcdbJiHdwqEu2wpTbndVaKnN8wRgz8mX2unWpDLLQDYN8bmDzAgz1GGydRhJAaojEnNW",
  "key15": "3W5P6SFHypfytXZmzXiSPHnM5jP1sQ8BR371p3aZoH7Wu28yYnTmuwTi1zUQt2pQZXKJyV7BQd5QuNVEE7Zk2Kb7",
  "key16": "4hJQMkxSgFDdPi6z4Jm43J73wrhsuPKGTQM9a51WN7auJgfg7sS3DACPgHRH4yp1etbCowQc5f4A76AFATAAcJAh",
  "key17": "3PmhbDXX9rfHm8vhooUY97CLEPuwBJALdejKcXjZfnYu24yDvJnpfNaPK7THRUbtYiFh45beLY6PEU7qnQZTH9bz",
  "key18": "42mgYjqE8g2nx1Q7mDdYGhXAxWzABnQ6aTTYFuTG4FmyqrYSwnkBCUKU8nCFqqgNgtBAcQXZ61Pun6YKG8uHe7ax",
  "key19": "3hZdCQmGKpBgLdUaUMocyy5zNqKf3UPtKxfSagQBaZD76Nr4F53qNuv5DYsfkMgvpNggBnAvMCre7xzEN7VfySmX",
  "key20": "3KpDoZ3Uj6MWAnNp4aV2frUxXgGgPpLwLXatFGYYzBJBQggyj9axhr81zFjgaFRyCAEybtuEZQLzEwqfvJAdsy7i",
  "key21": "4KrWrsVEYgRV8Sjp7vXFACeyCVqpSiZVeu36qwJBUKQQFTXtTQe4qE2YThi4pWkca4QG8XA8X1ZsE8Z7UGSrRybe",
  "key22": "2iZECS8hfvaoWhQ5nT4ryvQ1uDo3rS8Mxs97QgmLcDaL5UWopGeiBZy1c8S1Ere3c2a6DEGkUwQhGMzk3EVa5zZe",
  "key23": "5TehyFBQUzPTRcGrasNNkfwo966c9bsnwTN1wFkfVn4yyCd8YkgNce9cBnCM3bwHSPqgxj1MGp8hq4b6kNsNSyKu",
  "key24": "2Xe9ZQ9gWHbPmb4Hssgou3xFExU12v7uXxgAEjccMpwwuRwbU6Tm4qHDyzP5RXiBy3La2ttST4XyoBqD8dHRuDf1",
  "key25": "2KXHZ6k6E1Z2a1xEaWSA6mN2d3S5oZUARCK9DwEAuQB87x5XFoDkv4d1vbBcQzEA5LBK36ckHzRRYyFoeYdnHTKT",
  "key26": "2BX1Z6mhgqQNs3yk4zw5py625bL2oSuDJdzXveRnkxUhSAZqaJASTehKxgAtgYiMz9ENxR55j5bHuRbgqUu7c5Cq",
  "key27": "3QDoggUNcaxgP9TDKg4o8En7wrAga7w3fLiSwzomvAXw7zaqQkkgMV5WRzyEmKM3DvB5Ku6KgsiF6nN96kYY7nhP",
  "key28": "5D9CgAHuNC5Y5kH77cytFew7jTM9jib3pHf6e6wj4nG52KqBMdpu5EnAUocDase7Y96FrQKc2gMzrW8CHzWxYXf2",
  "key29": "55x3DtQ1sTUdhfXNrf7oWKdkVu2oEWg8UZDATEXwXYJjrte1BdCph2CwRb6cTdE6Lj4QzErpSWcA3RZTYzneAAjU",
  "key30": "21KBWv5CZPHpgUZUTKsxyDzcMzPekehMpEzBvFjCci4xGwLFHSmjQLbdUc8trgU95EQFnqmTsQX8ZCTjjzJ63vVp",
  "key31": "5s25mS34MDBSm1TqMGciBmkhGJGbZBaTHmqp5EaTp994zzveexqEhX8PErcKbYfwgEtWKk2d2Jd4RNFPoF1CFxPC",
  "key32": "8TXe2hVvd7VTfhpCp7yWPvRYBvy9jUfPbbMEB8fLwWTk8GxkGePVup3Zf3kyyu6E7srrCVHodWR8WFMTGEN64a9",
  "key33": "2VsrUtncoyaHuwA7qavUUu9aYsdg3oHEksUQQHATKeaXgomJWafjMcnGoW51KheA3mVeDmr1e4vYahVzp1xGWV3E",
  "key34": "66m7HDttXX8WMpLLdCCiqdKUj6nZheoBbio37TJqDruFp3DdHDLcMSXgJqZZHjykMN2PoFRtbknbit7PEnMxJTGA",
  "key35": "5e5HXfL2cHroMGR7xSQPDHCBGAcgvd2J2D1nCZpGssosMBPNZcq8NmDB7UwfuxXfqupm2kagjgUYNJ7pqSd5pzz4",
  "key36": "3VK4NWi9xeShZaXoZM6ChXPqck9C6fDBnQNK2oY5GQS43X5bgP8FvWSdd9E4mBn9rG8oKw5csqUhroi1B7uVSTBM"
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
