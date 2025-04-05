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
    "3RkywNYNayDNV4LW5q73Mvxk3rquin9Lak2Uu4jrAoSMz7bkDzVtS8kgATLToYc8BtYfeUSxruSRJcYusJCuphCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n9uXdRuXQNUtCi3w1fqfeC9RNF5FFnmJQZXBk5HwrhKm77MeTZnCkPK3nMyaZknJH7suELLtV7Pem8nNBuKLm1p",
  "key1": "4YMgFDKRDx6DmBrDZUd2msp9df22e2JPYv2FjiKxi4MNpQ5fFY54GFYNE2m9aqkGknfQCU8SZAeGJX6rDKuourAD",
  "key2": "4BfLhQndfVKSpprDzspv9Gd8CERsdaupxuVzc7CLqWVKE9hGKff1ameSj9r9x86qV8MCVz5vRSjmixRKZzR16P52",
  "key3": "3QcgCXZHb4ErvjLSzh72AbrZccLraVkDpEMpGge8K9wtGJ8RKkeaHo5kaV4TJqxdJjfNvWNP9AKKZLt2YeMTJHnM",
  "key4": "2BewH6Gt29JewhMicwrGT7bwjTKUmr9Ck8BCz2Wd2J8C2RmqQfPvAtzxAba6msUMDLXQDHPHYFyQpCdbWRzChuVW",
  "key5": "5xjSFDtdfNbCEbDmAHUmPV8TEqQX9x1iMSnKR5e39oVazZXBLgy9RFxB162gB7hNPTNkxzjfKJHRuPVfNok78JUy",
  "key6": "XFYB6he6EAStr2Pe5SsDGZhsZktXpxRJ2ZtyNgpBaFfMkuMtHp68sKje2gQ7AZnqLCkq714WbBz8tRaypGF3vo7",
  "key7": "hP4gYEbiu6vNKMgdpy75jNRu2kMphKtrvyLwBcB1ALBCkHexMJfn9LGKoSo6UBGjWm2pmEMdnvaBihwLZRE6Mrk",
  "key8": "i6q5At2UG3MMAanka8ZWCEKzLZfwNHmaJb5UocSdaT5nFStDfwhiWsAdqCDHHhkfWfPYTrU9s8AQGH8nWuDgRDv",
  "key9": "42aFVYkdH2hJRuocyQyNHxM98pmdUc3ejHD3FpDCFj4QcE1yJigpJ1EhsQvfRLSzzfRJdviJcpGBpDro2fsPicsY",
  "key10": "5YfU7xe3z9JuUqLhvw5yDL7vuGEjNZ9PabTYR1NbYzJrL7UXcxAXnU6gbgaeZjodw5stXv71AH61oN4nDsk5gVzV",
  "key11": "2cygBjum4VsUo4JpoipHYBw6FB7SuxZ88WhZ51tEnFxzdXT2ETAQg2GgPSsypgJQvR6pKWd11ASzfminsR3tMWDN",
  "key12": "4zzKQpiyejd2LXiiRZ54dfmLoGh54tmv6nmkEEV7tj744YHMKcaYqPhu2Aats5mbhWNuKECk6gpPYtwyBSMAuFFw",
  "key13": "4BbVi9xsvV2BFUfU8b732GWDRHo8L1jKBhg29nL5z3frEizRWWgPnsc4rBF3sxxEET2pLaxmcWqZRyP5RHq4FSQ2",
  "key14": "22WS41sTH5TQbziGx9UeiqMQf2pG4eV2UYijrRtTvWG4uSyuyNXea5rw632EpL9XTM1TshvmqLKS8uvK4zwuPcfj",
  "key15": "3b1bMFXEbUfVi4z1nvHxj6naBob2raBPqMEb5mZcJaPAe4t3M7XM9MzBiJLPNjNLGtcSE6LtyAe1y5GwibZ4MgpF",
  "key16": "SV47uh29acVGrKPHJzuv4wQ6cdq9p8SiwDbXA7ohPo8QuLR5iuTXypjWqZxWJsJJ3Cgm2fQdZeMvbkH7B3w3gEU",
  "key17": "28v4aTFn3uCMeP1fp36e4FhSJDXnYpFPx5sAK7pGSzR2DTtFWXdBZBMVAEiPveMnrd87S2L2MJa6ANbPeMa3yCYh",
  "key18": "3ihVSaZeJBEEnGFeg8LFBYNgmU8uqWvoqh4knKBPDRLmXWdu4EmkrMBBtDWt1UMaXGLcE91wh9yVWNSTW1pY7yq6",
  "key19": "4h9GFeZNFfJJpJgUJxtBEznK6osbxVPXGSMRTZEdbo3SYy2CGEbu1METYWW9nfHQNTHofLyZz9DaFWpFayqjYW1g",
  "key20": "5RMYu3CYv8DSNPMPYHaUf9uwoHcghChVvjXfEHPW4fYFWngKQNZjsvf7X7jeMfeXGu9jWE8sv4TJw6u4wtzK9NJE",
  "key21": "4WtoNHrb1Et9i6v51chhSsnEWbp2LZumLQKQpQWvYHtHyVzX7xFdom7PUCXSB4KAc8FYP3VhS93ZRrVznVm4a2h5",
  "key22": "5hgwaWU9eequqgDudKU7dqmQFiexiWDvdVQekbyL6C49EGsZJeA1PmojMLqupiJW8EnTK9aCnzxLbKVD2qQtmEMB",
  "key23": "31SYYjK5Ek2bpt1mMfUoRhM7UJ9CguF2TbdwNGDd9tjUPgLrep91aLc7gbhzN84o3ALf5AnBVMWdqu33JrtUrDi",
  "key24": "2Dui41dyjLEgSo4db6gBbgmKRYxfk4YzGnFjSAfsE6SLxY7K8BZz918yPvSPhuR9owW5R3bmSQzZ9K67G2TmyhJG",
  "key25": "25TAjLTzQPoPi9PSrnpq1j3ZEx1TMRHtXXMiy8JWPhddTjEsXifskcNczmwwpMWTK7akbVpBedTqWgUX67Cf5e7Y",
  "key26": "3T43GrT9CThWW66bj8SUGqayRGwrv47xhuPe8d4w9QCmNQqVvvNc31nvHZRxdYzU7c9qgQmWTRdMbhCEZ8KD66Vy",
  "key27": "5v4SpXHWm9qhNCKTMnSrJihdPEUDH37GzmBWB45mekWQLQKmUx72bJVEdkHTFwfQm2zxSfh6dy46ktXHPoVqk9FU",
  "key28": "TKtyDz1PAWb1NnFzSLKGtRhNNNGMsS96tMgjpgmVMKLZw4SgmDrpn28WVsRYhW24xdHVyLXAJDv6aSV8xu6hqjc",
  "key29": "Cxdb9ShL1eUJpoYWWrQo5fqqyaEJWxyC7stPKv1tvJxQsCXXufEuaNrM39NeCeMstZYHWzEwXhrZ59GaVaPzj3j",
  "key30": "4M82pUeoStWsZcD55LUdGhtZ2utemso6QBXSPAHwP4cuLY1FW5S5xoHgv9RwFroBYzFESZqwxopxXxPMCsV5qegJ",
  "key31": "3rtTRj9sdyP76GxC9iBVDv4qS1do1J6QXwVBCmLwCoN7E7yc4BJLFbjKGsUGD6jd3RrafpVL3ZcLbs8qcqeryFCk",
  "key32": "5mEHnhkHjG7nPB1S7beifbpJB7LZVkWrH1miGvpkV9tzeRQJbYUervD9CTXHfcB4S7NybVkXRVw9c2XgfFME6veY",
  "key33": "3NKLSSowF3sdsNiUR2eoZ779d2jb6pE6Tsun1yagdxr4DpKXR1Ni1t4HHsH95Jsm5KCe817c5UFg7xQMk8rm2LQ8",
  "key34": "4ELFYEkDR8sKCNB5ubSBf9HKt5G5AgJDBpBhk3wGRbBbtZUyE6VLcjk7CAxpxS9Un9K8HApNEkGkqsJEm6iFLMs9"
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
