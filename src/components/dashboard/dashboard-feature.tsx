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
    "9K91CtKCrF5We4YS8EUMdHfgEoXCsFk6kEgc3vXKEQqn71Vi7teVX4gK8ynw9TSsTgbSi3LdFmAkw8BQk7deMMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vwssktzyLp3h7kRc96zcuf4mE1htfH66MCQz2PhpCtUXq8aKoBgBfAT8ggHkEdXrTmBTjBqUPL814Ht7DyLT3RG",
  "key1": "3ixEtzHZsDffzALtvaNV3NYAem2sBeBr9oHbPa91NTfS4VNtepdVaWxryPZJjggs2RukWdnfcL8B4hCUkaamHpDr",
  "key2": "2Edn8XyEozR6vXyepPG9B4q7B4cJv2M8eDev1pkSXAGYWexrvMHBNTq6kLPxsrAv98sNPtZnqbHiCneyZ7Q23SQE",
  "key3": "3QmvBk92Cve6AizFCKmYcWvLZUMVJU16U7j5LGnNqcrHVVC2w37Noav65Xiqpj3EkfdW8CaYLSLtFodTSXiMQ7Bu",
  "key4": "2rmCiUfe7eXdUGMgfa2WmeEiwqyLALedE4CmbikuBu6zDbbvnbJ7YP12LoJQaEoxm5CVeLMqoES2X8tXocUmD4xT",
  "key5": "3WSnifoE3ANXKmvzCjrA8HK3XQTRQMBEywDnrztrmachFpRXTBuycB2yVvhkvV4JAcvU4YfQgMcqhykK349QHHbX",
  "key6": "5ko6RN1uHkWDyS4hW6gpMY1rDAujaYN1GXCikbLa8UoFCXmnar53BQVpWUSQXtJHcAhN6ph3gA487Mrb3wvoMSPY",
  "key7": "4jowH61ZnM21GpNMik8LckDSC8PJVr4a1hu74BRquDiHzgYyUyQADxDQ4bYdbR6pKTdRLEaih9eNTwFDc1giyGEi",
  "key8": "5au5EqzR4Nnotzc4iVWk5Lk8p5XpBrtGjUjsCDdJviMmjbjTgA2kZdWd1Z5A6H6X8VpLYnv7GJt9Kmot2JGsUNZ7",
  "key9": "2WPmmABr8j7CMNztE1RPxgYypA7TU83FA9P8jw3x9rxr7DxAuJKiUrz5FBbvghU934GHgPc2BoYWhoGk8HJ8fNoz",
  "key10": "3MhWWS147eAejbi2LCPcVpGfF72YSDyjaZkqfD28BewBgeh3n9ohKW6XyfiWb3epcRu2FPEHC6SAXoAqV6JxxALL",
  "key11": "ovT9pWSxeFBUeWeAoBw4139Jz4SYfywASrz8vJFL6ECjnzZetMsXijq4bsT3wFqE9AKyrjAJqLKZiKJLjCTR61b",
  "key12": "2vCTkLkxgGU3zzprjsELdxwP3B9pWmJV9c4Xx41R7apVrGd7b1uXaMPUtc7gaoJsDYkJsVr4tRAeUs7RPgAVHHKX",
  "key13": "2a5ogTJBKBBaxQ9vjtZNUci34pNEHWedAobg6Wgzq5FG5sU9nuxNqFiB2q7oSHai8FQthuEuhjYz99ZhXmkTydg7",
  "key14": "51x2HDzNkk2mFcmVVW8ZoEtpgQV2kejRFhSiD4Fn4nQAdnnj9XsqUjTKzhwjGnqMYCSHJpxSyy7zzHFsXp2cyQLc",
  "key15": "3Xyn1WFtA4byMMPkjA53Kfb9agVDTinjXgA9EoGnPVfrm8zKpNVwtnfyUPyaJANyMbeTd45q42UP88Yuz4adw3gM",
  "key16": "54Vs9njuY971meHqPGx2Pp6xS7yUZs1azLTgWcdHkbFwCJLFV5TukpNMDtiXaSyPpZT28dsDTNFi4iG8YGFxpDZ7",
  "key17": "2sfkWTkKtyrXW2CW5BsRW8BwHnNQ6C8gt8oZoaNpmLWGUzm3RG4pVKd9VqAqiroPQcdhs7VNVbZaRoprY4zjPxvJ",
  "key18": "33haPEcE6LrcZ8M1tK27PNqi62cWnGpJfXZzjmrAg1PkhjpkVzK8fxqwsdNL1EU7HJsSeJSApa4A1J9Q5fSCdEi4",
  "key19": "4dYA7F6HcWtXBXkctJhs98pNLnb3TrScGNeWR4vas3m8mMW4Xe9WDGzCzdJ635YveWxge7ZBLaW5UXgaZiJsLdsV",
  "key20": "4n7LVgXntDYFoQQxRUPkFtKxf3dPBUq1bv6q8h5qscEdTWBvAvxpP3XNT92XJV2e3cnnAc1zYDWa2Go1jQWryVp3",
  "key21": "3fhB6LkHcMAoXHQ9mGDAEZPGt3dJyeGbJ1zZ7PuwSt44nVqyLhvjVGM94ut7Zs14QQ5jppC1414ccBoCuKXRaSCc",
  "key22": "3QbPe3yd3enobps29t4vENWkV4wom5aQoL3fTnUtT8ztrsSUaKwx6NQ4tyqsyK6z53WEzaagAWHwrj2E2xpDcV3W",
  "key23": "5P1fT8gVL6EU4nq2b6gj1k4h9viP2eU85SYAGHvjsf9PaSvSizDHgcvM1Sjpfdpacux5G39T7z3z2RJ2TZMj1THh",
  "key24": "2GgmksDM9UHe3zZPmyAb3vcHVu3KGZKLx2ZUL1VFSEqfgs1c5XoKnmcgWasNxtBXfqt7gb2Mw52BateP3g4EqAMb",
  "key25": "q6zpzzuYqaBnAVWLGYi14bmtPFdfby4oznuTFQSx7r2LqQbgLXEWdnTctxhZKqGsVCqfyJskEDtM4fwaazd5MVL",
  "key26": "3G9u9ReD5fniJSBDL9UMv8bjheSyfvRZzKKZLt8ZeXkYpQphreXZab9ev4117jjBf9agux46FvSR4TffFzzdNcY2",
  "key27": "eKg57kmyE75FRTds8HmXMxhnVRPFDtu7TxS16PqTGuZ8fZKZa3vFakrAEgcD7fM8V7SyHQTtGGk4jHiwLDXhMXL",
  "key28": "3JixkvirK6dH2kvT2kSy4ZbZUPu6rjrNF8eCjF1EnGTUBqfAE1r5eyBJDd9NZBzoSvC7cHNjNFrTcbrCVXPp1w7H",
  "key29": "2SnxKUhfpqfNRcFqJoAXkPc4drA7hh8M1ofndmiPTVF4xio4FDoNTSVJo2rm5CStMrU3W9h1G5tbeZf6ThVrJ2Fy",
  "key30": "28TfuHnSjqXVNAQnP6MUdD4DePhUXkjMPyTadXNr8Nx6uBEdTpaQaZubJtVurvHXmRiuZNSZsA9vhHrhmRceiZHQ",
  "key31": "2N6KKEz7Et3wvkVx4rVEZ9sxCsWP4sn6nnQXnhdp56W2Hotavt1oWJj7PZdNMGjCNHfHahcfkJK9S6p8f1pDspKQ",
  "key32": "2aPtBNvtfsZjQBcYnXG9af9oLNgTw6eCZEGCdAGmShSG66cC9CtJZeAX3p82cYR7rWfc3q76kr9321PjUiruB4YA",
  "key33": "2LBSDDDwCFWKp8xzdaAqLiUhwhLY35DEjAYAiPcYonMrtJ7h8XWQDQZsuezKUjXPaqwRcSycLkGd11isNnyJTmuN",
  "key34": "4c9dkrsGZxmb7hkNUpX89ajHNJsVv173kCEPdmcjXEbR5TRgySjaEdDD9M3EGyJ5gpma5kNbqS3CvVFMeYzaAJSi",
  "key35": "5SnzAmC3C9qMgQLydqocgJG4qc7wrJGV9RTEJEDMDHwhecEvQbNCuC6PK9RR69EStMGw5U3TWWrJY2kCrbsDZ7rQ",
  "key36": "5GkXTou3vudFb9w4rz4LhBkQCLyMJjQvthcsF9HeD2kGrbZKSfeTqeodQTzKqinB8F5kiCf3Ayux4xR3vqER78i4",
  "key37": "4B6xqwUZGBgAAbmSm2VFBTPc8sSDUqyagqPRqwKeRwtEC9Ni8wi2eyrtc2EAi3LF861Dugoy8ytHD7Fr2qj3v9pC",
  "key38": "3E6Hh69ynLCaMcBahrruWSvxU323wbuCQjN7MJKqc1yxAvZQ7bxDYzA17kvXH548SrHSMX94uVjroMxCkgFes13o",
  "key39": "2wkhTZHNRW27Rdx9R9nP1szWfWUDRpdq8PzGp2sQcTHeLDYqwfhg5jp6ehjmpPiTD437CfqjEyEmtQu1tCxYRMeh",
  "key40": "2QystL3uT6FhogNxM2SHRkX1nKUEnrbFgenATvrzhbdikCBbyftPch2C4Xj3jZwXQ7zDKSS26TTJseLnPM6ZPqvN",
  "key41": "3jUeqw3UeWuVMzxKF2BCpsMBq6wBoZtcEPCcBagz94Ys6i94VVoChHgHdegJcAevQGHbLhVMhgJemkPouyDiroiB",
  "key42": "4tSsERGgSXiPMnHotamYVhthwrksghG4EbVQm2feENYGZE68hiQptKhHvVyVTCDpbXQEXo2QFCZ6gWB7fcHag1yd",
  "key43": "4pvWQyAYoJZEpe2Y6d657gHjEaqkKJcJGhev1wiH4YZYWVKoSpLJvaiMipvAzR26NzAmYFUunYiF7eoKgBEZuCEn",
  "key44": "5QR3EtEAKS8mG19xwtJdovHsooj9J41XdAri8j4ZFaWSVH3QcQGhrvxwABfF4xwyUk5ffxz2f9fCdN2ZnG61NKTM",
  "key45": "5nnJkwngkVMVVLEKHPK4qS6QrpvDKWVjyiabzsp11EShq1HsZF3hYWcxsbddGcfHtqUFi4EzZ2SpP6HUu6w5kLfi"
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
