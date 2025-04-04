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
    "3dUL91aDZGHEt7ooQKkBJxGWCMFj8nEjYt3aiDZLmA6oFkWVUoU3J9Z9EnGdVWJzuvdDiUPWj7K3ng5x5mXrThzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VnirbT5jqECKwUMkRJHfRLYLmFN6MtTPTXfFhQThq48TP6p9cUTYc6VuQxMwP1pQjhPTQDvW98rt8UHbsm9PX2z",
  "key1": "3uuVmyYHirq9NaUdy6R65PfYHMpPRcxcy6yFi9zNCr9KBeWLj4kfiMLfPyxukeELZBEitiEUK9rhSK8E71j34HNJ",
  "key2": "5RyrHVyaTqqcz32x1vakHLspKKpdeL2pEpG6tauTnrJ8gS2AqKjPcmjw7281uypZy7eq1RCvVXZ7XaRa6bgzLgDM",
  "key3": "4PNn6ALrHLDjHjVpiU8usdn1KYw3XKRoNvXrkmcneAvVKML1SyAfzs4kTgjjm2q5B5U7iAyuua3UwzU6DmVYjbS1",
  "key4": "4HCmQnJRJxh4QY2srVxyocs7rrK3uaKemWXEMkxYdPFgP1BtkJMNXMkmK5NpBx7JqW39Bmw4hrZcpmhK9MesgT1N",
  "key5": "33Zs7WrXpFJmSNNSJyToHXTtiADFEEm1K28r6KKAb8uZLDEMGA9myzCuz1QVC3fjELLkccjXAddvZmovSe9RhmXz",
  "key6": "4bbxJ2Rgd9WSpdGsDg5jakh3xHb9AGcdHrdSdzCwMhEG2pDek2b2seyg2YWyyaJsJMbLvqxCzRMHJdLTCr55PtGj",
  "key7": "m62DraNj2KwNmsysFX1n7Dc8JWoCbjECHhka9wtWaCGDXBpWNY7m79uqDdWJ3qgzeTdj2nkB645d1ctMWfk3vW9",
  "key8": "4x6w1JfP7R5xXu5i5qvm4ohpLviDLr6FTYyn3BLwC69W4gnvdJwsqias4KtKopEvFwfeVZHmh6G4qLehWDqS3u7h",
  "key9": "47FDdQmmgaDjh7cFwj6Fcm7R1okBoRuJjtFBELtQEfW4dfZnh8XWkQcqgp7aEwq5NS4pDvXfwpCjD42LicwMSDPu",
  "key10": "4jsYVzJDaJgxfNgk2osPPNbryGZurK7NRm19tSjSxyCLHuMa3345fYokx2fqSyPWu5n1EKh4pfiHUQ1iLRkXY68N",
  "key11": "NcXfUWjmeJX7mxsSKAaK36MxuXpnhziwDeNhDTM3Vnicau1hhFkje2WbdzzvwJpXjxBE99EH9oxJdDLkBqaM4vT",
  "key12": "Xyh1kEVMqFK7WXGPPFD9zbJgavbHVFoekonTdGUysyjQ6CijYE3wpXzCzJd1L83FDMNR7f9CCZC1KDh2tiU3RHK",
  "key13": "2o3zYn7UrHdw6FfFbVRrGGiW3Ebk4uBsR14EMRPZ6NWCBUgXVmbME9tjX3PgNfxsBQ7J4ytf64uchey3PZieyKZC",
  "key14": "5VpKbWjpw3fGU7gyPaCXm4iHHFYR1YxDoffUE3YKUK75qA1enRPHaKpTJtnpYwKST9LF9mmV43dMdeJXUuv6VGpk",
  "key15": "2jCSqKzBWv8u44vJEtTfZUQx2jee1nxTgnQ16gHCeAxi2gZcfZUri3tFLcg7a5EZRr8kAnESsUeHT3NBZMuCAqoR",
  "key16": "KiTZbKV8d8ZKu7bms8q8QcfdtRnv5rAZWEF6MqYh3oCdticmkEV8foeTaoSUwRA88pQ4mNpzNZ1RhJ7FCV5w1J9",
  "key17": "4bTR8M1mT1z4seFvGwUtR1P648AsKxdkDromiudPS8juVdPLqeohdPuNgiKggii16wkBqb7pHkkqRkUJpG61k9eX",
  "key18": "649UkR7Dy7oPYacP1tvbMZoGQCFrHpUt8et2xEjKHfDyifcFSs6pLQY1nCz17Jf48m6ZAzgHSvsYgrP2tDbUaDBE",
  "key19": "C9FxrwtXpJmgbkF3wgKYK3NpW36bPS2E5Dn6eZ1C1RMJvxKGFgRTEVkhvB6ntbWnorPp1S9mBSDuuJ1K16MVwYF",
  "key20": "57KtTmVMz7zurELn7XigNZUoP9Y8uMJYP8aRzJrMrK4TcQKepPiN66qmzN5DyUj7q1mpSKDdCPKBCPPwJAGcNk49",
  "key21": "3Fre6qT6xuVHT9p2kngANa77CXM3AMFRMh2fPq46EyuZv6AXTN8NUeMtXRrN8PdhSZzoGBcmNP1p3NsZGSMF7mxW",
  "key22": "2cfefkY1M9Pbp7ZP8ZPZu2jDdQmwqd6W9tvnkGjgpZ6b1HANHUUbQYfe6P7eu9PrWFDL8Hr46AQ68XbGBWvFhWsR",
  "key23": "3mUaENQy2qspqS3vTYnqVMe3pTmXn9FeDnUzrxb62g4RFKZ6chHqxp9qRnGF55BWiQfv61o61tLVqayQ5uUrrYMA",
  "key24": "ZM5QxyZvsqcSoLtYkVR6PBLiAimtdSpxnXNe2o8286LAoxwHDEfm6gSZT8YQi5vW3wUjnpn9gmRE28qz5e47Ayu",
  "key25": "NoH3ujdVCBtfkrytM99NsDLiJU1Jx5cyMr1coCiBAZGTyNfd4oqWNJzzMkssSWA6bL5wYvZ1xMxAHSEWWgG5Jd4",
  "key26": "37b14ihbPeUBS4MbkJzsXEYjW6ThZXpDTAVU3ZpQg8uqhKWvEgwVeF3grrhrbi91a9FSrs642k1riWgzhy8XNhjj",
  "key27": "3dpiS6LJi5wCSNPso36JdufAFFmR8Yqg5EjCTPqM4QE3q14DDprtBN3DhCFQMCPXCNMoomoHUiNm196HgpQJYxkK",
  "key28": "4H7PgTcuXtLSip8Ar5EvJTx3ijYD7QmewnAWfqHmzxQsFsZV2826EfpEua7x7HwGHfx76bEZ9YcjnSn5ZUncg1MW",
  "key29": "3uVfVqmRq8xjKjQdzhEoRBthVXLVCiu7H9Ae4aTyEAV2R3vnRjowWzgBguR2y81iXJjeEHFaQrimMLRt2MDkGoLD",
  "key30": "5hjjnZML2fQdikLST2mjZH8wpP8keRawBNqtZ3LdbN8xK5ERPAfXcN6yDKzQgSrzKkdVG1gJeodchBTjM4QUvdYz",
  "key31": "4piHVABjrXBANiKDCmwNhfq4UfcxZpkMjq3mVKRXWoKntvvss2CYehxnZayuJFuwCHLj9bhwWwSKLpzKVgGLFu5d",
  "key32": "fnasXLyFe56NEoW6VzEoJ7NsgRjomGKxo1DU1UL6jAm7ucWBPnQ9EPAZkYLVXxkXS3a5cZRa3HJWfQbo3oGk35N",
  "key33": "5XgWk8jRR6Xag811tugZAJqVzF2gxCGg2qpwPcF6TfbzWNiSCQShViWN3AUNqENuKSYdycL4hAWbnvxjouYksAQD",
  "key34": "kXGwr2FxkBBPhxY2HaVBp4cXETvZSrbhGPXeyzVXKwFcftcXr1pecAWL7TT8fBk3So1CgWtg9gTCgVn6UgWcM8h",
  "key35": "5JPA9ZY8guRuf9KRn5uC6BangZuHiUvA5yM8dTkdBT1ZcvzeKth9kGXMqNPz2iCfWVXVtbKABwBhZWnEuopaE1f4",
  "key36": "GGaeM5DdgC2qmQo7a6sbntxeYSbZJdKmVsknDZ8eFucpqjUcZZhRGtGvT5v3xuYS3D4MFXdaia3H1FRRuYHFATK",
  "key37": "ELHVHAXwK4yRiYxMHoedTF44JFpwNbxJEt66guh5t2Nkn1Kxw5hLJapBb345SftBguvNVjWMLz9b9zSgHsQQ7XR",
  "key38": "43BsuXyTPvbSbsYpmznaa8Fxx2i6HvT71NdRB1ibHqxC133D5VgBehG3aNKKvVTbhkBWo6z7JfegjF5nNkmGtKTc",
  "key39": "5g9L5dVpptBfQw9cnzuumRSvTkaCjaponBr4JjEfLUGWJNVSfYhgKFpYReUijjDGWa5RymM3uS5Sf8WCJB779kta",
  "key40": "4zdxFHyyVy8cHHjuK75G3ASWW1AJE5b2a4qrkdDRBqay7XQ27GUt2oHrcc1j1ouui1z8JTfWWkoTLa4iB9x2RV6k",
  "key41": "4ivVvxRXKeKgTjBJkcatX9PsQ5UeatNrhwQAs2BahzbY9Jb76AD27C1xAVffsZBEoGWMNrd9Mn3CpyHNw9QaACLN"
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
