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
    "5AYy3vUmHMphUYXgDonXYkJGkh1J5gLZdFQAERvwXjT8QWhFTpzFM57qpfkCyn3dRd1Pep8moqVL89TtVtmU3imM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SwS3vNbbxwFxt9rNQGMWGRXB4UBEHTns2n7eqyLH6SL2xoq4EnkCiQwp4sSkUtiXHZo9yqeGSHjW4rb1eq45WZA",
  "key1": "36RuTbL11HPpnC7NDvHzdNWGjckkgH1sMMMUYkZGgX8GpGvYVdPFr4SG5y6d67tdo3PZkUkYz1UvGsYwyMJnx9LX",
  "key2": "4kwvXv7mUbp8a6YYKN1sP6zGT3pgtSgn4bPGuLK761y31bqyesypkE9KihKi5amXCaTrWsQnBuzQyrZ5PgiJLCMb",
  "key3": "28zMyCKdTtdk34Jsqut85iidMyN4HEtGpe8uge9mAAqGypo8h8XRCHLUKqwdS57s6fJFS8zJTi45D95AuetzoP7x",
  "key4": "6ZSHBpVnz3jaVohugDmLYB4a9zhzznUETeFTCMXX1ZJeRb5URLTuF4n7fMu65gVqpuSZtojAoCcCcaeZpRTvWmk",
  "key5": "3U3w28W7nksaWsKrECDXabcVq3G95E5bjRjVuUX5L4J8jMKqJCYQmjioH6qJz4yLJpM8w2km3UgdqacFtFyPjVGG",
  "key6": "4wUydLJXAEo8s4PwnMYNLzBiVRePjobHdETapG498TPPqzZkBmh38UJGFeCMLWWqfwgs4GwovaVsHMw7Gk9ie2HB",
  "key7": "356XMWkbSAFkNHuNNoizvB2DDsRtULE7cucZDEoxp94RCxC2j2GApoPZLKdUC7Z3RdgcB3v8zp55iJYatpC4fDm1",
  "key8": "5xymDp35HU3XeuMy49ZjRPckhAdehQnFK8GWVRAL5Tp18km6f7z1HbgzLj4PutT8iGAKCcAovDZRYtVWekuzEVV",
  "key9": "199bMSFMCEefgtuBFtrQKhwyRXLc9nsq7yS7YNgkCdGDGCC3YzAgQUaVEDFBCdJD1k7PZf9h3y2RdFZseKFETtJ",
  "key10": "2q38TiFuU1NnnZJyJJk7C4JLmMsHhgNAf91kfUgjXANWPwFpkXmQdvSyRHJZ1tNeegnsABAWAxZyr9cQi8ZCaD2",
  "key11": "nMYNYGbSA68JymNWYoWQn7SD2eopMfYuYLYYvfSjatj8t3RzpDuBPMf5e47KbkKN5xDLyqQ6mrEyCxD5JPsra5d",
  "key12": "52iu8SipnuqKCEvRamojcBjw2LQjL57NFozrfio2gMokj2wnVpT5VGHNvzJaqtmxSCkjnJTNcD56QgYGoy7zwfMn",
  "key13": "4GSUnmHgq9FAsXCRb8uPC21LFzDDiBn9wxU367kbrmZFQHE1v4ziwKaW7YGTJUcpx7TxGmbndx3osGiV3WwR93cc",
  "key14": "24ZKYaQAEQTPg19qrS3kc6zxkeXQBaChoqWY6Y8beJXTiiiYJPvFkajcpCrXbDp42Ctx9YcYNeGJJpr6XkSscoDD",
  "key15": "4i9DDDRd7xJ2zBTURpyScojHVrJFVq4W3ZHGGpTjvxhquBzrJPbrgffMnovG6E2UrmjHNA8eqVPnHjUNLB2nPQDF",
  "key16": "paputitibmpUgBv4nY7Av7GgqeYAEeU3rhWohox5KkC36QFF1pUhUtZumAyQwDh9cLUboEHvpx4TXbPGtDJkzNp",
  "key17": "5Wa6NxYiLUdAnsnC3fjyKBYfoMourDuZWPFpiRz21wk2vvBu5qEVgvirLdXPHxUY9kzU8CuYH8eMeKNkSewrfAA5",
  "key18": "BY4EWmmhKV6X11F6xxaogemKDbxoV5zcpzWVtXbT7ZFSEvXLMxvjdrF9RJY1iTjVUyt6hHJhEHodYpA1W1BhBdy",
  "key19": "5X2ctvU3NHmz5Jjuu9A1tnNR6cYSFYeHMGjajJvX2U9FL3htaSopZM1uF2imk3KsAUSQX2Z3WD6UTGUekKy8xSuo",
  "key20": "28nxJbzas8pe4hKsDPnnPAGfUkQU2y3vJPLLXxtdXVRYtichpsbfyzVnHx4ZZ3Vq5YXTWESihoup52ULLcU7kbN8",
  "key21": "5ZNYyDmN5f87URy2tHa43CUQAFoFuPSo5HvjER5kxUEtYSxe8BV5P2iR95Ck4TeVhtZUMBsKwBV6fuvKDMNjEieH",
  "key22": "51hiAZ7ozZTepvs8FjkpWRtpfowPZQcC69koGFVZP27fAZe6ifxML7JxfpyAVfz1BPbgFCAHZVj7F3wNmdtKgcjj",
  "key23": "BG3zioED8a8Yz3fx97uHkACiXZHNBSVzgnM8fTsHngfvpnRT8q4hui6uTbN5cPFbTF77wwUo8qE6GNTsYEDdVnC",
  "key24": "2MQgSu2CknA33g1thUban8HHP3uTGN96pgKSd33DMYxPjkjeCW3SEhNBbJ1Jm1oai9hCc1ehNn92KG6Kfi9U5dMG",
  "key25": "5YipUUK5xQFGstPNzK9nV3M8PZexGGAiptwxY6ULMNbiMPCPB6z434A2i3K5Z8g7cAAZqXTxH1Gfo3VgzTGCNaDc",
  "key26": "4ZSgFoY2SN3bNXuyoAPsKxyeERzTWF7De5A9HEJ9UDMj9d54u7CyG6cSxwWJa8SEMTmm8yggJemgvAAUTNEzvrWg",
  "key27": "4bsuuW1sALyWXkocRh9Qo1BxSHNBwetVKUDRnjMHmYHbPNHZX6NtWA9nPRbKyMA24Ka33xF8DWETehpW6ieiw1QG",
  "key28": "56yTqjakEvExxUFqxg6AHkt4oJqevJAkZ1S3CTcsZ3Q5eseAhsoHAkthMmXSHqLrTuhRzFkGoinM7EqngPU1mykD",
  "key29": "roReY5VgPhDX99WmgEBx6xMoG4oXwtiYxW7D8HmMfJQRj9x3HZQa4M2Fx7FV4huGqZrnMt8JyWbuiJu3uzsZpcG",
  "key30": "2fuHM2E1u72BqTfcYUkCMbTJ92Q7ugYoyFccooZzc45Ev9NZyoZ8drqBWZs9C7L6H73dGfdchQQi5fHNYfvU4sJE",
  "key31": "FSuxu4pbj9yvcAkYDNvL1ZA8i3XiW8MJJZQjfU2UcRvkmJXwgbfeUiCgLSknnYygkC2opsCDVjEgN6gvvqg17eZ",
  "key32": "G5usojw72CJ53e9FHykz9k8T2KH5yxVVZGoFnyj7qjRHCFFUwxU1J1ebuV39HPpWKwEsqKRTetBTYx43hCDMR9T",
  "key33": "kFprBZ5QYkLT7ABw1tcdBNC85W1Gz9o8Hz6dwsHMqhfHEYoqvCYTYsTPQFk5VG11hKh6xRUuGMGHismyJ4PmjAH",
  "key34": "3L1dHZpwKdRDwPPBsLhacEQbhn3vdBtuychYq8bfkZkUSJR5ge4XpBy8C2msg5WvBkxMreUMCxQbwnzy4CQHeodi",
  "key35": "5iuAovekpSKm1M3sKnmLNuNZoDJMsfWzv1zFdyKDtcd8am5Q4Vb33curGJu3EYQU4wNFbygNu15Mcs7wJK5cxc2N",
  "key36": "jhuznyHiT8rTdspDQEb4vg5Bnr5BRVEkrSj83Y4R8EQrXrgW8oyE5D8NC4u6hL64KfQv9gS6FJpeGz6cH8E2iwk",
  "key37": "3PVvMu5Jm8KxZUSg6pq67rUPxjHqQKhatfhGos5tf4DhWEecKYTh8VCf1UM33D9UEDFUSzFsWhPpYSpfyuqrYgU8",
  "key38": "5BPWm2gcs1jGFekkQF9jacQS7WeJomFSZyqUsLZ4rXukwfNCjRX1ryUfVhB8YyotCiYNwNyAunPsjPh8jkCYQiuW",
  "key39": "368ErNbfPxSmhZbmL7ZgsmeaLBypXQgb3ZXf3ZB2DpjaR2qToEqaxcGcuM9fUM3SjjcXBEFcJztyNcgNveFpER7z",
  "key40": "3EDMTyqbiCaM1Pcwy7RpFDQfNK8psRiJd8TeygXiPMoqszSNLWEd5dR1vSkun5bpWtrTJF8kkDmiD1YYtGm6XGrt"
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
