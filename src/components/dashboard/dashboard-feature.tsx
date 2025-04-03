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
    "4HoAUkvMDKEU4T4Gq8hU3b5Q93finsnJRifhRarykPaYcmgQeK81in4dwoq6W4r13YuFh2oQvG3kQ5y9uiZLSiZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oQNZpn6EdSmuVs4drsFp6hE5MZhMFUJZyr4EM83Toq6yEQqP9rkHRqFx4EAoziqqw66rykeQUvsUUNi2wMHabBY",
  "key1": "2A9nBYr2WC34firct44RtNwYpWjPe76VzoFD48pSRjKFUwJGDMiJUDNuLcXWMKqVv3eT675G37aqkWc91BeL7o3W",
  "key2": "5XyfqMPKTcgha575UPR9zZwoC5sJT8bPFa7t4FpgAwSUzRPigsYxVXWxMwBjxkNhi83u3oEh9iPKjWCLdvVuQwNz",
  "key3": "ZbYG5RLVPhqtxaHHTAQrMzSgZzGksG1qWdW3oESLLfoo7U2uySLpuNNfHskMrpSdmY5pM2oqHokEHJsEubLwVAZ",
  "key4": "3wS4YPViBw7LjD8LbPKdefLZ7cZaMo1YAsjHySTEfcTEF1P3uQSmeuo3X2thBbkYgFkEx4ztQZC4HuapmbCymmZX",
  "key5": "tmwbsZCWp5ok9ScJRTzWxZ4U5Q1qgLpeyLnLpec9aHidoY6umcR1dHrwcYHMjEpK6JB46cq1bjwmnepD6iMjRJ9",
  "key6": "5QUvXT6FCTo5KTGbRZeXyfkNhPZeuteHytvaUhytnTc6TgppvvKmErKHwMMbqLzg8zmEpAgf6ScYNPWcbN6Ej7Z3",
  "key7": "3q29TYH2b8XucPiGosnq1HXAyronuzpY7V8pNRmQtXCTsgqXUku6QEKFcZBiU3WHrwXgxP4LfQUPdGhPGFFrsjjr",
  "key8": "utZZGzsffsLfeGXxGDyi69A3nMeFPQNAB3eekv3FCPB2ST5wUg6qLLggJ4GZyyAQE8h4K4cAY5ksRaDLD7iKxfB",
  "key9": "3B4am59tTGrh31G86Htmv3z4px52TFAgzv6EHBW9FQjucmsCn9RJFVkYHf4YWtn6PuemXPWgY2jBbrX3kAwu3kFg",
  "key10": "26gTQJEtuSZTJVhDRPLW1sqzbmzT9xKph6JV7KQKS77kpDtP8Lkj84fZHH2Gk54hVnbQXqW6MrB8wdxCatqDk19J",
  "key11": "YkJ4eUqt8uL2TyjQWoEojzE7VGL6VbxMTCqqcV9hNPDbjnSn9emf12jVDKRXcFVXcZRqSeib6KrZvyjhKudCTmN",
  "key12": "444fbCE6KDSrqFMwR29HefCX6NHnDEsDoXr75snMt5D4Z5bw8AWNn1cygEchWs1LbnCzwxGu2XBSU6CvW8YNhZQv",
  "key13": "4Q1HtRKY1c91JwFYBFwi9qCExsYyovxuDkGHywRZ7BPA8cGQRebBRJKugaK1rmPUjs5XijGBmziNGZ8ZGT3rZc3a",
  "key14": "rtgLHDAju7JMHVEk9NYbywHsCMq8xnaTBdVdjU3zzxCvYDtk1TtGBW86kETtBbRqFCLKiPvUghrjSgtTntQ69JG",
  "key15": "tjTu47YgGpsCwxarSosQrd3De6UhJaA5hQEeesMhPiKxYuBjw17Mb3TgAT69WHdwBAi4ewkqujzmZmT4pUF7mrL",
  "key16": "3mkDLzZkJWF5AS1yxneH6F3XwzGSPam8wrcvpP2xQNh2X9yAUP2WVtT79SfYPPjSRaLCbjfsLVgBrGy8i9xKRasi",
  "key17": "65xKmdZciDNVDDR3hhs7BQ46L9MbneLHYL2yaWY53N5CFQFfdxdZLqHdTbrTV9PqMFZi3ysXvn1xX1xg6igS6upL",
  "key18": "3i2wQrpZMPYyBgPLsqTXrDiid3LjLhA8bC2HF4iUnYUDuJMMRNvdnYg6Hj4UWKVLaVFim6cZrqJV6pvFKPBuiAk7",
  "key19": "cFXxeZUHvn3yuYHv4vYMgxrhQSjzp4KPXaKFnfwt1tRT2h4G2Suyws9ybLHQrYrnz4YUd4kJwRcbsfojng81JV5",
  "key20": "VgdxnQKAh4ERbC3w1fcHUMjpWvbjhddiRqUR9957sY6LFVSGpxEXKQCanM3NdhdFpEVdMTvphdTs7c27mhqbiq6",
  "key21": "2tqrFVnJcQGPNfnPa8jkENzjc8nPa3eEXGfmKdtqCdesYDybxhHgZWMX5Pe6NKuPRdjfUNVpCQCLyCgdrExxEoxT",
  "key22": "5Cps3EcoB37ho3jR8ZmwPP39BCGYKnp59ooyABSbyxv7Wvve4C87ZHhBEnPiCm48GouY7dfBvejXaeo2b2nzWBMr",
  "key23": "5ZXi2b2GfDBP4kMcobsSEzNWVUe7LRQgE8P933HrtxSkK8hp9tsUD1TXZZDbfdgoNopKb9RFrrbEmTqphJXwZryG",
  "key24": "4zUNuskTiY7xz5Buf2gxJk5E5QRP9vvczvUhTQvd77sJtTMR6VLLstGJ5RjVoy5kysJhDcSXokPetwVTSTuXCRK9",
  "key25": "4kW3vQv2yyfoBt36po98vqoh1T6evE1rSLD7FvwVmqQSrEmXGD3SY9ayibdP3jv485bbbLYzgK5owriCFgyuJwUf",
  "key26": "3ZaUkJ3nFUEAnRTQwJ92oJorpDJixJd7fMCMf29QkCUHoUbL5cm39efZwH3Gpqhgxw2VthWP88deq5NVoVqyCzHk",
  "key27": "tHPEPPUDSHcmCD26LhpQBvWs7rqToeX63LVcDzS2BYrWzHoXDZyCyVoakLTfeyg4X7htGoJrbhTQTZeqrEScFyX",
  "key28": "33geVQkDniP4BXgGApYYhtiA63SbNrpni3ffvwLhpgd2sAd4BCk7fuGL2MAzDbRYjZdZwA9Y2xLApDt9Gc48sck6",
  "key29": "1gR2tRiHjRxqnAPP6DERYpm5yun3589AVewRKQZ8CrsoWvrDaNMGHpRdFprEiYRxmwi71tQBYjGJ6Z9PWVeDyUw",
  "key30": "3zYvuEsbDP2JmFcZxWAbRguSxc5J6qSHYXZL8R4dkToX85JeN1tVSNMrqLbq6YaDJVEu7s1vddz2bfLeJh5PyvuU",
  "key31": "2iYcnyf13n7R4PCrjsGDZ7NfrLADhLma1b1FbfxUiUgAFqwEh7u4CKD4k8EWdUpcP48JzSkjjnixjELh63aPafVJ",
  "key32": "22eadJzrJe3LPEP7ymWeeUYvWSCqbgCqvSYcVdGwQ19LvfzxFWLgA2myNCLFcEbXm9EacVqUiE6JbLGMpAHUPJiF",
  "key33": "pisULcHywatutHwp4s4KQc17uEecyfJB9p4mc3LeHKgkLED3s7bSxcg88g1wFb4n8h4WX5wpUDVDgZTHtNEhkJE",
  "key34": "4iAXg7NqTSYmws1KZRoDe25UMzvvwUY4wuKovP6Crq4tohp3c4XTmNuCopnAjpe7PuDE3WPgSLo3XM1A7AnrmnME",
  "key35": "4nKENDgqrYGGjcj1kbbgPfN1SfNpr9DkWHMQNkgnMxi6mdTFWkv8ZL8y6qeoggtkMKp3udN5YNZzCV1rSQqC2Gkj",
  "key36": "2LzicPPZLfH5dW6mm4ND8y2PZ6GFys2re1WyQ6FXhu2iXLfyU4mctHTzKdL2GAUZnyLJZQt1vLhxTD6abXheF4uR",
  "key37": "kG19iFjHV86yuQra257TMHd2F8pYHVekeDVWZSp4LWvfxMH1W82vWhutjD36Q1cnqR6ytLNxnGonR8iUcfQ3bSt",
  "key38": "5yiPPTKatQdynVakmbYEqku9fu4t2gyEEccWQhZZJnh8qQFnxkpqYAukGtD1uEPataBhkMkzXuUrHecyMeQXikjc",
  "key39": "3gL52s8PmgSQ5ghJns8T94WD4rRZ22kHZFMz8aUVQpyK55vwWTMaWdDW8jJCjiP3Mgjha1cc9KCwqMnkeXP3168c",
  "key40": "3QJx3NCfzEvNVzRS41m2QE82eG5YSVyEU6VYMDDWTDmAxjgd7Ppy1RFRC9eLkLrhmfg86pqC4Lcs26KyRWNboC3G",
  "key41": "65g1bKbo84QGDMxRsvPFGtrcZVVLgSQ3uhkjqMJBbQbNXZmZsfadLxRHRagJrGdEXxyVRuvKvy7s71TuiVbvaYcT",
  "key42": "66hZyyVLZYt6pjfd4pAU5brYyB3Tx9GHAaSz5oyMiCWVyn2uETtdxBtLDwN8bGNpwNRiL7D28N5RQXE2fHHmJiG",
  "key43": "2KHjqAExC1XEj7w6hosQjbCNLL9NY1m7fpq7zUGg3Chpp4aG1nhRec4PeXVUFSmZkaZhEeDFCGz4w1BZBJViF9GH",
  "key44": "4vJDbxnFYj24WkUJy64Xie4UDZBNvEbXxUjNLRAjJziWqUWc4ZZDLMCS9dLXgm7ug7TF29VUyHMHnx6hFWrjzvr4",
  "key45": "4quFUc2R2d1tMRoP7MxoqFcPsB9vBQByGKrknRmLMVoRftKw5yC5pqKLDUykHmV8sDMhwDZRvFMCeCK8n2JjZEfT",
  "key46": "7vevxsDr7bHK7EQ4VA55iHgGuUQUAwTwzZeDoZJ4yoodDVQTdmpkrvGJ7suV4Vqe3hNbHpBoJWTesSj7c1H6fjG",
  "key47": "2X37nR3JFnLUqPzGkgJB6xP5iKNAA13pAsmCMh4sDJLwcgYezXPYkapurv5YQ59wPEuBy725caTC5HgKDGki3fZo"
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
