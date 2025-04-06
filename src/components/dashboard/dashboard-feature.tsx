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
    "q2BMgmS6i5N5doLH52JrDRv7msvViG8RT8pmXEgFd3FgXedqjEa1QKBHogyUpE4Fd3N2UWDQHw2tU3fCXsyBh3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MgyBUa9bPzF9Hpo5u8gXJfwRKw6s9cMu8ZSJfgzGrbMuuvucDtTwxuwS1XqZnEcZgCZmBkfBSKJ2NNfFYw5Sdsx",
  "key1": "5P7CJxY2jiAuQqbohdCHdcnwHbDAZMhRF7WKtSJ5UvBhpodFncsKuUddi97HADMT9TXEJx3BZBXf5NprKmX2xaCr",
  "key2": "2pxXRdGXEBCjQz3BGC6JQRRmfvUMxaQfagECRq3SQXCyYrmUVn4zLPAXL9TjMvDPm1TbcAiBKcWw4iJ8WA6ZrouM",
  "key3": "4JyFdDuYZhZG4jJDVx7QDhT9Kgz2qd2nqcruyUktHcNrX1g3xahLWgx5x4n27jaGTkYNNPNznd9avLMDXSuGwyTM",
  "key4": "31bu6rm2N9uBxnP4XEdCDb1Hodva7HxV78C5xy2sUWLRfpab4gv6ygKhdDXk4QVA7yk7fnW8xppt5SVDKDdaKZYh",
  "key5": "2VqG41TQ5p68LLc73K1wkbNKbvDf5n7aqWzrkcBQgkuQHQfASbC3Xc4f9Jq9B4w7BnPHc9NkGryRqk2gaqz1Uo87",
  "key6": "Xdnb9j6MoU2GQgN2Zee3AbkVrsTKF6YiEJ8dPrczjycspM7far8u9w3xiKX97VLn4EcxZobyhtoWN9Uhobj3DLb",
  "key7": "QdtL2pe898PVzBwEBeJzh5tgAXLenWU2qg9rD84joitdXZkbb9Q1aA7Lgea4gAHZAYWcyGqa3uCQA5sLrTNrYTZ",
  "key8": "3Bxq9q8uJVnEWPUinGa6rsiKBWYT9BVEbcjdFByTfHiH63CCsH8ZAqm8xfoDSuY5EYyTxmXtMzLR8MVRQvDzdNpA",
  "key9": "k73HWyKPYmLtXLWuH7TWvVAFcbQzGAviAwgD8Hw3h89hiJjnhAWXHgFkFgddjjJvZbDv7gjpruawZcFW8AXriff",
  "key10": "3ZHXV6pWXVrky3uukpVqPxva8xwvEmDkNKoo1DTYdGjDZcYJg6JosjxPa6tEEikCfjntg3X5ABDJukgsiw76wd75",
  "key11": "5A1buvALs6wnkhhXibGMGa41YaR396H7upTcRmbe4dWRiZnRVRdA6ZYcREDHvhCgmSqahK8uM3cj4EHsYjsMpXnC",
  "key12": "4N1WzhkoY7BTcm4m8ykTZrJTxkK6GcRhLZr5Nsxs1LkThWHuAPDCWPsUbXFSQ6tyqeaZV2qBNQxFNTTctt3Jgq5G",
  "key13": "ctTmtQP4NrAttqNjry4FGv5zNXkmfk74UwqcaCtoT56684MpbKgxNUmJzvnTzFBG5YqpueFDGB4Mq6WaQ1GdC8F",
  "key14": "5YVfsa4WSRmM7nJqeHrzaF9z2jZ1EiZR7M4SaRFsvTu8evYrZ6Uh7sQouBwuM7CXzFQn2DVA1oJpNg6NVkAu5vQb",
  "key15": "46VnZJGbfDLb959NHCraLkJSZozVmA6mDLqWBHTvuRMyAU1rFm42u7SHjXYbMAFHhaL4HwywWJKdJYRk2buvanvd",
  "key16": "5q1dBk5eDRJmwmzZhuiBqhuV16fXLPdikrzUysP1ypR63bYGsHGZGsTo86sDVCqA9FbMMoEDVpBPnqJp51ceKoZS",
  "key17": "4V5YkKMd1iR8xMEsr21Cb7WnFmY9Pj6CmBB1THQrH4ZWvmYEie6UFZpRfvngpyJjJ4nyJiJBJpjwgQaPaqfvut83",
  "key18": "2QHTHzUaHVfNbmBCZnE5RM2Typ95hZGByvwwWMML5ABDydcBeNjaS1tZY95xQj6NKi9gPX1LEdV4EQV81meThJ9r",
  "key19": "3cz7b1Zfh1nbN8ajwE6zUudEsTiAoQfZbwN3wbANNbjtDwGp2mEf4Krupd15GEBG95Shjg32ZfA7koZ6p9rhWx84",
  "key20": "7wJMDg1AtUu6yZAMsuU2oQgx8AgUinSCBCQRAFkyDRvLzcgu4LMKAHdKnUwdTddjGi389mDScYxesJ27qu9e3KN",
  "key21": "458Y3unz8ssEggiWz33hgnT1JGmNMGmUCLAgB2K1eZfke9Zy3ChJTuqdNJ5cVsrDCYt4tyoi6xysLGRWEibsvG7c",
  "key22": "5r7QdSQXA4YoEwGktphG6Q5xuu1uphAbX4pae3Dq6hCjZ2HYdpuHTLu3SB7YfyMBckxrRgsGrvtrB1brrRi6T2Z2",
  "key23": "79W1atetty7a4ZuQ3tb1XiSZWefZ6Xfwya4DDvJs2wMDfHDdr2ECGX5XyrgR4uGAEffmPKVPMz2u99Vdj7k3D93",
  "key24": "4YgMPGxASZsvQUkd28TPWEiNwq9xGcT62QQr12mZ6nL6binR8KxfqC61GhKMUcKdoiW1hVp8X8MRTrVxFAeWPMxB",
  "key25": "ZE9XUGjgMn9x4eKHawoeazr3MhGpFNbCrddpS5YwaRoNJAsT64gbqbtxVvoNiF2rw1E2Vvu8MCk8yG4a3sneTQC",
  "key26": "4UocwMvmSfTP1uupKzovKVgscuTrXRLDnkFUTwssnRLD5eESFeLCsuqu2EtkfLJN56wcw17KtdLV7ZUGdQ22X49M",
  "key27": "3oqZ2VtKQFu5T9CqRz4Ea2MDmgM4ZqTndNov8vHf2dcmZeoXFXYV1dDn1imWWgAC3L3MXaJWi4QukkK2eDX3PG2i",
  "key28": "5UFyCWp8ZbWxqzmczoTafXB6NZzgiNtunPw6W3MD4UgXV78rxN8FcYtzzfc4MAnVQYgYMkNygscXuBTFYhy2iVQZ",
  "key29": "5SHDmYikhMU8QBZhDmT4natCgcBx6JNpy54w3QDbjMtEDCP5yXKhN4deeQw1X7GdvGFNNWJLQi4jvX61dA5f5jZt"
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
