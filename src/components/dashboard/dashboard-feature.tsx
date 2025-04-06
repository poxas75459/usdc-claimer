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
    "4wqyQcBxgBCRL5X5N26vnFRJe7dJyp8V5fBUdHVebBSSP5mS7bBH5tF97ULzEp28vQpZFHwRjVLzKydR1hrrhwfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nsxErvjKkBmnrmBuKzKbgwZ5ghuwLgqEqtYwmeG3Decvp2ywkJ4rgUteeJdsnaEaYBCUyFJ3VN3DvHUQCBWFscp",
  "key1": "2rkMnB1Gb2vY7QSQ1LNE8aKxA5G2gKfuUkCk5vtkwubUhNCn8e5GzistNzTmzMmmBxmEHcVrQgm4hnzK1LGGkiT",
  "key2": "5BUWRuTsHCEAHECNNyQChM4ioXXbFkc5Pw8WcVxC6Uh6H4GMUfmhCzUKTNw1onYSYp4SubtoDhZqWSnLZ9N7Tof8",
  "key3": "3CKUzuXG5CHrWc25NGYMp1r4fqRFQ8BEE6qmDMTnktwQTtXNwJgT7f8GkF6xvyEQqPB3xFdtEnqPcHrwJsmCaR5b",
  "key4": "3JTJ2MRr2iMyXmtSNSa56x2Ab8pHHPLyEyU9T5cZryNbXMvED6ySTEVBy8ehFw8J96qstcKwRA2vVJfc7Du7twcY",
  "key5": "2bU5cfRgXRE6ga4JqxmLxqFNrqa3WgEafb1gBFELH4fSrvZJgx4MvgeaqabcG3XoQ9PpoefseeBw3cGaxYG4umUg",
  "key6": "2XRFVXaa6MdeTQZbbrAT47H7Pe5NEkaRG2bj6xQoQMvrxnk7MzYTrXts2RvVyno3gQ3WGXxsPkCfyH25p869Rv3j",
  "key7": "4sWQTaf9gRpe5h6r26FJEmYdvcFEt5i95rdWU2ZaU14AAqYWM6LuEEbtHyTdgV7M9uYp1tTWRqqtqV3BBayP9r2J",
  "key8": "vwLpaWwChWPRbBKf5UjVS1bcs8nE7Ly1tLhEKkdp8gDBGE6Xozv22b9QUaPcxQ4tsvNThFedTesN4q3N7ha32cB",
  "key9": "3QJSw413cLbmw9EQMJvUW9VYG6TW9FvoAZQxiQid8YnZvH4xUHj55vxvFBfLosKrRGdpiDqdsUmQqEsbMdrC66Mh",
  "key10": "3aLhYCqH1Q6u2NAsLWK41U8enQ2agBcwez73qr3pwiZJHrgZ8Wj1xGx8VgE4FDvZJUscoDbHey7yfjDUP1v7QJq4",
  "key11": "3a3ELM6FR76AtcJZ57KPioPJ8sLB2ZaGz968aFam4Nq2PWqae2XsfzeJyqsxFt6oemkLhYs1i7zVo867REf7WTKu",
  "key12": "3ngsUbBvrpeVViPsANjg4QGKCVXSpbtygpQk7qx9PokdeWJ1aV4D75tjn8oBGA97VUrL4tHtXCQ8EubTb7AUXrxz",
  "key13": "2Y5uqy1D7GtXQgwv19GCsMLaQGpDbTyTqJRCXYMk3nHxnizxhbyx3rff6zNbqxiFWtK4QJWwkAG3JmkVFYGQt17L",
  "key14": "5AY3xHY8quUwasmUvo4bgrGmRbM65aEpWdRaoFSvXFWuVuweKsRPYjz1S7eS1meZw29Ls514ByyNefeP6SZhNSEC",
  "key15": "3rfm11b1R2JgxL47cvm2oQREejiQGFebn4bgcsDksc28cxHQJ6gtdTTY16dwLLHBkXQA5dHjtRwfKsTYL5pmChPF",
  "key16": "4Db2nJCVaF33CMWns6AFjuBurTWEGYkuJygb84kbK58RDtwsapwv16PMQmvMFkHU4Dt2RzXw7XdQhhyRpu7Mm7bF",
  "key17": "3t87d2VYubgrX5x3yPomntcZhYLHrC81VgQAesXzeYHD3fhY37gPZhr9HbBfPa9Zfrtnnb7hyXg1oUU1QScmLgSZ",
  "key18": "3sChSnZTAP5AnvSLg6yyDBCVWoQsx3en7A7yawd3151xCDXTAp3p1keMUqJg3R6i3SJNNwuQbtnQ17mag4wmXgG9",
  "key19": "5FqGNXgmj67mU6ZvjknANziNDy76kEuFip7B4HVeCnT7v2H24RSPunNeZBWYi7Jxz3QMR727Q1NReoVSxWzHDzLR",
  "key20": "5mussX8ES5MUXwAEByktG9wuzZTr8WS4eFMLzRX8kPnR2oCdfzVArKJGWz4LHAFfoF5hFJ6WsgaHf5get2HxVehD",
  "key21": "mrx8kqZ1A7tWf577eJE6jHhMoetLKnbcDgvVpTykpQT9kXyai8gXUygzJC7XAQ5bSXkRmD6CtbURj2E6JThS3uw",
  "key22": "5hP3LNjiGtcXbtqcp9N4XbvqL2thwdveU4rnKZxv5tDhbAPnTHxVGQ7yNpJCatmc3xcgSPWy6D15q31KdoVmwNcr",
  "key23": "4psD6dd6RGFjzNw6YF2kWnirqZV2SxE8mEr8ZBXKwe5evw2BBiR4yvXZNJsRZBD421sKFZZaWNsE8UrVkySSBnTo",
  "key24": "4BcFPZis9smMJZBimPrVTThn5yJY2GY7pdgedrmzVRkt3N5JftcLUvn3k6hZB3FLs7XAPSViviwFATBnj3ksx358",
  "key25": "4YTnJUuGH8p4XjNhB8cHzTywawK716gVifrjLJACt63V1Xm9X55uFKQ79XCBtAvLmX3bqoSVJptkgjMbz8bzVcQ1",
  "key26": "KgPHbVAg2brFaqJgQkCVYLxXejTvgnVDR4coccc5t27B2v3fbQDVhXyn6x4gnFwPp9hXMy9JgRaemTxPg13q8JD",
  "key27": "j2c2w3d9CZcF3zcGTGijue1iXsRyTa3uosxMdQ54qBJ38iJYwLAEimyZi5HAxfzr6Ax7FFPnBTowoCwNpNcgv1w",
  "key28": "2jwuThVXQD2omy8EDFzKJnAUHajk5aEMNb1WfCAi1kE1MNyH7VenEhz8cgGJHJVKN74sBszyKAMtrhoWYADPRysq",
  "key29": "465eVwWMaGCF5oyPQhaKej4UGv1F7umrzRptNwsiEaNhq2f7uEd93Ug6AaWCy3xXtyoyun1NZN1s9vQrSY5FwQNq",
  "key30": "4WHALD6A8nAwbYoeU1DBkXgAfypRar5UttbCg6nqXY2TioeE3LNnfYp1JsRhp9cPB1cDabEoPj9qvX1LDz2a8xwi"
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
