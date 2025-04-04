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
    "3WoNtijLcS2MgFVsb43ZVsZSgMvFUxVAUmdmvTXDJUm2rex8qyZBapsFzUzN9ySaffCVor1eaaUrAdGpeg5MsC9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24vuw6aakQXDx7B9SiX1DXNBECFEBAGcCQ1asFBaxWXaeFLPejfmbG5SK78CXeGYEkjp46s1hyNnDfBLpzuqKxkk",
  "key1": "35kECjFBQ9wGs2q2k5G7B6XALz1diZaESke59kc9hDXEk1GrCKekfVjCLMXUNzhywsdVxmx4jtbVUUbxitM15TJP",
  "key2": "24eeWgrsS52XJfY2H8ubgVb2n97P6DK2s2W5DapTSQwHwJyRXSrDjMtayiAd5mt8AygDJcs4dsX9f3S6kof9bZBM",
  "key3": "3vfvQSE8c8dKR8aSv3491EZuLaZFCoEu2p7qY2tKSSiVueGhTaePADhWDBC7etoANsUkXbm37K71CbngncZBo7U1",
  "key4": "4KHmPw35NkYzY8A9xyxv3931aY4zUfWoU3bsTqtcoT4LEAvs9XRAoTRv9692vd1jbocuNbhoCi2piYkxpFHWg3ww",
  "key5": "63hU8a1JLD7tmVfbgb4iQP51sziqjhxq3bV3EcRz5J4UVNmPjU43gewUJ6o7U3ASVCqX5SNKbzaFLXz1jKM12P5E",
  "key6": "SRDdoUnSpdgB4PRkJKG3vpsMD57N5hFM4Jm4z15EsGiWW2dNthJ9vEXrh25Q1wu85pca1q5HzqV7ER4iNcXz3ES",
  "key7": "2nzfrHE6jKWVr9CPyCqigUiziXPvavRompmUiEjAE9DPg25myExzwXdvg7FhxVFqc8aJESYS78zSVzj5YKeDJYvw",
  "key8": "458EVGfCujPAQVFTv3wcR1CfkTTf9dY9vWvEkVwuQ2bErDyh3oQX5ERuiCUwo6ScX5LY57Zj9JN9N7vPYeNcAwzF",
  "key9": "qa5iYPMTEHKBpRmqH9MtTaY5pA65D15zch6TVr6BDa1wbh3ig9353ddHSSPJPJjd3VaitSrQq5qSP3kFAEHtfFs",
  "key10": "GS1iGghJrdfDwuDUQzqyN2A7vozgFcCi2UJd1DJQrEwQZFarK6yuqVEkvPAyGaaWhGPWhFmwhe6bAzkTEnQ8FxF",
  "key11": "3gz7YnYxvTBuVS9DKtzn3tGqDy5HRvrveg9nUBqruchxCj8RnicViQ5hJLFXkYrsUJPHznmJb63MuSmSfdQZXwz1",
  "key12": "3kgHpNtGTBtJNa2j7J38QjCFBGY55XVDyJGi7FaV8osdShRFspMNfLDaSt6X1rWH99DkUkyQ3nNHQ1F55hJNPT1i",
  "key13": "bxXMqh9GNVrmhBvRGnbEnkwnuRUHkYWNxy1VVAeA1ANU6mzCYWhPzb9iFuG2gRSFKEDrVYYTKFS6XrJmqAPUS66",
  "key14": "3dov7C2TkrZjkD8JbpGu94DEZDzYx46qsupyYk8SzuXNFcd8uEuPmjDNc6SCibmz8sfEkv3g182NBrAUdVvwZGaB",
  "key15": "4fjwd811Xx6ttjg8gE7y2VRxywusmZQPubNAgFpY6nHu1gZprbozLtGMHPyid97CEQ9UvN2q3SmwGTasGSxQTZbg",
  "key16": "2Cy6bwc1HpFYuQi4TrP4yxuUW93K3VceaVpTc21ebS27qoRJ2a3fySuV2XMYtraKy5pJPDbM4HoULYjQjt4gMwB3",
  "key17": "4QPduCuVEvFL7c7rhmWmZB72n6GSoULNwjDy4iAw1FpzPSWBrCiao8Lwo7kaYt4er9LUeXaPwk7Z4mDGG1zdPWvN",
  "key18": "4mEC7aFAipN5TtxvjpUJu6a2b8hsxy6Bm3tDEnRzSa18yrdvwqwSPfCDR9ARLwzZq8vsngg6Cg1nQnGqePkguesk",
  "key19": "XpDajbd24zbAaJziMhNCMs6o1m7YrjQheEhg3x1DbXfn9G7yqQvzrJACw6TYrdh4F6KGyDjqT9XDU2VfLgrkxwE",
  "key20": "3Eaf3y69PFTYbDGh45EkX6NgZoDqBX79JNAhcSh6FhEc6c1QST47GvgtKEBJd8S69S2GBJzP6cXavWENkMSENSFz",
  "key21": "ZfR4kZRBQgHUdSgnpQp7TtfJXfFN2LPteZSxqHy2iJLn5pZeXWUTsQXVu6euJtNMbcwFiGgAvqrGs4Tj3umX4TV",
  "key22": "4dya3TKR57BmeTtXkQZzn48NGzAF4DHvFmFAx1VUfLXkrZ7uyA6G7La1HBz8Lget7igNnf1vgvCjWCHf2tjPLghY",
  "key23": "5f3HVM684BztDiUvh6HucfnHk5nRxDoLLyPfYL14VhHbKMPadvUCxXFXojZJWJUij11iW8enXKgZrNfz5wVr1HLr",
  "key24": "3s2nzWHk7LLKq1N6DgsBuoe9yosJLiuoxkeSioMfHefwdDkXxUAqPR1YEmNeptRxNaV3RDCj8PeinUtVsriVrjH2",
  "key25": "x6qmtSswL3vQ44vPUCBquy7cjtKLoNXurF3PhmA32vtVJSYEKg5fgCAdyEsuhr1iddy1wPPvEGYXJQuAUhuVeUf",
  "key26": "3P5XCMQzs9e8sF8WR8nTmdzseYvYUbQiug6sVCtwyaAw8iS1ZrXX5esJd4Bqif7Jg7m2naJKhWtGNEhJsCPPZrog",
  "key27": "pSXqhqbLkyuQwmXuwEzhqJr9fbXdaB2nNbfpz4HfmSpT2ENkC5MbWd6gSVo33hg4EGLQaA1SwsL4DuGTaCouyfo",
  "key28": "33JANQkAmxErEjt7qM33PPgT1TUGEtc3JcDbzcHzigUXFdYKupPxdC1zfKJwEkNpbdsKhFb9cRNRWsbbe8obexR",
  "key29": "6q8X5Hh2enGbFdNfGht8tyH6VV4QXVhYw42iTDLupjdYQBb2bFN9uSgxfY2rmhhK8rVQP2EHk2kbEZ4iyauWiAx",
  "key30": "2wvmDc4tLunGzGdjCyQvpfdypa5t9XN7mhnXiiM33NEmGgzfavJVMFNQH9p48AAzFCSJzaKgXkkbkXAr5rWsXurW",
  "key31": "5ZDJNHPjD4dQTJ8QtDYoZcwHAsJCMwXbbuA7x2KYNa7bxzy6kCnTp2uiVrpR2soKa4ZsxpKccnEMALhbnzUsUvNy",
  "key32": "3J6hP7jMHijo4rYSyB46M3XrKDvnDxFPaYgQq6R874JjuPqLQxfdaWecP9vz5DPbibBwHzfwms7zyiXmus92gFZf",
  "key33": "ZPifUehfLbubxB1uuE8kJEpmzmfhS6ychrU8nNYq51Jp6PmAmbi3aRayNNcMiMkeKKnY9h99caG9L2Fwg7uMiwj",
  "key34": "Qg33ikDDeRBFtHpGPmK5mySVT4t17funhZw1KoSkkKTSmyPPTaiUMnPK1Sdp8ErcTSfb1zCVPZYz7UB5Y5A47sF",
  "key35": "2hAXQDDC5zAJ7X6okN52gnWamwPAEgx514DzKR5YzK2dMn3foURLkewjaa3dkbJ8dr99UYjEbRvQRKNmPfA6aaDp",
  "key36": "4KT92ujErEuNrtQnaKsU2AMh3nvvb5oxQUKdmQFkzxT1EY9fF615FBQbtdnbzUn76EwdpoxhqXphCiMqLMbipsvV",
  "key37": "2yqCEiB6svyVUwYwdoFSJthkW2vz34psmQjqyop9QVEeojt34gTu5ReSn1HVmnPiKZdKMfWZNHVYBBqGoM8XCRQU",
  "key38": "61sXqunC4y8PwgDrTWQMirxtFV3zNryZNR2mHQbjxGn89F6rDpxehDSJuxjz6dBExG4ER5WTz1dRh1g2XgKC9wC",
  "key39": "2tc1Y3HfB1DNMbDNY2pdRpLbSVwijwaGcDo7wNpWYgF4ehPQbQwZKgBAvaytAvk8DXUay6ZdSdsktKgNtctJMSLW",
  "key40": "CHTmZddAMhPUGAfZx4UErGD79xrhX3tNK7TMbuWiTgJsv45fwpZTdBz6LNWatYRyeEc8umL7vVaZf6uSWY8HgjG",
  "key41": "3GCs4huAc5875Ss4aQZfU58JdXBGA5zAvVBefDMesBTVob6c4VK9vYoLhPkAajhSewtVsRwy1nZhHWChg2JsKBqy",
  "key42": "4ekyKdFfQ7Ap5kMUec5e8JE2x18RpesPkunt2912MTRRkwcDgNLEpw4k8KZRicgp9u8Pv7maLCAYMb6K5tBucpxr",
  "key43": "2jrqyFDd8diQhZqYypnoC8nLXc2MB9s9jWXzRPhGQYqcEpFnbUCBcVXuCTtA8a1M8M1FXUcY67yhbYyVi33HGMtP",
  "key44": "5v27oR7AEXUG2GNQFQWfAxnyjyGBo8wPTLHuUSDpXL8xu77xVg172iWt5v5KHQq88W2rw5ZhMCvGppKF8wWm7ZvF",
  "key45": "2iM5GkNzAwbBJY4kzfFRBP73Wq7KheTVCcodqziMZgEfeZC6YTat34ux1EjWZHsenZCX3BdUiYjJcDuYoWknVR93",
  "key46": "2YJSnhT6EzdPqJxisTJMykAdg7XryVF74UhEumkpk4svjxmxC9Q94xEH4ryJqhbmYrZp6TfGAXvhPUSADexnWAbT",
  "key47": "2zRTR7STJaod8MRUM2QUdd5YHaipbjJgCsHLhmxUhFezhMoZHSquJos5PfYijFSa1GCijx3zDEEU4ejVDeuXu1MS",
  "key48": "3nyRhvjSEeh1iDMYkPT8abWHNJDFJ2HZSETzef9HxcUpGY2842h1M5uU5zybHY5JxbacLbAPKgAVxZ4EDyJuTT5E"
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
