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
    "WynJ7TRk1ruqt5GEhr7n8JuyPvriKDykj3i9qGJeyVoKqxgFY6HZ375qeLYfyCMV7UGoLA2PTHjgFfZasaSRTHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AWD4cbiqrha1VrKMsP66eR77UCKZ9qhjw65mkq33aqNPq4iiUpm2Trdg2hL7J1vScQDkYue8HCaSRudXuhTH1Uv",
  "key1": "2GdB4Pg9htL3xxFAGfrMnQBVH3sMPs1n3RkTgxTycqTcq2m8kSKyQWGAM82AqgxQ75LbVorRm9oKAtBoHr77wQij",
  "key2": "4CUAuSvaesGjeiKswFceVvdamvwJE6qaCJYShRzB3ws47a9NHSWw7xRv2Vi9V9vsCba5DTi22WY6cJF3MEy26mot",
  "key3": "5teXiNDg3abegXUsZbg6YJRqtCPfG69oPryWkdXEjQE6dWSbNDuhsn79PNByqV2vA3TTbnoKf6hB4CBMLoNmnEa",
  "key4": "5fAqnxBjAdVBLRNBi2VvDfSYEGXDNXC2FufG7TdZ4NMgQwVrT3zusNvR5MzBHtZhJgPZjMKnG2UumEZYyrwHMHX8",
  "key5": "3aFXK9warjCyLh2ZS687BPPGW8zrdocivc3R7jrs9LY4VJVVDvnTfjyLYnM8ehDEzXgDk61GFQF8jpYA3za21n6M",
  "key6": "45niRn5a8RLQ9dMUqJwxpYw9b7ePRzN4LwR2UmJP9s9XJ7x2Mn2vtbfc4FfqKkhFbzoinAoTo613gNUAsNRmNKix",
  "key7": "5BqQiv8XMLbTCHmoAMkG9NEnk6VHwePDm1dn5a48uF4hwprPAehKFXsDTD4mvKjfVRwPGqrbpubDtih9XHDVbefx",
  "key8": "PPKvWT6DdGHR7k8mTnmmGEUWaixJZjYCWttNHDnLECTomTAcYLA5ptaq4sqAsnxjWDTspdhYBGXVGLg3SSgrY7h",
  "key9": "3Py613hD2rmpwyLJ6FHdPRVDDzenhx9GD16kdddVqCnYAh3Ud3JEBabMfjxgdwsyf6akFAUbikiNUyRYHTSr9BWT",
  "key10": "4jenggVT4yX4srV4CvDRajq9S5wNkGnjRXPkbpeesX2brLEkyAywQDC2Qs7SqJ3NERvpwrNpTmTcf9QEQEYb3ywt",
  "key11": "MGf5SMKvFrTFWUuY4PyeKVoU3urFejfi93hm4nT3BtKj8Ukekdc56KNJpMZkVw9wcnzFcx3xqKTPFaQz2Amvdj8",
  "key12": "5TbUL5dmH76uvJwVrqqif8Fr748RffjBY7bgKVuSwd2RnG5UmVPrkuwHMNqZ4gM9pknpa4PHJ2QKDwYg5HmdLPNH",
  "key13": "62FnLNAdtMBqxyq9RdWPyvE3KVEpgSSBnZWPcVgSU2Xt2y27tyNjDUG55fnYxmTjTgtrFZcAgFbbUsvAC6CgbrD6",
  "key14": "2B78G96wGHf1jm3jdAKP95iuraMA67vn4joQrSAKf83To5xnCFa5i5Ne5xQD3bAUFdJyowwhAL1DpqgZqpQ4XfRk",
  "key15": "5poDzyt9AbXg6dMgTKbq1mWnB6jcQZTP8jXXgh2f6E7LCvLoxsNXBGyTrrMVCcvgJ9ECCDYhZFfw8VFPA3GB932m",
  "key16": "4mkZT9vqyx13JME3gP5Pyf5PHs6E7Ts8R4iGhrJ7idYBtRpykKKBLFJ9Ghy7iTYbvR64LsJm2Djv5FjGeKNE9rQV",
  "key17": "57BxGEoMrgdcPiNDbGUEeSWkiQE29aDX27NLNcrEQyYD6Q2Ad3pWx41yy9HN4pznjBCBTnrg9E7AomwfVrgEqTQR",
  "key18": "4qyKcCwYNsrkw8crN4xcuXe82LoR5468MMkxqQBNBfRXdwvi1QdPbbejC28KBudJPAJ5MjzVee944xcNnNmDwCFf",
  "key19": "5ADrirrsBEjYiWARGfm7MHUjnmEzGmhy8kvxEZFcr4XUHSQNFYQ3vyYZPVnK1Jeh2aAfCBUxj1NaNE5z94sm7JkK",
  "key20": "54mhiN9Lviuoom9w4ymsoJ8WErQdVCEgUGpw2v2Rn8Ri2sZTk7vWLUz9yhYAczNLUTkRBUFr2ghrQBC4kJQdmZDF",
  "key21": "2oWXs268fkLE2gAb9Ko4u9BxYG8ZG1GRzpiCLumppTWV41ochG3NnZ87tJoNjdCQcT2vb4RQKSPatrxRydS9jxvt",
  "key22": "2XmF8ih9sLtqG9tjbJo3SCQjiyEQRaUzBUiV8hVupYRNievcr1wkFxWjc49WQXdMyooXrgFft2K9isJf2xxvqSZE",
  "key23": "3QEuPunjg7w2mscs3tDSkWtfciHUxYsSE1W9BaLZdiUR1fhDsam2BAhPv5JF3T19yHq6rpGV1vAVAwZRXATGgmca",
  "key24": "2s52T4iVhSioLSYJYXCxQcJ55roYwewmE5PgFdrqfxXksqPiF4kF9Ygr5WjGxgEJeGUPag6BmaMDjb964Htqe8Hs",
  "key25": "4zqczaAuHw1uta3gN952FSKKGashTc8oiLoL6nkg5bgsppJSd7uYvTRHf4u2kjZd8JXXD7cAYrqRTnEh6tkYQvdc",
  "key26": "38QSeMrpRyA8csH2oEhwdutdqeEjwXNhgS8GvwevSbE96PM3pUpjHA8cpzYyC1BvfQbLz3c2Phz5NuDgBJtUBKeN",
  "key27": "2EvWapbxTfrf3vRryZN26wXannYUtq5noxyJD8qcHTJC9wCzmQHAssmnaUX1LfKGr9zxh5dFJWnRyN8qDk2vPt94",
  "key28": "eVQACwvg8HiyJM84zYVXCrzkGyhEGtJfT6wvWKBdEnGA9RFAKKp95Bkwvi7SkncdVZrqdudXFgNBQYPf2r1rnt6",
  "key29": "3h3areUWpT7n4tGpL9XmpPCoMwGkq4ixcQkkdSbY3bysGgZxj7MTBtSf2LoFywVCAYsyGUjBaBT1Ja3pMATerz8k",
  "key30": "2KtA3UMs85t8CfaRcNuuN6kuYSMKixtpo2xH47gjFr61R2ZFfptBz1B4B8XQ8TL6sckX3CrTagyhfBmxVqHPeDUe",
  "key31": "2E8TU3CM6L99UrsABtPkmwdKnKqiJhTpBs33TCg3Td8NRXYsoQEfAKc7UCxvfJGERhv4RkRrTY3y25DV8bq25fhy",
  "key32": "4RMXgihzeSxNf2TtaL5TRKEALzohW6brskaw5SyNfKxnVUBCkXfu3z3ZpJmHHYg3DziQahRh1fspiQF1Z3m4J96v",
  "key33": "2jy1d2JtdhgxTXNbecJs6gYGZGyLpjCJSKPdZ7UFMEaHekkTnMbtqERxDS33Y2vuxn35udnP3FoS5dR6aggdypRC",
  "key34": "5n5QWK6mPGCXrxn6kzHGtQVAYWEYisZ63oXjaHUqxR2br7tWK2ZSQG2CA666tKWRRzM6dnV9wFBS6xLocKJioA7r",
  "key35": "4dGSuDSubzEveExki6t1fDfziTXbDRirwy2cCro8HBg7jhLxRt9ibvTYNvDAReD69CWQaeVjCQeRzXJyGwjMBrGK",
  "key36": "5ebzQjw39gcHJyo7QZk9UAcGCvM59UDptKyjjCyUAZDVnZteZvPccZnamAzwGp6PLuJAeahuWBQzTogXAg7U9r4z",
  "key37": "3aC48B3XFHw87fn8r65qwEudZbFw8GfmqkcmBUtGstkZXPUY89DXFrvSDwTLNogMx9nWpBYcBkj3U5rTwjaqdaRN",
  "key38": "G6dyRiS4uh3Z62y33A2qVu2LaMCtVDCm3VvRyrU9wsh6aVuB7gcC9YyHuiRSTUZUDAhSfGNMHNJPTvstZhPBCtF",
  "key39": "49s689MxJpS9KvCjs2C6Lr67eYAQN87F7CRCZnfsEno1znP5BYy79PofZacNwpW8rGNJ8R4dBWqW14dAVYz6DuTo",
  "key40": "53uX3fgdCyospNQ35zaQytgXuUVv2vB6y5ASwHuGyKNeDUWdJ9XoNxRLvjYAk6uvLChAzpNzzQXm6GALLzKt7yFo",
  "key41": "44Z29EjARPARPUgQpmUz7cqN2cPsDzkwiU6VpMMPDtKwUSrjHpAAfoQe4DfzgH5TUttvQ5mGQTqK744kckr2CTuR",
  "key42": "3xkDKp6qtwvUFdHxyUjTTjSooKjxZzbZdkVdXbdM1SQW3JsnDd3SqvwjQ5WUvXwckqtmdj2FyKSjax7NwF4JjQjP",
  "key43": "2YVNwRjsXcokNWZuWtyQhyJLNUzvxN2J5fr6Wd6uP7Pb8PHj2SiZ5Ppysu8F6DJmrBWrxJFQGud2VLegfYcTsTn9",
  "key44": "2YvirC2nfqPnJZsX3UNrhqMEnH2BcKEmxZqkg2mFrZf6R6T31qDx1WsAavzgpp3Gte65Zo82H6jmx5t83xA2m6D6",
  "key45": "5PHNjJYr34ZEGa8zybo8wJrwqGegyU5sXttQn1kcTa1LjMzShTpZLdA3i8By66Y3n6AaxBmAqpEztrV6cgbDZGDT",
  "key46": "zgLrotdzQakp8X9fqMTCrkQfjBdvVL9nYQv5jgrvaXSeGBpY5xGihd1aZSoixXY63hVDuW6fgLyze1caUNaYfRM",
  "key47": "uGXKFYvZ2JVBAboX1kjp2fqNWNbJHp1hyMgrLfG9Gkfk5By4JJR3EEirhkD1p3nC87SBJ5parYyW8PXCNS9W12h",
  "key48": "56g7udD21nKzsZWKquMaGAbTt9yhyWxoqykJKZMvSQCeoDbqzrU8yu8fsh7u83ShxKWmYjGDQjpGzqGibVdRTZKD",
  "key49": "2kfNZV6D8wNC15D3EEtRJj3ms2rk6ozygKqGvijG3cir5DRqRvrCpzHqPZ5vpQP1p77WDj6Y1nKZyFeQMZu6P32M"
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
