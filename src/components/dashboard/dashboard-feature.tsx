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
    "5P4dUYs4QYoc5HcWy3Ao9gtTTWnoE9wcA1VDxGRbPXSaehPm9QsoXzQr2DxSaRbHr8ksBLqni8jeuJdvwBDuTQvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YHfHB2VeyEv1jYfR19CjnTHksrJhzYQLMRcYoY6x7kZcX4qdykVGjnEtgnY9a4BaT8q4HaNhZe7S5v1esmDReZx",
  "key1": "LDbnwLW9ZvZW5VUGLbJtRnUDYe6SELSTLd3JNGz9R6m13vzhhrQ5uHGR5JWaKVQJU1MqMF1Fba1i7wjtcRCW4Fq",
  "key2": "5XksUgpQz2Ng2DZTxkdxAV5rbiCniwZPsL6PJmVjPV7sBtLBq6iXanaXYyrr32eGzMvmE9KTwEVpGCcuNBHuNQNd",
  "key3": "2K1aSp4yn9eF4oA2htTjxx8RKFJSak3pqcdQJuKDEtS4YwK4CPjLGbzoUNjtBXTp8A8pyiVn3VQuTojq2W6s2Cvu",
  "key4": "2e4tsJ1ujdqWoN4Cc4X94MUe25Rez1qXNx7yABocN69jZxMABGAp2EtEGRCYFDhGZwVg7HEDVyG1nEQFEbtjKWa",
  "key5": "2bH9GuLxW3SaXWCG6DqcTaLHq9wGyjTmmArEpLGPeTzWgUCfMRFNfTx7krWdjekDfDEG8X1aGksVyVchjtUxegHH",
  "key6": "oGnnH8yf6gMDXMrGoYbzRgGwpq1mtinGFHQaPNHASv8HVzaqtBwHg3FudTjpqbCebHQHuVDbcuMktndUWXo39Cu",
  "key7": "542VbByzvAAxPGV8ySZ7TEgVCSvP7yW7MWrJyBztkrM5GAvwqujG52LoVPn9aBcEg78NFYK6yvAHBa8QsZGD2zv9",
  "key8": "4yyptULcLqkHZT2rRk5Vo2NmyKHuHoGttuk47SRkwnnwfuRWHCQR5xpxvWDbcE1yC65yfro7US8z9zjzVyGAKG47",
  "key9": "4KPnHmasLioNycfVzXwvDELYznPjPdDw7WpM5irxWYAvRVrXdY1WfXKWsNhuuLmwFrSe1UdDqsZKdDJoWKJDMrbB",
  "key10": "5rHUAYGTGSj9bTE17HSDxgt1DqbPVyTbZR1GoPUist9661VvqVgUkMt6GU2W1Vw9JCmwr7WihhYuhRsURRMuuJ7n",
  "key11": "33tdB86HEjVLZzcAePWq65xVeVp6xFNi6G9weuu8qTMNmvw9j4upj5oFsb2vL3a7bJu7JKaSCAEhswM1n2E42cGw",
  "key12": "4LsSyGrv9AYHxb4LXtjSQECtLDNqTJPF6rYhzT5pUnmzjJQ975m7afy28pJcSpdckK1Gn4wUY8QXJoCebm12sCMb",
  "key13": "2Uq6QdUSvLFMRgLhDoRmQ2MTFrVbgzaMEXUXeuseHVaWcwewDzv4MLCy5ZKCumFYvNdzwRpU2Fu2hxoF1zJCucGp",
  "key14": "2EkowegjAUbDZVm93gRNuY9udKKK13pGpGA8oUpHYA5BzcrAY1unSXtPooGDWeUNhD7QtP6VtSXdDMfj8pn4evWC",
  "key15": "2ya8bdWFTanQ1Umt5LmKSGKMz4kpYFNz5iesArnSRyaVDyEpZ1jQz2D9txKcLunVUCeaDqfzCy9MuehqTWHYxWgr",
  "key16": "5vfx8CLkqXoFXm7yNiDu6uZYzTiAJFS3hKVuwiGZPxwYaoTwQWLSMCkbhJXC2AKVAnyq7L35ev3a1vqiPEe7ZFiV",
  "key17": "4XRmzSirPCekASDcYmTet83UsUdShYdf7fk16PMvaUmaPSQSkjGvd8Y7272uLxgMt1UqB71t1ZBzJmMgkwd8XzcC",
  "key18": "44gC5XWZ9u9kBYMJcogWH5djvY12ZaYaCBM8431mUBU5VCbtQWksMDTyE3ZHQtCNyM3rY4EoeE6drjaq21BTEA3X",
  "key19": "2XFtWsg1nkyxRhpExcYwW2vNLGQTc9LLjex2a2X6e83AnEJgz3uRyziyp8hoz6bmiFgk3XYwFMGuoPENYP4cBLe7",
  "key20": "4FBnkdihkHgiQMvHG85jzqfqeKreNYV15itCgQe3tAEejEGirnTFQ6Auqgd4LqsWXZMPCxr4ufdJSoUVkXpsnqJp",
  "key21": "inEFviYSLYj3LDgxTst88UbverrxwvnZNs7ihH8T8jabb3cnhHC4fbQtRd1pHQnr88MLGxPh6nwTK13zmScSvsy",
  "key22": "2MFSYeg1jZRKaPTyPLYw5FtUkZAZmvkZpGAi9AUiFAc1dHWg8SHu7dfJvASJXUE5kEipbV2z57NdYz9snFQbpJjo",
  "key23": "kgqbWQe7x6Akc8Zd5g56Vhtp89WFVkW7JNi9WUWeKiifYQFHaY6QUJCnkxgFERvdZQFz3cZQRqSqVXejYNBHBXc",
  "key24": "R8LerDNCsqSaFsP7YrrcwagQ4xEoX5mtiVUTHPNXNF1TFwNkbydZRoALhVnLFZqUro9NvnQZLhwS2LsMiv4iDpk",
  "key25": "4K3zHhFBKXaWo3RRynnVdXEcT8z21A1hiPKAqQMvShpKz6HMBtkGBqC1wfBzUqimUt5Ua7QzxuoEsDVMiju2aKbe"
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
