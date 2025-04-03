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
    "UG5VbMd517atcsBsnBtmqjMvzTqDAQnTj58paLgssmet9Dfwj1wcJkZisaJk6iDMdVHPHUvpUnGixYsCP46WUxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28VgGC3Dtt4Qo4jHg6Bf5xBBuwyDhbG2fkoUjCRhCMZetRWurhSbPkvuqz3aQQcZ8ebzdSmMNetV2doYPijy9bEx",
  "key1": "3nfPfssJYsdsoAM984X5h2669FjmtWVm55gbVhLxqBhoaLv3UNzXk34DPtzHGmVFBitTSG7dZcDzAstUUcrnYRt4",
  "key2": "3FUmLceWV21i9t1k6g65kSMBDgsrTHJT3CTYb3nRKSkTD4gEvhg23ovTzFmooq9i6HRR627sJN3FbHjv57gYh5XN",
  "key3": "zASQKyC97Fvrr8ADaMf4je15Zo9pmXBu5s3xZttfXkhmLD3gcp4ecVMQoHnkJYmKRhbPnv2ACg9YZi75yLvBnEv",
  "key4": "BgWo4paADSGS1SrX4wG1KMUgfMwzhrkKXhPSrvHX4z6G9gwuMSpyYeKD59ZQMoGPUN5A92jgW8L2BkGj5VjQzB8",
  "key5": "vJWR8aHgFunP7Qp3fVBaEpsAxewYsiXGVVWbnb4A4ZxXbFkGBv1aPKtZpGyGDsNzPgyX1NHpSPfdL22cxeqVBdL",
  "key6": "4VPGV9iUfDVjyXSAJq5hsFsGLbHdNEFGphZD9Y9wJcgGXoNCqwTJDzBn3iibHcenBixXJuTQtWCogr1KUdU9FGxt",
  "key7": "JVehxdSJ29niCzi3PZxtsUrvEJyoMfPVJFDDYVDNk1yGm5RMoj4X5KXxnArrnjtfiYVDee13JAL8i3jzDHz2Xx5",
  "key8": "4BN6LU5SJ6y9XdiheSCYc1VuZnWq7nw9wC3DuPXoKN8XooYttfgYxCMWs74H2eBJbHJ56fUpBYhB9oRLc2Wxx1aH",
  "key9": "37AL98T2DBtkyPDRL9rWd8bwY1t949xPyetWsszUheL6e98NzzVBpLWDkMB9gjeXfBPCQGnUmwRAJ1pU7AwHT3xJ",
  "key10": "2Dep2ndrXdfJq236Wif2FAWy1282e1eXYofRkoHFK1FujdGi7fRGWAUPcHYcfa9jkMLw2YnzPTfpE55zNcFhbFYs",
  "key11": "3Kn3p3Xs8KAC62isA8LePA8o1LDJ6dn17NM9E9D6YwepJYvRfAJh7sbVX476Te4bYA37PF71yMK2F8JCeMLzWFtZ",
  "key12": "3CnrJnqLVoua5zMmKveuRem1B8yzTZDQUJcZR5cCHRVdLJq7USrz48JqEakDMkmD1M93dfvRN21AC7SW2N5X4JMa",
  "key13": "3Mzhz1gdT3hEYFVrHPui8DhAYyXMxgC46QDZsctzEGyWWM1VoXRbWdnW17CRQJkPgqTgTYnn6hQdzD12ymTCBzkV",
  "key14": "58Sa4vrhZMbz24PRRrtdwysph94BMYrPLFJsCDjf5zE2F28sS2V2Jsaf4C32BwJDWJPZyH1JBqkxbfdNcU8mbMLL",
  "key15": "5JB3eQ3iJbETciv2RmSZT3mHgBMTrPmjr7nj5Q8rjg3LzLdK9uXY1fdvEm1PsS5JmK5NYyJcNWu9Q2AVu2JziqUR",
  "key16": "51vPg3nn93CcFYTzKjKTiyitLi3Ap6fgLjZTD1xsnAfxdjPsnfQ52o6cghgcdtAp734jjbMEiz8htCdHuXzMQ6eC",
  "key17": "3zA6NHEw8FcpY3s8CtUPt5jwf5zVZDqvAAwWGLxpE4wps7DhrrAJiiac69QYWXBrcgdMGwz6imf2e25ka2JGkksM",
  "key18": "4Spp9tG1A7yRL49dEp8imyNPijgAJ8aAtVx5ibchm4FugkZmomMNeq2b6YWauKUoxAjgpqpUiZwPNyuNyqr2B21o",
  "key19": "5EsmAuXcXLjx2b8mYTdzGLPYxtMu1m1hhzhyjUcyZLmXiTkosjg5oBoBY5KjG6j8oPjMeTZ1iTbTDJ5hpFaLMgwG",
  "key20": "3jBJBkqxdzvLKqs1J5LUqjxLnANHaL4SwnzozHe1nKXpBExE7aDkkNttoYaPsM5Gt9ehDwL8NWngDxeXHuuC649M",
  "key21": "4dsvysxyAui3k8cmfVRWH6XJ2gfe8EDqFyWvcHkrGYoTLkmWLcy2G48eF4GZxEeH2zVEmxGVv3TEPjH76ayGjMia",
  "key22": "Va9MNopRHA54m5uXvCEgPFqWapChLnvqurpLdHLHzSdaoTkCycSftE56mxnuQno5jWSVieKZ2achEZY1TrWGdA9",
  "key23": "3oBTrvtm46nyxQQTmMyAky8G2FnZteJ2ujA4MUWoM8gPGDVzkEAFhnxymmE5LxhbfgT5JRirrrqT1GKnLDuRKrX2",
  "key24": "C2qzj3Uin7qJXMAyY3iGb38tpWXLZyV3VfHwdww95WpxuUjYf3MYXa34YFU6HunrgkPLbFeBnJeEVgPcR2svehk",
  "key25": "5gHeyA7vBtN8VegYDj48FMzSWzKGsUsvXwJ8gpzNib2UiLn4DnTgGSvNWxsm3u8FZV8Qs8jc2FvseTph367Nh2Vu",
  "key26": "d5hrow3ek9dnH9ZQ9iN2NNucSeJZoCWcH2uDL5jrSeBp3zMGE5qkLA9tSPfAiBevUUByuroQuxaCdxhyKsvPr5o",
  "key27": "5kTcS9xEHoCq1X4WBRVoU9ZmArY937veSwSbd1NPzmh6B4jTV215zEQtmCaYH8pdcZwXGVnSvh1vuL9Hor8occCz"
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
