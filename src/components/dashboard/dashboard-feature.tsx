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
    "2qwqZpfvzyxim6tkjKeoz3FX5o4ArEF4j6iJswpQLx5hDXtYSreE5E7Seg38MqYGo2X4Rv6wi2EffsRBGFiu47h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B9BmMVEW8nyHKAQHG6awmeuNKhZksfkQCD3YP2w6bwEx1WdhDd7kAuquseCAGqeuJgav7Q1KuC3CEmmFAcLW9vL",
  "key1": "2zoNa1PuDRFE7ZmMeoyQFkXeJtzoQbCVw1Hyhrgyc4ADdopbw11oFESLAvNaxL9Hc7yp4F2mQ663aUYKaJcUVCy3",
  "key2": "5xZoY4WVQoAnp4P6CUvjhuDQLa7xhN7pamp9MP6jJ7HtPogLXARsduDsqBSSE5sqTjCbasTe7aAbarmjD2EUiHm2",
  "key3": "2aP9fvBkM5MxQNvHpExYD75DVRkUak7voqiPsGZKNXFFYACj57Lp8gDwb7KpbY1biagNcwDEX5GHkiGLUqM6MRon",
  "key4": "2aGNcpv1AhP2RBykKNdGtXGuxni4YdW9pDG9htAL1Ammt1yAKaZKHVd3eB9H2yWwSZi4yw24r48xMhL9Mvb4ZWVa",
  "key5": "3QagD2CWkhnpBD4JKcLqqxHxjLJbaJAxCS3ct1pmVhD83tsvgi996GRWyVQQuTWbpo65yHMvZtSiLY8oBJarAPUL",
  "key6": "5eAjFL1rANfCys9kx1id22rNmizSTffiTHrpHYwfwREQiaZLj2RQde6ZrMqnKNLXck2Q6eqfbzaDsq6KanZNiuK",
  "key7": "5KWKnr4fmFLhsSckEePimqXfSkYH9RU7997nWc5aEwRKfVkNhWeHnEL9tGhCZzhvyzpWDBgw1ALo7LihouMHAEk3",
  "key8": "Fyuo9cqyq1297qSjTMRGPr1wqBrhHZ5eG9DxMB5DnFgiNYkvS4oYwi6VyKoJ3n5B296CAMof7JuJcVqzH8iChXt",
  "key9": "4pJ49okTf5fXnbrDS7coHa43ccwJ1k2wSBwJmZQVyEUmnaa9HHXFq7sVFgxAudq51RU8rq7TRzZzHA2oEKbptqM3",
  "key10": "MFFQv2WTVFeLpAEoDcuoNi5HbWatf1dL78P5Z1woHQ3kvwk67NWv6KcJbJgCpXJZbW3W2vbqQ5AoXe1WurV3VaV",
  "key11": "4CvTVmhVLzmcgQfdWb5WjXfJXAuDx1gYQhhQ1d9WFBjBFxQTTCVEa28DvSbfDdWaf4DBCKrRRvQ3riURjN2ky3Pr",
  "key12": "3ZQBfreiLSK2X8ACmbPk5FCme4fbzNG7T8LXqnwE2495f7WX1xCzTcw6JxLUg1YxvwjrQb8As9czRKM4X6LNhivm",
  "key13": "2dVZn83YQ2iEFaAhokjtoiidGLaeZTJgSyaMySJsu2QUvcAdS8fXQ8bPDwjCqHSS2DPweMPjPin5cTmkHNWWpGW9",
  "key14": "5MF5z3TWbWYdGApDetdbh4f36ijj9HL6L3fhKppKpxwdCcELikB18pVGbPoZohLZTTnsAVb4QsxcRWfnNP1MFy3d",
  "key15": "R1cwi4JMV2Hpc4kZMAYFBF6PFNXJ5smZmMEDQe3ZAmrLNgQs7KJWoEfnDWr5YnaU2CQkmJoMB9vgQLo2mpHfVoV",
  "key16": "44U2s8BQjv5H3TZKARQzF7MFpL9ndjiYY1Jej6Jayto8vdakAd7rLEJ83AfkqEM8tvsB3QFoczMc21cv2yKm2m9D",
  "key17": "5uVqscEs4U2oTCZcVsXystJtn7V2cq8NuU1SLtRBtgw6mFGBPvtmMnd31iATiA4BuStm8vkWTFX1JGMJ7m1yUejT",
  "key18": "3EM2junAjjC6P45qdEULJz38GeHkG3fqzQM5gUntEHvVUU6q9NiFWSLMk1Z1PUsAEtBxaF933EvrnmNG7FybprAx",
  "key19": "pBavb3pmBg1iTYgsfMNezRZydXFxsHcHE6R5KnjxRuQUSdx8Mpk5jL5DVHpiomhHj1dmnwBjdS8aHieYDv5Ebe8",
  "key20": "2Vv7ih7KLixXdvERtAZZzvBkPu3G7jG8E1hHeirFQDpX3P2EsMAKLrssxS2TjyyYsyYMqNcaKu5oPrGTPDXbJSjD",
  "key21": "4dgedY7GiJyK73MUzVMN4hA4YUd1CC6i6hdKooR9U2MHfx3TcpwFoiFruyE42AWjJsSwWcyDzEU4fZyMGejc6mzr",
  "key22": "URzoVbUCXXPCvh4wjob8LvpE4JVBfYprbbpKdbjbcqSLocoLkZUBEXQbFc9g8Z9HeHVXJUvwW485UVsG7FiL9gN",
  "key23": "doJU5cnuDANXfBJremxxHA8kYZFvCpAUiUPLTd8xrg3Kxa7DDN5RBucgVJL2hCH5R7PT6fkBBQ9r1YY7bjy3Vm1",
  "key24": "3Q5p8FPYgQYyU6xmiPsTXQjGCdok7eobrtYFXkwV8nDAcbeoVLfNKhvgNtgQZ4LuefyamvcnPzTVubt9Erx9vsYU",
  "key25": "3wirCD1KS8zz4c5bZEHoKQug8hGPKv5GeJ6MsSHhhs9BVhyRPtHbLwa6uJzn7rrqNT7mSYa4zpujceSxPw5xpak6",
  "key26": "2FywVi15yXP8r1gJF3yfC6d4Mzirh7bm6PRsYkz19FKHhPcyaH6K3LCDbAFLQ25Ep5tnveGXrQ7BMKNToqHaKaQt",
  "key27": "4V3GU5M5tfpjoj8GEFGz1gtP78Wg72Y3Wa1BF8HxP248tVmEE56AfTputjCYEnMtiT6cmWCquWC4oc12sAXGDpyE",
  "key28": "5ACdHy91DE4eaSHaQ3j4XhiCuuxLH9jrSFNvEiir3nWpVnxwwGyBfyUrzcex7KxwJL5iTuFwRFPBexZ82wGmtBJK",
  "key29": "4bYjYU3cVTrSovQAf4eWedy55GXToWWZ6BXFQC55pnjuCi2sKLdiKYQPvcmaErY9RZwj5J67DKKJXGNXzHdLrx8j",
  "key30": "3cAYRsL7GyVSe31crMMPxDMAZm1ypXJFxgJjsxdGe2tcoBvVbHfnY9F2jnzfmMd9m13yFUesUtoHHRCCcAzYF4Zw",
  "key31": "25NkHLwgQxL6EH7pbySiMEbtNX8omv9XHdub8rEynjz8SzwTRXmxiLWW1NwVRNA4RQmdPAi2vkEExMtx4XY38gx4"
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
