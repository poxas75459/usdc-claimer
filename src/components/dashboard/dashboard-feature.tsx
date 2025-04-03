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
    "JxEmKUHL6gBkbLovUzifbQwJZ8oLgMj86UDBjXHAaosKkZ1ktikNXUGUe6pNkYQoWBQnyuPuziZdocnZnZdjQLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zsq41wriCyyVeJjVmX4oqXZDh8h8sUiDi7ehe3gnAZXXXBA2u4TQbAQGfkBinV1zt7DdnhpQs6bVZoMhbo4VCbA",
  "key1": "3bxEjHSJs88HhCnQZ4mzvbF854q619HwjkU8oaAFGEoAkGfcHPBdbjfqQee1Pv7CHdhdny1SdTNhSeMSVx9ZK7AJ",
  "key2": "Wy3X7b544mSFw9kT6tXwdYGn3G8pkVefhb9SD8FiZpMmhYJc5y3BSVS25HNCw1FqX7qWZpvyRrH11oLHGH4r7Wr",
  "key3": "5DGQGoSHv47RU4ZwGEz8bpgUUgwYrEFcQo5JH8BpgzxUN9DBue3E86WoH13Vd4dqjWnpwYLQXfTevbfe1jnsZ5VA",
  "key4": "5qrNqGeEFL4rVnKfxsfa6kqghuhxoq28duEXd7wouXjpVQkGo7kj27tnAcBtQqeAaRDvcHamZXmRbXcqpYtota1W",
  "key5": "5j8vAfNKHPvatxtrxAZF8qq8NUAqaHGDjWrAmYDEs3e1otENb5sYmd2fdjFh3qwjH4LuoK3iAgDm3ZYLcGYBrZSB",
  "key6": "35AbgA29kTna3AG31HML1b5o2bwCKHcUB6EZQJ3TqQZR8oR8iWyXYEz8eND8UB1SWTuPVknJTNtzaDntuS8vUszv",
  "key7": "3HZMjE5SpXxTQFoHbcpNZSBd2KB2Wkn6Wg8sKPZqJawHbpeHsHcYe1CU2oRWafpTKTroFMxLr82JrwEMn9ieo6pi",
  "key8": "4C68WpmQ4aRTpt2VVucVx6GgvwAdBPt7hFCgCaM7EaD8s6uEm9HcQvi5B8j7foxyCzjApjMiVWc3bzycV9hDxZph",
  "key9": "2XdLuqVbF61Ek5gAxtZupzKSdzGSJo3S36r7fxUR3KCzqYhMcKQq48bHez67yfDh2ZCftGxBX8WwBXeWNY7SSEny",
  "key10": "XL7btdA4yJY2rywoJfzCyPTFueNbPW4FhWx9vMALdcUGrmK8KKJWup34RZLpiihkLcWPvwM2DRNN8g1271xubnH",
  "key11": "66z7giyvcvCEHVkUMwtgbEPjFgzyztj69nDuCJL5584pKjBregxDoJKgdjsYRitfPerQg39ue6DyDu2ZAmoPu7Qs",
  "key12": "3if9fwm1VV1sgmQbNFH4e6by8vU32PFjB2fDePwANFeY6szgYAGygCPGkoxpJUNjzpmtaM9yVrh8FjyjrHYJtqj",
  "key13": "4CituukFnvfRG9ZNpeBN9JAMWXMAmRKMXUQLaRhNLweRkkRZZzuyykbMakMgvXYXdxhb5Vknf9aUwsn771rWRYFt",
  "key14": "fQxmNKbpDjwuWoHAKKRX52CNx6EzsT8jT5hxg5a1uC7aAFUmkixpWG8DbSwsPH3SG3fdozSLdUdYGdHCAYFfpQi",
  "key15": "P6e6UDXAC7qyCKhxb7n4sHCe4m4GeWbo5ti3kQpDB6XP21bTYq2sipcTgpu2CZ3snkZ8rFGswA6SjQudfE1J4Vf",
  "key16": "5hthD4SDHGad315qTBymtF3CxQs1K7TQDwXA5bRQGVhLMYKjJpuj1eiwn8tFAKkAnA8dFSq7wXmpwpht2cvEPpnc",
  "key17": "5e8DsUWvw6dqJbXPHwdiLDLjCQtPVXRM7gB9R7kaW298KqgdpRn8GGnzRoKS2eL3C2UMGSPKRKRijUcyfwuSUv6D",
  "key18": "4ETcvA7yWiMk1N27jsMSRfJ3ZCPN5RxRSns5146LYxE4R14DQoefLP7MM7R21C32ofEwu5cvdZ5czdxtA2xvGSfm",
  "key19": "2SadEA7gRydSGQz2Bu828ZZhsQyiJ6m3Xc2jdq9A47mrMnGtSdMvVV46ABjqjMp6xZEEYcEQXT778KHrmhgAf91F",
  "key20": "5gtwhJaUJVcnJYR7ny2EqjGHxXyRpPDSrJdtJJnzJQpzuYeYrRC6qGwwBpLy33KGz2Cpriq8HSjJic68VuHEakWL",
  "key21": "at27GyWDkoBPnVHEKfsEwecDocxFs5okcV8i2rw1NRJu7dcJDjGrzpr6bDSNLQY3fYhVhYA2RMwLknWG6x8o55B",
  "key22": "33Z34divFa4Kt1K41zmrDFmj5SbYpE2wWqYcDsGxP9LxwFm8B5vEMouRYJ5pExdV2N99gwRm5ayYeuYep3naPuAZ",
  "key23": "5sRfPr4KSXFoByiXeMpaGq2R9RUG7PE8UdMvPjzKSKBccUcsLWDoFHTjy8bgsKXqsRdMSd9bZy2VTjh48EbwJ4Lu",
  "key24": "38Mxa3dgC8FsUJsYCdUjELtSAQnAYqDCEjiRtr85Kusyk7w9pqqr87r5wWciq42H69PGYZWD35iH8uam7Dk6LrTT",
  "key25": "4a4rv7yCVsgrNtBxHmsGvQjGUM5UJFRpUANaqmdE4ahJcuGxNZz99YDWevK5ER8ZG8kC8cenmJYMDb2FB3xGGR5a",
  "key26": "xGt1SXmTVvpWCJQQyEByJfhMh17kzmg7yBaVT8QF48cdTteBurjtqtCeFhA8KgJSEJWbZ1hcwnKvtxkAUdGAZ9V",
  "key27": "4CverAGB6pLwwfXBAP1PY2XZobdsHz8vaFLS3EsJL7upB7xCdvGoTk6khihHrvxjapxZDnznT4nEkV7ZqXLDaR56",
  "key28": "5AhU4XPcTpxM1PR7rTQubUYzjp2oPnRxdrr5UPGqh2vWyCt9fxs9AvcfBpw8aMupfqJvosXWXqkXAu8LZ6yzcQaG",
  "key29": "39hi6ggJ8mFUCRNBjTmiSJyiwuTMq6PynapbUQ1UjaB6wP7UMyLXRg88WCm7wCe75hRYneR6nfpzBxG2dDqnMdtC",
  "key30": "4QgMXqk2uyYShvULdZ3fUYM87xx6fakKM32iDiw1uobzrM6tfT5hz5k11FBu6GFSZThUeQjCZVSvcPMiFx3Grjyf",
  "key31": "3Gd5eM9Dcn5awkw8VJJBYoowqZhbLt6a9tciEfNG5vTVw8BuzGc8UrVRkDBFpXSTGERZXVVdh5Z1eYRNx5qXaADk",
  "key32": "3QMr6aCpdTCodEcG39X819SDh1LkZPvpYbdNaokdnFQdyw8wb8Wg1Qvz2BcQ2JjQVwA5Yo5Q3WWgMNNTQ5BxSD1t",
  "key33": "5NKwZUKYdaq7s67gGGbw8EKBT59T1XYogrBi9xzVKPBxWpJBVmmx3vwUfUHZQSpGpSa6h1UGMbnTDQhY1RKau58z",
  "key34": "2Ptciu4o9kihiy78H2XY88cCe2HAsdtrwKdgTo5eiRedZgMFhvurJ8gp2YZ85zDpVDaXRQs4hst5DY5ScmYanCsF",
  "key35": "WxC18bKyHzT6jxQRQBC92LfBST2NJyGMi8ZJv927FFZ5dQpUybhhvx11cgK2VWRRTNXh1zQtHBSvrBRKz6f5DTe",
  "key36": "3E3zXLT1m62uZLL6CASFMvoNa5j2ebxoyjQJHpWoKwSEPivYCmYZ5uRkHVQGwCscEH6WwzhnV1GraSSFWs1MHUyh",
  "key37": "nHpyFBT2zoryJMKcdiBTF1dVRcb1hb6bAYTC6bsqamhxX8LZ4uaJBfQ6Gp7y2yd864He7GpqwFdaFCTfXDHgQsu",
  "key38": "2jgM88ptaBN1qT9uwHQ4ptZBAAnnpJ7eUVYJMLWrn7JbrTMQ7gq8xzaiz4JbAMV4vMscmNCrz9m8jh8UEqdhCLSN",
  "key39": "3HxpLZNX5KJrCU3S6MgXPEdnbm9zLJFvD8k5bNhLbhQRzTqeMGTVGWQJaeRYPjyzaXhXDipus9VG9Pqh8XPYi9iL",
  "key40": "28kcahsPhixwJTZNxjSdp74E9xKAaq9vdvaCA92J5zN8XNxBvXe2d2Pu5GETHq7dMcWUWBayvZqb4c6TvvcHKu6p",
  "key41": "3Ax7GvS6Xkn4LGQUAbLkAJ45CFA8Eyx6mEsHCCS1XVgLJVtqsA49fxZdBHz8uPeDd6zY6vmg3tKV5cfF2uzpjChV",
  "key42": "4wi7BqBKK456YAKSTkXQBMndAp1vce14hCvJzCEoAG5yt3vAXSNg5YUGSqjyMvr6G6Qy6pM9uF9TkTAJ2uDZ8zDb",
  "key43": "2KWGmXXRLQsf4wPN2MeHs4PTCT28JLxTtf7fcjh5DF65j6HQF9q4VU1nnHHUNbxs1ChXfbPNEQ5ftRedVUVCayFB",
  "key44": "492iTvrtC38LDYHnCFGxAGdfWUVkwfRnxjrcjmP2dthPM2AaAj26t5okpZBJcTaWXB8ZzBdD5aobCSA3iFow9p86",
  "key45": "tZNh8W2hRKqDiPpEcwGE1NEVe36fbjQZHxEkUL1qxHmLq4gy5bJrZgLc6Ntqj3X85FdwfQHtxQEhLK3zuazbLK5",
  "key46": "51nth5fcNf8AuSXerrEe8bTDQFR1jDdHSje9z78FJVop5jrJC6WEsK5kQSsLjDaVSP3EMeiDcvmQYbkU8NNgYrra",
  "key47": "f3tTXAZPd9mwTdyx1kZ8uGJF6V1BqLXUxtpoZJ6mRuUvszavfKmvKDu9wg2R7nRGjrjbCRHMANUHswBRroS4MpP",
  "key48": "4sdYTfVn2sLuSYKxzx6iNxhZrJhuF1qZXjqp7jkpTjb9xwP8nmqTYqQSPTW4wrpccXcPBxNy6Wn2Eg3YXBXktwcj"
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
