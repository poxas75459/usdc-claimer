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
    "4n61QRK6ELSswn1NbZMtfSLDAAgvDJwjec6RBZyQYHCz7MBuYGWTTKacJEp9YabwcLxfAVKDDLwugHKmfoni3wbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L4bDodakjnPH2e3LU6paMM4CiGrHu5Ls9Hsyp5pTSqyZ4SCHgX2GuonvSLAL4H6cyV7jKzo9ybaHJLUdxcsPqba",
  "key1": "2txU8N5vbC92C4J7RNgSxqhdTmVzp5bpt572EQ6YgmM9M3RkmZxC1C3CnTdgjYtm2kinp37ui9XTTfYayCBA1shy",
  "key2": "41bnXP7VLd11AXSy45SWQayAcRzzTah9foW6TgiSCqsWioDgohb16Qknvqc7AZoSeoiQZp6MNg1VBvhSZ6bXyfp8",
  "key3": "5QR76ASBCZ6MJ7xm32hfYHjb3JmvXtuVWrD9AymFo1rqwmHzmkCeu2PA2c28RK2hxojz6YoE7xR6NWdUQcCAocWQ",
  "key4": "3UFmZ9Ew1mNJXVNxkQxa7fptyUzwPABY4vUF7J7iknEQUmbNm4T4jRXGBc7XHb6y2uECULkmMi5QhU42HLZzarvw",
  "key5": "3n9QbXdQq2oujxFcGs8tTLeV3SjStitbxZWvPpBADcBxNyzS9XFmc6CMSmQ96zizsMqNbcEsDW2eWtdagwxzLLKt",
  "key6": "2vCAcZTNXdXsZy6vcwymnpvhxGKjcC8vksjsvoi66sTmMuNT4m6MXBAUYGbuWNiiwgJKmaYS3CfoMT1LbZa9RCzm",
  "key7": "5eW5cZcZY24uJfXp33fc8gfknxV3fAaqNCFqLf7HXo1RtnZkg7itEv7qm7ZwEzfozWkn5Q8dpDNDBFtHAsUV8uYT",
  "key8": "2FyZszerjbg4vJ12XcT7NMpbhveGJNsbUGvrLdK6RVx5ZQqCYuwjcaFfNxMtoUAijUgmmTDtcq4RBn182ydzv7wH",
  "key9": "4MzGTZT5VVmMLRZ96YzcoZnjZV6Kf9zrVEyFiFD17DuHqH3bBgucECSFL5Um5sNaTwpzhnw6poPzryfwx66dWhfT",
  "key10": "57QyrdsCoL32yWnsddqzH1S8mnCewXsX4YexiaaE9RvihvtHuiJ7KSwU8kcEk3N6DnfWQ6NFTR2PaURSJvHoPmzw",
  "key11": "2hPe4W5sH7zm5C6AxrDvac8P9JGpCBYJxXAY5SiBsNJFSzP2fSrD9TQdEsjoFZGemfevZTdHTkMHHbRigkQZPp8a",
  "key12": "4R3VdviSTarfMvrHJZu7vrVvoD4mJFNqbkXx6uUbLkGfSkoGvZN2FgGcMRvASviRwnUFJthkZba49yrk2LCdrDat",
  "key13": "2R39eFm7pn72C5sv8UZW5TeQ3mYg7LLgnCsc4gLNUaPQXmVZWNoJLCPhwcts47sSz9ufDmHEmP6bcFJahpi3dPfL",
  "key14": "2GGwv8zLqm8jy4uJmqMa5URiqHZhRU8UMaUQ5UHgve5sAt8D4kxZqbPe1ky2NqVtDpzUirAquKK5PQtwUi4ovrrp",
  "key15": "2k5wBrHMH8L4QXDaWaKmBgAWz834k97G33f1MAaWdCFige8b89XTd2jxFGy61stPQeio7zko5cS9C65zT7Z6Med5",
  "key16": "6VMmYTivjV18wJznecorqUzdXpJHCybdFPKtcFutm1xvtqt7EptuHw7X9uDi2mW2GdmJovSWyJ1N3jqh9RjgwKE",
  "key17": "3vwBCPC8nWXyjKkMYvdJ6RgeJArTLCPN7nqURQc7tndqi8MeawvN49huN7vaVosVwgao3SZgTBX835jMiFiVoQD5",
  "key18": "5i6MLXvuswE585ELLGVphvAFBPXY6UVJXD13J4XyyMy8X9T7ygMyMiU5Hf4QQhqq3N66hBqYJDqT2x52HA64oMnB",
  "key19": "2zwaCerSaBL3KRPPJg7XzMYR5zBjR3huUjb1PRo9QoiqCtixFaw3E3qnB62ZNHmd7mzP6CtVyG9JWg9CUttU6Jeb",
  "key20": "5viPRSTv9oyzMA3Wz27qaUzbDjCZqugiH4ytfcNYrJzmpEmpyGFffztJhdAghYzLMGZSw5mkgDFtPEpciVHpTk4j",
  "key21": "FgY5tCTEd8AkCeYZWowBGRkd6xAR2sbLv9W6TvtGrsNTQTksbZtqY7sQ7axmWwAFRKutLNtweogCkptXBtJSuU6",
  "key22": "2UhgJsGgZ7QVRbG7wAcrsDquznUPiMyKRNqCJWLVi84q6wWDnv17F4BSHcnTd7BTWiG1EUePuT2tLD6WS4JwWCKK",
  "key23": "238Qovs3LArLjieAUyucD9veWiDGnzWWaqmgHuBqaDyNyWSc9GMkWoGa9uHGEZkmMvFuUiFfYPXm1ZdJfCUmSMCH",
  "key24": "ncvjzTPipx11a5Nr2DekX8375iPHuaT4yqcStzbwfUqDHzkm19ge5V4BsURfGPLgFfdaN7wY8cWf1nm8zEg6Dtc",
  "key25": "pjU2LhVKCjcYL1emgDBSnWVqdcQAog21TKUJ1EDai3rYWJ6wbvA4ZCCNaWNdt6xdyWusTBENXdy48kxUmD7RFPx",
  "key26": "3YENkXfL8QeWLR6kr3PCnmsSCWAM9BrD2TXdRxkFwLoKvkGpbxEmX2TSPh6GLy3YtzLWScyvk28cxPdxjV9bUe4n",
  "key27": "5nuRPWzAa7FRwNngDaYRsyT6B14MwKw3kEusmEUgAMKM65YUEBQ8chyEXcqJvfZGNnzpAhaHqWDPso9QD1YuESmw",
  "key28": "5L36xzgno5qGMns7d14e8Pp7USQRuqFE11e8RArnZx7JZvwjsWncdyKNCbx1y6XDvdJTU3417yNS96L8iABSDFqY",
  "key29": "3z1jd9FKT4pU4pvM7GcSo8dJnc6KpDyWk1GgQJCX22hy1nTdyufbMD55vnkphAd3XveXp9Vh2YXavDAm6brq1cTb",
  "key30": "2L4FzYPueUkg9ApkkUB5UbvVs4uED2funRFudWAehWvA8AScQQgQk58bkyN7ekv3ubmFSNDUkWpgRDhinNMFArnw",
  "key31": "5d3NWukxnGBzeZqrShaygLchaj9h6bXdSdjsWfjs2YTUbgRbsMsuP29WwSvj4mYUBofGjvXKioCpkLPdXi7uKeHB",
  "key32": "4bZxgzrHgyfipbrpCm1JxiFoLHr9Ge66yYWLhHgQWWybtbk9u7LEafqdKMADkiwzye4YbU4uaSGH2v11nxkmR5MY",
  "key33": "3dPLkVixnPujqnPZAzwiKb627XULpSrCmdZKiDahN2YdNKq9cijvsvHSNyRckRn3VZhgpTw62FUbyxNkuFrEz9Dw",
  "key34": "hGHAS2SnHDxCE62az1TYsUGTnUPDoDixz9qKU5JqvK7f3KtY9K3rpXYCk5pXx9s3iAPxaYPJ2Yqo1QCQXJ959wd",
  "key35": "tFeTyY7ZLoc2hfuAfxPDvzjou7ZMUEbxVh8ZqYsuKoix3xq3tu1768c1QjeE6Gy7SfftmhUsSKevjjh2S4oMg6z",
  "key36": "4g3qVHdxzDDG22zS7JfQomFB5asstfZstxCGY8couSmkRi88rLwrodQrYQLxN252Gi72p6t7UhCpbzVjV2emqR8t"
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
