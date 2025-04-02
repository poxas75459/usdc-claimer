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
    "ZCQEKCuX9En97PVUNHf6FU7q6qCZqhHyNjrXhTGHhz4owzU2hzMHQ25FUvW6CFfaJdMsVMfip9PKQJHSumAJugv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yjvTWNzTZoczp4ztuqv64YERwUzp4wUKjKKSvq8qt3x8w8Sdyzhb9mHckQY88zDj6Uc5NNFU57aPuU437qJL5X2",
  "key1": "4GsMBWEn3JrdsLrkrnDEyxvRXTsMQv3yhSMHvrb8WWgoS81h464CDNPVYLBAe3DVjCi5jr6ybPEGxhBG2DZAcvem",
  "key2": "Zjfp1wGQsojpYbkv4UJzMHAWryDjUMG8jXSZL3xsucSb8HSxgGQeGU4kJJVPEocoXixSuhRDyVpibUESEKMaj5D",
  "key3": "4GEV7JzQagZQXqesR1XK4kgwxian4hcgXf2mbC8yfHEX81XRNggb3b6YrFf7AiRZGPGj69T6nXzAtaNPtRqFEzti",
  "key4": "BJVynHv44t8EghoLtcRCwVLzPYp8HsTQGoPNTuRD8Ha2wxioviokk1mt9NqvD323LK4A6LNa6Zsz8J4PG1wdjo7",
  "key5": "6T89DiReBvm8zkcZH2vNya2Eha3whSng4oBy8E4MERVr68uNDXRxTeJtp7ugBQaJNJPPzFXFv5wk3fGf7Acmdoi",
  "key6": "zcCG3xXtxRowxn3FbcTXdDNM7FgjHVt2vGdqgw6FDcsV7g69u1ySChjbrW3QSAmhc9wqq4d7eAK7Qp8tsjZ2Dqk",
  "key7": "5Xr5EgmLkqDgQQHUgX3Z7xRRFQAdaVzZgyURyQoCnbaCaK6xyJkT8GtXoGfMgovHNktkp3H5g2aQz49eyAN48ZTG",
  "key8": "VEeHmuWW7uYZrbqqGkGTBpPJYo3ti2rJf4Dz6dTMbTEHkrEvceC4aeJtRhDTo2i5XXXL41hPQgaTcDUeuJfrtEk",
  "key9": "4Rhan74tnnizWQpNSZMc2YHn35DqArGt2Nf16nLQcAMebqsqjk7PNtc8dZEe56cW22f93qDyQxzmkB8QKSsbrCw",
  "key10": "Pyi9mYvnb684PFEvLD7UtLpF2mdDcusCp4Cnt3PjxogLHQvH9xKVZiTjT5QWh5wvF2dx5R5hrm8tAihRd99isVT",
  "key11": "5EvPHjELaTjsMU3Hmju5aQbqpXinVGAt5YosYZ3S8cKGRxDFvQEzLXgGm4eRXNRzEtoowy1JhFvVvqcwr9h4Esxu",
  "key12": "3bpJacy4oqfGcsrBgk2yros5beyZAjpqtKbUPL8Gj1ERrrji7auCThFndDBxdKt4AA11etouHKuxoJTBkXJWM9mE",
  "key13": "4kwkqiPLfMmFVrSPvD9oGKF8Wvwoo2d8Fk35Mq7SKf5kpRUqHxzTP1Nb37mbDF5Zr1zJPwgpXMNwerZHWmrEELxd",
  "key14": "4NxEsWgKcVJvnMHGfC5yVGoEBPn3LfENj1raRLxNkMoQMYUzoPKFXaBw4a2po87G5fj9Lcsoo8PbYk1DixhkTJkY",
  "key15": "4b1rPHcXbyQGoStNMtsayiwyJS4TQ1PoyxEbdm2pKG75QCqobP1iD1iWgaTMkcMmXREDXgY1SfQ1Lso3iYjR9X2H",
  "key16": "53u5Cqu9j5ETwJvJYSR39r8YdJEaxmFzEqS2QX2iFJj4egyR4eyJDQ8R9ZipMdC3rGeRESQgAjuu55YDsNUXbZZZ",
  "key17": "skvRyxykHzkA2sB5D37aV4dcLNYHoq4VwQwwoXyM6NEeVvUyxPPizSzftfzaHeLpgycAEda6kxnuBYDx4GDRsNk",
  "key18": "cy7urtRXgnrK7pcn7kqLX8bt6PfcAKJ3dCZYfQqYZox5Ga3BVxY4uj5KfdwuhvyYfUssrjoyh87HU8eKWVwBJNC",
  "key19": "moRnjX2tjgfue1337G7jYCNjUZACV7198J4j2Ds6WYHh4aJYQnUTG6mSavpKkEJSaQNe3ULgb47RrBaf1RJ8toQ",
  "key20": "4S4xwUzfdY7U3Quy85jRewMAmAdAeSoLLwugiPqkFuuSutREDcLqmxrMrHVoUkLCq4U4iPPLYcWK1ELQRiGgdFLg",
  "key21": "2NADknhG5asK8NrX38KXQXmSMr2TKCz8UCakVRgtTQB6dVns6Gb41vuMuVbC9EY3QVQkcYWGCK4qcetmdMfJTiHn",
  "key22": "4RRE1xb1PcFUga3LbW9NvFQzYXEbegQ8WmQm4ywedrCZPScTgfNk9NXPfMkGsQMPF1VyNeyQGaibzg2p8bE5ungy",
  "key23": "3AsKueAbMm7QnNJyNPCbNfjmrvhUXjWzmRwwVFhoCxmFsz7oUQwNP2GXoojGmxcbZNALKBPLep9qssmNcrGwGocN",
  "key24": "3yQBHffeSMxWPwTMAsAJd5i5ShHEQyL7iNMJWJMA1MxoviecEW5jJAcJchQbYCtPPQ42HbwbZ84e7u5tzZfpgKdr",
  "key25": "53RwqUFHbg9TkjPMDyYSY3wv1NiqhiSHPJzteb4ZjSVAB8iqQeKEnivWQgWU4zNqickskd46DTHRntm4XwJwpDa1",
  "key26": "71wNeiC5nCYCqgotXiZWSm3Sj9UfNP4aseMsZZkqq1cAzqnSYTvKZoSF13yy3f6KkYxwv8W8MpTrJCronSoK5j4",
  "key27": "4KywqwRqAMtuWz7on9LVHq9vMsBZba2w8WS2RLUSw3dQCN9aRYys1z9gbBk9j28XiaesSiErh2rdp2KzGJPJHnXp",
  "key28": "zd1rKThozCsRnBq3PZAHPnYZumupfLbSe9UmefMKPqhgxjYF7BaT1NVMoBgt4mA8n8bGKuPSpHhsvG9hTbp6GVa",
  "key29": "LLHPQDoR6MXZCb6KZ3UaaqycWpkBHmmQ5hL1wgMxCyoVJDaNFzP3AoEF6LB6hFHu3dmnZVTMo8nAMLTfJVxVRUG",
  "key30": "2jsKyrXxXdDvMegAai5mdwaT2Ycp1UjufNobvFSpXH39nKw9XEqNpRmixAZ5cN1gLEZ84Y5XCL7ocCocAshocEGS",
  "key31": "3rDKmqeUedVe9q8NWwR4ZqGMvb7MxTw7Gn6LE3tMCMsd17wby3QcR2rwBmJYF6SmBsjgCAQwBC2t3NeanPvTusMH",
  "key32": "3odAj86zDTDw3yrBD7qu9Q9k5FgMQVXtzjf9kPFN31dK52NmrMJfYn1TFNEsGfGwdsGe8vCV36yYFAB1Gbx5kbCP",
  "key33": "57kZYHep3souL4zdZXtGnrVyCxsAvrGUeffo6UtUPRAmCgMGPPoRmGDHPeBDtkfnhhytFcjWtxkqZYj7j83aPDaN",
  "key34": "5oiPvkpPi9Cq2FrZm7CwnDbo14oM97YGZvW7MrZQiYRRHsgSswm6wAe6Wfm7KqGnftK5T8DvssM8X2d2U7neS6hJ",
  "key35": "4wgiGbyDwuaCc97n6RmwCxM8ETCYAUfGn1Lozm2qhUeEiPfZBUhYZfMt337GbTeXGFh93TumMAwvkYy94DVGQErs",
  "key36": "4ySNu6jtEd5MqNAx49VuPVqErCmQVihSgycF6qZrKr3rgksT7LAqLzjVuHCTPB3gMfv2RiQueCf4KaRURGVrHPar"
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
