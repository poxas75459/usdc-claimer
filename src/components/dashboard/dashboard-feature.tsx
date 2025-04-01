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
    "Y9f6E1ovg3abtzS3R3KADDo5U5u7NpkWdpFo4eVsgCJUuMMVNw85uPoNzaKbHNonJKtuRntbu87sKD8ygQUxMiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZhCyMwoGHCid3omYXf5Q9bRwP6mfLDfvEVDLTioLbgMsP3oKVXVtZiESuDmeZbRQWpAm1EkwkP21z4EdNStnLWg",
  "key1": "2SfyFTJopVBiYsStz8dW6j9cmufHPhEyxks8Bhxu4vSoQSTrA3QBd2cAWWa4Ev5mnYyqQg69oG2U3j1qfUm9F86h",
  "key2": "3WVRCe7CnfuQhbAV5S25mkd5V7MGvQkpcvmtGvd82eVXj5FHSfSd5tZDLZtGmQrJfP1vhmdsLdnaXyxNjzK6fdtz",
  "key3": "5WjGGzRYLbRvp8FyHBP6Xac5D3NAFEuKXsJyUbhRtM7KYNzmZ3Fej1Tic6gUGqsMvVKzf4DUfjtg1FQHVP5A72M4",
  "key4": "2spjnwVwBH2REtWXC8k5jS7ZhFxrhtQtjB5MfHxxWk9TisxVWoWabbuA9J7YcCf4jAE61SiA6mecLZeYGsiTogX",
  "key5": "TajUZFU8stCXDwHGSt2DCxPRwxam3bD249pp3MwH6q49mETtH37GBefjgV5FUNwnnnjmrcedXNfpCNSTnEEfmsa",
  "key6": "2R93BaBE3k9WtENLUeJ8fhKDes9w6XzeVeYHf3VWe5LYzHeTKs9Qj21dNnpgiiRHhH8q9J9QBk7DB88fnzzrZ68q",
  "key7": "3kgJrfQ9kqZcJ4zz8dH3ER7XuitPmNqLzHSTWkQZQPpt63gaa8zFSugqpgWTELXikkdcnTSZ8p3tWKxmzwF4cQPJ",
  "key8": "2BXP2gxmK4PycbqiuaTb1c5YcrMFFXTNBwjkcs1tb8C9oAakiGHF2fnFvZbUcepwz8Sy88u8SdCQq2F26gpfQtFd",
  "key9": "2BMrCXUx1hSpe2W96NgcWuAyaQTqA2cVoqBYGimFCK7hNgt1nXQhmqRUvVLQZFH6d7EhzWm73roYfCGEcvDofvVh",
  "key10": "4Bm7Kkqwd4KveSbmCW7DsgSbHrLVnZoixwFWMFWEhQLUM3fnkXtWbfMhhGnXyEQudSX9k4fr2TKb7a7KRjxHhYNf",
  "key11": "3Ev7pTjtqLcvcagiqTRxfymVHXGbqHExnsyKzfqN3hmRTTyNJ8YpgXVd4y2cMoeYRwLTJ5dZLFKRFWSQuJcsttxY",
  "key12": "3N4PCwXuqub6gskdANZhSkrNz59hcg9MJN5Pec5npwPYZcZm91uhptt4cHwppRvvodU5q8ipqsDip3iQawFFCLo1",
  "key13": "2wopu6xKgDTtNJFJAX8C1cz5ALiX55TzCWbRLKHhaViFi2GUpFkQ4GKTHg1ESRuXVsv8VfQS2dGTdkb2fTyUPG7g",
  "key14": "9XFA7rbiBs9agV2kGTivmrEvbykocuQBWyFt2jt123GjL285hpHJdkGLTckNaZhEjvHzeuGnuERhxik2BNPMnML",
  "key15": "22yyyqjDqwRWVaTDf4ttGt8bf2utFyxiBxzuPTZtv29vrbJZXQrg9NmXJwhirVh7PYTBqCNLa32zMRJQZsPB7wJi",
  "key16": "4Dgvhqt7aeAeuJc7DapRwSAXnAU4Dbns8MRqajdCfvWxVVUQjaX4PFm4WTnwS2rYUYstHEj4ZGYSV1CA1vJeSUyL",
  "key17": "2gXVAkg8ps11aZSLN1fxQ1yD6uivT95gU52TY3BNc1obNbsyDkijoHCCHHnWbcr64bRx53G4sSYuwMkLiWZG4q5m",
  "key18": "Y2mtPkg8zKKUtUt69K63zRRhpio3xeVJEzda8JnviyfCSN2CmbRfdU7VSQyTGHatmGBtegQzUsLRdCZh24kAQn8",
  "key19": "3fWMArUQRXh13zyqsmqHPCDdBWQbUmXJdH4qkqbQUGzPdXQ2u4VhgvtQJYBTGNHjpEWYbW7pdYuendjN1jTUon6D",
  "key20": "5aGKggoGnKKwfoJkgPJW6nkoPCxAJe2vfMjBLc79Q8fCYb9K5HJLQJH3uYHdUcXj9TT7vNchu7gp5o4ngPSRZ5dJ",
  "key21": "3pqXM1xkz1Gqk9F5ruUrh6yD8i3dJc2aJfWEznbHCKZfb4WAFNSG5QK7gLvA6kDHuy5VZ9cKmwzhouSin3EuqK12",
  "key22": "3Dki6B89sT2pibyEw1PsuhUw5avSzc4DtwmooqEL6xwWfhgipLA1QukU83XDEUCsLtxaH2VwfjC6gFYqdqcvQe7i",
  "key23": "3wn7t5joh9RdSqwCgnJEQ7R6J91VB3h4gCCzfzr6iHH7iYajAeSqWgSRkJKvNvsf73GuwVGRarD7Z9XECsidwDfX",
  "key24": "3tvzkj3BzqK9G8skthug5j7Uyad9j8Wju4tzonbrXLskXLcH24S6GgdMTGwww1j6XudLQBaxZBbRjxntpJKYrzbi",
  "key25": "2uvpooLqmXQXAoVkLqiqdGvqAPTCSd24t5k7frkYdTd6orvzm8ty6Tw5ccU4JPaYM9Zro31pXK2cnEmAsjXUJ6VZ",
  "key26": "52t4Tv4h28moT2Q5xEkmuhqVEUb6UERoa1esXQWyyAhoGn6KT5UhzHb1Uj8mGnuP25uFJBz3mzR62jzrNZ4gmqpv",
  "key27": "5yfYEwUFP2M9t7HAN1gyYBBqEchM8pnyFsdaFHYFyX648JraTsbmunq8nUCsSPPFMh7Wbs6bHEkm4gDTY1Nsruab",
  "key28": "5vMkpRLf9FwQY1UsNQxmdivkwAGRti7gQffFbiE3amN3on9WV88GD2XnH7snuo7z2dRcZJczpgRN5eEfnbUhkDr2",
  "key29": "56P4r5PFVsadyxkLk1To4zVDHSekBuMmKj45jaZaqk8D1YHUAhDAwUdhkrphRaZ85177yXxLPsR5YBN6teRh73BE",
  "key30": "5dr5agYkQydaficZCg7YFZnoTs3cCaQNufwwoBcC78zaT9rjxqB155uNq7ymw3E4Q2y2KRDTGaaMWNzCVobFcJpg",
  "key31": "2orGvNKFJpKxeRmMCV3kUAFyi4aAJ3DojZhir84DFNiXv8iALSXqNfGcDF7PZLNmSvjD6nBWoX4MghhuJiiAMwSJ",
  "key32": "5Lp7H9d3DTWwXNMnrRhKdiDV3HkgTwBPCzFqKaXbmcdipmLNTR65e375TsoJYXegZeYKzzqprqSEoCcPDSU93chQ",
  "key33": "2RHc62Ddy8GbHgx1boh4RHHmrVT3W1bGT1rtTvA7ydWncYoXctB5xARkTiEG94FDrkJehJHM5j5fnbbhvovqRKT",
  "key34": "2ALukV1AmooN4wgdkm78XmsKfgJ7Dud64RvTr5uhKXZEB9UwSDCpqciZZuxhgVGGBeiNUAMd9LFbc4ckyETpRKd8",
  "key35": "55rdoJMzJqzvnkZUrzVRZopgryu2cburpT5r6VjGt67XNqYrKhtS2dhHe8Cb3eJaUyL2XuTuhWQLH2kjji6CiR9G",
  "key36": "3HhpuqPJmwckteiRZXi6g2hb1BaiMyLfVixcNq2akHMiCUVEzcc5Km7esPUiFBNQnsZxfzAvDww5tSQ1EMPuqwJ4",
  "key37": "4bmxorECr6RcbvHcPpgESLTx2ffWeXimvVMD3hwvnJaPV6yGqi4mRzjxtEyNSRjKr3Wmhft4KEq2ePmgH1TN4sB",
  "key38": "SxnaJskU82tpduw2AyW5ahuiwSgsz16d7dFoDw2Uoy2L54SibdfvAQCfjNNdx6Yt7RkzC8cyzbYnyktGZmUmweq",
  "key39": "3XiYUvTNLH7CMCCPtG1LGQJDMW5FZKN9SktetrMoefHgruK1AUB4jeiFb4N2z88i5d5QvxJBnSioWfxzUz3AivXe",
  "key40": "2LrUcoY11KxZDSsA6cv1XFEPFrCmLFAHvCuGRDK67h1eZtcmobPWUZ5ZvhZsSgqPZ3hRsbUawWWuqfQBavwR2Hqg",
  "key41": "k25wzF2bjecGrui9L2vJVBLuQsrJ4VXNMGPDPVfXwzk1cTjoXPhtu961onEUWVjGSY4VYaegizwfP9v9EVPGftm",
  "key42": "qV7zh6FP5WfkdfNbHukqaZGdPNBe2ZK4Lxgk41w93565hbZKPHTMJM6npzAKXfCNdiTatUBUTfaEz6LNn87r6FN",
  "key43": "3p66AiF6nSjpzwkLti3FRjeuQi8wzz7kqdnzcjppttd6JJwon1WG2PaoCpAwTixibAkJwXyXkLkeTeMZqTDjF99u",
  "key44": "3FyqTQLa1EjJJGtnU2yWTyKCi3F9wmdGJDrsihwcteovzDTEsiMSzwZHHfXfQgbJYoeEiPdycLTruaWUjVHZnNn1",
  "key45": "vCPbbqoDiTo3WYFBN6AsnJcsrKnjWURUzwSnTTjhG1tzaAvUTsQ3ohhNeQXYEfDoCbhtGZ4icGgPHDHg7F8Gsq3",
  "key46": "5MZmsxvcsWnnPLpzc69bEoLpTsD18fErafnstzhRvZayPZCx5vVry7vXciy5JuxQx9s1hvsCviv29TWoD4Ctfhej",
  "key47": "4DWnWMEPKwGYhffzQyDZ69XoLKX2xUPnqxcSdpNWr9VDcQngR99qL1Lkjhfo46SShUXRv1WpZBy89UiCB9SQiAtf"
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
