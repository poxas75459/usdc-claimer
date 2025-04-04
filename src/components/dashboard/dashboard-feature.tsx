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
    "64T28uLKUZoc49wNkdTg2aGq8wc6dSQk6XMv7L3c7n6YFaxHiFjsCfNE6nM8CYitH3zS5ChqYm9S5nd1CoKZ7twG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BvugmzooeiFf9Z5bT1wUAc6e6RCriqH8g25nnBBD2oRyGHuyj8nvYheE2mNJjN4fvVGUA7x3YXJmWhnTbDzA24b",
  "key1": "4TydSwnyxjY8hxqf1Lk68bZ87QpC7phqm8mNvsgKDXGc53iFyex4FeFkoT4Kv9rExjizSeWwY34GPNVYKQTNkfCR",
  "key2": "4GnfqYEjwFTnwwWVcbCu8R53DqTrYmkACER5mJwQdDTsRMtZ7LGru6oevPHYYXLVbCvwE4ijKq19gy66prk1DLbB",
  "key3": "gEryxuveWWZE3GbW9zfyodaTSwqnLMZxwMnFCigHJS2S6LYDtkLTSeawQQG4ZHCaqPQDLECqUSxxsr7KfAYs2Qa",
  "key4": "5a9AeVY9zZHqBVJ82LGfitYjQTwGRrh29M33icWQRtvowBcXYQxaUvms2US4CPK7kgwR8RmPkr1wpxDjxbsoS9xQ",
  "key5": "5QQ4LBRU8eeT3Ab3mL5qi6Pu3tKBa8R7ZB6SW3bNYv6eJQTXmV2b3w2KpvBmtK1ZteeDXBoBTFwEaDVbvhEu7B92",
  "key6": "3hnp8WjAoqPvebwhpJFVbFzopVbPFtjGwuhdwXbqydrsnXUrrC441cUqJsEtbTKt5ttbFNfcfuUbRiRJZ4B8qQZ8",
  "key7": "L7qzAfcQH3YotnvFomRQPVojjiYDjJgArWaMr4Ni5cUDhxgEsQQXHE6wgveZo4PEuRY1Vz3U5Eo5tYiVHSAkDkv",
  "key8": "3T1PFeoJEjMk7quL3MFTZNJunsGJANXUXB4HZLqcdGeK86TdgPdmndsRb1chF514YGFGtCE2pvPNmuLCmzEQZkoN",
  "key9": "4j8KS89d38J8xFNi2JEM2F8ribZSX1c84YRUvWVTE5Yj8zVTrvjM3PWtt93tCdXboM5J84GjqgxwzhXNtzntGoaN",
  "key10": "3cenbyrWPeVxXqen9JKoMyyuz9nX19SnE7nd4McKjvyY5Xh2hP1GkkLtTY7u941d3AGytwePReXUWRzVWnXKhYmZ",
  "key11": "SF4grABkdt7z8dLyBTSRBEfP7HYHcPRpekBEyTrKjaQ2LGVR3rnC8A6S4cHDhnNdooypLMMDCkAYU65mGrh8T8z",
  "key12": "3tF8Q8x3jBJtxxgUyTuwYkSrLjEcGS25Ns6Fk4s3aYJionvgtj1TyEMva48yjx5zJHQcy3vNyruL7CHzMU2m5yjU",
  "key13": "26bayxe7MXjZGQAjZAd8WEtbxadt8aHVL9CSsHpXvSxs5C3ry853YMVH1dMxYHeNcR2VA9LCQok23pPyD1RvtRP2",
  "key14": "EqsjxW3uomD3fuN7g4zxUiw7UY7euy1etC2AjLUMdxZdX4KmJYSJEenUQuw1Q5UdB14WxYjgUZLhqF3S1tqZ4yB",
  "key15": "4axjbxZN9aGuj4X1LYPEP5deb6eYHYia67MxAtLL9rexAt2NTgG61cYyefihV1xw1Z5bpSCT8KMHwD5hruwo2mRh",
  "key16": "Vs36eG1AigkwGppuQgC1SzeWJyTLFhgzJKc6FRZFyV9sPfD9MPQcTKuLpMF9kXSkmZfb5DCbVPnCPwY6vVdCBVV",
  "key17": "3MjJpZY1aHxzRnqk4ofudkj9g6A4Mr41tyMqg8DekGX3TrFN3f6e43brj334iNiPJKLNzXe1PT4ScRUTaLNtVHfq",
  "key18": "3WmhXhTVUTJWomBuLN9Ygja2oQnuA4SwJGWqNNvqv5dpaBmWwQhNvmoFEJ9LPmH4nx4JHyNGpBXWHEMQUoT8tG4P",
  "key19": "37ZDhmYYEf4EqrGWjg38PzHWRwYNLLGED1jZZZwW2vtmCHHPiEBQKSzTFPJdUmTsiaSisYoYuupzqwb3fBsdVF2z",
  "key20": "4bBLM3FbctSRuJJRRa2HbYq4fVGLZJiHKkMiYBMVZiWfprxC2ZVRDqxxCrEFzCYKkxPQ63fcsegJAcjPiwTCuR1A",
  "key21": "26547GjnwnC5iV71BmWbrqzh6F1JodanY46wHyw9jqT2dLbL4pBHQ1czTke7PVgWNmU7UrK6JbbXVbhNrZcGmjDG",
  "key22": "43iw91hH5BuCsGVCQNeq6dmkdrc1btehydUnVxsdyELuC4TaGsTE2b8xrt5DVPjJt9ugfFUgVubcSci943KQCjFv",
  "key23": "XczHhU2FLhSesFxWhKETP6rUYKW6Fs36qofekc5N7SqdRZ87jqnx3QQb9fjPY8bkLmw36ygmyMhPUPf3LUJcZKp",
  "key24": "2ZxedREzsQnLrgcKZnPJofqL24CrhfB88xmx37iYkMb7BZ84XGMg9YbVvhSMXTavW29Fni6QgnqSGfXyf55xH2RY",
  "key25": "4UzDAVJAnwmTm6aD9F7ee4PrR7HUPLSZXFv9kzV3bpzd14J8AL5pXCC3Drb6oK9uT7HYpJRnTM84aisKMv1xA1dA"
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
