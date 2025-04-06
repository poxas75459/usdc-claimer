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
    "3Lo6qJaXg1vEPUsiizskyvGdUSu9t1b5YvbCQPSrMov14gcbd6x1QvUcWAzCRkHgViJAWSJPXTfXo77qbp4mAqLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qb4CNnsHvfGkgu9Q5aHJydpjoVwg7ost19RX3RSbqSzCJcDrBYmfkUmyUde9MPjWshUryK5epYcm6B3phdEH5tr",
  "key1": "5GunksTY4bA1G1LbBcCcaPHsrNFbTbxmPVeYmgwSdozyhi1LpSZofkLrQ4DGcPLFkbKg1aD2nXYhTf2J9cVYkRmh",
  "key2": "3s7sc54F7sgxN69N9oGjLWEDmPFWq5wLBXqZr7mYM5ERw72Snd7xkEMqnsMnfRo9VSRG48LQds5CcFqvsea1qA9R",
  "key3": "37EhDYkQMgzT9mFvakQpisbn98Ep2maw4UpZeVWfLBCZFqYQzFWepq4iaAhtwtHXhBbERPr1mXTDhR1AKeXs5td4",
  "key4": "2HRFmX4oWPiVz1zK1NF5xuoqgXnrMT19kSdnNfXK5Tr22UDKmTBuyUNHqGkfX24c8vfzoiDDiUyQRrKC5yGNfiPc",
  "key5": "EfNAR9Ziu9q9YWeEj7FSiZA3RcRJg9SRbMuDNwd6QoJoT5jiVGi3bgXbDuUQ8ARMKnkcq2NWbaZ87GiUK2iLrsj",
  "key6": "4JuTyiq2mZr5gqzxNT8pRfWZV2HcKBNKEnxU2PLDvtBnLsLirAruQQegZvGnTNNuGYc9XEp2n19maUdvHRAwGSX7",
  "key7": "3wTYqwv31cXadCELzT8zWe8NFD5h3hhNxJMrhTpTAMXGWyf9NqkLjcsHqwHNDB39PUi5698Tpo1FFgb6icwz9Thb",
  "key8": "tNM4QfC1gCjpaFCcR5eRu95H7zwkRYNXAYprgGDt2GGzPpxpkekLidhChQWTRYXHyYRas3Wd2cz7tmmiXGAhwKd",
  "key9": "UahgCENa9kZoamikd69nJmatL4N1K2nZvR5NrU7wyQDW6gqwh4tdv4NXixsdjTAuJMAEFFZAuE19DeUGch1qZYH",
  "key10": "2g8aWfDp6F6afpeXQ5RA5wuuaXiKgbPMHRkRpGCqP5ngLSV9oopKwKEHbnJ8yKaxpBss8e8x5zruQSkcCvgL4vbu",
  "key11": "36rNyjUzDB7EdtzaE5WdVDbRtq3mk4qUZGvCYGQD7ZfGPuwW4NqnYoG4myXrwyRsSqsj6JLcwibx21JbcpJeAGkb",
  "key12": "5fWyeV7vZk2RUa58dCc5p1dZoE4dBBxwyyt8iuVYxkUwJeS9ZH9CRe955H4Uoo6vJyfcSMMGPzBsiMTdBGedVWqT",
  "key13": "5zUG2dQW3wivRGhzrXMgRpYwAU5PNqNo3NUBfLmqKvRAJqQNuVhui4oM9N3pHYozNx6s8aUiaXhLiFP2T2Xh8D91",
  "key14": "2kWuDBXVMCqdUvFKZfYeoHKzdcPeg3T4uPW5FY1LzxFYnD3rtSRvXBmaJ1A1hudHwSYCBtmdqfnXjjL7kprnYEWn",
  "key15": "22jDVBKxbkXV19fHUEsg3PkbYqZkqgorn6bHEG2QNCpjCakNKMX8y5RotcKCkG2r6vMifnKLjhhgC4pEqX4zRn9b",
  "key16": "5rzJgZhm9ZbZs7msSyQ8zEo2ZiV7X3NYtaAgTLLbLAKGEr5CZNHHCuu5xeHdsGm5brToGiXxRMzoyhgVw7o4Db96",
  "key17": "2RUxPT3FsR3V4wTE7R2nrt1Q5xcXg2mC172M6BdZNnutbtvPx1jvawi8FzSLKfuE6oUoKMiNqXF7kWe63zZKBgiK",
  "key18": "4sLFypjpZHDbhYTWUjsox5NMEPKzw8mYXsUkWbdYhB4W1sahohz8vzNomEXuwwHkL6Vr8vXjyCEvCu4JmDgVnBP6",
  "key19": "4bAfA6vj4xcXNZMZVd8Uhp4a53UEHcoxA5sJdk3XsKz4eaxtYh2PSxRBrwfL4uGxQdtFozzkUb6Mee4pzstLr1MC",
  "key20": "5zPRBCYJEiriH2gxcw8Eqcc6CF7EWKFbjpSq6TLjXGzoqCUBAQ3nyswsngNqveQAsYEtrvCCWaBjNKrDXchiKr8S",
  "key21": "2wqsMjt3sLcyXkxxtZmfZfxubvw2pSD88R7JeMSigN3b3tk4hpAYWT2nvn3hnU7Ygph7FTwEhb9qNtHuLRQD4h4U",
  "key22": "55JViAKkMHAHHgkDXGTJ43teeY4eSWTsb3pgJfQ6AF1PrT7svNBkBu2PzUtNgSRWiucht4NnxsPaiTRgA26J8dHP",
  "key23": "Txc4Y2eT8EqCXrk761VKmRw4DzQ67G9UAU8kyU7CpBmFTNjKD1TELkdHKKgMAqwNXjWQH4pjJDXbhwzUWRsd6Sc",
  "key24": "9krnTtUDatvRrWwDPTev4RFjrNXdq3z25YRSFWFnjQD7BKbkeaqwsCMvez77gM6jTEnWcWVUuNxGGdFiM4MwGm4",
  "key25": "32thHdZQE6njupuF1XqVXUeHSm49aCYqXDKEHzKN1a9p3XuNH4uv7BJiJVu2KLLBGqUEsQxGjMvutpmh5wFV7VGD",
  "key26": "MkopenNjEDCkmd3GhRGkVGHEsaWHtP7waUhGxLqhiN6e1vxWkEcQxmGGmHNNLdexFeCkGuwpXftGG7MRVjP9Npz",
  "key27": "4Bu9fQQdE3z3XXR1jzJMSzeJZBDPDg7tXb61cz8mvTp4oq64yPzZDFECKxXY4fwn6a6U4cPPcD1EuMPxVjPzy2Lt",
  "key28": "eL4qJ5manabQEtg8cVq4zFnLEzBs6rCjaHyj4VjRHYYhmUh7UPwtRBGY9kU1HL8YG1kD9wWhs43MiTTKmPpdCfC",
  "key29": "3ZBGidshdwX6ccNFBF9Mrs3bu7L4Lq8PEgx2LPx18BGj9mrMKMc7DCUJTnuTXTzCTJKY219PneUgbXmEUwgvMo8j"
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
