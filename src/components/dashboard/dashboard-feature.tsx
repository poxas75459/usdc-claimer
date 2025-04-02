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
    "49xvKgT5gWdwW6fiUtintXyBvzfFpctcg4MCwQZMqnMwK14du6UdENwDE7jaFXSgmayq7REXzTPZTydcR6XCUqtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "468zk18smuSs1uj9wdy8ejxSNk9YVsCgzqdBHgfpkP4NKD58j2JVyARHe5A6sZ2x11jREDB2GZj2ruHx9yVwaqEP",
  "key1": "3MU5kNy9goRrjonEeyd8BmpDArSXL795nwzzbGKyKRVz8ZwxLWzNseKQBzJQibbbbbyhn8hhSUfE86sgiBuaC72u",
  "key2": "3saJoWNpyC5qepA47Aum82VwnpCjZXaG1kgfdYRMUp8jCQ5UGPYzB9E2UbhAbgj9tpTq9BgmJzVfWsCW6ivDxLko",
  "key3": "5YqSxgWgbzZ4jRoPEpz54FPbMQEsY4m9z7rjTRHEo6oayZK8LPsJ98sgXVzCArDVnM3H3puFkrX3MfjFhcAPLeLc",
  "key4": "31BTDTodBomb7NoM89pxpX2MmUjM477Wux7SvjNQE6yTdqQrKn6w7S7FpExok5Fmg77DcS1ZFW3VSQrpuSssqH6u",
  "key5": "fj1GZJa3DwJkkpYLhVmpyWsAtpXtp5LTeNe9yXifg2h4D1HBsCCvqCTRcm1oHWbkScrXAodvaDgbKCyhtjyFtv7",
  "key6": "MGQgDDAy9TM82jXQJJumMQTvecujAEsHoMMgEDoEn5eybNqWob9184qMUArjudQnNPkwEEUrpm2FaZASM3CAmjS",
  "key7": "4MqzkNhngJ6b7jTBSvA69GPEoaaMhoTsQ8LY6FzBKku7f275you2xhLVdafuZisEJ6KssrVWL168HVXWM7EywtTe",
  "key8": "4pyhW45niU2sjeht6x26cHf69AhRBm1cZDyEVRQ5EBhSTkXyrSKYPeRm2JSGJNZyt3DzxLtTP79Dfmmao53WbGmQ",
  "key9": "4XcqBd6qpH3FM4VcpuLo3zW9tzB8HyRti2szCtupzCDhAi9kktHETgqmE4mN9gEwtYMuu8ye9iBA4bu1YNYfUY4T",
  "key10": "3TRooY8oAXXpsnSfyWiDkmeQJ3XRbMRWuDahnKZ9SQj7F7uUR236ALJC5DRbanDSfxjbuPVG9k3RrzGughDwSALF",
  "key11": "2518kHvs23YWfuCcXxnfbMhPrshjBkwqskRTimyQgKBuz5ad2jkXmMAHLc2MvDVS3MNkzcfm8KULnTqLRwx3eKwk",
  "key12": "L2UCe3GHmbzkANczj36Q9Uo1U1ux2HQBA5Cf6kaA7W2ssTma527tgVXXp3hHyaZU6uqvTUy3FS7ncubQFqaiw8h",
  "key13": "3nkEfNakuhwtxk4oJ4aAGbPDou1MHXdaLZK1m6ZqUnAm6KKKmjfbHf2LeHizGe9zYeGYeyufHs4ZGWTdeSfZnnWU",
  "key14": "48VvH9DALtt5T9NRbEUkyNgr83qGRWcvkYpuNtofFBfUQJqD5Eb9ELCP2t6Ybce1FmXSbLntoEADqU482Exv2Yo9",
  "key15": "5EaMB8gQZti1GhwR9XXDLRS1UiGsvxcm5sU3RKx3dukMtgTZoBxZZuHVKfcnpHMXZh9ncekKj4NaWfzwooeEM4P3",
  "key16": "4vcFrFLGTqtaCVrev82FUnVapAzNGxtLkqUVHiTUUTRJK6foUemiJ1Gm7fCXtrhcwf7vzr23jF3X5anVvZDJJeuf",
  "key17": "4CNzdyHnvJDA6zYX1ANaAhs2S6nEMJnKbZh3nL96HpyB3gHBQcWgYX1WcGZduzmvgNPxXHvWP8ynM4hdTwmvzAJy",
  "key18": "3dQ6pQup1aP5Fd1SvQWHha5m2VBMHuxB8LFfMTwJHJNnZEhzXPsRrGUTZeinfWiouSz5G7zsFi8xoUfXeUytq4mV",
  "key19": "4CcSGyqKRE5XitViFM74VLMAHdrPM1UDXVCYz7BJyZYyiSQu4XZ9K3ibX6TwzPUrbaPAq6h3WpVEEiMPTot84CcV",
  "key20": "4KKSve98x8bLPq9S7ppvuwhLPhgA5e7QSHTgAPbP7MnNEa8QpHwGDm4zB3dTxbxcfSgRbtheQiVN6DnjcKW3ZPcn",
  "key21": "5pfym7APJYMgGf5b8mV1C88ypytkttJVCXBLeBHxSaqVkJpbH1X5B3RRXjFbUSLS44TRwtqXxv7PfhPJPvaC8583",
  "key22": "QHP2RNwYyuZCE24aXEP2zK4aQT7r61uBGELVob7Fq4ZY2UXz34rBHaTDBhf8X7jfDx1FZFuK5J64SDKKvE8PShD",
  "key23": "427nWWuFPaNZAJay3QEszMpKe4VQTaWi7yohvGEJX8qPWED5fmsMAEneGaf6hoPp6rkTt2WGRExFcfedJyPLVJNp",
  "key24": "3z7J4fCC4A2LRo5hJXfjMxVAGEupCjeqDj4VR4NoDWVStNCRy9pbxJUhmqqeCPp8626mAUd93ZEU9VwsSkstS7w3",
  "key25": "5qEyKTjky4mVFZao6jRMUgco7k2nJfkWcCy8XwyW77wT1LEfdYdTTj8cddCh5i3EbnKjmJb3czrzyAK5YXb9w2qT",
  "key26": "2KtfvdYBMDXipFY7cyF5whGxGqGr62gTaye6Z8nQzE5dm18QTJ9x8LaVxVGVhQMJEmALTxEBSVh9LS7Tz2gPVVfK",
  "key27": "3jX1XRQvx1mWy3YrJYAvEb2pGi8m1dC5HZVnRyDTMcFuUEdTB8CGDHJ4B2BX1NPxaZBanjo7f3pE8GkWyHfr6rFu",
  "key28": "gMAinzRY1Jmv1NEw6fy38EQUs357FNgprxVphRyXYDWSyzWcKamnQtZFJrYxHtNSwD8fhDXKNMy5s3CCyzUoVM9",
  "key29": "dUpJUFKRk9AEmVfXhNPkRM7mcq1WFdcxk2WzXhB9CW9VmYtsPG1zjqrZDs3v5pZBf8GQnPU2Zz87a7P6m1vqQQd",
  "key30": "5VzTsxoAW6VkyH63wqgMzpFfuLivJVVDF3UncScYupaWo46nfzRJp8JhumVup8a4N82NSW6Hjo4rSiUDNB4orYcB"
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
