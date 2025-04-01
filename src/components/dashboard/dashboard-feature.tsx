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
    "55agoph5e6mAyGG2QR7DCH9F53Pqfpb2B7Kxyf8xaNRmkj7bBEGXgBotRaFTqU9wKASkXbcF3g7rRumwT28fEWZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oWsafVEwhWoN3bR2jZpRfhmf2bPcsFzeq1623gjwikvmB28h8v1qR6HUwco13zroLbT9wMyHCJHrwKHKuiDdQxF",
  "key1": "4e7FBxu3MPK583jZ8C52BxdS66GXDeJGct1KMdji3DxpudNNiYuTLmoZwSFBWox7koDpWyTNh215fht89kH8PdVK",
  "key2": "5gsVM28JTZ2TQwbxJDq897Rn5AZePM4bAbm8Qyrwa2JW4Sd7MjBKaYGnAqH8xa2bvSx26WnG2ALNZpmMQhjJkqHQ",
  "key3": "3uQ9J8pggEDs9oZeEDZXN5LB5e7Ana73fcmiFtfetGvMZHxacJPHa5Yc3HDbAer2oeuRFxruyQ43NEHqDjY9Wxv4",
  "key4": "59DcLW4qDs7ZyN1EYja8jkyYTRbQGo2Uf6eSh3LbeEeGZ952zC9PMchUhQsiDXduwDttpGnj86RnfQtnUN3VUNiE",
  "key5": "cmHipokXKvnjYgRVC6qogpc6HxRsZtZJifAmehByWhvhtVXDbPLjTzeUJpdk1YWtpUGirP6oZUFKnj9cdUgW8AP",
  "key6": "2cHCnkxqX2ShztU7ZTGSAW6g5cJdEnJJKsrrjghT8HW7E7tcyKyeJfHxpcNFqDhoz55owifRVoAgsE43h1PNdb1j",
  "key7": "3iyoR2WfT2a66MuJUqdym5pkKtTSRqtBehUXJTCDfzdC6ZsLxhHGmtg4fFR2d85SnrEGjjFQxwQRU1cQp512ZBH4",
  "key8": "2L5aZCW7wTd4vUZc825UtLfvcEBjkhPdyH8n6hRJMiziTxeSvCNH4pekRHasiUu2Y9VgYzitNMaKs9aEKEWe4pyu",
  "key9": "66jveYtE479SHbdM2Rq53YwxzWsPADuZYeCU1djNo71CTaecCPMbEs5562xznii6fwX1ddSysBiTik7gE7QRDHJF",
  "key10": "3Z8nBmUF1fieD9bhUDz3a6AsTEdAmKapiLf3EsHoN6FC9qJZKyGEbAb6oWp3HeBBJJQEu6s12pcmk9JPUVyFac2v",
  "key11": "3iuyAZu1KsGmTGCxJCz4uGf7tjvwbBM3a72oWhgvtXQBefyXuzS9KKT29EL6qkrJpD11LHwJeU84Y33eyGCVjQx5",
  "key12": "52ik4Ypzk7YDCVctyMYQY3n7BPF1gBB1hChE3qyumHXbht3smyC8kwSpQJjcvdY6A8bY7vP9jhwSwYjk3RuRie8f",
  "key13": "3XrJ7n4AmJ5UUGGEiqyvgf6zhv5kJGGQMkNNkM4DH3wLdeQKmBf8iGThEui87g9dDretTtokzkR6We6LYzDzfZe3",
  "key14": "9DnBVCEZjcwHqsUiS5oRq3WM1HnAp2MMrGbCjkzA9SWYWAthsrs5bKB2g2nevN5roKz6MWXUCX24HgM12AKyJvD",
  "key15": "5adHNdmeWDaypVSP7ZrdQHUtLBobAs5D5b79W3AvmY1sqQYZKLyXpeAcuMTb8qNLNmfr5QjPpfrg1hCZkYnrshAz",
  "key16": "5uc6f1KVDrYSDHdiZBmdWUkRt2KiXYYK6jBnWZPSDU8Z9X6kaXrRGFYkcZ7PVLVCUKSV6pWNMM6Rw9Cak6SANrXb",
  "key17": "42KuZ4XZLwe7XyqqH4oYz3qVf7o5qrysRDYAxKd3JWdp8ZkxyF8FXh77gorYf5gG14pzz3nmYDpeqQ9QP7d2tnGe",
  "key18": "3V3ZT2U1sT15p3kX8ZWB6dRBpKUh8EL3iJ5nq2v88khGoFPZdkgNb1evFkHQMXu3jnpogkvz9Qd1g6jNXrbvQJ8V",
  "key19": "D8x9YEV7KiqL3cZ9EpcRXVBVENwwugNdFSnynWJsQsKKZPNf84PA4QocA1jUyzMiufdDHsMhRth1C1mgwzmKNSx",
  "key20": "555CnKrYnhsGLBMde1qmf5NVtRHaj5End7a3D7obA2go256n7cB3RzCzTyFyYe8mgyB7XxdbWHRTKHm9ZxcBQ23X",
  "key21": "4yrsCxkqafhMacv28BdQqrBYEzcFfMbfk658cUh2cVibF75QeZC9aMaDW6Kr4Hi9d4PdCjXWuLHJASXg8K7Dk8L2",
  "key22": "2v3HrTdSYAwsKqAX3YJ2B4tGdpJJnJ3AGMWepEaDZtcPdWP89ycFs11eP9YBNU3zAbfz3AgGsazaQuTn9MedcMBh",
  "key23": "2RDiPpvNFtZ3mENMUSXvY1w4XyJAVTd6UVg9BMLz7DxoYh6tCUn2Pxx9RGsAFSfE8MoqjbgA21FpCjHYBzRWbGqy",
  "key24": "2pZbVBc7UybFYXFjSMbCZ5ybrURuf6vbk6kscrTqx6FHn41q6XwLGnSibk5UuCYrGSWidsX1ja8LWz4uZTHfT1q7",
  "key25": "3pSWZgtY8UVzFZ9AsxNFY5MLPH4qhKBit9iDyNfjXH6ia9DgfhEX7ZcwE2cjPJbY7E8zBTsnChhoQDDugDkMpYFi",
  "key26": "e86B6Bz7y7hfNzoRdaGC1ZsTkJNnqUVmTHVUWKnYwXGJK1WQFddSH4BDpkF29qTp8wmmvjEGYnF6RPNWq8Laedn",
  "key27": "6B6a2MjWVr4cCLXhWMduCdgXJUsCsg4sZtDWgwYaqEJffXhFaQeYWu3MgazBrSVdVD5Jv85vt4TE8m3LDijuGzP",
  "key28": "2Xmt2JQ1z6U3crSbH8jVEGx8FMetrDS7eUdHqwJryHYHezGEox2JAgiKeyZSY5uKXGVp5YPuhVSxkt1GYpR6YSVG",
  "key29": "5omv5CzhJ8vrhdC6yGm6m7WBmsvsrfgVTDJAqrG48HE94kdiHRp63zX4bkVpuEzpKCFwWrkqvceNubVF9WWaKGjs",
  "key30": "5bSPs1EKJ6Z73DYFPZY5C1JbDR2REf5j6ptkhzL4UFgS4fUdR59Lhf5xgHA1ABUsCfTH7ouHrmERfaYyJMfsUexK",
  "key31": "3Xc2NwpRmgcoeJGpuRSWrh2cmzB8dkZSu7Lfjcca9Etu6EJjtYYtub3WLQFQqTrpt459j1DnHT7DNA4z8v8bumzU",
  "key32": "3LsmoX7pbARqs22yDMcsUXV5XfM8NuWZDA65uvGEs21tWGjXdKnMwu11XwohAge98iDSVrbDUx1G5iBsW99ywpqt",
  "key33": "gkAi82GEDBbdWD5wq4KT38vNFjk5jaHUkCuYczVEWhxa5kx8ViqBGbuFP8XCw5FBenzwD6JENB11EMPQGX5a1qC"
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
