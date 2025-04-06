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
    "53Qid1Dicr2foBeDBKFqsHTHZKux6boh918NHa9cNyHR6mxs1qSqjNTrwRgNbR53ZpqQRfX9TWf2RsF5iBqJyBZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pUZ1TGHinLcUhj4nNPKmvxxDrZcXdzC9eSLaC9CX6gZYKCm6DiujYtGbreM8uvrwomriwr6MqL4kVFzhb3wAeE7",
  "key1": "r2Vk4Z3uviwKvbKJdqMTWTcBDEK2UxQn5fb3XAVsb5zrE9FmSLnxL8h2eoMABNR9C5owpDdLq6bXBQ8qjNniHCw",
  "key2": "2GzUitQGF3Lk9wosk1USXJv9gXXXhSnwS18NSXf8Z2P7CTqU2dmTvJ9savLaU9fTETJkMy78ndoyXpmCUJKRvynW",
  "key3": "654JoFKLSynfXdqZ9AvacKWEkfoS5zkAp5goH2fVq8f5nnuDSzChi4eNfS2VjhrJHDvA9S3D78JSacXun9iQuogL",
  "key4": "bMCVYmgiLt1zFiwQTWfSfegKpRzaBG1DSMzFyNL4b6FVdVB5ULEfebWuU3Q4AjKfE7kjQNQVwA5hTmAjb6Fd1FZ",
  "key5": "3LVEEwaGcQ4ocWh2aeLFaogahcdKwTQ7wCzZXyZYVwKh4y3Yr7ycJnQcAM2caXbnWrysA1L7HqULmeL7xetTrht6",
  "key6": "2JmVY5gPSp8QzATLkE6FsqJ9zEXxpWT2abiigtTVP2Rq9L2aUyM1k4ecf4DRWDh1zwXeXGg58T4APjYfAg2CiWtW",
  "key7": "5XvwAFgS23PYxbivmi5QuinqjK6vTkJ2guJ4fGqunCZpfMhfnShDpgk6MwHkjaFPPS48W3MhoEZPpJc6DoDmS7J1",
  "key8": "SX3CxJFoiNgRWohAAGNsp7o3fgiXCxZCQRBasyqpLa7diHJyfgxTYLYKEFps1G6sVKQFiSWjwdQQEfmGbwzp5B7",
  "key9": "Fxfhh2y2ZRKV2KrgEq7j59tNx42rQhErCwpUW5Aqju3NNkFBMZ64nquR1fxnCsX9R6JvR75WxAV7Abj3dkXpwjE",
  "key10": "37KssxgPzAhEwYUbXHKkK9cQUxFyi2Vpx2hRL1TYUEKZxDgfXRfPNokHjeCEPPbqVPq28PVGBDxheDbd7eYUQLPe",
  "key11": "59JMzvbr96XQXRsiQU44MyafU6D9uVqwS3wTQKTKdtT3a2QA6VVAZXvNjGvkaSRv2m2LQ88Yj2usUVCx4dGYEyfN",
  "key12": "42uPT8i3BCRr2vq4nqMQ5CX8vRiAWoF2PR1AaGD6f2k3NuqUrwneME9v3fb6WiuK6A8RG7BiXa5rb1111cWALB43",
  "key13": "2f4UAkFWU1ehXomnz7a7fEQDnQxW1zFbYPpQ79GjP6YZ94BSzwxQ56eEL85YsoArtK5B5fRzYa578iBkQrw8ELJ7",
  "key14": "9i5BJL1X3zrKST2PefkB2YB3gUotLMDsWXpau8RoXLoNQ8MbY8oHGQCYeAgJTKBk75JaAExk9kh2tqf6gYqXa7f",
  "key15": "2gtqkLddxj5AcZGqBFnictqkSz8VWJV1U9eJbuuXqX7owfN6nDFoMn3owYTC635ThZxiCXYZyvLJ8VWjwxjUVtxn",
  "key16": "JRuNCGm8jYQbuCoi7276xsKAApgcADUe5HYz8MTnTPpgzmgdkfeSNVj5LNckwCPS3Rz5Tfmk4uyfZN26wvJfYdW",
  "key17": "5ZDuTZL7cmBWpvMBFc8PYC9dKDgwi9BDan2qBjBWELs9UPoWacpuAvYWcA8xwQXxN6AWjMSRMScTThjkQzvuurk7",
  "key18": "5EyEHUsZMUhz6RfYa5B4bYttf8wkK51KPskL9cdx66MidAMzAwP9LXBJTKAhnD6PVX8DoWkrEeMnAVmsGWN83DNC",
  "key19": "2ZXYv15Dr458SNUewk2dZbhgRiNfgGNMD9ZYmt3z7zRDu135iMDJaczbFBdPNBFgjvTHHvHSJU9aMyaUwpMdRqJz",
  "key20": "2t3TpBTKNEesaXfKSpYRdKzi6xjgmrjSHtWbR7uEbvcY7gT9PGTMGSYPrU54VNnFqcwZAUGR3Ui4wi6uztpxXss",
  "key21": "gDStBSNGAqnekpjzerED7LCXP77kuffwRDEZK8V2yQ9v7p5iY4zrFWnk9tBzf6mezkfxfbMPZ8foR3jwoFaUPu8",
  "key22": "4sbFFDBHeRR2CTEN2rod94jyfFBKR49g5hTppnmeDJMgyqMZZ8aTDTyaxz3wRRQhy56zeR4hGUA3Q6hdSWpeJDrT",
  "key23": "295z3xcL5jnNCVLYWt7Bw3yq5CvEVGgMqaEbZLGUR9BJsgyngbx6To3ErTKVhePggXuS1aA9Af39ZbxdyRrvanTq",
  "key24": "21FrCt7HDkPu8URzdneM3k44jNUktyfaXS1YiJ5aSnnz6ceJHXteZuHLBMxi1zd6RriXSE9GiKq3jfL38C9ErWZz",
  "key25": "A4EUMV7gLctPQJ5TkHcdF2HDZEjmhV9XfRa8H4LxhxYs4mDvaziA7gwgk8sL7vJNfwzgyuqA5XwLeXpejXaeCPC"
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
