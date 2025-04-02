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
    "4eCWFsP7UBbKSmhFPr3KJNHEzS5wzyMWHr89Gq8M6jtGUhY2yuckrcuCjmgqNTZD9gRRtmAx2EkL8G6XaTUxa9Yp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oPY12cciV8n1LgQdn8EQxG11DWVvN7q34w9Ec4fB48uzvZ4xNUWSuUM1VFEYawoCqPDizzg4S9kUNGKUwdsiQ9e",
  "key1": "5uJBq5Pra7PxzJzEg1heYMVjdG2Fui2xS4jrs9jaR3RMbKADAfRBJLdS5hW2EMj4FywnzoUcmrkuqNKzHCXBRfpt",
  "key2": "A5zumbNbMWKKmRA2rvY3dc8KVqgmfm6eAnjhp3Q8tChJJ2Xeq4urcc2TQGzKEF3BHRMGsp13W3iTw7V1SJSwq89",
  "key3": "3apdmPD2fVCdSzmUp5db4RiH8NbR9X6a1GJJnCCC81z7JGawXfdREamSCmin81mRhwj3aPvZScPnpPcau4fEPLJ4",
  "key4": "2fD65Q1vgYo6kVjXDP8N4ypBguitYgAr5ofHKuJr1WyxHyhGgjLuhzRdyXMPTbE1qVe794StwKPgaPZpTGbCKFzi",
  "key5": "3tVepWjNZJndAUkn9ynFMPdjczUN2mwcJrbADdoJtmdBQ9pAAy9Mh5cAuKeaBzTKzJJRyuUFLmoczfa7b1t4tzko",
  "key6": "5qn9W2RffbdcsRLq8HB7MJJvSKBFi8Nv8RPWwgqzyFvtDYcDHkFW587rq2tjfzAe7mUYXnP3QWxW69zkeNeu2sow",
  "key7": "MuzmoozdEGGNq1JeWm3HDmg9vfhjaq6jRgbh64F87Q565SoSTySvtsGMMmu3vnqWPaVjFXNAejkbGZM6hRSMEMS",
  "key8": "NTwd3r5Tr1G6uoAp7ZL7jLku5wvYKYfycJKm2cqmTi8FnXsaXVwASnQCdLMKrkWmbYQwUj8ujxXDV8G7MC1kX9i",
  "key9": "5oktY4LtSDXHiX5TC1dXNvQ3qqH8qZZB4rPd9LWNwL8gUzY4KJarHaLLze6TvcfMsBWt9f6RM25axyVeL9YoUyRE",
  "key10": "2KAcj697rgmN2rknbqsYA8385qpDcJEycsXct8JpVTrsu6uzuPjWLzvnLXVLZ84uskUzLYqQxeoC3L4zcRF764Uv",
  "key11": "2JXBu1NA4dSdXDo8eCd1bCceNX3wAjy3fPVVGMZ5AsA4DYTYhmbpsNwMhrGwkCDcvR59psz1tAq8fLqT8B5R7s9s",
  "key12": "TBzoLfUmUQ9PzsKSnJx5P2MMueWayVWJcgPnTKaTotu91ZfY7UGcCnkkALwbY4DEs2DiA9JLnrffPq1HhdEZn34",
  "key13": "3sGwtqEbUcYKDzqGXbqpp4Z4BixwJFEPyX8xztEwvkL5dcGbepmB7WPqf3MPPaab8pJSHHVFcoW3u8P8YNb2kTNJ",
  "key14": "5LAy5qqF4kEeTZrQRzVVYvywwTynLsTccxNY1inur26ELcxCf9RnwLcaXkUVLj9Z73tJVSPrxpkQvnuUVbgNno4H",
  "key15": "4ZcXj9esgA3XejP931Y11JEw8GBRsTAJhC3rJGPTwg4xFRdTjAqwkdSK6u9o4qdQ8s3DqA973snPxYumcNrZXfUp",
  "key16": "5xGyRF9b3p1Qu7CLP5QqcueZXJ9aLpzJj4HBQ4C7sJAvraDovGs6FCzMLDPJiiNFncn5i7qmMHpUDxxvJ2tnqVPc",
  "key17": "2TPH8ySgPYW9MEFWYL553FQc2RUREG6CxiVVHLMjnG1uUMcxNVKRRnFjnsDzMBFqiNKSWyDcJEstZQzTsRHD2ckn",
  "key18": "52VHwuHC8MJCDxJLK9pnFqpX3wej88YvtfQA14pXyN7wYnxSpkEtbEARGwHpMQLs94ZPDfA1xDcAB7Sw4KwY6FrA",
  "key19": "3txKx7NogRznVU3JHy2wCa39q4NWnQ6cDXr4RKyPqoRjSi81ze9N1LEhZNnSB6SK1xRjPsMLaGexeStZ9qyM36us",
  "key20": "3kYg3XDwhPYQY7Ms6YA738JAao6hi8CS9dTD1P5ecXiiAeEy6VMNDtUs1L92JtjthMYwZr7sgXiH5MKZa2dUM4d9",
  "key21": "4LHufCLhToPZtEkfm2STWYzsnkvECt2cmRPynqhLEgJgW5TmQF73CqcB4K9cexKm343dvyxw1vQ9igcWqjcn4mp",
  "key22": "5zeoBFzoidz8fzLiKSDRLGsQctEubGFrPcyKPWzrYdT4tYj4vyrFWu4EQSybcdhymFPbpkyQX8aisHvY556bnwZj",
  "key23": "Puy3cT9ux7RAMoNwevSfbufa9agTAQrZKAQqqudcMgkrVrb8fuLXAWgaj6eZ8qvANSrr93BiBSiDeinyp2FB6HC",
  "key24": "3wbvzwjGCRjxY5vhNcyn6vUiTq58d3pTNkmFPsn8voAU7mWC7cHBN4yfJqUxDiq7q6xbso5ym9V52rMrqT5uiajU",
  "key25": "49zFADA3iK6eVncN6BnUB91De9VH8Pf5prBG23mzUcJ8Bd56opaunR87P4PrspbMXNJh3QMYMHz4wfoziVwSiBjK",
  "key26": "59zBhEwLXNMNnpThvwZFcTkJbegmAWj4b4iNBXAPFAte4PJ1thRHf1qN19WMi36iiELArm6etEk5Ky1BH2JCwfyz",
  "key27": "4kKwxRZXgEMj8eW7yyQJ3da8rVkdAFMZCFd9FLyabcvfx7LaSsd3nBYpXMH7PZQKZ4GuGMNp1zfTNxChX68oxKgd",
  "key28": "29gMobJPRbDHL32HNojq1tDNYHnt2ao85tMe2JpxEv9sEz9XW4GvR2oW9Q7LREfkHBF1QonZxAFXQh9GQGPf8uab"
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
