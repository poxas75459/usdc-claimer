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
    "aSb4geZmoiRoAvzrrhNpfKdMZtRvPCJHPHUy4QLaogN7ZsmPi3zytmXF5YLTgCubMYDCb6Mokq1UXc1LqVEENrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HrY2HV1ShY3shbxFZw6pb2USGpRGh8bWPE9PRR1hzXoZ1Vqu9KonqXGbVmPot8x4s8gien1qC5At2in8NcqXcQF",
  "key1": "4xpcYtSkgjzHUbYxtFpnGmWGRdTBHthgKjiij9oJHhNxKRR2zfkR9RboK5pepRPwcZgc7D8k4QW7ikqfJre9e76z",
  "key2": "55bozXYfUcBpuoL54SAhrbSUesL6vPttYt9PJvWY5uzTvwstWxTLEiQPLAR82FSpdof1jAVF9kUNcB5zWA6m1X61",
  "key3": "26G2QrzPJPevpAqubvei7E5dAemu5t7A8aLmx3EJt6cbbQAtyfRnJjCZSFXiEhiuTtVj6visErSfftoaFEH6qKF1",
  "key4": "4T7hH2uLKSLLQ1ms51QXwe2yM36i3KEDSmx8QMARJWuNhwf84o9VPjjqrDK2TUyfWTELMLQri262ejv29bf7LADW",
  "key5": "2pBiamQBqmSCoFPWAmQuAvzQZzrBnnAuA8vV8UTRpYPLjgjFE9Pj2NQoW6mb5iwwToe9iaRbDnj6LU8QP7N4HaC1",
  "key6": "2gLzB4442Kmz4PewVEZgfCfeQS5fVJQW9wRAwfnpZZJYrR4Zsv2bvp2u6tuGMRYecm4ZamaU3z4apLmTWYMStu1V",
  "key7": "4NvUDx1m3cEjFvjytD7VV46SddyH3xs7nGjgaFxSqUxDrXKfgRREtkJviDaJUyPpnGVSFnyJ8WHJ3dsFGKMRYbLc",
  "key8": "5KoeY1CH51DWiJF22cKUEb7XkXa7agFnbA6X6YCyF84BUA8iv2gTVMe69Ai79KhJDTLBb3HKRWenARAtJLc2LDzJ",
  "key9": "3wHR6izo3EDcj2rEaEscjn4GeAn5mgwv8VVe7dvx1qHrZQuhSFZmzGy5QkP5ZNNQuhsQYY7pjK4Tkfhgf5ZdFmHU",
  "key10": "3cmdUtViUTS4CmpXWkMgNaxRy8qB4bVYGqAo2N2Gxk8jv6SAW4DWzPH4iqbqAwsL3NB9HW9YUspkwZnU3AgAimvF",
  "key11": "3x8PngdBudQ7G1emjdWLEhWTr8v3N2d74DxT5SPg4GTMLgmPCgQbRvUSH5Bx5xygqCTeF47wr4SnnW8QutvcuYsy",
  "key12": "JJsAsGYo31bY7G4op8eT2G8uMe4czXXQ4AV9xKfuFqt48QqA6jqTLLN68QKFnMXV9CkNy58rX59KZsUHbnS7Mko",
  "key13": "2o8EwR4LnBrLPxFk9RYpDRpWKfaRGfvAiLCJJtxaYsQVwvWm6DWxBjELPuuiztfs1Y4tniBgFHbQ2WFH6t6KakKV",
  "key14": "2Mtj9S1mbvWXvKJ4HKonrtA3gJofcmympbM6Ju5dXC2Pvczd5hnL3FEyaRioRpY9vm7x5ERU5UcT42oAySNM1pd3",
  "key15": "3a4HvYQQj6JMtHVmprABHH4jrHMMLbXGbvQtbQsxXW1PmmNx7axdkaFdmTLJQN8mqwWwQuCDREcjYnHgFVwT4rU1",
  "key16": "3M6utoHydVLC6VaUE9KCt7XmHnSWyCnYZAXEnotDosXWFUmBM3vmRtKpA4UQrt9JZKUfSmVTnab8vXo7josFzHAv",
  "key17": "4xn9SKw5Zv9ehijFKpjxV4xeizsxTK4ofuV5L7XEW8XTz5tk6YwU7Wroi9sGiYz1iKMGAoy1KzGPyFKEQ3k8756d",
  "key18": "2AvfTwBxhjXS3M3bmPhjJgfwE2TuiU9C76LmsgFR73tCoEbqt2A4VTGtEQVFi5AMagPfnrXA1GyBeNuqSY6A99x",
  "key19": "4c9yiGCoxytfEiU4dwWvuBDZooYvSM72juoyqNRpZ3o6mm5kE84kBwZHEsG7dJirfASfKGFHrsnftdrz9trmAqzm",
  "key20": "3zjatTnwLCuAndCkjv5Aitaai2gHxqf4JToiQz6zukM1k7UopRWLavmYjSVUX9P2zaRd66sN5ysWzyquh42bvT7b",
  "key21": "641gZFPv73u43DhihF6mbdgtHMyQdK5pcUxjm7kNEi5Nfb8kTrLr21YK54zFxe9Z1MrhY5S25XL9SgPCDnwFdg7u",
  "key22": "23SiwzN9T8tEVbX61Xh7vVMRrCx9u2FD7KonPHjkJAMUrLfqkySsgkMjK6sWuZr8iredQgzHMPnTq7aTTLN8sgx6",
  "key23": "3snSVdrB35dGgXmzxCd5c4ZiF2pkFjkBj2roGbCWLFZfPm9fEScZoFxef7vEWmUcLqqgK5shABkoZTxgwMGqiJri",
  "key24": "5xnDQ9nySdX3T3uugywwNxnuAsZTyquhTS2vKQprAt462t8ixFrQuBNtuwWMyecnPKSBZY7jrSedexM5RS7hL5iq",
  "key25": "22272q8Pj2oTT7XX7F2q6xgiERv6mLq4b5DfJ7D4AtKxVAEwvTSsoe7A1U3qTZ5dCtUAMzkaQk7gHpT9T3RubFQS",
  "key26": "4XMv8R1Sv8BcahMmGjkELraVQBqA7Dq87sYvXSb5pJS5ArrA1RWK4QEHXD43HCCKExHSfcnbJM94113AoWdCR57K",
  "key27": "3djm9VjX22ZqnezdYN843KGYHf2r2jemKwThoXqBoyCegRDVmUDmyBkSJhbMR2CHdZiruAqvP1Npbnoa8TcQJdEi",
  "key28": "5Q6pJ362GLd36fcWCguvaVm19dAUNhSTq1FBnNQhAaAnLpw4Pjjdh95i5AyNSRWP1c6TRCbdFhZvxiJ2fLwiRNog",
  "key29": "1spxTKkjEenGuRzvKX7fLVS4j6bH6ncgScKtPKZkjbAbRetoGx8j71efkMXe7wcp7iNoL9USBukpjAs8cjHwW1E",
  "key30": "2QcjrR5tjVnkdAeRjaTSyWDAcH69iH7HeFeLqfjXn2RNpEYV57FW4CLCtbrr9AyGfhxQP9tN33cc1WRvaR4H9WBo"
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
