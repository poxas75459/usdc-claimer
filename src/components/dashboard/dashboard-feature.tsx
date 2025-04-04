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
    "2keiEDQz9qyreXfKi1w6EoDJYpR8qsFmTnrCCL7s8FQoCxoY25Xg1sZQzMvUjg72UAVfLj23iYRz3wY75c1VmnE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dwn1Q1asMBjR75TYsviTCKrQcGA4RpWzy51yCYgoXLqMgwqFmKJh3UWwtEMDMQn9Tye6p2dxTdGC1QdCzSztj2R",
  "key1": "2z3bRm1FwB83VdGnYFZpdRwxWoEhjj2efqRaQ8JipbbXmR6fD6dbuQ8padA5L3wZBwV3A7NQee4VG2mdVaFvez6D",
  "key2": "3xnM3z13DknykpvVfNVBtQ8dthcFZPjxb52qYvz8JtQqf1PaUKJjUCy1BaWjkrZ9HKd3Zb12fSjqq7bXtYQQQS6T",
  "key3": "5E798xWpt5UTdw5fmLMw2qGuiD4kzKEMcdu88d4fg6Ht2YpiVYzEmPbgyaNZb6bc929bZPRkj5m3MGx9iJqHSVSw",
  "key4": "2QQ6tKk96QRNFBbvGjedeuKbXAjVcUw8f2Snr4Ce4FwRNJ16DDr4xtNW4Drw91FmGbZ4oh7UJHCRnHkANikVQ19U",
  "key5": "2pvN5a1nq6dHpUocXgpskp6AMowobKYrBEYKxKNb31K2Qftxgxee2nENj1VNxwGoU3Bdxw9ddpWmikCHQHZMKmNQ",
  "key6": "2vyS29oWq4T2CbnsW52F1XdyWaxuv4GfDBrEPgcTb7fiK7nKCFiM177BZjVPxKP7hnEmwPMi7SEtrXChhbP1f7um",
  "key7": "4kk2AemgrpoYKHmGuoTHcj1njvAexhfjTMZqeCFqorQJYfw4AUyUGuGxjbPzay7RwJcmf4jcZWvyi2vSXJcYXk3c",
  "key8": "28nGUqueXZstvHQQ5y6qU2CA3vt1QfPPqts9Aj23h3C1WfSXpbiPWnnmPAX6fKUGbHxPvWJgEDsQXj9ogjJaaj8A",
  "key9": "4GYT46Z88aPvYKJqqXKb5Znud7iNX7TR5qt6LdudtTcET5sMy2PcCHXnrKTdSdasbLVAJHoDRZmc5r4P74NUKJf7",
  "key10": "315XK9nbdwGXuLpR7cP88njW8wSJ1K4eqkMbotvV2eSuZVYVKHo9HUvGLhif19qYvG3RgiDfmW5tvW8pTYuTbZXM",
  "key11": "3wcEefycEQrGnQAcmM7MtBhRBJ2mTVUgmTKUzUbwiRZjP7zk37idSN8y67GRxRGnrrRnewvCQhznk1qELvbVU5eo",
  "key12": "49y5FLApcNTNdHMXaKFypM3FzhVVgojTNZQzEvF2vCi3TV4hJoYJMJibexgRLP7LM84a6YUu39pC6qFYPJCPe6gT",
  "key13": "26YuSRWnJBDPgjxGxbMoLAQvqFEiWN4qkaZ7DPCeVAWfcUqpnFX4JWHQxHXRfHBAf3JFYsUKuGdQ2aZHqei1hrTe",
  "key14": "4QnsMpwj1xv3uQDJZ2FhpCEYni8QVWWu1v3LwbE3zcoNN1qyR19zxVHsUQmgeZkecAJ6ocU3WyoQewfiPfrtfGwx",
  "key15": "jJAxmcCvgeeYMwDK37snXjxG7JTCJm6hVCZpHnVU2kEdyp4zCvH2HxxdiyowDg5W7kDS5epTvD2cggv4Kct4sWs",
  "key16": "2tVnMMAbR66bpMK4VYhepy9rwq4kCsmpxArHTT3CqJqpLWj3ya2usu9hVjQkKZ5F8DXPdp4JapCeonNqUfE3f7hC",
  "key17": "5aUWNMTSbSRfC8c2hqBb31yTJqmvwpyA2PPvctmLYbuYWLho1BwWkgecaheEAsxwPrXufpfN88oW48ktTXpD5mAE",
  "key18": "9ozjoQMC4aTkzMmm51SvGAhH6LRVMfp8FwtnW8Pv3F2w9WbgK2XncNcNdGuHXmBmtdosHd1S92rLv26FnRJQ8PT",
  "key19": "4NUd3uKPZqVhXUM43RBuZYhZqK4bfQnhNz4FX9S7oJDuoMQviVQ3rAL657vS9Yv6W2iaptrxyvPa48tQKTsQbQe",
  "key20": "4Eu4xMxZA2qbTDJtLLtUFR5e9UAaLRpwLWW3tM7aNDrmnCX8h8QRbMuVY51YxYwURHNYN3uxni71xK3Ae7b7EnBk",
  "key21": "2bx53Z43GrL2fD9xitigP8CppgNcLKRHm4JtrB1Le9JiE4L1XDE4CjenbC8n1KjmdrMsqzLzot4uqtrBGdng252B",
  "key22": "2JNHvyEWdx5USJfEUowk8HPYB8diimvvrg5ZwYKrccW7wvwkVsxwUttf2JVuXY86gxZe7z8NfMqJ5nvbSXEkU3CL",
  "key23": "5zHr7BTVwSPQjwKGuZYhfEa6TwH4hPxEWHGfdtxzX2nExCRryqvpowzYupt3u1xadU226xNNfmtzNiaZUXfJqYbv",
  "key24": "76q3MunaAkAwsUcWEQamfUHWd2oTZR1c5ok5U2AQhKnX3i4sEz6PvuyCfaRpRZCMHBCycabV94wBHiKW1od5JWN",
  "key25": "52xsBiyWSne7hXQ49ebqZmDAZwAMRCwNkhSezeduFx94FR3NS7E5pqvhZWmPVkoFNisCa4hwQEu9SsRi8qVBDpqa",
  "key26": "aCrTZayqmLKWpMMU2hBxsA7jB12SgPwuQrcceENGtQ7gzkpau2Tv5p4YGzYxZUpYMheBXsy2FPCx4WAqBqjqHDp",
  "key27": "4Co7uW2kb3vqV8wrG9LbicFMDgyB5bj6q16q1TL86KxsfTGNiJt3AkkPLhedT7Ehky4knnwpp9bdfQzVLbhtdKM3",
  "key28": "fiQNGcwJL3v49N1Q2zhF7F29jq3F5gbv3w8D3UELHKn4A4g444KBUG1fv6bu3sQUK16vP2TQhsLm4z4eF5PSd8k",
  "key29": "3cJLSs1RmyhUFHJUCferUzTebd4npE1SpHtwMVdh21VZXuLnrMSW3kou4FNxBM3oJiuFd8eNUxLQZPkM33o1oYCt",
  "key30": "bYCrG1KQCQH1vGXsvsKeFfEhnmucJPxb7PUA12pMDjMhE78RhScYcJn7GTBBjGaryK9CKJFsbPigEetuXSSkUam",
  "key31": "5Y5P5hjRuERVaKoEt6NejazpRmhc7XHWCF5YhBVHsCwkCGy4NY14PG5ycApdwgCvhAaW4FQmCsvfCpU9vUcWvZmN",
  "key32": "3mVxh3ZJgUHuajb7oAfvXk14ApyMgCKMtqZ78aB6edUsvqPvMhKdehEym8NagVR1NwTbg8TGsB24oynH6HSK5uep",
  "key33": "fH88Y4z3JLieUuRk6qs6CRTCC1Rz53hoBY1BZ7K43iqNw55X2Zk2X3cNpweCN1ppjn2v9RcgHMnc4MNLFZV8ryY",
  "key34": "2EqYBwXEZWZFWvLDWPvdadj4uing6vKQecDwXSt21ZiFMty8swhHW64jcU2KFSrXHMPfB7iUb81CYCgXNAGCtX7Y",
  "key35": "CMGj9ysm7vbFJ5PDk3tHjAxJZ8H2QYLQ5aiYbqeE5pFxgVLDHTgTg8phFzK6t2tj5b4R5uqESN6Qtq7cmJ9QPG1",
  "key36": "27x7nTYpzjvHCSkP91oRZ6XPERMVMtXeHAQT8G2QKmCW7dqBLxYkWT7kinS8zzfbWz8wYgr4aZSxs3nA3GYeAkuG",
  "key37": "5SyTniD2oxDR5bbWutRX4gjUyxFyWAKDvVbJ7wznfHzDjzFRcWLjrcFsnupPciUV2tvgAYxGgADMEvwvFMeLGu5b",
  "key38": "3zgrJRKpJoHyv4Gozjt7Tm7z84E84ie1EiARUnWXBkoKHjRmhprV3tLCj1YqAyYLWN9rKGxPsD4XX2opQA5Djc6t",
  "key39": "cj2uNhvyyBRpvkkXyCRkxifB7HxYGT8MCCAh6j7sowqE9n282n4zg9gZzmaAaBqLXA4M4CbphZdf8AZBhd9mZqj",
  "key40": "29xYUKDdvqLy8AKVs3VWxyh7rKaeWUZmHqFAZC2EyCU3i2m2tNXF6pGzBt7P8FZqXm12knsJEwuneVApJfhLoU22",
  "key41": "Fod3sykZPrC6ZX5CrbkH6DC6YUyJxbDacNydMDJcQN3CKmXzSXSLCuT8o6CxdzBy13PmWePwXoaRXn9q5eZ6GL4",
  "key42": "vDYnYvuQTcKhkc26FjYtP5ZoZUaq8AFAZexof36Q71KZbu829yFGje9jm5zACTYBbjhnqiYiRfAsPeaTbWPmeLN",
  "key43": "2aXTyo2KyWjiKpi7b76vBrfs1thmXYa2eRkRChBdHf29UXwMQqrhrnhHzPKMpuzqrdidEcjNMAgyws5msqQezsJV"
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
