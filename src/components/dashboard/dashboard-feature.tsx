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
    "4xTcqrtFsjoSwvNKUGwA4Yms6cCmHnKnwhcPnSxQxQ6PphQa9Qhyu1Gpg2LCV7VYGkBwdPiyyTrivZtLqAsCUGsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MuaPJEETHiiyc8UR3WKBn4HFPJd5kp9waMvEnjGPfJNV9ibAn2iB7b4PPYQRcdXvjsfSDjaMFxAbFCZmDyXBQzn",
  "key1": "3eiBHsZ4USRqkP3bnw4XGz52uCdZGcTDuBErWbQVuTiHAbDe6KpuuD9xFkQ4CdErSJHGMddQ5vC3wkubdiAVDy5",
  "key2": "3SWyTonm3L3uws6ne2gH1ddHwmwdipneD4FTW75Qvf5wSZaT5emjESgE8BqFjQQbFxVMjGL4HBuRBcTF9TpkCTMA",
  "key3": "2LDQHR1tSuTsJ6GPTLyx1442zQNfdKTEKv4cQxgg1vdk3Mu2nyDDjUPMsVFDJiMkcX9tZxmwf9TpmMYYDc5bnwcy",
  "key4": "21pDZq6Kich3tjNRxuZu2YMXLXJqPucPwMzrGcMYN4rKcLkov3b5MSLxmBiWCSiXc7b2yY1h7PWGZmB6YgfrYW5z",
  "key5": "2dsT16aAdW4ixBG2FycQQy2eJ8gqQuXfd9iRcC4vtkWDRD6g4KbTgq8qy2pHEGqsRD6bMki6KFexusu4nv79DhUa",
  "key6": "3jG3ewyuGdvsUKavuV59RPyJtEkCUhtqUGPCi6BjVNeDnhN6mxuSoikQ1HWXiCYgUh8TgjzZ7WAfsvnqhqWcRPsA",
  "key7": "4GssC6b8KXszECkTAcEUom7MSVEQMSivkY5D9Szzt6GK4h2wP6ELM6XVovHReDXYFSdhBkgExLs5KGD7FEcRQPPj",
  "key8": "2WnEzvfadWSbGuS1PVxoUBjAA8TbWYXBXpe7fupB2U8usvBs6u1PEmo8k9SmTBsPGNG4xW3QU3cveJHxivugw9Ui",
  "key9": "366wkWfsi4FaDwJRAXpJARo2ZvDzdC5GxDx1C7qeXMaEu9KLanVkXkRmCeBu653PKBbQjRQqAgsdsLYoikzQZ5aX",
  "key10": "3DbjMXHKZaj2MFMhjQtuNiFCPxUPWQeP5ksSjX9MGiV5JdKeY2t92hUgBqAUQ7oUWcfdeU3JbaonS3k9XB44NvTY",
  "key11": "si6BdAzUuim44A2jTs7o8vX3mtVUHcY7x1XehyXprhKTmDUuZs2Evsmqc45CRDr2Aerez4D2rF4bTHhC5xchLL9",
  "key12": "1PqFZZZugpyRegsYUTxTwwbEgLM1ySMirtxyJv4X3pHJV1t6ae5wjW5tEKz8Q6UpLakwH2ngtyp323DscaNN9Pg",
  "key13": "qRnAvM25mbxf5zihJZ6F8dsiNt8jVyLbyUQSXKxXwVoyrmFGPPqa217rAegm9nRpJJtr5E1Ey6bjTGzAgYsccjq",
  "key14": "4jBjb3P4syQrTk11rxgVWKuPruDmn6B9XSjh3LFscydeNHc1xkcAgNXXESSuTuVxWsu8Hugk1CZRjT8JinjFWZcH",
  "key15": "2ZMk6pvBZck2oRNR69CPKGFMfm4D9WEM94hdgbF4b3MNLG8XPNWqCZU6dXdgu3NscKqxnV9attHUBdWJfPDKLVZg",
  "key16": "4FGZesPhBmgP4mbYiqQASdCDAi6Ad3bKK3ipNMjhTCaFfBPkPD8KWuZbUqKBL4mzfidtBC7ou1jaVD2ccK31yh7z",
  "key17": "WBrsEAt2RDUjJJQzLAHt69auSq31m4JBpE9TNut42JzVLv8Vh7RqHChnwrKiLuZN7EYwh1XMsdHo6bSG5RJp7au",
  "key18": "5VjFNyetA2S3EgkYCFQ7eBaPTsaMKkhCHxeeL2wehyUUuSp5GCvbqf9M3PL1FoqWe2Jcdux9E3XtNkMvxW1cDDkU",
  "key19": "64UYabsfspng3bDJRCHSSHYN85yzMxRCQMGsr1CK49gBxgkyuJpfuU26drCPBt5rxNbHsR9FAC86AbHhAaKfUY7B",
  "key20": "4XLDuY3wJwqbuTv4ZnhYvvDX1hwmb1dwoKoogofWqzK3XuYsYuNi8SqdtrwVweB1oTnAFPPfwkLfPdfYLuWmFNAz",
  "key21": "NjTMCgeB4BSfP4rS3vPNnFh5CcDEpUaxG38MxjMHKKyiLk1iUhdwo9Ka7MGQ4FJUZNYP6khXpV7F47aA4TMLmxK",
  "key22": "5susnmo3pfi6eG9vuLKFqqQ7W8bhwiWiCopFjKx6NKW7jDXPXk9xAdkEDKTT2kk3AYkWLobrpCCNbNAmADc8szo9",
  "key23": "2sGcxq7vYZKeLUqT8nJa3bkT1dXTbhWoycxMbwQN9jwQhYPJUcKYgjRYU314DPkrBD9nAdiT9D38RS1PM5m3Du5u",
  "key24": "W494wtw7GQ7ocHhSUB8skhpfnmJ1hscqjRVfCPqFRW8g4fCto29ifjdGykEpkUwo934hcdh1WEhdViLGbXS6fC4",
  "key25": "4qioDo88T1pj32MAZs26pNgaYde7yXHxrGZcx1rWH5qmghH2Fi9hdPBv4XwkhJ8C8rUFvXnMEzPEi9i3Ua3XQeQE"
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
