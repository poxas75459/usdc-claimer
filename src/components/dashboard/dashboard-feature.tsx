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
    "3bDHVgvRdi9kcGpZBhXSVP9m9y1jp7WqGhqoeQkeiv9pJQSeMFvPs7s5LYtx3QB3o7HDhcWVxHEnQzxPut3XNtKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wBTezYkXiSicWKDVgCE6YCL5WMStdBWhuRVSGHzrm8KCgPuKVgs7NnvodLmRsJYkVdgDft1EkwXkSB5QbpaK1ij",
  "key1": "QA8FJvAtEyudSofVY36PfPXaMXHWiiAHmeoc5b7Fch5rnRpKtP9J7ZSybQfpo4Qdb5LdV96DiyeXH6pwmunbtMM",
  "key2": "2DU3BPFqciQP7L7TJAgYjzEqTGAVQuYDiVbsJsryCU3Mpyg8kJYxXhK6jjwwUQMZqmCbdVn6cmP8kGqPur1PSgv2",
  "key3": "2854EjtxSwFmKfsKcmtLdXeSg3M64djDq1BCxrC7SEsBMPEGxZW8cjxRernhYC5QhY8RZPTvHoinG1buHtnrdtzg",
  "key4": "5SVvtBh5ub4QXKhJZNsgYndCfoJdGNuoqDsCsbQrMKV1L2eBiqBsu2zFoKB5dB6iaG9TRcGrqvand7vpPScE41FX",
  "key5": "52DasdXGJLLZSecADSazJEBozzJPJosGy3dNooLPKdrmBmqPXyds3eVsmGUxr2FVR4jWwQf47j4aoppP5PSYU5Zq",
  "key6": "3bmrxc9uexLgpx9dfxHgBsFwzUDcX6UnvK7M8hiCAegjkSD2XBDkJp9utz5hk1iZEsb4mH885pHWAQbAshN2NuhZ",
  "key7": "3vzsvCCy5xdye3uXLtqqaLDHL2D9c3sdxCtvaNBWjkUhmJgUDvb9Yf5WT8YDyETTaAgrbPGxQwzhQPR7YEt5faxV",
  "key8": "5LPfWMTGR1NgV1HzZEhgK3w5qWmYYJWHMuT7btay1X1uHHFCR9oR6XL6z7TJ7Wvjph9HXdmar6CWvo8VkfrALReZ",
  "key9": "gM5GMTFkg9kUh6ZLRV3Q3Nzz5vL2AqCvdkP5KEh2S7oErSWkJZMPq7rS3aLRFXoCwmpmgF18MKR2v9TSqJTm1hZ",
  "key10": "46mditz2Xr5zdzCwehdVY1bXubNVpKJ4ZiSMy9vJQ1Lt6fcpiE5antftqvgxQpS9QGcphZuBtWxfnncqVNdPgeX9",
  "key11": "529Tq7LS3DQZ2za19g5kpDDjH2U7zQJP84e5QQki2giyAoaPu1U4sHXBGztxDu1b7vDN29TMQ4pC6dbRziR5Wnsg",
  "key12": "2pusiNhLmsdBSyPsHAVGbhN3S2JdaszQvnWmNo9fc2XGzjgL2dXA2XDPaqacyd2LW2JTXbNSTbDwsTnUGsQ5n1zd",
  "key13": "2U3tW4xUszd4qsj762CpXrBuiDXNBpuMSHCnM4P9U9nh6XtAJPCvN5DRw13Sq443vQXqc16f7vUPbu8GP6YR4kiZ",
  "key14": "5rNBQXiRhdrtqLD5p6ygeNiYkDQyp9wKzTc9BVdJmYdyy8TpY4eQiQAS6tm3g5ty8X5LqDqUECycmY7Azze5hnSU",
  "key15": "JowSkmBViZcTcDuzDCKKt2KqQMeBYBmiqVpW4BoFy5THQ38VCMiWxq8C6UqiyuhkE5ZnxsduPiJimLG8W92h8Bt",
  "key16": "23FXaX2vye6yWjL9WWxeXEQU3eJgpyJkBfpTUi5RoBhoAKQTJWkARTL7U7qgXGfmuTVWtKXposXKNzQ8TgSx6c1d",
  "key17": "5Wx7JPQHZ9F3qoLRCHPe8uVeMhuEuFdCZx8CvQr1VtBYURwLrkqqanEGMYVST26hwVCgzUbkwgHtj1h7CRYx7kRm",
  "key18": "31yVwthGGXCoUp2vcfyJiHUEBwaXyfv4xNzBk4BUdGVZnE3XH7fYhJ4mLDwf78JdddhZrGKgC8qZ4J2VGhpD2HPL",
  "key19": "3rdvTZ5rcRKmXQ2PqMUNet2hXUNcaKQvehH8sryzz6nKDoLvrexeUjKt3Y5NUThfR1xkFFdXRTTQjvNUhaiEcX9T",
  "key20": "2pk4JFBVX8LQ5SemGKac1AHr64BSFQVroYVavRxAZejyec3XLhUbHW92ysX7TNEyxQwGaFfSPofc9U3oCnFExzK4",
  "key21": "4Z1xVDq1yEGeU2fEicK3fopbkK52t7x6PuYgQUQS2FPGtcHjHb6vSL3fGdPty8p8b8nUfE9CjU4X3oYkFnQeju4A",
  "key22": "4EZDA2wypkxdtHhj8cgmUx3M2BpLH2jKGs3wJk8GaAPnHpPYzpBciPsq7EFxE9CmvnZedKxM1bxzHQ8oxhoQnLYp",
  "key23": "HdCKgsk745BXaSQU7rDNRR4KqsuvKe69iPsuKzndbBknh8mQLg1wAmje7UMu8UhuADfzbHWzTHTcgBdypd3hyCw",
  "key24": "48Xp9P3f1UfGKSRX5LfERVgebAVVZhVc8QZZtTTxj9p3JgHPmrrtCnQBenVevkg5yFrVcaj6zPY19nhfQw3vehL7",
  "key25": "34QS9a9adhyFidZGv6a6VJF4AvrSUxwkh2hmszKuNmxCDUQpFGBdUgK3UdMg73tGeD9ZtnB6sKdLp4XqKyDXa26L",
  "key26": "ipxCQCQqy1C1vXxAeNt2gKpWghWS95H7aRJUdDKMNELzCPW7ey37yRbbBVEzJ8b4D1xVLfeJ1t4hNPFV1bsPVBY",
  "key27": "4mHSHAXSLtiTy4xfjMP9SNywErSPSo5Hk3XJBcaxVqCYnoBvKXBhJQXVqV8KkNzeyvdFU7KhT3XfkezvBprju8ch",
  "key28": "4U3t41pbG5i9yZSYuxdhubRzF8mtSKYTYHJ5QoZYw5hmqFgUea4oBjb4uX2RkjMMZHPq5FtXFCgZzGkoeTRJkqvP",
  "key29": "DvtP3AudB2RDbjrh3NtbXQsecHUSB13smdqehx3dVdsEB3ai324AmwdTsKM8pAJBqyXtcy7FRz63xemcs3VzhbR",
  "key30": "2rM2EuQVyVg6uXZZvyvnMFkbPgB7fHXm8krySXuV18zFGEEJu1A7eSx2scUGbncow4QRExDYAHk4pf5pyCJqyLoW",
  "key31": "5dnVLZAYbNWadrZSRwCkgYDXMYfHDtGZjxN15WmhvCuDreTB6i4BWzEAe7TCHagZ9qzcPmRYeVGiCCDBoFXZ2Pd2",
  "key32": "2BdvrVo2mTR9WSeAjv7s2XPKbtn6JjDnhngW3kQdGXCFtgZDY7MTsNdrUqdGJejq5pSQpALkVvgnuZBQfYkWSUuD",
  "key33": "3KdPfam6yzJb8MQEXCzk9Mg1VH5Wr8hWatkVAiT1zA7VDrFL6yuX6FFhqN7vrFJKBYrcSn315DPEN1xifAC3Kg7i",
  "key34": "5U52fip3hWu13wLkzD8PQwq2XrT2GZSPZACTuwHWcHuaiEDpS7Ktsn3KomWLKWVkmVj8UWPBwG4wBNDA8Zaowzwc",
  "key35": "4rwa8qdRGJRaKSBQfcKisnEoYuaEBofJM4jh5wFEH2mTZxUvSDDhZY3jymkravDR4cu6f6aJH3yczqATivMytMA2",
  "key36": "34PZKGoYSTAwvs38jXz3goKXg5QBWs1hzRGptUct6u2xXegBAHXi8uVF6P1CtPBwk5vGFaNAys3JxiiCwh3oeKkZ",
  "key37": "W5wVqmYcAyxMeZUk15UbDFb4oMY9MV1CkS73PMy5Yvk3iAfWqv1Db6sjtZD367Sknyv93WqwdXUBvU3t9pP4G7F",
  "key38": "5WUXuyn2hXPDxJeWgjB6hhUoYTGH9sn11HH7iCX2uLqegArV6qC1qGXtFK5MMZyuvAXYuoBgZhQr4T82bT8bBYDx",
  "key39": "3uyQigaZrEx7T4jgRiB15oRSvDNQ61AqritVpWuhXJM3DPjYu6DgSRzFBXxw5QL429usuhT3wqnpudTThwCwfY9t",
  "key40": "5WZu9gi5br4QoLZnfeyb4PPZqkFeyhPSWJ5VMMnSbgYtEjkRSL4tX5rcKkGBZqVHCWGqzGe3daA4EJeqM6nCTdS7",
  "key41": "3Jknk5SspENZLcFRmpqSHnci8QhemFpoVv2gi1eWF5rcqqhMD8nnq3qwmC4NgdeJEFwNSdDSow1HPc55Z5UoE5Xc",
  "key42": "64BhSs4TrxxDLToLGKSaMwsCTQeTnWvG6P5JQ9p64yF7oSZaL1q8S8Wjmey7Cpf8s7wjnfkCRrcoK8MJJhCnxqU1",
  "key43": "5TqB3gXoduJ4wcaZaT1vpbJbtfiZL4TmR5uWThdMFXqQ3gRFWSQMJwbsAmkRAeESzXbB3UXwEQ3q3NaeKN7G1z7k",
  "key44": "2TLc1eFUB4NxjLefS7WDmhuYXfvhjpQDpx6v8D2VzR7apM354arvoiWrCKPEbQyn5jfpvM9G5ve5QDkvXQuvovRx"
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
