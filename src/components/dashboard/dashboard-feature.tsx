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
    "3RF7jR2BUQsGrwgaiLwfAC7oHRTqzQ5fLG1qtzW9jp8TF44LtABr4TjxSuPfqoKKaFWv4hRK4m7hzPqYBSWuBPQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k3dzEJdQ54Mkhiqcfpj7y3mcoTp21zDR244MxLA1n5sb5Yggg7AUvWVoTFZ8fk84XSW5tvKBTszDcMqAydrqSqk",
  "key1": "57CYkKUHkPVeWc5wroohWFPjmxUPhxoKvRQ9jW6KiVH9ioYyZ7YdcdAeXHd9TwWiimSHe4P9NykkHpQcwq3mZLLg",
  "key2": "3h6GSTaVeAw1qb7e2DxK14c5LMPiqPNHHyUzyo3jYh31EbpfXVT9Dz9tuc5PvGu3bMB4dQeHyDTuwCzv5AeP7RF",
  "key3": "2Z3eu9we8eFzKhTTnuuzqMF2CeSdJyEpdjWdJdHioS5KpVr6Mo4M89tSQ98ht3sF6FgBarfLMaKW4R9emoxGYncB",
  "key4": "KRwjDQ5hu4CwgsTEZW6wtSRzA1BW2PAH1DqaoxdXuMVm24nkpnvsrDbfTqrNcemQB8qDARawFtjoP5uHJzJqp3V",
  "key5": "4XwTaziTf7CpwqCsiivvXrQR3K7vQcxw53NFJwF239DDAuXSnWKAipbwDouGtYXR5Y4yC6bEuvmbBkpk6YCTm9oB",
  "key6": "3dEAzaC6GcNGZKu4HUxstmNwsEEH9pAGCeCbwaaPjDA589EzFHpuWUd7bpVQLArTXHKDHS7uPoGPABWJdWUqjEJr",
  "key7": "4yM3jBYtjF23a7cXNqKvjQVeNRynnDLRGNBYVaqL1whzaBv6mmY5Pph4eFzNMC8Y6up31ka6cPkGpG8ZvKaizfok",
  "key8": "41RwqxTEkb6Ep8aNbkgW28Hr9wSfdyoX6cwBynKroUkBSkgSn9hQvPA4ButbmrbFUKyqv5w1y3tXuZxQkbSwaWmK",
  "key9": "2sTN4Pkp38ZK6bqYymUtRsuKnS5dK9AXQgcb5GCYmCJ9bMMoojzR6EoaLPeGKa5V4CjzbvN7WZzfPAUjasfnk6r1",
  "key10": "2bs7ZDEmhr2Yv4RcXUMVxhhKp2PkdX3MZ9kVGcVSytVEhi9FJ3WWbk2JbtBwNaYSg3ugJPFaQFeuC58BXFa8KMgM",
  "key11": "61gQiWN68M1EHcBgRvowz6Pbxa5A9Fm7f6eMuDhv2tk24eBGMBmZ47kKmwUuvgk8AjwRUnKzqCgCNwPaCc4nySqq",
  "key12": "QqwdjBAz7bnkUfxUKSKtKgr7ac7Ljp916Wwkq7RZGqkW2GpLuNSkbnFjgZXwJAK3RtvAq7BsLzVyZs1hHiSxv24",
  "key13": "4WG7cVWGfM6cdWfiqhrseyEtFMSShwqRDhKtqmdPFHBb2Yur9vebaVe9DB9DGnbxMHAmqtw9i9HWDmaekCeVRQxF",
  "key14": "SdaKrQcAozhbvBbSZUwrdYR8t8WPuKM4GErQ6rCLmfSaMt6XGRBLr96xWXNicCQtz2EvrJNXAwePg1Q1cdfh9xd",
  "key15": "5cFS481viVG8d9q5xULHZp1DNqZHXqcE8uamPPHbXwN2gSxaXtHkA6hgQcZgz1W246dznGhrVnRnpFFwQPQZqrWa",
  "key16": "4CihQQchHUgcBqSQMN1MQR4hLMyszmPLN1Y6JnugwBoLD9zR9pmkXWdEk7xsjEJK2fSNAJtYxaBR6sNKg4FN356e",
  "key17": "4o38un343yuRGjAGrxHJNschAWygyt7JwS6MfMRYYMPEBmrwNYxJsYtzCKnxYLwKVSQyqe9KZSpywMPZHxarSmqG",
  "key18": "XiJL9kTdXosJ2955w6RvHSbFQhQT4mnYjHrCzcciRGokjYU1i5N3M6WZcjn954z8zzak1fHvymRgUYzvaJNXp3t",
  "key19": "pouYoEajxgALj9N6pRzw4rV6PnCKFqCbZyHnfRgGu3UREwqvGR8EcM9PnyyeSvt6oY7n7QTKbuCKJb9u1cg72cj",
  "key20": "5qbdSjsxEM3cTvMrvgvsqGe81vJRpmfocAnvktXX26C6fGvhPsaac8AyR2kw8YL3PGZn5QPYXUn2fs3y7oZFn268",
  "key21": "3RQWEcft4hy6KFre7VjKSJc1mD3eeE3udhY33n4xitLZoF6gmZd6cQqtNd2HgLUQuTW9oxRAseTsdtgjpuQZodYd",
  "key22": "4GvfWPNz1JfbJ5LSTAPzwrLPyoQFZafTQmjwohRaubR3KcaJcrS1VQ6mSae7XwFyywj8wXVUEmzRbDtpimfMy6FX",
  "key23": "2ghMVZJqhGuH9xsLN6F6PCqgvCtmwnxhhTGaKBLUZBhBazxUgVxYBXMgHbJbVpyu8LC33T7P9NtFRGhWwgm69BNa",
  "key24": "3VbUw9DMHCceTwAfNwu1LQoTuq3YUdfXM4ypcfHJVocQwjfgKvMuKrMumJPqWYEL7wMYnmH1imEdNdMEBXx5FwM3",
  "key25": "3JVxrRcvdzSDc7fqZaoqUTqfddWp7uoreU6fJ5TeeMgRTQ6kUs1up8VP2zsWLu6BiAakWHyCgeJ6AnhgKVrBiW99",
  "key26": "2QnzjQVkSrww1o1ff91wUMxM59yC7aaD4kF3juZWxg9wK69fEYDoCE7fVZeaXQv63Zp37a5rp8SUM7h6PWm4jHWA",
  "key27": "pAyjVR6UhH1TVqwHyACs7LUBuV9z4GC9yV8QDKdqgehk6t7W9svEc6cxG5wVEEhGAe9aAePu4EY1Bi2Rt8n6gLj",
  "key28": "3tSFxwhLpKhrG4ArXYGm9wTL8LkvXpLAicmRMWawppzd2pNZ3erGspYposdeB5WFVs34VBGtKR5hcEvV9zdBBU3L",
  "key29": "dueXrS7dhN58RnYzNG2AssarbhiXyx2iLhehRxt6MnDrEsHnJHajFKfyKrYN5wmY1dWvsuNL2ScU4QDDgV72Bs2",
  "key30": "3QKzc6wNpo9rHcxwg95q46YFBTz1aN37waCkLz6WckmBFzCuxSUe6Vh8GWctJKe5G3hHd5U5ihyzJ1FXa6F3TcJA",
  "key31": "2a2pE8mthDovPsrL6YkBmwt1DdEcY7KWx8ZjqvYaZt4dLAEsPsLPWDyT7ao2w4HNNh7pXg48rpha2Pp5upC6qyrS",
  "key32": "42A2yfr32cgLQVYVyUN2wQHwnjPyeegDNFtW5jRTPbuW9NzGrhd5mx5QUWdUNk7VVfG5WxYdLBn3DaSEEHrSCRW4",
  "key33": "3jFr4NM9XsRXTXPXSfYxF6f6PkvXLpyBRAGkrLwm1qYhdGgPqJBc3LdbShcGF8FdL3C5PCzwvt4Q9kchhg5hZkDU",
  "key34": "5XXK39LpDLYRoQ4npMQZyDZMzGMLN4F2khkqbdujAAx1EGcgH1Q59P5FrWYdtnk4CFQohBsdWJz1AcbSX7A1afno",
  "key35": "2zhBAF25tzfYD7HYnsAEz4oMhJvAVzxq8tMp9HffQ7ZYb9pLTLQ9B5a8bBYbRhHRxqXNPGHji8MdANetbEN4Qv66",
  "key36": "2AFthtcdprpXi13zt48U12Zq4hfsL5mXDK6FFoPQZe8fARjuNus8wC974tNg4V6T4Y7eSt4kCBzuTJcM83Ws5x4L",
  "key37": "4pqpeT9Q5Tb4KLwKsxnkWcrexgxhTFPkavVpeERCRDZnpVmMYSog2ehctVZXUMVV9T4uTt21sk3G39KEkL3mJrnK",
  "key38": "3Pbr4W7ttPnnU624XsqcL4TMFtsNKRdBes74wiyT57LFZz4eHMtPrxHepPNpMuVQc8wcXv3xKWYzCGQLXQvyS5xH",
  "key39": "4gaa2898692T9Kez2RbPemUEXAcVT7zsSNDqcdPBUk9Q1tqEb8CfZpVFcxvwocU6DL1z5NepAspifJdC3WzMX8o",
  "key40": "QnTs6ZKXtmqztHzuy9r8LshLvSeyvR39xeyiNdnpKjW22z62RntuGqKP8p8Wm4Tj65xnCzLb6GLAQmH1ri7Wx1X",
  "key41": "5RRzwnXVZw48FFZNBFLfkentfZdfEzpZWHFz6f3ZMePhr7ukrmeSbRPugLhwssxvwPmbZYTXnu9uKjoQCFTJqZip",
  "key42": "2fbBgmPStqdCZ1gZQFiEGP2eJcWSoPn8stBfpDqLiA7FAPjqc6EmLPst8B8zW1PRbPZrq5yQAaRmM8C44UNr6c1s",
  "key43": "GydJ8S6xtT2o2VJQh3bXduCEy7EfbiHthJSWxFXG1tZQk8dVCogSgnug3UeGAkPfRriQnrdpbfTFzzdHuh8JPdz",
  "key44": "2yPgLYioG6RK5w4bTe9wRZt1UVQckWEmFSkvBgfKXQT2wxYYpvzUWHCQW3KgGsWCH9WjpcpbLKN1tHP5QNUupmM3",
  "key45": "3scSQrpdczFG6z8qyM9ofEn3eCvVrehnV7dJWM4wz8sH3AuesBVqD5JYwtU99V7ztXktUCyE6pCBgAK4HZj5aH8b",
  "key46": "5DCP6DeQpohbH2MWQwwg8wA3VVgEQhL3KmgSDSqPuW9SrG5ure9zs3qE5eeHBX5LieTfjFCe3fT2nYVrkNsf45BH",
  "key47": "3DnyZgNXSRZKxKt2rJfiPGccwWwv1XhMoZUS7vwRm8nZPPw8T4gyUT9jABTfAGLSrCAMPs9J4yEKLBqi4C3ARdMY",
  "key48": "PhSoBYFTjhGbwsggqV8ZGDQh5BJvS6qEKXmnB4neHcojnBnzt7rGuF6QUWrPtCrQb3q3DTKoQf363ULFKwgByfz",
  "key49": "XvDtwGL1J4HaLYbBU8D6dk8Se8S8d1YKHtrmbc6hMKndMRLBQrjuWEBTm8d3vjq95t9Pjtqo6wYNFno6sxVEo3R"
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
