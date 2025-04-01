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
    "4RQfx3CJVLvww9oaRBYNSydmzUnzPph8GCfjLa1FibSE8hgRmHu5Hza1ts3meCdanqZXgUdA6dSSurFu2JotGKdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E5f6tqDnNjjQ5E8aQtF1p4nYSQpZKAPDdufJTaJgryxLqHrNCVBn6z4tYpS8jDgmqxfWQa75L2vBhz4hZyR3Tb",
  "key1": "2Zv7HXHBQoRDEbMmyumTpvnxg9fBiMp9MH8tPZVd7iNyW5goW21vu7zwWDHcUbq6Wv9nAugmya6gkQHe2CDA3MFb",
  "key2": "5z5qvQuLnH96bkara5rkHbugDj4hgyvsVykhhdiaeCGjGknvA91aJUbd712wf9rBRjmifc4xL2DbpkThwbY2M2Z5",
  "key3": "5Qi3LipT4TVuQFZ4h3Ah83vCX9K2KoAA8nhKQL6wBE6m7HrEnnuTtChiVQ4kW88wyaqdpWyPpQjpMmsov4EMfQA",
  "key4": "4WQayYNavTjU7mm5eo8qbcu4xJK7WYa26mZbQYZa6HWA1E2jcqY4K4yjBfonjzbo1j3SnZXJRE8UV6N99Lz9E8eE",
  "key5": "hoeGA1fKu5tMBzqJ5K3h9zzb4vXVEjzdAfJQAv3Pr9Hm4dsxn8j516hrKGhp2pnv1jsgUznwVo5kLHKFSQtVk9i",
  "key6": "3mpmDN1MjcmTes85deA87Mm7xwUqie6JojosnAJPN7GduBsT2PR9CEm7usGee3XDzR9nyRpm9UEzK7zGM5jdLk4a",
  "key7": "3vFxjj4AppwkjFszJBDVFyDwaBYdvdxyiuaeNTpgX74mCjNMKQBrGKmzMaFL5m8Jyb8FnWmUU9ZQPazYizkm7W7T",
  "key8": "4z8UByxTW4P9Dso6wQKNQT5YeEBo3sSPW2RiYUPezjpGFxdZH1A5bcRkZi7RqTAG9v3EfVj3t9cPkAh4hanjy5BQ",
  "key9": "N1tMafGBoKUDQQQyqTizNNjXVZu9RtgF1LtpXjbmm6EGMD7ZeqsKwZZiqzJ3VzHG1fkoWPbupbLLyeAsTpwQgQd",
  "key10": "2MNThNtWD6GWL9M5XWXjwvVVF9ytu6W7cRKoFK6MJu8xxguz67oTXyzRSWtHMnFLAk8g52EMjTtDG3mQjiphTBsF",
  "key11": "5kuntzFrVEJnSms55sLpfruGDTXhoSGzWXrHHjGwzt4r9a5NTUp1tbxJq2jMUUbwTsAt1ZDMJrUBtJoSscshaf32",
  "key12": "3d436iXAdt4M61dXPMXkydGahSCRjj3yNJgWQzrv54eLpVf1N1a48r5mPeNkw3Arcur2u5drz37rQ8FbDdppE9nN",
  "key13": "5k1DXvDYWBB7a5zChmsmQG7KHLvhjxuvQyPvxHAe55wCjkYFiq5G2gHvVTBAS4CvXQaYoQ1MpXAib4gt2wA2amde",
  "key14": "5aLABRXoYourjWoBR9TGySNKM6HKrjMnHcB6JvtmKiS9oUxUCpJbFoh7ErXcCHCNZvhtCnuP3U3DxcbjHwKjfAfP",
  "key15": "2X49PwMLzbNjZmShTRnKR68Nz6X4yhzT5nwSeUTkA77gjHBAnfPqxr922gEYEXh5iqE7PgE6QWRLWpy3yGn4RXZ5",
  "key16": "3Wo6UnC6vix8hHtPj6HUA8PtRKLV3op4HT5j67xbHY3shmxDCR3vgM8HKXn4DhDzGPG7hLBC8dGvE6s6EhiTberN",
  "key17": "2ceVe74ff3pwxM2ZXcc43cQU8y3XaQrkbL3nnf5NXwfaRfPBJvtJZyEXHbYeBC39YqeHfwKuhamNqCXgfMp9Kwvu",
  "key18": "QwwkTNfLa2PGFyp1gyWGNtiSSw8YPaEUCDpMqqjsJY1juDw4TFB1mcQtmgMRdk8WxBvMbWFLC7HsVvfqYeFCTPN",
  "key19": "5o9LZtZBTmh8iiPKttn1RjoMDqP8yZPnUG8Eqj7cspKCB33cQp7aDsUR1KbY4MGEa7U2piEhfTYxBLk17w2JFVKe",
  "key20": "4TbHzXiEJ1WdKDheoVL7CJeuQav85w9z6uRGaHc7SiExTpj2PCs4GRcnGKKQPZAQk5sQpFfz8XT3LMhJDTJRYCN1",
  "key21": "48wZkiFd1S173zUJFkbXQjrD4DrrDkvdVAmWTG7DCc6xsmLo4wmg1d7y13kBmHjk8Bjqg4xPA28VzzBXAbe77MKa",
  "key22": "3CegUsw8QK7e8qqw1vzJMGhDRwWhtCMUsgYfcJywLbFhC4qjngU22VXcEA8TNAzotRoMMj5pCCMyM33BD9HKh7gN",
  "key23": "sHDEAKg8iGyP4awojWCfJ2WSNvRbuyWKkqSuWFuJBdxzoEEhZKgrkWHWzkvkUJhk6sE12jJUx6qY1Y3uFoDBf4Z",
  "key24": "zj1rrVd1oAatdTJTqd1jcmiSerAnbEKQJn4AGzS2bJtkn4icb6kPRoBZCz98dBFiFmbXXqrBqHdRB2n1N99TmLZ",
  "key25": "62Njvgi61ZB4uSXdxAzcuGCTXR6xwJ6vSZdNspoNzexWtnwaLrHR9ZPSgCmZ6JmCWu4ewWMJZs2T4QCczCdaa5zw",
  "key26": "gZrMQ3xuwmeByBghFP5Gk4EpfBcoRKdGh2Zk9mzgajs2PrRKXWvKQk5Rx75vbQJ3M3mFHk5sYBbkVnptGhapya1",
  "key27": "3xZMe8py2XbaoXtMoiZLfHwLwepUaxKYxJJWemFL1jDg16vTxBEBe1Ak8c4B4vntnyFQUsbVsiNaHfG2FTFtXYsH",
  "key28": "4DEgC7PDj5wneeZ7ngr9Wv9MVaA2WFMQZj6CJoSw4Rw8CTzwW57iQXvZhonVDe8QPQr76buKw98d7EDSFfLQhMwD",
  "key29": "4ehx2CKTPA2xkj9hmG37Y7qdT81vtcdFHkxtDfQHB41ZnoJCJjY1FgrEWbkUnEQkobviAP2zJrPzM2a5qRVvm2CT",
  "key30": "WVsKqZiHCTXxpaicYbkTtbSdSCR845sz2DGZhaSdTu9qo6dQohKWbzBbt6K6n3EFBVc3NMbwbVnwASqBRtkjdma",
  "key31": "4yU2yfKtDVNXM7tmZ7WMWjAEL4ezMqWyRWdiYcJyjCShuVFrEda1i79Sfrb9MSWwBFUWV5SuVYGhcGAkmjeKdR69",
  "key32": "31ur6wWp2uwFwJTfPC8XeWqBWUSXR8YihQ6wb3wdsokv5j6nHyHTTLjNTprWKyoqtn5TyQ6gAipe6PC5eFkerJBt",
  "key33": "4LSZ716xNmx1oGFFFeMhyqsg3EJbdwucSFAfZB4a3GaubJZuyaA4ZFqa9WXEK9fZYvoTsePLWKtD9DNbnBFT5S7w",
  "key34": "38PFckXwYjWtXsgjBWhfoD6vR6yh6ZKAs9JBf8MepMoSrFnATma9wqCjsbwrM2Bod7bGNgr5oezaKiWbozrmGTvt",
  "key35": "216yF7yLKCLLjnjyM4qtFNCjajD6PevhcpZ8BmU2Y1WyC1Gj4fi2MgurkuBsW4mBuWesWGt67VbkMkwoN4t2XgRs",
  "key36": "3SNQ3jCLJFdjaSNvL3HmLdG6k6tGNF8P2QxdPSWkBVFScKGn9Hajz7nA7T6L9GrHDFKj2AREv9zakzA3Ew4kKaep",
  "key37": "2bCCrUNDqmYtWUqGWxFRjvfUPgS2dytK42tFFx5sk2AtYeWumTD5smTJDNtfus85GN99ZCcc1Jxor5CuPGM44D7j",
  "key38": "3seFijMgv649dgRPQeTcUGFKwzzzYvzrZuyGCFSPe6gEFT4oiHQN73P3pzpcvG5mmEmHkWs3WeZ3mnxWGMK6h2Fx"
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
