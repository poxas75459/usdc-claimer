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
    "2NTGT5tVhksJ287wwCG9Bgm86bcdQBH6GGrS2nDJvmWSmqhMh3x4NsEep3qo1BUCzbtxc8EkVRNKmVfbNCBjq2C4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j2nDbwgkoGcYjrjc6JhDgFUVgkiwqKpBGSRFtJMu5EEv7YGcosr99JJn3pM1eDuc68Gq9kRa98y3KG6scoiWMnA",
  "key1": "2jPcDFLiVaeHEtvQtYXLMk6yS5o1c2hXN6NFcC6PRZr5UHQN6VSkg5dGUMyjDxgP3zV8LzbaG5r1DRSTE2R3vySf",
  "key2": "42r4Ku9CZ4gx5tCyfhxQH25ygJYEaYADaNSAq7Borxmr5Pi7L826QL7GBwdp1qTFPpSgev4ZpB7rKVwxAL5BXid5",
  "key3": "4p6mKtFiUJynEBT3UiYj15L218KYfC6Bfan5uUMAiY5ZJVcW21XVUpvZ5ipSsTGdb8oujndMbAWRBwRp4a6pfh6i",
  "key4": "nuJe7FoFjbBXg9U2JUyrnBfkPVRuJWNT6AnniwQPQxrNG9SVbZ8gXKbzDn9kKTgsAMMBzYugockXnTEdxvJZre2",
  "key5": "3odFm1jDXbxoJw9C8gV65MN1iXYkmaXA9xK4ZhQNcnSAFQqW3qQQk2jx4zLGey385Gxbzo9N3zxnioEjfPA426kx",
  "key6": "4UFUYkwFuZKLiu4AGrecKeNiLPTRNbutgDGdpSKbpJibmFjSNnCuVFqgGd8X7gN37tozkbjGxziB7gztepgks7GP",
  "key7": "4KQSxxDCWw9vu5LGqae2mX6VX9biwFzDaiXzMEvFjoTjct723wG6EdGEMncZu79WpTeUzoVuGxuwATA11PnXk6Jo",
  "key8": "fxrqhSBWLsabG69Yxsbs5GmXbbMSeLAyGV83pnUgfFetkEez76mub4vtN4cKyWabq9hYcmapWUuzYHxzJAxJAgB",
  "key9": "4d8BwHJr2j3ZZycf6e54D5cB5V55HgfHq9gXdE513koHyct76ucgb7PpBTznzA4itHZC3aS11tu2oSXiga2vSmUj",
  "key10": "4gmbVF81xjow9veBoMzg7SHv87uMjjYvetwhjm8pgFRRKpzSmewwP9HYD4B42XeN47AmzKEfVPdyzP6X7P68Mw2G",
  "key11": "RQKiAY3NxpYRhMRKG2zwTSG7CuJBuXZUXWM9UCgVom5XJp96dZAd59wfZJJXStNgYmJ9qd2X9Ko8ScHhqoFZ1ZB",
  "key12": "tq381mTuQjrBiDjBAecmkjv8iys7Nf5GjSdJBzAsKZaz5zgX6QpwM5oRZLnpLpp6Q7A5GabxHvSCxYewdojwh7G",
  "key13": "3zphRrsrhxno74s1FggRsRvSF6jrcyiAn12Y5QhKnfDsCo51gT3qsEfKdzyHoW3PyEgndX3fm5Fc4sqEPzFGVmCP",
  "key14": "2RmTWy9gJP5vAhBqq1b4oiozjbg6ppLhShZKmNrXSQm5Z7UQhMde6guZ1ic26aan5ZUygTf4xwRfkS5rouWhuMn9",
  "key15": "baDaAdNwnL1SAoPHLUrqvwckVJj6ytJjyZGbEsaZNwYPF9KGg7SGsT4kRD2fwRDwfCN8BXMKgaUEj68dEdoY1Ai",
  "key16": "8ULXqMxw6rhsy6yz72LpwRopE7umLHWLh3WsnkgNhHcr2bWDxyt1CHLpjhcPMytzZ3ig43MnNTGFXAKkPGCDoiS",
  "key17": "58RLuHRQSFdDgXPMrCUXjDP4feQa65ViGU7mrfb4eaien8jrwMVs7MGa78Xkr1WEfUqjYA5cGUKocRRsEv1pUojn",
  "key18": "5WXRV4psUTA1snogHaGg4YykRJkPoCcBrN9jXhZqzrSGVzGK4emnaK1yMojcuhxCidQPz7f7kWvo5Ur3MdbqiGHq",
  "key19": "53iDWWzxg3xUJXbtAwpsSNpgmgwU6LUZTucyrgSAnNiL5R1qrLAwgzKB9ReRF5N3x9s5jBMCsv2fYoddBXnXvPMT",
  "key20": "4kWamBXEJCZsUrnHvWjpYo3x7TiycenKxednN6y7w8L7b3TYzureuychTCLZ2FMbm1T5K38Mi6KvedmS7K3C1W74",
  "key21": "4yXg6LgDJKGGWbBiMmNo5EMFTfU5aYPWgmxosqodyPdqsQVLYktuqedP3KVUf1nQw5nzq4r1LTzUimuQTox9qJmC",
  "key22": "5sd3DrJN8Vk1U1Zh1mQJCzTfnzzztcBghGcjWXnr8e356SEuodpakuP7bXJcCdEQNu127SH4ovdzoTVzLvg4aHPv",
  "key23": "3hgRzEeVgXzvFpPp5so9cwfLVvDsJHf8qNtsvRqyskgkSJcAAEtJa8ZynuLQYKnYzEKQRnC93u8mVqHh2jnZgjNv",
  "key24": "3M78zZjbFz2RSrsu1PEhxbCdF4rWkqv3vYt4YojBTbHH22VRi7XcVRnDDNBPrPfuer9n7HnPf8xUgrxN8Kds8v6Q",
  "key25": "3gj7mbK96uhCLCPwMhcnQ3MC7FUNVzvW2UkB7gafNukt8N7Hss83MuYA76Hqv9ze2bZeiMfJnfprBfemCGXjK7oE",
  "key26": "3dJkXWfRqqGqNYzGQGydLi26AryKXvutEaki5XWTfdzrtjki7U69CeQa2fm5BJhyfwtLArHtpgvYghE7eRWQuPoD",
  "key27": "1GJCfXPoogMvdTGjkAg6QaQcB3Pk4ZoKc5XBVSPXD7HynX8KV2Jgpey8ZT7CPW7Fg4yZcEGzQ6qoXSmvqT77cyT",
  "key28": "2vuW79rBiHNVzEuQbUqiwD7SaLnw31zFdCM2K3uy1g7bQcTE7MxtV8d8udQ96REspCe15hkr5UivC8TPdVnvAe8Y",
  "key29": "z5bHWRDeGVda7nneyTZYZiKjdAkz3ZegPbApjTy3x995A8u9BZoTRVySPraX294DDZkrJj8WVYx1v1G3o6xh5wo",
  "key30": "27fZdcCsPn8KBJ15QvwjkVN9k3EsBW5ktZguPdYr7qXn7pbMrs3W3C6NT5yDhppTwcm6SEtP3HHHFJvdZZbjwQ3w",
  "key31": "2zHwvbYu9e1qoHzpCXJDs3NL8PKtRTAygejtFDgWT1aDzjDTUEaaVZKWmTajjLTVy4eGezNd7PKvH9rfHPQxja8c",
  "key32": "2ktmz7ryPTx5kHejjthWQjVKiM4qeNAUKuw4bQzsT8RDdfgCyJvPudY1y959vvnWHYQC7rdLVMq4yH44y66kdzDM",
  "key33": "3cvrg8NAS1eGeGbwcKkTE2LNgMjQ6iQwvDtbE1sTTWEGPLeYvm45f1mcw2JrtwRattpbaVmPoCP7a7VZz5wXuwX2",
  "key34": "4NdWA6aDH5ESQVd33e3AE7eamWQMeY2Gu9J5esujAC5JFt2y4WXckZZV5Zw23w3zLCVpKMtMzzZLgrhWP1JmJJuC",
  "key35": "486azNZYSCqVGWuWf6xXR5GE3G3CtJM6NHeUZ7FEvShEL8cFVqqxcCwS71pW8oghNEyENDSYh5CoCfoJ7dZWwjuW",
  "key36": "5EGoLhDHdxpZH7GSsVZzsduKuSxytMwadB8rNXbPNwKUy2SsE4AnDM2UiLujpZBaTo1sCswUtHCsBFif6BfpFgD",
  "key37": "21w4XG8dVtADU4AdieHtYAtobAMH8RMyYgMwECEnvZDLDbgacsHRXYTkx8YVTysHrvyC1UabfXudKHS86Mi24hfx",
  "key38": "4FiycTdiUtATodrvidc6FjEWpSzarbTEGjpfWPB12cGWRu41aj4mDsgp1RAni17VUgU7yWFgXwDx5F7SYmZfonAR",
  "key39": "2xyo6fDXdED1a4qSDB1wx4cKqDd1MntQkpvxoxRMzHgipE4BuGFzRayoqPKvnuR24XersLJoyZWzMJwd7EoqzqmG",
  "key40": "2ne7FxYwX44aSQiFzKh5nM431eQVpTuvChDrVAFdZD1mnbARGixNJVTxAuecQmXMwXX41MqT7bKfsWM7qym1u7Qd",
  "key41": "324LB1ZNzhQiWmSJeGwVjqdroXSFg2uLaTfhNQuYrLTosUoWe1XYu64DF87HSMjZPr7BYve1pupQwHJ9AUQ8k2oE",
  "key42": "WRPrin4pxia3ExKAHq44DKqcRZ4Sc1KopyngDeekPJu4N1mgdn54BKM6uNTMLL14F1KZCtrutCVZQikc4Z6SQGY",
  "key43": "JLQtnFGqLyFuNvZYgAq4RuTrqwrx7AeMUCLCLYhrhtVnGHDaZ2hLev4mxMSiB64xgKst7QY28hSGU2EQGJa2oXy",
  "key44": "so4Gu6PKxqVmmxh6Cggvpd4LfG1qpadgVCAKWc3cHBdWQgABXZxVcrhvUYAJEpL5eXphqMmUA1fMr8ARJdFoZSk",
  "key45": "2szawWRn2fUGMVkns7SUZpUhyEGZ3KuYQb2WdHQysF9BHPMXN6Av5qUWyD3j2cFWvAYRDYXo5m6dBvuq6M1eXRda",
  "key46": "4yUVoUUTJeNUP5n2EjbX95F21yXcyrjS4PPTSnB43ez4f2qB5GV8nk9bt95zsArZcCfetj42hcptDsfvBaY3U84n",
  "key47": "3FS2taWtead5iPitq2T3RBRb8qS5QQRfTXp2YLE1QBR2gZL8rWyBg72zvitG5qEyPN8pdGGZoZvA3YWmPmJfKBkk",
  "key48": "5L6GNUvX4QP7ewoWmTRNSS4VLFbDdNNG5GPvGJUZyy1Fpsneu4bCPtkjt64SnNPnQEsMVVdLfxuJuzokyuAi98uw",
  "key49": "4h76sJxpRnQkrQzRRqSx68H1DV6TbF9xWYNZD8UyCSkkNQ5qHgmZdAWND6dGT1bv4Gn4w37uTwhLF2bJzCGBpndq"
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
