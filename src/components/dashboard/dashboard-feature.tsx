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
    "WUfDYktmrWVdNdPR1786Dy1NewZjGt4c2Hejj6aYXAu48R5ciELyCKavuDkRwvbaxu6bL2rWFn2ZKoe842Z4Voj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z9ZbG8PiFj5cJG3XNMFFpy3Ks9Rt5CWUPf4GDkpeZXzYDgsdueeFmxxHwtsVA1kWwc9zSN7Z9oWDgthwqJshYy",
  "key1": "4Tu2e9UzMzfpMPpnEuw8UfMZGZzuSka9JtDLbDJuYczDYbMHEqnh52s8kpfkbzbHQzkzdwLqtN88nuytUTQbKZwk",
  "key2": "BJ7MsacxXD1ZCt6erwkMnyDrArtz22F9sWnq8CmagDTdiQYYRP1bvizh5sep5k6J6bmyd17ZHWxpjEuvnJ5bML8",
  "key3": "2bfhu2Mdd6f6rFMtwqieWZAsZ9rcRfBzVEWxSJSzSrdvuK7ZVTi7YCSuGqXBu23CV1s3339xyVcfAyrw1eaFTNYq",
  "key4": "4LsfoN5iykG9QCo3SjiGNom5xRa2fUin3rhEnAhcGzzmsPHcB4Ai6qYuh9ZVWz4c1skJbZZRSQcWArK8uGwaxgjL",
  "key5": "52gdpEjuKQGPdZM3ZLUBK7JgVUwzkXjib1SKn7MFEBCRjkimHdiqoLKZLwJ5MKhMDZeNMixRdQ9ZzyNiDsEZQPFF",
  "key6": "5WVdqWogMguZf3WFRamN4n7w3a7m8EsssbYkXtQmdPMq8NKyWxH1Whxm98h68u4YNnd3hoPZym1DoqDoCL1tzuL1",
  "key7": "4gxw93voUaDQEA2xVkKsrk9hGtmTXDVoMaQFJTAxWyTJyAynSkfhu39Zya6VwUEErykhit1CutCAH62Ci6zhf9ts",
  "key8": "3Vt3uxo6WoeC5W2J2T5Tp4ppRVyL1c5FGCed8uQBjdWDc3sc8ZGiqfMDxmTi9kxkhtJ5wZVfWrhxsMcS8HzGJCTE",
  "key9": "5AK1P9C6KtZoKpBzZoVwfV7R6GBb8xVQ2ukQuGUpsy5VecXb3VqGF3sgzLQ4FYE3JrivDqFzA6ScNsQFxMExj1V1",
  "key10": "Sm7nw3P6FNUjeZbN6QhuQh3NRDzSJFkeevWFxWMdgAQoYqJXcWtqSYrZZ9oXy1RPuPAybXjBFTHBfkbEgREcFvw",
  "key11": "3wu1KquK26fs8w8ajdxWUP4Gw9b4HaTAmSN6vcoj8Pvsa4sMTqCAqu3fMtjWPuK7izwydEAsmxPMnprtsVcbE8aU",
  "key12": "6pqbWV3bZqs2Txyt6zm14WzRmQHSwE47BT3r5DiWjT95ucnX1H3tGz2D3tspv7yAEU3HWos6RMnaURch6FSKzXZ",
  "key13": "3qhWGmANH4VTZurTD7hMpJYXbLTLVV7hfkDyY5RXkh4fmqoj7Wcqh5cY5yrbdEBdekctYNHYek4C6aLegyJaQQb3",
  "key14": "RMQnqNw9MF72sNvAGV1Nkte1LkyqGjbcPuYwvF3PWxfv3k1T8iUci7ABwMaHYJB6Cx3j274j89Q6cHjq9A6EGUs",
  "key15": "3FvK6LCKqUDf1gBi8aE72GajruNnt5FKdhsSPcyqYdzauJsFZxuLLuDJ3iqjCeoVNUdXNcZPSZtBVUbudYKarYrk",
  "key16": "3vNk8n1xp8zHAZZuYJWfCC6fczHwgcEhWwEzTf1LrqdcDVFaHZpnrZ2vh3FvY6nQ2PMc4MT7tSRiBrnnNPouZPcU",
  "key17": "3GUXnD3mHwDTSaUQ9LRyr1mK7VXF82XjvFL2yyrbEvAYXTCCTobPtTWKWtDeJu1NvVMAWBY33xbze7VShw9Nk3ky",
  "key18": "48Pgu8t64Ptt9G3f3V1seQvMT2R84YcLPPZs6AYuw4J1s82wvAA1v5YRohWvZzqDx5LJSkfX8k1dGbbQVgrhqud3",
  "key19": "2T1pobrJCWLr4fUJCqcwtbCREkj78QmYHpniearmYMHmQAruUUQDSJd7ocKAVYTa2W8NuYYEzy7J86eqVokf88yS",
  "key20": "27wvRJgt7cBKxiUQZEzhpqLmZdBJ3LCezeg3SePzVM7WatnDFK18zTzPTukLgXMXe59EtaiSjw21fmAxnfRAVc65",
  "key21": "5tnKEeTJwNF4kgKb28dekwXKvYf3QGKAK83978mkuYE5qdzFsN2X6cpKzKmCF9P2eyRqtULUqPBMfVDRd5ieoSp",
  "key22": "zk1wBYxXms9aE9Fb2MumLkw3SCuVGBStocEggf9K3YV5inuPP8SFnfcdc1R5nThmFdy5uGpFvGKGwdEkEpY6AcP",
  "key23": "2DzmhhAw27o7ofW2zDDZtpyTGBCdR9peoaoRRMtNyH4CoHL5piCB2dsnVDk8iRzdcbk3BjQSNnVLubeZrGxfedRx",
  "key24": "4Mcf8Eg7SvgYLbVqzs4z63te5sZVkMK1vCFHP53H4EmEZxkQ72Xf4MVmTxZa1rhLaVdvYC99PCBxm86of5oL1Y2i",
  "key25": "61Ex9TJEb42QjZHioJ2trFoF5wYaT62UW4SoGKoZLENX41ZpNKoDKTo657t9CMT7S3nHzdR3wCaSBd1Ci3Tg6Gm1",
  "key26": "3sSf3aDygBPzJhy97NWv5rJNsNXgD8uGzhXnq46JjqUdC49sUWyZKB3rmmZNhPsUFgc4rGUVfPPrR5p9KjgAZv4M",
  "key27": "4ULzn22hoJd9QnHTx6pmXKySvotnFXeLN63TV6TNRM1j5tWJ9Lb3P7ApRSwG7qe1EB3E86qCcPCbDDhfunt5fWmj",
  "key28": "3gsrHd2d3wADUXdiTVVjHVqxEVGjW5BJCnxpNsaswH8JpbRSC5JPme4UxDQTFia1NU1RzC4bJt7bVDd76iYUccXe",
  "key29": "338Vy7tPRon4a1TxYdTwpSS4cVh7j257KvJc7fyPBkA4fAFhecBFBfVLQyeDAc1rniRgXkSXsMc5wz4cn851DGFg",
  "key30": "3hqBK7FDTYZpJ29gr46aA3DxMMidsRmwp2xbcD995oWBtXtSATDQk6pdv1Q7LXp4eCVBE5h3cLcwH5b1Uewienvu",
  "key31": "7AoMSFZywTW1k9ME8c2bRCwXCaW1hkk96EZL9P9LaXg9WKmCv17Y9jM8H7b4CopnWoA1c8Lu4tMEXEjzZGX9Ngv",
  "key32": "2ZeAWo1xEkVRVZMUhwvfphkwhyhpeRrh8FWDAgb2ygZP2ofZq25WajH4Ur4NzHfBUAD2o7ArVLuob8oonaFFjH2n",
  "key33": "3RsTAvJ21v3p7whq2Pc6MbNYnsxkJ86jWtAB3A4X1uU4pqSLbrV2u5vvGrSeCMkAndrBwiXnMyAuo8mRfo6EeEaw",
  "key34": "3gd8tdqEWtxZjDHCadcs7ExZnSgjtje8ow1vnBbwWQjcFDvmYSsveMgaNmQZWxz6bE88ogQgHPZYgNVxAjnQWvGU",
  "key35": "4yMNZuhnkkfcSQkGQSAKzKvfRKgdW34LgD4MmdbxmcYp6zb5mLuLdUFqL4Cp38BXsxzPGYdVeKM2VKsgd2DaR565",
  "key36": "5111xPhW3cb3Qz555EX3Y7KJ5UqkKqbZMCUgDAxi7kaQaDbo3a5CvwBSnjS4beYJ4CeHDxHK3X7XYLgf63ZQQ1qA",
  "key37": "3CVHJ2C22u7v6kGZBa5cH3XEDQcgX2TqoApbjQ2aPJU7kvudGXHfDnPnmQj7jbtWvyenuYuDV1SnWKHangi4SZ9t",
  "key38": "2LkJdwuTdn6Y7JLR5bRoUtAPHaoRP738JLhxiKxVEW66QLLCKJZpLUvg9eXM8mu3o3PUhVLLy2wkantVWn24qg5F",
  "key39": "2KMeFTKXqoaBAc7ELRANstXLKHNZ4u77JDn2wHquXMHDJYLGrmCGsG7Rr79n5WDcfXsGyhrtbgN7ADLPjPHWAuAU",
  "key40": "33gTfUE8hD6M4rsbZuYNeMs2bE5pqnov4GQFBxNuMqyXr4XKHM5YdDtFCKAazeMCJ3FwCcFYLA53gdTCU3CKqecS",
  "key41": "4iiqRgd5bqzmUoCDxLgLo8DUmu45ZnqeSRGgE8yMQYQWKSJaXbHVZLUqCjHvtbps7mdBUmU2UsgYUQvJHiEoSncx",
  "key42": "5LZtTxRf31iRm9w8DrSzrk6qztrQTiAdWjTTrnbVhHdPFQrBqfuKeBWbXzDDEm6Gbe7Lobh49biMwZX3iafdUJ3s",
  "key43": "4fm99WNnAcwugPwPshds9qXtsfgUpMJnNky6u8BGTxg8PmYXXi2CxU8nrYnEYPP5obL1v1WXtdr1X1MEefEV2zyq",
  "key44": "Y1QpS8QZx5ptuDzQ5Xuo6uunmzYCgSsyW17VJC1kxA2yZ8fS1MYTVYYKP5fCK81QQ7ZwivgfsSHyedk4wAxHjo1",
  "key45": "2W3KkQckeSoFbAshijL8zEqU8Dj8Y4cQoLsLf3wjvCxvNmwzSf4xkHbos7USu2edJBa4kBiWDDLjih9i1S2cL3Sm",
  "key46": "5LhryZwEcawhQ44GoTT5PJ5axh7ZhzADnBEs2tduiJRCMVFe9gARAPh87hM1Knk7JRuRL4WKnX3eyEsrTwiWKzWn",
  "key47": "27awrdpeNGbjuk5bKVeaxUNvtEdWR383K4VRTktyLuF8hECVX2AQfsQJQUkQkeMa76Wq5JhmoJu9VLcGreEYr7DC",
  "key48": "2wDXE8pMhcuzZiTNv2skDjuxnhPRXFc4oKVgdsTM1uxA3NkhzXzz5tb6Zva34fxZ5SGKDx3AK3yCoTbYM3Kz8crC",
  "key49": "4HCJwFumi3vgU2wV9oSATeYuy14f1tybEHMLovWRoxwvT4SEZCThe2R1vUmoLrjPC2aibPUszDDBLPrCZxuNRE6u"
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
