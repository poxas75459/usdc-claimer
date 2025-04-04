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
    "263apCHTbiLWmw43VKTQ9d3WkC9kmKnaaXoKLF2bVyMCQGEVRQgZbPFP6H9kgTPgJURgFdibBVGPiXR1tBUTEUKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9uKquKzT2iuV5Hyf2ohNf2fnCyiWbV9F3JbP6zJEbQeA5xX2Mzuvoba2tKZF4mpEMg3mYN9na4NimzW31by9N9J",
  "key1": "mR1eYQHws4ESxD215X3oS9ovGmB2XHssfmJXoJgW7qr1ngHXXsvbYiC8LtKkz7fWTxNvTmaVPuo3UvkSipWw383",
  "key2": "3GvDdmd7F2REuGGZ5JKojmF1Z6naRav8Xr6aYpN2pGXzCQWipqpjEAQmTNxUgs1g67Ye9g5Pouf7XdxqdFEzGP81",
  "key3": "SZNYYgPdWWi57y7DM27zZ4271SPX4JwbPrrioYduFRyPKXzDiy8NR3JM9GcuvJVGNGyPKqNvtHgixHrrw6t1NtW",
  "key4": "3o286vggoFGgc1BLHLKaEzD63xBfibYYoBwWmgVs7NBPdEcB3xTK9XYxjc3kfUBuTEsy5MTn4Gr58xa34CTVjDQV",
  "key5": "2acsUiN9nDPnKQ2XSrQRzJd92WevcGoaJuEXFwTPtU7B91RV9rB2QEAqeJ3fC3CFT7QYbpW8oHA4LYrXmPDk6kUL",
  "key6": "2GeyybwEXshLj9Akc9Gd9hQeDt3kKgx7SKuYihL6UG2qikBmp5s3cPkKeuHUjQoxzVp3vGwBJZW5cPQh8gSVa7ev",
  "key7": "3iFXP339tR9zX9M8sCJgvTfSdGCer4c2S8ybjKDtmXna3N3Qzx6nPd1j8BH96QczwStNMXLTfUiT78h5MLar71qk",
  "key8": "4T642wJ7wtyJiuTDmv7UKed8gM8kNhBU9Xd5mzS8YYmvUPVCYCbDLeLqji5rbSrHc8u6HK6hKjCXanAySqsTQYGy",
  "key9": "4sZyMiLRfpfvAdNRKiJbV54ovfvs3Z4Uzhke3deruT5MMzVUyUTq2EWq1GbK4rjNyYxeYiLJktJRcSFTne1irqBy",
  "key10": "67StAooBXMhZjZsBgdzm6W9Qt14hEUAzzJsX1n5qkDKkpKTfk3hXGkC8tdTFJpN9U9LcRdERYg6ntM44APU7hCas",
  "key11": "5XM59EGTvtY2YdBVPUVkLSxvFftVsRqNWrSMUMVXjhsNKaNVMrnGokfdH5fipdbPvGfvRQKSn48shWQZTzvcS3hL",
  "key12": "MnQ9qSYomCMutwdUGVQZPf8ghGp18ekZEdEKhL23WfKekhd6YpdSsfeFQ46b88RkXP6vbuX1p7EvP9eaF9tAhd9",
  "key13": "yaNhoQSuPLxtPhEKFmE6gFgMifiBGhsNdQn6Tb44Ypzkxp88cGgj3RJ39X9AMuxze2sXK8BbJEgrHkAkx4aErpC",
  "key14": "3YBUhb2PzYW4zhmWckZMir28GG5oH1r7sQubNjj685acTYtRh2AX55AjdAxBUHck6o371ArfqSw7gb5ccfsjPiAv",
  "key15": "HVbKBxb5ZykvX6e8XH6gMNC5LJgbgPAU8fK6JQch3htDdShcVosmBiuKH1jaSchqbkZdvBpM1ucAX1r3Jga3dN9",
  "key16": "2iyby2B1wVTuS4tsNwnkCa9KKaDMYWwyixcxVQFJFkyfjizn43nH9zQF42vZzFaFkNf6SD7Di5qEwBZNFf6pDjaW",
  "key17": "3WT3c3jNnJVKZNhMrET1SUjqBR4qbZtvJ6Yqx1Uw8FHLQWgjGsV5CNAA8scDL84KshAxj1YZy5xnMbxvAzirjR8m",
  "key18": "4He9iBJveonQKRQZpPNsj1NYcYiHHN2NBU1zuvLFHQkjm3CvNuyG4dcySUGS3hRFW5C5BEkS7VMGFQa1JmLpvat1",
  "key19": "RHmY8ikTqycESue5yNGBPkQ23XHtpcrR7vLe26wkNetRpr43HzGx1Aa1qE24PVEnVFhrQCTieCd4Xm9LtRN6Gc3",
  "key20": "3jVGBJLKz3ykGAxdqUAytmSfvG6qXLkEM4CfG1N5seUWVNMKu4m2HD19nJ755Cz34yjf1hL98uVt6pwQb3xmdL7c",
  "key21": "daKzd3ypiD6DvUKQhhsiSc8wvYcTMW6tUyu9ysDxoudhG8ZF1z7ioK9HP8s5QwoVrTB7X5xSCdQS4xJoZdbeSga",
  "key22": "Eyd7RquSDAzmykNC4RMj3pJ6yhNBpfA6PrPFHaWiCkcKP7zMUWm28huQwEu7inQw1Jk2uextTDhywNtcdN7Efy8",
  "key23": "5x9mEZgGFiJbcVeaZNg22qoxiCTduWmzSbVS99wf6CxbMozLffnoh9pqeHoSSGZ7t76DDfrQBc7QLG8S4S27AUqr",
  "key24": "4nFbQwyPSYfWv9LQiczygMppT3TAPk3tiTRFqP5bLXre3YEpLTDeC1CRV1ZP38tccPWScjcvbgbhLDWb14kMFGNV",
  "key25": "34qwfNKdNTHgzmqt25NVoC4VkTVzyg5zwojeDEpPgicEroo7qdznuZmLDBfR6Mcjjspmou1xiWhni8kps867dtqi",
  "key26": "nwhBQqh4nqtBEt8xTihZJ7oBbpqtmv4LFXVDdxcUHLJP6ABYe1JbMvgLRGbm1fSyzhdX9Xe1ygMKh3CqXUEYY2R",
  "key27": "5aKN6Ks6f4vMfRgkfnNPGPBb3btjyRU1amY24kLJXXrxCCUgaoUn8CMQwb7fEdQXKg1LTDxKWwsCbnq4UcjcpVph",
  "key28": "5XGPDWjPFtuJgHXDPzpQpE5Lo6QbNhKRsadJbfeszCQqj82VvDT9oHbKo93h2K5xCQpTAE951Fh3eWe8xhnEJ5Q6",
  "key29": "4t1WvsznzA7oXU5JZQmuF4eStXhnCW98gQRktKMAE7oiSw8V2uHBy3RAz4JNkNtYaweLxBCpZUtYUnzdkrY5ccwt",
  "key30": "3wM88ftNgSEwwENEo1jYNAd81N6rwMwo1QeUT4DxWhmAKAqFSCDnid7RXqWjSbE55k4nnCEgVKBND7KADk1iLVDo",
  "key31": "2abJZq1pV2LondqZHhCqEVbT4ZW9GHbLsRhv5YV7yCA5YFXTvEAkfp653p88MXPcvJtgcYPccHYuxP59bXiDgUS1",
  "key32": "5r528AJHKxo4DLTiPV82ZZakrC7KMY4LG8yPdcCEE9d5gk4nLvXK1TJSH7SngcFajD9s2WZDJqsDDM2uhGA2KRNJ",
  "key33": "4S6KEUeMAn77BVhDXTRYEy1tTCr191VWfhxK6M474brqyAEqqo3PTMw8KrGQ81Gt18gB6p6PtZJh2eqkuFjvJtgN",
  "key34": "5a4LmSiLJkTmbdn17cpbb54nm3ZGuvLaXkHeiZbug2R8MfBkHTxaW67YxTDSaTDoaqjnEo4G51QeByDY4E64b7Ko",
  "key35": "5ei3GGyNvUQxV8LzpzATY8rxXErxZkSrqCFr7vQcVGnzjC9svtJTR3YnQQAQxKHo7sHUGbjoJAgrd5yuoLa9Kewh",
  "key36": "4nDrdkpfcgm2fyitEHoepNDeTMoPBYzAGBR6ZdtBmfb3AJsaPGpjPwydRfWKUtQq6dUv2t1iyCYfeJTz9U8AEGBC",
  "key37": "2wYKq48KhDzXcVhY8TdzvQqKxyByC2ecuQNcTqQaU9iq9R7FjHTNCTjU6in7LBvZUWo77iTaXz9YFksyjjrAba33",
  "key38": "2zhWkF71pcceref7sb6gYGostVY9ZBbdSKEk9FvSgVtYPkRfRBmcFiLt2X5yzqRFL8mqkDLnzT298Nq3iNd13BsF",
  "key39": "5aU4og6fkuzbavUzPZRLfJjP8eK7gNgKPCM4CysTi3GsExaAKGssy7rK1cae9X6dFEAzwm2QSemotPA17iESL2pj",
  "key40": "3rHu35J2kRxcnEaSrF1YnnATHTCnJ7RpAqVtB1VqBLvn2z2XgGAw9XSTCMp5rXspsL5R4uPGFa45nmgNMc8LceST",
  "key41": "5w5FBerF6eNf2ycxqXCHouyZLpANJiqpaxwGSJUY2f8qy8d2kEC6oWeJyPcxY8tsfZYHCZztgKi3fPN85RaFoc67"
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
