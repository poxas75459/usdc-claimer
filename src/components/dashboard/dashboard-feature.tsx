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
    "2qEpppW2VkunqyUAw5kg76f8UN9YzACFx4R3aguGpmqcZGf2u4p8gQQTHXj4CUNTyANGRyQLpZ3KE1YmCoS2aNqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hhC5njdFYVfbPEGn3f5agCzLyLVvFxQvMH6HBH2S8fycryBzQUNwzunEwd8uBSnzxExUGpUpQXqCVvRGF8gkbD7",
  "key1": "28PFmmhCHMBZmBjmXoowao9rH81CtnF3RpYUxH8mmtzKUKMqTGpoXkaRzfcPF2GuFzVY7bwDSsU2FBvw9vCGDbiB",
  "key2": "5NZfu6F7YayiiY5joVi7heh9uncttR5zWDSPXQhNSouFpykxsr83Ye4onf5y5Twzn6oLuaPokvc7qzTkSkuuipr6",
  "key3": "3yuFCfgp7YXNFjZEJ1q3aG2AvL9ANPq1XzAQqvQahNFKpqLT8TDGEsvmzjFgSx3oY6eeLRX6nHkZuvKwVaD9HtDb",
  "key4": "4eHbNDpSfKcMuqNUELQXLtUufXzMVEgVeprvsoTpto4bVMKt5URzF2h7Hid3xfGCwBhR7DZCoirGfqLu7QMA6Zq6",
  "key5": "b92fwxraE1iVisYxYUvNMpE9xGf7PWhhztXKegBdWrz6TGpgXT3NZPmaBYtM4c5TZsLh6pD1Fhqv93ughZa7wyQ",
  "key6": "2MQyucPU3W5vAKL9vM2ddWBUGf6P8JvgusEgoMFNU1Gr3WaT6k275dpuS5fK91anMUqYXjGLDmVgmzmmzj3hstsd",
  "key7": "jAomUH5i2sn9rYAWZ6XwZvNy5DHfDkBWS9jVLepsiRk8N2ibFb5PVhgzSHHbugoxrZLQgJzfFc4saJrKb1HJyRG",
  "key8": "5dPR83gJF5YLSqAWaTreFfcWAkabngfY9pFVhpCaZUc6arTP3C2dXz3XhCoHK42GyXWUUAkgLswFf3tDgqDVpqvt",
  "key9": "3i6zPJsjtLR9hQxLDmMhHyF8fMDCPGz5cHMtxB6jWNCCFH7zvHJT75FhrQMJBJUPLBZaUSF2MG6DrQGbRzaQgZUg",
  "key10": "3ZsvXor8FnsqEYdcuhJontAMsvuDJ3k15MbqpeegRXt6Rz6zJQCgcvWaLqxWRN9irS6W4Eyywp594uXSWKHQfJ24",
  "key11": "66qjD2oeMnHo7km9qqzRn2AKt3eM5FdEyPXFSNDJNg1spt1BFkPU6zhUMwtDzBQhhRc2pbgpGuEjzcge5HTmyGEp",
  "key12": "3VdSKQEWtWh9aPha7iqRXUvEmvkzny7mJtZkdeYahGkb19k9NUPwMUyZ72jT3Dgyg2w12HQ59um4mehF65N3nuNw",
  "key13": "4GahaXuG3JcJA2ZU5x31eaHAwaCg2b2zCTyEfCJQQXwrFEAzBxQcdgH3NRriqFemWMJXwChL2Bj1GUvMgAF6X2Bv",
  "key14": "2A9zQVRunwQiogXae1nQpEJvrt494D6vx9NHZJgMPaAqsxDUK2PR5t5vqMYqvtVP9jToXssUaUC2e6AbLttvXmJv",
  "key15": "5SS2N961qdRngXSZjMyPT6nW61o6NXZNgoYZyHB6KPTkBkdPjHVm5Dk2553PRLLd9GUHJzK7hHtWGcNma75AovEm",
  "key16": "5L6q6CYsFyhGaGnKmtfFHzFSij8opCoL6urgL5d4RqNwD7qRHqKVL4A7ghNkcaZvwMNtWe9itk2Qg9y31HY8H8vT",
  "key17": "m3BDXGe614FxjYfqqSt3UV69g57PJmRZ5YvYHTkXGU7kHy536jrUFCo8gsQ7vnRkdBSq4eY2KuLsXVYBBMt9eq9",
  "key18": "3BbhvT5h8EAj9kUua7gvfe5cDRQXWzLsWNGzxkXsjaB8VeRt2c1KefWua92tvxmD5ML1HXYt3FHfCYvPwLUabB6",
  "key19": "53CnEDta3tRFHVx3q3jfD7zoVKHwaAdV93czLcdChc4eFGMeiKwhJ3cg7hzjExgcFgpAcmMf7xDVPrQKHVjLpaGo",
  "key20": "5C8CytwTvomLG3EKZBKjCqecowABaj5aHFxTjmjkPL1qDnfnkymwSw1eTrcrmpydJ3oXNypgwWAotRVf4c9WYBwo",
  "key21": "2D2psmhU8NGhKpYBmV3fn1CxxMHnWwiKMEk3iE14aUQ1p1UDpf162TYx4nSzZk8knQ12wyd1sSvnfXYv5f9csQWK",
  "key22": "4zj2oeRKB9E2Us9H1SjjRdxddv391fCp2nQXZPTZh8c73jw2xhir3MMjHfcb1pYqVaZX89xEj5jK9V1S5Z4wwJTr",
  "key23": "3L6bHnuVi9dvwQZsQXmuPnUXKBXj9jYGBD8LkB23ei9uzaHcCSD4deBBhBSa3asCbc2ixyM1qQZzsoM7qSUHgF7T",
  "key24": "ZZpBwfw4d3AG5sBcKbNSJKGKcJjDVG7FiFHCdgSWo1bFL2P4GH3kgP3hrvhJwS5PhempJUyvcS5egiNC8FpPTHA",
  "key25": "5LQGN1SwtXmzNTrZWojP8bHcXx3M8JQCXNFQVKPJyCkv95XLK6EGft6QjPiB9gcrN2UbVNwrhYEYkLGziJQRJJGN",
  "key26": "3eJfjeGgzA7WzY2fBvaj9YywdHDxYNRTsdDc1sW4uFqSSrZd4JiXiQceSD584Y69j8V29rbN3dPU9HiXLFTEXKeH",
  "key27": "TYXEVkcckEmhFftb6CUpXSzw53FwBCgpaXSJTNtpC7GDhkWcNWuiGoikp8swfzENRPLCsKSYnufqNbDx3TDzoQw",
  "key28": "zajEC8kTfvDpHwVb1SaBCbtBQBnMsWQb1K9UpzGnPRnZ3q2pyYLqoVocmTHVsG87KKhx8LjVFznDKTYTZKjmWMh",
  "key29": "46tGeHW77j332WGdqkCEAXm35tSTBx7wjags1pCnirkvHTcDdiP1a3CCG4t3YsGfmksmvhT2xnEgEkc4r3r3zxLK",
  "key30": "4xWsGmzgf9Ku2Phtc2BEtpa9hj3wam53qRHVDuGr1S9B75pjqGZX3SCBeoWUdtfPNbmowNftaAgsCyZuEWTkjSmA",
  "key31": "L2NBYuQDmgZbSRLo5EnpcEz8wodh8JS1j8MTXJWzPg211fkuxQpzaWzeZyxNZAB8KpS7WYHfVybWcLpxt2uxkDQ",
  "key32": "34djiDTYk1cpsMNt52VRTMJGBkAR1dUbUmh98YqoMRjsSWVidK2MsU67GDCkxawrbUZSiNjC7KcxHQAYtCd5hZiq",
  "key33": "5eCrwFdB5F3SoEYcVPhSjiTYbJs329hP7XjqsiYhNuFS2AUp31JkLfwH98MZ3zdwqXNtXu8zz2pv6L776Eu7wHuu",
  "key34": "4oAZo95uRjYSTUnvMSWQ5e7KWYxHgR1uVdjBvWagUq7tsAQxcNqUcmAZr5hWaCVwjLaAM84RGh3jcAAMmKfzFCgW",
  "key35": "4fvV9hJEQo9YKSZpPhqhcMTzcsvPagQvzByrUJ6ZNe6fWBWq3mhbhQ3t39HGSYSZtHRsLmwQ87uCbFrbbujkSNKr",
  "key36": "59trhx9DKdoCWPHESWUaErvxB51UV2VPiHDyHkf51X6dxDErGWV4FXZB9EaNW6RvSiFbtVoSSSBFfTyLeBAkV63W",
  "key37": "1rZof1JaV6gnFZ1XHVu28nh3Wju39FQ1BDyLVeNFTM1ntRwZrkr4AXtRTzgRcKMftErK9P78oB3g6oRA27P58TB",
  "key38": "5LPS695ZzAS3dg8eS3GaNjPpeVgeSCM61DgaPWZyDF9NHKzTfiDF3awiEeQCRhTgHZLgwrGk1ERYYeBo3cri2zdT",
  "key39": "4weDsSE7rDDrk2Ee1NyfamsE9pAoU4TJDgGFvf22prUA7uhUm6gJesD9eESbvbTHg91p9ZAUWLQdyMQQV6pZoc8y",
  "key40": "3bboombRSTekfQ4yzyhHtbutQ4yAkjTZxrmJjELRfvNi64i6eRqhhrJtucwvS6WcvxC6bkuqdYsfZ8JL3Z1s9Wmk",
  "key41": "2um61aS1Pb4zow9ApYrnYcBhanXGvDC6Qt2C61hjmdfjATWPQnHhuqc9Cprgc1Yenvk3gsgzLpmfNqHHt46VvpN8"
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
