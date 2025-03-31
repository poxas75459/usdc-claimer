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
    "5Cv3Wm1zk1YqD9pf5qpR8nnSJKsNBFpkHmKSGQYfrLpH788zG5dBScyg4EW15kwRAmyLF3yKQWu69oLVfopBiNMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FmATvqBG5XbdD683vF2CdTVnhtiqSjhYgdnLFQftfizQmFAjv7gKzYMcCmgjahwM6b2NSSDhXWbT3uGEw1nr4ZD",
  "key1": "W73cWyawm2rupGMFH3fBYubB68iq1A4FhfXupXJ8BR9YxFcEmeAQPgJFaRP83C8X4b1VAFQY9Ru7XaKwZpA1jWw",
  "key2": "rX26LH2fN1yrrw7BoHWowFyspw7CaUSMLCH34oEL5pZzYe4RSNmJkWFPv3cXZFqaS8qj7yCJf9i76ETEFW16Ntk",
  "key3": "2p3TeeWxbcYM8J8jfgmPxVTGsWBovSrd39xmhhBwaWkAptYMycy4Gcs3SQfZwvNCqHRwCSMpTAs8U83MR9fsuH5j",
  "key4": "42SnR6mypRXwpjnMFobdtqeP2biqicmgz2znqU92WUuCJ6nVmRDoyA8cadFMYZHDTkmrvdeMTqBH3b1m9NaVVX4W",
  "key5": "3cbkujHoRpfgdxEz36eqNVYy4xwgkiE8pERcV2R324DbaHd4mzX1aoPMCNL1Z9kxM6Cd69EAXxfpjY1TRFP4tLXR",
  "key6": "5XghFbShUtv7pMrrnJEMaP9pnu9HgCjLb1DF6VY8txxTg2i2Ph3zn3RHvwg82tMZXfUbSmTYcwnYm7kUmtALWdEA",
  "key7": "3KuMeTgrxqZq1jMWCeSCDrCaZbBF122ve652Z29knTTpmCB9aakjyUoW95gSP2eGgVKG9LStfCFN5GA8wsUQDcV8",
  "key8": "4qTbLb1Gdk2JFmJpXWkXNzLUfiTiZ4cENWbc49HXK9mau712eWbUDDLXAED3Y1qTwdZEs1Tc2LN9YwpfKN2giUM3",
  "key9": "aZ5Ca8CNhqnSGioAPAeL2DsXnsZujsXwV3z8UyMqYU8DYEZncwgo2dmxeatF2ZXHcuMpC4KA9qS4FwTSrw8hckC",
  "key10": "5zznkE1uomwP5GCqrEPuk8TQRzeE6zAfd8JZsGcXoWexRpiggYykiXETirUc9sEigMdSpKSYCPf1PdkTDjEZsN6q",
  "key11": "4mANbHc31ZFSZosGwB2T4qaFzBff7BC6veAhhb1vzCUPCeEJj24X3PaFifd7vgdxEMsKq8onmm8jV3iEHFzLnAb7",
  "key12": "59LjW3bFmPjZJrFmR7oCPArN1gjyRqm5wDww6mr5zMeU7gs1G5SwFBAsbn6Z9GNcCADMoKdStdExMJEMXd12sxfD",
  "key13": "2hVHPuAafFoR9wtCscCFKZ1duZiSeGddv2yQsRFz2ND9HVtWvUsqXNFiECHdc7QvLv35PMjn1R7TR2hVLQp2HEG",
  "key14": "47bzenWvB18TCzpe4qc6LNWDpgymTNM1nbVXPTp5oaFS4pLaaBwNPcQES8kDw3q4ErvZuG2C3Zo3RKM3EuU1wFBj",
  "key15": "3ydykCpLpbrhd8TSzQgK9Xk5HEhfYfE2vqdLV2669sa8S849yyWCpn3zQ2L9pBLnJ8fy2QorpMy1zPPcbXZmpyxd",
  "key16": "4aTds7HMGQPQ7xhwfiixtauKGiHKdWuTZD8M293Mzihoh2gSye4f1iSKVCv2LVcFa4Z8i78nfarNANfaBoTq5gKF",
  "key17": "GWaguZJhqjA71HVWvsvtdnNZp87vrczxqMruQJqwEdfRuZT6frBVQspMHyT34mu8YKct6szSD8Ag7dPofSdHzRg",
  "key18": "yAVfLtG6Hmh3fq55zGKYcrqzvDhjUn9mYwgpk4HLaP1JQgQUgYj5ybweMbgLDZGP3Z14WSAf9ViyggtQJLNTkTD",
  "key19": "3JBh3dzWN5Je1tQXXjyFAzvhmmDeuSSgY4ntyx5uarp4fgcyRo8cMYGFCpy4pNuSgjFPpn7QYu6gAJLMtMoxTEb7",
  "key20": "216L9eg8QwgRZPypLDFMJmYtjbfbDAW1HTM79T2APVxUB56hYKjbgDtKi66rMVYjrTRsgHg9V4o8v9LUHWn7Maru",
  "key21": "3Nbvgm2vHj2gr4Eon9cL5mdTmpSzj9R4TfdbNoKXfTi3SjPNipHJmxdqG7D4zJ4hyXQFQuar8aHGbkcWTsiN4jQa",
  "key22": "5fW7rHZgZrpWyRQeHnWGVQ2oW5yto6gWx6ef4QRVC4EW8aZ8Aj6Q6TmRdd5t6xkfx9RKven531i13Jchd9RGAV1x",
  "key23": "3Wc9CzNS1gCxNYn6qRucVdjoR9a9e4HQCJaNkqDmgh743XFuSufhqr7s4p8UU2PcPYXy7yzmD6yz7iFLrGKDxqfR",
  "key24": "5bcFFxMgKhrJKiVALphPKkcnHqQ4jfuuAeMyKTmgUb6ZZ8MYSgxh41WzCVgMJShCgJnmkqybLKqfxVWJt78EdR9z",
  "key25": "3yx4c58VRB4o5hcqiwSNHwVxgcCNe9kCrzzcyYuEbXgr85peeHBagDbebSmn8pmaTL4TveDExPXpRjncmiBqdwRS",
  "key26": "2pQVW7Np2AtF29g4pxeoHUpwnsSuUSS8KQhcJ298NG9GNF3RVQAKE4r3b4sGbhEZpADsrVbHKtiNfWeVpuGxN8L3",
  "key27": "5CpixV1i2PyxntcU5yL7F4bYdAEC9XJhGEeeH1DQH3ndA2gvRCSbdbg6coC5USsuvjeip6LdA7sa2P6i8v443gCh",
  "key28": "5J68XW1AbfqkjzrEb29rWnbkVrGtfN9bQf5odXXjvC4KSCSuGdnS4QWT8Gr9eW5gn1JqmyMcNH3P7oULU2PKVr5L",
  "key29": "JwGtzXES38Ww7D7cphQ5FDk2P9wUXusB6Rxj1Q6HQ45gdgDnpNSiHizvbFZtbTZ9AZk1T8rF7gWfdySt2fvmy8N",
  "key30": "2JYCTgwPneAfDrxsDbqB3P9sWyV1N51kvwkLwv4Dbi4t7to4dmGaMqWJRo6xrKfuBNL2kadwyBTidDYu59viHmuP",
  "key31": "4JjxFu8tjv45hXN2Y8GsMPftUgyzwhnhSfXL6BiaSiUdJrab8QYAP6WXGipmUeGJ2vGfFGdqz4m6ir8PY4UmyjZP",
  "key32": "3YLV1oyJnuPuGfd2dLHKP4o7Yqig4EVdf1XhGueJZh5FXWv8thgW4Dd3YfhTqosb7DKkAifPgZk8MnYKKEzRdTW4",
  "key33": "4PnwQXeF7Lu4fG8bLuTZX1rYZfTh46KWG57ryv7r46ryQ5voRC67NGtBHY8Rwm3HxzUBRyiNpjK7JKrJufqU4HCF",
  "key34": "2ESnQGbVZxfKMzt5RJCseHRmaLV264Yqc7i7ZCqAKQHxbxMaKT1XAEJHkzTPPM7rg3iyHHGeSeTZgBiomYjtgV1S",
  "key35": "zTu43DaJdpT9wDhzb1nokBc6SDdjzNewViiWZLUbBcAjNdJXmZWre7R4TkJheH6DVVpW5uvnE6GrdEUenecWeSL",
  "key36": "3Wvh9xV2NVk2eFWZhRHJ3o5ca41aGhY7wrwcHPFySkQHAaCinUYLzRBUY62r89ch3qxV1rNsMVE3hD3j1gX1JgrS",
  "key37": "5eDnWBR5WKHAaSSy4XHXredVHqar7DeBfdm1qECUt97ixDD8dUKmUH1x6DPVUcfBdfXQs4YFa3Pe3s3EWKt94juA",
  "key38": "64ym7ZdMC84hmakQizMEP4N43svgDbDpNZj7NrErTqbDxPcpGjP9Vf5AX49Zyj6FuAdym5CzQF7kR74Ar9hqd84g",
  "key39": "4mw6shGLj3dMYUXZzYpWpwEvTkDLtkjt4L24uycjjXkhbkLAtXhH58RDLnMCAKipmHqqCLHumfvSAc5yXrQdzTXg",
  "key40": "5Prua8LXHRP9kd59fbKqY1uUecmCtE5VdyRs9XpDbkbu3Ap6w81autLmGGnsLruxx1VFMKdo82R9VcmA36fLRJti",
  "key41": "291L4ZjyUu1JtfsXJe4yjuaRTwXaVwMXZNe9oeUWoMgH9mdA9Q5BSBQXeYsCJ9UZ6gho6fKZ1ZffW257GpiruKV7",
  "key42": "4ZCpygqDPYUc78ymy8cayyt2gBeCGzjSPWfwx2raP4tE55Wizp8SvR9rH5sGfitSymcfmJUbgn68ibGPnHoAZAcB",
  "key43": "G4xe9RQwrGuqhu2htiXHDy46cHMR5kVtDg4RJbtbmHdYm2qvsmSFuuDtmc2peFjk5KSbw3H8ahjquZgTV7ZEtfA"
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
