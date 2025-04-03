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
    "HmQh75pjCZrzjoiUp91qGtELaWJjYbe5oSwtWpkd7WChscXyk4aw4nc4hreJD19XEXdofdBnp9RPX5jaheE3BW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28AtR2ddNxXcdW1f7kbqZ6d5U3fUDMKZJiLtgP9uJiGZeTqpfohBvqFPt7J9ayFXXGfB2dfiG6bhyede4n5Cz4G8",
  "key1": "23q7kMUTuFvNH9FRq3iis5MPpXasZL2G6UfYR89Xy9SgFckX3xWaTqKM9rb9H2tkaFiqLdxWXkUmEeSxL46Pi3qm",
  "key2": "rzCdSv9ddpfUS4aDSMM4nXMyJqW81k5cTbvGLheqktExwvKcb6VFChZEcrkYzHYksPvq4J3JkcF4iQkH7ixhq6j",
  "key3": "2XMdrJH3JaQQNHQQdyeHXDYMpAFLr2JGNvNigmvhAKxaM6XahRBgZqC4xYwTtQxyFiUZV8SHtK4kyY6Hnj8u7axP",
  "key4": "4SwYV3emJ5YSkZHdfUCBBF7c3ae8i6HxEstZRYrZ3y46uj5nWLrEEk2FUkDLjZu5yM5uDoqLiuUgNQZ8z2aPgoka",
  "key5": "3R2aJC2hLr94RKisdSytY9Cqma2UdkCXT9tU7dgo4cTDxC4WCjuxt3veU7WkmXoCMkCETQWq4umr2jmjaRKz4Lvg",
  "key6": "2gzDfWW43kRsLYJfMYRvv5jx116Uk6naonwHDswzikfqgiXEKQkeWfk8DYcTwabzEh6GDjTSGdtgn9SQhzY4yg47",
  "key7": "3tJxVouw3u3dUBPJVmP2D6Gheeuwvyd3NRGmBitnv6Eow6oryraiF6EA17njKmYVd6TVbb3hQee5SrEw4TStyqyp",
  "key8": "fkXFJmeBsLT3kZJbZ4ZGarNcjcv4wkwdoK8h2LvWpM27q1b1FufJMhgRbQopFmWGMdT4355mjFpzQX4FENGxhku",
  "key9": "3wfrEZ3shwRL4H1wVEfesyEzEwSqim4wKWm7DamrU5U8N9r3Ch6MffR3SR2dTzQJToqcC5QB6g3s5gc5EhXuCR2h",
  "key10": "5QSaBp1G7cuHYCnXq3gQeKkwwQ323DimsJVrMP5KCjXFnbysYjjL6abMzDBhrmiN63chnYVWGfSQHBnM57WsGRNJ",
  "key11": "2fwfEUacfrHjuAW9NNAqgk8eKP5kkpvRohbwiozy1XnueTAbgTE31YsZeiwDP7VcJih5NLuzVKg8racae42RXwnr",
  "key12": "5XeTbYHV6VELgoi1nw7eneynhDfBigt3iHAVbantgC59WTn5JuZsCdqJjQDWahxLXGqxvLkwt6kXCbnDsvsz1nvi",
  "key13": "33owHhkJeGhD88ZnCQvZNJ78bmRbDCtiFm6P7MHhqacL2hWxaMX6DCQ55KMN5dUjgjUfx1KPcSh5Sij2Xiorb6HE",
  "key14": "5MdhpduwX2VKJifRyEtrVuZC1v3iLGUZS8R4FSka3Bf3naukoEWpJ7HYjX5xkMqfJXkc7iBEqHNnsRHVPADLAWkW",
  "key15": "4fw8Wvo91hJ9LYMgP9kfH6RBHTLPMvoHU4yVQz5bESJHEFnQTKRAjko9VN5bo7wXgjexuT13jEEtc6rxPi2Nxzt3",
  "key16": "49YLBJKj2cLHegYywX2fj6DhmrNquzcGioRN8uybGh7wFoQTjmc54sSQWJhmuruiv1fuUuYPzg362rSV8N4nycZy",
  "key17": "49KdnkLaDDgred9ngdKBAMv2dE1LiGm2TbBdPsfWguf7FW5u6TzojaCUsitfQZStQQWuVLqpcLMAL8JaZFMwEAkz",
  "key18": "mq9aXdu8MtJ9YJ8ZUXCrrbPCsHsbri9pcPYuW4T8mDPrzJYLiFT7nLYzQxzhZxTiG1hhXMa9RwBMSS7DpDHN2ps",
  "key19": "5Acg4Hc3JA5xGeDq4c6EyHRGyKXP4oonUYGaomEmwujrX5bn4fCxUaQqbjLHS274neWE2w4s3dQHXk1JNiwt5RmG",
  "key20": "2eBKKCTXZnuDpCYkGPDriF8TJFoPSNRyXPZE8JmdAqkMJCNN6ECzi5REDhB6KGvSr8SoPAmg7NaBmgyZdMFfAovg",
  "key21": "2qbLTovckEJyFqWW3v6ZDSNGWFw5JEPjTtxHa9nJ5gTrQ8M2CcPYuH7xyfs7yZLhy9t9ewzUq68YYWAScFou5Zs6",
  "key22": "EjCi2nzViwptQWq3ZGrnUXqP1eG739atRVQSgtBrQBPktUjuC2RRFKVVvi2x8dg1TAv4WZrmXsZAaDFa4aUPXNW",
  "key23": "2H1YF2H2eMLzgu6s31Lq4qLDMGeNGuYMSiNjnt7onpCHq31tEBm4emXZnb7r3cYNKXRFMZaiEhYxEWuAFDwzRPBM",
  "key24": "Vm3LXXHzV2c1UWLZS8LEr23h4xBgv7dBhBJ7ZiWM51rDMYhQ3BeqV5vAV2ZZ5TZd8ASFHEQ7cfwCaav1kWQ4hzA",
  "key25": "4qmyhgxtRDjkDWCT6sBXe6Wf9MrdCizqTqCNC25Q4asJwXNjR26mQKppS7WCfsR7i4igkHeXdoYEcv8tyxpiTKb4",
  "key26": "4S7TUZtTcHefWCqkoDWkhMxU9XZDvJjmVKSEba2JpgtejXH4tL3hE2UXafQSxLsATAT1NEBEPFTjnuvQ7RDUTReP",
  "key27": "49KzmutGMTsnK9vzc5nF8nMSCmeGRhbDJCU7VW7zcG28TE7QE7u3fupetNPwLYZJUvpAVRk5GDyK4eGDEeWVAbZn",
  "key28": "t5fGTYhB1xemBa1m84gxeWz3rmAJGxqbCQ5tX46qcZEnuL7rf3qk1gQ7Mm469j98iKiHcogCTwnChtrNDHGkjCX",
  "key29": "5Wvk1aZpZUkbai3wCiuVvNrrijckkvzu5E5ynNfn5D8E2w6viXZrRzjK5i38yK898m9a4xUZaVSc1QR7azro5sot",
  "key30": "2kPFurJC57jEbJF2Ppyjmqe6Psdd2qpvYWHYG81LPAhvbbB8HGT29TzZZpqZdfhJkS5wV3Fz53BajXbs54YJ1AKu",
  "key31": "sWgnPzh84WbWoCQiTCnQHK6YFZwQtH5n7GKD4GBz5SXryjNvysyjcy8k2UqzpAYFoHtRAAf9RXVRiBRQD2ecTEN",
  "key32": "4NDfN4HM66SRQXqKCnmRdKJLxTXvVhmMJbQ127qipHvJ2iPDtfPFhpswKw7Z4szPH3BhvgndAt4m8hTocPZqTuzW",
  "key33": "7GCX6Jm24UTakcyrj6Ao8V9kv1nKo16mpgTe25Rdbh3pZ89mqKvMTKR4QyYTCsqLC2CncJYX9vYXbdnqH1xefjn",
  "key34": "5EwTAYehAPa5Arbp33KCnkvAzZhJd8LJ6pw8VkpF8C9VpYYm9SS8p4mZXBLYpB55VoNjA3Evj8pRw2FzL3xuyuLG",
  "key35": "4CCtjLMJSjNVdwTnF8rD5aprEN7EBvmP3jeeBT5Nnuyce5xd6jABztaXda8WuBZhGo1BJUiaKi9HCZbedUJuPQc4",
  "key36": "3t8Mu3RkcpGMahTaJ6e79tLWjVhAWp6CK7XGjJbjvKVhyu7gKJ5tpuorv65fJmPCk56m4YpWgzq8rYqbSE5j4vdX",
  "key37": "4kegoDvQN85UY67b5AKfnw3btXJTZAuqfW5zC73HjXSEHPTUBMgU9jWD4aeJ8o2THQWPf79rHXWuZ2BHYZ3H27Uf",
  "key38": "58mr4wHRnw7YcSNTqaxyfh1qKpg3PunwUmiAfc1MyBduv7dNXcehRJo2KUvGg36tQiDmMLQFqxNmWfR1NPPfv9V4",
  "key39": "3R8NScMdzjJjqx7y9bGJyPPy4e3J5YdRmwQm4oCnnBMtDcV4BkAFdFjnFzaopzMPhXzQ52BGYL9kabKDD44FN45m",
  "key40": "525ezSr3mg9ebrUXfiKC1bjqFjFgFFAwh3x5LRLdaY7kbLhXKrUx9BzdrkQohjNBgg1c7yzWVayXhLTikYmXBzMD",
  "key41": "4PrSjdQ5R3Nmvp1aBLx3s3QVZKeEGDpr4Mi95mhsuVcdRKcQnybvSkwDTVo1usmXmGCHjRmfsVBzQ55qeNzFZMR2",
  "key42": "23hsosQtuxLgS9EcpUTAm43UWKFEeTcf9XpRnzVU7mG4fJwARya3o6572Tez9UWz3nuGkCructTpir6pgYHVGnn7"
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
