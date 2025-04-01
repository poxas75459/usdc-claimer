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
    "2reH42ssUZjd7GAED8PxMWc4h58G1Gv3Kg6tLYT8LLvfbgnfywJTF64mbYxegkfAeCByrxdNcpjWXFsF9yxNE3yY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cKdSW57eyUMcEFzCrw1oLFqApqV3strv6UpQVawZSUPjAtzz3Bdesw7g7FLruBRYPGck1XNL4Uoj5VG9svP2CGS",
  "key1": "abJw5rg3gYxYnywf4GkNeniqwaEQuLhcP6L5ckj93EL9maHeL9f8U9DQWMVYzj9fQPDpUm6YxykuhimjuUKx8nT",
  "key2": "4yez9QGvo43PJfDJKMqWsjwBRCA24o1mtR1ReL8K3mwTPrtpQvDzAcKpoweCppp5ujjqH7ezKhgqZ3g8exiGDvPg",
  "key3": "kTnX5A6V2DXkbsvJHPPmRsokrLAeddPSqzyKNDUrLuf4ZUsrU7z86a9tx1Mwy1gkdxnDxoWMHtzb8jpwJFBhAVv",
  "key4": "4rXYfJA9XEi9FaJfWAJ9EkSjDaru7ZtQ3eM4bW89EgUqbhVja5AZqSy9JnuzpAiFo85MocAiXSQde3AuDn2t4usJ",
  "key5": "5R9HVqacvhCep1NX3U8CeFRgSMccXvprAySa15orS6q8eoJq9T7nFkJftYne5eB3pKVqkgkQz2q6MU4HfnVuBamB",
  "key6": "2U2yysyiUtDrb8WmDaeRUuaYSVpSioBZqJDx8dWbycDcRErJeHx4cdTadJ3ko9rshNdq4L9NG4K5utZmYPtCkmRA",
  "key7": "SnqkzUBrFZVhZoDY5VFwx4eh84jVcRfr9kdmDmsfHpS6eJcMa8H4oD3a4nRYbNPmfC9NqT4AKCG9pdw5XMWEQiK",
  "key8": "5TP2meTSwu5Mrpi2Fw1JVxBAnDEan6A9j6arb5z5EU2sJWLGDB8cy2husuVACensGtoQhFhAevHpEgbzsXjoCbm2",
  "key9": "5HsM2uBMJYcTYQyn7RjAH8kQGxDSaYXwZ2bXKab1Kn8eHi1wrrq8WR3cH4YLtwbfkhM1HUTz8zWF4RSFPfgFvhhW",
  "key10": "4FL9uNH4CfK5KV3wa6DkidWCwMCUDbXSJTAJZRue9eTPhcEtV46xGUY8Po3zMw6J3hGo6FRu7SERXG5PgHmEMA6E",
  "key11": "66fYVnvwWjRxdQZeEskagd4gS27taWzmjasLS29pKAUhRPSd37brwHHXUdNS8jqpXWuzwco198KuAPbEbw12kg13",
  "key12": "DXDq1Ae7Aa5BpKiYL71svgmRSUvgcx8SY2da12wJ3ere8NQH7WXtLNZC5gNFXX4pWdkmvS1cGNYVqj62CvbyRRL",
  "key13": "5MJfRCqXpWDU41Sgbp4iDrzEcPv7XyzzZQFtRGNFCxyX6C2M9WLSiTc5WN6jCKD2K8a8aXurf4NGMhxfe5SHhD42",
  "key14": "3oGRNgbTuRJCCyq1EkThkN3kFyTxQZLt5hxDEeE85Ef5qtFwUJYGhbYMGmSxAvttesoXygiTkMgG2qtab9yZjGo8",
  "key15": "psi8ZYQmaHeKw5es5YHVnM7HYXR2zj8RGABHYP3fu4wZjLUyvtBJSXanLx7Jot2Sns5pyCYk6mqcpjAL6PnytSR",
  "key16": "5ceygQuwoZA3X4r1kChF7mEafYohDbhV2dCbqcvMbdMHo3AJ4zMAe6jgpaXRo9aBi5a42KkiuBVpPSDNWaxxW9hp",
  "key17": "5J6RAkD2C8zWc7w3e63NnFnPrnNnnouQd8S3zyb5jWeGv35myLj8Z4hetjcpBbQqG7a4z1roFD2wuYsPoRYgsNY8",
  "key18": "5N2gFiupG7gZbCWiMdrVzdGgvmtm7GTrWdwouesyHzSEAx4dQ57EzUMiTwdM2aZcMgQU9F3VQAr53J7mxaNtHQkz",
  "key19": "4PiHp5binxagM7iDpRSQqsvUAMCLocBt2NTUGpEnNQhMx8EjU115X3k68Biw8NG5HhSTWApTeX75xNXYGQQkMnMG",
  "key20": "5vyvPZAQJXw9Z6qH6w9D5D52XGpKGHVXgnu5mSCpQPPWjoyuAvqZZ178TLW6wTK5acMGmyi64fzU1HixYPNyS3Tm",
  "key21": "39huYqX7uPpZ5EoDY4pgghrCRLTdfUUnzpKhFSSunVQdBPSMJPD3hwDZ7S1rkbU8QZvQGv69TBGQKTz1FbjT2RcA",
  "key22": "5ezoq1EhwynRUqbhiyhss9RPkbbXZsr77DUZDEJtuZ8P8ioZWEdBQk3RXULDnhWEBEUnvqsTeMQajcZC8AAkjSF7",
  "key23": "5bs8SJuMk2iv5womjsxhsmA9UUrWypbaVRohAYXa2iLTCLEmzeA4LhsXteS66pZHGMhgWTThBEnhQJgqSdCZxxuW",
  "key24": "28zsYYsGEFrTD6QmwyEh3BeasH6jVH4sXJUje93QK5GdpSDJsyZUj5G4h7Qv5anv4x6yCszKiTn6dPc8VkEYSweY",
  "key25": "4fhbFdb2z2DNZn6VCL6bLgX8tHUreizKpKYx6uUF86KVR8WLooUTxfWhjCX9aTe1aMZP6iZGUBETLpFCd8FwoPNF",
  "key26": "zPNi5n22TzPp2ECxEEkXH84cEGFdMLxy1swzs5FG17LJSuxfjiSKryScsXimLTVmGCBBAFWLs6MAFVyz4hvGGMv",
  "key27": "wi4U9KFVC3uab1zGuXmpWBEeNtZdcwwxbjGJmnoQobmBqiw76AYm1H9j78e8Njs5eCWfXD9sNVV1KA8JnF8TNvw",
  "key28": "3Tr8qAyBxxaYqBRXE2B6hmumjsFy2stg6LN49NMpNPQbjxF8acwmEfLPee6L8oXqAVK6P6dHyhszEu4J7DbVvwA3",
  "key29": "3zXCW5KJbvVh3bzaP555Fr8qCmW5xnAXeTPjLMn9vZUx763Xygvx63KK1ph4yPMeP2qu4kkjMiKrjSecMACot4Lp",
  "key30": "3sKan5r6qM1QBZqs4AMSVpYsgEs5Uz6Quyptr4DfGjZR3exnRdzpSKSiNRyjp6Z4yixLjiz3sbcfP14yNgLCmErv",
  "key31": "3N93NviMWV2iLgPyA9k8X6FadC9Fpx5yksTU6RC1aMx6CTLh7qU8uH5xtUM1Ho5s6fXGwDNcxPiBZBuwpQr2n5PY",
  "key32": "3Lf1Zz4HswLB6wHV8FY2KaYVM2N7o3VwBhatDoDn4k8o1kvBu7p17B3F3EQ1VPcRwmX2hrMzLVxAEutEBmNQ5GFy",
  "key33": "25ZHrjcKhB6V9ZwC1NHXUFxB3x1AWfxDhYkGcgWsvNFMyMcaREFvgi1jehd2PfeRATKwLvqQTqxvos62BYry5SE7",
  "key34": "3LBfoyosEJbPKPoLWqgFDZLNKstLznkn5EL5r1nbmrzBHzrQD4K4pcYLF8AtQtDTZ2SwWXaHhwJxTY1ANAstTpqC",
  "key35": "EGdC4DvXjaQdLp2ctFWApyLU1PvAWZyCP9f9yJFBst6ShQRvwaW8E8ugsWDfS5QgUqcAUZ4sfmS8W7xJbrWbBJJ",
  "key36": "3vGvuEJjcGb4RbTCHUrkbo7F9Zi5mvbtDi5DKyEeZ6puRRAQfyU12VZMm7URG8pDtXPfPtpF8PppGJYzy9Z82wt3",
  "key37": "215C8WiaZJS25vn9ga6f569pU5JfwuisK5DN36BZqCgJZHJb6vwtReZRzKuQpGS1XfCxaKPwXboHvDkp6Uu9n4ck",
  "key38": "3SS2Svfh34pykfa4QLb5MWRza786hu8JhxzUZz6XyP99X8mLeSMJhqjdWMyfk4eBk6JCDh97qMiZZdZKsSPr4ft9",
  "key39": "2WBkKXB4hNbfPPSvTAgyeWc5R7K8x1tviWGncZev3tokkEW7VSTqm9M2TzjPdg2266ZSAoWkKvwz5WcRQMoimULQ",
  "key40": "XBCQ6dV72SWmSUUdEZJECL1GAb2Lkfogwu3KffNf2xpPoKwRs9hJf5Qt6DvBng7ovprS7VFxisHfLkSC22s8ePg",
  "key41": "2pPECbBGAhQpz71cHV81Tdb7X83u81C2nUWkc1S2G1ffXt31kRUiTeKkKMsRUdtuDxReG5zGSdMQ8wsKyGEWNL38",
  "key42": "56UJ3xKkwonQQSAwCpbg8iqDbgoCxcrABoZ9ovQ5ijMzzzVfBar3sQjm5xS5TBcTdaitqc3TY7Ypr3guewczt9GU",
  "key43": "5AAzDrM4ELPiPSQfaGSmK8ovdwcybabhXwzSVZpNwQ9qD2nNcPsuzDSUqAeMV5TqZjv5pW1hE3JQkakjh5Vzjfg1"
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
