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
    "3vK2jGTjoayPVvWDHUdevZHMD4gPaeNFfYVkVAqXTK9HWYNBMkEHZn4Wv9wiJ2jzGoSNe1Pm3C6pREnembm8411k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21w19Quxhi8a3N2BuFpENN6cQZfcie2AypYz8PeEidSzc9srHKwH2wXxetGGJ3Q3GieJGC6N4MtGdzWZGSq3jvcW",
  "key1": "3Ss7mFPvVgqZ2qsXtgfNCprd35ZoM8NFoNZqHfQZZtttZNXDCY16Aszpkd2PjfyjhjqKbLh3k698o2K6pvP4PvpC",
  "key2": "3DrRX6DZ6hR7dNSNAVYBbRXLbR1F9qcaJZdefvpmEnfj2z1dynprETdJ43hmS8ioGCj2kt9Ghq6bKANuYGx1uHZc",
  "key3": "3eudXvfCVWLZJvaiJrcPTrpUEr2HCT72ok5WwtHstDvyU4cfdEjucK9WyZpgwxyWP6isBSP2fQhkeH3aqGC5YqsD",
  "key4": "3HfUpHHhtTjqiSzHSXhezeWVQzrN2fQt2TJs3ZMKcu2brzdkzrSCdnBVNzKHqjmXcVzGTuRZTvaPTLHKmcVCY2xB",
  "key5": "4EvkSyPys66ewNZwL7XVkqVvtYejfriErcEpWic7zczyFUVh1G2ZPjZAxT9KnsrKCBiGzBu5UxwLLpfnVCmPQ5Ke",
  "key6": "26SuyesogKuA5RvnJU8aYV2tUDqVvPCMteDLW87EuSn97dfBSCRPwapqGycjFUnjKHjbVRxBveKCcMkqHaM17VxT",
  "key7": "33FrHcVHFvHYJaweyo7idM1K3Njc2NLxb8SGZmzbHMTEqWPecThuu1rfpGrHhPY5xP4mCou8g7v7etxMYE3NEjgu",
  "key8": "5UmHteXfEPqbDGWsZ6jr5qvFTvvXUZ7trT2a54J3y6yoC8KJZEKcBYadfmwjfSVoAs38bVwny4CX8j7S4YLEAUx8",
  "key9": "5UppXExigjnbvzHd23Fzq7UbTmKCwq6dtLR6tvoqzq6zhbnbFUwvdVtoxTbFXsjJsGSXvEvioVyYgFC7CDReLyN7",
  "key10": "5PQ6smget5z9RnqNemVKbSXsSS1rCEhmXom55Fu4QJQ6JMzP7WiZJgssNP4nRNzWd2GVQjFsRDc6iCGr1zNQDRXG",
  "key11": "3FXpuoqJR9LyDUPTjQVRcRUmiHt6eZFca1NbUcg4hfiTMrx3LVcXgNCCJQahRc15tfFAvsC7grgDMN5ujGzQrKWY",
  "key12": "pPde6QmhvQE4b7AgfebXVWG1izLzmsugw9ay1vQ2fxWuprxNsqFutvSDML53wk8vCm8HUwwXvQmpPhnWyPnSZet",
  "key13": "3pAjgTN4N9tyWkbugmHg3SbQTdU85KvmpBy5Wz3ZU8nrDTRUMx5T3iYJ4zoHj86nMwnK9u9chW62P4tPUGkXdaBN",
  "key14": "29awwFYzJD7cg7vd8TrDZn9D1G39bCPHqACGceSuQNJ6A45exicwYfoRb65ucdFT5zpngXTWjNVDd3p7Ptjorhzq",
  "key15": "3QMYmZsV11FGAM5uTUZKPWciZyEifQcLsnMnSykMyyXS6bLB5ZZxZQUpJ3huwg5ppJ5ayuz6Szo54Gojw2sfHkBv",
  "key16": "Myb8Foco7duQuqoBaUHT6MP4ujuDHH8TbZzM74LrhpB855BTvRL5sjaP6ab8UGbrpCmzfo7SudxsmuTUz72U6nX",
  "key17": "ubnGZBJT9x3jX9j4qtkMBcBHpdQCzG1E5EdtF5ZAqgbafT8gwa8or61n9aPMpA3qoJySB8bVvwMPbFdVHRbpP4a",
  "key18": "2bzEiwijq2BxH2TuS74GJo64pgGLQff8AjKL8yhe98PUDRMRY4e5uVga22No72d8SR4xXNabFs3NygVAkCgr1Pa1",
  "key19": "4qqpiyfzng63mRHSkgs9GB1hfFYkp239FJ6dLmUVhtDfvZf835NXp6E3zCgQry9u4rXprGA57XtWNk1k9N35cS3u",
  "key20": "4AM7hLHE9NSTq5PxivGK9qg6EpsgVt5j32yDwFsvzUTaCDwakCU4LWcXaMPm4ahqaLYQKrWdVvs7roxq9D6y1eo2",
  "key21": "ThpeUSVncY9eYnKGePRuVsBFUiQukvbaXsS2p6o21hEpFeWjSchNbPupDXtfK6uZ4rDdTCSfnjAAhcyiJn83hFw",
  "key22": "2gaGpT6KYojXbCqLaMbzw4NQSfav3UAWk62y14KbvYjQ1cvKEWTxjWj4p6otv6q4ZVG1ajRv9aXrPQyAu1VJ15Tk",
  "key23": "2fmK8DVyeZkdziMSA1ehxujx1ynyQrsfpbwk9BTmWdv4o8KdEE2yguR2qdVGJqU8Pzf9LkZsQJsJaB2vT6nadLuA",
  "key24": "4ctS7CRoMwJMePSp2RZ47ReBbJvLLJWN7GeveVVajAiUyp6JCpvUhX4k6meDGzYQ8TFrM8jF9qcGsE8v39agCgxs",
  "key25": "318un9BB8u1FLJbsw8tyTGBAAmE2qnFspzR8xqtY3aFYNTuPGNERbCrRk3n7mCcD54k53RpwMFbUE2JaDhLK9dHf",
  "key26": "4YmVU2fa3gLBXB3N6gR9BKPTYPFVSSC1a7yQhvHmwADHnRzeuL1B9TqR1sQfHc1Da5KSHDbuzxW3EMvz2pfdTWRG",
  "key27": "5ohTPo3h5LbcBX3LJCBnZkin4miL84Md41sXRSQfyHHrhksjXh8QsAQWNVTqR4SzAMQsWaV8nU1et3j87N4gjMUr",
  "key28": "4zGJCv73S7z6LEzpcg4ugssh2fEYyPM2V8b3ccTBrCBrPLWxQ4JX5yoqP2EbmPsmCCiVnwmizDkSpgkADwHnJxRY",
  "key29": "38xzyKnfy3sdNhoc4myTmoZp3S3WGqrts5mdWxDJdQZDSFxEePhFJqxf4spC2NUsj6MBEpB3SwnbPD5xRnesjmW3",
  "key30": "vhW2Qme5kmEziT6RywULnaBwAXqkY7A8hDK4ChiaBYhS9kQFFbubns4bn9LNYC5bvB7PdbZSG8CpQfm2txzJAgV",
  "key31": "5b3JYtXcoXjKpyGNK3wBPfMZGxpWm7HZvhtmAS2eHcxBhtagxCndk2TbN5FgcbkvMnjGNuxs37QfsDZAZtvR6ARq",
  "key32": "DiaFo5mBP7nHvr1UqWwMX1jP6LQ1d9vJa4pmDfKhQhTn5wjxhDwo8sy5Cg4nSdAi1FGKMSEVJU5fQ7RkXKBdiay",
  "key33": "3RZRTongADUFodv2NJk2ns8F4VY6Q6aP4HAkYWyX7mqUxKB5fAxzpGMCN77oQpaXBHaHVnCQi7UpFxHAmLoRKBuL",
  "key34": "58W5sm3yPXAyQVPMQbpyG5Wi5BqgtA8zqfCgdFB9ShibBGEizr5HS4nxBw38rMJK9ymhVppMDSvFRNXQXPJUuj1x",
  "key35": "YDrxvdY3jpe7EJXBeoiZLoe8k9EVr9yCqCYgL85NS6HZc2fz8RkahK954o7LY18Uef3d26BfdeHr1EhUu2eZhAU",
  "key36": "5ghmx97oFnZbgpPJzEaFzCev6Z6vAgHAAZo7m1rmqKYRHXJCZR6FyqZFvreXnxL8vCdi4WJGD4LooN6KQcrB7EAL"
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
