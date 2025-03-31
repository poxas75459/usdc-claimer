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
    "3sjijBsCqKg4WEcRs3CYViDYti2R9YqNWra6rg9uUxDkSq2bknChjT6MQVaCqT4MtKY5KT5jQDwb5sUPdYt9SA7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42HUfFr9QP6Ue5L4HzcV8aSTSLxAqa8vCigvyXGibevTV1ZJUHE5nYtS6GrQ6Qa3xgmk1z5tUVHmKWz3dGhzDAwZ",
  "key1": "2L35mnxZ5yQ1BUrUsH9jRvmAqWxwKyYNZUMckxW46uMBVGtJ8mbiK7UxRFbH6J95CUDgHMMHWMyW2p9w6DVkGvSL",
  "key2": "2htYv7LGACEGjMJKRA28bpcf5v8QWpjoKunjWL8heBRaPVB1sSfKxn7SYZvN8uDVFbyDUe4QC6dTYV3ppEzTZtHZ",
  "key3": "47drk3S7sAVbuiN6JbtERXGHt8fMf9EanGR3sng7JxNU4WCR1jgYonnBAPiCNCzTPypZYTpJbQyXm673zKC7RGqS",
  "key4": "5XeAPQLgxArH5fi1L7EQrUGA4w5nnuo1xdentk7p5i9VuTS2o1krxknRHrK8ecAJJ5vFEqVHbPcQmPeB7n9zk3Fd",
  "key5": "2zfzCGZtKd4BxJhdS328hxL6rbrujaeZm6ueSCozB94PvyzyNtw6LKGkEGv1uTadFm5MqdX2zD1PDjw86b1fb6KP",
  "key6": "57PU8xA7qdtoVDspRWAo2oPhomE3w1opjcbTD4CAXnoK4kJGifHkeiUwQ5SE8TAvREv3hY1he1QxC5huPJDYWqur",
  "key7": "PAADAVEiuu4dJozxjqEA89bF79gxKJYFzT1U7wTMLyC6AKCXGuR5qkhu4zY1nxqy2PGpKZkoRiqbWoMpSXfEdEx",
  "key8": "4J8MDbtBbiNwsJcQ41gUhG3ymfpvDnzfkN6rR3rVbVRqoXLHLK8BPyqEHmp7kRhp5b61hZLqBqbWDD8BZn7Znfos",
  "key9": "nSKV3C2yUAf1i9k7Hwh5tMR9PYZEqtXpfUDsfoyEZU9xPqwv5ZNyLSS1FXgztsxwGY1Y3peuepRP5g4CHayqoaL",
  "key10": "2b7J4gWPYdyEeZDY9r6V1DAegBYiywxE4nG9zfJnDVU9eYBEQ6fCCFjgoLFfXn1PE4vEx4BfyV2mxAtsmwCycWmX",
  "key11": "4LQfGL5jxnDxMpRb7HFuhvFmsCeoC6eB9PUMm71CwX4fPjwWrLHbfwpGYbP6z63S1NYNd12uvAnKUep6ToEdxQFX",
  "key12": "3tdJDjAJfmNLcMkFgjyUNKB9hz14YEVPUvjrduUgQ2t4sVYZ8rBRgtrRVQbEoqa6QZm2HnTyhsS5ky1TJ4z8BwrR",
  "key13": "KhzguCKpXDafr6WjY95vVAGW8psWQV1N8ynWqAYofKAMuLFY5djB6gv1npyczZviQBYmD9HuMQH6tBeY5vSC99H",
  "key14": "52SWPFZqggWcinTkP6PtYx7NbBdGbf4GyEyuzeHXyriGPSDUvTEHFtFveuy199HCCyqBZb6TtyvQuarmSCHardL8",
  "key15": "41f3wRiNV7pjLX3vGcDV1nMU2RjmS1akd9DYbvHp2ztiiaXcWVUMYAuGkSg4enDT41Zsmwa9vz2ooJTpESGcYvcA",
  "key16": "328JTTkRBs79A5VvXjaBQ6dQbVB9HfUWzH3iLA8DgMfAsHdKRFdJoki7LNY7ZPVaCvVdPDd214sAxAnW98dwJT7N",
  "key17": "5n5ESWC4eud1hsdfXm83NfgS4uP2JR2zxiaByzw8nrU6JkCA41yTgvLkrUEdmyUez93EeWGqYLwN7R7RzSE8ZDsZ",
  "key18": "4X2s6hRAjhWLHji5CSnHfyFno9ZU8EFMnSU7THeLo5PSBHzN9AVXRShvBpoqNaTDq6bnQyEtL5yCnyaxbhuaUzrP",
  "key19": "25e1fZx4nsvnWLDAQr4XT3uuns8mznfZk5cifopntswjt42Dg37nqKwXtDLr8PkSz1ouLWK628XGJUGDmvAz7dJW",
  "key20": "5DgtCZ9PzEPfWnNLkWmz7PAVqo1Z4YBEtDJ6ih28HZyhFQu3gjNUf1KGfqQUfxs7zMcFSyaiH1a7yRdm1HjN4pam",
  "key21": "5TujHMrjkFgLMkRrTbPNUCJgovn8nfH3W1dDb3Ddgc12EMoWcetMjS78no28KGtkjSWrNsw6jCPKTLEyMdvasQ3q",
  "key22": "4ZAzH1UeetD7xLhZ9oXQ5BWYZbc1ruMB9RxoJfBtbEAi4PBtyjbfQ6fJWMUqzGWi8Eow6nRtYRrhMNwkCtiuCCFW",
  "key23": "PMGYHgNTy1YKUEHSJVuavchnkgeK8KesA5dky6c92N16VaXz9cNZdGvbiyLvAPJJ9sdJDw5ze4nnQeU1c1UYZ75",
  "key24": "4fHuZYz3JHW3QvMoxeJ12HZ2Pyp9pdqGEeED5PgHbN5idz3H9Q3qRog6WCfKPaq2o2JugNVaw2LDkDLoLyH1qHL3",
  "key25": "3WhqqXsuqSMA8PTTfnvTiBGioAiiEaz8GjYhYShRQFyfJdcf9TdBvemwJfUDP7T6FMCjAbD2qA3azhaqkTeqEx9y",
  "key26": "2KdpNfihuR1gWLi8igXyutdr7MZoHGePhRHCCghHULoZqpR9jv1KUHBhavdTgAKVajjTfhHdgNZTcFkcxPfEAdyX",
  "key27": "4Mrc8vJDryS3uewToB34sgyPurQKrcCezhFs7v4Jp9TZPi3Fz6uSEkFiS41e5FQisQeVS5ApGftFTMXBVTuyZVzp",
  "key28": "8L4xUj6RoWSZ5So21PMaChJByksVFD9dUMef1wRLR45x4k2S8F5G75zepxboiVsHExBb4srUS7HxBEZKwMb1MiY",
  "key29": "5AebDL6XwBaKm97e6uiMxdaNkyYxwT7Wv4fQvFZ8kYndqUNx5qRT4Ke1od4wzy5s1F8N99hDZccY9Lom6LEn7f9W",
  "key30": "65b7WL9N5AcaMLYxexJeetkgW5HbXuRyMUvx6Q3AXzpKcUkUsRENE2U5H6fbkQjzGK2m8wbqiCkZsawjTLrVSRMN",
  "key31": "RZ2oHvjKdre27uapvr6tEQgwaRocppAwF8mD5HHLBJ8FXKVvtEW2m2i2zWZZ6BdZv8ZkznZNw5RNuAN2otEVmmB"
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
