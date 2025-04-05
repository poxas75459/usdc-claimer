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
    "319C8ao98HnfgiwDVrmpfPDCbpFpVm6a3DdBwpwPTwQjg3ajCJGg8siGVv7DhWrMvimnEBU1SxHNGDKn7DEMtfDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gyxz8tYb5jqzwaKfoToVam1nXKSRwXxKLB7Aut16D1tyUB1SYaMAy4Nx2hWhZETeNFQNMXyMEPKCRTr7iCkv7UJ",
  "key1": "2dndtvQCe51tuzogDd9jdRoSeLtrc6uoMgkyNUiEjdexzYFFpGmGF33nxLHLvHC5tDDE2EsoQEky1xgi8EA3pcch",
  "key2": "e1PMDSshrZiwyD74EVkGgB8kC4bY7A9BXhghfbu6LbMQiTXAzK8AVyNbgAfdp5xAj3LGP1j863wtvdBG26iRaxK",
  "key3": "2xxpd8MP7rDKsCKac27ei9bropzpQtdkRbXS8D3hXFccpAq8sAu6WDNa3HsF9d1f3x2kjbXs1jC2PULmW91FJoPo",
  "key4": "2S8TX6am1dqzEQmidUQ2Z2UjS1qHkm4CZucnjKasJepqR7x36wytb2NMWXPBvdk9qy4i3aXDGHRcV9wGYxq1jgAr",
  "key5": "4xFs4NShtSQrLzjnhdHbfQHxteXfuDu6zfe4c1ajnq9NTeXBDeVCfrMh4MvxNpfgp4ft8LrogG6Y6YNEZ2nBBscC",
  "key6": "WTjWjSfn7JdaYX1ZR1sXMJpsFXv8PHDcKS1Ny8n4UgJSQ21W6byEHJeNic4kyp5YPoTss6z9EFTRyrZvr4kFBDZ",
  "key7": "3Kd4H55ytSCHgv8rfiUZcCeTGnmvqrFtvFdUkGoLBextRb6RKrDxDBdSjLenvYKx5gS4rb72q1qo2oHsfC1xpewo",
  "key8": "5W1AFjZ3dFs3PXqw4fZNF4r88mC8Xfd2ZXtYaTXjYe9DvaShm2k7Yhh4FQFoiNZJjEC63VcWJgsa1vq54tLgLJn2",
  "key9": "4NRo1Dpo6cjZxX2nbHvrQ75GZ6ivE7S74SbLzhCSZWjw7NS72roJeuHr6Cp5ynBCsKdCAZ4vSMQfB8LXGRvT6jcT",
  "key10": "5fBcBHQ8VLRrbeBbevcxaCSx6vBRB7V5yDW2Yi7Lruh8YZBMgkYs3A2eRpGHr5H6UGZPBCFjsZLFQvTxhU1q7dma",
  "key11": "3iew2L45TK3apksgtAHTsrfqNuiRQTi2FRtf2438JievE11oV9Zj425mZkSBwvkhPRoEe4P1UVreNfuFaqbNDnM3",
  "key12": "3f7HXKzBmRzd9Q4CZVRMyhzEVcVthE3rxvbAYCsENKAqL2oCWQBpAAAKSk56iM6CQN7KxW2agd6qUTKddqRTXBws",
  "key13": "4YmwD5rwn5S46a7gPNfgeWr23g3enUjU3JpakEL76iUjDfnLJ8RVYmeeg6WgC8hYFTb9HEhLjpXYEtraJThyVrw4",
  "key14": "5PJ1ik561Ccter84pJJfHmvEC5DzLCRQ9GTU1kssSJe5CfBAwd55sQYpPBCymypkQcirP45JYnY5NUAppAgrPAoV",
  "key15": "22ihbgFeqrSbTMkTsytxJB9zwgea9fnGhbPHm3FBgVwYjKpM9oLwhsGCsQyPkRxuBWCwbzNASkGB7Y5hpLh6tyvy",
  "key16": "61EW1o15cBaXj3bDXK3R1iWmHRmdvqfpK4ivwDXVpJRF1L8TWYTXQoyiaK61V1RNF5LzBbXZuQWn12xcRDZpfYNT",
  "key17": "3Hw2iTEoECLZVRXuheUGUkoZsjErhtzG76ookD7zshVWJsauQUqeg7gRu19rdRkmc3qE1LsD18Go7d2XMR6QyqGB",
  "key18": "5fFsQ5CobeduQS1yzkgope8Ej2GDWs3wJ8jyqqHDfpZ87s7cHuKUafn9fhRwWQtwwTjeoJWdWxHWYrE8MCtRxH3B",
  "key19": "31ekdKfCDtZx4Fj9b5RKmjHSE8yWxQEruXEyAdH2xokLUzKZPbBsTUa3H7YpoDyyi8PtoKrFjAWBeevVUVdMLgiM",
  "key20": "2DTGmBcH89nUb9pB7mTpVaP2AtDwfwjemNYnMFCkqsYPADH7bfyPaqior1NwqxiE3vcogvroUZ8WCZTBDWvxpTuT",
  "key21": "5bYX1DRFn71zfr3etc9A7Awq949rXJobpFJ4yjrJJ8ccPxMQ3Yb6tJqcBZEwBR2KbQNCkMbWrqGmZ4wWm6zjFGjn",
  "key22": "XzRg8fuZ9QFJkcnQgpLrwSXcnrKvWp3NviWTQy53CX4XtHAp92WwGpLqSiscuyr3p354DF7WfkLiv9Azav54wHt",
  "key23": "4uSkCmmiBft4TVCBFFkWEFVS1g15cZJ2sAV3LSEVC1k9svffMyoKskfpJqxmLKaFMVJygi3hULRPRXeG9cQqKXE1",
  "key24": "4p9BxfMDd67aRNB5ZAq9t8gxpNKpJ9AZwGJQ4uToACTZ9dt5NJGLNoay1k9s821jdggZvMPfKnRwBd13L6QgcVrp",
  "key25": "5SQERhthmB8A6DpGFYrRoUZeLbL8udG9sW9UPTh9anCrAqZVuResF9F8pRCVU9G8WYW9bjanJBkp8eoMC1P23Mra",
  "key26": "5tFwuAMx7GrD6hqYKCNPT1qbpQRxpqT9hM1Nf2u4xHE3GKU77M4Z39rb878kziqjCtxhYrXddByXyXiHeFnBqJzw",
  "key27": "52As9nUjzYefbCJwNg2DioyBdPXQcisBofmjS6NFDR6on7NxtYa3gR7JhQReRmoMwJ192pgUb7jakWzbKm8oCTXX",
  "key28": "31tb1nNPDUjoxA9wtCPBoy6hknKZJ39jBTaGVx4ZERzpXbL2wDXg3F5jV8YnSGHmas5gjcxnSSNaGrgeUH1NCYoc",
  "key29": "5pZPgcK6gonXmLrn2oifTTXjZebKm8AudG43jVvZfQgGQ17uS1sigJAAoD8ENnfJG8m1p7vxdnnUyApMjbVRHN4u",
  "key30": "3hUBJksr7Q2AZ27QUXxgMRxuit4nzELQ3wL7ZYZyfibrgKtbqjES72YmXcHLhGR9VNwZthDU5TBt2XRAZq9QToy8",
  "key31": "4JoZ5DjuqxDLXWpEgMDdCUKmZSdsbeWQTtufNqxizBkjrZ5HnR9P8fGta5Vk4TT5zZXySaoQvgRxPPhNd37fwZhG",
  "key32": "37FqD41SbwxTy6Hfh4XguAryie5MpRftpEkEr6BQXwjTvaP7KEApJV3Cfj2QpLhYjUsvp8UDdMbGJeZ96BGNNwAn"
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
