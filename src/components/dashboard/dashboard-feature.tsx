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
    "3w2ttnFFq78b7Q5TwJFHyiwTXE4szNqncMv39KVNfgC92ksrjhUf9x6Nxq9B3z1UcCQnkVEJgXCeuA8RUh7uWgLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hyfBB6uoYNvXTTa1HmGkAR3YhnvPerPqkiNoNpKzLw6gkajQgKeNHhf3cF5TBieF1NR63TjuMMDxHy177byKMXL",
  "key1": "2EZ58SdPpvCUb1xgZjqbLb3EmHkHQGEB3Z4CeQFK7dWVVjSECrjLtrsSJW5U2sGkTS82kQ4B1PXaVNCJXYtfoWng",
  "key2": "3GunfzJ6GzwW6fnP7yWmDGBU5sxhjMvjo63Y3Avg8bAcnqRcqTyAmfMCciX9y9nWU4q4PTQgsqF31o1iLB9xYFqb",
  "key3": "4m3RmdP5kanqYmvugjeHNHVGY543NetWk9fK1veEUo7NKiS9BFzLfCub8tUgKLx7BMJAYjJpvk9XYHr2ZozjntCU",
  "key4": "55nbkpG5gUTgtTTj2M246wUn3s2x59Mx4s1edNGsZHJ8vAZd8wdKP52JzmjCqg8sKu7wsECCHfcNbdWHhYSWLH1C",
  "key5": "4a6AjXv6vjskY86AXyYoskvcpA91GCX67hoiQwqjZbErigZMG9VNgSc3H2tnu6PQ6EEJAo9kSzoFTTuNC2quopN3",
  "key6": "55M3Gq2ABmHD1G8bcyPnPogATttwGVvNwuaodHMhQBfUa8fjLyt1aFitvzS9DzvfMYc52TQEvuXahDpc1MqSrXQc",
  "key7": "5JzAXUuKshbZkDgoY5BVfSY714ea2cjLQpi1azi3E3SEKGoDPfYurA6aQpQy3VqLU9QvWxghUE7vB6J6UR37dgBg",
  "key8": "k1CWeni29aEbRhQJ9zBuZNejKqQLihGzs4jKtZMdS1A7mFKbZpPHwKaNuEXzmX2XGfhdUQd3RMD3uLM1adbczZ8",
  "key9": "4CeueoAStdRcr4fVi7Es38bgva14bRAz7TPnV9vhd4yjxB43TrDvUnDkD9wEVni5sbsfMay4GDZ7BfHL1EZKTMXm",
  "key10": "3ek2ukJRRNCkGfV8gVpsLTJ86ozFJXxWKhWRM6qSeAhiCZLX1oM9cZqb4zriZJnerUkLqjcdiJDD1tgG7eQSG9UP",
  "key11": "2i6AdLusHVXM9xdZpugmhHa7MoVsabRnuVBJWkz65KVUXRxQuWoB9re4fzsLBMjvJpmiUh8oA1NuayMzWRZ4YmuC",
  "key12": "5Pf69BzaC5YbtMzKzpvGVVyKd7uzn4yRnCNfzi7gsf9rZFP9TgcT3p2hNBg1QHmvzuj1gNunx9qtittdbJaNx4qy",
  "key13": "5CZN5JQP9AChQbK4j58K26HUqvkvEP8EB7M2gmhA3xifZ4xJgnXKc8FQGUWwzqZMYsWdoS1Kc8gHPAwNXyXHqMDA",
  "key14": "2u6Zc333i8b64XRUgAVuqUKv7B3JnFMBfHdqeV5EXTQzpjUNVPDt9Nh7LUudiRMzXdB599YYqduVpKihw82bPmgY",
  "key15": "5x6ahWd8w5sL5qL6jFwRiwQbpW27T9DPXn8Bihk9DmyA65dpmgo51i2SiPvm9eb8pbsJhp4Cf9y4bkVa4qsBwb3W",
  "key16": "5vcUD4osvZFgqKTXafTeqjMoPvVaKgzB67fpbLDsYRrYvavJtXrYkV8oBAbcW2qU8omrimehbiMt2k7amK2LtruX",
  "key17": "4ctkT5iurcVCQA1XaA4q39SVTn8mjS7EqZJ8LVKQFx3gfFtd9LbqZdvJDmfd63ZwbSQbKsj7whrndKNK46So5rnH",
  "key18": "3dWJ4GKQHvPMYUjRgraMxyfB3PNN6DFia8qDAbRgYm8H2tMybH8LiKqajjPikfw6hq2Uq8aYxXnfyEiQPM7rR2E6",
  "key19": "5Mzhj8YpsfzRC4qAUwmRaTrGQUzYsm48Ba9LHctbVZhs6Wu8zAL4iWhfHfZVFKdyXWh3hXcYws5pdDAhZzuRooLx",
  "key20": "SjLGgwma55qDXT1rwEKMvvCRkXcHtzEcJebFoGktS6Xqcw7tB69Y1rBTqeopQKurVH7wvZHKW2qf1S6H8Tvs1Ef",
  "key21": "2ZiezrsosfiD3jDiQX6bhKp7RkG15551By7qKvUUoC9XDY1jf1rBMy6WhhEjz74zHr5n1zTanSMj7bCNqYD9ToNV",
  "key22": "AhRyovqJTQHnwqeQKYhYngpo5LQUxZfCtiVNQ6i6zq3C7xPMkWnoFHP56CNv4teH1esuLpVbR2WCwRXYmK6LUXA",
  "key23": "5oC19CzMGW4TAGA7pLqp7SoXPJZg62JsxNvKgRxvaaFGTVHZumviMNZwLfubUg1GkBiwh9XbGQ1kcADffXCpJL4q",
  "key24": "2oAtBzYLKSaHJqdNnJeAjbj5SDvfX6xpU1WbTKcHU521p3TBTR29fxNP2jz8XmXH5hE9AnWWPfHiJujxJx4CNJgo",
  "key25": "528CjTEjG4T857EcuV2Jo73cJ7PLaf62HuEJK6oocktAY22CWxe883VTD4Q77LD7GMF8aQo9xopAZhGZLH8MueFP",
  "key26": "3UnFZGFvumHXoxsSv89JoGWWhSMEKhqoLZnxJ56RLg7ivuU4zhMcRBgna1fZPAXo6B8K4LQn2vimmYpeoDKEiUaG"
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
