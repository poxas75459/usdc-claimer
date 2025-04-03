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
    "2FjtfyzA1uXhWtyeKNGzep3foMjKavdYXhM3C6Kb6Cwm9ukJBVCx9aRPv4DJ9rZ2AqwsWbXNGns42QUXdRdskQvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qM1MxnqTec3nD4E4RNjBQs5qnnSiaZYRpPAPzpXBH26CvZ4KErtU2k75HJEKjXdW2L3MrL3hghEGcPEF9Mav7Dn",
  "key1": "4EfiC6yCKGVpUKbQFPJeFw2fdy29hMM6cqDFuoEF2YCK2mKqM2q6xoLoyWXSToqFNWRAXr2YYC3yn187U3YbXegd",
  "key2": "DypAbRZtDdzSyKXUKDY6MZ8etiLNXifPjhKwrQD98qxhqwJpJVLnaMw3wS71QcSznQ3rrLWZrzUrtWkfSV1QXPb",
  "key3": "K65WeudbMaqcGMwzqU9uanH9WXG6FY4qwXK1uGDFdUZ2GHNA14P8x34fd6yqujHoX8sMhYEX4FWQYra6UTvKnNV",
  "key4": "5qGGtTgAp7tey1tAz78hfUaPqbTdFPh2yMoJ1cEWo4kyVtfrtu6hHrJJrLFF1gFn8b7NFrT7hw9aFT8vTZ8rfXXy",
  "key5": "2gsbEEXCPrsd3Qb3KduQGasxp6UvvV5PC2JD66dN4ZE1PFHbfUV8d5nYKPsu7HJXHyBEtScB5uH69XFed9H41mUS",
  "key6": "45rYW9GAiy6ZT1mrnzJunHaHAALLuHPUvLafZmivw33C3BFwGUMzKuS1Xc12fFmNZ8Sx7yzhaNUiBuURn9emaaE8",
  "key7": "3iKVrfTS1xBKCjcjPKtJcBzDAHmpCPv2xhHegLT3zy5aBp88zL3BA52JHSLZyXi4AMiMvmJaQA2DMzkibFXwVjNH",
  "key8": "5RfUjCDsHTWhd8qFpiPYx1iXY95XNoUSCJexS3TwGFABr1gdyZ3aVPtK8fafmS5oYSiDkbVGLWRNkk2WQgotAf7L",
  "key9": "3sdaCbBH879ySEFNFdtyuKp4icjWV9YFbpt42mdP3CuvhgFp9RAwyerskkQbrFH5bjp9iQGy9kgoP1d4rd9PyqjR",
  "key10": "45YHjfUtZ33JwmoK3KXkNLGCSSeezYUdhmUNrNP5SqNUkTREvmKtvmFz54hKZtxuiHoeCRvBxz1oFr4wwAjZTuza",
  "key11": "4Yms3Gc9zt91a13jENv88w9povLo7V4JJTGYAa2vnqbbUWrybu8TJmaiVnTSaY4jnDQuiKARmU6nRySVTKu3sHBd",
  "key12": "4QwS6i8o8Y31C925tUUeEDm85azEQWpT67Yf87ihy6qgTGYkHFY59R7gPxxFhbuj3bXDLGDYFmB5tvXf86Mp6AAZ",
  "key13": "5xe9Qo6WnpqYPDTJpdt3H25xudfTn188QwsioersATQFzvqhR9pEsYLjyeWks1GUVEkJH55QkmBZRjkDouHXgNzV",
  "key14": "5HkFM5DKuvo6ZSn225ebxWSzz7hVnU2HWSzuP44ajpsCrinh7CLGtJfscV34tLJ8kv1QKD2KbLpPWbfYr9KC7Mdm",
  "key15": "cbjyhpypvbrAMEWdjj7h3k4oQuuQNGaKB1MgnQXsDZkJQzaqqy66TMrzQddByVXKgV3MNvbZDSR2oy2uFjt7ALn",
  "key16": "4wNXN8VQuHqD95KGuAUP73X35UuPPRo1DeqT3F4NB1pAzi9yf9SXc9Ei6MffBkndMR8719JkoCF6hPM3xXpRm4rv",
  "key17": "4uXpyF8iYQZDreWMq5bxMppF2R5GSqaU6prQcyqyLc18eHDtRDdQrVrq6vMDTyT4tbp284LPxYSdwXcZPV5YZzhH",
  "key18": "ti4gcCQ9Lfchri2Uzeap4oU4T2W1jq2GPLYX791M3ZV2EuzWhzLWLmuEqzBoXprthNDn29CNaTfNasEv49v99ZP",
  "key19": "62XutDALpo8gkwSsDnKKDW8rG4K6kwgFxWCpPaucWZCLtuPR5QYTa3Cq5aH6mhrKJQkLn7YX3N13y24kYXBAju9X",
  "key20": "3PCMjWFELHkKfzDozXyrwhUtGCmWCPSYfBLUfK6ZBm95bm7wHjb9YPyBvBbDYdp2r8YSqiVGCGcadzsLEnkGuQ5n",
  "key21": "2LLhkwYZm9Uzoi7hA72ddPbTrBRbFXCeqUta4WhHJyhwUMB6mNaGmZKuUBejKPpo6GZasSD9oHTxyHSjiQ66yxki",
  "key22": "35p9Ls66Ktc78xihiAgPpZkKfeTvR27N3Go4ZG6xmj7MZjmfyDktC28BHHt9erVMm9BeDdm57ixS9tY8D6gbpBcq",
  "key23": "4nVRnuVJ4xXSNcyWZTU1tpMjz1YNjYFRbZpEfKFZokqkHfwDVZV43aYJ28wiTVNixYn6Ro3t2DZzVyQuHs1chaYH",
  "key24": "3bBUZPB6CrXmnwFtiSUyxR3uofgazoyvKBiNNmSuGkBN9ZBsoRbBRpCJtLdZ5Kuh3TQgSGuS7pkUt98AW7HzutjP",
  "key25": "2yVrUdVitZoodqjix7rHEjMT7RRsuRDKRFybeu3kTMo6CADZRnHvGSB2ChsGDLgCxUJPHGE52mMZXSnJdjJQh5sa",
  "key26": "5TcGMtkZKfWsd8Hjr3P3pbaJ5d4zLbYPP7ufot8vtypMbyKodJnNETE9pXKyxijBnHk1HWHMwXm1LBz9HkrPK6vd",
  "key27": "4bxi72AtZN7vJwekNQs1HdmAVkpueFteY8DbWDKiSvJTQkhmKjcSxcn32x1MbuuoPnB15brPQkh42bHyohR95WjX",
  "key28": "3NGC5pmztjhGKruAqgTAwZzwYSP49mzQk2iXfRC3c8NUkagNt261wJnf1dv7kazkLfX9QL8CGk3qfDEkawVZaPGt",
  "key29": "3Fmv46FQiRs3RUiBXX1Sh7qKSkYCkZH4v9PCrvVDz1YTyD3TQzqZGETRLa5d6FHxAMABsrpZipjQMWuZmLDucw7n",
  "key30": "2Ho1SCHNg3uLrrM9FmkJCaEuJrtZso6Mn7xytkwpaRy6yKka4MBpvLgJNHJtJ3yw3s8GPaYNPFKRqVE3oZKbdGqR",
  "key31": "U4t2LbcRR8KB4SBbgCJaHZfchpJ34cmz88xcXU28oQBMP2TApAhdnMRww9JQyg5DYN9voYCvRdRXzxUhfPAATGt",
  "key32": "3WFy4aJfkAZ6ePGNWp4k2wU6mxfgL9hQyJm4dcUA1XMiZaEdUdAJwFUVxBEm8oVPHzTGi1y3Zw2PWDhEL4gHhXq8",
  "key33": "5B3PwYYEpRziXCvMwFJvRU3TJeLoy1vBNzqsKrXUwhqtoCoGhSG9RvxxmXtoDCu2YQudcMFVATCtEHtt2kLxKtZa",
  "key34": "4XiRaY8ukLJ7kmDJsivBXD9wPHuvfx3TMJq2JMXiPGzSgGs1mzKuaA8YkKCMffjZrtN5n6pbRVV7Hgzup6FFqULp",
  "key35": "2se3Qi97rQVAcEp7JL7BrtdhrawArzeFMxvwmCwrE1gTji5JigcXgdgsie16Db94Pkjyk4Qj5yEib6FC1QSN5Ywc",
  "key36": "4Y3r7vJi7KgEeWLD4uZDeCAGwmnMSeD2dhPXa9cveJTsQT4ddVn3MQ1C238fjmXAVGtBnGNerixmiMPYHSACicLD",
  "key37": "3HccHJRVHJL2b1JZmo4mA1RuebJCT7A7gvBMyUkXUWP8ENwXCRa6rpycPSAQb8wsAtaZo6pdjWeoaRuX7d7XZN5h",
  "key38": "2BWhYB5Zcp1c2TW3a9nLMQtjyccABb18kGkoSoUpX1AaaGnJTX7ymbGe2YLn3LCRJ2i76WaqYo6u6JqgCGt1jd1g",
  "key39": "4bP5Gmx3MXERsSJzP3X6JmYA7uyd657B5yYnuMZ4xCW9fnp5t411BmiVDbiYQocEKHNtyGLwudZ44fgDqH1MLqLh",
  "key40": "3mxVN3n9ry2p2bkYVaVKFKMYkCLLsaJA4AdpuaMe7kWRbtA1qHJwvu79VmLvYAUXbLATqsTqPar6Tc7TtyAeij2Q",
  "key41": "2yh41KgZRBEoQptgCihS2REP9eACaVbVkkTeSSrWzwKnJLJ7oE4r9XTNfezAqbj7NxCkm7qt1M7qLC9whg4QLsTr",
  "key42": "3BSV6JzUMWTpE6u94oThqL5WvG8aLT8mmtaB2BqLeB97RfQZgQaSvicpg6YVVN4M2fTSZb1DcMJSXxGt957bsCS6",
  "key43": "dVopcPzRoKN3eSesi1jj7tAeHKTVuV6vJco2U3SzmhA9NBSsGyEU9WhHD4mGEtfssuZCLJqibuQ7jahQx4yvyGa",
  "key44": "5zBepd7i8R4XG74mbGXZTdv1R31Vot2afMcpHEUELatLR7MRSukjfxsfAsy7omCALRDui1rBwavMcS9CX9A9HnV6"
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
