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
    "VwB7aBD7TXPcXZ4mNTiAqU4vbrYjeAPZujeVZxKsZ5Up5rinS1fSzoYgJkn3rCHxGrbwZw2jE3F2FwkBZ8KpzJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CraGBUXkSTsneM7iUWn1XNeE5GMTpbqQcw6zQVhDx93vRCRRNb9SoXtqhLPddiuiT9jhEHW1d8vvukhTdhvUQni",
  "key1": "5yMsBFLJ5fkrtTVfhq3G9nCam4AMPF4WKJXYY2W3RDvszRyqJesVDrx4RcCBd6jhtGdXgytqDaFsAqigT2MiyEnM",
  "key2": "S5CTcdr5xDBZ3t9TRm5hoCr71vsZVnMPEPza8ucL94vMgL48ikWJM1ezFpcAM6g4NUsRYwKTWcxtNZxes62N8wo",
  "key3": "5kMaPqfDGxhKLJQz9KVEw3b3bmtwJGCTquxiaW26tHzAYnw4HKGfZexeb5kXFFt4L86CiMuXrNw5nK5avDhuLdNn",
  "key4": "2CUC628yLhhAowntRowdd2m9nPywe1HdCNbCqDtVPJS2VtNtQMm8TYqW2BqFqUoSAAjkNM6oPvGRmRD7xrxr5fX7",
  "key5": "5UEEqiSNN7GKSGoeqAu8RE2G9jZjzoLiHbBW4DhAd6ge1ELZoThNKgkR8LvDsfu9qpkNCc2DyTt6MWUbXZfYCqKG",
  "key6": "3FgzfxdfwmJgaeRqwaZozFh1sz9weZJKf8urqoDNADmz3MXb1APLc41CUiL38PUnzZ5xCVTHf4iEgXegwEcKavkS",
  "key7": "5DbYmCmh9er21yV24ic4hL6Y98bwXfGoY46wuuZ71W51UrBDEqqYos7Ub5Pc5itCBH6h6KC57HDng6pwWJSpHHS4",
  "key8": "5jDbGtxmM9YzTD1CPnGUnq26izTg3UpjdSKLrmqxaGMXCrgXcfaFfjq1ERKEFKPLc6fxWvviskcg3cohzPpKLxGn",
  "key9": "536XNP2qtPqk6DY2r3ezmLXpC5GCNqZh7acrkTqv8BSyQVqNZLBjPMkKyVHNV51RirphPGXvUtu5m61warMjBuRU",
  "key10": "7Dhu6RaHdo9vFppo2MEh4EW3C7iXAHrMr8WgEsherCiHwcxUWZ3BmTSUCJRpFCwscCUbJLmymfQ1MU2BGh6jyFi",
  "key11": "22kzDyYMv75CcYrRS2JYyxQYNNqJd4yuoUXQwNM8RA45YrMGAV8Xe77tqYmJZHWbezEFfkgcR3QVHMBTyKVoEi7B",
  "key12": "4ma2rQNatSegT7tqNXWvUMY2MUcvM9qrh4BuhbY3LshiYDeGB4ZqJ2uGYPhWb8FktgNpDmkHJdDDbuXcreodXeb6",
  "key13": "42zjvmn382g3ecwBHXjvg9dQurgZwQQXX5ZKzRkeS4pJ5tJe8NFCqmEJojd9hYNodVJ7CDaDe6rZVmRcVkUog2QD",
  "key14": "2QByQNZwFbcNDBfQuWasPNgEgNCGDGbX5Lc5oBdRhtFV4Df2YV6A1KeCVDUK9XS6ZdG166QxsShodxVi8cxG2BFS",
  "key15": "5Db8FHzgk5carjTDbvtKHEcu5WxvyyoGKqCpuFBg18cpWwqJ5zM9JGtTU8fvUU2hzPchEiQavoF9tifuHfczZsUM",
  "key16": "3UBDhv99Hx5KWwphBGCJoE5m1Z79qe43PnpXfzVx3JEfJLGqK9b2zDTycTXrAYLF7tBFftfpu9CzEjVU9RcNGofW",
  "key17": "3qsi6qczKH6pLpbLkLPEJtcvDF9a9Vfo2TAfKGYcSaBEkCKGxcE2BpQiyHEBgiNrBKjPuo9V7VrFZ7CpEg8838TT",
  "key18": "5y2qccyFZhW7ERWhUuwHFpH3shFp2STDMezKPgQqm8rHYCxufyWCQfH4M5wsjyVZrfCCzoNXt2VcTqeZHQ8qeUU7",
  "key19": "63AKWztMj8JCxXSm3xuC3Lre9EonkBAi8yBjip7jaDRXviWaagE7LhLPHfhXTJWcvmswEVtRjTZfRMbBq6gAN6XR",
  "key20": "KCcmNNkZXoWPDUjRSvrbQETbGDy5fWx8V61VBJhxaiXutUUFte7tpWTxo1uCdN513GusdC4rsHm1dGgcmtWd8y5",
  "key21": "MRrXcxLJNUHWihkJ23Sv56f2SCWfrFXcfuk2EdQN918SKDgqEbszgX8weWvr85dcSiXJoaFqjYLST2sLHZU63GR",
  "key22": "1p67FnEJaXyBjCb5jQWxMM7V7kLSpqG8wVPG9LoXMBkskJ8RegePwGd7v1ZuyeiZgGFVwUfpu6yxvYzegXpt6Je",
  "key23": "3CwwVopsajp9mxkACAs44yXRiTfKcTRx4wDW1W2TT1AWn72yGNGsuCPXo9pZ3g4o5L3hA6QooyfA3DXcKNtoeAwQ",
  "key24": "4a1oDnY3qacy56rHL82dhARsRgwZM8xw7jBnhZYGVHUpsHVQaKe1ok8zbS3xtBeSnyZg7KftqWUxzPKUANq6oT6s",
  "key25": "QjUUwHT1ZLwoLtYDbKYzyG9cL1DQ814ZmZgzp4RosmnEvL6XVG7Uci6xAbu699a7yzrJ3AUByZdWzkTZPT9tjp1",
  "key26": "J8JsarY6tTwe1EJKxbb8XhtM3bcnUdqMoaDPTyy9fm2fs7zAiarX2Kj8mgocAsZU7FjsQ5FG4QjkNyXssVsX8z7",
  "key27": "5xddBkss8kotVnbwv5gkkLb441dWhmDDJyMr9zUsHzYLtaU7QjpPUxLJTgAEzEVg7wh9r2NfUTtvEQnFCy1cpMWf",
  "key28": "2SvMvFPU5moWTke5WE3aU5CQjLMfvm3xWFPZ9Psnd8nqC1KoMzckPiaPwUx4uEXqshNoeBmEb9j47jUi2rs4Uddz",
  "key29": "AJHTzadqFxFRJAYXmXxdBvWtBna4pWhqZXmQFZnGXvXyY9GnYf6A6X4ruoSW4awnAf9VNpY3gfZDNqnBvC6RouF",
  "key30": "3c2rQ4471c51CwRcVsAXkdkEcsT5U6LUD8X6AHEQzKF6W6WZqDdRoLK7qPeob179B8exN6qkjoj3GpoLAhgcnb3x",
  "key31": "Wr3WxjsGAFqWWQ22yNESDDppPPNVvsQ73HzFJxA3cJvjWgqTwRGuJs87a1SQjzCHUmwyp3qBJAjWVTGffJsJb4G",
  "key32": "5Vsym1GTviT9yJ5dmGC5z9LqaK71eoNp9cQgpedw9DHK3ipJSNA9QdVBxBVETmjFYb883wy1W3Vs6XZxY7Ft7Usr",
  "key33": "aSWmj3Gezh49S2mJJtsSt8CKU33vrxwsik8Du3Ui8pwtZYscbpNEH9gsSkochavPPZbmm9bbzVhMaxVb6EFYVTx",
  "key34": "b9YKCv8MiUGYCNmi7G8W9vNCaDD8DEqtaVie5CEojV5SPPW9pTzwgVSwCJKSmr1M6BaEJcgNJHHjcNLTtZ99SY2",
  "key35": "2dDL9gU1kgN9Ldp9j6dbTobhjnSvgQ9HRLnpp4f5VUtu7ou193yPWnVibgy5dZhAAsjeeFqpa5rjgN5EVodP2vNF",
  "key36": "2qmJmwhP3jMZ2voVqsvs6v8kjeVfWTdMMYqiKaixQDgBWZeuDNDeVNMPLwBHygjBMq8tdvksSRfadACPBGRJ4FcH",
  "key37": "44xMMCXUc2cskasVpKAKgsUwtw6aDrGQAqDVczgusbFWyasJ8eyU98uZ3cLZCJzq5eUqXtSy3VASG8qtXaZTEguj",
  "key38": "5pccLBusqvER36jCP1y1BZsU2xcWkZ1X4zHHRHoZjPAbapWmpQJYgJh4M2yVDuYj3EkTnn3eT1ivRvgvtakKEjiX",
  "key39": "3fjKcCFxrDmk4TzTnnSG615VabTMh8MbjsHpQETBAEjsrQYHBNmu9RhQ4zX2RVC3gSCZPADuwnsxrfYqZRakCb4w",
  "key40": "4FKHQr2A6FCYP3VhGNBCjFfG3E871Bx4UNbXbyvGNRMV3BxnR4FdG66iaBp8HQ4h7QsuMwN1BFXiQkk8xm4ur5Pi",
  "key41": "Bo4E1K9idAJNiGBFUuexZuSupapEp9zW2riM6LKG75DPHvJc5doS3nxEmvYdrScixrEaPrVhyQG977wJFsWsACD",
  "key42": "2eBVs9V773zWhaRZR9WewoXSnJ67QRgwnPW6g73yZ8J1Sh6H8XqVgn7AxRBUwM47j2QGWg6Dp7wyky237GWV4A5T"
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
