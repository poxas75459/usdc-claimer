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
    "53pkP7SpSUi9myujmHakW2wtcj2xEVMvia1RkXvuXmsTjoruxou6V3NMpxGRsqiHPUfMde3Tb7JDFYc6LABQV1Dg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KHTqNinbgtNYdjtHfwF4qUd4nUqpuNkSESVfjSnyECfDxq3opuwPp8Gpkgu2sZ3hmUonH91LjPEKbMAsx3UkCnD",
  "key1": "5Qw23Gf8vtiYaiQL7cdkAKa3LBFTPJ5LQzpyA8zhEhNkcbWfzZbEwPbqudC2vVSmLn6PDbDFyH6viKiJ6B2U2QBW",
  "key2": "66NDwyVypjGNWwnZbjuntGMZd3YQqoaXLxZijDtvQGkiHJDraLNKU6Ea9WK2kKCaj5R37cibgaA37ubNj74LARf8",
  "key3": "2uwAoWe1w12YRQkiebwEo9JCUssisqcbQoFs1qtBwvf8vk6VBmKPeDAXGKzBDXaiZ2N3N7C3VEhgJ3xLZXC72AYx",
  "key4": "2Yngj9hX3AoSaJWb7BAwjoQZWZUhcsf7FpetxZWLfQSFor2D7jbTziGmJj8nbmTU4J9NeRxQo6A1BjPRe8o2cT8X",
  "key5": "Thxxv9cG6MqFVZ6cKnTFzWAtryCCEYMg5yCDvENc99KmiqstyXXRuGQsY42VWnGcnHWLtBu6yqgStcedFDWD4wf",
  "key6": "cufFu6fr1dJFP3pHkdwE7NVzsgWJLzBzdAhHwmRAP3SfGo3gb23CHU5dEfPNDXSdM8ui9W2Bmn69UCpQw7J1XWy",
  "key7": "39AvxVHLRHbJKjkcdPmdK8FJEUAYxPmwXrxS31kBdvKt8V6V985J1Sv8mFGwB2i8RGD2mcPHfNgHdsMbcnnmCSai",
  "key8": "451drqPi87cdXYDVkMuZp48YhZKDHFnvFsnT2f9NEehNgopWx7Z2R1SRJ7N8Xh2Rdrfk7Zj3FoScYA6QH2SLuuDV",
  "key9": "BgngeVBQ71JDVkWkpLWzT8a9wXYDDFM2FAej5NDi4z3vrHuRQWQtf7zXwnJsUZgxxH2y2LH6wxRgdTvbNcLnHbM",
  "key10": "KVADRyya9qpiCDCA6Z2dkX2xvX5uTZJ2w4wc9TSp2oFHbrQGyDKwHUHa7me5uaNukokeTme8dznuJF1JQJmA6cB",
  "key11": "3jMPqe8H2onJ98mKARHTwMBpWypHa87jFw5setnBmBpeT6QreKMw8aYrFSoUQnjhZKHdJeo6hK2B1vxLixhk1QgC",
  "key12": "2hFhCzrZR8EKMXoKkPDc147NyvzKqAYZDn2Hk2b9ttUuxiVC5YwUDuuDyYCEyJqzcUMKtZL4cphoa7PKwpoJvbPB",
  "key13": "4HZ7AmucCDap64u1bbBu23funmxxWq3rQF6CZv66NnD5fqDWmAgG5XGnU5PFjMQTzrf2EZRh32qFtdeP9gTwYGTQ",
  "key14": "3Ht9skQ15k7fSWr5H8t5k8BmAdhFCJWZ6yW3pQFyi5X3ZtQWUW6wresuTdzPnuCMPQdVv5onjdbkT7tVA4iHa3uD",
  "key15": "XVue44a6CnXV3MzsnUndLpp21dNjB6q3HfRuasJnW8Pa9EnMNHhNEYBi8fkvxvK64DuV3uWqVTXGN3sfw6evvsa",
  "key16": "5T2ZhLFPwGaPgM1zQERTevedPjhFPTP5KGjAXyznhW8mG9npKocjJoandaq9b4vs26EoxWU8CWVqMgDYbqfL7ir9",
  "key17": "34GshmRCxjUJzswsY9iJZXnVyBeveMhrAihAmv5XSpSTL9YknTeqpgCdxqQc7aTV7GjdSqJLjqbUNLSuW5Xv4Thd",
  "key18": "ehLGX9phwSGdWxAKtDoLbFfxbBukxZLULYUsF22VaCVzLdbjhd9WAiY1HBUNSv2hKESPKqwzpH3sujwXZ2s7maK",
  "key19": "3JbDm2ap1T4jLfJQDdWF88xSPbNYLkGPARXwbmNiArLhxXXWxgvrUqdAFfN5pMwBXoqwHZJU5wSnACr3AUJ3Vcaq",
  "key20": "3qgKXLrZEhxzdX5UGUd6awivEyHyASnxQr92WqefA3SP8owqEVDQy22ZTiVH7N3GqgcGkgwVguj32FFae3mYtq9d",
  "key21": "PaCZbve6Ap4NF3gUzXXSx6xbCEQ5x1rjPjS3MXJvcmbdrefGf4DZcTKiKJGSgQkbmb2uAnFLCL2n7TUfHiRkvJV",
  "key22": "5jEHo3esbUbsrUdnmPZp6TVA4JZLGBh3ua8A7SE5yC47sJNfJgLECXCAGaCjXAkifPAXKi7tfni66UVfwMg4vC74",
  "key23": "4Bpp5iGRG7rLqWpcM62ZJpLqvUsXLoQNMC2pwML5ahbsz2qSGFn2s8o62KZYmdYCDTmJZp9NYzZ5Vib9JtKamh6E",
  "key24": "49sgWunSAZMSapHxBhqNFMpdJo1oKjkMWUohB8Jqk4vP73iw9rqjxbJsLWNE7jttCbeXDJCWDGwmbceWfSc82bgr",
  "key25": "Wc7GyzHh5QFB3hVnLkcwKChmcR39JtMunmCMoesEydurD2bJXr5Bsw29W9QtA3qeNx4KErZwWMZNtZ1xDofxkBF",
  "key26": "4sKaK2Unn3hWfHTwB4c1d3Z8cNcuBndHxmFxfVhunih5AZCsWPRGPQ7YGJkQxwNH5Cxnvfx15pBYfamZEXW6LJro",
  "key27": "5ymSuyBVFt3Wov6vtn1946Ht4MaxmbRD7msPJgSBaTKpkbWab5Fy7a8ThENF66EQnZP4DoWuxsoW8w6JkUTp5Hi9"
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
