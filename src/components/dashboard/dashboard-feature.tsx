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
    "2r8b51W1jSnDjwzEj9xpRjnPJaBAfqNZv53wiqpGnSnZ5bNqxHqb1Dv26QjMyKK2WwU9FU69pYkwmiu1vWhMbpFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jQ4Q9rDHwgcHMv7DLuCrfZrZUdg4HhSk2YPVSfh4xkQw77v1fytfX39CbD7Zq6YmxaK1wNaZzz6YabgtajTfZCg",
  "key1": "4ct9h76dQCpkbXdUcbCUvidc2Bk4LpmEtw5w5rZeEb5zZpJhPMjYnsMbXXDwP4e8EsecDgbjsphR7gZUMttT3yCd",
  "key2": "5zWNhYHkA2iyHbKDyxw4j6izrk44gqfH1jB56EJ6SqUbCQkBdTdGSbtEsDW9HzoZUoCCzybhGgwxKbdkxTQamdNf",
  "key3": "4Bh8xDcWPiP7iAFGQWSZb9xJN4j212RMQqiraJpQJKwyzXbTrE7HmjrRswjts4VPe6XUcDeHHcpwGYLXfYNdawxi",
  "key4": "4hSK99n9uaxb9MDN3PJfmuW1QjtVPe2Z2LCQdwA7UG1HbU5ALrxd3HxoY3AYGYN92qQ4By3ACavXtByWCoPUGSqt",
  "key5": "2ymBBXuMZW3YyesytTd4sjGb8WVW8A9ENDSZkAPMZCwcnDuML1TPRntkch479ynGgXUyU3R7aH2DePoFqEdnFZAK",
  "key6": "nfP44oDKd7zZAbKsgH6VvGeBVXS2NSSy49g884rbCujMTBFwGoPMfccBBTLUcn7oTaMoghXN9QU56jzhJxj8TA5",
  "key7": "2M9BoYPaAcrYizBYmfeSRmr4eK4fm9Uh2K9oGuTzNyoFLQBaDNbyo66oJP72r9LcKfY85r1WB7gc9C89De1Zfbur",
  "key8": "5XhX3nwJhwXffb3CcN539LPPpdjmpuhrR2y2eAezzyHH77ptEUVZiHaWYRCTVbNSyCGQnukw85ooxPCsQ7gYig8T",
  "key9": "3KgMP6mYYnbX6TYycDKXLQFpWLobM8BvBmHi8kKjcriP4S6SQ2CQLCrAaq8j34g8A6TWD5aYeMWi8f56DQdPX1qP",
  "key10": "3MHxDdbNKs7rmezqih2HaEHREEjPWkbQadcRFJdvcJ4mAL8U2eCn4Mayb4TERe5sNutbcsH2vuKdhFB1VCxp6i9Z",
  "key11": "5nwgVk8X3YAgd5ygzpHVyUBUwhf89MQRrFha4WLYqob5a1fMx2uCRGAkNU65m8B7LAHD87SCqwZ16HZd48rQGzbJ",
  "key12": "4Sw6ZUEiGja4y7aWqFrsfpAW9TjGCdwUjLwRUH8GDRQCbbiDkMjRJm576nKMdNsHZVsMASBn6GpM5EFrj9KKe6uD",
  "key13": "4EUEpApefqhNpSY9REQakFuuc2m5hs3B1XQMy66mGszDwu2Y4Rzg6K89TmL9CiNQQQTq9xr5ZqkNfyyeSqtwFPF4",
  "key14": "Zhx4Et7c7qc8FmrB8PcayfoZSi8PaUAip6abaqVH7qRQRKXqNMCykXLdymU3gGKFhpKbzANYDJcKoDPwa1X2GZy",
  "key15": "2feh11q9sh2haPb3XmZaTJs15R8MrSTTeenvjuYreokfYNKpVu99A2wYhdnvSe98omLjSsjCL1fcRf2ycrscaAiS",
  "key16": "nF856i7asvAPMuodgVAYQjzddrrxKtt7haFqzLsmTKdstoSrQmuXNnL4g7MaZfUgjXuwYy9b9LgELXYBQfkbc7n",
  "key17": "27S5gzEE49PbsJ5erGwmw5LihWccsWRjHsC5Fue25zV2mz8xJEDsUdCLy45PZhgzZoAzMaw7tDzSBmniC5UVM11S",
  "key18": "3ruqwaBA1o4Hnp3DWXc1Yajz7kaKKwsKx6xhFitoPrU2vmuC9EKiBzggoHf3QR7m6fgbTZ8JY3ENbP48DN7QwHFu",
  "key19": "4TsKmGKxKTbYLr7CHGzdGKfMtUBuW8c4hXZNn3XkLmAiQmdHpiVWqHhUnQnREwpgwTe7tbvBvTP7K5SbeqRCmVs",
  "key20": "vxQiELWU3NMoxb2oxo242fJUVAAvyXAsW1aP6ZDgMhPTmftkYDP1pgN5mcro7ek1j3bNSMqFoLVtjjhnrvvLQvK",
  "key21": "5ig89jAYJkcKTJiVpLacxLTb6GxkJiQ2ShcqKgbGAukPWWsduqdesURZNoujDi21CDC6opkaz7YpqTEoKma7cnLB",
  "key22": "4yLann67vzkuHYZs2QZRLxfares6KFt1PrHWfnVuD8x1V4GyWLoCqD8Ewr3RSuznTwjVegyZRLXkDdvfQTsn6tVa",
  "key23": "3YudFDCrHSErMULZXp9SNHwpvMUUpyCCDDn36bPV21X8Lbb6Td46tYzUGt35L2oAQNiQjZ7kYvdba3CSZSotUHq2",
  "key24": "t5L7C7t8xqdDv4p5WWGPWkVBsUg37kpa4TFqLJFfTAC12e38sVwFsANDM5fK8t6ZQshVjXokmwQr9z77uEYbnTt",
  "key25": "wfzmwbDm5s5EvAU8Yxxt2fiUhL29GNTiufqq9RoZrgrSDaQenxFQs9WXjqW85Rr7KUtXcxYYJ9VC122oRs7K43s",
  "key26": "5tGzUHX2FxD2MQUkC4YddApaidkUpeD2FLRpm3rbwLAFkFTkHiYZdVWB85Pk2jPFHWAM2sPD3U39Ps5KLDWh87Jt",
  "key27": "5pW3rHFhnypEBsDxU1ZVLhY5q8bHLRXMc95xghD4PL6uTzkCF3ujie5nwgAKuRDWQHsiRhKCsdMjpEJ3faptHReb",
  "key28": "4SfmJUaPr6RtRXDtxcwKJemFCShbrmffqmynSTbbyMKom4UVvBBDU1x4AEkkuQYv8iF6srH681j7PyGMvfLjHNVo",
  "key29": "5Ddjmb5YrtEofzbXrxxG8DVKbKmozVknyFQ1nNAygfvFqmmNUVLnAhmFVRA2tF65KVJ28Bxhgt9DZQmCxiDKWmXt",
  "key30": "4bcFy5BX3LVNBmm7tAau27iAALTaMpRPKqp5R3HRFBJRxK6ju3ARshdGjfg6KfH7DDqd2tFZfutrx8mCi2FdYNvx",
  "key31": "3qxwr82AbABRyg4jkmFH2trJK3gtnMmQRC325usMYGZfhgW5rNTq5nBN77dPkEqPPUFHYAYGCHHTKApXyvN1Q1Nw",
  "key32": "gtM3aBStQeL6CZD4Kq1dnpRNUrKmLvmLn4V55iAruYE1wMS9saRrLrhjQsdv6aQ6ah5ZTckYADv9wiX4GDMBFUL",
  "key33": "5SmDvggUuRb9RkFB14xWxN4npdifcogiazfe5CeuG9VkAyLj9DRicoJ3thektXg4mjiCmT7j5KeBWXzAn2RwY3W4",
  "key34": "4xWwerNjGAse2bqvU7ihqevLiZ8AeoonJzq3BsQTN62wWmxQks7mSuJHLuvcct3bdSyabiWjVAfjZoQXGHF9bQQz",
  "key35": "5ftkuAJCZFEu1rEWGCokRLWYyitCM9AesVCuAdgrG3CEiAHEzwL22z5qCgWd9c6oHDkS87mRRgkmLB7tZB8xKrdA",
  "key36": "DqhPFXqHQuXpMLRBYmfpQB8PvH2uF8vec5vubbYAuGEFVuiokPeLHgqSkFrLqQ6UTWUJsFprquNdZSVrGWCcw5r",
  "key37": "4NzDt4ybUN62YFvXxvCX2BNhaLbpzNSbbq4eQ1PvMWisV5eAYNkBwpiDrAteUhpPwQcWAvmtcmEbb2i2bP4FToR1",
  "key38": "5kX9CgvRnioWoK4ZgmhaqsD6qCi7nKReMBYLsNCcJk2aRr26fibPYJeLftUeffUooz8kvxeD2pruJxc6tsY9w6k6",
  "key39": "2AwoKQ9wSoxGan9rcRXQVt3n4WpPEixsoinSe9zPVUwET7qa8ceW438ZifX71oUMcCh2bkbE2nrTgrrMfRiX3D5W",
  "key40": "5XLZm1yKpCX2hwq37khYi5i2hVuY7ZksbkLmkqTXJ6x7qUfqkoCLD1aH8aeDCbKSqPdQERXrPE54Z5YqDixtjTDe",
  "key41": "QVGEasRZcixCgCpRoHGLhan4FjRivZMtuoTgmL1f4iU4son45BwMq6c4p8w5Ucs7tw89gzcGhNxCt4vQpsGKCKs",
  "key42": "E7SVcB8SzFTP7Jhi7LdJnmnAnMmH2bxcWy6cGXbP68VMMrw5UBFsVBE4CYLj4x727KkeTNtcGrc1uFeFSLxSJbm",
  "key43": "22XureNjjujwtCR2hwkPKXqdymrUizPxcGPYyre2QuomTF6S1zHz1kg4G5ecH1LCPJ1VjZdkfuo8XhWncsP7va6n",
  "key44": "5ZHHemsVXdY5BXgt9nySgYsVjyPnrujxuwHVakNezjVkVDsXomAGANV8Px3gJJFF1QtRLu4UygiPmo7kry4r623d",
  "key45": "3KVR2Fc6jdehyFhAp9VmHaGMnWCCQLZzWBDsWnDBTfVDVsUczi4pR5SEa694aATPqHthNr2jLzXfKFWTaLeMQ8G",
  "key46": "3E8DbNNet9KpzWTSXG958cAZpLr9LFgbZRVFYeGV83aiyVxrhaKwm8nv3qt5RRPempMnHA97e6i6Bgs6pgdnCPCg"
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
