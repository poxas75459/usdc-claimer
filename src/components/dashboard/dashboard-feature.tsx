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
    "2BeVH1PwcgmgGUN6za6gDgPr5xsPJCiWwr9RgGUx9EpMkCqrSCPJcWimqvRXkXtFU5ESzDEVXLNsEHkLkb28RiPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iB33xa6cjo4JiDYuEcSgzPiAv7KKJ3VymrwP4qRbQSHeMRkor2piwNGoqeiaR2AzxRviSsY8o6fXzDXpfw5bgdQ",
  "key1": "5FcR39NReFrw6SmqczwUCCi1dyDnzGB6quFMQedZarZtHkNYXGhRkJVZXoASdNyQ746XmzYfyp69toPSNkWU9TfB",
  "key2": "2kgBXxj87bvkS6fuVXwCY5rp8ATypubhJzowvNtmzs5JsMC4txe7GhEZ7v4pSAdtQpNrMczakiDy4DprbeGP7ZrT",
  "key3": "HexVXmFhS8rEu9FJant5nU1gckoPSzkPqmxhbxC5irZsESF6wBH3Gd7en6y7WKFtmHpzTizyH2bsqBjAgwwwJLe",
  "key4": "3eu5Zj7tckhK6rZKdTH7XEBWyf99TT8H1PSi7oTsz4KazzLyXFNPGMrGFakvJLNdXfKP5MvyvPhGWBPin7V2VvcW",
  "key5": "5r21aCdteqeN3Wa9LWTNCecDx9SZzEifrbCJ1nagCkTdxBRK9xUukeLT68bSHGCg3hCd3VcsbzJWc69nVrCSgyt2",
  "key6": "5vjfMcPRgQ9dj43jyb4mnVGUaN1zS2nFzbh589LJmz7mY37uEhqMcuMNRzjSrz5pUjExJTT6njSpKvZ7H6NMRKvP",
  "key7": "weYRjoNZC9j1ir82aoDdiq4z2FoArP9SpB3vNg3aD7WThjXW5nf3BCGDGLk5YFLd7EUUXvS8gP3Ujf5qF7Z6iUn",
  "key8": "4miFsE4MFVKjiHBEgbgQs5VVP91Pc1KRQ26iKeHj6rWxBxZ8p8S6gqwQfKuZcsAeVLhrWQgtMJTc3DB6Qw5N52Gn",
  "key9": "fUAdhSVfwCNQ5javBjwf2feXtHCZJJ4LkY1imUMLKtQVCD4RawA5vcjn1DrxSvnEVGLo4HC32y2N6u4zkUXexB8",
  "key10": "2vWb6dmQWkKZhRmZdMFs832HANpJhwxggC9gw7TkioX4VBYR1GYE9uUrWTva9oLg8z5ghmYbUZMx4MSZ5qrxMdvf",
  "key11": "2zTTmCE5eCzSjJdiL1ntAbgAuUgm8r1ccq4oxvfVFJ8aa2hXRRAMv4dN2zvdksGn6uqCbmf2H1Z9mG5Yp8ZZkKmj",
  "key12": "4sXafqBrJmq8J3GizgLkYmJtMmJJk9h8MiNThr5CNkoDT1vbToKtQDBPsCKcRvqD1skZTZc1PgdYQ6iTxU9DhwgB",
  "key13": "2UGsWSF6gG2YnwszqwP8UkaERWx1yRmmdcuStuPnz6kqC4MzmBrDv32wcoKcqTVgyaVNKkUrWPGj46CWQpaZt664",
  "key14": "4wcp91Ag2MN1nkQ3WbMu3qqrjcUiZaFsZacA7c1kYi8rNpVjAwiFwGyoCzEZMoynYqAybdD5DXh2p4Ax3dNUdZKj",
  "key15": "3W3ZbVLCQPbHvYqntK7rVAKq2eMkLK1BWuxaC4Lfd5R64ds6sTsfg8ZrAADgqT6USn7QGVxnv8yiPHEsJDHRfgk3",
  "key16": "m1eTsirtzzuSTZwixm69ZRUd7uzmwwMWmFi67dgpbrNDGiqbnU2EnGoJJLhRFx4bqrozeWydSLBWDMG6xCJfKCS",
  "key17": "3iYkyudoxSXhfbpwVM99qXpL6kPvJAdr38kB7ieeUtaBEJXsR1d7ERBdiwptqUsDPCKpwpA77YwkJpWmJTBj3fMK",
  "key18": "2dL3K4fA7KAN7tQCjvASNq4hy8MdLF5WK1W38WcC8FVay5Sku6C5MwEcndpFam2qXMDqnNbTHwXA2wPPcqyeHGnq",
  "key19": "5bzydpuK1DbW5LEv4H2MmpCJRYxCQPi4HgbaeLmuEyLKEvbSj62g1FDEaNgWx1D1M6oQPZS7hkDVzzTUZ3JS5oNe",
  "key20": "3P9g7hfsisgVfDgWZ4uxd7NtGpaXpUc8SQENn3mD3j6bWzzY5PdBUy5BkpAgeespQrSPuBBLS2GyGaGTudu9UXvC",
  "key21": "5jpVzLjiHZK1NXWUwv2QyRFAMVvFCPmLLyw1hVF6qrGa3KJru6XrdCHXfcFiTtHACuFaXwg1bwqJJvRKu7SJBMmY",
  "key22": "2PK6UV9zJKu1cg5fG4j3RDtTmMTcER6KAugqpCf25kZ1vZV5Ye5s5BnvKkt5CHqc6EJyzfXqmQ7j3Tjuk6p63i12",
  "key23": "AhuXD9Yqod3sFmjBJtmRBLR8kMAMB6kx849CsmtvnVcA3gnzAsapKXMk1GpYtvUF2XzvL91XEySVKaP5VBbFNav",
  "key24": "3Xv5ugG7qBQA42K72MQyzdh1tp88ngFuxCwo3uPKR63zni2tWLvsDDNPYvarSyHJ1zMvrQRBALb6p4k1taz3SeYL",
  "key25": "4nHZRqb4qrLyZH3aNYwLJ4PKMbssAtwazjnGDWpJ3SKpsUpSEsdvAUShXHwZSd1smvmH3KBLRUsS2UEoRaKJCugQ",
  "key26": "5wg4J9MAm79ACVx9Gx75vA7cLMP4QDJyHCCGofWvYsdpNYJFUVupB7sn97EjbGmg6GLzqvXjwRWFzQsDb3PQQ6Bz",
  "key27": "YMNgrmk84pnWS1bi7WhLRNGmpEu7pTxL8kweaiLKJF62FYAia5nyGMdv4edGJpxnVvXFzgFYusfJdPeNJMqk1oo",
  "key28": "GcnBy3HrxgdszTEGZkDCz717BYNDuEu2aVzoX1C8jsoNxj9j8VmkqBqzKtBfS2rTpkZCfjmtGQyNJGzTM6igbS5",
  "key29": "4BZYXmQUxCBPigdpmpkPS2ZT4GNeTyHMJecDWxWWfpDPUz68KuFdYaCFW7SqMGVkwQ3VrQzEqkW8XUVxKTph35s6",
  "key30": "4NhoBmLWf9YtkGPBWsDcgA1BvEo4w5jfQpH6g4FK9t3fSdd9DkfUcdoeUveKU1PSPfjhHq1JMME1nemiBi96c7XX",
  "key31": "4YTvaw7M2cRwCMFVstghxUQMF2UfrfQBDoERurPHpYzZfeV9gYkz5tskULrfodz6zNwoDBVbexQ5QbiwLv7U4AoM",
  "key32": "3XGHDHMLus4QbScRf1kc5MXxu3SXhPdskCza2aoy4Pm8r5Mvvya2JFDNTqbjyTfi3BxDK7dWVxaasjaErhfPCin1",
  "key33": "3rCocz3mZvEjScAnmT4BR9pt5neAf4bwFxJk1EpKHNrJo7xFU19iWzQ6upnf6tBSXvJqccYnRrwjC1keEWVtSVnR"
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
