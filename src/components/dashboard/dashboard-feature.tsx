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
    "32dQRwVXD4YiBAhZM4BUtmxbH7hSS4vbSarJt64siCTQ9Dxk39G3k21Dqaaxp3yejLvjNczAGutFULsosYKs2DmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NetgtFJkWuC6sqBdBBaWDdKPjwecGRQjfGM2UFGzsoV2E5UBnzkxzYCFnZwximQHZDRdKRdvsHFW1ehD5Wb8B7j",
  "key1": "2ZxxUpYngJWgTmhfre2xFcMu2q7azBmmThRdMXyYD6BKqPevwLaTrmMKpV1NFtUJfkdxajwUQhFrzSgWq6pR4Kge",
  "key2": "jDZ3K1Hy4Cb7AsuwpLFFF9PCo9aSNwF3dNnGkLcHJ4Mt5xRfmnzNxyMsUwmmaGUBotmnN9oH16LegZEg7GsxQMd",
  "key3": "hoccGMDYuBG6GATwpJBPWq4nYm1ZYYmWwyBmVcZz4hM8ydYcEoKbWHzgGZiVENC5DFzeNAF2LDWv9xq2Nm3pHXr",
  "key4": "3Y4atZmSecZfFTCw5xqLSBoUaAy1HsUXgSVAsqYpjupYpEZzPApY7ysKyVmgaXKngWwgEqYfg5fR95Z7b1QN1e66",
  "key5": "5Y2wMjn1ovaacWf2QhSeuQyrN48tJfm2rjpNvqYVTukF1gyiMQdWZ8ExWSBXGAQ1sic9rFBSWBArKutKauUHGP4H",
  "key6": "2RNCSVFb3qU98Y1dcLVyeyeboQVxnH8xLC56vSadsYrRXNLp2GacpbJ6M2L46hBGDPfzCkKHpyu5hwHZcDgQDKsb",
  "key7": "5VykFQ89aav8CHP9Y2GxESz7Ai1FDNQ5B8AJAhcjiWF9qBcmaRSkSYa8hSpCqUFmmJoGcATHaHYm62Z8SVjWAd8d",
  "key8": "H8CbyG3uxH5gMye83hxccBjkuswmQtrViSuby4AYmTMNSvM6dLPh9y4p67F2UdgvgBbq5ZYEgUomjZ8dfLDg74y",
  "key9": "4hR5AwjMKpUCFpvDQ9ooSVTN72YoH5F5JPCESz8Vj4Romx2gEy4nNYTxG2Nt118RswYngdCRrWHk4xPdx7Y7dKe6",
  "key10": "qLFRpS2Sfhd5mLxRJf8wGGuxdfmyXjq5d6xXq6YhucvNkoHsYJYNGQ4CKxfvoSkdYGcmR9RLASKnSYvpb3VerkR",
  "key11": "3PFUFnM722VC2wjNgUQQCoVa5j69qjDSWNuN5oz78mStuha2sKxPnJCw6SqZ28ye6n6UdRT7NwqeXjsLTSNwUZUS",
  "key12": "3QuXB7ndnguipqrmuRq78JwN3ivuf18JJxgGgk1nmq4KeVEcjkwZ1cpoWaxazwVzhCsMDrTmCJNNZjVL8KxxDrFB",
  "key13": "3CxSyPV4cxdMpkaPxNGvQGyMBU8N36wJtrUAZdqVzzrXcbHmb5eCNGfhj7nM9vUcCESFp9X8WHvKdQDuRX2VU9nB",
  "key14": "aBMCPb58iyMfZe97Fz9QCcHCcAcEmESurZAQQue5oqNTe1LPe5kFE6AehSW4J3r5thv9SoGZKn76K8wDVF5HnBP",
  "key15": "3PSSxAntKQ3g6BVfn81Kx8zBhbCcziN7LzvxBTxzFuBMJ72n3bn9bvruiRznGsUeWGXSTz8iKNJQv9dPPn6zvUtR",
  "key16": "cLgTSiWrhASU2u6U5JKb3JHdTvWjSEjmmnzcJWHPD1YohMyKQSDBfSQhDKUM52EfzaLynf4Q2iNP3J4f37YH6D4",
  "key17": "PfLtJSAzztq3XG9Bcdz5kfUjAZSGHjqtJtdPZBdZEyGpWPnTfJ69k7S9j337tEXzZUmueKAJ1qgkP4ZhEzr7q8C",
  "key18": "2cAR8XCtBH8czaKqkT8pB9R74czH6pNttzbh8zeyAnGf59qC4Py3m8jgr7jfSuxnttRy5HQaqj5N54u5GdVtSvi2",
  "key19": "7zTyaRJCHdnNWFiRNbudbwD6BX4DFMuWpjbQvqAgMKvuKejebHdai5dv5Ea8CAzCWvbHTFu81eEuAK469vCoN47",
  "key20": "6AaFhwLwZtgwFUvtQQjG8JAYroEPp3H5hJP2yTkeceXZvrDmkWe9uJXCRQBkogYwZCF5usPfY2YjDzvas6uisms",
  "key21": "4ivF1CD9CfUK4cUWLMMc5piKdDJF8QunKKHKLA28ab64BcMxL4bix9LJrFQvJDG25q316oU1MD6sG7GsPXiAF7qt",
  "key22": "2Nwp22YL1gWNTcRvEQZNTMQxe8CHj6S7jw1o7va4kkhMCXKx78x2DEcXhFus2JV58vqbYL87Uyk97bvGBAtoeh8Y",
  "key23": "4SwTfFyoBT5oJSBzpXY9toB37cbHbiKv1umT5frUiLmoePhbikHyffmSCgpVdq8qeUVjvBSJCheskbt8M9ThV7Ta",
  "key24": "56vtWCXYejLFhUgkMwij9U2Akc8THNthUpxG27Hs3QTHozvEBndakAnX7LHShemqMXStbzNLTwsYcRSRLXJDP1cb",
  "key25": "3QRAizwKWmKvxWHM7qqFisCSxnSHeivwSmoLLgqaSwebhu3cE35mAFk2S7AjffsFTMaXC5G35Nec5ehasoJHmmKf",
  "key26": "65y8puHHojAsx6TtAcPTpLyJiPXuERQeu5LYqKBCgkKiKFr1MC71D2Ne4q46LmefzznxWeBdgpWr1SKX5X4ACJiY",
  "key27": "2v6D8AugQaETwpuvDi9kM6ij1oQUBHjJv9BQZSkgeEz3EcYmqyz9Pdr9Bd7Ybqfojxw61Z9nv447gZGBrsixk8un",
  "key28": "3u2H3Y4imvno7otNwPzBM6zLPezUSnEb8fPnGrwdA5kKc1XXyfEXVvuUmzGN5r78qvASGoiKEkLd6UUBk2BgZ86j",
  "key29": "2HC8v2VLfrk15vUvBPowsu6ntwXExSrrvov1odGanpgagkq81cK9LDHXmFyqJQ3zjgYJq71DFbsFyDbUSgYaaxbd",
  "key30": "2ojjtge7wPz64A1qyQFjWWWfcesK1nzbknBZi2GT6fZxwu1ZZXXa59RNbvt4zM8v4sbZMjVztJefJY4isoiKVaeG",
  "key31": "3WHdNvF41vaRh1eEWaTDMvNzpPAXpStX1XYMzBqyTrK5vKM5tHU7Td3xTmfvYyBQLNjXmQ4AMUS1mkzpTrEtZQHT",
  "key32": "YHijtjmvSZmVHGh9t1z3KohhKrQwKgQpY44RD58dh3Eb9RyVLigPqe15tLFmbu34ujhm5AL5V1659ZrtL6Hs4de",
  "key33": "5mPMq3yD7LLxvZxkEcwAJ4kPy2M7Ct7nQHDgLSWFdT5kQMt1iEq3bCWedSkrZiDCpqHWf1XKVvqQCzUqnESoxGrc",
  "key34": "5dSfgo7tym16kj9NmwUXsg18A5rBLKJ2vKYiTS1HxNBTwoxKo25GhrJCWSZANTeTc3b1Q4NxWurjBXSvQ8tCCB9a",
  "key35": "27diusjwvFqanakkKpjtMMGq6E25pph8S85iYFcJQVNqY2LJUASx74HFMqeVGjLShDoRDnuWvUzhfBqSCwQFBp26",
  "key36": "CX3q7NndZxVosv6t3ZwgdgQKeHEaQqSTQPsfto5bvrKEx8BwPHAYSuuEEYj3GEvFVDxhsGngtQUPyE2vkagxFMt",
  "key37": "3ywDfA8aQURzNJeveW9VHhnPkjuhGepM975Fdqi6WXjkvpdrRWsGxUrn3iN2CwVLPKaHWfciCvC4YXL2v2MJP9pa",
  "key38": "3xcJzS1uU83qNKHFKzproUXG7xWT3tg1Z2UgTqFEvNSZ82hm6rvQKFZXb7ZaK4bQK9bdUgAL8xxw7RWoLHoWptUv",
  "key39": "4fWsqqUZ9hEBosK7DaR6KkY3ZRMPKjpEYzru4s2i3kAunL7gBToVWRgsumuRDxwjCqsg5eePJGcbV3CA7yWKFdmL",
  "key40": "Nq32wPyU2F8Q3H2atpS8uG29DdEGYuppmYXTtjgn8DqPZ9cYZSsGBBVoDPGbcvjxQ9dFzQDvCBZXc6Su1Z64Czy",
  "key41": "61JKiVFyVszL4j6GGumvYQhYnW4MxUBmpHHSHNY3m6Jt7huZw3tNwmdTRVAn7ze6uV6V7SUUEaJniK3NL3XAfB42",
  "key42": "47Jfg9mzrY26KXq5ozWuwek8Di6jzqdzcuJoLRRUnQ8JpEgZSg9bTbd1h7kjHibVXK66f8UrBiZTm67ujn7gLvL2",
  "key43": "34nmG2EtwiYL4d9xZXxvCCBSqDPERnqcz3sZDRr67Q3ciCsXWkctZ5FeqNqs2Mv9jrpLaLLytfXEWDQAp8MtfhQs",
  "key44": "4yK1JAToa8YRafHu6QnbrQceFw2nY16E3P6PkA3Rew8ksJ7ZYg5HAypA2BFkdog5zbWJTNkqgFfk7xcfGPoedmaY",
  "key45": "4gcDN7h8VfK8S96CQDPhqcER9c4yZC9UMEYnqxQbq3uGvoJweXTECgFijrbpY9W6B9My8LRJGQBddiWaSCpjNoha",
  "key46": "4W5AT1bZbyAcFS6BeDenrq3wRDJDdoxxATRyv2iXLm4eP8sKXxRsMjWDy7fLfxszfREd9efSQNaehWKjcnXuGXMr",
  "key47": "67WbGaEPakLhSwgLH28vjok5swomJpnrBVLGeLUX8jQtnxiuYa3eQqn1VVPEXDKwmrLn11PajhFj9D1x3mVQ26Rr",
  "key48": "2Dq5xj4FCPpQby7Mq7tBW7dFUHaeVAhhRjp4mFf1ZoNDPTzMq7KBEUzzMU86fQA2aDy7WVFfKDF1zavvYsFjTHRs"
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
