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
    "4HV5DJfEQ9f3hPKqCs37QWWJsNFfthpc9WpRKwxDPFK1yeX8s3Q6V4rkwhmRMLEtqoeGoQaxLEGUsNeErRR23yTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a1fS6DcVsvfqSdE3rcVYH8LUJ1kChBV78VgDzxyQzcDaEtTgr3aSbKoiVuRVQpYyNuzjyFKELuJXctFKzBeuK76",
  "key1": "ZeSmqz4zUyvVen3tMqjUU5zu9k9i5wt3tagFB6rQNFGCJiesSRy6ouKUJ55TNKcir2LrVZB9i8M4v9YVByQUfC6",
  "key2": "3QpncxdJL193sPkweVxf1NPtQMAStuMzW7Gb6oKyCPUZYW4sM8ecvKRo8NLZ7yEgaRg8C3TMmerGoC4NsVQow2Y2",
  "key3": "3kcvjYfYwjsgkPbGjtkaYBp5SymtvKyfcQ3iueKzK9LEPeYBaHbfMqnCBsqbMerfrJG8XKEgF5XnHuE9pug4xaCe",
  "key4": "4rsR2PtDEZ64VSg8Zz2LnDiAQYjn6GaQguXNmDarTDimVUCydXRKVtpSt7FvjYmkHH4Nc74wWc4WK7q9XWkezNdt",
  "key5": "2C1Ko9nRVbzP7b2CmdxN55CbzknwGnsZcWUSskE4pwFLMUhFhGTT2Bo9bu8BFA3CvMnnj54BcMX6Nv84N2zuVGB",
  "key6": "5Ww5AQdsgNVt64Leg1As3xoVSVAjKKHYJgDXwMEmUMJ6GdHq6YDxAb7kPjvtr15bpzioayPPbJUpFdjUFhF6fh3M",
  "key7": "5uQMGvWGt9dDHceWwS4ooVsWYcoXo5juYQD69fGeMjsF5XcZ4cxs1SkX88QdmWnco4cYfJcJ6zJmr2zquBqpA8AX",
  "key8": "22V1ywAUFKWf19AgKcmVmDeUhyvvHRRUgmCoMuzKU39RQPGHCHkezbNLhDaqTkk8LRqmJN49BqnGpZeygb3zhMJz",
  "key9": "DUe7veVCrkSRQYb2ir3m4MTEVRtkUFWYg3bb2ubKMR3PCyvcgv2x5BVzq7tsAfxDNx7t58bUgHcGq9MKRU3oWkj",
  "key10": "4oJwU7CQVaYVmf161EgtUwncMPWgkX1isE1oauJcntbEn2mq547pJr6Ccw8we3jA9QB5UkC6aXbdWFVZsHJKh1fP",
  "key11": "2egxyTDdK17FCZ164do4UmmHjsQob1xS7tYNtgNU3bxF2eBjFPH8idRvXgJCqc65WU3mqoxKkaRhbQ6RxF6zJ5ij",
  "key12": "28fBcgCd7djMBzEmutW7RxNr35P2ocp5rtb7EsxrRakrkeMXwKV25a27TVoWhYep9h7oZb6GJofSQcAXf57CH6cA",
  "key13": "2dPnU3xrq3fiikBbBdbDTYjTogDgV48CfQ1RGJZUYSB4gAJav3yKQoYzsnK9qwth1Rxma4ZhuRBgumDLnqotrW4g",
  "key14": "2Tn3Hb5Zn5UF2sSLjhSWBKHxjoDK8VtaXeENeZ8qGF2nQxDXqaGpaGZW8pi7vA6HWFvNM8qiKLRhWUiYToHvW5QT",
  "key15": "bE4G5uSZNEgRU2mzHGCUMN8XpRXo4DJ9X813qzRzojKv9aycJoMh1sbCYpw8M2Xrx7JdzFSvaKwUJUKf9NBbwvJ",
  "key16": "4vwpueHHNwBzMFAYDZFn6bQ2BQS7MRXXwX3xr6VLJezbGbh4wqpwttiggKwSY491XK5nG8dG5cfb34Bvmo8fnfyg",
  "key17": "2SRzzAG18V8aNPPkCrV2q4iNGRAjzaNVBqyJR8dcj2rSKDRPSn3KuYUMHHK7bVjMw9b1puy2wgwvQXhRnG99aHqN",
  "key18": "3WmqUsYNdBYAp9j1MvGpav3Na93wACy5LhWfnDiFxCnRV1SiJh3bJdtgVwrDL949yaW4vbHQzcFrTGN6ncBRsmNP",
  "key19": "xakaDzMi43fCf88kqD8ohScA8rVK4to1zGkZxQiUZghhGn9oZbUMpDTaBy3fx4e244dKQQyVVuvNMcVMZrwWypm",
  "key20": "469PSyhzAARCt4dMFrTBsKBfHmXV5Gxc4tzXLHiJYzp2YjBHfUreHAPnQF5Xgg3FBZhWonSQD4wQcTmsNmoGNzfc",
  "key21": "4Qhh4xhGeeRrSqooyARSMVx8jY56d7KjxWqRC4PMrVG69VRPrMxmAbmpFmEc6QwnVhNbD2rP5JmbZG8w8cpyEqJn",
  "key22": "5x3thvF9Ef2DK4RRd2Jfrnq4HMBtgUV8eYGFzFzVuJsedATCN6U9zC7QKYjtYXkAK2U8X1d13inG4Nq39XRic8fz",
  "key23": "31neeSCcbCyeZi8zC4hHSgt8u6goK7DuGmzTd4PE4VeGri92ZP3FxzTE2HCGDPvZoqiD6CAdtfNuo7W9TXi1QmvJ",
  "key24": "5GjL6nMcc7ixFZut1qQKvHZtjiCCJeJ5FyXMgRVqkYJoHNfPUfVmiXW9w33uAngfFBbfARvzt2MFP2kAEYpcD6D9",
  "key25": "2GfiPkh8maCH4rVXgweudcNJfKNCg8t3Ccr3NhQjqJpKAaFKQ7hX6AABUq8Ar4bcn3tK11CcpDffHSPxUhu3aYMD",
  "key26": "HGJnWJEfgiLsMPh8xSi2WHjYxEzJY1iABYkDbyTTDRQvVB9yK53uSz9xRNDFXW87hbH3PzPYGCqQ8ZGD1JX7ADc",
  "key27": "Ff9ARZdNRxjs2gUAKy9MQDVY2nA77zq5MCbTwzzsPCTVhaR1xCyYHY1BEAXo8cHeqHMRr8Y7BMy66Fzb6XFGAtB",
  "key28": "5DbfHWCiMhY4o5PDECqzyZ33uUvFkX3rh75YVLWa3XB8QFw8gTcfqnXDUV7YCg8EitinDpjstqDsQvYApzXKtnAp",
  "key29": "2Wx9LSdBKNvyxoxgExBSDFWBqNnX1RvnqfoVz9Qz6Byr14wRGYd86QvHdZ54Q3ee7d6LsRFgyv3vt9mZDB7QZ3nS",
  "key30": "1i7BPvfjopzkguvqH4JpGVb3QKkdRr8BVYKta7RsEsyHv2LjG9X2GcGoymDVFm5nG3vj5iS1SQSDcEijkAEprq7",
  "key31": "3a6HwzJfNuiq5HWv61QKaxNYLvy5AVsrifBfs995ucw6iNg7jzJTWTPEKNsBThBAFqpd1hubhp3qEdvMSY74M3D3",
  "key32": "25emdZ79svrTwPptjiYJ6wAV8dcQeL8MabF4awSpWmA5ob4E2yXCbnnJxzi6PwLBhEtokc2W7hcy2uupfhNv3iKg",
  "key33": "2P2hnPZAgt4LiasbNZBUx7H31cSv2oEc1tysC1JfH5iegNM9V2T46X3qqwiPhmNST7oLD4vEe1Xjp1UiW9AQwBR7"
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
