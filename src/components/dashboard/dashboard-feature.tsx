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
    "4kzNDXJkCppcZMyRitMKigW52f8jqCa5tGMjmHx9QJMMg7wUAsdcxkfWZRLPG9HgJb5xXC5cTTdwNC9cHY9hLMe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WHZLXFnmXkMMntuX6QAKvTH2XqTCgi3fUJwiSFajAD1h9dXKkHGyrHTZXhvBACQ4oaTc7e9F4MM4P8uGQRhq5Hn",
  "key1": "2tj9auesakXj83S5PoujZS4Ux1JcF12NgmfhYdkaQTqgKxmHwLLbyxyF7DvdTAck7eCW9uUqmXStgtNF7mk8A65P",
  "key2": "4fdxege5ZzQqyXMEimxNuWU2cN68vR25cQAJAxXdKcmG4P6fc2iK3WHg7mS9J1nHob4c2eCgZwbTFFTAcKsKEYzf",
  "key3": "5Nw3pCAzwhiBKKQvqm9unQE2NZXGq6Rt7tvY8u3agT2m2EWgQfG6dgh3N9Z26nUKFLNSgaRhmds3Mbw1XabGi67d",
  "key4": "548hxkAg3fYXRZmR2QeiCsLo3qzPFqpkNabvMXkGEr12USVtME6ij9mvSHUxxaccYRJXJbzJWr6ftBXwTnq6d5NQ",
  "key5": "2KyJZC5JRMbpY1B3sweViX6uzTQS6UrJRjpQgEcsN2sNip8WZjpR79zX5boFaLbXYyam2cHK514S2rLwConkBK2h",
  "key6": "2AHTro7pCvSYmpGUAjPq7ZQ5g2NvkkZkee2hqm2PzyTsA3WyFubQhFMxD55fVfPn7P5T488uCNzCpmoHEJzLRWjR",
  "key7": "2XGyNkckcHrRboacH7EUg7JH1z2vZoBkN66SCDL6gKmbeVgSeMm3W2q2CRx5kPAXTo4VmYQaoayn4mhjSpqAi26M",
  "key8": "5jKxWGgWjgDKTBSqrpdhzQzw4MNuyxNJLxAkjpGRK6tBXAWrtYVcU6NEFLYgTGtgoBL7L3JJYstgo8q7t58Q7CqY",
  "key9": "2J9eZY3VZ7V7TZeCWbyzyCvEvDZTFx6QFjthJdStgwVR3ndwqR6dzNDkRAgiEpDve8bAiF1ikdxqGz7vYL9Moryz",
  "key10": "3ScvRhA6bKJwgPExRSpBF3PRs1rGZM6Exhz54DaKp4Ueqmpez8QQebMcZ2du72QudSkz9c6NcJ9e1MKqgck8Ctzh",
  "key11": "4MQmeuTpSnvdKbESZtHKjr9SS5RQFw7GncfqavKQYe2hW8YWWjHQrhEC2FeovEdhkYywPqDgjGgrLs9dSUhsa5DF",
  "key12": "4kkEnKManeuWAWWyamqHyn5ESZkY1AWYhL8Y8WJ9DxgDrReQ6fA7rSR57LPETxhPJvMC3z8FdMjDUKs3sLrRotrs",
  "key13": "4XdnasqkD47MYYEyKYqxrT1MEaKz4V9haKkGkur2aNoJzjMQHeMs8Za1ZGnszunKJhrhoStFNswgT5XAWx4WS4mT",
  "key14": "ab5P4b4AFCU641gAVoQhdYbPvrGCnHCaHYjYp43wDq8A5si8PHn9VhQtQavU54h5WVUKvSkkHYc6ACKXc4gY1wV",
  "key15": "4z7KZ9BTsorkq9PE4eSJJY4wRD5bAqnkFcGLGW1ETG7NtAeyHVyFtnRQiwjN6kKjmcYpphvqbAHy6Z7N3iG1vGwZ",
  "key16": "2d6q6FE1XqViXB8PJ1otoe3Y2XgFJPFa2YhTG1XQ5K6LVeu8CfFaMGSkGHdzxZdy6UWjiKau4RXFyLGihNGzAyLc",
  "key17": "2adjwPGtd7Zu7E4f47bw1v8hYj2foDNNymEBEN3VvXB8aKoUN9EYKiBe88VaDwYwf2jpQQbMMa8smkANStgcVW5G",
  "key18": "544gNUZdrkouDdjGmvqck4YV4gfMuhfWZkKenYPUaB6Pgt8AMSxPYD8jFLMheriRTWWy2a8xz5tJL7oSLKB16tJx",
  "key19": "5VJLQhyGgwwsAYfRjRBHxiTfRvvtvpiLbeeWWqP5FZ4he38W9pwKtDded16JozhouGpEbkeHDcGMD2HLJ2UWcG7W",
  "key20": "2BiCdCvZBNibXjTXrPQ6cHsinLtgPZPGP7dqL77jpngstHhU9QSDwmBK3cR7fcnHUNBSrqcG9S7YJvLw5CH3zywG",
  "key21": "zJxFmaZwsifYiVh3t2nY4XK8hNAerkWUtTJC1ojKumPdNd7avoFsPgFMKFQzUqu35vhfACnjvoefeNSSrVTqHCS",
  "key22": "4JSnVQB6H16RAGnVPXsBJ1ydu6n88hWVq7n6vG8qSoGNwPTFFqh7acdiFUko8mBZENn4Ha7MGaN3bJTr8mddSe1",
  "key23": "48mhj6bPf2ob3xCr6PxN2URRp6peFugJXuTXMrbtjNwsy2h12q2ZahdqmNkBTv6nrC9CuVENSe339jJ7cXksFxBp",
  "key24": "2zq5hXcSHrLYxTMvgfQswpCmmm9razqd8GAtjuGk2ANPJTbbfDPKrpCk9xD4o8nHKpJ5j9GGCnumEHCeJUbNty7J",
  "key25": "36b9Cga31RYat1QmaJ12WRxEgR7pvTt1Gbb5KHcqQaUcqnk28f4nMpECyaCGY5iUmg1nhAdJP5QtJZt1Cw55QWnf",
  "key26": "2qCBdjneGTXBGPn6D6oghuDvnu4k4Db2hqyGg1mHUDy8cnUNM3cVxTfrcnB4V4e8NbzK8wLHkWUCpvyHsh46k3AW",
  "key27": "umaw3jn1wL6zpwHdZJi4cK7UkiUPoebqYycLiMqziZYKBJyq7zyHQWeuhn3nosJkHRVSkx9b5nqRQjLVs94aXeD",
  "key28": "x1GqPYRYCMUGuwP4GxvyfJHTaz3QmMQuQ74yMhUm4g4VxMGu8y6WVJJU3g7y9dSDf2rUcX9ryPjNFJU8NmAvgDG",
  "key29": "KsL7wDRnuGnGTmG5dQdJjMQU43PCcXuKhqgXGBsq5SBZk3fpgzNn3s9oPdRFDfSX7m9Phv9iNmbttiumAN3tpr5",
  "key30": "3x5vWW5iP415iet5W1FAWCB2TaoavhQECdM6aLPA8ix3WsbLA9bsL4rVTSCggaPG3xAPgGyZX3HPcsZmYeodCoPP",
  "key31": "5vy7E4vKHiKrkrHSSLw3R4gH6JPeMGaaPTdPmrCste2upNLgJAwSKT7WuFzchBNuLpZMucy9TKvCDmnammSE5j8Y",
  "key32": "3fJ33XME3PtC3zAzyate17em8j63Utddr1GHwCSaX6owuu6i2i4tCMtGAWc6XLB35mySgrRZWZDVqthD4qyV96Zt",
  "key33": "2GH79gz4JQ8r4Y4NUU87MQeVL3gv7WcuBQkTHGiaeCDMRjbFmT7kSJbxbjgJg6eSqnZRaQ3bgnbbNav2SyiZGGyD",
  "key34": "4HxWcWic1DgNjGYgMyjVocePDwUVL6m1hHBcbc3AtVMXTD6rWPMcarpVEosgFk4DE5v2gAApe9s5ugoycmdTbiFe",
  "key35": "oP31URrAa9o2sM6i9uahunmejWfBYJrEVVpDRpiJp8a3BS9wySKaDf3mNjWkT7n79xbUxduQDYscHxHwGuJjEnR",
  "key36": "33afwhmengZr4huiEFXaeXz38TVtdzcuc5FVXpoAoY8UArMHvDiLvy6AhmWNQSK4fJk5mCi3VkTKCUAUQLBKkona"
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
