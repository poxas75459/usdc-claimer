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
    "3TKQ11RcQbHNFSTToALbs48jXH9sP1rRM1zVzvkkECWtun7erMBs7adqxqdyEtaDL6Ukbt7wwLPj6BLx4e62KSMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BVPekwDwrHGCBVtQFT8mvfVUzp4U8bbzhRKdgavRs1aRzYPyyqEVbmSCCpCUibFWnCvkkcB5XwLwhYA3sA1WLMb",
  "key1": "eVHV2Erc2ZowApqgewYJ3ZEsqkE7K1e2yQYocQMkyi4rVL3DrmxgZFP7CbG7tyRWEHTujSqcAq3wXVwvCtnVbJE",
  "key2": "3qXVc4yLedXaUsNitL7mWdyRc8gH9ytXjk5RDVULVsyFPYQmdQguc6oDToapCebBrmuK3oE6c7T3Qct7naj5RUBM",
  "key3": "2ssbzLcBfhLEEPgC6ZrqYPmN7bd14jthXgJQEWgz7pE1fGuVLT55ceSXYi3KiUxEYG8D7437VrACDwX5qRpaYCBp",
  "key4": "5ZYVf3x5WnnCY9yC83APFXJcGDcXRZNUHCf7fEdsnBQDC5dz6ZQNgQJbKvCQQbWkR8xEzxnCfcqNwhqkwDRMf8fh",
  "key5": "3dvSRKXnRMSPDkyrLjDNpbfGkZrvCgHccVMTC21GWqhVnzuMmrTGcCjrZu2KdM62ManZ3666YAoFDKZ135gj9yGz",
  "key6": "4FkgaWdDna19XnrnoX4apkmRnnBhkmD6ui5Y61R9rzkrqjw5rGJ9FTK2BXda18NvwZuZgTXrSU7AbsoFFa416bhR",
  "key7": "Zmkqk9zH7d9G59FQqMa6CsnBqXdcPBuMhtxXguzQPLo8GSRmi4BSQxBA54LyqPRxnkKXwBF6t6Gp3TApNhWXoA2",
  "key8": "52zrvC97PKPmcjkhPhPom2yPHkoTf6eBytAdLrnUrHiRJfg4m8g24mEXD2Zz4MCqwxzU4f1cUgFamGPs5FyFnAp6",
  "key9": "3qV6eTLr16FP1DzE5Ac3hq8iH3nr3g98kBVxdNivSZb4kSXXiFVqKoUEWuLa3si4froTjDza1ZAmTVAtxKu6w3mK",
  "key10": "27R411bXXMqqkZv3hrQXLvyzN4gzLKvAgRNrVkeuy3oaVYz74Xs52y2gtuBVTgapMxZr3aR1aoERvTfFVmXqEBwV",
  "key11": "53AGBk4x9UagDMjx5NmDmqfNrPMgyqCPELVqSX9mPg95jY7zKZYxum524f4Sh23z4aP9PnaHkgXgPXhsGoVnTkCJ",
  "key12": "4jCXMLgTZjKFr3gHr5PU3RV8D3ErLBru77xBPwpgDxkc3tfhoouh9vcXwJ1ihYCrmaKp8iZta5yshySL9NPW6wX3",
  "key13": "2yYUpSJXvQZ4YJnTQKzufaFeu7UdEkfLv54fLTz3GA4Nu5eyw1aUYwfKJ14JRJJQaTfDtQjjWBzqHTtAWx3VYU39",
  "key14": "5CGRWJnhU4YTRyX7945ES8FEfiNq9gCAkqc69MW3U1Z6TpXsNmsEmG52SfTeVXtFunSi9wijUocdD5wGoR2XAa4R",
  "key15": "3ZvAi7vVPjA8QnhxucqGL3ysU1i4nnKfKpRB5HX2eAprRNRQsoMzMb91a6TMEStBc9NoTzAwUfjosiUW9hX8BuJ7",
  "key16": "9pjXcDdiNCdLoJmAacr6mjwqmeSi7eaHntLbgCGbGVUTJubNQQSpYSVT4dZGGTzieynft54SB8QuVwpqGpS5hPo",
  "key17": "5bV7CGFPWB2GGNUTy4NknS7f4boLY2qqahpy8NGQsHd8WgNBqCFUkDksGb8qsR2bB3QuQe7fMmAZcdeVqeAwcM9u",
  "key18": "4FPqDFo8JYGCwuUyZW9tLsLrjkzJkVhumzxkLVfH8CdfTs3TYuUV47Bsm5fFaNeauVyuNo5drKCM7o5d6fG1mZ3u",
  "key19": "4Hh5aemzj7CxQNMSB1ri4987XqTntjBDLkeuzYcrn2nC59gz1yvASqhod479JH9dSJXnTUdv9oD9KjdqkUEpeVwH",
  "key20": "3S57HW1W7Sp5cnGDJ8ZkEjdHZUABxFHsWhbQ2cp2GiBR7ZsdhjQYPBQ84WhaN45qx9oVzQBvBgmxeTn51NK6aqc5",
  "key21": "44hC2SKec9NnGAHLALpCNxJdkPAEF9vComZtXYARroU7YArUqTyzKbMxPDvHKQdjHU1Nj8aAaMmqxDZWdSnGpLZi",
  "key22": "3J2LfXTCLbfDvg5rKkxj2AjknefxKaFjhFBYoAYZ99VpVVi4XX7b4k2umsBfm6fnvAY4dyAXRKU22CQExsESBbPh",
  "key23": "4ieNDRkGDyVfC7RTU72qpH2gHXZJfHszSwY1zqbbeP4r66w1Zw8LFPBPuCtpAHF34nrn1Q153HURYha5HDiY7RrC",
  "key24": "2koHWuBF7dLJf2F1H6WesEN7d7iUEUwEEUduWavtU71NNqRTBw1gusHUdagdu3NeJAfc9SiuCMDtmzv3VNCW2byn",
  "key25": "65wVSDoyjPfWY4BeRT1P12tKR5D3dMkfd3D2nCXbPkSKazmPU3fqHzpMdKXdLBu4bidiEtWEfWwtq242TAkGLKQb",
  "key26": "4nPjgUf18g5NN9wEkwkkG9ZEt9YGMthyTLE87D7WFcXEUP8g8JoAWRPuY1jsrmQoUhEjeKLrpUetGAkKSDww3oie",
  "key27": "5vEy4faD7cD7DGbj8g3wVa4wgroHbu6gqoSxyJ6XpGxqnJtnJLaAdkfcGn72x8jvZaQDsqMmtpogjmPTcvfsrni2",
  "key28": "39r8xjxggASi88XU5637pSt27NQLhfBsxtEXdgt5s1gThzfWdVPGprVPBFuyTyn9GRkdgmv1PsB6rnaLGqnDGfUK",
  "key29": "mYHCGd3B1nR4o963GyMEpWQW3MKWQNCS378WuZtuCNJqfBd49fBNVFg1JAEdihepkYkRAd8VRYMY7rvbKnbugZL",
  "key30": "kMiE2eWHXZWrxxXs9thxYYXP5cDqqC34UyCNXervAGzFrk1S1UFnWS16dZufUWB3GFxp96hv4FsZw9B9vHrC454",
  "key31": "4gY4YMcLUB9JD1zXWfqLKyC4HcwBKR5Xmku5GVQuACuSSaURxaPm6mWFNqtGAiGtriL94VydQQrJbv8cGc44enQ3",
  "key32": "2AnEiBeZWYJbpUmTiKDUZqkW96UhG3JaQbS7GeRtZVHHcyCttWEgcSE1nKeXwLbb8DU9xWXQ1KRKPKVKpEbL4tN9",
  "key33": "5DrXVEJ5a6cPPgBEJ26BH45RYbiw8PzxuQKyB2SVLPSSYe1cueWmWJMvNn8A7aFBUAkbcv8YMJauRpdBAmngfndT",
  "key34": "2wzzqYTq5pJZLjPcdPvZwP3Khzeh2qNMCC6FbB45oSfZkyaVcnC5p6rLezhAMsFUnEkavYJL7sySkFLqpbqJDfEh",
  "key35": "4whxvE6R75VJ4QS29L7DQgsnnRj7eEQodV7N81j5kDYC569AzD9NPZ2QSsBHB5EpyojFM5x5QvoWQUWKUv1eW2Rr",
  "key36": "2poRPyMQGAQzPckBP6FAqTMg1j5yuNWpGsxcBA7QyuoTGQ4DW6ZMBsbuKnvKTYwjCb38mmxh3WEs1PhoLYX4hEUJ",
  "key37": "rH5F9816DMbBZB8F7UNKXy61xL7j56Bou1t64T9ccopaKxrqabde2fDJch142xZ1XasNGMhaJ5Acug12juby1tm",
  "key38": "3rdEypMsed7V5EgoMDiEbdyNtc2d7fxSF2H8mi65NcdN7uXrKViMiGmqhRRQ39YGQHx6dsAah4n5k1Ly5RKVQAEy",
  "key39": "2o6pWLhzax9gzGUq5VHDgRHKuHMknsySRUi1VGWxZbyxZE9zAcs1pFGiMAw1KTZKiExjK77eTXsQpPB4JGGYsK3n",
  "key40": "57nPf8R9CM1kLe1xUV9TbbJ922qnuGgtUbpikHWtnAKoM7SuW9DcCAhfrguN3so2LixvPjQpndbc6VPJW8mgSUKq",
  "key41": "4cXL8xh1cFj7qw58rJKuSHPv1acz5ez64dpgKcV52p34n64fL8F7vQBg3ZZY4MHuXPK2dSwHSj66qqWBRhCCZgC7",
  "key42": "19xjTscfvk9w1RAcmSkupqDhjFsrLsmQiKPBQ2WFLSqLvh2rPzuQtK9Y69aA4RUUQzqN8FkRwCSfHXoVDM7MsqP",
  "key43": "DpggZB2kzPDTiR9Nyvmm9iUuXernJES4ZNQ4mn7MfAsjZ75v6pwaiQmYTgE7BfVZuP9pJogtbuWnAVHb9s9jheb",
  "key44": "2fUwf3KwfyKHrSAfNxFvMBb8XRjPXGMJc9dFKx9LDUXxX2c6MToETu9HnAigGazeoDwGbPJJA2rJmk9RMAsM6UaN",
  "key45": "Nt1oqwfP1WFZe2Xi3izfCnjNoTiWUSSxHj7r5u3c3nfmKNSyFRJ1LKbLqfXSkrwJzYXKGBx34fNcq8qdjKhJh1s",
  "key46": "5kXdHurShQUXjRY8xrWaDLCASYsPTk9SQ4cNLAjbaZA7qjoEcJP4Nwwxxyr3M9pqTDz2RhxPgwLCT1cVZDCUK7Y6"
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
