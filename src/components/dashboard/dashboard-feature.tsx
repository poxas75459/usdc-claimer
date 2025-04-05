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
    "2ZMjuHxvKpfbv9TRLPpaDKtNsVNhNwuyWkwcHSTazqJA3UQ1JxipFcktbLPejWzDDqEYvuec6fSWTEWuaa54jFRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tDsekWSzVboNJmhqVwuKpWVu5emuHuvcP3qNtnBjPSkDpdhWXbyg3t45crp8WQ6vW2xUTEVTubvg35j2KMduy9v",
  "key1": "62E8iyBPvKCRHKWY4LV16BgJPLz84E2bUPFTSqyi9re9RqBLP5oxtzJS1tpr618oNxmB4e4CT4ZJukZKeZBmuqtA",
  "key2": "3c3LqC81gj2WWE2qunezszx9Vns55NrDL67z5mFL4bDqyA9C6gZ8ChK5BF8Ws17staeDE9xdTSwCwwoozEkcsWjr",
  "key3": "5FrT1QMn6PFjWQCifLv1pXsMKL6pojcbRRve7TnW35udUvXFfqqLQ5rd9DUBXwJMVzAgpkZgGqxtkeoVkhisLs9x",
  "key4": "5jBYJA6zrvRXT5LJe5Vg6x5oXEPtWGzGdfUUjNvRdgt6cHNhQ5TfbRkCYpurbpUWCSemgd9efvaypNeBnkqbPzF7",
  "key5": "2QKWqRML5sy73gR4WaK51jE7fvmsGssKus62Uzj2KP2hU6qQpUVdPVSN9hF4nsZSrF89dQEujaCVNto75KPWX4xJ",
  "key6": "4SnErde2QSH51YWV2aro7ZancUBxhmQSY437QHfqhCoZVtpmA2C8AN31D4VyHc54wbsERwJM5yYom3pHo5NvsacM",
  "key7": "4d8pdp6AXqbNrPcPHMNjj72yZc5vwNawHCjxpCYx95SNz3Frtx5q7GEw5JY3Z1k4Gny8f54dFG2XtxDsiSV9wYcE",
  "key8": "2N2VJACTL9NCwaqMHtK3EMgp9URGDcVMQPsuLY7VVc9gFcM32MtYpL9MsdGC3xzHNTQf7ackVnwBzQSfSqY7Kvqz",
  "key9": "3D2zhsux1BVKTHy3S6jwMkCjeqMVyYSJRMG7iRR9U92G2TzxSzmvSpD3HNNrtke3VFGuBoXtP4ZroGqesroKhaTh",
  "key10": "4RKGCT7fBYDjV6AtTcgktT9eVPC78fxjB6garAd2H712XkmAhx63qSwrG1gwWx7KMdKVu5E1rs1qQc2d9mHcGmRw",
  "key11": "4eE37GY94q4s8aRZEpe1W17iaMXLNCw34rwdodfadiXP2rcc8bi8T72BX3MrjcwWzW6zHFmvwcBVJ9KNdbKEHR3K",
  "key12": "3c1Bz8ttJB88FbMuV3DqiQnPRFdvLPUqxU1Tid15aBa98ZHWjgwL6FoTS7ArSGthxJSe9nzizXm7tFqCDrEXfrZC",
  "key13": "tvh73qHkUSeMLu6vKTTsDCHJwLsBxUN9p49FcbmJpzJvDgRDCvDts4Ux9vj8ctaoCSH5orLMGCnnZS6V1UvHETq",
  "key14": "2tiogbToiw4PUHKn3yR1ZANGqCGrupCZPYgK3qHrSWKDoEqghyXrKM9JuFS6CGYKs6K4FiP7JPa6zWECFWu5QojZ",
  "key15": "3daNc39RHuHd6m8t8Gbty2oShGL3HLftTYxGN9CSAJrRDnwxxLkWDXQpmqhBxS8Um4KpG6MLcP3ybB53TzCEssiD",
  "key16": "3CtBGXWDFesGE19UNTMuixMgDmn7RZe9ikETLE6FbFujVr959PgtKX4oobSDCnApSE6b4wH4VdFm3y2G8SwueMpo",
  "key17": "2WK9jN2Zn7gjdRNLW7K7pXL4N3TU8mKzt4GXqgr29PbzjPSzRuXQJaif1A7v1s5rgXGJKi1j3eqJewMmZt6aktu6",
  "key18": "4mvurxeosj7fmthTfdni8m6HtU6Z7M6YxzVYyBffsG2SWQPsPyoXPk4a2jgpwTN9nMPuXKUdFiC2j3P2pdvAdRij",
  "key19": "2se8rnerY1sMjwskF6BTFsFAhxpycXBoMCv4Ek3spFBKdfmBn7W5jneYiL6CqoFEMgXom61Hg5kH8PqbZV19RF1H",
  "key20": "3w3JfVxKZgQnTPjbuzVSVUNPeETZd76iztSofKSHj1onanYLxNHjHfrDStKgbbjg3DTe6dX9Mm77PoKSaVwLxM7U",
  "key21": "5NNcBf9JxRsAB6CaRsphi7UW6oBKY7R1XuwbYHZA5Tp2vgUQhMGQwfCwQVu9JrYfFSTi2CsH52kjWJv9xpq26PQ5",
  "key22": "2M52NgySoeqkP5gjr7EpmB9AVepFq9PrGM7ZkioQwrf2TRDpRiF5xida6WKDzygTitJPFgq8z9dqK22Av9js2g2L",
  "key23": "2q8nQ9e2HarXPKHbvNtUehubBhhnRqWuhsqoBicMWTM7h8ViAPmLbSd8PB3nBKgdDtNCTKSqTgZ4985fNSk1LhvM",
  "key24": "2et3kpPRN1StE2Y3G3vrQ7LDQ7M87h8CGRNVb12usgqSKa6BhskP34uQa61KyX15GVKbaaYeHKdMM2DmGKtZ3gsP",
  "key25": "4Dc9y4tEkbKjx7e9Tzk48zYeN9dTZ8wJ9L45BCc2ktZ9NXbKBspheM1cGWLUygNrK6n4T8NQ6AeaXP5nTke9mDWe",
  "key26": "3yTH2NUxX45pryNrM7tUcaGqSCyQzkFPDUQSxr9aEBXuuYBo2abEELv5CBFEecWnAst71GPdkureXA5ESLr11fVq",
  "key27": "EUuLnGgwMSzUVLzBKASDqmxfYyhSFgJvxvdnoVwy17AfuDB8aq2BsatRjBMapsNikzEBrUgyzNGBUjjJ54QQeB3",
  "key28": "HP5MmqDdSUmYqLGG3rAut5VEgKsiunjDmpGsnVkQxRHt6jZqb9tAeAwhztDaeDUfcPorc6PrtcKMSSJAx52bzWD",
  "key29": "YKaGWEkgqznTXzgytHvLrATqS4EnwdNZDLT57HgDGLbt4j9oHhoEQKgPKJJRFnoSU47rwQAPDRAt1Z1Au1fCwBc",
  "key30": "3YbW19XjN1i2Y7JUCqFz5Ge6nEM8RvBmkNrvBYjdbLQcGECmHGxxi6hSqqSGbZ7sZnGVyY2Rk9FrXZtCjRcqpicx",
  "key31": "3kA2pjgYRQwj1jAtKJfdZarfgXJbf66x521sWMKjPSiShmob9cDav4GZNSnf38tPYhmNPBHN3t6cSgULHW6QDYtp",
  "key32": "2PpP1Bv2A3y619kRoahsSC4Dxmyajz8T5srez29k9scU7vHCijZQgb8eNsaj2CsFHd3yc81vZy4brA9guxEfPJpV",
  "key33": "2bnzbEutL8kGxwz1mis8jnuiopGgfL7uhXWw1ef8tVBaa7inyqy7JwC9dsTL8zYKP2DJvSGgQdPCKJFUdCj2XAhs",
  "key34": "2kMz7KA93kXD9GJzMagKctmGbx3vNjEko31fAh3fWnaG1dTa5LdzDGNohnxaxxJRsEH1ZV3eZJc4iGofuWyAoJVA",
  "key35": "2V4fWn7fPeoEgp2ia5ixr51QH1xfEYPgjBhABxjDpRnZsvoPpvdMjF73YqWNKCXUSYwLS3kbuW91TCWL85pGmwUx",
  "key36": "WLKSfeNTwfsGKKU6L19EGVfsh9tskv3WH9zpiWTvq98XrZsGycASg7REpRfdsVsqTvU41HRtCygWLidcLfxPSNj",
  "key37": "2bES8T2NRhVjpVzyuPCNNij1k9ris9beVp4EtDQu3byyeCWY1cwii7ybfxp4eLwoFKzZDJ3ej5ttoQ5QGsVgSKBb",
  "key38": "5znzUyJiPXLTMdcWgJHJTThQ5xpsoMbp1DgjML9t5LDCqNkicCaDriDshLYMNDiQMLgF4MYYd1L2Kz54Gh7RtTUb"
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
