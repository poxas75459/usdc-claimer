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
    "4kSw6esFKwTmqfUXez5sRH32XqmSV7y4exYxcJjXiXJEKeK13ZEVvkkHixveBa7TeyM78M1bQktuMBA3vCLFDegC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rzn3PKdYT9EDDi9gKm4unEJaWAhAYkoH4NtT7FfKB1bKV2f9qDjngcpxjkzPhYHu4k1v5rdAZXgcPzTA7FE8LWC",
  "key1": "3Qj8vP9eekrCZ5E72fRmYf4PwCK51m39892JZAc9T1iSqcexD4N8Hak8f48ECT7aPyjAxX96B2wq2H7SYTrVBL9r",
  "key2": "cYHu8dVu2ZqB1ZwSwupiP7V5kfbF8YxDGzTUpDm2X2JkssBLECiQ6yvUGPKMZsUJ57JH7FBm9js2RkH9AqVv8F9",
  "key3": "2CDmd1RE8LELtwaPTTAesMY1tc8TfW5sJsMKVR2jLqztBTdwu9FoDpey2sYv6FPGhBKPmwTaFuyCM3Tepeqn9fPL",
  "key4": "2tPFxYsXi1JM5eEDP7evaQEsQztUUHa4fcgLJrfg3Grqd7dWfvxJP4tTuC4kX3WzFDCHx1eaL1zP9D58THyb6ERb",
  "key5": "5tBfmxu87qQ2wsJxNnhXWHwgCFfYoQdWW6xAh1K25eMJR5SxezQT5YcMQqDZrTw9V3YRKvP3rmDfaJaxfLDWUeNo",
  "key6": "trEJruvLQfpReLWnatLtz3xpRWHQ8HTiPwZH6SKz3mjf5scXhctgbL8wrQgbstiT9rgaFtv3HpSnQJbWcanQfNw",
  "key7": "4eMGVNSa1ZfXraBtc9aDj7MfTg5HYC3P5hAkuXrpK2CCLbGeb9oGo1UtW3oCJtDST8hvUGfrL8XsrGpZDjfSjY7J",
  "key8": "2PnCuhDpksTRoZV25eUxYmqmwD1zyF58FK9s2nSRMbN9Bi3ht2ht6uG4Wrg1F9yuiYvjEnMfWEfXNjzsRmFEufFG",
  "key9": "2YjwkipDSj1FCvzLDamYnUcd8uVnacv7Giino6AUeuLmvxB3JYb6Lcw5cQWDTsLyud9kSkSWtgHvZdoJQ6fQTuH1",
  "key10": "4TuVsQ529pBFEVgGqE3ggE5zLnkWwGzDeHpxnuY3snyYEFLknqNHByJVcoZQDkViWqZd222y6FM9AhEetvnPkyeA",
  "key11": "29qhXa6ecyA2NuDaD1H5vWLApVoLwc6C7Q7bchCgF91CJVbxrhy3Pbh6mnF1142Jx5J3WCRb8sEAsJjXuwTKqJHp",
  "key12": "4eF9yhkdEfoJU5CQCqtYdhbH9SmfCnwDnpv58PZMyFXdqGvAfJKtdCkunRR2gVdBDwbbZy31bfjXYLTzyUWNjoX8",
  "key13": "LxtX5SeaDASKnXGoXbekUcYC41tApQYMiQyj4vg1U4UYe3RkbbCwsPDwn7nPoK85kRBwFMLhZthLz75xWWr3nZo",
  "key14": "4VBAbEKxTLW854TiyWnVoccceGVKmiGXuoUmxnHASKq6mQB8YyLoMd57X9mERqsAtuzrQRkgPfEfmc196kaUZWs4",
  "key15": "4sQjUwLhbwTQNUZZ9ThJTV9V8F2u3zLrf7UwtoWewSGehjwwQxEcSbdAL4eQxHUTmZ1qRWeH1YiRsZqufFmMmryh",
  "key16": "5vSWmu5BidtKAqQRfWXomvhsUeVNgniwQ54kS1S6f3bmJiQsT7zCAzE4YVR2yYE4yQyhQnjJMFH8EV9kENN6KqKU",
  "key17": "6tYRK4tH6fnspAHc2LWsHurtsXuPLraxC4ksp2NQRsiM3yvqFMk1h8fqL8UUGWRT14yfGQJr4b5vARVNg7Tfsxv",
  "key18": "5EzyucP4kN6hcM6WtJHnFbB26cD9Hof7JMqmUBvevXtuSY1sVLPPV8mKJB9nWLYyKzJdJSWrrAYUBShkEjvBrq4m",
  "key19": "2FaUBTC9b3PmdhzCgZ9VQ45xCQx8czPcGtSxJKPjfWNNM1ZMSJP8J9A2JaSWddjfTT4Wz1joNd815qMc8ef6vf1D",
  "key20": "dRU6WQNeVHZVnwVdsxLzRsCFAFzsExazPLTwbwHt6QhBNjNJLJRD7jfgMebE6yQJG19Zks78vEEsGRLPkiEyTUu",
  "key21": "5Cs2wGy358wYB69zZRGdQ8fDqp3DvK1wwifufJ6waK2poHXQBAMDT5nStx6qGAgMmqSAvZskYwyJjNTS69K56kJF",
  "key22": "2b7cvYMyS22kNYsRZysqUSFcmkEFyYNVvHosMtahaDpbCDw9ErtmPskntdneAYMDbMdFKxug1hNmgkJzMDx6PnQs",
  "key23": "58PkjnNWqVP6XwsJQ2PuLpDwaqYF6u36c3jHrEN64otGnotBZ8aSGrjRmUWNNNDQMpSDJczWUbgURCc8AyLce63J",
  "key24": "pYtk6oXSbbEmBoJddix8NSHHKQpuTQiXHEmdxeUoD5odZDgRkG9tEUjRJyWTTJ6LGMiX7RUMh3nzaagGhkKtHGm",
  "key25": "4z6jXf4k21tPck9Kkkc39CC4ccSKhSccHUy9G77kEqCePkLH3wGHL7qKi62yYyeHbu7QrkUnp6hvGjUv1CZ4HdQn",
  "key26": "3uRkQRER9zHFXnbERuDwmLfvTWkbAakDHxwcAJX5ECFSUoLFT18VaPS8hmXRp8qqveX1ubc9w96BRMBeRvg5oG1m",
  "key27": "4Yrv7HXB43fEtsqTo89YubZppHrFknFLgKF6MV8vjEMRvANEtYQECgkqHqEmg7bZX1L62ckAR9nz34Xu2NNK1jsf",
  "key28": "4yi3CHPUacBpNV8o4xexPDyTWuwy2NHuN8Vqc77Rksg4JtDpmwhQPjode4VCdQtCtywpgLh8qKVhYHmgBbZaEMyF",
  "key29": "31GgEwnjRGEVEWfZGfgfo9dAVFFoh87DPvgNuvuHfYjwdqJ74RmjgQ5DByNp3H7jkWiqFb5VdEKb8JgZchYooZUq",
  "key30": "ipTrz6K22tfwnMaPeVF7b7nYFNkhGGYAFJz6VRoFQcvrbid1cdaG3mrEtbbHFh21FRcMPmWRmfrHT5eNh9DMpaP",
  "key31": "AVEzC5PJNRJXNT2sknLZEPNxrSW57yvyvX1auzCFAtrTFbzvkkWmBrRn7CWK5jHjNLv4B7nPykiFQvXGUxFdqKb",
  "key32": "2pkCkGWfxWZpGwtdM9bamyy9cMpb5UWYHsPmrc3Z3ADNyF1bDp6kVouYYwdZd3UK5Kw6Kz4fmVTZMVYQuWjheEA2",
  "key33": "4HY7Zqc49fZNVxDByvjM8ge3QwWnsDt7HGdR39g1VmfHgHNmm1cpK9w5FUSzzjmKSf1hx2vF4qS5mEwZcHwrTGvb",
  "key34": "5Wz2wkbuLJPzDVy1HB4wYSnsXtCG7gir54jE9HbcMs8uTVF1mcSUUmAkZ7ow8P78FLCy8wHvQTnvqPKM4xt3kVsN",
  "key35": "5wpBtZqMrL2TDmDziXgahs2yxBTD8q9nFS7Htjd6xmEMhcjMbMiahgPaGLcpPNWZJHPFZ5fiAuwyP1rpD115rW8Z",
  "key36": "4BZa3dg3TcECKyCSL759oqnwsLCRXTeXHtL6sWNFd3uPHyZK7sTRpvWTAmgmZy652w4AUN1Z3ZW2WA9qAiJfbeR7",
  "key37": "4vp9oF7r3qvs7BzecuSp2yhWP1a2CCrV22nbYQ5oHcCpotPNj36Dc8BxBHwV1WTis5HBukbiAwAHZGmF87SexJwE",
  "key38": "FeWchxUCfdfaxjjGVvfPxPGmkUS28jGsugDbXbwedg7SUwTQe6DE26i54n19i7c5kr4B6Ei59eMkehT5Fzmhz6A",
  "key39": "2D5fmQUeW9C1ZYYAF3a1YcYbfVvXfGeWZJ8bR4rDgQu5u4r6rt71WJ4ipHCPXCPV3qGfnPEv4CHS9oEUXW4qhRev",
  "key40": "4e63ZArpXepZP2zLfw7wYi6sjmEuyXAbs5CAkvTxmfj2i3MDgvhrvE6PkZnFuSTvX9AhywUnAcxPSYV6YGbm3fnp",
  "key41": "323VTCDoWzAGkN9y255YQvJ5h3eu6GmCrn6ALN9Kk5sciJqnXVVe5we4pSXpYxuRhMdEFg74n5n4j6cX5zXVBJFo",
  "key42": "5X9mYSzE5bL7G6P3LR3uRXX3DfXkjtf7D2PZuT6fDQeYkMcLGpXeC9aj9dErrdf15cwsBTNbF6QvEYzpvtn8Qxvu",
  "key43": "5zJ7g7FDDkvp3TSuKfgwxveJjpWNNDyqTqYuZvPugZJzXY37PgziHDFesDWyNXJ7rjfuvd5NZpUXF2m9dQCtseqr",
  "key44": "5BSvyxPN2bQyPaqapBccxoTLntGywmU8FgAqwQQcEbotbRmdQY6qLGHzwuqiviEYLp5oCuKhetMoPgqNSUgKXBZ7",
  "key45": "4kZYUJBv8p6jVdLzyc2C7PjK1jWWYGyHk3mR85n2FYG7xmBEQAThGnKw9DXUjhSFd1eVBhyFRokZbVCRDJqwCju8"
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
