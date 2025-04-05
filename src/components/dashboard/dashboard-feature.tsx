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
    "4pS5VAcJB9Eb4Q94JrHRh3YCzjLMqmneHV2rgYCi8sgB7twxcbvfcZHm5qGPkBP1K92MXAPMvC2Qt3rvpnnhJjqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r6iHhmXUp8mquP5kqSc5dHLXXuXzYMWPmU24byMQjYnCmcD8xSmXJZ2u4qubJhULtnx18pvf7Pzjo5Vy156spJP",
  "key1": "4WsqwMw1gyQq1sce7zXsRFLHcPuEHbn3rTVMkDVK5N6MyuaJNxZBUhf7dtDTLC1xoVvatcD7Uroa6TVu7N2USPqF",
  "key2": "526L7p3tySCkx9z4tWy1fksLkvi294cqVmriHnbWbUx185BEFQKkDgKfK5dTUGRtQ4Nn35E4gwYWdXv2yGtzcqnz",
  "key3": "ub9V6aPnghMWKgYf45UTRTbHYrgMq1UEja6JaUT5e7b78N5g4Z476SaWw33Ta7jVJKfkzFQian1aiARqawVG6Jt",
  "key4": "5weyLF4zsvSXQ3p1VFJiUuohPEJrHb4omDtQ9of3PK7W7SB25mWpaAp9PWVnPmAaTqH9CfHqZuwCAQqnmfGbHZYJ",
  "key5": "jdt36dchJFAypr4FjsKW5CoiZnmPzqEbv5tb21yKGSj5b1ayUB4DH7DeB6ptc7aSnmVYrd4xnNqi61AQcYATiJj",
  "key6": "5eaWa8RP2nzHAidbmvUQ56y4szy1cTHHcvhgE3535SdEpP5TNDfvSK1S5YM2zHf1L7oWXUrusu9PobZoxWVnBdX3",
  "key7": "4TvUqsifap3hQySYHTUDvasMRuZeBpU2UbztFu6wv1nrtX6SkxLKe3LjpXHYrU7aj3fPtfLJrtAZgUk9gW4N6SRc",
  "key8": "3dYpLDFVUZevAiuaxWW8UGYfW3r9cFNyzY18BLMbnB2Kthuvih3aWLvpevt4AVqVRJoLb6NdwezCb9ZhvzxGoUpM",
  "key9": "5KxbXDjiQLu2iC62PLqU6Gc1efD9cTYRS7WRSSXxG5ZhHaLzvAKxTEP9eiUVAkyU87fqbhJk65GzGVcoDgDSsr3P",
  "key10": "5eJNWfMxXJUtfEhjj2hmYgR8gEingkKy3E3AENqtQgAwjkX88yvFCoKxoFuZjWGyEioxZiW9kypzzYmB6WbvwHB1",
  "key11": "5Zh7fsfEJSbM6vA29uDKTtAAdQNbnRKAFPebr1fsmDkLLyZno7dgJ4PfEjVJVEfKz77twiDHALdZpaBZmEt3dBeX",
  "key12": "4JoMVykoc3zq7LZve2V3cfjoak5FSh9N9Fjsuzui2aQEBqZVMxweJLAaY8LZcSL6aTVJS4N7LrMsEMkEHiNWGC8i",
  "key13": "62CjzkEMYZusGUaHMHM74wuoYgFgsFDJaHirX5KPgWf6CHZmBy7mLXgAHPR54sh31NciPVbq5ZRd3rVJsPFFkyEu",
  "key14": "2jN53RZE9k5YqhewUPhd7pQLXjmP26WjU7hjpNVRDY6Sj6DzfnCigiRpUQMpREzmb9jM8XhzKAtsszWttRgGtWKq",
  "key15": "2EYf9kWaRxxJv3Jcx5nyxVFsTGQjUqCSZQcvUjLMDvNPTu6bwwjk18dVWEwMtsSedgjAXNU8247TukmN71MqL3ot",
  "key16": "5cfFhEw51Myn4LUzn3pSSwhq9qHrtZwTpqvJQwTSHqnKvctnGemNbdrDT7Unwni2fcxrhtLHV46WPUpmL5aCZExk",
  "key17": "rK444RoM8yJ4q2sAsT4Um2YqzE7BHwasyx2ihJEPy37B35zzBer3CeALuxjXZc1jHnmG3pR6hCoVmoRSX4aZFnV",
  "key18": "4rEJo7JEUJCoQUse64NZ7Pe3DYHTSQg4eqbqSmHLLs6yL2fr361XT1DPyou2qM1dKDcPpZVthSQXhrmFeVD2kLtG",
  "key19": "4LtmqjHuQm6QaWRiDF4Jpjs3WRTznFcLAy2d3tP7yEhGY2NB1UrnwJFy7Uo3c6oYNAV2tLUmMMqR6R7dYJzpBTqz",
  "key20": "5JhNu88YcvcfoaKbzZPKJPffrvcos4r7Hij3HoZ6n9iG7g8ZMUkgY1axckSXUnpH1UkcACk9tHnjHfasNM9A8yaU",
  "key21": "4emfyzWYXYEDToNxWa9AqrSfukpxfGzbejysETp9QXqGvuo6EkM5Np5F4GHsRL1DKRPKsz2Ngyp28oCnQPhoE9dY",
  "key22": "5eriaFwWFLxu42Gd3xrSXSDxSFyJPFrjhWoU6SW29UxnRnUthHXDGJcNG6V37A8vYENJDP8ZCV6i76capX369zvN",
  "key23": "3uUiVjxFZHcHzQpyADaiqHztP8cTJEyRRtTMidtqoJdr9nEdzzvhJ5MC6BnW3UqyXsAqYHmxanWtqAQcTKAgHXzb",
  "key24": "53nfA2zoSWG6DPN7XUq3KV4WSXZiUTKc3wCgFffW4puctCkd762ZpZnewMXcz9a3STNjtpU37Z5hjLwnPaNfAy2K",
  "key25": "2kbFNEaTjPMp8NKZkBMki7yXUmrNHrEemxytGfMc47mXNHviJjoomUU4U9ghyVJqmCq3zaF2HcdgvaVGrTvpicPE",
  "key26": "2Rm6PJvVpTwXXbE1WsHt8cYiGQdTUQgVWX39tDv9GTcX8brCt1mytY48ZXdu5qdBx925bV9pCYXk3dBKSLmHTfYD",
  "key27": "fCeRyYnX6VXxAHtZHHmEyAkYnK4W85BASiuAakUqbjqBCBqi3TJ7RiZqV9NkM3uP27cXDouU2XLgpUKwtqHWKr7",
  "key28": "5Q4nUzxqdumM4T7amqD9dbWjCJ5fXhbhz8CCw4LyknDxrgNYScxzUwuj8oNB8kCw1ZuD115XDuw8agQNFiY7x4cN",
  "key29": "nanpNNMg1BD7vxsAwkgaZvSXW7VbTy7tAPcoFn8PjpuCW13RbT3vasqBjBqBqFqhJmUhdGhPrUcdsDbEqknzs9v",
  "key30": "gtpRDKvgi88brKaYLS6aossE4QEEwMfk91ms9YyAgSqPvpUpq3jc21jvaH7xGzh6qyguJW2ZUDg5JtX14B6WrK2",
  "key31": "5oYP3LzZMGfaFLvE8rofYFfD5YNEoLR7KhK6g6wfeP18nJApcnHb4uFB3bb8Gvmm6g8FyuYdnGSUUNw9Z8p7nsAi",
  "key32": "5UNcyrdGtzvqzbRQeZXa3HbePWz1CVvfjUyEKNx1bmNNj1p5NqWfJgpu2Ho5PVWZVKWZfWe2s5L5apgHJ9hBrFJB",
  "key33": "5jRvDbG7ujJY5vMjv9N8CD5jTyPStKKhQFo6mdWvDmLJEXw4hMgJdCM4Xf42Y58PkoM53Enwvv8RtZ3dwv5tBph8",
  "key34": "5fAwcAfNkjRTqLjUooGvAEzCdVDe71EfDgenDarEHCkdKarCBgniNPn9zJ7VL7Q9Skzu7SWG2k6EnSzjmfR7aZbB",
  "key35": "4eLL6Kwru9BKJxnhVQX7wQvDAoVcuhkThfX6f7vDQ4rSLYK8cBGXYEHr2LanSsndNCu43FycSb7v4PuRc83yyBWJ",
  "key36": "4U4k2QuwRUE2vUbgcugBurrBiyzr1tyWr5nuh5Zu3ZZhuPkEnNN4H7AQ5HCtmiUu2VJ82JawTcSfnvoD1UkywAab",
  "key37": "5kn18bncZvanrB3SiqsiuM73e9kZGzpnWb98Xtv1gxVsfCkgqiPYVWYZQyqSFmKJicZvXQ9eHEQA5GGF63JheAwP"
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
