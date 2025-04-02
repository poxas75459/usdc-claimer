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
    "4wvUmzQsLndYivKaUVKGtpvi5dLgoncuroVnwBv3cjXcg7UzQ2tLMkW9H3sSqjbHPDvtHhQqUajEQ7MmdqW9voWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zNrCyegYt5z5ysoHLRQSkV58eu6f1Jdr6gKgJ5sTqbwnmc1vQGhydNyxgznMHzFqeVdWYemMcKjLoysc78CuDJp",
  "key1": "4afXCKSye9qBar4XLW8wWJArfZnLs649kB8Aobg85azcBJyLpZvVJDayrgPPtKaTdLPH4FeHm3fGxT5riJcJGqkR",
  "key2": "PbjxvRLFhXrmUejrnHMPMBZeWfuXRgBw9mbJsPXVrffJq83qiAQDQrtU5JvVmbbkutJTcK1baYURrspT82wT1sh",
  "key3": "2Css6HvgSLjcqwywUN4QKVAfZSRxR6xeCqeASqkirPRogguaZakzR1anET526NFgeE8psG4CB2UGrXuJBDuWWCtK",
  "key4": "5UA1NDFcNYFCy25TxbxjJVwYSzxQyqkBzn9rJaRAwtwJtqQPmwvwBm8wYVSpZjwTuy5BtfZsiYuxCifhC4Dk19n4",
  "key5": "4isFWwnVt2oXcqLRSpebRDXvkSQ4NYh52s2AZ3phBhxga6M5bDM3Q3LfSAkpRqvLNKkAQRjkSqwvnwLWyKXFhvMt",
  "key6": "MLFdNDUfYbaJ1P3ktPgf1coQdgTyvkRD9B8aFF36R4sbk4qSxNp7LpoYCHX6Y39413gnG1fHDRSWLPK2zviA8uE",
  "key7": "61kySAqPXrwyFYts8w45w5vL6fy2iKLUZqMJ6B9gSzvwB4WAbxs6ZC6AYEpDPXoknWi3bxG3FcXv5vohvGBCAeZK",
  "key8": "51D4MQDSRYAhan34Xz5dCgdpG7qycpAE3DDBq9VKb4zbbSkWsSJyiZf8VVgDRuSrqTb9WGZgSbwomW3HEF9VYwVL",
  "key9": "3rNevHDCjhqg1DBLHToVXfrRMB1PQJAPA27yhUCPHo5WAyimxGUpnkUVqNNToYf48zwPrbAJJvhnPTy59RkXzefZ",
  "key10": "63CqPKjTPRXZEunEfDWCsEcoDNGPSQK2MGm5p1ZWF89tFhKVo357cyjGpKDkfEq5EypaAeD6nSum7oyxg39YfyBv",
  "key11": "46egwuefjyuxAzosV9t76a95uprKom5Sy7jKDadu4c85qhKYnjaJy1CPfoxJQr7Ty4mjd8jAvumVMDa23kxwg8e1",
  "key12": "4QRNJJTnpZDZ4bgfMzKRHJAXakCR291nt4ThrVboEqaywMNQViTN7sdEaz8vP8GreGkHrLJ37FsHcj7hwAaWbHFW",
  "key13": "5KtBb7NC68iBPZwcy75Ajctq2eC88k14gUmD7GkXdGFG3aRdvAGugij1U5XwfuX68bERjbMwTJ8hYPL7gYUe9C6f",
  "key14": "3jUK2Gsr3yzzb6bv7KsN5emts8XK4h7UT38GLV6Zeg7Fv9RTJLNwKiMMQWcjHksa1z9bvsabgXcRVKyLJDY1rgzK",
  "key15": "3RoubZh4qxc8z5ksaoXk3t1gwAkvWFUr1TrL6di83AF9mTGKthmLgnDdivEmDy1HKo2QYyqVVWB7PmwALF69KJCj",
  "key16": "3YKnknt96hCxpDoMwpATTWSct4F96nBNGJ3WouVxRScJMw1eikYRdZYFbasjLrGcM8C86qwzn18CLmAKkxaLesR3",
  "key17": "4TcLGngGwkFEoyoCVziXZ1hgkmaNkVcwDYtEsMxSwWu5WRpxzAfX6BM5Lwo34uvhtMo8WmC3KxYihPmkPjWPvEg8",
  "key18": "51Jkc1Gcocng5gFZXJGMnwYpLiCRBjymH1YFa4J7ZskS5d6E8oWfa4M7j6KyrSMMYN825oSkV4koDuSo7seCoKbk",
  "key19": "3jtvdwEFgbmo66ZdihsidMudzuTnLCz2jM5zFaMQG75AUaaHVR27Nsk3DBgt3GwBiC9gEsvA2Gy8y5Cud4Ti2Cau",
  "key20": "3MRp1d5n8388VbSg2WZwSWAYphPXSv4y5CVWEHNrXjzXqM5jNs9Q3ChsKH8YqxUkEVKnbCnCQ2BQfLf5QoHHSzgS",
  "key21": "G3xCBHFX7xthc9VE59uMNpzcdpzA2oZrreSjDaNUXGJdt6xxodsJ88xWmeZWetfuvFANbcXJrq1xQjn1XQ2hapN",
  "key22": "4Yi7Kp1uxSyHmAaJ4C1ZXv1q1nw6ZqFC7BKwWgwSX45BApwZX3J824XYXyQ1Vyqj8ZK2jREqSDWPgERuJn6oeBUK",
  "key23": "2wTZhD96HQUGcKuFV2Sggzr9NkAj1AwQhtKv13XVZxw7KtZZ6WzdVM9HVQr2nqYrucxA8Kqd5EyKVZkWrAHjwvi8",
  "key24": "5FzY28n8ShBF5kK3mCpcCyb5z2xbD9mUVreJ54eYef1C7pSfUXXmpPe6TtG1uMd4HNgMCQ8vkGEHLdFWJKF3eiZm",
  "key25": "2WAHPpnVr33qdCNL87Da7HLwZ4j1GZLDJ3gwrzVHuZKQWaZx1iAVTbmD4gzG2VaK2ZnmQj3kNTJiwGDCB46X1Aih",
  "key26": "5VPnkzAWGoB5713si419miUtGEMPWWs4yEmfV9ZvARX2H9iDRugY3anBa1mrpecGGMuEMhPQaeN9uLMv3bSKi9f3",
  "key27": "5p42d3HoYh3tpDarE8QkRuXcqWb4nydWje7mSSRvhXTeL2NgcaHw7kbZGgP5vQeUxzb6wWofwinuD2UVbeqVtk5A",
  "key28": "5YsbdxKEz5UedMyLudv2si3UM8MPm2o42gRrXiCPBTmuucoGBYw3yeWM1nTQVAF2NoDCVfa6f3phjtjFut6UhF8e",
  "key29": "4ssuwB9bMLPYjVXdM5ukBvrs2xhvSL7YnArkLC6bGksBwtX64sfTdj18fTpvoU1dyzMA839A2by2wibriF7e4NVv",
  "key30": "3JLxbbxVaNi3XiMsVimjXKGY2Fyi5sQhusrzQNA4jeaX9aTex4ZRr8uUMM5x8dpZz8VvStHXT85eYYAVqEac4LU",
  "key31": "2oedmx3sAEGqrRoMS88RnYFBgfGB4r1VmruwWuuHKLhsacaNQJsDrndjvhfMmVrHf9jkuEwFciKYNQzWRwXP4Tm7",
  "key32": "CrNh9NggLMqec4yJsVNZS3TDLWP2Rxhi9FnVy6iioWtnJfvG2AHmGy1Zqjwsq3dqQi2pYzRDfyE4XdMDGzA4kaJ",
  "key33": "2ndrj3SPEWVjb5wifGehTZuhrZjZgRKh82rucBLg4d5HapbcstP4TVtbmxWTyU4FYUw5adf3k8wpNGTWYPEP65A2",
  "key34": "wXt4UAJsHkWUWktjgGizrxPuGSqwXRerJXDZdbSjnuZ1DuwdKMmqqUQzVXmMQjKNZN2rpTsQhHuD7E6rXqY7fS8"
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
