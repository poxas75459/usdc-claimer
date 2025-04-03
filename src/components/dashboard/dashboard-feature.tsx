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
    "LGdEg16e8iTqqs2efT539tWgihSmFiSwSyQdwvTvgMXRPGx2LwPe4eQ7bcuMHZLsCpgAjfptmJgxqtqh5pKYbsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54MAbvbYiW4T87yeQcNYsqPuS5vGuBZ1vLEMi6FvEQEAg8oJQVBHqJHH7EzXDmb1MZ7U4q8iUnTqpQFcsNfLZ5bY",
  "key1": "tEECa6kA3jQWfpH2KNuSRZtz7q9zKc3N1C8edQLmNtFP7Xd3QMCYQLuYQfvdJrfftK1VnmY2PVqniVrsDrQCCnG",
  "key2": "2bop3g82RvdRfdC7EEiaJYjrdsBtbPe2bBtvX1d6Zesfgvswqko4GpuCuR6QKWYKfyd8WV4NVtPE9AVh9p6JC2qu",
  "key3": "2fFfsyX9z1pSmGVqPeScG3n6MX5y7nNeHSEG8xndci2W1Jdan9afNuUSxbAYmmVFQLBu7C2Z6cCi9WkxCBpx2VdW",
  "key4": "4GsCpk6m4ajqcK39VrfSnM7BWopYWMm4TZmY7SnP1jVXSsdDBWSChfTb6fGbcNwsmdnZt7GCDGN5UFeADVRHB5Pn",
  "key5": "7uvGC1jFiDf47jLdsatZiVEqRVgbzDV29XGgDLxTZEKdnz85gsGUvhQChBH3ARCSbS3N5YwXBWGaGsHG4MFBZgx",
  "key6": "4mpGXd29brysgfWoo47RryCMWDCc6tK5yREvkHn3rubReTo53LUnhYPdKCp4rsEwsbvEGkoKiLAaokM6vgVDt25e",
  "key7": "3J7eZD18G38zg3UqY8dKdGT1FsTfLReT1sKMsedQ85z411Snhp1ZdNrP8vRxR7AVerPoWgLq8XbaYNCvGMQRUDNb",
  "key8": "5uVfRGfu8grqJMHmSWUk3v2FRSnGDd9T7ydsGwDvSctqN2PweLAPEyA1WLvMEFPnGwFHjfmLfmZRtihs54RoNojG",
  "key9": "sxKenpF4PdaHCubcLfXb6g9LxVFTcNEtK5Tu9QujoyhpP5WxWXz5PfkKqBpwc8uwfkfDvHTgDpwmQsEz3nJhmow",
  "key10": "4kfKUM4UKPLoZrVddjwZVoRvpYLVkBoHiHxYFge8aRhAwZX2RhP2F8A3cS6NvBeL8jVRrX61dA9h4sfBUtE5TrLZ",
  "key11": "2c1ZCXmd9mVznYQ1xtS4dqXhoZKrtGrenUBfgBU3fMbVfub9YoMQpc369HS3iyxuLvUTwN6rimNoSMZJnpNDbZnN",
  "key12": "4Zzv3LLwDZL2Yrz84tXAto53SrMWcBbzaCKGfiEUgG1k2R6YSVFGDUmw17Z1obxA3Y5HRLJZi62eZsa2zBjGNyDz",
  "key13": "312Ft9g8NuoX1jX6WT3wHHq9yWLE7zG5quBvaghvHWj8QwgDRNBmasPmgcuWqdYX5UjWoxRHks2V8zQCfWF6EwWp",
  "key14": "2qxfBfFVhvrcEYeYKFsmqprqbCDqUFbFFHWgnWHBG2JBqv875aPAuBe292SjLTBJK8yyi4AhnEK4u3h1aBkXi1cR",
  "key15": "3DosYnFQ5Rt2AiCiv1xLF3dEt94j6bBHkLJYPu3ZsF5gCkB2ctoLMEUFTCPu2AUTw9thBZJp24VSgyUiZcGGgycp",
  "key16": "3KjjUcREAtghdvu7sMLLpbjyGpMyX62M5qNZZve6gc79FswGW2dBm2G5c3RBLVAKCfyyVTkv33Z9yjCzLRLsZP5h",
  "key17": "5fPwZE1tRSa9VUF2HVvPHzKc9NXzXjBSC7pZC2Um3U6ukBEFNcmty6nv2woYEZS6KcSjG7CBoMq3V8gZydArqLqM",
  "key18": "3r835BMhovhyspzBhx8kZWaG8VXA76DJwym3dkbKCs19iffHqj1JzVaffUGgSTg59kQCk2x2xf1uLpb5KM67AH8T",
  "key19": "5eYNH8iRFva6QBwG5TYMzUthg5EEjjdtCd4dXPxm3fv6hYApXNDFVHMDCusxtrBpMPL16Xnv9s9imWboGkTXy6gv",
  "key20": "29e2oAbak5smYLWRLMKFTVCycbsjTciaExs8MKGVJ1vnp4rZAYfNjCJKLkmxdP2WNQADFyWddwsz84JhcExGkMpZ",
  "key21": "34qAuLnbYL9N3ZjE94p9rfzH8TYCmGKt7nvpahtukohLuQbqDwJHiENkczE7rrzsme9uFyBYYzA8562bLpzdH5ZW",
  "key22": "W1QDBXC4jjpCwZZaLTEuii9JezjPvqZ446j1FHNap1GAi6z6M6iJcFRHqwKptVw9PEbXHAhGs63vzQyfD5Rwcpv",
  "key23": "5ZBfXuYUZwyFmdPG3g13yLKDoEjgsf9hcd6xYEKzqinCktz8YUbodWoSScdf3a3JhXiEB2MVASYQhqQkXcTvWeq1",
  "key24": "Gj4Lphr8GATWYpGRSJ9hiBYmFoyH1fQSPFXv17PQU5uwPGzBkPk6Ez9GCfrUHkkwuhuhmSRHPK3FB83okHhk6bd",
  "key25": "ySEfzb9esrFJ3dYrXphChc88kMw2VkecaaCTTAo3zTzypYn2Ftujw2Lip96iRXF2c1aGJE3pXnugqgPuBAnavQJ",
  "key26": "4d4gTgQ1zDi9usjvc3JYNPP6nZ1AQF98sZGFBcFXEVFLas2W5pbQCQKcZvW74ypD7UX6bVwA27ocPLzwHdTERmJr",
  "key27": "5nyULHAbvgecWX1howUzcRMiF1rmhTyhGh2ruZEbUZzSUVrb4PcbdhCoLLu4RCBLnnynxK22sYghx7YswrstxJFL",
  "key28": "2zwLyJCANP8UicpbfiMqmySV9v2LfSfYoSQtdu8LWJ3f6sgx8RwnkWxG7zCU38fo1EgUf9JEdM7f4TvyX6wZS1Fk",
  "key29": "4TB74NzM9BeA7XX7nn9hAVXzLDBRqj9ttjfurWEgSWicyQfy1iwe9CvbsiHxxdDhutwKF1fJwH3QnN12HL4qmc35",
  "key30": "5swTTgQYenK4uGjcbMHTUanxzD4EuSn4EDJL6WD7kvXLffDiJTd2dBiRZ7hVtB6unUxSq3Ne4uJo6DKEXUxewHp"
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
