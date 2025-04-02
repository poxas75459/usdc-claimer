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
    "5yFn3rtmDoChntSY9grcHkbPTCoSuQxnVBFK1q9MDTymQuHqftCetryGKq1R5sbJWQuy41ZrRQid35mCY6PzMW8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UiKbNBruCvVKvYjCX55cc84c2o8zjzjsvhtYhxzZKtEo4m2Y9ArsppKu1bhGAkSaRc2MoRTGsH88RqivwFmeQ9Y",
  "key1": "RWdQjAxHVM4XbrznSnLbNuq92NQnTcEqQUv5zzfDGCkkde4nwUX53iGRyXyPmUpC7LkXYsPFg7D8iNod2MjB2Y5",
  "key2": "4jr1w7YbNfwR76S2YmZxsDnbUBVFXnucik1mweyDCiS25jfLX25ktPCgA5Jv8vBKh9t8ibKArnLZ1oquVyxbov8H",
  "key3": "4aBsr1vZsyXgyrZkAqZeeoh26wZp1SxExwfdN938Q5A9eYNR1dGnrA4CEiZxjeSBMBJNcDH836jaMs38uBqhd6x3",
  "key4": "3MQacpoeBGgo6vYh57DZoBfbPJorLH7PBLVg5ofenAuraWR1gYZ79WAbnbLgu7gTFsJ3j2Vhjv9Y9pX2Mif6xuMG",
  "key5": "2d8Q1DnAMSz3pkaLmfKVXXQgi2BB2x2tGdB1xT5WQ4dw5bU2XJN9x8PigRAiKh4ZBcgKZHxUv8NVAJLyLktLRBMJ",
  "key6": "4Bc3tj6X4Mi9p9Vv49oHrktANiZiYxMPkZtfvLgRD5RX8J8e5QetwfdFd9U122FUD7NX93XKfKaBNsnuUr8Naoq3",
  "key7": "2D7qmtUDrjRdqcuBPnyWcagWN3mn4CrSPoBaWZ92zWsbDZXpyGreBAQmqN9TPL7c7JdY6BdsJUyzM8DW3GGaNdgD",
  "key8": "4HB9SabDeSRAksx8QoU2zxGeZNvHgaJ5dp7BAnowzBTfUGW89kb3iDvShZHDr6kUQxzafyECuHWnzuRNrj3tNogn",
  "key9": "5zSKZQ3yys2shVSTMV9DnRGrMNfjuaPAwz3dfrQwuxG8dWt1WCgZHRTH2Y8VFg1T7NNWmyE4YVXXLYiCqZZsNFVy",
  "key10": "3NuY2JpYjJJbF2nppg2qNudg7N5KZ5JsirfMRpyfWnB3bygyY5S2HN6ztbGZz3B2Y5h2Ck25NBULf3Cvzz5fijdq",
  "key11": "3uQHjXAGXd8UbidLy9utf1kLvZE24LqFTZFeb3sQvBDMxfpEsu5FthyikN5pG8gM43W2z85PBHhbsKN9bynMsQuL",
  "key12": "3ZopQE5JwnXVWns4vnx2saDSqC65gPtzX15rLRhUjMfEs5KQHbUQiY81MpycGxULTWJr6MA6u9snuuRBf3sntAN8",
  "key13": "249zNeGpfqrKCQj7hukooFTGmaEL1ppoUEjDgZPbyhZ6iFnMm4kQbg4zqnNrTw1G19sHsHhKNrqYMUebKMLyKgTG",
  "key14": "QYjr46T9aqtbvnbefNG6QPv5xLH6AjY9LjwnV6H7WJy5WyE5DnzQs3CHDjABcdJYLukHRYgfhnDvcrTbggNJ1og",
  "key15": "VBn9X96LmD7uJocwNUVqKr3qHxiakUCnFMDc4DoxsZNvGtJTR3P3sNUKnMRMTw4xkpnkpKHitjjXmTy32m6K6bo",
  "key16": "5wBXYe291hS7gY5p1keKb1GSJiuKPBx3rR9J21f4DHns9F1YNHzWnepeWeUf9fQvtskqwT1zfDvnaNoC6bKqchyX",
  "key17": "5h8FUL4jdKy8q65fCW8Tn8dmRh89cNo5VhanoUYeeK2c9f168sUEmwZoJZ7zJhw8PMMTCHB46qYKXEjGPXfhKMZd",
  "key18": "5bxvKnJTeR2jsqXaHr5rQE2Wtj6Vo4mycS5DK7CCemT2SBCFLrxdrkzXq1f6aTpLZpt6AUAFNw12KuR2Xi8khc1Z",
  "key19": "4AqgaheMKH6oHQV3ecuto1UMbS3GqHaZLnYLhch9C31Xmu4wHkN2a4KC824eEBSUBCDpPhHB1tv5zALWbo5pR8qo",
  "key20": "3xcjhsNjLRGPQXEGzJV8qxyVwu5kkcS23c4D4s4x8yBzgDfmN9uAee7PvQnWRkV5Cfpjc4FW61YqbCUXWRA34dUq",
  "key21": "3fpjHjKQ1CptTJPWizt8QXBjAXMXxsoF4HXRhkKiBuYBH4jUkucSrKsC1bbit53ThFeH5WF93SDAb6dyajZR6768",
  "key22": "3TUWXjDx9j4zMxFiqD5zWx1Kj1iYausApKG5LXCurAHTf3XRp8VeiuS7PH3Jh11WJ8h9Tv6rq4top4DeV9j6MQ4t",
  "key23": "PXFMZUaqg5qW84XYdesh6nu5CURiModK55sRWx8tN4o1tdDqprz4fve846h7SoX3iG2ByBm5grM1evcrHy8mXkQ",
  "key24": "88C1ewTn6v4rtu5E61hSDEyZ6eWeJX94uci3p3UgkLohQeC4FEYqRGqo2unZrtjSTuvXr1dR2fvhy6ekrnTSANu",
  "key25": "2VCghArh1cJtiEMoh3zHXkhvuXuqDc8cvNo4adNcJpV58yYQGfdBJWAqbKz9sjy7S7HFwnRtRBeUf53k9o9gKe5r",
  "key26": "5k27wXQRsYJmq56NFsfHf7spd75w7ussvRQbwfSAjYTTFuoVtaqeW5Ko1QGii7MT5rMQx9X4k2SSyWCdJ6tSUBfA",
  "key27": "2xzVRwxHj5nFzZVAfUR6Yoj1mwkdATqKnGvyYjWXb5Jqfxtyf1UDSGLgUqp3Djp3JCQAxvqMEpwk7bDv4dVJcUaP",
  "key28": "2eWx9TDJdvVkHDBNDHoYQ1DexmvQowZiGJZaZj88ruCG63CfkdDRTA3MYuArxPYUaWZKGqDn31syyer3H4iwBwKF",
  "key29": "2bEigA1v2zLBagcyqsXJRkdtiGVSpA81d2f9jhRjKqKma59h87FpdsX9uBZmuUKESVsXAT8M44Trx33KG2DccsqD",
  "key30": "5uvJB2pN545ba2X9iJZAmYzUABxEqwVDM1RvseSidanSbC782Xz2vqXWmnsWkmEgMLseGLGBWPL8Ymg2Sge2dWG5",
  "key31": "3w4V5yFZ58ceDbvDFV5nqaXsQSkrKdogKZq4hbiS3vUVZz16r2QTKyHXBaboYwHQz2LXV5t5kAcGNW8cHYasKCXY",
  "key32": "3mKpGFmphLX73v1joh1UZbyMGS3WkRG8iq1suysDHQWyAAYQekjy6KEUHqvw6UKh5hLdtxxqXj1QmbyFcSfHZrK9",
  "key33": "4ug4bqZx2JBPeXfnfRJXGeMftXRJXo98t5yKZay6BSd7kFPTkCRTA5gxeJWfd4Y4s9FDUnbm8iVykWiaqYNpPX3k",
  "key34": "39mPwZdjC6SxB5JcHFAf3tNCEvkH73UUCHbeHtFwaTFCHkQ67kWo3s7bXMqDE6BCFuTrhUbWehEjeU3etLCDTUgU",
  "key35": "4AJ1NTAdBB4DhaGMvhZhSAQAg242AvYYWw8kceVwdiZe9iuoeHfemrqMG9sgGuZHiWeTqkqGmpvL2HztE9cErHYK",
  "key36": "8VP6nJhxEaVDK96a7rfZvDr3zqUrBSK7Lg19YNkjgqU2pwUY7qjEqV3ydT5iksh4Mhd7hZpmxwmHbXbrYeEQgKp",
  "key37": "HVdyWy6aWNS8JJQyTzbqGqM6QtpWjg8K9XSYGQ993GNSgQHePDFBBz1K6bZCHr5HQukzFXuK2WgSGyU99SyrFF9",
  "key38": "3C9kE6oyVRNPebs4Np5QPx3nJUY7Xa68Wcqm8hhp9hQ4abzvjrfmXrfVwUnwFG7Ji3NScJxppibfDj1dCgPPixCU",
  "key39": "qwrYS1bn5h6VufRNcwpU8JJyMz8kpXtXyZRvWF8Xuo1d7JnMKGvUE9R1Qs4cTqU9jtCjZu287UipZsG9jf4uASb",
  "key40": "4GJ9LxUc6D6t5Wsf69vmFEDG5SQugfuhL2EQCCTi8T1p7MuvomdR2R7zLTE7FrxXF2pJ5FZUAMseUNZvmDSoACd2",
  "key41": "MdnAuxYksB1uuaAZjMKQRWqVGoywKCYjzjjwosJM5Af7gVYHLePzukndZhZXRcrWsKvSRiEKdaGNWTxLSiAY7kN",
  "key42": "5aPvQCMwCBhyshbNUktq7yZm63W2zUGBicpf82gdFtJEAdz9cdiqeWVghs9F2tFkeujgVbmDBxdBhDuhkj9PEdxz"
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
