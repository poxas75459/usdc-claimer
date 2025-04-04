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
    "FEEsRomCqsarJkE6MmcFq6mztJMYvKcL4P4BNLN8xwWhvL6eNP25xDiiunbMsFphaYcUjwTTbHykHfKEbDgCbx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XJcZoh8HMcYkA87Tqn5bXKgGVFSeG4n1QuyAorbnsHxHdVPjpzSNDbzXMK528J8EkqsPphuW8SdTHSugXbJ5meA",
  "key1": "5KLfwgAbcZp1cBnZfrwRcsJCMHAoii6HvJ6ZiW263fKebQ6LzmCzX7mtAm7nNrxHBc2KPwhHc2VHRAX1rXW8o1b8",
  "key2": "ZThG6gt64EGH5zzzjyNATNuU22mSNVmmUqN5vdWTMi3VNz5VPEwyC1UZdduMC1PRYfJk6yYNHFvejJU1tKru7g3",
  "key3": "3UEFmRb8KrEcQ3t3mW8Znm1BxssGNjVka7J1F6r33xGM3AsLd4ftue5KCdwoo2qzVppyuGcqZ651sCyF5g3Fnc3",
  "key4": "5ZV14Fg6eLqw7k8GKBtxFJDWXZPtTB8k48AVPQw3d8PzhdAod7aPLG7oc2MFFq79CpbjsR2Dxwh3bv8CxY3LBFGZ",
  "key5": "jGf3LAg2KBb1i61kmh1coSvvMQCD3BGPQ3yrSRikHiMNGx2iWJwUkLVKdpCQ8AQbJRGoxhe4xgtdLEpU2Rav4cn",
  "key6": "etGPKq6Aq8amEKJUHZJcgRL6oi7SeKfvW5nrX4P6VLk87SFhBQFNpfDy1bnbE68PhFZFnCZarr5RRbYdkLpexwb",
  "key7": "NtWquMPVBmgTA5Sua8MC1iMy4eBxgVFW8kdiRkm1ZtwShTCLk8WVzTrcm6so5YDTnZc5Ry9NyxHhLXQgXzHgGF3",
  "key8": "2TFJyqyndXQZH7rGPrzXtx9qB1r8ZnCnR7q75t2Ln3uTYZxU2s2g6ryhi3XE9ipyPRi2h2rth6cBMRZmkFtTT4YM",
  "key9": "3PrVpeDskiH6m5mS6axLtrwVB1zTh7xZaVLESnk2nXnapwafe8QZZ3H3CScSXKCytkugcrz7VnafZaNSfjPM2YVG",
  "key10": "UFdqqeUyjrpUVgpXrAJwHKDhoZcCSjB3qUvnSuvRDF6L1deXdJBcjRq62WSKbDLJgDVgXJyDP6PTN1w6W6S5iuR",
  "key11": "3nnHNnDYhCv5zKFiajEN7k19RXiqPPt9pRMbBSGu2bku1vveJGcJ52WyfW5CWQafR97BEUsJvKYfBse3JioEHE9z",
  "key12": "4sgjLMSzAzMgPHAegWob46DTspSbbogoRdN2nWCe6BneTDNUHJRkyV2nU9vSorGqXpwoJWJcNpYX8mpYubvQNG7B",
  "key13": "2hLpd3i5PT6qd9hsWBmdATxdT5grHoHKAVoTAn5i5iyfWys1YAP8mQ574P9bfkAuSew1vyVtPNyGxVojdLLehxd9",
  "key14": "27scG14XfTAKyursBMAvwiTyvavdBFT6q8odyNseAVtXTv8YMN2BMJp32oP8bwmEtQzLct52zcmzA3t9GishCxgQ",
  "key15": "3fwmKiAy3cuGH62pzATsTDQcEtMc34ELhsGMKaJnjN7zSXf73fuWE8cwq9AewoKaTih4jAonoe2jVskaKmSBNtSM",
  "key16": "4u3dVW5unGKRXFyMgjthBffRABf5DvinS8ishoXcAuuT76ArJ45QBxtgGJTSimqzcFMWmGXfmYZCCF5VfgrPRGwX",
  "key17": "4SAWboSAz77dLoC9SQXvD3FgJ6D2VuM8rpm1KtoimEpUumqBXyZmGpijmoq4tZ5YFQNPviNFdBmXUWvnojLsizaf",
  "key18": "2nbTqceioDpdNg31pPSiMhrty86cKCATRVoRVMBewfmF59NNSEzNtTiiXGdQJ8FxEJvqobzSStMvrHcjHg2fgrH2",
  "key19": "33BgXjs638a49bddhmUTtfUVtbMzn8eiK5SxhLtX1yLcsFf2xmTaxcjNSYeFwcACmjnw9JeKEXCZEKWdLqxd87do",
  "key20": "3sScHvefWBn8PjduE3GX7tSGeN6dDMSzRp12X3Wb5dRfjBBuwvwDYdbYo9Ft94KNFvf7U7iTBVQk6qmABBwubxhy",
  "key21": "pmwzUS2EdUcgLrEfYbPHCPRHrSjCcGJ5QSRyA7dPF7fYh3mxizAKKdfWBAiuiLQkq7emK7pogKyYiSCYqTEXse3",
  "key22": "4UptDiPgR5gvrpzKUNBcj48f2kuZdZUs3RJBjzN56SD8N5UxNZ8axcwMW8hZkpWf3TLCUm6mcMcfppvfDncAH3kJ",
  "key23": "44UZWVjyLz1JRcT7UqGe1w9pukXWZxYoDwUXfT3dYhygzryq2278UVSV2Z2kdF6mozvGmkfoH6pfrjcrMMtdfgMT",
  "key24": "63KndGWZJH918eyCT84JsVUcs5ycii7wTAbG4gjwE3HeKiRoend1tySjexR2iHXgvhYsuCNZ36L2CBPWLaGPb2WN",
  "key25": "4XTmM91ginh1HCt3MDmNuuBU5FwmSjHh1xQjg1y1ydYr7W84752czWNqVUBoT8432VtG1YGjoXhrfWrQfSbwv8mC",
  "key26": "4ZhXWu499MybaWt5APanRDpYdg1tm7YE48gFGjJvnr9V4LHgusdSQDxz9EMbALUsNfM9oWDa27yozPtYRaFi4N6r",
  "key27": "2qGKUJeceR5MSKntc6Go7s5Sr3EJ7bU9yKo4X22csJDgwxA6Ytth8MDf6HdAUUV8fpbob7g1M4oGpRZwT4ertmon",
  "key28": "5tZ2UAmX2QWVk9E58BoTMCkvjaA5R9e9ArVQqCgagsnXVrVUMgLv8jSj2RujEeBMN3gcqhUjEdiLNNJ8sXb5P6Fi"
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
