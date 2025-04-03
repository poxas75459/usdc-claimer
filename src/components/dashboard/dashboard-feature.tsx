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
    "ZMu7DVQqQa6ooPMh6nZFM5FAMSywb3ZGnQz3NFQbHyfCRQH9MPn7MHbse1aQdu5mLu1UDowbQepEfZwvY9JfFtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tLRfUVQmXVnGEgJyTrwDnTz5893SVQGaYFG4PTeztDfEryxSuCVDjEyYwkUYmw7CyXnZrDgphtTgLRd6a1aBhcR",
  "key1": "4K5uNz5pFMucPtuYNvDYpFTK8i2rQKS3oxBUkWNY5XXn5p6n3ic5ZzvakGaj1d4acZ7KU6ZGJpRoi6uYL5LGyfJs",
  "key2": "34iA4iX5v6x9EqCvmN7dAfrNUCmqmoVP22ySNgiW9YbgrpBm82F81LR4PSf3KdFCwn6xRDAuthhNLPsSu7DDCrEN",
  "key3": "5ryaphyopKtqbevmGdcjYMwBHbCthDP9xJyMNcs3xtsUtjnmYJsbmC4diP4tVMmqh9xVQ1nRXZYwKFrDPt8mTYMs",
  "key4": "5b9FuJfumRVr4LtJ3rd8PQ7pbr9jFztK1t1qtf5TV57biyrJA5iRJN3Bm2WE6UD9zQorc4ZRPWCYrDJaxps9QUnL",
  "key5": "5hQV2BqvitYmViK3nKrifkBb4CR5Man8JW3sfKZD6THyjEfykJ3kQT2b9KonEeq9AQ9cJt4ixWekSYaK4FGruENX",
  "key6": "5KHvoP5gyyNqYCkLpA21rGiCtvu6MNndNrvrgnyTZJQNW7w5aT2KDZQ6W6D9wHQdSbnGvhxULcaK27Wg75QCGzvn",
  "key7": "4bgZ4CWMuJBRpCUe9yuAFgQKBVxygRhDciXT2gcFrTPx35xXuCdjT4zwCnmpWJodDRAFY75AfaWPM5atxpEfz686",
  "key8": "444xT9Fdq16GQusWSqBCqJCxL6nCd2kHng6YV8jybQuSfNvBwV9v1pNg3ebrc9gWR6zDXdsEZGJ4roDNyVPnGLRW",
  "key9": "5aPwjqQNgxHP4JJSwtXb3WV6uQ31WsPooTrh68ssC2JCbvi2wFfsoNJpoF2vKXbj2ttARRExZCxiE1oTGMbRZXi5",
  "key10": "rPm8mXLWzyTn9eVBrWst7xzCViMret5hHadFypB6NmjGBFKTyKm8KEz8j8DcUbs8WkNqwX8vG8CeNKyFbAJR7Lj",
  "key11": "2GqSRpd98tS2kEcovhJAz3U7bbVz7a2aciVAnZDPhgsj6aqnrf5wQZWUppZdLEkFw9sWRxfCVHTPwRcAP7cRykxo",
  "key12": "3RrFXmtHkbcGFuJyywVVp3JmAmhEyrFXF4Xgzaze1EksDvgaHg8428LkwgtCB3MZ65ApmgpNGeynDMZeUqYV8Uke",
  "key13": "8NNeRUnogFk3QgjmUTLT4XCsYNrxiUJjBCWvC1vdBsKC7ANa2jmMjgvAJc3Q79XbTsxqLYt4SocvmKGo2e9h6fp",
  "key14": "2gQFGf1e7H8aqGBLWF7hFMrpbQxj1wdDViJZEtMNnJ5DMcMg2P6GKG3jWNqAzzu8Q2BJSAT6i97fkQKxJPK3imfv",
  "key15": "33fF8RriHR5kdjaD32YnUwURDzdK6Wm1LGbPJqXMJEbWGR8rejPDzXZFwgaennscBVFQeKhfgAYwXUjP3MiJuDbZ",
  "key16": "4NQE7uYy33JVNmPEk1iG3kMcKpZZ9F7QZFz5XjHisd38qdQnU11AfbFetWnJEvKGAHNRd3h3zYL2mKTDoS46JUei",
  "key17": "Uc41hj2fVBhqJQ1utsskc2yrRih3jGTMb45rPeLU41jdx2hW5wiyhzJKoEvTsqDTKd1K2hFo7ZFjyUsgKY3EhTZ",
  "key18": "4jS2FG7utkeeBUoytDGqTtDuwxroH4pbsX7uer1Vd5uyazpgFM5ZosJLVkt1DaNh2U9dTGYgPTwjtkbHRJnHs2a4",
  "key19": "5QVTb8xqPKMm8vBBGUvxrVrAc3jksNjH8d9UXHCiu8qWznimNseCqX49kHU162H3VWE76h9iX23oQ3YJbwhaHiHf",
  "key20": "5P5HtJevF7aN1vDe7cexZM2BPoEXHJZqZdn8jtKQKVp8a9NuZFTCTsK3iTCvjPm6XaoxNTJy4Cdmh1rXPq8a2nYJ",
  "key21": "nVuTYej6gonGnb3s24YJqd7TD8kYDHEjBqENdoybDZk3SQXc1TDHWhU79xGU9b3in2d9ifCX5hSUXFTz2EX9b4Z",
  "key22": "5HXaBbNjEV99sATZJABUyZkwFRik3spnamNBcZe71dws6EjjKEFYoVWNMbXFHb5Z7WXafwasMNWiHBCLZJJQjVHz",
  "key23": "ZmupkuMJxx37nFH1jvxS5WvTifmLwzribTA7cywUGVBvVZb9vTjyqPZJDc4FBvkSSNBJJQPr7p3icMBtWmNANFe",
  "key24": "jrwn5XALAmJSEzUtZQeyLQSpGGFTfEz2Y62U4hBgZKVpMRq69fU1dN8izBnSHMNwjJMqjJgE6EMgXayKHjjaAje",
  "key25": "5dtcJWYxfFpRWDVadNz2vSC5p3t6itYUtR1w76xuobV1VefdBUuoHyjEfuWLcBAgjD9v5J5LTLXHV7UPppSwAa4e",
  "key26": "3S6RGqqjCcZtqcNRCWsR1RSVQbyETW61tRkb9Krkr2Gd9FJYe3JKAer1uiww6Bhkp1SkFYdQafwWrwyy5RWPocgg",
  "key27": "4Li6QSA58LhoV8N9vc3orxDhzM3N3yD3BWvw5bTq6X5Mhg1YHBmxif4McaE8C8sQS25SpkfQQKjjFvWHk45sGmbK",
  "key28": "2fHYGbtR9dvGiZTQWksWsgwykL4cAgDUisifFBJptaAbjsgj7U91Pns65HZCBLSnfvSHbU6Mqfu1R8gSobp8Pd7z",
  "key29": "4zCvXtrKHgmTQzJNXxQz73EGdTgKLMbYmUojiMWWEGnBpV9nRmdiamocXfLEDJXT83KXEW14QyXTexcH5A6MCmSf",
  "key30": "3dPjsh7hbUTgkwGJAfCYCz1KwkZR5MTEjnGsFajiqbUgRdGRz2DxXofYhbFo1zjH4hXQNfFTCGi1PwoCoYT3AtMC",
  "key31": "LodUm3C6pZAaKkED7cnFV32KwMsbNs8ckuLAxDcYTi6KB4pF9LZS5nBGJbdYD5hKTXTBgN93E6KSfB7hYyWhadS"
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
