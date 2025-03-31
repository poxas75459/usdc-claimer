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
    "3nNf5qe3tKnmv3tHCFWTW1kbRJKFNRebjHAEGRMa391MVXU5rzv79UW6n6z4xCk8oKTTemPgTe1Y33urKWVfR8JM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KXxzvxvqkiDopEkg3n1JU3MySpSwmmmyhWskK9dGjRPcKeCtArXUDcZRLkvucx1g7VhpEJiKwH2UUzmvBJfAvEc",
  "key1": "4jrT6Vkss7v9mRuouERKjNH5L6Bkj6H8B3peqTtRAXQtzL62fa2RZUoBSUD7udgm55MKCjmpD1fDXm58JCD5Wv3Z",
  "key2": "YvX86VuCvhmnn4W5gSBCJZvbzg2F1MmPGeNWJUaZEHtL5UykbMWPWZA5RUbXPHZ99wVM7CifukBnf5HUQBKnHF5",
  "key3": "5RVeDTt1LLXdEXLnjrQ9m3HkNAVM6cyaV3DZY4pWTAxz96VaxckXn4yibUj6XTJULzqCVymnF45tDnMNaJxH5Puw",
  "key4": "5SAmwQWyHvR5pnUcM3DxQjamXVqfPzJaydjBfmBUnWVSzASB8ACwjobquPm9pM7e4vYXdUYHky1okVVefuN35Jrb",
  "key5": "3PbSbiTP6cQSY9q6qvw9ZaLy6rx9rkr3vGme52teyX2M6gFLkoLWmb2nHrSPamvL4hBRY4XK3NmbwXFGT482ZpQn",
  "key6": "5SZub7bdescw7veV1KMUmYKcjLx847WWLjQ4PoSU55Ve1arQ87j7rcWWrGDRdredFNnbUM6ghbLbxcFXq7BqK1EL",
  "key7": "XCXtcDHdai3bj7GPAbkReE3MRPiSZPx3b4CUoDBaZBHxkaJodYwpVDftJyS9aVESCjmjmwP3fkwGYVpL4qrD5Jq",
  "key8": "5TwU72xKaAPWt3VfQyNYj4d4RPQye8KfYy24s9h6RoVAeoUz561tgvAxx2fQ2gEzjxWHJyHSB3Mwu2aJpptz6xzD",
  "key9": "5fnrDgJh8UoeKS813L3UMEJTQMb8Mfs6xedA93RFc8bBGbsBv8S7AaqmkfXkSDqh8FpNEFKCQaKnN1JvpNtAduc1",
  "key10": "4gtQV8FFT33DcZ4o5GS9M76YHwLkWdFja1JbpXUrHBWvuPr2qDFsXmq1tuNinVQbfDrfMjTpnXeydXqLX67DYaos",
  "key11": "4Vc5yvG6igFDhAvmn6jLTEnhkq2bBTu3VvDSdRVtf62hAzhrek1PEisKspkisEw7iJCApkgpfG1PxFQ4jXXJjK44",
  "key12": "3mQRudR3EfKie9ZAdejRUPgyhSd1nQMzpEeMKcjLsFvvqppsDjbRSMyZwyYQCks3tc3VspJyrDAarPSJDhDrMnxC",
  "key13": "2yKtw86jeARuGSgZVxd6SoizZ9ivJBzFJv97F7spuc7E1xggqk4KDdqRRXnQJXi11r9pxxNncricqSEJzDXNHMUU",
  "key14": "5VvBEbYhFFwcvqLRGkUbZBfFveB6wYtppUqngrQ7wKdBF4g2iMbaCmoVyt1eQ8oQHQ5eKwo3cAi464hdT3xarbVG",
  "key15": "KezDCUqVyRe36mSxKzGH2msMXugCa2V3szCuXmk6AQoK8GDzdfzFN5vqLTFY5WLDz6QojRdFUa4s4hb8swZ5CW7",
  "key16": "MuYWFtW3Sbgy4twt6dkqxauAtUi5ZtfsEti4HCRNHRwaQe8rzgvTMk4SnWxRSDNZZVsyKiyyDoKja4XMFLk8Vhs",
  "key17": "5DYi7y976CWFzSjvAsfa15tky9uaJP8ueYfCedEgRJXUCJjRYYWes7qKwXbvDPRtEgY3JbCTyEsfvZ6hPzwF3fqs",
  "key18": "3hmZCz4nVyoCNCphGoE8hzuVb6eMiyRTgohjrtV9J9pjPMEjeozYRZCvJmzCcjBCgnZyiQUrqocvFJ81tbLiXw1Y",
  "key19": "2P7gF139C66PhoJxrB9uXY8yujcd5ekbjJ9N9XsexkZD6peXDNUDANnH4jtriA2xHAQWvboNA37F7HMzy1QMXYVx",
  "key20": "53bfJ9bYzRRdA6Sf2eqK7UBvv6Fe9u5ojUysEbzRJugZRFaAuhwQwRXZx3Qvqtvcu55Q8RUHLxCjZLHiAmLWFHMG",
  "key21": "5seWYgfrkWNVCtBGYvhH5KZxyxKNiKhJPckSmGvzFYXQwNkUPQg9rSqEHAVbjfWV8jwLgrKisLsLKHcvi3BtsKPL",
  "key22": "3j1RPtTu7kwb38EPpXxx6vDsS2tAnPiUPD71qJVoJmqXEj4b4PyHUC9X2gT3vdc98L7GhR2UkhaXUHwzE15FRDLy",
  "key23": "2YNdib36dWUe3RfRWzf1KuoZ7UkUJhFrCYi8xUMvpsN93Bf4pGtiQ9yLRsyCvh9mTFST1H6sCuQrWJMoXKNLHU8g",
  "key24": "2HtouMZnLw5gGZVvwR9HSg91JZM4UvukS8juexjnmfxWWttgHvWiXzHBqXhS1QreAFMCwbyw6qzxdyRxB7HAqm9R",
  "key25": "4wEkTVaSvmhfZwASs2ZwgEDrpBdhcoX5PRtAfxz2K9hcjGPA2zLYa7c2DX9zfLGQ1ugqPKZXTdnvf74c6jAQ6pdx",
  "key26": "fZQzxEiuJtQZW3tfB4AyMcAeMNWkncVL372skyqDUJ4EbtZBNZ3soLtad7UVMc7DCAgoRkPpEyt5V3WSFYvjUDG",
  "key27": "3VbkFH95ANsFBe1sxfG4DE4td1whgC8hhjMZYMgyFeQ43GwxUfAQQbLXseGxGnqor5cFLpKD18C9xfkwvao5uxBP",
  "key28": "4xBnq8jNzyskXbLKNX8kDbp6Y58dYu4Qdkah5A3FpC2uk64JfNAERnmi5R4L51U6vKfHhATQVGMHcYKfKr6hf6k3",
  "key29": "9rdPRMoSeo4KGwNJBoYvfv18ksF4DvS4ZRHxc4pcn7bkQp77E3Xp2A6avoFLpppi6TvUWXRwW63d4jpvc7rbn7y",
  "key30": "2Viq3hptWeWiiP9RH6kbQ5pdQ1QA5mn6FPSTVdArKeweyywPcJgZ34MTKAiWYrxb3NLdLYE5iVtRQ1sYvh6BVMdC",
  "key31": "5gvUNxDoT9j6k8YmXSKRQSsnCzVkn6LEDyyPZCwPzfotbY3n144XoMsshZ4rKVrFvsDgdun5doMF8wm7LYMoy8fG",
  "key32": "MtGEtaGcmgBbwDJK9NucnZ2kjrvykiW96iSG4Yzc6imfw31KYUX4zY8DQMzEg3GpgFL3j3btEUjTRWR43mjQZuR",
  "key33": "nhYrPNfZ3VHQSRJ1zreXqPBneRt6rPBwLqUx6RSirb1wgPXZh8QLiHhZyUz8cxJeDCYb8GSX7tf1umxFe9YZoPf",
  "key34": "3WoY7zTehmERsXigv9Gg3GkXpHPzbDEiYCfbMehomyiccGZyBbFprrQ8H2r8zLPuoQ5zBDjKSz6u5FUEEuUw4HDT",
  "key35": "4cTXQUzL65Mkxjnu1HJ7MH8N8K8YbfqyEyUFwXD24ge6xTMnGtp6yzEjZWXNYDbhqEdYgs8CsMs8RZAuDw9Txuq7",
  "key36": "3GDW2nWnZuXcNCMKVhKD3Y4Aa1xS9CiYonNP4Zz1LgSZZtAai8xWaeuHE3k44ZboGRCTUDWYSKFExTWYNxwG3P19",
  "key37": "2bVnhp4X5cNZ1Kj7Lq9VwGTwEKoHzZChG2YeUVsW98kBYnBAKtz5k7Z6rsAiTW2R5C5hp1d3gAz9pqdxhvcxwGMD",
  "key38": "3G6uZwCUeg18R3phE7s4eHXUfUnwv8YypQBTsZwZNKLusNuQuqQR1z2qRe8cP9BM43m2AXnuDGmF8uFB2wsLWNsM",
  "key39": "4M1ZCQu6JhYBEZ78mNXBs7Tdwmm8mZUKy4wvizNQTPfLDGZ6wXxBFHHDvZmwzaMcRUgsqvNDAa95NdFwrXchqzMq",
  "key40": "4wH4NsySdE5R7ZgjSz3qMHuDT8FdswGiWPzpyBWeuhDq9xLDQfdaePDDXFyUSQrtftji8ZQXgD3CFXVekBY1MTe7",
  "key41": "4RrJSPMemSAYHg2tCqgrU5rXsKVUKLmDNMLNAKcWAXgKGQgdGvGkuj97w8hHmxG9AbsdHZApfZz2MHVbv1HSVwHA",
  "key42": "2ggHD7yefL394vKQSkV5SKxEXnGqWhC6nbxm68MJSaHTTvFbPB8UK7SVEhtBRtcR2LE8FRaa3yCe56MKTCp4F9uT",
  "key43": "4Q8knW5TVVZGBpD6NVpkdQKwEV6DBfGC1bSAPtmCw6XxmsxDMxn9RV1A65YqPB22RGbkX3PnKw85ze2azggt2Ueq",
  "key44": "5Ds74LJ8tDYk6XvpDb7xT327MBRbnfpjrCHCJgKaTA7JcBmDx3mnnRvu9xYDhfsrdgWnhMB37qZKog9GAsMsFhDp",
  "key45": "5A4N5dfmxizTyXYd7kSzjtGbNo9Jjh47ip2AgmuFXUyiovZLicre6dVv77ASvWZKib5GiFigYzRu2WjXWdn7PRQo",
  "key46": "3rMo2hiC7jj5enWHG6rZCu59mxZnejjUs8KtegwGr8v1aFx7XZsNysWTPcKPszwaK3rkNzQYvxRXvnai8VTkzhsb"
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
