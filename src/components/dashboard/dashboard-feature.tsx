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
    "2Q91MzarSSCrwcqUAuWm2RERBe3wK4PtwzPzEf1RN3CRoQwd3dwpBzMzBfjwVppAvpfPeUSMLLNwtZBXDt9phBzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VTGPwiYadrLQfNcggnpfjtArzapLU3SgPzABzCt2Lh4rRxF4tb4cgsYZoZ9DvHCnKZvEFUqUTXE3x2muYhxYwiK",
  "key1": "jLJbFJSpL4hzzix5UdPaJ3a94i18uSZP7WmdjjowuktxPDGKJa7ovk4Qp71xAktGPzqcT3ry9FdrN7B6YKmwWaD",
  "key2": "H6Bk58y7HjMuqy2eyDhAUPAfAbUmrcR5kJX5feg5QzUFRNXbdcmGpCdVrbUCkTZCcG3vFaH19s76cnP7Dm9N3dn",
  "key3": "2mVenHs9U1FACQEpbRSLn8A4SiYt9FwQC4pe61ktuCi1SyFHuymxNqrFeYk9mU9TbUW1QKt3p5i7VSXC2rXZp92Y",
  "key4": "2bvhMxJp7Hft6W3z7Det5FbSaTghAi8XSbaejHebKT96DF5GgxxFLjdejksBjUZd1ghoFa6rqqVZSBGJRg41H4Gw",
  "key5": "2sw4xzL3nbUWEbsSutzjzvh2KLHPttwt5KrpGSAqDY62mFPXwpp5bTECz1DHwQxsZt46WTnpidHm1SGg3cct8kDG",
  "key6": "96HVXs2cmoCNUG8tZcthUAa1XPpQdxnDzCFPucKYaxrk6xdbFBqJ2xHQn4z7qgyPkfXdfe3nzLAAnPxPc3Mxmtg",
  "key7": "3HJtv7NwouiSnHXbbmTEzwmRKaAqDwXci5TPSQnT3Se9JeGUpaJxAsJHs6v9sLrmvuGCndsyqQxrYCtmqhF2bkSD",
  "key8": "aAWpP6BinX44Ms8nRMjvqQdxn3Gh8mZTXXY2KsGC8Aw2yV8Gi1y9m8SDaw8fzpdVmGUYH6ubrGJqB6pmTqGXydL",
  "key9": "9kTrCpVarL2Ag3yGPb89Q59UQuHtFKHvdk2mWVZzLLZcsLtGYwFUYiX1WeGMPyQnf9RrXhcJSzUCX1fSqiEfkVL",
  "key10": "2qF6rTA4tFZ9Vvz832gXCX8JxFtvdwdeQ5zLt6R8DYmvoEAX76kskn9kf9MQE3Fg1BLTdaDZ7Snkr6H8SjRBzEwY",
  "key11": "53oNv3DeRZdwHcQQ4mjuHKcTRSbh63raM3ojRLckxr2JJtuG5qzRrLMf1c4JTM9JsUwDWNh9D8ANZPzEPTPPb9C4",
  "key12": "65TwKZ2ZZBmD1umc7JzMnDbodmfkjBeKGZh12XEU5YXJYNmGoFQMuNA9jufMpVUnJLpd5CvwRwB3QYTJsUk6eAvv",
  "key13": "3YMPwzSxjqFQNcQW69TCqD3gLqyPdxVBvHaiGRuGeHzRSfvi2K8nJx2rqzUKvw8JVJwi6r4mDLhD3ua9btYuu9LZ",
  "key14": "5jdE9d6jio7e7ymiizZfK2zgy3gYVxifb9wbUhsy8TVrSsjBUeYsTGhEzFSUkDyLAruxrU8CZeEonkZ1EZZkz3Wk",
  "key15": "4x1BdL37h4rhKVeCkAh2J7BjQgfMGwfuSNKEyH8FPywErABcQePp22j1QawrXY79dqdLUFKHiQyrpHYa6QhpXUte",
  "key16": "3kDf4hVk4QLFG1s8A5Ppzq89JbZ7u75KNMKP8U6ZgeD2SDtEyk1vbos2UsC8t4LaZ5hBoeMBSQHjyRio8ccYbcjw",
  "key17": "5YUb5ZBiBxF5iWigFFBQzVEfAQevxy7eCByoEKHsbTUtmDPrcLoPR69rpzzD4NkG7kho4e8qLr2yzbyuAxCZqhAa",
  "key18": "2QukVBZAKSgz3XVWQeQuxd3HiPkLWDLWF1wsQzpuRocnTJP9nYBcNJkkCTsH3dNEGFJxyReaSJaWAhbdgxCuLiwY",
  "key19": "5LhK3hX9sCJz8B9pXLHrppgBYQ7jcPyQDNA3CrtyG82VMsbKNptvZFcmdq1RjKja5U6ug6byMREiST8wnimDiieR",
  "key20": "2wjMHCK7ceBPx5ZhyEwjPC8vx9bZ7RmT3gekXe9K8Bda8cY29G9UeeA6fyu4uBvjNcawyexjraeyqHpX7EgfhVaM",
  "key21": "2sVmAekDgr6FSmQTh51UgJ5F475jGfaNxtDGFLiPEdxR7kVk9pTRdRcnmpWN1xKY3mkXc7DiL8VwsRJUPjKRYPqh",
  "key22": "jAY49J5jx4Wt1P3tWm7qQgXpw3QaoDZPEixfDbX4DSP17wMTyb3M3w2meWuczEfW2Caf7cjTnUSFuZsEYLVtYWr",
  "key23": "42a9ypvRrYti9Df96zzZRZPUyFwJN3ct3m5pHgc7KMxvB8iTDDC1WpB58DVFMWT3acAEwUmLdfDQeq473RJLTto4",
  "key24": "4yguZuCMArYqnXFCJKbjcVpd7Ew5gg9Mz144qwprXF6xdvuisTiKsQDTjgn58X2E8ZWRaoSXwX5SHJCqbpKFmWB9",
  "key25": "3EsGhdqMcbSVHFifhB5HKvRCiDisthFBGKonn6BvofxU7Nw5xMSz3RdY5e713Z7phw3qyVG7TZcqeUYzzFeVSH8j",
  "key26": "5CiNmp76PDPJUTYVu5HAUg8kTxTPMZ8vpHRtKeCCoFjpNpxbGumhwGWGQjkcRhVLcJYA9bEkvrH2GBVxR4Hondf",
  "key27": "7VJAYqnkAw9vewe8iuc2f8H4GeiHDUEYYx8VHioe9bWZReh724ZbGC1rHeaPePYVAVztJFUKcUFY3CVebyuP4Hu",
  "key28": "3AiqVfbGW9Y3cEJ5uSZ89e21tBJdxhUsutXcdGvsyNEkd4sNxSbfnQzrrMXr1hjcJeRLxM5L5SRsMduYg6JNCHB",
  "key29": "5KU4SspGadseFJaRXsLw2667mTnVqWFPAxdkHAxiMtr51tHwzAr6ontr2ZJtYgepYzfkD3NJtNYRCySYPyQg7hCp"
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
