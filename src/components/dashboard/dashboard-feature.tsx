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
    "3jEJ5EDco3KUNzYfoKEjpcPtJ2Y7ertXbszs1M1ZndAvPzPLxXfW3KT6HaaS6qkShvbpGdRHHRr7k1LgP5sMhNUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qAC59B4KNF6U5n9LLUBJztG9NDAV3zq5QhL5wBsoqTymS61c2pR4sbxv1sFSSjoQMcSY4DdDHXceHHhkYehGMj7",
  "key1": "3dxQZ5TXQnsJLFtgXtvsEr65YC68dTEUNtPtxj5HcX2MpAmG1ErUxywZsszfpAuKzBh4o4xKtQDgnY7aikUrSP4E",
  "key2": "4WXw2Vaqy3x413YwwAqAvb6A9p8xeF2d32sb4ZuizfkBAJWpZcDJoWFaWYRGcpK36x6hTPwxbHB2Qfjs4B1GQJts",
  "key3": "4uxLnWpPyk3ZbdP196f8KLEWZL2evcS2kH3B25AHDCe7k6MfSCm3Jm9sbt4DdJcmyrujx2h1FQwkjb2Goh9xkNNk",
  "key4": "JXd4esGvNGhJMhMnpVcumExbgzLsNcYCyj2VYQNCCFxGffigaP8NTnYJFmA1wRZeQSt1XHjVWZ1iigFqCAEEKGm",
  "key5": "21wrzbX8ERyKFyQthBjcKSctLidZQ714jVQC7xuiQ78F3qYMBJWD6JMcmKeE1XCXFTd63GASmGqgyuhqqtviPAed",
  "key6": "RhSLmSuxZoShTFZ8UNU1b5RPb56VWp6ECwoNjDEyVTVdwZHF9V86Xw3zXQdsAPKVwvYyXNEZbqoDKWKnLrQD16a",
  "key7": "FYRQnCDLTDZfLk4ndZXnoAT467btvhTpuaMHqFbZUUWHVYM8SWxqCpyg8QTP5ZpqzgGbqtzrSwuikqAjenSAQRR",
  "key8": "2ZW7k2MHmVcre7R3JkU3umdk8QAWD8Bgb3enVU6xkejeTKCL253uxoGruKxKZcMWYGzEmPCDt9G1xgz1jonPZWaw",
  "key9": "VCrkqNxnvHispCkWU9xf8irvsNrXoHRzkZNJvK7t4qVKr96saUWXY4fV38HnJurNMznFcQxRZdc64G3QGeRy4wP",
  "key10": "3qrfuVnpohfsezgk6WwyAdXQHqURu5t9ymRN3nyXouRhAm6s1pK5cJGAeGRbXQfH8WdJCRdceEEqgqCqUMJvbQBP",
  "key11": "5bX7Xp2DwEVDJBq3GHD6v3j7NSjuNnxFq2YXQtKimzZAc6ZeLexDWMZGhhb1q3wMNkNSaFe9ThvwcLNW7VebV1sP",
  "key12": "CZFhprSeSpf31GzVioBhYmuSXYmTD6HS91AiPCYEk29KmFWWuRLGg3GtHbYpcSyLUeUDJuVcW3w3h4heVa9kCV6",
  "key13": "4qfGvoAPvyPDr3kNAHP8VBjPE1RjmUHPGo1Zyr9GvYnRHK3eAQzn2d1uUZfk8S9D5vCcWpa4mHgb4w8NWMyZXpsN",
  "key14": "3hszjfPHkyaYvRjJuFM4yws7bWTsscF85REZ9ahuz3Gkcaa85nTFK7yt2Cx8jb7yryknnfm53QeHbX92M6QxjKRZ",
  "key15": "5tUwSvkntHEcucu5QorN2cs7L27a2yyx78w7GfQaFbtuKU1meVn34XyXzzWWvR8sefug6cA8uXH2nNcdUxEZ4BTf",
  "key16": "FpQAgrL1EoiacdvFsxKQNLwReuzVWqvLQCmEYvxJcagjcsYefHkpiR25yFWQwyNBkgQ3a4Fx38eUwkFgqBd6XJ6",
  "key17": "5jnG4R3MPGTT2f7LkCvsKEz3uxgJcR7JDrtgwB9iZdDpdtzCvNPWECBdxddNXKVuc3wJGYJeFoB4dMM3spHtKe7w",
  "key18": "4hv7DbqTDQeRWRmZDj6hEP9zPQKkbVSr7bzAMVmVHnHEsWYphf6pKpppm895Vdq5tqJ8QFuEER8DNafPm2u7yQiH",
  "key19": "2gd4MfADi1eJYptgJv4nkTog2kaSLr5S8E9k67ED86H8KoPvK8kENLUQzxzv3E4hy5B8YFpTw11mdwhg6nkuzAL5",
  "key20": "26oifyx6Moh6dgTBLv494G6LtB6Kzg1ExtoRLfWWpWHP3AK8UBHwRRwKtBm3x8SdVKjxdF4ckccRqxLEEkX7eP8P",
  "key21": "2qNazxZ64skZBnNG213x6CTkoquxj7dpqsjEGo8pYEFBTgzv7BRq7JusiufxasQpDACeST9JbuBHptjoJEirS425",
  "key22": "5et8xkS7XyhJJWWHzVTwzgQRjrPVLLih2DZ4iDKhrNT4Ty2zepjtGe29VLBaMhV1J72G8pvUVbVhqodo3NLmm6VZ",
  "key23": "3b7ousi4EaQx3RTLczkkJ7xMRvQivsig7jDWC2dMXpnK6hHtTJS21tvG5yxsyLYM324y6x9B2u6vxGgHovDNdEQB",
  "key24": "4fPemugsWhEfzWaDCb5fbU8bvFvM9QMTb9gHdvDkmMscQtrS4N9b2JCkGyDzCXE71nmit6Bf2PDLwUtVgRhkDAWs",
  "key25": "4ft8566GpQYhuhSnsaV5uH7RTGQ9mj8NTp6QR5B8X3Gs6JkVV7x5oDzD6ETU27rVGssA6TcPEz2vE6EgPVCmSydB",
  "key26": "2TT44rECfoBb9vHk4EYoDC3aPdBPxQ5Zw2eAajuB369tVehfZpDAkNQfDbmpsXyAawjC7fMBtxMo8mMABekEW2vg",
  "key27": "Qdtx2hEmUjgbjVMKcWZfVP78L74LY5FoBbjfmEvBZ3MUKmmi3Yk6ZMR559cEowfw13KUKHD1xaFFFo9z5CdWJQQ",
  "key28": "4suPctodksXs9Q1w7Yp4jdxrG6UTaPCkN9HxLgTxyLgjjf4f4WEwfKZcJU939Djn2XVc88m3Lqub9QDXg3dLA7d1",
  "key29": "ApE9w1BSNYH4vBu6UHDquQ7sn3XvPWqkKzTCSkAL3ZTPSrEYhGAvGrvHeoMKzgs9bLJsbhTMahp2mngDJwbbLnk",
  "key30": "5Q7EGNNBUk5k8zYx7xo4ZqXsYFRhQ7C13Wg3u2N9wP2Z88n9eYLzjQoWLJEQGa5DSUEeeRRPkUk8XK8d13JUPW9H",
  "key31": "KrtRzvNKEY5T7hXGj26bH7qQEm8woze48r6zpQm8PqBpmJCMWRb9ehRJhGzeiAaLwTALREQy6bfKkFWCFf6aJxR",
  "key32": "kdDq6Sbxuz4xtpfXvJEjx1gaEZ9QNUhKFTytEMuo3Ype14PduXt5fKSunEsYyfosnEXS5YeEAeAUTxTuz4b4y2N",
  "key33": "4eQsikRAJD2HqWqadJymBEMQadEWNGeyY4Lj8Lq8CdZagSayX9Stct77MGQyQvH477EmgXmeYX8vuLF5v166psLN",
  "key34": "4RXK4EyQGvGMscYnxsoVUdKXoBvYNVouNmFyGkicsKnEMV72DopAzFXMFc44JC96h6cYE7UCgzwsrWTzcuSeWKYW",
  "key35": "yc8UDhDSqbtGGKMBFiapNZxBb6RbZNAfa3rzb3UsUTZWhbjKiTwtGXVFGvY3UFhcwNG4eNaRqgX4ea2T5pcopE7",
  "key36": "3E2XitgeXWnrX2thWDGzA4dqgGsbwpjE9f5shqGuyk8uWtBww3NqM2WJc9t2PcFvbUBWvHLuJp75ibQjyHg7tP7s",
  "key37": "2wFRLyuWrtum9JVWZK9V1Zzu4YLHLdKi6vDEPSWkeKCydycGyhACbHUrRKYcBg3fb1aReT4Dx9xqQw4qmuJhDfm1",
  "key38": "4ePZc57BKgvwFA6CzkwmtgT1joPLwVMz1xNJ51XSKcUdFhnLfWD17RHNrjHRFfwZp4NvFvkzsVLBCSSiLJTRu6b2",
  "key39": "tx2uevt6ZSUWtUGkdvuVnVJrWbSJHLdzKVDbG8CouJ2HJCbwqmh9ev9yxWTsVtzCafPVD32Q2NzaQJjBRqYdJ8t",
  "key40": "4QN1ipjVKFxU8yLbjyZXnpkGfH12JHRPJhmH4cYFtJFjBpPuWUKw4gPSa2qEueZuqrpAGv9nKFScmSD3GsYqtDiF",
  "key41": "XsJ77QR2buVX98HoKSQjR6wp6Xa4xJBfH8QGqqqKoFkWHSYf1pksrZHYrpwy4CA7i97Cdz2obofdugoaaySxq6x",
  "key42": "5BKxcVVsheBGNyU5ffykprkRRHCmZQjL7nh1RUyDeUvDpHQ2LzcEJVTLV1TZi1b671bJjAoBEw9R9MPA78quREEj",
  "key43": "26fzgD2x9Yw32gmWcAgn9W8iNQxiYUzsXnJGHQmHQWfP5mXcSHhNG3AbRhPbtX87LBNrc9Vh6t2DzyFSDULJkkCW",
  "key44": "4DVAozgEsHEn2QhKADPPLbUVkt86UZuM1bwM3jQ1g7mUHQ9f5ZgXFXHofAoJ4wpdsrNWraqmcxtixFeqpBKMfRfK"
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
