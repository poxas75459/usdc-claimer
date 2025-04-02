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
    "4gh6wwDS6r6SfSF5riZxVMrYDVxXkWGsKoceWbtWSHFukg3bAVFa3qn6P3RXvPSLRwuLAMtLtwVgjfbYB5Fns5vq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NtidpqG9V6tUFKHriBeDYCuTUpc76ahSWP32a4P1UDp3TTUHEzQFyP1BFVWKxLbfxGRZrLGkWZxb86vB21KXNMQ",
  "key1": "4Hd3vbAwLhSZSeSZt3RQK3jnZCSiw4K6c5UqFVs13cxCGu4GekniDb9izeK8DZYyCPbKbEAjkGSeKqrkSKY24P3K",
  "key2": "49k87YU52U27Yg7AJusDBjKRDKj4Lukei2QdKwzfF3DUuXuSzoR8rcFHWcQ9PBdBj9jX67LLp35bXK66DksqDpiS",
  "key3": "4kmx5saUy9zN9H7WCA2RFUeEJJ8revUipR8KfjU5hU48LFtiH2G2B1F1ZeHvhGBZjrQYCuzaLB9sSrKovmLqM5vN",
  "key4": "4Wrg8fwFfnPz4jbEhJKjeBPc7afbK7QWVkZamMKpY4XU2ALraCApjmVvYcBAsuR7EJVQapAtNixucZPXvyjdFs2n",
  "key5": "3gFt4mUEKnD98bW697Dgp1qxePzhBmyKJidDsf7H2Fr5azgzJsgasMLhLbB4U6GGTeeHssuqnhdBd7ApALP3bxd1",
  "key6": "4583iGF2YYqon32UaraJaUYSM6hGCmUSURuY8xuL4now79yJFZxboTBYvVVoCV9SrM8AF1ydU69AnhdnKddTBx9i",
  "key7": "5E2i2po8bLbSnaXz1efWijvDmXfLdwRE8NKVYKHxgkG2GLviqtxCqnviE3FEYMJZAR3XC1Bfwu9LoiEUtidqvL28",
  "key8": "5gYXLMh25GhoZNqXHmi7Uumtxo2Mtzv8kyLE136WHNEzNwuknygcDZgU2Ckj45xaxjczWPDyir3G8vkYGM9Fi3E5",
  "key9": "2oPcJWy8JREvaAUWqrkMVohqwkFz38aCrkPrsYhujJFVHJr2B81HqHvibGnwtudPf41kGSKqk6fS5u2FfAgY7MNU",
  "key10": "31Bvb8YoWKZ3HQ1qkjzW6LpG1FoifwF4ahhUKQTohtzEkXKtC4jzR4Q8cMiLnywX5d29q9kcXqHz2Rn4NAGmyqpL",
  "key11": "NpWjiwGMaiYZSsQEaCFSBuvcQF2azFgEU819fJnAA79PZGVrzp4U6dr3pTbzAaajZiYDq3fyK4cZJDFUHXWLbRE",
  "key12": "4uThQQzGKY9XCzQ8wqHxUFTBQECEkhmC7BdqmjbTRjhkScd7EoxLGrWXcumATZw1caUdgoc5r6qFPKUvUP1MbAYq",
  "key13": "2mTJvYms5SCtKu3X8Cckg6izbEE2kipwUF7n4X7NqVewDT1EfyUW6RH2wwmevuhFpqtMZG1q4LAEE3pneWJuiyqw",
  "key14": "36w3swEr14RfWAPQDDkrhnw4kD6GECKPj3UmTC5fKmYVzkdUpQgdWJ3BtMLScKwfKdsSvKponE2hnJAkGG42oF6m",
  "key15": "46vtg4EtsoUHWMShrkXJxnfsFW2S5EM1M1HdnuTJhgHF8LBJajFx9PVrbJdZf17oNbxQhYxjRH8LP3Jar4Jb5Ldn",
  "key16": "qeaFTmHVM5bCG5A1KZn3T1n6u5tFQon8K8FisMWhS3YsJUsyk4fpm1PuN8Ro8HUNZBGAgXdJMNyhF9pLJg6k71T",
  "key17": "5MVw5TgmvzJJeyneukXYcekpDqjorUy3FFao7aQTsgFogBfytusoagLk1Uck8wvwWPDVNytcBmj5micXDsJL6gtz",
  "key18": "ikoJMjeAoP2pKTgukzmjoBLrAV34k5Zk4S29hDhA8q4CPdmsvgHBr5JpPFmwkcVHSDiS6cWncid3ZFq9fcVFGkG",
  "key19": "23idgEZp3TgTsm7R83RKvbGX3JF1X26qr2kFfMDVp3N1RthYQjkY58L4MWJUhB2MRWjCGAWoRJRgdT7SiaVmUMaw",
  "key20": "3bQBjDSjDCptjWxGEJuvQFnSDYAvjVbJ5j5mwSDEeiws6c2UrBScKqxJxfCiF9AW42KHLwjUZ48gtATAUinBWiVt",
  "key21": "3eRRCG4J2RoZue5u6jAv9SML2utucTCLqkpAYYDdbskuyRjhU4Q6Ecb4VfZgS2tAGHka95moE2o5tqjs1vZb3U8X",
  "key22": "4xiyGvqaZvX3w4LpUibsWHG12wyFK9XyErpDMQ43vmFgfvYuJSeoSArUbAWp37EfWUKTsxsDhhA1AHxCnEyQ9HCf",
  "key23": "5pSCMDWVk58UfjdRkPYJzYbsPpn4zQeniRBSEX1UYbz6n873TAShQCNLHGc4mKKShekr5tctcKSAZV6iP8di5sQv",
  "key24": "J6sFtXQaVqsbr4hkYJKb7Xtu7ZqKTCet4ycFp6vs6a3YZ18zaYxDPYVKtHqB6abxofEKa29EfX5E4v1BP9v1EuQ",
  "key25": "2RVbtPnRaNJw9FiyRrWFJ3P99vwB4q2Tz5SNafmWzaEQj2HdKNmPEcJTrdJn428vJsjQw7H8iHsHL3PBFY6YFDeq",
  "key26": "4ULRTXFPfNvAyG4eWERVHy5nxSA9nsm9Ur5qkFTACFvVgP3ZeeqNTEryCUWDFrBf2J9ZNUjTamTddHkHA5ZbX5TJ",
  "key27": "cCbUT96PdfCKFwRkdWrXDdTVxFeDchc3aLb3wuRR4rCg6a29trFuuTymQCrWmqnd9wjZ9uBFsTQTjLL7pDsHLXY",
  "key28": "5FeE6o3LYVMkpyyB3DBaxfJFg5euGksVqWMtRykqjmUdmmZnGWxmXz8F9yRdby3He1Ns38r7SgmCaXq7gLK5ehgK",
  "key29": "GHXHmNsnJRHwK9MXBHvsiDi2mLmaBvGKUH4iH1etS5NUqviWonBPQ4BxzcKGp9hBs7n5zwz94C3GbNp5rxzaNLC",
  "key30": "5gNvv8qJxG41TsHQd7nzr1LQiduZLjzarNYqxGyt1gz8sjUh7oXdDgPWtYuyK1FZjzrHvZYNa5JctxJfa5GLM8p7",
  "key31": "4wPG64XrfZk6URxFxQNpmW6rEutukBvCZib3Dkkm4FoydrG9x3kwoLP8m5JGz9egoDJ1DrX2oA1UWbzZbSfwLiU3",
  "key32": "2goHfKEbczKVNQtFeupvsa4xRmLgtcVFiS1MrJDeVqUNHwqWkUaCnvmLzNXb2gS8hsaYWQb2YZPHuE8X9piXppg3",
  "key33": "4wxT4hnq8GS3Jkx4H8QEGQVRY2PSuGnJd75QV61LVSYjhE8A8gGyg313LFM8FkSmBqYqx3zbQiNatkcKE46WcedW"
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
