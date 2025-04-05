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
    "3uqmF1hftJeWHZUKoScEQiKMrHrKXe8bb6F831bHUCwFJMVgLPEiMLBQNNcn2Syny2uTKrpi9qhodCQxh1vXpENq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zjBinJrUf2KBTuqKYEtbW9F134ydfpiLmHFvnYtTATdMkgvMt41mAz1C6pzRWZXTQtPagWFKJYxyvXByGf45NVm",
  "key1": "5uQe3aBzjWyfbfeiZVRo8AMAJkrNErtStXEUU3vAeHcazofmyDR8yQjUJJYoTwC9AQwfpyLzbhiiiuukrrtdBNaw",
  "key2": "24h91ramQvTB4pepDeWrdZKj1HJ6j83Qf4YL8iCdcKBrYzMqU2R9gdWzye4TVveYFkNzg1HdrcEKRWHPp5m6nRpH",
  "key3": "4iMwELy21XHd2TQLq4jhPVD1PhJ6NGT5oViJxJ9hfDEU3m9YrRdsMTEJsGm9FyP3wkzWBxipKPLFr9GEvNUDUeiJ",
  "key4": "4KWPFSiWLwtoHTNfNKcky91NYQuxTuD1aT6p9TRuYXjhhM3UEWyWn5rkoMJM25fteBHFhMxzV2n8Ki4Z6Jf696Mm",
  "key5": "3FRJqzYkkx7sfbFEm7fuExEF59iJ9wUYC2NP5z1dVmT9Ujhhf1maLtBjvARbw9pLVpFWsWd4Mw6RLp7BNusyhwrH",
  "key6": "2UYEVLQek8cTWkC2mLJbUnSJAV33omCYQQHfTSJbpLiGsMPqwesyBF6ngEqDCJAmpZZ9HKEJEYFktHZNcrCoUgpU",
  "key7": "5muiFCa2PmNpwghyq6HQdvHmvwnZxU6hKumzFzz2cmfSkyMktL2VYu2jCcsbx6mubDgGvp7wZrePucdardpHqTAv",
  "key8": "5gcpEAacg2Bca5XTuh3mTzdYYdFHQFe6RuAdwXKTcfmrFfNXLcgLVN4szEKEpj9KDxwSFtc6ikdG8kLLURsqh7r4",
  "key9": "5jmwoA4mrUKVtPzyBU4gvSVv1EhyscFWhCf4mN8e9fxQao6cdxwcFcLVD1etEtwXHGjdjKeGpFoLP73w2HUhWSm3",
  "key10": "52uSFA53Dm4P5LSxVkNHBh77Kz9gghQ2DFNFjDDqCJzCJt4AcmdfVFmUsei95gqKexABsj8jXPd74bWRfZqNBz35",
  "key11": "47s9tQ6dQRKwBE9pnL7M63n7K8z752UGQhe9haTdzxsvpBAN152J8P11f3erXN2PKnrwsPPW77hMYyMGuzSBTFGf",
  "key12": "RDKBVtdwwqHgySwPVHANtZYQTC5aMcJ7sbaegdA36rVEbSFCXccAHgMBsviXDQR1Ud7x7cCzoNpczP8vBJgCs5x",
  "key13": "5KCx8u8pPa1o7NjdBZqUgstDAM5KY1YRFf24ctUodMxWugojZJ4KnrRFqzhPgSxzJXNFSmEduGdeUBi1ty5vPg8W",
  "key14": "2Bsfa1c5wUtwa3Ynux86vYbS66e2NMBYk2RZoKuxUcQS5mdicTUF8U5BKD7ALvw2rejXnz3pDxCHsEYVN7DfNexV",
  "key15": "UFZjR6Zp3bkgn2hXo1ZF6HfSTV1WjHz5d8RTaGa63uBqD4t7c16gyqCUTKREDmckwdZh6eDbJMvW2UbrqZNAshJ",
  "key16": "4cmWNUTbdThZC7Wkxn7bsYm2fFRyg27M9Sy6q4iMPkhA22DZRK7aspf2SxneSq91w1XKxs55MapSBigGnpwS9XFP",
  "key17": "5Dpy4fNSdC8fJyvnAChj6UTGxqNSSwdU4KvS7GVGLdv2vFjexNTENwLFoLKfAihwqGauRMaJVMbSKLxbA5F3Ec7B",
  "key18": "2CCTkVBHYvXpphUv9hESZPviQE1xBLw3X8YV2S9yGhz4aFx3KZtKMhMdejC6swYJHwWwcKrudSWidTYyTy3Yg5PK",
  "key19": "3LLmgp4PjyQLmT5mqxD4yZsbnZkNya8j9B89CGegugjfV3WuxKXm3veGuP9T1ZGFx3RnMdRu4tyu3RgsMf7gzwcE",
  "key20": "ZPn27fXSSj6YLitLcRtsEc6DEtPaL3ZnyGiy31p1HASEwuzqrrDQH8pZ24ZBKnDvE284heAiWpZu94mWgFJfu9f",
  "key21": "5w9PBBow1W9cJUqpw5M6MkGWr4u3zKaUTvK8kW53jM7kSsg9L928aHgC72k8B1kkkXotzDgg5jFqCp4hRejFsMRh",
  "key22": "4UtpueyYPyrHdPDxFgE7n2uSN7KaAmLtBJSpySsH2AdXsyTGYPkUuFzqf3GN7LFL1fpRkiVMwnESxM8CQJRrkGAw",
  "key23": "YabNfFVBD5tnPsoLBPjUNwsrMKGzBwQaJ8CGUU2swPB73asEeDTEZH6P32bb6WdUL5fSShzsesR1SAEz2uZmUtA",
  "key24": "5Gna4d1QT3UTsm7ZrjDs8TZwuXXbvevjmnBTwXcxNdcEbHVJgMaeW5Tg6JMhGwBJnpdBJoqoxwyHD4DMt6nurd6V",
  "key25": "2A8mZmbqbgZFhdP3NLUcCxHXi7o166Wn81oUFCuvN9QcKbJYsxBiEcc3hVLNufwCcgjMsWYjnSFz2mqXRqg3bNN9",
  "key26": "2AVeiVFAaHYxPpq8CtxxVKS2EXDiw46WQY7CvfyuoSGPnzxs6aJfpGcJkhLofAiNXp8nvZzkcZiUwwQh4tutZ1wQ",
  "key27": "YUj5FwCSTaH3XvEBbZjChnyRwdLrZaWxNszT1zJV2WgppB3qHE1pqW4skjzAxWgKTkQzk8d64YxvRiCkVKfRpm8",
  "key28": "3VmsT1deRjDLrg5qrkdV21UV74cHKLX8hktf5ToYvwGDSRwS6Xjnhg1bwcoLMvG1mcWpBAwGizT6iX78E6CykPdf",
  "key29": "3hrvpXDYNgpfnctR7vR5GsNwPUX8V3oSR24X9Wk5ft57Borw2XMsRdE2NCbPP4dQQqmwrZoKwMksKCmAWLdaVBku",
  "key30": "2mUEGQdT7FzHKJhNvUjkGPJQgaTSqFFZvCXkECjp4bqcThu6YiM3JbF6EQxY5D3Fczncf1XefHNBRtcNtkBASHVV",
  "key31": "Vnjmmf7BCYUm2PSPX6t1dsYyhBDabTbN8FrAtgeDfWyJbgUq3r43YQUiviEmVkj6MBGVmUoiQtfKLcGLTq3sJCD",
  "key32": "2SD9YJH5do6xktwTiiwCiuqBpBSoNTTWfnPyQec2fNw2UcEdoSkmXQ5Wr3hfDFUd95xdGbmsp6Faqf8zYovgidaV",
  "key33": "5Gk5pxDyHz2Bf8eqF54EGoCPphNrdXwprDpB2f4LhoYkdagzwssXSFqKNvoZkrp6qPZcPjgZ1CbtvuXjnpjAKBJU",
  "key34": "2Uwyrg3TcCp7oHcESqtiHoh4nmFGynqRzB6JB5zPhydaKSbpqzbseTwqhLTnWenAQV6Cn5g1hx3db3FJa2exjSjt",
  "key35": "NXEZAzYGHP4xCjoQNAPCG9cpH37CxnqKnSxez47XePy81vSD4QMEnQzFo24E5WvAHP2UkiyDdh5YJN3gvicCNee",
  "key36": "44ArwjS5dUQPvjN4ukJy7MdwwnikLHxp12GubaZk4GYMy9NjETBG8FqGkDR5X8WMT51iQxLqPx862Htp6puUq1Xh",
  "key37": "NHMH6bPzKx6dxztc8ybdt4te3PLbGevKDKG7J6gQcJR1aSBWvibXbr8oM3EqUH1gW8HhpkiZ6ZTbmUGJeoqkA4d",
  "key38": "32ow8tWZkFfW48rcoFGQUDdabLobNunK2d1v9DE7ZFZHJDBfWTxHyyjbPJvTvbYagwy7MGxB5F9bXyLEt3SkgFks",
  "key39": "22TYu2TVugAn6NDCLLht2jW9RLLySz5hzoUPCEF4vLD5MMWRh4zSqmaXPgubRw2jafjmypCMasfdAN6MYSD1eM1Q",
  "key40": "wQfpAZRA2fzQxVpozBHmaCw51FXmdtNnn9qBcA5NnwigtceiWBeDmjrcUuPrUJcpCe5RHpYnj8HSKkornS7DA59",
  "key41": "3hEbXviH959G8XqEVKHXBmUTHhhrDi8cPXdiwn241JyBsDCMnbstEpMo6BWH3TxKsZftacP59dZGUNKybqTLJ11X",
  "key42": "Gteh7b1EA5sMNZKeYvQqDK5oyB3me1KsNxqeXs2t6pdoqEViWkQNZWKAnoYJZxbV9YGnxpvwQdXFx2dUv59Lrne",
  "key43": "3453B7WLAQ2K5JEo8MXwcQ7wQ2dMBG6FVUkbVmL4jno3tYskV6GHDkA9GDhR7foEtjzdtTE6VeUxdvPaioV7bdt6",
  "key44": "nXD4BmtDogXMhtuumH249UsWGbq1ikULCwHAtx2HLjXvxmzPY7zV91zqtfYJ8wUJVPUrrcpoHnuxveSdarxRCYu",
  "key45": "4DPwEuitBdsfSAejg7hUJHHdBQdbsyi1eihFTD6qRW1bc7t1vSFYjuoC99Zqp9Z8nD7xPercveALkLyJFZVY71XW"
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
