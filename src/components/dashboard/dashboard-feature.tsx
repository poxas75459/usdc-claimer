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
    "2NW7ngp1NYat3YGEeSkyGgvquB5J3tfWZkZVZXuFgbx6sQzDSH8tTpZNo17t7ToCfGDFjFiVCh5BueEWEEzpnSow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dpvWzjYzCYmqiVeHojW3VVCYVTgRtwFsS6vaDMeYanHnCSYre4BzV4sifzF17Qaxjk1EsKaMxqLQJEfW5dHneeg",
  "key1": "2UCskbz1j1w4JdSz7ttvQvkwqpMgbr6VtGAmGEQVJYoFtVLQMLtByPHsNT1LjSAKZpdT1xBPSdMW7z7aBYrRnoVw",
  "key2": "586bTMmiPFQKpbuyfVTgjn55LLyEpfnv3SvTtAdusHAHjSpT4JyTKwkUV3JvMwH464oEWDemL1nsErzmDu9XqdRy",
  "key3": "3YUScv17PSsLr3zuMD7rSbdNs8WXDhGFumCrBPjwjUEKS7yLpdqhXCLvz6v7Lte3RRr3xhPXMRHbXEGfQMuLG5cR",
  "key4": "4a22PH9aNGtUfZFGDNQoV9y1vsfMiyfuTWiVVGFLPFM61AxMLPrW7SKz4W5BkMdK77zUKgst2SPSJG9up8eRFuMe",
  "key5": "2jnPdSGMSVi3Ru2WVFanufRQK7ujCZ8TrYTsBu5QaFXPWzZsGBLfTjCRTzySRZaxAcDRFzBzrTYfXdcVwLiGj3fS",
  "key6": "3GpccrqRUdsX5vt4zjKcEsVHdnWvVGhh5k9xPy7gBvPVnSYqSBNWGeHSsGHcFfsoJ69n3Uzg6YoHv3nvx3AnqzED",
  "key7": "57FxGKV5TUGeEkDNx3iX34yXdhsdQ5Cu8faFyQwxhgaLDPASCrWjSk963UPK257f6hpgPRk8bZXRhfDejo1kt2xn",
  "key8": "56hgdqHnDEHda7MnJkwFEUByU2XqicM6m8BPXAjMTZnWYJbnGN5kuYwDb393bAieYwYJmmKGtydhVAtUG5anpEoU",
  "key9": "QnUQY3JK5LHQGevZRTYXX4m52MRdsabYSW8ZHgPJ4mLq9V9Lyi9P1TjmGQFc6CqDp9aqtNtAnNcwUKEQbHVwYCm",
  "key10": "5kJAw7jwmdZy3Dos2NqHoiUV1c9Q4E7hpZUZeuGLpxzFBu3CHwnx94nrtvNdPagMWNSvk18PcUHirMC5BdmrXf6T",
  "key11": "441U8wpNJRfcAQtchq11tqv7nCj1a9UktGG9N5SRkps4LD8ZpZnSCHoNjRTes5iNVr5pEQVN2dpiyyPkGy9hSBxT",
  "key12": "XLYKWhzGDwLejUXgyMCJ1BiPpo1hKW8qUuECzdoFbdoLS9FTZhg3CaKvLFU6iS7xGeLBd547NkbtHc7QLRF7X4a",
  "key13": "2aSUoLzW9v7SAUSh2kekYs4ut5je2SNsA82x2VmxbXexJkMAJzJoPj1GSWRe6fEGZEbuxLnJPcg4y4K8ET7n7Gbv",
  "key14": "3ug5PeQP3BmKfNgqYtC9Z1hR81aSapFxpskB4rEzzuA4Ak2jagC7FL6AWc1TipWqCQ97jrMUWQNkwETpuMF2LHsG",
  "key15": "5mYacYNHDvnkHoZCe386yMjy88StfSrmrmFJ2UiQd8FJe6VpcsZyVuQHjG5nBpVQeA8mpMLcq8nVgBA4Pn43hUMi",
  "key16": "2sYK4FkE6UoJmgKUpiyQSpm2LcYQu3u7NeokgBvexah5gn6PCtNjQkJSdNEiapeJ4cd896xA8DZCvFQeN6Qa7ZRp",
  "key17": "4tAPWvYrRuzvVziLzSBG2uqRBsDkU8sF7xr8xMDxRBXz2WBxAkqbB6F1YJDgdipebAeiuu69uwx4xGYj4trMxBJg",
  "key18": "5dJCxkLqSv4C36K2Z2wCDgZL23TNVsTA4cnuL4wE6sjYViL7EwaFHLUrPgXJU3E4VVbYBr4zXa8vfM8eCEUF3SJ2",
  "key19": "43LG5237TnzbhmhyLZpH3rQrmAdDpknmw9oGtBtPAR8wbnAtKGNhvCPTgZbW88Ltxt7zjGC4HTHEVR7emSmsP91E",
  "key20": "3CBu82Uz73dYRJ8qigzLa9thtrPPVuFpuYf1nHJc3gxJHGNmxesLaM9fNNKFDbM9jbNorZJPR7z4LWWXYqKzoUcN",
  "key21": "4BbLfeCpCwZcFBg9SbpCmQAqreQ2EG3CXfPpduc8Tf5tBbPu3x8wDdHQphZRnP6mRg83WF6mE8upQT5tNBY1XD5k",
  "key22": "f758UkcFxxpuZY5SYF5S6e4Bo429WKaKt6ucJF77egHApqfrYQsCrAmyaG3JFTF9ehBxLGku4yauKX9ZCyzZF7y",
  "key23": "2WQSrUGAQA76346FzQhRSCTjK7BR74UPB8NTqJ2u2HfxosNzzthWmj8D8GvkZ5KsidPwMV1QFXWRsHyXT2PaZkDA",
  "key24": "5fb7Bc2xPEekqMbiDt8fg2ec6dio3E9nETu9qeSD1f2tsu489zU5o1m5iY567whWf1zphJJtVTEgAgzzr7R8Zt6R",
  "key25": "3ZrQypwu5Gy7u28PqRXP8Au6mSgGEPjP3RKtkt2WmubQdLyAj2hrGKwmiS5VJr59aeGnfPT6JAQ5g2VRMdvWEmi1",
  "key26": "3tXuTiUaL3wughNTt5xE5ram1bxXJ6iZMhUjafdcG1csWXzbSnXLgfTSpx5wFKrUQxZsw4orxzPcnzdUaY4QncS9",
  "key27": "4nwRDoRFfueh4ggTSjTMneB1y2T6V2xm9ZWiTYMLirs2vSCwducBwrGf5ofEVHRBfpnd5i3AFHKdiBkfkybRpBvp",
  "key28": "3dYy7fLQ3tQtxELBgaMRh9NGKwK2bdfPbEpfvvvjKy8L31Kb3T8QRGkfrSZRdfEzby3GSuccxsr9mXb7fjPENn6k",
  "key29": "KHG9yajc4Nqyb546rvryNyHRZMfYmq7YrhQLQP2NCjHNZieh9eFgjzaBnBcRUrzRBTp9c2uv5P39hPtxrcFQtNt",
  "key30": "3TNsHVpwcTFut7giTx6BesRqQ48KjmTAPcNgEyVFBFWBQ1HEBa6Uwg73uTHutXmFBFuthdoQXuh4CyiSkzu8m6HW",
  "key31": "2tivVayAqMSzb1zACJfYe52LMGjg8CB5LJNY19rY9g7XN4U2aiu2HyD45wuW71aQ7fX1BkErvmkiZunY2dE7f5t5",
  "key32": "4PNv858MUCYMCdhJ9XsFKqKHzVzC8viC7NxMNHbQjW4ZrFAcCgBPDtLsYhcnowUK2VvJtD8u4vQormDDgFdjNmNm",
  "key33": "2tpn3Z1vLhBcSaedXFm7Pq1cZFuPNteBLFjeauqzc3V2BFWNdxBF5s8xcUdqWS2zkNn2facBXfU4uP8VJtiD1yUG",
  "key34": "21ynNqXbk519GDcFSCvEFXA7BnAZ8feNvBa9QSPEXgmQZUXBWsGX9bkXkuF9aZTAEPnXSGz723JjeyuRXpk7o1JU",
  "key35": "3gdbwFx1rcmxExWA3Ag6AD9yBkbrVKqfaNuDyFyVkNh5VrBRkGB4TBJzXd9ShJCtRVVNV1yQFwLtCAbFxmbR14Ed",
  "key36": "47n5WA6Ri8xmpgKvVenAV2QQfRbX5yKFmV7C9KsmJ7jpZZVeBG9EDr4BE9BaNE43AVhsp9gNKWNbiwpnivx4wui",
  "key37": "2dt2Z2B5mxkKyYqn5M4iA1dDgzB2WBd6iy5xQ9oqkCpnv7iouknRxfzXEoaMSA3Cw3wJX2r8JcmX3ppT8T1tKfWB",
  "key38": "5ZvreVwCiUEik3F9nKtPrw5zDuoffkZCNxcH7DkPAvwEPHW3BAZn4nAxbAVEzwPAhFeuFis5L1PpzQnH8yxGddVK",
  "key39": "3bJNGgxsCuuogcRcxgdpsMFsxxsztnvbbE3zckxVncAsPRSsynAmBD7ewBkD1nNgwZfrRskGtyRY5MXdWKZS54HK",
  "key40": "5XPgfEw33fEWScFvtb4cjtoouG3njqN2oBFkkF7WTiGVwWcZt4vCm6vUC2GCshEv6ETJsHDeMsL1kCGpSWmtn4j3",
  "key41": "2aQjCtRJrcxzsSJYNmeUYk7gVwYM3CVieXD6FeruJpWXAKErQ3ZeEAPevpaRRLqjxVLFaj69bxqCoNXzMjLydqen",
  "key42": "3mh18FYEKyigRSqqWvSZEcN5R8n4jYhp3B5hN9GSQPqdDDp7B2vZdUMDrEhtBbkTdACBz5rY7tuXDy2iHy9chmjT",
  "key43": "5PsNX3ZgmT3r73Gu7q5wb5AJdgUjKspr7vPt41Uu6eAjumxs8hkrjE62PPSBepf7XMW8dqqCXSFrTFoRgGq8wh6P",
  "key44": "26Eupiz45M6m5BuKCWsiiT34b3DbqomnMwk1JH2CUuqBm1eVreyMqz5LUNqfrySXwrU4Mof6es9ivAfUi95r57dn",
  "key45": "5VT4GujvfShf5SBWFQibjLgWLd82kfxxiJvNj99xvxFpp4L5gj7vaUqwrvd5a7NjVogK7AtDMGeMh7CEbRX9nLSe",
  "key46": "kcuXG8yLqYdSNPf2WEnxkVLYWMqYqbUbwAp5HqL4kvtn86FUxUWxycQgriwVomRTaGLomXPq9AFg99Gv6njh5Md",
  "key47": "PohZMT2pfAPJ8SRcEL4R8Zd5g3ess6sYcUtiQg6tmqVx2wUYcztrvZ8ra3MVhXafwC3m1ctWaaj4JQZcAqQXVbT",
  "key48": "5wfSrEooJ1mK34Mb7fwWZD5kCnuvvuDw8aBPAsQwaVUwrqgXWzFxitsz2ZHPuvMZYSNSa9XQ5rPgDC4y2vhnG3Ks"
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
