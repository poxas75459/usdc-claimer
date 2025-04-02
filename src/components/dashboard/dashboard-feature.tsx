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
    "2dxYV5DxGSNc1wb7kx4fotaQDkjUufSUeSoLPSdYDYXydGn6Gu13jn2izoGJkoHbPAxNCq1xyk2r6RmJT6943hUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sVXCw8oejqPqhj6hFTysWJekjycJ7tf7gRiTtNmeamfdtL3VAZdKMApjwFVdVASXm9CSU4RDgkLjGntyRrUWuqa",
  "key1": "4snNt1mDAMCzghU4yBeQo8SnoaCetUfBhu9Css5gxCBUhUknLKN8tGoSazgdJJrJDtff165p7jLhsYfdvc53uxoP",
  "key2": "62EH5PVHxCr5TFNn6PDvLQTVGVgp4kyjte6kfghhKz6MBjnxWDz7p86Jqw2ay5cgRVEvEyfCabYEZwViQUZ5QTNR",
  "key3": "2NpJQm17NvAXYNCe7tzgpECqmgk9kE1HHJ1zdczTXXN68XKC91nvLM6mQP7A57QJgBNSxcoEevRhYyAKbEqagAVe",
  "key4": "5Ed1m1e7UfNGJsfAYXMjsLmmVRX1ritUvRSpcd1eLA8T7Dqp1ogLfm2ePemqJLMSGbBymZWowof7U3my4mf66iEu",
  "key5": "5eboKVYmK8qUnuaqESbMBtuSa2f8VMDpcBNwXvh321hfbFTKwp3ACZ9SXHq6ZfcTujqCNEKY5EoKNPXdwCvqZk5e",
  "key6": "2SgRhZqYezn5ckduVRBVSCMgqWH4CqmbCp8rsVaiDgsyzrFLJmEPjFDqmhvfGSdrUrt4wF5p53g3AhCwg9faZHg4",
  "key7": "584So3PGAQhTySnFko19GomNkGDYoFJyg5phWw5EGMfLEZEoV4jws2k5QWfgddd18ufri532fB7jiMo9pRubWmsH",
  "key8": "4B9QPZ4JhXHsLyHTygMr3ESpHmSSdU7NeuLyFCfwiYiGLguYsri4teDXyyhwDMHaBJbz4k7Jqpbcnp3V31F9TMbA",
  "key9": "55b9sdC6KG8RTNXKrjmmrPhPZgq2KCY94ms52byWTsiZqwnsTHh5vt7axof1wu8K2NdAcWJ99VPRDXJX4yLSfwmt",
  "key10": "3odh2MxKyDkE2kmMamz2eNHAdmLMJdRnsn1fAdgQ9w8nvHJbQFWA4x1otWAZngp4eHpZ16xE1pyytFsoA8YwdNLk",
  "key11": "24dCzU6oEmDLJFtFAuh36hbQT4hK258yykC6ywYh6r9UMdWQcwosqGW9bAbps1imQZLfH6Yg6mavekUwTsZ7nx58",
  "key12": "5LaDN95mz8W89eo8Q2hHWCiP6pFU45geMB3uGLKNzWQANyspbFJVNMasCqmuFetuxNo3i4mBreG7diCShgcrMRKV",
  "key13": "1tnA5qnbXV5k6gNcbx9PSEN8dnPsYo21qzNasThy3nhftKeRdmSvdP62rb5HM9Y2Y3HiE29Co4JqSyYHiktxRGt",
  "key14": "2Vvxd1gVDRH8hn2zkoPymncVpDdHdUS1ABGCZYxJanW3Ebaap7WSBeizDkwCnHZtjwU4vJ9dajKvvS32VXugUf5A",
  "key15": "3N77j8rF5oLGsEaEfvtb78GPUDBS4N1VVr3pNGG2aqChXEydP5vrfY7kTrzrgshM82E78frDwnvAGv4zBnVmbXoV",
  "key16": "pYo6yLwXbkhiJtVinU9YhfAczxNyn5Qx2SyM2pveZJJ7Ws4bPj6ZFjNAHGcDLFidQEPBU8xyH6iJHXQ6PjFo4cV",
  "key17": "2AJcaaauGaC6bwYwJNvBhaouEphPakv9MyqbM1qn9p9Q1mMAHuGBJjoqK77GQ1HWxrBk27grEKEXZjEsqq75J55u",
  "key18": "jf5DxVoXXSk9D3UK2QeHui3GDxvniEkBepVuvYQXPDMkpqMv1tzsxKAPveb73gcN3aemaeG1h3cTh7AVJoBAz9W",
  "key19": "3NVRbLPDjXCSuq5oUR4G9LDycFBYQc1KyaQm7YQkW536wEz7YK819ZdNLn4obtskTfF1xsm6mHWS7XJ515MLCz17",
  "key20": "5N5JE8gHyZh48pnTzUwMdnv4RkwZK8bSgN7GGKsUF38QBF1Ujg9p2VY1LW3Mhr4J6GY1SMrfMHZBMXiQTxsQRvFn",
  "key21": "PvpZhNxyc2ugBf79hBNYS6SXfPLMaGGKQQgTRj5EapoRaQ2CfxRcgWQcgyB2vBNtJYGvxPjE5qk3Wc6AemzZ2mX",
  "key22": "4GWwMQMq6YjyNFqEympQ6qa4JwmoAqAvEAjyrc5ZvXUAhnM4VDyKwraVdchfDmzLmn1iW4gxgFGbX9zc8jrDUh4",
  "key23": "aaCXk2arJK4bkmEWRxgoYBNE2x6uEajC1SBFKJkE7drdfL9F66QrSfe2A6RwrNYRM6U5u7MxeFR7ifJTcvxhymB",
  "key24": "3amkwVUwjzwT26HYwGpQJCRzNMBsc4eVi5FABu4HdL9AJgU7qauHhZ4WW9wFn1gZCanufz1CiNgjL4wMfLsN97F5",
  "key25": "2J5aXLjxapX9Kxwq3R1zEtqdeMu2ishy5PQHuqtAxakLZd9PcWLQircJFp8QrK4yBTW4H5j9mU5Rbu3f8hgVu8ka",
  "key26": "3E3M5ydPPJCYXu29XzvQK6eUN6s7Qmb2KpLzfcjPkcEr17pM9iQwNPwro91LNtrCCUUYkdVHeioDFHx4maGii1UR",
  "key27": "3ZwVKXvcAT5vjFFzRAEz36RwQPUJWCwP616X84s5XQTT6tEWLGggxJz2daXrSUiQSa5zZdKgw2tQ2eHfdw6SMdMf",
  "key28": "419rAcCZmzzUBG3D8AHHyE4QCe2cGvsCEvF4QJ1max3oeNgv1r9qbDsFV9DmFMSHS6c1AFswmaYD3PuPRVbECTjm",
  "key29": "2DCuvD4RfwyKrh1QNRzXbXJKG4bL5e8ZXkJeDcyyXKN7tGitB6FS3JUp9NNU6ppcvyLTvfLN7Z2fRaiPuMzKjd8b",
  "key30": "42maEb8JRMqREtLALzCPpnuXY8prJnwJNfKWg2FhUjDnpcnavpHnpFP6utks5iSLRWq3HYmtRqVDHw5wuGxqDdKb",
  "key31": "62EMhqkm4fQUYkB6RQjpuDwrG835pAGxxzh6YNJvuCqSkJKPz8fVLRcVNG36ieBRHwHcDNBoJN4z955TgykYjMfh",
  "key32": "2b3P4afFeAK7sLSXH1xUng63MxxZLpnVX44mGbiDxKJbgwUG5kwi4cm7GmVBiSRDCWCU9T368Jijy1QEKsgMHite",
  "key33": "5ty2yULduJPRd3dRZuYZxBLHN3UiAMYF7LCHNiWSPx4D5AXenDsdqq3rTn24FC8Rnq589Wqdmb36KAE9CCR9wH9o",
  "key34": "3SR3VMeBhbfWBnwpaXKzm6EJ5356GCMmJXKZNkdVkzJf2LKPUFAyvk7pCgupk92RYrBcfDG9GYqFRvRjuWrNZaJH",
  "key35": "51Y5Gb65Nkr7ANtUkgYddowZXySAkg6smtGyHRYFKs9E71BkVKAjV6TVWXyHPpkyotYTkfXaa1ecWHX9CJKZTod9",
  "key36": "5XDAGqSwWuPDD3dLkTbdardV6AKm7PScVrPCoqXL2iPS93EgrqJfmJ3k4ba1ipsmKM2aVjLMm1EBRxJ1efnjfSBw",
  "key37": "Z5Xm2tQK2MW7XJujGxrKsC4h5PzgZfDinExEZKnVfYVqv2RGXxU6gTemb3xuvWAXHxeUdrsjCCZ7yRMg19Uw6ad",
  "key38": "4CnSbR4ZnSyzGkq5hnLRFkiHebc3ZiVxj6FzUSVfTtjC5JSBzxxBD2zCeguzrbiW71QBxTj7PaF8mDmMb97bJrwX",
  "key39": "6743sEG92kAx7QVdChkQBbTQfbgJvUBTA2YPesEEMfPYtDBnNQogyFf7CxsecPA72LdmLz4gYaniigdtU7nnfb7P",
  "key40": "39aFxRTwRhqbVHNqcy8Lxo7Lb1VNMASvy3eoSbY6Li7TztmdEidh86w9jj39mLbhx26boNtWwBY14kUvMZxHiRL4",
  "key41": "bfm9mDXZKhbVaryCM42L8FPfmrqR3TNL838p73nxrJ7TXCtYmExwhDw8XiKFJur71dKF5Z4yuK6fisNx6cgmYLk"
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
