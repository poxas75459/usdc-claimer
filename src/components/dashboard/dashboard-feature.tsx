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
    "414umq5qzFPPUC2uU6Xq1C63Kobw1D3Nc9GWSuEeLoh9sAB2CPVTDkPaXzKkc2L1vDhBADwtjPQx9gChnNbQZEMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XoHhgWGmpgphJBCNRy1kVkTCWMoPoLoFNVYRJbjceBjiYEJ1wHdzaTyg6RnmkTpR25PbdsJEFpgonvhPBZ9SxmL",
  "key1": "3aZ3BwVC9jGqtpi2hz7Yqvx4fW7rshStMJXR8nunAQTwYuMmyB5uR43QYiPFXnbwqZGwuUmtz9DyukRfsKacPTQr",
  "key2": "3kXbSbAN4iAiHdG1yB9xyiTXcMAdhsYbARUdbt7FhmBx496Xz8PVEnRkLufoYxwpaSUH2XTjyUVC8LbwrZmAuJHf",
  "key3": "3nCNr52UDNHKtvZFQiUQimzH9o1CN8kmMoE3pZKpb4ifxmr867ZnY8pEkLmNKsScDksgowyosE7rXcAGoSnvctSq",
  "key4": "47UfXcpkf8tqatYUWfLABunKL3nLXvfWH48EzGBSnCjTkhoppFtoGtLe9ndeqPiXT3GvP5JfYDq9eFY7aRHXihtN",
  "key5": "4XSuPDyQJ2yiwW49a2HLTyzSoC4CpdzWJ8AaiUx2k2Q8zzQDstU2JKDCanzzjC8TFC37C4cEcE48jenHpEV7vp2m",
  "key6": "21asrw3Sh5A2MKBfms6KNqJ3S9mu7SABLJ7fcZXBKijnsAr2G9rhwFd25EkD4xpekPZJ1nLWQ2FNyhDvRVyBUtzw",
  "key7": "4P2T3R7ae9pteQtAAdD9TJiWukTw9EvuKoryUbtFNUAwz4Gq5A5uooXkUxgLSqyCM81oNUyNMuo1NE74CMZgLYeb",
  "key8": "2dYpifPvsQaUx63b7MyGfPVp8ttUcERmMpEGoXHuznW5qpZCsFypCF1FhUz9oix56GJik8Xp8pbcNU9ZGHUkorNs",
  "key9": "4qefbZ69GpLRQdsRPPR3Gd1G7crB6MBqqQJerixRpjHic125SovfxbsQ9h4r3ouFya4eomAZkvN7NsavqnFz5r7L",
  "key10": "624s69B7crmXTzTAv8jzk3qA8RLF5kFzCn6cTCapw619wrVRp8R6QNMHwnYUgQeTzRAKLmz4psvk8mWFg3JXSSor",
  "key11": "3qBT8HMjq771vNQTyxst4NVZAPw6gkRkjAt3a2bLN6x8Gk18Pu9XwrVtx8mKXXkmQkaripQHCMqbN1dM2LBw4cjq",
  "key12": "2uE4NeAsP8PGBKxFxU2r18djMYM4FAsY5d54HMSMa3MeLV5x6uSp3Nd4Rk5ri1GFeyP5n8titCh4Rdz3BuptLVrV",
  "key13": "2KGmvCNifW2x1JWRtxjcUyfvr7CDGgK5aGC58Pt8MEy84cN3PCnfXDp28DmLZbR3sL6FSGiLdNJ6AAEmHhJpjpxe",
  "key14": "3SDbQDPhQxMfu38XaeZktmugn5kTP51xhSBRVj1aHMB5qFG9ssqHR48SqWpmU53p6A2YuqpkyFWJmmthjLdKkVJh",
  "key15": "24ftoUcLPaEjmBFuZL5tQHLywtUsQryLXVrrxqubBmRd6RMxvgpQTSMJ9MB1dv25szu6xembGc2YTa9UHW3aFD3g",
  "key16": "4mt5ySD6w7zF5XPbUPF28o297w2GDKRqEsomaZ2MvrKMJg3GrVqRcGiTYnYmeUDdghic7mHDvNSvscDiUSkjkpQH",
  "key17": "2e2y5TrUdbVtyjtQGUDJPh57oWVKwGr4sZjshANPjfGqPv3k6cRa2DCPrJjc7wUWdkamkuJ8tb9L5uUyrtTdT74e",
  "key18": "wbbaba6YJ3Qy6bk3JpRFnRC1WddG5yVokL5W8a3Ecujt5K6Uy2Lm34KJyDyZkHMshDpwb1hfS3iqjna2L1Vnubx",
  "key19": "4UTt7XeswA8SPNbGm8Nd2aYXHB1ePZDqccKz9t9M8p35hr4hmpgbVYqRmcEh4m5KF4MVQ5Tz9mjCwLC52PsSTREU",
  "key20": "5gwUordb14sWvEU8vArfDfnZFCQ3KKpvC65wzAEhwwZRo6nBxn2Zysyb9s1MN9tnXHE8f24MFwdNYn6oUs4Aizs6",
  "key21": "3B1Z7vkDUVbxFyJ1gsX2ZLzhXZ4QXaxKifuQxnyE979kRA1bYzWNNK6DZiiHuZx2JxeAaQuZ4DUDEtvNeBkevhiY",
  "key22": "4B4hWTeyy7QkfEqeNa4NLUVcLkXX3DZ9GMG7uZvsEF5jN3jWuWREuEGE1kdnJEt6dz6P5jYSoQ4S3YA7NFGdN4Un",
  "key23": "XmyuNH2hXTdtMmJ9SmmF8yXzsQA8K7fNqj4925w7oMefWihHTeNFJDWNXdfKUe626Qoz8itBQxvUcrNmNBqj6ji",
  "key24": "2WPmB6XhGSh2h9yN3RQZQXSLwA45Hbx3fTe2D6iM6BuiVaLKiDfoP3ePxHuKRqqWjbN4c5i9rtRiEMTsQAi14LJZ",
  "key25": "5K8LBnucUWU5qZAuNgyBBX8xLVaffbpVfWxG3MsRi5R3isCYxe2zSZt5RmtmXJ7FpjiJmmoJsFqUhpRgbxB92mfZ",
  "key26": "2aZLkNUayV9qesJAwDzD36Xe1mwtSJuXMNoijif3THj1roXCY1iBSBF5wJxdc6MqRptuwWMzGrhr22wXCCcpbabD",
  "key27": "4m65hMVb2gk7vAPgFy3weXnVDYBh2knHaSHoKfTFYAXR3u8iH58Z5x5ZKxgDZRjW3jwVwhVy8E8hoStc8o7c3Mqh",
  "key28": "3wyTqSYFkopx5yqFR1FwSmZSwmjAYkTPGP1oEcxdRC6Ln8qwwUMcjk9GhyEc6gQAfBaGJcHxHrfYnFuAVPiTPNPg",
  "key29": "3yQFKp9CpK62DJ4wrfKqojBxMcQhJHV5NLk4jYGRW3w9gJjx3GGqGS8cyskzWGbRoReJke7QZZwDmpPMi5uqRVRY",
  "key30": "3gbALqaGyjWbfwYCq1FJ76q9pqoUExb7MjtvCR5b1AqzFkueiY9Ryo3d7txJUu1WHWBz4wiNd3nkSYtwhwz975b",
  "key31": "2D7o3Fd1grRPG5VQBKcjVmRmW3ruRco4z898FYA2LaHQRJgzjTAds7YVL2QoWGhamQxKvUB6KjizPbJALrfDLByc",
  "key32": "22k4hNnHRjFQNuhvLKMks5N4sNPEy5caVLFPKqHEpfjWBf4EUeU8a524m3KMDerfUeb17F1qNJcRnBzYVvZ5pV8M",
  "key33": "8Mr8jhnDrCmRiQfnvbDNC4MrgB5WDy4wKEdMbyqPgHGJpD1wEVxhdD6R6qWpjayCGHZ5TfDsZ16zAHEQvZMVrXM",
  "key34": "3fRsfQaL9dpqHK3gmeiMQ2Lytj1jHeWMNphyBaXr21yKHrkW7XvPQ9C6txxDeTYsRVpkUqTxPsRV6AeWvsaQm91y",
  "key35": "21azbM1i52e2DktJWsoEa8urqgD2AX9j6AQe992h9WPMWtyYypy35tegzMa1YH3t1QmVSY5qhUfrotyfJ9QDwdX5",
  "key36": "3NqbzK9oJW9eExDyk5i4CLkrGLhGtZocfAnpUyekJQjzLMiDoMyfjQtcrkkw82iuQv2S4Z51C8VQPmn5GMqwify4",
  "key37": "2caf7ZkoP1t42sBHp2wQXD4rQT7KitLZHu74tZFHc1yFziAgjb1p7dosagQodW28mUFwcLcuLmfqMSzY8qoKcX7L",
  "key38": "3BDDJRMMvvMaRyyUJvC1hWxDF53QjAQ1qdgfFtyNrCnjmr3J5YzYibRtRPCb6acQ5QUKfVWRFNijJooKjNF4ehpB",
  "key39": "2iJhbMNPmwwKkRypoftibTqG16T9DPXJuEH41YigAgQK8W4TTiptrF62rpyPi5ZX5nYGqSg6BXoV6P1o6ykUQMPR",
  "key40": "5uUC6U7yfsQ6EhzXvLYxGEXoQ8T6Z5FgogGeUELcxjmoksk22x4efaLJGysgxsbrkFvZ6upRWaX6AjNHUEJSefgH",
  "key41": "3LtM6MHpGPGpA4isxZQjzskCBV5KvtfH2emdWdvot2NzRsFsMgfQrgg1gQYu4AHN1WqGx9ZZKJoWFp6U84CASQbq",
  "key42": "49opph9XT2ckXKxbmiddx1r82Usmn4MvRe1MCo7h9NRfgw64zxvP9WYHQuj4U6KT2h1XEkaZqkWBqhzmZqJbzfVC",
  "key43": "2QCFzG9dxFp9kh516utJWhPyHWYmy7H9Zt5DzAVj6vW1JRzKtYMPG5GfuEGw8NUkfUGs5cgeunALQLUJcGfGjJu8",
  "key44": "5G6U2zB6oKfnMRNHAKkHyrcrnDmSDbbBcXWhWPmNA12FctWfHEPehvBw9nuLVfSjxHH2quN9GTMh9jMWc3jkbaCm",
  "key45": "y2wL5te2KvHE8qPn7WehxM6Jm7MikSgyQNL2PxaBNYv8FFUWb8ofPCE1J3oT7uKWgazhWTAzCKNs34ABwG6XAmF",
  "key46": "3rj2rKLBRCJBD9irPH1p2o5Vf8XLHP2cByY2KGy5fDbUdBjgmz3VYE4dCYQuwFvvAL58jCSiT99SCZrMDVkEh2P6",
  "key47": "2Gsj5ceSh3jBfcRK4WAHdTkEw9icL3YYiAdjHaAMP34CqKrxNSTGDQTQrzBYLQe34FNKYSAPgcQLwZQBo1tCFDEF",
  "key48": "2imJ657KRhtRS9yr8sLwoYgF8KaTfo6BEsGDgmpDh47bPwH5xG4a2cW5FRNyj6EjvV15VYkxniNok25PehS12QTt",
  "key49": "3SXEi7DMwVro3qnf41CqV7BqmLSSsPrQE6mPJYLaAhppSTGemoHZFmUwC66UgNtseJHdWDbaE7HBVxrKLrJpx1Bj"
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
