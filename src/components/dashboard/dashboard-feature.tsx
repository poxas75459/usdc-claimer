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
    "3WKApgkMR1T4ZexgyxSqBefpuR9YugoBL6FGPZDDam2cnqzdYfMTVUraA1o6Kv9DcucUt2yrW1nybBWaKbZc6WgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d9pqXbXkPr4Yi9DVQs7L12HRbVYVkPDpg6t8reC3DC7p8bm9VrzwcuBLsZM7R4xfQJzBRbzZNehQWuJrrgpDGuC",
  "key1": "594ocqfFWxHmP1qh2WA6ERmDyPcstrPTTRTRpBDaxx4sUUTGbAE6wvKU1CuNHRLFXarKjfjSmoGztagzBMjQcquQ",
  "key2": "c1252w7cqJPrLgX7jtLXFxkHWPWgN459mmUYC4D8BeyxKFtVLNpZqPiSr3XwBdaKUdKyvDwRz7gmhkwtxknK1JN",
  "key3": "5jqDHo8x69poycHXis3YPXKPrjvXL8SoCBktGKsaePbmi6Y1CNqaRePciJaQLQ3bJr8j1LsniT9E7ozFTwiecpjQ",
  "key4": "57gzHeGnfahLA7xsE2DvsYZB6qKUU5Gimi8hM2W5G7WdG2n9u27t9EUeA7cJNxRXrbjWijckmfw5cmiTGmkKPnNR",
  "key5": "AgzpThWFzCeW76brs2mUWCMFmuF2PM7mF93CLHsC3zJN6qeRW3JprEAqNigg7K8B8voSVfVtPHNP2HM55n9Frrm",
  "key6": "2sZhEZSNxHbn1y7iTDtAmrRzvdAAEg96pBuyZTNhN9neLvoBH8c7o7e1thQSi9HHoxJTCp9URzpYxqTCrw1fVhn6",
  "key7": "64dmZEixS46qSu7ubm8mM1nfHykoUFvMFgHbtGqgeYAoYD7v7BU4boUgkgydRDdwoWcyVxRETGcwXU2YWRJnU396",
  "key8": "4wy4LcrWudwS1m8AXcnr2hnBJzVKgsuAYusGc1ruxHqjWb9rAnkkrxqpdbpCKfgFPDBHgbQGgWgvjdk64rCHBLgA",
  "key9": "3i5qCuq8kndm1FfoM6UVC3JQMr5RNxto2nwtbZJfqqP3hyWMAbPFKH6VyymYtpjUJ5hguVuugXRyveJvEEBnohL9",
  "key10": "4NrsAJvPV1zsY77DPsuM6wbnvGqe55eiwidiGeJwLGE94yC8yGps3FwDc6nn1CbnnJvfMBqLvWLuEbebUeXqREhQ",
  "key11": "53PKSvC85z6EjWKH8uJccXM4TiokE9Ey9U5iZ9v2rY3fE9ScwoJohgkG1cUch56y2qt9ch6QdQMtLG6UqkLVJjBC",
  "key12": "4ZiJAVzrqskG5KkB1q6gUXa8W4n9kAGyXiQMAJyvw8mswfqW8zQABzLzRBcKo3VWUA78DdNdLyDoe95Xs57DerRj",
  "key13": "3m3afoT82AKTDY9KwDcDiaAHfPG2ydQtCSaTYbJGvYF47nT1wZhFthmf9VTQEdT9MNWix19kyF95BHQPnhhttGb5",
  "key14": "44oLrBCM2jsiLMS1isiwWvpa78Qrz6krFfuXDrh3WXcqamZx6qUcpB7jCGvKi857rEjJTeV3Xemf9higmgvLTriN",
  "key15": "3HnCCG4is4LHTEG3LAu9gT6wdG74HLHrniLqnrd4VW6LJp1gP1XZFWAnsUQ8BwkdrYvKNVMgZsWHco5NCYDxgyWE",
  "key16": "5vxKGrkCgXqoDdLrK7rjQvLHjvooeHquQAdgDTe2NoEeN2yiQ9K1aFSfEG1hs6J5yoCQSMVXmY5LCH25mt3UbEp4",
  "key17": "eYPhW3VSN57hZCqRwAnD9DDQGT7Zwgbge5C4keskRJHWQZMrFPdHnHwHuFsakmgycd2BxyenVzgTyvSzFveNqyu",
  "key18": "jLsdhqoZVXZfN2JzP6TM4WuXHfV6zjTWVCfjR1AQ4b4htKEmEShiY9srQLaizfHx8Zt5SUUbdp8VvuDpSbwfrLy",
  "key19": "JNSqjjH33cDrFCtD2ZynT4rBqcDN4EnibB1V9Mta5TdAfkDBgVLLFaj6TYRT7YJCnFJ1txCNhVXQgHpsrYLpPp2",
  "key20": "cnHB7cP1F8e5mLipxLTQR5Tm1tpe3CYH88KZrTinUf6YQ5gAsBTzhmgZpMvGUermTuKczy9t5GV27wHSA8Vsv31",
  "key21": "67fxhEa1nvkroct8DELbuz86Wu76hVj7yk1pVzcQyqXMHMHsmoAftzNVqkPW132TEydHyPUhPgB4kU2G9To2MKj6",
  "key22": "wUQdXcP91jsPDqrcWc7h9gou1bmCkBJPKHJdkmEjvYFVR4XSVuEGSw5Qpd8uQG6NPMc4HJX2XyFMKn7r6Q8ebYA",
  "key23": "cJnVnPrc7wguWZEYoHjDHr5a4h3eCRYgdfLww9E3VhztU9xpdjd4PeS3T11uyYFRq5E5UZBoMQ1rQSNRgnEvjy1",
  "key24": "22AxFdmQqAPgDNBSKp28TyvXZb9ueC9dmPtjcs6rumjgFf11crnbts5yhTsb9vHxAAdHrtNiyUuVXR7TJyw8zAy2"
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
