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
    "2JphLQWUg13gPQjPbtDippdYNJNspcqsjFK4yKxwDXXnKpnxkcE34jn8XaJevRPvFJnNa8xxaZTt4SpC2xwRanpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bbWEQEsCfKzjXMkaRwHBjuK5FmDqadtCyiR9aZ5pJsw5xtiJWT6BEsnLHNKXMWK8RdK8Buwb7rAdFGAiLvAn6i4",
  "key1": "37Fx3JNfrSKf8YszeihpojvkR3HDZiheoNjPgfCjop7T7pgxQ7Xt9qfaEYgdgKpJT7NJviN7AcuygBvo6Ma9iWLh",
  "key2": "5hvShwBWWiuTjEPDek4KAKYyiFQ77qg6ujgzbZWVC8vitDcX7Qc9E566rgaspkk6Uq4TWgifqUFGKD96saRqXRES",
  "key3": "2F9PDXu1Qmbqb67sLYwD9i8e12vsEmiPMNXvMPoTvWcHToHQ2FagGZykAFpqFipXfUhNgmVTtRxcGTPti569yS5v",
  "key4": "2b8z6F742KzVhwMCdsjURPaMrJsy6ff2pMLjyHJUXBEXSNdUZGYqoGPg5CJ9AdRFzBHgNx2tdta1a4mZ9ZvYidqS",
  "key5": "4qQgx3Q7GPofMuG4xX4ZzhE7Eb3Go7KV3n6MDUJqoYCCEBo3RBrxzGFn89cJ1MtmBPqo3UY44y7ZUagUV6uSn3Gm",
  "key6": "T3cUGneUv32kLYLNcypMt3s9ABVNPJYH627HwZnTkCJ2zBVq9DEFRA9zY6ErGQiGTAiPt674e7duqDuDPRssdfc",
  "key7": "2GtQvkB7cd8rPdSA6QXy3akjp4sucpx52ho514hG2vgwkAMpQa7ap5svGcKdcWwyTowT6ncVASePdZN8QK6pPeJC",
  "key8": "2EWiRmdY9pPAAqoQuRPZW13s8EkyAZTChPQRD2KgEV7NC94kj2pHApmWncdvEGRkiBMVet4F2sJZ1jFhpKXtaVSY",
  "key9": "9hrAqqsafQ26JsCwfW2N7NRYppHKUFCkF2KPfukJh2ZqiQySTEPNZbqY4kDYp8DyspEtwtSP6c9FrQwHSEGByKr",
  "key10": "5xwTRLx3FMNcU5r9m8HNa5X1oUWuFWTQhEUcdQMEYXH3w4nsXKh81rJSXezTm3bA5SxCSHg4wNY5HxS937bFWVbt",
  "key11": "3iNnU5NzxqBffDNjGC8jtcc4FSuqKRNUfsxGPkRbntSqqQeyL1UVPS9e2XXePy7WCj5rQaeG44F3HWqiudW8QhQC",
  "key12": "2QXB9jMdQjVCjKJhh7QejCjyhWBPs4NDsPFQ64TDXYd9xBpRezW8TfHpAvoWpmbYtkmVHPGWC72kpz4jpY79BdED",
  "key13": "4MQZeL9NaudUX44Ebq7rPU3VEB5ywbtFQghRnGq8oao8E159G59GEV6PRwQePVwK98XMskGSZddwdQxSvkifrhgp",
  "key14": "3bHc1b9RwrytujWzWMajaVU8t9BoE6Hitfy9f8K6aXcRcqVjan851TBtgtZrD5XKHEkaHk3HgT9w3LvVm3sy2FkQ",
  "key15": "3UWM6ZRUGmL5zVvJJ1YBFJt1ZXFZyKRyWa7LkKAW1vSwFCe9CsFw6aTq7nogSYAiGveqPrpgSyyhUHhDiSPXVVDP",
  "key16": "5FFQVMGChA4Ydd6SMurjYUjXZoLHkazRkaiKbnQJvNYzqJ49j6tywEK2m4Kv1j2AooH4FNemT8EBUucmAxogmELL",
  "key17": "419b8Z3Wx6GCmUStZ5Y9KzqQSzHtWk66JTcVtsdYvEfouAMB5SKnynY7StEKwygB7mgSKozzFu5eLB7DL9aKVWoC",
  "key18": "HGw1WMosrXQP2DTfUw8t9dprfJ6yVweaoNvhULVT6yYFLUK1qMk2V3rkk9bTfvHsMCEzE3RK3qC8gD2xnNUVfFq",
  "key19": "67YubuzAgDKKuJhKcudvEX6NMwiGeQQiDbkt5QyVEc9SzWrFFxtbiQ7UCFH7kv1ASZG9tK2Y2D2x24KJjPq2uwJR",
  "key20": "2wssqpm7mrfvWn9nE7zP2Krujscja3iqWP1AK2fDwnCgyrTKmBkTNsNkzZrrYUVxKnujL8NW6kKh9NMZebfePS4g",
  "key21": "4nu3QBHTrQzZZT7ip5b8Gk8GFcHwHmDcBsaL55qbNaZPjp9XKgC1mwr1JvvymKgcBC4rDJw958x9GXGTpGFbrN1A",
  "key22": "434TsmcrFopJyxuR6PE6cFNoY2pRYtfxBfFix7ZaeehfwUiwtgsEbhUUb1hMZ3LMrTq3R1fKW7uSQFwEybQhpHwk",
  "key23": "5UWVWqTToZvypRuFLjfMP9yvnRyuKT6P4hKRorAQJy5Jv4xbM1ETeVF1Rjo9PqHoQRV9cVvubDZ1Cj6r3JwB3J9p",
  "key24": "2pNbivVpZtitmqMWyaekoeMTCpeEhagNQJWRiP5BpmM65qByziz9zMiozTPgE8fqdjizJxFhM2kyZYw3nq43KyQw",
  "key25": "5i7HRCCtyegBXtW5SdqUiCbCgPCkuc97zRbcaHuf2xry8gVL4rhteK7D3H8FZxLjSXAXkpUyPajm2LcoQX8UhP8V",
  "key26": "2oNRECR8mADhMLeqrvGBPuqCgoSVongWdVHSrAtzPX2sZSCXBsr6YargCfcaG5baMuGMSmpac3x8RSMCiChXSheS",
  "key27": "3uXoG1s5xjbd9p6KCmDVT8fuqc1JXmYFuq4AMdbXYT8pzmN6gQCBcBYfbH6qRyDK7QqBhQEmWG4NuCdhN3S5pxA7",
  "key28": "2zs5xNaJ2S4QNSPmKCM8vkxP21kQUMiNF4QqVpFuk9YXftzm7zznnGqxZmmMGnwQeEnUxeHFFFKwAjHfaScPt75u",
  "key29": "4DzxrX9Riy71K6pwSii2fZQcTz2um3kzpxbEL5cJM5tYkHm48L3cf7eCm4kv5CeNPB8sjk1BHty7WdSxFmWbZkXB",
  "key30": "2nJHKH2GQQxhf55sJemMG6NVgD4zznXtykzgUpbJPRzDhYqXRBr5AK1kQFXLdfix8aidC9ekMDUNWgY56y1cnxqn",
  "key31": "3GvxV7GXddPMKcd77VLEwkx5YEsdrwz3MTDK9ot9g4yY364VEs4wTUsBsZWD2oDKwVZHauMC1SCWuczCM1fiV8RV",
  "key32": "5XJgFdiRkDni3JzHWy2th7idjRt78uYis7LkZVC9UjEwRj2N8nb9LQ2AEu1egm9zoVw2zxQ3RipBqUdJ9tkVXPCk",
  "key33": "4kjBn6wzizAa1MfUCiCcz5PecoSWz3c4sYY5vrrttovcKyQpPCKqRDAPhAY4P2wtdaGKs1jzCF6wyyF5CvYxTtCD",
  "key34": "2YBaqF5YPBn8qpjnj5DJx3oAD7AMVKu1mye9bGu4GNBTyq6YCJtxhE8shPCWcJvuMi76LPXq2N2kwGkez947KyuH",
  "key35": "2wzwzRK6dinqor7DttC3muQb1c8DcgB61EdPZsNyBVu3YmjzHUkiJdGFaev9bJMsggMEaxbf5eCVLNksoKyXzMTw",
  "key36": "cZgKT1uaqKA8c8GHHqfcHMKALczKVFTCxbWxYJzGbF4NyBVdiFnbyqrim8qYUUVsGQa5UYGo4dNqkiB7Z7pfyny",
  "key37": "2FnxV3GXP44sgMiZHX6B2svXG7B6oyLLzigcWNbq5fQ5prq38q277AdxDY8oCppwi8UxyySAtPcNbStUWvLSxb41",
  "key38": "57m8nUE4sihFe3CjsEzqqQNMgNBUkNd9HPsKcEW73G1Xb9mLcosUamfh2F3cgbDY2Psgwi1Yg3vZHTSRVd6crPcS",
  "key39": "Eg3egnT3HX3xigz6hWZeZrk6rdaknJJBzehksdedsFexdqHkeQhxMQsMXZC1qopASd2Dn8JTg9PbMNyHfR4ZB3T",
  "key40": "AxEACTbtpmjr8C7ViYrGro7n1ruFZbFAAn1ZRbis2y1YCcMynm4sg7saxinz2ivS6eg6Mz91boBRvUgEFvqCKv4",
  "key41": "2NiRvN1QkkyZhXciYYakvgb5n5igX6bHAa7grg7KpB5iPXt6vByE36yAWvLGoGuuVv1VA5zwVzHhcswjgNoF3wke",
  "key42": "4krxcmoDbPa8VbyRf2XRE18bUNqxP9TySrEBdHW2nXRiPKJMkV8r3UxSLcrb9v8VhmEHGPzv39ULhZRZwPWkyVqE",
  "key43": "2751kjYNGQFX3zPeF6RbnKiSg6TK4iskwe6Nc8phpxd3fHJxD9gSnMguzJPKiAcdCbg67h3ddVFwhxYipWj6L4Zn",
  "key44": "54TVcQw7duMscN4UfVy7fTTG4veZeV2r4GiLMWECUgM3aP5XufZXEo86DC7HwjPUJMhxHTLZoQwGwfk1NY9YGn3j",
  "key45": "3nCKQBAMfC7823t1U4wD3KDGUjupxCQ9J9o6CBHpJV1tvrCNDYqE1QYKAXZbuDSQXwiBAsViUmF4qGb3vxCdpaTA",
  "key46": "43Cd4mVR9ETaQ9wmjiEYWTfBamJpXGR6Qix6uixtwuAdN4fJnP6MnJ2P5ERQVmqhpQ2WiMsE8WmAYxwfj68oVpsg",
  "key47": "cdyU2sehkDdfnPKnaLmkoTYq23iCycYUuzurFMEHJ2xJ2U7JQYrL2B4J89gSbvo5jTqhWpEc3Vh3wh9hZ2C5F2X"
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
