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
    "3jSc8vUrMDn3pFswW4DWeLYaariWg6FnvpLL4JnZp5AztUPPdhh9MHq1Vi3j3zDjh5kqmXdNK9toXgoHkzppcWpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28GpAEFXKEmSuKCzyCL6qoYn37AM5EKBz73oq83dAP2wFD5EHqPfCaDft1kQ684xVbNJntBrxFf56vqCRZfp3N1M",
  "key1": "28g1diVhzjiPu9pjEm71YtiUcgxLS7wnnkg7roap3vkunMwSqPCVudqxRWFAqX7RfhxMKp3FfSwE4iLJCGp6o4cg",
  "key2": "645GdpeBcAyd1WN2sQRPDvztsk55bdRqrKBVNakfAyNstg8tA6jkzywrtbAfrGoBLDrqaPfVM98pPKxQWWEYyLh6",
  "key3": "3QimeZuYYYYrY4fQL3mpz3aMe3Se4nP6JQC7ydUsRAPvRe2K4Ev4gNCj9E3BvYgyyekGmqpSGKTryfaAmGsLsumz",
  "key4": "22mdnRUqA7942FJ1HnEfjNh9dyykqatdGPMC3s3VB3KJW1iW9ZaVhiWWnTYhZFkrnPzo2XuegLdeqzxWx2XD5fNs",
  "key5": "2RKzFUEidsSMncB3XjzQHBwo6yLhVeAgc2tUzXcFBAyFFetGVd9tztKecTNgvVUMaXnUC3VfJ6xjhsPcQ4dvx5Xd",
  "key6": "41sbviSJyiTurp7TrAxboXMwUhUB6KqxF8qZJstE3rssz3yvigmrfWepTXQYA2R7mWurah4vjnrVSuYiFE4zAAn9",
  "key7": "5mhKThevAVnBNdShydc7HLGZisAQVTfmmJy49GiVosYT94DugetBno8So93e5wvpBT4ubNNCKPR14tjsjFD4WQ9W",
  "key8": "3aQc1NTarpLtKqek8iWv532mFmdLEJFQEfu5yXs5sv9uSFxpFDu5zLVWit6n5PQ2BqhQ8Rdzm43RwAb4kfjdwDKU",
  "key9": "1rGSuMW4eMnHWkRVZ9bFGETRnMcZTdqyCqrke6sXiZACMYb6k6kifivj5QDKzmgB4oDW7rv55XbGtJ9FWbxk21b",
  "key10": "tvo43fVbkzhtRmZ94RLh6uiRQaiTiGpbi796wcxEPEwfkoiVks9PR3pQqr1m6syvSo2Q39TZdVxuVs3duGYLTv9",
  "key11": "nm9YLjdJjLBFYedec9TwhmEEP9uQqA6XNCUfCJXjfLRvSG8hdU3439LLwzxjLkEzvXanHwLEhxcCwv3FmAQDfQa",
  "key12": "2iY5zt5btyTTP9RbkStjccWXwaYqSEZoAexA4KbWGDh2AtxwJJtjnKFT86MWmJ3bTPtsYHNT3cZczKDWbYZ7MaDS",
  "key13": "4FRvE9q5Krd7AYH5gUjFdvv8jWA34H2J4W4m2yTEtncRwv5ArbQHLteaFD6khmgUe18RAjwEGCtjxuwqi3nyJyek",
  "key14": "5f5e8i5TstSPfo7fHT24ak3FPS8sL1suNp8yR1L915XLfs3o31yzzoGXdTsjcPyLFuKrf8HBwmz6T11w7zLDKu6S",
  "key15": "3Vb1EHda31vAhJJPpejB8zbEyLd8V6VLpVYLMBqYQGLAdW2BAFThRp3r8dvKBFYrpMReELweg7GcJsU8huVUect6",
  "key16": "3h9sv2XFsyVwf5z654xSKTBYJpKqKkEzmbiFaJUXnYiJaLAP2HYGrtq7cvXr9beC4LcJqj9rkU9cMF9weQgMRUBh",
  "key17": "2D6EcYhJAe3jYfmooAPqPqt3eVWBn44RXd7tpN4NEtQnGp9KH3ZvH6g54mdxMkosmSJ7dDLvQ3MDvoj51bM1NBq2",
  "key18": "3a2dXcefG74gvhv5qqtQAFA9CJYHxz3tSyGRntbYeCRetfxyEuhhvfTPbMt2qgxpjfiXtE69sz2ByQ5goeyt8Hny",
  "key19": "4B3T247uoD9VSa5iXqXPFyQ6gC8vZXE1C2XLSAwwaS1JN77phx2C7iFC18wzRoD7dAhp1f3j3AXRpXAaFfnXCZp4",
  "key20": "4Q7ZKN3d5hth9Thzc32yegTVgf3Fg3gMjwiPwFJ3achm3qZkD2Gg8rkKiZnXdWWhug5QLv8oK7hAjmN4Tb1jfCGj",
  "key21": "RapoiybXK1rfC3PZ7ANozUzHWN4h47jQgnm4sRF5ebGp8j2d6ddJEdwGsxvroCsRnDohjUGvyWFj69VvfEprxC9",
  "key22": "2JvUG9RAeJizgQXTP6zWN8hzEoDp2CSUFcCeoQUmfDAyeSsrtPJvinJzTSwzjQAMi4zBhnsSeLdeMAtgMY9QN61X",
  "key23": "4HsGrP6VM7NZBRNe8YMaTu87NgfaU15Yse1E8w1hq8tZxZnRjwEDSB71C2YLSzxnKKwG1g6iVW37YkJUszRkicXN",
  "key24": "zRGCG2dMSEePKVRzamtw4M5RykSJHfiokZR9sc5149x6Z9ioqc8AySsnEaXHX6xVHAsqU8RDuivrRE5nNHP5hqB",
  "key25": "5w5kZ8ctm5pJAYLxUQS4sU7NwfpARUih2ix7tKaUcFMiN8Y9bikRUJmMvJjrAqNdiuxdPgBAXDeVfw5YSXdKRxRp",
  "key26": "516kZ6jUZ6Wz2bsBJtdQn6eSVeETyJ6umbddX9MH1QjW2E2246U3ou56tVJhCZDATDfNunNLYwSK4zofqRzygMoJ",
  "key27": "3UQo4jS7C5wiQBz5fbSTVyCKP5ewAPSYF8qckBsudCVpuhwhBy1zsDhn5SPTxFKwKpAvJjp7XSp7TL6Utmd1ZSHB",
  "key28": "2Rwvz5tafPYs6NJQJSBjGDSAdzJLDimWzqF6Zzta8w8RJY3QFyPrPND8c3a1HNA12h3F4p3yWKesvf2RxxVqRa1q",
  "key29": "4KEYmthX4Ckid5mijdCZMQo4dH6YMJwJgkPso2X4aTMuTxw7vesVYGYshVwqvQRcbqN6T43ywQnWirseyjiJY9e6",
  "key30": "vQAYeVeYm27GgTsd7QPgHBuYtZrtjJeTX7VngtSaGhcHiozySBmWCxAavoBjXEHFXmz7Yp4meMXXStPY4e5yumH",
  "key31": "5jaGo12d88bgQBZ9ZB2ioHqP8QXjmtbPkNChUagNXb6dQJxikzinFSg8jKY576SiAGCGMUztAHuFiPkZR9st8FXs",
  "key32": "VB254NRVQaLHCKd2jdLUt1pgSUtv71De1S48Ui1t8bvhaCEE3Hsya9zBi2K6M9m9dgX1vgCxyE9pWDCGrVFnd3K",
  "key33": "2Wamx3P98ckFwJBCyp9yeT694b8qiqyHDV8D2QY3Cf9p4RWtzn3uMtySJJUxwfn6yyHBN7C8naagbWhtdnboKzfk",
  "key34": "2S1XCdruKxQh5MbqnJ2Kzc1cFgRaHtFS7scm7AtUGBShXMk2gMy6ubvkDip7r9U1gZPu8Ro2wEMdGqyZ5hY3Q4nf",
  "key35": "3QAPZ3LWQXrZB4MgtueaHuEj8ntMscynWNtAzsRNXabhB5o2hXChkssCn9CQpDAQ8GXzoQH3P7yr7PPJBVdfvwiB",
  "key36": "4xZsqAuL4i6bGLHxCdFBAx3GB8dzwwyAuDCqcYPE6Smk23g4yd4zacisJhQyd7WPDaHSdzmGtYEuhEXGsY6zz2NW",
  "key37": "iZJwddeSN7S21f6vinuu5Jfmu7DeQ8iBRyXctomdSv7zvcvUNDG9Qk4F9YBBtV7Mk2Af6rCYGWMu6zUQDdyMpXv",
  "key38": "4GMKt7hjBQegww26KcRHqY35F6zYRCtLtxvZAv8FfRrnMQ1ZPtwLtKeZfjrVtXdtiDdAKdAKi4qLMF1XRdvwTeBh",
  "key39": "RV5rf6mf1NvwsHoFG9pQzkzEk4bVQ16YGUyYpRDU3fuRwXcGYADg3jkFxLBArtghpxB4d6nnboK8b2eZMHygHHe",
  "key40": "3xA6mHRTe8bZd5CBhDVHfP3m7WCvHspB59t174iQ1Agn4zMMCXrFZSERXQCwS1Qu7vjrjMa6CgoTjLcAMHu38Vn4",
  "key41": "qid7r2zUDvoPpq3GN31XNxzhgMFNdCTLNChnALpH8Zn5Vhd4W53eh88JcDknczcThjaB3pt1bkS9UmABKoUR5XY",
  "key42": "3fBtbjM4u11WWDoBrHL4fWJ5Jf8d6F63RahXuHMSBB8Ts4XgU7eqvLqmRqqQQsK91MxtKX3dQN18CJkkFyCcdG9a",
  "key43": "4akzpYHNiXcTLaPU5KSTv8SuhXi2kPM2UqXQftN5QyFrmgj7jqyC4QK38RACdkX4XmQjmQk8kfLhJ3EdmVXRpStR",
  "key44": "3r8My1dCgSyx8MCYARifVPUk13SgZgC8QJgjAcf9SaCWvs6AcD1wsR63YvnjU749mYGSLgnehi3YdGKH9zT54rug",
  "key45": "ndKFeWJk3gCGdWamvC9ToXkkMuSdfkFn9dsRGgAy3hiwSRRYWc58JxDFBkYEXuLjdB8LMusAUS91nMBzc5LZtnM",
  "key46": "47TB611zvFgZh9GgZK7qoynV6uXfnck6TMySVC9uo59q19HdkSCmL9TGs6oqZkVXCM91ZeNv1ZqK6JwD3FcCUj5Y",
  "key47": "3Qv6P81amFuq1SAMNVbtf4WMwXHV5sJUMn3GS7uNmwzta6tz6aA7vngPZLRUav8HtngUkSBjn2WiGP8oKVhY151Z",
  "key48": "48Ae3Det2UqMQofH5zTpiFZB1U9gYWEvKz7GPyBpfS4Co9jVtfAicQQEu5gT1KJ7ZqcafgYGCPY6KvjGmeweZcxX",
  "key49": "2tCc9UN3qgssWG6ySDkD8RT356cu1g3K1Uk8Z47EEsqoCsfrHFSmEUuPj4oESNB864AgA7Dsws7ZfNqRC6vYWvGH"
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
