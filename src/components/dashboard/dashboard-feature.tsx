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
    "4QLPnmvKUcb8ZAGCSurRQqGqtVh5mrbfQByyDYJVSij2fq83WGXRUgyDQD9w6aNF9wFZPsBVXqj1W3kip7dpMY7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q8DqDyFw5YdDBcUr4CYwHVYYRJcKej7NS5iwfSDZsF3GqUYBinsHfwxqcQKyhfqEMp1vuLvSCiqrrSonyBbtGJH",
  "key1": "zX5qh9eDfpZFwBxL8fb9jsMhHQK5Tgz93iJDDfzc2Jy1jvqA7z8JxFUZNZZPddaNidWk1z6pLncZUWFK7XGpGjX",
  "key2": "3FB9DWHbJhSxFQGjWmxnvfPhMeWUT8fFq4CUX3Sd9JDoAL2Y6GHY8YADnSWPjS2FnJFLq1gp95rCr8pzqABmkGYr",
  "key3": "3trX8QHqVTBALtPiuRLyP1pksP3t1hMN5EEQA96edtGd25hsnCqFXyKvsGbYNbkAHX7S1L7h76nqa9uCtZcwizHS",
  "key4": "4hbhJH2u2pJACkp7DteCvYDCFVVKbTDQCGSxhUtcGmEMSgnD1gjhARPfqq99FmkB9Qe3vgJMWFCNqWXaAQT2sCfT",
  "key5": "2KC7MkNuDkwSQcisXerrzdaAEyxJgCv74BNjQYfewuaqNkFpZPFMbx3SzrbFNwG25DhLzyemHbonwCYZCkstZsVZ",
  "key6": "3tpz8tFxqAre4ZJZaqwMNdxC9ZLCyXgmFjQmeEG3rr5o5mRokRR2rWV81odx6zW7ZHyYrmwH5ihvKohibP6ckD71",
  "key7": "RAHW47gLeLFG3FdkkX2iEZqaUK389FThCYq9K9819QWeeyMwrXEBuaBcqmxeVLgE3z4X9EhwacG7QVpSL6CPEsS",
  "key8": "4Wy1rbF3TSA78y8rPrPSyrqw5JGc9XnDqo3rNt6XbZkEpTRZpwSYy8Poa74gBjckfbZhD5PJMPhk9qcybwDJD5Ux",
  "key9": "4nbT4sS9qc5zaM5L5TpPQ5sLyQJX8PRpqdspcHcoA3kLRh9EzenfmBV12CNWe158kmYbKZpnAck9PweVLwVQkKZ6",
  "key10": "4GWWnTKB2JH2hz2rvzxx4ia7FgyW5y2kNs9imMS8gRyiovnUPbNqguq3mtzAKGJdoeX4mv31KTVHnw7TJx3Z3BYL",
  "key11": "62AoKnai9S2iz2hRFd6zcWyD3jgZPcqaa5FWXy7s6QYnyUn5d8qbC2ARAB4MNFP9yh6C7a8P5XA24f1H6eNrXW1m",
  "key12": "3PzewcFpvN8uyJpNQ4HHWcKmmsWeWJYSCAQy5tphS5WoL1NG49189F4preAa67HSnBxhd3LE5d7hesCY43ZYr4Fp",
  "key13": "53tJGXxhpzDZs3ykbVvsQbRBaN53XVuUMeeFvT3PsfxwKzL6s1Wc2qYgK1mQHipLAkvSpvNjPGMPkPkXeeoiv3b6",
  "key14": "5XCDFe282fTBM5Y79aw6UgebDFxbQ3MNc2rycdiM3xnjNP9MfTr8VhxA3yDJJ3wccGq7hF9yQZfacUQmbjQV5RWB",
  "key15": "3Qts25PiZjBCHFo2BDw6FH8rwcrNGwtFsWSvbDZ884hG1ULtdgrRH3kQk14bUSEWkmtwBSHyUkCh3ebciPBPZWZD",
  "key16": "2g5idJP9FjhKsvcsvbjBR974o9w4YH5Psgtqjm7Pdbc1GtbCG1bsNv9onmLYPARNw8byHzU7SG26qqivS5ZDM8a8",
  "key17": "3WomzWvrfnvt8cY5MGE9on365orz9jJrGRuzsQBKrgjvkzF1WvVE3Fjoi69bcEGpNfKHcuUfTBWJf7HCeQRJwmP3",
  "key18": "3w1YuNEHvnXMWN9gyauM6mGgpehrYSZE2dYw8be6FGYjXE2K8dUCEdXu6zggzP1eWYoxGL528kPoW6BBmbRgYwT1",
  "key19": "4CNTdUWkDEe3mZ6gAeB6fozcCBckiCcML28Z3Bafd9Ve4JPdQy517WUHcAqxgxY7iAvanPohDv6ac2UNCpP4fANL",
  "key20": "3R4yqrcP8fQHy6kxKnDEzUsshLgv1cxSVbGkgjPoBrx1mSE1uidmUJGezu4ypSeYAeLifqEfiKGHTt6JrpCTb39K",
  "key21": "53sr1r9KdgfnvBeHR6kMroXg3L4waepBcoMUKKNovAC5ruJCtooTJ3PTXHYfA5g8dtjk1JDXDCT9uQQJsvm2xaQL",
  "key22": "4LSP8cGZFcvXSc6oR82A3wJf2sAKRYZ8oXavvBkyxh6vzzWCkBjkW16fpgbFeoUpMC9PSWjSb6e6gKKK2UDwoAwA",
  "key23": "3cMTbLyvyBmngbEf9fWSZ2E7epwqxfVJ3nVPYzcvRAziqV3oBkGMsbB9mf3jNngYLFdUb6naXazJ7Lr7gX81Sj6p",
  "key24": "35R21p3tL2JV1EEvKPcuejE1tbYWA3LdMX6PiC4cSQ7mbhmBNu1A2uPZpKocqzvzw2uQpHSSNW8ycYuCsVWMiHY4",
  "key25": "2NxwaxxXXwL2amZT4g9KBBx3mvHCYfr29yxnvrDFeQtJvAdPo7WzACejyFuMqi5EfrjaPsVwJndYBnvjk5p12Tpu",
  "key26": "2KLhqVSaEBcMovmFJLjzBhRB5sNVDRPnEsuu4ugZLiteevUE4xrA6a73NZySNCxrhFfmLSiG2yod2N41beuxWhTi",
  "key27": "5xcGucfXNLDrZSiwXuYXM3rWyVzLduSN4KmV7DA7ebqihgEUqMTRAkMjUQsEepCq5vvYKRDdSP25cpc7eY9UJo4x",
  "key28": "2KjJBdUuBNWqo7xiBqzsgATigCXMTccLwp7JfM99pyPAzSaAJTxqSPCVgxvDUno69ANjiW3hJeU6hus5F7tWaaJp"
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
