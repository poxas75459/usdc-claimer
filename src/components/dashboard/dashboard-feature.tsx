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
    "4mCKXkNmHKt3XhuZCgwgEM6kxCMMDPz3kxmdoS4aPDt7EFdGWgrSmBJ54RMELFcHqvSuN4Zd9pHvnZBMc5nRSKsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XFgUYoXLQct4yuYjnRZBNZCspvJz8KfQNxg9qsCwQKNSdQaUCxdFKp5gmrUwtYMwDRMAERVib3fDxcPXPYqxPr9",
  "key1": "3Ah7bCH7fuVe5qovM73ETNoR7iexkgUvqs7UEENB7yMEhpusekugb3DoY4RW5fnWb9vmVRfbWdc3yRdpSxPF95jL",
  "key2": "4EsjG6rykTBoKxzSgPvGPHCNVZwGQn5vDeKK4jQ52PG6U93dmUwSHjQJbm8kY4DDfZsPaGUau39EaGFEGZ6c1Xb5",
  "key3": "4aPs59t8E99LEYXnb3ETrkfrLFfnbs1Hqz8TsrXXotYbFmr3amn4XZ7zqpT1FHb2WXNRdxRVxKTdKmzaCaBmdz5T",
  "key4": "3hFxwSaZNWA1Y6vHcHcXVffcQPdfDX4JG1WtMgSwhyDvrLjhAsRxVWNQ1mh5KjfhiTcDH6ADxhbJSC1wBbdJXGa9",
  "key5": "22FRAk3sTmXQCGcYXVnMh3qFYiHpuDhmmpbiMEAEnd9hcTN7fiZyyg17SApryxyYfKS7WiGs7Z9ENnpQNGvWNeDV",
  "key6": "kbkaMDkBzQU5iFsz5vPbMUPQW1q1dc6W6LVhrV4XTbXTPbHhqbePDsunnvwmLL63cHTAigwNB3XpGDJBNzRP79Y",
  "key7": "5cP29KViSiiRsDGK9oQHGpJvqhjs7T3FNwVctCKZcebewArKkAPgHiQ9RKi7T2CCVoUEyqrSzwrXpBtDLcHU4zZr",
  "key8": "4LiH5wwkSPDYDEmoFiVowTVzGRanqhkQswwotvhuEoYrTDKafUbwuHwk64UZtqFbuj7Dcn1KyfVapnKobzAoGdbG",
  "key9": "2mvG6psCZVfcTEZbC4WYrkZkp4oE55dxrzZgmWD1oZALtmhKnR944DnsurATdms7N1ws9kcKcAyMSFpZ38xJaows",
  "key10": "wE8zv2Sh6RKiDXhmrYYEUYikZts1XJcSSuopB57foh4Ai5YhAdNaNf1ErsAiqvMpX1nBDSBGYzT2JXeVd9Hg6k2",
  "key11": "5PNG11Trin4mxdJgiNWdvwefuUXKW4aKC64CitVaWjGHpEyWLSXyR8znnBwNPHAQKgN2bya8J9KUHTEgqydd1TeZ",
  "key12": "59LvQ1eAcjGAGrGA9x82ni7rRgMpEzo2H21qhvFb4ubSEjm1qqKpviwLDNQ19WTXMu89LhD7NELpnxRAaQoyqRBk",
  "key13": "ApwSQABmkBfGazYckRY2FVSKhx1rhjTif2Ua6fAdG9QtewStQ56NrymxXPxSpBK5svjPwQoKbBSbmtQNmuhWmjD",
  "key14": "2ehPJGxody9wXBLpEHvrVzxt3Yc3gUFk1HKTf6bhG8YtpN8bA3ASYkRN21YT8f5y7NLVQvTnmrCzwbvmUiAgbpqN",
  "key15": "2XBjHdh2pTtwjajEao6AFFD5eigwgu8sfw83nEt7GeUv1DV7NyQ7q5rLuxbLvSdeVLotWYTN9dQcsezBetHdGEmV",
  "key16": "4vy1cSgHDY6k7YoxcdLDMbxegNVkpptnbmqp4Z94NuvqFPRLy3DahA5Lrd8Rd49c33fPUou3uFtxrDA5afeNF7bo",
  "key17": "juS1orpR2tLod8VCnBDkJvX8FVKzZzF5RMGAS53S77YuhZDhFWbwsVKHBNB4uxgxa4LaBpvTKf3WLa3Hay3seYr",
  "key18": "3oQ8Ckb3qX5sdvUJbMQLQhNGxYmMU1zbByfR9qPfzkM7R5vvUiJxRonyH5wf9YA45GQMw9MoYR2b1i56Z9fraLTG",
  "key19": "43grZN9HmuKZm1oqLtWpLwNzjQFy6VsY6Na3BugQKqSu7EKmqvwTGG9MP7f1KXH74rqMJfyKqgE9e4iMNZXzKpZt",
  "key20": "2KhxxDsyxHSEKMFf2vQX7TqhxwEmJhUKeMGPWnBJe43neCgQHFbMsCZTLsMNVB5B67jre1aPHqgTB53u16gJu4Pi",
  "key21": "4mLxkDSfmtn3b336SSuxrqFJkMAGzzddgpmvHyMLXyqxDnk9WfVKd5L9er8ZRY6YmrHYgTJFkhCXcrcfNg5RzUvN",
  "key22": "2BjHu7LCX7Z7ARNG5nTFpRJ1hJteUXRGNYhQNxTDZriEMXaDdUC1kyLsVr67NNDwKX84iCzGqrMvDvV7vKiprmeT",
  "key23": "3FPkeWbcnrLTNwtSnYjAakxFTAuiocrsDgGmucr1nptjfJAkSrzY8S6zKLhf4JJQSurBB7uQGmo3QhEjGhuwyqVF",
  "key24": "49X6WULAjuMJHEeV8kDtU9tsWTSjvVdewrmbeZDYQiAUBywQMgJ4X9wthG13uzFCL8TLKUiqH3nqy4wNnJ9EDB4k",
  "key25": "5svuEfyk7R5Uv2VPcZSRqkE4idy2e4qHC5wSn7hGWUeypn46mZB2VafzW7XwQb3ZzrzbiJ3LCzfDcBSSAjtRhs8n",
  "key26": "2RCUaKqcuG4M5QWpb4Pc2FJt86UiT7vCH47pLBSuAzu9gg7wHEbNmRLR12ryoroQAxeSizpMV7LF5FBJ8X7SoZd7",
  "key27": "5sK5UZmtoiYeawokyimh27J9Ko11y2ZSJ6kVR2UhCYHXAeJCxB1w4capeAsobmD2cdNE4wtWgGp43ALW9RE5pRFf",
  "key28": "3BkfZYrvwSJmmuokVwiZTuzFnwbFLSxPM3AmC464CvTSNqfFbvSNduKBHg6n7H612jXCvXRFAxVKqfgCts8hzWhz",
  "key29": "hMEvUJsPBXiVV4fKCiFXYHLD7T21sKxyjgaN7G1jpYJxfQ3AJEaJW7TSrJQhhUnVpQMxhdborzdMsYbLG4Tivwm",
  "key30": "2pcaMen7qUbT7PJXxQdMf1FiaSgbChmJTU3LcC5893avD4TrTTfzGu21898dkettPh38USbLSJZ8v85uvqrcsTYX",
  "key31": "537rFZ81He4xVnFit984SAyoWNgT3ebFXKRv9VhsxdWDEYsbdXBSWAboEu8mynqtQtBSqzcmEpEEYN3TKpJr2NMB",
  "key32": "3R4AWeofCitpXorWVePQPZwiP1dFvJFzmYNt12qkkkg63ZXMbHTwxX9GaTdFouGkayH2BWd5r7GfYWCJYwsMqRhg"
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
