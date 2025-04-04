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
    "2f6Earoz54PeMJtSvHvxmz4YBKfooPFzhXAvjxeEoM8g7Q6s4abK35T5ri2YbuAsXYSjc8CC6MhYNUSJADArcgRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pdaiWv8j1TYFnGuxguATiXYzuLCVR1V2z5dms4e54YAYaWpHZf26KtFyX1665dVwZH3ebFKLrwTJKXGwVBCMdWC",
  "key1": "65xPGQFEJnhb5xsyBgK4NyheA7iEFkfq1oHUht8uf7tMVH2TRmi9oDv8r1CWLsZogPDedusTgb5GDJeQ4xkAaoEj",
  "key2": "2rFA61nEhxj9Lv3VvE3GnVawruDSY8teGkHS2NhHFQUMcQVPSr7XH4Rz2umo8PXKCP2r54bM7k8vmPH5sDAVkDwx",
  "key3": "2XtCw28GQupdPWX5q74SfmBhKriW55rL7wZz7Kj4LEQ1txbxFZs48U3iYviqeeVUJV2JCUtRwbwoX7bm6nMvywJX",
  "key4": "3fHkRsMntcJ8ihEncmw4eVodV574FxhLQPMLQEokqT1dapD8wNTCQCJ4tQApqQZozzW1x5wDwBeBLVdcMQzX3wWU",
  "key5": "3WBUKi5nY2KriSxXvVN7XovapuxeFCNmdFBLWHWkAdzbS1d67jeWRUVUBofbxbJyGErwBRSgs3U9EQeWKpCYo7ka",
  "key6": "29xXz1wKMgZ2mkvTqW3H4ATpQuCq2668wmqyvEcL11brLn2iwz2Fp1feEfJFyViAM7THwu4cK7RButUU1V6bQm5B",
  "key7": "4VRQmvTZwnHZtYHpP4Cz1MDbdTV9nEQhktqexPS3gq645CSPxwSzanNGrZMKBAnRaRPTyh6mFHAMtBwAsL4Z5trw",
  "key8": "2cwgoLFei5RC3vRRCbTKbTdL4jPVaWsGYiT9iUMFUhPSctBLghVvRwxR9t6Cwp6kg9icGBKgSLZQW4Rz7DuRBY11",
  "key9": "489iJpxRgSDLFj7fxVFrku4NkvHNcCP4LZCdfFGJ6jGqh8ZGhvnMXP41zTJ5t8JJRAiZ73P65GjS7KNqyUkvZmdL",
  "key10": "LKzbX1eECtBkRyNQCn3CcH714BEmXcqyFucmVxaJZb5cKEbs7epXEYTE2B4tRxbXGBE7nGRjYyf3shLt8VzY5ty",
  "key11": "2PDt9fNT1zqfy7hfZGV5mqkKEkogEx1NAYtQyEJni5pG83CweUdN5VhM9GtrMRyAJG5BNHj7yAA95GCx9N2xHhRX",
  "key12": "2swNQtydaW72oz2eJkLj2SYc7BuewJxtjjtBeiw9TCAW1ZjrPssTosEjcbam4vxKimwomFXmsSpSUSXtY9aWAHPU",
  "key13": "3zEZa5rf6CBHzG3tTWBpUVLHr6AdNZojtnAeSRdSzYX7kA6PkFYdeeNGnNuXRx4VRw4tz9EMNxDTW3vNt3qLkgVB",
  "key14": "4sQ2YDJbhNHFWiAHDmEaZxnBWnjow4BLxBzndtMX9Gr5SmJmsTdJEirLohcKy78o3B8uHgDWCt8aBoXuoSBigo44",
  "key15": "3PA88z5F5prAQAHNWpkr71aZzmpNkd7Vt5aR8C4RA7rM5qrpgCHtiLjKLfZZDgzzk8RpsALKvJwu8Zitnr38Tiiv",
  "key16": "2gVaqLKqDrBMxTdN51EtjyWPqJVCqKaYj8ydTqJJViYxUid66LHNDqWJ3aHSc46sVuVy154DsWidVxh8pKwzAisf",
  "key17": "9L5QkjbvrZY1oVWv1xpzgAdX6qWoHED7USwBN5ZszRwKYZMsbXrzXWKJ7K7MpSVojhxxkPPFt326HmLQ5wGgtuR",
  "key18": "3qLkU7q4MJ6TpnZ88AHJnjf5As8cpu3c6eQUF2YpV4R81sNzxoKM1URBYQjZ8sCHPr7GwQhnust9JYvqHkGCgV9G",
  "key19": "5P4tpYp8ZcS2G25rwLWx3MBsqcAByiqAMhqbuPk3PV9HtZLJRQKDhC3GUbDM3J4ciWA1f7Diz6dyw9YhSqTgoyVv",
  "key20": "2J2nXnwo4bCsgJX36wSzE6y5WcXWdRc6MWYnq5Mox6YZsDEYK3B9sPPw3rEsB6qsGLfXRfD8SMVwJY5e4ADGpJk",
  "key21": "hfWQHXj37W5knTsim86gP8yc6AMbprHuyZgTAexDWCtssT6p8xgsUfSXMxnnha3W5ixbULeqycHSPNkBsMiPCiu",
  "key22": "wZtsHYtYGb1zMD9mMT4W7TAfb8oMuA8JYu3fL3KvFwKK2YL8RUK3AKgMS9expRMPZ6WuDTmtuHA3Ci5oLEkCGJt",
  "key23": "4di5Jz7asBua5ZKgTfHu2awgX2XPTYcKh3vHzri4pKG9tZqEkfZWKjX4tYV2b1KJRo89FZUokNjM7v3phCXKWwoV",
  "key24": "517NyoYfSkF9pAM3X8TFmK17RPmh9aSTchEBssuzBm5regU4DCm2yamvoGhqpAdVW8PgtCorSJRCcnDBpESqiW5C",
  "key25": "3v7wNAJAuHNKiLbSbLhCJRs36fojFrPo5xCjdhdbX2n2QjCpgxkosJniWTTQ9fLSiz6hLMPkRZrBkSJwJsBRXofK",
  "key26": "5t6aULFBq33wyPxL2Dqi124fmYpwCvzWmKs4xhnzRBdQER4B8d5rXDJfA56pPNft1azrZXdb2ESaJfgcBouwMXvy",
  "key27": "vHHG41hH9eQz8HhFkoXSepybchjioB66ZsqMpEAwQmCgaxQzkaR4Dh4ojYxmDxU6tQD6jVCGLAftynnCBBmbVvB",
  "key28": "aKdi18e2KJUfi8st6w4yuWjnmE7E9yHBCAdgoR56xG2DpjkQByymy7WcFXqo6DixTYPmi5eiu6AfLaJ4pE731k5",
  "key29": "3kzmbbkfe3WCnaU7aLaVKmFEeSgN3xHrDXoE33V13hZhR9ZhgnZWM3egiEB8Luo5NUBhPuoVW8tvwFL2QCKERX6N",
  "key30": "4ttvgL1xmgQEFnEkQjosmBJHjzBUsHnKkLysGyWvLp84oy9LhP5Yj3SucxgGZRKn27J54UwBcDJYkzBUTrGyCzZd",
  "key31": "535puTLEhg2Gm4qchcvC9zCYAdwPf3hBishV9cTvNRJy6NaEFPeTPqoj6VXVYFMmC5REk6v2N73Kzpd6Mih3X74n",
  "key32": "2WjHPMWq5c9Q1otH8qhqfrjnbvc9VNm1Bzq8d9VEL7jaCVJuxdU5j2KYTJVxR8sVb7ngZfhuM3WDo6XpaDiuD13A",
  "key33": "3wq9UsfuvTG3KMT8qh934crkXZ3coRwrycauweC6DBzJWJYCG2EQ17ArzVLw8oWXtD7xu4ZauyBECVbJSHkpnaSc",
  "key34": "3TTRXw3DPx1Dtsj8w2r6jZSpmy2SFinwSTgCzgPLEJzRNb6abYhyTcyFsDDzpAFfsd4d3SWLJTKAvo4E5nYKPCQ1",
  "key35": "2bkVZYUJs6Ec326Cc43PFumecsPTQAGC9JuCaQ3Pr4eNKiNFCUdVYAi9LBbj8EbeDu2nL3T9LWgDnUvg9BaJrY3K",
  "key36": "5P5zMFwzngdC5Cm4X3yeimeriSnuUXj5Kw9RqXJmJoqJVoVpgFtWbfPtUYC9ecAkUDpmXD3yPCyM5EwxKFap8wjx",
  "key37": "36AJuQA8n6xyunXuTTy7MRDEVsYXe3pWaSmPqY4hhuZ9BAG6jAZoLLEfqfCgw47N5UJbp4b7iZS9rTmWAwgUaext",
  "key38": "3R46RLpePnKuHXTR2j4vzTDqhRBkNF3amMSfj541se8MTj1w2JQmaFwPAx8tFjnkGmockQMwTu8Dak8azLHviqvH",
  "key39": "24pdmMQJWw7YfEkHL5i62rNGuqc7HKuwNgSLGvy5XBqVv7Qxh3xrWe19deaZdKdc7SJhDsD5iSH24mDyH6WPkdrk",
  "key40": "3CtzRq6FyogWsXcLEyQ7scR4JdSG94uuzcFPXtTGMZR46riG3SWzijJiGtmZte443FvHs22JBuKEQYL1oP1TCXtb",
  "key41": "4cdTcNaSJf4ZgiuTXU1CqbmydZ62EspiHDSSk9fx56u3BRbufPsiqfdaWztpD8HS16YDXDupvaFfXPH9sFtEeNip",
  "key42": "GvvfbKbF4T8KJpmr6Mazr5UezokBpnMYwHRveay7VgRYMVUZjjqaS66zqWiY1tvGKGk67P6BUhDfLLNzFGSgFpy",
  "key43": "627RfRMQU4F2uKS8qXEjdTUV9RerSd1uCg7UptzpFaHcpJx2pxDvzo7DR6aXGrNBtAqC3g77WskYT1hTvdrwWhWs",
  "key44": "2eair5tg1xxkPtxN6k4A11mdtf1GJ2LDonAibuEbgh8Ao5NEeSxwRBkAUGRR8QwLpVMv7DtQoi2BBVXUsPSdRtJ1"
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
