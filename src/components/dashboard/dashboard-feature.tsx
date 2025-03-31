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
    "LrwEztam28hR7pnKHtDhs6p5dnAw4UwtiA72CjRskh6du7AxLZJZBB7sgSAQPFaUFSgR4ssZQWLsrQyxZuNZ5pq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sBqSZoN7EDNhFZm1sBgCbJ4HQg6JkUPpR4X9qKXHtJGyp9icSXAtQgH9UpLRDWfwnDCE9N8hYZ6DrHZ4ZDesyFu",
  "key1": "XLH8jhgMtfetHQJsnL15TndA8nuwKUUmd37wjntwG1f8nWUAV3Q2vQQpcciD432uJKUXvoXsENSSPEPVWaberju",
  "key2": "5yfoRMa2zF7UkJbvBhYunD2rVUPA1Mw5cXQUAt1rD44mkGNkpU2EHSfJfduV9RPuxwNnogicsx8fnfKTnXAbWLyr",
  "key3": "4RNJMbncDtxCKEsZVBKQe34eZzSvHa2fpKbXvsDc5JkxuB7ZKcsamA4Fe2pL1P2ZFnHrpq4AwR9AyTcGMkBjHdLs",
  "key4": "5ygkB7YjuUhznnv9rAWFBMfdykKRkZkv7sd3tgfnPwudZeAjKN2y5wLRJjYxTbUMCUPgTWaXcT2CXwoBwARcCyNu",
  "key5": "4vkHEdqaPCwAXCzvAUZe1FG3frSDRSxESrvgqAtUfJ42Az3ibMgZuSSaWyZG8nsZLhsmRw1sakzPcxiBhLmKpAfE",
  "key6": "3HisnGzbDzeX1wM3apppBqNB5WW1N6G6FC61sjtYLFnMcAnJcgwc8HqgUDNMJjozEnfDQYNkEn36QQaXB5eirfSD",
  "key7": "2PaLUfeSmf1JNKNkH2ocTCtL1GjinEyyPu89R1rsvJSCFmQJZdCX82Yfhy565ffEitEVamT1Xj2Ltue4RxYzmsqo",
  "key8": "2AW1D8ezf1acs8tCFQdCG6UDCPq2YeFdzNYhp5yMGQ75a1Vg4n2r6nUhcHBiDfw3dUPbgy3Jp4SXV34g6DvQPScf",
  "key9": "2DfqT2cZoAExudyC1gAhQze7PCiP4NQHUWAYRdEzjVsUknojnadmh6CRhKGDHcFC4gKxU3nyD28yxi1Vhhvm6AK9",
  "key10": "2dJrKmZxBacz99kMjLwRaHYJ5cCrmVADDKZqjBTTXMQHhwdGYBnwsztH6jwYi4MFVti79ADuzWCBs237RfcDDc6x",
  "key11": "2c5YW4NgmneKcfYHYBue2muA74DgfcNoFKQn8NFj3WQebmTiGFZr8WWzKSxXtvqowdZDkospYJch83eYj7rqVAcT",
  "key12": "5Wtn9Du6G3qig638reCKVZwPLEpJQkmSuQwynFxsPQ31USJ35HAUy8XMWp6gQZA8bPPrWoNHyT89H9JM4t79TP1s",
  "key13": "pktDexnTp5YVg9cF6LGtVcNGZ7eJ8U9doqPjHsekjcSNDzBaZ59nnAP6qGR6wxoS6Per1m89ASKMLyGxqiGsL62",
  "key14": "4t6vGmxYQmFjktGU3oqPNJDEBph8BbiD7s63DWLQzm7MHAFnudiSvpYbhTkz8bYiqG1u4azBcHmRGR4dJZURUYNV",
  "key15": "4r79ouBtsUsYZHNBpC7cXtKPa64aQQZMFcsfv4BTGnpJ5PdDLJpVwRpggDJZqRG4ntNTa9UZDhNXwg3Lrqi3jzU",
  "key16": "EDMXAvdA1MfYYTfjjXfnX2jNsCwZczogTPuZiDXX7Jrrqth8Yc36jQBtqwyjYnye2LauVtLGk32mo3ASruLfAST",
  "key17": "4mkoyLNNLkM2MaiacwgU9M2EJLUQg9bAxGYYKDwoXMWeh6mWJhu3GZhfoMa64t991KRbbL49eCGpoAyMEvfJ5tw8",
  "key18": "5xdtrHVaYcvYgkH4YP6wub7ew8gCCWv1BkpGBpZhC9ic8uPnzoXLFshhCD8ukW22FMNwxrR1gHSATDoxXVbY1Ps1",
  "key19": "3iJbGxRXCLgMxwGbUUF6LqK69KNUbhGTJ7AqpGb4ZvafetYY1MmvpjFhtSPvYVvCmpPSA6xb9xQbAfF1UEUeptf8",
  "key20": "SLwKTJTdtLVSVVfJNgqVyE3aZVb4CMwrK6qVCppYcH7ukakvtQmz94Sub4BNPPcEdcKSzmZkNtf7cZ6yayHDumj",
  "key21": "x5jR48YAdp3rt4f6eWYrzKxpKeEV51AQfd86thCkB1ervD2xviFcradWiAjmc7AcjDL9g8S3ACNamxtYwinAN7s",
  "key22": "3bJUUs5gvVucR6i6DYVveL3QC31ZXHtstFPJpgLvEDSNvqYvycpekWtohctbSPdCkBWXSK6AM4eZE6peTAXFuzia",
  "key23": "39aBP8LwJJTK91ChLSoF8QagxWrj7JkftVv3hgBAvUeY2GRyBVHjjBNd3b9UrrQFoqotj7VuzznqNp2hEMgZ6L95",
  "key24": "kURhWU3gL3bkJn2Bdsrzsg4hTv4SchDvvRFdF7AKbAwSPkb96n4gQxDVzJa3wTzGgNMFrUvmDzmGkdtdgvyo4A6",
  "key25": "9X4Y2ZNADkxiFF5sqDtfWqRJTk1Tsrkmrqkr51TjsHr4i4fpopTqZHHYiAChT4hsnswPEDyWv8NzYF3BmfXsh3G",
  "key26": "5TbrCo37p6UNcK7DGmUV7LFox8PPC2VqUfJWRLoCpZU8751gs9fjT7sdDcYrbCn1RDwSTFoNQQnpNqtGLgurqRwE",
  "key27": "4aC7DMHWjmR9WDn1XCNiCNRv56ySJmLgdQhbaqhScUuag583fT4cVLC68jXF5gVEPG7A3oN3ngPSZzBDo2FnsUu8",
  "key28": "VzsvoevKpxVAiFC9QnLwjqNbnhjcZjMa5Y9ik3ifFcBW6aNwQCQWVSswJ2Tzka8x6oiwD4Q1Vx32yKAYf8njedN",
  "key29": "4f8LSruYHh87Pt8S19jN2sGp3B376aPUzLr8rjo5m9cGCSvk4CDA6DMKQpF57pQER2JWRdVxRNx8ZUgURCq8pdGF",
  "key30": "23zVTnkbyXAVvMawmtVxokKgCwFj3394ReWwf4dkXvGb4ueu9tXPWA5fvH9rYnmEYCByNYZs6wHBm58Yqrp8ybex",
  "key31": "3i4McTxW1Rtuf7cxSX8XQoDefJnLxCiknDNPAKmJWSXR52LXDYSjAYkXEU7JPC3Xxa3fCF1G2wre86NdmKkdtS7V",
  "key32": "5EjAHFQz4QASZhb9aEnYWTtogYY8SFUUVZBhh8R9fECQWeb2unaiPRpm1NPinXvYEk13F1PAXiuYF1RXwLCfwVBC"
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
