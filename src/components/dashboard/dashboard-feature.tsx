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
    "4xzMvpVisLzXsySEUMSa4KahTMPJgauaQJdziBtsQAdJ114gwi3xYoUivoq8HoTno8BP7vwYjkrfuBAAgqoGmTud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jESuLAq38DxycRNKUAMA5L2HjZGPtrx9i4hbRGu2gZmgZLKTaKg4zwCKfd7n2CAo1ZU1nL7jhfRwpGGjE5Tw69f",
  "key1": "5euCHJhkh9qSwpGXnTZ4AhdgpN8qMRsUeLwKoEJiXevRKnwM8vjSHqS6LvzfNp7btt7TRG1VGYQpe4JvfxJjJScr",
  "key2": "38MDA3cVfd6EXuLUKeXUKRrDdqmVHBJwCHE54ydefkJYRoiscKPwp3B3A2ktNU6T2j1twJKjUeQGUfhXmcquLDXX",
  "key3": "5kPcpYQY8U24t7E4cScC3S2fVBRXardnxmt5KoFF1Uitsny7pjE7Vp4QwzANamtLPVAtCSQpUYGJHT9KuR9ZeV62",
  "key4": "24TsM69jz2iyNiyN9qJeYdHKJzStvNh4ti8Rzmpj5GwCg4Z5Tq3qFaWYdMMjxwXCCNwKb75TzCqpr1d1dDNDafFP",
  "key5": "437ZqggFEbzVcbUejrsmuk9fnCU5r3mmtB6S2AQpgscsdhdTQMRMRCo2xcubDaaR55G6o8eyufXLyWSfaUyGXdX6",
  "key6": "3L4jcVwES6JUbmJ9ZUtkVey8BjU1ChmT9Uf3pZDjFKwQpUtJPXhe6PfvUbBda6n9nkKtjBtm6WezTFY599R3Nnsy",
  "key7": "433zt67Du7y9Wgdt35uXuK8aowjMTYSHrCbrcchBroT4dVbhYUk7zn2qAEgNVjaJqwcdwGe6dXZCaf2JdY7YuRaV",
  "key8": "4ELmAVtM1fBCkYrH4tt4BQECWFHEZ9aDxv6dBFjcpePVttUbdKi8eqtttwbG7m2kE1pJpZFaL6hX72gbKwTdUSK1",
  "key9": "yn35LWeuDYJVzkhnPpUGPhNtjMkSSk5rTT3c3FTHFNwj8EXKVXh68FHTDHRsReDK1Zu26KpBU6FqQb7toZhQuak",
  "key10": "5fh6tT8SbRq7XNoRbZUhW9peags5WfV9jn3rgzfcER8TEAQnnDrrAnC2Srk24rEWNNdopqoVGT7TAYgnRzJ1Kc8p",
  "key11": "EQMVhaBJq9JyEh6NKt2AT3uZsCwQdwyCbCXjjjY9mNdaVJHX2P9xyBnuAe1M3PQyBRM9BaFnp2rAFgHLpZMfHii",
  "key12": "4YawZMzTBaZGk4zMpC8nucmYXSHhdC2emTs2rN5Hi4G7LfGqWrdc4wGXP1BMmLawxxKoLrzUr8QFqUKoFpztxfGh",
  "key13": "4cmaXFjiwY5zrb4C8zwvp3SW2rbfyZcm1BVeRhTba8Y7nopmeJRtKVnLsmtxE4waTgZB5j1eQ61JQoDWB14oTGXG",
  "key14": "bSKXS1L76KZxTF6DEChYZwPHTh2fiLvp6PtT9r1zBUhESvVPr3s8WpcRvJfboywTuZ7s1XbrD2vYchtWXmjGzuk",
  "key15": "3x4DC3pzZwMFFhc266pe3fFTGd71TUgsmMJQ3ispSxg1YuiCec3FRE4LjpfQa4qPWak6Qe7xFGbmN3WDpsMmC46C",
  "key16": "2UGKD7YP9GVDFXfYVaGC7RRtdT2j1J1887zzntwGhgqrdWyUGguymg1upLLK95GHUVks8KK2SUDoiyNtc3Kmzcf4",
  "key17": "3ob8vcVJctsKKaBShCMKkuRRcGKzx93oVxc5zmSEY5WFEPWFGyGrWSeWxN1UQrnPbnQ3RRZ9y5MA3s52tUEyY5JA",
  "key18": "4xMgxXpfjSdapAxjSmuT1ZBkMpkHSdfQA7tJq3wEYZvJDQHkSwMZLqjXp1aMe7dkks7XgTiYEGPh4zm9MGnw97eN",
  "key19": "4D9A3ZJFhh2BacBWH8ZANwHeasMniAgx7PvM6WMWgnZsMoeGjniQD8cuMhvmfKW3qycAMq9WZg659vA1RvZMgMqS",
  "key20": "2417cKW6itk6vDcKk6wdqgaHbUp8AVfywibtm31wJTF6jLfbqSsvKAzu6tfvKRTwifyJkspHaQ5wp86RB6tiocrx",
  "key21": "2wEo9wBM8kbFznRa2wpGS8LLcGFzyVXAhRzicufJGBGGMPpCFdqx2SbaorBqwXAZibwTxEsfVXMHyME9UzDqwbyp",
  "key22": "311JNyVB9wZQdUHBXRaM91LEXChvX5vLsXtAvMnkHy2ZmzZYJQW2X1hqy93onnztCj63eefh98Lc4FXEtPxeTACw",
  "key23": "MysgiJQustkw5UWZFRxTsaWBowpSi3rUW9gS3qeEvwC1JMHGcZgXGqYzpqMeUUTSAuM1xoKMsVTdHcLADNinmjo",
  "key24": "4bdmaTSENNn8ZVRtAByT71hAMaZdbEkmbTJQB1X5bS93Y7Ei51cDJNP5V9YPTYJbJ8tfm96rzttL31NEKR2xBw6v",
  "key25": "2fyVx3E1RytySSsjAtVXL2GU2MfB3dQPneM3k6EW4zNWAdMd1ErywAq31u2HQwKv2GiXYhArm6MT1zbxSYEcTBTi",
  "key26": "4kLrK1t3sb69nBHSSYPgvb5zChdpGtyBSfb1dHSFyXBXVJzktJQM9BkvyqMhzqQyGW6Rujf7wDX767zfXGxSBcsd",
  "key27": "5C3cqjM5ah7fkkr5JLimTj1Ys1UpoKCoYtZKSG1JW4MsevdLYGX1mAuQCPbwvgQ66dyaoxvv9CtFLzu1E4ik5CWY",
  "key28": "9xMLejraJ1tU7AtAoWSUSYmGXxebSNdyUzcUehQ5otWzgVLZTUcG73mjDmAyyNWqojLSW73uNTARf5Ng9xCyHrM",
  "key29": "5aViWSFVL8kRa6oN7o3moh5P2z5BYJFrX5U9XYx4d1hMvdV1qGn835nGH5WuZSyrfegNEsyZCz2Ze5NAGAndywwq",
  "key30": "Diy2zWyEYaYCTAjUGnZ8B54ipuxgNr2kJGYCrSenMUyR7usF5wuG8CMzYrSPyFCEKNDXo1n7vkjWduNweA1XQTV",
  "key31": "5H9zVcbSydZpLE3DaduZtwFYgmr8hx6Ry6NMucdR2AzaS8tgXt6XvhSQbCdAwXt1RW1T3sgAupKFonJfuLrq3ep7",
  "key32": "5YAeJcuNFToHmqbHrNDgEzxrXfBn7AFhYyyNFny2Bvah2CbxeHQ4e1adMvgfy2VvAu86RFCFQwxR13gHwJEiZWGp",
  "key33": "ZBCm8KxFi1RTLW4EEBFbSBsnqbwsACidD9MT2jShSH5mZgGnASTGS7VCEWJcG6EnYEjjsHxwj4HoNuoGZq1exPH",
  "key34": "5X3Hv3ogokWJMYRug1668bNx3aySB9uzzwdc2UyPtf4EQsbJsuicEUyrkNZRByCufk75FNGQdRzMkzLiz9tXNP4L",
  "key35": "59oXjxnrpq6KHTTTGN2nTvMy1QtknLoVC9MynSbv9rf7jJDymkp8YyfY9J6Ko1nDjQ1qafjdxawqnThVJ2CfJgGj",
  "key36": "5Juh7UtDSzn6wAh6HMPh8RFNpciqDy1Qp2yv6vBve873rMWFg7Y96gLJ2aPZ7FhyvvuYLY7tCvFxkSzkp4mQ5AeE",
  "key37": "2KkXwFVxeNaHvyiCS8ALHu4AdXcUuX2wgAB8db2aNiYSaMGP87XWwf7yesL98pwCg3uwtAyNW6HiSqr53ALYZw13",
  "key38": "5rmfx4jqqNCCrkmCmuj9rMdMi432cJTYvGPNtgnTqCE9mf7NfyxUPJyS5uzfic4L33g6QdThzLkSRNEcRRZzDEzH"
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
