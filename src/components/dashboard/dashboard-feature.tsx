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
    "3Ug4oBEp9uUP4JjrwMqSDfaeskqYotieCeTKFe58awFcGaTVzx8D8aRxNmNGYYQP7drJvaGf4pWsVRYv5huA5tMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sHa1K51B6YtZ1DMGniscbHJv9Y7mBAuiGwybNWrhhgYsAAkKfmfUxQGMDpM8eaVtNyzzUvBMsWU5WecvSmDvoYK",
  "key1": "hKYR9iqbZJyHUh75hN8Eq9M6cVhUPcA1gyDuCrZ8WEH527TeqFVpMkBVp9eXeADBiK2f6cRG2cWMUkwydgvhTB5",
  "key2": "3ZJYtXKTWNgSGv5Ni77K4YJn5zfXYGAM2UK6K3MfLUgDPJX9UkC9boGznzhBxrnMBrGJ3Ni24RWt2bMegwjWYU5K",
  "key3": "3j2ro8HeqdcqkscWMp3SVFgDENnRcuoE2hbvaozNMh7BsPPMkT99XgKMTdiBsEYCcTkYAfnQhabsyCq8dNSzRw1Z",
  "key4": "pUGKSZ6AqdaY2V9zaUqLLebSfynM1Y7REcDUZQdoygtygKbv6B8mggX2EevHXfwGunfyHb1MynyK3oYKdVRNKQ9",
  "key5": "qHYYtkrEGJgR48fLnCBGYwyzwLYpqSY3kpf2Lne75jDFcYrTLi5iiB8Pvg2KkyC6vi8Bbgv27HMeSrZrFKpRyQP",
  "key6": "2AWsywWFxcCQAEfQXSo8or6kfaWuuxNWcaM8u83MDVNPk9iknmXUnzCGkr7HJPbcryeG53ZngfwrWXCFmSAT1rqu",
  "key7": "dhQWTAzgA5bnt6KaLnESbHs6oMoq6bt3uWAZfiguFvNzi72L9AtPDpNB88j7p3bCpwZUqJ4pKiwjVRjJHcpndcT",
  "key8": "2p6X9Hn5suKUqSthN9Zn5n2yac4e6GNfyfLd1W63kDVTy7yJwZkxEhBcqsqeSvCc3KXpGaxps5c6czcV69YX6jka",
  "key9": "2Ym7XDyaPgpHgDkkFh75EYSuVEsfrRkgrbnhYihuxxa5DQbeobngomVTmsiN2Zrk84P18x8WqiMg6HhzssVBfpnC",
  "key10": "hYizsrHbcMcxcTK6wqGfZz51XsmxBzx7kKSgPMkqvT4GHSwHfejaeTwGXvzF2sx9qjuuj3UsGvxEESxpvU2so7b",
  "key11": "2UJzpJoex7YGXAQAJJbGaBxHS2uRjZoS8yV7kzf6J68RpL835gfwYUvQnVL2GncTLGy2ERGDu199mADjAmYFMLp",
  "key12": "41gsh69P62nwweobFdFcxshkFCgqhM2mfNuncVU2cePuovdfrM1TueKDmZ8hnMpMKjGRWWn9MXiDEAXwn2R1WRTo",
  "key13": "4jKxdiKvc15noToMF6cNNoMv4UEeB8vXDLyxWSMkQJuuZ427E2Tad4Vw4W22fDDifLhFB9StN3nxBGeS5DMBJdRo",
  "key14": "3Z3pURFa9W62EAGD9i6sSCRXpE54pF6uPyTFK1qetR92dXHz1qhBHGDg233Rd4o5Hwc7onjqnVk6dkif6TASZKxH",
  "key15": "4y9XhAQ1CMHncJJuTuLHTWQMbPT59Rj4MS43jasTaKkrKW9gManJfZSZS9MLufFxBSNLHhnX9Qj5dHwvjRARBPo2",
  "key16": "2Lw8dqFkFbTYCrihPWPkGKJGSzm6TKAiTT28jctp2r7RdUAKsuGoV8L3B9kpo7qfFoqzTxittjnLgjhRtfYrzLb8",
  "key17": "EXyPTisFsYbDyJFqNhqxQyms4MVtPjfQ4GG2mNWwM5JieTUrdABDwgEmwzi3SpvypLoZFQd3BNS3tdPeeL8qBpR",
  "key18": "4MzVtAk8kHdBKpZxZD4Zwd3eEs5w3iA6Us9C2A7eozYwUvEC8cL4KwhikoVritBxEsX1CZRBf7ZsJoJJ46AKexDK",
  "key19": "3JiGsK1oGTeJYwN7xB3zACZHDTkGmnQURq9srnuWDeDhfrUdTC99dzLCjffj2WCb2ScFb4B2nKyhWKoTehaFR1fa",
  "key20": "4aLisLMCQtpcTSCr6dP1PEHK84EwitAZ8BtaihT393EcdXrZLBa4K7Q34iykY7hMzKDbdUmfgapogXEsXwtiah2n",
  "key21": "5FmQeTzmahX5aNh3DPcf6brPL6qS3xGyQoGSJqM8yJ64W2WNQ721rMnkaZkHf4PNHB8RBrJC8JHSQtM5pSby5gvj",
  "key22": "4Fu2K8VgXhH2DTken2oznCkFHBVxLDRamEJLzJAfcgAzfZnLqus3ThKgvkSZnRFEJXQK5nE7GJozXP3h5AEPagF7",
  "key23": "4HnMFe4dQML67gTptbU4AV9bTFxvyYpVraUEnFbBvACne7kT1btiyDMhufgS14vuqe8wxvdfzzheYwtnsuYqP89W",
  "key24": "38hPf1HYTW5P9x4DU9G5B2Y7Wwtg9CjNeeaPwmyLxC8L31ptCfqsfeTCRcYNq67YocygN2ZCXwkgJK953cCyoGv1",
  "key25": "2uWbgeoUzq7PAF9wFuKAUMDRbpLKV5AwyXeunCkEZTv9SyK9aGfde6xD37EmNFN8XjaoxStyQ5z5zrBMxBAKSaJ5",
  "key26": "4G9z9aVf11YiDNVJh98Rvo1jchWSMzRspUndk69GQtF5Q28e93KuFKDY3G27sxMFknP325c1rdwvdvBM99k1tzV1",
  "key27": "4QsX75QuXPSWLeC5VEpUYbF3ekJPUsoZsyR1ibz33EU7tmcCBoMThrGXXKovc9QdZEB3ViNTnbg4rcmjdDz6JYpN",
  "key28": "2meCKCiD4BGVtrf1nVSQ4DfxDxv5C8iZBFnhrvyfmEhcFFHr6NfTzQyFnpSR9D4V3HsDhDk6ZuFkVZrsQCosNexq",
  "key29": "5ek7ELov6f9zt6yxafVQmwV6hxSYT2JhmoN5JJMwtxBpc42YjRMW9pQ5QWZK9epQtufqZ782zYv4JJFdbyvQkXtP",
  "key30": "5RTt5dbVKLFCtzBMvqHLW4GqmMx9BVwWgHLmWNsmxnAfA2XxkRuanXhFPXStS4JgSUBnyMoEma3T4MY2MksRrvCq",
  "key31": "ektuQUURssZkrsz1V5zX9S9emmKuad6CupQLuGmumw19k4rL8wxjNnpLhzRLF564NFBdzUvQGoR2ei87CRv6f5t",
  "key32": "52u7dJ3U4ob1eWzMVpTtV1cWckpfykS2PNqmRMRp1UYPi5FqE2bU6xteCYfbSFHHFffY9JxEXvK5xfRiWX2BR8rm",
  "key33": "5RznxgCLccEm6WVvyNkiEQpp1577Fn8rgsbjC8heS1NipCP17dCrvim6wVfy6zFiW7peUf3TTUYTdFG92ydkTizt",
  "key34": "4fSzMsre7NcZcANRZaec5HCT2hMvPQoYDcVcb9sh6ozGmTwKVrcDoePGWiiHnwLzCBgcRCk1ymC81jeSoKwWBWyT",
  "key35": "5Z5Gve4ib3darHQYHXKDKuwDJ4j12DQbaQeJx3LrGEMFE3ymKweZF6vCBECWY5Ggi84E5Rttz1vZR1GZK96UPHh1",
  "key36": "3a4s9zzJ2N6bZ4bRGGAc4RUzQoJaYMvYFG3uTBTWcofvJ1t93ifD1CPqiY6rBfLCfvssDm4zaAS4gjAHQPiLa2F9",
  "key37": "355n4Fw9r3NmuCLoGa61arqVBT8PXf2PmGCPN8ACgTRKijdr9n7ChduZxTtrVsFXMH7iGozyiisoVNGZZ3Zzqotb",
  "key38": "geqAVdeRPyijFz4zFq5hyvf7dR6xXEZmBQKYNR8n2DH4UDTofoVTUHgk3zx39yKj35MKa2MH46urkXGicv3dC6S",
  "key39": "5pxqdtE3jupjq8rc7BgkGnh94RmYWx1SvXgQ1stNgzsLL6nh3kthzrBV9oDuP4B8qj4gFKmGcCrYEjAay8MupxUx",
  "key40": "5xMfNX4UrQRCSUpxQ1vExQMfjNbzEyEBMGpRpmWWWEcuydDB313LtNNwfEyYUtMzEKN2CvfEhVTxD6HXi7b67kYC",
  "key41": "5RWBdYzoCvhtWboAQgy2Sazj27Lo4p4aDy4efvyKteAfHYaTjWGaqsP9vrWNFUCvTVkpRokUukFX9g6Y6v8PuFSt",
  "key42": "5on6QQQP1K8xxMi9ahVhCqMtv4CooQEr7GUTxrfqdXqMNvndMg7YtvvnKi5kXn2M642M4jhWZ5z5XjnsQUqboY6o",
  "key43": "5xYPao6kMVtwJBkGXxnu9WY2QEo2i7Jyi9hjfVhBFeKJehwywtsEj3PPQkDpsKLT96CvodJ6ikQJu4JyAK5oyHzw",
  "key44": "5VM3itKQwRZgn8BM8NmtEw1j6nNLFKnT6w5AknXM3W8t1zkShRgcKFQ5vZF9LL5P47Vx8QeKzRBVwmHSn3Hjrqfa",
  "key45": "2xy3zFjnf31W3CCarz8EQTLxXfGrBig2UVVJeuxkb288N3u38emREqLMHkiCaPva6aaMNpz939J1ovC1v8q2i2Lu",
  "key46": "2ND6wCCiaCCMzi32m7BNNjS2u17yMbj2n7J5sptEzDx3sUgv5Wo3saBLqw3wQ3SiuW25nVtw7Y5tS6zhP1bb3eGr",
  "key47": "2K4BFwZhkFPrHNVWfaZaghpceSGVsdEGeAsU98KjpD1vvpJmeg8rLgN5apPVW6wSfDkD5VayBfDuKYjD2ZM2WBG",
  "key48": "67ZYnRkEtD4mAihSqrKHfrpRUav6TigRNhRHeMtWMDXAQjGMJ4BRda1MkPN12Q55K5UAtEZd9Ezha7VFJL3i9W7b"
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
