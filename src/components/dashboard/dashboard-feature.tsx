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
    "2RfCp3drwtQgdvyKWAc9BA5iPz9VMJ4Xh8dy4BnnwSoaLntMod95uxAAEPQuVE4CuUtz4egYZyS9CGAQxaPuN6CA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ak7dEBf9RDcVnSxn7pBgnSiip4jPC6UPJymQgSQpSKExGEZtsPqG5saWW7RmUo9vUsRxZnCe5fACu14b6iVNPgG",
  "key1": "48FD6bhdGCfRUWwMcSw3bTY65QUb3M8qEs5EQ4K9WNzeymVyBJgYPHk2NEooDFrwQf7uCBBx2gawazALtzDc3bsU",
  "key2": "2GF3kwqCctJ1xPj7yWzUj3Vo27LhSmLcbRFs8s2BFMreqMr5Td5U1WzdwjmwstSM6ip1LWV9BZ92v7i7U13CSu4U",
  "key3": "3qAfG4mDmTPr3sii1sg2ncfZUrzoRgHUB15F149UWFCxvut3RxsMze3af6wV6uW5Fs4mnjJ1acFSdrwRhZigR3BK",
  "key4": "5TMHHSMvE7jKMB8C8mDRb4nD1MstoUk6dGi3G6RmCLkRvi8tUYToAzTQjZ21JtVQxp6aRY17tZziMAcxZvrvcKBG",
  "key5": "43BGU9FQSaUNWtQeqdCHCW7rgwihuNZPSy7KmKDzo7Si18RQtVtRgKoh8xWqLD7zRnFVdxtet3TW6AH3PdqGQHew",
  "key6": "3xW7JtjTjWWhJg4SN96Dd732w8eNSLSoXfqmbhraQVHSBB1kPRkEeCMZZEvRvH6zatNr271ngbjAqKZdULVZdKPn",
  "key7": "5tGKRJcNv7mZUA9rRLDbQv57u2swWs9DySqWNpgT8qAZmUuR9bvPKh4cLKXqYVCSPzMTDF5Ey5iBfPyF3Xgn93tK",
  "key8": "2sbLoKfjhN1opUF7PwSaKnLvbmZL6otJNgJdHyRjzXoACDMPmBjUVX6v6CW79kVZrEWDeGRjLQGkimuwExtM2HVP",
  "key9": "5Bm6J4h6Msgoqf3Js8JEn3tVynSrxY9vzNLW2eQL79VybVHjFJuJRKQYjqdd1XbGxSRk2yfj7AF1Q7YwHvnA159Z",
  "key10": "5CPa67LJdWbRZnA2HMzCWa9ExsACm6EgJETx8dZLr8dfzC86mVZ9zfmJB4ouh6S48MLt2qg5EFdRCtSMp568vbYV",
  "key11": "4B1DEKGEYZgBXFftAP12wxFRWgANsTekcEYLxvqkUBDXUtY6GTEfrci1jpkbomrfCSU5CWuwiwyN8N8Ch6636izc",
  "key12": "4pnR7CpMDqwRgS7m6U8LU8Wtri5PKu3N2jJFi6epdCcHArqRdQy1W3UXkrG73fXuv1Zbd3gy2dzdUHMfHk1eNDPf",
  "key13": "2Kx9v4KCoBJCUByqrwYcyGyEp9foVDDhFKbJKFFYA43Ru6ZJ4gbmDdvxicgBHCTDxqi4DPMQvdfR3s9mj2uQFWrh",
  "key14": "4D5ZwdsWgGC7wxSTErDpbpdvU53uiqubQuw4yxBTCaxnw7nHF2n8rkQE4QcWV4Byf5eqVEWwNiPxztWvung88t7v",
  "key15": "38bmtF4eReJMW5JCeBuHBzEw2rYJKkk3GYaPChne3DhuHLiwg85faYo4DP2mmkCQke1NPfRPopscYq4wHWoKLaS3",
  "key16": "54yj39XSNWxbTRY3xFJjxWbhjiqjxKjFvsbEM4t7R2zGo13DxMWeG88gRcVdabPpKESe4GTCqJ92gv39m4BjvEsw",
  "key17": "TebG8oFLN1hfny2LmMpgLwPjfhUyZCbMMtYJS8bTQvaFmeEzwqWufb8dbMw7im132JgRU8LHVLTY1peKbcmj3np",
  "key18": "mRAvYM8EcYSZQ5S46dr7AC3V6Qb9s3rQmwb5RPjgy3hFxLrdrbgFS6zpwZDW5ybBC9Wv3TcRN61a3PMR8zDat9Y",
  "key19": "5ZbjFQdFViNst4F8RZk8Va5dBa2DXP53c5RH2UTo7nA1aPKP3JcW58Hd5RXgriXFFsr1ec5cKk8v6FYs8HKe6Xkq",
  "key20": "464dZMTaPLzc4W5gWS9UjtkKwevMBkuEx6XzVXJbvWQJ3oNPGpwsgHYWu4yLCFZQ5D5r8rUjaDgmBkF9eBgmfvg6",
  "key21": "2NRZSecNc8ivwGJcFddWdyqrB3T6iDHaEqNSzwzg2bQF2SzchcH9EqjtZd8KbfMf6JtNPv9FmmfYJyPkknSxabxQ",
  "key22": "5wVf16Pxi422xmd7djnSxQ7LTe2sa3CSazKeYPxpFYw7aEepm1f9Zi46nynAJNxr7x1Bzw7EboJ521SyqiJBKVg9",
  "key23": "35ZGgtcMf2zuvhhaYCSrYx8FEseBRtXVSkWZsjRw21gNMuSgkfPLT5VUVfYCHait46UJbMG62Jn2V7tEhMTSfMK1",
  "key24": "vYgGX8WfgeSptHSW6FmEjx8ESLiS637Nc9cctBGsT9S2KUu3SJGZx3ajtLzJixh11c1dKAXgfgrp84qgFJeDy71",
  "key25": "4GHHEtYi96pAhmT3uq99LyzmPbXgFD1hY4kmzqQRRczJH9RYbYqULouKYd26DGfoRGHj3f8RHzwd8AGas3YFWzhV",
  "key26": "4Jc28YzhX9rEWunqq2ThS7aFL57FhUbeEWwCFAFDW7cFuiWU4UgM3T9dbovRjf6qoiMoP6WF6r9PWAPPMdBtA3AP",
  "key27": "3DuaUnsCU2Z7yHd5yhgjtDNtbZGSbeyCWEReH7UHb1a35A85PrFHqmhdUG3zHTi4h729WEbx1P8N2kP5d2QZLP3W",
  "key28": "3C6Pb1MWpeXohtKRGJgVUm5xjJwtaBmmgKizYrsbM2ntvqbVnvvcYP1YQxWBcPuE7EJEexiAGWaXC2pviztUCShD",
  "key29": "55AtLTBgn39LqCZEiRgX59jwNTYL6H9RcWbeeXHP25uDboVC5CREYoHYhzePXmBG56R6CToFqdsHpjCSd1X4KDVr",
  "key30": "2aa9tttA8XFDmsnkW1wyFd25Fn8ienVJhMSMVjJHbyFLFAED1vx9oUHjqXSqeP2k5ADP9saQJHspS7G5bTApYiDj",
  "key31": "6WChrUn21yHXoqbvPQQ9oRkDJeCsk1YtJ8LF9ER4PsJ94w6edGvy2ikLbDqrYsxUS5vje75nSZHPVqt7mB9wuP2",
  "key32": "24NbiMocqibmpEthD1aXViscF7R9vrz63HDizdHTdD2hrfCfkFbMcW6hHQepcp4tZmbN2615dNZq6Cy6Bd26QAYF",
  "key33": "2jWKKm4UHyJHj2CSNXcxpFHE9EYMyBKg2kigwbARBozyAz4yFuyR4hczoNm4kMpEEqrMRYLxcL3kTfq3g6zDoPa1",
  "key34": "3VbkV2RD4SjjMojHW3452tMc6es9SiP3TLyafpvR3MYL3WNXBjSiaiRZt5YRZrLZm6QA9MtDm5sMAbh99JCLaaPJ",
  "key35": "5ncuDkkzXHK2TWduyDtB21ehDSBi88eJCdtDawVDuD8DwnnazCxBiHZVw7oFWGzEEtK8iG9yF5oGJQoNePfij8Rh",
  "key36": "2sc88ujCX69vhnL98UZR4ot5PsnPpS9u5XyCANrz1REQMGpUXPbvFBj5uhTUGWdYAgQeBNrQxJ9TfiQPfC2ZWzCu",
  "key37": "4K69FU4PJrWbexN2ttRvS6Epcg1hkxreR19MdBJsoWGvqEF6m8rgpsy3rqFekwHCK1qmn7pwDP6P1mCbxMrJxyNT",
  "key38": "5eA1GocQY4FxsSzr8cX7TFUr1BuWwSJFN1k6NApW8HsBWwHVL56LPDDXSXLHfTuEz2TnKU4crTwaUBavfSwuwokA"
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
