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
    "3GYzabxBZVsReHXKCnk7yFdbefUASDi7MiSKvxd77831iBRDr2ufx5h1akPeVmyrUcC6XJLRoHf36GpmnDhcAWY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gr5X8ucPWjb9a3HczwHsXiM8BeiXAP7NCrNhXeLGNBvwoeHSTdzHrLBUFP6Az2EnzxX8qT5PSp4YHj5VxENj9TJ",
  "key1": "3AvaT9bCtrQN72YnvS5LvGSWT6e9rL5mxU7SYBcoNc7JYoXBTATF3EGrFHUExKqJQNvbRtHjaiStU5aabtpYzZA1",
  "key2": "4XxMJuwi22ZDYDQH29j9caKQDSeNSydnRKAvqXoeL9BQ4Q8XsNXfUhA8pgTWDpNGzk5DwBqZkFbWGBK6VN1y1oQG",
  "key3": "2tTX7VczpX2wBA3J9c3PRzX13G5LiqoEd3eY5cXTFs3LMMj9z9UaQHbB5LHz9UQJe5AyXKBRkhkTvd5cNWtzbvHq",
  "key4": "TwhjPtvfDVgF3n442PYPLWdRv5rqrSQcehiH6qwseDQ7tyWoTNgQJrooR98MwDEnJwgnLEwmVjHe6Q9NZAGXmr6",
  "key5": "4oUUtP1EbaEjHPSG5PdBSLUEZA2PytKuogC3FnGNrAQUhAUYMGKyFTEfwnpPMWinPNaiojUsXfnKXG7GUGsZnHUF",
  "key6": "2ZbNDPKrGMUZoz2ZnVcXFzsxiFuQ548gTj4csnr5m9A29y1eCcXMhc9kKLSvZNQL8TCp2pEGSts7dbchj6FWUARU",
  "key7": "59Nc5eK95Pw8WHAhN7ihWg2id3NDMams6uY2jcsewNnPvf8Uh3iv8rvtPN3L7ofgkcMRxyWWhXkyLXRMi4F9xriU",
  "key8": "4n7rTpQNPggqS5PxkK5cBCAvMRsQSFM68ji2W71nsyw9Jdz2Jqn6617hhKQ8rF3nqRU2qgskAqeHwFjgQWoYYwV9",
  "key9": "5WvhwT9FdmN5aEyQfAQb5aM9XDVd2XciXjCDXZv3kmgqSMs6xKUT7LEauJN8dvyWdHz9utG1bNr6pwn7nce3Qh4v",
  "key10": "1616ys2D32VqYQjQ9wNwgfG5Fgxv4agc3mNj1GqJ9YG9ourxc2SEWkpAShxGtqLpjV5FbbMkpqVeNQJpLgGE6B7",
  "key11": "5YnzRK5PnjPhQg9HCZGHr5VMTv7rFQzyiWQ8b8aE79o5wpSGXKacNCrByJdfiKKX64ojFkPBwcepBqMMEVjE3wnr",
  "key12": "2uDZNpFD1bh5YpE9RyzzbCsk3gUHM52NzLoCCz3rcgcFX3CazSt7TAwNVbyCYPz27XDrxuo4BdFyoPUEUoXsLnLb",
  "key13": "5eCW6ZxeaoXTR1ifZPJ7QVeEJfErNZcnB294ueVCaHs1XQCCXDSTNHNJK8vnEmAxuFj2cecM7ejPXJdiEX52Q8xQ",
  "key14": "25FSBzn4GBtLd5VyCybW45RtZotm8rETKYUfriyhaBWsqESjbhXmdxrqaXFbAKAxAisEGUJKT4znqfobs87MWhVN",
  "key15": "4C3viEB9f8tTsocJUuWsKQ9jPt6Ti2j8QvZ3g8vdbiYXJ3pxegad5kpHUJ6bAjD8AyihB1GCkSxm8aFnUBCYxgWj",
  "key16": "3RJ6X9zx7Xv1Wx3LVd377wXSysGiRLtMPt2eG8k9TFvkB27MwTgSYJAGVTr5HCREg6F2UqQZqQDeczvE7HBfbraS",
  "key17": "5ebmyU8FyQa8fjZxarP5q9FCofE33hYCdT4YnDCkcD9Um4QdmRuz1WuQXnnZXTayYNa3WnN4fBAYKRXJdkWE3msQ",
  "key18": "2jiLrLvCu94DELXgiSdnLTCDMLvWUShPLuydFaH7divTCSZoseW8ZNgjQU4KSWChxG75rrfUQoaoD3PDMQ4CVkmQ",
  "key19": "35HctpQkhDCreu46S9dVfm4Ecyg3FwjnhNb2ktRoavwB64guKvUPYb76gKU7tGMNMhKCEPVEzgbCpbwhDMpqZaND",
  "key20": "4HojYKdczmAJqY5fxmK1kQAG5rrCjPM9x4jmKmUoHfte5puHtQsbyAeVSXWRdRBida4gwRTGxzNZ1LfRirgoQCCr",
  "key21": "31Kiw5ZmUHXh5Nbvfj4HHoQVW1gZYJqa4WQqScWdjgvSmm4NTjD2oELA1yfzn1DeXsumLJkSmKWv45notaN214vM",
  "key22": "2jCD11VdHaodCtfMKxNhbKmczmf1noaSTzB6Cyonj6om3tjCSXxeb8cnJyECTQCmSvcqxXzt5FCJo5XFR2DrB899",
  "key23": "55wJEodYzmaLB9rN7NM6vSDxiPN5x9TcLqd9nCMF2vMmizAGtDyTcTKn6d8qFHixLJsewTDQjqiJXvMXPYzwAWKU",
  "key24": "3CJ5QSDRdYpFgAi3tgkoJ8vvndpG3KQCwqBkCKrdaPEHJsiJyrc4MA9qLzsu8a5BfCyecZtguDv5KGKAwqbbQpUi",
  "key25": "cGzPtcM7Vsfif5jw579WA18Z5e9zSeqoBsbEKjKpumByKFpZUGd4XWrX47GgLfJJjrhZjEzCUz56CkvZUcV4FAv",
  "key26": "3uXpv1ra4ovcpzLwFRTSqMLpUDHMXTA83iJqrS5oYa6sqntpFHrTSvkJdLtjmE23WcUEQJSe77wZ1mf8RuZKLn3H",
  "key27": "5mmnvS75kA4T4vfDJRftkVRocLLfhduuyUxWYdiCGTo1XU3DM8Hecaj44X7aS9aZdSmM4ws581qwXrvdMwjrJfJH",
  "key28": "4eeJvFYdwB9kEfXeARAQRXSKo2iK9kDvBbPmpsX8u6fNQqbq4fjXaJJYBKBsPdBkn5p5HomY7djLWX697pVSv3Tn",
  "key29": "5M8vU75J4JJuUpfQ8VqDmjtUFfKCJxxVc6uE4UkJYuKbzYdVhcPNY5XKusYkzpmGfGbmMxcW8rr5tx7AJKrx7mDi",
  "key30": "2kF6LQY8ejQwftRfkyrzxDvhQ9ZA8oNUr9LZytJCLx28WoKgwenn22pfv2KLC7fHnfs8LKzaN14Nmz4ERczWqGCr",
  "key31": "4EMTzjxoyydJjzhx1XRT7npQb7shi4iGugrUhYgWarqRuWBfxvhDM7TqncwSWnXxF3KmrQZYD2rKrGopfaSefRPJ",
  "key32": "3qodtkULXNehXnoU6rc3TwxZBK6eE7fWN5qp3YbNG4PABdsbJohUXjWK6XbKnyWZWwqctds5E4yDmpZ3u4PVnvG6",
  "key33": "2N9YNyzaHDJHiAowXjkDJVVTdypBF2ewmDuGfhxFffTjuSQPXiUWjd681khyQjckRBn1KbZjAidr52hewDZys4GC",
  "key34": "4yrZErb27UZX6moBrg38qVPBSCAwxWVEsqk8y2VDyvcX5E8FvQrMwTsbjXcpXwR7qTBtVRDYhmd8oFj4HxcFPGpV",
  "key35": "5zUpQtk68f9yaLx4JFKfTqRDeYR9Wnhy6byaKYx7xnUTaCDdnEofXuwCrkRdrCmYWcpU2wAc8WpcRSnTujXQZUyx",
  "key36": "2BT4C9cekgwyXB1sM5fZqqRou9xuMTPX8zDb97kprmf6gYmHG2AyNMNoJ5iFEs6q8LtfiG1S4PPqWahazcSkdJBx",
  "key37": "28JHejMF5Qk22GB3wrWabiHmxuBwNAuVo8drGL57e7K6WDWmyQP6EeV4mSsR43dSSsuAMSsLLAVd4XMLMkwuLbCt",
  "key38": "5HeHRsAgvTrbjKQ46LnN8ea1H8XgccLiUnBsRttFM9ibSqRWSPfQQEwN9ibZgspdvhs7pxgLEwV3o74xcRLrzj6L",
  "key39": "2Qc8eaBQ79b857WLkd2JHaMNXuJoD9yx4HvdjXyo42HSptZyPS55tkaFyxzTPwr3c3UfBhxANJs2zHU3s6CnoNhP",
  "key40": "4rLwDBFhJB9Qv1xb3SrZ5QvWoUdpZm1D5HoMgLXX5XrdvNsfc6xEekvLQzaN5BPQhW4tDxD25sZ8Xf1Csxw9xHvt",
  "key41": "5HKrm1zc7DbkF48s99B4PNNVV7edzFkoQM3pg7kYYyYrPv8YoY6c7T1UQ6TGs6fKxA4GH1Gkhpu6ezYr7huUx21X",
  "key42": "5pdC16Si2FGC687oqwTjMTWqKHVi1MQgNM3bR8upB1Z8MWkvFCet99EctsGPuTfRCGsdUVyrk96Lt6FBjQ9QyAuV",
  "key43": "2DmNJagknkuRyD73xuMrZuL4pHQMiPnGFFUCUYzg6769ZEr83eBjaCidhdx8Mj3toSuv68p19YT3R4qRRsmc6Fvb",
  "key44": "zkbgzjJqWFGEYsjQv2yeiYmnZW5thcARZ6bBPrvrias83yLp62camnQWJCoQdjJKUbQsqgP8cnHJN6yiHMiF5Ka",
  "key45": "5cF6GFmrzJdUijYGhBUdG6gtDUUQsV5CWv9knufRma1Q6C68ym87L2CdEhE5dLMGbrJSmvB34CCsNpgbdD2Wgzuo",
  "key46": "4tAMrhBVaxTHmtzmkcS5nBDb3jQgyRjWo61XRB6JLJrTsaW1iQYnWxXGC4iRm6ZBEFTZnkDDqednsxbvtb7WYEw8",
  "key47": "36d9BLTVGdf2ULhzwpjHGEZ9RyHHyihwtrXBukhphVs3RLsJbU5P8a2JjfiBzDMms85y8iN5Ei2dsov7sp1Xm2FA"
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
