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
    "4muxmzCmboHX5nDQK2bnR97TCZ6yzspiMytqEDtsXymJFYEnNPRyArssWCXT4gEatmxAttDQzznspiUydgATbi7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ctisqPeGfgxUuNs6waXHkAq3UajjeP6uJCTK56XCNdvrfcMikLHfWWubhjyJaYrXCfwmz5ewiaK7U8FvkcrV7B4",
  "key1": "3GM8rAq3ZfagxSG2XW6hJw5ZxKFNBDAQqyjCiyuZT84PReQHmXECdwPJxRcjJDwe7UmzLTJJUg7aYTMBZztgKqC9",
  "key2": "5Zynbsa1RuvaTbfT1TQDYDVhp8YkBZECXUc3sivZifnbeEjAHeveh44ngqpXHr42bKxPFCWAjfxfygiCk23xUeoq",
  "key3": "5rGMR1n77jTPohMbhGYCex3HF6hiNfqmqwtPnF9Qtu18YdR35n1Nr9uYjd2WNE3WYcoq8FScxg6XCZMfg9Kgmwbg",
  "key4": "42UtUWjG9HYxMhNcgJEhLoFLTg9F8XVY2uxsKGaBwUnaJoE3iQMzKDoZYromsWPQvdkpVhB2oUCRazZb1YDt7Scy",
  "key5": "3yu5QWyino1uxkmh2b9q3VgPUv92eQEqKP6EeFxr8pGyDF56VGpeAk9J28TGfqJwjcSFtau84UBCjwvb2X9sA4wt",
  "key6": "47BerGmoUMLghH57trfTSUFdVr7TRe1rohzBZnrsvJp6TPSBaHb65BYmQnETA8hLcBE3tFiGRKxPcvXGiwxAdmq",
  "key7": "tYr4bkR5paahAXcrYH4ohxJx1FSDhbVKRYhX3b8EfahtfazW4bUyYRUYEh8WRToZegboCr88tt3tb2y1oqVdr2z",
  "key8": "3YAEqjGisNn1PwF1aAStFocFJpLhZS7fB6eGQnXswELWyXrr3SAHfcouNUJ3qBuHwthEYV4z5crRF1uNBcqWw85b",
  "key9": "4cq9jrmw2b5wEjbXgTdgfhW9G9iQJY3AUkkH2HcHX2wfUXPP369rESrsFFDPnQ1EdEm8zWdwpHgYq3PT6QALcom2",
  "key10": "4dj5ANSP9CigSARev4bSSpYXxtrm1zbm8dsAymivpEHzKEnN584pT7DnPqRwWLx6NctHhHFtMaSgwpEvY44hZaCm",
  "key11": "5tomdshYZbSgzsEeRiRQTgpiPTh95jfBK9YCK7fbRmeLRY6PiC1PgFy3nEKS5LFW6wRnquBJVEoefegaJ3hJAwDu",
  "key12": "4kFktwLhQ5dvWrdTdureF4r9nUmTgucQr8ECPyKx7y2jv5qTCnFw4ZWownZo3pvgZj1aEZ2HdmHQyirv7kAQt1bN",
  "key13": "2aUZFwEkS4NbSZpYFL7QYCDYaNzprAnZaBijyJj5MCdfsigEawH39fJGrQDucfsHM2uZbLgCnzBcZveDfZN6mJRn",
  "key14": "24P4DmuRqHDVGyGxqrjvz88z9S7tE54rJmKnQwTZ5FajsyW2ieHPDbuYW912qxH3nzLEFKwAcH1viDwq4ynd2MUt",
  "key15": "2agGhL5oW6j29YndTux489jtXdQqYUiEvGcK842W14vNxzLL2TSDNBb6KmNxbC4T2exA6gjbcGV73yF1HfCBFM4X",
  "key16": "3dc63jx69ew7TS2woiPxZbFeuGSyz7Uub9J42zyQWCgZudzWrf8NhEkMj1pmnSkSXUomBWg5e6NBNJJKzVWiHF2r",
  "key17": "m93SHCN8rymxVMUDS1PqYteuYfthwSvdFNGXkm9Jb9eu74rHNsDy1atVEtFEGJd35Hhz2VeB5mpRo666zKpTvzd",
  "key18": "56uFWKmL5Wuvb3ZN2Ec25SYDmyCxZKwzYmvHonm3b1GvjtyeQTppa2p4MTL2PeYMo9GjqZu5mJ2p9ThYZBMhx6d7",
  "key19": "4ABvN86ivAV6aDH8Pwt3Fc83npSrFTTGVod4kofQfuJN3bfv3ePV7BgH1vby96QSFqsUMvqwfeqtgRNXH46svhgu",
  "key20": "46YNhYM6a6Ae5KapSuLrvf4gAUdKuazEAVJErpH8HFvBgPSaj7iX4A4zjFBhtvJ2SfiyH5c4HbHbnCex8BWReAgY",
  "key21": "R6vX9VSC8XqGVX2oHUEeXWRbzzkLVodu1rHpGNYN6jxwyLoKRibsYuJpR3v3SXf8wawFBBqBmryht2PyoBxztLS",
  "key22": "9Crv3qTdjitJMqRbrMxwC3V23QpyNWmhdUgNvkfzWFbgCMYN8e4FQugKfdgyVxbnEp4wofKkN4KFTEXFARx8HZv",
  "key23": "5UZt8rXdR1h4D2fFsBuWWojWSJ48JK3vzRexj5avJGPzW4PAt3LrWFyUWPSq5uv6qpxMrrKrX2ftj3mCMZVRxMBL",
  "key24": "4TD46xwtPSKtnYBjzdKKE4vFjaaVJCHpK1QjgMSJ1UJ1CLb3ZMKyQk8RzrYkGREYpv645N7y5CqtMH3tPm2oD8bR",
  "key25": "2B8p4qBuPeL77aYtG4PGBAb38Sb9o3RxHNWdQ5Lfr1JmjaGu36v7Q6y4vNJANubbf5wmBm3K3ZRsjwBK3XwL9iwD",
  "key26": "3jDtgeFVUFEFkegwDKKLgLsDtdymBPxsXarquyMeeUKo1S6YLU4hw2MAJ19UqVjBMzaTW73L8gR89KDmuet8iAKJ"
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
