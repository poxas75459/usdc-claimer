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
    "FrTwTShZ6WJ64qVpuCjE2hwVLdSAvS278qWbbZHUBGigdBGAesxUmGN14yryea7Np6XooAFx6TMW4CUw2oSb3fq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NAFUv2iw9Pkt8ArMKKUQFxpXHYYcPBGQwtZgL8TZsvFWHZRCvXmhoeohmwoi7uSXKFaQLfRcb96yEQjuD5ix79E",
  "key1": "5kqUG8ZmkY5Zm2ok2to16FKECFn7qL9uB5C5kfvCPy3WXPtpbbx96g36eo4zGFtnaLKKSU4jX7rUHtL6MZyRz1dB",
  "key2": "3JoYFgYcCD2yTEqkS6sHVw3SKHwAX9Tf5bAskVudi93yb8jWY9UtwD1wFJtgrdoPhMNyD8ajmgjLY9dzhgmRzrD6",
  "key3": "2bhb7qvkio1ggHsDDjc11vbR67BAREaM55dZv6S9vijzR7zp9S5mRuEo1NeD1CTJgF7qnTUQerra2kGdr8NjV4kX",
  "key4": "2Zfn12xBUuafVDV1qPw6dnSc61oo1iSmcUSkCzRFwanpTVZHMN9vvPu5L2B2ZBDGoBiZna6Kv5iwLUAwEHNZFc65",
  "key5": "4uPqD3xczqVyoerNMFeRq9dcwz6gNb2ieXv9MMJ4cSWEz3aCtFop5wt29RwwTzgzQaiHgBzUdRKWsETnWfddr2gu",
  "key6": "4cGMV8MszryvY7igr1SGTX9GTkDYu2tMskc2FXNxroZvnnTVUAEs6Rb8cBWgLqnCWB3jFguW2PHHQbpkJs7hHkDS",
  "key7": "3hQceG6bRybMvYYKY29yD31mL8ovey4MzcJugXTDMpxZVt3rEDgqf6zM4SxagKRcjhx3AaY7i8Ht8eyHygLqb17S",
  "key8": "4my7J5axqHJDAnBEF2YXDxEtmSLh2rqXMbovjZ8D1J4pyPZo8LUoN5PcwWatD3s3hfPcY6KTTwBJ5r67UZwRWeFN",
  "key9": "3FALURbv42or2sUNbytDDSHa8rCFcPwMBAhNRibQdodHtbnARRo1iCQttJF74Gakq4g6BKZGvwZsw8BP5qc1XhM8",
  "key10": "2qwWXwsQEQmgDFEWRN52uaPHBCRdhSUbK4c7po7Q1NZX1DFzKisideLQ68LvxTXpKo1Au3R91PKqfzBdbq6t2J8E",
  "key11": "5NUbz57tM3NPzj2XkPRyq9zrPHw8b2mKZnxzZEj5UrEPNZ87sK3VhHVqN7uBjQmYGuaijapWe4K9YneioVKQn2V7",
  "key12": "5A1X1VA7fYAvQrJ8v7PKc5Dp3yhRTyxQZDCPiUARzW83VByN5Z6eQKarUUbuGvPnDsusx476WJ5DxkG86AVx7eEA",
  "key13": "5xbpgnr7eFE3NRFyPKnAw5bzcPi13kWxLeFdf2jCLTfoAkbuBSquh3BAkcJ5qaeJF7gsPsiUG3nQuvSQFqnrncBL",
  "key14": "5tWA5CKVg3wNdLZLpPMMvmJQ3DY67Hxt2KeX5XVzCuxvcPVTtoRArceAudrcmi6pvs7V2456Li5JbkXgwTGEDQDH",
  "key15": "Cs6Zu67ADEkyZYnGAizjXkNBNbuzhNtskRfEFRsBjnd3y7PSYAUaxKq8BaxATRLYfhebrkAvHD4GvcpdFjVwYXg",
  "key16": "4uXwMCknVsaUde7UVFyuahrnBty17rcji7HejhY9HfP7UBYwzKgddUU9dXSMMk9yDZmLH6r8wTbDXdYwJ78NTZLD",
  "key17": "3WrMacUEkcyXCqTnAD7QtevWRrSVv6Fds5iZQLX2rqYZV49988rK3sXb8Dryxssd7Q5x3AcL4iLafUWxFKmkuKp2",
  "key18": "4becsXUAKJrmyVH8TniSmtxnM7qHd7dnmgK982Khr3eXovKsqkiot3oerbhyRv8iN3qZqrVrGuQ6gpTtQZndwXzY",
  "key19": "JSQLokZCue5C4f5AENLkrt1tFQetigAxuVsDfY21AGGjemxNtFqMVZNQVty8gzwiTEhunAm8WvkdBvzm7AShkoH",
  "key20": "47Y2ZFmdmFWgfWAtZKoc5QN8d2rDnnR4mjZbt76oEFgQXBB2obQmSkuPcJ7XMgwZk5MHCfcv99WPVRJKtTYaHv4w",
  "key21": "48adW1tQ8rcxt9qLdUqxq74pVCJJnZGh2FwFUoLTNbwVEt92Qjv3H8BheARkwfU4NpwUmBnr16ddhWhVcMkuS2id",
  "key22": "5TdWnjqqEu1fWJcxhbJgQgKzgHTzLx2DdvkGTrejgxXNYRPb2QvFcukjw73ZXer2nyURtrLwdwJBLQUqw6ouuuFj",
  "key23": "4ZCX3pE79gQHdEmY7tucKtMhhZGNPW1eawGGvgCB5EXvRiuq1i56J8i959b178nL8m4UugxPQG7h15Jvgo1whFsH",
  "key24": "3GhkQf8j1hnKD7QDK5Nit66TzGHZMFVjVbZkaA5zFnTc5ijNc5HJS9h5xfkdTNKJmenqi8ZRMVUfWDqfrm3rSuFz",
  "key25": "61NuLyk5iEV36b7u6eQ9DC7eb5Tq8j6tr63MxCQK8SNqnKfUjhx2rdBaNYRHgUb1fzMxbZ4axFSatZpQFvqhCNsf",
  "key26": "5TT65qfHBggYZh6aa6zT3tnVREZ7C87E6u2WojYMGACVr6kQSWbeHKdGCA3McPBqMmCrT3jVXFjbmS1D3QrVQmsn",
  "key27": "3AfrarMPqmrA1K7XfqRPR5hfVvAAEYnJoJt3hRWfX3PqXefpVxB935B9R4BWX3CdekQ6eqjgqQsvwCLUjmVSnogy",
  "key28": "2Q5kgWqz4doGHKzwdwJyw7szCDc92J6T3Nk3UvyrQJP5vhdefbgJTL8XXHBf2JJpwEUBxvWVdMVReiNkztz4JoeR",
  "key29": "3JgDJ2Gv9Trrifjd56zmKUKd31Hawg1DxMuBehne1xiS1EhECz9vMxTMqnYwnmytrKo95LTJo421zS3MydCdw1Gi",
  "key30": "33nubLT6J7tqUmPb3LTuM2xg1MHezDgRq4K5EKcATnw1suD7miAAcjoHnPASio1rRJCpNeHgREdw1Pzr856YGiSb",
  "key31": "5WMWeAEUjijnUrH4cH47Ywj91omW8sPzwHrctt9xB2kgPjNkTgZ6RcziFZGgwbwZB2yhp1zMBP1UdJec2YbjMYKT",
  "key32": "5yB2QESsN4mBcTe17MesMfe5BpS2qKtRx2DKunWMi3VWXJdANaP2usUfAtEyTMxCNM2mwZ28RoditmBtdmkihVjm",
  "key33": "46qe1zzWpdZ5zFZhkeBhCvvH4AvJyH17yPaQWDa49bBLNdeMJyjJYmk9HwnAcAcAnTqwY6XXB3HEtxaog2DSZEiH",
  "key34": "4gb4ih9Pid4sBVfzUSnfVGsvyMGvVDX84gKc9Xtoi6oqNLrUV9hQQ8S6zbxRmBvJ63sXkhcpss2dTMk5acqqv83x"
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
