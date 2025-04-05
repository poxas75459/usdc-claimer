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
    "3kYYtdvxtX17MujqN24Dp7HYgQLsGF71qyVGGDiiJPXTqKNtdpqgUpckuscJzaZHu4vN7Xvg6z3VsJMGErHrhthq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35PXxzp3wtsybqMvqKkVut86KzSZjB1vS4WpEwBEJXAMAvwoKi2dAAwEm9W7pfGYHyvGzKL5HoD7Pqck6BdUYPBw",
  "key1": "22yXLpG1c1TeYvcPQcUaDpJT1UxraeCSnv4437gTNmBr6XxpKzmA8ducRhEsQZrKQ9qFzWRMD1MM3DTMUukBpDmB",
  "key2": "4bXXQdN1DoR6UERM4EJc6jnK7JgkP8TJ246pE7MkPKLUEVjQsaoMLn8RuhCpNkUr9kSCWKHq68sdBN4DaHf8fhec",
  "key3": "2eX8J1txEKqzEe5MKuYcWhbZG9YaQeZuB96uTjToVMb2CHV8HHFKneuxA5QK4wqJdWDHpt895MRYTQPHYEESYsnp",
  "key4": "4WTVUo9j8bqCM7f1ym8QPrfTiVXewumEHvtNDMyU25qwqKsPyAF4BVhNTt95cTZ2ZDHUWZkmJnhHqRw6ewjDm4xv",
  "key5": "5bvpfPG81QZcLTwiiXwfi8jSAHnDbcHvhH4DgfABVePKMKpmLxE6yMPxU4dBM6fu59bsvZQLkvkpDe326nvSvWof",
  "key6": "4mpoMXucSrcybhuirNrJHRX4m5ozqWaeoTiSp2iUrhere5F4bhNCw3gP37nyuFxu6hkp8Q3n9XLAjKw7L1jLAa2r",
  "key7": "4wEnTi4DqBbpbM7qv3inkYhxj2aVNipn3eYnApskP4S7XMByRwMSoUzpFqRx8er8Poj5biXcKwHVANrmas4QnkbR",
  "key8": "37xiw8y1z46roecSxnksrC1e93S2kUAWG9PNa1nMUqj7asCVwEwwUPNCkzKHqnorTPQq1GypfcYATmJNSZ3BN7C2",
  "key9": "6GMTidoF5yVWbyC3scuQrEnn2Ysa2FPwXEyXPYbfdFZdm49AEftQLBTtwg5RuiGphC7GX49TRKpY6Q14CXM1zA1",
  "key10": "21AevdHUx5DvCW9zE1XuBAvy6afPj3rnaKeKNpvH7tCPcg78DJKgZy7DnugymwkEvPyRL8c6Nvf2hEwp7odX1g5X",
  "key11": "5Uq7aQeN6WuE8LtDe6Fa1kxYjGJVSz9a2tgSyHDRqYGC9Arjvqc1L9bpomDoBabzjrL8rZT1Q8E8bhsBGj5EnXpy",
  "key12": "5zHw9xuFWwHSN4UELJ2ZF2Bv43ErxBbSMsH1XaNEJ5k1fqgBWu1NGvCBY3NbW64kow8ocP8hMRuXkVE9AN94uo5Q",
  "key13": "tbBqLLf6ew5jAYvmbRJt7rQHhS66Du63k8PQyMNibSGwdCzNUpJPR2aN2Vncz2PSsZ3ECd7GxnFRoB6A5Z2XMxo",
  "key14": "YqCETZ6pJ4RUbDKKt4Fq5oAEC6UNFSCA9tATVpDGzRrneeYoynWYpNEA4xCJFTQy4bzufUMPL5WUKFMzjSUCUge",
  "key15": "4WZEjkaecES9ffA4PP92NJWS3j52DaTN3D1jZ8B2TUN8o63P3YEvAvj4qQUzRh6oPHLLXQrWguX5iCvcwxMK7Yd",
  "key16": "5XnmYibnpziH8wMCDzUQ3X4HpS65jgiwxAX3pyPTTm1kmQMnUb7B8zkTQ5ZCAhnrLye6cKj8Stgb3om5X6qxZZpQ",
  "key17": "4nYkugUyiSQChbTwRaKuZPdV1LpbmPiUqnWGe15jh781dbMQQMWuvheNqsAB72rUFX4N2fD6zqygsX4MBdzgShtE",
  "key18": "3cZWjPXj6Y912PF8K5FiMsAbowmgHFt8wLKHefVtafC2m9X1SnAJFg5aGCzn52MULKYKcDi3CHZ9A7UPLMwbDmjJ",
  "key19": "36rjRP2DATdXamvHFcSTfuumzii9jBgCBBGrNUnLC6sGFhUrFrBjofuRSWFzHKxKjJcU2QHTw2RAehwuW13x7wPs",
  "key20": "4b3NpZ8JLcCfNvkMxTHPWPQhuEkZ7k1EksZupjxZK21yZACzZYvNFRLvz32NSv7rjv6pLcNRgyfVEfGXfKCvS8M2",
  "key21": "384ZhT8xpnkm6VKVLQ3jMv8sLYm5h2DpgfS3gMkwZYzDJ5ejCWgzyQghdxa2sZ7LqxPRqM7YApJxu8GJx9cPjnQh",
  "key22": "4HY9Be7HhsN5bkE9eFR8qWnsEmkCa1gD46SvzuZaN5a2jtGfABaSBevqMkJQfcwvGfYbhP6tkuJLxD46DQ5rBSL3",
  "key23": "4dFNjmZdN3cWAWeeiYWpFudFwKk4U4M4G3do4JrfvrcwvA2tFNEvX1DjfENA8pT11p4x2sC7M993WEgfNxqNjNzJ",
  "key24": "3at5eVoNxhkzXtFwYe1cMiNWK62R12kjy1GdaLSSer1uFLvoxHaJQmvF8hEJQw7RTUgT5pU9xfG4GjLcorBu8FtK",
  "key25": "4inwc7svBMd6jntqeiVjyGiGDvNucT7uhHdkUvbmFBwMqvt1Q6Nm2W1z4QisGX8eJMsP6dh7QHzCf58CpFYThuaC",
  "key26": "4xBLpRQpHXnNx1uNNUmdAiQQmPtAoaa12VM7qVs5c97k27SASw78Bpuegy5EZ2aEz5kM58eTXmUtBe75Bvvyrhxz"
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
