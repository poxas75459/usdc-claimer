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
    "35Hq6v4iu4bDt6r1sTYEeGGZVQfcGGC7wxhKKuNY93fU2oKh3wgRkGHiiTZuuMZEq6qqA8VaQYwUrcJAf7HpGWAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pfhDyVC6xHBGx7v36XFfZNYvws67ZKKKZmHvfMQijmtFo8H2Y6ARardm6qQ5nBKUvUFjrEWf3HCrFcRMBZ7hncH",
  "key1": "2Z1hmMUDJb88ciQA5LXgtUhcRFHs4VSSoqRCuuDshETTVBt3rRqYSLroopc5zJ1omTPKUmPJfh3QnYSB92nXx7CS",
  "key2": "3mxiQegsE6vAmZFvGgG8DGjbfALWzLMkf5jqhUjuztcGcW5H6UR1w4bL3aBJe6ayhaK6PtwWcKKqpcCX99wamsW9",
  "key3": "4RH1KRjvYnnn2QKy1s8zj1Y4XQvqFH3m97KwdEKaCMc4BFfRxHRqtGpUbHQTdhooQgLhdpiLcSFK3CpQCF6uus1i",
  "key4": "4mRgWR8J93gkBxSpN4A2YZHCHBnte1mAv6UT4Lb36iSX19dnjk9PuDPKztJf9DL3uiCpDbZd8wXvECZvzTSGMpVk",
  "key5": "5kjbqpfpdGdYqW5hrVPp88c6H1vF3pTF4szPuNE5aKf1FCD1HVD7XeJRGM1wqd52P5fd3KPpVvjbRBd1Mmsc7N52",
  "key6": "X5Ro3qUkhbSL9tHRCjP2UD5RoC1Ns2CcMYNWxkdfzLMkwWBiKX9P6BNNfeiXmcVyzkDpgfEP7pmsvaZupz1wMCs",
  "key7": "v2Bv9sD4RWGCfxjBNaBKrLs7AbdZgrXsR8DQ5ybZqFEjrnmFB3sE5MYgANJTu78B4SZvdcyDkH5ned3gSzv74bG",
  "key8": "2RenX7qQkr7XnhFf8o6GyZxdU3Xz9qULbg8rpH4PoETwvWSA33kuNEQH6fttBcP7rx1fCa2uEjvWvoDrotF7TNSj",
  "key9": "2sgM84s6mgDWvnuV1kqtVMMz8G1sc4gG9EoX5Uk4DqeUmrDvHaNXyjajxSc8fQoGs7aQAJJ5o5DZX9WX9YjGobxF",
  "key10": "4dSQLPwb64NJtFSKqZihWr3WFXszTewjt2TKPtnVH8ZSL7S6VtYaXh7TwH6fCg3bTxjDAUaY6Q8d2t8Q4KmpwGFX",
  "key11": "3sMYwNbg5SxRjYNytdCJRdDFxS66WewkBevwnU5sJCLCVYfjdBXUyka2z2YvB3LAAqBY4nALvWPU92we4Xnjv3S6",
  "key12": "4QwrfwD6SVmoWig5twrkwbjjQrG6xeQEvBC8PWsUMbbyPY9U96ZYJG9DsVBPB22FCRBVEdiqM7F5N6NwfbwSfnu1",
  "key13": "2c71yrRKARhd2Wqva3q74RbrRxXmvC3p9PkcvNj9Je1ZAkAzf393SX7hC5JSMphAAjgbyArF8aj51DvaHdHvYbrU",
  "key14": "4i3u4uyGsG2xwF4uFMN3T6uByw81j4VnzVNr5TX8k9uvt2YY32MHj7KBNeQK7uina5Wvf2j9QP6WzWdTm7sHga11",
  "key15": "eR6MWZLdL7ezv2cfF7Ruowta7doxsN1AqfNpV42L2Kbd6ck1ZEnCJ8uBtagWu3iiAswNDi7X6jU39wryW5kv1vk",
  "key16": "2cBqv9wLeQkMokrVru8J7RM4HwSAVZRiCnUG89NvZUGfyuXoEQ1qsFcC2vq6w2P4PxM4eSzNv1ZLwg8FarztRZzh",
  "key17": "GE4mhSkp7HxQSjiFafvBCMFWRrAVagkR3fAxcGusieNxV8UbiS8Ht3sYDJTFqe1ZdJ1rSbrnCfmr6oT4UfRpR8z",
  "key18": "5Q3JPbp8reNUGXWiAzre7AkQUzzVoJLvcByRm4cXEGDBY9Gcn3rwpCmWqj61W8Umhijy44ye3cWX7LuEAhMTUSBG",
  "key19": "48ZFFktR3fSicuNTP8R4SMHSqYtyFaMDWyEgi9n95YBG9oPQHbBMTsxt4shi9gEphqhWzsJV7awA7ZXTAFnKTe42",
  "key20": "5BWeDz4CfjLhupv2kXAs8gyuQANitJDaQNA7z8cpt2NssLP9iKLtxp3wa1c8mLCgP71TzynjR7QhZutMaW7XnvVr",
  "key21": "3DCnqsPc1X6UqGNA5oSGjz19HoCtfvMt2zjxBKdVsrGqL2j1VGM4ACZoYN2z8v5KAgRSqnRqb12fBTUE8wDMD12G",
  "key22": "2wXDjbT7yXFgxU19sWBLRvdHFj7VMK9dy7pb2xo8PJML15sxye1Pjd6g3pZYLEDdaQQskF9SzAqk5K2jpiVwk3yx",
  "key23": "4zWp9tTJJkeCUVg4muZiFGUAX7RKDi7ZojKsridNxwqDZRpuB1J2ceb6eqaqU8ziWgGLSov4C8kxKiDNDxAuzK53",
  "key24": "58UdC9WYd5tsmsWQ5yqetW7Xm9dEkx2EXVtkNU4Ckd5aEdQ9pGabYm3TipSbA8t1m6VzCvaZUBg3TtyotRSzqnve",
  "key25": "4daaQGuoSMve5VL5iR4x2uvniyYxBtZ8HoM3RzToDBr4Abf1j7EBMehGtRNX16vc234MdTN4D1mAQ92tCHdbPc6e",
  "key26": "28kKSZiQKY2d1W1HNXhaW6tgHhR5PmPkDjrgUHWzwVhA2tT1cHVNPv7hU8RiFgQPa9bee6mUSqucDVvvuQ7E6ZNd",
  "key27": "5aF8ujYFzt8kn4184TsDUQpeNdmMihUVB5Uz8tvPx4rgorXp4jWYbe6kd3Ess8b5Tb5wQZhfxyqZ43oQN6hEDZbp",
  "key28": "4Vn1XKNmGkMKsuk1WokaK1k9NbHV9JobXqd8qvFQ64dBuafdV95FPczhPwQKHLe9DpJpyQU3PDY8uAkQsMytsDRw",
  "key29": "3WGsjugaVbjPGF7CM3Z6ppPiFzXAABdR6bsKCqQWv12LPCjuTpW5L2didgccbzDrk4mhskTwbV4pYRvxwC9MLUQL",
  "key30": "3cpKPZHytJLiwz5P9X3xSwupzvVoTWyBkXiBjpfxAHHwNer8aARNBZ1V21GSgnAiJ1GytQ1fGsnVgM8XG7y8phbm",
  "key31": "5ePahxTPFEfkj6SVxWhFNqt1h4qA6wtszSLjbknUkiXyJrcdivJqe1NGHGernfauRKcEEjkmY8LNzVWxsxwaj5p2",
  "key32": "vtzqPDuzz9bEhRtmRNQMeMFSACpQgYB2FFc6ThBctv2tduomgThhFes38GD659ZXE26eyVwRyvqHueCGcvVStKE",
  "key33": "5n4XTjtjq2zb8SkL3ceMnzcz3g6E72vALKjEqzqQt7wG49FZngf6U1TgHApXmxDQNY6wdm7TBqNWzy18Tt62hRsZ",
  "key34": "3tsfvXfvFDwK4iL6LmwNYJqUGRyBDpMqHJsPk3cmVkS1wBiGN9J7bA1PZZrvvav5Dx6cm5NFctYw4gG1FuuLguA6"
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
