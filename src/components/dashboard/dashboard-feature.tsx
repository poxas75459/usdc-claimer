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
    "5Jv4CygPVs3dD8cS48LjHFeZmhGd8vg3765V9ZKzJKq6yuRhM8n6X4fi8MYTNBScK6NLy99A9LKpjSKBrtCadf62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w4MPHFM27ecbLwy1MjKdKY47EWSKo5G6QAQ7y6sqgXBxAKyB8SKwS98zuATSqC2y15eBubRTSeZ3JUtz5244SQ5",
  "key1": "2ySgPsorUMVvV8bGkuJrA3ejPQ5qPjZMdDpnbJpnew5DsdjAvne9AhphVHsmADnmKTyiXZvwJdpatX3MF41GXjD8",
  "key2": "2dFjoYesG8WuTHsPdq6cdsVo9b1QSgqhDH7nCgTPsJnNqxjeYgt24B4mkAwsTzwLtKBb3o3oNebSryoESR8sY5Zo",
  "key3": "2dVYuRcTmb5DbjZ1VH5GAsCKSWCvG1ywz5eF2LnqgdY94CoDZzH7x23nQVvpfSgoXhjXzf9pgKwKGiGrEi5r2CVc",
  "key4": "2FnFGibm6uBbtj25ts1Xcu9b8paneEyhthaMC9hSaby4QAzCq4MTjNZQDLQJArXRoU4HcHHjLuPSbQwUdgsvkCRv",
  "key5": "SapvFkfR83ioQ1QWN7XCnLBG9u6PwVQoQZAfnzFERkkZ1PRgdb1cQx5zoeZuxdPGn9QqhAVc1uK32JaL3jRyH6b",
  "key6": "Z32NU2Cgy7w5xpSJC5cxfamhPPLfFE3MErDjmA8i3DgjDjb4qD69WmDxbzFWaX1XLxFW3k8FVz6Bc7WbKt8ed1D",
  "key7": "41ZaxZTs6gk3RDS9NJGqLWLecifyBaywoZMrEwpXSXFFasiZJm9SUjDpbPD4WjfenbRiHmsbo6SG5JLH9qdxjwiQ",
  "key8": "48JDnVKQ1nUJTUa2PD2Sq6cxjJrhzeGGUrYpETQLwxZQgsynG7KT6QtXExtPKCTgrjfWupHDzfdphCeR4xDsLi9T",
  "key9": "2fJnsYcfPRUmdS4ydhQGDRXo2X3gbBLhwiSvgibZhYQvBC3yhADgBHLRHE7LGmrxn5fRwS1SAhV6P3YQCTMER2Xp",
  "key10": "23fJBpwDwWGidHcMnCpKQT5ma46nR5DafikERZ46V6Xu3aYsGnjPA3hNvWnTwGnub72UxPBZ4wmWUiJ5XWW9mir4",
  "key11": "GqzJiuHxYKpk5P4g6Am3y7C4kHMv8nkqquoFEWa4QzZcXwehcALkpBBwagEWpc9cqjjjsJ3Y7bHFk7fnkxBNAgn",
  "key12": "5Pk7T3zpJhLw7ie54fQpDvibMS6VYFecETWrrKShf3UEJAVJVLt47dfsMfG7LQubWHD1k4Uiciew44WNziprh3Rv",
  "key13": "27LyBexc3UF3jnZAsB3NWUajC1wzGT4Ke1H7gCSLjgLym6UaBFpSWEvAgDHL8MNWgtyawrYENh8ecybFG7UWTjRG",
  "key14": "F5ehyNZL33kt3vJrqAnYBxefRwarjh5BBFKizy4httPFypL1tE1D61JgymwsrBp4WPNtAhvxeBZTFEApcZeWLg5",
  "key15": "4ACWzXaMTB4dW2yJ6ocjrH5CD51Vg6XHfQUJ4tVAvFDDewDN8d1MkULZdt1ncQ8V8314F8yhFWd25NmZdCzKWJBx",
  "key16": "CJ5Gy5tHkqxFpwxjm6jPUzfVtkhyWPtNHVrUZG8r1cZg3MhrwCcsrV9qBBYrX5HrhSZNn5GTurRcryos53g7Vu3",
  "key17": "3qwJ64w5qvqhhgPm38nfK5246XhMwzEEY2VLBLWiYGvni1xsjZ6ToEbeQDu64awiUxqTf4GjK6MrU23EXUPYPYfP",
  "key18": "GkXsj9avRHgcQYejScABDFtzea9J11QQU9Ln6McwNCHmHc6KCU2KNBv7nbvwecFoW5zeEVe1FocZZRFY6QYz5qa",
  "key19": "4SHsAvjLdr8bwawNEZJDurDogDpBA5yhpS6RZfC5kBPYnodnshkwAYP2QN22hw5bteuNYXxV1fQHHps1cQBnS1AJ",
  "key20": "2PHu4HsrV7bQd8RX4LXKHKZfoVQUBtf39MQofturNQwLAgUMrZLp29h1yvca7DjiU4UR4Qgka2KYNB8Jj8ck8KtF",
  "key21": "2hLT2dpnQ44LtbU8qCFbpB855zWxHynTYw3Mb1fA8gRPqHkTSzULCrA6rU9Pxc8KeMDWLoD27vfnzggukVv7qWaZ",
  "key22": "3HCx4FhfLiq4ndFDbiJtanyoEK4SFJoYds9F3ayg9BnzPXsBAj8p6Xq4hpHdMS7qXJ7o9X9ULwUqSDV7RyrQfBRD",
  "key23": "2im6QgB7yveX5M2gc9LBnPh7ZdCmh8wLK1ScomXoSRcM6mttrDJ6xcBJjDcZQEoq6PU1q7gRiUBxcSwtsxdpiiHN",
  "key24": "4XiPrvA3zt3mcdj8xAedgNAWnhWAxEerxDz3FHbeZ2Pxy5knrRHTcMbxQKQq1jxdidDFdGQZ86Pn5gQWYCdn3XwQ",
  "key25": "385SVSawX4kGsgL47riV6qCgdBdSJWbj2vWREpVdxZwrRYtkk53FgXvLWPskpFcNtJ4SEzSpmyJMwnZdZFKGysPa",
  "key26": "BH9gn31u9GTKfn3cXD9rL84oGHmoEbbDzpQahRqvtkXUUzKLTyTKuHWRzieMvust3VpgJevqi1otibcdAyjNkhg",
  "key27": "32udmf1X9rKWCLiPoYz8uFx4FGEZK3ducVTo7JmvvKpJgkRJR275fAce3piMUm9vjkkt26gaRe4rQbh9zHss5mfy",
  "key28": "B48HRyoSUSVqKer6koQ4RL37pFXmopU1o6z7A4Qe4THB2rqBAq3tHK27anDzm8FkreKz8BwZRQWfj5KypGAtZd7",
  "key29": "2kVKhhER6a9gXbygEwVMyhDDJsLCVJetFQ71QbNqkHkh8grxMXsUkEfUUMT1CTS8oEd3sUyRcXKjkEFG3wX9nR9n",
  "key30": "5uJD8BTsuxcxtZYtLnNuVeRSYFzzP1zfDtqaFprHmQWroYovtW33a3JTNwgnXc7rLkGTuKx6fiwFaZ4tP9DGKVy7",
  "key31": "4VyAvX32YFnmWGYoUtALR477AhsaPe5BC2qbeofZy4n7pX1X7uvh3W9KwjdEn1W23gXXgp97GqvQfqdeKcF1PX62",
  "key32": "58yQ4DYgHJjEpeSak1muqXGVzM2RJyEac3Dqpzy9AR8WndnGP1HQqfi6NpcAF4heuTJU4awoUKvXUktX32wDCZbf",
  "key33": "3V1wBYydvVh6s8osJYJf2iYYk9sMJ4Wt1eeCp3UozoxJE2kmESBmkC7byTSGyrN81UzWZV4iT5pE2wBxq3Vu8ab2",
  "key34": "2yPr8L1hTiDQUsVPvN5osuMC6VAedVFG6shC7Rkx7DuBRSuQtT5f13NQeRwUb2DGorGyye4EcXnwSrXo2F6vNPh8",
  "key35": "3J3MP5YY1E2WrXBZBEwdjPpQVYwNj2MFT7pXgiJBN8XfTCvH8HJJtyiHxriUDB356qZwoCxvtC3bzyRuamGfEm67",
  "key36": "4T2WYvLrpqibvBxRu98vdVJkVhjhKJurxoV4mdHXfMqUq891kmMhNWgaFm7tnWGYZKonGSsRkbny5tN6Ci4oAync",
  "key37": "4ePFEvoV8bozYbcZHjT9mRbQf75U7MGeAd82iYUZE77LRCmbLtACgv9mqatJBy3Rfd58ECyfSGksuSoFd7NyoJvn",
  "key38": "SXurJh7QYGxeUsoxw7Rncb89WKnCLLSVUK6bBWgXaDX2A6peLghPFzEHKTwRK8so7GqS3wTej4cGAAqTkcS6vAA",
  "key39": "2NCWwe834dnePLakSjS8FUtu4xzUrhdqWBNs9ikxeyKymureAbd1Y4qr9XbBpb2DX5Ea4FtgahzjS1iyGRfWcEuc",
  "key40": "3agu2W4vLiwdxuBA8ccppNYVRYmZc6JbJewSJMhsryFCm4n4MCiY6rCsbD9vxbt7YfZjpzbv9ZPdWq3v2o9JmZ1z"
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
