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
    "36G4KuebScb5wNm7ZAj2Db3NUozVS1MnrRMsZvSYqQ1bjiH6DL3BgJvA8uroHTZ7L9JYwLMf8UTv3uQhjpYduoai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TpUDTtx3aCtA1xJdvPMwUVWnKUgKn4nSNpJ9W8h1jdgAU56J55fMVAovXckwR8RtYpPSggfk6QBEVSR2pHuVL3G",
  "key1": "3P15PTQ9XvkgwX7Cq4UrsxkV2cCkkLeuFGA6BAVc7k7NBnzdcccYxc965LoMqQS1HrYGxGfQ4xmik3SQBwsiH9KQ",
  "key2": "2QYkehv9Sq4HFUa9rE3KLJ9sJrC4xszd2qWpnYh55Hbg8GQtKFvJvwKkce3jambxSwWf2tP1yQx7rGZm2W7kr3sM",
  "key3": "4VUxZSXjz6jrHuJ9spkKX2aDyFGLiF2Vvr14fa3gAUYdKfHbJc56txD6xJ8jcS8JTYr31vFYer11HPFw6ayS1JtB",
  "key4": "4E4jSmfYSLWq5GY8dHrXfMGwDJSY1nTRiHSDZS3j29pffD75iLjTMWpErySbsPLJMa3c5JgRHtGQwNMdG85LEqhP",
  "key5": "JTf2V1L3fGrfBmVsowWzkCEabNu4dNDQneEUUVrhmvsdZSLMQ7aRMBpeLARrsx4XUWafFuycSBtKVwkgznnG8yf",
  "key6": "3QrZxNkb8Bhd5XzNTqGvG9caaWiqz6XgTE9usGavnGJNW7q2P2BSQmNhuEMrcPAsZd8RyhFdwLX8NQuM4MtEarFt",
  "key7": "2ytw6G17yekz8eE69cdsf1e9bjQQZxUsHf2ujsTpZF2beoLt7pLzU8B9xq4hU1fNShTg5wCoTQVtKWy1LefCTthU",
  "key8": "43P4pr9sbvn5JL1y2F88HnBsEapg92SjwfG53rVp9NYick9EnuGidUCPJMo4JzbN4XWtwyXrQnS47AQsndtGQfFN",
  "key9": "TqBqMffxv7CYVB2UXVNr9CHxq7stVGZ2nrt2aZR3kWqnz7yEcK2E6EMcE9syiZD6FaST3yMPWUhBQoQjXCa7wcf",
  "key10": "4NDm8aobk4Nu9CRtDLH6TW3HNan1NjtgVnUxjiycSQ5vje6HegLd8HCFz97dimstQCxW6KMEh1wK1Udk3YaQZQPm",
  "key11": "58kLdz8g7fLPmBtg1ErpTxNcbuGMeB8A6iKrprc4eYXbrVLcr1FcSAz2WEugJwSvmi1bwxLeyudjomFJiEuiVkgR",
  "key12": "3nwMujgLtzUJosBaaZzmaYj4euR3SqDs3bcePCZcSgha4TGUHjhDmKPQUdq1pAVfPA98oSzGc3JHW79nckvM3c3G",
  "key13": "3LpwgDnuQr7xTkeGsbVzU8FhMNCgYkbK5qbUrbwXa2ahNyQ8C6F9cqe44AY5is38RebFKhFUmT8Gejkgtgq3R71o",
  "key14": "5PfTUHXnPWkWTEvJnoA2Rwet1vQNEELbe7NjxVMuZXA5Kkw3yftpJn4Y3pbBp6cdUAakvSfhXYAWWC2SUxBziaGY",
  "key15": "QpA85zLto7ohkjHw4v1Skqy9UE7rREzDkGbvjvry6ZdM1BtDKV2QEQdaaPC8gQeSaSn5XfoEa8B11N1n3jXuxvX",
  "key16": "4uBdv13VdeiDPCL2RGdBkQi7jNRWWptPDKBeUQHxSRrdQdvzabhC1RLkRqtcuVaNeAEmRdw3mYbWWrZsySNMEyh5",
  "key17": "32bMAA3EoWBcUy45VmSUEZT9U7Ux9scc1VYjvw7c7gLSTd4UitUNR5jfhiP3KWnP9ppPJ6JVyC5saRd4PAqmAiQ4",
  "key18": "487orVKJgrWYfokn683qsnG569zBgKd3tbLzWEZv4sGcdew31MB22XggDycYiRabh2eBZe2bwSU9X8zMicb7ast4",
  "key19": "5wiSb36CnCv1vqnekctbwqh7fPf8MB2gq4f8pJzFdqbsBoNjTL3LdfUnytXUJ2MzyqU9KDUWQZVHL7stt8iHkj18",
  "key20": "3yWesb7rvWwSYo7jqZpLvewNeCAf4jVLDFYK43Wvx6YzVkXy6C4cg92DB85HZM3ttZCoWzMg5ydFtNffJp3Gk5qa",
  "key21": "3yDh3xhf2VzA1nNeMK1GQykBPXKxZ9hAQKLjGdXch8hijnAfihoYXAg2if1Bhsa7XJFDhVdpAZnP3EUMBkJ3ZjdJ",
  "key22": "2ALDVqpNxNbPrzLfJrjpbLVQv56bn2yBx5UbEdeC5Vu235nKzmasGcN7VcegAL3jq2cbEReLm4optKjsENKoYZLJ",
  "key23": "4GWhGbWiXCiNH8BBLzqjk9aMGqpQg26omVGAkRDn4sD9hj3ZPRwwaZEptkDuuQZCP8j2KfkM9sZk1iYK63AXJ46i",
  "key24": "vn66CefqwfjUHAh83nSCAUh3yumLbSrzAX6JHXhYMSg1NsBLAgdSzb6uusZpj7YPbxsyyPNmwKuKCQoLuwuGacr",
  "key25": "3KguPfrkf8ZcAagW9AyhPojfhiUNsiD6GJAemSL5T6PcB6UZsqJpKAT4TKYWnbcnEkS7yAxTpF9DVe4w2zVvBsYB",
  "key26": "23LdWNu4AK5Nre7Gw3doStmbhwxaXWGeGJwurpi1a5nMgz1rE8iN3776cSJf3j4bF8Bf2TkYyAKjKeivepHzLcDy",
  "key27": "4wQMJrUyn3RzdQCHzwyHgyFoxefqF2ZbECTKXLBLE7xLxJkVNELnimbiEQUPq93AoSK9AXioDh2EW4GiMpeiGDpN",
  "key28": "5d6y2jRtfGKQvLv7bjP79L64Roj4YRFWVfmdvRif5gCPiYpMTH7B25txF2BxfYLdJvEkq3S53ZLPLxzEuhqXw4LL",
  "key29": "4AxAGmyrCZrwuvCAA2RDZX86p73Bcvm3x3xFLmjoHfD2japLTugTFR5CHJGw7mpLSkrF4Qd6FKap8Bre3gBgAAt1",
  "key30": "5bm7Pm1FXPHXnSyRxRNZAw9vU3WtZUvwCQtWWhvCrsYnBT5StBXdioeHpgyzCcUKupVLBsCukn8Q6x28VR89hSUF",
  "key31": "2jptuVX4bT27t3J9hu985TdAZtcX1UT9qBPzwR9un6p5jFVokkLWzJhpT2Uze8HsZZ977Lkf5VxbnPXh2BCeP2zL",
  "key32": "2u7vu6Q5ZA2dEtKiRANzXRh3KnHpWiESUEURqBTiAPc1goEbUFVaPbeVzx5MXZyha3u2NTD9tJtcbWHD3kbPkW5h",
  "key33": "5S7zWQoZgcsZ8QGpEsd6wBMcxYjZoPM81dq6iGivt2o5gJh1VWtdT7R1hMUMijgv4LCsRwRP2NxBFHiJDPz8CT3H",
  "key34": "5fVJU7xfEz84hSxRuKdSdALXeSBPGMFee3fW46QgSyWTwmtDcCqyCxgstPiHgPxh7JfF3Dh3DtKnTtZU9VfycSdK",
  "key35": "5LGCMKEzaFfRhNGenD8jPrvpptjkDkymPFyV7vCpXAdsv5syBrcCytGWYqqLe9tnvVinmUPLrsJAubh83Ds4WRVi",
  "key36": "2bVEuQdVf5nMZpUyBn6khit3yZd6CCZh7huiAn8bwapCfp2RzbyiE69aG65iuiWo8bMwAG3kWgxGrcAWbwPJYJ7K",
  "key37": "nnV2CQMT6YupSUuMretSrwPCAWqBPSiusEciuDFssSDZQaPpMwRjrGEqvs9roi36AyzECmR6zK3wAuV6JNXGD98",
  "key38": "4tT21AE7cB7ETXeT5TmvF75rspkuavWZNYds4y84z5RemKZ6Qq5c9VpdDB82JkzQJgY4ax1Fq8CWX3abK7hp87e8",
  "key39": "4c7aBiGNmU5czrrrvupTiFvnc3cXofUBNo2rnFuWdPLMNsq96VaaBxjwsRHKbpnsTzGUyghLuASqzSMWWBJAVzkz",
  "key40": "2eQjNaEPKNtTKAeZvCbrhmUGdzVg9g7mvrWUVUQwaqYkPVH4kxZFDoRR9xCKVbaZvTqb2cc19BdMNmRDNXAfCpk3",
  "key41": "2BxnUXwajQHiHEdBu1KZSSBEgsJAmNYVnWSdCqBaq5Jun8YLJ2YLbBWkfL3gjsZ7mjDNiD5fXTHWSkrLJCQXzXzo",
  "key42": "2LeWPotCX13hfQ9AZ2YgZXoDgrugL5R4i89h44v3phDAsYMnrXa8r4Pr8rKQnLkES6hB3xxFtgmpZwp8PzMgMAns",
  "key43": "jTUa8pZEddVdfcfF8Bcwws5gzrQrdhhujCsr2VDeX47sCcDWnetiekcctpws4r9uwQ4MbxGGWwmMH32dYwEwYx9",
  "key44": "3CCeb7YLPz93HJahwurRn6gKuSDvwNRB4a27F3y3H9LjcmzQHiXz2TFHMx2PF7mzwpdgi8jUqjUFnAtZbmvjN1wa",
  "key45": "5GwCyAMBfNsD67HxgFydcmHvXoBPHdCc8q4K1yv1ZCzxJjL9L34fTTGuUMWwMLLrD9EedY94KEEBJXydE6vMT1y",
  "key46": "5jYc9cvwE7r5Q1oC1s6yfrtGRfYypSWhB3GvG7NWQf6jBsnPzAvUK2pd1miZ8hbPUpntydcVLvbCf5uNSg4q7t7S",
  "key47": "zU9Ybeywno4DPY6hhHscGkKaoffZHsPVcq38r3evW3p9R9gzH4fc3tZcT3VG17whoMDFYN1Ua13hEDLpJgAmVvi",
  "key48": "3A1Ex4wcq4yv3pF2rqEornKZ2m3dRDNyW8tawmRAPWtByQ9sD9PkzuB8MLgafhJEzKCv3nEJozufPECdGiqPjx44"
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
