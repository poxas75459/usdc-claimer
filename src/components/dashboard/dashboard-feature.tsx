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
    "48BNTLYrhQypvWyG5mpwoRhP4ZLZrZ6dQd4BPLmLwDFKHTSFEtRcdFoF6X3q4FiBqUUvL6yDsUkEhrY6vrccosxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "heKxwtaF5Wtks4G3Gecjts6u8bf2fHeu4iGLasYRrzyyn5JsTb4hCJjmBcYwVXyJ7HXf6nhtR7PdmnbQtBxXEse",
  "key1": "2UCU4psijpvZscESc2CaPyCh9tpHsGFPPvqJT3fjiMjo38CLvaSjRQZC69XVAFTbnbmjp1MsFBBvZ9radng6wkSQ",
  "key2": "2gLzJ7mWG5nxZu3kkhPHTrhDczhvUmnuupo7D1yvwqz1RbJm4TxeR1PdjztQP3spQC24xwRukr22Uuhvs6aGVMZX",
  "key3": "sC3Li48x93TcUUeecZaKn5fxUEccuGW8zWT8x337SbZG5kd8QjmnjCHsT3EYfsUgB5AqhrU1bT5diDYcbDUMk7H",
  "key4": "3GmvUTkt9EmSRGLDESAwswtFP1WzxJRFNrV9jDho4vzdYQk1STtejoArApkeBarrHJqCUv3ZgS9i6Wbx2VGVCrGz",
  "key5": "X7b1iWm2U7aXwQbSWPKwXpf5dCzvj7ZEBbPq7RHfo39SaMzQHfMfmQqMuBXdqRLKLZAhnM8vqHUbA7tNckaiyhY",
  "key6": "Xqb5HEYAacTq39wdTFbXbNunb2JxCa3uiRa3ZDXZHqUb8R3oRkYmfaFTSN4A6cFKFKfPfsD6DLg7esFqpsETgnd",
  "key7": "2xVhiMemvp2AmFUyLHzBJDMkBYdppJQYGhaEecFA8Msr4YynrUFy8vaNXLgC8iKnBKyLkpEhFuVQfbR8Jk6GyvpU",
  "key8": "358PYs9hxvYw2R25W9vTY5x7rywGYJLWdkjJ3s8fyPZ2XbVPqADKFb4qMqoVy7x8trYwbqcLwxpX39WRoxsc3XvB",
  "key9": "4xTqYqimhR6bxiJunT95kkSwEFpAA7eiTqsihbDow8tzArwRHtoacFkd2CLBJytnfm7HXQpeFwtEiGp5tcZPCtr9",
  "key10": "5TcsoUPEeMm5UGicRVJs2HEvHi5h1eJ8nZ3D86vgq589EEzoF6G7mGrawRiqBaeXBKrQxj8ktYPF88bvZCrxDRdW",
  "key11": "3aeXPqyYks9dyNSS41j5gM4FkFTSNgFQGJbf2vaPykNFBCQtVRjy4H4U4nit3gNSiSAAwraBYkKXrQjeWTCSDm9G",
  "key12": "4p3g9D1fUxWsStWpT636RCWLzg9sds7YDWUzjibov7nFLy2L8F7V4M1vqobu29yYFqL2aoKAEqWQE34LExjktQvA",
  "key13": "49MazEDvpP6W7eiUAz5wEPXYsbpb3ZhDDDMvXdH72cgoFBUAgUKftjpJZuYiTQ5TAJGrxQ1sF3yw9wwgbQGTkUpg",
  "key14": "4JAmnaZ5VZrkuGaW8BekH4VMrxvt9dM1u4K3snef62AkCgtRASbEHezdgvZYgx7GCWGubuFaSQNbn4gqxZkL7As6",
  "key15": "5Q7rPgBBeELYG7Kaqs2etk7iQWne5jfXuFrbcKh26MmmkTJuSJth9bniuqgTRn7EnrFjuYx7an98NwnkpKoDdJzz",
  "key16": "KfPAsZzYZE7nvDTqB2dQKkhwKVxjTSWavBRfq183XTQ8rn4AtjrUYL3uAaz2CL93vxXxY1v4LpDsDo6AN3Zi8kY",
  "key17": "4PkVfoVAjvwbQRmZvTf9HNEjoCvoANKHFj5Br9VKVadcaCWk9ipnKsDUadXnixLeLQPE7cgyAZGnnnXBfUktYiw",
  "key18": "2GJwL8D9HkuueEfe1ywfvQzYDmKzDGkYPv84Cxd1zUDc796AKXSaKfchn8YLGj5pib7BzXfht1QEmTGtMApMhvuy",
  "key19": "2TtFnT8fJxhQKW7fZX5o1BUgtGy4QanDzHiX12RQQwpjcxAXGa4Muz6zkn7hFCwDvPxpgbjcKRmFWGkc9qpCc4sM",
  "key20": "2Ef7c4FdHxzUW9F91JdiPqkunzt5v3U1xgMErLu49QUnWJPF6dfcFi6EFMWZ4jsH1eVcxKhAtwoNGQTFhYwYAp6t",
  "key21": "3aTANZNVgk9EhQmnokdszmYePsx4p1MS54T2YGGRn1PYsvWtvkH367NvE2MaZziEDSyEXMnrq7DUU37uo9tsGNv1",
  "key22": "5rEqCcVEbZe5AxcwwZZETMKqZYfDud7Rp1fVEUKpgH3bQTP8E62c1WiEvU1urKg2kY5hjDVwtQpTFbG58TwKADyD",
  "key23": "2n916NcKxBhMXcp19R359XXRYRUDj4SSKTqphx9PySfKnmbcqcJf2fBRaoBTNpmHsPfdjCJZVBy1YdC3YzVoGRoM",
  "key24": "5bqZWgJ4mY7eTAZi5z7d6fh1BmP3sTz2vRsfDBX7ay9uvZAjJizNMhe2aSNUPwTZ1GuCgUEriuQ9MSLySHjd5eWS",
  "key25": "4v1mWM6JJwmpf2tnDNNfGScZxjqCeu6SQs7axV1C2TEN72YytiBorLEDbgBDJHTnACYacnVxQkKPCHc6RKzFDGEr",
  "key26": "2KH5UqUEtrh2rEfnSNLtPjS1SRiYN5qmPV4ahjGweKC4HD8nhWPHFXxEHHX2YZuA82yn9qEnzyBWTMAexHbJAAkN",
  "key27": "UqvaT9kiVi4D7qEdSXCF2ZXQDTjnepi6AjjxpXbRwsisMWSqUEAteLkcWD7n9ZD2ut9jRnq1FuVzP7QyRBKig41",
  "key28": "3hbr7d14Qpnbn7JMPQAaG2VF1SMfSmVqWY4oECMd5uhDu5s3S4YgaGi5uBgzCfZWNC5sURS18KyzWkszsU59T8Mr",
  "key29": "57rVjNr3FpGeiQydYh4kac8ke5TyqqhRQrR9rbg1ZcSbk1cybQYBkF9kjHmz7tCF98uwgUpVYAXCLkaxXqEkSkFA",
  "key30": "68izoJCzAeUuGyi1LjD1kHhKWcfcjSU8cmadttuHB4hJ3HPdEMDXWxXixuop7M77gtaB3qPP7mLeBHY4cbT4ifV",
  "key31": "4Ayp9bH4n8Vcc2Y9nEJ9abszKCbZEJrGgQQJ75jF7VoVTdg1R7XrMZmefjYRLuRpExGTGfdzD3kbWsv7sYqdiqr3",
  "key32": "61gFokRp3dXNKKz6DZjCHGvUfqF6mKCjmi8iyqbWgupjoJjCVq4C9SwHMZjo54rncpgJ6XjFRNy3a1PfzNx8ukYN",
  "key33": "61kHXQ1LoxazJfzgpE9GxrnoWoL3ox5DgcC1mZND9EeXRn2TTu7Q2XKVJtUZDKkc6r88BCUVfZstuU7nkxm4stin",
  "key34": "uMRXMe86HzFHFJgXE9vpXBzTpv5cQLAegJBK54m413GauxZFUsC58DivjBLRrQ47kN2BTrdC84Mt3J1MM8LiYVb",
  "key35": "WycTLDNQo9pFvuTnYYDJm72rvqV4narxHqeYLYjUebqRMFGFXfjam5FpzUE42oVvQnFiDG1X2yte5oHRc4oMfVR",
  "key36": "5ooxyQfLEwB9GEXPKx8qVaRfQQ6B2EzeSNnNZnyAV6CVF64GVz1VhjNVgbu6xvnyZsy7EcmzMHKX3jn2guQPSmaG",
  "key37": "4jAFE1e7jYNdxQoNvs6LH2VezGtTq9hA5mPHoZPxmMmGsB9nP4fjWh7Q6UxfYSNqWfGzrGXFh9mgAf8d12Zdz7Ys"
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
