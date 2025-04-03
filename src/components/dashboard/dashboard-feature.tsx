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
    "2YzN4yrhWhCYBGicbhDDxpcUS75drKffZSq9ze1KhEQKsB6JGsi6q2K4CSoVbHqsqidpDTqpoy45jWN6bV4Kctjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EZWnhgbVNBJSqaX9eZHpXMcvS2ruMuUYj81CXQwBd9bmxJ8cKzQJ4cdGDTi6Y5GLzwNbwznQQpvpc5gxLwq3eny",
  "key1": "4sLx4atrU3Pprfur4Lf2zLAL5ccT4pGG21XEKgryCRZDQMYMJuQv8VdQB7LcwKFo7P2Gqp6nQwAdCm9v4VxXQu1w",
  "key2": "4kdHvpcpzfYH8JjpzKwTceD9f9nQLM16v1n2sW8kgfzXeb7Ro9ak3NmTQ2APWvxZPBazWizi6ydN9Fgw2QRW4rCc",
  "key3": "24dFDG7YjGNDs4BYfzGxmZHfc3ZbkfEYkuUTX6KeRw7Rbk7UfduNx99uQX1WQuJ3Nnyy33iaiA6qQNccBunT864P",
  "key4": "5fU7u45w1MnkA6NMuoNefHPjwx66xWaedfpfcMDCD6moShtNSGhdqdvvs1o5AYRu8JPeNr1bJhbrDhXrvW6LPwWD",
  "key5": "3mvR1LJ5msdev1WT3UcVdoaNnVc5EX2CbfpFDZgTpwPYzQ2W1C95e8qGxfMTdPUkUjP2YoZPgUKZAPbt2gZcr8Nd",
  "key6": "H6s2WQNbaDGfdo3eY5W8fRZPktadyvnfqKXmNCq9TSCPT5BMu3pYC5p8JajkJdirfjmzFcXPUVnfrC9fwqGxrtB",
  "key7": "3mE4gqeuMXCvM9TAPNkzWFQyAXLtcCMxGcvJWvxZCebSGmZ83SZgmv5MCwNsJn54mRNPJLhHB2JogHxwJrFkhcqS",
  "key8": "23x3Jnhf8byZooA4W2WFzby4PnsyY9bvExVPGFrDHTbPNDWpXAzk9WA9qaTR37C8dc5ZPa2LVmoYiFtvRHkmVAhZ",
  "key9": "3Zobym4zbE9tGBAirvGbyTH3sE89CSMbRuCwiFdWw13qWR3Ux6qjBMBSrruo5ShzLVW25RVsysnyHbfr8tfoqSb7",
  "key10": "376hMj9nyAtqoC3xdEi1CQTBHGJa23BUqmeKPpYN25ebWktwf2UM5KND9ciMbANHNXaz7exUX4Vn1Ahe8DVYrWJe",
  "key11": "3zowsHJ3171KxDMaHLeUa5aExYaiZ1F4tyJyyhwdiDDLv1w2ynTfKqGMAREp1VUNi8CnLrqhsAUsh3TnyzRZ4UZo",
  "key12": "5F5jj7BtkHubW73ERarJPPJcUecTiLABpQNRiNasQ819jFmVcMn5DrM6nVQUsqnp4bCqJzdS8ZVaNCB6iEyZ5Kid",
  "key13": "3dTu6odeH4fedkcrrJ6myNFsz62MRKHQYoGa9bvnmmFvXygL7T5fqQVWHdTsfAafeGs5JLzJ5cmg8eXxj9QtvVWe",
  "key14": "5c1xytoYrw1pNddGHUcrgFvPjb8B9cwsHFjmrULA1yHeASSSXQa5LEYLTWahSyRsPrjr6rvTUgZQ8r1Y1TP7saTy",
  "key15": "2eemxaN7RFGmoVuB7XoFs3gnuPeJam772wEsYomT5nrYaETgsvBb7A8wqUFMF4mDZYrdtUGBXc2YHy1eNakTrUF9",
  "key16": "2K6Po5WN2JkoF28kKvBv9DMSzzzY72tNPmAXTit5zEECYPjqfnZJL7BPRYip78Pn77CHXVMCmwJ6QonQNt1SEk4G",
  "key17": "9rUvN9AsMLWYrDydyYjBK3aU1b1Bss27yEMdpvgZF4fMgqvrZkbGwTECPuqQhhKJKthrAMBKtJG4m82Mer3qfaA",
  "key18": "pZjwhziaUUr7pGoHXcjKhGG6wHkMS3xCLnMxJjk52YwE122T1szAEXZEhMwYdjgwFKeTYyyF598LpRtFh1aQ7vS",
  "key19": "5i5pSXXbwcem1s3j3KD5CxNQWBK8C3chZiqUbgCeEqGsN4sMzsB5iq6t1AhhHqrGa5hVPR2LjyGmgGGDwf46df29",
  "key20": "5un4wif2MCUrFS1PYBDCnhzsgJu9XSfpwYH3nvkUUeiAZ3JiskA2L9ghaBp2gtKPV9adJhPNWAqyKW1kt2Jcj7cS",
  "key21": "4sUdXKjr39vSPM7UhiT5UuieQ28FqDKZPn6Akz4cAUNNDN1wDR9Z4b1qH9f728HYpqC5NkjvqZpUoP9Lp7mer3St",
  "key22": "57tCbC6qsVkZaeCo1NMfygwmXjLv9WQZ19tagWtM9ZpvSFegg7LKThBntVvhNVEHMPupUa2a2aQSJJ4qVUb4LKio",
  "key23": "2uzuQAkc7k6QLidu5LqwYsHhKJShroiapjnMoHi9a9MLJfZmTwFRXFH5bn1j1ivPDK2TjXwjnw5bXkCDJ4Gzurao",
  "key24": "4MxiZw2JNTSbuuYjGi6uH9SRw1Z8q4waDP23ajTtZRXmmQo8wMKxg1uy9BWpcnHyNH2nzce9rG3W7wjdqJWQC13j",
  "key25": "5XZBK7obtjd9oWLytGBEUdS4FQWD7cyoz3Kkx4EERNns2Vyqqy1umZFdLmLpJQXe4K49nmm27ZHhR7uiemaNgizg",
  "key26": "4oUTS1YCPUigxoCGLrrYATFQP97aKuHFfNpuMgyJPaPf4gg5gsDdWdnbX1QwgZWF2JoEUHqn2XewKN2Ht9ij6nMz",
  "key27": "574HLPMp2BjGu9qo2KNpR8USxuYW8wSKd7JoUDa6PFWfbrs9NQcF6u1XD7GTCFw6Z9HKQSESiAzrJwQDwdNbEXRG",
  "key28": "2n5AUCYtUXAjYsJQzRaKxYwdcaoQZ3NgXYXtGWASfhsMcqgNHtZZxxXTzRR2uYkfuVA5gsUn8yANd6LVdaS4gGZ",
  "key29": "4hRs8tFYpUp8KJvB6xQqWD6c9Wev4cJrgovGn8CLXyamYaJb46YD6fYnhiv9JfmPTpVA4xamquPgCEQmw3hKKZqm",
  "key30": "324YdhwjPuTGJo3imuASqbvePWvKUVDAg9qbdPT6GhruCoMQ5id6N3zsFgYCbs1xVUKmAnFZw6DZNMP32abTxNuA",
  "key31": "46wv2eWMfXaZzHE5mzdHkUJiG55872P3auf2SsAXcQeURHetcXb6Px7KRL53QBAhAbozUqeLL9J4uqhnARGDkM7F",
  "key32": "4a63kZiEi4djMWGtRMT6WZm4EHEkYXZVf28EKyAAD478KP5sy3wupXDCAJYvD9n8ZYmUZpcWxT3sJrVcFxhmQRnJ",
  "key33": "2p3iJV3rmftLapATag4Cs7WZxn3wWu4rsTAxJQZ2e5gFBesetbMLuKXs2xUVekGuVm2gzGhz4E1MmnJ7o7NgYpaA"
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
