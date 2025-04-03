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
    "Ur5JgK5SE2j9MibNvxikMXhg7Au5SNpwvVwC1qHLnmnjoYHF1M2teU5nYKgwn8Y2oWFXZPeMFkGPinDcFXpEqy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uVffsjAkEoLN8FZiHadEHo32Luww1fPbfcZDyxave71fMGCUwrjhppBP24YTcEFpQVD4jFy4N3DKMwxyUnbwVdt",
  "key1": "39Kb4RP5zmr5NvTaQqmXXvbvSNbJ8Q6jD7g4325WmJBsyKEUhPutSAQ6o98HztC6u7zj3QUC7CPhUzJnk4uVkV3x",
  "key2": "5kRg1CzUy5AXcGhR3unZpLeJVyHfHXKQ5bKNpd47joihLEuBudxxXSSuPeto6uCE6iAEXk1m3uUxgCCAVeM2WrsY",
  "key3": "kdLe5sqzajZbY8v5SMaUXZ5FPPkcGGpgKS5r8BPobLo2G43Ri89AMgSRYNTdtotEAYwNMtRqzGgdrAwyXuf9WJk",
  "key4": "4PfZHya13hFxnTETkRVp1HWQaJEGb33n4HkUdghrKjPG2nA8iTcaXicBPa7p2QcSPNfZaSkUnqLHDKeEVWdStVQe",
  "key5": "51JNS55yV7sXy3k3KstgYR8CGafM5J3F5Cek2B7KYQ2spVKFx9ytDp8NJKTDpnr7n44RRfHFkzGN5TTzpRNuLwpk",
  "key6": "4jwwiYd1Lmnw7UTQ1FMoU3BDAf1eoxr7Dudbid4AQr9UYspnnaCKKWB2kAQWmgEeSzfnyLjcM4nYcqTTUXNGvm3o",
  "key7": "4UZ4QZTYDLCzvy6Ed6fZ1Y15hhLQxxxdEqbAXUPQXjr6Kp1AkNReyUEUKbGqgX1HfCR7DUa9j5MEUFe2PUbPCDcu",
  "key8": "5GHWGDwAZNLFEwJ25TtFnwtJyoD74Ph6tMMS4vQ36z8kL7zw1G1A3wWAE1DzBR6v4GMkxW9Q3Y6LvMJekyXoBYHB",
  "key9": "2BqaBF5fyd31tQBxVBB6PMREP6H1pQ8DXmEnwSaW7qtsyKMDZ7RqTr2Kfsy2wrdY8TAh8KXCntCMb6pKmD1eJzFs",
  "key10": "5GHGgxms2xWi5SNRNzuWtdXy2JA5jE8hHSjSdaqsWtEMwLXgvvSnM3akeoHcoTxmRdBPNNakwLzm2mHEX43Juhgh",
  "key11": "4wKHYrEw6YfnSJdgn4f8Fr4p7X6oCQ8aNLFhTUTic35By8DcvyVMYm5TfQd9bsDhZrh1Q96aLe5pqj3a7xpdMRpG",
  "key12": "39XpyG7xEkD7pWEJPEZz6tuYLDss5C7XJqGyVdzTxjbSuHEB7VS6wfcLa6yWCwAKMx7zsk1oq8PF6XsW81WbSLf1",
  "key13": "tXPXaNvvp1LSpfPfbyWxm2H8vwM3FxsgvgM8hdvc8wv8XKm5qqwXEnfPK6efMtBxdGi55RNkWeupbZce73A9wHg",
  "key14": "5zgAbnPdf8b1Zw19LXUqX8aoSuZpasUV24Xzfr9iXjzZBwhTb48C6545dxbMrbZX6EdLBLrHrrNdgXLrNGiX1RPN",
  "key15": "4F461ADhyqL8q1DLupq1RDf3W7LoWeKxNDWWnf49epuCE547Xx6NvKKeEH6oUTsX1QtSykRSxEnB92EHpQWtiKib",
  "key16": "3t2Kitt6FfvjezokutRUnQoVA31fQYtph1jRCFQ3N3gnLL7NiSvPc1ATdMq5zH5YpiH5aFcD8ktPhS71d3R2SXVP",
  "key17": "4VicBHy28Tsz9KkjgfwHsYzZxwYznvNWRGeProSPibjYkWSf32RpNbtDYpjwtiXph7A3JRrEwUngoCgUDmWDeQzD",
  "key18": "5H3jui1yG5cov3CQpQg9AdjTxn7vWcwWERpwUUPtoX3k9ETk56MkwtZ84n7VhHPTHzh193Vh2EnAUbwR7g44G6w2",
  "key19": "46HoD74g7ApoJkF5TGcXCdAW4Trg3RmqAgzxRZeQ5N1JMqy3nvL8PGgbWbKj7pYwcBVkmGqUaxEDtDKqT8gGSJvV",
  "key20": "2c8DWfrQ1NPH3HvtfHhgaAtZg4J1atg5eYbwPKxACgEeydLcwXnDJgu6Vif3EGVp7w3XyfZckgB8r45uNsk3fEmC",
  "key21": "uytyy9SFjWYWvYTjFdSKruMDRe8QXUUZ627mDjzudV61rCZoCYyQkaGcZtqAvw1f7cQLs22TQQWwm4KHiGEFHNb",
  "key22": "4w32LXATDESepYZEG2ENgZchzGJGTFZf3ecxvf22CnBLngB7QmN3EPy1g9jDGS1LdK79eciCTnVw1pmBCqeJEZs6",
  "key23": "2UCriWwsW4wJipqzBNXVSU33gyQtggRFAdXYp3NiXtBYYcmS1J3XvxmgLK5Qb2ztkM81HLbWKzLy2AAfMaLeZNt3",
  "key24": "3nVt6e6RTDYhfyoH4fsLq9tSCHCdWtKbJHpsGn3FtBAHZQ23qH1sdUvF4y3uue7vVarEbW9shcDkGsiFaHA6nJnp",
  "key25": "2TPAgpLrwrHjDhuG9Wnf5sy9tie3MhYMgwiVdCQFfKQdyxbf9n9PjAdtUdD1PRE981YVKXw8hzmvfsK6DKmKQiuZ",
  "key26": "2c9L8SLUtFrtrFWxuvgRjupWfboBDkQRbrbaZNrrTZ1JsrY6Dn2koCzT14yjKqLLSjkh4vAr4ETVpD73xagKkWJ5",
  "key27": "4DpgxKsKFFZH79NgkdiKNxz9V9wUUXZYFifdhEkrxaaSPzB79KGfrUhprcZyFnzt83oSEFhGUdYJqCZjKztsEbjh",
  "key28": "2wvnpqjYFpV5RewAwZWNkFhxPpKCbFAD7iorKB1VmgZ6U83UXgTVooaeSxZKzaV8TxJNKDeaLHMufqvBfXeeMMvY",
  "key29": "5PqWb91esukQwfY95rErGvCz9fj34MquuXuRzffQT9kFQXFiEcuAU5g6mYvdAX6jYgrpXFYiSwfdwqavLGUHsDwA",
  "key30": "2Avj9rzcSzfkngnc91xLctJEe5Li1FUuvianKtsrt6vodmEuRdZV6UGEAWxaa2cKQjwRGogyKmNmWSfupaxqHqnN",
  "key31": "2n5dU1jFL7KwcypqrXHCYsnW4nnvdmRwQXnL2FfR97WqGGv9JMvG4sPiqz6kXD3Q7YFmhpeZrA7w9x1hyeeCy35a",
  "key32": "3iTUqK28wSviWBtE7mcD6NiBH48Kfpy4KSqk8cK6H2tE2RQPXmUj57ArXgYy1is33GhDRbkjLNN4vqjw2iKS4RbZ",
  "key33": "35gyjgEErSjxypHCduzvcTxJyGCrdphiGxTLZUivVraaz7eXryTZtMK2raB4o8EzugkLRfGGizancLLoF7iREyq3",
  "key34": "55P8mSbQ9Eq3rGTj5xHVkBisBqR9GRCNxk7nXKU8rTwRH19Jq4d3KWNocZMmvGtuPjh7s8v6AHoLzgZPcVHvNHQu",
  "key35": "4QSngNe2VqyC8XSbkYRbyRVw29u1dfgMszUa6wKV8gm4UTqMeEcPp9ZpCUhttrjXT5z3mUuRiJBvmPWiUZxWvtFz",
  "key36": "tfH3Qn6EYjDQn46h3P8fmtQnZjrYeK5LHCCADQAHm91S5YPGephiKBpuwWiXqCXxrriBPach2j4UjsBhZmtNEqL",
  "key37": "4oy132vWA8TYZ3rtVhNWMqebhDhuEvn4Fxbyu3Zg665bhWdgJjsJPZvow11jJAQPV8nc3ywkyzV6yxS7pp6TRUwW",
  "key38": "3QD2pXrTArB5fS3zhKdVvAbTpPSt6B4ihuRCUY5pu8x67f8ioVsPZj5zRi4CjLmsoBB1AX143Bqf3XbyxNB5FRrp",
  "key39": "2UMYqgEtvErTvNhHkDxcrgKm2thGN6aQ8fR1tWpa7w8pKYETu4SkrzkcNJHc7FShPfVdSu2rB36rRopVnVPbyN6n",
  "key40": "3pc2XgRuQGyqYmYShf4NZD26eG1Ehbr1XZARQSyLsgu1XwuJGtCHFo41ZCT8Stugmj3hUyA32EXWFSpt8GnaaK8L",
  "key41": "59rswBP5c3hsbhTjgsq3R51n9pxtTYgx8uDK5vkk7AVYAkjXznVQ39VSuF9UiPX5ZYJBF4Ro73xJkydWYr8cpCzi",
  "key42": "aJYr4zZk34ptSyporaJUtWcAe35Nr4hzauTf7L47WaWA7yxQQNB6tz2X52EHJGwPYKDggipLne8upzhDNgdwB7m",
  "key43": "2Kv8sBm9kXbGdY4Ekpw4JpsVPfCxjHAVbpkWik39TRWsEgEMhiJk3TK6rQ3VAL8PE6u7t6J7Mvkagovxv4Bc1wUN",
  "key44": "2KSBDgg5tDdeTM2mxSeUcvXT3EcQi9GPo86D6vkHTxNmpMefgQMkQbu5bfpPcwPRxxXbzUH8UpuSU11fApZLjBxe",
  "key45": "67r5vFkhBgnpPftPnvZ853Cpe9fLtsFfJwvmBterHckGT1N8xDM2Rw4UisAeyar7bAFCFjTy7p6EhRktpkTQqp3X"
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
