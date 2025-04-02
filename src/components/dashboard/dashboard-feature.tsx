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
    "BtUBksAbVhBgmGj3s1zMbQt2U3Qs78fB1PWcfVrtW9pg7oidp1xG42xdj1t4DkBfcEVUijWKE7LiKhCE3UXRxvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yn9KDZJQwAiG3LSkiF7Aje6wx2MuhQ6k8YGL9YSdL4EzB2dRdizqdGrLznQBK1YQFaVH2vBvvdLzShm3ehDLbxt",
  "key1": "L2wWuRwv2kwsLNZ5j8grGXUSTjA8FQPHLv3LAsK4byLWMVUDu7XoUmjcfSbStQBKMMDZo7FrwB6g3N9X22zFq6B",
  "key2": "5W2foUZ3StzAR88CkZrXK4JHwPTBfJD7bD2nesZ1MGh3AYA9yyyNp2sEAs18Y2gjiuRZnT7bZ3sHtnmdg6BobqAD",
  "key3": "51PQWNnzP8gTSNX3nSSjhychZx4KADsNoup5k4v9zH5QvNTJMsjFEGfB63veaL9XxBhhnLsf7KLHtWELU7oCugVT",
  "key4": "3Ra9SQM9vHXGo3c8pimft7zkp5HstjdZREkcjezRWff2JtLyGygzrNeHbBr6HW8sZg9GA43AvoYiECfEJKxJyoTZ",
  "key5": "WGx3aCWFDKqje6LgCbrgDpBUmdvWjtNiWCT7X4JhwQsGvgmCdpTxMgvY7xW9jB1Kb78jDiaaJVRCnrxYhRcAzDm",
  "key6": "4Fd1WjCKEsHoLUhQYqTWNfHEcFVq9LxCo5eeGLgswu5RC4B6xYQXjx66hCUuJeNNw8GEZ37BgSqsqqCk3RWiUFf4",
  "key7": "4ijWkza4PedTQ6ZpaqLkyaNqk9ccsfgLpVy33wfigUCyE2f8zeVisxvBhdgVfK9SLvUhMyxhgqpgunGrnKvyuifQ",
  "key8": "5qESvVQwdYSjZnvomsREikzwv2QrYvBkvL4EeNu2JYGzrWMav8NvwHpuqyvybLLFGnVd7nMYNai4QWFXUqLRkddU",
  "key9": "2aAhZyBbu3k62omCeentj8hw97jofaZfhcCM16qzR8yeEkyJz3gCfZrtdFuwgkvE7zEdbfiJc6uZxSUE4mbXbmS7",
  "key10": "2zSTEJMW3sGWuDrdeiWdkCaMQCD27i31Z2etkPBmUEentEyeXz4zqXhJA4tC9AV3SE9wSTbPbPdDMhaYVddWPZfF",
  "key11": "2SFbu7HBLohJssHyvD4bR4BVyFrCJWBF5QhkDu6fPZYSHxhgNN72sjm3mmWS97YsXv7UKdCGMuifZknPMDLCkPse",
  "key12": "2btwud9YZ137nkNNQHFk7DBh4yg1H7KJwiEnrBECBXNTLdjtLA8n2vdcerq9iyLP4kyfapzSq86d4EwZfeKqQTZ4",
  "key13": "4ohxKgdowNYCFZ6zsCpaxnEXCcz7TeMtTyhbhKHaMsDhZr8DhRLCuGmtSm9xWAvxZxHrkpUikUPDUn8QUTVhccmf",
  "key14": "4wZ7qB25jJoM9BDroR6nuHhsjPjVnSKq9fa7yxf4osiSC9Zqrz4WxcLNVEkd1CusK7oufVUZLFwDMVzWoZaPBoQ6",
  "key15": "36DHBvsS8wUa3upLo1ZjrJToDhhUErCCh338QT24hXXsreQ5Mo2DeLC7hsu95sM9wScU9EXmWp7aN6Nc4swwpdX1",
  "key16": "QPtVRH4FVgRfidW2xBUPggtX5CezPF8hHB2eYnrvYjTD8zkwWfBdEdP7y28eJX5HRGtSxHUZ5uxHTCutwKThqVz",
  "key17": "4rB9jsVKtSVJXsiUySqNjU2dCeeyB5vnJVP6c747o38Dp2ic6oPQoFGpHMoYz73sw6e8bpoeUS1TKRNUjdUeecaX",
  "key18": "UKysDVXyQuk4Y58T1bwDSCvD3SuSqbHPajgEXeLEgrZDCixw9CmibC2wD6LNFQNHn2cdqkaa9GNP4o4jGfuK9fW",
  "key19": "2Jwtkza7isrCGEdmxpYdZqCT5kt2p9XY6Y4Sqf8quxf4T5Q1fkHYnzABQMWqSHuNGQ3Ww8xi9X5YraaQ7F7mM4g2",
  "key20": "2qGCUWKx8PfLoFEvA4Ve8KHYXXMd5J3ifTHdvNa77svP3PE2NPm2LsQg7BWBm9jRpAkpS1Bmwayh3DSz47Zh4gzX",
  "key21": "pY4y8KshXmxTiFyNdTFgRBbhJwVpLFL5d3Ry2WHjoQ3JiiveCGu3Hf3fKQzbMGeqX7vjqrt468hBaiNrFpFGwuS",
  "key22": "4GK8wMu7ci9o4umcSQCTPo1th6xKKZu69U8vACN27dBQ6jAhvWAxEpqPSSYUS9zL4ZjEwbcSCEfRt9x1SytEMXgj",
  "key23": "2QHyN9Sw3KssnBCxrDJHLtn7zHyCtbHFrcCzvP34S7Ny8z8GzvpzjDXYQwyuxgcNErAJC4PUTKikhdbmEdNh92X8",
  "key24": "2ESM31uQaxDVgD767kC21e9WAzHbmB8uyWFQjF7Mjtm2fAoThQUyPH8TjTo8J9Fop2qffQaybmfzEwTHDwRYgqAB",
  "key25": "5B2JLbni6bzU5H3XYpT1roVUgRMrWDxtJ85PSkwXWCeuyAZNuU4axPRp1L3EV7yZfcd6JMLmsN8z9XehAaohFYf7",
  "key26": "5q9AkhXZS6WywWrHDC7jJDAmWKhuukLYgPxv7PBz7mUKTVLXA34726EV5R2aerzdhCE8ZU6my4TaHQqHK48h9ZMn",
  "key27": "4WmokS1EKHPuDmBjwiJrZr3ktLxNMuLzTPrnRbaWtCuBcL6pnyQrZ58Qievy98QXUcYWkkvDAJu49aG3ZQ2Hx2Qg",
  "key28": "jF4Hidoj4naF7tmSDBCXpxDrFeemcraqdN2Fh3AUVkKnzn5zrms5nVt3fiyhteiQmYfYs1e4E6iAqM32v4FpB12",
  "key29": "4vGHpb7H6HXaEA2zbUHotEEQeosUKsxHoePYVYsB74C5EndAsmDmR2M9j3PRuLsLWhcV21FmyPB4XzN76xc8rjRc",
  "key30": "5pdVYWpXkjs4icD1w3zpdqP3E7WbAW7Bg8HdVFkvKT9Ssi4QY2voLadpCHcriMM5nZz4Vn2Mi5LxatL4g2ZLc6ZA"
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
