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
    "4aW4WpM7RkgKgE13b2YsGjkQD7m6JJuoUZw3kXbfMEQa9BC3YygYgpvhD2DiUUz2dU1cxCtdexE2epRDdFzh4xqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GLTdp3N8B5ihwc1bBQp8kFDRoXnaarz2QGzHVMsS9jLLrKP4AsqJsv7bS8RoFsJfaq1rPyMj6dGdUJ3WnUsrmPr",
  "key1": "55vmav8veTRtEHH95ec6knoQzF6bJ6Gb42APUqstM18ty82y3HRPcCAoau2dNwjPLoaFeBvJemdRsPuFEBm2HNJd",
  "key2": "4PVJC6cPFC39oMieHjp83zjDK5SB6R55RnH37tNUgJ5EEcLaGhDSRZrDqxgddUjn8HmXfV5pfR9d3K61Q9s9BHDe",
  "key3": "5cfJqBnFtLn1GA8tjwTJBkBCZSbSZzuwrbs2Ei5VDsvb5XwKpnn5gpemzBA4AMiaTvYTERPuxH2N21YFsLtEKes7",
  "key4": "24XfqnRhbw2QfuSQB2jtygrjrk7SPebSbj99QJbYWoExgR3Um4KtANdLQ9xgpXV2zzkUC2pGqwKEGKrmduzhqxsd",
  "key5": "2AhpkzedD7sg2aDqeEXm7mDH9wdPZnwB1XxraXsAEMtdMPo1Uc7UNuts6e5J5qpwMzjmenK4NEa5PWctWQTiZk13",
  "key6": "4V1XJq3Z1S7uA3PpQGMjkn4A3LoCvVWxBBMqp5hzbzV2nAw94zMfinmwvpeSNCrQXXdzVJCM2TiegbPAomWzZFSw",
  "key7": "4Xeca2jCfh4xiNJdCrBG98CGcJyxFwDGE5fByg7HZf8p6JoL1XK8HGD8QyY6C3hUm48Cs9oUivZfAXP3ortxJVcb",
  "key8": "5XBbt53R9wVefaa9wL6EoNvVcLQ3XHsnYumqHUPz8jkWVRwSA5ycWHZWFECx4gnQ8eyi1UCqvGuPZXG7EEGiByk1",
  "key9": "3MwMJYdViwe8xjVaHiftdEbBp5Ks9NEPqaoJkn71qbhFgVKbz5gQPYkXW6dkZTBMKhUMHFUM3KT238iiQP9dt8ZP",
  "key10": "5xk1g7kz1DyFdf68awftHUVtEZzY9JN1VU5RUCYuiAEncXyCetRj1uWLn16NAiEUmwgDmaRZGSDknPnvon8GJvTa",
  "key11": "Qdw6XvpQkaHAZXHn2nT73NaGHEQsHDumCHuXUHnPxJ1SbH15PhBY5MVWF4oQhRLPTP7udRx83pkev3uBNEhFQWP",
  "key12": "67ALFbMJqzvpjKMZMoP1MCYce89wHTGNMXAvvvegVaXDEL4Qch3MoRyqd4mUvJE41RubgS8cr1NdCjL3tchYa4qQ",
  "key13": "t6sMThvtKGBMEpZ9FtvvDkcpcPZT2HJEddo6r1poJpE58h81xXpWJnuDjEokcgqXr2Q8jMhoVUAQw8aS7STjbBz",
  "key14": "29xY7nGageCGQuRubqrhKqeFjNuB3LcjT2KDaEucgeDmwk36jFw1hMD4V7TzwxuHbvwzHn2AirUk2ZFkZ1GXoqv1",
  "key15": "4DrSEUXfqcwvwWrxVWStyYASSGYQxfwuf1DwafZNWEiMqBdqXRiXgmWYLJo8Pk5zMjhMuUbRBCS4XPnQQeinDTbW",
  "key16": "53J4UJzyhNkJcV6GyxktiZQBjcCyEcE7YagLkSobjCsN7k4LaSrs2cWXhL19obftYHgtqKE1X49jm68bgrdyLVNL",
  "key17": "3h6KC2v3xA2tAdzdLnH6WsUpDUyWm788Rh62LZ3WEvhbdDhFzEBtzVQ9Fd5VweFZMkkF2BiABfhRLdThcuRpm2Ee",
  "key18": "2A7i8TAwt2KVxY6AXsHtwZuhuRHJKeRneau7Ej83PXksoJjhLWhHujpACPmgV7TJzRztt7c51W2PyjR7WGcCcjzq",
  "key19": "21EruPrkSuWPPWvtQt96P8sJiJaWpP7C4DriZFRaXDD6nrPnMfnGPvXSFjqGPrVdpxo31cQG85wGbkAfi2L7juMY",
  "key20": "3EtUz6vMcYjRTrRzC8xMULwqgaWWvwcjsadT6cyWWNKfb1tXrpaBLETChrhaFVgM77TJBvnbgWdNxB7ApXnUt9g2",
  "key21": "2GbN61Qx8RMa8ower5n6Tt6H1Zq8BqCtjWPgqpZSbGUrJko2PwZ4wMj6LLuU4CoZ4p3aE9Y5CrHwmqF9hYUR2oNy",
  "key22": "6HtzykYiSdDDpNLtFNYnQWZ7rc1WDoVEBxoVmZVoJqGygyE3mdsRDQdFmJ5hcM47BUPYmQtnjrJkGEy2GMHykjE",
  "key23": "2jCrvxKbmW3XwqqQbNuCS3FbbpsZKquz2Gb3ZpSWT9MnTtcarWQKiGDWf15jGvE3w8MKKzuS7yjCARSr5negweMB",
  "key24": "ZxqrvZUWyfrVH6DBYU1xMGdepdRsgs4JfEJ92cHegUwbdwU2S2QAWERzReFcxztsziMc6TwAQTdVHpusRStF7BK",
  "key25": "2LHmJEZJQD7kevkXJvisEDSMDZYN1afFc2wBdn6HrTXjkTqE77goPBF6HqKxjy9aKjWbhxKmaKnGxLhPTWaM71V6",
  "key26": "2PQbt3s4D8P6dGQozqJxJx9MV3cZUenhFjmdswF2hmSrY2K9Z2DYfj3J13HtCGPZc2HCP7Gw1jb5VdMbX4DChNeo"
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
