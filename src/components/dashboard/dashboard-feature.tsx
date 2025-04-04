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
    "4pKrP5qUsZ6bhne8jqy9syaHgUQyFwVEabGFvEQt1U5U1x4P45qnJNYuNjc3HpGTPxUMri4hBsHdHAYBN3PNmmxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2STv6xSqTQYMF2M1Nu7NcreBoq7KjiqbkeSQXvdssGjFnfY7tSRjTTXJesrmw3Zq8NewzL9S5UtUh7EXtNoCJDCj",
  "key1": "534J1aci1w2Z3aNxTH1LPsYuKjjsbxz6cDjkHKKNGbehdmRJspjFFEqWgz2THKxQZBo2MZT6dPTQ6hpoGZmWxCy5",
  "key2": "3KsG26NinDN2Upx55BXbxTKRMkJ7MfkZsSJFKGewdgfE2i34GZYUcBVaj1iXgqPYJnTDrp1vVX3tm7JHb5kH2gP7",
  "key3": "4uPsGuSEUUBtLksqV3FLW34cxGCPt5xHvmEvxtjPAFjpvFqzsxdmkP8a3cgYK794VVqmLeF31zj7JuYBFT3dfWvF",
  "key4": "3ZPrDMgM8cHbXHXZaofUqmnFzGtUSRAaWmpfN7KpZv5kXjFL88EiaZy1uFdAjiGiqYGxxqiRBSTD2qJmcrRAdLKX",
  "key5": "5qoejdcebd5uv24rHZAdGGbQgKG4QEXTn5uULXNnqpWeYL6AjDKzQ8UnfT4qLhQCDYULULnTJHC9RmioadB3sm8Q",
  "key6": "4hg7f7qa2Bin3NrCkE7aaY9F3kWRr7FCSAxhfJSiPWujZRF9J8GpbynBX123Zkhy4b9GfrFTB3THBhNarkJLok8z",
  "key7": "2hPPyY3EczAk5s5pJdDAua6W4BwBHMDiV12PNrPR8kJtNLcFy3ChQiM4og4dkAzpz1rSNjiReq6TjwWLJoKBKxqk",
  "key8": "5aqS25bFbqV6HMtRWRZHcF9G8qB7GHh9QogBArps8obC6SHBKjcMQGJRiVFr6PzUnTrc5c5EmF5BodkQkGh4SpfX",
  "key9": "5SQyKGEcjiV5KLEZbnGSfhNaa6BirwaWhKueVBtd2BmznG12XXkWYANB2Uq7EfJNSodn6RV4CJVpk13pXAfaDo69",
  "key10": "o2jRgqrKwCXoixyNtnFQaaC55jhUfLYV98UzTptHMbWGeZ5NFRa4m6ZXTfZMSkHFL6AgooS5Puzxvxmd1cCkQpk",
  "key11": "33bKCmZZDLvpi7RKVdKnEeDSFx4KC72qtcNqaW2FWARBfKxu6Ae4cTEnVMM8xEvvmAdfC8Mh7aSXRHfdL98w4GMd",
  "key12": "FVCGTU68KzL5e3UjHRetWewbMv8tuiXYrr14ANJG9m6Ur5RHotkChuGWXH24pxyyZHDKQMYhZdneghcUCf8JNj1",
  "key13": "31ihnkEmysCJqGBWomjbVJk9AKjj2eBah1yJUi1mvvXxzjYRJ1DSS7vAT8ULPXneHQV6rFiNtKxCWnNPQEGUJZWL",
  "key14": "27t55J8mLvo14jZSsqStknC5L3JDYUWdDquMqBtmuFhdzWXdxdTx14ef3PR5q9NgoJ5Xjc7wzvEPSzN3RQbbM1Zu",
  "key15": "3qfkdN17YdnkkZnfR72LSare3pjbeNQ9ytEwyvVL43xqRYm9GizGMCTDXbywzwAuFCb6beLRptPd8WaWJWw1CKUy",
  "key16": "4vwB1YCUZUqFuUdtTdCUEFL6cqrokwJQ9EcBJ6eoMYkEBPDmaMKwuesZTpkbD7Vdeb9qFck5cJQ3A2PAoJDJMvuE",
  "key17": "3Ta8GE5UWFqdTLhNQctSVHAwSxQnHqx4bU2cRqvv3BU6MceMYgLnSwZK1N8upHVAwDGYsqCvwSpiXRbgJdh1HMRj",
  "key18": "8VjDBH3AhLFyLzBvDDb6zAFzX9NU4xmP1bFXEbVqTZ7J1LzMQ336xb3k4vh2zFcArwrDFrKGkSVsrtgVensXfVz",
  "key19": "5rgSKuHdYUNWjJXeHbBnPDcPhUCVrQ1BkfBXF7Q3EbKawBb49aJuA3pS9PWD7UxnGQgxt7Z1UQMdphaZ8HpNKBuo",
  "key20": "3zV9E6WNTrRq47PNzVsM2rEu9MctbRNezQ69hTGQGF9hFq4FK8MKLjzwhs9LtgQ54BsaSan9Lz5r8e7Ec3Qhpi9B",
  "key21": "iYf1dAyqMPZoPcGn4WCdkEvJxtY8AWyXcEkofnNeK2PXYJuzPn7aC5gR7j6LikacdnFJeWkQ96zeSYmx4z8uE2y",
  "key22": "3vVMcHLDuUtTMfpuH4RsLHV7AzLsxSYFhwaA1Rd9K8sSNGnq3MkMKfEAv9V6GvmeL4LNFsAjzd6X9N451dohqg9h",
  "key23": "5v35Y5wWkUe8oVSQ8BmQv7F7QRAUcayzvsVgYbwTCfcbyAWA4JNPMuAepRwL2GaXgU66aQ6JitojRhSP7M8mZaM2",
  "key24": "2wvyPYCf9e4FVJ9isTyN1tzinsb9fd1oTbUC4CxzLgkWUEKEAMuk49N94A2RaJhVS9WtK7dS9FKK2d36wedMwY5d",
  "key25": "42p6NoY77NQjaGoEgvu7PWDCoPcsUWVtje399FHREfTC3WmWPvFLpLL57mXmicer4NmFgxNSriruBAP7SzQFZ2Sd",
  "key26": "3LdwcfPYPWiaHSNbwRHZ12UuqWtux3TVS2i91UdghzQWXv8Wi66tGadufimbSpkeQW73gi7vfjVjwJoqC17vWZrP",
  "key27": "2CaEpuH7J4QLZbuCgxdKuibeKxRHkTt3ra49UUNMBb6K7XJDxE4X2unyq7pE417RLL488zmhhmtpdUBnEfHssmas",
  "key28": "39yxcfMfyzRYT3Ti5cr7G5wKdzB4VFjEndwWqXsaJAPndhmwuGTKcwDtEh3QMzPR1g1DnFgZqPRAj3ai6U7eozG",
  "key29": "3pK3kBYCCV2KTjGmFdPD7k36gCuHjqYWB1Nxr1HdrS1Y3BLo3ex8vFviV2UW1ibyWxZze9tAGVCPotiLVRvftubM",
  "key30": "pWwKG3yMw3UEH1UAAsADW4uDwqGGFdYHtMEDjFFtq4deSALD4MNvG2QPhrJd8GodSAMjqfGJNseZ9TSkan89tXf"
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
