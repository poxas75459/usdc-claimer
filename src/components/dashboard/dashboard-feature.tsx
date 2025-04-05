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
    "UMRDCRv99SLRPhUHgkFby9shDPnpcHcQNCRsaY6LfAhotDvpuzwekJgfCUwk8SEYENpvHq6xUUSTosFNt97igKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57HAdVYCBYZm4BbZeEm3VF7j4X6Reruy55M2UjGGFiYPnFw686BetkqPbpLqZDHCD5JfwSh3DH4b8GQH4tQHaFV2",
  "key1": "67DUHoZ84H1dYGLRbbeEfTjNAAftU8umzG5ZGhKtt7JJPkHd8kzsWhD4Tv7h5UdxtuyfuoU2LsWBQXFrYmaJNTzW",
  "key2": "2cEVs7Fb5LgzJimd4UXDFszYjNC9X2nMXgqJXY8J4ao7nrSBXNVsw7t27rbhHDVDQq2ijnaBtuui39sisyv3qNfh",
  "key3": "4fWnP5KDPsfPDoHeAJDZ7RaJrNtjCkCvyAQFnBgxZkwcMFgZLuBZVGzAhLbRwHpLJyAq1vWc3RWxz5M1KotBr4wc",
  "key4": "2pHk276JMRi4yXGWsuKYrSJPL1wP9qCt5nn5rBdDUPyuctoyxRQp7Ls9qYk2W2NVCmneY5B8QK1eiTxPftHT1BoN",
  "key5": "4U6P4ES3iJvNsRJdHWnpKgHpSMe4mPiZe3eq3w9YkreTaTkhnZCkbCAo6MswzCAub2NYMoV5Xmek4aGRBDVeLiKE",
  "key6": "5pJykntSZZDSqeDuXPU8KvvMA941iJxySgg13KSVFhNxp8z48WJhq1YA2ry5atnAXhkh9FAoKUuCXAUiSKMAyvXB",
  "key7": "2zfdnzpxVAnVha4EWpYmu8Eq5XYPu6j4g14gka49adbbnBRfsVuUjz9Hn1qtSicGeVPZV1NfRRGaCiAEphVLhZpA",
  "key8": "3FHkB8uNBePJqjw29E92CCyvKB6KtgZpfgcuCTrkYfxT39YFz6A9rznz768eU8wHQHmFfZafN3CGG2R5o18xqFCD",
  "key9": "23UQq5HSFLGrGbhCmiLKQUTHEwxnks4rd3up8zrMMynzBMYzTxxsEbTnf7wCCmyz8GeAu5Nr3yHuAhwEH7Ktv7dr",
  "key10": "3GPFRqtPVtjH2NyWGzniNJSRiSviH3iyFonbWJC7Qy1vQYGwCxtSWFhn6JBemksjWT15Em4PkJJu2dtRdhvVe6ZQ",
  "key11": "4RR5vGMvKmFz9tHJc2h7FoUfJprwyRJPZzR4uRaEazbBeipso83Qp88nAqdbkQCNaNgH2kE9fJsDipQKCCjHppHQ",
  "key12": "5v3WMLER2KC36YuFvgZ2EJwdWJYYTMe9JWzvLocXwHry4iWSLrsugGWneXTRQzNWY2Ue3qYAwhgfPVQH9Snt4EG7",
  "key13": "5ehZLXxgDBhvDPk83fmdVi6HzeieWSiJVNRtXSBP2yd3tCQB5wXRS3V9ySQtjLGs34ry8i3qmBBvk6QmQ446q3jc",
  "key14": "3JiF7p3ntJ3BJWsoHGQ6FpvJL85VjGE7FunnRP2qNJSzevRYdBLk4zn9ciDFSH7Ga4zxDNhhF5FPpgxEHVB4JAjP",
  "key15": "5Ui9McXCvZL9pQ8oeQyQB6rc9e6iCFxxhGMGEsCxa3Mr7dp73YWiQdHYwpZDfdb1qWiiVcUMW4n9mzRBUDFWEMKu",
  "key16": "2ZvyTP56WgmjdYAQjvm2YqwT6PquR4VhQNNx1UVxDJEKZvDJNdHdNi2ibi1zHDKgrdpy79WvRUHvC2X5firqLs9B",
  "key17": "3uHaKY7ptuQypchaAWeY9RgytnRXcpebDztrciL484QR8eZzrtpL31YoSEeHj5iLUakNHXZbZG5hMA7WQJX5Len6",
  "key18": "3EaLPRBnBF3v6Wyhmw9oF7B3Kq3Jb2LoBZ7Zd2NmgERSmLmjzvo2FakJb41TzAN4QfPJ5nAaiyYhZ9pNiKPmMiQw",
  "key19": "379n5Z8urXQJVvibMsZFksj25oLL8Cjv1Z55yZQkx426de1nUz1ySnkhcYw9K25mDge1cL9HREPixt24M1panxFs",
  "key20": "27Jm2yjpxfWGpWrvd2hpHwxELqwHaZYLmc2vfWPAgactAedu4M8fKCyKc7sKXTz7H16JsArLLNF15CnwUssQ27bf",
  "key21": "3NTxva9jFbSvm9DSFpiE16uePgfVVAuettm8HAPzQf9LYtbViRcp3f7PuPePcRSrsL24pE6dEtZ4RPRMgbdQTgqk",
  "key22": "4qQhQztjuuXirMbAEnq7JvfupBHmkrYmC3jNuQJpi8GLuFmbPhxkqCTHppQwEJBCs5hMffjhXz55vXNYHo9GDvwn",
  "key23": "3wEWKfaRv9BLQTmBTGffR5MQ7TGSe8MZDPoB5jXGgRFzhE7x3Jo5H2foS3NtUTjySEdaYGeFqHkUbyZnsYScQ9dy",
  "key24": "FhoQu96ipiGQjQoUFazGPk7gvBw7cd2u8Cfm7duYYjnWEDvdwiBV7cpfBPZjEYqFic1Ug9Hr1JZyhc4QqWDtQc9",
  "key25": "3JbKD1KzLx2caetaPDwUffzVq1RebwKiynKT1ird6ZHfUCqEwHn5KFHqKLfY2XJLw1XMsuvmU1c8igvWTPRRnoFH",
  "key26": "3u8LSf1PHU3mWhgcJrxG4JxGgdf3VeAHyNgia2eDTuMkhknJ6Kr5dwpwNUbvTmsstbK9yrWJR7wWLZmYKSSBrFF3",
  "key27": "4TnmGgdRWvrN6FEnkUFZiJV7j7S2UrjQn7QLt1DtXdGe76aoSwYygrR13qvVBAz4aMCm6yRjHLn9yG9LytrT5bg7",
  "key28": "r8W8Y2GTdr2LquZBzkQB1NYcdyX8sLxTdcN1prGzimLsXCH5WomMWokHNsnjuYuSBAYiPpXcrSoPpi5f5CGMLLn",
  "key29": "4NHMsxji34kSFKdyJceYHwbQY7hcXdwz6MGz8bfWecAgrk6Yx9Q5WkqVyRiakYudfzFjwExfpGNiwxcLzxsZChgy",
  "key30": "3KUxK5ZFtrJLnaTTCeaYmMXb5qGELnugnB9QXqf7Svx2raXmscNnV9oDNdrGuvD8qjRvuWE6QNSHppzDnyaWi2pg",
  "key31": "2CCYyza3SeHiaLAcEdhL4ndbrSRGiHNNemjBcPtvQ5P4sGWUFMbPJHi5BiQ4wGhh37ckZUddY5kCJBpTA19Qps3y"
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
