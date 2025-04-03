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
    "4TKxVuWobDFf8bu9MFRpMyPxW3A6Rxcit3sUNdHCYwGZxX8RG66Q38JRoFkSGfxE6ebYMVSKa3pUn6uuHVFvoXYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PhEwLMpBPptArCJFJUEEFyb7hYb4rFBgkLMXja4K2TDxTu7UzYjnBGQNZFzDWnRxFUTiEu3ZweVpdSVs5Zg5nGw",
  "key1": "5M1C8JphFwZfdAca7TWT2WeqVHG8yZCzSPX5HQMnQ93wBBTMFFcfcQYJYV33FNX9XE2pcP9UHPeoQBGzttnJEAWM",
  "key2": "3tBEce7JjL64huJwWrm1JN3oN8WiiuCX7CEcYD1wTPqEPqeTxovHYt3FinymhwUTuCHsfDqygrbHZ81VZwv1fZAe",
  "key3": "4tQXUU9vsUNCLnLY2Tc3SKfPfgqgnHPUn5raHcicFCov6yf4i7AXv6vPLgM1TDfWSFEy7CYGfbVaLWfhP6EDLg7s",
  "key4": "3FdfHuppo8o8W8ttv9gAPrtpCkMFWN7XnZCaQ5ngE2zECr3QHtZ9bt5kUeDF9iDi3oU3xHwwGwoFqv4XVQHe5pBB",
  "key5": "5sasUPwYvTtT2FVjH7FL4aNRP8WM5qpJ2CySu6Ko7462YBtLSAqPoiHKjqkfe3z3sb2uo2CiRinhbsRvkDRRteZh",
  "key6": "5bmCzWCg7ner5x9MGWeWxcT1x88pfwhtPg2uqeZAPkKtzgLDCnTzTRnikcuseikJQ46KHJHZYtgzkuetGndQf4z8",
  "key7": "2nQMMRZFQLHqVKrk3ofobr7Cs9RW6cJUfHUfoL7m67rfhmLfuHK7SYF2XW2EJLhtCUkPRokWB5DUv6vpRUwLbKVL",
  "key8": "UnTSYpfpxHKe6BcjdPWmptCyCxCkkTXx4oUXxHeZN9TPSBD45e773ydcQeZeKRPuyArCshNScEP672v2ehebYBs",
  "key9": "4i5HGyEf1PGeeH4rFY7JMQZba3QHvenHeqECAAGsdEWaCFmD89HM3FkjyqaCtD3M79iP22ofJ4XMWk4fgAyYRwmh",
  "key10": "49N5vAnQv4U7RskTXV7CNvRWKd8AEPNCDQZUxpF3y2oYojjxvS7hh7LzatT3N6pBu9f9SKx6hjsXq6PfoeadJ6L",
  "key11": "4ixxkw3vg4zuukKDwRdpzo7Kn17r8JQzp3JSAqVwQyLa827ra9k3iBX8rjFFzRiCtpM1hdZwhrnt6b8FofvFyCbo",
  "key12": "3dkmusb7T7qZcG1PS9vDgmvM6zZ5CuaM9tTR8nX3Reze1YKYmk8xpK5isvEsTJqueRStFFjV1g8n3fKkeqwJM99h",
  "key13": "3nnt2ji5c3AhwYz2mid9H9etb4us4ske5ifr7iBhE5EV1VZcYNdGsNeJXiUvauFKFkMwrM14c5TzsFdiKi6CxNnr",
  "key14": "JFQdRFMFoQKLdyf71fsZZ6cES8jW3USSASg997XU89vgM1BKm9eACte4pAx18aiSzy4J8cKwMdfNiHPt1H5BGKn",
  "key15": "34dmyrbYj5g6Z8H9DUyDAigqK7V3xorP1nESnnK7TuwuKKnKFL3zANEJpDsqL5v3obJdJiYZFpZ7cduAdmuQkXjW",
  "key16": "4MmheK2cpYbMaxbEJBzGsx4RJzN6QUQPvqcanqUZVCSokNrq7symyAx3EsX8ouYvGQNpc3Dv8VVfMwVr81A7Km3Z",
  "key17": "5c7jGDWTEBptoyP1D3qma7rFB65fXutRddjh5PqG5dAmYfY6ryrykwXCvR7TVX4XVPcLRjshKcn198GskGcXDU6P",
  "key18": "2giT3uiPJoFQMmLRStWkzsVQFJApGDNR5ZnDtL3sFXMQK8oR2PLKzDMn5NjTFt3jNX9Quvpk3vTck9yfy4mDKbTu",
  "key19": "3ndDw662NG2ezeJBwzPmQnuoouPkS74m8itaT5xD6DtNxc7DpWkBow69vnQVWQquxQTAesPoxP1trV2tqusWNEUp",
  "key20": "UJw1qteqyMk5JWErvFLuWJGnPdjaHRGmAD4y5KLS2pDvuWXB94HdKTkbVtLMdh1TCuiFz1hsSL2xsrGfuLShDXU",
  "key21": "5VLZrvXQh12ATHr8bp2Em9VtnSG2S61Ls8wtkw6gvDbwKxtddDJoLxq4JhgPv6BK2SMkVgkrdvnPo9iF8FQUuPA6",
  "key22": "2gf9tgPHuufTdQozYxuFuoeam8ZASWjTJonNZnoSb7fm8FdRNXimvppW4gSr52ZeYWeRYkGgbuAUkD3Juc4t4Dp",
  "key23": "2XyN26W6D2JkeAQk3KTk5iijefqvnLAPE67SySVC46sG4H1RLrjcqVnD2DijixEj6k6qt3w1m1bhaL4Qw9ez1Wx",
  "key24": "5fc6arqXFKUhnhF2FGS4EEuXbJi8kE8jgkWSD1kBtKRzAM47zgNdwbHWAwqudTqwLvnnagE45MqCy3SJmxtMztUa",
  "key25": "5UWNDDMSk9ta8Lx3DBRKadEM5yxeq7Au3gYncZ5CsA761KdkvaKCLHn6MJ4dJ12UUqDQLStcQJBUtM9izFqaHwha",
  "key26": "3ZttFMAg4YXbfutVxbwZdnRx3942823mcH2GVJgorR7pP1MGVdYgU2RpDYZz4BWrsSq1U9CJUHdj45kV2Dp6KeYU",
  "key27": "fTY8v8JZGaWvzkSYfQiDZaLtYEFEM5XxJAhXUAcQj7kXLgxkZc8F6HahGgZZ2ziXqV2mtnBd1t59uKZXRHovpaw",
  "key28": "4SNyrPXuBTp6yW9QpiqcKDJHPdnQs7t6nmwH2CSw8kCPEXSaCC6xFBTF8NorQRcDFap8zAu1neVj4emcbVj45Z5e",
  "key29": "MPzqgeK7xYvg8Xxu1X2Yv2bwabHe36jiavLX9jgDgrzgppg6CFNNy88zpXWrpzCnmwUtvHakLsPXqusnuou85fe",
  "key30": "5RQH7mp1f35TVr3kctfgZStCCo1hZckLmcb1PBHmBqoTXVibVYP55vcdoxnjy7hyZKZ4frfRUo1AShGbCut8qWmn",
  "key31": "2JnCbexxWfJcKEweRCinc5zcNDhQLBbozzTy7QDk4RdhfRjVQ9EfE9vxHnTQLYx58Z96Fuwyeq1jKN258nnFbYnH",
  "key32": "5dxesQcEE6f5mhoHiBQij7C7zUZvE1NWyC7uMQA2Z9c4puCzqpEZPGxkKXUmcM8kG4zwLym4giFMEeCdyHogpUBs",
  "key33": "49ttMTRczaDFmbgq8tev74MZFWJJKPKstwSzjsuHXHLBFSqaKREzgQ57E3jQyU6bj3Bn1icetw6SnbBJYf4eFX7N",
  "key34": "4dYP5YC2KhqsaotmRhfCjPkXFo7zastXPknRryCRMMFb5FJqo2Grsn3V1D666T6kA9a5TpWnPKLRa8apm8o2bv1q",
  "key35": "4dpbA3Rwv81zpFUjEvQYKKurwCNQJNsYTmcKYf2b8CCBgnVFCPxSYsYqaaSrt7eJHN1pWauz4Td743eD5h7pTz5g",
  "key36": "4wkdti3diesyyKyEhuT735iV9Vqv2rFBZTQB9DPLqfdA5irjt3HdCsVWvPHB94qLG3ZhuJ6fFbHYy4KeSuXeCsfF",
  "key37": "3CD91MQyopzdPFi1hJoBVqpYCPQo1xPu2rtor7J9u6T92FwkLYPTLyFh2z726vy9gK6n1wWZgH2DAuTyHK2Kbv6R",
  "key38": "pJuAodthGm9Y69x7DXaVy3VK1rbSkiZPdK6BCC1wAtWsa4Viobr2EfsNjHPvU75FHafaqNN1ggMRFh4fxvoAAm9",
  "key39": "2SKW8RAt6ipZGwz6ST5dffP7CuT2vFFEXGYFsBJfdTiLQmTiAbDPcGXCJnAL47EMoAGkJrE3nz6jHu2NJ4g6QE8q",
  "key40": "2qCbEPnc9DkhVuhiKEWPQM498wxhBk2ZTSZ13JjDZecj1ybUGwE9gTZR9dPxFsTzBo8gATH69eaLQ6xXVf7mbZgs",
  "key41": "5FdPHCYmaEdgvyDzEspcWZeiJNGH9qkW8XS2wyzNzsqPBE2oYrYGQRMSKzL6JNuudMUn8zbTWqoFaRRxnAcXqxay",
  "key42": "2CKm6RcdAv9h8a28FakV4GbJtUktJh6dPbH3Cve1H66QjceHTqxK32xoPXFpfZ9Lh17yjuhXC4StRcSUV6RVhZNs",
  "key43": "3PRJrWTGLajCqvxMtz6g9tRTWNv12sF2GZDAiZ1Xs9xigPSJ2y67GptwaiM9wGDwu7MTPEq74ZzMxzZWy8Uq5zMc",
  "key44": "2JMKfAqMSiKYN1LgmvDkAQpMoPpwGpywZA4VusnZaemvfxijZ47iXcHApRrjvNh37JT9rjmkw2dLoESJ6wxqfvkd",
  "key45": "4MQ9tj48QXVUQT934fuWYc32khcpmacgfmNkgNXNX3JKHRcgw3cvgaq1bHkUVqhjiY5w4uPqFcKxbGh6SWU328YN",
  "key46": "28aTtaHEkfmJMMbrDNVSE7ezBpPThH2kMNBJw9mG9WfyaJghWhrKBqPGLrh91JkdfPnQQ84xiDMbJCjD7uwpDkYX",
  "key47": "43uZnqGkUN5QWo5B7HVrxVNAcJuAU43JW2r7c3s3asmWLSZkUACjQgMwxZvBqNxbqXS7YC1xNEc3rHzW56VFv6AK",
  "key48": "2dLSZ5zn3eBFThSZRWNUUUfETMKURVnmGGeuHrKrP9PhR1MDf7ESySKFUgYmRqVH9uMdLhvz2rzvJxXsmWfumrwz",
  "key49": "64h4xwUZ7Wr8f66zr3xfvd5Ye4uFxfdowEU5a69u9cDVx1xGZ4jJBcnv4jhnxs2qFcbe2SkigYvQa8sN7MjwuY8p"
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
