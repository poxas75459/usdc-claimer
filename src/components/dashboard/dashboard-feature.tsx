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
    "4eqPj4ReryYn2aLNejySYk1AR2nCM3t1THqREoX7zcP3hdbJ9AwLSf2cGMiP7X3if6hgRX7MBxQo7g9yw4ijyLgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1QfFJFf6mdzcVSuC6h6ovmq9Y3UAPa5iXCAkKAGtRmrQ5SKBMaf3DCmpBjRD7GYX56opB1z6qmbaQt9Kar6Rfuy",
  "key1": "5NcM6eYgxXrcdij352eC89RAfs1XUQpTvgZPF4EPvg4BK9zJECTmND85DYb3AWY8FzppCWuyzXo5sBXkQiLcwyNU",
  "key2": "eW2kPZixSkTWTeJ2ioyMwrGvB7p3CwbgCbEDXC3p5kzrS7fVx5wLnvkr7cwEbMBBeT2xP84K7s8TC4oErvFpytZ",
  "key3": "4HYRxUZugvCkawcf3y5qdnffRdLjqwB1EjqERn5wFgDk4FfLYAe5AsZbaJ5h5QiEr4KdVU8PjTfJqQZpT5bGSnoP",
  "key4": "5KXZoZkJub9vpP3YGs6ZcKUmtos6nGx3ZuFXmfUNSjgxZtpEWqEwzq69ZnWaq96dH1YkBNk48JQWipkheEvVLXck",
  "key5": "3UR7x1vA75wX89c6m6e3BRvP61fNctKaN6eKrHkvqfSYQWxy2UgFwpWxqzv548V4v5GdRNWVB9rkDUUhw1FxQWvr",
  "key6": "46E43P6fYDjkJuCdg44gY4U6vMAjHTa43m2brkMNCaKD478pTc6j9vJGffCpbP1J5jucAKNKMoieLzaLkf2QZEzG",
  "key7": "39xEMWBE9m24W443zzPuKsRDJmiYNMhgnEagh57GTDpbhniDS2whkTgvbHzinBdWphCEoSpgwnxWmrxBjs4un8pS",
  "key8": "4S1YbTTeMrn3iZAYRaLUdP6m7ZH1BDHnAPmPB7PeJWiDAFs5vLoVC61UUqgUBrjMvcYuEh3jKysDt23oyPigatxg",
  "key9": "5dei5N3m3kzSxfh6XgA7Rvs4SNCRMXdieD2zh2ZEbeeM7gvYw74pYHFYpLg8dAkK5awnSiUhW8umdzmmgeKwsj7P",
  "key10": "3NauF1PTXgYG2ZP3fU2dkNAoZ5EijCrnoBvRt1nrvfdr4QTBgSfCXZzDKqaXciuLyUJZ6kGWjD34ShUSRQYfESR8",
  "key11": "3PUZu2uB8au6K2xW4uuPmqqpXKdC3JrZgBEMj82YwrrwRWEpDAi39ZVpjxPTqAHq8RPJG17HVHn4n5Q8NPjbHN9D",
  "key12": "5CxrkF5b7iyFAT9MTpTX5nXD8D7WJfXZbE4n5TFDJmGkYbZ6DVorNMkapnTXJTVC8RR2ZmnSniwVNGwkrZj6h5rr",
  "key13": "62LxcdomVNnQw7ATqyBrR3EaNiwHryqMA2W7f5QDGjQCcZfq5Hj5DAgqM9nWA7ucnRfz8ZukKkisgUCKyTtKwBax",
  "key14": "5A6LUgMhp69SjZyzScTm6LqG7D9un6CebEMGk6M1KLDo91HL16Z5m9nXqx16UAV6NbFZrSscowNha6s8Ub8CHe2F",
  "key15": "3guWWqRtd9Tkx99CpJpb21ajFQCMakhFpfTJjkF9jBzA67LZGJKqdiWFtzSSJ1fKEJkVmhAMucL3PDjRkngHJnar",
  "key16": "2Bg9Y9MuSjdRaSt55FSbLf1tx8ZDpCwqqKugLbHzL4t5mxcFBrS1MxW22ZZvYroBriLBp76JaKfonFK4jdzGvJr8",
  "key17": "3KTaoCUiQyEFCez79uKWoasV9JTabhdJHSPsZW4PXg2v4pwZRWYK7Cz2CzcTbraSYXuK76QvKoRj7CXikkL59EW1",
  "key18": "3ijGJzikYcL8SRMVLHhdFKp1h3jvU8NF7av2CvdXZFNbXWZUkuU4TL6zvLE4Znjfo6xTWbXM9MVShA2WDgkQZ8Ui",
  "key19": "5vYTTjk2VKbFSg9pnGJQAy9jH7NtUj5zdJS8XyDivdZD2aRH6hfvh15cWZ68SfHHEfVm2txcXJQDFQyYcCdEX4hg",
  "key20": "4Pmj5jhhXNJAFUjiZ9mdgg3DpFj9TUKBGVQaMNgQCEWBAa4ccahyNh5P9VWh9PFt13zXrBeai6gAoxDZVjbKxUz6",
  "key21": "5aoneQCtkQAmWqxSX1PqGUXZitsZY6ws9DRwSVDbiQQViurfutao6aDAcifJdJyXCtKcEyAqBTbQFDFnt4fwjyzL",
  "key22": "2QUrobkrjQtygDro6e6aYPYJshgHc2NRd7iKLc1csurQgpgyP6kPizmu59JvPfQmRiH4bELznpdcswpp9pVGJZai",
  "key23": "3qGsBRJHAhytvGZxaBVaHig64PdEmCVxpVDHEDEAZSdfXa4AugZJEELLdrc7tCA1PjFfoniGnYfmM5xnwsGFLEb3",
  "key24": "imeAbeCP4uvB77M1DRqcFYyuBqNfm2trZTLFA48rgXsUry8NVGL8CbcRR3bt2cZRankdZEoPfVMNJqEL4oKUxBT",
  "key25": "43dbYqnSzX6nKyUTzToLjDwxEFn49pNLEPsCECbkPx1iFmAvcegWjfER85nAu7KsBYnQCUNBynhwDXFDUq69f4we",
  "key26": "5FUwnU3YgeMkcmBHtywr4yWUBP2Y9thS93ji8GFVLpgt88G3WcQrZop1aUbXcZUUy17b18jMhoANFxEnQW7oFZ22",
  "key27": "48SHSfBYsrwTuKbyBrLH6rQ5TKBAbE9nxormYfgGKGPHpj2YFrJFPNbrnZpTUp3QeqWgsbZtCYuaQPRD1e8B3bat",
  "key28": "FV57bdVycAqyaWXVDU5m6GCwP4r3Xayeqv8HUFSwSQZDFu3mYAeagSDwXFgC9RFr4McuJ7fQvUY3toaBxgfUpwx",
  "key29": "5Amayo9U8o1oh4xF1PjtAKvyWEU9feWm5WwUtkvzukp9W4pmh7tjryDyVwdppS1qzgdNgRCdp8VBHvjxvWizbqfk",
  "key30": "2afQGvUgyzLp8nvyiv1MnVxpvcinttMNUa3eH5k1ESBBkc58bwmaf4vBZwYqCpQ4PtuCfHmgzK6gWeZ5pU1Nqpst",
  "key31": "3KHcUfbFLsSMfDG3XHG3kZLVBmHam6vALBvzMCaucS9r3EKzddF7YgjpdM2iJu8cDS4PG3QL3fBSmHt85R2S3g1i",
  "key32": "4K8Do2pgDQTFbbyYrQgFMZzNKAoTVWvoh4y5SAgBZc5jjFBLYzR2TeFHHSkNeu2qfN1w3soWxJywEqvY87NG7xMY",
  "key33": "3ErefMHa8ek2oJioTyTKibBQ2W5vYn9HJodAgVipZSk6EBWVvo1NdLaSotbuUK4RrT1yp837C75yHeBSB6nEKGwM",
  "key34": "MSZDXmNNeH9YssSD4LFjXdVw6LiB47XNzxZhzpBc5kL9jBVZqbN9xMfkpbZHCFypSGc8ECpFSUs751pCEdT2vtj",
  "key35": "3WVN6nSUZrUbPYT8SWcDTM9PsjN4BHC7aUM1WVbK7GKdUziw2TsQwwfAJH9LhyYZV9Vr2kosX6XSDQCAzk1vR6DH",
  "key36": "4nXzYf11rfspGgU5oxoRBbV1dhZQCGjcpw1vN1bFs4pw3tymfGirr9cot9sTZTKE66kWRtUZsG5edXFw7yukqrn4",
  "key37": "5yibwr5bZReuur2zRP3JtnDFtohYfo4Tv15dHtXsQE5petk1WHxD9ojDTvq9Npz15a9n1aQet6G9Xdrshkq7kJmX",
  "key38": "2ES6PBvvkoDR7uD8Hp7xDGNhQFsciPtxEUTbfywCeBBwq8K78YCaSHKUbcFGfqNK4jSK8De73x3a7QRfrsjgLhhe",
  "key39": "2zCnUckB49ChLTNCWpg6xFTzd6wPxWQo6gVBk3ZoBzBikL4NTUCLd3uEiRrmnTgYFZhvNcqEymwies9eQ3zrDgZd",
  "key40": "3y1ZEiYSjFkWm5koawQdMZCDuLHD1ixXEfFN6BhYJs1a93SnNFGgnhJMNdUg69tfkiGwgp39JXbTCRZUmcVYfa2f",
  "key41": "2SizqasvoAtDSunpsDrTbL88GDLo311k6dKDaTNKujSCsqFRhBjcMdyemrZHdRd1mrRW2y8q3AGUrFobpgozJ1aW"
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
