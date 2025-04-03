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
    "nhSFYVmnvcBcQH6327TcuMe9oUfmpBtoaNCgvuEcWqRr522J8zVTbeYso86dRBmyuEipN179f3bfqn6Newpp8ic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b68aYtuyVyajDhGtRWHaTe3YwDGXHUZGFTrKadyEY14E42LCGRw2gSEacj3MEpVVk1XmCyYWzL5B6D7n7oqaPcf",
  "key1": "3FbTSv9YoqXnunQn3EKydLzHR2LVyUJ6BBTEr5dXneBL3MY85fDf9whNXAaFBzTFEJmPxnFCRjVSecgRgWqH44hJ",
  "key2": "4qmV9W8nW7esjWhonhVzAMDqhMVn6uBCtRywds3dMAESQswDdiszNHRErXkiJWRWKaGQTuzr14ffmGNaJkkYUZUd",
  "key3": "3uzsFwaRgQFfBMZn8FpHU2nm5hAV7K1dg1ko4JvebJDXQxcxPnBAhmdfNaTLj4RXnweTQWLJSSMoBkQP188uHKzw",
  "key4": "8zqKrqoKBsQfGH9okktRj8jEviqykqH5zkjjRG6wwLRxw788TFU9deAUSADq8YxjukBH9VgST5aEEnQr3mdTAfp",
  "key5": "3XCEfdA8C2mtkqhZPMFt4wSPFTBXVKKHRSzkLTiLixpFeinDqpkwiau3Xm1AbWvX3DqixVcY1SwufArbwqTohbm",
  "key6": "3vATBZK2rJjvN7DBuJGaTJ45TJYHrKqhmBUremHA6VNN3Ye7vwZcWrP2gobJCcqF5PDkskUxDCddREx1LBeV5SMQ",
  "key7": "61VsUgjczgQaAoEf7mQgLMhPaBY5gUX9ov4FbiNAzCtaUi43EV4rtBxnSKNAq29ewkzyU8sHdZ15FgLPHWW2Sa6y",
  "key8": "2DrYswhWhppB8N494Mcdc8fK57z3N49cXQmGCouay5H42kBc9XtoE6v2RyCAHyihfkKb2fAxoFCtzTqXs2Hhdnmn",
  "key9": "TBHUFs2NKHfzRYajKCWqoUC7xWqBevha4PGZ8mvzD8gd28R2haQFLcv6BMek51jqkDMF8XtFNpkDuuTdV8gpzAL",
  "key10": "2XPWTpiafcnHWu6twAXHVeE2iYBF4wKRzaoKS6cYzXG8z3fKXc3EkAd3kbF8zK2n1J9ZuFxjBfpRQ5WagkcTGQ72",
  "key11": "5dVt2ce8wvVHiNWTpSx6uZxPFRt39KuedcyADTbCqLy5KemjE4aKqYWg9W8rnuj25dwavMH2S2q4BZvFhsL5qRTm",
  "key12": "3iZC3cCbZv6NjkZFssgk5GyacmWoWnUyDhb6848uK3MqnXT4V7jnXLJy5MTMDqNUBbXndqZNnxbQauC3ErherGU9",
  "key13": "2tAdDoqYw2rzTTDtB9gRgpXq1JYqyLLwpKU2ge4QBt7TLo963114esp6NUB3De5jdzYzBnF2svBDEDtGTnkEyEuo",
  "key14": "oTqPM6tfMUgWZ1S5sDYLU71MMsJYkkhhuBYcqfTwmY9bkDPkNkigh2jLjwG7tciPwb4YMRkr2BHi8y6ZfkkeAP5",
  "key15": "3t4R6qyNLa3KReByUeAwCkQM9SM9RLPq8mNa8149UjwdXJ3FuSqKhcr58NoK5XjqH5rzkZDcERN2C665LCXjngiq",
  "key16": "3reiJBL85XMfhDux5fsZpYymsiuD4bw3fXB9nLW68PUqpL5DiVeNjcKtfmoedTEqNvuemgYwJDZejqvfZwgVBLWG",
  "key17": "35fdYfdd1Xtk96LQJkeGz2Vi2Fa7YwFdAr6tdrWc9QU3nemEovevgihQ9S7NTWxzDiiGxNReKzQt8PD2sR8BUQGC",
  "key18": "23WcSN8RCJTH3byc24TovNX9Au9pQz74Z1BcEKodkoWJZLfuR2e9aEZaFgao5Ea57r6GUbKYTEMH3ySdXWh3jR85",
  "key19": "3Pvhxsp4AHGeVtyGwNrxvbztYqCuyUZu2NgdtgcXR2T5WzJ29gLH6krczaQXpgfG2ELDThiWmnoX5NstjrL5jdS4",
  "key20": "2pYMbSQsUMC4WoxaL96ssWo9Az4NWC8tamoEhEN8QPva8sQne8NbV86jixwiqMQJ1X6HBpHorEFcyhWePbLiphbJ",
  "key21": "2aRfwQE8TqfLZhXhL7TcwN5Z91uGM7rvTnDuJsQC3H4CFdb8hHNW5KDEGAqrrj5VXheDP5hLgfUcGcohbUjSuv14",
  "key22": "f6hGhKFc8sQYJwbtdus7QPoidsq7ZXZVrq2SKAiUfrzvCA59Zd6hTn9ucxdffZ65XWTSHHhdzhdAukrRYSQFfz3",
  "key23": "2BoyFu9cVSWZ6GiCUo6nkxgtjXpVnL51PyhwJQbo9nbnZBLkJ2vwcLV2V3WoCV7DKWyjYeX1Pk2rSa8CRurMZFnA",
  "key24": "5MUhY5girzHPbBZtD9ozEYXDqi4ypDjta68aoMs7MeNdtKZUZXzBS9MgtQ8jdodC9YamhQRWWPvUHeaonysyWb7q",
  "key25": "4r31sJBmhnEtHnMaX1qzB8PqZfHAibFrVTSSSgDFHe6tWCNQ3zfaiU3EtDyip9xXFGHdKFjB8LkB4Q9FgYHEasZZ",
  "key26": "2W1bLELooQCWf6WxNottAF3a8rYmMDWm3GcTMypQTZNyE2uDeGuVXoWPE2NBPk2djJsrUiMnk1h5n9kcPDFHoVkz",
  "key27": "5D6BoSy8A6tMYJB2eSjqGsTXHcgyGTw8QrNrSTXQW6hjiJV9sEdbp7ajGCAdbR6CDDx4NgvwsjM7VMExMJioivmc",
  "key28": "KRonpwR5fBTkyea45aop1VYaerSFoz2cWbBAvQHBwuvTtjDJHvbmfzP2Kn4je3X65dKCbBoU3H3JDo3Fd23a8TG",
  "key29": "5xASiFgBsrawYs16uDPZGciMYD2wQ91gX6mTRPMHpeGXdBHeo23Durm1QriLcuWjvBe57WtLziMa3kXF8c2mh65U",
  "key30": "4yf67XXpuyjiwrMtghMbVw1BwWZBLQzc2DjnpU4CUQs5ENkJLFEAhqHw36K6QF6729Urabzr1dHprWYobf1rqvrE",
  "key31": "YJEBzoZth9gDVFouZe4uvd36Y9YckPjjvQ5X777vUoinjsbdG96X5LJzFD4E52XFLCg5o2x1ZaoQrjchx2pqdP9",
  "key32": "4hkbVjUyiSCXtq1sETR67SAWSWaqTi2oyUHRUoRFb7HYsrqHPLFE1JTsDPPiwji5ai7FA8mpyWK3wXXEyQFGydwy",
  "key33": "4u2sAPTjs3RAtARPquXnhSXhSAeCwqRaabssCm2GoUzCCGhGmzFT4xR6CcFwhkfjkvWFpvVCe3cn3t6ZK77GrM8s",
  "key34": "63pXxrXoXA1D5aCpp98id55HRisEu6Aoar3MCF37Z3nuvYa1erBTNUxPxbna9n8z14hNUpEsGViDXLjw8t75vkiV",
  "key35": "679wM72g1mgoXg2xUQQjYZAH8f5YKDZX4fboUhLJP9ANchqTjLmZsi7YbvwwcExTRfDuhkYSamEyQXVM8hgSpBrr",
  "key36": "maJe8ph3XPMDYGe1QiZBZbeDXyJLgFvr8Ad62FbDZZvm2jouAAeGHJY11CkbhebJ75e9c2fXBDWnBCo2nChM9FD",
  "key37": "gecwQ6XPqGM33CSpuRnYbJXPhYAcEkrMqV7Tx2iEuRduX7LGMayNcNY7ekrTqjSnkWqqF9migVnTdWDL2mpu9xq",
  "key38": "5PaCR8np4ENFoq1zmtfDdC6i2s9CEPsZUhF5fHLJ66iU5h7yoTzxPzMGzUGcwWin7jdYWPWzwT5vutcH4vNpkH4c",
  "key39": "2UDBgUGojRW7xfsfwMfDDuac44h6hfdy8MiKg3y35gExeBJwiP4kSpg5qyc18QKKSC9N7ZpQtHzeezuxgFGEmTkC",
  "key40": "2Mtg1YaKdMGXm58Sh7B89TPqSL4FZsbWeAEitrwHtafgSA3iQt8qw3JuEHEBa8ASL91aXBzHMafJWBDLKUSM4ooi",
  "key41": "4US3pNnQiLdji8p6kkRQw74ihmZTeK16RuFLb54ep2JuPY9knKMY354p2BoaGRewgdvEyEkFs8Z85j16qAPEnNbV",
  "key42": "5TuyFL98RJwHKQu7nEZEv6hYXKrEmCT7vxHbHPHguBev7JGwZhpie8b3rCCyZYiALa3s9AGk6qQQQoYrZ3ZY71SN"
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
