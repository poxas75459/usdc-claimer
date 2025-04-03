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
    "2M56VCxsBvzdXpEMNhuf7W8crrcab5ApTQ61TXBNfcYNXyTzEUu3nZ78KDTjtWLALGCFzgUNACGRD8tQEXemtZrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44eVYLWYJ2M5p2cPgpHQG2B12W9UCjtfZLsKt6v6ZbWi4zCuNHVqDwJQsMWE3LQs5BB2Li83mh64XBCHHBfMBvwj",
  "key1": "4hXLdhuwRNnYLkr99yC4Z8RLVkxJqfHT5aFd9YtSwADxz7KywKLBVLbCNkZ43dCEnNkA5Krtjv5MtJPKUW44fgML",
  "key2": "ytTNJroasHZ5saFrbTw7xp2vKx2yxxdPzWAYW8abh8o8yvoWssZBQtsPWoZ3prUq4DLKYo1hR8ZWf9Bu1DZgFSB",
  "key3": "54DvVRYygH1C7hT6yeAcAwDMP4uTt79UuMGjA9jfXqTxBFtkDx9r3Te227JVGuM2rMUVE1F91BZEWEPfhaSJjSSZ",
  "key4": "3sh5STeRhFJpFojLND3DgBcPH3Yd6s73jf3VdYSx3PQQ4jzFda7wShb1ieSeFypXw9ZGNevgzgBjnQGLhR9deeZL",
  "key5": "3LnwXv192P1Y7dJYgggaD6SuEcLsNVU4y8ySfLQj2yE1izr3WhhTaqig6aMsYJPPn2DmHTXTFYfGPsCGfJxmekui",
  "key6": "34jx8BwufBcXuySzL2Qwa5Z9wij5EP7aC6mvzHVpNp61tno8Zc6zJYNGucUfPNsK79JvgVCtsUwg9nBzEwiccfjM",
  "key7": "5Lmi8BLDTDqTrJkTpRACW7gDWFPsXES9kEL7kABJKxQ3V6NjgD5uF6bqLZfo9Vj8m6uGN1HMN6EA7hBHMFWw3Nd4",
  "key8": "ya8U6dw3hsKzt5D3wjubBamaxqiMhEv6XvZdhJ5hHv7HT9qovFNiCGYhetQqMDayzw17rA9mkD4pt2XsFgrgQsT",
  "key9": "3ct1GntwnNBDSkgowwEAM6gnJPcMgACnKgGHWVBTLDoSQLMAui4WoVgZagSH4ortMMbiDGunkF4xpCQCMv6fchSC",
  "key10": "4d5fD9hd8cAGdChtoPhk8Vz1rjqBRbYE3CMSdCwc4z7xxNSQ5ByjSQthviFFaC27aPnU9T3WtXbzGAqheWEe588",
  "key11": "GeGSSpxMv7GC9czEGv716afZTYY2u9rMUeLGxRwwM7xZ1NbHQ7RKgHQdc9YUwDKY3JNGQarMucSFKFzD5S1Hke4",
  "key12": "3w9bmJREqwFwNK18F7K8Femd75cN9YzysfnuBJFMRFwSREr6MUgGqSWuhkeSTqKiqXQcq5ynAgFBmsvFoVLXWUr3",
  "key13": "3qaQsE6sPTUpoHNEfpQ2bJTWqUdW1u5GgAeC8xAoN8DP3gcsHaRidVAMwuyxPuJFFQgtMjf1PkNT1U1WWGVybeaX",
  "key14": "7gkdejzqtBcvKxoKhWW39Qqvxy2pVonDZAkvj6yfuVR6xrFbTeEmpBYTupfnKWMuWLb757yBTfWAz5QJxPP52Ha",
  "key15": "2wY2W6a2b6vCGjbyPbPnfNXeifNCaTKEYiy593JUviHmtXEjrtJatcEsbCrTscEhTFN9PYRAqHYUyjhdjEXryqnA",
  "key16": "2zqQmbFzwueymJMrBLEy2HKtvGoJtxFQL1skr7ThvGu7kREm2F5d1hYTxTJx69XxzfGyp3HKuJ1mu28efmLmBK8a",
  "key17": "5S4KapPxqQgfjutkySmAKAksAgaVA8Nf3k8cpyMMtAs31p9yEDYaZoCvinkzV7HNYN7bwBJovHWruhCpsJiKuPLt",
  "key18": "T5MosUtg5T5vFNKjrdCGoKNPLEb3u1k1RpASpqEprehgf8T6eBrvxUndYzYphbeo1EmnQoFzNDvqtqYuyJ5hody",
  "key19": "3mvZErtuKgtFpRqMWCZmLtjSQu64XRD43GfDREZj6Z8SuerXgS8vmVgFdhZQ9YfByJwN5vxN1CwERNcfpMGQfXYn",
  "key20": "4wnwy1eRUuxnDmKqiDTrhvFMBsqHAUYXN34eLccTxkYEj81FXZtTLqXy18VQCN5GBQRnnsC9oCqALeVeSC7jejH7",
  "key21": "3rmPxzhmZobp2Ji8vTwSjQzWHv5sdnkiZFW1MjRBWspEbnAcd4mV7VUMwgagwfdoHdLtR79nNsBRnndnu6hpndFb",
  "key22": "2DA44BodAoAup9UZwhGDd6Ft9kwPaopDbyRZgF8GicoL4rPqsSRZaVJouyW2NoFi8Pn4bSen3SGzMkJB9Jsq9cRw",
  "key23": "t67JWF6KTWciiev8ZTiJawXwYGZsXsqAhjQofhdAoJmxH7WwkhzP7Hc6vJikGNYBnaQTViNpseGxb8vHobFhVdT",
  "key24": "3ztwm4PPtEY3LMSZ1fNiVyJKRoPaMusPHUc7yJskhu3H35zrM17MErWwE1EaXecCcx2WJhsYJMAdvv3PjcWqPCmW",
  "key25": "4VWbkSWW9ZeWnpXvs5XdCvRcUDQWfsC8n3jQhxjDFbwvb1mMCC1biUSceD1FbtMTFAacejD7e8MXmqNTdL3L3she",
  "key26": "58z6pRzCioXc831YUZL9R75Fh63C4FZ1vXYeJ1F8rfxkbwHqk3vi3iEz29d2HYpz9QveZYGjMVmREJUwaAQC6DJL",
  "key27": "3ko5Q57ADAWpN4asD9DyuMQgspL622EyioWznDsLfAMxXPPcCeAqqPMWVZZbiZJnseYBeWttxkAsmKamxTZvCMm6",
  "key28": "4pPXmKiPoEptJcjQyzyPLNwdtiGFggATMAFwTKSDqGYgNjuYZBZLEdM7j8wSys5FYax9dTUpA4j6gd1JnihE4b9y",
  "key29": "4JmGJ1uMcUwwBRoBG14MHAMYZWMwJccbcdreP76fgjuxzNQqFyMCKJKoWxY7zGuzdU2vsKNqd8Tty9nk5ZrJi1hL",
  "key30": "5vKGAzvsqvRaELFSirSLmamwWG89L7hjxyVekM8bA69MvN324nsoD2gbQinAPZW3PQ5sbRbKo7zxFa1qNtFKVxq9",
  "key31": "Ev2mSDUnMtBq2DFLLM36jhxzMF5vx96p2S6oEuK7m4EtZfvVkXQhSAQvN1FLJPKQWjHvXQ3UugGBdrNahqLkrwS",
  "key32": "WFjwpzqJe11wVgimwjLPbgosBYc2FmatwV466oEG7fo4A5abPY2ErMeKAa9DBmgTR5vsZuvgrQoPQNJ4Vz4KUT3",
  "key33": "36L1r8LdbkNL2o78WmruiYM9Bdm6vKiL1UwUJE7YNnmb5SQRzLkLBz325rGDeVDniNKHSXsesqY7Si8RHZcRWx7t",
  "key34": "3ZPCFvqXKnR3DisG18s5edwNHBxYc2PqzXVg66Z7e1Zf8KaUGx1A72vNoA2cnx4jzrDMphTQfjpufdhA6xXddUCZ",
  "key35": "49rZjMPqvujWvnfLVvudSopH9JgYWGjGJiNcdM4xXcfQhECD6FG9VXrMnVKZ3jttSm1m5bgtJu5Cw1gGXbyiQWeD",
  "key36": "5KVSpXwNZgXZz1gm6TQN1KQQNsxDK26gXmqYigGszv1cuyjs2VjRLGphjtH8qywp4cgK2UErcM8jtKW4yZ55oEU5",
  "key37": "6ih94FLqDMgbWnFdLWToBeEu5fmTzsjcAHg5jWJ4hyDqECDok3H3Cx8XduUKPC3Z9wTempe8dPGc8sMu2JEBatx",
  "key38": "3Vb6DT9BXT6bcGPKMZNhwVthHyYm7Wxb6STEyjdbhC2A3T6buYNsKhRMG5y3kMHXpp311tNm5zDE7HBvB1mqHcce",
  "key39": "5Jm7Vcs6nv8TiYbHMaBgNRiDfD2GbDRPuaZVMHcsN4a3gBhZeeCjFpMBDwyvgTAcz3TK7UVoKJcWBGqzTTPFkKxb",
  "key40": "5WgZB1LwWjoS5v6wqCBfR4ArPgdFozkAL5cuNkgbN4ekhXB9ck8M6bCcwvVnwQaTZjjaLDVoAPDUqXbZciWvxbDP",
  "key41": "2PifWyb1zwb2mzBTNnGBTnVEbZ5Et2GDCC4kKekhKk8UX4DUn4TcTPmFRH2k6XanhrWmU6QiuiV72Dm51Yqs3tYo"
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
