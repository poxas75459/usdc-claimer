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
    "2FMM8LfwXtrU5d2vdBT6M4mMx1xTSSxdrpzKfymcwoSP63G4ztmft1KuSQKcFjyGuEjpwwBnxum7VRT6KRbQkNxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q4RFqxfD4fiu2vLgnJupgqg2WFZmiSsPcwj5jgNf8ZYV9rkrzE9qCuCGrWCHpQcjgSuehJBwCyKrVc513RXqY5E",
  "key1": "2UZ4zqucviaFqXyzkbYY7Ztn737sNpWNiPsyUwnH7j99Rph7PH9f9vivGV1fLfaZmcZHCNDqfbzWfDHs79L65YRE",
  "key2": "57JbX2bwUTER4pvMZnAGVJAvMiHrJoxgfJ9KAs9H5BBWToy8iuH2P4R1VJrmmsTiYCuvaz2hLBPSRawpMMhgh6ND",
  "key3": "2fCLpq5AX6dQbQSQL1SNhYVBiKbZihCg4UcwKcapdjEDuR2tao7vr8RHYf8Zw6boGBRKeCTyM66tuyq49cz8JQGJ",
  "key4": "5J5pVoyqZyBTK2qBHKpLfgtU4wctdk4coDWE9F8gndW95m3eGtp5eNioYWN7zkoNfY1AarRtz9qoQLwK4egv8wNE",
  "key5": "3Dkh3Ee1sNsJJKwmts5Ty4MEd9a6K72QqxPWCYcCyZbPSqAjHDw122HisymN8447e5DdW2T8oJ19iZsHoT73wTsd",
  "key6": "63NjVwe6kEiMP5rHb28zGCXqzJJHjZKQMU14Xnrq4p1qDYff8et7WKAjqSCSTcRDJGzMhH8JteKsWUGbPtBZCR4t",
  "key7": "3M7nCQet4rjAHVcSvLy5nsrRdnefSXWREYgrCxAcWF5ftMVcGVQYncmYySfnCBHZbvbdwyVyCkfzwDkP1uY6EQDa",
  "key8": "5StXKkoe1K8MqAtVm5NAuKWRfeSDwPefHkqB8edpv33CS5GgxtoSsyznEFu9qGBxtkACLoSfVLVExNhdYmrdLxwJ",
  "key9": "5NtnDjUP89E8dXAqrDE22qpsX19qZgoXm1CsBYPsZ174GJZ6xjt1V8TGgp8Us4p1pzAHFoXmVoWaMDjDMargnKQY",
  "key10": "3F2AkLHJh4yg3N2mypQdWwwnV8nJK8gjg1XjyMjRmia7XFK4RTe318RfZLcG5sYrnTsNMmVV9XVDTY98mj7TbYwN",
  "key11": "38NXC9hWgZuHRovxoZzWhLYAMGGWHfPiZwZBzVHT7hn5Ubh3smbXEdDEn3k3nqi2Ef2SSFGCEWHe4jRfrg23PDLf",
  "key12": "4orYeMTzNFwVDssavvU82rvpeQWmZ4BaCHy1zdYUoeKnRw1dJk5FKVgEjEqtKhUk2fXaYqy4i9SfiHnUEffPJ2qm",
  "key13": "3GWLoJ6vYMYkKbCrhNqvrwrzajGgVkf9uoVPm82eVcCd5Gy5SU7nZeHEZGrWPDSaHU2AtR9qJzpH9JkWPvR5mtL5",
  "key14": "64yUzrBWNCRP9RqfmCXHj8pKRMEwSq6Zsa8cSVkhvfHFak31gHKP1J2meLgd5H1mFwsxSPyoVrZnPcCXzDUJZ3td",
  "key15": "4Uxw1ntkRoY9pw4PGcPtjJqsZd3voPdKCKzz8RUGgtZ6E6NWbejQCAsa5FVZceUDFdxMYHz1FKy8rJrjjBi1TsXc",
  "key16": "67F5pcnWMRVmx2bL3jxSiLXh66gzqaSYtkKzQfyZM3F8DQsufmN4mPZbkpv5oiqGoFpWTpQUmKMNdore6YB91SP1",
  "key17": "4rrd393ZFWpy4JJtvs7fDEiMDJfvdVLfECbhr8fNLU9VRfT6bxy1S7MdaveDQe7ov6KgbgscXRFn6KZqw2kgqFhU",
  "key18": "3hrbpiJF3kZ1xdk6y6cVe85wqqLSLNez6Zjv9APti9EBMTT9eAGR5cAzrRvXp9cZSYPbHkaCChUb38ZvnKY7g1fp",
  "key19": "4rjdSsn8AtHfHZ8LZ2PfZxejNWNepqZkXovqcGpDqAUU1NrUi6WEbbeaaECYdL1CqZZV3Q6raSzZ1pPKA17M6rRY",
  "key20": "Zt475bRtk45tBZb2XVuVFU92ju6R3c9PnP81XvUyEDJzRkYY22CmQPv6MXbPmqayLxyHf8adSmC3kHsegQLLDe7",
  "key21": "e1bdinbxubwXGESRYh8Efd6GWQ9QV9c6stAeJs2Mk1uyEizTVAKDSMmGnEaxZqhyMbeGHG1mb9wDjuTbrmQFAi6",
  "key22": "H2YMVYRN4ah6TPLuQiKbJnyhGCt7gWP56JUMyDT89x2xjiReHYMitjwvAdD1oBc3MSeRHy41c6CyyKTZ85FT3Gk",
  "key23": "AxypLLPTPWGedEbLoTVgR4ABNL8twTwRVSDQQpRQtfquuyVCWZzQiEGH8v5t3WuJTeztLvza4F8BRndtuXeEdPf",
  "key24": "3xz3E9Ar4Ja91goj2JfYcGWopDwwAQ2vGXyKDennzBhobGmWoxj5eXPdY9Vw7DYgdyNwseMu2uQt82YDoxowdyPR",
  "key25": "2H5Qq8R7DH5rFHJWPGvtmD6Eea2H43LcvSkzkLJ1JxUYMx4znfCmd3jLsJzErJgqH7cCL4M7df3PijCqKheVR94F",
  "key26": "naBmyoabePkTh2WNqy6kTaDNJHfhF55wcd65MLBmhmzyeeafALw8yhxDeRjvkHgufMHQqbkWAgfL2VNG4AzpdLA",
  "key27": "44zMDTPpcwsRqy3S9cqWcuZ8EeJtfzKqJibDY2V5b7F3KKZajz4hdXxnfCbWrBN4bcUoHQ4Zu3aH2vhX2q8S5xVj",
  "key28": "4bYSr73WAWDEL5J76TzB9ps1oEtwohsUJBuZEv8Viiec9Jf6m7pQ5erM9W7zQ1xnHY3nEXawAEQwLrt8snEm6N7J",
  "key29": "2o9a7e5T3LpKs19XApdC3A3PCaXvKrj2vAmCV2BfgQMYZ6eGcvZoiacYdGjv79YRYtc5jvKDo5cDPbsYNWx5j7XE",
  "key30": "4jKEqgwtC1KcnN75xT5ZXp2xt5iFhK94KaAXJ6PQFJWT1bHGNi9wGbKkURtfA7wwt4KBLpkM16nhertYPmVA1g1R",
  "key31": "4Zj35zWZbaA7abA33Kzt8WsnaT31kVMM96jfNYYjc5bhwshFuhEHLWqEcXRHVo282Co436jiLnp8hETn6rbrxrh9"
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
