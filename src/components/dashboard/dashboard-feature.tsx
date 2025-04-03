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
    "5qFKjrWVdm8XexVuzJNYpw5KmeR8BokAv18sbGhBBaYPG68wEAvVWQ5zYGpT74fXzepEv4bKyHYM6FyJhyUy4H5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ro664JvmT3b1the91jeYuqSRSf6kEqjtY8dMk6cQBZBBPebWJgyZSUd9n1Yr7BSvbWwxj9uB88tHmgZUW4ctYWq",
  "key1": "5xCZFBPpxo4wisyrrypk8cNxgRR2fGSBEguXtRJFNcrnmH4ViHBjfche3VuHNoD3dvmD4CppS4Nn14ezXZXedwxh",
  "key2": "ggbvZBVJCFtXULBisZ1LFqfXrE3gAz4RnT1e1ENfCSSphJXU6HFkswcak7gCtB8Nwva7cnSkotDj2TrVZQZmMCU",
  "key3": "3jmaKmHX977gdGUgYicPLC65iUmjTNJCWh1GAiACQTsDxJTEADGFCZ5nBuUvgj6aaqJYjEKipgTvCTWqnHobPJLo",
  "key4": "3w2oLc1otvnY7TBkf3FcctqXdRq8GmpcGAcLQhyXja3b2xEQqao2H2mnf1QFeoR2KravtciCqt6tLjpvPzbdJ1ZU",
  "key5": "4P1Gqt1kxcwFtUdvVRNmunKbc9Wt4VKSS7mZYs1pHqFb7oie1m5DL1jKdYJRN9u8s8rXAH6vPKEnLgetzWfsAtdu",
  "key6": "3AJsxjxfzo3KJaLYRYwNYa83dh3ktEB6LdRJqoVtGfPozyEc6QQ4vMtXYmpL73DMPpLF4eiCUHFTZ6GJqi2ZCkGv",
  "key7": "222UArTUKcfWTi7bSyBtS6sAcSCfkPxxEVkgDQxbFBX4Zqna8P98tB6NmSGTQYwoNfBsTy3YAZUb1f2y1usjkx98",
  "key8": "3gzNSgLtSRDiXv7tvSJmTcn71XfwafaM7JDqeK1cXNoy84FMKdtsT3LAdHVXRqA1tdUVroSidWxomEWZmQqMG6A8",
  "key9": "3KmdRF3uMBpZ5V4ksLu7VyHD44XjDfdXnnkypbhxtK2xihUtmdrJigxPGQCPj8zduuowMWgZhzwMyKeY6FHjPG7S",
  "key10": "MRiWCFMzBxJK3B6DHHLw7NgeiiQ3gXmHYzqKANTdssV43s9GNLtq7pZ52nhDaGFqVWvu84XjVnM7kVb1rStw4Lz",
  "key11": "5662SHyzCUTxMRe3vX2j4M2Kc1TFArLFo6zc4hjBLnxXkUMh49jFFpRqx7gvCr6kmEC83XkRGAtZW3ywbdGG9bEQ",
  "key12": "VbnXheKXTvn2JejhFsaDoCWLu3iYPga5YiKhdQLNVZRoMoqbkAn9FLcpgiRzcwP1z5Kmuj8VWHhEvP1numfsfhx",
  "key13": "474ggQSs3yeYDtJGw1LUJtEWxdiyjGBrykFY2cdDx2eU3eTN7pUcvzhB5qzoavUT2ABLoEASAeiwb1XmpLf8ZXx2",
  "key14": "2fF6ox3F352oeFk3iGq1GZNhSGTEEobSRyJqV368ygTcYvtjWzrwKnj1v5zmT7Xm1NjGJF7KCQLVP4KDZ827pxTe",
  "key15": "mr3H2xsjZaA4EB5LJxweMKSnDCN6Fuv35GaVzKPdEXEifsQrvanDZ8yZSpW9SU2H3B9ywDkfQFWrJrSFkQ2kpfm",
  "key16": "4a3RgmsqjUXu2RxzJo6qRCt5E4aNBLMrN1tRTQNoxHRPmP8t3hTyYaZSqvv6fQeEAcFRCdR7uL1doDkeksN4xiUe",
  "key17": "q8QYPJpaXYa776GkkPSQ53vPykfBhpJ52nM6BcvvWM2gsVhaUhCeBZv6aqCxmARESWS7WDfQjhZnZWtiQxfZB2b",
  "key18": "4BPgRgrZ6XaRfjczyVXEX3kQdGTVYVtJXvoXVHwSFygvkmoKtQVLp4ftfNZBrbHFDhCobC66mENV2UkA5vBbTKhw",
  "key19": "2mjV3PQjWpcJHckwuXthGRT3vCq5CboDejiU59iL8DTeWJNkbyCSiwu6KRA6L4BX8J4HYgb9V6TNLjmMk1pXyJax",
  "key20": "SoBxJyxtcZtkDqR1XsS19R71r5H476R1NoM7A3XC8FxjStdHSYs7xP84TT1yf84DP8E96NBKTSBYgd43Dvkjke7",
  "key21": "7BhiHkAiMGCXq37DZyZ4hV3RGpQNNFhCTeah7cGe7xkFECSX5GRH7LsMzeJT4FeP8p793DifKgKLzqoKBpSwETk",
  "key22": "ogHEcYoHTank3qsRtd7TgRembRx8BwkxubM3cLUMNmMudY9sXEnQ9xuPnYqs4GPbPZdUnhWhPNphnoXt44bVEQw",
  "key23": "2Hqj3UscYhaDQFd4jGk3vrAWKghuNtKEYnYcKfaodJJjR3XVK6ed7JX2PpLWkKMvHRb1TuRGnm8yU1ZP4txGbHjn",
  "key24": "4LNmQN2zZ1S1yhFgwyn72o2cE8GfjfmAiS36RhWM6qgJLB3T2cFNtsYYX5xW6f1b3w3wbXXyMojKxw4Q4tdRaMtK",
  "key25": "4FZUpRTWWFNLC4uT45y6MoCTjPm2K2jrBp9BPzJ6GdhEwbbwome22Xy5TLhRiwgChEmFaRooZvZsCy9oKetmLU4",
  "key26": "2sVZ88r4rHXq9bTTCB4Hu9X145UspRm2sfrocS2YeyT3TtwWW9D8H8HkYwyLeWR6TfrQzyn6fT6fxtybdmQ7zxfB",
  "key27": "4KQaEmqNo4vZd9TyTA6c3yTYKxgrKwzX4d5CGxLhCLojfdjKuhz2SY5LcFGc4rHpqBKwnqsdLKA88fA6bPzg2MPf",
  "key28": "2EDs6jAyVvvQB93bgcsKU13v39iGv926oSNJCGD8xCbdTHHVKv3ZS5WPVpmmtY2cCrPdvL1byYqL75Z5E8odPhif",
  "key29": "5N7Z7Wa7F3X1YPcXYtTLs3b2hkxzstKvtVAyeAKj2VWtBUzUB4ZARbQoCJvfYWuPHercRLvivKW7V24wiJjgzJSS",
  "key30": "2H8zGadhoxbvKcGEc8TCKbmjABdbvc5sDqUzm9zzmECtRrexPwTdx5hjsm1VX73cbXjAUJvMzKwvPHocmHmpbBa4",
  "key31": "1gdrPFFssLEVDQAygmpuscV3UDZ5Q2LwAxVtoQH1A8KyLPvwDCdBzbrsM7YFWBWfQ8YwjBgAmrFRRFPNst8BYjD",
  "key32": "5ok7z5BMV3Pn3Ato77BPHWX3ScAFQMXLUNthMuqsiBEGNSmpbhqn4NBvNB6tfaEDabwGaXr6fmZainbbv8usCsT3",
  "key33": "5k71cwLvEvpjwR8yGpnCy1azkR7Ko7cz2zYyQq2DNxv5sxcYq9ngJn6EKSeFGNPDzNBbBvtjoGjXkgaMnBZwqQ8L",
  "key34": "4b6CzmFBE3ePNsBbQZ2vJhHndGJWmYXvwmMSZpHUeUnJsEwuRjAGPwGvrnMbomfiPCLpaWYGHLmr3bPszAf1hZnn",
  "key35": "5Qb3JuN9mAKHA6MzRQH1mHAccrPJmhHqubKNuYRwAsgTwfHKXBp9HoioBSFshNX7TJ87T3SLzJEwP2k9ZVBpZz5U",
  "key36": "3gmxYQGUD1FtbbRnKHW8fYibGcdFtTE7YSP9jFFNZwnAm4yqbqeGhDcTpXdWkHcEmC9hunCM55WRt5Ra3cEG3ksU",
  "key37": "7PCS6c9Vj5k3oU1dRuAuPCuuD8tB13vCo5aQc1mnmXbSKEGKUi6MS9xpPx8SXTiyNaAQpnt6zLNVzkS8mKFTsES"
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
