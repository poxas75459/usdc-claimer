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
    "2KJL25uuCZN4qe4xHFbk7pS1sXUJtjkiXu6VMmY2YLdN3iAZJVZsn1SMNyE9igyLzGBVAEQrRQWw5P3TjuQpiX8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XwZ2jRVNoMQUvivMoSFAyZCv8k6mhi2jzi6TRetvq8AkjEcarjaq8VD8S7p4FeuxGCjhP5gtfgVu8R2KyJf1r8w",
  "key1": "139KxTB6sCmCguu1XRmcHtfK1dA4zK8bxmT3xZJTz8tfgU23vanr7HChL5KvwGZiXQpCiKwoVgKRmNcT1G83Ew9",
  "key2": "3h1Dgi4niWc8NYfsCtVkvbUf3XPYY77m5ia2pTe7cyFF1WrwansNh1E6ACN1ENUX33rdb8YDnzeZwrHcH6AgvbZC",
  "key3": "5ZNYmiv7px6zgskcSm9rBqSG1ry16fDW5eytRCRxqXyjNARrFqoQHeUjmHVd3b82Bh8E4qcMxsHohoMMqdomF8QG",
  "key4": "2P9BZH7jpHCyaeMaH6q8Zhf7soAozrYACQ2RC3ftTNmUgw8ay77grVQeux7mkoHQ6vBiXEs8H24KqBebBYxVpyz2",
  "key5": "5aMZDpn3iPeP7ZGTs8oyZ2QuqhSyryFRgRg8s23HYMExpBUxLgC3fxYAcyw2t1EFrGSiFNyKGR4b9mJB4hfHyQP2",
  "key6": "HqPpkrPoHHojiUvDTTGX9eGZNgNEiqwZxJbiAJ576m5qCEKc5ffQ6NzCLBbwmgXuq6ShJWHUpxJRuZtXPhdbNxJ",
  "key7": "2fLNaGYFvxn8rEMC4HNatNeL5aFJSaVa9TQz5fj3Hivncyd2q4yNHRw5AgpyutwkC2jz1dM6PbDn3CdNHe6RuugH",
  "key8": "2SXiLptMHJYPk8nbprqQkAPJoFQzsKx3Y7nSGxZGA6cuwqoRCiS751tz6BBCwpAQ36jeZKo4Aoufw8p46dHPcsXo",
  "key9": "2jeThVjYbWt9xefkuYUVLjJHUNz8FaDtYDUDMnYKFXw63GwUPGVZefLXiJmtb5MU6ShKZJ7A4bV2Pnz5WGi54gPh",
  "key10": "qgYaNjEg4GubtZHcwgsdxpb9wckLGnqWYf7bLoqxAGSUcosnuRVfLYKEbHGFRwvAW1zHAYK3iT4qYSCLGjTgYbp",
  "key11": "mUEJ3Yw9NVg6xTWpsPMTgyLr9EWbkQpPfSeY2hMEyxLhCkRrQv3tHj1GWRoJMwm1DBEx9VFcNHCKvtt3rFkHHiu",
  "key12": "5r52cEZFf8sHjJadf3e7FJW7fv6cqnXU2kL8DfrTErGUnDQ7VgeoJL3abEmFEFPazovT8CoerG1YA1bHJkrUafXg",
  "key13": "34AF3hq7QMrdAxgHk2Jv7DhuUuCJDZdFNAYYgFYejQsWT8H1kpEBN1HViYa5J4jVJw9Kny64vhaPY42tb4k3mdZW",
  "key14": "5oFk7negsWQWzpExGBpjFdyq5KfpTbg8q51Rn7bFP8DDro8mc8RkQZJ69bfrezaAH8hxTpQcvYeiGxq27UCHuZRr",
  "key15": "2rJE1yF9549hN4kaHrUi1SCyKi15dxG4oC2jUNUieSy76z25qkaB2ecy6vrKRwiZAWiGQBAcsNX2bhFwXnXQD7uM",
  "key16": "2DLERExTQ5V9ymEpBgPhRzEp4HH25wiUuVdF93LtdwgUmVkkRNFc29NXranEMKbCR3gXPWs1wd64r67Xu6KRebm",
  "key17": "W6iQKSdywFyszJvWk8rPFztSWUN4FNRQRC7aBXGSyPCQgM5Vi58BcbpzF5D3oTPtkpbfUkr9XuE1waXH5exUuVv",
  "key18": "5LJp9rE6aL4xVU6BdtLPgphmVfc25QgP4UWpkWueGjN1dVn6ngG7wA1L8V8qq4oRceuqGveopZnV65tpPYWBTDDT",
  "key19": "39Z3hdA4i6L792m4zDY9DLJgA32sDJu26NAzNQ9tPZZjR8qw1DuKKioEYkHPfhs1ky5YPne9dVRYEZmyHLCAkahq",
  "key20": "25rHauLC98KRy6CBTmHkxTKyNjJXSAR4y8eb5WuzzM7GM5AqEUtP1cJwbvKe3CJayWFNrtZYicbnqFViubpXiwgT",
  "key21": "4druQvFbY1zNaRTaBP1cfe7ARvez8Wybq268hWGge247CVtJUY2Z5tRP4DkUPV8L7MwgEjdLi12fQapRFg8fNVmU",
  "key22": "559XPj77Z2SoP9W2nM3Dqo7n3mvVZC2NPJ8GpG3oxMCkgSHyqGdFwcLUtyNmPXrwVmrsSUTJ77s2GJ7hHvfCN6du",
  "key23": "jm18cLC9NJNJt4FJZwFEN6wTJsidP35kBjeMxqu1bDgQM1QkX9CCn4bqiehsEkCqVsDTudDeP8PY7PkdStf4ZTk",
  "key24": "5YL15arfJjvJVAGQS4EkAG18hJdG13AJQDAgRot4x1ADzwpghYQexoXV5xKKhjXmoRhJwZ75cWNz6wbv72EEK41t",
  "key25": "5ufuNEJuwTXaHK48atFKNhwd8Lf8vLhCKAJHi3VRnwC7RaaVnfojRR5pDPNdv21Qs1zByW8nZvXD4wjw53Et64Nr",
  "key26": "PvA5UgbCzVXfU4W88ewGoAPQj2R3iQjeLzopMsYDcNgQfb2NfE8a55jSyi3vuw7TkpcUyMDfCffHkxVwpjEvgVi",
  "key27": "5oeQEMsT96vxF1xJgLmNDbYrpiCeDngCckyxcfyspM9LTeFAzTDn6qXsEouAkD8hA6ExKcjQsxh8VmgzRycuhXxQ"
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
