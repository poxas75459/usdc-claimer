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
    "29s6Sbyz5wUqNsm3LDARwy3XWXw9oW8i23ExGL6hiFNYZ2kGSCW4s9b8Q26gk4Y27Lah9zMGdHciLTGVqvWmTcqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A4R1RxBPEGcH7j1n4mi2oYGHH6981tNagqoQ8SuYia4Dm4xTdTzpXrXBzBcnZ6Gfx1YFLkgjKFVJm7KbQkQRhCa",
  "key1": "Tx5jarUoTq3PxVph87eG2kh1GFKiiDBzhKmtTVJLmsB7cJjQMBP9dAqkhudqRmkvgsjsmAyzARgHNq34uvsBbYn",
  "key2": "M3RmhHScKfiXt1kedtMEj99SAiB5Fq9b7rbjKfZ3G1DSQfghiR4LfKAuk4fSLmoUCAR5phv5YyrQUYsFt7s4q1j",
  "key3": "2BPnRNhyxX5PQW6WW9LoapZ29reATNphu4VZbttSAgoVhJ1USbDnDeJMDmjGbLvJMmgjjDjUeADY4ApNWAcgRCQh",
  "key4": "3uU423XVsmwNQc88H1D6tCWCyffcVmrorkaDukQfJyas3pYhNbGcsDtUb1wPDkYrYLHpSE43DmqorwRC3MrsLN9K",
  "key5": "39ba6T4aZkARh7PhP2hyT7nK76xYMmFpB3vep7fNfLnaFuHdhAw4FWv21XRTQBHM98v58SFoU13NCkkYdVMDoTe5",
  "key6": "2vnWJVoMjX9V4H4ESQ7UBexdv4RXcExrZZL5ZUhHDxGtJg3mHP9pw47GnHwvPs7Jr2P4hdP6U9od3VoLbA6uWtX3",
  "key7": "4XSVGWxJ6bEzfiTDgCnom36eqMkRacq9FAmnaUaCLJHPChAmixdSKqy9jxRYfABDvoUMS9hCxmj5faHfwKdBsjSP",
  "key8": "3PaW6WUfixN6AFxnX9nge8Tm5GPpzwAzwCkQ861SyFzRf8mGr8Wi8SpmMi7SQ8SCvqeYKfcyLjqm1XepXkNumcQj",
  "key9": "22dMYTrLHY5DDCKcoBAAr3PzromEtoHkMGrTKybaDSn5XNZBZrY3L2oa3qtQ4zPAySUnvhu82nZoV4AGTwRsoj1w",
  "key10": "5in74n4uAFTYweDtcuEzqTNYGDHsE5kYLPyJ8ffq72epHHhrUW9CYpKkVBCT7t86UBoM6DmbLXowdnfhELwnBsX1",
  "key11": "2pEgdL2J173pVAHga2yhxSswfX5EzuR4uJkidZBae8sYM8tpweHRu5GrJzMCnEqjE2YMWEtm4U3r3LD3oypvwLBQ",
  "key12": "W2oDWCjcj1Um681Ygq3RJ4dd2dfAw3S3N3gAhN4dc3NazkuhxiW4kBs4T9Es8r4rT7X6Xq2kL8KwX42kg9nZDhv",
  "key13": "2doFs7Ui7DRDuWcr5wdCMs5P6ak3oWX3ycuF5p5AHgozD53CU5ZXqnDAzoc9ppd39nL5RXnjFiR9PHEFPBHNyLyC",
  "key14": "4G9vB3tAigTGzdsFHmWQxLuQieLY7YB5KkVEVBKgvNuFi4NDJReRBgcbGAeebnNmevmbySJp8KRkXPUEwkSBLWuA",
  "key15": "5RfovGanNeFc4gQZkEi4zMxabtsDPHpkMrQhaKY7N7sxVLkSj9xa8NfMYKeT1XUg2aXrTzS7WsjtLgQm2rPxXZs",
  "key16": "4CjhWtbKNrrU6rMhF5Hvnt4n8feYdrzVvUDfRrfHv5yZsfQARpiYyhXdoL2jH1eNR3G1qv1Pi4xz5FjGXDDYBUYH",
  "key17": "5qAQNFFCxaJFHtyLMLidky7KGXDRoviKPLkLyegBZPgnVx5NYK593K7uJGjSGq4Lggp8Syc3zLfXA1xQTaUEt6Q",
  "key18": "YksN87eAEYFriRoTyufsTFQNVo1wNuHWm8jPnDnFRVQ6zLJ43vbWhMAKnVGTmQ9xwyW18T6L6hidkmeQMJFLXgD",
  "key19": "33xxxsBBevY6kKEANCVzodHdKFPenYDtG4Y2X61MciTZLLH7tHmKhfFYmXU9ZycdNGYgg3Xiwfwf7gVmuNiGX2wf",
  "key20": "59rJycsujeTehobd6wWBBfjTZ77nzY8hL9Z6SWG8umsJG1Eg426Dn8AkHSMriA4JRikgvi2S8dFVyf9W3sPmaPpK",
  "key21": "2ko7V9SKihtrkGhJfQTt39BxU4hiFZNVJGidtXj45F1GiZuknHH6HniGYBWFzsNamxKjtv7vQiX8XPD1qJKh6dGr",
  "key22": "LcTmmFEMXCjc4hxXQafzRc21MnaAG8c1wwk6KuRkTsg6cGFVTsg3MPhsLVEBa9yRTnwX8KNtjS6D23W2scAyKjt",
  "key23": "2NaCYQ9YDZdyvfeRNbCpoFvUbYdtCHtFZXQrMnLa58RAr2qhK5Qozk6ysH6BQgERUGdXTcGZwDxzxrvRTBPQHEVD",
  "key24": "2trJTdf4CkiGHZNFVMqvbFS82r5SVY3QS2KpdJsw8QRaemab9xWPeGDu7Ky9Xvqf1uyhqdkNUsMPtLZghzQpaKyr",
  "key25": "3kopKnRqW9q95cyLJwLbR5kX4cnd5HHkKd6jJrxUS1GV2c9VaQeaZ8PfjKXTWvBKQBxPeZiVhuHpy3RULgCPVBRS",
  "key26": "58DvjMLCxjJWcXqvT8vBaDYQF9wQgLJfVN1bexsjEAUh53FhdEBCuVirVVwLw3j6umi8vUui3gHQAcyytZJkw3b1",
  "key27": "2RZsrCESdW8HFu5w9ruL78SyMfgjuR86seSrZXqSTZUuN6bcfNkoWFv3xkC13dwpX5FTRNs4SF764Wma3cRLLYav"
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
