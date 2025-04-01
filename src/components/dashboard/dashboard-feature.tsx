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
    "5Zi5zNF9fwnHBE1cHLib6iWeq73g6EJ7Qc7E4xkiqGL9k3fwV6vjC8cmzwGpCToh6So2CXnPGwaDFGaQ5rdZVBmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v2WEtG2nZsNGnbi6WndxvRiHSpv3M2XkBwKEgVUEt3Yx5QhjKb3zN5K9iYf6ozWTzYJJzcZt4hqapPc2hiDTJH5",
  "key1": "4JJhr1uMpefdfREjwd2cNUexNLp6zfLD4iyazB26Me5VPapay59bYPMD99TZUaV8RERq7YS6xEQ6QVT95zB3sNDJ",
  "key2": "3bpA9YnKWQBphZZMNTu8EyK5dA5LZzDyyRit1b6zGaP3jUZSLRo9HU8JMVUbskL2ELPbmXNGCnZGqSGNLSjbbaik",
  "key3": "5k2NVEUFgTZFP8jvG2rJZZ53osHXX92jw6XFKmNLQtdcKqdecapEJe61bs168twwvBxNwTidmwjTgnEYUbMSfs4d",
  "key4": "2w8xiANsduMrznSdBGzNbmYYYtqLnmPNmbiLxPrzuKLXJAgmJs8YJH5xye7i5rgXQEtcZA7uHWFBsrKiA6KvV9gw",
  "key5": "2ZYzmgNkxmuJgR7hLUifAoHnNwN1Yz8ahq4bkRGhqMZdYCUrCmNioLQTUrUFKC5LY1ksXCerTQmTcB2brzPFEtE8",
  "key6": "666fuewuK43ZMzMfh3yoUrhRLKqfsxFYBsQpLcHXfpSKHecqPRfBTFnMEu7SzYF8vd3cDak8QLrBDa6YpmuoRYp6",
  "key7": "5WfhhWKeLuDgDGMsKUy88fQ41Vw9NkNE6FKBJqtfqtmSLLEafh1u5pqr1wZL3cQh2PXdpda2rX6uQx9LSb9zzDTS",
  "key8": "4zphG1KBydHxiN4pQSbsGan61KDrVLwBP18Lt1wjveWXVfqGWY96wxChZAWTbPqPAqwG8bBhA49uS6h6YizCExdw",
  "key9": "5yz4JrbgLQDQdwRFQXNS39cpnDhMZ5xrVfZ4BieBWiNL5Ng4PSgfa5KHg6ZnXGxbcnAmFMr9WXdiJodnbUTUrAhK",
  "key10": "4aUKnka3zibabBWHszSvCiRY5Z86vcFDumcqrRvouK4pnYTeN3LettrcVRrFmvetFUpRSkvx2iJNKrqraYyzWYPh",
  "key11": "QNKZ3xQJj2DUaBfuKfCxjHSwSigKvDjxbNgH5Sn4D4uWnEtmDKb4DJYBeaWcCkpPvFWi4CLYXU8LxxKFASwwTeR",
  "key12": "2mNPFG2WDkMsUDno789nK47HZWYLVzZotjviXAAguE9RS7TUa8VHQ3X6rrVZzt9QH5zTdJmkcnQyEDKTLdne7eVX",
  "key13": "5H89m6nRabGNSnfofnz44zH7ArbdBGxbKiqGr6Xyz4WKnHfTMbPu2nkakBGHcnD3hKvkRs5m2uJV7TeA2Yb7p7Z3",
  "key14": "4cwLGewj8dV3N6gNviYxkQVdNwUiL6muiPErS5qcudMBTaSUdR4xE7Xe3tKydhnjpUVn4pa4e9GcaUBExV8JfqNU",
  "key15": "5EmzsMLi5o695gY3HRCGd6syuQD4uTA1vbWwts8PXn1Gr94mvqxuGLGzaT3fxE8X7SKmy1Cz1EmKwmvjbeBimeD3",
  "key16": "cdaW68JP6W4X12q7MEjQJgvHG4iHNubZgvtfpNnY44HMBFyj7qdFpkqzpTx9m1mVseCCmauNchFVrPSRfpRf6Lh",
  "key17": "5SH4gTRnnNmwfWmDWMJ2xNJhnetdxGoymMMqBTZz7jpNLmwF3RVhikUw3whfjguG51uupbMK3NC3DuxcDL44FKK6",
  "key18": "4yTRSB6nhANq2ZMPjeQwvyf2P9Rcop4Qj6U9PT3SMf7aKuRvQRC85Vd3yQSvMyZXJ3w2cKv6H3K6RyeNyQAdVGoi",
  "key19": "2MuC9bUJvxLsUdByDxZnc2X4hNcKomMLhKeABrJFvYgcVArVXiRQUkEvisyhhrKhzYBibpxtBmc5vt1BUQXqkEe2",
  "key20": "erUi8D7cBcwTP5Uw5djYrfw3iEodDp1fms44EyZWN8DEyKVaVkthKE99Lb5gae8RRsxNsmBQWtD7nBJLyUMjJvi",
  "key21": "35HjAPzgsNe8RZqsCYRevyPWDCW1nRGnKN7BDgAvXWJ2us5rsjfB34asEunH4dwExpyJV61nexJ1qsJC24fjtZrh",
  "key22": "2nUtcLSsprghiwrYDJjUaGndvjUGv6H6sTKNvu2aJgVPtz288cYt1atTZJgof82ZynBdqRJLzRjtaWc4GtD5jDvm",
  "key23": "55DxggUKv35qqiL87ouiMoUwUPVPxgPCPzVU7UBaEK3h8aN8FGL8jq8QMw31SgMqtdq6HzH4ZBTV9DSk2qbjFbUY",
  "key24": "5rnxi5gfzXgrzvXyG4JgPZhgbJEGzidNNnMgGKCAJ8kGNt1UpT6d1EGhGn94RtquZ4VLL91kYDvyJhe2uXFXZBF4",
  "key25": "3WcsPcezSpADPWgb5Y41qkKfyVexdfJLzkW8isxXMCpY4UpTD9AsDga8tZz1Z6VayCSyUPWP71LKdArHBoEdTum2",
  "key26": "4Dxbvv93kfMLopcS5v62EQ4voenUmiQ2R8DYLJVBQHz7FVm1v1nuAc22HRf5avR5vVJETBqq4se3ZjCLfb9WohPv",
  "key27": "5ZaFxWTZDmatHLFCe7HyQmsvRmcuUJoL95dGh27EwRoXqbJo57S371SyK6JMEfQoYzHxxZjzDKygWYj4dQDDinPW",
  "key28": "2hUCdjrRBP8huti1ctbAC1CaVoD73Yxb5tTNYTe2L7xjGhoh4tzAUAPPyKadoKPaqJDoZEaboz5A7YXzXjSNKRFa",
  "key29": "237XKMArb34jxvvox2ydG3h613d1NpPzGi2UwVhenGoBotYEFzwYgRtj2aaP7mpjpUHJovsRVy8T3fDjR6K9AFhg",
  "key30": "5uJeJg92cLHXdfH9RxTtKey4p6zprrWEMX34LNHPS8FVwtqwD4gQhmBZy94uRWerbi54RvPd6Csq2gqK2xiJLxk8",
  "key31": "5ys8y1Lx9etpdouWW3nGznw7oT7Ex5H33BsGRtQDpHcwih1wG8AqGDCXvVpccHnkUF6DQPJo94fap7LX2Znwn4q2",
  "key32": "2JcKp2j7VpxEzydnJSkcnT7r4YLXF17HExxkFzMPkbrjznqF6rzDbay7yWCob5EForARjUCobg2sEK1MdYTrzi66",
  "key33": "5SdzsAf1J7jgf6EJQd8KhoACUYjUNuM2FUn24ufkDnU1iN9DTsCxtgAh89MqFkPy5tnExwhaxRtfJopt5gFzUjyz",
  "key34": "5wDSQdSKEjJGf3XPaVwris9WbwhJrp49wrFPJCpfNf5TpKVd1HRZkRBknsT5mpujbYa7HshxDpHpSkkA7T5Ys93E",
  "key35": "2ToTaZB9nQ922Te64fU99Tsmu6tu5bPqB1ASSmv1rSNKMMHKgZGC4hxgFRD9icx5dL3YRuCBN2nyFQ4zFs6b7HaG",
  "key36": "21ZJJdLLc8tmHkqYMEK7uHeTkGSrsiqvdMa2hHaN966S4dAHJxpSDrmozVHSNa7H8AkCRpVWBeRJExSfaBuUTZoq",
  "key37": "2bjndw2ARytjnrRXgqXJfp1NfLQCpVpcP7tefxD4haE7hVycjtGaHA5oqscjFFBLzhbkGRdfnS2zm8whqyWKPExs",
  "key38": "41FSQBHSWa8cE9NdMQJzCA5Gxf2JJtdKtYkZyTPEvBJMubKnybX8cViLfrUNieSdqELXZEqEk2rXiU5cSEVxCKQf",
  "key39": "5nSLDgRwy2AvzkWCKNpvrUUS1QhHUaxEhbAK7EmzuH7wY8YHNrpRdsMXNBYFrsDL94PyKdywLsPxfuQDYUheVr6y",
  "key40": "MJJfK8Zejh8vmKztH3Bq2YVtRXSguwzRVKwxEJzRvnUpasE2Enokbosen3zAT6QjTTb36jujtjLPYn8PP9DAvWQ",
  "key41": "geUNm4VaMmo4GTSyhtZeqX5fsVNV1bicJLdNgKqB1p7h3WuYCDxfB3kQxAjuUu11WCWeLcbdsFA26bNzdPPEd2j",
  "key42": "4LMJC571cZJZTp8Yki3KyCsYBptFZxZTvUWDku1Wz4yAFQRoRinsY2dNwtYSZ1JrdtqKLK6eYpuiCGxhxP9S6Ns9",
  "key43": "3hyTFAc6wfmynwcFJRMHaCuMEJGgfbywtRgaoKJPAb2ArTJjP5mNKhBHG7ayGYkD8htutBa321gu5WSHWvZtssov"
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
