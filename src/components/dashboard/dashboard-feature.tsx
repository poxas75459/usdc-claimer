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
    "5TU7GjobCYDhAjADbKuseaFMt7jgUYK5KWvzcveZ3cpYJPs4eC9SSeCCwoSkiXpMRSasmVGRnW5p7FwKNZkPV3zD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NtAPE2VN23G1JmgzSnLAwsc4JbSoujtA5zaYWucoCXFpJsK16xH2y6uzp2yS7pY8gDdZvQTBYLmxb8rtEg5LChe",
  "key1": "4cQt4a8ydVsfgvb4rNo6DV4Y74Li1C5mtt91S5T2tCPo3WtfpyYGtyArkJG9nAos1KVNcFHpmzP8E7ggSJHmfhv7",
  "key2": "55EwhQMeLeCPbrF1sx3d17DAMHibG1yxfkeaV9yoUovmKf4j29EqQ879ykvdvBR69nERnokgfcdRpsYhP1gVLFhV",
  "key3": "4Jge3wu3uLfyKHmDDfxcuTsUJWLojuubLbckcRHfCQgzbABrvUZ1JV6Rc52dATHvKBfM1HBsGp6u1hQb2PgnmpXn",
  "key4": "5tzApCwKXk6x9YuiZJuaU8GJcgQmtwcPvaZPUZyPNCGtXKjpVeYQA9WdCc4zZWtq6DGL8xoRXJuTD5a1mWQcGxiL",
  "key5": "4Mnu9ZBiGKC3chkYJUTw8YhofnL4vG4rxWTrvQTCypErmeejPZnkBvGoPEatBp9c4PUy9VMsYmDjqufC7VpzhA6g",
  "key6": "2knYKR2UhCMd3K9SGcqGpWKy3Xxa5wWCTap9Vi8UYTMbdqqxokmdooGUQN9LRhXBJ6TG547vAYMWtdsxmkTZ8cTe",
  "key7": "4WnMcHr236ULV367qpGga6mXn94PvkJPhmaR9KNvUwZdKST6dFEg4B8pt9PsLpZR4FsB41VEjQJ1sYck2vxDqo4N",
  "key8": "3nfWZiMvK22ssg1Mx31wX4KUbuhNz8bhaBqsSnL78xYDZB5adUD4bfzXGFf7TFMsggqgG7ZZ4qn9SFbhzeTA66Vv",
  "key9": "2BPcGHjs1LPomVVNvCjbLV3QpqWcomLGkzTCKxJwRjAJ5JcktZxSeHbf68TwhnPVVpJ8XVFMEZb2ZeGryksVLyXX",
  "key10": "64DBdDGfoqaNZm8guXSe78DcFqKrqqZdT75rdtA5TU7Y5Tdkr2RNtw29BZgAhKrVK4RnPS5JWcaZ4738J2HPbzKs",
  "key11": "xoch2DxdqqHdCWvM7Ki23qvQnocoFYs8mXfmub5Dfq4YSNz2qzdjKdmy7zaz5JcEdVsry7ZaVg8nGB9xjxFa2UV",
  "key12": "4yTHMcW9zZCh6dYXdmFTQxb8eym9RvzVFsQ9JUkFNBmeuDdsxy5NVmcwVB2XAu42CGcgKbomL5GaZav3ZAWYHU3U",
  "key13": "324uKTqzwjaS41MU9d54SgBurRg5Btxy1c2mzrZxgpGsjCXg1yJ2PbBii2NPmoBTAhqubYzFPtAscrmXc3B1GAot",
  "key14": "2LTjoPMcVBt5nnFXUzSVc3jcgRqKHyeLoyCcRqt4QvZkpXoUUWsQiTSF31uBrfgB2WkPNkR6UxiXF7S766D9p5iP",
  "key15": "3obdtkfS2YQRpuJo9yc3tJ9WyRvCh5XDbWzWwHmhgMmF6sSCK3LRTXqf355TfMujEwn78H7YgnKoTjoz6QALmzGr",
  "key16": "4SxuX1SYk7wwjmCts2SdGV8WWRTRprpoYjp7H93YMuAmNRMNa6TVpMLaCE1rRbZqSQNdWZHJfoaoeMFre5KmAAo5",
  "key17": "ziPM3QdLnvhY4NjDeaA4HGM1NZCXujvYcrdEBiVUqZ8rVc7BePHs2jVjBmXy9jWRD5WN96aSmvq6pHQpcexd2qi",
  "key18": "4C1pNGKbk2uvk5eCzQHU3CzcvatdkMebjgRGLSx745ALgdo1KnA6hAqtjX8JpBMcJku8kLpc5HWJ5NAZtN5m5N5J",
  "key19": "5raSdL8tZNmjvJthGgUN11fhCsi1kGvtzy4mVfwwDHdUU8RmmDtWWFffVcHkwG6BguQvcW7zGu8pTnEqgYtZSKf",
  "key20": "2dFcYXz7JvkxrC3mnn3nTEvNFAA1Q7zuZCnJtBWXwJVWBtw3YMfrgktw6g4ujFdvCKoWfocQfSzt1PchiXSF8Zfo",
  "key21": "5QCfjwDu27bGCR5C7Xb2JtSiK7P6PfvV52r7bSN5bKCgCUfn5GuaQjEEfrFhe9wVu51CY3EX1p8ZLkBLXvWZm4uR",
  "key22": "5ZF7bpc3ytpzwTgFcAYyvrcb4zJa4SfiKPmBJzvbfCeyNjupF9QQLXTE6umjW1HHA1S4XzLd1HqzJUnRLPa9JUmB",
  "key23": "4KK2KFf3hDGtsxmLEJVpTv4r7WjJHQUor6GKsyen8MjJ3VhkTGHt8NV2srf85FrL745x7GX7PLDt2tEUpGJbgMgU",
  "key24": "F5AfjVWpeRZYtgoeTZqAgQCPJENnwZpw6KkKv5S1NzLDL2Lw4DxemzNb1YEGCZJHhKoGbzhSZzBYSgW7a12VyS6",
  "key25": "3zgYJ8vWQi46uqYuKR4qYcnVomVnZEY1eXWoRrvyWEDpr6zxXGn7misBgmUaeHZiRDy8vdCcBXx7gQpzwkLTA8jw",
  "key26": "syPa5DzMhQqioJMbxQ2A9xnHKVg2g3oy6FWQ75Gz8yBK88mw5tL4Z6nhYqPSokk8yjmN37sr1iv1Mr5Vqv4hZ1v",
  "key27": "4sFYd8zUnAZuwcfD7M8VoTwVTuC5GVontZLqbuSzUpBS7vCdDVdzEiV5aDzeRLxMXn8MaCJoGyk3gNP4YqhB8fG3",
  "key28": "55dXnvNvN25H63jaQDmLRA9M1QgwBx36uswrEYxtjxSunfiUjfFqGeEhWd9rXWBrEEqVdmX49quF6WeShATndGiF",
  "key29": "prPpnQHvN3VaXqaU4LcjW9s9VKLsVbFZGzD95gux6whtFDfrHyJyJ5bRyU473knMjKKMkd6zkBqL2DYTWrGw7NX",
  "key30": "29UhniS94XtFHUtcwiSnrJZfVoHwNCuxLrmnbt76Fu6ZLKwM9APV29QLygewp25R94sSr31h9CEFZ4YwwbsRrpSq",
  "key31": "33ce7Uv73aU2o4SjrwrjaZM7A6GD7ypRUCq7JtwPmc2wp1oskVZH4ZvqGKVssKGT7N63FUriN33JH61tZiDxgyXT",
  "key32": "3VujARdASg56z7rtBR1zMxwcUrht5FvdoEZafSq1eGxGXKZg9GEwLcfTRo1E5uhhefcp8hwLdHbQAzBw9o2uMGoU",
  "key33": "7N8rnkjygYJDff7EAS1JbksJWSwgky9JtUP65Zy6pc2xTYyBRMdNAVE58bHvsWKFKCbGFHEy588QaEDFTimQcLF"
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
