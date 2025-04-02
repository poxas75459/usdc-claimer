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
    "349GZ7VhE1wi9G4hTMKAUzZkLKxomKy9QRpqRzGhryb9us16hYsaRAEnQqPYBPKaF9Qu6ZstS3f1NxytHEbihhoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tUqJZkPgsi56XF6J6tUEQNPtVt3qvhPMqJGhb4CYDaAKyvy37kW5X4ovSsFecG5gZsQhxNPLTTaeq18B15qag7P",
  "key1": "5dQU3fLq9UctQXpdLqkrHT16ZPpmVt8BFbvm94NiPBNmNe5XAZZvVi2Bn4h42XEP9a5a17X75EfMv3J1dWSxG4N7",
  "key2": "oXxZo9ky9r2bm98XycP55JTQ13AGL5pRD7FjE4MfD5Bh7Sn3WvYURua7QWqTufZ1tZKaU6j727S6fqCGPTqcEZC",
  "key3": "5ByoqpHNvmX5MqBsuhB6EiGmFqcVKeVXWH1qfy5CbF9vs3VZCz19EANhSSfcopFLWAu6wTQAMNKKSWFAomr9evMk",
  "key4": "4smYjFkoa7oHckm13eQKmG2LGmqrHSG9Nfbe6aQg86gECDJtX7WtXvvha6AkXL66x1zT5YdsfB2C1VE6dBSbZYaS",
  "key5": "2MH1GkJCvWF24Fh5HwHN59c8z35tnVcyqWf2zXFKrZhzqZEPQXfRTRPky5PkFBE2EUs1enWFjJb62aDywMyFE64o",
  "key6": "5VyTQwKC6tJue45NuAY1u8L5WNZnsb1adMBrVfGzLeDrHodZLUT2Ar5HWy7VfQazE3G85PUdkMZsP6E9TLXqfYbR",
  "key7": "3oqDGixoqzASvaTsDB4kcctfsaV73x1dgxTKRvkgTBg8GjrGxyugkZqsTAKwehpGxs1jPRxR4WmHAHyet5cddzAY",
  "key8": "4T7nDZCLnzqpe6d4KdWeNgCtznXQfakSVUjAJkiwBcZ3MxVXStNnQ9WfgtPgTGp4rtKaeMQu1RRoiFWdEYG8XTAY",
  "key9": "3RTBUoP95dQ4Hx1csESQDaXapFusv1QM8iYTfbrQsavnSGn7rr35om7sPgnCwo3posE95yNUvBUqN157TYFd8k3h",
  "key10": "5zAvstpBaFfhBHs3T27G9PeNR7qo7M5YVLaPqRx5AagLUzTQ8iMr6i6ocE8HvyQv3RHHXvVMSZEHAz72RSQpNiAa",
  "key11": "2ThY3qs4W5AU87SMqtxE9ucpCxHiFShmV9YusYSET7YhBxuANYFv9vn4xPUFQHVJnJ3Xg7FVc13vvrHtPnifucd9",
  "key12": "5NGb9qBU85CuQYieYhMxn1y1uttheNkxVQL1WdRHVX9NS54qZse2m8ZSgHc9azQSzynnXBEZAVZ5rVgKGYFtP2Tj",
  "key13": "2goN9gJLDcGkVaBKpDHwWRuHGz47MfMEx61r31SCkcBUVaazZkJk3dKnfpFpMUiG5cuU5NhW7hRZHTB3R3SnG4qA",
  "key14": "4Xg9nBpA3KASxJxjFw7WqMEqfCNhVeYA6rRW9Y8NanTtnzswj5K8shvdQwmiwi2EFjSy8s8uFo7d8Em9ywrTChos",
  "key15": "2pmEmPQVKAXofKbfrJV2hUu2h5uXoXbRfgkn5AhMaPWXbC6p81mUiJ3Aw3MUBLdC8ud439kp4VimnMsDXcB8Ggic",
  "key16": "27CbmVEo8Ex5ZEAqfYCmSeKMteEzh9H1zWp5QuTKUFfD6PVgYDSZ8zfXrjrGGYfYAQjB5z7KLGDBsS2dWQAJtCeP",
  "key17": "2Qpzvceefb9q6ZRFDQJXcSLbHLbanLHsyWu7QNgc9nR7cHKq98fc1wroTrPvD9DuffwLwYQKcimV4PjxzU31sLuK",
  "key18": "2qkhuwvJVU2jHBYVjXXnvCwpUSobGmhfsL9RvDz374VgUbQ3qkz3mvvHB9dUn92wWeZoZTDW7Cs5uAQb9dwfkngf",
  "key19": "5xMmhqwnhSHuJM2g9R9fSHByQS74mZZPCxUjbFFS64feodmWgM5og2pPSjV8JvwVcoJJyPWRA5om3eGgn2kTPZQi",
  "key20": "3hwn2QrjS9f3yA2gcpu3bTpWCFpBSSX3PZAbP7YqUaoo3iab5Rk3nV7VhJJnSxw7bLZTRT4DWW47ApgUb4HpHf8q",
  "key21": "4cBRXiD77Ze11TN1nhxYq3MowUQu6Mz9jNFk7HV5daGzfRQWSsgXiFewGHHRgqgXe38rTqKUBdauEnuHwmP9QN75",
  "key22": "63aWE4Y7b6yXC2JMSBJS4LVXsd87XdARHJKP8V4zQGMXagihcvMhMufqVM8CHhi7oN7hcTXJX8NJYWSQEjnY5Gn3",
  "key23": "khCTtvyjEmR5bk6mrEQmMpVjPTcS35mWUewbwQEVw9WJQ1gUs4zixqat8oEqZMfShjWGeHTVjFbN7oGATBpPX67",
  "key24": "4aKiqQcJsDRRKPbX28EZpKvKqUHsHxmqNAsuPFfPXEBdhcCHqX5XtKyWAcdSRRH2BqFbDr41ihpZpKszVrrbt9tV",
  "key25": "4tTpdA2m6DDUZvCYScNdzDfc9WcsPN51X2UHFp12YWMDTnbC6VAE13fMPRBxgnXtzWFSjhxnWzLetjKx8Z37UE8i",
  "key26": "3ibfxv1e9up4jpyH1wNAXYh1rNxHCdsVXDtVzzHQnALZgzahgkGe3hmkh4a6dDswZ4oFdAz7tLgrQP2N4EirBDhu",
  "key27": "25bQrbBkDwsN3QCrzprs2p242myj7kvL7oq1jysGtFLxEcepAAVLS6x2ZjnXAUzJrGfY9KguAvbCHH739mmozGgp",
  "key28": "bSaB7xSapiupwHkseHWhVeJUriCDRGsjCtpajG4Tj1Xi8gngrr8WkCy5UShuaanVGhFfXZe7ZjDjeYTw1GJfCui",
  "key29": "23y7DQkYvVUHfcK2KuVSBKwd1xr5mV5HY72kgfvii65RMeXzBECCEbih159x86UoE2aGBXm87Z3TpRXMzTTGxTvW",
  "key30": "3NFhPrKgT8PSazb7khV3TH4oB2b79XFStBTaYWVBHCUG3aeGyBodQmGq6cGvmi81LsDBMNt3tgCEetxJxQXyTAGS",
  "key31": "3eNAk7Dc8yTNvLroPWGqbkkWyJLGjHZxteRjJjHPCveEWYHNMXBgCYkoStKy3SscKjNz6Ya2XtcSJD2rvC6g7aF9"
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
