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
    "5jgHHWDk3RbqYV6hrZRRbYMUA2NC1oTuNfK27wqw4Sr1eqTmppBYMsxKcXSjPZFZnzUazTBzxdmebxYtgueaw4Nm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27FhHQggVB97AkHyzaPMRGgZ3qPiayERHPpyFMGrSt5Ks9nh6ryq3ZDRjCFTzmsZhVMbHT3zv2YWC4VpYAKsaNnY",
  "key1": "4AN6seD3AKFFCU4fQ7zs35odhhPiEAuRD6JTj99uZxccpyL8DJNd7gxobYAWKEbGp3zEUxi2Gno5ekNfTGNFjFwS",
  "key2": "35AxJ4qs6nk1VCk1ZAfiWu1BkYhwSBEFhWScxFscxr2fVGQr83hHsCU4zuSHukWJuoLAttHFLSSfcKJRuBJ1a2rb",
  "key3": "4kGouV8qA64U9ADS7kgTsSQs1GYCieYoUFDzUgX3Nk8YxnkbCnRNWnRDSS2qcmdPCWirJomj48Dp7ymaJMWNnZRn",
  "key4": "38itoy7QfoTCByRDBqvQuPE11aMopcCVSfqBhkwdmk6Aj9KmwJHXjGaKLj2zshRCt2QAiorfifqE9czGs5KWnStX",
  "key5": "vRcjswzWZin9qLe5PUxLnQjdTvzZhPPGNNVvbb9stvFiaYeTdpN86cTnwEfDgaVZdSm1FpoGozL2FXRyxgkqBVT",
  "key6": "2XaP4fyFhFH3VxMMm8dGnxxBLXn36ndSkScbPfY4eVBLjqXMnB5huFA2r5TYFAkqKifjVLGu2euD7gtn34cFsKNd",
  "key7": "3PgpVLpQCi4635PDQcNe79MLkwU2AEsAAEicwWPAGLV9vyeZMNyvVTREvT6A4wA78gmx64y4AXdwkSU9AMv17dcK",
  "key8": "5ccy6YPWf8bxJ8qNGtWiYoov4X6M9mk8A6MUX7GrV6QotwMPGfFBhVgQ7ZjqZDLyU76jzUBwT6AU6JECBRVmhNwE",
  "key9": "5WdFdi4EehxVjJdk3WMSiQBR1gmD7FBL9xZLpY1J5J2dwUArvrz3FNAG4V66WzAyRkGXTkXuk9z5qjd65hoABzUj",
  "key10": "5B2Pn9N2kE7JR5gAzBBqj3Mf6wysaStUAg2nHZTy7ugWAv5AKPSwGWrdM1FmbTyfmSu5asRoKsUxaGewv5kT9ttF",
  "key11": "22ubyva1VTMUvui13Ty25dgEZGhZiVAJHPNQVgzKTmDdg8ToDceN53pdmRyc61nNQouqEBJxRWAp5CwWN5uZSCW7",
  "key12": "42jbUVuBYtGvYDovawJbkqr8ss9wkMKCBjCyfpePHdDv7xyNANSHnHPGLdmmz58c9oUcySMzL9ZzaGYL2RN9riNJ",
  "key13": "3UUnufqGVv96YViPz1jmDJKLpum2VaUbtF9gyChS6pVXERKkdo5oUEga63pdZfAzNkUDh8dGgMkWETgso1ZBYj2M",
  "key14": "nY6QsfeRECY521DNqheLCopudP1GPS9mNWwDWXbTD72S4t6ad4vBYP75Ab2UaY9XCUwmTqDjvCBqmXRXqYfyBaK",
  "key15": "61STpQs7wJatM1QjEqFUzeTfWSq268yninEiuDFVvUctU5PZhNpMFmqjWTjdBfb7B3eDyPhxNpA8PVkLr25GNfJJ",
  "key16": "4g66NYd5LNHtJf1AHGrCwMDMqvzuE9Aw2cLJh48keDQssSEHhzDbrnH4Bp21uhDP6fzmwRRQqCUHXGbnGEREiNwX",
  "key17": "3rPUA4LTgZKTC86qGN7yNk6c1bK9kCVjW31brZui39P53nqf7GnM5sdBgNWJRf1XKuW7adVXWsrNAxuHfKodLtjv",
  "key18": "96hqe3Xp5Pu76H1m2Repf9iPJm5JZNWJLNVfJ4GC6QwqmKcWQ2d1C54z8SUqaSAFAhA5LzGcvxxXqzh2CUAm1PV",
  "key19": "5f4sULq7UjKUSjhzig31bwNvqbGyXA82bPCjeTM2jiBmeW5ZEfJaaU3e9XHL2fLJ5w9YwbtJz14wf7DFyXpZeCDW",
  "key20": "4pHsoA5bsU6xoYeoGauxg823KjkMzc8RiUtBwjdcC2PmJmKukQo8Vn4qvmbwJ9xeuoVBfnCqPwyxvsWKNWNGDcQ2",
  "key21": "2KPs9aAR7dhvqKdVBFwxKN6oFbficgVQ589rkR8ZBbY1aa9C86856t9kYdptg2ZgpWbsd57kGMBoV5Wx9PBPBiht",
  "key22": "2Wf5zzk42sGyqZK3x9fuNUvNJrSrwckM2GmEoQKY8oxLhFeTjpLaGE17TJePBPcqdRTwCT6BjDyPP3wNKshgZURM",
  "key23": "kSYyUhTRVa2XUaEnF1c7fwVmgcW1uVNr11yJHfRkBF9dxDJN6bZUaPBFSQGRo4CepwYeAdXdTwG6X4UtXNM3aZf",
  "key24": "5TGmAu29KuB7rq4A8j5e3GvU6pg3yNxWYsBmfy1NjxkUZ8oCX9wpRSecQFBmqnQmPJsSBDyp6emnha95ikKAp34U",
  "key25": "2M8DA7oYDbDV6NNXYeDxPCgppa7j8TShxQRryfNGyzawWpi5uQFfuXPQEByb9fSUHSuNxPZrPZR2VUp6bB7WZAL8",
  "key26": "XMAzu1z3WKSqE9yqvnGrp6QTn3DnYUNKLk8GKeaR9Ngj8TcB4V3MLA2zAFe5fhoGnj86azPD5LN8ZfzpFo7wSvP",
  "key27": "2kscTNMNGn1KVmLs8oxwu8Aa6HYHek45Uh8EQuXFRZ1bTRy5X34ysTJyoZX4XvP5rqhjQPZgs6dA258S3hD2WcP7",
  "key28": "4jzFXasPoeuCoeNxQfxaRrBLik7dcQLzyvK9s6eBdYTeTmVhNWKtQ3WgqGTKo8cWEyhcWt3Ms6LgKAv84b3s72sB",
  "key29": "3KXWWhMgVoFroZUAoR6kfoJsWTtTWapZxasLbQguvzPWvmLEv5Fq8raK29p9x6NYqSqK7H5sJ2UjHmZTpQ1GRLEd",
  "key30": "61BnyimTMkULqwUQ76CcnaMQ3t6WQnfWYdjMCCJMiAas8jCL9m1dtMXHHoN9Sxn8rtU5y494w5zVmTBTjpnqb6Kw",
  "key31": "2mGR56kdUVVyWeLJvsCqacS1fFbwVCb6xkDUkJodBWzinkiqRwmAA5bK87EXgjBeJFQ7XwrEnKh5vyNwZb5QECN3",
  "key32": "PpHR4kLieSaxpXmsynzeRF7SW1VoRB7tobkVK1WQAsxFmugtLVhu71rWS6xTuPswyq2C4ikt52P3eQGNMQ4uPvX",
  "key33": "3WM9xWqDs8j7H1fM3jMkx6wFgwbvLUqWMrwtPNwCrN9L5gxcwAdpis7k7cyUs6zM9enDYYJjxFEh7Vhy4FqHxiSh",
  "key34": "K9Lmbi6x8E197LGhNCb8ZU2kYaFRNcsFZCCpRYozfZKozQ5rtRzYjoaJ8SzLVWcjidmxrDMTCaVPokD7YGyton1",
  "key35": "3SZ1ypNeThEHtNT4HfzNXL9hEyi1XWfWRf2sYRrn72wHhSfN4R2aMdgrkmHresjnagqToSxyx9G7HbfSWBGq3GUt",
  "key36": "5vEsUwVNMW9VYkXQoaeSnByZNMesVdVixQtmiFQQBEQrwJ5Hhwo2Vit9humgXM4Gi3sGU7ZFo8aVTiLcr4PSK1g1",
  "key37": "3REkD1Js9z9wtTFLex9QEs18VXSL4U9pNoajPEhUsyoWQnxi9DgsJpBbxVQfH7wq7HjsqELJNkvs9sQEwv2MHyW",
  "key38": "2sTGQFTvfopn8iCraRr4nZcfBdRbN2xaK3nbCveySFFmL41Ku7WuuP13zVyhZkorcFFd1oayKYGjA7xBemiQhzSB",
  "key39": "4XXsMwZtjZRKaSjZRxvTFnJkAVKu64SVZBgwngF8onTPr3U1mVjdBxnkxytHX6Fm9mNaB8emfADkRdxpP835Psav",
  "key40": "2EnpHAKWr3ZwwRh38avXNtPhSC2q1Ww7T7GeURgc5bBstBi8YbRT1AHnT3j1BJiyc6AfjTGXDcLxHdgir1QGvTdN",
  "key41": "2Q6gkRSndNBTxEoxxGvCJUS5DcmGVx41aNHi2J6aGB6mCb2HNJSYxwCVXn4ecoRTWWzemK7e8HQ8R8risngFxYqK",
  "key42": "2U3c3QzMLdftYna4EH1gsHX6woeymUdm7E1bEENzP8S5jZnyZr6SqgUnjy6DfCS7oXAkqByAgeX7x18VgUF3aYT4",
  "key43": "56NgfctYGpr6zptUfEwGaphtfToeZ8p5hnuam7vXAxaAwTKXa5eARHotStZEPcGMewZZUt57iDkychFpqHbUwUSJ",
  "key44": "59XxcDqjU99ZsKkoHrqgDsbvdC8DZHZAx8Pc1HRw7CdFFBUeFrLYMpuhLZ5icPQwVXYjyV6WAeeHgWwPJeN1keNh",
  "key45": "5NHDRSN2ApRSNsoUxchjCAey2Fnt6dVntQRCwr9hcr8nMMqLsiobnkkjzs9UcCcX8AL1UdDbYquQrFJCR3EVVxo7",
  "key46": "5bivRHa99zkMdd8QLnM8CFoHeqofa6KqreNV6k4cRQHcc325yLivDnnFY7SiZL5z1QdtDueexGbrhFVwMz8ij4mN"
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
