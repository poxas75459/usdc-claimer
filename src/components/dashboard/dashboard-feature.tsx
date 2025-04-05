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
    "38pneXiw2yxw4gmkXwtxr1ta1DgpTZH8VRoomom4DsMVKyEA6RyQxCUce5ztH8poXZ4FtN4tR3GrRobQP97HTFod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BR5qKFaBzWa3VYu8LZLUea7AEoV4Tqo2LURGH55K3XvrfxF5CiQkBM7Ncqi2DPjYWAahAXR3v5Nuf48fcPjnZWy",
  "key1": "4Xm7xXoBDcRZzAJdgDH6QfNUz3MqRVb7t2CPfgVCzcmxiRr9tK68W718ej6PAvgLvvkfdQSkexiCdJuvQjpY2Tg7",
  "key2": "6cMepMiDUYjw4mwoLrW7Ms27NgrFzdPx5rnbid649Yt64czVGTvPGJeSBsEYSbUfzpEYtDatoQL4sup8xNPNuDz",
  "key3": "5ygT6bysBN9VRwCgeAABvL9EWXqyxs89beLeeGGGa8Ji3BcvraHGbZhqBc3NTNBvDNbSdeXcuotPquLgKLb5QCr2",
  "key4": "2CBJ3nuvQeZQtqpGY9WKTQTuQT5KWfSAXR7t6JhktJZ4DaPaiFzx3pSDJdM5mU7ztFzhQYMTkDgGZZDitXmFhgao",
  "key5": "4K3KTvNT9FiNjqHNquQh8FcsRsa3KXzZoSYVGZPDJeLNJerBCoBTn2AH2mvB3T8xXRcKmHEdJVUCKjZr59X51CLq",
  "key6": "wq6GD8bHu1hXKa14r2GfuUfYLKrqf6vM1C4igeYcs23Gm3v3Mgdq8MVa7W4UFX9MFwqRHZpGvWQr5X8kpXfgSLm",
  "key7": "3mZLsefejVyx9oj1n1zWoL6dcCvacXCqX4CZZUtVrqnJ8XUAoTZfZ2nQhvfc8TP8TtoM62c9bV36gXEmLV4445Ph",
  "key8": "5ab5uDEwzdY1axhYkArdNNwkZrvw7yNUBrFpysZPdBLMEG8QrrnxEBUQaWHnHe1HaHxZ37NZKX79H7BXeaqrCzZM",
  "key9": "vYxFEjxK6cZCQ9eZC61YgPsd4XdKSyZA7CwYkiMJ95UFaMsTaVN7yd3zZAUszNzPZuB2tbckLtqTrSkshXThAJt",
  "key10": "5htjYArfNqhWFxV6q4GFKmEdqn4Pp6ppEw9Pq45NgkE23GcMb9QmJXs4RCMVcwbmdzpxoTWf5iX141QKRUw4qvZn",
  "key11": "55kUA4y7xkz7uFDx2jnrwyiPh467JAiK1K9aQNZwiMoh8v47YU5px5zvrTPjXBC4V4PNUT5PKrYBKcU85uq2cqXa",
  "key12": "641nuQj7S1RRmcavXgo8ko94b3BuGSZb9BM6jiWdD6Fx1h1y7ia8Fa8DKf6Lg1Nn1FcwdtvAmnRbdPZHCBfaMeEp",
  "key13": "4tfcmZVHB81Tqgmq8awfnZdkTyGKtzzTeXxu1RSjAppKgU6CNfTeiuvSHRG1ccze9LvpokAzckc1dfjWzcCXbKA8",
  "key14": "42TTQEj8zWdWRDpWuBkNpoHmA4B1zang3Au9RkANNHkeCSEzKQxAHf2NuRMqGqQwKHgiLgvWK6MTZWR6GkyCmG5M",
  "key15": "44UHNuunxcyHtDK4kGQaybk45F8vgtzy8wmf5GukH6V5NhvY1at1DNQjq6hwuLFNqbuT1HcpKQBkdusYeJCeVTzb",
  "key16": "3vAzXuNMRWDmxeHF7JN2jaqXxGW3d5SuHfSEeQbwLtnGnXD5vyUmDDcmKUqvh2dCpmbt34rysVAR6TUwrXdJznrH",
  "key17": "5nkW2NX6wo2X9xkoAAU8eiMSZFVLPsw2zWELwo7WuF3gEVD8YxZzowss8YsKG5eH7CGdQHxfGXz3TquMWsdQmHB1",
  "key18": "Kz7BVfqcnh6Z9FL8Hiayz4VUV364FA6vxj6iqtMRsdNmzMwJ7faqhF16JT3roJTGiDVbsJxjfzCMEJfTmeWfLFE",
  "key19": "9eVWhY2J8Jzw47bGc3B94oxaEj2db3sbDLzfBGdMqwGuhT3Ldvma47B72FJqdtTEbPUciLiS3LLoYtR5VzC9AsW",
  "key20": "2ajFfZAxiA2KPuPF9ZNsksKZ3Ax7vkDdZuL2Wc5z7op5Vnvyc9JTF1mY4NZPxszXTa9YPEN8gChi9DYV3rniMno",
  "key21": "5R5haBb1pYwCbdWCBoms8P8iNshWGRY8zodXvsNZuVXPjUduuVNSCHZWADbdyLoziWB1U5EsGZyrm7YatTEMpuUH",
  "key22": "3KqLGPhpp3jTctovfLg6DKEsEAdEdY68uekEJkWEHF75ka5sB4oRFqd7pL5d5FygafAGZ5FF6onExYmqrNPZAQdv",
  "key23": "5nJ1rVNtfjWgzQLT8g8StEKMigTgQ7yyTs5VXWa39j9BdTL7oYYZqA4DXxyjnUJimXp5zBGMveasR1UgiB5zHk21",
  "key24": "2NQnnM2ZQJQGBBhw1vmTbktAXSUsqBRn3BWWppDv71heiQ4y7DLsFeZE8z2bD1CsFycHAG7TUMmbXkbRrbuCDHUG",
  "key25": "4N5DXkwhp3NFefuBjA68GfYTU4DLw1L1B3UpgJuGw4sQBXi6azvnsKdqpUj9rUg5ZJRNQSFiV777askoNbrNXs2f",
  "key26": "61yNXvDzN7dBTyhNPKtFCosMWaY2zPu2EjgEyGUcZZisKPpRxLLNxhvHNqMXaKYKZ8dHkFuWfQA4MdubcQbBYKaT",
  "key27": "PP2dkgaRzG3y86xFCX5mZdekgb1wpdZsF2uM983p9sBv3zReVa3RGQ2DBf3msYKKaopDmhxKrtM1hGAMvbaRbXt",
  "key28": "45oPg8vNvoagq5iwCft8T1c9SmjUuKaGdJwMAJecz7Syuv8JcRaCB9cfQzRuPPoMe7Pf3JBTVKK3pE3Egfpb9NKa"
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
