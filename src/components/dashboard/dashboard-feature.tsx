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
    "3RDaaK2yhbVtrDRr1rZbMJw1w2teGWnp3JLcfvLQifeswbSychTU9jsJuL1oiVn2EYZcMRGDupos4mj27t4wnBSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JqEbgh6XtvnnfHrJLGgaLusGCC9HzPbymXCjDrFRJUaA5RCNrHrr6DAReQt9mWWV3ZmXourqrWFKkoWd7wK3tE1",
  "key1": "2vQxPEzDGTqGy9zGS1YJnqSoV7gR87S6gh6n6cizw1tdYrNvAqzLkKbM5mkGUZcqbJU953ZVxpYkt3uNxbswDZrz",
  "key2": "6arHirxY1vQrioX8aumYpLL9WJ4msh32aem7vxkhGB6DTdpUXF6nTnSYCroByDz8S72rx19x799gc6hUCmZHHJr",
  "key3": "5eccByLJhWMaHXy2YVBJ2rmdc8mH1Fp8uSoSoJJSQyTToFeso1Hiu9aG9ZyAYAV2FJdeJzhBBoS5K7mPNV8rYKxG",
  "key4": "5DwYsL2XNK33deTGax5EgHZCaPkb2eLjqCbXAfxsv3hcjhbBac8eArFH81GDQ1CMRdADqvv9LM74gLtzE1AuzoiC",
  "key5": "qqginZao49H6AvFc8pYc73jyHCTjauRNbzgqZ89V9TmTr4QtT2JvVuXG6JSybo4AMdD5WWK7FXSvBMcgdCjB7e6",
  "key6": "vHQBPaf91hpj8CnbW5axQxKZBkpdyzzMZPw9iaUACvvrVR3c4oJ6QbZbR9rkMKdfXgWw5rRd2o8mvd4Lx7o6zkH",
  "key7": "3LfS6AL1an5dQ8NdqdbsPrdcAWaBYSvhTvxyTMExesrN55o1W2YGze5knVRuYMkM8i9zF8dUkHuJsNupAqq9x1b9",
  "key8": "3MXSk58rkP9ziycTBx2hkCGZGCwvvjGYXcoSEdbk8ufoKj8k2BPx9wqkmgsfkGqN7xqR2qfYig5VAZ8mSJy8JmyH",
  "key9": "59AJgKv9uJ53smjuxAbR49CLGozwsCn3bfQboBYpSgTqp882DVkYbStKh7TuRsKd5XuTbh3hytAsGjKBceUtWVGm",
  "key10": "26MwhbMzCtY11NQ1dAzDtre2q2KFqNkcZsJaCb49HVADVufzC2ZStNH3JJgoQY6ypj5dsASEJsQo3X6DzPuxoxYj",
  "key11": "3gBk8HLLBjSVTfBYmLDZQCXBWZDA1ie1EL2rUNT62PLD7MTa2s2KMbDbS4BXGJYzTMWWvEpVPgXnCRt8eDs7mnuE",
  "key12": "3qK7X9MyAMcdhD3EFF23heLutHVLVBPUeTRMx8SsfHvMdUw1UHZn8roCtwiUrE9h9Cap1Tu78gjuFNT7GShn3qJD",
  "key13": "4KCbnE2YSyFCpFfmEQD2bktjQoNzWEvjHViuhLxBf2iS1NJkCSXmMePykh3D6Q6djiNmmhGHGShYb9N2DHnWfAqc",
  "key14": "5MVB682RDmknbV1aDvVEXNjKAHgNsaAfc45nrb3U8wafST7C7JSM5dwzzsQsk3xNeegqgSgS2zGFHbVx68UmwEmj",
  "key15": "3qPB2JtDsLrv2ZstUS3dcaUGrTRSnM7gm4ZTGXHbiqrc9JMDxcpF9WqQoTdWsora1146zHQx1dry4QHBFK4RGgCp",
  "key16": "2p7HL21ApU3AYuuEuRXXZ1s8UiLiGpLqjZ1rbFaAXpJdVeBTNVYMi7UEQcHRT6PFktvkZg7j535JXT7g9BBcbyD5",
  "key17": "5J1beWMzT4YVCwSC4X6tidCzVFFWFtgoNgRF3fzFB5bx1AMzpxKTdHDYraxoB1KagW8nrjCSCWMDA4wgRRnrajbg",
  "key18": "5iQE7CCyUVZFGJPzJsGuxzFoYVHBQv445Sus8cSoQFM1LEKJEPQQ8HhEXVatez1WEMhvuNUZDoAuiUff92baeWkK",
  "key19": "3DHJoBToDhGuDea9LxqdqCGv9Y5qx1aDqh2SeDDr2CB4Btu9AbzmFUQse1b3Yo1aQRQgnHVpM3QUJDDzGMQ55ggR",
  "key20": "2p6C4EC5YEi3vyV1K3DmXdhZMx5rzc16JDZU5FWo7eTBVHv9pEoGkBPy8drAAtr3zFXkFTzHZBH4Sizv46gM3YbY",
  "key21": "iz7qdd9RoH6rNcM85a1Km98uaCmiNwNymrDF4B72eih9kp9cu5oKVGfJRi1HksCMWXYSPzkfncyLAZpZgUYqfUw",
  "key22": "WAhNfY6T5LRoxKQi4rGLQEwh1LFj4DLBFowUgJKLbN7o9fkd1W2UvDhJ4HTpuVyQE66z3EZUXcGpjZeqbdhjzCm",
  "key23": "3QELYTdch6zzWnY3ykjjB8Cj2MMcpYVH3HMHLtYKRPhyxSQLbY35xGfb5yTFKiJ3fLWvxsGbMFqYGxwtxjkhfH8E",
  "key24": "3ZdHcsgzYpWw2a2DyEtdW34L2gCuE4e7wH6qWpfP199MixWY6jdvdsRvZ5gXFEEFkwZ22roZjgCYAuhwAY6sAcYm",
  "key25": "4X2MWpWAXb7Zc3m7KAYq7BrBvtSXN6nbQJX85HfgitxFWi4rgmkPDa7dWKk2Hmn2cyEAP2xcXKPwwCcd9kP5tFPD",
  "key26": "3w97KuwfzkUYGZWLXhHdtQWfChzcY9b4muskJa8tcXK7kwHWtY6cKoZkcksk9WwK7EdNQE134j559MnaanBG83nP",
  "key27": "24S1UJMk2vBxUxdY5ny96Fk51VTtcQZcdNPgJZUExV4EeBu6LQVJGBRWCQRGFpJaDRjFEcuWRKvixiDbrm5dbV9U",
  "key28": "3XBUUEaGXtjjK9N7WxV7E7nD8TT6tWRFg4mxMbfv8Nq2dGDgGGJXBW7JtCMddDfQHGD3xTnCjCvD9wycWJhfFiVe",
  "key29": "5aRofB5CjwmPhy1VUctNS3hUdtDLuaFnmfD3qvTxEvoZDYYN3tDu6vQKMP9uhMUVyW5Njbjctc6dvkcCn1RDscEz",
  "key30": "2ysNUw8nE1yNd62mnnRp3SRFFb5C6nFs4mmNQ9wLBqWZLsaUcq6kTBfRSXXQweK7RRxkPWnyCFmxdeHfsehBwgng",
  "key31": "57aHTKPpib5b1AUMLQh5ZXj8rK8wgTXiDFKq2qbcqcjpArfpKFtXY3J5KbSf7RnAPvntukqNimo5qEG1X3uGHkot",
  "key32": "2bVTx5skcDj6x5hLqjuTJFNkp5b7BSnD9JVM2oj7YG7QYFT6DyQfUYihXHBdL5YNhPgkAeyJedo3kWrenVErVncA",
  "key33": "5rKeeFa9Mg57tUokfQwjMTDF1orJFDWHPxKFgt2mK51Nr6GppJ66RV4G2wixJ6XLxgmHURL22k6dafCRhk1FP1F9",
  "key34": "59LsB1ruT3xcNoWGGbwDbF9bGzUuJ9a7WF56zT9n9dAyq3CzjJJVwayeQURqmLLe1ecbq3aLcnLxNMEETpwAoc3K",
  "key35": "2FjxTxqGri7f6nvLZPBSMUwNj8W3C4CdpdtyJq5ndkxN9149JiiBnThUnqt7CGnLRMJUm6PQWiupRP786NM2DUCu",
  "key36": "2fucozvGpwYoGirXtb1yiPPCG7m4fyTJMZ6KcijzxrmxmM2dd7HU432smgYpzFVnP4RVLXeqT3mLBCMVz78JCBN",
  "key37": "4Za7nQnE64QqHfXMfUKzrZTZS6RZeeTpkLMBWzqUVReov9uzoUJ7XTWRyS67etGqzb2LGz9dkM2V6n8Qa9SSRnCa",
  "key38": "3WD2q8oZGqP81sGH9xzKJMRYeWiMx6QD8S7q43iCqjjQBSdaggeoTdoxvB6K6iUWP3KBaVQhHDvFUovwySYd6wcC"
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
