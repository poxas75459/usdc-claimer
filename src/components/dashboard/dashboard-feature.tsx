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
    "RLhFTrMUYT2WUxHZksDQwMrXx87ii5dBnKWcYw8mKn6agpaoNkPHaa5xQhxqPvZWkSXn34opbCUAjGoRRePTiep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "356k1mn5qoED3qaoxWBoqxJzH56JoxnTxz26B4YoDzbz14phyWVChDQ1PLSk58FtiCCg8yeQ4QpFGmtgcnmp6m9j",
  "key1": "33RQBaA1ojAQWRug7sRQJcgkCnfYHB77vQLi9tsQiDS3NPAqsmgi58BwupumBCCCssDQpTdPkYM3nAxRFGAtL23c",
  "key2": "c31ibx9RpvQYTkRpsKsiZrYow8Wonb8mwsSUHMVNwDs9emVavCgKrfLthYKMDJiXK5GWxTD7FJUP6veLMg7tNYD",
  "key3": "2jEAtrBVJMFTCXMQRdBdEGgnUhGwvfqt6irPYnpFe1Bg6aYMmj4G8ek5k74qQQC54FiqBxKCxRufUaUbrypJp9jZ",
  "key4": "3C2Pr4ea6M5vqu2GZeHhSwHYsmA3ARTaxA2AghYbw31tSoxrfNsLVVaJf37FVrvfX1iEwNBrRqcy6wnaB7kynjaJ",
  "key5": "5BCn3G8RLu6kd1KKh8hkZnY4u3ow88h19wDowwyaSarvSDM3fbdFMoFt7LxTNS7neX4ta2nAvg2KGvmiZ4jkznEP",
  "key6": "ZVBkVKtkXDyHKvdtm7EikqYS17LmoaXoSqQwuV6NDJCALiRzM7kQeKd9r6eEENMPqNoBuE6snT4s6zHXKBKwD1o",
  "key7": "57cTsxJTB14mGiZgvL3y1GZ4bS1fKnvG2uPDAUMv4MMFrifNX8gJwXbCqGX92s8Sde2aseB3uKMyo9bLdXBGjZRq",
  "key8": "5MvGr1nfm1Wq6fT59hck1hRuQvi9mEDB5PsWwGgXb7y4dE9kAg9CF6xiQDxDWb9a7EcFEpmCsngE7iRB5PyihWU",
  "key9": "67rMAWDFHswggqPfaSPkhvD8GXuFDVp3dzT7rR28FHN6PzgDXWrtytnKnwP4GyAkqkb8cYix1bKKfFDHMeq18MJ8",
  "key10": "5LVroQjYGUMKdLo6FwTiCjejMeYLPa6gFYP95G9UYQwn3ZeoNLTY5vcn7VqiEDMJnu69NbAQLMZkpLTPFxJ5m8SA",
  "key11": "4uP4qSamCWYphQ9f9viXLNFVxrGj5vqd4AsHEwWMZw2UbsV6pxSNVfHyYfwLWUiThqKANP2PiMgANeBNoAEnNofM",
  "key12": "5T3UDqwHDfrBA1K6W24NNMMQeYiEGGHi7c3hcULEQQZpMLH5N8goUqZUsbWZTM35936FPDFq15S6fwz8yTTd7CAg",
  "key13": "3LgAtgENDGLfDYquWCcC8mUrrhhCcxfGygvCoG5dpHSXaxvepXBag49CZjXUB3ssWPvRtWhngqQsf1M3wXSGiZiv",
  "key14": "2vwvyMqF4tzYBGmwC14bpk2zeKenvcVbsAMF3nKu42mVXC6MnA3LcZK8CCaVfV7ggGruywFhR3oGATx7EjjciAQy",
  "key15": "4dFvJrPHt9mTa6wpVUFYEVDbjEt4vzaSr8TrbArNeQ2yG4EX6AaNAEuyTJNYByJKk8a5cdWUKYMjq22895SRMhP4",
  "key16": "4wJ7YYNjf2s2r2pgdijDFWxJwBs3oTJMvfXHx8T8ohDcJhCPuUAyFUbEadHJF7t9zwp2K7PgNK7pJjVnrnoh7B2Y",
  "key17": "DvWK9evCWAoLmpwVCSui2LFp6nSmTy2LXtNBDsC8ErUHeyUQGwhdTuGdBXCt4j8m2xgrSwW1a5cQGFJTB7PjnvC",
  "key18": "4CxMcVV6t1wN3LboC7G2f5KFYd5yL5zVPwgf6pANp74e8KnyDrJ8SYtnSJVDuWNwuomeP76osUst5z5Uin517NTZ",
  "key19": "5bBVziGaX9GBHB7Roqi4MHFCtSuhWu9Pe3RoJ7yGCCQ2mbqis8rkitti25LmHXwyE24ctaduWTbrcCUGvTNvUQkW",
  "key20": "3bdyRDkqGXvYM2Q3Y29vXNC9XjTF1xMA5cX7ZhL4obrmiXYRa472KXwyaQrwgsPy6Ve58vdZoXbh5GoXuAtmu3fU",
  "key21": "5wS9YiVtsRA8XbiE8hmpsb9yqZYeFP2hxPzPz7EjKeRjz5jYN4rebWsDtAAY7KtASpJEc9J9d2tGg2L2uR83bvVw",
  "key22": "61f9q8nTnzK9zuUD8rPR99LuAbojVvLzvWtTb5yBhFdv64WdDs2weYHG5GCp76BxcVX1PzZindF7SkrGfYixFGbr",
  "key23": "3vTJhBZZBurRKfRea7QgmL9J1yuQDCYHhnS5N871gLs5d7f3ATHCoNQQYuD4rdH7bdP6hGFcpLJLuYpaUV3kxGGF",
  "key24": "b9Wf9Wry893GADwiwrkqoBiX79Hu1grYZvf4WSsLr8NvHbJNf9HQtqwsziSwUS6Y6ZVeHaAWKQ1KdXVzaFEYeMR",
  "key25": "4U3qt4Hgs8FpT8zmoguDcmXhXn7F5uGb5iAkfc6Ztr7JxHVZJ69issUPFRAXh9ouviQUP41pyLLMDBpSKCdWBW7g",
  "key26": "41oEmBUV2k9Jm1tcNNCgJjVsJa5P6PZxthdi8Xh6YejgoweLgFZtAkHHFNdDriHcYEnESmL8wQs2kw3TxshkvN4r",
  "key27": "5tJFgyXoT5fESMh6HvfSh9A7fZpBeJrGCLKsopzrZR6JCzzaWBE8ReNodSUpnioszxfHDSVbyNZYuy5XoPr1J1fe",
  "key28": "2eiZN5GuT5tbv1k9YkT5mhVQ4B9h3B6HnKApoV8APgCZmhxQBJHGVLGUSWapJ2nRko5BWmZgJWWpzyno74mM9GkG",
  "key29": "2k4poqsixNF7hASnejE7rfPATw18DXD8mq9Rm9RJn1AquWHZocvXu3BiGXwtJQME3sXRNc9TRRGax9KYvfKokWvT",
  "key30": "2jGSfQKeRWJFmSJwL6511rZPbKNAseiszYt95ZX8JwaaVMwRBmKpt6sVqoAHLDqBU1a8S2qzZr5HMkNZsRnWzmap",
  "key31": "39JuhmK1bn6fVhzh4xM2G7dwgG1vj49zHBKJik5a3xUmaBiozaoJrbuB8jrAEetqeHcUDLuFfsniZGqwgygU9Jcq",
  "key32": "4PgEV5DtT4HVQV4pCwy8osqgpRxUYvvU4B4BRS46CMY9Txnoa8YLAdEGEUReUCi9yFmHBpxihyEG5hB63JbFYGDC",
  "key33": "4qKox3ZJ7stzHK52Zgptaawh54vUAvsUmqjkE7o5nmGqLfstbV2Y6SZVT65KVv5VRCAxUiu4ZzrVcaLzb5ngqfJt",
  "key34": "3om5zW15LSmVNqUvHuD5CL4Uhm7fEGfcTfKERuzkzitEMvo8WiKpv91apEhxKvZzG4zAFGHgJUv3bDvoLaj5UyGv",
  "key35": "4rsdKpQnrihrxSLWUAn9idRTUtV6jMyawGjpH4DAWAtVHMTEDxke6Tdi78FNr5kTyeZ37KYPHHs2Rn9wrM5Y7mrD",
  "key36": "eBtrF2wQBr11pZWiEtNJLDvfcJ7ykB4EXpUEN93sf3p9pN3gcKJbQsxba3RD5cRa2ywCxyLjDG7ipYnoa1cYrHQ",
  "key37": "2J4LdMbrbStqeCFPXXgqQ4mPBQfoKixL41Mu6np6e6ZhseQ6qgd6BrPZBHujZhGQJFwCDegCca7wXTE8NqVjGkkc",
  "key38": "DGpQY9xuRkwQYtM2zHpnKMzZf8PRmWhv4unbsJAANJQ9ihapge63tQvRTcBJDTPGnthPAVNsYAFxFaJQsdsij1S",
  "key39": "4nRYmidiD4xBenP8nGEzg33gMj3XP3VKRnNHBFuAWNxbSd7NJGqG3doVqkN515Y5xGdMF1rgCakD1RE9YBn8UFci"
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
