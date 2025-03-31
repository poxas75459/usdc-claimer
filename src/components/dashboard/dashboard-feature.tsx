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
    "4gmPNLg5iceHqpLEwuqZzV2H4yZ5ygxkouUL9K9oav8upANzxUQ55BPCjBhgPk7YdFuuT7AEtF2ApiTESQBdDsyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DuE5C2AWzpgCxM1StqaXtDjPS5g6j3ufDnug2TKk4sQNTgGiu1QbTe2AKj6BuQrrmRTc65GPRj1Aa13TcRLt1SA",
  "key1": "3iwkkBc4JV6P8Zy61yr31Fbisy6pxTcpyAqDAhC5FEeZ4Zu5PSxWkk8niE7gnkFTjwRSCJ8M4qjonGyNNynebrqD",
  "key2": "5YoNRSLSzwZR5WWQV7KUi8fY6tj9w3k1BZGJa364DwrjGsQbwU93LW4vTGa2fbpCFiPiPuTX2XyNSdeu7rhAyvZf",
  "key3": "665H3VfxEW56ttkZZa2NyGbkhhYCTNZuyyLUtyBWojeYmWKHTpKKsp1RQXKWCfdVXBVn9csUxNBwUtCN4e856Vo4",
  "key4": "3aXFRtNLRccXN95iP2wgWei7ApGyaS7VhjosLggmh41WbudB9qKsdKP7UQM9LV4spoFRyn69okijSwo8PoDHiLxo",
  "key5": "2PYCAYqopKPNCYycQUMKfo2jjRdt2RAinJia5obnsMLaX2njXCeqbXeew46sBvE2PBUQxKLW6axc3SdDbnKhujNa",
  "key6": "2eJamid8Zjk5xJi5unDbRCGznkWjR9HXuqoaJinxTfxsPZUkQX4MeNiBYFdnBP94uveLgWDwASZap6asP9FjC3wZ",
  "key7": "3S9NLDoDv3UFPchnePYsaJKjPKvJHWgwpocZDePvnbvtMNVcadCqax32cpcwvMacEiSm9bYUNKMARkgSBJ4YBYe2",
  "key8": "jsK4io1uvsHY21tbrZDp3d5j84qT6nJ3ydGPhUtiUaFvracJ5WdGtU9zYk3TdZ54sQn5tb22zGTMTjtN8AR7Qkv",
  "key9": "1GLTTAG5SdMkK795X7XBMpHvhAyP6HNnhXvGbGQPeB2MhY3MP9GB1KPwCxMdAspcfu22TQYF43ZYA5omxwRY5eR",
  "key10": "3t82JjaL4gKz5sQwC2BXioE1hHYgkiAfU1Xixa3TknSS5ez5nz885BVZR3fUHmcKvXu7zqyXoR9EA3mVvui5Eo6L",
  "key11": "44DStoWzioSf2eQpPwsTfKJKV7gQQ3rxXTtRF119VE9wN1aHj3ArwUmhXitax6qqsxxeZYhkKFMGpHciVxBrwkwi",
  "key12": "3JxysAQtgTaWkwzccmuGvMsy49VFZFAvfaUUKy1NWwY3KQ2HjrDVfWiTqMdHFt8UJwnkB6cjKGaMyCQXSR26gUKF",
  "key13": "63fik3ZJFvvvGz5FLPPSzwumse9iVQmo1VZooPTNr5mFdQg9j638CoS69v57iDE2xu1vV1miYcSPHErrFDnkS8m7",
  "key14": "5PVeXULccqqXHHmRhgdMU8MpfPEQBsuw25uUriVDcvnY6znhzWgoWEQTK37geaHHKPm1bzta8PPyaidiQHvSvx3S",
  "key15": "5V1XcTwSTHWpu7HPbZpEDYatabk8TCeECbAm4xMgRwL5AdvTh3kXvYSb2t3rzo6o7padQLrAwNhoUEUSnoEvWYgS",
  "key16": "5gGfSU6CB2yRi779R1k42M5dFUkdriFuGcdHzmjdhhBciDK5p2r2ch7nPzQBnVTdL9wbZrKUEWUDvECYgJW5MsDH",
  "key17": "3XFJRBg2gtQTCFAdmjppSYJFoDP8K7UiL546J1o2JTM8e4j1DmHXLyzjNm2pVk7vcp7wMKUZyozyNQFEe15u63XE",
  "key18": "SnwwXW4UdEPLMNUMtDhciuH4cUC5eRQtRQSQFiGDyM94dm98BEAom77Hye5Rac6vWm4joWxVCjxPmXTwyhddCm8",
  "key19": "8S58WqgW96ecnTCFAQhdWMQhtFCEY4mE6Y7nc8wvihA67o95W1q3jCB6segtSziNN1HwpeFJQkndEDryh4VPGVh",
  "key20": "4C156hXnmysPz9AJL1sQLWoyeFSrq93Tw7k6EJhvewS2HT2T2TDVhir1x8ZQqTeWU1JRs9BPP6V8zGc7Qz3M911z",
  "key21": "izxZTpnTuYmjFKtdNCbw7xgQkxBWaGGm3oKnGLDAzjgZbVRYpjVgkM6zRcCrzDQ6vgfGUbGCNdXp5ai8XqDzWco",
  "key22": "5dfNjcg5jwghps9sju9SS1x7vD9aHAjaG47WUkW9xs9Rr6HfE8JjLyQCdre8baG8jz99pqG2mmEhWrUQGywXrMYw",
  "key23": "3k4ydvhxP5ECToeqGYJVk8PwT16hoY4uBqqZg9fT2K18C7uQB5U8qR2YzEz3k66uVZgo1oxcnEdqpgHbkbQ4aQXP",
  "key24": "2erxKwJaik2icDRxGSve5Tm6Ew7yJGrWShLpmay5XTEEabtg3fP2EGQUsezKbdJaD8NsM82wnyyCmZ3KtL7zZTfi",
  "key25": "2A2JgSVLZiUP7LNjNwmrzAMLXjgGDjcbzqNTnCjj2973kCvFXJBYPMxDZtuCrPvfpjH9cifzeKNyAL8QzPURuwvn",
  "key26": "4XNjeLK3U2iVjGVgrbGRCB2vwBLnUweSQ5m8CboTR2Vb5uo36DAP8rNFN28Qe1BEqpGG5wrX4k3GeKMGZiCZKCdC",
  "key27": "4KqjgZYA27aabmfTyfWmM1R4WndLQHbR8zQZcbUShp8SoKfsTtuzierx8Ki7DhZGZsveJtVdtgZRb53AYrJxBtYH",
  "key28": "2m4ZShbuT3DyUhTYV4H5x3MkiJiLutfCn57npG3o6skfwcL4RfKfVsigwpovTsCJrTmAwzRPQxgLeKTSZ1Q35Aym",
  "key29": "2oGzvbtqiV7N7ErL3pdQuiFUDv4CM2Tak8r1b1tjEHZiyc4rkFVTWAafB62iiCNpndGjfHayJNYbbrkTB1EnQxG9",
  "key30": "38iAGo2ZesrnTCqVVajsopQZ6zznjgdz5bFaeR8Gwjb7xF8GZ9EBEkxmUsYWzqyrDsHNE5z1c4dswhRhqAjTnqHK",
  "key31": "2LdRmrnvg2EecGpUBjJS9sVTiNXDo5Do2ZakEJjaHzVeKuwgn7SUdF4qeWsGtQBU6mKBebvnk3vrbM2tUuRVUbnU",
  "key32": "5x6G2rNUXte1XtzbQHUfEW6pWRnj7ysV1P1jzMWQ9bkpV43aeAe6KD74xvzkKScqL1kcSJK2Hu7X4BKhvfGKRAib",
  "key33": "3tUDBtcvhpEG3UQQ2nfKn6p6YPGc78DZQc1C7PCfWeE2zMGEiL5nD6bfGxKhfFyC8ZXBhssHKzPiD9ouUdh1sACk",
  "key34": "3KYAx5U9c6NLgeN8RPhHg5u2ub2nnsfWCn9Y5WUw7n3JJRX4PQx8K5jwkRgEAFUoVAPjvBkA23bMdzaufDDVkwJq",
  "key35": "2fDnwJT2bXfw1cxB4EuT3vVsc8NnFE1DP6nBHgGQ47nGcdGfXZaLj5wRxdBcnvqUvREcufNWKHgWnMYvPMrZwrt6",
  "key36": "5F4JBxZvU8N2MLGzj71eAAdxyzm7UbnGjHsebqezUSoyUEHm5cMV2Aqa3gFMcbRMvsxnTWvuZZjtfTBjogJekHS6",
  "key37": "3MahfMz9r6jE1XkmdiJuJobnrEWkRA4c3HYPH9mLtGMMjXuFFm1ZfG3E3SHywHUck5QkDbVzZ5jSTdUfpb9zZr9n",
  "key38": "3KzvJQKKiffXxwzcNqXa1sju34WF1TNVf5BdYjS4FUVj1ysKgxXSsn1zYYDZya6mSQ5NNciBvYZhTWuMFwZ8oJDT",
  "key39": "3MgBtmJQownutM2ZyvZhazx3PHFCtM2pVFhCZnLfkHm6F7tkzVv78YosSHADgR1gTNZb7RfNbN6LJcS3tXCWEZKf",
  "key40": "6QKLPMyDZsYkdtUx2itXX461neKVKiTT4f7ejfKZosJM3q73uoqkTHgjRtTUCHnLSniZd3RnjjoJVogQnvyeM8a",
  "key41": "3q3PSsBLHCtvnWcsrNcqukNusihdCuTSkMULh1r3B1wLWruS78dKF9f9w4rwXeeqAeUSxhkHbhGVJQ32KKgCMeE2",
  "key42": "V1ezMQ8A4bvY4z46cG8rrpnKsthF9MhGfu8QzxFYL23ZAfwSut5QbLXMnpZRgE98DPD4QjqAUoNVyVUFL5jN8cC",
  "key43": "5hZ4mkaYL2wEwJNK7HGQiboG5SMcWMbCJyde7P22yGTwVRXGQB417uKZWdA2343UYWSyvWA7LnDEMsMGi5FuQxef",
  "key44": "2kK7CMTrwjm9MQpHrgC1SDizNzbky79MWyKrFPxJACPqp235Jijj6d4ua7BB7aJegz86X76pZRhq3hZ9dK6pborZ",
  "key45": "5s17mZB7JpmTpjXvA63est5B5HBbg6Hk1PQXoDM2ct6jK8H8RsXdxXfXCBH7iZUu3hoQJnoVo2qdnFXhdHUpLNV",
  "key46": "2DMzqxmrj1cDXMozQJo2gpBQQhsFcceguTRArjXtCu2HvwZ9nJin49sSBiyoZvFepsnhYLMwnwYPU5vXBU5vRQnj",
  "key47": "5JFSv5WzuDeJY132tkRhWanRgnAM6Go7AuSJe6QRVkmPJxU4283HJ2ta4GGC94sgJpM4RLzLfEGSU9kuQ4Cj3obG"
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
