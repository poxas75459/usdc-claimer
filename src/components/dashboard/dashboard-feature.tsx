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
    "247QLPA9Y4iMLEsALS1JfGN1a5nydf2f3yBhshPAgqJy1Yka474eRpjjpZqpJr8bSQdDFjPu8WcqFGEktFDjYVYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ewgUnhukYnyeCZ94ZKTN8X1wMan6S3GBsPfXnA2DA2L46kmBakKhErhQi1ukWp3QrcaKRNeSGJ8Fw3sneZhjutx",
  "key1": "2RRDZ37WVqr2gSCbbTwRmE5PiHmMyeNjyzMzW8H5BnEMoJubkraEHnShtV2DR5zjxbX2ZPwnXtgf2qPjQ56SbNqM",
  "key2": "5sREiizBb5Pec9n7nZdKX2EDLoaDhkV4VxHwRcq24SkKkNweCdVpFbr27Kkjmf8hJBxmaoTPXiXjW479PDSr2nKC",
  "key3": "45KEVVB8ohkWkmZMsENUnuUHmKNE8n6L2GniAAYKoPWVhoWoYpJBQRYx9nk1sFBw3KKngBBRpazQE6G8xCcMhXAs",
  "key4": "3aJcLMCkCLTVzV8zsAeYjgmkprYQAMiEYN5cZmXrCX1moR8v2SEkLFuR1c5CbUVM2QRjH8jQQRC5L2m6JTh7Ws9k",
  "key5": "S7GGrqDAU7zYK2WizrQYp28pMEhDJ8fdZiNMUqjRMYB5JJVRbuAaJswPnePBJkoF828JZGTJUsMU3zteYxhqkM4",
  "key6": "3iyZLHpEYPk7XNRjbimHnknG6Nvxd6GxfEWtXcaKZfFupTPgeC2Wca7rJzLhKqJAcQtUEP6cAtwih3Nu6wnNbrpH",
  "key7": "57pSb1iy8RVH9mAqgHVkeC3Zu5PJyp6GHYH3rkmiHnF6tYPLmYbKCS1g7NQXjRkVhNu7hFjY25Xb8XLYG31mZMeM",
  "key8": "6wpbdMFAWY24fhjvSZfUwvSFF2mWoExQzgR5mTisSNxW3gVFztTfm2zuMkwNASRjYkXg13twxrWA4y93qrAjyeN",
  "key9": "2CQJBbX9wFZ9ZuQ3mZ8f4zX5z1s3CbimNKi8Qv4VbhYWNzYA2pG4gN4wpBxXS1rG21JF6krxLYYyhVVACwzuX7Vf",
  "key10": "PrbaC3SqnWkZ23ZwiHgtfSHJzrDyzPEJKs9LLtD3sjVxjk6AgbzwvHbHKXyeZXja6JUrjCsTXceAc64ExQQmjS6",
  "key11": "3UYuhZYZ8mYoyMzpU5sXYtHfpV6wMBtZkFcw3L8YC6hG3dXFcZbyoz6Dar4ZUxdmbjxpuWsrs94jJ8Fho4vvbyLJ",
  "key12": "2N1v85UewzL9KGdKMqnbsFtUEkihrX2HHzNLkx82hUz8L8tL2KrMAHGek5UPV4PtrBpVN963omi8r3YPZJzWbBST",
  "key13": "5HYzTyVuxm2QP16FwhckLE1MK3cRwcLwXQbeaAVVqvSZcXB3h2jZd8JgU39sNE14yUBzoWioRAtML1Weoz1EdaYz",
  "key14": "5mgLQAkWELrMZSuhy2o4nscHaS2tUCd5BgozRazWPXZTp1kogbbijzGyr7jvTYB3CiaX3a5rtiCLB5qwFMksWKH4",
  "key15": "2gKUptMHSpc9vLUbJujHCMp8nZxRHgLNzsppU6mrhinN4WrHJVByzCC5oRRUS3CVZgUoxihaxbzAHTfWZTZG9C69",
  "key16": "3Q8x2zGsMP4rXRHdMjHD9FPz2sFWVy6UYkWRFhFAwTNCxyBoGdTJh11qe7QKtmzP7Kfp31EruyoHUYWoDC6uMAjT",
  "key17": "3pr8m3ocLSGfDzUa26UKHYNKzqWy1tqm4KULATYXzPU56Qj9mDAMhD3ciVTifpLotJGs3kAoWfBCLtWhuH5CKMpC",
  "key18": "2v4HpYUYV8SBZJCQdQJwfyuSiyLxAJY49YKHgRSXxXV8jvoMTGMW4wKLM1GHCbFZJkniSJfYVdFZ4Fx8i23Mu148",
  "key19": "4naEhgeMsVu5feTTREo3p8qK7m63ACEFXyXsAHjuLRL82t664jeYsjeDZRDSPkUptvNXUiKFkHALVwGYC9AZx4xH",
  "key20": "2zRTjqYsKY2kDJkPQDhZkftRf1DxjKeqzPAZMVfRnbqFmXVwmsnJ4CsVa1veBH1LhAuxWmVh9Jp26yjjy3tDauJr",
  "key21": "5qiwmqijU7ozzSPJegnjmRAL4EUA5UwEA8mkkBJHmdjMVJFP61W1GtYS2Jr1BuTgnhgK63YMuFxwyJAVfSrCskz",
  "key22": "4NqLaP5FkaZTwiRYxPpTNKxDffeiL3Y3cDcbYfkrukc5X8z7wHuVgcjaQo16S1eTF6nCdPS4ojuq6W3EgFvigmMG",
  "key23": "3AFsrpigzJT1QoqqQagDrnipKwjkwHHQFk8gBxMyzzxNe7tCCgjPgq5YtaHhSKhPakTMHKdE3iVWKFXKdRyeBnhL",
  "key24": "t4ZMuyQNv1gTno7JkFnzZuX33cjsYCNQ8GHp3CKdLopzBwDQFBUy17DgSaTeUj5p1Rs94ATjczKRBS3q3JvVg72",
  "key25": "QG2GPtKL6qFBmPtcDx8aXLU6LeV9DrwA14xFCw8BvzLVu3vDvFC9tQLcH6RtWBgXm2hHPK68rCnjV4XgxioSuWU",
  "key26": "w9tgFr6RfrLMX73gQXGTt6b5XSnAHauPgifcTmY1vnvmZygExQv1Le199rVugj6cqKuYzE7R2175wTzNBeNJTF3",
  "key27": "3Dd3ABhrjr7R6AdAUMhQKEajN7qdNnJAVLmEbY44wjyPZdsJLDbanz1QkFunfcfZcpPZGy2bVzh1rp86SJ6e67MK",
  "key28": "5gwoNVNWdTAae8SNdbhFjwQfQk7WajG7p1WQztekAWnXtmwUCTZsb8fCSEM3QuuY9GRtL9azWZVNsgSxTpZ9Dk5E",
  "key29": "2KP3rRwUQPL49z6grjDRc4v5ZmQi6iqJBoZYMAXKo1rMwdSkuvk7ogozPs6r3UEUYPJ3mSqNANcENM8vtxY9gtM7",
  "key30": "4HMzaRrTDSjSEwvpqmY5C3dzVN3D8WGik1Byy7zBEi16h4UiWn4xxUqNpUTQ4QXSTfFYfoEMF8hcmfmHC4K4dCBE",
  "key31": "HLZsQXhD85kaMFLYDPRnLkRbLHgnqaumbhE76gkgScVJ13Tps8tGiA7sFGBitXrnLha4aSEvzZ1SaaPFsziMhmv",
  "key32": "3w9UmxzmUeBzCbqGwAaWf1FkDkhMJTepoihZM6zWAAnTufQ62egTcKq3ehAmnw9SVwFDf8tjtBBQhjRNYggLCc2Q",
  "key33": "faLE8UiVDr7fMH9trfWD2WP9x6EhAjpp1W2bf5qHbNvah1RA53xP9RWPZaBWsAdM7kiknRqkbsqPkbUrMbxA9Tw",
  "key34": "3Eir2eNYiBtkEBtwgz384rzyxhJvJ92bbYcGqk84vCZbGqLA9TZXtLwRcJz6HjjbTywmLDeUawx6eyf6mHRT7gPP",
  "key35": "4M7pqZx635bd7x6z2Zo8UuVopAFTUp87KHonvsZD5VECMruYTA6Sey38mkMZVFGHJPKd5HCrqffSfpu73d1jftiC"
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
