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
    "3FVE9nn8zKAsDuN9oHdF3KaM1XV44uKzbL38Wr9Sat4pDd9vA9TrQ5y84gsgQhLqYznyfLp2gKdkhTV3dpuWY4jb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RhYmoFmcxp1fpgt2GePCX8R7uEtDGzj8ijXG4Uum57atQ4ANt8mRsr5A4Ctzf8He57Tt5DJWpPk2Z18caxERKGK",
  "key1": "2ZameDSNs3egN9jiZS1BwEatJTSYbN3uVsKrYArKQpYkM6bpFbFHTRf5AKZTRvjqbe3igeZgPdEh1N42yXS4RDFQ",
  "key2": "5Qgwu6MQb5a5EmrzJePA2C1HZySP6sHmLGPUVgAoeQsg9Sa7pDWG1CQTuz5oB3YJWJV1rSdhbZVjx8buBd4AMtmH",
  "key3": "UHrhGE2dTFc3MEuowcWAyRZhvM2GWXCUGzqgPrsK63kK9uMtbioy4FpW7ySaa4WQBpCKhL1gm4bEd11anVr1rT8",
  "key4": "451WF5stN83NpCbeNdKeLup22yxrrvz4cEQjRwWwLhCF3pqCek3E54k69HvJyBsNCF3FDDRRReamSD4G9N9WrJ76",
  "key5": "45NskdoazirPCbM7CUn615DLGFaeCNxpyiv1QEFqZpSGG8p3rFaBzNLP3Vr5cRC1BYxXTkWAf3QmVTwJPxUFZPfk",
  "key6": "5RuK71d1yp2FB4xX2uDMQPyMasf6GeqpGNbxvwhJCyuvSZcwvRih2E1aZ3E59xoxLPrr2kquf6rkzor5aCzDxbfP",
  "key7": "4yJx9NjWGNppZhAAvBGuZc9WWip52NUZYLhfgHVPH6zghTRjXVzuedxtQ5uAdM3QUjYyJrCnVsNST2FkVhrTiyQF",
  "key8": "5hAPrwEyEHs1ytYNXWDXz5UaZt5JtGBkb8pCwhvxdZFrUxbDiycgmHUoQjU7X6rfh8EDmmjnd9jteJAxKFtBevx9",
  "key9": "2dCPbAyGWpRSegPGajYFwQ8P4dFwrYcPTTMiMkyAs4cByXBXAHF4X7UVeLyKjurFtaQ53AFJ92wFkrTYCAMkEtc3",
  "key10": "42nqHwza3bWs42Wg1HrW6wBnns5JReAs1vS5CEDRxcGsxwtC3HD2vtoWnjMH1P1FduSyDv12A5ZD9FLDUyue8hw8",
  "key11": "21RKqVUoQkyNUxHVrqDJPpzCGrv7Yya8vCtDuBnS2oVZ7ZLAveVPPJiXctZEFHUA3NQdjfrNaenrxnVm7nKGG6KL",
  "key12": "3DpQcspeRYYJSJ1UpK35UK34XRF8Cqmc1XaoPbQTeoMcyeS9HagvKUHAfsnyxAE9cHURmDCmUPfwgonMGNM2eog2",
  "key13": "2LYne8oqeu4Nmy8EzCawQX5Kdd1JdSgN9J9ESK3KsDTKEvzxBLwWHV5ZL2CJL9ZNXbfyz9UWUoX35eeHcS7AeYE2",
  "key14": "4u245v4T6YaaBjfYxrfGDPB7TbKFw4yxbBWVPobDba36aK67LpDMRqigsd3RgH7ZpQqX1kaxpMJ99321g38yiGsD",
  "key15": "4EAP1ZaJfkvwxrPaYG7FFwARsX7EzwLbzV84EyQz6mSCXjFZ27bRNwKJmZ84n1s5SNcDQtSKugaUdfZboSXR1uam",
  "key16": "puh6CmArJRW2QEncSsjpPuhGnFaFsnSSWASWhKN8Zmj9YHB8rw8AcWrQyds9LZZc9psSYJkNMm7ksv1j8okS3M4",
  "key17": "4d7fc8YgR7G8ZuZk79Ndhte3EWSHA5nQPjXkAVcP4VWH6DAyELMiaaCYEZqYzujX6RqarB9x47AcSWYJ5nS9UXFw",
  "key18": "63U6P2ftECQt5yBf3BZov5NRQe4y7YejFDRCgAk4iDSvyvepH1hHBrnjxvfv6NhfaTFNJkEt3X9rEoF13oeVUkm1",
  "key19": "2ddBE1qXbECaEGaLzrEeh4ThDuKsdiJXY8t22EtkUgxZvM9pXH7vDr1zzp7nMEFVxRVJnMg9XBVDU5VoUDkX8Bkf",
  "key20": "4unxFpyrnSJpMFsAoZ6MksomBny1zhFTuj63zFKto9Z7tWhDLWZyfbUnB9coSFJVTRo3qTwQDTYCzv3Qjzkz3EuZ",
  "key21": "3fDcKFTWi7Yi9VmDxM6GPdCXL6J6pschQ4vkxYnTjnEek3y8Nzatevxq9aBX9ra4S9fjpaV1cJm4QDXgwgaJjE2W",
  "key22": "3gAxMZDGhFih1saWG87RJtdjdLZhyXoVkKwCLxvrmeVoiAY2TqFYora7HBrzYvFoHt25ppTmB17zrKRH9sX7PSUe",
  "key23": "3Jd8Yjd44ZkXJ8YbCogVoVMvdaT4ipKwcdWbkMxTHNitf1LSMaTBSBapqwM9NZzt1r2bSd9sTBU8W7YHiXvmLkPo",
  "key24": "qpTAosxq11DZriFxyqLDWHapgKDuYdXhn38hiuPfAkjszEVoMLyxLyVszDN4sKSxxpZyRCKUv7QdB17GSxZkfE4",
  "key25": "5b9TdBQ7qDP4hgdDh4o36g6XPZaoq2q7qfG23TtpqKNyM5J1ARFx4CC1GUNekgWpXhpaSD1yf4JGcHA3VF1idSTY",
  "key26": "2EbHCSeruKmtaSe92j21qDLtztpPhFAkp1ik6nm7XcQEw9ZPsAgoY38oBz6JLBUR2WVr7FkgKwC53Sb4XZnetkB6",
  "key27": "txBExLQRkoGRLKLDQ7S9vbKV7Ew2ahPdGEaHSK3YhqXdhp5Nza5H82S1d5d7b4E3FvrJd36tumc6yuyRjeLbX4q",
  "key28": "2y5VoNekEcQ9kqbpYw9T7Sqdxm8uumWmjP6x135EXKXJA3Qn7N8t8H9Xm3HecfxAq8xdjTn3S3LrXnCxna9XdLQi",
  "key29": "2zihNBrifirrce6r9U1kdi23SqBL2x6qh6JxvDfXTvnCZBEWrKz4qEYSEjTzYUHSaS5pPmxyRfzte2cLFwFbHtmP",
  "key30": "4NEDaHU5F8ChdVAA2PmJ7kcR6qiTfz4CsaWM3KrENNP1QpcjqbKzhB7JGZrskz343hTpKhuVNETHJmoDyySvtUFW",
  "key31": "2QxNFdv8RQ8B6kMwtwvbb8Rup6hzQAhwKUsNWcYPPBuRJvCtBwBJY2qAAaFevK431dGB5hsUFxowM3E3k1dcgVwU",
  "key32": "62CvRtUWJGNgXMM5kxUsArfzGXJYSG8GMcawiBmZr3NXz67jGXf9nfqsta5CvT36exMRX1TB5bDdLkMGe4JSnsBo",
  "key33": "HbrMyhMQ4pjzBz983ukkueWsMdu4M7ziHdx2ey1ptU3Z4oDutLNUrC2Hx2wLhtFxh7XrTDqHVwYQAEg6KRer2qa",
  "key34": "35HQ2uuUGg66v6Ztx5eiU2q93dT6CgkuspXnDWRE9vEndUWpKpCxky65ErowwbmnjYd4CuBGDhuynWYuFTgztvmR",
  "key35": "4uVJFxp6axKhqYzmZJxqoL8dKtsyaYUMf8NqcqRPonzJzMqNjsCQbjNZUFt4tSGkDWwmBNzGeSTH7t46p3Zx7Q71",
  "key36": "cRPooefiKWPk79BPnKLrsWpQLTiFdE7bDTrQQoxkehD4RSqkaRvyFksBZmu6pA5xBsRkrxoUANXZ5b8rzZa3E2B",
  "key37": "ESyFHdeen1bbApRc5WTRQyBBVSNLY8XBfsJ8VFXQaMkwoQrnZSjDMqsV2Vurj8rwZrLDQs64heFrg6cMgBbsGLR",
  "key38": "3HSxLTgytnPYepyE6aHfw8L8wh5Zji1EcxkaJ8T7qkt4gHMhTx8uJxQg2qo3tGqASeotskJtsmXCmAFYxMacdTre",
  "key39": "4tHRJwSt8f14rNrmYonUMFtyWvxZWH3LADUKsxRTmEbkvKNtEjtmvvQ1QmERqy49EXbU8pFMThWzcmqPawmwBkbd",
  "key40": "4audWm75HdyEueQ24zppPSggr9TgEziKfpKMie96u99T8TAhBDFWt98iNGFqzdXgbh6QRYwBA1yUzQzJU3ZNMCuD",
  "key41": "oWBhHTaYUbJBskxHwa65yk8qYjJgS6h4ceXBCxuXp2UyVqboLCGS372yp3ikenBz8wQ9XQedpupdNHiDScM3GBw",
  "key42": "5xHXqCyx1PDeqFArCftBm9ifLDQDaZehnc7uUA6Gn8xXApfsNqtkZCkrwE13ERNUZGmE2jj8TyWyrRWEo1jhrKDp"
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
