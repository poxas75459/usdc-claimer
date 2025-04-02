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
    "2EbeNKGLLExWM8jGuD6CKaQcyMr3e7Ghy6fzbnHiXaqq2Pq8nxWPHhQtVgYjLQ5rhZUXsCujFZYo6sBzcv5xnuUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rqd24oxytjYvPqrxyQeYtVwR9XpBTZwb9TMzPFQWwbvswKPv9i4hHLbLPXgnSucTLt6m5n5gewCCDg8tUMeK2SM",
  "key1": "u93ugC7veDyJuDn7QZXor3dGExeQT1zYoBHPZoTPncusuTiQWUkAmzAG5gH7xsKqUZtQ8i7tGpz1Qoe5wiwftY6",
  "key2": "JbtZ5LE8gWFY3ypMRDbsP3Bb9qtBz5N4dT2nQ1eGGzncb6F5iXWckBADe4rafoepTaz2QhyPrDDyJESF24fcD4i",
  "key3": "367ofxfXrJ2wTPcPb3BqwCZXRwTjpoe9jvpp1x3hEjkbR8AXEnwRFbiQhSfH7zuH8P1quuau4tFoHHCL8NJJAZoh",
  "key4": "2Avufs5K8QGHxDAPUVYBtsJK8FgE33e6ULxa71k1XvAH7XthniJ4vqnGdbqyzErckzw6QC7vnuLZDMf8Lg7bQhyu",
  "key5": "4drNGkr3eSyiaKvwRja2jAjjxq49QZ6ab9wF22zGw55YKG9hjgJHHMg1bApSwWiLz1wJKLp9pVnhosPsYsbgG1bx",
  "key6": "2iotzzny4bzTv2KnG452HTBmN4PibdcEi1uUrrb1izGUVdmoXEKniUqdu2zUdZLq4W5XM5ABLMSWaTjnVuAYc1mK",
  "key7": "3d4aYqE65rVxyRKkcUsh7QdZ56zHeXiRaaDmPAiHRpVYaeh3zhgdJWA1GS3zMCmGXY2wbWx8YAjWPVZZSPTCnt7q",
  "key8": "2UryXv2yX3EwKqBr5gBeHPdTTqJUz7iHqhnq85GKWBn6RwmErhdf3A4ywDkhFUDnKN9AQmgeQyAww4MnSbm6hqSs",
  "key9": "4TtiZ9CsruzjE9VYjU4esUcKv6P71zWynVpguiqGg8K13vpNJF8RGWdmQhH4kb54AMPwoEfmGJ4RUqdrqKfkc5tq",
  "key10": "3iRYzqC5DaqPwm5HFPMjJhndx6xvpurjKbZrB5KgTjgJpTJ3WcfrBTdX6HGan7MSFDZFAg9XE7zhrdivQeLnTzio",
  "key11": "4Xs4p6xNNzPNAFJ65ng2zFheUz7jE2NcJz6szocpHC89V3RgXXT8qSczBN9JVxCYaXfRPyBC3qv8fnrBTVbFQXr8",
  "key12": "5Pb9hmFvnv7cHr4UzuvcCmJTzs3dwR8DFwvhNsPZ3hrCNfNAN9D4eoqVuAPsz5eCx2MyJVa54Q8Ahd1DxxzGaG6h",
  "key13": "3LedW3bebcbU79bTgRDZWiUL5w9FbVn5CCFu5etsfYK5ukbhGjRMYJfz3GTHiK5jXUjxP3qvm9Q31Q3rGpugdi9v",
  "key14": "2rFinLJcxAck7dPMxSQv8C1esVVbSMnYJsWK6VvosaUQbLWuqXBxBVsEWXhc2q5frHYNg3x4A4V3rEoHszfyG2im",
  "key15": "52sA4buXdWkJAMEzkn9wMzhhbfeHJyd3rLHAe158diTGJWX4RZ9nBzR7EcPCJEUuai6R5cq6p5wCAAo5ydtP75Wb",
  "key16": "2otbv3XQGo9pHvbmwB8u64eDYewvBpXxDuqvEYZob4ai8UDri35R9sMVmJvKqCXyVX5WCuJGpnXNyKnwb5zue3aM",
  "key17": "4XHZpGzudAgpPteYE9NkiRsxj2HgUZ7oNZU9p2q7PCwoRPiU9H2tWaWKxexrzjzNFLpL4UyeZA8cfW7FFviDhnf9",
  "key18": "33UChWVniug1ncZ3FQx18XAvbNiZtcP1nmomnZquiSfy7k6x2yqs92RaD4NyqNFHBvhqevMnpyh3RLLKCxp9Ejs2",
  "key19": "58Ua92j7mtaBscTA8GxTJkkutjtijtTVocFd5Y8uxQBbsboqL14wdMwDmsjQkk6nTgiw1Lk7Kvhqu6uLFYhQDAfU",
  "key20": "ZsMetRpfjcFszyUdVbkyVXdLvPrm28vojWx1vGz6w2UEsXH5wu441CzScNyHpocNo4RVCeLsgoeMk3Pn7XHvTwg",
  "key21": "2WomAGTgjNhtGZUXeJt4meumKAfynmEsabJXD8qa9noeXrZiYRuk43UQrWu6NBdSNYD6BBCyXQSAbAc5sW5mAnhS",
  "key22": "xCnzPHcSUN1piP7uWriss13nXZQqCVvcg8XbFTEugGrZ95KSkB2pX5vGF3aaRAXhYGmT7zYsqBpyXqSc3McofyK",
  "key23": "1TfR16ANCHq44cZoFGXhnzYNkx5g8JFMVud3uqP6x6fj4rBWEs6yARai91hvJq7PtJJQJdFeDDP5ajJWHiHbHgQ",
  "key24": "5kUhfNwq1Hnf4Zh6wUZYXpKw32tELbvtcpmzqPgRZHGXUeePiED3qjXKFQ4ytDdE7NKW1kkftHD1gjMyPvMaF5eE",
  "key25": "5qgFMFU6zmov9fCMPw9Y7kUHWe2PqdRpiD6fBZPENaM7kP3hA36XkzSw6YqSNahVzSTZRJbrBKR2UuRfEA47hnSD"
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
