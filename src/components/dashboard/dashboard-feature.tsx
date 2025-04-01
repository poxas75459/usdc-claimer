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
    "5fEYiq4TPR1UkDzcrKnXiy7NLK6qfBYjdWWssa7tXHFyZ1zhRrZovqcyv3qFpXktjWxryjS6hxq1SPcVjEBbfWHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P1gSGkadYZdKZzNBfUBFfDzKEbZfQtPwymXeHYJamXPEU1GfxP1BsBMFU1cu9ELdLoyYPykjTa3EFXHaX5wvRNM",
  "key1": "r3ZTg2HN1sZ4vbQqTbn8A2RYnuonhe7nxHLYrn8vtfmF43HPzjY5P3hX2KP4A3bBGZA7Ldy9uYVLCqLTwaNsGBm",
  "key2": "3ZkjkN3kNrHwHXF4tfzpeQYSa73GcQiNN8yPBC865PTPB4KNYds3JCCfVjzPqDijiFjGiE2HJyjpe1N1ea1u2cJB",
  "key3": "5jBdHX1YCUxhedkGJAUAa4XaxsyEKVHdL9NreHgBv4XQJRYKj8Yt4TZRgsNF6dLHMJjziEJUUajrqKj6PProZcaw",
  "key4": "zm1ZjnuyAANqpTxbPZmFfTFvDFR6joToZSztiuvgnFiSf1LPQH2YLRgyWvxXpV3WARjc1bLj9ZnMJMbLwu3MxiM",
  "key5": "2pnsSzvLei56JFF8GXtxUR12fUjwnqTP5BFfNwyXZfLZntTDbegcS6pxzpuFxYPYd1RaKTGYW2UnoAACgwFGpHaW",
  "key6": "4yQJUJ85B9E9thtjAzCNsHXn2jJJ5dtNU9S6M589F8RAchFXwvbTP3uA3LYELnNinLaTqpUuprnySjjHAvUVdR5k",
  "key7": "2vuvqr6h6mZaeWXrNHtWSz6MfeVG4sSzM45U572VfDzWdpkHE6rZokLLpVEBmbaLu2nA5WABY3UVm1Q8QNofUkz9",
  "key8": "2mB2Q4wmkL4C14etrY9ocgHJEQjX6upaDgvUE2SF27CUUX7atDJyvWaQaY3zMve5DMFAYjVrb97jGw9N6gWBpMnv",
  "key9": "4sUoUqS8J3qdteKjMDqioBfY2674r2ptnCRQZ7HcQRC4jHK6TktcgM5P9pDBMsM8NnurwjFj88JbjzoRxKy8VkyM",
  "key10": "4DkC2sQXTHub4rqY8cqjkNZP3g4VLSjevmPrEgqF817UHXJX8sMnQooV7A9AT96fMQWE3Q6rsVxn2atbEtqFk3cb",
  "key11": "5BWJ5H2XhvfTJadPFJ4J1RxRUyYQAQp9KGkF7KijqE591J1ujs3uXes37CEyWvBSZGsCZ6XvjZRQo96C5TF3kLRP",
  "key12": "2eByBooQCvJmCBzCKmKkGH52eNVHt1J4ZC7wZfe5zGaShX4SY497d2f55iEtznS6tkTEo9EQiSCAqFDiF7NrhvQN",
  "key13": "3tMrCrrNhMMAK9NfwR6wEagUn683Cbiy8ZvzgcjGGzZoFpBeMW9ZAKDQ9mtQS6DgPMQTfR8Ud9eKSKCbUKt89pog",
  "key14": "52KwXXTKUxgB9HW2FhWeYtyKDo2q4FbmCpX9Y7uQWc7pB8WjFdyw6swnSQcQ5DhzMwgmkxDriDiZTjf7DFZKM5rp",
  "key15": "CJwx4sbPrNV8AQfyet61r4RHhkJj6rBEFV11K563LJSoFY1rZht9o6RKZEYt4V7MNXeK1vtPcy34b8tKS2nx1XP",
  "key16": "5xcgchXqK4TtaeK1rBEejiDK41tqpp6YFF8rRtnG7H8RDA1MeSz5gNF1idjAHfscRs8tiXygWx6qYYNgaKpGerui",
  "key17": "Yr8LgbW8yWodKJWfHz6onmDX5Kn9BaX3YYoS1cQjrG7Cdz7TMrmWg8P7cMe33A6FPe9umMt9B4XBtaegTi4LwvZ",
  "key18": "5p7MSJMUYaaiW7XqbWXFPUGUGA8bgmqJRyQeRqAbemzqVAnibuNtowDnBN8GZUsUgtSotgHLerjXyMnjruuPhhdv",
  "key19": "4goM46DdHfqSiVS8SyfwiFJvPdYG6HE7fvT6E6RiQkbcHgGK4fxQkGyozsyTJpb17BP96i63fgfsybbFNZ4Y8WSc",
  "key20": "3UYJCDvnaRkBLUpEdDakVAqitR4PxZQ5En45jydDQmFUoE57YsGyBQ3EdFvN1rpdUiyeKE27rxVz1MPQGsRApqsp",
  "key21": "4Cxog9am5M64ZfJ2m9AN6ZVvgiXw9PR5n2Hp61v3ThXMB5Hg94J8NxzmwrQvcrLDkqaGCYQEtQQ11GftCQE5QpTM",
  "key22": "52GLNbtmhwVKiM14FdQnJRXkNxTA1BzHgLGAzieyoBwSgxHwdQ65Bas36jBJaxsZxksgcBCTbh4aUdJ9jWavB14K",
  "key23": "xobhrh4VBhSs9xJQ7iT5Faen4e39CwxeSthPaBziw7d4SdAojFStMDPde6CprtXvLT78QAxjQiyyFAEM9WoJLcH",
  "key24": "51axm72X9v9GDVrFHnjrxRJ62EDoKjZSJdk6fEZ4fd8Ar7k9gea5LPn6eQjQKifkMs9PRAiBWTQRvuXs8otarqu",
  "key25": "Qup7Q4gdtbq4Nk66r4dasAvVtB7ydKSc12Nh9LeprcwiezaZjT1BncCkDq6LNKsPHbS38bNYax32sZUi6wd6BXA",
  "key26": "5jMxU1VZrMksGH2Yxpj3d8pPLdjUwVctj6StUjns2USk1JBTvuveojj2hxy8dpK6Ga4wpUgywKdmXpURHLTD77ck",
  "key27": "MsRyofKf6VV17n8UpGoSKDscyFuS6qtq2HGuhJiaH8prBqrgSEsVDFDotoXrecHZQjUta828NHzLsbb194ojccd",
  "key28": "4iRtdhjowFzZFdyusf7ZxDvR6eigvMNF8NccVn5nXUdCQpDsjyF2hbfKh5waiiDKt7uT3RHKYzw5amVaHvP8uKbY",
  "key29": "2C8pM811SB1YxSQvKcTgQYTXXgaQRWqsrMTVxhHZbczYyhGBvGrcuFW2195bUuZoSfofBu6oh53PfLb8opXNGhPZ",
  "key30": "5wwV2SDw19tPQErL1qMGsbFyyn3ivuZp3qTWa9Hs6jaEDtT4P6h5yv4tnhordgYKepivdudUS9mtyxrjag8azz5b",
  "key31": "3hEn3mvgTtpZxacXm4m3BdrnzMESSVGrFWmGfTCZ3XAcKYKGgjv44vfi81AhqpGFEuSRQ8RPb6LR3jKxQ2Ukv4Lr",
  "key32": "3vrRYtnhmGmEgrGhA5pEfPQW7CDQtCLgzXzDZD25gwN7pkkU8kzXTdz6NmKV3NMmjVfvBSUUTmuvET4JNeiTRVWE",
  "key33": "4CUH2Batm6jTwcceuCu7pqv5DnnciHcmf8vf9qy7jVqco8iz2cTDWTL28ap1XtRyZH9zYUhD8xeTB4yDGPBJW27D",
  "key34": "4n8ZemKQGBMFCGtZwGwAtGKcHR5JPa4QaEgEBewTM6NLCacZEQTsC8bvdut8Y8ad1JSszFpmYkggdhzm1bEdQq3c",
  "key35": "2G4Lr5iKS6Q4Vqr8cZAskavrHsTBmp8JEp7EwkddLWjqoHrT726dFE2DCm7x3nBbpSurmKGom6CYjibr9wnv1Qgm",
  "key36": "3oND1W8LeWrL5ebKs1SCu2axguafWNeK8vdVJkmT8VA2FDzwW5fBz8U2cmZeKofCv3mqWKwdqP5aBV4xv1kTEeZr",
  "key37": "3LvWuQQkG4BHuYCm5SJ8Wb9aLHj77FHPBGDyHYyUSo9bdQtKLUe81H3WenySG2k5cHqvDqmCBcBkKVYbmJBJw6rv",
  "key38": "5aFh8jnGqpLBLGe3zHY17g4jLc9pKsDLr9WngiFpTfTiN3AkkieP2JzuDjCozJM4wV5Su6dSjiEo6c3QcPZwn7oe",
  "key39": "5vSjL6mWqRLQCt7JwFP5bw2rHfKRsm5Dic3zH4C4rJh7RV4CJFGzpT1NoUVrR5ZgDromP75TwJXe8Qu7sDjoGWTz",
  "key40": "5bw8KnZ2roZ5gdjHDfnUmXKH8V4xzTUknCugPhmFpXk8tEH71tt3qbVa7GoPE2vqmtWggSpfTUcfuko3Ebi3Ss72",
  "key41": "5PiV7NUeFww3WnasMfi7PYA6XJTV2hWgVeWX5oRvS6KbrExXuY7ZHFqkKeoCsCLNMwbMwJmXP5PFwMvgVAvkmkAr",
  "key42": "2qQDPvLtudD4VrZ7J1Y4zghB5vKFGF9SQ8N4BDR7YQXBVi5jLE1rzkL4TwYYx81TbQjAEVzqDpCVNS4VwmNR3yPg"
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
