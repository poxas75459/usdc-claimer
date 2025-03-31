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
    "5cHSKGq2CuQwG5t8p7tDqJG1zRSR2KJ7Pvwc4gBzMTmhiZKs3zRXd4ZCeXsUagGJqbjJqKcvYEkAhG741YTFeZZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29h2BUNuymS3n7pBRRksEmeC81doXBAFWAmqbyCaM2PYt4xpXRvgpFyzaVGmtR8w4MgiYhNJwU7vhEPnKjUL3K3E",
  "key1": "26W29x9rk5sWV2WcDY4gzvxXzxirfvx1JGnvi2LAFdETXGL9JXhSg2Pm2BfPFakRonppr7sbS9K6y7b3A5j26cc7",
  "key2": "213rNTF8NoD7cgmAieJQp3x7L19ceqYDrCDafK4Amwnu53CB6ZsesXYwJ5JGxCnXoqzjwoSojyLpCuf68dzNMhvJ",
  "key3": "4XSaBDajYEBJ3nA2rQW9xxCQo4DLCAp5TJhZ3yGtfGXVUhvYEZJvkr2T4v1apfJj6bFhCdGfkGMKzeQeoJ5jeFyr",
  "key4": "2n9XEMpScrM7FZtEDJpRJnTTt5X6QFUHa5PEzwoQ3u6VNo3pR5XTnfwDWUpFgMqkEKFebwuhPqxrpN7BxRiCKGrE",
  "key5": "4f9aG3jEhvDRDCzhxpC1JkmqdnBY5GpR2UBKjRo38cZAdEvoSvPrrLReCmv9BBGRAXX2fkXfZLhn1xAUKKnrC5X3",
  "key6": "5D1yZUEeEnti7v9GStU7gtnNiJteXprMsU164PUtmMyB7z2EPqSk9MDjuhmEuN2bb7LPP7dHcaU3XPUWZyiw7Dy3",
  "key7": "HGPUipFMJtjep8zsLDiQQg3zD7KrokMNcV4iVCgo5cdvv538aBmQi1hfK8UoqbAsdkczYZgzcgXGoCquQF2eanM",
  "key8": "2ALW79wyfEAUC8hfpDbHe9moMwkCSpK2qyPMjaw2L7nh1djV2e6A5tCnPPY1i8NKTztFUm9bTk31hMnDFE1NBiAZ",
  "key9": "3oRtEZzrGvKxqZVerGam9iye2TGQN2vS7Zw8NQkbR2kZkY485tVEDMjxJe4bsSN7zkSXvTgmaAhrxu95Y5UN2aW",
  "key10": "5W13yoGsqySEjYAyZfoWo4CvUszZpKPNbcxSwZ6EM6x8NDeXSmQmd21areFudKkiuuVbyDUKsv6jFQiuMhhYj2Ya",
  "key11": "kRkroSy7CZavdnD3s41oKBi41sj9DpJYiWY7ASfPxSVSSgrcuadz5pUr9oVbSSyHAhnGDE2nK3XmC6exeGYZgLF",
  "key12": "2rziNUbtSg32FNMrFKLXx41TNy2GfdqY8mpTLyTmJzi4rYQr8KQFuQ1mqytWxBNxPuTVVVfLz5AXbKpeiYNjBdF9",
  "key13": "Bf1yciUraDCqj8vcpAvobT6f541KRhYNCqKAPuaG6kkXyYELyZyCMsYKw4Y2ZCAWezWBmByQcgJvLdwwAujTfeC",
  "key14": "3Tv5aBgsBo45ay4rZfFgNAYCayd3vcb4ngFPQPjDrykJNFeTyP9CFUbckm3Fvm1j8kJX7qu5zNEFJa1zNjvwouTZ",
  "key15": "4hpynjwGgeodNj2J23JhZV6VJrXSbFcBeVL39T22gxN6qpqhd9johdu3YTSc4hDA5cZRX4Vc85irn97bdUK1Nvmw",
  "key16": "264MDCQY29ndaU7YcaHPHsM9vvVYELZqvspRYYAEvVNNoy92Py5udH7u6pkBbvSy89nrWAvEK7Ea5ouAescFioPD",
  "key17": "4DJxVsU4J9Xf78Vgz7qnErNwkUFDRVDmZbcqiRwxqDfM6yJNK7QXxAQE9voemarL8HRFwTQBQyUZERTkFP9yB9mw",
  "key18": "33jdfJKxpYBGHuroeNgoshEdh4DpzG3sUKH6QVqvJ1mZ4of8oHstFGm7eGiberiATP931rQtbZnXVHjwnbGTZSAy",
  "key19": "3MwzRsheGJ6AAdv1DDdaL8sAiKkfJsJBBtuH83iG89vfLz4WfKj76PFeGvGGrVt6jjrqhhfBgchiKGXSVY2PTbrz",
  "key20": "4cB4XVTcTFyD8j1noNrewVfg24vbu3JYwSVgDJ7gdJjrxFa8g6vANj9XB5tkjwNK9bTcfAiPqrG1EC176Nmc6s7c",
  "key21": "Mm5DSQ87mNBwFufxbnk1UFTxFzxfqMGokzuGTqbCBJVsVnc61d5Kaf6UiRLvBRvaMmNsptBMMQhZ6wjAQ3sDrZ3",
  "key22": "5eewLVZbLoPoiKFDUPn18UFVwgXWAF7XhahqZuP4zti6ysMbgS7QUWMd4XBbXvvntRhdEY8NpgHMrhVkF8jfoF1D",
  "key23": "4tvZwGdnrVERzmXgrYrJokvQXhT1JXEW4PxA92RZhJ5njkXPNJdwB89RNDB84Si8GWH8xUstjo9GzmK1xsCDPAcu",
  "key24": "tfdW7U5TcCNjbpH7xF4ecKXGvVy3bXehEfTdhwCmk41jMiWad9tdJL3m91cm4g4wvZwmPX7KnyGGwJ118EhM8tP",
  "key25": "3CsJktNepuLL7JvG8zHqT8uiAXXkE9g4pbd7emmJKaAxucJoHDKypDyCmYXaxtBUc8MMnjkvBQQ5Lodp4BD3mNfR",
  "key26": "2FtWR6CJgf5gGQjv6scKrSQ7Tiqhrh8EK2SNsMYSr7ymoBR42nT2VTmCWQdAax38MMqbXQgfxV74GufgyQxHwJb2",
  "key27": "5VRe6HLWahabbSGPyvgfhRTH2m3cnVxJjZ6mNeG58P2mxDrAHMi28zGBT3s9bMV7EKktFvhZRY8hPh7onjVNFZMv",
  "key28": "4NNdAJbcBkRxr778Xn4qFN3LJuBrcrFudsmuRhbeWsY1bndBHwc1JoDahvhwARptsScbYNGUad7R6dnoEakTWq6B",
  "key29": "5vXXv8WrvLPpNG4i8ghhCJARsPKqr2UCuoUNC1kemr3FrxjSrf37PFYhPLG7GKkuRv8suq5kgVjLgZMFUkWKGMjV",
  "key30": "DeUAdKnk1y2H9ew1SeCZZspCyLDuESH717FfT2Zjz8AaRMv9uCiaNv6ENRRY5SYWcdEWyBngRCszaiNC2ENmm81",
  "key31": "21F9bNpfsLoKTXCueSPFGrGfUnn9R5GtFeZdfevqSPwjCehRej1jw14zR2cgYvoQF3nroVzxzftFtrVuuY4R1dVB",
  "key32": "2pfk2V5Lfe5MWkhCJRpUU4RsUG28XRGbSJ49xixmMYF1o2s1nXrsKC4kN232dAjH3LPM4Why6tUzX9qLVn8P9F3K",
  "key33": "5mgEXJMEwRv8A3D6Uvwk4B6hxgvQPyXTVrU1aHCSnpuQN1VSCcsx67RZCU2fXQZ2ZDgBMhdjvHyW6RwCGJimH51q",
  "key34": "4brovpCKripp1QpMZqySsZpUobuJeUm6R576C1AGXrvGibXbmhRZJkd1ZMWTfigAJc4bxA7CX5UFypmxPvyU5A9j",
  "key35": "4D37Twoe147sVoPrdyep6vvnvZw2k8u2tjVcWpVdyr29ufTCE9TeUJWHsnQk4Tpe5Nato3FyaHyjZnSPF6KejeLR",
  "key36": "4XXMiDUUkvPtwqsMGxPUZWQ8WYZTPZe1WowZEQVChCZHhT3hd3tCf61VSqhsUt5d2XWfUXW79uFmDkwbunk41246",
  "key37": "p2KKNqaeRbSviHKGwyQm3VPKwSAphBXbpR7Srxy3GjWmbMAYjxNHLTdMF2cyDwtnZBukRKLxM5hVEdLiWpk4yqg",
  "key38": "2Nk8QW57MawxSrB5rNP9m2YdNuGxunZTAvDwB5JWAzRydZm3ALSPaWvk1xv8J1DYfxwQJdbKFaFk8qGLNqXzn4cJ",
  "key39": "kMkteynfXiA7gmgmY65RbVc9D1rNtW6HrxKapP25Jz1pjbqxyaxa42ENWxykaRPVdQZkWrwT6SxMKJziRYUmRjj",
  "key40": "3mi98MRYD5cQ1D4AoQ8PgYCMKMwgsfddpv58SHdfhTdJtLzXmjiXFTFPPek7uMwtB9fePscanhUojPiRD8FNSk1d",
  "key41": "3iGZXe8grer7nBF33gicCmvygsuAEi7kRuFMftmQcv8rfA22LL4aX7oLQrXDpMC5jjujcfumtnds8ncyNzJNwEFD",
  "key42": "2RVPNsgMJSZKXH6mA4Ze6mX3R1D6BKbf2HNTA52RwmRgCDLNSgTA7qwFn9324j2Q1E8kEJzmZYSWM6HCo8ot5N9L",
  "key43": "5fJyoTCQ4jgvGFid25urKvZSkJccJ1swKwFHz4nnHifjozFjhAEvh1KT2KyKbZkLsicSSFwx9Rk3QGBSLKupTBeF"
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
