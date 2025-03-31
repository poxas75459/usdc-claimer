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
    "Wfw2gyqcWu7gCkYrEQx5mxRAdkVr2J9CvRrgkNvRyjQw2ZWNdWpWNpha1rkQAUZvttmrCAgzSYFGh8P2nESuhvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66XdrJrdHEwFeMd231wANWV4gGbf24wibmNiL8EPzfy49LfCXnEgyQyqcete5vJLG4ic4Gqz2KCR1W3CEA52zFH9",
  "key1": "3Vmyed6eU3jMqRCb1TEiEvZxR4ni6gVtNSnk9fPCPB4LwAJEawxj1B8F4hgmKbsfSpHgcTTT2aK84Gno8sooyi28",
  "key2": "28H83M8keZ8WABLocxF8GKDSjmUmz7kQMHvwtLYtaSTw5ZArSTBUrkvPg7rmkT3jezf1FJFG1VyNn5Wk9GJyBD1k",
  "key3": "4aYwEDKKqEBFcDtCS1itgH7j12RQmJKNA4Jw8PXXXw7gUYBqKdprGAxKJ2FZBfGvUC2DPzqCiTphVwcW4tDUcox4",
  "key4": "3wLWvqCgPoEHwAHxtSAFoyAnr1q9fkquYHv3kJSqEX44Ja7TqN4rUDKMuzvCNbVNMsgCSo6yPKrqodSrCzfYehyq",
  "key5": "3Fu6em48ZXEmmDfFiZazG9sULbgqzAJF2dU4SjyJKZDKnirNyKY8jHcKTmyS9tcxDHEuLWpXh1DNPhFBtGUWftDJ",
  "key6": "VfkEvhzuCkpoHKUuFLTJzRgfCjXkgGLQq2x6zV22ao2WxTaP3J8qr1DECU2nAKw49ugb2c9yiyH8EDkdRAV8HsE",
  "key7": "3SZxWcYBvPyeJd8jriiJrZZcVQ9cN7W1rCJNHQctmM95iPnoZ1Fa3HYYgrN1pzi6ZMUmPc2cjZiKdhxm8jMkcAKF",
  "key8": "2kdgcgUaejMTVoDxexA6qu2JRyHsgdQ938FuR1zLmZfMPNdZAjwn9xoxsa6wPCjcJSscK1oZscEKG7j9uknUxuRC",
  "key9": "3b2K9ubKKxDz4csh7hWKVybNNZg9fDVUjE4yeqeiHgR2eQg6JDirvH4oMvKRgoMCYK5HpHiaM6pMaNDNP9ctb6xv",
  "key10": "yXYsxfxHpYEMmHzJ9zGxrmMpaFN6VKoo75RB24RDzMAiigYibWZMrkqRRZvJUGNLGAWoiMAQMePmzGFR7qNYFro",
  "key11": "53n7rajRGM2AQGGoHQzCM7CVqDu9tPngjFyWiMsAaPiZJV8UHRFksTMsQfcrUYfa9WAogGWECTUukpjVCKsq72CH",
  "key12": "3ynS14yKirXvTVsjvVdE81vspQyMcSkmPZFihR6eGgoM81xURisytgYxPUMMXfAFVLyg6a4R4TsBrmJ8m9JdHckZ",
  "key13": "5X3QwmjSkuyyu4cXG4qZ253SzPsdu5fYNQxQdo7mryXQRN7CKvkgFqi375aYjWn9hCzT9n3RcwZX4VPSK3ejLXXV",
  "key14": "2XeDrn7hXNDLmS9ddmgLYQL1LjzEa6rg3eQgk2PBnRTLpjtUanEZgyvuvEYazegNTzaQP4xWAGyRVEki4vo6Demn",
  "key15": "3yzicws78nSQFP8q6wmTFin1gSqqp45niPtCzy8JoMh94C55GwEaXebMJtL7Tva6MVeWs5Tksv11KAq9KZikJgVk",
  "key16": "2CAFQj2XtFLBpfDhj7ZXHzgT97Bmq4tapwtkmfzsKyaFxCLZaehZa17HYnsRzqBKinmdmS11J17RmPY6wevRoi1d",
  "key17": "7ucQCwx5XKCbeh3CEyaLuvHtwscd3BFBtjS4pbY42FBaH6NfRapTBgUoBqXz1kp7eRDfYFXhzZW3JZBMQRhfdud",
  "key18": "5QwGTr12MENGcdpwVA6bkVpmQ2xCo2Vy9kAX6g58zXKwVWA7XaeWiuwmVY8NxW7TcYmuxEpNmfNR1E9ZnJxy8LSR",
  "key19": "5a87ERCYFNmPVaMUTcpKhYhJzL4HzM7shy4BJ66jrqcTy6Nr4DH8BvUEZDCaZan8TsBT6yhNBSjVCprdAVvCStkw",
  "key20": "41RGsViyAXmAfAduBwnP4gtqFjkxpqpvdC2WGj2pRocYcWnpjHgBkZp2ytP3ivMXrRc1uNM9oVjGvBKgG6kmwhvn",
  "key21": "2eY3YD9ByanoNRHGzy7rnm3yS7HuetTHXDMKaSLM1fFXGkGJXCx2fQtYeXxRNdT7Zgbaw9uDaRjLUQ8cWBM3BCdr",
  "key22": "7NNWUdV2HTeVk7moxxRG8anso3U9ZQ5udcZK18FgBmLhYrwFSSYGY5P68ef8zC8iyiJpBzAfFguAM8wxfZ6GPCZ",
  "key23": "poRqNtHvs9Y3KkZ3349FjnAwj97VgVTTFmAWhyjvvRP6z741YfLStKjQc5Q8Ad7MNh6SWiwXmsFpaLDE4duyqAt",
  "key24": "4wchkpV8HVs96cwDt143Cj9JVHRDiixvvxpGo8WapLb68GbqcDjcU15yQWLJaN69Fdw48XF2KzuUJAtnVm3dyFyJ",
  "key25": "2P2WxaB9Lw9d4n4W1SyGpK96M7FAk3oY3fpiF3kuoaXVwNUXbhCNfyFADgvRxaF7ih4at7Q6vyxdbFkPED2Ag3zc",
  "key26": "3xvrsTezV6q2B3SSwiRtr9QG6Z5f4aRJb1LFazHmjtButQBYHXCGrLKE6Cumcc3i7x1GxSLoubsmXcumQgPmuFDz",
  "key27": "5JcEJoj1zVifWGkFE7272TNtS9zQfbT6ipazCnEcYVkDz1yhKMdaxicEP7mmqnSVU2kQNpVtNY24CBWFYKmUDaP9",
  "key28": "43Z1G1aQkzB4hZC3vbCcz9Qk9aVT75bPK2bqsArvimvSr4qLQz1FdzeC6D2JMPBSmkTYfKDVSUP6GbR5jBRyHtxM",
  "key29": "4g52vCbvBvVZH46oD9w9dr1yxQ8FaYLmnc6RW9GADMkiwGiqQ7MNxG4N8XGpo6hxTubACXds4ytowrdfsMGuCcTC",
  "key30": "5qLcSx1WKz8xFsWv5A9JQCcuv31XLgGE8yywMhdHLzf6LtnRTdh6efbFfLuYuUXCvJAjy9naYw9JBidHafLgdEVE",
  "key31": "cWvMb4SMKJfpbBhHTXYzujxuTfweFkuFYh4Y3F98K4Nsxb7ZmvRdHuQwof3t9PQcXRcq6kPgeZCmVKyxAhfJe6o",
  "key32": "3Boi6ART8yGYyYMinS1fKSaUqUdxRc11KTFFbkpC2VipjZueFeHwYToTMUwdoWVQ27LEzXx6btXgCV83zGSRY8Eo",
  "key33": "45BL23GTg2jnnJVexyhiX4tZdY5KytwHPUdcEDKiT8JKdqHqgawd9nxWQ9dfiU932LQvU5PoFquYhgqTVz28yraV",
  "key34": "fgntUMNZ55Bf34Wz3VCtDyJCeGKHHWWkvr7eFxr4NfY1wu5HQhCHYuMZUTnPsf9FTKboTRSWhZAY3bDRhG4CwCb",
  "key35": "2gfS2Sht6UzmfLcF5XdA4WG6sN91iie6KsLWTB3WoaAVUt3MzukhQXptr46iKMkRgpEwN4oYYt6fLQpyLHUnsL1U",
  "key36": "5wABPXMwQXzLNw3BYn8nmvm5XDZk2gpRsgkpViFNf2soW9DUukjoKKdZsF7e9aDcN4UV2C1H9WdYLo7WvNM1un1",
  "key37": "5RT8BuVbmuvG5gFMHz6tKnLAEVYEDkA8Virtqzuu55qnoBBSMQEh8TTmTRXQ6pSF2jsjin6s2gW4r8kNZvH1NEhx",
  "key38": "47HzyhQG1aoP3d4AYTPU45syzqN73ZBJ5jbjuXJdve5GiGRSwaeNN7vvz6p1bT8boPt2m4QnQBVQuX9i3wKihZfk",
  "key39": "3AcpmkBQ49v9N14ekqiQEprAKNzE4j8ifjSKa6WCvPfQmkPbS3CXDa5tqniQp8RbfYEo6XSSFJsNyqG5SbBFQmKP",
  "key40": "5LzuzvjZCptnDPsWBvWSrND8uXgP752Vajz7VuTCHF5HAEFAQvYXuTzvz2h7oRiR3wX7X9opx4pR9Mfs5k9qtoaA",
  "key41": "55hq7zTWy3bTGNPMkcyM4zkpE7B39bX9XZi8WFvmPn96hDQLErs8ZWyWK4jvEpgQsvryzaEqQ1UmAdvovzrmJHNd",
  "key42": "6VF2HfKFjUBRS1cW1ExX6GSM41f29jNGwbK8d9gCnvM5uGcztP1Zwbt2RUL8QwpVnGMjPDbk6owdVQkYTjWnBNu",
  "key43": "5ZAbhgetbc8TnuAeGaFr5HHgV5RE9YFSncqSKVLFySN1PqbCrzJGq4s1jCzJDkf2RQBoWVFvaR6c4D5gmULXsRDL",
  "key44": "6789wZPLwMbQd4Gi29QFLyhrTyB9vuTCoRNXeEgu94J8viF92QCu5D6aEep2pGPT4an9q7wDpNgWQBRMxuinRo4J",
  "key45": "5zkzoA49Rsyi37L5jwriPYc646atdGbLPM8DjvMLaGPXJVdYW6YjdY46MMggXnBknMB55KsWujx2ZLjs6qach8M6"
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
