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
    "21rFxJ1DV5Z6AYRjVWqJotXxdfuerALf62VF6wVLiN2bqLnMxUdaguHhdYkxBxPZWueCtk4iWqbvbJ4yAHrgES6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xnuLwP48odgozTzJHJ3UcQhYB1B7vMnLqJG9tRCNm211h3VQSYjLqRYzgjoLB8E6z5XfSBA6eC9itmiBThBu8H",
  "key1": "4q9yja7r3TnC1UVcB1Tbvfihk7CQH8E5rWeHZ2yJgExE5Ms4DwJRFeYD3mUjgTGye2SzxbhJw6DxZhgSmewGh34J",
  "key2": "3N3iWixnSS5nDmrHW99XTbRuzE5UwpCAkwoGHUX1WhUPDDTqXRJgHxWCLLDPKoscebEbvfKpU41rHEswE6do2LYx",
  "key3": "2GgAyNxbKTfjmzUR9sXEwA2D81p1YsWn2zYy2HL2d2y6pKDDXTb2cgMyRc32cZ3unz3TYYw9f65ztScm3465Pe2z",
  "key4": "2Bhj1Z1M1eUfiGgb1cfmqXASd1X13uQuf7rfMYoqXa9PkBAY2x1kHasVQe7XodCuRHLMQTzM2qqsbKEQay2JiHQk",
  "key5": "28dAYwKtq8ZRdd1ecjD8EQgjyMd2dvFZ95dPFMpd7dKpJnw6tEL6d4aFwXddCPy4fWCqKvH3vY3gCr1d3x1GQPYG",
  "key6": "2Cb2MGwDmsgmXfBCZhKXGUWPwhhBTxJ5bpXHnLZ5D9B3x4THNoa2m4Un5qKmVzpP5wvcDHHj9zgu7zYmyCruZcCE",
  "key7": "hX31UzCqLBkuUjVGG77bfL58WWpwdAWCZq5i4eiTgDg3tZbzMwY5E8Ryw5XiiosGWR7RdyxzXcmM8vdy6QyPHjV",
  "key8": "5vgiEy5SX6DzS83fmvU3ganSWQBYaBNSVRD6QdYzGngKvkWYx98VZZ7Hw5zrAetojtni16wR1ZWLQ1qEUB6sG4X8",
  "key9": "QavN13bMMy4RAYsmVLc9W5DMzGvamEdUq57UYVCKYfg65S8Vt7Y1jL9uk8fR41kjYvmtoX11VMQuGaFsv1kC7sD",
  "key10": "5w9XcaoLJFCCad96ityftenUk6abEaqY1xvjagLKse9qBCsdkMS6gSShs64W2KTMZmt5hiMQjeyFpFREmUEZcCJo",
  "key11": "CK3WaakzW4Sn73fqwWtZVQRtTFMJJ7YdjLzzr5gJ1Dk3Ce6V83JawzQuMNjNFgFq6p8EgGTtzB5DYWsc7oTme3a",
  "key12": "2Y7CA7ysMKNkJhp9mj7VLD4kz1iJw5wbaLMs3NsgHPhREyUNGXfTZwHRGVBzqufXt4mBnD54jWA4P6AiLFa86B8j",
  "key13": "5FBNCirfvNLYEBsA8krUSrHjT5Sjk5MzxCkJcq94N6oM9WEEbkXAawfkJmvgcCcjqp2hzqvPZBsiGSYJ7aaKwXpq",
  "key14": "2ueuNEK8YbmspH4jTjA1Er4dkfnD1Mw9yFMckpGBuUpqrKgAtBfFkFdLmyTSroEsQ4nvvMFgsYBebTsSfQeTB93G",
  "key15": "2eNXza83UVrPJEstNeg1ukgPxVYBSPvgK1oyTyKfGiPqX12cQ8Ryok3U43oDzYDbsdFJSJf1nsboFCGVSHBrZvy7",
  "key16": "2wd4oyCwcREGXHRzusVyTyUhhMiFELoGsrmqfFYXNxaiEypHNVEKf9iCSHf17x1MPf9Bb9HA21xVTx7SxNMpTRTS",
  "key17": "2DCt7ke9bUigMZ1JEfQpBvbNGYe2EYxKe6khSjfif6KVi6mAsf1ECQyP3UHPzyPQ6PdWwetnd7nmhTf3sm9qjetP",
  "key18": "2Pd9x31LPHYXcHcuec4y4Jqr7MYrQJMKSBzX8q4iVWu5TgKFpGWc8TzKxfVM3E9kTqZPPLU9GLfejfNwY795udkB",
  "key19": "4m2SFjtiwysDefz6Tgqc2HTEGYQj21HeQPEqMBtPnn6KSyaqr1UwPqKyHxGZUdMAftecVLt4dVki7Vgdm48LPGpQ",
  "key20": "4zn9ng4nM1p7WTeE5rN1aaSvE3L6u7BXgjfvfSbd2qst5nSJxRVszvnRSs9y7LqgmRG7hUtGKQqgrnF2LdWKx41J",
  "key21": "4Xb6icDrRcLz1YtfoErKBrNqDVKTG7BwQDTGtCemxaq94iabtKZPBjp3uaWe4BQcrJ5A6DtXDrzFRCo3wUgRUVqN",
  "key22": "2ckRPVe8mo7SbWpT99STTQK7FiwR53HfcRHqjdr6c3VnUrUZ4VCDHtLCMZkxG6qd4jKTo4ABjWouZf2Wh5z5pzyN",
  "key23": "SkcBLHDS1DRGjSwqG76fWyQ4GYFPk1DaWVyC5aZ19esv4RPhdFoWfDy6crBAuZxXrD9ATR3fPsH353X4SogqHNf",
  "key24": "664NfmQEzGFBhUCw1ZJCXWLTVkSzSzAZZtC3rKq8Dt67mN872xQQJFriMCJ5FZVtfPeXJQULb6Ur93kUiRq6dYxF",
  "key25": "8peRSJiPdLZkLmhvB9a2mSktrfnkiefXWopzCK1b7xy76HK8wQNUCDk1nSFHG4b2Gqs1cM9k3kVQRUnQWoApnvr",
  "key26": "5PzRsJhR3fAbdwzGUwVne6Q5fmxVTvedsUhbhreQYNTEV7JhFmuRSSeUHwfoMmagSBg44qcSbp4hbtsKYxU9EbwT",
  "key27": "3PNcpD2YZkM55CsGXBbmCwdb7JJhtFuCJnKsuuTjbRAagTYDWuqcviSQivrSDu2NK4Ei98HGLBzPGNVCWZ2eBiLN",
  "key28": "3XYRkUvzU5DMuisL1ZPUvUEt1zGdBVYYuGEy7J6xny2i82N4uDwXEaLE3XYeVwnYLiT6BLHbnNN6Ud4pwP9Qg8Ee",
  "key29": "3m1pMegnHcBsHTMndS17VcSGJFKoLbDSPpjyB4RR1L1cdFWxNvx1Wyw1dpyH7haXg1oM7RSZvwYSrwQPnUrRKTYb",
  "key30": "4r1EDVK4XGyuaeudMMJeNDYkVuut1X2bpN5XRyQ3mVZAJEawmE7aNfMGYYYGjbaZoWCNsqBBnzDqTmWVr3Ayjvk9",
  "key31": "5v3U1YtVHMbWeWibUtQakYg2ZyuTKE3KDnBy5vAkAeuDNaQG33AmN6K6BLUHcUM9NCupW8HUTMNWTgox8LtQpznu",
  "key32": "HxiU5UycfVccLvLQLLKHYhgUvGrekmpBcYrfk6PupnU5ce3kiEwzfhRWiuYKdJunkdZZYmpNHb3X8LZnrYdZgUm",
  "key33": "5oYSoptjdb16Ed4YxY2sr9qymnqibwL8ukC2si51adbaa57QBKVAuvFCjYpiktyfJftMrTfizAxdVZHYayY5zFL7",
  "key34": "PBkPDxQGc7e3FDX34R5UxqP1x96tmi14qEf58S5VwGuo1DFwkmf3xbzbCLM4jxYCvHRAgEwKupg6f8n2HPsYPNQ",
  "key35": "5cd78MPgxjFQC1gTc9yjFxfaydrVj6sb3R7x7ZUPHiHt54p6QcB9XaLWxDa22zR8N9ZRXQQsF1AMjVL2uVfAmHBM",
  "key36": "4MrNGcNohrtWnGydG7kvwHdW2X8BWv3sJG9sDu1eJUbAjGQA6MDwCsquLaoPiR7BptszeGHcNkax3nQfei5q9ihC",
  "key37": "kYmpmq2qJtaZnQKbB5AbNBM9wdHxrXXh2TaWxSmSFPrcg8aBMeofz1BQgw7AjQQydrPbSnQMm11W8EPu3HtGn5K",
  "key38": "2VqqUaH3tYbsKaz3t6JF6u6Pey6nN6YxYEZcv3Hc9aKg1VNaSYUzZxL3CXNSsKFvC47BFj7hn278CjDnEbJR4c4H",
  "key39": "4ZBC9LGeV8kHPRdk7Wp5m7Yge6Hgea5oe4xDC1XmP2vHMGD3M4hHoWu5Wf7DLwoaRn4bHwsX9MUuXBLXb2LHnGTK",
  "key40": "N1xHynN9ius1KFVeAEDDter6RWn1RC4dm3zmx5qTWRsxanBji9PV9Cn9NHDmRQAP5PRnm7ZKkPWFJoDNcMBqqRu",
  "key41": "2pStQL9iFySWfWxHRA8vJL8Ht9bGH39SXSadF9CJbj9nzCh6mvBmAdoNcKejENAfXhehQho7U3SFeoUBYFEUgdT1",
  "key42": "5wuwTH1ogu8c9zo8BhGkHqj1wsBsJv2KAnXL2nyfkrKJzmbBR23aiYQg93CrzufWvr6FCVAkyWskvBkDfpHJ81CS",
  "key43": "iMYxCK4z9cZyC4qYS8g1Vnes3yVvJQtGFkpwuxs9siJEXHmk7iXnuqrmj5idjicEeACUJJw92XuhAMV9Pb3gh2o",
  "key44": "4h7bybBarZVz4ViEqHUpB9sknoYNv6cSW5wGdyDuZ4pZdA98sNVhiQHQ14ofG6grr9t8XNYEXM6DxyhooNqcCD3H"
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
