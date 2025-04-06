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
    "AUfe7Rnji6YMxk3sNS3KZxfxdHKuG5i4YS5VHLi62c5LMqcqVjmH1oyxqo6TXQQSENqe4TsteHvhCFdRSvK6Qcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oNaYDFkhQqWrQ7JzfvcwfpK9teDiQbk9X5KFC2A12bKMB7QFrsH4AEj69zZNSMa7wivEhwQLAXnNtPSb972FQDj",
  "key1": "3JGEg9SKYnmT643dcUYcMnECmmZzArC3GrwRvxozxLVZAemsSYCgp2sk7VMvr55L4ayzVNGFzmC9f5bcfnZz4mNH",
  "key2": "5W7QmhUxofdFNFxP96Gic9hoqg4mbc1jsQnzsrc4R9xkZEe6KkZi9pkDQUZKEZfn2Uywn4bt1hN8bFoqi2jHLijq",
  "key3": "4QfKo9RoHSLyb6YMVi5jfpNzabDEAvNmL4yReTJLzVDBcu1RTwMbF2QLsaYa2BBX6bnSyY5QxcWDEc6u3rD2dFMU",
  "key4": "UadGQFeKJVJjXzyJtc5oMeMTukZxL6ZQVe2c6HmNh45xrTv7HJSVJ3tX6aoHAC26rsJwqmE9VtF3shWvgDedjsi",
  "key5": "5ER3FXWywLMcwB1hCkn4GNEFJVR6wEVnSjWd94RPNBVDEwE2jPq9JMuZGx9qyLCBf14x1HBT3sHAdm1b6i3QjDRF",
  "key6": "3PYasSgwPUgku4Fy9JiW8ATNoNWqBvwcGEz1UneZKVSVNXUYp5t1jx9Pqjm2cnao2FEmiETfg7QNxfJH2it7dcHq",
  "key7": "63CcLDbFN9uLQ1tbegNtGqTMoG44n5yTKrZazAjm61HBKxmQEeh98Tyb4NyiCqP6BRbm8Hwhjhe88eZ1Tvzn5HCF",
  "key8": "66UAxKR6JFemFL73F46v82cnThQ7Do3JfxzStPmZDnjFMThawpduuPjxUugVJiPyVcJjVJzSed3eUj6neezHi1Do",
  "key9": "4TFVa9WLWmmx18rSZrqLCH8d6Ex9oSuKtt9LqNUMaQ3uHFstGqayKZJEXRwxZqRPkWc7dDqUSoqkTfWCWGzcW8b7",
  "key10": "5gvPdRfaKqJgXUeGFwbK5S5sucnBuHzsNK9qWXmDT5euV8s2A5qiog1mC741tnfVNme1Kf1JyFByDdGFaYawys8q",
  "key11": "34PtRS2pd5jzwpc4ewNXrQYziCCieh4iTu1DopLgWutR7MSWn41YeXQutXVj5uoW8iyyhU8tLHzfohsCX1E8VFi8",
  "key12": "5gc6gMVbDUSUjb8hKv1ZTpJQS4ygtMCd4vLEPrNujznuoEvugXTv6xEHXLbYWpdgPpXffZjWxPChCxUFQkyPuibG",
  "key13": "25TdJNVDaptLMXNMXRxj8sAkHKcrYydTDrpZV24pgDRZKjYwh6qaDpm6X7qu5xPVLAT591wYaMAayKxsKVnNB5sN",
  "key14": "4vGWZ1mUhHJZ1aYGKkmkQc7UTXdeZhwXZYjA2eWrDHNET7XAA7UgvKo4AtynjJ12FBDZ4r5nzKGZBbJc2fD4eRK1",
  "key15": "65ifn3Tf7QBHywwawWaZufFcUu8VQPQw1VHRwpjvbsZQhBgWMDhd1mtGNGpcgdqSBFCPh4ZK5hzwwiNfrTQAii8W",
  "key16": "52uJKeEpaEnPsosLdWzWy1x9Qv5vNRn9XSaKW81tPDi5joYVMsNi6AJdx5W3aFKXhWryX69vb11khqyiTQFNhHjQ",
  "key17": "ktxNRVa8u8gsKUEFH1JQhTMiKd8Nj333yDifXWdQNCdhoc41XaTjczK3GaYSHdsoraZhohNqNJS8Q2o8gosmzPP",
  "key18": "2DdQMLSF5ch3P16TVJP98SJQehLUFdaccAKvL2AEHoF1xqwpsPPTFcxQY9C45Tfakar7CaFRozFcvdRegAL5Y4Dt",
  "key19": "P9DbsZSNG46xHb5BbqK4mYKv939XNHyTwTCXFhHTahUX95FpsKrzqkDhkJKk3dWtNvTJ38ekyPhVjgYD11Ng4Pa",
  "key20": "Ts7NCfg1JSko9bdyZR9oS9wSCpKSpAy9s9wa5VmPLEvvZuRPtt8jTNErspLNTPbbkqrofPVfxkpxM8w71LJQSLr",
  "key21": "n3eGT5PUqDBetLf7YG3BhJE5Jw5kv2ramcvRhHkiMiFSGKwDzeTGnNjzqGW3MjYiUGGdevsKggaurtrKShLN5H4",
  "key22": "5GBQdCLK59YEC4KwM63wbcXRwQZVT8UoocdBr8jNxGgCpXPktQZk864CypBzRbyPi7zMNfSMvUsCpgCGF51GVEpH",
  "key23": "V1JhmXUSSpBYAfTzdjuRvuTD4kVa6CjikrovFSjEymiKd6AzKuP3eNWjEpqpeCL1D7qwbNoKiwRG2ucd6Q7k3Zg",
  "key24": "2hpPzmh632qXC1FFmzCRj9LgeF4RpGJSdKTdxFJnq7ufLuzHDgcHvspi221KK7LRjjLU2G1UuqXBefcH4yen8ZD4",
  "key25": "2Xu2aAi5vXKdtvTTHoP1cxzHnDtkJ1RCtkRT2t9aj3XMrcZopNcHFWxaRQqoUVhzdevp2ohZRPVMgAqzmCb2o2nu",
  "key26": "1y4cyGQN2TW7EvQmLYRzjcakkeZDm68NNSH9RDWR8yuQ3C8C2SqMtfjGDnwgBaPE8gmRve5HTQBDcTbv6Lfxh9n",
  "key27": "33UdyCFuWZmDknMbWzN3QmR7aw2LVzWNU36twMrUNi28AFBkRmiBAkqbTxSq63Zr8QgojFLD4v37b2FQReoroVBT",
  "key28": "2Shc2HZTcssf5WdCRVSqWunA7kCHPSwWA2cEaRqboVt1Zci8p8JTU53eb69dMxvUX8JHC8ynxkbt4oPBast9fj5B",
  "key29": "gwot5TiXhAQfJo8WRmKhNmaeAVWUu46jYLij3i8bjYJMyL5vpx3c8f19P9kf4jPaZtgtaXcfuNoLo8BJSY8aThD",
  "key30": "2mcBVHQisShjxRZ9MdLetk9FYXYkihroMmhM6jKHkE6s4uaHVShazsct7tCxuHj8hkoeewuMaPnBQM6sL3zDGern",
  "key31": "49Jq3u6yMydUsA6T2Pvu9CCqXFpdxtD8E2LES6he8TU2thfYgitKXnNvypToFGowd67tCDMhpvMtNY6f1bWjbjVM",
  "key32": "242gwinmPAj7L3oMLdqyE1eoTso8CoQdLyqdqoJGKZW57ArRNhkvUkryXxRVoLFAj3CaYKM2CpEPTmZwDtQb6Y1z",
  "key33": "2DMp8RuEdvy7qNH2Ay5rLWJDgQ7P8WZC6XZqXu27dyjVDeigCUU6VDv2qEvm5Ck1ZYDdrnso5SXSjonR2aWWmPhb",
  "key34": "XK1jDE6qLxmXMuj5CJ1zrrcQhXpqDbCUfr2jjyjnvkuAvr38ko4eA7RV6yu7j9J3zrriuYuBpfQTbxUcrt47BFq",
  "key35": "W5ovNDPG4y6yXxu7gJkYAKHnQ3ttiUmqfedWdS8LBiRxzpYwAbGN9SBTqutHvvmC4Jy6WaoL6jMPaDGmRqJZ35A",
  "key36": "36ewd95dmcdUWnhNGJvHdXorb2yyrLLRkrH5jADiqjwGPs63irXeMyBUyfLXNNqX7KxFNp85dTGZimR24393wxLm",
  "key37": "38XxguJnk2BEXNYSzhTEL1fjKcmqDZxJqNpJVUnt34anjQVvdagFsLsu8fEecsA9XngGE1fTECB738822Awo93gz",
  "key38": "2gEHWFVsb9cN1ehkqFVWm9tBwv7W6PGermXoYwitt5H6oAhpEUaXe2ghzQo4rh9Dorm2B8CsCYMi2sSwAMMGZyx4",
  "key39": "5MbEUJHRkwYde9nWnFyKoQQrkuZJSEKA2UHW4ut7Wiw9iSyUXEib8RgzM1LMtzGYQ5LoweDtt1bnk28w3pomufFV",
  "key40": "ZU4KBmmDSdwDxa1e46Cs8jgTyYq5yytTwyWf99N7avENhH4pJydXRnw6bHxXGDS2vC3Bza4PZeJoXuLuuBCjTZo",
  "key41": "6MaKQDvKmY3C3UKTobb6Pnd7S7b88mhKeFRfqYD5zLHYWLT88VgMvGt25o4xwLQPZmNi2ZyGT1TYU6yCkdiCRdB",
  "key42": "593jNiPtjGSum484JyYYB86WLasVSogAgf81XFLh8QNWFGBXvuL4iFhz1iUXPxGXWWDAdmdZ2JyJDYoMJxEcjS1q",
  "key43": "3QHwqrZs5dESo6uytQQ4JJXC217X4smqDseT7dg9fkokCs44MXZPskpARrimi2nprJtMCVcPGkghK87zk3VdtgHT",
  "key44": "5VihiVaDUAiMqY8yiSGG1UVu5nhNowW12fUG8rXsokxQSX5ZSZ6dyTmk7AWFW74GsmUtNbWcFXn2K8jGv8ZNwNR8",
  "key45": "LYhh3NE3rGPikt3ZQxrYagbNKXoU8GtnX7Hxh7AC1HbAxWeTWiaqEFzzQK5kVoZdp8bK1LzBFqGajSCNjjXT21d",
  "key46": "5y3Dm2g8BZpq7dv7Tgv51aJ3Sw3TDRiMeanEDVenMZQ1wE9Ma169EGCHXCLGooAV9HwotnkWPwVZE8ZbVV7fRyio",
  "key47": "3MffouZ5dbH1SW3uTRzhP7TgPMmjBi44ic4sJWELH4EtgPJiovhNywhhfGeAUXdvyV2VM25GqAqUTtSX2L74od2o",
  "key48": "345sFe3ofchegRTzGaVReWwFVS3cZrhCCAzrG7JisHMhrxssYZoBqYGzt1ctPn8zYdmi2czZf24HKdE8vWvqsoRK"
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
