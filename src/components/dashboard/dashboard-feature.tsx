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
    "2tyDXFXkATGcyKiQSs66zhUBVLFfxKpF5q64JJJYAqAQGYckUzoWYEj6KtC7oZKWj3gCa723idFGjEmAHjjrtNXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h4NBF1Wy8FbV7qUYbap9RAzUGWq3xdxgVL2yHmLecFWXyJo5msiYXBKn5pNXyi6b1svPZBczE4zdzQkar6UkG2J",
  "key1": "5EUYSgXneEPfFT1AuEgQAANQynrYAtA5zTtQP85vdNkJRAmcF64wDo4FkCKTob9UudF4TUgGqd6AoK8TCfn5XDas",
  "key2": "4DF89ZnRmEbVnJsoutzzZWUu1osXhpBfSkd8mQcaafNgEdhKQ4AJhA5dUxRU8B5nJeHaHTqhq18TVbHywdNqTPUR",
  "key3": "3wzE2rT5tW8wJr8yuPf9ZBrsP1zjwHdtgnVH5UKDvZeYjiHk9CF4orhXECEmusvMha8vHJjmeTy7DhQaLV5ShN6q",
  "key4": "4mMtm4jJhYv9qqzxrUu6BbuXVPaqtHKLAM4CxHQrgUBZ7jQPcMsv2iiRS3VHUpD9yikX9AeGLu2k27SmNgHe2Eh9",
  "key5": "pdgS9JY4ag6JxGFXb7fJfcubsTdrYMoxjK3kaXnGtE33x2HvMwqvA27e2WM8ss6T6rvEMDJozKL6Udi8hfJ1mSz",
  "key6": "XRHU27n8uiqzhBxWXgqxoYLe28i4AqgtMmyTMw2TdMFCZsTuD2ecU8KtXyP4MNjNuh8HiMaqWUvQStMTviym4vn",
  "key7": "48UPbosJ3FnYdjfRCKR7BmJSNpPoGhnXNzPpU3ZkV5C8adxKpK1CA3xfo5bewcQ1Z4seYpcD4Efx74duSU8iA8RZ",
  "key8": "3rVuPit4ZK7GeQeR1V1vF56LsivZR2VSQbhZUKwD3SWh9WFuJzQz9igfq7tDoJJT6MkJCA28zMgVaFDmEgpbxUsG",
  "key9": "2L1XmmYrHSFuAdD84HGPJf9VARHg2JbhZPedNoFkan8GpSsTyqXFw4BjNmPT7WAynvkHeTr4JyipEiJNUrBmLTDR",
  "key10": "3bZFCMiUxvUuERPZCbJERwZxh4ZNVYaRT6dqPCP2nsq1REVdyQqjuJJCdWXfYRpKJU28eUvMSBZ91voxXpqXehHw",
  "key11": "3jSdknrcStkbKrrk1A3gumNWdRJzMziEwBxmjnaiMZu3ZaXBTbtoj6NwU3HofFV7jndwDM3JgTR5EJC7zEVrbBWs",
  "key12": "4xFJLptru8d4NhnZTadkx6nqQNsujgXWAFhmVBW8BLUCF1A3bnvh66SCZfhhDgtWVDDLVsEPqRcuTuF9TiyqWbQT",
  "key13": "2397fRhZYHhKE28gzDteyyeaqpE8L7kKVN9f475V73T7fvC75b1DBgyfs5dtfCD7PVixs788QHr317393n7TuC1v",
  "key14": "AE76SHPSpGqDSHDGSericdronmFXU8XzTQ5pqwr1sXe56q3CzgPh6NnD6PpfUEr8TXtGvJUnYqt8uNrA16AfsRj",
  "key15": "5SFuZYZeFCVzi4iEp8wP4f8nWzt1eDw6HDybSFsT3dftzfzqK4jvFaeM8fjhQFMdgTeGH1XW45337KHgJjwJZddK",
  "key16": "2GPakFnXL2DceRULpHMQxpfkmWLH7oUcpaCmqWvkEbNxo1cV1y1JSu1RvizspF29hq3uU55ZF8bu5rQPwFGwVeES",
  "key17": "4TuWzFim7Df3VmPve5zmcfpWgZSBjp8LLbYbscBHB6bXmG8P5sXZErMCGjTpPdtjMM4gWqdPWh9vgnB4cCenHK47",
  "key18": "5Yr9dT1Tfixn4yPep33ykPfpJP5TxPzWcGY3D7WpJ5dBW69a75tDUurVcpCgFem7aHVwn67uGaL2J7Ue4C5vz5yj",
  "key19": "YGdMsv3a3mdk7TayCNBLwqEzkj8ki18G5jSdq2iQ1s73WR4w3Kyb2vNtT2PuKgkjxxgnaqtvXbqjj48LrXq8agW",
  "key20": "2eE54q1NQbmKZpRr5Gwtpmbr45aE11DD9jA6RTqHyfNb3cJXF7zXqg3UZNLf9T8zmjsWqeDed3539ksYGRCg32zm",
  "key21": "Co1kfMqbktEm6hF5rDQ513RHfT4iosmXpe1Qyz7EKPpozwqZRKiLGMsSbKniipCPVwcMBAsGJdko6XYToc6Gxxu",
  "key22": "3jnhCxyNqN6742viRSoS9fixnQuVM1tDfF26rzXQ8NxmZSdaCZrtEPSifMofPtJKJsqzYDXfECYN6S8Ev5ZstnW6",
  "key23": "2yLuMKKDkD6cquC5GJR3LbdGm5iwm8bMyZbaG4CEqvx9t3ZxVcw3bYotARKSKVqFzGjL2TMTrQxyReiAw1czxcbD",
  "key24": "52XLYUhBUMsruushMS7fSY8kLkp6wFwFbJ7ncgCxgdNgyth8zyMz35Yu4Bcha1PXseRSEGzhdBxgha7umcchinDd",
  "key25": "27KWACS6KuH1feyGYLTLB4UgqAoSkbNy8AWzHHZg4puVMbbQ8Nc9tAbxxKSYNMgfcV8W7493ts67yhwTFFjg9G1c",
  "key26": "5Hz4hjjdBtu7W514TrqHGWj4xkb9YETsbP9H4gsAD9FXLcDV79AcC8PBa5EoiDKqm3Ehc8jzTM9fqmQ8MxQmvz7M"
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
