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
    "3tCQfcNgYAZHDsNJ3PwoSsR3Ebc8RfEbJjgAL2e2NcBxcPH8Ds3YQXjWBgf28PAFJ7fTTGEnLCzRM6nduvzc9qMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PHSywHjH8yjkZ8bgrw1PcNR3BLMbX3Bi3gMxyKuoMz1PFeYjXtDLDrpqh4HPFio4K24wMVuZ8GD4qj1CYGBTQVN",
  "key1": "5oaVBCdbXRrqR5oekirVy9iBEvfLTRJ9LREdd8owukt815AyDMivkhohDTTpqQMKWvpPtxySepVffwyh8u6qE5wE",
  "key2": "24uCpyxgVg5rfdoABnLAoycJdLho97UGyjbCX4hSAzmmNe34hXdWenqX27ddUW3D2GToFHHsckqkmwL3RKK5XjoW",
  "key3": "4jPrzCxvokocPsgmTzn5yCcf7SPzEaKcZKKumiLsMznFZ2ok2uvYwQJBFyrJdC4NhVd3hRBFGcQGZxpvpN1TDbhr",
  "key4": "5A7rdx4yA2tXPEfZcwz3YpZejkphymGFT4AaqhhBFdber1sTCmwBWB8ppU1uNW48GiX6DGpahfMHGyJQYbo24eQ3",
  "key5": "WoWRdn159fAFaqzCw1yJfFHpd7J7A1C9NsLKMNXfcZr4WgFJJBmbY6RkbiVSbP7Qhgib7UAceXzAdXCW6wAULgh",
  "key6": "37CcCcuUqUQhuqeZ48BuCqiYrEAeyYRrz4kdXPhLVXDTp5EWjkNdLERg1SKUenfudhkaoyh1TvZpKRPgew5woXxA",
  "key7": "4PrCNNn2wj3KwPy376gRd3v3qyzqQEJaTKtTLYMX1SWn2jP7Wqkycops1Nb2b5ihqXnmsDFnAwRSZHfa1qPZPWHi",
  "key8": "2fv1TpMfAXLnwVCYWk3XqFYU3yZW6nzQ7SQwn7QKDZ5XQYgmeEuYCJXj9p1zhcQUmdyuKixbpUW1hNUX5QFG5HXC",
  "key9": "8cgU14fPYKrLiJ35jKSghswtpQnecYuVUju64VFSkJxNZrzQKpVLpKXVN7bYkbuCEgFfoDoeHqLqPN9jqPKE22G",
  "key10": "5fYKAaA4zx17xHddj97pBdRfAGVf97e2A5tPmuvSjPHk6hAGpAciNQXgdKhUjRCxcW8DWiwm7nDAhPEVsAqkPcLS",
  "key11": "2stu3dK5CTvufbmGFEc1wfrYHjDGogtV2uJfhHV3XcszdV4FjTjsZLSNbhsM2wJ1ysjqkhTHRYxWFTThUQF9funt",
  "key12": "5tae693AbNvNGCJfKZY1sL8GrgcgxJiJJQuGm6gfgHC3HgXJTaJ7t3mTNPfdDJcD2rQxcumMH8M3p33h4DSupCi5",
  "key13": "4Ecj4EV4RGixRBMPzHnVK8RTsnZ1uRY8EBSE1cPXPrPkvchrZpGMcNJuDyUNA1jEsMCPpF2CWNdAMfXpcpKBisQp",
  "key14": "65aX7fgDYnUk3ncy38c8hFYjM4HNngDhCWGiCfMdDbXZ35cPMr6b9NeVpNBGdky5vq1wyzNp1tjjeu3iSVv8VY1Y",
  "key15": "2QuhHHvHeKjrRGeNBwbWyYG6AZWJBTKiSNZVnd1cgkoEjYHHVShj9TVLkidXynArNaEN7xzZedyfKFTYdkp8EZat",
  "key16": "5xNDQF3ThDcTofZb9YWrZpTo2KpSMJVtHWBDpQtmVzSK1w4L4agxXqJXmjb9N2HHvHKWPDj3e4c5aFYYkhcw16Hn",
  "key17": "2ZAMhHckX8vg2F3LsFndZ2NBy3PUnc6dP4RyMvpdGhiRg4WvsCKRLU7dM1kewkFiZR38gWVNr7zKnaaQ8HadfcnC",
  "key18": "5Wxw9TuXM5TiFM68xyfF3nBcHaSJDBzLFidgpChdnknnPSSxmq7ivB3DF98RbARuN68ojeRVT5wSVPE6rBD8FRLg",
  "key19": "5LB6GksZRXVq97C6NmjptfujyK1GZ6HGtuPjnveBTv59NRcBA9T1qCE87KysWpPQUisciphksXyvpHwRNYi8ZoFB",
  "key20": "3rBZRQNdQuBt1y3RGSJXCyWJPEqqj4u96D3wjGLLD9bPXiFLnYvoZs1fydfYAU6aYYZLkPJ9RHAhDNUhEUJMsARN",
  "key21": "2iUD7PX5VsAhrzwQ5xTbR24WNP9zTxtYPsheLwtgHmonJJKfnZdkFF72dfiVp1Rdg6H11ra1ZEbCreURj1fKBfuT",
  "key22": "3PZRmwvfjcX6ijE2dx8sfSjovthpXCi38rAaGNzE8Yc5LX58tsWwLbsyMSWGTTZWmSTumzjxDwBLU5XNrx2jabXy",
  "key23": "5tieAjaEXnBcDoiHxttCaD9FAqWi3NyPtvfgVkFWoFgtouQEanaH3VnYgdSvhUiWMtiPxLUYA7QivfjZ38BpQpve",
  "key24": "4bQREf9F5cwrYWHV8XmNe9G4tkQJUQznjraYMG1KzeXBUDcCmxRCVEz2xirgtnPQFtK4iK86aZBXMWPvbo7SPxY3",
  "key25": "4qywZe5Sqyx4UGAznej5SjazjxzxHhDa7iZECwCTFArHmXdbYK4SfzDju57rYpbMb2ms5Te8pwqY9ffoNVKTg8zZ",
  "key26": "iWSudw39G52t84UpiS9QCsekM9Kb6W4ENSK2ov15Z1EFuh48phWzfH9xmUPQ8TGiYGxmWsEaFRUdEgSVZcDL6yc",
  "key27": "3PeS1cuz1TigmacQ29KTd2sfJMP6P56hU6h5r8PEjwduTe7wCfDYVWGRbto9gPqBGCYqUS3r8pFrVyh4grvwtyxn",
  "key28": "2Jgypb6XtRsoWDg1DC82b5b9wjUEXRd2KzfWE3TnNoJSebpqPHjtZWs2iWywzY9kwtAGzVutRb29Wzzm4LB71Wkh",
  "key29": "X54zByttGjcTrRk973dczvovCrMMtJR4Wr54nyXqw5gmvUVeQswzWNKg9cfJBeVmsdUiSR2Ng3aEzZkZBvCb91M",
  "key30": "5M4DwpauvX3WTva56TXbUYkT4sj8PXgrwgi4bJZm9CrzwLKh4oNmbtf9pjTENK7hiV8asZfyjZuq7XTuzWfanh4m",
  "key31": "3XMzT8tB7L4dsXeLDcYPtqqTdqXJj2z3aQwZwxzTowEZxAM6UM3FCgwe71YJSYdB6mokXqZEQgiMy1BXYgVbDzNi",
  "key32": "5jwiFbGFJE52RsxoqnwaFs32WeHDwoqc3jvGYHnKjecjbWUWigSs3e8RZDJbvYHPKUiK7fz8hTifh2txsU7ocWzT"
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
