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
    "4oBLEfn1eDqTZtKj2Da3teArL7F5bN7HAFxFyBpZnzDcswxuyFNG6abzZW5yEZEKzswnPsXTGPCprJfjsq8xVTxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GTbxVHe4CZmg2rWw23oQKE28aKrEyvuZTpXvVzd771nUUaGPXtto1oFCSiwvWRSqdfiFcM3QDXTgApmGJyPU6oL",
  "key1": "5ApAs48Hpznc3t9fmDZ4KrNzDz6PYyqmBWq26QyRVhE8SQ69V4SLv3NJQtrQjrAU1vyE8ANcbcSwtrDjLZug7zXq",
  "key2": "ZzmFnYLnZcVdbG3okEFyYQGXxvN5eM6KaugrThmCUktPNe3hLau8GfiQYBwiU9tsv8Wenn6G1iLXcMJPKAREYZZ",
  "key3": "Ytgg3y2f2S4bs1WA2gekaKHThCJDdDxjMpHZZUfoJXXJwr7uSXCn9JUz12Nm3DU7aXLCv5xSE3THmqzfKe51vWm",
  "key4": "XSVwpc462DezJKHkAYbkn4aepRMTojWUp4zKrJawog8AFEh3UwcW7AMm3TCR1EEve3oNHbAbkTb2TGALAhd9MiG",
  "key5": "3UvaADkBjXmfSTvpmt6x3cBwuxgygFNR7cYN3VwJhBhoi1JJrfu1ES2MqEdos52yfxziy1cdqvDy5ZyiYRP15MEJ",
  "key6": "2GbjCQ1QVkhb1pSt8jMgywpwZgDMybKhPgajtPFzAxJJ38tvYFKLm1YecdhMjQAiuJyAFuiXBRJ9HJ1vyZsd72qD",
  "key7": "iQsAp6dh5FaZ7jJivg7B2CjHYQgL1NqF27tUYTTQFDWyXVn54htbC8Qvw1tdwismHfvmzie1S3qFK5pLKZJi6DK",
  "key8": "4a3JQHUxYvttTKTVfQprxf6KE9LzPU7u2467gH7KXrpTbcvhEVMdvUE6we49J59syEg4gij6RhBrb414GA3BSieR",
  "key9": "4uW328nmsb54GWvHd9MRwZm4FLFngqikikvxeNTr8RyWRRPpg8RzFsHvYiqoR1CYKaCnJ2ryj6SegGkimaiJQoWh",
  "key10": "3GvfdJxApwWidaCBUWKwoAkzBw3N74KPbNNZ6h2ivUxbLezEk3vL6CprT6SY9eTwxxWbPoGqKizdN4GjMaFksg58",
  "key11": "bqoJnfGmwY7QESvLiRHR2wSnqmMCic3SRwf9y3d4aUxSgGA1boSohg5GUjDFwQrHVrwkSXfksXNpuwnjhZ42i3U",
  "key12": "4YMS7HpdYmUjaUPYc9Yz71FgMuXV1izwMJXiq8kbdzgvBEJGgxyRx1niXUBkZDCzZ38qNLV7f8WvYeiqcxHMsbqh",
  "key13": "63tq9y6pAB7XH7zGPcXP4w2Tu14Wx3soAZfJDMAivJQ2PHfoy3B1rtwgrgHRGBF6cWXpzPWz9xa7fMAc28q5F56G",
  "key14": "2ihLdd1jsYiJM18qE6YKFapQVennPeC8GGynx9tDhBx9DvFJzFsCKfpc9oS37sQ4EZj9RGfyjq5YJCPaBsLupHCa",
  "key15": "4YaLotTit75yg2f1YsurpggztRFfTam68GoKKPRXuNwQ1WNe95vSCd3RAYjj87wPiahmYLykcJJDfDiM6MEftmXE",
  "key16": "2Uu1gdaPL6Hqkh91xkEFohQ8sQtcxz9qqRwy9MyLAbviJJYq87L4a4V8HUjHr3KrZgtEEqh5854HdZ78AksnayZ2",
  "key17": "5y1e3EgeAyAumHNstHtmVExPfhgbn3sQjyvaFQmThXbcxm1ZHvko3Eoe64NA93bK3hwwfCftzyQun4UZ8H1uozYj",
  "key18": "4mdEzWxmt3HxPygf7mN7ycFS4tjCzxLhzvBytCm61cRfAr5vDARi9fJPm1vycWNm4S8B95Av6KrAfcFBJgD46mT4",
  "key19": "5dWisc7CHcpt4PKwpzJ18eaNDY3E5G6ULRfLAQbkgPnBoom2ob6xuZRWAGCtsNPeakcYk1pkQ9PFmx2Kx8ghqE2o",
  "key20": "644w1quwm5sEYY96jx5anxDFhjzANRpmK5KEzbkvbXeMKcmBk9dhRsC8CNAqtLHtptK21voVFP1rfr68JxpEB15f",
  "key21": "3YoPBdD54wSr5Yrg5RJmj5fsjuyYy8HP56eRLJNF3rGgP2PnScHHSdRENaKAnDS6Gvf7FcnGgewsiiqCmc18vRgu",
  "key22": "YAXK38jnR22xFmGAuKJkPa3rb7UkTBkteTGj82e3MwivyvmR71GCEVShUFoD475zYQjxgkMRMH4CqFDbkncTFNy",
  "key23": "4brYAhR4C168g5JY4cKTW7bGNCFDpyQjqPb5wMrAVGRCreBapCR8w2eF2N13rpZVUidvrNYJqPLeSnPEmyeBp7aw",
  "key24": "3TA17jMUfHR3Q9TJu97AF8Ak2ajQbtpbpqqfTWQ83PAifj6LqPf25npedSDkMcpvR2qwPeSb6NWWo6jTZtEWbtB4",
  "key25": "5ikZyBfF9vXifgteKTVtakBmmBt95XdfpEyULt2wVKaHav2KiXgXTT5JVfwDtr2gXhdNd7RKiBcwmGNRaoYdKXX9",
  "key26": "5TZJZLi7LcxurgMjE9sQZPZSaJqd1mEMDTp8MusGrgpeBs2BBs9dPvNSdWnv6rVikPwoRFuc5rfF2nabZ4eb6ZkF",
  "key27": "31jbRsVMUueEgudWFzAxyaYLLxJiXwSXyVp61FctsouAGFXo3txtg8Dizw5UhSazXbgM6gpRctEvw8qp39eS5mau",
  "key28": "2LeB2qyWmioR5uyA1ELNxGgiRG9s6qg8Dz8mE4XDZht6kru1xcuXMKCe9nbZ8pL86GkdtwhhBHtU5D2PArWjRTW2",
  "key29": "2tY6wHGMYxAasAiVXP7ZucZfrj87MDy8nduCmasQbUabAQqpcGcCJQDiw4nUJQazrKrToLADfJfVt6MmjoLDDAqA",
  "key30": "5MR4rcYPgJ1SnCFYyqXfTJ1DWNLJpUQXeFMLgXhicn7Ta1eJ4kV71HLCRQkGQuLGGDqdiPdBMbRKHppEF5zGav9U",
  "key31": "25BwrFQgEPxsM9orB4UgZpqwTyQqV5B4r5VSHJk7ojVX8fu7L1LWpz2BCmFKWhQnM41nxzDmKJXDbfKvqnXu7Nvf",
  "key32": "5eJ6uHzJTSKZSSQRCZQQ4Y9AfSsrczRYKVV17XcPYWR13cgGirKoscna5v86LDD6WUFJxfQUJvt17PHH99eYnwtn",
  "key33": "29KtqJ8H9VZkugUydTCAH3YpEKQp3b7xkuyJA4r6Zw18WPYEzSfvZrNojiFp2eqFEM3jtJWqRQsXAoNfNb7CuVpr",
  "key34": "4vsetWfZySKvRBRJWGgRao2PWtwVkgWhGvUyhhQkrDVNQRpz17qdnM5YVvYaJDK427ZQm2GPE7aX5bc7EsVMk7Hc",
  "key35": "4mFKivLNHia4GqTgZLRmhqwdafDNPEFZUqsQuMEvaRCT4h7vLSABPVoEt1UqBku2RGvfyGy7uHNbzmbyLtH6CPZx",
  "key36": "5BqnqRemWmxSav9aVC5JsHFN81yHd2MhZcF1KDuSdFwAgjXiVpNhCv4u3aEEgB7skdThyaYAdY3g7SDCD8GHiSWp",
  "key37": "3Lhrd3GbW736JKKckxDDzgpsdCFhwjCjf7wEjbt3pGZYTUf4TjSGhTKKLdmVUX5cJUpEU7FRZpXMzyjmLi6wh9tV",
  "key38": "46YWb6eV9VuFwppKnZwAZg6dhxHTp1eFUEgaSeMHWGiPNgZmBvtiPX1eCab4cR5PrXwMcAyzt3YqXGfoSnBwKFz",
  "key39": "3Qr3TPou2UtyFq3spuY2fLhPq1zbHEAjXp1sWtb5wdmgwYYTXS64D4wPbdPwpdTcoZXSSr9rey9pxTWr53vdY9NV",
  "key40": "2Whz278iWb8Ns7sNJyKWBVRgzEvmuN1hbEeQx4wzsVTxY5SrS9BF6DxKok312YCqhp4nJ9aeCeezNJnQspuWm7wJ",
  "key41": "Ajm7hmeu8uXhruyNeGGhqwgLjthbk7MCe4FHusQHejmynUPLVwKY2vxUXcmTezyx4wwo7Nok5KZ8pcHE86ZJyCk",
  "key42": "4S4pxx26MRkzHsET49MzhrKD4Z2SdriL1ARE8d6PgZaJAfVHc4jMr1LVxHW48EntBxfrrJvFaVYdjx7BTJRGBuf1",
  "key43": "3dSzDEnRZ3LPoPazfd6LmuDdiLGebvn9C9T6jwSJMCxdLDPqdpab9bA4GpmPr5sCfP147hR1TxJg6iuSdnp1Zegx",
  "key44": "3VoZdSeMW7Ag2kYMZen8mUmZmnmXsNmd3joYprDq7QBa2Yfemm9SUGu1TzAuc2YQobFjPY4KZ3dQAZPwB7kz1uN7",
  "key45": "4ENgynVBXTrNwxbgR7b52L7a7Xv4gWMc6nNEdQYx2XCe3EQ57xXsJyrZQzVWM5zAip7UZipTRo245cTbT8hHBubp",
  "key46": "z5wiF2MmxrfwK6inAD41MMZbPAAyaeaq69oQbdTHfdCq7rwBQWXSHtNP1dpXNiEoSNshkvTw79AzFs2KvJEA4nk"
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
