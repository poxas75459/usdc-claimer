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
    "nFGqUjPRjpzVQAShyK4CgA4wFkLA1dfugsU1XcGxAcgERqjVF4TBDcWWv8MWGsPUXuD9v79sHxNodMLes7eFgYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5buJsko9crGbEasnQtdKishTVjWbiCBD3WioooKFu2jVSgXH4XVbWd7BWrD5T2yw39B9aQ41tcqxyw1wAr7xtPyv",
  "key1": "3fEAwcZHUeWKZy6uqa9UAtnnAUVsyHNzYHFSxjjYeCGXrbrjZMSHwUqEN6pbEXbWi7Dgm1CNdzVqBPPbss7nh6dz",
  "key2": "5jofyoUWspvknrePrTuo4gd6vAHNnSkPCNA9494LTNaXHrDm5cQ2Vn6VehgZjvTAnSL6nZxRgNZX6hVA5qpFbvC4",
  "key3": "4tBkxPpX242xkPKLR1v5sgs2J8NKqYo6mwZxguNBGxNid11vEhiSHM9JpgNrcZtCEvXGj6WbfAKsvjRGMA4VUEi5",
  "key4": "3PEb6jRaVCbU25QbGXWR62eTnrU9prAuVT7P7rv1KDgYdv3YjAFckRXyuBLaFBcSc418wZMpR6iMSu25QU7vEf3j",
  "key5": "62oyrtBXJSXHezGxYJosdSSfMPBzCiEor9GMnoiRoFdXGctNcZbDJNku2wf5Z15fgajiVDNZ3Rci2zWZWUVXesAN",
  "key6": "3wb4CTVdZ8zak6JpNxEuR95tkrZFeJrV5mzei95oW5pTPYYGkwzjR592xrDAY1988DykKCuZhd8KyywXzXhADbrU",
  "key7": "2UoCTZzaaQCa8ZSHbd2x8gZLSmWjwJxhcygMiGWF9QfY7qGrW3jWRSJfWYS1wu6pP7ujtnjVEat6SQNDjGJFVSbp",
  "key8": "mfrXg8J5F455vBPKwyH65sVVpyDaoPdTJfa1qs2ivpf8PyAdRDS2gYXjNxPYyBtQQC7LzySS53CuSeD5z4ashB4",
  "key9": "2biqVqY7P8no6pGLgjFpyFeAycPmQDPjGpfrGTL3vJQh6aG9E7yQSUgcWGUcZvCjdtcJgGhxGeTwMQvpWojpEv4z",
  "key10": "3eXMuYkZHVLzNcCnPtXQEfz9g7on3kDybwMKv78vZt9zxGjqJULgR1tVVUbFWe9EzU1MemvFcdUhyVozEaqazBWN",
  "key11": "42D1r5FYKoYKEz84oHzkXHsuj6UVai3ktwx2nPNNLHuB6v9FoYCgk4KJSRp8z28djxNDnQfb3hmVF8V2NR9Bu5z8",
  "key12": "5V69Gkqr2BrprDuNudnPhm8JkcW9SMJPZPTSYrxVy2ufeJVEC5YPyYct9fcB39i4quyFwv74htL4JHxtR4VYsbeU",
  "key13": "31pLn1nGi8q8V1Z6C4y5zHqneJhoQbGDYxd4autbEfgbt6Y5HBPHyDmwxZsstAFECZT5f56APCLYxwwa7haiXuN8",
  "key14": "2P7hyegd3dywPdCm4egQTERUUFHxW23e3VgapytFKgTywXMFTwxcqDcFhSvUNpffP48APZosfnLt1GzVxkzNceFH",
  "key15": "5LLHMgBfUmq5xCttop7wBCZ6sB1Cqo3jEmFVLQFNcGzuXGfty7TBZo51cRbkuZUrA7UafKDPz22negu9caq47bHz",
  "key16": "5z2unwC5Au7zs5GwaE55vxJdSRvKafD794FR6kEMd6Pn6BySeuqU5cT62pox8acC3XT1owwT32fv3tj4H56vPmxN",
  "key17": "2hL49FopoZebTiEh2hqosZd1ZijFDMqm7YJTHkX1Zw8L7apbnspKViGitfaAkzGHM1H5XnisK2DASRR4jvRyKzKV",
  "key18": "3ym45skCu55kKT8Kjz48jYLdjVBYQrE361raEpiMozpmvWmQ9EjgjkEwYAKn5L72bFSAt5Xp5iRu91bpZUf4yFXd",
  "key19": "2LNBSMberKcLbXcgpLLdGYUaPkvhC2vxVxtWof98sW7BYsGipQj9T4PqwA8exw2PMmSZZYFDJGcSvaGCM3d7CMoe",
  "key20": "4fhtr11Naphj1cxvmSmVcoEED2QpggJUnt12hH8VTP4XKDEnPdGzWTDCpE1RhoKRWVnFT6mnHF2jMe2sj2d8Q6AG",
  "key21": "66hZf4dJubapYrGX4eY1x1rNfsz9ZnZNL2U7s13cocJPm2AYsFXfah4oCCDbhBdSs2eYJQb9xVfmfA4ViKimCuzg",
  "key22": "3x5US7HkQgBs5XgB24oUjNjwXVMky4tubHpDww3RN3LiJkM8aAUizKPBXoMJa2PuWAp5o7VQQ8fqpKczpQfT3puV",
  "key23": "4shRBcdF6A5GaMAVywukmu3Li3rHDKEavbwEEht5GoaGNwUekDqbgsKkxGsYKQBbxM58xqFJKK2efdKUDbSq672z",
  "key24": "2qCdzQwV4FAWuQEzRytLAYJ4gbCJUo1zxBowNMSxWHmDRKS32gQZs1vrqQXgbA9ba8pErMUDGxnno4NedH2LWSSU",
  "key25": "3DiYZeGjMTS8Cd6TDsNkAvn5NqikAA5d6L51WAVnS3AAd9xnC8GbyAZr6LrwUrCUEF9HTESPrAJ231ZrigUmRQuk",
  "key26": "XNnwiaQeZ4Ni9kJmncexveo17BJMRz4Y6e1XQhUTgmPy1Xfzzqgv3MpAnXw6xJFAMtRULopLKw55NXqX6HkGJHV",
  "key27": "4aZFuAeHbpZeJ6iKsLZvA9QHc3wYpCrTirfQazEQD1avkuQqrgX8opcbXzrGUW6hk7LrrB6QgNKw9PAH4F9hNkwP",
  "key28": "2SdRU1HHmEU5rfMchYedwnBdLdkKBETd2M2GWpo9tW1BmUgpKMdgRktX8oAJVPFDRjo6FnpZ7fTFJ1NGe9sQx4NG",
  "key29": "4k12y9ReyQ1eisZx3NWb8SYuM5nzoHauJGEtUiMsn7zsjmKgWsjxvkVdTpEdTt44utsffBzRatk3AzRYQQEQ2B6h",
  "key30": "3yGXfAVZrHk4XrBytqW75i2fi4HVVmqXKQqHiAj2xEdDN1aoAWi4BzqjdwD9qKJ22GCNMXneViZ4HyQEgR2L4QwR",
  "key31": "5nnjyTtvCCdxRWHfhsC7gkgXpLFrEJtNkeq3vjLdgxapSwAzMK9isEdFbFyaX45GyyXyedtt6ut5n4LuKSECEzN7",
  "key32": "1hBXBYbgPhGRxWWi9rFHQVUM5GqTT2w9FBs8zDPB3E7rJpbmpKJhL6tWUZ6SKBd3gjutEWEH98U25S3bf2f4WVp",
  "key33": "62mQvYL658XVAfr8AngRgoraK4rZrrJ1gDTYnK7f1tmQjSjeSUEC5nWEmjiTfZhzC4SfF3uHaZPJ4BDDwsdbiGwH",
  "key34": "3Ydopj9t7gaMgjMtxmi3v9x41kb7gEqkxqZmy2RaieDbYJZNsnenXUzz4S7cFcNLcaeo3tDTWUYfHm1Vuibzsyhz",
  "key35": "4BpbhQaKqoiSodBwh7BLgMGhDqu5k9L2oDzJLptaYpSJdHX3fG5gLGj9asm422RywTeNyCbe5tDDraXibUzi4S7Z",
  "key36": "3VcVLCSxagK88daTLHsH4kJHDLzFjnZfknkZvCyAJ2DEoVQHfdHKavoxsKpiP918TKShRFYhcSyesoPJmZkcWzGD",
  "key37": "V5Q2EVCw9wwgTBwkc66grFJgNVfCiyimXPtCNFTnBf6yCcRNf5jumT7M9FdRYfPfCrWj4uscDpX2D56U713yGKM",
  "key38": "4xje6LjUyVN77m8moQtn2jarjD7Z7oQhX4miznVVDxy2WA8xvSWLR7NmPbTwAZ7grG5Pitdu71jjoHwvhjZDd6Jh",
  "key39": "3jAiwJGnoigFyjrmJSi7HznwXZVuqdU6iS1b2TfirrpLHGFFBYRdHGJmXuoikrMJDa7rvWXTvrtkrXtpksLuqBLG",
  "key40": "4YSx7wnBEiAPcm57Ym5bJPMkz3UBiTbYWxt7eXJFUWSCxrFZCbHpiTrrgQGbMzLdrDgQcPzyugcqZdSwTq83M2ax",
  "key41": "3fBVsdsEGDGY2TbpasApQipPrMpvRXwW1Aq4ZdizDhMem6JSsfDeSvp6RtVSK6fxwiLEztniGaawwzh3eiv41qqX",
  "key42": "5xFn5zDBpJszYV986VXrRbbLBSMhmDqcHTqVwvQxSiBh5HfRTrwVnPTDVmNzaDhTNoG119XZVjUsXBVZ1zx74v18",
  "key43": "4qZriQg7nf3E9PHsu6tVLBoYBAcThdC2MziytrkhVXESWDvVEdsSBUBQgCBq4oshWB42ntmR5qwCXrXYYNzkd7xQ"
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
