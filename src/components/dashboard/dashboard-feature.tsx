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
    "38sJSUC9bYny9drU6RFw6FEMVvq4kDj9K28iMK6uBE3P9xkWty2hYoyNHVTWmDxLuN3xpWGLCid5SPefHWjhKVuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iNAZjgndH3uspHgG6qSj3AEQzUoYKw7GUHYZb7W2TVtrPA5Ne8oYe7pBKQDUt6Zfw2CtMoVavzBxXqZz6q9agkz",
  "key1": "4Pqygn5C7grVzAGjBcVpx3sWD8mZZCokDjtkaiZ4c6hvDfpK4znt3tTgBC6xay8Zqv61izZqKgc2VRZt1hScN9Cv",
  "key2": "3VLZe771QEffoebnUQLnrExz39YCwobq8ujRX9WZPKeT9WZnnxJxRRgp2RwwubSHv8W39nvhooibJLHRWJnZb4S7",
  "key3": "43mZkPxNKXhpYBG6AqjmuSStea29jP3vWt9inE6xfhgesTF8Ed3MakRefWWQwm1zopry2Ut3tLkQe6srSP687EK8",
  "key4": "5hu2SR3EbJcGD82pNDK8p75jPYCE9hee9TUxBL35mLbebxMdT3YCiGBqyNcaozvg4tVCe82zkjdLzQMh45bk2eWM",
  "key5": "23TAtiHhfMcLwoNJSTMwtE18BWZahoLthG7eiJqAt5rwyHjWHWsmavDXkG8ABubBcmwnJKyDpDfdApWkELioiMGt",
  "key6": "21RQmtfCrTARSTEd8ohULFjYbMJDiW4coVJDT55AHCNQ1TozKZFn6FALNf4Bd4S81ogBCUVg9jRDTdvSMvJtEQ7a",
  "key7": "4GyuXvL1ek1V7nFUbguhzSceAroRqKTTzxmnA6YzihHUFeqnXNfjhCWvbxGyCushg7wsbfFsZNrpga6T6oc125Gr",
  "key8": "n3icRveYxToVKeALgRitbwwTRoq8czHYjZ3RPJRZeEE77Jj2fsKWUQNT9ui8aJNtGrQj1rveGWpYhssFgkZQx2q",
  "key9": "4Uet4aspA8gfGvtn7YjA7MwgvmeQKRcmFH3QWGSwEGt6nvJ6mcFHX4YqthL9tjeQanqaaCHdvXRtdsbYjkL9DirK",
  "key10": "7wY6ovVZCBnE8UfmUiNMXkzPkszRGXN9vPTde5c61kzqMTpcGbs66cndPKrzrmdGuYEHxK1rHHdFNM7QLwLzfab",
  "key11": "2veS8qrfWxdf8E9fAZyqzsoT5KE2U63q3aQAKkMUCKyXCHyKV8jMLMKxSstwRCnAriifkcjLztyZPM1LkVPQGkJD",
  "key12": "5NUpJ36DVwC1nX5eA2rwHUNCHRSXKqr13d5QWaeXVe4sZkV3hYCzgRfcGYvD128uHpmPUjhhVxd6pSidfCyqzABN",
  "key13": "5ku9RpAEfg2gCHRDsJaPyAJ27i7N5LkaDRXxKCbRmvWtdfrPZiF81zGbZ7WeTqPf4ic88h61AaSv2fWLPy8pUAC9",
  "key14": "5YUQFxhqdpYybH44CACzVKG2CJd5znL59mDfRDhZU7Fhb4YWdXq3ktKHSxapFL9tm6daaFmJ8YhR7iKfPboTCfSY",
  "key15": "5iNUvgVinp28NUvueCELSpcxCNb6TL4NDfjr5EUpBEPkPcLC5bBXAWe8J5cTeEYvP36cEXrSt16Hn7YqEqwG2xRZ",
  "key16": "d5xmbFLpEEgVRMhBDPRDFFzcMTgNJRHERRHHXuBR52LReN2aiXHnc2vE4kgE4LmpW6qL5W15KR4TCi52pfLi44e",
  "key17": "et5Unhk7ysxkJjastQBKXoj9mAuekazE9qcuStnyJ6dKKVgzBmVXyXtmkpmj5oUcYShj8hgTuimE4WjfZpSqU1c",
  "key18": "5xbADSXi8wF4t2rsWm3YqUpc8UhvgVT9dwK4wGLxeMj7sp1er2Agrfm77m6WsdxMswrGDe8bCG5njDe9BH71Rpj6",
  "key19": "5mzeMzhVw5hirt6mh2K2niF3NGs59UVY3mLXzHqdDBrGMyQcyA2PruYwxpdJ4Yzh3feianGK26v3VZ1MtdK6RKU2",
  "key20": "55ihqcF2w38cmEMvx1i86STMboBpDFaEnv9tPJrXGmM1jyXbp2DQwQZTG8QT3e4xPyWJdTp7HM4hw4QD2czgFgvp",
  "key21": "CLd3bDYy5nHRH8tPriq6gq1CfKSMdBKfyvcoGFCoccSRk1WcBXDmoVSm1sQFtJr46pnti8kkh1KDHaE5hkbvP2g",
  "key22": "2haXWmWqhn98JahLKkfhDvGZKdCQXAcHV1ySxmbcrNP1YVRwfoMHRErc8z4KTQCUeHJihWkPUy4r5yRkCfdDgUAe",
  "key23": "3YPDnnZoJPzVK2HR77BtWgFFEUjBjRm5wk5gaEHA6LsgqxYzhVHnCqu7RgQrdkzGAZUbbY4cHdC2SDGQSeftkcqh",
  "key24": "rG6JGNdWjwR9UtxS3MCHMK3ELuVyVdD5YFV8BW3eJtPCPcoj24sYsD1uUdTWunBNFCXW5nFtsYaxfgTh4pZzkbW",
  "key25": "31akVoq8sN7BTkFm6Jz6NQgZdRq7hWVmWgm4PBNvMPvyCMA45FCggkUgj9XaQBwdVnbE41wVKAEj8aTUA2jf9CaE",
  "key26": "3kiQaV5BxgzuqsKna93cEyNWnko6pXRJ9VB5sbWW3hqqY1viFbFNa4NBzZj73Z9Rua5rdZCce7eD2svRTS6nSXx8",
  "key27": "5jJHZVjsLAwtwBDCSqs2SF4fUbTyPLALYBSC7TnA2MruGMAMonv2B2So9H4mDhj7UQ3WSQZJygJCgGLKsxrVygk8",
  "key28": "59C8cX94nemmKEu66ff8dn8yxm3Y1YBZpPvEprMi8xrR2kCA5kvZrgKRqi1yiPQi1TxtXg2UKJBfeGkbi23Gdwwx",
  "key29": "sBMVpgV4i1zK5RutEg1eLuquy86Etv8tc2LsmBZAnphp7oJ3osKqXr4jGNJTev546Fh1EDLnKMrrYhQxSrCoenZ",
  "key30": "NMLvvdnFsnFGDhzmkMyX6HxkvAqiz1RpsNLCxwrgWZnjcFsMiUupNa8hCn8uhKHvbzg8dDht8krxgfLG24vNs6A",
  "key31": "3XTPhab7zBMkHuoos1HdczVYAScneb4SvvWfNkcAixyNR4XsuT7Rfyohx4zpRtu5uiurYHcFwEzUjzGxXa4kN7xj",
  "key32": "BGUij4bkuTYz2Mng8KZ9KjokjE2o48G9NmH1jnvM1b4aWzUzXHBZGevVLzkZL1XchsP8RXztkoyGMSNvA66cxdG",
  "key33": "5jeyHPnRRUwT6M8dNowwkoncPi9sVhGfmcnbL6wZ5T3GDjtoQLZ3WMykekPtAY1CjcBkYmpN7iCqrLuQtUk8uLU5",
  "key34": "4DgqRZdis5wShYioR6yc4ebGmiUtZKUKPfC2hrjJ6EXHKvsHHXNCaRVt3xS3XDvX2yXEsfeFvSqxMn9XaWZdWWFt",
  "key35": "MSP2XcThChbma2vxGzz7Ri2wRA1oP6c4y2vkXCvhQUZfgqRJFQuMUbaev7eLMiL9yoBuKhasmtERCcW3mR97ffa",
  "key36": "3Qhy2n22b3qZfyU9uXtFYVMRF3o95rNZURvQ4fJAe2xqXjvUKBDPf24hwTBZ3i7hhpRJz72Mbx4Ms3rfCYqc4rAr",
  "key37": "3DnyPPXkthfj1gASKwizS41KzNnNCWbNteeMFubg9ncmwNN8MPgAPt3RiSCmnmfRYLq7oS96TaroGQU9jgT2BwV5",
  "key38": "4yZkXMPoNSaX2kpakpnJLsJ5fwdnEJvjbYNaMFAVrXKB4offZHkjB1wiCR4Fp1M1Cz9fyEfhjo39dzonwrBCQ4P5",
  "key39": "rmf5ZvnzQbLTzVXjeiBXNJzL49kJQkdxLp1uBZpXDz8q3aekZpNVPFz1GGH2bd59nUtskd3orJbW4j5GvokABab"
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
