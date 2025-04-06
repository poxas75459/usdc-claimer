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
    "5QGEm49tQcXYM2JRRzfd6ug6K7UCxKA2THCTomnGaYrEMGNvLniu7479oF6KGDeCjNPEBCXVabb6iGRPHe8qAK8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "365mTecKKnqUF7DwnJmnangAafFe6BkJKek3eZ7mgmaZynJ4mtRWRPsYwhwhGKV9pZEChvJhssiuDEhaAFU83tBD",
  "key1": "2HooJyDPRsAnt22RrM2wD4Ciuq9mrc7TNCZZfpRiSuwGCtWMZjFb1FRMQaLsibZazYCojVw9VjuTbKJDivUQB1dp",
  "key2": "2G6vG4i1kKJWTTBDgZzHDWxg6zQ64qUiQLUtivdr9D4qGELhRMX43fsjyGsNqDt3npSQS1xPCAxaxg8yenhorF8U",
  "key3": "thJqGZWSC95PiN4w3kXaPn1EwpTcRMvB9QyrqfTRPoKqqTfMA3gqsgKk266jbnXdh47HqsQckUc7qFHmZzmQcZB",
  "key4": "2FK4eCwai9wZaJMr3CrJtFv1mBcdZ5D1kc3NWZCFzSG3ex5FwNk3VQq9DKtgcWcxRjBCD6U1jtFg7hpCuefaaEY6",
  "key5": "xSG46B4gW9MAsk5JpPd5uza2M7DEgBJwNg1vrzzDMMJAisaNCF7aSh5PmnCj3V6LBGTwmkLBZpeVpgRTxxGaALL",
  "key6": "3cuiqMASzUhrdhSYaqfREAPNPFXpPubWRg7pzp47QGDp2z422BinER1FkaUqv9d84yox35y9akEfCJiF3VqHVd5g",
  "key7": "2RY17J8YxDCxMtQ5r6e36VZPvrKMPLTjEriu8M1HHBPyDHT28Wf62TtAVLhwjk2oQitaiVXrCPUtV8esQEF3fTgW",
  "key8": "5LAqy6HjgGvWdtEiG4vw4K58vEZLtXrCRUNxNzLwKrG36L18nPeHFNswcUJVsM6JaKZHoHsFEPb2ayjTejtePJge",
  "key9": "TCuosuPruXvcQjAiXubmDrGgt8FaFtyrcSngrtcDnrArUb7nygx8X6x2xGL6RwkfKWNSC8ubAzzYf2VGgGXzo4W",
  "key10": "isZcdHtNtqDYqUBkqzZfFXvrdnBT34hc3XAZiDuRhK9cuSnGEmNeYUNWfgCgT2G2TuvSC56McmoDnEyE36rzMNw",
  "key11": "3URN5na7EBLCGASNGovHR8tZyfU3jWrC1a9MYjLEeefHLqqkGf2ZjNJ6RFEdeYc1PsKwqtnBM7WJ41zoUmFkFao",
  "key12": "5CbcGNJB1UY6quQLDtSmpkxRaicTfFKn9GH7hdMRTgm7dXbQdiowzT7VT9mJRcLivbwsKz4cXjcqRvRrBZh13Pcf",
  "key13": "3xHCJNcvTLKWHLnwHbeXkYYmyKba5JSPNj9W7qVok6iTQ6f4bZWjzTTNRE55kvzJfgckB8xX6UU1w17XSxE467ew",
  "key14": "5h7gLBQguqQFqo2V2mc6h1Z4LEyuvwpdAQmR6bAXV3i92WBRvisXbRWC9Ly62CWsaRbbrF3ktRHVzxnGF8LgGcQb",
  "key15": "5oypLfkQTdoVMUYseKn3m1hXWt17A1kY5346N3NxDT61GFG8qsFSbbDQFb41UKpSLbDL6hpZtHnwH4pjkQ3oeQ3g",
  "key16": "3bHywgd366JSMHXkdmJ8YFaiBPL8P98yShT4s9ooZWFhaqtmQejmnrSQmGHLkeDdp6jPBfM7PP18kXHYWqMLJ6G4",
  "key17": "5HGp11heE8ppegxonME9fieRHkkmGmTyDd4Z2UkoqSczpT9Ua2v9um6B3gm1EkiUobf5oS1LfZLqTj9rhmwLB8z7",
  "key18": "5UVHstGDiHULmjGyjubqZYcuaMj3cbNWLczijCK1ZUsPC2BdxCtwdvZvcbaqMUsVMhDMjLjzgo6ym6KwGbPhYPn",
  "key19": "PiFFESonE5k8h3JcVJStfVTN9L77CyV4fYTMTC1YeCpzWDXgbWfi4x6DdXP5DgZCMCGTLLMrEZo8SYXi8NJoxPC",
  "key20": "2XGmfKGJcNzbyt9UXyKzqe99imVTqCFC5LA3GxcGzd5QGe4Dd9PXUPYZ22TNBm8HozD4r9Z8wuW63sSL6SQyH8EZ",
  "key21": "4B6vFtFMNbRghkcfLUBHjrR3rQzuKQJs6QTfu5Fzkyu4er6juSY6qRkGtkndRMXX8CXKQBKCumeHpVHX3MzCHYf9",
  "key22": "3uFNDCMJSaiT7wp3nQNML7y152BtfYkqdMEYpZB1GLwmVTYqH7G9cYraVupesM61Ehi1yVyPQY4SVGiFmhicHygL",
  "key23": "4rkHK4GFMUNFtvkruSU3UiyV5ozVX6hEHubaMWY9hfeJCUk9fyUzQPEBsie5ryqiJr1m5k58bHpiy2HJxmpBA8dx",
  "key24": "3PrqXX2vyaJhxjfpq8Nh9eZ2RiiSw2Vo4RhcNVSgXrbAF6kbya3DwkMv17oi4LEwWT1MD5GjpxtBS9Mhwrzge5o",
  "key25": "5uyfKCfbSPRGDjUz2ythpJXoXNwjg4qQtVD1Dn7euY83xn5wF24scBdcXvwn9uVsWhWrwqLSqUxRhrwsCGbosJXM",
  "key26": "3Uk9Pw9bomQ79GE2GTd8imuQZNd6kHAppE52Lh4cWBCroWVbT4mp1WDjbP4cqhbTJuemwQBARcWq8VFJ1jDMa2wa",
  "key27": "VMaxBrcbJTqbrTQP4oLb6sxbVB51HTmc98uSa3KM4Mkg4MAjXLk95PkYFSb2jCWwa5erzVe2sNbkfhNS2nfZbWo",
  "key28": "3ik2X8ySCeHdqMczkySj5NfBVr3EGH6ekhxqpgCgn7MmRzmS8vscrZdnAK5LEx8PbQKkBU9rfMBzKt2nmPJKfM8o",
  "key29": "3i1mJXyx7wpMvBEAZADyuGTjBHsjJbBGFnTz4HKDqMozc2jJ17ZCoCgjMGNfkzz7rD7zuMkhFUMsboSXRp7rp4nS"
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
