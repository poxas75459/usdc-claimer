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
    "3GqhPVQqcEF3cVqkajLqEvUeLMbiwCQQi4o1Q82i2G31MByWEPWFHa1QxYFXSA5RGGhAmLA92DRY8JEjxYnJoCNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GcvyueHmVPx1orMVS3efE7vCT6H2uen4ZXwbzTpEmm1w3yxbehrv3xYfZHMt6URwh7rnrQhbodcQwmBUrC6MNaU",
  "key1": "39BS1AZoDLMwQbMHTLhRuqWK6dSgM1vy8dVhoEcz8u9Rw1GbDev7p73akz1zru12Weq5QAjdTu7z8RQsYvUpUP4p",
  "key2": "26eMxHtyvHmkqD5kLYWnLaS3dZmtMp9qud3QLJixGRvmT1H8z6TTFfuCgzGjnn6sBTc4vHjVAVRWtKyvc7y4xNdx",
  "key3": "zSBLJCy5yXFkzqn5PXNwFZnBAjMCYskfbRVnZys5AP9A2GaiqxgXgFP2MoP7bGYcesTzxMY7kHucb2QmxQ63HuF",
  "key4": "2fbNhf36vnXgYfcse86Rbr6Xsw7AZw32oznWZ9hfMat1fYb2weHtkRmQL3kTpqEpRDp8uiju78er9CTo6UJputVe",
  "key5": "3QcqxLfSCbhUxEg9ohkowKoSqVLu2ND5NYuNkTeNh72nf1EsD4h6tLc36L7JCQgFHCLCz7WNNC4VV7wHGV5ct8kf",
  "key6": "27w9ZAy8xfqFhdTwZSfQHucMHDzaDDVnm2eULCtJaDdWZLCzUSnb4rfXmC6coD3pzY8iK1T8RGGmFXX5wZk2wGHV",
  "key7": "2EaHDCBrffC44xb4wBuxrDofaihm5b4yzapH9hvTUpcVFVcxAaVSXm6WD7HhFNwQGRKQFbDqXPRbC6TbwmoAKiKY",
  "key8": "125xQnxP5qKL3AkUgeD3q78Qaq2GhNqnqZP1qYCVfJWEUfFWSfrzEGiopeneSbLSgVvZshrYzGbjHwnk8GowqNtA",
  "key9": "5kCWmZSrEGAhNb1pFDnk77aZAo52ZJARHFQzVSVxuGF2XiG9355amt5K2U3WDNEsXQ8gLZi9D5UPAxddPzbsZhMz",
  "key10": "4GUtV75hmD2Rfi3TH6vCMDA6z2uTPUkH7mXPC3QAyao187nDkZwUhJVm9GQkRw9EgFcnAJKEncUGeT5FiGCWruvH",
  "key11": "24cj2Ufsq6eAujBrZNPD9etXVnmY26e171a7zjMrcnUJoWarzxQC8jsyNKwosRu8ZGG6wmQAZrhMeADUYXj95baF",
  "key12": "4gfExxwxViReuvTaLV4gkM4fyKykECjeKVKrPRB8dvpVaEde7McaqmjBB4CWEFo67UcxU1c6r9vDvwem41kXQfRZ",
  "key13": "5RwK9htU2LdYk4mcas7cGVE3ZCoDYZ5o9dZ8BPbpuzd64ceggnDwRUXchMLs6d6WaqAPb9RhfvwErBjaL5Yy2P8M",
  "key14": "4yMJbkLBJMYRKbB9Y2Aqpx5su4JXdWvLKEhmDmc5kj2FRidQwkSXA1jJufsfDmzBbGknyQdxvwK9TU2wLvwMkd49",
  "key15": "5ZBRmQmY1LtVAsjRsik1EQY2E1aRW1qZwkiSJK2n6mZPjjXZ5eimJ2yZouzpgk8K1BwuSawyQf6B18JpnfpriNYg",
  "key16": "q6FVpUzPYigV1CDguL2KUnT6NzvWQkEYg2WFMTSYAFYXcpNiSYvSThP7FCyoYZ83WXPUkxNdc1ev6Mr6FQ5ENY6",
  "key17": "3vYd5MYuABUPvZf4ircsQsmevBEYbLzYc2xx7ZCyfipkhW75GZ4Jm917cbfxskk5HsbdYqsqgr3Qbdtd1YULJq74",
  "key18": "2o52FTdS1bjZ93gRyfkV1kxd789iJ5yWxRJDgFMuci2VfJxcZ7d9oySza2hmmbMzy5SzXhBDBJUpxK1JpqaxKSm2",
  "key19": "5J7B9xAszME9qqE62H7seDepEgKbm5TQNq3p52JLLLpYq1S4LLAURB1ArawVzM8ZLe7KENu12xZSGpDaGTBG1dpU",
  "key20": "5V9dD8KM5GkNenvLHs5oYpULvB6iAP5DscJV4UHV281LinyvGKYcF7SUrGNeD67czAQT6aK9AZmnjez62ptH6JzU",
  "key21": "5JyeyHsr6Nm1zeVhqBJbyqaUpZZasm3VphoP2pn37ZkSsnHvCAZP3d1cvd3xRqSdRfihEtBRzVi6ruccDCrpcAL4",
  "key22": "2rQRMiYDmeAiZHGkMbWjKuuX6nJUNuKPTvjiRwL6Q7FVemQ9FweQSuCrSXbU9AmoB1Br6ucDqWfBMCctUikR5hh5",
  "key23": "4RiAnvAz5vqWxcnwZLskeGFoWzYg3pdFpUBKu6PdeZevEkdGLDpcG7VtTW5PRavhiNFhHcv3gvGSkm784c2wy2PT",
  "key24": "3j6JEsU91TntJF5F9Pszdvj41s3wPGjzs2yFtuX2zd2gJ9rkS46qGVuYksX6gXKg4RMYKjjDZ5M81bJG4U1TTu1V",
  "key25": "4KpUPj4tS2swmK2uxbvqG4auYR9AohLjSwnvnwdKhF2djfmj7TZX6fKDU2X6AjcjH9NWnErCcUuWXXmYJNzFH95p",
  "key26": "ekyMNqMzoP5GWJw4ChKvPQbGy2ntgRGpEgXzQexv9vNQq6FdYSBoUYJYaXxm6cUmatApUNvtFD99n4h2fqx8NxJ",
  "key27": "4wtLdK4Bg9hfGmUZ1Dx6jLwVDqHFtvwSBqTNBJtSc87WdKVzPzuhbr6WL68pEYaa2Em7ppFsgrtUC69ShVRkggqq",
  "key28": "26CQcScD5gkAWJ1rLPuUz7o2FkWNNuMtKptsX7v1EqpPu7nnMD1AfjB48Fdhv7zYSvY5PoyN5FLULPSjbHZ7q7Nt",
  "key29": "zkjNtwEEe1wQ5F7PuHtxsNL73w25Gmi3jxoeEk7EemVNwWu9C5wRnTkobRiK2JES5byFzgpd2LSMghtcEToTxk3",
  "key30": "5qdLcXohnRUqyhSBYg9f54rnMDhvM6GcC6ViJ8bquJ6w7y2XnC1U9o7eNYdPnhfzvznKqM4zgCEKA2LV9bfGsYvG",
  "key31": "8W9wD9eu47MCtB1anJXnKGz4GEbAQTSyQbcyRCDk8fEYDC5YaNnVd8YigoXVMLbK1Ln7gJb8uERYQPFkpQwqkfF",
  "key32": "2jFsu6Ym8SSujzbtQ74K5JyPX6ff5b8xMHM4xz3WkEEMyrZRYBE53HE8FHJgARbcrNudT7H6NL32sL8KEfzuiXWv",
  "key33": "33JrSqTGUgdAN3aVCk4bATU9ZrJi33NyHhmBKqRjFEFozofoRhSgHK46qos7Tvo1HYeUfU7r6JoGKHNyupy9Pj2i",
  "key34": "52NVmqdd84qcPNeLfCXgN6PfraSsLVdEJXfxiqpU8W4y6k3ibKejrx2gf823axASdLrafrsXvkde1GnRt1mFHhMm",
  "key35": "5KPwS1NpQkPdeRrGKenvgXdzSmXbd5tdtumu1m46XwmNdtqLzNLHvFZEpJ9yG67ZmAt7dAH8RrTz7cVfFN4pL7N2",
  "key36": "268MAX82WEkSpDRkX5p5MFnBysVPn5m418Uhkt8v8EwRBvgqBaBFy7LpxeBhv37jukLfjWJ4ekSWDemG2RoeNytr",
  "key37": "tg4Kc1SqFcuvkWfSxpEdvoJ6MGxbP7YXgh7oVw2LgtxfYgWv3GJpUD2QZf1dAJNJiB3qZHpwEoHTh8rbhZMGRmM",
  "key38": "r8cXQ19VfLHiXVD1zf39mB75Pm1HPVZKEDHWcYpkZR4fbKhJUz5gssezJZsrmM8NanTwfwQtfgxSjyEZ3ZUYuHH",
  "key39": "5ZY91V3wvwnxhkn9R1Yea88pcFhf18gYL8t6aEFhfuok4BABetTkrvFJz4B29rGb2fdUuF1KGfsbwrSYEDfjMVwa",
  "key40": "4eBnphP9A1HwxHanUtCViwxWuWnDmr82BLAUUWW2Y9BMLxkTv62Y571UFAj3K3Dqd7LMefPCBxcM6M3xPwkkjNE7",
  "key41": "3TameCNFV3iq9s7mwwNsYJseqzRNUhCuuYFNFUTaUxpGXYfpMsRXdFEseQRuo9MKHGqReWpwpPdMYuKnfC2E2gVn",
  "key42": "48fq68cyztmQnE7trKEHPfTZUBGGXShXrJrRmuMm3xk8J19cJUGUeuqv9dn2YjxgnMqMRjcjfZQ44dLWwyMkiBWm",
  "key43": "4XhaN84qtaGaqmtucLcSXmZJXSSc6K621h29AxoGh1DrTstUGS7XVr9QX4fdkAQSNF5ssuz1rzdfVNkxvtGYhfJi",
  "key44": "9PhaVwwUqFhR1YHxKkk4sYB9yBVJywNkviiGZChF5Vgwz2k3iJMDkibb9aWbSBsfjf5nDRtbDWgoZhmoAy3EyXD",
  "key45": "4WDn1RApghgi2kxB8vgs3GoUv5sw1AZ6qDM6VmYWxc9Ao1XggjVKAtes9e44amVGjFtNnXQfFWyAHL13SZoh6xDr",
  "key46": "5t4hcifq6MZ8sYWJR5fhAksCox14R4aEY58SCr137CKzVR9Wd6iTz8NqtZfaReAE2ky4xWoqBNWqQvzPwbdyvzJm",
  "key47": "35ykKvnSsd2vFefprJrzdpZQtrzuwZHjkWXK6aqRNUUhQqpDxvZv1wSXk4yWSnUX3DjMtjD9CooJgPbbiV1kUcQV",
  "key48": "3d4Hj5c4oPgvQ9q8JyqG3nDGwrFMb5bFtnmqNQPfXCCEU2EirkfDZK8YcLBAY6WW4muApAxBWUDAudGw8pBqPtxy"
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
