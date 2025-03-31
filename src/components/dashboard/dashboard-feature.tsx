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
    "4y8Uv48j9hahEXzg6NiF5F6kiB1wGMM8X5LYXkTD2CrVt9V3d7ENB5ZsMfhJbqBWegeswMEFH2DyKnsPstArr3qE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fn4LW6ziHKBHrZcJGvNz1qidCb1m9wTf24TzGHfk3W1PFnciXQYgSC4MUDckdAkfMysULMGPXTWmNoynR6NWwV9",
  "key1": "fWWdoAA2UHfvA5G7z5xQ5P346A39RTo94eA2mB7m1pGSToZsAxAzzDKDFLFDBgzTiTJ5a3MjroZ8PCNkKshiyZh",
  "key2": "4ds95VxT85nJVKmak7vJH1potCucc7kUM8V1FwYz3fJ4Y5G9Z6dBr9NzmRMT9Xwck4YVkhLGPSTwB14m7FebyFd",
  "key3": "3YdKhbAC7Q2PpftvXSbcZdTcvaPoPKdJdEToiD9kQj8W4tBc8jVVmkYJfutiRajXAteEC7cwyJk4nF2r473Wt5gR",
  "key4": "4Db1tgkAX76rEwQGRDkjr2jgkr82ja18Cskr4GGzsHZLB8c9PXNXLbM61bHVFaqSrauFLJAFbLSGqCgzwScGKoJP",
  "key5": "5u5QLPibD2V3dTbFiM7RLdMQKGouT9wCeRraHYW6AjLSnV9PwvesWZPpod8mswTgtss3VAKFePVNJRBGtogZQ92Q",
  "key6": "2TE3Ajg7iNqDHvaWbxFZt7mXn2ikcNBQWjzVSKo21pVADF2bLNgKWNf85PtcpUAT6tHh5xZxvCjKJJR75RFEvJAZ",
  "key7": "2Q1KPSLzHaUd7jXRi69cLBfJFnuhw2MWfD8KPqioqccLMBWoG3WQtqZ7hSHWkYfztBvLmWHi4vuZ6VxRKBViMdnn",
  "key8": "3nHvbDNqxseF6B6zKe2s6r6n6CVvdWWTBqgetJkeSwfe7oKooMkXHHv3B4AEPL5aLVuUMqFtsjqzeXYpWtTaniZ4",
  "key9": "Q6EwMccx7JJZH7d1o5uxiCL3zKZRSwHpeQ9dQuV9q3PFSzsExj7Y1DGgMcrpigPcH8LGGWsXZQ9D1Fin5Hb4dGN",
  "key10": "41nKqxgmShsGA6qaUKdu9KwWubt16KzVts1zfKn17ANMAeBZuMyC1S623AT9DNUHZHRiT7XSLnHP4YyKNtMt9NYh",
  "key11": "5rNhmAeWBoWghhJhsJUZVswgDFYfSqcxHiRqrsf5KqyUo2w8cehgAFrit6rUYiZ6QcAjRE59XMS7aCdvxxVakY4q",
  "key12": "39z2MVn5jyPUdhV176Wt9GVDuxdcTefg9fkBVvzfHty56ztCEySRs3fKwoCMvRsDjog8Rpc337SWCKktDQnKeFue",
  "key13": "5ByGyoDQBvKBLGBicqDroGjP4RpJt9EoFQtdQF5YfrbfqQ1AoztHejwM4gANM1LZbHya3eurBXq5UpKFVJgH5ajm",
  "key14": "5JdESTCjFRHcxsWF8e1EKyK6YvDBQSrtQu2xkTW26H1Rmn7ScpcwKzZUwRW5d7QQ9bdge4Z97dzdkBwZQHce5WKA",
  "key15": "zjKFjteubN1hrCEaQUSJTdAYomGikaNpmgFTRXze3suo4PjMFWYuyQahamh8sBYvfupHRb31addmwHFxRcpLQ2V",
  "key16": "3cGshxWGDukxtqVTmx5tvC6RtZTd7yxEsjxTN7VM6UXpNQvr2KNb9kptJbFWTr2ts1A8aLqvyueCnUowxyjW2URv",
  "key17": "VazEHeM1G5LTyudpsiLpqdX5fVMfqqMo5C914Bcn6dfxvBcT183ZCw6Qmk9QcHsLcP6HHUCi9hTGKsuigdcfRCa",
  "key18": "EGp4YgCEqcQL3T7yg6kvhfnFnUEb9RiGMazAuW15B51mKyFUjfrPYV8fWVdPMV3yxBjUh9AqKZjxZfJ2yLJjHAM",
  "key19": "5WqivtQgfhwLM95EUpyXNWn6kQKg2LjiGGLUHjxupp2BSksPFoEhE24jvFDYroNoKGLaLUhhKcwGKuWdFiDAGvj8",
  "key20": "222BHWVsp2v7MTMaG5EeZgzjPc9woMoT8szcPaSmw2gJ6LRqfcdWdHGcivm66kUJ5eYUtNbVYjSTFuWeVLQbvefJ",
  "key21": "4waCMu4jav19UnYGhoGgRwSHQq3GAwGKpkb21NXq9kVRs569YnbVW7HuVNR54uZDLMzNNQS25b7Cvsx9bNSe9uzd",
  "key22": "5LF86EUdoCcURfzuKFGHQv4434agFbLRv4UTHw9jaipmAt5PocayBvVBMvBFFWY6t7BTvaEiXLo32VRvTFEnAADi",
  "key23": "3e7B6DpTpc6CGyjnt6aURFuTwVApWhHbUCUekPBPPZnYFT8tybxk1MrbpVg6vaKaVifvd1JTjPajtKkj5PzDas7R",
  "key24": "2TA6nCKHzd9AFB4MEUGkkXYS7tJEeudYZXGDzZDv9z5SDEqUf58Hvwz8hZsZLmywohEJtVW5PFpxpxqrNJrwmhzR",
  "key25": "32eUfn5J2ccG2MPeq7GeM71Y9MC5FYxGYN5ST1GsAgMLCYoJzqJbRLeT6Cm4mCnjmm4tNQB2tSZwgNCKJhR53CEx",
  "key26": "MtFqK6rSjkm778zfXn1d6cRXfeB3XrG3XZJ6ryA8FahFz2FVPajDZpcvMyogTdCc9x5uBapwN76R6dLfqwsPjaR",
  "key27": "5SvxSb2AjzgZCWcVbvPb1N9MGS9S7PhV8P4niY24TyaDQEVz83cgZ5dTXbseCDZZtXvXWzNfp93ZznUSnKu2gJZe",
  "key28": "3iNiWX3nG4rFrir8zb2pQiQPCm7Qie9civyCC4SFGMce6bbVf97swzfKYPUgaXmf1sJhG3nnHEubyd44rNpSGwZb",
  "key29": "41F6JvCZkpmqEy9aMe2JsdjMD28p4gPK2ZZTh9QsNyukDySAsttorbMPhrSygjyVYwcjAn5kVG5AbFDVYBAk2whr",
  "key30": "4ZsiQDR4t1qfzZ9YGdVghA4k4PAt68YQqbny4eFG8Qb8To2NMemZjXcgZhShMnn5rcic9Bpz3S1XjjQ1Yi4V4wrD",
  "key31": "BTCbSmyM8ybppBksWtsEujvLL9TuFueAWp7uEDaU5XHLRqTnWCymDgmcEeDxLcnyQpEafy8cXFixkEMCMzfcEzB",
  "key32": "imgr7yfNamZvQnQ65got7Wcp6y6GNn9uZZm8Lt7Upgh3WxKrWj4xEETDCSVd9EHUvCkEJ5p7kPdpEn5fofH1BLk",
  "key33": "3YREMix6JziHQe9MbiwHKcyn66EHzjMmJ3zA1y1JkGLf21FgY44yQ1Jx3F7aXe3JN4GVTAPeA8RtLkx9EzboJ6jX",
  "key34": "3xMHyPYPCoLc3j5ie89PewSZLfo91kgDM2veUXP7q3sRbHTmqARcA2Qap95zTdU48Vt96s2V2HS3nGGqw8b1ffaX",
  "key35": "5bDoSTfF9biCiN8Z2M8ermiwaG3KEBGVe17Pjpu8mZB4JYKJx8Pg7KhxWjqX2RYyFTDHgfyEk4tu3YFskC1wd3UY",
  "key36": "2kDVCWqNPVdFaxmn2gL4n7t4VggTFbSmg8GTJarmBzHQckCmenPujQemqkkrMekbLpa1XxAzqeEdSPnj4ZqFcehn",
  "key37": "4cuoy1hjKBX4AkjFyNUx9yvudzmT56QWB8k5qDfWhk4yewbTjL3jCRfLCQ4eLyApZ988t8wqSbC5zXCCYo2kGkxc",
  "key38": "2dXRQZJKgPa1YMsvjWxRDd8tGwaGomNfdRQMZFUQ2VpzP6HJSgjNTRVQNoEQMtvYa5fvUqxbvWFFV4aZNBP2pv4y",
  "key39": "5Xvpt8RAeN1URV71KfbM5JvXWbZipE84mnyCkBs7bHhkapNtgK4v89k6eXFgtJk2EeNud4fRay12hWg7chzmgEm",
  "key40": "3YYgpy9ffkmz8nXXFyTxH5uFWNNcDanxeM8J7e1LacGdhgtJ4tgsNzGsWkZdXczcN8XTEqj3TPN5HSFGNk2bK7Yp",
  "key41": "NScJqmUZzafKFdS5cS6YiA68LS6AkkvHhBCe8Pkvb32NsCsjfy5ki8hPzsm82n7obGMfuQh5p5fveJ2p7rMLVy5"
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
