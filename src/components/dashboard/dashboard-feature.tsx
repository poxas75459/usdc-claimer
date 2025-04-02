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
    "PMojqKYbCAAkMQUpHugq4BfnGuRhAHjKuYevSFdtCyRDiSuhygFPPa5aD82cmGguZTZbjAMV9EPRkdPGV56tJpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S6bqQiyVmUKMaL3Ya62eVB9KAL7gNGcofPQWi5rxM9ZXoQpdyog4xMKAWR8Te6NAVGZ35Pw2Cqcdaet2YbSr24C",
  "key1": "5xjgnJr4uuyHqsBXKNqKovtohW5F17r2ZVoc5XCnB26tWmRSLbSvsRz8gq5J4uW7FsPaA68mkZdnupvEPjXxsLYr",
  "key2": "DEFak8tfYKaoDYLhgbJ76v1f7sYedhJKvvEzavzxjB3fuJRRDxLJ8G4U3UX82t81AEsmSRZhMS4z43x957ujwu4",
  "key3": "5b71p6Paxr76srtc9dE8Ndxxbxa1KawNAw6Tm2JSo6XvEJqGYM5AyHSmMbqiY8xnQmKScsZoqwhFUrmU8NkzhUCC",
  "key4": "4fXumq6qQEtz7z8pNRqoq88k8wHG9uRYBLai5zYjRrPfbcUzvQEFar7oXD2oZ46NWwp4o23iLhTk4zz8tAWCstkV",
  "key5": "5B4BGWQoSJknW7LWraokwvhSBRHRCSMkZdQPL8Vx4exfL2Kn1RkGhUwh4b2LEzPwB5YjmadveLqwWe2q9VrskZkv",
  "key6": "3LthMEZj5NBmk6NCfxGUTcC5ZUNtauTaijMbtUwvJ8U5PSQzGm1gU8HDT7zh8Cy8qfsZQjuYnSvuLw93gzciQQXj",
  "key7": "cj7SHsFBPytAzzYF2AMVe4EE4NS4oYQmZNNbYY5vHubKDLV3zL7uqa2RCAhMZAXFSmgtuFwJRtCfEF7YwTvGggt",
  "key8": "3YN4yujKHuE2CN9BWGKSB89Ch6b4mvgqbxEuK5nUfYet1p2Ussvnnp5DzFbyTLd2XA5fK7D3FpJGEzGtJ9hCVDJS",
  "key9": "5TooXir5Y8bzXakouDsFEtcs9vuusE4RLgs2vwGVjQxJtZuSwtW1Y4EbpVwkJWs83vjwpRYKKeBdaDBNovXqSGcD",
  "key10": "dbDQmcMuLAmq6Vyuvii7VAGJSoJcDNauxhwrYw137Zx1yDonyKBxgFZE4SHM25kKLciYBUpm5g3UJvNUPpXAYti",
  "key11": "23Uzk5gCSxawK5RG3mwYrUsscEBaQTufHJCwphUzsf6WfhBU8skaaSWyxwpr3mCYJSc6FnbwCMuZ6e5jaBZzMxmL",
  "key12": "2foMrjmCCmJ75QCf3aiPnB58cmkt3dPSqWBuCHgu13ZZ1Cakh7aMogo2NJzAgHoky6LLsuPGxZeymyPiUNhUbd2V",
  "key13": "4Mdv2HAjvjnaMWEu3Yj2yWMFwntznQVqHGL8dbvtcptYJhYpj43huPX9acLJYoEqz4AT1tePWiEyRHMkoPUG3tFy",
  "key14": "2rRkPckTrwyBfuJtj8Bq98vticQy5TDdiPX8RprvfhNNoK1ACvQLXtaR43kQRcyc1bG9HHe95D2nqUecw8Bs6Fki",
  "key15": "33bEPZPoVoc7ySq6sEuozW9dWgRWuneHi9WQxA83ZAXrVtVtUB75PvUmrw9b7JRLf4drpBgP75h4fXH8nu7if397",
  "key16": "24q4gaERLYLizmgRkbzPtmZiG2GEYt6xtHiBnkt3TKZcCiRv5bqMHMsZ3MDzE3sfqsCSyRi6mmfgcFsJYrVJZDPG",
  "key17": "5nUTSdqctR4adew4eQ3D9ajegoeGfrWkuocHfXhvEjuUx3Nfuyt5bDvDuzyLH5G7y6CBpTz8WQyocrc6dxePaV9T",
  "key18": "3Eg2paKsbRxuDo5GDmRSJiy7PQjKmVzw3obtpCCSg9xxGpZKXaCogszHBwL3ZhsmS78jSeehHFcy3K6QeNpQvWyp",
  "key19": "enecPzAPrDpziFThUXSaKfm9o7a8r1eNk5HehEzkWkSNqTQDqCi4LgvPj34K7kiaaZvkzHSuMusVSK8jCApy4hK",
  "key20": "5KPM61U1VEyc6xtdwTwtWJJmGsWjVQYPQbEC38dK2QcaYZv8ofzCCG5md9xhJoTZ8okNz7ZDMztLFEaYj93ojLYq",
  "key21": "qUszeMJtUZbPdh4zGYYbPFsi2bzYEepz4jJca1REB9E29tJg5fgaxsiPq1otQpK48NPudC8SvRQPgoaxjL2k2se",
  "key22": "2jwbpxQyjSKoMVU9nnBKpmGbFANe655NGN8x8e2hpc2nwVWxGjVopQG15pgReghNgkntYQkgunqaTWfqH6aQ2PJT",
  "key23": "5HP4Eo7RKmg2T73d6cRwzTQJ7zV54MpWexAcMgcB1DP29AzbWMLPJgBQZLmniNwoNsQwGkJiRmrBdSN2zURJukYT",
  "key24": "ar36pbsvBHYzRDyTtm92StFnDnAnuH2Ue19uLMRSsr9hLc1K9nfhNqaEyoTVk6H2FmFaqEg9gceqvdxhB3MMSrN",
  "key25": "5Py9GZGB9Eyn2i3X92ttoPzspdoXtYkx9uzQZdmH6xsw9scpkFjthMFsmF2PxvgK7diVEUtqpTxt2VFqTAvmFzKE",
  "key26": "5nyasKi8jTepWnYDj9nfGFfVx9tLaXr7TLvFqyeXG7voUwdPXYYgVb6gQCMDh6DzE2PEiHBCfa14sWWNjD1z5Srp",
  "key27": "2L2d7ZUNcVYZWh6bwebjHaC8KCzSviTRokBqzX4FmERNgKVC1GFjETT8EFvd7FRQLPWD5UzRSFimQ69j4zJA8ZmQ",
  "key28": "3Bt89GZnZW2bd7HF48LAMxat1LVeJCKPFa9CtSMqyjnZvk4qWjJdt7PZ7yNZWs6j2DbMm7pWCtqdWWgcPennsb6k",
  "key29": "45Ygy6k1JeCCTmMHyb6JJbX8LtP3A3jfS3GaN7Q1iGa9hPWyy3NpurVeVNFpsiWMX1wyXdsgQtCkvLurpr34UkZG",
  "key30": "4itJYAuZyfSsXk8z6kDECyJCGbVgcv1JofZvnMBazo5CKVGFSAG517JQSbEZvVgqUADAsfwMLtRVd2mMiRyEd7a1",
  "key31": "JY6v8oZmkbw4F8KtoWYLuZBczoAdkFNvmi3uLsgoniDMkxYS6xL4SSnyaad6ziSJSEZmJEyZLETzTjsAGX6Qj1h",
  "key32": "5S2CfDm8YEWbUAjMperw4XBi5nCgo2n7MSKHzPpk1dcJwAPpVYd931ZtQSUCPE8zUjiVfRbL5XagvepcHT7XnuYY",
  "key33": "2E8vvgGfCfjj5E82vRf8JDvmxibCkv3SLAtsjYNvKJRYYNpuXaMhvzWPTYA3B3K273kABjsGHmZmGZJVzjhFFWfy",
  "key34": "3mxvVtFLB2fwe89mgH1wrRkBNtkBHs6p6Dw4FonpVi7nuLvauVTB6Tf9RNyTjZLk69K4coWbRa6WQimeaayV1Q5g",
  "key35": "3BfTuaiN1c7TvChV1q89AQ7PEqGd5hCneEfvgGes6KCVeiE2WxEGnjSjm4eqt8ybRSpXELNExKCfLnVSGBLPDWge",
  "key36": "27g8foY54Tkc41Y6C8fnPd9Aw47c4pvvm5Eh3prQb5PfMy9iLXhHj3iaQyC1aJC4eqvePKMXH8vgp74tYXkpPbPx",
  "key37": "4m9kv5jeZhtzuLnGVeVLnjAhH7QG5f1suBeKbYSvSnGP3u6ZRF8Mmx3JtQyJjfLEkRipg5gsaFmkfXc2tFiRWz5Z",
  "key38": "483dypU8jVVGLxfWxFXhoP7QsjvXmRw36BaNg7Urpn7rhfpQuH4hESc6uDPBeufPw1yioVH8UGAaQDEozVu6oR6j",
  "key39": "5uvR77vFjMmmrxV1bisemknnbvbnnxiMLEQi96CginQHbXCxGqF2VZMbMRp6kSQZtiWTbHSet8HC93Hp9fmxT1Mt",
  "key40": "pFtzRM515KQ4JqfaKXbXbJRenXUaJRqCzY7udSfvmssjsQdA2NntJfduZuV4xGgXxT8vm6UN12FN2FNygMfKA7L",
  "key41": "4ytGJL1ZTXmVjEaBHDbeNA7GAiBghShwXKzo3h9fU9tCNcXQuwnETctubCVSLWFZUXZgCNiPjMfFH6H1ZTsm1B6T",
  "key42": "4ohSfQjv68fK5hkRCEk8JjomTUj13dq2TVcuTvDQjBNM2xQb8wCLjcwjLJ4cXf7xkQUdr7wo8At67HYe5rzHMXDJ",
  "key43": "4MjhJ2dNG2kMTBABTip9QYg2a3kkVYnFzZbZqZfun4pkY8SLgCNp6EvDniKTNWs59gc5C2MvpTgMvcTCtEJvg8GA",
  "key44": "3F3GP9McNZqMMVXbXrRdGJTEL3nxQB5SoWnb4hFdDygTMMWWc5ngirKDSxen8WRhumX9ADnTQWmTrVw1JtXWpWBJ"
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
