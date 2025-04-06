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
    "4qBawgphaXjXUZuuj6VvRQGUPqoSFRt1gN2xB3h3Bh26Sinfy74ydrquATMLEHt2RTFRqegWikqyRHR1w7tqBiDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rrjMri6eP9yKT2dxXL1nxUBaCWn9899hS2BJEdutkeHnXxdZDr9TsN8mHq23y7GQZbYigA1mbbHiicYnB5XXybT",
  "key1": "kvMANEe42TnwFyAy8Yu6AgWrYopwupfuXLrMmTMHQdXLuobnbvw7eUGGsewjRpPJy3Vj4DmMPVetGXhqeVRAxr2",
  "key2": "FWV7VP1k9pEdoYBMvowwXhsjtPUrxjDSkp7PCKTQMxyHsCbsermYY3hxVVzfVehPXsds1FvtktxUqiG4SCd8uqE",
  "key3": "HaM6y6aottYV5DN6a4bgZMXiQzvHQ4Pm4D9J1zc4GoHrJMEGFZPUUcp4N6DSQBhzg23PMTnGGyTCMECM6gphaPP",
  "key4": "cPFXz9No2s5oM3MYR2fu35ou3Bdp817G3USBJoXgMogn6u1ZDvkQZiNAGwZ7HRNtGY221SJGtxbivCcSK97nQA9",
  "key5": "43JfUX85uy8MzBfnYVU1djDk3GZsKh1U498xTcneV327nMEN25n1NhZ7K7LhJt5g5ejJj1EY48v8YPL3h47TEQKs",
  "key6": "4w41mFN8XzVZkCTWsyDD2hCRYfaa9rD6GEzKWotdC2NUtCQr26RqAVoKarf8Ymjfz2Fd9YDwx48Cs6wg2THtwCmG",
  "key7": "5nTkvEvy9swcgKSWFJmxKRF6GWDcTGEYQPGPxgizSurfuWr7UiS4ycm3BPqYCrM5wCDjqgDSjAmVNHwr6knZBMVJ",
  "key8": "4hdwsE2Tm2ANZrUJ9Hy5JcgauaC2pT75c6aT4GMxXHBDMBqezPUStfeRh7kDpQ9Ho5uqiAJ4ybkgDBbSKJ3VEUmW",
  "key9": "3Wb3vfAT4UTPXsyRnBi2mTSRNoCMGDsrx3M7zvtZh2iU4sqeZ88SMfhucWYpQZfkBSdGcedLKE8e6nKpiQ2byryN",
  "key10": "5tsEzuH844DYVmygMvw2HscXJ39LCcPBPwv5JVkapWZdmaVxGdexfN74yFoCmZykjSxWfgE3n7C2ziyLTAuGRYhH",
  "key11": "2viBCxJYWhnmu79fR9iayiEeobqG8nRxZmboCTsohTTqJSZQYSBBhjC76RvjfSJ2UXXbaHZWe4NmyKm1A5DbiTQF",
  "key12": "49bZcGerhLBwWmKhkmWL38m1Q6Mbkyib3nq8GmBk3otVLe4fQcfMBK9hWAxBhLgeeK6LNEvy4zwSEupHTUXUuyDg",
  "key13": "3YZ74EM2ZUTxGRBCqJafVPopGbboGbv3VWGToP3MunHZWEgJXGN7GDMmMjjyQL4u8iQxbqNWCbrq3tyBysoUZAKA",
  "key14": "2qkCasmLVKiEgurqs7qeAQnb8AroovGLPak8bVgB6bVBVW4JVb3VEVcsEMen4LfVnfHZe43opCQAnMo32XTmS7fu",
  "key15": "NYm9pms6YrfkhvJpYxbTX3ogKapoPuuBD8GzCE1Y8dq8Mb3YsE9uBUnxHDeEf1Zv1yoJ2AUhpZipqQnR9R28Lzs",
  "key16": "4sBLwp1ij919KD51PcXjTR3ArdyUkiEsbrWCswu5nc26Pw1FvjGnCTiNTgpLQ3DMRWFaMW15NL9aRr2fGoHskH95",
  "key17": "jTjNm7jm9b3kTVwLBZMVbNdbVi4k1duXj3eZHf1ocCgR882x6G9rwkzfMqHahiN4ZAS99t16J4eK5DkSgGCCkwX",
  "key18": "3WdyXfdGPus7bNn2BxSncfwuKopsiAeXaMohFYM4vEXFRqSn7GoUBT3wUASYsmYocA2W2C5zgXbTWoDJ2RQqVXtm",
  "key19": "27Kj8BC5oW16mT8oZZjsisvrt9StCrqxSqg2Awg6JjYMsTEWXpdTaUcXkrsQ9mJVXHgXrfn5AcFStv8BRCioRAfG",
  "key20": "3y9reQ62RW8zGsSGm5tHDyW2mYzJBkWD59sfbibg1p6FbbohgCubZb2wFPieuAvarCdSbTiwFVpSL8emytZExkMb",
  "key21": "4245LRMFx42DAEpdyh1EScBKRDzb5ex9PzTNrX3jYdmygfHadr85wsj36AQLDWWy5nib8VNLKNPHvYiLaefnYMhY",
  "key22": "2fqXPrMXDXgvKjg8kMYWQTa5VgatVMLG9Wq3mpQBoDdjAfCFDgi1P1oJsVJFK91TJSMBvdzqGZfBTFmMMHJs6Hpb",
  "key23": "iZzwLKBQHRJbuxHrsz24v9e4RP6gddJ2wmUTxjQ8x7eN3R2nr8KoYK69Xa4YEsi9gMNxw2NsRVr7nmHa6eefE3H",
  "key24": "276227wEo4dV1UHrz8CSDKzVd2kGCrTXo2VGsGnjiU24FE5CHquUu6Luh9uHYoMCxW6S8eaVUXL1HUEhyaFmrBDW",
  "key25": "444hVxEc1wW64LVhLQoyjxgjy75wRVunLzNvcLB3mQTBG1oxjEKD8RVnHMXiKrdFEsS8iNyivgXUGhCnxaqwDoPd",
  "key26": "2zhX1tVpFdQQhBV5WmkimFz62Yx1sLXm4aNUwxqp3TVojx7t8sihYX932dqzZJcxdbqLRqhjB4Cde99ogfehB5id",
  "key27": "3Hrrfx81yAtkMy9LjVBFHafSCk46H7rjHFy9DqGuin97cVArQqj1jH4dgtHmv92oXrRizRwBkwxyrmpguVJ1MfPQ",
  "key28": "5tcaSzjbcF64tt6KRCTKqka8jiX612kmD7Ho6tQaNaY2BSLJhYX8qcjz1D4dEY7X9YBka3zx36BhhS473CEJ26sD",
  "key29": "3sWGZLDHUmbfxacs8MZXBtpXPw7HJNf4W5UMYwJcXYVjnbBbbRYnwZYXLo2X1amkdTo5Xa4Zwh2Vu8XPWVBVwR6F",
  "key30": "4nRU74eym26keemfbnftuXM8GXYhHEa6iC44wskAVBHWGshYi6o6vus5GSMjgvQjAG9swgk72nsij1rdZ7b1Q1u1",
  "key31": "5wvMWYWodpqXST9oaBNXFQ1z6d6dVAXX6sFgrNdrSgHurmiHNm6gEABRD7NQ1ASyaJ6QeZ5UDnvMqN63HhUwFiUC",
  "key32": "5kvMwWkBrvToNbpvZndNg2F7Atv9GtJcaqMmG4eb1uiEacsXjSmxRQskjHs6upkbsXdcDVCWQLBbbGziA3xhZM1b",
  "key33": "3CrfeqYpxusqtbXzRskNZ1jJxABHh3NeZHGToZmZbntNUdBmHgjZbUpS2m9TEUK65JQmmovEQhgf42QChEpNUpMQ",
  "key34": "2WvkJYo8FjSv1oArXMu3NZzCqHqCjHGUtqhVeZMy1EdBNr35G6YDAR5wrJ1MbfwHv1K6dQo4CqkHckvj5zLmG26R",
  "key35": "4BmNW5WecLue949zuVbFSGB1mrpEAkMw4efisR3FBc9qY8Fh5iikNehDWpU1bHvL1rMdpvw9BF2EyHRpmPZ1aZX7",
  "key36": "4kFMcY4zovGqJ3BMnj4g2PD3DLnsRw1B5eRQyjvngRWrWozwp6WgzQmwwP28RK8HNGuNm5BYdVWCG86Lihxb3aad",
  "key37": "2Z6cf7QAmrEwvtQJDMVMA7Rf2doEMKimPEF6PmbKP43a2j7vjsnEPhSAVgamPJ2621EqARGCYWUcGR7rujNB3nnu",
  "key38": "23rsGfHH4yaxJ7d31VXRGekqUVogFvDgDw5DAJuGYsLUoxRjEvbCRk9hpUG2eQdY9rsD5oL2yydmDfjCxhFMc4jr",
  "key39": "5PBbinVMY7RvesuokCAw2rtaygEPdKp3FfP6RsnpExig9V6482KHNG3DZ86DaV2HgbvxuXJDBRJ3XwDoiifeJBww",
  "key40": "29ummNC1hY1VdULg3PQnFXaqcFbqZ9CUzuEQamHEfq9RbT4KLMLiCddmNGMkvqVtsJeuyvGmXSGyjJKknyJ96MiZ",
  "key41": "4uVYw6AvXV9s54iZBVQVg7dNvniaRmz9pKsntFnrj5ZtgfVFYcVuz9T4Sg7jqYH848pwvTmrVJBpCKRYWGL9Tgoq",
  "key42": "5H17LHLo4SQHuJApmWvtXX7Ng6457djLgjTw46aWSGBMfwvz9mHbb3tt4badbTDLbbqFKxDYvsbw5iuvjLEjQD51",
  "key43": "3uZTqBwNauneWxkx1TaCVanVbvous7jFHQ99T3Ed1qPfgzKpRoVLcQxxH7MTPbtEeZ73QQUQmxxRFvmzemPTEpaK",
  "key44": "3GryeJX795Kv3obkCD26DZRjU9qfsMuApNVqevZn8sNpH38znSWNcBjRMqzD5RXdUyz8kkRyCjh54bjmZ3DFEe49"
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
