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
    "3MBLrVUZcxbAFywcWLQD2n9pLzDk974SsbHKJxsxgu3b1qcYKtqUpkXH6zQ7TybTxwtTDfFfkkpg4yXXMusjkFrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DPdq7bpij4SriC8jGWt1W7eVSTqamXT9Ue2SRKVTKbzkTjgZoNXhP2AncFL5d7D9bRPmaoxopS1LMnnGAcUdFpT",
  "key1": "3XfhTEsimpiMy4YzjU9CVvNcuijBNUo3SsNyjXTUNW7D22STx5d8zFGrCxqsRhmK6GUoQDoWGhmSVt9uskyT4A45",
  "key2": "4LvPvBcFW3QoNx75JzNDYXTFrJKbqG6iK2B4pyyFaB5jzBQ6BuCnBNuo3vxTNnWTueZYomiSVavdcApME3rJmKSx",
  "key3": "5ZCPT2n4jmiPUeW2euDcwU7rkvsvMLRbmifW1BujhpevGDiZJ8jEPWjUxVugLMaaWPdT1hGCAakakuP7XeKJY4bU",
  "key4": "5VVF1DVb4jNGLmxEAmxEbNyr76mzDDP6UVHJFaRrGiE81pLT5Zwu33ecqidoj9DKUzNk7eQ2g3pxbWubUeHGrWPs",
  "key5": "3z7X5ckYvtKTQ8zEn4JTmWNz1SdJFwctfZa6WcVhH3MBdfYnNoLEjbrMgLq7feMJXigadFzeKc9r745yw257W2r1",
  "key6": "6hmtpjvBvmFSxQm7YEpkv9Mxn4GnWbgrRD7H3MWD9dGoeA5rmSZjh2LYY8veCMjnfzfxA5GUm8acrrbj8VtW21D",
  "key7": "4HuCptkwPietvcTmPQMFrhZyhYSQUv5NBQob7QS9jn6y1SPauGosA8L9gVvAETU7DTqbT6XFskxZgrjC8jBcEU3G",
  "key8": "2draYVvWhkXUX4jbfrb6TUsEMczMfPuT8Qpvfjd3hLZBHWZ86KaxKJY846VskkzuFaoBCen2fUi3TdK1PwGvTufA",
  "key9": "5h4yWgBsz5zukqLpca2x7kACLFgDgDHo2tLeXh48Z5QjG2zx6z3i4Qp9RQJCis3RL5ma1MwdEjbtgSfnSCZz9WD",
  "key10": "4zXNTYwUNc7SK6VozsfDvc1wjYUrmFZ61AAFHR7nUTFscuK1ESSbNHxybU6wr5mENJLxHWd3NvqFC9e5E6msh5gH",
  "key11": "47aZv9pp1TpcFNM4kJgNnk7m5QndgEjNUqBk5vJLPmKUk4gvSDCfSueqxc57Kon9Sz5WkbyhHKw2T9dv2nUDzUDF",
  "key12": "47xud793CYXr6Tm5yFThUtWRCsQ18rmhSBERGSah5gYSMTzAzufNxvyrUyMUy21bwzsNcofbhpViKWPhZ6B7kuHd",
  "key13": "4mVa4stPfB4abcGido5ZfL4XZkB8draXGMoqYpbGxsuNPpfvQY57w4V5ok9bgKcmVqNDjJtNbVGUHNqeykrLiLR6",
  "key14": "3WhGLCVdkce4hgKkg9iAq5TCUWw4d2Uigk8JRR7jPvGxnvQak3xpPrcVoosXVoja1VoGktNd92M9SZfceZVtiN4H",
  "key15": "3VkkqrtE1rCGax3eyoNkggw2rhnEX2GksLf56iHUhsLFGJXBMDLNSHk6NFszoYTvMDGspyKi5HdQQ3GcQF5dxi4Z",
  "key16": "2PSBtvTK2rsbr5NT6LzSENaEjWxuCxwV3fx4juv8exM3Ldftnkdwf9rQkWWfnN4YaGH4WctCE1mnLL66JGmQdQek",
  "key17": "3LUiyFXDdf73UqbnEWchYCkYwrRJdxXZU5FhsZ3wquexNWSpkHz7u2KSHGAHjYZ7diZ1jPwEpvJLpk27Dgn3STy6",
  "key18": "4wW8t2rfyEHZMbRUTJhx7bw63xpYMXiVZd9rAZ6oKrXyMNzu4ozdDEz7N14UmPx65EhxEZ4uEcvG1cK2FH4nKGoa",
  "key19": "24m1JqatZbkGn11m9hA6ZPRNvrs6vMP1FNKiCLvGeMeUggTqcmGCBKnuXNcZ7iA1HooWUiHvTeAaitUSS4RYEv1o",
  "key20": "31XatSn8NuEG3VnkHZr31nA2jzARiYRsBt9GT6BMv3iNPWrPeS7GuK4PpTYsQ9y6XFm93aus1i4DjzPRNsNUz2Zq",
  "key21": "2DZvH2g7NUmRkWkGcbet98cK8pmZC2akTSCeTXWkPthexMy6ogBXXhSqipUAsDs6daDxiZWesHGHrcEHZhPvzwK5",
  "key22": "MjaHyB3bQgQP2MAyqFqr5bJ1s67TtwF8uT1WDNUy26p7xR2D9BCrSRYzkCaTWft2vowWKCqKyKHmdsmzcYnwiQM",
  "key23": "27wSvKEbw38BB3tgHE6X2jvWyxZjU4CKwZojWhyxx16tVo1bERoA5tnxn72h8WMgDvMfEvUgvGqmSpdwbGnhYK73",
  "key24": "4J6P5RYcBTzG2Yij1mEmpkFNonSmCtDUb5xuFVoerRnnmmj9zj1a69futyhFYsspmZ3ky1uk7oG8pfwQ6N1Zo3nd",
  "key25": "4jpfGhQFnyDpg1d4d7XUr25PoPSsmri13BoJHoFxFwMQDwfP2fPnbcA4gDYnidjDEo72vunujNdwTQkefJ2Z7RJ5",
  "key26": "3r7Azzk6zXthhZYGCw83fRY2TBqTpWewehWxqLBL6UJjqJhjG2quyyFyTjqbpQaQhv2D1TgZALU9E6NcvL6f7hqV",
  "key27": "2t2bvWKfYEQ8PxC7kzgB38hutUxibxTfrXpADWz7FVba9pxYAtdFgA8uTejCcAg59dkf9iFfFTFgk24p5PWJPXDp",
  "key28": "2P6sqzpkyQA7cyruk3nXJHz8XXDXpxBpLdm7QpKNb4XGjdjC89Fy1VpzsajBk9dpZmSztrnNmiJkGu8xTZPNiHjC",
  "key29": "Jk7N8LbnLZAsig1RbgQeb9G2qpqSDacW8YeGUDCYaHDVdRML6diMXMCEspLwcaQfbuFvNahPa3BUakT3auKG3nS",
  "key30": "4nXZJ6h9ERNQre6y8a8FSj22sq9zkD3Stgf6EXEZoBBVg8JFPTh8JcNiG9skfNHgJTv1MWPydPFBKg2aExM8Ee6a",
  "key31": "4wmfJyWk3raApSsF4HVt2LpiQeTcm1cABrXZw2pAgp1bhkB5u2eYMDqYBDX315WPa9GzUZC1ZjXj2wm3t3YMq4gW",
  "key32": "3yTRVfa3azD2rbVDBMLGGtVUAQaANvjgiBpDTsfATpEnb4Q1e4CZkfEbUZnWfVq9rWQcca7wpAG8aKgZTZKURRwj",
  "key33": "4pTbxySHCoiKfSHipfDscYoU2k2fWLkvsEADURjk5tZPhtVim7WKJn8n5xHc1HHtDrRuUGvEEcA7VmT3Sw2X2CXR",
  "key34": "4kSMwK4AM4H9cvXKTosP2fhayafwHav6FsAnX9zfJXxfJ2G9omLH2DjH1DKevCJMV2fE6Zc5uk6CoqVUCTTufnkP",
  "key35": "2hjfcwoQxMKNyRGz3vGqnpcFsxjjrCiev75Yyye1XpddhT7AYhFstEGJm6mAGLDZfHa7iZKvXox3GK6VpKQPy6Cp",
  "key36": "22Du5acfRS2NSnV3462huQdHELZ8tTjERktraWGbeNsrGinSXGJ4zmypSjWgvi8gWfjW3P8YuGnxv8G31PrsLtkQ",
  "key37": "9gu33VxZ7suDfeTsLkMAUkKYtips7WeA1Ammbk7xQvg8hZZDNaBgK9wC19vnmpW84ziLjs25dEK4BsGcUrLkP6p",
  "key38": "44ZsG6tn8My4Xx2mkA5uz44Ej1KVDkyzZh927uXaAVTNVwGEptuV56EvYy9FkcZkSbzhYutQYKjfB9CnNaWWfEkg",
  "key39": "36y9SGxEaeqhgSt9bK5zQEZocG9mdqrr2CRhiNHcBSEiCotB2fyDzqMZwqTtTw2hvRLH2rHwQh4prZJhk2WtikqR",
  "key40": "2L1YkXym1x6WjK1TNkz5yPaK2vbWqdyhCXA5LA1bw458YAkoD1Pn4X542NARwqaK9YcUhpshu9gWDSk5TWCSEzah",
  "key41": "232Xfbi35xDvagXSNYcqBCF1QGTVuSf96wfxZgmbSfN34MadsTLRmzAbmXaxU46GCNqdmFZxLEZzD7ZhxNpWxaPp",
  "key42": "d2pUkZehM8AAsVU2cTfVou43m5573Xo28QFJn4LNMJw5MExe4yShpmGuEowv5jABp4vZuL1Yd2GJme84x163Mru",
  "key43": "43jA1Uao2Vd3EitYBFVgaSozGmn4jNbc1qvDHNN1C8kiwSVH9o2pAUL3weGLHwrGPPywBqWiwWrGvYm4mWj4jT2N",
  "key44": "3y8ahYcgjw8cNxXuZykxTHp2ckod5Kx4dQaVEXnb7PnFT9VT3AxmSb5TW5MvtBvSLks5c7qmhvATEiUbVJWp8FeA",
  "key45": "62VmnYK3jBX9mrs417RVnNUCEgUkJ77og6ypr86rneYoz6VsHJxL2MEDPafw3tJ8bZcwUqechAQZJ1oLpFA9jAim",
  "key46": "5YnTpBDkLYz2whz9L7anxNbvWAF5mv6UeThH4LTmqe5aLYaHqE4eyxJCosLZDzUfVPuWEjzjLW7ZPojVRCfqgkx3",
  "key47": "24t783TMboYXTqs3eCwL6AURw3AUaWK7MzWxA2aoE9SGyAgrChX6882yqYVE3NUvvz98NM2kyGWcr9zQKzPSMK3w",
  "key48": "4Ga7EHtFcd4cxcmrKpKeThXDkneFQtnZonEZK2nGUX7s6seyt4TWUFNLx4gs2vzTpyUpQJuNcKaZSH7NibXaVJMV",
  "key49": "5m6o3iQwtPsNWSzgtVJkYLrsihnwyrPvZ2Eio5HmTKcyRHzWGMsFiyVP7wuCLvxCjccg26Tz8TZGfcFnTqB83YqQ"
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
