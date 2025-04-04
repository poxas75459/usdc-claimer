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
    "4aZLrXbFK86dHutt7bjqnqcCuPEL8vp2wTdkBLEjiUC4w7P3eLTybtTz5ohy3aoo4qKc7qpTPwq8isXTQ5grcGwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KNdyDVy7gMyFKgM5pdffqiDgaQV9SthbmmbCDbrCjU9cAWFUfjowRZTBinmCemQwXacgSzsFte61UqAwadrspvB",
  "key1": "8NMPEpDS5utPKioTccdjD2rSVsYKm8buFcYpkyPxsVvWY6VCfk9GQRo6fKpvFM1p4Wosg6xHs82J6yYKi9XPgQx",
  "key2": "iT8ZRPMjQ3FZGz4RMw5oACgFyEPtHw66s8WJuJ6eBaE47QvTr58hTf8rCXYdzDBVnemprWJKh9RMyeVebjGnHAv",
  "key3": "4C2X8pgK72y29esrUtz7TAfYBtGhkK7x2dxDSZhbSj98g1uLnuXuQmbCBz8oDRdHk25CuMwRjXqiLzEEyQx2ZnE4",
  "key4": "4uUYmr6VvB5iaVTtEEVTw1BgtSBc4AgDgfv72LvEjdFSBcZtvVex1pvrTgoS6scAzbB4Pw73iGYVxrTr6VmS1Wim",
  "key5": "4a9SVsu5hTHugDQ5ZhdJdL9r4N94Mkhh7WmEAKHJffb2W4pVxNFjJQNmm88YnS4m1VHBobeNDiMx5zY55bJ3uxZf",
  "key6": "66bJS7BhzzRnmpt39xwsMDUdULNrk8ApymeXhoCcNLDZPuAucYdB79cFGboJcS6mSayNh2fFgDfHSbJqbxu1C6nv",
  "key7": "5eb7tTpHJ5dmDnQEgTCmP1NQaEtajde3gBtE5DNshr3dUrxuuqt3oMgpf8i6ajUU6wkXRw5yhqQMpgoRyQdZjXj5",
  "key8": "8B6DjQxuhTkaeASCGfW8D2MZV4EpDhNRiLsPP756mbTeQzFrVzvTepRCRzKwcBPCDXKw23ZhEnuZDhN7NCvwSbN",
  "key9": "5n3sazNy9amve42ATXa1ruxNrJd4EFq8zJifAyaHh73W8DAL3zPEz1ybuLVtivuLnju4TMqa8xkmpgoMWpB3MXzC",
  "key10": "2ajQueS6BaS7uXZF58WmU3Pviw5yvJp8W9aGbRexPgoQZXq9RCjyKMJZgWPnCem98SEhEKTBQhcXiXBiyyujUrrN",
  "key11": "46v4BdkiEgfiiskFonKEG62otj1MmKsoj6pxNkSMXACCVAQwsPWcJYfSQSLRXgiYTwDzyBFtYaEAZc88h6QPEGj2",
  "key12": "4TiDA97ZxNqPjHxCgGFjifyYJ5UDxYMTzA9E6xPxvCkjZPfwFvJxqQ3hrVy78A7iyX3gApveYBZvGGHL37hcPCbc",
  "key13": "277YctQbcQd4VsK4JJrHkjZZnsBnM6dKMUqKxTQVU4K9Hctt8LZAhkmhWwWA4pFintuZZgVwAvHsFDViqcnZttAA",
  "key14": "qeTw7MKZxj9AwGmfWRtbMS1MNr7YB8TSdnV1AogKGhKUhTN9bZTm4bCy658ifF7knhK6b4RWpKRuekRs7dFdWj3",
  "key15": "2TQ336aL52ipEhsgQUiSKoqyBQUuUxEC6MYj69r4MMF76Tsh5qiQkUis3pfcdqHe4R7LFsnVTq6ppm9HbUQEBkTV",
  "key16": "3hbhDBwKn4zFBAWdBCTDYAuHrGmmfoHePmG6XhEkp4HPMn6tA2d8c83yypKJXZSjgf7uPQ4qrpX4pPU2nDR37epc",
  "key17": "5hPnhaiiR3x1s51rXNQm6NWGv4iE3K7fdy7w98SVc41HtuT5NHqXqZzZ81Ni9yh51ZE4X4zyTBNeUAT4ZhXz3JrF",
  "key18": "2jtXP4E8jP67JEAu7m1LMdEh3j289sfvhNsN9U3qoaVLJD87TWsqM3HC8Bad8J3et7AsGfMb2pWnEnACxBz7YUrq",
  "key19": "47p3heCjESYv3CG2h1mhXwvuuRUsE5nGAND5GoEijuH5WLaTFPL3Lc8SswPGDqUtih6NiJLP6AXLBn4zm9ysW3yF",
  "key20": "3hYJZnfpso9JVYK19qmEKi3LctZ5HQeTZJnWLEhUTyyK6BgUWsXNY5g89b3B8ab6KresFdSwGGZ6EnVKbb2dfLJ5",
  "key21": "5SeX4MQdZ4bJBVmsqVNWTD2xfsy5eCkVXkpk5hDjjVqrqUVHtHV7oCygL74pWBP1wfj1NNxj9KuN5u4ufRVDN5tH",
  "key22": "37n3NEdjYGM6yPAtddCD94CMHKb4j1UUZGmmh6DYWLPKoBvLPhEuek2Q9Qqo2HVb9QgELqL5pKXoTkTwykyB7hPH",
  "key23": "3j257FnADg8pXV7WhTUHGJJqrT7FCkT9KSinH95xVUhhWSmjVcmkTydQURwkMJYhXmoPfGGSJMtTc2W2nbxzEiLm",
  "key24": "5YuKvhk89BMb8Lnq7Jn4L5hDTc1qujszS6tELrjKW167VsKGd9n1f3yNYdKrPsFuefYco7TKPEyAHDwJ4vCCnYfT",
  "key25": "5C7mXqGyKibTo8Xy9WiLaSnMoPebF2ibrMCYWXniQyYMSCRMGNqXtvPq5JNyNe1iiyfptckAZtx4rEPYEMefnDpA",
  "key26": "2qeYD95ianRqQXkKFNEvzXBBpNLfwiVK46XCEgSWGXQPV6RSMJfRYAAMbgHBpjkgFsxzJ3UjoXaSNgtJmiWvycBM",
  "key27": "5aM2bap7Bzq7jQauP86p9Z3nygz2cM2o5ud18htDMTeZjHfUF6u2aEsjsogNW1jgPj7oYxQfFrwuyTd8ArnQSmXa",
  "key28": "58KirPh7uaS26xBQkHLkZcF5jPtLqe66FswNKXL4Hv5XqZen85raiBaq9ZDHM94zf58E8FhQ3Ci15PtQbQxKneYU",
  "key29": "4paPzrVu3rsLTTo4a5eRQSVM5898dEHtvqA1TNtooG1DiFFPxZPZwiCQu1TzDS1i3TjuYWe8Uzecw3V43a14b5FP",
  "key30": "2wbcWozw3k5cs73AQoUPhqxqrY8oeWyPJEFVYM1rDjZdNfhP6zoicheBAE1sJ58rjYxzg91vxgMBA3rEUayHLwvB",
  "key31": "4TDof5cuKh9EmrdLaohZWZB7f5XZDRFLgyeuxaZjyYZGNWMS3rT26JfBBUyS16eL4nkXsSkjh64AbsbrrGpm4U6J",
  "key32": "5bE5RAGZCMTdQJnDhVuVn1ojBV7cwsxz2sCVJcfRfHWisQYoCGmmmPrQ3yJDGNj5eqPFUegR7qXgDsydYYQrMkyT",
  "key33": "58nST8QtAWFSbG616nkGNUKySKieyeLSTWYH1vwwU9go5JGc2YsvT2Yh6Zkg1LGzibJgcABrhBcjtnKFfEJ1NE7J",
  "key34": "2WgFqBUci7YnuHFyTinfyc5hZqTxepV6fN1uVnV1T9WZ8jhjKnz3avQ47pcQtBQJ9anVFFG3nZ1uXsxaymKTJHtm",
  "key35": "3cNKcBHHm9qJZwAZYfzPFQyqXEP6TprWQ996yksDMgz9eXsQqHsi7rPubviqyzHc7r59F5pfRM1HeA2weBfV5eQL",
  "key36": "n2aHmEWxZcxA23JdwDtHwRgYvkiQ33v5E1fpGk7R2wt37GbTMdyPLBNRcoR6LK5HGJ67zLA6Bz28BnD2vrePzEw",
  "key37": "2SQhBXE9Gwkv6LLxqRAGSR6Eg3D2DGWEEqQ2PWUvkJQ6xEWJiV69HbK9h2VQBTBDftmZmN2Rx4Spd63aUueHpCV",
  "key38": "xLarf4icnguHztAhMqrAC3EBvdifmVSUQwackunMu7535B1o5w8Mca8efJrsUuXmyV7JxTbZQ6iAFVA18JFA8BL",
  "key39": "41pzQXnmsPFkEuaDzLUec3c6fKF1CuyBmcqTQ24WjgvRYxVFgaHnyTFB4nvS31551wS6UTWuCNzU5mBac2pBhdXR",
  "key40": "5Xf98kqw34fRcM7xrAX7uPr3JjJiRVrdcdFhKbK4Lzq3ZdaHsLYqf2ha5kPxKa759ZFc5h1hZ68R9JZ4VMMfnmeS",
  "key41": "5oBKiSsPF4oEVhqNauZeQ1oPBYpp2vcEK5DSXXokAWwHCk3v7Mx24E24sdfE3UxyF3G81DBw295ayB1GDaAEf8Hn",
  "key42": "2xG6wq6Vvme6Fxu32mQvkMTtGAiDFeX1KsxiU86ZGziHB427KZYgPcNgEEW3NQjF5xn2XzVpY5bLkmGa5PjWHB7L",
  "key43": "3oEG1sBYwzdreYBWWzU3ZErR6RMQeEQYy6NbPgJqbbU4aLz9BDg1mop45oi42eedeSApueUCzabnfdjvHnSQ4zTu",
  "key44": "5H5VnptJSixUCaudBo23pPQaWYrk3wgb297Ys8MwVcKdMCi8FNyCF1DYQvfx3Y29pVykBZPgxDRAXbNQpLV5iMJU"
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
