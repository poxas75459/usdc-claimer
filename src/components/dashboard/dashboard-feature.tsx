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
    "5v99J5jjyH3ixSvuaXdgRDnyTEB1Li6TghT4hJktX9FzpzmZhA9jT1R9989ubGtp7rNUXH84v2eXTvBTrAAxJKfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GQ38VXJ8Q3CNcuQAUpVkSPiMja9Je3gbsz5hFmX33sofuS4pCvThF8LWzJis5JvgiWRAVA1U3CgkH6B3goKXdbK",
  "key1": "5QHeX9JkN3XifLTEZZEBHgs4ZNZesXZWpcA1JbnytDXryoRgYarNbSVNBpS3V6shw5GdNKd59CdCopLZiYko3hJP",
  "key2": "3261CjWMYAEz5joaZpt6AH9L74HLV1NmgVsTu5xiMCrkjbFrnSB8n77UmpZ9RG6oWzNDedDqdZNLtCxmbC4CC9bq",
  "key3": "3P7YCzebJG74oGZfLTSBfTuni5EQ9VpxJoMR6Qbai4qBYveJdPoW4ey98Q1Znba1nZyWNV8gMu88NusbEQy9i21N",
  "key4": "3exGMnpxs9y9jN7DXjCAteQoz5MD9yzhPBtXHLtjz6FeywDoyukAiZGSRRTJ8Trw3JMfmsk2fMKj1o7Fjg67JMy7",
  "key5": "5wpihENuHLdrpWoQ1FpchvHaCmE8EEwEJdLJRehfhVTgQMKabvzjN4Wm9nn4Fg81FoSJUZL1dLkQwEHdr7mcuoqz",
  "key6": "EKyQtdVNtje9ZLtD7rpFptpc5ZV3w211At1Ah2NfPEuVQVa7yAeYTzbEk2oT7aL1Ac7yf5Qvr7XcBKD5TUCztj6",
  "key7": "5kMMuJZSGWdgW8WZEWFsvSMCGuQVcywTbKcwn23i9nfDUFBM19xsQDW51JbgEKbNg4o9of6LAeSrkTiSUc41TtSr",
  "key8": "4L8RD8u5gCeXA5GwzvLiDeQac1ocyZGKwAbmaGnFhEkew58Ba4gPAfYZoD2m9593pDfek9DGySkLbn1e9Z4zxmBP",
  "key9": "3CxNJ1rfm8PLWixQ8AnL2FgKKeQJBbYsCD1QaKFaTFwntHsr1k4F8C1jRJjw6JbG6MG5AQ46FozGSV625sgHGKN9",
  "key10": "64dnMfnEide4xysrNuDrKKphFTWzJhiyPLLFEK8ZbannDd5AJHtFAjY549LYUR6guGNSy4922VghGo9DkGoq66uZ",
  "key11": "2z2LN8vnwoTvCZKANJ7QbFNTsKyAgV79R1Nt5hDaGMMmUWSDWBMEnyYGGPUXu17Dwvz2qWUzyddMMoyqMqwLgD1o",
  "key12": "ayWGcNHMJheJVyKwmcvdiqnfuRGG8WG1iSvnygbVWyg9A9tXLw4JJUSjr53jD9Ac7bhnT8b7GgfefJy74KWhbBd",
  "key13": "SAGim8vB7tqxPyVcCYRtKYBnsGgfcG9MQcLp2xfxKJuZtU6U8XPzX2X16FhGcyKMqBPSSt5Yf5pbnMmJBjxLAvX",
  "key14": "2mvA6AnD3DsPytJAY9zAVz3aRbBpivF4bnFRjNGZTf9orsdkkTTBvfdAUwpk6mNv22jyofJm74V7idoeHa9Zafkj",
  "key15": "4tEUpsdErtGbwVDuJhV2TCeovX1NR7EwyEDvisiL4XTW4KRVrNEECKgQQ2vGhWjJ165UXmQ3EgzgEpYs6k4Dtayb",
  "key16": "2cB4KBhz37CSEQpeod19uaiy21VHjgh6f8NECnUzVeCy3sBNpZregmWeZ6TuE21P1SkTjsuaeb39fiZEhwQdfMdU",
  "key17": "435kPYTfGgxinTT1VWYbif8aiWK5C8A5mGgVnjtHagZB9FfTVEg4DQo5qdbsCZj5EZL36M4ryUM549JREryNb5Lp",
  "key18": "5ZQxWWHzGWUTHVZUeQYAXivQndLSnCVwez1oxcytYEnm86q1dVmeeMXi3Xw2zbhJuCjYo3exps9mK4t3CaEYaYmT",
  "key19": "4kt4GyCjbpy1kbiYJyKKzmGVpjneBkGRTwiwJNDtVEBSQEravUmqdLTjeKoWCFNpeuD9i1qDu12XZodQ6fk5NSZW",
  "key20": "4ebY16rYZQesZF4o987LdaTXzvc6kRnAfCHUpao4BtdKhVdv9aCWz5sGYoFMRvhXB4KNhtfWHGBoGrUXPt8LPpsZ",
  "key21": "548WrGBfbpGwo3Z95pP1SPoEpj52vqBrfHSTHdzZ7cBKNCg2JxAUixAiDRHA1u1zn6DBi6eHmpeeaTY1tQy14b2d",
  "key22": "qaRiuM7Mqk4pP2VS8CW96RmG47Ehw99HGv8eMtT2TTbtGDhksk6rDi234AihXrATJafJEM5WnhZoKdudWgqRfRU",
  "key23": "3S5f8AjXkP4rZYAchZwry8n9Fc2rvU5T3RUU46wh5jkAQbo1ZM4YUujFh6MYNAjb8ibSFQWbfWuAgQHhZNz2mDCV",
  "key24": "4WAuh6GD1QgjZ5Tbt3gkJHkHxQ1vBiGrh5NsAjHmxjjnFDtVmVsRbJA2UZ1iiqGwM4pU4wLeq5KWhH5uGXmCxk7N",
  "key25": "5gXhTHeLXj6ZBGVmG426aEZuX5syFDEfGPfWHgeZdy18suT72TkG5UhT3ZTNmfaVaNsD3zQhUyjAvSLrDeE5MYs6",
  "key26": "43SxThgzG8kuSg8hPhVikcNddqXCGPy3ubiHfJmci6BmRMkNqaSiDxrHZM3iHJ2skymgn136UnENv3uJP2MKSEfV",
  "key27": "3d5o2aooWKdDn5GVGAta6TQPZpdPzKa9ya6LcFeaofJqULpThfNpFF85NZ71YWBUPmW2PXQS19ZAYeTUrojZHrt9",
  "key28": "326xhM6RJ16WJJiRGHazvy8KUkeWB1PiBJFp68pxWSXi2gigoHAMbMa8o9poTnzigprZ13anbwawMTgBncWj8bTx",
  "key29": "AeeWu7UCmrEivK42ptsEwAUwDcZDV38qbKYrgUBFu98Ji8VrcQy7NCpV5WByRxWfNeBnZFYShhMbgbwZTBeF4Rk",
  "key30": "2rApp5JoRMFg2n5SgvF9Htra2dmBLVativxQLwFyBCi9rPniA2yMSQh3tWiudQ2JeNwKg5L8C5Y6ofS7S5ZqHvaH",
  "key31": "4LwVR8AP9brHgdkq2SWdfX8LwdSaipoHMmc5auREEzMZDZ9DtvCD9DjXr84AiDGYAUhw77ywEDMAxLCXg3F5NEW3",
  "key32": "3Gesa74kGNgDsNhKSzt5NN9yap2jDijeuHFZi4GEtUZKnVamYjc7ZysCcW2KjDT1bdDwcrysh6uz2kAEcRLNJ26a",
  "key33": "4o2XQcJQAQkDdaZDTnDDPDgDynNhiQBKnsm6t1Dg2BCyYpaanYPJZjgn7mB6LQ7KD5GK3QdmvYhTbhMmWHvRsM1t",
  "key34": "28m5Wyo9CRD8EznUX7KQc7nuWyCiziWhNvrkkYsitKC4HCErz5juKbyX5EqvaeHiaAfFLb4xbmjUJDqriaPU7qrK",
  "key35": "4kKrhejojnmRsE5nQfNXeQs9mPKA1M8wqH8EUpR9YRQRff6v13aPHzifcoKF7KQxtGRxiEHAMKUV6zFuf2R1ncu3",
  "key36": "4k2jJqUczWeihQQ8tenuYxLgGSPDFN5c35vpfYcRtd5ecfpG7auHzzJ788nY1RmM1b1B48TgQqwZktBD9obCqWmu",
  "key37": "3sxHYGvCnMXc6RwVu3byMspVAJS7Ag9Q7N7bgARh7bAtoztyYmkSVYJMm1rjaz8k1pXdBJFs39rSJdwMXWPwCNJL",
  "key38": "6G6GaTPgwe186NJzCF6e3u2Ajr4DoCLcaNQLf2xbCfqQ47dvTwqox7k715isdYM4SGWUPsnCCa8G8euuvPQ9xZq",
  "key39": "Kwaz9TxRBDVg1qTDfVXFkjFfz4Z8fff8W8bB2tgNrXxEvEFpm9uRafF1zBBuaRbaLPLeBiYVm3F6FXBatpMpP5k",
  "key40": "46xkZ5tcG3Ntbjn52HjxP7GpzV68j3R6hWppNn65oWo85gpuit8hywoWgefHpJq5rKYHd8Ju6HjFxtwDJSWnhej3",
  "key41": "4xys2tdn9V4Rg6S9ymF2byAFPPqmG4h3fxqfcdPnNDJcLSbsVY6DpjqfqcC6N7XypPgf87XYAj8AwyvzEfXUg1vT",
  "key42": "5zGUaPQbXjasD3eZvW4tNaXSQJqmgo52CuEH7zsHSf98wfpE4kkNLhTcWhoZfgbyqV665cr2BeiD1MZoqfzdA981",
  "key43": "57HaYxy1ghYksFqsSVDpWwEWKGJmjtBsyHNC8ENfeKaCst1hYJTdQ78W2WgevcZfW2YnVpGsxAHqDZ91pEmS68pV",
  "key44": "5NVi1TzRF9DCuRn7UkZe1MPdEZrjPDycQsC9e6mkFvvi9uoFwWKybkzFn8RRwy8zUJ2StQpmsYEXsXhuMB9enjyZ",
  "key45": "2mSxYmD7yiEr1WfmuRDvs331252Wj8nNdj3bQnxkogfCjpbqf7XHvUrhhWzadNNn4UYBHwT4aFe6caQ5PYDHgPJA",
  "key46": "3fZBkzqqPAhYHi2PkohPZgG1qzgg8gHNg7WmPYrqBFg9vHTupVfBJTJYHMVB1KKtLTDCdJNt9CMs6gmemsg5JpKe"
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
