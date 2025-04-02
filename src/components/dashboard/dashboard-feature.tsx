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
    "agFtCNHwBindHHGgBG3JbC8MhXc1ZH8gszx6iPiAgj7JSEtvjjJ4We6JmT2apzVqtEtohado8CYWGHwFWPUQLQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PD9WtR4qeFkenfq9qyRC5S6pHfDU8yY3wZfSKfBUgEsJDhzvLtJUgqfZ5vDRDVUUdTXhRZHDox9stK9vjT8cojM",
  "key1": "2xRcBvz19eETNxb1PGLa1jmKGkJ9KE5rzCm8zD5dYy4cLMoKbJuxzyH1TbzRJYFpCR3SAL2Tj374PEMzAcfSFn8F",
  "key2": "3KLxGT25Fd8e5pVMQDSeP1L4yKZ6JPuA2dstNV5XKk8uj8cks72rmMUsPHdpam89GLYWYPyzbaKrKjatEEvo9FM1",
  "key3": "3KaydY7qcE56SQUffWBdxRZzeHTqfPwjbJLjhuVrppEaRTaLhD4Mt3nk1MwsSHKoSMCyZ33HzkV7EuGuLp8wswKm",
  "key4": "49xsVAiwVFqfyJSYtHF5XnG8ng2qohCMePbZ39hoDkBADC1MvQT1MxHJiez78iSvAwtBzfb2pXEUocCohb5SotXZ",
  "key5": "3bbDXL36GnPsbq3BdV4K6GRTmZXfBQx5eqDwWF22EWVbSgMZZDbDdwmJYSfKLiffeCuGuYCh6FBsxm6PA2Nijvs5",
  "key6": "3cJ2UScpZhXHBx24iLgucrwzkgs3Tq2ejFnSM2KtNuVKviBzKy5w1TSDBLQbeL3dtravdh3FFdt6jrQa2Bp29pUv",
  "key7": "39kFjV1BTmakUDRzLBpmRKTKeciD14ieg1wEG1WQtnQYnZhpkoqpvBoRhyZkzf4pht8jBu97wssVDQUbTGrbspR7",
  "key8": "5EigH2VhjJNSBxijZ9NgHB7SVwnshsFfKiS5bsA5cnwU5cV5BKveEfQNdHuSC9fPmuRh6x9DxAAB4VCeTHBgHRFc",
  "key9": "3SQWdH6TvcTxyYagqK6Ny7LD7X2GB5pmRwBrPLiBZucSukoE4dLLEojE4aPwCSVRaoc8mStQSovbVHRNU33Gyx8T",
  "key10": "2eeuMtRrpPBhR5piABcPtNjpzzn2nWX4W455hKSuW7jgwBANQpHN4iUDHDS96h89QbRNsxtYL8Ztda4uKkLgUjMB",
  "key11": "2LLkZgPGdZTQc5ExJChVjb1ZGMFgwUcMjNEdtPLk6X6k75kRF5djUsbZmBRxbFoRZeTktGrXVvN9XZAKzrYahUch",
  "key12": "TbCMTpnLRGWRTZkcxWz1ZHmpZ4hPE7ywtGYe41HxZGF8rSsdCE5DXFyXdNvku24no8vtZBu2C2Cm11NEVFHchGC",
  "key13": "5Kj5oyNAf3qLGQyAqfe8oBhwN5BwfMHYfwCJwfosmmsTUaop9YvUk6dW14rBbLZETwLfvAi5Xb4tff8TsZm9Yma6",
  "key14": "4RzQ1ZPripMZQy8j95QCw5Mft7XaYwJAiBcEqj19Zb8TxxaApSGuzFyoPY86ZpPe53BBLa4ZrW4oEJZ8ZoGuFnHR",
  "key15": "2KYsvGC9zMnubSoYGJvQzB2AkxixJ3tB41Mo7SwVf4gMH7Xt8ED1bC5Z8Ck1P2i8G3ZiMovUAsYyAxzhwEFGFvyJ",
  "key16": "25zoi2hUpW73tDcuLzQWc7XSrUW2sghwLmxmzc95GuaSzTniytxy2K5S6Uc5fXfW3SScHAHiBBATa8k2X1uZnVnV",
  "key17": "bsuwbPshWSj9UihR9d4BeEAH7GgSrvG6VjNDK2dtLmAvjBfp5QKBSnMwysH4GY2VCwe1xMLUvKucnbiHYsvXZ1z",
  "key18": "2BdQQk3HCtrmZ5dYqt7nPMr6qXFbqSSZqAZgZupQcMDZfhig6yLUepXHHyRDFTPnPiCtg7WpKq3PKm3GPeeiZi7X",
  "key19": "LFHeEpAy3Cn1jKx6XdJ3jg35Tncc3BhgQBEsS4XQmXD19E3oDiEt3Uv1o1heKLWPR5Gw7tTWKr4NnDGiHhubwEg",
  "key20": "4fWwnBy8URWo2h8AdGXttqa5Lb8wnp7E6Pa58iEQjYfLLEgsPkYs1xdrpo5cfwwXoTFXbNzVXcC4ySpbRn8Qc59U",
  "key21": "3vK1ofqmy7NcJ5rnyeVKnYQME8VK4s2A9nBhkPqELV1mk5wGEpUVSy3WHcTGYwMn5wedzShUHLJFQrFUivY8sUng",
  "key22": "5DmQFzUBCUkVR2hznEMa1nBNH7dZp6EGCnK5vchX6ft5MthpZEMLAx82ddNQHh2dKYSd6UgXsDkz8Bdm7MJ3gxB1",
  "key23": "3dRdTcBX6UfCbBhkuU6J6BCVboT2Dkw8t7MDBAnXmGdfBJMVTWQo88QDyQpACoPMFFobcHg5WQA7sTfw63BJ7CxZ",
  "key24": "QuCXKZ867ai7HPCV5QmHELcJfL7hEqYG6yhrx6H791aggbcXCjSwUGahzEo4B4Z67FtTxYQkrwfW4STrRM2Xuhr",
  "key25": "4bEYfjZhtb3NpeTmxa43gy8sqqKWBYCzqfvtpvG6ReAvnFWRa6zkT1LV9sSAWfewExToUNMy5c9UxJBZjBFboAyx",
  "key26": "3EusDSbK9BBgC9HBX6GNnDqs4R62Acz8JspL9TVQgWYPnYbev9hHjJxVGmB8wWiSTSMjrJxSou8aM6ruCNLXnEuE",
  "key27": "8EaqR7xPQmu4AyakuypJRHn56VFp4E5ZpnRbdiqWQTJaf7dXWoQGvVDjRyHkyQUjKnqTFu667n7ZwZAP8o1u2Bn",
  "key28": "42UNnzzyTjxnWi6xen89tkHJExQBju9R3bZf5GtuhwANuiiTqcQRkfG4Ka55mQBrskNv3aigbFents1CFpBP5aZv",
  "key29": "2Gm8q4Mcz4jgtqR4nehdHtgDNbBtQ71D9Lnc8vefwmtyMXfvHPNSqT5sfqDNtj6QHjFA1eeUm6rrnoHzn1aZ7QSg",
  "key30": "W1dFbeQWgNzL7Jayot9XpAKWaE4tiuJ5iSLy1Re8mTgqQ4WcTvcWZKbTbb3vWRKri7uTiRpXQw7gTY4D25maWQE",
  "key31": "2vuxLhwVLfDwfHLQzrgFto1dH5tne55biKQ2fkSCt98Sef1nQqNs2b97CdHZNVJkqSfNPFVUgd121Cho35oo4hkM",
  "key32": "AJ4VS7Sqmn9eYdoRCXuqHJjNiFgnQjV63zAmswecSDJSuJHBUZAjbQCUQFWdE7yrgBcz1PuTFhKMMLdM6Hs6RB2",
  "key33": "3mh6KDuTfVoZmbg75e2keZAnHJRHrYM1qLLNoHpQ6F2ccBWnDKkaJk5qwinvKuEGnytNa3kCEaxW4FhPqzP2XyRN",
  "key34": "3aT4AHHJzqgdjKWrsKmYcj33NNX1UbjUqm9TuYo8yFvzxC6tz8qTefiHWNda7YJofxkGnYxc5sJav1akVARWWUKR",
  "key35": "3nChCkYDQaDxE2FDsGKhfQKzzyEKrRpq5UMMGxhDxkKHVwyHFe8zsMZvS72aD8tLEBEziSki7p1LrdTid7X2GgC3",
  "key36": "4UJqGiu1hxATipsRN4TLCBuzrSiV8fv3jguy66Hfr2jpqHjzWosudrbmSkNmHaWpqf9MZU9rbNrsXCAPVXq9Ydck",
  "key37": "4Qxdsx5sYGYXwwEKdDrqsbboQtU5gSWJ1QPiuKaLPyeA1i37AJ7EMPHiBzdseMGxyXfDgEdZbaML4tn3BzQpqSAv"
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
