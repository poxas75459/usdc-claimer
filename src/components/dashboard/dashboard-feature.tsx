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
    "1AWebsiDmUqK5dgufbhS1bpXuJHQeAq4idvLPCduRZ9oXVoX8MWs7Ur8ykkY96GpQHXhpSkKKoWBgPhwrx9EjFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j58gkzjH7km5tpJE1vRbAqUeN3cLZdEtyQbKUKDgFDZqeHV4jzQWPhwKCQGVAsS7GchQVJWrJhMzz9iXCj13RNj",
  "key1": "4SQLZZpRdZJgq1xzPgTW3zjo8ho4QtEc4vw2uwZf66cSye97eefWcDSgYYVR9oNcYEYqvqjByEHTotpsoFtAQmv3",
  "key2": "5HGqXb8ixY3skvZwtmgLSgzK5WE6ZS4nYykYC47zMsedNj4hvhvsXFtP44Njj5dyVJDNV8J37vUZkXBUoqfSG3Y8",
  "key3": "SEfHoipK1UTZjNhn6MeTTviX1KcfZznoKqYgY4J5aRGz9zHqwdQMrt2FE21gtMVnvJu8nmmGXb71BvfFsETodaL",
  "key4": "2pZLwFxuJX1xeTxuA9BYtQYqywQzn65Q2onFitgqCYRPCLj4KoLkw6AJHsntUghMTaXT5yBFNLqwC8pqW2CpTS7q",
  "key5": "kV3ewWed41homnFmYs8hg4VWTEcQiGftvQCiGkgRQnskrqvGcjTUPVQgCUtNTy2FP2Td7vHMDYYJyHAtCRaVksL",
  "key6": "58ZR7a8PhxGFuszyY8KqH3uoJ92oRKgguvUWDi57uCHbCgmjNvghHMaVpw4oBB6ARXiNJa77Q7GNxdA918RW55ZD",
  "key7": "52Nmz482GQoh6CadCxYjRn5mmf14dsNHsnKoqXVACFczWyQoSB5kDorfUvxR91ngizdDXjCz9gxvyTGAip5kC5Kp",
  "key8": "3PLcRC3YTFu7jzcedfkRCgfo1xZC2y2EBNNZNxgEJue7Jv11XB1QX1iUGyiaseMrNHGL7XkLvcEtqZrLpQUGcJGM",
  "key9": "3KU752abUpKKw5VQwwY38McSo9oLhJEiSqwsoQ3U9xYQDxpgE7Mb22LwQmLRxe8XvixMUhmfoQdQvWMZjD1m4yFu",
  "key10": "2jFYNMVkg6qYBT6CMEeQG7vAio7kJmZtNM3NPDqn2LjeL7SG78bvEe9wsrNchUnQrYuL38NU98N8bvXfWnkT7HzN",
  "key11": "2BFffah2c9dW3DgmZyLhdkgQZ6AxtXJczuqB7HoNpT1xKKNMM4fVtyEtVZtHePSemtFuLoSNYsoZL6tgG6ff1VKV",
  "key12": "FWXMH5RDK2Ycq5pWGJyY3dfrJxsjSX2gqq3oZtge5L81XQaEjgNjnU9B6i1jtyTzzhBw7eYPRGYHGmcg572DU5n",
  "key13": "2C3sUdZ3897a3Kuht7pZ8akezefEvQAwYeFR9yE25FCfNCRmv7WZGdCPyyc437gJ4SG9JtzzeqNuboaMaWMLouSz",
  "key14": "2rZjByFvKkSzQAxAWycuoVs8oDZp4PhL2SPDTq4DgjTexQ9EoWPxZSQmTd7pfL1MvnSCtFHx4SRCZoWhGcxr72zK",
  "key15": "A3rmUJo7oLfHKvMKB3G7rHraC4FV9vNi7hf4RKwAQYEMv35FoqVs4SrfbFL1UeUCAy27qxknztaetMhs1p8m2Gt",
  "key16": "5HYDRHAtJ69qwhqAUUCeiGGTJn9gXommQEmiYc159myoCcLSp5w2pW62eGmngj6mBVqqKzUJWzqdV5j2gePkaKs1",
  "key17": "2opCjm8M4NaNWRWnWAqcPNgWigiHj96PcsvdoaGhm7BNtTfqfZuRGcqxv7Kn77aF11xiXosDGAcSCv1AqKiFLZHB",
  "key18": "55vUPs7AFwkJYLXBE2daRaCcd59r7B6BXaNPnEWQ2SaWKMxjzkbB3FR15MMa2mY5hdGFsiKowWj6CwrzRPj6xsVz",
  "key19": "KDczeYo4UY5dT8Fh5LzpzGrPzvrYaHuai1smBqfj1iUFwPhSyytMHwWksLdknJcLijFE82DiZZjwP2gmgNKojVM",
  "key20": "2KmoWHSdrFZLXYgJYVomRzfFRiVbooW18aLL6fMKBT2ao1Ed1ixN8PfuSZ9Beg8Q7WXUCke8y5F9jyE9yUcBGCsK",
  "key21": "5uxvZ9AdiUo8CyfKu2BuAYAkcVscRy7QfzXLgtkindEnMc9qCQoFyZyx73PzHSpGx5wfqQ6hpCfKsQwPKweLxRYT",
  "key22": "63JjgqpQoQZ8iMXdwy5dMrKw8PyXFhVdb9MKAHUZ1uDcA4T8cGSsZbG717ryApbubhfs415nCw7M1K95tncA1QfW",
  "key23": "4WDzJNt4WRsnfouk7cUm4aJ1ZXa8B42EFYJoLtokqMAfyHVocUUH1cB6yZinekiFGUtgJ9NR9eScVsX8Lht7KL77",
  "key24": "4jzAeo4rbzUHUuPHp6M46DwgSk1TNQtX6yqE1Ker5ChG8bVKJFHTyHaqqRJyC54LsYK9efUdrFxC3jYhxJZVTUVi",
  "key25": "fHwYHuBuUkVEuZgZD6CbojuQUn45gPotgSqAjwXXyjhX8GuDMZgdSKsV4nZeajpXZ45uTrFVosDtauv7wXbjgk4",
  "key26": "8zZd16UuNmuFQa5FwQsaW9CVx595hXXBS6EkBaVCNsQXWSn3FU7H3MN6FLBbVYMNNv8Se2JisZdj6LZ84MaUF3c",
  "key27": "Uuh5xCBc4XSLCyhFYbQ7VQoW3zrcSffvzRhzUwZZ8LrFCyMQMCmCSUz8v2eWS1fucXGFfKVdRrnQPiPECJz8x9C",
  "key28": "61tMaEHNHuTBRDuqnYPAe8EFRLGw7j2ZzjvBf9Hu36zHkHKYby5d54eFaB7LeoA35NE62C5Y1dGhQTyvtU1G3vhs",
  "key29": "QSf4wj14YFgsrgZhinqeGZUgwnLWCwc1hAXbonDRDhY8YQc7ERXVs7tBnKc6WRUNpXJKToXGiKKKnpifsX7Bq3o",
  "key30": "5eh7MavmG28tdJNNzEm7cB6hSzKZgr8VxihUa1xuq5C2mufxttuRPBN9LcK5CG5oU64DSyPxapYDvgYLyTqnbCED",
  "key31": "5TZQydHQwmH4hSdFPM5PwoSsCzFkvRY4NxkrFbup26cEcgqXrAgHkzuoNLEpRHdt7CNJVZ6yCvVCFp8qwkH215u3",
  "key32": "5ixJctZNfXra9aEJVLY9Mi1fVN9AubFmZP3RN3BmayNrKy7zyc1C8WDvK57KugJsPS8BUcATBM9DRrf8EMiwfRgA",
  "key33": "4ZEWPnB7ToD3Te5njTnuu8pz4PSeEYuY5m3dmzXcfbvsUfvy5Gxb5N58dxzuTVKMEk1PUv3i4mtFmjTRTpuad9ng"
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
