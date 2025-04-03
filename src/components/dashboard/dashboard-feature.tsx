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
    "52fxdrSEqPDeweZafj9xGum9n3e1HxPng2UV2j42RnPfCQMVMW72cmhGffsqkt7CFueKt9hdsi4k7fRWJr8S3PG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a7zZhzbK4PKuMKJNLdro2o2yopCWSGcTATdaMyH4ZdZURmfd5qbirDiqizPoXpyAduinhZMKNQXxoLBHds1f2gn",
  "key1": "2BeCgNWjuBireRWywkgU3DktHqoydeNjqqieni6U79gPb7WUk2g7YuYr7LVaPqbnb2xKost3HBwBxH61GE43xfup",
  "key2": "42SdMhjPDr6VuLEJNqhaXiqKeqfqMafANxsTrZRL97ThkbbRzs5EWWTKvjdZ3v5KB5hZeTDcS6YoAtoNAhHFB8Y4",
  "key3": "5SGLK65pUNpQDHMnhG4LcUTuUAL26ULNrMKDRWtiZySYnVW6HgBKuVtA8kSAJSCQe1S6tQ3s7BYpiz57nDq22tpp",
  "key4": "33X9yGCyGRS6B2u7y2N6BJmBSPecwvTowKhWU1LEKW8VieoSX61kweMKSroqCYGBWCFVEgSAPGwaQEgGdbpzsXUT",
  "key5": "4A9UY7Lfg88J3F1SDEZAPuZY47TkvxRY1zxVmWcHadLVWQfDu9qhovRB3qyW6kA7tvFcqkiGHCGNFftSCZqFkuDZ",
  "key6": "4PipzZ4DrCHMfBeqcZSVLgGU6LXUMsoXVvYbbyzVjvvBka5H62npYzssptBdTe55cNa9Vh5A6SMUsDBjjSXDC4tZ",
  "key7": "amxJX1m2a7rjuaHdux7Yd4wBxx8P2AofXCqySgHo46pzpcKYBhNUNg8uh6fPakjMubZj356BmtesimwheWomfbo",
  "key8": "3tazVfFcTp5vcboWnbRcQRAYjZ2yGi47Gyx36EeFZZnTAKuQaFBNoGUsTPYR5F7MZ1KuT5dTSbyMo3NKhxQbLnnc",
  "key9": "JyfSMXgWu3upiXMHdMNwDHqmcrK2uSB6AQDktZ94Xy89uJDv8d2f7vBTtwcMVbrmmjUwPgCkoo9cD9yV26ssijb",
  "key10": "4TXe8vw6hRGGmTBdRUgeCmHwwdpdetJ4MFUCH8g52GmnHEHFNLzzBnzENtJ2JSkv859CUoehYVcjJTEepzw3eT1Y",
  "key11": "5fecGH9aGUmkE1tnM7KcvmFMw6rNc7DdXF6ms4PUx8by379WFeW3ijjz3uNg5p514knw71NYRCT6wHJ8hLJwo3VT",
  "key12": "3vQ29JE8UsCjGqu2zQXZxNnQwyTRG5m4DnVLe9BE61Jq6cQiqVr4mzZ9ufhqWjm4Uowh3PVyZoEQjsPeVpr9zoHE",
  "key13": "2m2myGZcPJKxemEM7mhpAvNN3k3gn3oWwtfHs25Ymu9pYeAc6nYdyriyrKwNGzmz56XyjpCxNZpLqHC3nFcHL6rE",
  "key14": "mJEPWchTsTZHbkXeiqxYG3vLu5ixkKeuwn6PJr88XuU8qZ92QDUnHvgLcgTbvUPSDtadketzKk414HS5VEJFtNd",
  "key15": "33FyYJ1RLpcc33r2eWDfyZ2PHNHQBpJwvB4QSJc54Mnum1YkAmViZXFd7Ptqu5pWaW8EbDjbAycT3oE75EBnqPBa",
  "key16": "HbNzUvxqGNu3yk5ZoYXxCoHHFvPE2CzxeYjVyWdZVzWSEwm2SFozQXZWxk7f1BuHqGhS7mhmzmk87s6GtAAprfP",
  "key17": "VtVio6vX8vUkXVdPADTTgE4f1vxSLzeqfd2jzcg9Nx9URZeoura3cYfuG4KXv6gGrX3oPDYwTVSvBecqTzeCrxL",
  "key18": "2h9pMMeowYtaLigMaBeBMYGgafmKzB1HRPAsd2fUsby2x1uBja2YybJ6j7irnVHbHtJ4ocAiDrXjdMVBirM1zBs",
  "key19": "5fymTmPAenZmGc96NFLvWKk9SpiwfQF3wAcr7pdwHMuGiRtGFbVMDRkBk4mGWEsm4SubkBMqHsbiwaLtBiVWcbkt",
  "key20": "2L4eFgnHNcEBc6SgSxeSuFaGg6XEd9NpqumPu4vuahaZj7fkv45knbxxn3V7GkmTdBL3BrFpgFrgCTPXYfhvGrLF",
  "key21": "599RagvP85ByDhXYV25WvShA1xuArKZjwpRos9N6rsLYibb8dPyYpRo7UZNkfZpn9C5n7guohp81K4YrBogvaLhG",
  "key22": "2JsKjY79Uoc1JvwHvVvbk49CUgvoSoEncXkeqvNS4etgF6txNy823JS3CKd2Cx7tjy7jSQU6Ez6kDggWJbCdpMVS",
  "key23": "54PETJWTi4yHaGW8K2FSGbhwr1MUtjpG2ih3xvh3F6EGHup4iRqc1v7iEWExsFAmXUZYD9jj6gnSUKrLZswEJEtC",
  "key24": "4XbHzxrjhXQVJN4enMmdbffbdppXPsqmwYipZFaxbf7wJ44jPayyCh4aHyh3wkqsPamQxPLtLdBTQEzmDsLc4Li3",
  "key25": "5ysp6yfp2bxYbeWgG795FyVdWu8sB5428ZR6pHyWGEd1zSGMd1CpmJ95wRQfo8TpkVrM1L9P9ECFBhVf43UTgFqs",
  "key26": "2qkrmGQkZP2oRs1aKCNQbptrsq9UwPHPFcvfjkTTZzirFudRc7DEUfFYR2GPbGrVTQhY6cNyjubS6XVtUCHAebAj",
  "key27": "2aM6wHyFv16cvwSwKTX32fh2Y6p15qoTnhGya2c72r6vz93oC7qmERYw9xFNjAiiZtGG6KcgKo3kdHkh41tUWUVc",
  "key28": "4GYmf4uwLfnKXENdqic9utKsC3edZVLK3YoG5pFXFM26Jinveu3qb2vJ6hiE3njNPJudTnXEjGKvSHSR8VXhRLRG",
  "key29": "5gdoskpPmJKtvBwP5Vi1qGo95BRFH3GiqCq2933UwYqoqoCUipB9jvAe8xrqc8wyC1VVXY6Y32dXEKcbkJGoJtRe",
  "key30": "4J9ecPxJn6ed5iyDpDFGWrvwrtqsrYUD6Tf1E4J8x3nZ1tgeoXN7McUMWDiVAx8Qg71sQEiC7AP6CmDnLUZ7XtcF"
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
