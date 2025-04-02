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
    "64b6FFzzuLAFjZbitBGimmWfzfDKperKsHHPZxy8yGwwELuneHQWgQ4NvL8DmtkJGVXmbZbJawnq8oL2wubSmKjr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zD9QzgvXxB9r1cqGSba24DNEt1h521MV8LmNxRM3XVWUGA8RthK5ankwyLhJz7NudL3AAP4XJAFbAYNiAkfq93f",
  "key1": "3GSNPtP2ZE7tM3BPxibRPdfHydKj1jdZCRY1s8LqZDtELZ47firpi4zGRBwUmjxemHv1cFy9PFTV2d9BJP9DjDhf",
  "key2": "21C1imRZ4RyAXZbAKsCLzWU5HdFzurY9yh76cSMagYaYrCsHUr5vggdZdGX3W4RtJUFKiAiARYQC1d5vXr7t3Dn2",
  "key3": "277Q21AaMgYmZm2kzb3498Fi26QZx2DxuuSMKqLn6Ae4KyefkXQ7CBoyqum8pZeaFF7cjsdcT8A6HwveYWPeUPvh",
  "key4": "c82Hkz6Za9CqVApSymboKi8puzvZ8NWNbKRtazqWrCvfvyw6T67QjTToVAys5CH91mf29XJ5JsR1sLbMT3ktWp2",
  "key5": "5e3dg4RDec7WquxDCkTCQ9dS41JGsfVvXqK5SnrcTTFMQHrihqS4XYGfQCxQudCgJExQsGJgkgcHyr7ardouM62X",
  "key6": "4VWFTN5uoLwPLgbwiRDW3rHwwt57Lqbnuz7KcrC6dzEbGWWNELR4fGqniCGraYMwMVf5iyVhJXWyB91sn2t1zj2B",
  "key7": "2J5y5Y3jNU9yDuYENm5bHaaqRFNop3ydft9zksgco8XXQm9A4wBJTUtptEe6CiUB7xjguwM4DFicVFHJsD38zmBc",
  "key8": "2DsjCvcTbr9kQBRbyAUyZsChcqFHeBk1PbmKMoownNqSWy9DYQGEyWJMTLbrHNkyAMTzdxeXUBJdXFLxP2qh7s1d",
  "key9": "5JaHsPuf3JbXYqESrKZmyHyhjAPd3EN1RACy8YhGYgJvQ73aBidmgaR1Hc8HWHMC3HoP7ovsnEBVXCbeXhuxbwdD",
  "key10": "4Xv8vZeVGVketbXtTTRiRHchkc8JviWcvUfE7SFqJ6rnGYvBGNuMJVixwqeS5LdV3JBB5GW6VAhavA652r9goWX7",
  "key11": "3m8fAC6k8FRS9yDaAf4D4EsmxfrbGH6ocZ5xEQ7HxVLze3FxX4injJzdSKmCZHGyCSGGiBAadoG69PgAgacFnHSX",
  "key12": "4dyhBZdcH7z34vUkwtb4wpNkadGtAS657TCu3K5VQpCx1THAfTuLVrh5knnnNik3Yotkn553UxKgMBoCHvrWqeM1",
  "key13": "2TptgCaq8TT2R8BZZCFQGJnm6gukxpDskecszMTeKeXdozv2Zhc3xRMDpzvvACEY9tiMpVW17P2zvtZka4KkVKLH",
  "key14": "5cAWh2syHop7m6BC2JAjBiqU4yDSGeJhUhDpyUnA3bRUpQBSs3LX8fFh7Pka4EGMEB6PX68RTecvhmHbtns1coUS",
  "key15": "39sg8zWXzRPnuWTAFUN2k6zbVnnPM9Vq74VQdLcRCJHvd9qqHxeAKKT9ZyDbcEAgRvv6bT59gEB9i9iyiwx5TpPW",
  "key16": "5NZcFUYSSR2hDwbhrDrmUbEGZC4zGCWCJp62QDqKcPuL7D7j5tmxm83CDTMMxM36fFTUuAxMgFAFaHFXc1xAMih",
  "key17": "iTnMbbTaDFixE8o9xf2kVH6Gefb9zdxUWpKA7yFhCzdhAQj2L5pJxyAXEmKg4f1xEHEabEnzT3xfAnTJparUXfv",
  "key18": "3FfHEqrxMqzmEqHjxDfUbbApN7DydQiRNF1bTEXudXVeT3E8zFbQKR4Zi7sV5bieJ9QunS4DChy2SfMqvPgpPoL6",
  "key19": "35CH7RjDYKQh1RPtyZCgqhGaVisoxyXtPpaxgHf1WVg5HMEKo73peXUDX3rPJzBLTrD4nAi5gxKVd3QavSgrWy8z",
  "key20": "r4sidcCUjUpThLb2fyiSYr1cLHgA3e3wVe2Htvug9JLYY1jvnaeEhbnEmQwvGULRti28XuDVEX5ADHyuiFA13mn",
  "key21": "5jXGfeociQjwfKCHFinJi8te417Re5FpiMC7mATneG3PBP37euzVzwt89V4fL8mgnjk6pZCjjxpZk3h4sm51dgax",
  "key22": "2GTTD45PthxPVA49MvMZTWmZU2TzZZTLordfL4Z7HVWUAKH3aCQa52z44L5mMDsfMFxCfthDcoGPBEbuHm1WP9kb",
  "key23": "s1PWS3qFXDQk76xSLncLbQD3SA1Dzqhph6YPCuXctvJpPEmxaLAP9Mty2DpzSUWY1pHUvt5Z6dj3WSYjZgK4aPp",
  "key24": "txz9Boe7nxNEZMcEnCfXsbv9iXWe6vTN5myDsVLWUXV5mebrXyQawZjMRHBCCeZAEDmMDTvKEJ9tdmLjvBqLbeV",
  "key25": "2yd2RJd5f1srHAoQjiphi2mi4UzyZAsHtgEnmZ2B4Rb7gcbFZQH3w5JN5D8dJEJzQWNKth7DUewY6P39nAwLkegW",
  "key26": "3onkNNawaccW3zyJEjGp1SYptu8LoW14G9QuUkkC2gNxUZR6ykzZ1JL1Rn7odU88X34tkgVhMCYyp7AHNH1ewqLw",
  "key27": "yJwzHNyaf8nvDfjyo7oMrmQWMuDYoQ9MQuQJQKSpnUekf4d1J6dm6xNQrCeB36twyim2ShJ78rLiQTuQyKC3E8y",
  "key28": "Jptdiw3ogDt11kSoCNr29JceSYRNiQLvaE8YWJWNgH5zmDh5CNFzyw3A1EQb7C8VSYmuyMyB7FSNAZQxjapUoXh",
  "key29": "45ZAbELDkoBfMMKqo8XxrHQq22A6bj4A41ZSYJeWzxQm2QMuSf1nrx5YZZRo9ZC4yzhCbDAffotceJN9u7njn4vG",
  "key30": "4w2JvTg2GDPaJEwhuvFfD1PKf3k3XecBfkPq8bc474dPZxbXYc7q3yUAFcm5zvRjM1Hp9ineDX1d8tWRVK6GEfF8",
  "key31": "nvXipaN2eFJ6f6qYnAi2KgBwmGuohdbv6FVtGUV9xM6xCYyhs5Z51fRk1JypcujXSxXZH4fgxDPukYYfJRTRRN9",
  "key32": "3gjCgB9H26V1n6mTWc1HXYVBhWQShbvfJw5tKGfKMdo7fvDT4XwbbUqz2btk1bhE1e3TAJcD2P2ymsykYCWSr6q",
  "key33": "2CmBYstqR7E4kJbasmRPt3bESjNL3eekBy4nFQWUov6JBcfigRDaXFddUpZiJgZg7PUH2c1kJuzcakRkULFTA2sw",
  "key34": "5yteHVyV4jXcxsQC6Lofd2Lda32DhWmNgJ986GKr6P9HvD8CMz9K1arR58TCnoNfprMks13TKmRYmt2B341DvFmC",
  "key35": "2vMf2DEs8Hd2kBVJ5tKJcUEVb7Bi4pKo9zKC6iRgvDRaBq7VF4h5HZf6j1Ry5cuJQPbX6bc1WMhsBV6L9eCyDdyL",
  "key36": "4YnpHkADJfbgMUWtvYn4rS3DvPqiULNvHmwenwA4ainXKRx9xqhiLuEZn8yxHN8Vrw2HVzwhc7mGbGQWBwsfGujZ",
  "key37": "2JXnHbtUfpXBqWQHhC2ZWynhyMUDPupyCa7FynMZ44kNwKoQdLV8gypBfxRUHCTnTgbPXFp5ZupTKSrayw2G5rgS"
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
