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
    "2jy1UPftpbGXU23XszrYGH3n5NM9BisiVu8evQ4BemtazEqBEqKKde6sMkBtPNmUoQ6jDtTAWBmSm6mFoPoLfKHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DtM7wptKffccAAxqok6vbDZYUdUhBYWwgzDQ3cfdRaPeKk2CXd58Xob8A1fPrBhxaXqnp2ufy9w4L3DL2bmxTYu",
  "key1": "2xxgp5TLUzrTRFY4JJoaBCPQuknJs35PiALGqpiYVcdSf7v2usQUcox4SGQEZRT2V7ybNYh8Gw6XEPLKG2fMaQqd",
  "key2": "3ikYt9REnhaGhL9nheLAqn3chH41xAuqU2edhG31p6Ky61E6gSpbhLdv8QamwRZdccGfr2gkp48i4pSRZgVDoMT5",
  "key3": "NoATm6S7uFztthcmL7KDmYEHHQevdxiD6NXUx8A1gHq2BPR8txezyEaVStUQacdNoTCh7Ne9bWdsLJu1Cod7z5y",
  "key4": "5fFfWTUP5qZh8wdeQoifVxfYJponuRj91NUvcHJuWiesd2B7ku7pZ3h3wgaRP2HwS4Mr1YE9xuwHf4z1QbxRK8Kv",
  "key5": "2HwDb3pLXtUj359HyAvSZMP5WwgUsLLjRVc4ZNwdauM8F4SgczntvJzDqVWk8mtMdBWuw4wAygaLZRmJUzVVq9ve",
  "key6": "WshCxfefUsagd5K6WKJtB2yGNuaJSp9wFLj9cAg2QJ3WW8FR4AYnzmYSXzdLkXyQaPMZFyp1cF1jD3zbZKZFvxA",
  "key7": "2ci2N29mfZTyoVEKTYapmxhKCf7a4rGbq2z65Z86n2mABPhRgApanjUm6NgibTRNPRT3UP88AF67wFd2Y3P3LPGS",
  "key8": "4RodGJA2MjrqUTQb5kfJncZBCUahm7KoQ9MwkNA4naSkUyHPAGeBDedvJdcuUwit33iSq5gT3qvGSCiN2pFrVdn6",
  "key9": "h32FpJYh47NZBDR3fo3SJuQzx9VZptnzte7QGHk7iTVdc6psxujVmDahVw6X85h2hB4aeMhqw77AxYt8kVJsdGG",
  "key10": "2eRpiLA86yFfUV9ZAVfVfSekcFoxFG4eaprcu1PKN26qcfjM8SuQXucWCHZXc2XsRZeJKxQMAGYU6gvfYkZe6fZx",
  "key11": "3m9kSAZSHfNR3rCFeorHBjbtpNkCoBGH6AwybGgDpF1wDEi8zenF3EfWmXfXPMEvFjHYvzrDjBqdctcfrMb4bWk",
  "key12": "5ZEVn3gj5Ep9ZAVNTcA215WsEpaq6iYVbgDu4ymt2B8zKdJN11wT9XtrScerk8Vd22Z54R2bJZj5o9GufVHujJ8Z",
  "key13": "26DGuFDiN6oxHX8FLL1zHsTwiqdQh8NEeh3PyuLhpWvVLaQViJhmPs48eFWptsGbR3hA6PMT9cauCRtejCu1xwtA",
  "key14": "5hcupjn5Ya5fKv2v6vFjJAgnonRK1eyyqTTM3zoNwftLpFEChC9de8Boa2XWJiE5bBPw7U9EAcjzc7b4dBdSB6Q7",
  "key15": "5Ffy2C5L5zKe1YXKQTYJ6GurtC4FWTB3mf1FvfKzeFsmz6cJPBrLS6K1FgNBHvdu9XtK4367RSnoUNAUVcukQLSA",
  "key16": "22LbWUpaj72N7hyy86xQpQSRZww7RKWnWjXmvyA8c19NgRQY9mE4JqjoP7K528a8xs3EBLi2jecEfZm6BGnMuRNu",
  "key17": "2g67YctRkNJXtJcpRsNDmJ2TFLTKDvJsSQ3ywHjKpWS8rA954ufJEw29ehwJPLpkd24dayAmMeSZuG5LVWwo3Abm",
  "key18": "cyBSvnQ7RkdtZ9ACQX2qBbF4tHt5EvoH7qWhzNX7wcRex1JX6AGHzg12BJoXGGxuExZpd93NSaAb8GvFqaNs37x",
  "key19": "4fMpEMi2VdoSAi4MLsh7MAxhSQ6RAJbLK8N1CG78Zcn1NX7Jkcq5936k2Ru16qyQNYsdTk4AjM3yoqFgvQPiweE7",
  "key20": "25CB33jgn66uiUzYJ4tg8Gm9KmCd1kZMR24GVmezBSCrRs7omQ2XN65Pdyoneeuc3nRqu8cwNkqa8AZEnhzK4zv2",
  "key21": "5QJmxMySJzRiWFRyPArus41Y9g3jFbtJMsayMt8CKnE17bicSbvXBivkHYiS5kGjPLq9JFTUyNjFUcKLfLpTZK6m",
  "key22": "3iStpBbkeKHw7UXLir4ntdVehivuYTNgdJY5Y5Kt3o4rxji2HRXac2EkWeRp1eS21puEFJZ47RtGSpfZagvtjFQU",
  "key23": "2gqGuyPtGJyLAJuuNsFwk6Gu5Usd5yCrtSRarbJA7rE2mbz8tbSKsLcacZkWXFT2RhbMyzikkAjPcmbNzihcCEQu",
  "key24": "2kMff11uMbrCd911Y25gfkEB8DyRJ4sdV7bbcjjwd9rk6bBc5w2vtWSunz3UFMBW9spYv4vvM3XiRavft2jsms7U",
  "key25": "2dm3KtfLcR4dufF4uWgB9m6GsB8QZoSaHPD4kTVApQ2iS6HWi5wcc5oitkJgRfZfL28x5AWLftV5wTa9jygMcKsu",
  "key26": "ygcNN16K4KYdjAi4e2X5kK3peuEjVAcnywEWaWejCUCoSowbgFHUUdxkd9wm2nqNV6aRCkTLKXcJv9CBQLyxabF",
  "key27": "53g99RY9BbaU8UGaxRBPuyfZieS5QJ2RWQrC5zCQRLxSP9bor49xMPr3EZ3PorkymnDdfBizuxgkttkuv37itwFY",
  "key28": "4Frv4juUFBN7h6RVNsqEvwZ7AjdmQTRXEo9SUkdfzPQMPrG1BSL2V1UsjYCUABTzEGkyNRaUGN4wPiZJMFBqNaoJ",
  "key29": "4wnjFgMsSZoytVVTvAuN8ekEeH8cz7e5Jub6Q42CKMchduQSKnoXV57D8wUEjmQdaSNaTho7TSU4A95Kzj4cyTyQ",
  "key30": "4fwVk1mFUd6u39eVe3yEmypfx9Ge1wnDzVHp8sLPjJTw4JkJf4YxRBjJKYU2zR4zvscW66j82cAQhseTy1CGhRSh",
  "key31": "2GT9DLTqgzGeT73xVp6P2ECBofvHbPY2qJ1vaMVup4bwDMbiMCWdQgybRNkWdyXFWYHtZL6bsjiRaZCAqLY7VEfM",
  "key32": "2KiH7ha83B9XGVeZqbDrhigGJDPgWHrZezdKajbMtGxHgWE3pHuxEtZ3iNf1LW2Udwp6YbR2JpSQE4GnEEcydj4E",
  "key33": "4zvAjwpXhKwKCVDhfmHZ7gn5feY4tMkSFRHVAfh7uFf7FxegdNNxz4TqqSmJijh9Q33Qvbd1ASWXSZ6nCsMpHxHY",
  "key34": "4gBqQiNhHF1MEq5QBYonRGvR44mSFMHSannc1MsXCWdYAhckC5VA3XikrWPF4zStd81WrhL7oEkX49YjuotcPxFV",
  "key35": "4j5QuNPVyyPiJLDyk54GuiWzRzgGoCToUZ3cuR7h7VzMR49oaeX9Ti9kBJ2tpvJtnd3vUmXotYZTStzLSniTuKt2",
  "key36": "XgpchtVUg8qqfEhB2hEKkYpUjaKe9tN4dXzdDirpV8C84ydxP9bvBisizm5ooHSYmeMQFvNcSv2rJVZp9uSDdBg",
  "key37": "2yEs5aYPAH7rM3NCQAsTMRwGscLmiZG1D6Wbtv9jPyaRz7yTU48SknWShHzChw8eshD8JvubtQDxjraygaa9QHXa",
  "key38": "5RyHcHrjZ1H52ezvGmJNVbUYuKRfDxC1CJaEka6zCJxA119SaWaF9p3fCGtnqBMcsgeENYxFw2h8j9sGwcQReTGU",
  "key39": "5GT3k8MvzUMZMkib2NRBieJfaTzW2zHcPF13bKjAztJfjLKNPTEbYtEyAzufpEPuhQgZxWCogWYyDQxegz4zn19G",
  "key40": "3zqzRx1EfEJfNhytxTa3jPxN45RagLnj1KDHXgf66hkEpanLtdH4Aah2GNSXF1sNZxRNM2QkWfZyHFUiHCiVsGgy",
  "key41": "3KsuyLR2qXHMggKihWx59JX4rU6tAUZ5Dd6JN4euF1QBfanAsvEQ3UN7nt3RWZYU548zBabqamjn72E48ugyHMSp",
  "key42": "3WDpT6ZLnbP3p6cfNd1s7Wb99fVrsgoLnygx8GRDyLMD9LXpcuwMoaJTQxUKdMPuKSPywVXfJnuMva3fE6w85D1z",
  "key43": "4bpL7bsWr7EqmHTp6hddDkGPbDyJVuAQmgA48jyy2rMNBedwco69ax3BFXu1ZPXasvUBHkXofpajaLgPqpxtSXXe"
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
