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
    "5tWcRNYagkWzSu6mL29WjXvxnByYcDnkUUCpv1dTNhRU9vFP5hHcn5nwXHZgYxDnGpPqRTtVL8SMDNFpmv5EbteC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8atehjzXL6gsfTRmW65hdsxziEbvV8cjDBydaNNoJWKUwEn4vDcZHWv63T3rnbNUJun6XGQw4ESonFrV9oXy3k1",
  "key1": "2GXdoxXuAPV8aq9UKxss47TUvsxp9s8WAvFVnJv33v58s2SMT34SzHMmkcsEud223Rk8hDjNP6eX4L2eYmsb6Whk",
  "key2": "2MXuFpLB71EE8YymTaSgAanP875yBZjvym87NHtdxnT3yD4GtdgypSD2y9HCYd1XCPt4HXqqsfT6Sg8xwDTaYhZk",
  "key3": "C5X5zTfDyNVaqsiUSA6VwuMKstcq4u1MrbLmzhdNyzsFs4n86ZDnJ9QL994fv4fnEajif2SXfSBTAi9XqkBKptn",
  "key4": "3rv48XECBmUFCdrYrz7VfBVawYMEAytRTa3RraGgA7kWyss2CJUJWwPhFQRuGiA8MMHGbRb53TeNAM5UQQGx2bmK",
  "key5": "5t8qqd3wRVmfhG3BVjp4koFrNzG4BXkm6K8X7vRagCf2JktuzKLZaozDdVZeKSj4QQ2VxMhh6mauDHy3S4mh3k6k",
  "key6": "2XQ17fMvfR7N4GHn41PiiSfoAAyndVfS3EVTUcHk8935NRiRcSgi9gUB6p4amUh9WVzij1hQGdFFafsU9vAA9PZf",
  "key7": "2AheqBKD6cjbxTcSecK3XZPDaoRiA6hdrUAeJFKFXqVZV6Ss8r8zx22vbKbNzYFm57BfjrWpEbwMckH4fvwmNr4u",
  "key8": "5FxDmWNMBuhbistiYpNNy9QhEy9ysMVjbtMUfsrK7Rvt7VNpGue2upQX7NkTo9L6Jz7G6MyWpshR7emTarKcsbG8",
  "key9": "5buLJUywhqC5HUrKPF2JCbCjKJt38JcPjDXKuCZBQXNAwgS2NUQjtML35bcx5BGKgtUXyAQDb7ntY5RTt3zdNP1T",
  "key10": "4roYpT1xc9xBMynz8L9rGuJEfGyv6dkuwTABAsXqXQycMmabCSQZeVYVCwN2UeepVxJhjMRK4hbdN4juJrjSofLk",
  "key11": "G3pU7pmqwDH33MTYhwdLB3gHPZYixh3bCzZkHzp4mgZ1322pRYVkF78cGb8tkoHU6r6uKSXDfd5EvRiHsq1U4Le",
  "key12": "hBPcXqgFKbrawuHNqdWg5uZ1QsCuH8MyboikwrdMuqd3mN5siqUbUrWEUu3N6f9is19uLghLY2ZuuAcHGZwmBHz",
  "key13": "378RrP5QoMKQMFYTniVrhiuYKJx8za82CrjKbmvXrksYXZwY87Phh1r3TSV7QKVEMWBtwt4HKM9Nhu5V4KNwLBFw",
  "key14": "5r8drkE3wvtdym2NJXqb4q29M5UerxjWYpPz4kkBiTNJkP72Ls5rRLTHuiuxbJ2N4bDTiTg5Kr9YEfHbJ7hKmKvJ",
  "key15": "2h2Aw8hg6dgHvxvxvDRTqWL1GXsA5qFi86773CFu4pXUkqMFScDPNfBTKES33tiHnK8v33yWNPPPSSoPb1vqFNDB",
  "key16": "ByWahnaB3FW4LVo1GSS8ZE5gvx5AVFLUdpTmToDdaDNYAWtB9zuYc6AbU2UqchjsrtJizR21krQ7nBpZJBK3LkQ",
  "key17": "4xGRVBP9jieftxWMsQ1qEuTQcq9GEVmGEuHmQdkc4S7yKdV2pC9ufabBASVLktDCjheUHZ1eHwJbgu5TyViwsoWB",
  "key18": "yC3PKKJuJCnG2qJ5MPf243bWmtyGyJoT23fmyuQKqyHEg8kWPnB6px3BTUSLxJ8cyCpVEXUKmv2b5d9vpKN7sEQ",
  "key19": "2FvJZBgPqHoKDkwYijtmHBhvxeAyiEYugV91k19ZTQNdbuK7Uak99EcseWPadzHWXZxxD8FPyqdDt72YgXnzJXHF",
  "key20": "2A4eP2BnwjRkQRXSEDWdZvN3kjungm6SniwqYngpJitRabgFsz6AuCXF5qr9uSLd5iwECutS34nk4ysxuLpPTw6p",
  "key21": "6TwjrGDEB4Y26RCw4bdo5c7iUwrVJXdikVmgX9NTN7BZDhg6SdwH2FQNoRh8wmzqK2fMM4yXy5TnVZyXiH38YKH",
  "key22": "3ALFJQoAFCLfETQioPykGcDzShUfWsH1sKQwvAnfQkjdYiyoC1RDbuy2ixYCwzQKaveajFsZUbhmf3BJYTfoJHsk",
  "key23": "4BSs3tf7VJd1iC764e8L1hbw4Cv2hUZ3r1Locd1QFCsJhX8858K3dQav1P9WSE6qiYmvJWgqDoHYNMArSPAwrYKM",
  "key24": "4bu23nwpq8AfAUDXNixNXnWozXhJxyKeSLuVxdVF3MpcxWRTk9VNDev55YDMqg6XDzHqurP1PomW64QLm4VVufiy",
  "key25": "6Q2qFmT5HFiRsr394WzcYWPwTE7tvegqdVDjrvuCbe7tS4i57LgQ9QBfNXPBzvJP9FA4Z7Px4CEc3PJtact9v7C",
  "key26": "24iuoGqYDQSVCBYeD7a2qvZo8fhz65tq93EW9a6aEDehz37s7M6itnGjfWY1KBttZG7NEiN6YvSY6rvgiuY8QuSx",
  "key27": "5xscYxXyjXHkEEjTkwAq6Fus9fC4UiTJZYfiYyt63UNsuc97ebVbwuFZ5TLbNj6JZfKdGzNFW9v2px7dPkERCYip",
  "key28": "4FSkKZXpSBt1S6crfZdArBR4k7znMfHd9KqtQviuMBmhBicuNjFAQYJwfPsf8S7py9N4raNK4YB3VfyLp5kD4Fxs",
  "key29": "4GS9E4c4R1FfeJLTjAF5L1KwPqG9sWXa4fjXRomNFe97KkMJGDnCNGfNoDhzQij8fADqnrsVT8f9Q7YuCkHWAQWF",
  "key30": "5aVSRrDbs49BhTSu1pW8RVnw6FaNenEDKGyHVHESGmYyNMTmQBcFNvWEsX2wF4ECw413mDuVT1xKidWKQAy68QbE",
  "key31": "3Dt1JT4HhVPCzvFEpT25UxuPR8yNWHHSgN1Ao4vDaje3RtEbNDGizgeNaHeCxCUVy5AuP9B2BTD6vdZZaVGtF6Gc",
  "key32": "Ac43dwc55pKif4S7W2SZNQNsAdAGyPuBzn5493d8WaLaHvakMkuGQBsyMCamQ1WJSek6aGtxeCsCTxxqimKFdqD",
  "key33": "4hiVXPdCK2hbECCrdHRmivCmXUtSLBGLereZs44QMuPmAoxz8Zp5NjcwfLVikw33pcEZf2QwQKrCBpWFs1Z6hozb",
  "key34": "33PpDgigAXp2XJKiPtHFbSmZzDF2bgt1mdEzZcA3bKMBYFKZVXSZhmY8F1U9h8wbc2LjMoN9H9QM2Y7tyR5Ec87Y",
  "key35": "3J8pGmo8KCxLVpjcwUpJz2w4RkTSwpfqvZjEFu6wSjovgeCVMtcgQDWLw8zkz1VMNtDXLpZ21XkvDFUpUkZHntss",
  "key36": "5NQdbC37WnSMAFidQgYTWW6qiUvdAZskf5njwQNu95PLqLHj2amn2APWq8Btp5TH6qMJKTy1xBX1fHrysA2ioSSA",
  "key37": "4R4Cg38nB5PoAD9hW7xbXShPPDjsjQyq2iM49nsTy2oDET7axAvs2UqDhQPvP7KcrwoJToFMPxuSRJTiJ3NwULtn",
  "key38": "5siqR3LHSXpdDm2ShBZT6c8X8SBHcXMyUi8Es6BYmnqUqQBRPF2Gv584EUkKpBAb8E6nsXCLxyMV6CcLKapt4dV8",
  "key39": "RKEy7injXuP7r48eNAY67wLrMf6yLzEyhEcqFNhzyvxi48gpufoxy4PJ8tDGr2YXnjXoue56BXuiRPNSFQo7AHu",
  "key40": "3QJnpL4RrsHDESkKfvGM86zpmW7qPvXwpVHiMUbQH7GEZAnrkadcF19eowctPzq6fC1GwYwu1dbsGMfa6vCfXiN",
  "key41": "3TptiXVfytnXQA1BN3mZ8NYxPTZACpaVsJdM3e1ju3zX4RYG89o5758SWx3XrvXu7iUBvzFQavG52n9gxeC72vfp",
  "key42": "5F28d4UiTGhA2oRCA4tQCfAq34qNgXGRrGsocMGAxvWYYfvNyMhgeYLBNQSEFt2WN4fyCDmd7K2vw4TLRFrG2XMw",
  "key43": "LFGTMGvdzzbSKojRtdJ562SkmtyibhMxXWc9QEL1Y1ZG9oax2aCvFsgJcKuUECw5LLoTajaCwvyrd8WePiLV1wg",
  "key44": "3YQNTgVmsJYrPtsrAz5TbqNjmBTXARsEB2kGsBqKhn4kM7Ko3UPibaroeZjwyHue6c3PdkHUN3Bn2xgEioV6FzLF",
  "key45": "hwn8qwBy3STRVvM98Wo23CQG3kEpoXmkRnrLHCnbPB3KbJwgCoNgTNmge8vKDZEenBB8s5CuPnGVFM79rj9T1ve",
  "key46": "2DhA1uSHTLKuoqZwMp241No3xqUbvprRZg86Jkv9v8rcfAfhoLSpySr7Lkujzn38jCvpT6Mx4PqC4rVWVf4m37u7",
  "key47": "MusXHsuHct7WJdysQTp6TRwxAK3ydKhf2VUHsHJ53undeqxUjccXmn22uXsRQtQnhEvnNKLCXnx8FaupZWMioDt"
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
