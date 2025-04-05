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
    "2qvrRFDQjHuKrM4bNv2bSQCUJUwMGxPrp2HpYTCjCbiSKA371SAHFwmBYgotgbur7bNYbBDCf64KZpx7XAuQ5vV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cjNPG52sxS5nmP45y4YZBaYcsUFQttSjRyTSkxVNySTihytBZ5wSL8rVASbBf3maG7mH8kfREiVrb1pxGERQkkd",
  "key1": "2hr1uR7M6cCeVFHaxhM3FA7jkxn1fcAC5jDUof4PTM84ssMptNZgS5RHa6c3LoLN6YqizccPWrFMu3vqzJnLikph",
  "key2": "5oMjPMPqiqhBTJABAiSyUYfKAawPzPzaUPK5Y1EvhxJWHoADcqzUpxxhSTv8p8a2QTgecb3J6sPXgf9o8TzY5EK1",
  "key3": "4LJkUAoBHF1tUwGH8jqMYgXDFbBNpXx9jA1qAHcHAC21MCD8zdz9dLCmqpMSmt3MvxZq6sotb2kvVVqkHPc3x9z",
  "key4": "3cwViCicNZR58dZZTqkbitkCvZcL5erPKEYeJhDEiLgdSmbAQUYpdDWCVmaxUXZ8WaMfssKMSJEQarXk7iMQugcS",
  "key5": "4ikBUHP3ejRAAXs9JpcUHbeZw5S7E1e7sY9FsZ4CeYu16CriMMSs77uGmWjGaCnQHGe7xKLAvtAUBV5uCZr91MNh",
  "key6": "4sFDv39eWa9dXv7mFvHbRyLCgwkABWUXgDMYzHJvRjkLRh3WRa5pDuCkxVyAkDqKbU2RoKmtd6PPyaHjb2n43erT",
  "key7": "5wmyCoash6Vx5QEJ4RDqfoo27ohHYuMsiLafAyuDdMbkzc9HN1ACbsWhnzHotNpxMma61peM55zVzDchBdBmoAUh",
  "key8": "2K7B3YUVJ22EMLouW3qjXCVnqzJCEP5WFZgZoL6uaNH3KxpJLT4sZEAAzqErtxNPtUqUcsnXmvaeBqbtHaRxfpt8",
  "key9": "5SvTb78EFXkkmoUeqsGPftsiaPgaV6Td2PNqQNn3oxEaCbpK9tsvvZVdsPP3PvRva68uytvM4FqDVAGTCgeAqkSm",
  "key10": "2mcykuDn3eR6iSkwRuRR4F8884Xrua7A6jKBzV8xXSXnh5Z3bBNReJZBqD5SvYWZrfR12UU3JcNCFPtowH1rWM32",
  "key11": "5WiXraLMLKfmKuEYpA4Jcox5rpWyak6mSoNXEAeMXRHnf1y8uU2QqK2Y99K2um4AUU4EDN9VuNQK6BDCjV6EHntU",
  "key12": "65TK5Vzr4KeVxAaw29V5NwAGcwVCKJxpiLAkaDyyhozv1AHPuxgPuX8FqPNdBrU8YBrkhLHryHDA5qFCPP6xuojm",
  "key13": "5ZnXyHibgM61RZ8MNaTjenFM6JhRUWYYPHUHuaHsqjNF4r9w8mvBEJRU6HR53t7GPkNjJuQedMeSyYP7p4rRT4hp",
  "key14": "62FHk7fEqrMBLvk6UaL6G3o3RXi3q6yFSh54ckpGCBKkU5wEz1T8RsubtjHQiUawZ6ZRmHjECswRFbET3MLkk9eq",
  "key15": "BnxJynBfbqGLBgNQbKPhqV2WahwHuKagVqpFLbgMYfnECH16AbjvcHasx516zEWo96qe2Q7wxUgHgzTVJMXGmVE",
  "key16": "5JqCMFBEcpPzJoFwhqTnTHh4cnVPVf7fo4iYipzN3H42QbUcUZaq4hgK19UJks1sitw66VbDJiUiRYdRtF4mPdmc",
  "key17": "5NNC872qkA5Ypap5fPtuicvXf3eRTQ7CGVgucPFSxeMFwcxiSTMhTTkjyxQVd1zh9qqzrufJo2Ao2FgfyFx5Lo5L",
  "key18": "3Fd7oTmcHGccZJYSqh54f4n355UWxFcR3Rd3V4C1LNGTfCAVurs1XK7PdAD7hqQWaN1jg668zNhej2nuSur8fwqX",
  "key19": "3Nr7b4wbDQAJDSPLH18c7gvjW96hT5k5sD9vBozgbGt4hU3afXgBEcanKYNkLjx5EZZjJhjxHgXcbLMGz3JpVQ4M",
  "key20": "67L9wbNec7oqQUmfKYb7sqYQ3xu9KzsmBS6BRjXUfDLZhaSvrwCq33TsJ6LMcJ3DWs8E6cpcADMhiDisgqtBUyGg",
  "key21": "5SVbvP91Ca2qcgy23fbsFPDUKLzTWWqtcqvjTHvVLm4igv8gUfRVu8zFGiFUJxaQX6V4FWNxxqQgUdC5nY4TEQ8C",
  "key22": "49uKFko3qF9RvWwuwzb5tEXsPhso9UafMFTqb5DVwewdxcfnwrLH7RjvkwQqMqxk6Pk8oDvaQhTc9PS3HFRhVihm",
  "key23": "QVyBkaJuDURx4fpw1haXj9j5LHxDNVDjxn5YE2fvAPCyA5Y4YHieLwJHi3qMGkezKkZLuXY5pw9Y3fkqs1SPh5W",
  "key24": "51arjhhet7fPK8AX4irDeqgXT1MeoQY3iAbpYJddQSGKtwet4Y5EvUJb7iMfgQrNM3HkfsRz1PdG6ozXcabxN3Yj",
  "key25": "2jC3Bo1TKJ8PB5Tmm9CJ18r4datXWwYMjv3ovN4hYywW7fU5ZREgfiubabRbXcCG5h2uVCN5USRmBqzJ2jkKC6PC",
  "key26": "3hEXaxiULpdk4qAKSMBbrUPrdhAFrEThCBzju93smHDnS5edJSgnrSvNXdqpXCjqXrtTpohzkEw1heZmypvKnscB",
  "key27": "4S7yYsGKdGSUguveytvpWs9VAFg24d16spGjdUCquFyb4EDwxQxfKW3M3wx6pauyYJk45dtJFjRhxcHnC2o56sTN",
  "key28": "44vELHRsvCgd8RYGtRXMr5aVfcqhQz3coprxhbfPQcnujUheTNeeCTJMoZJa6VNLXrxxpu8uskDWGddYfe3Q4FBm",
  "key29": "2sZbwG14gCmJhQPEeQWjj46aMK9dD65vGRc6aj2zHQiHx42Bry12hkyDGuFP36dZBJHTyrbRyxBcC7obywZ3mYjd",
  "key30": "51K1bg7BHQamLS1bRv7ocxEmsNEwYCxyMftniVyjKuApH7WppmbGkPKZnhskiguCCjFb1EijwEQfHyCw6pHtE1dL",
  "key31": "3BH6wsDKCAaBzLQNp8x5MiVGbyCACU6niKjuQFS3fEyGNL2Z6EmPMvWNGtBhBeiSJdbj81vVKvhCsEpt54RrPb5i",
  "key32": "3jKneKUaVjQjyWoaQNFGRDbQ4zS6haEHaAVdbj2zMbx2q7d6WJ2e8XNcwWjmhZXDehP8of2eVFZzRSmXuvmLv3h",
  "key33": "4rEhUfVMSkfbntiq5WpadXqSMyDmHhVSHtD8s4byziEYAmVcaDx62wf6EZBF5i2W1RotNw66JWnoMEnssjGCDMcU",
  "key34": "4rUAopDi5LDJ8KvivddKForUtF6JaXEVtbqh1VpetkuumHgUuz5yo1orP87HzhLucGwsq9a5TX8rgC15qJNScasV",
  "key35": "3ZkPfXdMA7fJKUXM8YLHvoT3fKxvb89FvzAspbKAikLxefQwRPUJeCLWaxJvyTwomACQUBU7WmhegW7ya32joCm3",
  "key36": "2WhL29RgcZ2s3ymwgwUw436eLZitQPNV5sBdKzSFnwYp7gioYtFTAZMrZJWm4WHtcc8fGCGnsYU7A6uGivhhNTPH",
  "key37": "yMBDXa4KHgs3xt5nLtFyY8xpBs7gqNnGSr6o2WKKcE9bMiA5LSRfUV4hLxPWfjMGMffnfQvjEmbXzNEH8xM6d9R",
  "key38": "5pdKpAGvQyiXpaM5URuxAGumMkPVfTt7rCZCNEbMC85WNS4eiVVYWRqT3YZtKyarFGaAabqLtL2E76Ns5czZHWwn",
  "key39": "5FJ51eoHQS3SXdjEnHvKtMwijwHVTE9e8YDktH7WsyALU4bL5jDxyUBj6qYke3cetbk7svUBkm2JE2DTwx5UEeT7",
  "key40": "4hBXcJdYEcf5TGjGPmMwpcRaoPWXUHzsWCa7sVTVUj5ETDoKdQ6rPEp3tFq9WUBTjhbX1bQXXW58PvWUSEvEjReh",
  "key41": "3xpkMHd8YogLnQBSsNjnP3envvznrM1tHL8dUPZjCU8z1XFf2HDMsa7GLgBgsEgZUwHC5zr9m9sXJzrpxq4tMy6m"
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
