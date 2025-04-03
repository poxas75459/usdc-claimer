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
    "3duT4RECTVKYiknobUxL4JRjECstKiucNKHmeUQD7VzvcfqF746tkSgsJcPsy9ZDQZU7PAEYMFGtZfyBdfMC6dTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57ts6dhy9BJuBJ3EWtWpX85JTt7VS9pT8S4YT7RqfPJYRGZ3hoAB1ydcSjDbczK2tTb9KxPakChA7SYVEZLo6Kp7",
  "key1": "5iK8e99mxqcF6TuBeduzNt3AMK8tZtH1Ytwosz9Am8RkHStiBdNGSFQykEGGkz31W9QeX4oUC73fyj6UtZgPivUm",
  "key2": "2h131FjDLPXseToECS1zporL6eApsrvigo29KBZHVvccHWmRGsxDPqeFA84kd3VcynRScAF86HUdr1dcWW7WBMaW",
  "key3": "41UqhnqiLvBwzxU7diU4n4i9VYNQbfF447Wiaw1mbFzgL97GWcrmxUbgeNxaBmZbSqrqnvRpt9Fx7QVzYKxgCAeW",
  "key4": "5NcN6YJ53XUfVNmomHkNs1R7XuMUssvDrVwsHwvnc7USUxQ6bjAMrvJyHtaKJK3JawjZWoNvjnxoTfD5ooMn6828",
  "key5": "5rNLkg74het6cre3V3BX3g2QUtYjMztbgscfU8drDEqiNKapzbK1iyxYiQ6ujjU5759bq3gGHbaQxDAhxEADekFn",
  "key6": "J5QhjdTu3L32miNP67AiZ7yTViLgN8uK28HHFgAgxrfTJ5KmbQSFWszb1ABRyADwqboX7ybSy64WJ21gEDh52KX",
  "key7": "4zpDijtY8RGETgQ4PtstHSb3QuBHyFgiTRATEQ3tR8GuFVKvsr46RSWQFqs4xhX38ZS61Bp48DfZhGX9ywjGGv4F",
  "key8": "3985BSQjKrcg9vMArrtc6NuRoXJx4kDCNqAaxkXC9NYKqy2utW6ncf3piEevHomXKtWiogfuYk9bmTKpGs7AKPUB",
  "key9": "4nzsKw5sutQ6cMsDpMBThkSGP7ZizYxTYSF8oEjz4N3mJCLtHksr2J7mdhuf2B4qzV4t9s5TVnDw6aaZSNCeFsqy",
  "key10": "5SF1ydqWejFabgah9oU6UkyXFAJ69ff3EteMN8m8coLGgmVh18EwhB4NmAj1H19siC1e8c7WGmQbn5EKytb3rLyN",
  "key11": "3ksgtXcmaSYRdUmrXBzGiPUaoDejwaqaeiD7yXEsCsBNAnp51fHN1nd2eKpLbdLb1VHbf8Bmgk4eUCzAVJ2hwsyK",
  "key12": "3h7fq3d9dVdPuf81rFdfN9eQ2MKezXwXEB219AN9ibZRHztFcbK9ZNDTGNVK5pGz4tWdj37No8bp7bjExzNTvS9z",
  "key13": "2H3G85rTyWnrdcgLqknt4HK4nmvhL9AgVf1Nd2mnRZEEXUnq8KubzyM268BeZHTqSpyUyQsXsTD4KeMhgFGUdmgc",
  "key14": "5ZLvn2NJvS4yZTdaDoNCQfdMzaCh2MAgu7u1LsiAp9PJ6ntUceCMoPDr1CozZQgpZjQnsDLvNgVbDCKrTyf9ymsD",
  "key15": "3WAJmGwrBor4q7NPXm6B3C2sG2J4TZR3fWEYiwLwGZiz81GtTkpJgwdXLZdBG2tMM1aVWDUy6PadAhL5PbYy1TGc",
  "key16": "4JgkYCdBnAB41rtuVqrS6Ywj65LVmmsoyzm7xw3CnLeFPD6JCK9i2iECiEcrUKoh2Whdu65QEzgjmwuxC1JDNzPM",
  "key17": "4jVzMfDYZCt665jjyj6ib3XLq8STmoyMeyGVe43adHKHQmYoBVE8CUwSRqHiwJURLNeuGn2ezb1FTJzVdzZcckXi",
  "key18": "4H6jiy6t3oPgLigq8T4Mz9nhwEoL5pT9ePB2CnX8WqKnDVT7BA9Kt7YEtbgaBw8GdeYazmbV6GcfKjfQRW3jYb1T",
  "key19": "B5AJHVcGPhqM9rEEB6nCrP9CdE6sS3qekoVgnhsYrigsAX7xNfwjZdurHpiQkSnstRFgxv5KLeJseCBpiDcvspM",
  "key20": "2KeVajPKPKSaVJFdLjtPoZQp1gVZNTzYCFj6JKPv8kakwRECuvaAnByGqXBkkFaXSytKwRUaW6yfoTL84H86dduu",
  "key21": "36kSKHpzca1QubCXSftLGxNJgk5eZ23rr9aczt5cWbz2pmk9ZtBSnLdqs3Y5mHFnUNX59qH6HknVjna8awLyTfTS",
  "key22": "2gn57EQth8Ej8YKYbQNUxDYsscxaFfBSrNuZdDQTdYM4K8Gc7ExGH2EK6hAmuRwwrg9k1BfhgW6pZqoFUoPhigAD",
  "key23": "2YBWjAo95H2Wfos8BrkAaPRkKjKKY3jBBvdjzurNCYVXr6vTF2tfVdXpBwCCPCFVWx9PswHnnQeLSTpikGNVbRcm",
  "key24": "3qR8kdSgnVCmkAczkRYLYDzDav3V1ogns8RyTA9Qz7PSaJmpAAZ8h3kt4fBGuioLwdkDFJpGAERAVNucmSQoM1td",
  "key25": "5cffKPeY6kGMTeSCQA5FHGC2uWGfAmdmstbQdFp5CAoRh6kmfw3M27a32q78tzG612cQVyFKKLuewsKNGEY21QLQ",
  "key26": "2yhFsVvPuMG28vHd1N3gQNs9aZ7YgQSGix6vTaeRSqBsMjo8WCGNSPiMEjHitL1GMwabSDARjf4BTTWZQg4yfMRF",
  "key27": "24kbwbsLdGDwYdJVydDxd9iGJt3QxzPJue93LtKt1GgD3JBL3TJdCWsV9K91hrH8D3vfs31m2vbFxVXj7NMYHx5b",
  "key28": "GU7vW8eS8XB6hd5An6tKWUEsmSRCjtJBD8dfwjhibLi7NfZNEUbCbZF9TCoz7Kgoxbw386nD5ARJDu4KGoKByM2",
  "key29": "45DA9q3iszEoN4bBUZCfWAcL8FahEFFX8u7oTfBcT5sBPXQvEwvzSHbFahX6EerWqXrQ1QHb597GJXzNUw4Sek6c",
  "key30": "4f1162REN8846FvG2aM7paVNPYAHEFwfBDXahnQjvSHqHwFuEdS65d9wLGknGXV15qHmqHaEbvQ6qXBp7TVyP9Ja",
  "key31": "2n65CCf7TgeUTXpzZmnXuoP8HJJnrGn83ZjqTU2rfyieFfKzcF846vc5gvQboxUegE4ixCsaRkqTKApK1YpYu7o6",
  "key32": "2pbgmVM57aT9meaSrvFuHL1ygFGjc25Wc7dnjHPTei4t2QeBcs7UwrJi9XDgzhmd9p6bJzVvqCTpun9hoG1i8J36",
  "key33": "qMY6c2iVqJqfmBu6JPWNdYPQt5M4NuTgKaaCiHHRz1yA2AeaEzvr51L6aEQj9ic3bytF5HNmLrKq4WsXV9jezhp",
  "key34": "45aUJqNkrWJiiQUrSSvyJC154aEU3zy777vG6iXHjbWsg3F7QwgNAcLwBLxXgUPgYTjsuqGfeHHAjKbNExr9UpnG",
  "key35": "3vCyWJtfTWDYr4dJ4byTz6b3KTVEwoiDPYYtAb2wf9aGwRB19KrKMSBAqvX1JsurKsvNz675GQi1akEo87V6Caxh",
  "key36": "3CA1jnj9W7WsS8a3CqGtyXAt3xqaC4DjRzmpQ2pYqtiKi6qZfLg9EuNgM3Sh6bnvQBq9NJHWgwjGYLf6EKX9s5QN",
  "key37": "4UQwqPUJBB6FevySkhiL2nxJ82gvNkTFLC7T8X1BpBFtBLCKKj7yuESKEiEaSBSC6afo1tR4W2JwnxVGJjnbpcdD",
  "key38": "t7hytU6hFLsiUfo4JoQPX7XhAXJ6wehRGL7E64qaRYWhV5hUS3JZf5fJYiSdxTzpTnR1v8UzgFNyLMEWzVG55mQ",
  "key39": "3X7UxJauj1KpC4YyJkRS7y2rd9sbKVctkpaFMCyhEWHTcgFUAQbb9Hs9wkWepUvf7nFQjuawTePJv7uiA28TTuKS",
  "key40": "4bwGzGh4438ohjJB2rDFfNEoWoheBvFnLMtP7BBxW1NGbndKXpaAAQC7ghYRnoKbZDcyBrrp5hMUMq7RkwDwESEg",
  "key41": "4yzm4fHk2m45V4EBvN121PmCFqaAFtJ5799MjFurqMK8iMe5WqJkxwvEyQanBjedHYV84cZxV88DQUxELSmFdMor",
  "key42": "4S59XmrykgeZY2TrrnfbQQxj7JvggW1YW2tUjXkdBTksiyWr5SZe3RRXh5tGCsVrT249iUpaNXR8bY8DrsB658Re",
  "key43": "5cb1Q6KoTf4ixPmcyDegGA8QcdSNbdUHnbVeQ7CToXJ93pxiXL9ebJwG42JgtY7rhZxix1j5CmDMREAhAr1NZkj1",
  "key44": "3oGwGmf9y9u2GUKsSXPV9T4wisPdFYNs8o6WVsShPM6hcctWi6NSVybCGLZ8unCReDz6Q6zSFVT6bcT2tVph4f4i",
  "key45": "3E1sEUUtPFekE7QtF9HKvfjr37LxExxEiqgiDmVkiVFaQycqLCzwSAWbHgn59n8wGzCniRscaxEuissH4Ytoxvr2",
  "key46": "6368QA947mXW6UKdJhZ4YLcEwiE6o1Jtk2N29fXnEp2ig1UZ8ibV2wqwUay9bYt33HpSRRoeYPzdeGMrLnnK634E",
  "key47": "3BeoGmTE3tjiW1828ZM3LniXEbS7Jzp76ZF9pNbrzAHSBNVYxAQrTZN6jaTHLrVw18KY7Tptw9XyoCek5dnvuGx1"
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
