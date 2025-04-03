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
    "Qrbn8Lgk8kgUp3Zmju8LPzWptktYMbxGKPahiQeCCXweXw7hEcZGqe3yAEVVsLYonNQ9QVoLC5NgLBwK7yLGJnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DoKp5TGmqxkJKiPBupF84y489K81gcd6tENXTu7iHAGoyzXunuseHaTaNpjC5YZVRuDFJcPX2GV6QLhuj5cyUPU",
  "key1": "2BANr7aVScUVMdW7MLoJ6LcoMbEYG2DefxMgv95D1wVWBGStQSrDRmTWw52wc1z3wUHdRF3V1Rve8mps5A13LHHE",
  "key2": "3as3uMjeE8fL2j4wtw9LcbjEEepnzBvvn27TprDLqLYwALcwhYaNyFFpEjmVazd3VzJ5ZNYbUf4ovadckE5ZZozD",
  "key3": "3faJ4v7VUv1KvbYzWLympb7A6L5CbzNTFLCZqTWZJ59BJNPhQ9EfhGhkGYZ9ZvAt1UDpXMzu9qTgBrEerhzZaWKb",
  "key4": "4Xbikrn4rwpzwzqrhvyDEKMWBYN8w21SREYfc6AeCkNvs7xxjJKTZtdyvYuagxDP9sge5navZHw87xvMTm9yso6B",
  "key5": "31bHiwFBauWV8xDjAdYpfZ2tDf3R4VfBPtfnr1z62dd8WtfM4GC28P52PvNufv3pn83naJMo5q39KLNoKbLBqsoF",
  "key6": "5QjVt8ZaGpTGUP2faa522DHunEozpx5mTBM2XDs5i8LLyxeGRkh7ejTT2nSaypZpjXfxifqoyqj2xtpoCQb8sr4k",
  "key7": "56odQjzwJCB391ZCUcdeFNZPnsWtx7xMhkw75uPxfZYji9d7uChQXMJeopUKLXS3AVe3hEp91Yfx63wLEqDeYbzj",
  "key8": "3kCtEfxN4LzN5BLDhwYVfpTL5waiAowo2zpRz68vwz9NiPjgFuX5RNH9N9DjFRGUZ97kxoCCkPsmiQAVGTnGAL7c",
  "key9": "2Rxzn4V7eoGhq4kCi2ndmjFGRBJiQAk17hzGynsujeXLvjeN6J7pJYcDugfiA78C8mvvuTvGBE7bVfRBAmTmQ7KK",
  "key10": "hVRaoGUKA54gy3heTdXtYUC7ycGKHEeTVek5jLvMdJtjqvMmB6kN64tLs4EDqp9rJ2BA33Xgt5eHtN8r9TB9NeR",
  "key11": "2Hbwq8iSAHiLSrTNrndf4qxNi4uw6auvqMuV6DscZ2KYCRmeCWLLweRXAX4mzWnFKSt4VL6vDLU8se2Bz1CctpMp",
  "key12": "5gBZstcMKriqR3W27Bf4R8TYTTHzxzMJAZ35xLj6Qn2j3wwm7T4qMsi163FnhNqe9CpCQuho1s8JzT29EU9zCANT",
  "key13": "3V9tGyGtiDP3sdczQaFyirJMj6ZMBM68vPhGYUcVmLTRRVATLRWWG992mfDs8f17SH6VtuKBWUXTfjDZrBQqVpea",
  "key14": "5PUuM7aW3r8PLPNH5Z5SKRycA1y4QVYDzw6Y4N7wo7VKjzjTEr1gXGXC5DL1kNR1Tf31fbAc16zGYHpfidPE8GgL",
  "key15": "izU2bjZ7KTzKAbgPuWwHqWSko1zVCXZWuH8HS9QPTpnZL6QDH8kFuUJieTeGSuRRyHiFKnyQQ2MAw67F6gM3QfZ",
  "key16": "3zo17EekVzSfGKjTAa3UwUBbmhwi9dfA2XaYvUS5NXfKMHMg32aH4YYP9WuDVK5fxxB3kUtjbecBarAr2ENKWCYz",
  "key17": "2UFoKvp3dywowA8fqhktWBCX52542Z94ykU4LL9HxyJ7nXNTCW7vsBD2JUd9MKXX2yYo7yv1m3eHvemzLKX1K5KS",
  "key18": "28e7SGaU6RjFb2D4QVBi6GSouRgmofpchE96HsG3v6pTtQoth8VordTLkVzaCMFNpskiHf6Vfd2Hp3SwN5ytN2Y2",
  "key19": "4WkV7bXmYWvn4RuMm8uXHiTHhhQpFFATuzX8kXukoZvVsSBeKEFLe5Lq8fXjZeecArku1WubgzbPeaKeusSGXqcF",
  "key20": "2knPDyqf8CQspjm9pRwW6tAkCD8UuF2DgDMbHzUEoRiVKYC8PeXujbizBJrY2bQGwRzj36FKxdM4YY1QQyzsUDNA",
  "key21": "bHfQ6YYpFJ3ddapAC8q6qXM4CgD9D3GnxFadwCbw1C5PfuVaZHtTmGub52Rd9D2h5pH6S8VSPPnS2QrC1QJbe5T",
  "key22": "31e1MUxxnL9ynmotbJQTbmNWoW2KVHp9tpdGGyfYvs5gEh9jvPsjxBCPMLSom5qMnkuyCsRpLzBK1swaej65wJUF",
  "key23": "2eUKJw1uR3VWdUHnYEGqV4YUSMotmt8cbderkVD9YVLEiRM268GXebnjbBzrZbUcEAEnCcwaZg1H3zoKikPsXDEp",
  "key24": "3JrTaPS9ygmh8Yji2dsmhG2Dy5ZR99hwQtAMGVBhmm5CL9pcMBidVQ4SEimZZRnCe3ewEdnareqGH5cfnbaQ7SYp",
  "key25": "2EuGzRCtfB3DHr7ZQGFncSJy23cYGGcC4tPMvQKCwXn4NZxgxmsgRKWrEgKKe5m6TkgDyVFQxNZRg9BA6HdfCjmx",
  "key26": "tYsZLERceLz5Jsyr6o7V3mSwxsg8H1zNgZvQc9G8S3NeWxXDWv14dWWeBSZeyLtsTJZS1cbXYwqxvgWWLCEHZCB",
  "key27": "5FVpj7RSxhoKojUxB68x1WdUSdiLHeCrTJ7gaXH8ALstE8c2fbCsK2XQ2UFNZVwSQyvNhVUh7VFB1CNp4L2sy43H",
  "key28": "4J5oPUmLYoFSadxYxEx5WjcZUfCTnnMXXnxkoQFaJ99S4iNmHs9V32xsnCR9gTjNj61HNoJhR82aWdtsmT2mHLaH",
  "key29": "2E1i7KeTXcHM1W6nCBSHcfW8c46FuviJD5Ft5DxbBUqpCZbf91C9isCvSUxVen8MGyrRJTUBqyNaqhP2fEJvS7LL",
  "key30": "3b5bHpEtBG2wFrjK9JgunGESPSGQ3ihCbC2zfueF4Z49tyXGPz2dR5ekj9545NYBRMp7cHMrgtdfKkXrvGiHZHb6",
  "key31": "2PYwN4f45pj8zkvRZ9UP43ft3xkn5y6rEpZD82317xnLBkrbLdniAZJ63oyfgKhs1Pcy4xMEC1oM8H38Ykd4rqBs",
  "key32": "21FriiMKrj2MDz7c6oJ2tvXPFfXot5yUZsyKYjivxhFncF2t6ZTCUvTefadewdtrdNogsVMfo9DxD3x8z7ABoA6z",
  "key33": "3tuiuepLn1TC6jRVxQK7HznYUggCVLUrfbdURNgmbWUNKfeBJfoJ79HrwnEpAEEfoqjJ1GerNVhD8iVPs9iQ3r9K",
  "key34": "55ZVEEGPzms1woXMZZxXbzxPA9m3E7uUSSqX9Rsx8AavDDbH2wsP6Acz3FrWto7V8tjoSqwGACru28MYzuf8tu6z",
  "key35": "65c7Eg2imbKWpeTRA9mwMfwhSS78uWZVaxBtKFPmPvAfjBSAhwuT9HrVnUidf4GQrZeKAiC3eqiLZKWSHK3qrSWT",
  "key36": "2dYDagG8AehwZqAhTEjC8B4UvVgBhGHW1kLkadgB5KUG4ENWKsSBxTcKWHGjoiQEsAsoP5GvGpmGidoXfdWW4C9y",
  "key37": "2RjxEa6KX3exfcBAGwvFBh1Wkz3LSRS8z81iALLXXbw5xWFitei3VCEqaxNCEEf4W211Aroo6r89xk13aa4MkKwu",
  "key38": "3kk9ZaEtRoVMeYNUqYpX5WDNDKcTnN6eckDZ4qxm7bEjeYsjjgAQ9mxxBHy9skncgrV5hfWbFiNY6yCWfXerbXR9",
  "key39": "28PUhpNQFi7BQw8ZKKzPnVmQwUw5bqiA2y4SsAone3ygmoCYwV63QGbVUTMsVkDfYSxhVCtEcTQasvoQ9CPVAHUs",
  "key40": "opftSesgQeduU2oozH5bUPvc8UGmHVuQxFMH4t4QEYvzrSTKnPuAme824GcDJx4pCiHZGpYrXynbNGP5aHTS4GB",
  "key41": "4P1k9cb9LdoxxcbSmMJfVonXBGg7SQjxQu7cehvFaeB73rPfVhqt69ThCsq1VX1ujmYbw41j9C5sfNbtXSNePnGE"
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
