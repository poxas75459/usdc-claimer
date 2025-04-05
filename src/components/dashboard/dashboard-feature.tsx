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
    "2S77rb6BnY1GYk9DDdpyVCYRQXEhkVQmWdqJH5EeTscEtgfhyjE3N6KXWKF6FJbGbWM5xPJmDdbupUGeB1JJrSrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45wTnDD3Uc9Mf246dyZ2efPsFu19PEWRBpod2XHtec8zkQk9QEaGcH1XaocB2zZGwpzUU22ccLaHrKN3u6ZG7PdJ",
  "key1": "3izDxQp7TaX6tUTvnbq1BVb4dwYbbNLxjMre1Tz4ARBgPQw26Cux4mfXozRrTFqBW9Xr883uQRFF7U91XW6oDbFN",
  "key2": "2fcNXUEuDqRiuCmomHosjHa76tvgHxXY3zerHe5AAtpa6sLPAckjY8zrP2yzPuiCbtpV4EEGWPXHMV52bimfUvQB",
  "key3": "5oHTsDhxvwVeZr3Yc7wEpzCbDmYBybq8ttxxUKHkvwFPPyiTpyh7j46ebNJis4T6u9R5VvpiQovJiJVox94YwpyB",
  "key4": "2399ru53yB64J28t8nCLCgwtWjkEd9Brpv9qvoRnvE46vXbd9okznmTrgvVaUsiQsL6PK6B9C4d9WFjdjsvGJM4Z",
  "key5": "327w6VZgyDTNgziqx8N7Safx63BG6HrkjbchGt5V1q3m8Rydt2UX6mokikCxW28PSHJhEnjj8KRJWD6e6SMcMPZY",
  "key6": "4kKKNZsnoCSihKub212cDCy1dUeUkDiaw5qAVeb6Mj2eYVojCy4CuL52SKrmTohmrBcjAFvX8EPvAEKv1v7ZSn2j",
  "key7": "5cWjUasDSwspMYKKbL2zDjtUvqvuBzpK1JQnUoK8tbRbDnuQXZVn8f717awtoGEd93Hmn1JiTJhFtfq65DRKdJPG",
  "key8": "57qJc8ZAPtsjkZMzdCe6hJCtN4C6rX1ekbYA1b5zv93PJFvJhJWqutM4TSzRigZ5xg6KNEypAyKDucYzwLk7qs6G",
  "key9": "5jjzpSTTLyDAvjHvSvY4TbF7JcBLNrQVa2jyqSL6WHyyZXwdJXTvRSpF1Ljwq3tHfgQkmSDCymHFsXSK1xTFYSia",
  "key10": "5RbYwBypscF28ShMC2VHgA9qfTjSzYVWUV713rRX6cpsF27aYwraW9BvzCZMpVjxi6SAuDfWKSis6wePzmGXPGeZ",
  "key11": "46rZHyXMit5iX8UpxcF4a2iJtKNWFZD1J3TiyhibCtYJZB37KL6bXypCyVbJNegvnkwSwLBnsTjJA5SGLLVpBAGx",
  "key12": "5mT6KK1A72hrtP2VBGynfwvcub3jo2mnPyBryQrnueo8XYUuhXUx8JBZPpsk9iXEZXaPa3NAavhmkJAqT9ebYynD",
  "key13": "3dbvXcXQTwT1t9n8p9jsNUqKXs1qfNowZ4Rks34iWBThewmsozTEr8oJBZ5ebNWTK1EGvP7SoFJTJhnbXwee97Qx",
  "key14": "obHPzbutRUneW34DSCNJqKQQqdsRSPgnBofj8vfhLJ25ehzTJCMccyHiWKedfma8kSkbSLeJ28PQ2BbW2tpbAzQ",
  "key15": "213w3y3XRT4L7eu9gTStq4pzbzPWnfWLeXADy2sUAJcUs6xHYpJpDLWwpnL6bv2PKNGdUaV4tkRjmNE24xoc7kt4",
  "key16": "2cZdB2rgwcFfL9Fu3MKSB5YiAP3SegRQyYCkP8e7ZVj9anJB7SvKKApW4hrjytnDDe88eaj4GCgooJYYBqS2dixy",
  "key17": "2Av2yBk7qXDiT8UMBmci5AuZrXq2URADbrh1pXa2ZPmXRwMoyeqXDRan4Sr5v88Uq9pGsYPPiWj4ZEJrJwrLja56",
  "key18": "4HR4M1X48Qny4EXnR7hc2H7mqQxDhxPC4V2PLHMUzYTaoqJ8t1sVWdV66hy7VT4ncgMqhF6A726wX1QoNu62Vtjs",
  "key19": "2ijVJ7NZ6csK1v7L4oNcSZzUgFEgvYQWYreN5ToT4F8dio4dwMEd1EXxNdAGECWkYJCHsFJjaGsUEQ73HKo6CUtt",
  "key20": "4aXEGbcSkVnRunNFucvNd34fFnatXS8Gd7soNHRyL1oLaS2VBAF7697m7bCKagfdohGGEnc4Vy8L1b32w8BJYkgH",
  "key21": "54YVKQaG417G1N1cN1ecKm5kURHBubhKAJjCx7Q9tZT12pDNFZvSYsBoz7u6HDaHUBh5Z2ixerkUeTLPp4BrepaC",
  "key22": "5edov9GQH9CPZc2rCcragmdGCnp1RMRrz3jJHnSpE32QPEbHLMTBG76eoQ72azo3q8uog2S3PW1tVJUwHnyrB5XJ",
  "key23": "JFWcWskZmgmqzUXLwGPeK3pgHaP4xpt32QaEa7kRZafUtSYSjgAdrdjifqcpQssDi41kFm8J6SXjje4ZsECaqdE",
  "key24": "PdxE8KEwDuoLaW5JtrLsZcdXvt28VqGTwejkARAYQbdqBTaC4BcNaTyt4NzhCsM7kQCaN3mz2eryRdtyGyCpbzf",
  "key25": "3E8sRHArH9QvHTvVqufKRPB1bpGzShnP8xB5S3BuDo26RY7ky6JexX2qx5yEQR5YCdvV9YwFrqqZbmght6H7BXTz",
  "key26": "5qQHWCtDaWjnsPmRGy9XVVzAyNgmFj3KAeJGUDZz36CcpNuxnkJVnc15CXJMFjn73dc4vt1vVaHdm39ZjXdG4Gmc",
  "key27": "zZKqt42fKyj52CbhfRnvLYCkXfHBPp525btQV8Mrz17SDWF7ULx2iaXjMgKJjG4opb7AJWE2tPGQEWWi6F5i2wE",
  "key28": "3yf3fy6hTsfb1C6KtKJ1ApQXpgDdYmRWc8eQgAg2DNwLtrYcDDxkQTjqnEsr3aKJxDDZAZNV6bHivjh45J2pvCxw",
  "key29": "2B9jxAWywE6PcZdVTbvSLcB2vEeSLMNVv8wVkBwe97XbE9GMaAemYqToGDyDvwsaeMTwb9L1sPCYYjZtpQp51CWV",
  "key30": "5G2oeCVcJrR5CN9vqiGPZdKTQBPsRmUjS2zMoNhyZHRnHwdwSnJk2fJXXPrwDrVnwvty2NL6SgcXGnW1B24pu6im",
  "key31": "2DL1SyFYUN2PYdvjJEhFvSU2LRLLZwXwaLaha6SeRzv3xoE5nLiZLdBsBotrQegU3AoyqZBreaHcMe51rfSguPjn",
  "key32": "3tLxMmkMsrGDVQH8oxue1a51KnNiij5JfdnYFdLYTZNwyTGzgBNjrDzPpxxYpbs4Y9B9jtqWwYM1Q7PaUhhx5ENu",
  "key33": "5SmNCthPao6mUhQQMrmvq6M7JiBg5nxmR7Vexhq1qi6MBba3Pk4URh62u15NMbAinjhbCySRqyuqpDks5SokaCSk",
  "key34": "vyb7X7Jgv9WjjQt1wrUTdux2fLu84oCPWPdYej6q3VbV8HY1ceAWKCb3d2pGPDXyp5jpAtCvnc126a814A4cgRt",
  "key35": "2gt1RSVLLMh7m1bxvtBUS4Wdv7Mz5aP4qEXv8Z1umpx8GNCMWVf9xQ3DwCTpCtBkzoEkGhzJsxNa5NZZmQ2R7C1Z",
  "key36": "5h6cNp9cRSWR2grb9UzJvP4xTyUf9wmJ4Hg9Wq7TZ6yRgyUmmcw3dGHRtryb1AUk5mnrvkWWLpoYSGn5ViPLQJcL",
  "key37": "dogsjUtiiLVp6QtzEhGATazp2dE7HTWCWux9CWbJNu4XLdBZQAYDcZETLPsri2oiPE2PZ484GLLm5Z9Kgz4b2gy",
  "key38": "2jvA2Jsnwm1YFherjGvbevPFJRdcMqany6MUc7AmiNWVkw8grj9CcgNMeX82HjH5REPerv8d8kBgYCv36VvJTGGJ",
  "key39": "43vDxn1HLU31PNUL1RNAMCksLGJVUHcF4hnavZYLYPC5RWTWMVDMan6SN25ttY8RNyWdZAyan7H8SJWhaYRyvKFW",
  "key40": "48VGVfHB9p8pb4yLKgdLeTFzGYQbVMLjFgms8NwzEKQAwPGgZwoQBL2oWLzAeS15TrKCRzEuxYLdaVsXTVy2gME1",
  "key41": "4QT1cdZBKmyhLcfhCrBy9TBz7encXeRaW9tdkPgMfLYFrRP1iK6xVUHYfbrPNNbd9wf5Noo475LAwAwvovfZQQTp",
  "key42": "4dcwyNUMnt8Smoys5qEjxh8kawfUb5w4UBQnEwByMtYCFNELSuTjAUUvo4V79pmAcxo8piXj9YA9zmxiMbFghhxN"
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
