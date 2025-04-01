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
    "2cWsyNQiNFSWHYnbLWnsFGM3wsqpx26aDWr2JficyAePJkJo87nhuKaJhyNnzYWx6USmrrSNHp2HBYy3TNJvb2jD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zrTg2PHVE5dXvkNGEhbAzU7TnsedosN8WPfhMcGLvQVyZazju5UointBchUExzN793bCxs3Yvctnod8Wk9VnRnW",
  "key1": "2n7Y7qWqyZVi9DGfcKuNT8uLzzJTytqdTNtAjSRcjzyyVLpu19cgizrkHCvN2v4t4Gd17NLVhFHDAvS5Gh9UBxru",
  "key2": "4U9jQpe91cwfAk3Bt9k4bBRBrxAuaFFXF8mZYomvS9dtr6Ajqs1mRHzpSmvhb29bmopRAgRBVXtUzfHVSS3TitDn",
  "key3": "3M9FhG35xsNbh9s2K8nBAQwKiT2EPBs7YSarWErH1qd2P82hdgAyB6f3JEKzj9woVyKkc4T9tdH8rgzkh418Ya4N",
  "key4": "4ZpRVq2rjEKCWEJDMGwS5h1fnCNkYWj5wr9sfiQv4kzPdcaBCURgvyWFiJo7vAD8fQBGrTDRRHS1y12dEwqtekh1",
  "key5": "4881HyG5bcKa8WFAji3x7aum7s7ewt7dwQuHamvhDF3yzjauz975mG5cNjYU4naqV3aVENxso2rBkzPAbnuKZ8AT",
  "key6": "RVBk1kxQuaAnDD7LNuXCbCU3FGyuqRgwCYrXiHf2uxTF2GEPLbexBZcV7m3gdHHG4jdMUHCroYcRggjUiSdCsNh",
  "key7": "vVBBvgXbikC8ZkVjqoNX2fV53AqwSJQCz2GNoUqtUQ7FyKCupELmuBpBsQxtb6yV8MksUWyoVVs7KjX1BznZFv8",
  "key8": "55ULgb2tq7kiZjVpLKbXdbq9yLS4H4LgLvhVcaA9aRRYKoQE8cSHmcHHwZjuxEbHJ1a58LnHFPAvmgZsGvYhSmu9",
  "key9": "3yb3E3KDzZAJ2gE7cuVb7PV6NgHzenJYdCQgtx7UoBXJkGSRweVGNLkQwvFwSsX4VtLRXahQKQB9UpHZiuGJUaE",
  "key10": "2ypykgvuZxRjLoJJrEuptfDpv2TmGfgVCXKDLnmgVFuduPsfDpcPfuwEhvbwteVa9E6nMFRR58aLbZZjwmHy91ns",
  "key11": "gP28maiwsKnQbmXDExHyzY2K7wW6RSRgdVmHZEwtWYtCcJ7qZNApwNrm5RGJ1HZjJsQex4o2HRfqncbAgTtjo7t",
  "key12": "4pGaRPkZvsDtd44R4hVJWn69kiU15iZ8iHF18BT7mgXpCpuB3VQaMn6JarNxcPf85mQygobhq1zJodV4WRhYY4XE",
  "key13": "2sRm6eFUCrGaSvhm2H8MCJ86iVbXJL9g1u9EAvhq1WfjqKtsMr4RtGqBc5uJdQCp4QUnriaKq3Y6a5qG78DUZeL6",
  "key14": "56s2au2D4UtbVS5FkSFq9ADsEXkUWx4EZAQDtP2SMXWTjawgbDzS5FrTkmoWt9cmDmhqTuSuGLjBjcWxYZWyyijG",
  "key15": "2vA3kHGgsrDrTvkuGNStvjhV7SwFfEtynuFQcq9gRWeKAQ2Rc2WYWzeTQyM6QxnSzyMyyV1sQHTtDygkb41SSBuU",
  "key16": "3wD6HUif4HMUP5cJ1zh92y9xvvciDEkQkQa1a7qCxsNvkeHLqukMn8ozKEy7CU18RH7unKRV6uhobJohSHedCrQK",
  "key17": "2yUWbBMi86dsFSN2Cj2k3FocrLMDd8AFLe34g3JKoptoT9HUueqnwRwvR6bDurAjCfaB2WnMP7mEqsFVXJzf1eLv",
  "key18": "5obMWLL7KwN8vZ99hBoU4tS9oZPuqL6ZsmNdC92yw91Lti5zm62571PwfNtj4LHVPwVARTnHhBtksqXba7YkHNe7",
  "key19": "4Ev3TKnXAFVqNNJAR25Cevi1rBFVJBDmiqGdXVqGYUVMvns2j9KnMxnu3gJMDkWomVboGiiMieuk6HdNe9n7NPVy",
  "key20": "5mpiV1hJqWjSZvm6Z6EmNum1BxjHDMZ5fVtmqkTPTSwc5Nt38wcvHtj1gxQe8cCJJyj3PgaNVFFi4LqS1p2to167",
  "key21": "61YLnattb2WpwCa7fsLmkEJfh7MwunV6e3MXTkEeo1oyXNSLp6GNdL1z3iRqDpJxbTstB6b42fK439P58jwxEaaH",
  "key22": "4ivfGza9mXNE6ct3eGCATggKabkJGqJkFSH8FjS25NY7MGbHymWYRLqFwo4N8bAhjNeiKx2coTaNTHuyxHVCuPkF",
  "key23": "4U5EZzhV7uHS3ACoPLBUa9519RSXJC9eDv4hBFThCAJXdwWyhNxED7VUFMt1tGxiEXN32RdsKmQp4639tFsuxeps",
  "key24": "45zxQK5B4s9VEDrPfDsPVaTx8UHPNBXTuXj9prFBCfMc2nD7zkbKjUBkVJcEaeYNJ7mVgDonm5Lb3kFfQAojS9hU",
  "key25": "27iTXkWt1LVXGELpZkyPQcjqKWcsWrYGihRTZcfgcAZZuozYLHyV7poncPBF6WAvSJLhkp3RxWAxjedaKu4Cozap",
  "key26": "2vh3ABYHi4U361wpXMqoQgqtwshpQAFSDDJxECT6BrTNrPLRaWx5rJ5V2mq9Cd4eaJMz6aSh91b6f8bPvXNNX5ue",
  "key27": "2seSxiRhtQRVRa142qQFKPPRNYEJzXexGZFFFntFZ7bSYZdwiZbqJM8DUVzHmwJXo4NVMhikdxF2FEiRgqXuZBPE",
  "key28": "2VzUoDEytno8qUfq46MR8H4ghwpUs3SG48amRWjfcX5JkngUu1kpXZ2YsxUPX96ct8XoAFcJWVqCk2EbAcrDKxcW",
  "key29": "3aW5cpS3NvCm2hsZ99eBK6DSJAFL81xT5rtSYA5xLUXxmQRET2kGCNQUFs9AN83eqz7QNnuZ1MX83AcEhktCAFq6",
  "key30": "4dhWgMfZBuA9F8vpVvMKsmBKm8GSBMpBQqQ6csmQP5wBi6UJUkvzPqt1L1XypcA1PXLuwSfgphrFhL8D9xRAkLm1",
  "key31": "3wvHNqgDMgSQhcCATrd2hYkW3a6XoBjY85nZTXJFLUE89TMoQrXt3dWME2pFkTzynZtoYPPZUJ3TJhgWFU2WAe41",
  "key32": "4HfgPTm95VNwRt5VWdGp2zJNCREfatdHpmWJCeX6Av32suryHCSRUmCLmYhDg4qXaCtA9cZuQTLEJuMoiNoJdxRv",
  "key33": "5ggVCcLWX1vFsxhphTftL1bna1SckXZbcH7QaVuRTXLLMsuoQKPqGnxq1EwKEuaFhdevCxSyvMZKkDLLUN1cfEGF",
  "key34": "3wVGCFmi5YuqxFJdGCs7cEAoQB2MWZTikcFruTvs3o274SGHVDghY3SfXCnKeoimXQRgNim58Qu8L1EfXufq3TAi",
  "key35": "2mA7Dwszo7K1LvThSaPNkWgVoJ1RSLT8ewyEKgxq8aDH1ZN98tEAtj57s5yNwYbMyEDkJhfKbFEWFDLDznPgcqyV",
  "key36": "3BCqW6ybQLj8fhVqRE3DEQX3V6GNo5hggiArjquoUoNGouqxshNdSVyquNdMnz8aJHmFYM2Dt6X4MWEK9ESAE8bE",
  "key37": "46QWRrawP1KSkjkKXpB1r35v2Y9cZnuVPmHamAwEw2KKFDmuJebDpnE5m29gC459GR197vARYBMFsEhajAC2fQDp",
  "key38": "FcrADMi3HmjJmxo1KktMTGwr7rydu9pijqQcx6poUTmPMQYNT3CXV2Qr3ieAyAvWAagKbTRFABEZoFZ6jubJnd3",
  "key39": "3dCtpGK6iVJzb6KJJTGFLJRhzF5eNRWtRWpCeQevm1q52Pnm8xhoDj13KmboeXWSZGex4Ez467KodwQtHzMCD8rR",
  "key40": "2XYQWWB4uefi6KPigDi7hJ3A9fco4S8Pa6JmrMYmajWfeUhGRgimsdXkpRKXc6gYe24SntqC2QCRwZuG6THb7Z1d",
  "key41": "5UvHcokbNUPwhWjznmnpC7ubaHELSpk3EFceuAr2j5G8f1J8EXZz3fc81eSiEXpuFeyLAn1YccAhsp1ctxqo21fo"
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
