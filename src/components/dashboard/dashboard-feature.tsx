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
    "5ubgQPc3PVNiCE8CdjxRr35WFAkHecCA7pwyMee5g74AHqT7nB9w4ZUyuqAUgD7VC7MeCPTfF6bKGb33VUfD6iSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z2kiv4NTWCRKisoNqpWzVEEFEjVLShtLp5G3yBtrzWJ9oHL9jrqCG4vcaZ4ikEDbPaYezNUABjycLhChm2eonhG",
  "key1": "fU4xftDMPRSxS2xfEhSCzsZRABRXzeyLJbzfEyDfVbeQRp5u9JFKRYWTPMt9J7qPtFBrAomXjPYur9fkbvmTxGg",
  "key2": "2UU5sWYTn885GB7a9PUHkdK2kKyDK3jYWtSdErs8yTNp2w5ZDB4vaGWgYYTKa1i4E4Jrpi3MoQ6tzRXyGCUMTd1C",
  "key3": "3mgtQ8nrWXUWv8D4b28NBDvgz7T7g3txeqDnTKpwo7D5JcT2tyErqtaCHV3TmuTyVU6Y2heRkgcy4cEi4WzbbQuk",
  "key4": "2U7d8Wcf9piHnnywSZzpZJEBzoFQwoRQkKcVDq4CwffiB1vNSsX7yu3vjFG1HwZxLpfLSH3igwyJMHePwgcnaiYp",
  "key5": "4oRQLmeSpHYu7RRfNxCXE2779a7aPaunpvzMb1uyrgDAAT7XjHZTwEapR73f5GujCvVAewjnRgdNY9hNr4cYh5Dn",
  "key6": "J2YdeCE9n4jSkWSsZRP3Ca1m3xJ2Wjp9wRQ4FVUTB6eThZ52W1Kz2aTvfdLchY2aPwjZF973Wnfya8QUKh33Rnh",
  "key7": "j8perPAP9zsg2FHaeXA76kxTNsyhvjdRvQ9YEgwxuQuR71pn4JbJA4HumKj1ZFi4DB4NpXtJBkQVeaXSLw96sdG",
  "key8": "5KyHHtbFiPijuwmvhyXWMqqVVnpW8e2huypQEBEgJgkowtWAXJ4c2yVHHY8jbjPohe7qS4tbuE7JEgdCa1P3ivnq",
  "key9": "34MphszMFaUunf7GAo328ezFqHbkaWoWVZdPFDZjnYsSTD1yTR7amrEsfeLko8Exh3hyDhvWQycSSkMk6f3cRTQ1",
  "key10": "3VvT1wiUhFcoaN8dR2AmeeyHuwkEazSBUQ3z8LGptvCHQkCWNq8VCEiHBrTyoybJ4roXAkih5Vm9kkYDHPRP76ip",
  "key11": "4ne9mBdxkoy9tLvRXTZ6RdgeUbL76921YdyRgkod64F7VQ3nzL9JoDR72f1HyjNa7U1bRCC69A1tSEDQbsxjzJ7Y",
  "key12": "2LoNHVmFKkd1G9jqieYagNWBaJNdTqJt1zmToV3hUJUBUgjVc2HwvZhsqPFcnLk8bmNfKxuBgdFFGjB6hT8EBSjC",
  "key13": "2ztfLXwZqYMX2tT4tpw8jsc6NaZzvDZ7WHF9NFXVcD8npcSyEdUTZbb8kawGQPmRJf32ETWjHzY6t9ZRTdeE4Uh9",
  "key14": "5eJJjjFAUMDALCX1gd2pf2UvRDLWcvoNo4cqMTJZMbC9TmNzt6tVMoK7CZhkxae4ipsaPtb49gZ1vKiW8sd6hhP9",
  "key15": "3H6f321qNo3JEMTKUpGs2Pu5R4yGEVSzNmyphtMmTxR2d8g6D1hWZ9jGox762aN8vYEZt8ghsyFC6hke24fNx6E2",
  "key16": "64VS3w4WVinNq41VjKBugHtPNBP4VYWG32MNbtsLYU95rGFEAf4pdxe8wP7oQm1WKt2f97bPXKRRug7qmZqBtvtM",
  "key17": "2M59oNjdmAw5on4hjebhimH2G14sfnpTHSsB6J21FuZ5FRhBP9hW3gxkX9644Fxux2A85iBVyD3BWXJk9RyAymTJ",
  "key18": "4b3WxfvEhdm4rP8nqxGZ5mmu8Lq56a7d4xQpvhM9y7L4DADpmUSZCQKNKhnEmnj24CJgQVfhhmh3QdKXLxbXgpPd",
  "key19": "2QMWZAQypSiTDnmQezpte168Qk3VDCmfXz34P2eusrJZFQqqwAU2wxSPXXqN5FP4yQQEd8Bt4h6nZn7fts6uaSxa",
  "key20": "awmZcPJPGt8zGjZeBDJs4jKLncCZ9eyzwTULqfA7C7CdtTSepqE7LRZAekX4UL4EvJsKprVn5E96HrGyruu9fxd",
  "key21": "4H1oVJUz7aCrpF5TCxVs48yxjWtBE6iMkoWsMWWHGM8ebTy2g7LhXonfZX1HJSZJjLLUcsAn5D2XJ6NSuEfJZa7z",
  "key22": "3hpuP1wvTRNouHxbw9NkyRJsofQ9do43uFNvRFT2jQJSDZagcgVWM1HqDEHu6sA17Vc8eAp4XZSEAC7KWhcHZPh3",
  "key23": "53jTHdMq95VU11B6Jd73U9aeiqgm9BAgeAGWiy5qSwgY8T7vDFFSSjsXqzSEcAgBvws9WthvZpqRdhVoB7j33Uxz",
  "key24": "5W2K6qqSe7XLvzps4cFp3kTrkQDWFnG5ZrCQwSPT1U7Fhij2V1Lwx3JVqkXMDbuSvaSQG65wvoVYkugQwjqcAaZn",
  "key25": "4BpSteyL3GZzgZMjrvs8Yte1skkYpvKpyzUiHyqftoZ9s6zZGZUoxs6j75qHuy5wpav4vUhKjRdgBtXKhRBq4Qjv",
  "key26": "5uqPtCQg4qd5Y9Wrua4N5eGMF8FoJmLsN8MzSBbQr32rdEHfV3asEK88uMEPhMt5SMfD3a9iudm4oJqPrahybNmk",
  "key27": "43RTijbZx2QDgf1iBmFXc79H6LETY3zTGouzRLftSVFrFtjhWd6TkHGvy1TmhP1zo5L7HNKQDrZLgQwgMRGzw7oA",
  "key28": "2GVfN9waep7hKSpJiib4R9972kt7TL8oxNH2kDUuaqg5SCpUiDxRmyRHtmkhw9qFiVrDyCgPyjQtkEFfU6kh5AMy",
  "key29": "2ANQqpTMtEASiFXKKaRmuYnUYHugdPgi5W9NxDJaWx9kjdYsqRHtDHR2L35kCvRnFoxA1d7Sjf9Ybn2bHYYgKXN9",
  "key30": "3W5aW7xwZWLSJfBohDjYXgRxai1HCy7G41CuQt1W2ZHixLqRDo1KqJEnNqZxzRkGkRR6JqmN4Wog9YgEfDVHWEEt",
  "key31": "3nsnjh5wbACMYx7YwwNyNtkJJAKKXVvWtpam3KTp7PKz7yGEdKPPDpYn1SijzKq64k7cMEJREDhH89RXtkbaBrjC",
  "key32": "4EtAC9DBt6y4x7oHhJn9vJCbezH7jqgkqdo93mRYbCsUXS1EhmAaDNCFo5sV1eLp3cDfwst5fWS4zitoxcqCQTde",
  "key33": "2Sz7EfVif6Fn9eGHJFo2ZA6eYN6aRmRSZRu1VRaYsfvu8LiUZNJrSPXZmGNKbVcxH5M7an9KpQKFUiSLApH6Uot4",
  "key34": "5LynBAKC1p118b9v4YuiYh9aqP4oXgZojUXioPUujHc8x2Af5Js7r1en1RKa1vertkdKZ4iiC1f3PymuyohscuBi",
  "key35": "qZjzG2tBBFfX8rQxPCNjcvpZHZFF7DVSkQXgPN9rsGF8Ub6TNBW3cka3HUKrqFZ733wg3dbDt9wPeHu1k4E8xES",
  "key36": "2hvxS7zsSj5TH7vpV5ne3LN5B6BWDJePnYZwhJELu94zcpD2du7cqzbGYvR5ByxmdZTHjv4iorFggfYPb1A3sJ5w",
  "key37": "5HieWQxA4c3B8REnc99oknqyzPKpjy12PGVZVnyie6ZVB2WyLz9SfDvLmDdwBCMKyjRQRc9EebD2Y5CZPCQndasF"
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
