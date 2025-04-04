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
    "4Qh6i2Q3gzC8F4R86uCopWvsqordnLbK44UabpoKDjzTE9uAZoKmbZvMf2vQ4mvcBF3HsWbGohQNkyUY1yJ1RsLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XFuSBWq5TirwrSXAso7gctnG5LsoriKsnFzowa96ocjcBdM9u7DFDMEMnMGKoxdB1ymASnAY9yr9jkfEyb8f1ZK",
  "key1": "4B5DtaVBZ7saoJwJ8UQoSbGW9ifoEjMcPjjN91cxhu4mcJmH8jkvTcL2BkQkULcHhu3Avf2vR1yJpgvjBDoUwERq",
  "key2": "3ZTJedRJvGqzQnxTpDaQ3fdHdqzwWQWtoy7fy6j1sQSGn8WKe6kdU4y9dZtDhxWBGkPLNnEvdqisfedcveEz4n4P",
  "key3": "5vaXfazWrTB5mMLn3qdNywKJAYN4bjfLL3Dc4scjdrChtuaTAjSEzjvKf6HTXMdNk35r5MfubW1b9QZ9n1pUjYWz",
  "key4": "5DQBdgPYgztHrgLxkTAedbiRTDQSGdxRyhY22AedCZMcUXefkw2A9enzUaZrkeigbmEAhNTFBgQH6zRjKkqAVqbw",
  "key5": "64sWDSR2SMs8Ff4ir4SXoqLUAzDUr79jUpRkdnJm2x3TYHrN21gGponZuafv9zVvyo2R8jY4TNve5iQMS6nWXanm",
  "key6": "5QLkF1ptjbtjeZy4vEfVzhgpwvXJZb2dkPWGN1g8QoVcG3wqwKbsSPje5rbhMCMW4h4TG1EsHvNtNoexeAFTHeag",
  "key7": "45jdVCiZRG7bbgjBuC2sVWPZDfvtx67T4Xbv6AEBSnv52FCwJyxVW6x28REVdst6H7EYdz1f5yVHikZGy6Uy2i1X",
  "key8": "57vHVMuvZ97zEpXY7k7MCrEvaQAfi4FvDVZ3XHUPnLCqZQeZevscdBr9waEyNev1CpbAbmVtQj1nir1Vk9JgvV2f",
  "key9": "4boEtxwEw5FU7MS87XRpiKZidmhyEHTdbBzSK94LZPTHn21z7k1bsKhniGHYgMbSH6JMwDkkB14AhdUexRQaQpKd",
  "key10": "3rmmrNArMxwykUQf22vbzPjQTVr5MnQ3moMtQ8tkKqKnR7hgqM8r3UVvDUNudzrvzFAJ2WeZHSbrsC1puGesBWwb",
  "key11": "3znNyADFzMP9TQjsAbHittB8i4n4acFgADRGa9NQbuSwGFurBwXSnpqcSqDkUNRPqxrbLKExptps4MHp4ytmK3UY",
  "key12": "2wyMnhL8Gq5UWQ9mmX1NqTNG33WTryfixB6KU5f65pGgpgPBF2fypEmNm681mX13H4muy2W57EYNkKUNTjbpu1NV",
  "key13": "2AQtdoVrDEGdWoqN4VLSErDp9ts28zL41qFmoL79Qu7cenUgR9icEBqPLitdbtHi4bovnrHXjNXb3y9dzEaEUTdX",
  "key14": "PvmytdtVRCJs2L4Z5g7BATARzc86D7Ao6E4m6SooHBJ963mtzfEyLguPm1GfHGr5AtuFAWwwksiNZR838ViN4Wn",
  "key15": "4rZhvXNVL6e27hMw68eLnMucDQMqQjYbRKkuByDTXfRfTn6JY1Qs5yPuLGA2yqZCRCRz3eRfR8dKJryZFgb8uRy8",
  "key16": "4PPcwTy8PhJhd2EpnsGb8k6KeLqmcDWoE3zYjTd8SffoZP4ZMUvEjtWyGwZoUgNBdkymdnxkxnzqocCKYS8ZUfuh",
  "key17": "3K8z5vYvbCXULqmZH2VRmgjA7i9APf1D8gz4erfnApF8biSafoDcDu5iGYVdouMHB545E754AUPWhYanjRvA61zQ",
  "key18": "5kXKhycRTw7LWMD76C91Por5njL9Bxqr6hdNvdVJmMtBX9sxo8AQQUntda5LRKbQdx5nmTa17SELLsWMGouFtD3U",
  "key19": "3cmEsnvVAYkgMDffUQtEvKGEkzWwehB43cb1ATgZ31Qpj5yv48M3sp3ua8AEc7aPEsGtew9hHzreF1bbKMjuNvNo",
  "key20": "Ap9xyonyPtTZYDLFoYD4CeG1V6a7Shr9WuASa1Tjt8fFQ1AaheLwq4yvnbLutRH4EeYSDstQwK5JhUKPxy8h8cd",
  "key21": "3nfAhbaJxytMb2PjRAkEMdoFaXyXB3whnCvMCibHXpeCxDHvd9DBbeVEfPcw4QH4g6KnymdY2y8cJj1afvxVVbkp",
  "key22": "4jV2ET4tpS8ohBVSegsSd5JCsu1oTrrPWYMaCTdMXQb88Gmq9PE93X962x3T616ndprT4W5jP4dMBZ6tdHSyj14k",
  "key23": "3f4QjihZF6Tqz1HYL3LR46QzxdR4noyqfbGhh8r1DS5jwR8TWWymm1oJ3zwH4mnv6kdBuD1NtP7jSwNGwqMMnmj6",
  "key24": "2SrX9nas8dygWgH8x9zNv3SbfperUiFf1eyeZWFGw3A4zj7WZe3WK9mSDYDrPDrvN7RHsAtVgyxn2BFN2e4kZDPN",
  "key25": "HvfpSxFDsfrvxHGMdMfNAcX4giQmQM9FC6j5rkJNVPsCKbgWxWYmW4bVWgMAoXuBLL3UY5z6EJM5GgYe42w9orh",
  "key26": "7nrdzsFf43EM4dDwcerpmmLJ8XsHvN4gY7GSh7xHs4oJFKZyPueAFX3boyczvg638PsRMYtZ19yE9YcxzCGCnm9",
  "key27": "66Kv2xCUFaA4nBnWUiF2YpisJHWLAivvJM3p5qWEsMX6VL7rNSUYTJh5aWaWrkWidtRrhAk1exjCZuESSDz2LLHt",
  "key28": "5qKfMw6Dz5kaduj1PhopYMZYM9SbHdKxLtVhNC7izMU757MfAvNaVDFeoMNcwYLZBzsHoDjUHhnxSHNWo4jSGM2B",
  "key29": "2nymfnUVpykouUwugZiKAkXVmYnyXouT8MLfHPcsXTC5WT21zmv7z5duoKz3CFoNowCg1joMd9wBM9bLenq78BFp",
  "key30": "5JM3X4y3egT2tSDbpUCpynoDTL952Nzqe9S5EjoS4ekQwpfeJ42AD1C3A1BTUtar3UyXUMNJ9c2xjt9x2od5iZAF",
  "key31": "5GPe7TP3M8RdWk8NV2BsEQJxUPLaahq3mXbg3trgt3LTqpeZ1DWTcQeDuJtKRoicNVqzrZk1p8tyxuyGPTUzj1vv",
  "key32": "2D8gvNhMXcDZ6cYKNTwo68ac5HY4mZkXzWtkaGStUrzgbcY71tNb4okicgcaJwvVBz5ab496StVPVXvCKbbemwvw",
  "key33": "554CrASekevrmQjTqHqg5taikcnR95tyoHJyrAZc8NgsiKj6VSqCdVKyfKLWf8G4z2B6m2gdxxL6tKCzFwZbPAji",
  "key34": "4uRNDhLmrBDneysA8zKLdRPw2GNGujmD44PyCfnGdmA7ktg9zLa5SYPnqBNXw6mfZEmibWgKwj3f6ev2VbtfE7v4",
  "key35": "4mnVzcVQFvUcxNTXQQsLBBoy27v3pUL9HWttqwWPwKmVvS2EWT2cS2gBYVEdMxWA8Zs8c3V4ijDJrKPDW2ksRxf8",
  "key36": "36dBuWpQK27FRioVUamLgnAkWYqvyq41HNqrrfhhn5Ksqe6F6wbKgFMGN4hg3QXCgQDsoFHmyMToCeXDBYWTodnt",
  "key37": "48uzJuPJrP1RjGyawBkNKPqybXNMpHBz7QmGizdyAxiJwvYe4AdkkzjintiYYniLinc7rbZTeFZz4eKX4sG1yznE",
  "key38": "8WgDuckh1AnUdan11dMZqJcDKkeZcj3fJjdg99H4cZKacHEBAt5osKiTg5bdzyq9WsxWYXDgNU14L654DTFriw4",
  "key39": "4ZDLoLk1LoWCgd88XXd8AV7VgHYD7FRTXi4g5RaLsr9HyLwonLCyVT8WXmXgXETz9hQy46BSDLSAxWMdC2cgCpPB",
  "key40": "35pnPw6P6JNCbSETqBVjJHRejpvLx41RkhQqpkgkqE5JbZp8P6k5mCo242XH3VVfYrxHhAsXrHWsY7pmgKSxL1JN",
  "key41": "5qMNq75ktJTsN5HPXN85BgefDJoWF4L6F9RW7BSGrCL5BM4MR3F95ycQ39QQqKNCQYxVs5xc5vwTaF523GgoFGsa",
  "key42": "4zAPf1b3HdHhhtst1e3NX1BXAVXg1tujn1ZJhusA7RQYaCGwwQJpmFvAPeZzLeEHTxnirng15pRLWX5DLiRv2HTE"
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
