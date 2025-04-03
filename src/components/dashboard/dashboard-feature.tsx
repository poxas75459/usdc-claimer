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
    "3zoir8naoc5Ry9RVJ4xWrNUMFGp2thZoQAh79FJuc2qfjUtUA8EoN8oFBng1Uftr1hxpCF1RPd5xD9NZP9wMJJ3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rQN6F1Uxka6anQjLuLsN1E43F3TLCFtr8QaCEipj7wy8bTRHAzR1TPUbVyjriVusMh2SznCrzYbc9kvyDzZdR9v",
  "key1": "2nFFAEKHf5gAwRr2JkzGgPNnTgjauz7H88rJJ5pwyRiU2Ro5RoLn8d2j1MEBQgWgnJiMzZUUMqUdTmRKgn3Mq3ok",
  "key2": "3Lnvh4kJEMFP3RSQr4mVZvETAkWi3VF21X1ZP9qFiB3DL4gj9xCiP5Ro4fxR4YhwGMz4ijQGqR37ATMp9Rbkbj6w",
  "key3": "4Nq9Lqk9Hydw6nhDLnA3zveNN12fj7K2AeZHDJHm44soiPjEa7f828mYRRxWPbdDz6gGgZHTLV3X9Fed1Hv48BDu",
  "key4": "4BNWqMKWESJpvD7YWgb5PG646LefUoC6a15DuJRDis8CuwT71YpvFpX6bPRG8Zt6o62wktoLcdjJDZGcZJPk9zZz",
  "key5": "2jZEMUVp7QA1GDAyBZmF3SZD1vtbx6weoHR36riH6ijgG518y7imPdwd22kFbjNpAznqpgUh6TU5ubmWmrVUkpsE",
  "key6": "2darwtion8AgNnyHP8ECnsCZHbCCNUURhvfgvkJtq8KDsCveJg297Ejc5u3b3FMmhckVrZ8PQwXiHkjvTsH4eVsT",
  "key7": "3td2fEwu1tpg9yP9kSowEdjaUuoMMjHDForjVXe4Ki4iacLZQ4uMZtUygc6g6kNnTbHdeVxSvvPTxKZLGL1GFWhz",
  "key8": "4pKczcXZMu6psYDgBLL8ZtnNdKwixmhTTYeJMCwsa5HtEbGqmsuR8gqdEPUFpfFyDbeXXEyNvXiCYcN9pX2Fp6Br",
  "key9": "fowbuF9EmefuVEXx5EHWsLJ3v1FELyH4UcCxx2QUWr6zvq9LSew27bhwVXMBoG89zptWTFiNTSrTg8f8DsurV6P",
  "key10": "4K9hLnisxeXpU1Voo1DmgukmuGDLnK81yYb8YpXC6CStD8qafcoa8qKQMB1eEYB55hubzCEhqi7gWH64eSvueUrL",
  "key11": "5ZaxMJW6Jb7ocHjRr9HKtGZ5RMH1CGAgu6NetW1h25djcra77eB2wAzXEYF5q1KGcjE3YhheWHkK8s5Q7aWvHoAV",
  "key12": "2imsAyTSDHQE3fFqEjDrCY3V2mipEiRCAzzp5yoHRjUPbZDkqTZwUD3CxNj7YcUPjEtv2T3saJxpmtFdDHE92dS7",
  "key13": "4jT1EdQ9N35QXgyPsnk5YJeJ3KwKjxxspFrkJuHVuZyhe6PS5nQ537UxPPycoySkYn5i7f5HvFJJqkeeotpigBAR",
  "key14": "SMgXo1GBbZwTTRCJX8qSTktFmTmXm9znA3Fs7m7MxFAG4d6j6cq6tWQ6AsZpTAh6B3DZMLScSDVsaPRohK14xoG",
  "key15": "4iN9XW9eBJLfuyUJf76RD4DCvzw4XcUxv8XiXQqQHVKdxg43eRTKQ99ovvHvQntWSsRtmAgunw9ScSU71ArCspgt",
  "key16": "3FY9dgs9LQp3pwYrZqP6D24qJummz28Fs4ZuwmDX9V5N7NLLdM5KoSvMj3pLASEem4s8pKWhy8XG6mTRzmbuyXkH",
  "key17": "49tBpGQxqmsEZUVMESUPuZEna2ac7PPQgPQTKU4nRyQcCVFkEtb9cUGWcsiupSdrRyUZdHejRiNvmn4WFqFUkEJ",
  "key18": "388sExaWJvFYtqqCt4HxkXpWkk95qUWEh8xEKd53o9aAhfUSAYXhKoLEugcY8uQtaV6yQGuqYHT6nEzarjs2dnYp",
  "key19": "35QH541j3CmqqYGUJM1JdoCapzFEgu9cCb8zTjDda8wqq5gev8AKXzTKxuWm1LfZPDb3nS9TXm8ysR4JqyBEehkH",
  "key20": "1GK4o2WHEWWKELqzTqqMQoHPVwmQtZ7Mb6gZCqHmkDx9D4dx2ezd24d7nB2E4M6RVeXwmef8gzrp8dUwkyRUzzn",
  "key21": "2oEJ1ctx1oJxNQv9X8f8CYH6WCMfZAjQgsioNs2AbjeNYkUtwNtgxya7KR1YTvmqNk438xqufnhSPLRQ2LPASEun",
  "key22": "38Xe1Rm5oTXQ9FMXgvDPk9dP8NVj9SV4bPNZpnHzirGHhtGKagm9WsMdKmngEovT7YCNJ6mNuXQHSfvas6DMt7ag",
  "key23": "4EK3toMBmHoPMcCop8NwMRA9NyviV7G3nY4fZy6ceiJadyay27kFAjKM5EReNKxtKSiPzcRX8U2487wgvkKYG4fE",
  "key24": "3A3HkuPc6LqZjTC8HwNcxWcX7u9p4XmZX9FKsdSdfKe3HmqmRXZQJ26KsBJ5FbMtmjwb4qhuVaWtcsoUp2DstKNW",
  "key25": "XBmyF6m4vfFCviarT2hynJnqs4PRGEsSDqcepZTXDJjqWB3ySy5V6BJV3LJu8H7NCnGXetDgC9bYQSPUHLPsZaj",
  "key26": "5fgxUMka2sDiXhh5G6fqCjBTYTTbVt248J4ENxSxSh9NcPjV3kEJuWEZPeVPpQfhYLpBgji3U3ED92kUmQw8gxZA",
  "key27": "FcJhaExNyeSr8i6Q5kfKWTwR65PhMKQ2ve72aRqTpqN3teyHomzPuPTGQsUV7HTvJ2jAXMMzZdse7Z7mmoG8dw3",
  "key28": "zF9EeEwgVR6ba9KG7vsuzqawEhD5UwDyMdMYvNpjgrrddERNLyeKRLuzR7LeRMY2V2LoEhV6hYqTjcYHVbnfEGT",
  "key29": "58zTNL8UtbnHruBWZRxSmYL1A61TtPjcQ1fWcSLATwsu4FTNiHxoyyDPRf9xtxDzRnykJf8c8XayapY9vqLRYS6v",
  "key30": "4gprnaLe9N9iht6EXdUXjuVXbBw3zaEqovg5HAhw25ph6KkD1Jx1mQTH2Qpn58pEuquw7sjqRFo6VPqpDoXZqXR4",
  "key31": "3S7vcxcfqtPVHonFit1UBEAQGrHWwtDAfcgi1nAZqpEvWAebMDAgEBbVvBP4Dhdy1nSTw1LMunvs9PBXRsSw2Ldo",
  "key32": "3x43KoS4m7bwAfQ6fnxTXoRseMCMiRPtTMQu2dD2Jjw1b36SL3Y9qb4FURkEkxUeLkJ82WXV5tE9SihBrGALxecW",
  "key33": "66xBcb2Nqbmm4vTbqFaRnQw8mWpVVhHqurikWs6w81BnweBrZ4sNiB9zyPHiMtgafemTTD9j2Ti1FEAWRgDdpgzP",
  "key34": "3wmSzfAXdFzXdK4kWawTagonFRkdrqVUaGRJYw53yew5UxHxtgeT5v8TzXn5kqDj9xwq6PN98C5y7RF9WrtmiPna",
  "key35": "4sSLo6RX7GtJqg9kFBdCjLkTuzMaoDSZebi3cdynpCq1f7oE9mbiQr44g1QsWqjcvibkMsrDyuqBDGAt2HkVjBtt"
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
