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
    "3qxCqbHPSfFGMqhtDk4UrL4Q3HJMLKEXhJd1cNMjJUqQ1YmMw21x6ChsHzhc9Yp4oK2mTRLeULULNkmGQhqbQwQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56MEMqrFNZNQBCNYUqPqDMYSJQdypbiEnEoz9KjZP9GJQXfNWvy2PQ1EddXK73JC2zzKDCG99cwiCpD3KL8n5sjW",
  "key1": "3ELXoCyTaD1yG4tv7LT9roFSkDZ4psJJb4cHHuqnh4G9h1jJ8rWFBXfG32rJtYXxYkiCirW6FPvemZ9YRCoro6Hx",
  "key2": "5WX27X8Qde6MikpqPtRPGi3gJCVQNyRJQNVfxiSSENtRYAozpG9TWVfLMf8r9MSy2esETj8PhV2EXgErhK1KEAaz",
  "key3": "2CdvwpZxwHT7uDdVyPQ44Qdza6iax4SBed5zgWC6CKg5EWcVcxCi2hyhKpMCra28ktikctJiyTnaCMHfRjGdGBTD",
  "key4": "5U3LbGkuow2AimXeUUy5wytJkyJ9QPY2Zswqm7jWWEXHad5HrZYmxX9sdDW6X5fEvC87Epx8BVtRjQYGRfdXSseM",
  "key5": "LteqL62dEmYECoSWsy476pqmqoENjLzYdQJQFpjeQWDpEW2UtVd3kYEjejXA4uqKmYSa5gJ1mSbpy1WYEwxmubL",
  "key6": "3AV1j6aqd9BSr6mFtaLJ2aLjooqk8HDArL9ByCPK4BsDXpWFj3qzeKE3iAAjthetPG7MUpLakRonJZRqnBh8XqdC",
  "key7": "2SbmgpLS1V47rvgjkJpaSWLNE4u7pm7EVqaqNNZhNAvT4BG8beHcNYJYXvaLD5Cuw48SHMMpJM6ft5EL2CPMRzvi",
  "key8": "49ZW1vkxLnTdv2TxVGXvJ58vQ7yfQYMkLyALEaQr1ScZiUV9ygTFvRaap8M4sMSFvCFHD6hr1NQJFVh4vSAyLWwC",
  "key9": "3AuajC5Exh9F3sk6VP6o11qpFJJ4zJy6To1UmD5e3wYYugWVabaQk1R1X8Nv1BRmRyJpXWoJAZ5mxESAaB13vwGA",
  "key10": "TDqi7KsdrbwhVf9ttQNXYsnYUG19oKNV7VZCHNnu3hsE1ebDWb5oswBqPVbXaU1WuFL3xXQbjeJnSPsyz453mCk",
  "key11": "DqvLTHUTVMgE3zuq7HsfojRfyjrdDGgAo4QSTCyxvqSKMWRCSKzAtqjSNVyUZ4HJBnX6hWkNB3y9ABvHyT4uqGk",
  "key12": "649QYrYTZeSwSizeyVYsG99YY9b6ysKh7QNjy8xYvVWNZrJ15YmqAYoQ19qaD5wsVxQTxQiDuyWn2zWvr6ujj4je",
  "key13": "2MiP9TkrE8BjjLjXgZGkKJrDRUbbpgeW6P9rJ8RsgPXvU3bTSDVBkgQbzN8h5YFc3RaVxz3bbJjUy56Mgzaz5zaG",
  "key14": "5pnLmujsFQxfUz3mXMmHU8qFkJdssir827yk75fmnLKoTmxaE1opxL1Trfs19NxsAJjwLhjiHnbpNP28g4FtWuKJ",
  "key15": "5yZwWiDZiUArX73YgZJAycHNEw4CyJqrb4WkJiTa7hR8HRoHyuZBcNGPEZRP3kWxj4Dgm9tbKsaCBuFFW8SMtDqG",
  "key16": "4SwEXYMKBYxXc48Liei3oDUak5Ao8juADjttyzpvL29NHJ7VxQMoq6UmwMf1PET2FsCpmFrq8rNB9FfwLWwN9PoR",
  "key17": "RsQn3Rjc3BUDabXNKFz16SrM91cFP8dy5x7yzj6azB22hQcRKU6rTMQqpCzyCJq2QFGa78ZbDuZX9HPKBvVwQbh",
  "key18": "BzTqHh4VVEq74AvBrYYnc1QgkixnvG6LxHfAvdj3nhHzb6B4R367issczkJHhzBRA2jqB94ZPSLsjwpn7bxYpQa",
  "key19": "3edeTee76xhofNRFgs7tMgzAuiYhPdsM8Ly5XZsDfyoUw6LvNAnfQ3he18wUubEo44EtbHbUX6SBmYuRyufM6nA5",
  "key20": "2fY1319gRhzySdmCiumbrwEcDPqowtmeeJJDG5GZ72aTmw3AfVAdNreZGRCU5Rdoi5CdqQnrgJgQaiNGYx8Jm7fm",
  "key21": "4pYxXdjmncytgTM8KdtZHc1gLUzBxCVKGfZaQztP3udsAnagsEk4UX9TBeAsJWov4vCz2xoipEPn4KxHW7Jg77M",
  "key22": "2iMFDGYdcY8FybFptn2tuQEMzQ42U6rYT9SFbFCjHwophJRifZKeMk6KJCFD8Uw9rTDHgp8qeHoCi6pnLXHpxC3n",
  "key23": "5mWmJ4rcnAfunsELexWdzUHukmkVYmTrPwBP7oLBns32Mq17bCWXnDwsCJ2EqaJpV1wk6uMxs9Ffd8fSt5DAUGJX",
  "key24": "3V82cuoPcvP6UJ9biGRw9Xzbg7oHohNLjfanargPwRPCVaPU6rbvctAZAxQDndyDA5CymaK7m4kGzoddB35zW1Zo",
  "key25": "4SNTfd4PdDnXp3uyjXwvGojpYGcC5Ryd8r9UGZkzYwk9pB1eKmQEUxv94DbauvZwQvzS6U7EWLJgXywAKeCyW3BE",
  "key26": "5UQGxcWiLjBc7JLSTv3uUYT1nbJd3QpxK32aRvdvwdEXMhP5NSu4ymGwsuFguXAX8swknTiTYT2GF2GV6mksAwy2",
  "key27": "2XU4gSVgGYtu3YL534ijXTZtrkPnCzDaYqUaiocUkcp6tmm2pANhraHJZ4wArMHkzVrRVXBYT6PF1Y7ttVeVW8TL",
  "key28": "4LHgeiRtSCjHMWuW35Myaj9jKsEk4DysS6m69a8qHS37vakYB5FnJHT4fvEVJ86ynqxtREgCnv963UJPqqFBJNKE",
  "key29": "3yQeHA9wm2EasjShBtfmE1LKLrA7qHXQ75wQSRgWDgYJgehHsghSzZV1iYaXQKtHSRPAr4xc4P6za5ewroEG2ybW",
  "key30": "BKNrYWKcApqyKX2UmHSpuSkoPaJ71GC61UXr3Sp6ojKA87TBg6kSTc6ABpKyFhy1q89cxu3zeSbpmNYMU3bpqLo",
  "key31": "4JpdjKLSJQwesaeE4HMfBhYPQxxLpbq4Hef14n9X4tDkH1CorbpBpZAX5fwrLERVWUrACw6ZCu1AVADbDEVV3iQf",
  "key32": "54fCYQ3tLYM1f7CK8obRDN5T7tk5o814CZhvSPVk9b5pBd2B1F3MWMNi5azvSyuaWWmEe3vXJ3fJPwNutqeSCZSa",
  "key33": "6kjtPFua8FcoACsKA19ruta8qaE8CrT2evC2gTtWhjFiyuE23LE6EaWZogMtHhEPCqTCWStBBfhKd1TLvXv4tLY",
  "key34": "nDogGxjFSgHXAxHoRMzzejV52QMktRcHa36VZ15tYQ425cWaYJrxsY9MiN75TYpgz3SMf7YTtv5qCrz1ycqh9a4",
  "key35": "oMpARPHZuUikmEpByWcFLWYBser5vyfvfLUAjSaQRRgkqcqVzP2rBnbcR6UpSZ7P1eu12iyetL493Mbhp3NfGVS",
  "key36": "2qgbdQ2joQ2rNpRCykoupGq83KE4J8GmUEktwh42fTT2FFMHBVQpES5y5QurbxnBj5wQP9qQ27fDNHEH422hfdSf",
  "key37": "5sv8taMqCbbEuBGC1HYkmvczuzuhJJCjPTTMJJVEPeCPoyeKTAAxRLjeREzkH3TyDQooztseif1izjRTeM9kKp8d",
  "key38": "2AfHtEoM8No4k8voTa6aKi4i1njz8HUGri7jH5CqKLRt8Qn1enwH5CWcVVBLqDyB17zmVvVYUb5sra5PGnPiTJU",
  "key39": "4c1y3gkdQPtE7yshW7p7QJkea9qLHeeo9Tzey9VSjAtUqTgspjfaEtsMeLDXHMrAUkJ1L9PibvvfZ92Jeum1Vchn",
  "key40": "4Uwnhduj6PpHgsGS2Eu2Vju94EeVaBunguFEaJBhD3FHapG1Afdvuvdw9DGTTYtqDyfJ85KWmoX5fxchdU7dge7h",
  "key41": "5gWxBVdQJYqkjEeCJZ4M5P65EtKkRRNuQYfMKXeetb9tixsitLi19bWVBJozHesynsqFE1vD47sqVW5QtGFpyWa4"
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
