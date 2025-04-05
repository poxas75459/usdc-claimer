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
    "4VaMCfnu23sehaUhz4gRwgJ72cRGYHBrMxm7eRNYSTCgARKzaJousNn2Z9fCRyUHFtsM6e1WFZoewMuZ5C1atjTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kZ6xgEmcrcHPtkRnY6iwUYcGRXRQ6WXHwHnK2iuhEnsz45GZacnGTQmrmzFoKdBT2CxiVhSxJdzUgHJUEoMM8HN",
  "key1": "7jmo57Dd3uPwxCQfjbHsCyrp9Hfy5k4ptB4Po9FpaUXkmgCyF62X7tV5jBUVcBziXFD5RMf9j2DSD4x25Wr2Mrf",
  "key2": "4gJdCRQQpFX8ssKn2i4YVpNaJkJRp6AAEZAG1YpV8F2kq6Nz4v5kzfaeie6ywetsTTV9CT3CDGidFgKv8D13iZ3f",
  "key3": "3ixo8BMgRdqFnewq8QEy93au1a4oW2pTeBpaBKGifvGtcfUUJwaGNX7qB8s4pduc3uD4KvAjEJGFGPgb9RYcqDsz",
  "key4": "4CdrBJJjzHQNNAqdULtJuNwJT8J6MBhcziXrQzeL95HSMRcSqfxCD4c3nfuwGi5nvK5Lsa81TFbM4teBzP25xAh7",
  "key5": "2ANf7YmvQ5bRyDZKeaN695ZBELh9aiC6ni4XeZ1vjKfLafTUqbHrWzg2RxePcNhFSbJJuZpfEmoB3ipMo8a8W4sv",
  "key6": "LDrvo1UVB2iHJkZFA6JZd3kkdQjbSVpmobkiRMUSDYZhErb7MFW9FYM9knKVQjWVzrnQRY63URw4QjRHxfA1hiw",
  "key7": "5D2nSpZihke9Xgg8UCUZbmE2eDehmsfwErYzRwExn2WfoMyknhP5wQX6U4QPfrqYqXN5DvyxWFPqp4Y2Lcntu5Hx",
  "key8": "3nARRr9e4drJyBjwyCNGjCSXUNmpxgYXmoC9WX5jqAvG4q7NRf2xXa2KhBGjf1mDumeBZAZMmFTTRzQ9c9uLwNsT",
  "key9": "2eTjerju8eFoHxpa2iC6HRQoTVGZsEyRBUDG5RmSJuVmPYFatkt9YeYKEZGZMaXp7JmTEjyNZzEgqSKGvjchNrLE",
  "key10": "4DsGxBhxmwRdhRwMTrfPvTskPTcbaJffVWwC556gNtjcudWZJRCw3WLtJk1puJkynsjKiu58wB4MTsPzKS8K4Roc",
  "key11": "4mAYkJXnXU9JskgP8yuS7WbCvVRBkev9jaZN4TRdQi95vvhjCDUX8NhkQKxcstFvz48s2NooyaFDvVvrXu79fdDj",
  "key12": "2moXga83DJtXyAcwkPXyUfgNNSJoTZecSqSryrQqyDzHFfAWBgsG1VCgnjWYc1erCeozD8dxsGWop5Q5XjhH9yZh",
  "key13": "3tgGA4ednnzmRM2b3bNUx18dZXEsPR2z7eoYuJHsfaiUSKQw6ZXyQMsT9gXZc2sHTrRLMVhgoHUw3d9uprxQBzAs",
  "key14": "2apLp3Y4WKFXMU7Un2ce7FBfGNmfvqpvEMbzbXkpzeyH2SMLWker9D62jDzbE9Pi9jYWdGBoWwpY14rHCybsijWT",
  "key15": "5bBoWTqZoNCLz2Aerd9T7dfMXAR7xgvh2eNxPk78QqPpoZuRG8SgV4gYgwuC2kXTzwq1jBNDaiL8aoTnVh12xZ8j",
  "key16": "F3EYsg5WgDqJYfmZDuadohdD4iRYpM6wgPw6jrEZZkSDktzJkMmnVLaFSBXQjChyGDzALkZb3f7d6VgxTGNuqZy",
  "key17": "5R1nHdKhBnC9oWSPzMmmUhBahKfTtjF756R1hUu8BssgtYcPsevX4zunHZ9Hmg72wdiiMkoSnQVLnb3rrZbhYLzv",
  "key18": "2FrA6VmkoZwDy3cuc5xU8EEHEgmXuB3wMADTUgNNHQQ1wGc9wLEDXKVwmdcbPTkEqtEt4s27D1Bha3NcoePAueJ2",
  "key19": "3uwcrWNuYCX3zBcxPZVFrmoSdqn8a1QK69QrX4DhEgE2dVi7Y8K9EokpmuUnc9qgevpzBGAD5tMf6XEPC3o6ztZL",
  "key20": "2NdRBHcCEKdKDiNffY3LYrZCf9qNPYy7Txedmh11hKsz1WhwmfkQY1MpNDUesXQBEqwRrA54PUCspvRoLh5mr7NU",
  "key21": "gHRdu8iif9pWqhXeQUiVGxMAFRfKntQ3UkaMV7uHFBLbcP8r4QdoB3No5kJvuxUhfhpMMxPH95UssZpYaryi9Un",
  "key22": "kFm6AuNSFc63EdeHyBNaBom9xc6hVVJ75jUJb5i7CR5h6LH5vAoiqVbtC2jAW65Cb89uPDejj3v7uNEou6pJQh5",
  "key23": "4M31t5UNvGvKxVVMn4eGbCnxkNqCxcTGLenj2YHkAHRPaMTZ7MykQgC6SzuQmHCywmjVi6qHHmeFT6uUY5g6GrtJ",
  "key24": "fZYZFaLcbkViitzMg388NFVPdVHKstwskMkY2CN1xLnUzni5WSjdK58zinnAKxsLUdUBR7tvkWrZuAZHiaZbGxh",
  "key25": "2hhuNLdTYeCKXuJBqHjLb5CSVxcARGdtkq1h94dqh7ZoCCL7rTbYj1ZSrh7apmSRwGviDFwyspccBu55BBtCzpCW",
  "key26": "4DCroDrnvkoCcgkxmnykNLDRTetr5DzBYW7Kh1EHZciHQECL9eDyoTGHJzqkxbvCzun5WpLu8xGyacFHZmnd1iw"
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
