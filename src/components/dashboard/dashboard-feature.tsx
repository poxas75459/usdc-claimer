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
    "31fr8T8qfQcEZcAucn3AnPbE4qLhNyjfWeUafsnrrpRZg5JDMKb6LTsjkFxFmzuiVNMNsUqfKCYYv1VtVWW5qRP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "326NnRgpTJv3EG7x73VzQtWb3GaRhptj9EBJVuVonmtYFo6DSQN25YwUPY3MqpwRcBRfMKpdvqW12kD7Q74Jegnr",
  "key1": "yDcdtwzE6gB8PoQAr3fhDL6zb6HLTCfV5K8JJAC82rGuAXSrPQ2F9o135kuR6PVpaHL2uJfDfdBrUJSKjjQQBbe",
  "key2": "4w41KcragCELsvUSpHxatT3hua7Mt6TpFvwRf17bFRjafsjJfUbBi2h82HXFwr9TJ1joULC2uxHZ8EibRTed6NEC",
  "key3": "4UkQdf767RAQMDVn6XwbRpZSLTXcs5XGVBi8AMy67iQ5drUX8jqZH6q4FxE8mJvF23UyhC4VNBnmhH9kfzohHXz6",
  "key4": "43G8Vf5UQZ21oQbFHkpcCsNZrBR5WfpknBp7UvaRzhxMtpHXT6bQnbBwykRGdzv7vscVLzBhPMmxEXx4osB17XJL",
  "key5": "2cRAqsPKceoGPKn4F8WHW6JjaFiidqsoHXDpSp8w9nGFZhE1YH4A5hqEzkDcbw63LdsYDzgLp4fWS8RNbtA9Wqs9",
  "key6": "rWxXJmEM5F8PZLen3V6XQkZSVABFT2ddmZwou63mMKU1Mw27cHAmySsEFwcuryMdrmq41hWWSE4jf1zgR6qMW1H",
  "key7": "sXjVsuFmFvMWvK6ZUh7pXiyhXwwGBkyn8iJRKvgJc3FmYKQT5dCuA8v5Lj3caZ5ACBAAGqx4KFKVur5WhwhCJkM",
  "key8": "3HvFhVXPNypoFzTiRmazn3WWwRr6F2sJZ2kTV8e8hjWLNZN2mnocdwGqjunwqNf88YmCibxqYrxs5QvXqUJLKFqQ",
  "key9": "2Y2gDuS4nHAysX6wFB22tudTKY4gqZdeo1d3Gt8MAFWioURpnr98YJDHBHzTXwuv3wMjeXRTw1pCYwCL1Ug8DvvK",
  "key10": "2xjrCwWmcSYrx7j3HHXzZnwwTkMpS115hNkgVgbAD3scPGPVKXu2SD19whSBA7BTfysehCptGsX3qfiXMnv3e3WM",
  "key11": "3CYxyrNQe6YbKuRmo4SjSjDJUK858TNUMqXAun4h452rJD3WcCaYaciteMjkE8bxUo2nqDWR35wUC5DDYtcyYgaZ",
  "key12": "2tAkNcdMBvkiZ8AmKct9oTnzd9gjKkcQHJfDHvfXZ11EoZUwZJykFboeUJQMP3uyxWh77CQE37aCxExpKqEZmow4",
  "key13": "3HZnT2mKjViM2xrk2RDzzhRtxo56dqZhtrzz3DaHmGUde3WibwDTiTtMS1CLcPSRp5p1fi2zQm6p3FKco3bNNykN",
  "key14": "5JbA49MQfhVM6FRhmtyUv4iCbbpSTuvCbaLay3DqXC3cJEv37jTEbmDDZkx2esPEMc25bNWERVEQQWV4K1dbqoAZ",
  "key15": "2hPfbBysKMWjrMQ9ZBNHjH8PZFy5r2JzaURwoQEZV5QAK3XXABtnZr6zyZmKiddK9XW27LQiNWbyXS9zJFt8vMTm",
  "key16": "nGULA21AVkmM3uS1bihmN7LjVubKV3UXYKfoGLdyBJojRd837AwS9KhLHDM4zHVnJyuuh2tDBosY1kM6gQz3gZX",
  "key17": "4VH6kLN1KYaxWjbuTTapSG2cPtcEwj8b64YhfBbP4rUqG9s4Btn8n76t8Y8WLYYHwi7ZRbW1aHqXTokyxPeMaDFQ",
  "key18": "3hBUFYGesnAipnHJJERwCCpnD8gtURWtTy7vQ86f3B2UDDEYH71EEfdFNe4vZHfaoAeD5wbkJxLjBXKq6ktMsFv",
  "key19": "4LHNSUSzawJUwpiEchmPAvJxLRa3yA4DjHgEHtwKCMAduPP7bDTBwJ96ZyGuBseYxUUGYySaodagpPs9otaSyPZe",
  "key20": "4zBNqxgk9w5ffbx6enxt4iVAKr5ioWy42uGfqAdcnvC8GUnLAM7XHYsAi1iWtZswGuBevLihuiJgnGj8p1eV9RjU",
  "key21": "2MDxtJgEy7moLTwDE1GeHgUtX6JvAwWMmTzkxHMEJVCErpzksugabP7CYSW1zrAu4xan74d773aA1v5BTMx8zwj8",
  "key22": "3BkNKAiSj56ZvjqNUvd8cY3WFmTxjr3eDvepuyje3mfpGLRJVArmyjrX5uuYTQbGejJ2kJipY1h4FKRoFqMtHJcM",
  "key23": "3NMy9byGyPZY11886qcMpUaxdYPn8TQ4hUZw6FyVuq2Pb3hF5KKeFpntoEKw72S7c8e7U598BdYTpKXP1iM9Frpg",
  "key24": "5djLKUfvAgMGXnuWni4aMt4Quvtx9DYTCdqX7GwfXWCqZUjFZBEX9v41EPT83jado8ZHwLRdxqc6aHxeFAqUrhyn",
  "key25": "e4cnJEDRYBkwmebFQnfWLuPdgJJfwFFWPsYFJUMpEALZvM9JakbxHXhGQJD5tdsY8MqnEHLaga2gSPPoz3QLWaL",
  "key26": "2gCPt9z8CQ6tzKmrfn48wrKQVqrTevJJoVSBeS9cpXR3LEe4LdDbqB7tT4dX74sSpf23hMG4RXnnecQUbWJ9ZoFf",
  "key27": "WfgjS6JPzTf1roiG7ujK289hXJYs4TSuGJcK1vP1HvT5HGrmPyVBUNjjHCjsayP8xNGwcYAW3rv5eMjx1fg6fyH",
  "key28": "2ZMxwzyUaqEK1QxhG5reLvrbmG2Ev3ovTspM8WcRJZHjJWsQ8NKcXDicWzpQvi2xkwhxeqPs9ocpaojKVhhyhD3P",
  "key29": "w6jtCnhfKoVEVnazTrkzEv2QrQAFA3pVwbpJMuboi2LzLrDSAepD6Ao8ex3ZQciNqqbmbkZYVTxUmftPzzkAuvu",
  "key30": "29AfsRwmDHQnXGuSkXbYUFo4yivqa5Ay79d9p2zUqWCNbmAnMgPtAXHLcTd1SwwfEdqcZDhrHsKpcdwtpAxWyHHK",
  "key31": "JuknBNJ1YAZcNLpER6GEk7TtbjnwkyK8T2LgT9E5Zcj1tjkMMabwzveUkQw7o8XAYBAcYr88DMtJgCvjDUWiV8A",
  "key32": "66AmukcknTZW31tWTuqTz4LguZcHxxT9GJdqwT9Pe3oGLu5jTAo7RryTdu9jwj4DF5P5shWWbrojXVtmYXfc7yFF",
  "key33": "4dVbYqi5FCduFzF2V5XdPzeHRi6BWpYkpfG7LuQpktYpPzj3gxypkW9Q82M7aYCnccFeHYFGiKzF3SMYGXupGAVW",
  "key34": "5mRUP86wZTsYuKMVAprwAQcB7kX6CnLHjVrkz1FsRhpLPCeHikyZvqW5TAvR3EytD5ZW44KoDYKpeT3ZNupEsdHv",
  "key35": "4DXDnsgG3dkjTYRnXuNUZAsCt843Lywi7vGPiNNu1TRYDiNYqgewAsz79GyAFP9T6tj8XGCKQt7y1qhNQiXEHJ5k",
  "key36": "2R4NsCXis6g8vpitQFMx92fAQVxRqctDwXsAX2KjtJfzpAz14H1RAXAFbPeHpjWCKC6gJhnitpwk1wLMd9DXqi59",
  "key37": "3jW2aBKcWzKBPvhfJRrx8zSX9qCNWzL2xvG9W4mUXf7drqhjgRdtuM5DXKaVKBnqu7AbBJPejAPr52BvTZrrXwam",
  "key38": "2jqiG1MV2Mk1FDuUcrWWd7mPx5sv2QCvCU2hnprsWyk3XY59QBEnjEnptAfzJ87ynED775pxPRQCUc57XKmdpBjz",
  "key39": "3ATGML4nv1uLKJnk49YU5PnqBDcBs8cXaHZ7oUTMCGNu9vTNPywtwpzGHEK9r6df3hae92NpM7m8QzVM4gzhkzTP",
  "key40": "Jpo7V7FVGhHMy3TRhZy6MDHkWq1h2trguEFvSJ8WXcYciaBC9EtSgCWYRctJYHqHuEhsLCpWmMKvCxe5rGEGZ12",
  "key41": "5yZgej2xmrEs5r8nCBPnTNihGf5LkoMZQQrCwAQtLhwLuT2BVZTfjVdJqMQM17FmJ5KSrW4TrVQvaV48NSSDvrKS",
  "key42": "4ucDR3QkjH6QXctZak9RLfqNacTgaWyW8xASHTcVTyKZ5QTQSVK1oQUGXHxbreXZCRurbu8dbpchYmCsxUYow5RE"
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
