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
    "4U9aEQqMChWJHMDy91VqUytrgBDQE4Gp1iAegpaAhFzdB64Fn1cfqCoH2YVrE4Tf7Xdov2Tpp6sDYiwi7yz5Fh2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f1erXRxBZrPTaFKbm3aK51EHpbPWEbbMV1j5iHUiM2bS5EgMjAWveb9Gatm3huH1d9GgMRf7VcmoYpgCPbdMT65",
  "key1": "2xPmk86nUH5Rm8KsJTCYc1H7h9qNoKmTRf1LkomzsBpQtC4wLc2Q8PixJ7qqaTyqoqAfnaBeE5zYtvuUttFYRsb6",
  "key2": "auFzK4ACjimRRCTvCvpJTjA1CyLPr1EGRZyS44tqyBmJG7t6Q26grhH2dJwqyUQzgCopUYzKfSGorospn1GJtjJ",
  "key3": "2ETM1c5rK5MaooH3QAViH5rdzt4e48UvFnmVhb7roj8WRkivPceuncBHGSpyzAmN1U3YnbcCJ2pFxDJKrRoKmCMi",
  "key4": "4AjEsGZd4m7TWjnc1bXxfxA9fkuPLsWx5dBdSanF3ArP9YQxsFbav7Hy9CJ1zAmj6uGnD1NU8ppCidyacBLuhRuo",
  "key5": "3S76Lc92mMoo7AaBURQemJJDZ62ZDxR7YYufuUquQhyKRNbQRWyRwhNtc7fwit27fwvkH5EhH3MsGn9mkSmvTaR9",
  "key6": "2AjXQy8aBDsrpbhsKBvNjReX9UbdwevzV2U6XnMM9aLTqCP6ZLnWDyHNsFadTsBBBEqJi6cYg3MdSEA4kyMtTQ1q",
  "key7": "5gZHKV8JZqv1rc1ojvg2babaW3uvc9bh6vuXhsKYHmACyRqhWCxunX9ZAe838CM5aatgMLRhUTJZCX2HQTgEGGhY",
  "key8": "5wvEyPC3pKsyy2VrCsbKTkWzhhGWs3FCy4YpmgLk8hdVEDEFqdBAnFBkofZe6SaznyaXE6zt7nbni6nT73bWHuE9",
  "key9": "5VxU7xppahGXKHYKzk9zHrfNVCzRgCzR42ff11V69rmX7sThjv43uUGP9X1XikEdxvEvE1iZmLv95WGVoL8hCfmM",
  "key10": "2cc5hDpPHu7XGPdHgZZYZuAvnzFzgQdGBq7i3rxoQamcWfzrdeDT8jXvEbKvzM6oZX5YZniQAsLMesjpwuc1pGF",
  "key11": "54JqgC8CwSU4Am3JAYqMd34q9pNdM7teTeiUGKngj16mZsKanR9gMyCSyXQyHrqQwEcE1Rv2WCxYybdi439bE2SK",
  "key12": "FAM5B9t9LD9vKRKECjaVCUBHzAoSwz2Zw7bn6xfepUbXZHUYcEUZ7ZyvhpRZaPqB9mMRs2MFgCPUMCPc8Z4FPzh",
  "key13": "4TnYLAGNe3ch9Rtzu1DM2EBXgAQwZLAhD1bPoybAVwGz1QSfMsoCMHDNSyc8JqeL426zTzvtf5xcyF952jxhomXD",
  "key14": "robkD2hom9bbLPo1b8q7oGUXWbG1kbkjzEpvZzbcoW6QNpCLmiEw1fJNQrPsP9gsNX4UcUkHL5pVsyo4ThTq4Uo",
  "key15": "2MDnRhU8Vk1zjxkdb6KEH2HtqUNgeuTqZTZ16MKj6VEtSoyTvkYNW561fA77qxhkTtWK3eu9eVfy1MQBkZBp8rij",
  "key16": "3PFdGzAU4eTX8p37sJcBUPBX1ZAq51cEn6xYDT2SuMD5TmJaS4BEXXrCgKjTQDLPRaD9h3AZoov5LatMbyKPURVU",
  "key17": "54VCmwEM8zF4uPHfC4f1TEjQUbtGMMSo4Pp5C3US4x4AXJc3s7sFkSNg4QpXHERHZUFrvoEDU39d6TWecAHgJPuT",
  "key18": "2X6dkhLTX4mPC3HVVLvGg8Pj9RWy8ocJHSWBUJ2aaFpV9xBiENHxPxXNExNdEjahvSJV5cAPRhomCSmy84txXbuq",
  "key19": "5M2CYW8pN37v9954Wvvqn6AiPSMkJHRT2FMBpmGeoSuWNgMoq955G9jPkzbTLBWNMvsadXuXbpome1KKrW6wueEq",
  "key20": "4SMzgShhnRvVJwHCsvNt1KTUW9uNbYVTLZHwf3PBRzagZHR9s9amAkzeCGJA3jeEWH3xDpNkm7KQzaz7jPgbd4Ca",
  "key21": "4vyqt8C1cfbLbnanhVYafcWe4hvNpYVovUua98jTtjYyqgkDppctNs1aBYbjgur9cTMdxco5hKGQdBA1HRtQGGtr",
  "key22": "3hyJt42JhA34b5o7eh1bNjzLsThSCNtdJ1DbrpfDzf4BMECjfwYndSJvgHb5aJFEeCM6vqgMnFGMogv5vQSaN7b3",
  "key23": "MLNr61ajojGWq8kKxjg3j5MTNhrjqtQKjM9nWkpycFfriUmvyu3hXcVfnF14LrkdAQHxQTgxPyRUM1JPyCYEsRv",
  "key24": "KKVRGfpQizsCyxutmF9ZuDgSxHdwTGQSTWVD4uiuBJzXbuKKwK3qutdEgpH5eLrgQgvhDKx3FsiXvc8uthac9MY",
  "key25": "2kcGH3WaPGSn2U4AnYvwyYRJQWnzParouXADXxfFSxQEoXdghhvS5xhPZ8rdNXpR5V9dK7DUgfAX3VizLA5zaVrY",
  "key26": "49xH8TU75f47dgiJUruRfgVGv2u1375BwZhKA1Frtaj7qV4yiGtY6UA5KUoXBiyzbNzMyn6KTS9DdXoozXXJ2gwT",
  "key27": "2D5Hb6uc7S8itah5sHbvv4V8KbJ8YDSAEjXuM2a6w3v7MeLiR5to75jdiPfLZgiBYYogK7Y3jeRnXiPw3m5hEfT3",
  "key28": "6TrusDpKnvNNZttrK7jZVaBCXWpM15ucNk9XWtzweVn2issQb1RZQC5Lvn2gju8WfFXeBwDsG3VVhvmkL1TFBSD",
  "key29": "5215ZekcetDpbxfDBDdBwUAJKdVf43dWLBR5SUDX72FyEafWaPdiowSaGKw3kW53PpCoC8P8thTLBkZ1VQx3Fu5q",
  "key30": "2fxGKAxBwoUi7eaZUUe43nsxX1neTtZyGv1hpFkZnG8LCvQtMmytvYKqsXwXycMP4d2jBzfxR957qLXDjT3m2Y4W",
  "key31": "3s7QYf2beZEqPZh1gw48XAyxWhiMT6WuCNo7ocWktvyqTMtQ52vMedJxwKpPPFNkjEgvAfpbm4t6F9uQ6cc1Dvvi",
  "key32": "Hq59qBD5phKKQRzxSQk5ogfsFq6Bfu9cCjMVWkM8ekV3k3pjxkrpevVSLNXnr3VRpLm7ZZ6PiemHk38MJc8XLiF",
  "key33": "4PNGiNga9u5Ua1o589Xn2WhT46PtvmXQsjG4qanBWYhz4SMi6oiyeG5tyuSAtNDDJYKzWaVf5ak8eMxcnFaRBTjW",
  "key34": "33SoT28Wic9jcQQ2HtS3qV9Md2F9TXmqLpjo73wzApQshTHsKGJm7Jh7iPS2NJhBPCtrtzCM3sEtmy9FkY55NuzM",
  "key35": "4rCCFhu3KMDjgj5PZ97meuPbAM8kVqoSz4TQQ92S6TdrAX1ShTwRoafxXov3UuZstfFeG7162dML83QA3GiNiRYQ",
  "key36": "3rc5NJETBFJ3XifKq3dwEes6zx8euCy2CrHyYcaxCJe7Ys9DH7rkLEuhfi9DygrynEBGDyGGuhBgRCGrnXiMAwHz",
  "key37": "5tPTrcXPQt5YfvVSfDjRjjxMz6HG1nPnfmCQgKjzFWg6MU7SynqkXiKHDdRugPu7s77VNKb6a8m27jXHiL6WheB5",
  "key38": "5yMMWMJWs3yhYyYYAYeU2TuGLNYpMvCLfAykurH4hjyK16mXS74GvFvLqbBDswhahz8vJq54uSWVshVUUy1CR8ws",
  "key39": "5SLGtXccUo71uLGnyr3SnxkLbzCFE3DmVUUFMiWYSeJgUvtueckYTxVK6DNamCfuaMrS48Fs9rLEFvWDjSLKwBXz",
  "key40": "4Hf96LMxWdfvnR9yzkf9ZVsTvgnHEnWxEvAXpv2B3MgNeTf9pu5uweRvgXGZg79BezQgNLnvzdzA3VfWwHJaQN4p",
  "key41": "4PZNf2XkZ6wpAz7VoeKrXco7oFzWfSY3ZawuToanSWebKxakaiTQb7JuwyR641mky4pjK6SS3tZXaRKZLrWhP7kY",
  "key42": "45JwoMZstsdc5jXPobSaLFjM9sdbNJADgo9LwM5rTfYF1v21nnsFXtKP3sqnYhnYU5PMipDqnQ5G3ArnXR8xVKhN",
  "key43": "4y236TWAMJMzd7sNMExbRCvYHDtQRoXE6qCofP2ucGTb52rtzHQD3MGKWiAg5hRa8T61d7aGvzpoJxTNmzzU27S1",
  "key44": "yRXxfM1Uy52PR6P2v5v5GjA2McVEFKj3EDCJotnBMZVniC3qnPRUyb3FqnPTnSkgcW2VkmpBJyBeGoJUsAKop3g",
  "key45": "TaVA9QMV7DeAU2yyKQV6buSj6B5hHrPDk5i2aCH1irKDUxn6YQUjEuMmGnY2QDJqE3ESwgysmBLotxsiUh3Pp75",
  "key46": "3UyC1RYjkKU6YxSc7Yfu1bTrexJoGzoAacpQD7RVdzGHf2fGC4pdqDAedb3mdb7mM3q1mtmd91FXwybDzV5Hdzqm",
  "key47": "2SMDDbSJpzyDeXQV1zggjMaHKmH514PvqwDp8H3CsAk365VW7ALeeN5EYQSJivUNv53JqDeHL5D7cPCMi9ptsecF",
  "key48": "2NpVUemZEHEuPB4ykuQpKUy7w1JPwgjUd9rVa7TA7qLSCVVs5BqTXix95UG11N9Mpm8iGDjGkfNVaMGtYSXaDjf5"
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
