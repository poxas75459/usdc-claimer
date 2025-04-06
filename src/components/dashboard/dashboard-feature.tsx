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
    "2rgHooCA8YugmCwwfn2mhVAZYyE8WHBFDe16QeDeAXtUTms3bQmE6VM1p1FVFiRvmhDUyxMV1GBDrPBYzeU9on2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "moDA9NrB8Z5UiP5DD4j2cXv2pww7221rktzuHfxKujsaAexpgVWFDPbtyEERYfnUcHhPUAjHb4nrN7j6ZiABGTR",
  "key1": "66ywg56znMFNtXewXn26TX5VZVxXrNtukyeMJ8YuLg1mdgi7VY15YJcSWTXCSSXZ7eiMaAkA2Fh5owrTMDLzR6Kd",
  "key2": "32Lj9G9b9LPVzYdEWY7TXN8Ph1ybGS4nvPS6SKN2egLCXK8PmRwCCMadgU2SZhX3YdB6VAzgV7px77FEuEoneorC",
  "key3": "2xoyaovqTM5n35QTpnyUNcRAivF9fbLWSagjiS12YYUhGSiF2qfQREtV9YsgXpmPAewXyndUN2kJry41o8tXt2tf",
  "key4": "66HwhUU6hYZgnAEQ2JgF1zKB9iLstVDZkrcs7wDPzbGujyfMhtuN8TKU4VhbZm5W4rDthybmJfFdvSqn5AvQ5oDJ",
  "key5": "3R1BcC6GqJ4oVuo7K6vQCHj6CKkUt7y4ucNaZZnLeVLqRGJA2WGfcHJy5nYj5kKRTTmJnWE61jZUSN3BmhRRTiHM",
  "key6": "2bUS233boh1gTeQ5bLz3Qk1nZ8hbgXPTVgK4mcYVpzM4kTqmetGZ2VPgRgYEs4quJe1zD13wcGKm1VyaxnfSNE66",
  "key7": "61ZcAEN1a4hVNfnuc928A5muz9i1JKU1qVWN3wvfJAXuam964uqbwJrVFzt85HtrqKpQj6ocnu4ut8cvN8ey8GF4",
  "key8": "2YS3vCH5gnzxvFZE25zo5uiq7FjdcN2xDR48D4dxV6EqTZ1MnVSg6j6LTH6p4TeVthP7tJ7vdeKwqFna6f3yuDEf",
  "key9": "vdtiQZjYTWdAUZ1zMrRBxAvs7sC2DARwuXUqWkar6izSRnLsAj6ReQHgUeVXE8WeZ8hgW89qUTgMGQMb5VytKVi",
  "key10": "2pSpup6SHNgCJhGz4tT9boKMZVwQfVUgqDsG39eJgkGAMfncBBP6F8K3xnp7b3YiJfLbbwdXTNU7WuFxGcH8hmLy",
  "key11": "4e51N35ZvPoPhAVf5Ds58Er8eAdGdd96pALBtdg9HuJ5jeBSDxRZY7JDk9gZY1i3cUdzCSQQaUxCvnYzihYruysp",
  "key12": "N276PhqiShQDDo7NRNY34nAVRxwi72SC2NwCigmjgcLSoifGDeMGTMhV4WyRmUpTstnPHRQVt1RKfdBJZVXXJS5",
  "key13": "4pSyzqzVmb4pqkhqvDTXyan9WeaS8FufRsMKWMsQsVUQiMQ1W1oquvc5T5LRMnD5x9hcuMW5uu8Bp6xFGiwDrNtR",
  "key14": "9hqzPJRstr3Laa2KLfJyC9QxpPswR7DEuUEdHV3njNYH9L8d4WQufPVo8UuevJuirr8HzA3ZUsEfoCWaq2ZiZFd",
  "key15": "5neEewK12QjV1nTK5vY5TiVp2RNiMDNfDuiqGSf6pzWBqmMHe6xhwW4TS1rVcoFwEX1GEVmVyKZXc5CF5WUuLngT",
  "key16": "66BUe5d1g9x1zCk4LTpgj79QDQanibBcnrjKneTecyf8F4dd9zAjEn9XAvWSXaVVWouZJ4QNKxfiaVg8TAGUeWNA",
  "key17": "Cci5aavx4cjHxrvs2Vg3C6QDtCZfkZEPG6xAK8oZ5d5G3GEYSXRUDQmjGuQsFK79VC7vHJS6J9M5WK9gsnLsGrH",
  "key18": "auztuK8KqUvhbPqPDvVrPVae8QaZCQBYjBMTRARSLJAzGRXwXPostXXuMZHvMCM9ZKAMefqBTkH9g15drNvsSuo",
  "key19": "4gZSEqL4pHqBkqq3AxXgbSsfhExq1gUCL1YMhbS3E1NLwfit8PhxBEtUurFvWzF8pwx1XQaDj17eSdh6rasSzbmZ",
  "key20": "5UkFAUYzAtDhyfmuWgv8vjsd13uMLR9NfrqfPrjDTfWmPCqUV5fgbuSopQZfoZFh2Zw9bWbgEL5Eo875Z8cKesAy",
  "key21": "3X6SfxMaD4pemrAxiDUfFDLuwqa4jfHhRgKp7F814yiJYL4M8qrzbjSwpeXoHCfomvaVE2H1YZhYTRLJ9r6P2Snj",
  "key22": "EoPe6jmHP1TNgfT4sfKMYXrSsfs84PsnSFvpWzqS6WCFZEyCZZMLJKVGYCjruukSbkgG2naCaUoNzDNpT1a7sGi",
  "key23": "2jYb5Gu2XmdMcRiNjFdUk3PbAKDBJrsnYt7m1iCTLrBgRrtnWWpUzZZ9VFr3XkiWcqKs4TVxWn4ZHqfsLP5Bpjey",
  "key24": "5w6CmbFnBH1VRk1BTsnRFZgLEDse1dF8o93ErNJWJ2stXARvh1peVSLywuQ8tcjSwiq3Bsi8bR5RGFP9L92LmW3L",
  "key25": "2PuUYc2x8d3Q8LXZZDXfxbLqDaPkbjAjNarbE9FyA6AorFEJfkqUyA54TiaDyp3dn344g2pG9H2usbYMgM27yjqV",
  "key26": "62FFQBbJWRdKk5sWaVrX3CJwbET9qjaAoCMPHEVSbPaytBw8tvJdXgk8UwNFbk9ny5VecEBPgdkxA8zAaqrCHSTH",
  "key27": "5YZj55o8u5e5qYTS8MhfFSu6SjwSCTEdV4Pz5Uffsn5KtjxKD9HbKHA7jeHSbGHak7fkbLCj8bbVTVe55wwmXbk3",
  "key28": "2QqMh1ECGk9Yoj9Rik4KrLxYFTL2TY5b7dciT9juWD3qD84i4fXeiNHRDvJ78hnGGvsKbnnB5RDNsXsEDFyV34Ex",
  "key29": "2jxnREgifskKcvTb7uP8bDzBXQ7WQ4JonPQwvk3Fd5rYLYxht4QpxCoXh3CbijuFU2dp9tSXjYfgMMYeGNbhJjup",
  "key30": "3gbFLjqJnJTfixKaCcTCNqiB2J3TA8ZBrWTG26iEevZpa4UBAA3xTpCyZ7jD9NBU4BP3dysAnrTTcwt4X3TmW2cB",
  "key31": "3US2t1NkvJcT82DDkov8M7r8DEaKmEseJ85noCVyUyeyNZk5uYwCsrnwvqusD5m3KuEKEy9fAGaKump2WceiXjWp",
  "key32": "3pvyB76naH7DfBVHvjwMgWMmhpJUMuhCP98czyq7meiLnDwNt8kpCZAkrNfE9rBASQtcL5yVkbaZFBQQ4ST615gE",
  "key33": "4ZbxNevuwBEicacFjsVeVLmoEk1PzU21Fw9o3FygvRAcdBAUheaA1d9BKxJqfEES4SffbxTAaCjQdtFFuJYSE9XE",
  "key34": "5fbDCCboaWFD4vPx7neGSEFYkNu1ivLdp4KYCD9TyP9tfHgJJW2SG5sBQnF31zfsbMSmnuzBNxJL2rVrEpw2P3jy",
  "key35": "5iMpgANBYbRoe7pq935VxLkdDDx5GK7DwYGp7BorDMFfjVsKgPqLG7raq5puLi4XmcNsxVUKeCU8ynSYRuqnG1cC",
  "key36": "5LVJNuE96xLKdVNRVpst7HdqxudWup2XWoHVS1F1w2rouvqGtkxwGsN3F8YvHAivfvHpWA1NQEXqSCCtTeoE6wXH",
  "key37": "55EDYpv8wXvVrfFG7fBzrT9u2uQfusFNtmLntgNb5suTgdRDbk3kqrd9SLeQxxy37MQ2MvWsBCq7rnWMdBWTN8kg",
  "key38": "XFb2bZviNXwkhFEUUwkEAVk8uoYAZo3uodCxDwyBrbuU4Sbx8NcUThTMdRHuowZ9FuGmwnrDCrErPqJ2yEnURtE",
  "key39": "4qzA6tJ7CqVH1D88D3VP4WUT4hFBQFFdadziZ2y6HX49QK9xUKzZhZJto8jqHv72nsCm8JEnY3rk86ZQsgQc63TD",
  "key40": "67RwHPB7VHMY1k4dBZfra5oo81aFhaa371oMNetrQN5hv4Jc6AMbdcJy2uWcZS8Nc2baZwZumGjizfyQz96ueUUG",
  "key41": "4VCUiyw47jYVjGRcvY8u2djg1irUam4vaYsCyT7hPqdp4Z7c8g2kLa4KZ4uhmC35Qqanr3uGFvxtkrpyMmit2UDE",
  "key42": "2Nx3JGXSA1eib9eQib5ZaAywyudtKUJLTGSgZWWpLibtkXoxchyqdWRaW5RoSdCntmwevExsEfo75PaChfFC6BSY",
  "key43": "4buTyEBzrpeFsoNh5uTYSSsxfzWW4PPXDBYnQzZNo16trDXUtvFi9wkjR9tJZF1hq86mFA1saapiRMrp6PmafsTG",
  "key44": "5qyFpRvXiK4gW9yyKdyn1bX3NHVQW3VGLZor1FPWGdbWMkxGeJUBDLpCk3ZYiqXphY3SrYWYawdVxqDfbL4dE2tr",
  "key45": "5SiAJRrp8ZaUeYAJVwYRk8EY2daXx4K92yZoH2TfJRuZLR7pdrryw5X9dsYD6GooUYMgKyse1dBYNUGA4bREH7E7",
  "key46": "5YJ5K7VceDG8zR1PVbAF8LtTLrCfrZKXuMfJ1qJPkDff6Mh7fPcr2GTgztxdKAwKJjiXM4i5LBzfKHvpkoZgGSFV",
  "key47": "62s1ZX5RM8u5mn5zVgvGtUMafNf7brAer2x3XeAM8qZmZxyTTgFNGqfYSQdYJcYCiXyoRGWT3uYuSQDwxopwU4V2",
  "key48": "YfbsqN3LDfG59sWyxcFkB7Ch1a9EBhdKqe2xo76nYBNVES9S5SX3FUWaUZw97hbh5YMytp2k2rBjzPGrJbW2qms"
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
