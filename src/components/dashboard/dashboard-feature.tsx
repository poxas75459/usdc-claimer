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
    "5WYdzdwbRG7gusJFpf8stFtrnhYztdiXcRA1YLUTTPD9cHHDAnNpYUuquMtEixEmL8SpWkbRC96tNcfNaivBVMaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mEebUvZ8s8Ab5KKiPX7D21vdidsbySWGTDgEgkAxcEhXSFwn3H4ZFvW4A2PCF3JjxW7zejHsR9K4KoFw4EbhKhj",
  "key1": "616fXUop8C3VrabHz3sn24zGBdNk8R2HvTbVQcc6qyKqXqWFYkdr9Yazxra2VnF2sQQYCYzbY5L4CUf393gbg3hG",
  "key2": "2ZXdVMFx9Z25FXLJ5br5VKD3YEjqxugjoewzUJPJtwsRACc1F7js1uuDcHpc5A9nwfiHtV8oGznqC7VScmLuRHqw",
  "key3": "24kYh4hFHfBvzgHDCXF7SrcRM4PyrCNk28tbcCm3GLbMfxkFXTfRGoWzYp7fdNBjSfxpsLQXkLM2xZgNTaff3dvR",
  "key4": "6maCVpS8GeHRoZxPmjdUfJt39rH5FSQgCgho1Jjnnjd8Xwk1Ya7XUB5zZHVmHEuJQGywYGCWzPbLng1rm8ibjQU",
  "key5": "2CKoS5WLS53g4NAhWxHkyufVwuqA8V65kJH92JU16VTrm1r3jYzKxzRpjjY8dL26JSkudZ98tYsiK1uR5Zi8MLjJ",
  "key6": "2e58EXobZBJKnZHMdesyVo7ELN8HaepSQB6BbuBsyc25anCNGFha5EsgnNpeHVAbUUBMiHUn9cUjaJqRjHVc4xiQ",
  "key7": "5FTi41Vfr6K1Anaiqdx3zRKSokThyjH7Pucb3sfvt5ezNirXSoyJh5orAEBpri9Bb9bgzz6GzjPkza4Q11SSw4jU",
  "key8": "5pMt5BymqiAsRUSHSxxeUuwDdHFCoacvKGjyFWvsbW5v3uXcmSV8jJcXm3hBp5EPqVobA715XUGoqDZVdGHBeEyn",
  "key9": "5TehLoEaoKzLQkYq7MyFDHTAtgNs9eU3DUf7ejUTD84gk21yoDnsZwaHa1JcCmsvwmysR4JkdWfCo8dvWsBFBX6f",
  "key10": "3jVymCnYeZyrdj8APEDyM4FS1DDrc5J1jGQvkMdAMeuai9f3LsYTBWPzsn5TpCjmgUKRYEbtxp5xi9MrKCziReM7",
  "key11": "2pnuM1oPpeg2zqp9n4sJBNfdmQtza5wygkib8cBwfcUJJ9HjjDGbEFUMcvbsA74X9CSJWcDCrgWRfFmkjmvaHL2v",
  "key12": "5wShyum4BjnFKYdNb2cmXzX9p2iFBksubiLanwEyAkPBxHbz5DPXPBt3AaTroGAtU2gfu7bPX3oNTHYUTaBSQ5LL",
  "key13": "2YfwjCtBXPxT1tiKjh3Nkn1R1RCDcE69btVEwCi6hHyAmFsHS7BPpaStsKpBGudQmr42fPTjMWfuzUnhpsPkCcra",
  "key14": "5eKhqvnGKpe8R81gPjCwbEoV9PTkC6eaBkPHvnHyHuDeompoGZoV42TGnh4CX7MjQM7ZddhYxBoWQqJqM4zCtx89",
  "key15": "2gLBcxYAasmuUsmpoo1uhRHkcDJQsvMB6bWCDfhVL5S46SYSdrNx31XpYJ7KiLwDiEwHj34XqkrNgpQ9rDBNBzQc",
  "key16": "2oiJHNeXckLiGhR9mMBwe9iDVpfhzAufJV5zfTPM3D8D5Phpqw2FSbyTvpy6Di6cgWw3k9tNrsBtoGFAA4QcJJeB",
  "key17": "4HUEDChwKrnMPcsnWAaVHeYnwMEAP3xe2XhD86hez1thWTLUbtoFgWhhADmGrTJpxFES1eNVnYvJTvvbcKDfeJJ7",
  "key18": "2yjzsXD49GNckMcPqH3LjygTrhS1mmPescbcJ8HACa2aPpjgafpDykqt5Wc6ThwpPGohjqUYwW16zXZZwuj55kE",
  "key19": "4ffsi236pib9AhKJEFDgctmQmbdG4EvFcvNqa4vmAF9CjhyRMhrTyLNf1KuTf5WgVthzowSvtiNDNgQ7ycxT1KGS",
  "key20": "5q8sZ4LLpVjo9TbGhuKEfKddZ6hzHKMnUiwcDCB435CRLAi4eUpKwYAxFAVgPnBiabcagt33yWkt1p3zMXKZXGh2",
  "key21": "B1BawuA8ia8VfzJ3zA3VSRMGxip2YgbbQ11cFUnyQvcpQdECnAU4x4LsLrxmZhYSmjUUsRfKmt4WDT7c5SRDwfh",
  "key22": "fTCje1SdjEtHPi6JtRp3rTcRYa6Czp2zSj13vbTAyk7nGGuBHDqfaCR1YDDipkJLWNDXvqvA1t3opwWGWbyf7hG",
  "key23": "3eV3VomPmvEFVT5XC3bJyXid8FeDi1mzT6pKEH8ccQBesH5YVicrc6Ps914s3MHCMhv36aJ5Ak9W31dr6rqN6XVw",
  "key24": "63rVNMd1iHZziRnkQtKYJNtZs247jfcG3rgGLwtmwTPZ367SipceTKf8MCfkPQGYPmJLzB4GA9EnnY3zPUjehE44",
  "key25": "2c59YKjYDJq2HNiuQXNQ3sTvr3FbrQfpYXi84mEeP7cWAP66RqCxyRbw4NAgueew3XMM1Ft9zW98vrAzL7s48XLg",
  "key26": "2qUAAjPds2U8aD3zavwz38wXuaKu848WjxK3jJWNcSxi1VdZTkiT6v5dUyTAp9b2RUUtRoZQv3RMwKANfBKXUNJG",
  "key27": "3nYL5kbKEUBEw9gqJNLu5A46xFisS7X8W3d52Ef5ESpHb9bxU7JGS5miaoWAGmqQfhCqts9wuv4EbJ6sarMhkzAi",
  "key28": "44xtoU8i3Cg9vhRDy6561JoVm1CQ227FfbuQgZFvPm55p7zjzwM53ArSpx72xtCkssv48jRCQ2KShWxxDasGtURD",
  "key29": "5RAz2q8BbSSFkJNSy8HX52VSmpxMmU5kEsp4Vxt9RGKseRZ7LhkqNUKLXqPomMqmxNgC6fbn5qjdoqKSYXgWPea6",
  "key30": "3GVmQjMbTHpmRwY78Ym7N3KuUZSGU3f8C6Z2YjTgMYQc2fj7iq6EgH6vAKdpMhQEiXQ5666tNpQFJWQS9kaqd4sQ",
  "key31": "4fCXXg5P5nukMi1eDUk1ReHn65u7U9o3JPdaAZz6R7zQopNVeQEi1gfD8EZW2qJvS6XrxtdJsoktnTRnHLUWAuxp",
  "key32": "2jPXeHJvWmjhMDx3syGWBVenp62xJKh5Ekhf58i4CYDUpSEQuFF6FNc4jR277c7d3qRygzpAeEQfHUmGVE4KoqUA",
  "key33": "2WQ3jxwomyHCErqYXajtKWqFfgrDbLMLL8o8wBvct9WDazMnSV4J4L46vGVVxHMiqEsDzfb8A2RobHHac41ne83E",
  "key34": "2qxNQWvXCXuG8pCUsCRwR9VuwBpFQyWcdwnXeH1zvWRnNgtx42SidpVqvj9igmCLhPBiq6GfyKtMznqSEHsWkchm",
  "key35": "2NbnGirZi1tdAQsR3mqogVxfB8mSrczeth9rUNZdPhyb7pyUoe89V2xcwPxjKWka9usfV8Xpbpioa4oDy7SpHNgw",
  "key36": "5pkfa7ze3tMx8YJQ2MYKEgQ6r6dxyox41a8iPkW8NDMtEkQKFetc5zn6ttop4fVHs7YueV8wVcogA4DtMAxobP1N",
  "key37": "2L8CsMQMrmhMeUH1kJ8vVJtF8qfRqPFqio876Cd8WQd69mu283LNeH3kKbgqp44Q4ybE6eJBuugjGteJEsK47wQA",
  "key38": "5WMKSzeQK7zZnT46K6ZuMViWh6Rm1qoQHCBRyUWMQAKb8H48vSep9m4FUsXabgurqQDD8NFtkLmoWEtfGfEk6TdV"
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
